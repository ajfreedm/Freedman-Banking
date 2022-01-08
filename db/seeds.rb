# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Account.destroy_all
User.destroy_all

@admin = User.create!(username: "admin", email: 'ajfreedm@gmail.com', password: '123456')

puts "#{User.count} users created"

Account.create!(category: "checking", balance: "1000", user: @admin)
Account.create!(category: "savings", balance: "5000", user: @admin)

puts "#{Account.count} accounts created"