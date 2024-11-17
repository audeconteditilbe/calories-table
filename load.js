const BREAKFAST = "Colazione"
const FIRST_COURSES = "Primi"
const MAIN_COURSES = "Secondi"
const LEGUMES = "Legumi"
const SIDE_DISHES = "Contorni"
const COLD_CUTS_AND_BREAD = "Affettati / pane"
const FRUIT = "Frutta"
const DRIED_FRUIT = "Frutta secca"
const DESSERTS = "Dolci"
const SAUCES = "Salse"
const SPREAD = "Spalmabili"

const CARBOHYDRATES = "Carboidrati"
const PROTEINS = "Proteine"
const FATS = "Grassi"
const REFINED_SUGAR_CARBS = "Carboidrati (zuccheri raffinati)"

const data = [
  {
    "name": "Biscotto",
    "calories": 40,
    "unit": "L'uno",
    "nutrient": CARBOHYDRATES,
    "category": BREAKFAST
  },
  {
    "name": "Cornetto",
    "calories": 200,
    "unit": "L'uno",
    "nutrient": CARBOHYDRATES,
    "category": BREAKFAST
  },
  {
    "name": "Yoghurt",
    "calories": 120,
    "unit": "L'uno",
    "nutrient": CARBOHYDRATES,
    "category": BREAKFAST
  },
  {
    "name": "Pasta",
    "calories": 400,
    "unit": "A piatto pieno",
    "nutrient": CARBOHYDRATES,
    "category": FIRST_COURSES
  },
  {
    "name": "Lasagna",
    "calories": 450,
    "unit": "A porzione",
    "nutrient": CARBOHYDRATES,
    "category": FIRST_COURSES,
  },
  {
    "name": "Risotto",
    "calories": 350,
    "unit": "A piatto pieno",
    "nutrient": CARBOHYDRATES,
    "category": FIRST_COURSES
  },
  {
    "name": "Minestrone",
    "calories": 250,
    "unit": "A piatto pieno",
    "nutrient": "Carboidrati, proteine",
    "category": FIRST_COURSES
  },
  {
    "name": "Chili",
    "calories": 300,
    "unit": "A piatto pieno",
    "nutrient": "Carboidrati, proteine",
    "category": FIRST_COURSES
  },
  {
    "name": "Minesta",
    "calories": 200,
    "unit": "A piatto pieno",
    "nutrient": CARBOHYDRATES,
    "category": FIRST_COURSES
  },
  {
    "name": "Spiedino",
    "calories": 150,
    "unit": "L'uno",
    "nutrient": "Proteine, grassi",
    "category": MAIN_COURSES
  },
  {
    "name": "Braciola",
    "calories": 330,
    "unit": "L'uno",
    "nutrient": "Proteine, grassi",
    "category": MAIN_COURSES
  },
  {
    "name": "Salsiccia",
    "calories": 250,
    "unit": "L'uno",
    "nutrient": "Proteine, grassi",
    "category": MAIN_COURSES
  },
  {
    "name": "Costine",
    "calories": 180,
    "unit": "L'uno (piccole come facciamo noi di solito)",
    "nutrient": "Proteine, grassi",
    "category": MAIN_COURSES
  },
  {
    "name": "Bistecca manzo",
    "calories": 400,
    "unit": "L'uno",
    "nutrient": PROTEINS,
    "category": MAIN_COURSES
  },
  {
    "name": "Bistecca manzo solo filetto",
    "calories": 140,
    "unit": "L'uno",
    "nutrient": PROTEINS,
    "category": MAIN_COURSES
  },
  {
    "name": "Fettina",
    "calories": 150,
    "unit": "L'uno",
    "nutrient": PROTEINS,
    "category": MAIN_COURSES
  },
  {
    "name": "Pizzaiola",
    "calories": 200,
    "unit": "A piatto",
    "nutrient": PROTEINS,
    "category": MAIN_COURSES
  },
  {
    "name": "Cotoletta",
    "calories": 200,
    "unit": "L'uno",
    "nutrient": PROTEINS,
    "category": MAIN_COURSES
  },
  {
    "name": "Fettina di pollo in padella",
    "calories": 150,
    "unit": "L'uno",
    "nutrient": PROTEINS,
    "category": MAIN_COURSES
  },
  {
    "name": "Pesce al forno",
    "calories": 300,
    "unit": "L'uno (pesce intero) ",
    "nutrient": PROTEINS,
    "category": MAIN_COURSES
  },
  {
    "name": "Pizza",
    "calories": 700,
    "unit": "L'uno",
    "nutrient": CARBOHYDRATES,
    "category": MAIN_COURSES
  },
  {
    "name": "Patate arrosto",
    "calories": 100,
    "unit": "A porzione",
    "nutrient": CARBOHYDRATES,
    "category": SIDE_DISHES
  },
  {
    "name": "Olive",
    "calories": 3,
    "unit": "L'una",
    "nutrient": FATS,
    "category": SIDE_DISHES
  },
  {
    "name": "Patate lesse",
    "calories": 50,
    "unit": "A porzione",
    "nutrient": CARBOHYDRATES,
    "category": SIDE_DISHES
  },
  {
    "name": "Piselli",
    "calories": 80,
    "unit": "A porzione (4 / 5 cucchiaiate)",
    "nutrient": "Carboidrati, proteine",
    "category": SIDE_DISHES
  },
  {
    "name": "Ceci",
    "calories": 300,
    "unit": "A barattolo",
    "nutrient": "Carboidrati, proteine",
    "category": LEGUMES
  },
  {
    "name": "Fagioli",
    "calories": 200,
    "unit": "A barattolo",
    "nutrient": "Carboidrati, proteine",
    "category": LEGUMES
  },
  {
    "name": "Stecco conad",
    "calories": 240,
    "unit": "L'uno",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Panna cotta",
    "calories": 220,
    "unit": "L'una",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Zuppa inglese",
    "calories": 200,
    "unit": "A porzione",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Cheese cake",
    "calories": 220,
    "unit": "A fetta",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Torrone",
    "calories": 35,
    "unit": "A pezzetto",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Panettone",
    "calories": 200,
    "unit": "A fetta",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Pandoro",
    "calories": 220,
    "unit": "A fetta",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Torta Romantica",
    "calories": 160,
    "unit": "A fetta",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Torta Conad",
    "calories": 150,
    "unit": "A fetta",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Cremino",
    "calories": 122,
    "unit": "L'uno",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Cono",
    "calories": 240,
    "unit": "L'uno",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Vaschetta gelato",
    "calories": 200,
    "unit": "A coppetta",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Pane",
    "calories": 50,
    "unit": "A fetta",
    "nutrient": CARBOHYDRATES,
    "category": COLD_CUTS_AND_BREAD
  },
  {
    "name": "Toast (prosciutto cotto + formaggio)",
    "calories": 200,
    "unit": "L'uno",
    "nutrient": CARBOHYDRATES,
    "category": COLD_CUTS_AND_BREAD
  },
  {
    "name": "Formaggio pecorino",
    "calories": 80,
    "unit": "A fetta",
    "nutrient": "Grassi, proteine",
    "category": COLD_CUTS_AND_BREAD
  },
  {
    "name": "Formaggio grana",
    "calories": 30,
    "unit": "A pezzetto",
    "nutrient": "Grassi, proteine",
    "category": COLD_CUTS_AND_BREAD
  },
  {
    "name": "Ricotta",
    "calories": 25,
    "unit": "A cucchiaio",
    "nutrient": FATS,
    "category": COLD_CUTS_AND_BREAD
  },
  {
    "name": "Salame",
    "calories": 80,
    "unit": "A fetta",
    "nutrient": "Grassi, proteine",
    "category": COLD_CUTS_AND_BREAD
  },
  {
    "name": "Prosciutto crudo",
    "calories": 20,
    "unit": "A fetta",
    "nutrient": "Grassi, proteine",
    "category": COLD_CUTS_AND_BREAD
  },
  {
    "name": "Bresaola",
    "calories": 20,
    "unit": "A fetta",
    "nutrient": PROTEINS,
    "category": COLD_CUTS_AND_BREAD
  },
  {
    "name": "Prosciutto cotto",
    "calories": 20,
    "unit": "A fetta",
    "nutrient": PROTEINS,
    "category": COLD_CUTS_AND_BREAD
  },
  {
    "name": "Philadeplhia",
    "calories": 220,
    "unit": "A porzione mini (quella che compriamo di solito)",
    "nutrient": "Grassi, proteine",
    "category": COLD_CUTS_AND_BREAD
  },
  {
    "name": "Banana",
    "calories": 120,
    "unit": "L'uno",
    "nutrient": CARBOHYDRATES,
    "category": FRUIT
  },
  {
    "name": "Uva",
    "calories": 6,
    "unit": "A chicco",
    "nutrient": CARBOHYDRATES,
    "category": FRUIT
  },
  {
    "name": "Avocado",
    "calories": 350,
    "unit": "L'uno",
    "nutrient": FATS,
    "category": FRUIT
  },
  {
    "name": "Albicocca",
    "calories": 25,
    "unit": "L'uno",
    "nutrient": CARBOHYDRATES,
    "category": FRUIT
  },
  {
    "name": "Ciambellone",
    "calories": 200,
    "unit": "A fetta",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Tiramisù",
    "calories": 250,
    "unit": "A porzione",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Mela",
    "calories": 25,
    "unit": "L'uno",
    "nutrient": CARBOHYDRATES,
    "category": FRUIT
  },
  {
    "name": "Mela",
    "calories": 20,
    "unit": "A fetta",
    "nutrient": CARBOHYDRATES,
    "category": FRUIT
  },
  {
    "name": "Pera",
    "calories": 25,
    "unit": "L'uno",
    "nutrient": CARBOHYDRATES,
    "category": FRUIT
  },
  {
    "name": "Pesca",
    "calories": 25,
    "unit": "L'uno",
    "nutrient": CARBOHYDRATES,
    "category": FRUIT
  },
  {
    "name": "Prugna",
    "calories": 25,
    "unit": "L'uno",
    "nutrient": CARBOHYDRATES,
    "category": FRUIT
  },
  {
    "name": "Ketchup",
    "calories": 10,
    "unit": "A cucchiaino",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": SAUCES
  },
  {
    "name": "Maionese",
    "calories": 40,
    "unit": "A cucchiaino",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": SAUCES
  },
  {
    "name": "Polpette",
    "calories": 80,
    "unit": "L'una",
    "nutrient": PROTEINS,
    "category": MAIN_COURSES
  },
  {
    "name": "Uovo",
    "calories": 60,
    "unit": "L'uno",
    "nutrient": PROTEINS,
    "category": MAIN_COURSES
  },
  {
    "name": "Tagliata con pecorino di fossa (Romina)",
    "calories": 400,
    "unit": "A piatto pieno",
    "nutrient": PROTEINS,
    "category": MAIN_COURSES
  },
  {
    "name": "Coscia pollo arrosto",
    "calories": 150,
    "unit": "L'una",
    "nutrient": PROTEINS,
    "category": MAIN_COURSES
  },
  {
    "name": "Petto pollo arrosto",
    "calories": 150,
    "unit": "A pezzo",
    "nutrient": PROTEINS,
    "category": MAIN_COURSES
  },
  {
    "name": "Torta romantica",
    "calories": 160,
    "unit": "A fetta",
    "nutrient": REFINED_SUGAR_CARBS,
    "category": DESSERTS
  },
  {
    "name": "Noci",
    "calories": 25,
    "unit": "L'una",
    "nutrient": "Carboidrati, proteine",
    "category": DRIED_FRUIT,
  },
  {
    "name": "Mandorle",
    "calories": 5,
    "unit": "L'una",
    "nutrient": "Carboidrati, proteine",
    "category": DRIED_FRUIT,
  },
  {
    "name": "Pistacchi",
    "calories": 5,
    "unit": "L'uno",
    "nutrient": "Carboidrati, proteine",
    "category": DRIED_FRUIT,
  },
  {
    "name": "Noccioline",
    "calories": 5,
    "unit": "L'una",
    "nutrient": "Carboidrati, proteine",
    "category": DRIED_FRUIT,
  },
  {
    "name": "Burro d'arachidi",
    "calories": 55,
    "unit": "A cucchiaino",
    "nutrient": CARBOHYDRATES,
    "category": SPREAD
  },
  {
    "name": "Crema di nocciola",
    "calories": 45,
    "unit": "A cucchiaino",
    "nutrient": CARBOHYDRATES,
    "category": SPREAD
  },
  {
    "name": "Miele",
    "calories": 15,
    "unit": "A cucchiaino",
    "nutrient": CARBOHYDRATES,
    "category": SPREAD
  }
]

const categoryOrder = [
  BREAKFAST, 
  FIRST_COURSES,
  MAIN_COURSES, 
  LEGUMES, 
  SIDE_DISHES, 
  COLD_CUTS_AND_BREAD, 
  FRUIT,
  DRIED_FRUIT,
  SPREAD,
  DESSERTS,
  SAUCES
]

// Fill table
const table = document.querySelector('#foodTable');
data
  .sort((a, b) => {
    const catA = categoryOrder.indexOf(a.category)
    const catB = categoryOrder.indexOf(b.category)  
    return catA !== catB ? catA - catB : a.name.localeCompare(b.name)
  })
  .forEach(({
    name,
    calories,
    unit,
    nutrient,
    category,
  }) => {
    const tr = document.createElement('tr')
    
    const name_td = document.createElement('td')
    name_td.innerText = name
    name_td.classList.add('name-col')
    tr.appendChild(name_td)
    
    const calories_td = document.createElement('td')
    calories_td.innerText = `${calories} ${unit}`
    calories_td.classList.add('cal-col')
    tr.appendChild(calories_td)

    const nutrient_td = document.createElement('td')
    nutrient_td.innerText = nutrient
    nutrient_td.classList.add('nutrient-col')
    tr.appendChild(nutrient_td)

    const category_td = document.createElement('td')
    category_td.innerText = category
    category_td.classList.add('category-col')
    tr.appendChild(category_td)
    
    table.appendChild(tr)
  })

