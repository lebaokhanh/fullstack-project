# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
categories = [
  {key: 5, name: 'boxes'},
  {key: 15, name: 'clothes'},
  {key: 1, name: 'hats'},
  {key: 14, name: 'sinks'},
  {key: 2, name: 'space'},
  {key: 4, name: 'sunglasses'},
  {key: 7, name: 'ties'}
]

ActiveRecord::Base.transaction do
  categories.each do |category|
    ImageCategory.create(name: category[:name], image_category_id: category[:key])
  end
end
