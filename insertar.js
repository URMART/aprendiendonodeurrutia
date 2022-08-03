const MongoCli = require("mongodb").MongoClient;
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://usuarioADSI:AUK9GeNbqxtE0Lx4@clusteradsi2364481.j3yhxlp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoCli(uri);
async function run() {
  try {
    const database = client.db("FakeStore");
    const producto = database.collection("Products");
    // create a document to insert
    const doc = {
      title: "soy el nuevo",
      content: "yo se insertar",
    }
    const result = await producto.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
