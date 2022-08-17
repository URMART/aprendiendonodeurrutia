var axios = require('axios');
var data = JSON.stringify({
    "collection": "Products",
    "database": "FakeStore",
    "dataSource": "ClusterADSI2364481",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-lvnqb/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'qcNXWOnmqL6zpeI18ouHJ8B4qbUF6Mi5d109vt7muGLMCx7hjs0wQYKLsrvbrbK3',
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
