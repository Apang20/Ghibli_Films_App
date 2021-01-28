# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.destroy_all
Character.destroy_all
#Movies

spirited = Movie.create(title: "Spirited Away", poster_image:"https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", year: 2001 , director: "Hayao Miyazaki", description: "Spirited Away is a wondrous fantasy about a young girl named Chihiro who discovers a secret world of strange spirits, creatures and sorcery. When her parents are mysteriously transformed, she must call upon the courage she never knew she had to free herself and return her family to the outside world.")
kiki = Movie.create(title: "Kiki's Delivery Service", poster_image:"https://resizing.flixster.com/GN_RuIdBfCTW_CvOo9K70FGN9DQ=/206x305/v1.bTsxMzQ1Nzg0NjtqOzE4Njk1OzEyMDA7MTYwNjsyNDA5", year: 1989 , director: "Hayao Miyazaki", description: "It is tradition for all young witches to leave their families on the night of a full moon to learn their craft. That night comes for Kiki, who follows her dream and embarks on the experience of a lifetime.  With her chatty black cat, Jiji, she flies off to find the perfect spot in a faraway city. There, a bakery owner befriends Kiki and helps her start her own business: A high-flying delivery service.")
mononoke = Movie.create(title: "Princess Mononoke", poster_image:"https://images-na.ssl-images-amazon.com/images/I/517mkEqmnpL._AC_.jpg", year: 1997, director: "Hayao Miyazaki", description: "While protecting his village from a rampaging boar-god, the young warrior Ashitaka becomes afflicted with a deadly curse. To find the cure that will save his life, he journeys deep into sacred depths of the Great Forest Spirit's realm where he meets San (Princess Mononoke), a girl raised by wolves. It's not long before Ashitaka is caught in the middle of a battle between iron-ore prospecting humans and the forest dwellers. He must summon the spirit-powers and all his courage to stop man and nature from destroying each other.")
howlsmc = Movie.create(title: "Howl's Moving Castle", poster_image:"https://m.media-amazon.com/images/I/81nY1K-OigL._AC_SL1500_.jpg", year: 2004, director: "Hayao Miyazaki", description: "Sophie, an average teenage girl working in a hat shop, finds her life thrown into turmoil when she is literally swept off her feet by a handsome but mysterious wizard named Howl. After this chance meeting she is turned into a 90-year old woman by the vain and conniving Witch of the Waste. Embarking on an incredible adventure to lift the curse, she finds refuge in Howl's magical moving castle where she becomes acquainted with Markl, Howl's apprentice, and a hot-headed fire demon named Calcifer.  As the true power of Howl’s wizardry is revealed, and his relationship with Sophie deepens, our young grey heroine finds herself fighting to protect them both from a dangerous war of sorcery that threatens their world.")
totoro = Movie.create(title: "My Neighbor Totoro", poster_image:"https://i.pinimg.com/originals/b4/b5/b3/b4b5b390b4e2e77b904dcc3da4a717c8.jpg", year: 1988, director: "Hayao Miyazaki", description: "Two young girls, Satsuki and Mei, have moved with their father into a new home in the country, while their mother recovers from illness in a nearby hospital. To their surprise, they soon discover that they share this home with some rather unusual creatures and even stranger neighbours - forest guardians that the girls dub Totoro. When trouble occurs, their new friends will help them rediscover hope")
castle = Movie.create(title: "Castle in the Sky", poster_image:"https://i.etsystatic.com/26077226/r/il/da21d1/2729880228/il_1588xN.2729880228_qa3e.jpg", year: 1986, director: "Hayao Miyazaki", description: "Pazu, an engineer's apprentice finds a young girl, Sheeta floating down from the sky wearing a glowing pendant. Together they discover both are searching for the legendary floating castle Laputa and vow to unravel the mystery of the luminous crystal around her neck. Their quest won't be easy however. There are air pirates, secret agents and astounding obstacles to keep them from the truth - and from each other.")

#Characters

chihiro = Character.create(name: "Chihiro (Sen)", image: "https://s1.zerochan.net/Ogino.Chihiro.600.87743.jpg", species: "human", movie_id: spirited.id)
kikiwitch = Character.create(name: "Kiki", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyouandmie.files.wordpress.com%2F2014%2F09%2Fkikis-delivery-service.jpg&f=1&nofb=1", species: "human", movie_id: kiki.id)
san = Character.create(name: "San", image: "https://static.wikia.nocookie.net/studio-ghibli/images/2/22/San-0.jpg/revision/latest?cb=20200620033852", species: "human", movie_id: mononoke.id)
howl = Character.create(name: "Howl", image: "https://static.wikia.nocookie.net/howlscastle/images/2/26/Howl_with_black_hair.jpg/revision/latest/scale-to-width-down/340?cb=20120605141024", species: "wizard", movie_id: howlsmc.id)
totoro_char = Character.create(name: "Totoro", image: "https://i.redd.it/ko8rxxqv1yty.jpg", species: "spirit", movie_id: totoro.id)
pazu = Character.create(name: "Pazu", image: "https://dev.mangajam.com/wp-content/uploads/part418/how_draw_pazu_laputa_11.jpg", species: "human", movie_id: castle.id)
jiji = Character.create(name: "Jiji", image: "https://ae01.alicdn.com/kf/HTB1.0IqQVXXXXb_XpXXq6xXFXXXK/Japanese-Anime-Toys-45-65cm-Kikis-Delivery-Service-Jiji-Cat-Plush-Backpack-Soft-Plush-School-Bag.jpg", species: "cat", movie_id: kiki.id)

sophie = Character.create(name: "Sophie", image: "https://static.wikia.nocookie.net/howlscastle/images/c/c1/Sophie_Hatter.jpeg/revision/latest/scale-to-width-down/340?cb=20151222210402", species: "human", movie_id: howlsmc.id)
noface = Character.create(name: "No Face", image: "https://static.wikia.nocookie.net/studio-ghibli/images/9/9d/No-Face_infobox.png/revision/latest?cb=20200908135515", species: "spirit", movie_id: spirited.id)
haku = Character.create(name: "Haku", image: "https://static.wikia.nocookie.net/studio-ghibli/images/8/89/Haku-2.png/revision/latest?cb=20201008131345", species: "spirit", movie_id: spirited.id)
kodama = Character.create(name: "Kodama", image: "https://i.pinimg.com/originals/2a/2a/3d/2a2a3dc21200c6025a7e2f209b818926.jpg", species: "spirit", movie_id: mononoke.id)
 

#Chihiro hobbies: ["cleaning", "making new friends", "flying with Haku", "making deals with witches"]
#pazu:  hobbies: ["gun range", "flying his plane", "playing the trumpet", "spends time with pet doves"]
#totoro: hobbies: ["gardening", "napping", "collecting acorns", "climbing trees", "flying", "fishing with friends"]
#howl: hobbies: ["cooking", "traveling", "gossiping", "hide and seek", "fashion"]
#san: hobbies: ["protecting the forest", "spending time with Moro", "face painting", "combat training", "horticulture"]
#kiki: hobbies: ["flying her broom", "delivering packages", "baking", "learning spells"]