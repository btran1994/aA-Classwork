# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cat.destroy_all


cat1 = Cat.create(birth_date: Date.new(2001, 3, 5), color: "black", name: "cat1", sex: "M", description: "first cat")
cat2 = Cat.create(birth_date: Date.new(2005, 6, 20), color: "brown", name: "cat2", sex: "F", description: "second cat")
cat3 = Cat.create(birth_date: Date.new(2011, 7, 12), color: "black", name: "cat3", sex: "M", description: "third cat")
cat4 = Cat.create(birth_date: Date.new(2010, 9, 2), color: "white", name: "cat4", sex: "F", description: "fourth cat")

