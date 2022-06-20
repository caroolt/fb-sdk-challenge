import express = require('express');
const router = express.Router();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const adsSdk = require('facebook-nodejs-business-sdk');

import { rangeOfTime, today } from '../constants/date';
const fbGraphURL = 'https://graph.facebook.com'; // A Graph API é a principal maneira de obter dados para dentro e para fora da plataforma do Facebook. Todos os SDKs e produtos interagem com a Graph API de alguma forma;

const User = adsSdk.User;
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const AdSet = adsSdk.AdSet;
const Ad = adsSdk.Ad;

let fields;

const getAdAccount = async (user = {id: ''}) => {

	fields = [
		'account_name',
		'id',
		'name',
		'account_status',
		'amount_spent',
		'currency',
	];

	const accounts = await (new User(user.id)).getAdAccounts(fields);

	return  accounts
		.map((account: { _data: object; }) => 
			account._data
		)
		.filter((account: { account_status: number; }) => 
			account.account_status === 2
		);
};

const getAllCampaigns = async (adAccount = {id:''}) => {

	fields = [
		'campaign_id',
		'campaign_name',
		'id',
		'name',
		'status',
		'effective_status',
		'objective',
	];

	const campaigns = await (new AdAccount(adAccount.id)).getCampaigns(fields,
		rangeOfTime
	);

	return campaigns
		.map((campaign: {_data: object}) => campaign._data)
		.filter((campaign: {
			status: string,
			objective: string
}) => campaign.objective.toLowerCase() === 'link_clicks' && campaign.status.toLowerCase() === 'active');
};

const getAdSets = async (campaign = {id: ''}) => {

	fields = [
		'adset_id', 
		'adset_name',
		'id',
		'name',
		'status',
		'start_time',
		'end_time'
	];

	const adSets = await (new Campaign(campaign.id)).getAdSets(fields, rangeOfTime);
  
	return adSets
		.map((adSet: { _data: object; }) => adSet._data);
};

const getAds = async (adSet = {id: ''}, campaign = {start_time: '', stop_time: ''}) => {
	
	fields = [
		'ad_id',
		'ad_name',
		'id',
		'name',
		'status',
		'effective_status',
	];

	const ads = await (new AdSet(adSet.id)).getAds(fields, { time_rage : { since: campaign.start_time, until: campaign.stop_time || today} });

	return ads
		.map((ad: { _data: string; }) => ad._data);
};

const getInsights = async (
	campaign = {
		start_time: '',
		stop_time: ''
	},
	ad = {
		id: '',
		insights: []
	}) => { 

	fields = [
		'impressions',
		'reach',
		'conversions',
		'clicks',
		'cpc',
		'cpm',
		'cpp',
	];

	const insights = await (new Ad(ad.id)).getInsights(fields, { time_rage : { since: campaign.start_time, until: campaign.stop_time || today} });

	return insights.map((adData: { _data: string; }) => adData._data);
};

router.get('/fbData', async (req:express.Request, res:express.Response) => {
	try{
		const fbToken = req.query.fbToken;
		const api = adsSdk.FacebookAdsApi.init(fbToken);
		const showDebuggingInfo = true; // Setting this to true shows more debugging info.
		
		if (showDebuggingInfo) {
			api.setDebug(true);
		}
  
		const user = await adsSdk.FacebookAdsApi.getDefaultApi().call('GET', `${fbGraphURL}/me?access_token=${fbToken}`);

		let fbData = await getAdAccount(user);

		for (const account of fbData) {
			const campaigns = await getAllCampaigns(account);
			account.campaigns = campaigns;
        
			for (const campaign of campaigns) {
				campaign.adSets = await getAdSets(campaign);

				for (const adSet of campaign.adSets) {
					
					adSet.ads = await getAds(adSet, campaign);
				
					for (const ad of adSet.ads) {

						ad.insights = await getInsights(campaign, ad);
					}
				}
			}
		}
		
		if(!fbData.length){
			fbData = {
				// eslint-disable-next-line quotes
				message: `AdAccount's Status are not equal to 1`
			};
		}
		res.json(fbData);

	} catch(err){
		console.error(err);
	}
});

module.exports = router;