import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const router = express.Router();

const uri = "mongodb+srv://ramondandrade_db_user:X2r6KNAjMpgaTn2p@cse341ra.zxqgfkc.mongodb.net/?retryWrites=true&w=majority&appName=cse341ra";
const clientMongo = new MongoClient(uri);

async function connectMongo() {
  try {
    await clientMongo.connect();
    // await listDatabases(clientMongo); // Uncomment if listDatabases is defined
  } catch (e) {
    console.error(e);
  }
}
connectMongo();

router.get('/', (req, res) => {
  res.send('Hello World, This is root router');
});

router.get('/home', (req, res) => {
  res.send('Hello World, This is home router');
});
 
router.get('/profile', (req, res) => {
  res.send('Hello World, This is profile router');
});
 
router.get('/login', (req, res) => {
  res.send('Hello World, This is login router');
});
 
router.get('/logout', (req, res) => {
  res.send('Hello World, This is logout router');
});
 
app.use('/', router);
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});