const express = require('express')
const app = express()
const port = 5678;

const users = [
  {
    name: 'yuchen',
    user: '1',
  },
  {
    name: 'yuchen2',
    user: '2',
  }
];


app.use(express.json());

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('2 yuchen helped')
})


app.get('/user', (req,res)=> {
  res.json(users);
})

//nodemon
