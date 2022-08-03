'use strict'
const Register = use('App/Models/Register')

class FrontendController {
  async index({ response, view }) 
  {
    var page = 'Home'

    return view.render('home', {page : page})
  }

  async about({ view }) 
  {
    var page = 'About'
    
    return view.render('about-us', {page : page})
  }

  async article({ view }) 
  {
    var page = 'Article'

    return view.render('article', {page : page})
  }

  async gallery({ view }) 
  {
    var page = 'Gallery'

    return view.render('gallery', {page : page})
  }

  async register({ view }) 
  {
    var page = 'Register'

    return view.render('register', {page : page})
  }

  async postRegister({ request, response })
  {
    var { name, nik, ttl, birthday, address, hobby, goals } = request.all()
    const register    = new Register()

    register.name     = name
    register.nik      = nik
    register.location = ttl
    register.birthday = birthday
    register.address  = address
    register.hobby    = hobby
    register.future_goals = goals

    await register.save()

    return response.redirect('/')
  }
}

module.exports = FrontendController
