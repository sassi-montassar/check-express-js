const express = require('express');
const app = express();


app.use(logger)
   

function logger (req, res, next) {

    var hours = new Date().getHours();
    var today = new Date();
    
    var day = today.toString().split(" ")[0];
     
    var workDay =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]  ;
   

                if (workDay.includes(day)) {
                    if (9 < hours && hours < 17) {             
                      next();
                    } else {
                      res.send("Oups this hour is not in the working hours ! The web application is only available in working time (Monday to Friday,  from 9 to 17)");
                      
                      }
                      
                } else {
                      res.send("Oups this day is not a working day! The web application is only available in working time (Monday to Friday,  from 9 to 17)");
                     
                }    
    
    }

app.use(express.static('public'))

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`app running on http://localhost:${port}`)
});