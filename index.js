// S T E P  :  1


// express app creation
// এই লাইনটা Express package টাকে local ফাইলে নিয়ে আসে
// 🔹 যেমন তুমি লাইব্রেরি খুলে নাও → তারপর পড়ো
// 🔹 ঠিক তেমন require() দিয়ে express লাইব্রেরি open করা হচ্ছে
// Express ছাড়া তুমি server বানাতে পারবে না। Node.js এর উপর Express শুধু shortcut দেয় server বানানোর জন্য।

// const express = require("express");



// creating an express app
// 🔹 এখানে app একটা Express Application বানানো হচ্ছে
// 🔹 Express কে function হিসেবে কল করলে সে একটা server object ফেরত দেয় – সেটাই app

// const app = express()





// express app connection setup with local server 5000

// app.listen(5000, ()=>{
//     console.log("5000 server is working");
// })
/**
 * only this thing is -->>  express basic server setup. 
 * 
 * 
 * nodemon index.js 
 * ^
 * ^
 * | command in cmd will start running the local 5000 server. Localhost 5000 will send a get request and show -->> cannot GET / -->> at this point.
 * 
 *  */



//  S T E P  :  2

// express app creation
// const express = require("express");
// creating an express app
// const app = express()
// express app connection setup with local server 5000


// app.get('/',(req,res)=>{
//     res.send("Yayyyyyyy Server is running and can process get req *.*")
// })
/*
in step 2 this app.get('/') will send the get req and show the res.send in the server.....NO MORE cannot GET / 
 */

// app.listen(5000, ()=>{
//     console.log("5000 server is working");
// })






// express app creation
const express = require("express");
// middleware
const cors = require('cors')
// creating an express app
const app = express()
// express app connection setup with local server 5000


// middleware
app.use(cors())
app.use(express.json())



app.get('/',(req,res)=>{
    res.send("Yayyyyyyy Server is running and can process get req *.*")
})


app.listen(5000, ()=>{
    console.log("5000 server is working");
})
