'use strict'
const Register = use('App/Models/Register')

class FrontendController {
  async index({ response, view }) 
  {
    var data = 'test'

    return view.render('home', {data : data})
  }

  async about({ view }) 
  {
    
    return view.render('about-us')
  }

  async article({ view }) 
  {

    return view.render('article')
  }

  async gallery({ view }) 
  {

    return view.render('gallery')
  }

  async register({ view }) 
  {

    return view.render('register')
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
