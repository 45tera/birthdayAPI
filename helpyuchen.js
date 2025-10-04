const express = require('express')
const app = express()
const port = 5678;
const nendroidsList = require("./src/nendroids.json"); // import the list



function calculateNen(birthday) {
  var {month, day} = birthday;
  var monthNumber = convertMonthToNumber(month);

  var nenValue = (monthNumber + day);
  return nenValue
}


function convertMonthToNumber(value) {
  const monthMap = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
  };
  return monthMap[value];
}


app.use(express.json());

app.listen(port, () =>{
    console.log(`[DEBUG] Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('head over to /nendroid?month=YourBirthMonth&day=YourBirthDay to get your nendroid!')
})



app.get('/nendroid', (req,res)=> {

  var birthday = req.query;

  var nenValue = calculateNen(birthday);

  var nendroid = nendroidsList.find(item => item.id === Number(nenValue));

  res.send({ nendroid });
})
