# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Notebook.destroy_all
Note.destroy_all

user1 = User.create!(email: 'guest@example.com', password: 'password')

notebook1 = user1.notebooks.create!(title: 'Star Wars')
notebook2 = user1.notebooks.create!(title: 'Friends')
notebook3 = user1.notebooks.create!(title: 'Harry Potter')

20.times do |i|
  notebook1.notes.create!(
    title: Faker::StarWars.character,
    body: Faker::StarWars.quote
  )
end

20.times do |i|
  notebook2.notes.create!(
    title: Faker::Friends.character,
    body: Faker::Friends.quote
  )
end

20.times do |i|
  notebook3.notes.create!(
    title: Faker::HarryPotter.character,
    body: Faker::HarryPotter.quote
  )
end

#sample for how to use faker, gem would have to be included
# 10.times do |i|
#   u = User.create!(username: Faker::Name.name, password: "password")
#   c = Cat.create!(
#     user_id: u.id,
#     name: Faker::Hipster.word,
#     color: Cat::CAT_COLORS.sample,
#     sex: ["M", "F"].sample,
#     description: Faker::Hipster.sentence,
#     birth_date: Faker::Date.between(10.years.ago, Date.today)
#     )
# end
