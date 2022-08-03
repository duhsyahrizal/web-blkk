'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegisterSchema extends Schema {
  up () {
    this.create('registers', (table) => {
      table.increments('id')
      table.string('name', 100)
      table.string('nik', 50)
      table.string('location')
      table.date('birthday')
      table.string('address')
      table.string('hobby')
      table.string('future_goals')
      table.timestamps()
    })
  }

  down () {
    this.drop('registers')
  }
}

module.exports = RegisterSchema
