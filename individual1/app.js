import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

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

 
app.use('/', required('./routes')); // Adjust the path as necessary
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});