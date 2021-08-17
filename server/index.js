require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./db');

const PORT = process.env.PORT || 4000;
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const app = express();
app.use(cors()); // Cors для всех
app.use(express.json()); // Парсить json
app.use('/song', express.static(path.join(__dirname, 'song')));
app.use(morgan('dev'));
app.use('/api', router);

app.use(errorHandler);// обработка ошибок

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    // eslint-disable-next-line no-console
    app.listen(PORT, () => console.log(`server started ${PORT}`));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

start();
