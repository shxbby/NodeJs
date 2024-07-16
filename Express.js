const express = require('express')
const app = express();
app.use(express.json());

app.get('/', (request, response)=>{
  response.send("welcome to nodejs api")
});

app.get('/login/:username/password', (request, response)=>{

  const {username, password} = request.params;
  response.send("Parameterize Get Request Destructuring:"+username+"-"+password)
});

app.get('/login', (request, response)=>{

  const {username, password} = request.query;
  response.send("Parameterize Get Request Destructuring:"+username+"-"+password)
});

app.post('/login', (request, response)=>{
  let username = request.body.username;
  let password = request.body.password;

  response.send({
    "redirect":"userpanel",
    "host": "atmiyauniversity",
    "myusername":username,
    "mypassword": password
  })
});

app.listen(2000, () => {
  console.log('listening at http://localhost:2000');
});