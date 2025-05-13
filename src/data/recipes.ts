import { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Classic American Smashburger",
    country: "United States",
    description: "A perfectly smashed patty with crispy edges and a juicy center, topped with melted American cheese.",
    ingredients: [
      "200g ground beef (80/20)",
      "Salt and pepper to taste",
      "2 slices American cheese",
      "1 tablespoon butter",
      "2 potato buns",
      "Diced onions (optional)"
    ],
    instructions: [
      "Divide beef into two 100g balls, don't season yet",
      "Heat cast iron skillet or griddle until very hot",
      "Place beef balls on hot surface",
      "Smash firmly with a spatula until very thin",
      "Season generously with salt and pepper",
      "Cook for 2 minutes until crispy",
      "Flip, add cheese, and cook 1 minute more"
    ],
    imageUrl: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    prepTime: 5,
    cookTime: 5,
    difficulty: "Easy",
    tags: ["beef", "American", "classic"],
    isFavorite: false
  },
  {
    id: 2,
    name: "Japanese Wagyu Burger",
    country: "Japan",
    description: "A luxurious burger made with premium Wagyu beef, featuring umami-rich toppings and wasabi mayo.",
    ingredients: [
      "300g Wagyu ground beef",
      "2 tbsp soy sauce",
      "1 tbsp mirin",
      "1 tsp wasabi paste",
      "2 brioche buns",
      "Caramelized onions",
      "Japanese mayo"
    ],
    instructions: [
      "Gently mix beef with soy sauce and mirin",
      "Form into patties, make a dimple in center",
      "Rest at room temperature for 15 minutes",
      "Cook on medium-high heat, 3-4 minutes per side",
      "Mix wasabi with mayo for sauce",
      "Toast brioche buns",
      "Assemble with caramelized onions"
    ],
    imageUrl: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg",
    prepTime: 20,
    cookTime: 8,
    difficulty: "Medium",
    tags: ["wagyu", "Japanese", "luxury"],
    isFavorite: false
  },
  {
    id: 3,
    name: "Greek Lamb Burger",
    country: "Greece",
    description: "A Mediterranean-inspired burger with feta cheese, fresh herbs, and tzatziki sauce.",
    ingredients: [
      "400g ground lamb",
      "2 cloves garlic, minced",
      "2 tbsp fresh oregano",
      "2 tbsp fresh mint",
      "100g feta cheese",
      "1 tsp ground cumin",
      "Salt and pepper"
    ],
    instructions: [
      "Mix lamb with herbs, garlic, and spices",
      "Fold in crumbled feta cheese",
      "Form into patties",
      "Grill for 4-5 minutes per side",
      "Serve with tzatziki sauce",
      "Add fresh cucumber and tomato"
    ],
    imageUrl: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg",
    prepTime: 15,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["lamb", "Mediterranean", "herbs"],
    isFavorite: false
  },
  {
    id: 4,
    name: "Korean Bulgogi Burger",
    country: "South Korea",
    description: "A fusion burger featuring sweet and savory bulgogi-style beef with kimchi slaw.",
    ingredients: [
      "400g ground beef",
      "3 tbsp soy sauce",
      "2 tbsp brown sugar",
      "2 tbsp sesame oil",
      "4 cloves garlic",
      "1 pear, grated",
      "Kimchi for topping"
    ],
    instructions: [
      "Mix beef with bulgogi marinade ingredients",
      "Let marinate for 30 minutes",
      "Form into patties",
      "Grill for 4-5 minutes per side",
      "Top with kimchi slaw",
      "Add gochujang mayo"
    ],
    imageUrl: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg",
    prepTime: 35,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["beef", "Korean", "fusion"],
    isFavorite: false
  },
  {
    id: 5,
    name: "Indian Tandoori Chicken Burger",
    country: "India",
    description: "A spicy chicken burger marinated in tandoori spices with mint chutney.",
    ingredients: [
      "400g ground chicken",
      "2 tbsp tandoori masala",
      "1 cup yogurt",
      "2 cloves garlic",
      "1 inch ginger",
      "Mint chutney",
      "Red onions"
    ],
    instructions: [
      "Marinate chicken in yogurt and spices",
      "Refrigerate for 2 hours",
      "Form into patties",
      "Grill until fully cooked",
      "Serve with mint chutney",
      "Add sliced onions and cucumber"
    ],
    imageUrl: "https://images.pexels.com/photos/1460873/pexels-photo-1460873.jpeg",
    prepTime: 130,
    cookTime: 12,
    difficulty: "Medium",
    tags: ["chicken", "Indian", "spicy"],
    isFavorite: false
  },
  {
    id: 6,
    name: "Mexican Chorizo Burger",
    country: "Mexico",
    description: "A spicy burger blend of chorizo and beef, topped with queso fresco and guacamole.",
    ingredients: [
      "200g ground beef",
      "200g chorizo",
      "1 chipotle in adobo",
      "Queso fresco",
      "Guacamole",
      "Lime crema",
      "Cilantro"
    ],
    instructions: [
      "Mix beef and chorizo together",
      "Form into patties",
      "Grill for 5-6 minutes per side",
      "Top with queso fresco",
      "Add guacamole and crema",
      "Garnish with cilantro"
    ],
    imageUrl: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg",
    prepTime: 15,
    cookTime: 12,
    difficulty: "Medium",
    tags: ["beef", "chorizo", "Mexican"],
    isFavorite: false
  },
  {
    id: 7,
    name: "Thai Lemongrass Chicken Burger",
    country: "Thailand",
    description: "A fragrant chicken burger with lemongrass, kaffir lime, and Thai basil.",
    ingredients: [
      "400g ground chicken",
      "2 stalks lemongrass",
      "4 kaffir lime leaves",
      "Thai basil",
      "Fish sauce",
      "Palm sugar",
      "Green chilies"
    ],
    instructions: [
      "Mix chicken with minced lemongrass",
      "Add finely chopped kaffir lime",
      "Form into patties",
      "Grill until cooked through",
      "Top with Thai basil mayo",
      "Add cucumber relish"
    ],
    imageUrl: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
    prepTime: 20,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["chicken", "Thai", "aromatic"],
    isFavorite: false
  },
  {
    id: 8,
    name: "Brazilian Picanha Burger",
    country: "Brazil",
    description: "A premium burger made from Brazil's favorite cut, topped with chimichurri.",
    ingredients: [
      "400g ground picanha",
      "Rock salt",
      "Black pepper",
      "Chimichurri sauce",
      "Grilled onions",
      "Hearts of palm",
      "Malagueta pepper"
    ],
    instructions: [
      "Season picanha with rock salt",
      "Form into thick patties",
      "Grill to medium-rare",
      "Top with chimichurri",
      "Add grilled onions",
      "Serve with farofa"
    ],
    imageUrl: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg",
    prepTime: 15,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["beef", "Brazilian", "grilled"],
    isFavorite: false
  },
  {
    id: 9,
    name: "Vietnamese Banh Mi Burger",
    country: "Vietnam",
    description: "A fusion burger with lemongrass pork and traditional banh mi toppings.",
    ingredients: [
      "400g ground pork",
      "Lemongrass paste",
      "Fish sauce",
      "Pickled vegetables",
      "Cilantro",
      "Pate",
      "Sriracha mayo"
    ],
    instructions: [
      "Mix pork with lemongrass and fish sauce",
      "Form into patties",
      "Grill until cooked",
      "Toast baguette-style buns",
      "Add pickled vegetables",
      "Top with pate and herbs"
    ],
    imageUrl: "https://images.pexels.com/photos/1633495/pexels-photo-1633495.jpeg",
    prepTime: 25,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["pork", "Vietnamese", "fusion"],
    isFavorite: false
  },
  {
    id: 10,
    name: "Moroccan Lamb Burger",
    country: "Morocco",
    description: "A spiced lamb burger with ras el hanout and harissa mayo.",
    ingredients: [
      "400g ground lamb",
      "Ras el hanout",
      "Fresh mint",
      "Harissa paste",
      "Greek yogurt",
      "Preserved lemon",
      "Arugula"
    ],
    instructions: [
      "Mix lamb with spices and mint",
      "Form into patties",
      "Grill until desired doneness",
      "Make harissa mayo",
      "Add preserved lemon relish",
      "Serve with arugula"
    ],
    imageUrl: "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg",
    prepTime: 20,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["lamb", "Moroccan", "spicy"],
    isFavorite: false
  },
  {
    id: 11,
    name: "Spanish Chorizo Burger",
    country: "Spain",
    description: "A smoky burger made with Spanish chorizo and Manchego cheese.",
    ingredients: [
      "300g ground beef",
      "100g Spanish chorizo",
      "Manchego cheese",
      "Piquillo peppers",
      "Aioli",
      "Smoked paprika",
      "Garlic"
    ],
    instructions: [
      "Mix beef with ground chorizo",
      "Season with paprika",
      "Form into patties",
      "Grill to preference",
      "Top with Manchego",
      "Add piquillo peppers"
    ],
    imageUrl: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
    prepTime: 15,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["beef", "Spanish", "smoky"],
    isFavorite: false
  },
  {
    id: 12,
    name: "Turkish Köfte Burger",
    country: "Turkey",
    description: "A spiced lamb and beef burger inspired by traditional köfte.",
    ingredients: [
      "200g ground lamb",
      "200g ground beef",
      "Turkish spices",
      "Sumac onions",
      "Ezme salad",
      "Garlic sauce",
      "Flatbread"
    ],
    instructions: [
      "Mix meats with spices",
      "Form into oval patties",
      "Grill until done",
      "Prepare sumac onions",
      "Make ezme salad",
      "Serve in flatbread"
    ],
    imageUrl: "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg",
    prepTime: 20,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["lamb", "Turkish", "spiced"],
    isFavorite: false
  },
  {
    id: 13,
    name: "Italian Bistecca Burger",
    country: "Italy",
    description: "A Tuscan-inspired burger with rosemary, garlic, and aged balsamic.",
    ingredients: [
      "400g ground beef",
      "Fresh rosemary",
      "Garlic",
      "Aged balsamic",
      "Pecorino cheese",
      "Arugula",
      "Olive oil"
    ],
    instructions: [
      "Mix beef with chopped rosemary",
      "Form into thick patties",
      "Grill to medium-rare",
      "Drizzle with balsamic",
      "Top with pecorino",
      "Add dressed arugula"
    ],
    imageUrl: "https://images.pexels.com/photos/1639564/pexels-photo-1639564.jpeg",
    prepTime: 15,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["beef", "Italian", "herbs"],
    isFavorite: false
  },
  {
    id: 14,
    name: "Swedish Moose Burger",
    country: "Sweden",
    description: "A unique burger made with ground moose meat and lingonberry sauce.",
    ingredients: [
      "400g ground moose",
      "Juniper berries",
      "Lingonberry jam",
      "Pickled cucumber",
      "Västerbotten cheese",
      "Dill",
      "Rye buns"
    ],
    instructions: [
      "Mix moose with crushed juniper",
      "Form into patties",
      "Grill until medium",
      "Add cheese to melt",
      "Top with lingonberry",
      "Serve on rye buns"
    ],
    imageUrl: "https://images.pexels.com/photos/1639566/pexels-photo-1639566.jpeg",
    prepTime: 15,
    cookTime: 12,
    difficulty: "Medium",
    tags: ["moose", "Swedish", "unique"],
    isFavorite: false
  },
  {
    id: 15,
    name: "Australian Kangaroo Burger",
    country: "Australia",
    description: "A lean and healthy burger made with kangaroo meat and bush tomato relish.",
    ingredients: [
      "400g ground kangaroo",
      "Bush tomato spice",
      "Native pepperberries",
      "Beetroot relish",
      "Aged cheddar",
      "Butter lettuce",
      "Aioli"
    ],
    instructions: [
      "Season kangaroo with spices",
      "Form into patties",
      "Grill quickly - don't overcook",
      "Add cheese to melt",
      "Top with beetroot",
      "Serve with bush tomato sauce"
    ],
    imageUrl: "https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg",
    prepTime: 15,
    cookTime: 8,
    difficulty: "Medium",
    tags: ["kangaroo", "Australian", "unique"],
    isFavorite: false
  },
  {
    id: 16,
    name: "French Beef Bourguignon Burger",
    country: "France",
    description: "A sophisticated burger inspired by the classic French stew.",
    ingredients: [
      "400g ground beef",
      "Red wine reduction",
      "Pearl onions",
      "Mushroom duxelles",
      "Bacon lardons",
      "Gruyère cheese",
      "Brioche buns"
    ],
    instructions: [
      "Mix beef with reduced wine",
      "Form into patties",
      "Cook bacon and onions",
      "Grill patties to preference",
      "Top with gruyère",
      "Add mushroom duxelles"
    ],
    imageUrl: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    prepTime: 30,
    cookTime: 15,
    difficulty: "Hard",
    tags: ["beef", "French", "gourmet"],
    isFavorite: false
  },
  {
    id: 17,
    name: "Russian Stroganoff Burger",
    country: "Russia",
    description: "A creamy mushroom-topped burger inspired by beef stroganoff.",
    ingredients: [
      "400g ground beef",
      "Mushroom cream sauce",
      "Sour cream",
      "Dill pickles",
      "Caramelized onions",
      "Swiss cheese",
      "Rye bread"
    ],
    instructions: [
      "Season beef with paprika",
      "Form into patties",
      "Make mushroom sauce",
      "Grill patties",
      "Top with sauce",
      "Add pickles and onions"
    ],
    imageUrl: "https://images.pexels.com/photos/1639558/pexels-photo-1639558.jpeg",
    prepTime: 25,
    cookTime: 15,
    difficulty: "Medium",
    tags: ["beef", "Russian", "creamy"],
    isFavorite: false
  },
  {
    id: 18,
    name: "Chinese Char Siu Burger",
    country: "China",
    description: "A sweet and savory burger inspired by Cantonese BBQ pork.",
    ingredients: [
      "400g ground pork",
      "Char siu sauce",
      "Five spice powder",
      "Hoisin sauce",
      "Green onions",
      "Cucumber",
      "Mantou buns"
    ],
    instructions: [
      "Mix pork with char siu sauce",
      "Add five spice powder",
      "Form into patties",
      "Grill until done",
      "Steam mantou buns",
      "Add hoisin and vegetables"
    ],
    imageUrl: "https://images.pexels.com/photos/1639559/pexels-photo-1639559.jpeg",
    prepTime: 20,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["pork", "Chinese", "BBQ"],
    isFavorite: false
  },
  {
    id: 19,
    name: "Argentine Chimichurri Burger",
    country: "Argentina",
    description: "A perfectly grilled beef burger with fresh chimichurri sauce.",
    ingredients: [
      "400g ground beef",
      "Chimichurri sauce",
      "Provolone cheese",
      "Grilled peppers",
      "Red onions",
      "Garlic aioli",
      "Crusty rolls"
    ],
    instructions: [
      "Season beef simply",
      "Form into thick patties",
      "Grill to medium-rare",
      "Make fresh chimichurri",
      "Melt provolone on top",
      "Add grilled vegetables"
    ],
    imageUrl: "https://images.pexels.com/photos/1639560/pexels-photo-1639560.jpeg",
    prepTime: 20,
    cookTime: 12,
    difficulty: "Medium",
    tags: ["beef", "Argentine", "grilled"],
    isFavorite: false
  },
  {
    id: 20,
    name: "Lebanese Kafta Burger",
    country: "Lebanon",
    description: "A spiced lamb burger with traditional Lebanese flavors.",
    ingredients: [
      "400g ground lamb",
      "Parsley",
      "Mint",
      "Onion",
      "Seven spices",
      "Sumac",
      "Pita bread"
    ],
    instructions: [
      "Mix lamb with herbs and spices",
      "Form into patties",
      "Grill until done",
      "Warm pita bread",
      "Add tahini sauce",
      "Top with sumac onions"
    ],
    imageUrl: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg",
    prepTime: 20,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["lamb", "Lebanese", "spiced"],
    isFavorite: false
  },
  {
    id: 21,
    name: "Hawaiian Pineapple Burger",
    country: "United States",
    description: "A tropical burger with grilled pineapple and teriyaki glaze.",
    ingredients: [
      "400g ground beef",
      "Teriyaki sauce",
      "Grilled pineapple",
      "Swiss cheese",
      "Red onion",
      "Butter lettuce",
      "Kings Hawaiian rolls"
    ],
    instructions: [
      "Season beef with teriyaki",
      "Form into patties",
      "Grill pineapple rings",
      "Cook patties",
      "Melt cheese on top",
      "Add grilled pineapple"
    ],
    imageUrl: "https://images.pexels.com/photos/1639566/pexels-photo-1639566.jpeg",
    prepTime: 15,
    cookTime: 10,
    difficulty: "Easy",
    tags: ["beef", "Hawaiian", "sweet"],
    isFavorite: false
  },
  {
    id: 22,
    name: "Persian Koobideh Burger",
    country: "Iran",
    description: "A traditional Iranian-style ground lamb burger with saffron.",
    ingredients: [
      "400g ground lamb",
      "Grated onion",
      "Saffron water",
      "Sumac",
      "Fresh herbs",
      "Yogurt sauce",
      "Lavash bread"
    ],
    instructions: [
      "Mix lamb with onion and saffron",
      "Form into oblong patties",
      "Grill until done",
      "Warm lavash bread",
      "Add herbs and sumac",
      "Serve with yogurt sauce"
    ],
    imageUrl: "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg",
    prepTime: 20,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["lamb", "Persian", "saffron"],
    isFavorite: false
  },
  {
    id: 23,
    name: "German Jäger Burger",
    country: "Germany",
    description: "A hunter-style burger with mushroom sauce and spätzle.",
    ingredients: [
      "400g ground beef",
      "Mushroom gravy",
      "Crispy onions",
      "Emmental cheese",
      "Pretzel bun",
      "Mustard",
      "Pickles"
    ],
    instructions: [
      "Season beef with herbs",
      "Form into patties",
      "Make mushroom sauce",
      "Grill patties",
      "Add cheese and sauce",
      "Top with crispy onions"
    ],
    imageUrl: "https://images.pexels.com/photos/1639568/pexels-photo-1639568.jpeg",
    prepTime: 25,
    cookTime: 15,
    difficulty: "Medium",
    tags: ["beef", "German", "mushroom"],
    isFavorite: false
  },
  {
    id: 24,
    name: "Caribbean Jerk Burger",
    country: "Jamaica",
    description: "A spicy jerk-seasoned burger with mango salsa.",
    ingredients: [
      "400g ground chicken",
      "Jerk seasoning",
      "Mango salsa",
      "Scotch bonnet sauce",
      "Pineapple rings",
      "Coconut slaw",
      "Coco bread"
    ],
    instructions: [
      "Mix chicken with jerk spice",
      "Form into patties",
      "Grill until cooked",
      "Make mango salsa",
      "Prepare coconut slaw",
      "Serve on coco bread"
    ],
    imageUrl: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
    prepTime: 20,
    cookTime: 12,
    difficulty: "Medium",
    tags: ["chicken", "Caribbean", "spicy"],
    isFavorite: false
  },
  {
    id: 25,
    name: "Swiss Raclette Burger",
    country: "Switzerland",
    description: "A decadent burger topped with melted raclette cheese.",
    ingredients: [
      "400g ground beef",
      "Raclette cheese",
      "Cornichons",
      "Pearl onions",
      "Dijon mustard",
      "Arugula",
      "Rustic roll"
    ],
    instructions: [
      "Season beef simply",
      "Form into thick patties",
      "Grill to preference",
      "Melt raclette on top",
      "Add cornichons",
      "Serve with mustard"
    ],
    imageUrl: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg",
    prepTime: 15,
    cookTime: 10,
    difficulty: "Medium",
    tags: ["beef", "Swiss", "cheese"],
    isFavorite: false
  },
  {
    id: 26,
    name: "Portobello Mushroom Burger",
    country: "United States",
    description: "A hearty vegetarian burger featuring marinated and grilled portobello mushrooms.",
    ingredients: [
      "4 large portobello mushrooms",
      "Balsamic vinegar",
      "Olive oil",
      "Garlic",
      "Fresh thyme",
      "Goat cheese",
      "Arugula"
    ],
    instructions: [
      "Clean mushrooms and remove stems",
      "Marinate in balsamic and herbs",
      "Grill until tender",
      "Top with goat cheese",
      "Add arugula and aioli",
      "Serve on toasted buns"
    ],
    imageUrl: "https://images.pexels.com/photos/1639571/pexels-photo-1639571.jpeg",
    prepTime: 15,
    cookTime: 10,
    difficulty: "Easy",
    tags: ["vegetarian", "mushroom", "healthy"],
    isFavorite: false
  },
  {
    id: 27,
    name: "Black Bean Quinoa Burger",
    country: "United States",
    description: "A protein-rich vegetarian burger made with black beans and quinoa.",
    ingredients: [
      "Black beans",
      "Cooked quinoa",
      "Red onion",
      "Garlic",
      "Cumin",
      "Cilantro",
      "Chipotle peppers"
    ],
    instructions: [
      "Mash black beans",
      "Mix with cooked quinoa",
      "Add seasonings",
      "Form into patties",
      "Pan-fry until crispy",
      "Serve with avocado"
    ],
    imageUrl: "https://images.pexels.com/photos/3607284/pexels-photo-3607284.jpeg",
    prepTime: 20,
    cookTime: 15,
    difficulty: "Medium",
    tags: ["vegetarian", "beans", "healthy"],
    isFavorite: false
  }
];