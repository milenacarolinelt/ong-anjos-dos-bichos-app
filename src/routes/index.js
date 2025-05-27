const express = require('express');
const router = express.Router();
const compression = require('compression');
const PagesController = require('../controllers/PagesController');
const handler = require('express-async-handler');

const app = express();

// compress all responses
app.use(compression());

router.get('/', handler(PagesController.home));
router.get('/parceiros-doacoes', handler(PagesController.donation));
router.get('/castracao', handler(PagesController.castration));
router.get('/agenda', handler(PagesController.diary));
router.get('/resgate', handler(PagesController.rescue));
router.get('/peludinhos', handler(PagesController.search));
router.get('/peludinhos/animal/:id', handler(PagesController.animal));

module.exports = router;
