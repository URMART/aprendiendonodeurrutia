const MongoCli = require("mongodb").MongoClient;
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://usuarioADSI:AUK9GeNbqxtE0Lx4@clusteradsi2364481.j3yhxlp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoCli(uri);
async function run() {
  try {
    const database = client.db("FakeStore");
    const producto = database.collection("Products");
    // Query for a movie that has title "Annie Hall"
    const query = { id: 1 };

    const result = await producto.deleteOne(query);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } finally {
    await client.close();
  }
}
run().catch(console.dir);