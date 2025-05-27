class PagesController {
  async home(req, res) {
    return res.render('home', {
    });
  }

  async castration(req, res) {
    return res.render('castration', {
    });
  }

  async diary(req, res) {
    return res.render('diary', {
    });
  }

  async donation(req, res) {
    return res.render('donation', {
    });
  }

  async rescue(req, res) {
    return res.render('rescue', {
    });
  }

  async search(req, res) {
    return res.render('search', {
    });
  }

  async animal(req, res) {
    return res.render('animal', {
    });
  }
}

module.exports = new PagesController();