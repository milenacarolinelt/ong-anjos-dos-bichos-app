const express = require('express');
const router = express.Router();
const compression = require('compression');
const IndexController = require('../controllers/IndexController');
const handler = require('express-async-handler');

const app = express();

// compress all responses
app.use(compression());

/* GET HEALTH CHECK */
router.get('/status/health', IndexController.checkHealthStatus);

// acesso a rota raiz
router.get('/', handler(IndexController.create));

module.exports = router;
