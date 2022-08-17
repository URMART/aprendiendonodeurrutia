///import { MongoClient } from "mongodb";
const MongoCli = require("mongodb").MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://usuarioADSI:AUK9GeNbqxtE0Lx4@clusteradsi2364481.j3yhxlp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const producto = database.collection("Products");

    // Query for a movie that has the title 'The Room'
    const query = { id: 1 };

    const options = {
      // sort matched documents in descending order by rating
      sort: { "category": 1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, title: 1, price: 1,description:1 },
    };

    const product = await producto.findOne(query, options);

    // since this method returns the matched document, not a cursor, print it directly
    console.log(product);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
