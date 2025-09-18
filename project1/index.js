const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./models');

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
.catch((err) => {
  console.log('Cannot connect to the database!', err);
  process.exit();
});

process.on('uncaughtException', (err, origin) => {
  console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
