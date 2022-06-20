
import express = require('express');
const router = express.Router();
import mongo from '../server/mongo';

const connectingToMongo = async () => {
	await mongo.connect();
};

router.get('/getUsers', async (req: express.Request, res: express.Response) => {
	try{
		connectingToMongo();

		const user = await mongo
			.db('audience-prod')
			.collection('users')
			.findOne({'email': process.env.EMAIL});
  
		const faceConnections = await mongo
			.db('audience-prod')
			.collection('facebookconnections')
			.findOne({user: user?._id});

		const userData = {
			email: user?.email,
			name: user?.name,
			phone: user?.phone,
			subscriptionPlan: user?.hotmart.name_subscription_plan,
			subscriptionEnd: user?.hotmart.subscription_date_next_charge,
			createdAt: user?.createdAt,
			updatedAt: user?.updatedAt,
			fbToken: faceConnections?.token,
		};
  
		res.json(userData);

	} catch(err){
		console.error(err);
	}
});

module.exports = router;