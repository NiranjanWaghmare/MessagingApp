module.exports = (app) => {
    const user = require('../controllers/app.controller');
  console.log(user)
    app.post('/user/register', user.register); 
    app.post('/user/login', user.login); 
    app.get('/', user.findAll); 
    app.get('/user/checkUser/:email', user.checkUser);
    app.post('/user/addContact', user.addContact);
    // app.put('/user/:id', user.update); 
    // app.delete('/api/employee/:id', user.delete); 
    // app.delete('/api/employee', user.deleteAll); 
  };
  
