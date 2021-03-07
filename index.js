const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userController = require('./controllers/userController');
const errorMiddleware = require('./middlewares/error');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log( `Listening on port ${port}`);
  console.log(process.env.teste1, process.env.teste2)
});

app.get('/api/get-all', userController.getAll);

app.post('/api/get-email/', userController.getByEmail);

app.post('/api/create-email', userController.create);

// app.put('/api', (_req, res) => {});

app.delete('/api/delete-query/', userController.deleteByQuery);

app.use(errorMiddleware);

