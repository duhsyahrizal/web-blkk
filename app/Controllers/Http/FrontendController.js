'use strict'

class FrontendController {
  async index({ response, view }) {
    var data = 'test'

    return view.render('home', {data : data})
  }

  async about({ view }) {
    
    return view.render('about-us')
  }

  async article({ view }) {

    return view.render('article')
  }

  async gallery({ view }) {

    return view.render('gallery')
  }

  async register({ view }) {

    return view.render('register')
  }
}

module.exports = FrontendController
