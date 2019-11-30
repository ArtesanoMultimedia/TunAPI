const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('get Usuario');
});

router.post('/', function(req, res, next) {

  let body = req.body;

  if ( body.nombre === undefined ) {
    res.status(400).json({
      ok: false,
      mensaje: 'El nombre es necesario'
    });
  } else {
    res.json({usuario: body});
  }

});

router.put('/:id', function(req, res, next) {

  let id = req.params.id;

  res.json({id});
});

router.delete('/', function(req, res, next) {
  res.json('delete Usuario');
});

module.exports = router;
