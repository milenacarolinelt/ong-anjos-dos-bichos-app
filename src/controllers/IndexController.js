class IndexController {
  checkHealthStatus(req, res) {
    let health = {
      status: 'UP',
    };
    res.status(200).send(health);
  }

  async create(req, res) {
    return res.render('index', {
    });
  }
}

module.exports = new IndexController();