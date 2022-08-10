var axios = require('axios');
var data = JSON.stringify({
    "collection": "Products",
    "database": "FakeStore",
    "dataSource": "ClusterADSI2364481",
    "document": {"nombre":"juan","apellido":"martinez","price":10},
    
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-lvnqb/endpoint/data/v1/action/insertOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'F1pb9L6fwd0Ws6f1DVJLmb6MZZuYVOCIPZU7H1RhIsvCZYuovLZwMy3Afa4hn2DS',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
