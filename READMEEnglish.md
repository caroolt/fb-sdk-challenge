

<h1 align="center">Facebook SDK Challenge</h1>

![issues](https://img.shields.io/github/issues/caroolt/facebookSDKChallenge?color=red) ![license](https://img.shields.io/github/license/caroolt/facebookSDKChallenge)

<!-- Image that represents what the project does -->
![Image of facebook](./img/readme.png)

## Index
  1. [Project Description](#description)
  2. [Techniques and Technologies](#technologies)
  3. [Open and run the project](#run_project)
  4. [People who helped develop the project](#developers)
  5. [Portuguese Readme](./README.md)

### Project Description
###### description
In this challenge I was to pull some data from MongoDB and Facebook API (using Node sdk or python);

I needed to pull this information:
- User data: Email, Name, Phone, Plan Name (hint: user.hormart), Plan Expiration (hint: user.hormart).
- Date of creation of the user (document) and date of the last update of the document.
- Total ACTIVE Campaigns that were created from 01/01/2021 to date (hint: Get the Date the campaign started (`start_time`) and ended (`stop_time`, if any) to then get the metrics from that range).

Facebook API Data:
- AdAccounts: Identifier, Name, Status, Total Spent, Campaigns 
- Campaigns: Identifier, Name, Status, Actions (link_clicks), Sets
- Sets: Identifier, Name, Status, Ads
- Ads: Identifier, Name, Status, 
- Insights: Impressions, Reach, Clicks, Conversions
<br>
</br>

### Techniques and Technologies
###### technologies
- Node.js
- Typescript 
- Nodemon
- Express
- MongoDB
- dotenv
- eslint

<br>
</br>
## 🛠️ Open and run the project
###### run_project
#### 1- Clone the Project

#### 2- Edit the .env.example => .env file

#### 3- Install all dependencies
   `npm install`
   
#### 4- Run the project 
   `npm run start`

#### 5- If you want to debug
`npm run debug`
 and run the debugger for nodemon together

#### 6- Step not required
   - In the insmonia folder there is a json with the methods and routes to be tested. To use them in insmonia just import the json and you are done. (works with postman and thunder client too)
   
   _Insomnia is a REST API client tool, like Postman, but has some additional features, such as GraphQL support, gRPC, and others._

## Project Developer
###### developers
| [<img src="https://avatars.githubusercontent.com/u/82682093?s=400&u=0a46c06b6a1ae04f7acf2f2162187b1a7e4d5d53&v=4" width=115><br><sub>Carolina Teixeira Coelho</sub>](https://github.com/caroolt) | 
| :---: |


