require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const health = require('./routes/health');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/health', health);

const PORT = process.env.PORT || 4000;
sequelize.authenticate()
  .then(() => console.log('DB connected'))
  .catch(err => console.error('DB error:', err))
  .finally(() => {
    app.listen(PORT, () => console.log(`API listening on :${PORT}`));
  });