const validator = require('validator');
const pool = require("../utils/db");
const moment = require('moment');

const user = "Keshav Vijay";
const skills = ["HTML", "CSS", "JAVASCRCIPT", "React", "Wordpress", "PHP", "SASS", "Git", "Github", "Responsive Design", "SEO", "Terminal"];

// Function to verify email format
const isValidEmail = (email) => {
    return validator.isEmail(email);
};

exports.home = (req, res) => {
    res.render('index.pug', {
        user: user,
        skills: skills,
        showMessage: false,
        username : null,
        usermail : null,
        message : null
    })
};

exports.contact = async (req, res) => {
    // Retrieve form data from the request body
    const {
        username,
        usermail,
        message
    } = req.body;
    let alertMessage = "Thanks for reaching out! we will be in touch shortly";
    let alertColor = 'green';
    if (!isValidEmail(usermail)) {
        alertMessage = "please provide a correct e-mail address";
        alertColor = 'red';
    } else if (message.length < 10) {
        alertMessage = "please describe your message in detail";
        alertColor ='red';
    } else {
       await insertData(username,usermail,message);
    }
    res.render('index.pug', {
        user: user,
        skills: skills,
        showMessage: true,
        alertMessage : alertMessage,
        username : username,
        usermail : usermail,
        message : message,
        alertColor : alertColor
    })
    // Send a response back to the client
};

exports.about = (req, res) => {
    res.send("I am here");
}

const insertData =async(username,usermail,message)=>{
    pool.getConnection((err, connection) => {
        if (err) {
          console.error('Error getting connection:', err);
          return;
        }
        let formattedDate = moment().format('YYYY-MM-DD HH:mm:ss');
        let sql = `INSERT INTO maanytm.contacts (username, usermail, message, created_At) VALUES (?, ?, ?, ?)`;
        let values = [username, usermail, message, formattedDate];

        connection.query(sql,values, (err, results) => {
          connection.release(); // Release the connection back to the pool
      
          if (err) {
            console.error('Error executing query:', err);
            return;
          }
      
        //   console.log('Query results:', results);
        });
      });
};