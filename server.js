const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const port = process.env.PORT || 3000;
const DB = process.env.DATABASE;
mongoose
 .connect(DB)
 .then(() => {
  console.log(`DB Connection Successful..`);
 })
 .catch((err) => {
  console.log(err.message);
 });

app.listen(port, () => {
 console.log(`App listening on port ${port}`);
});
