# Book-Store-Website

This specific book store project has been meticuloulsy constructed using a full-stack development approach that integrates the MERN (MongoDB, Express.js, React.js, and Node.js) stack. It explores a number of topics and provides insightful information about related technologies, including Tailwind CSS.

### Starting Server 
I. Commands in terminal :

1. npm init -y
2. npm i nodemon express mongoose mongodb cors
3. npm run start
4. npm i cors
5. npm i axios react-icons

### Important Information
1. node -v : Gives the version of installed node.js
2. "scripts" : "start" : "node index.js", "dev" : "nodemon index.js"
3. mongoose documentation : https://mongoosejs.com/

### Details
1. Using Routers

Firstly import express from the express package and then create a file to store the functions for books, say, get, post, delete, update etc. Then at the place of app, import router from express and update router. In the index file, import the router file where in the routes are being exported. There, create a use parameter to handle the route being imported for the https request and router being exported from the route file.

2. CORS Policy 

CORS is Cross-Origin Resource Sharing is a policy which checks at security level that whether another application is allowed to receive data from the other application or not. It keeps a check on which http requests are permitted and which are not. For this we use the cors package and perform the following commands : 

import cors from 'cors'
const app = express()

#### Method 1 : 
app.use(cors());

#### Method 2 :
app.use(cors({
    origin: '',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

3. Middlewares 

The app.method() consists of async(request, response) that awaits for a request parameter and sends commands such as find, findById, findByIdAndUpdate, findByIdAndDelete etc. This is termed as middleware.

4. Installing TailWind CSS

Adding tailwind.config.js file : 

1. npm install -D tailwindcss
2. npx tailwindcss init
