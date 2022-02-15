// const Travel = require('./models/travelModel')
// const mongoose = require('mongoose')
// require('dotenv').config();
// const mongoURI = 'mongodb://127.0.0.1:27017/travels'
// const db = mongoose.connection
//
//
// mongoose.connect(mongoURI,{
//   useNewUrlParser:true,
//   useUnifiedTopology: true
// }, () =>{
//   console.log('DB Connected!');
// })
//
// Travel.create([
//   {
//     country: 'USA',
//     city: 'New York City, NY',
//     completed: false,
//     description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.',
//     tasks: [
//       'Thing 1',
//       'Thing 2',
//       'Thing 3'
//     ]
//   },
//   {
//     country: 'USA',
//     city: 'Los Angeles, CA',
//     completed: false,
//     description: 'Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry. Near its iconic Hollywood sign, studios such as Paramount Pictures, Universal and Warner Brothers offer behind-the-scenes tours. On Hollywood Boulevard, TCL Chinese Theatre displays celebrities’ hand- and footprints, the Walk of Fame honors thousands of luminaries and vendors sell maps to stars’ homes.',
//     tasks: [
//       'Thing 1',
//       'Thing 2',
//       'Thing 3'
//     ]
//   },
//   {
//     country: 'USA',
//     city: 'Chicago, IL',
//     completed: false,
//     description: 'Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works.',
//     tasks: [
//       'Thing 1',
//       'Thing 2',
//       'Thing 3'
//     ]
//   },
//   {
//     country: 'USA',
//     city: 'San Francisco, CA',
//     completed: false,
//     description: 'San Francisco, officially the City and County of San Francisco, is a cultural, commercial, and financial center in the U.S. state of California.',
//     tasks: [
//       'Thing 1',
//       'Thing 2',
//       'Thing 3'
//     ]
//   },
//   {
//     country: 'USA',
//     city: 'Boston, MA',
//     completed: false,
//     description: 'Boston, officially the City of Boston, is the capital and most populous city of the Commonwealth of Massachusetts in the United States and 24th-most populous city in the country. The city proper covers 48.4 square miles with a population of 675,647 in 2020, also making it the most populous city in New England.',
//     tasks: [
//       'Thing 1',
//       'Thing 2',
//       'Thing 3'
//     ]
//   },
//   {
//     country: 'USA',
//     city: 'San Diego, CA',
//     completed: false,
//     description: 'San Diego is a city on the Pacific coast of California known for its beaches, parks and warm climate. Immense Balboa Park is the site of the renowned San Diego Zoo, as well as numerous art galleries, artist studios, museums and gardens. A deep harbor is home to a large active naval fleet, with the USS Midway, an aircraft-carrier-turned-museum, open to the public.',
//     tasks: [
//       'Thing 1',
//       'Thing 2',
//       'Thing 3'
//     ]
//   },
//   {
//     country: 'USA',
//     city: 'Washington, DC',
//     completed: false,
//     description: 'Washington, DC, the U.S. capital, is a compact city on the Potomac River, bordering the states of Maryland and Virginia. It’s defined by imposing neoclassical monuments and buildings – including the iconic ones that house the federal government’s 3 branches: the Capitol, White House and Supreme Court. It also home to iconic museums and performing-arts venues such as the Kennedy Center.',
//     tasks: [
//       'Thing 1',
//       'Thing 2',
//       'Thing 3'
//     ]
//   },
//   {
//     country: 'USA',
//     city: 'Denver, CO',
//     completed: false,
//     description: 'Denver, the capital of Colorado, is an American metropolis dating to the Old West era. Larimer Square, the city’s oldest block, features landmark 19th-century buildings. Museums include the Denver Art Museum, an ultramodern complex known for its collection of indigenous works, and the mansion of famed Titanic survivor Molly Brown. Denver is also a jumping-off point for ski resorts in the nearby Rocky Mountains.',
//     tasks: [
//       'Thing 1',
//       'Thing 2',
//       'Thing 3'
//     ]
//   },
//   {
//     country: 'USA',
//     city: 'Pheonix, AZ',
//     completed: false,
//     description: 'Phoenix is the capital of the southwestern U.S. state of Arizona. Known for its year-round sun and warm temperatures, it anchors a sprawling, multicity metropolitan area known as the Valley of the Sun. Its known for high-end spa resorts, Jack Nicklaus–designed golf courses and vibrant nightclubs. Other highlights include the Desert Botanical Garden, displaying cacti and numerous native plants.',
//     tasks: [
//       'Thing 1',
//       'Thing 2',
//       'Thing 3'
//     ]
//   },
//   {
//     country: 'USA',
//     city: 'San Jose, CA',
//     completed: false,
//     description: 'San Jose is a large city surrounded by rolling hills in Silicon Valley, a major technology hub in Californias Bay Area. Architectural landmarks, from the 1883 Italianate-style Oddfellows building to Spanish Colonial Revival structures, make up the downtown historic district. The downtown area is also home to the Tech Museum of Innovation, devoted to the exploration of science and technology.',
//     tasks: [
//       'Thing 1',
//       'Thing 2',
//       'Thing 3'
//     ]
//   }
// ], (err, data)=>{
//     console.log(data)
//     db.close()
// })
