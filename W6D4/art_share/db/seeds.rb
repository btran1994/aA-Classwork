# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all


user1 = User.create({ username: 'user1'})
user2 = User.create({ username: 'user2'})
user3 = User.create({ username: 'user3'})


artwork1 = Artwork.create({ title: 'idk', artist_id: user1.id , image_url: 'asdfasdf.com'})
artwork2 = Artwork.create({ title: 'ok', artist_id: user2.id, image_url: 'asddfgf.com'})
artwork3 = Artwork.create({ title: 'why', artist_id: user2.id, image_url: 'why.com'})



artwork_shares = ArtworkShare.create([{ artwork_id: artwork1.id, viewer_id: user1.id}, 
{artwork_id: artwork2.id, viewer_id: user1.id},
{artwork_id: artwork2.id, viewer_id: user1.id},
{artwork_id: artwork3.id, viewer_id: user3.id}])

comment1 = Comment.create({user_id: user1.id, artwork_id: artwork1.id, body: "this is the body of a comment"})
