const validator = require('validator');

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

exports.contact = (req, res) => {
    // Retrieve form data from the request body
    const {
        username,
        usermail,
        message
    } = req.body;

    // Process the form data (you can perform validation, save to a database, etc.)
    console.log("Received form data:");
    console.log("Name:", username);
    console.log("Email:", usermail);
    console.log("Message:", message);
    let alertMessage = "Thanks for reaching out! we will be in touch shortly";
    let alertColor = 'green';
    if (!isValidEmail(usermail)) {
        alertMessage = "please provide a correct e-mail address";
        alertColor = 'red';
    } else if (message.length < 10) {
        alertMessage = "please describe your message in detail";
        alertColor ='red';
    } else {
        // 
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