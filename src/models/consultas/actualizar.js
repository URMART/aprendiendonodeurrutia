const MongoCli = require("mongodb").MongoClient;


// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://usuarioADSI:AUK9GeNbqxtE0Lx4@clusteradsi2364481.j3yhxlp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoCli(uri);
async function run() {
  try {
    const database = client.db("FakeStore");
    const producto = database.collection("Products");
    // create a filter for a movie to update
    const filter = { id: 1 };
    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: true };
    // create a document that sets the plot of the movie
    const updateDoc = {
      $set: {
        price: 11
      },
    };
    const result = await producto.updateOne(filter, updateDoc, options);
    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);