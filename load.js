const data = [
  {
    "name": "Biscotto",
    "calories": 40,
    "unit": "L'uno",
    "nutrient": "Carboidrati",
    "category": "Colazione"
  },
  {
    "name": "Cornetto",
    "calories": 200,
    "unit": "L'uno",
    "nutrient": "Carboidrati",
    "category": "Colazione"
  },
  {
    "name": "Yoghurt",
    "calories": 120,
    "unit": "L'uno",
    "nutrient": "Carboidrati",
    "category": "Colazione"
  },
  {
    "name": "Pasta",
    "calories": 400,
    "unit": "A piatto pieno",
    "nutrient": "Carboidrati",
    "category": "Primi"
  },
  {
    "name": "Risotto",
    "calories": 350,
    "unit": "A piatto pieno",
    "nutrient": "Carboidrati",
    "category": "Primi"
  },
  {
    "name": "Minestrone",
    "calories": 300,
    "unit": "A piatto pieno",
    "nutrient": "Carboidrati, proteine",
    "category": "Primi"
  },
  {
    "name": "Minesta",
    "calories": 200,
    "unit": "A piatto pieno",
    "nutrient": "Carboidrati",
    "category": "Primi"
  },
  {
    "name": "Braciola",
    "calories": 330,
    "unit": "L'uno",
    "nutrient": "Proteine, grassi",
    "category": "Secondi"
  },
  {
    "name": "Salsiccia",
    "calories": 250,
    "unit": "L'uno",
    "nutrient": "Proteine, grassi",
    "category": "Secondi"
  },
  {
    "name": "Costine",
    "calories": 180,
    "unit": "L'uno (piccole come facciamo noi di solito)",
    "nutrient": "Proteine, grassi",
    "category": "Secondi"
  },
  {
    "name": "Bistecca manzo",
    "calories": 550,
    "unit": "L'uno",
    "nutrient": "Proteine",
    "category": "Secondi"
  },
  {
    "name": "Bistecca manzo solo filetto",
    "calories": 280,
    "unit": "L'uno",
    "nutrient": "Proteine",
    "category": "Secondi"
  },
  {
    "name": "Fettina",
    "calories": 150,
    "unit": "L'uno",
    "nutrient": "Proteine",
    "category": "Secondi"
  },
  {
    "name": "Cotoletta",
    "calories": 200,
    "unit": "L'uno",
    "nutrient": "Proteine",
    "category": "Secondi"
  },
  {
    "name": "Fettina di pollo",
    "calories": 150,
    "unit": "L'uno",
    "nutrient": "Proteine",
    "category": "Secondi"
  },
  {
    "name": "Pesce al forno",
    "calories": 300,
    "unit": "L'uno (pesce intero) ",
    "nutrient": "Proteine",
    "category": "Secondi"
  },
  {
    "name": "Pizza",
    "calories": 700,
    "unit": "L'uno",
    "nutrient": "Carboidrati",
    "category": "Secondi"
  },
  {
    "name": "Patate",
    "calories": 100,
    "unit": "A porzione",
    "nutrient": "Carboidrati",
    "category": "Contorni"
  },
  {
    "name": "Piselli",
    "calories": 80,
    "unit": "A porzione (4 / 5 cucchiaiate)",
    "nutrient": "Carboidrati, proteine",
    "category": "contorni"
  },
  {
    "name": "Ceci",
    "calories": 300,
    "unit": "A barattolo",
    "nutrient": "Carboidrati, proteine",
    "category": "Legumi"
  },
  {
    "name": "Fagioli",
    "calories": 200,
    "unit": "A barattolo",
    "nutrient": "Carboidrati, proteine",
    "category": "Legumi"
  },
  {
    "name": "Stecco conad",
    "calories": 240,
    "unit": "L'uno",
    "nutrient": "Carboidrati (zuccheri raffinati)",
    "category": "Dolci"
  },
  {
    "name": "Torta Romantica",
    "calories": 250,
    "unit": "A fetta",
    "nutrient": "Carboidrati (zuccheri raffinati)",
    "category": "Dolci"
  },
  {
    "name": "Torta Conad",
    "calories": 200,
    "unit": "A fetta",
    "nutrient": "Carboidrati (zuccheri raffinati)",
    "category": "Dolci"
  },
  {
    "name": "Cremino",
    "calories": 122,
    "unit": "L'uno",
    "nutrient": "Carboidrati (zuccheri raffinati)",
    "category": "Dolci"
  },
  {
    "name": "Cono",
    "calories": 240,
    "unit": "L'uno",
    "nutrient": "Carboidrati (zuccheri raffinati)",
    "category": "Dolci"
  },
  {
    "name": "Vaschetta gelato",
    "calories": 200,
    "unit": "A coppetta",
    "nutrient": "Carboidrati (zuccheri raffinati)",
    "category": "Dolci"
  },
  {
    "name": "Pane",
    "calories": 50,
    "unit": "A fetta",
    "nutrient": "Carboidrati",
    "category": "Affettati / pane"
  },
  {
    "name": "Pecorino",
    "calories": 100,
    "unit": "A fetta",
    "nutrient": "Grassi, proteine",
    "category": "Affettati / pane"
  },
  {
    "name": "Salame",
    "calories": 80,
    "unit": "A fetta",
    "nutrient": "Grassi, proteine",
    "category": "Affettati / pane"
  },
  {
    "name": "Prosciutto crudo",
    "calories": 40,
    "unit": "A fetta",
    "nutrient": "Grassi, proteine",
    "category": "Affettati / pane"
  },
  {
    "name": "Philadeplhia",
    "calories": 220,
    "unit": "A porzione mini (quella che compriamo di solito)",
    "nutrient": "Grassi, proteine",
    "category": "Affettati / pane"
  },
  {
    "name": "Banana",
    "calories": 120,
    "unit": "L'uno",
    "nutrient": "Carboidrati",
    "category": "Frutta"
  },
  {
    "name": "Uva",
    "calories": 6,
    "unit": "A chicco",
    "nutrient": "Carboidrati",
    "category": "Frutta"
  },
  {
    "name": "Avocado",
    "calories": 350,
    "unit": "L'uno",
    "nutrient": "Grassi",
    "category": "Frutta"
  },
  {
    "name": "Albicocca",
    "calories": 25,
    "unit": "L'uno",
    "nutrient": "Carboidrati",
    "category": "Frutta"
  },
  {
    "name": "Mela",
    "calories": 25,
    "unit": "L'uno",
    "nutrient": "Carboidrati",
    "category": "Frutta"
  },
  {
    "name": "Pera",
    "calories": 25,
    "unit": "L'uno",
    "nutrient": "Carboidrati",
    "category": "Frutta"
  },
  {
    "name": "Pesca",
    "calories": 25,
    "unit": "L'uno",
    "nutrient": "Carboidrati",
    "category": "Frutta"
  },
  {
    "name": "Prugna",
    "calories": 25,
    "unit": "L'uno",
    "nutrient": "Carboidrati",
    "category": "Frutta"
  },
  {
    "name": "Ketchup",
    "calories": 10,
    "unit": "A cucchiaino",
    "nutrient": "Carboidrati (zuccheri raffinati)",
    "category": "Salse"
  },
  {
    "name": "Maionese",
    "calories": 40,
    "unit": "A cucchiaino",
    "nutrient": "Carboidrati (zuccheri raffinati)",
    "category": "Salse"
  }
]

// Fill table
const table = document.querySelector('#foodTable');
data.forEach(({
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

// // Fill select options
// const search = document.querySelector('#foodSelect');
// data.forEach(({ name }, idx) => {
//   const option = document.createElement('option')
//   option.classList.add('food-select-option')
//   option.value = idx
//   option.innerText = name
//   search.appendChild(option)
// })

// let selected
// window.addEventListener('change', (evt) => {
//   const idx = evt.target.value
//   selected = data[evt.target.value]
  
//   const li = createElement('li')
//   li.innerText = selected.name
//   foodListRoot.aapp
// })

