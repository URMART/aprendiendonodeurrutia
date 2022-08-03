///import { MongoClient } from "mongodb";
const MongoCli = require("mongodb").MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://usuarioADSI:AUK9GeNbqxtE0Lx4@clusteradsi2364481.j3yhxlp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoCli(uri);

async function run() {
  try {
    const database = client.db("FakeStore");
    const producto = database.collection("Products");

    // query for movies that have a runtime less than 15 minutes
    const query = { };

    const options = {
        // sort matched documents in descending order by rating
        sort: { "category": -1 },
        // Include only the `title` and `imdb` fields in the returned document
        projection: { _id: 0, title: 1, price: 1,description:1 },
    };

    const cursor = producto.find(query, options);

    // print a message if no documents were found
    if ((await cursor.countDocuments) === 0) {
      console.log("No documents found!");
    }

    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
