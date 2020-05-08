var express = require('express')
var router = express.Router();


//GET
//localhost:3000/clients
router.get('/', function(req, res, next) {
    res.end('Index clients');
});

//localhost:3000/clients/idClient
router.get('/:idClient', function(req, res, next) {
    res.end('View client: ' + req.params.idClient);
});
// POST
//-d"param:value" localhost:3000/clients
router.post('/', function(req, res, next) {
    body = JSON.stringify(req.body); // El objeto se pasa a json
    res.end('New client ' + body);
});
// PUT
//-d"param:value" localhost:3000/clients/idClient
router.put('/:idClient', function(req, res, next) {
    body = JSON.stringify(req.body); // El objeto se pasa a json
    res.end('Update client: ' + req.params.idClient + ' body ' + body);
});
// DELETE
//localhost:3000/clients/idClient
router.delete('/:idClient', function(req, res, next) {
    res.end(' Delete client: ' + req.params.idClient);
});


module.exports = router;