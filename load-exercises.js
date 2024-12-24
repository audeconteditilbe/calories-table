const BASE_REST = {
  exercise: '30-60',
  sets: '45-90'
}

const exercises = [
  // day A
  {
    day: 'a',
    name: 'Bodyweight Squats',
    label: 'Squat',
    hints: [
      'Esegui la variante con o senza i manubri a seconda della difficoltà.'
    ],
    images: [
      {
        label: 'Base',
        src: './assets/squat.gif'
      },
      {
        label: 'Con manubri',
        src: './assets/squat-w-dumbbell.gif'
      },
    ],
    rest: BASE_REST,
    sets: 2,
    reps: '10',
  },
  {
    day: 'a',
    name: 'Dumbbell Glute Bridges',
    label: 'Ponte',
    hints: [
      'Se troppo difficile, rimuovi il manubrio.'
    ],
    images: [
      {
        label: 'Base',
        src: './assets/glutes-bridge.gif'
      }
    ],
    rest: BASE_REST,
    sets: 2,
    reps: '10',
  },
  {
    day: 'a',
    name: 'Side Leg Raises',
    label: 'Alzata di gamba laterale',
    hints: [
      'Se troppo facile, appoggia un manubrio sulla gamba, tenendolo stabile con la mano.',
      'Non serve andare in alto come la tizia, quella è matta.',
      'Cerca di mantenere la gamba tesa, e abbassala lentamente.',
    ],
    images: [
      {
        label: 'Base',
        src: './assets/side-leg-raise.gif'
      }
    ],
    rest: BASE_REST,
    sets: 2,
    reps: '8 per gamba',
  },
  {
    day: 'a',
    name: 'Seated Calf Raises',
    label: 'Alzata di polpaccio seduta',
    hints: [
      'Esegui la variante con o senza i manubri a seconda della difficoltà.'
    ],
    images: [
      {
        label: 'Base',
        src: './assets/calf-raises.jpg'
      },
      {
        label: 'Con manubrio',
        src: './assets/calf-raises-w-dumbbell.jpg'
      }
    ],
    rest: BASE_REST,
    sets: 2,
    reps: '10 per gamba',
  },
  // day B
  {
    day: 'b',
    name: 'Dumbbell Bicep Curls',
    label: 'Curl',
    hints: [
      'Tieni i gomiti vicini al corpo. Se più comodo, ruota i polsi durante il movimento.'
    ],
    warnings: [
      'Non inclinare la schiena indietro! Se non riesci, non fare l\'esercizio, o togli'
      + ' il peso'
    ],
    images: [
      {
        label: 'Senza rotazione dei gomiti',
        src: './assets/curl.gif'
      },
      {
        label: 'Con rotazione dei gomiti',
        src: './assets/curl-2.gif'
      }
    ],
    rest: BASE_REST,
    sets: 2,
    reps: '10',
  },
  {
    day: 'b',
    name: 'Dumbbell Shoulder Press',
    label: 'Spinte',
    hints: [
      'Cerca di abbassare i manubri lentamente.'
    ],
    images: [
      {
        label: 'Base',
        src: './assets/shoulder-press.gif'
      }
    ],
    rest: BASE_REST,
    sets: 2,
    reps: '8-10',
  },
  {
    day: 'b',
    name: 'Dumbbell Side Raises',
    label: 'Alzate laterali',
    hints: [
      'Se più comodo, mantieni le braccia leggermente piegate.'
    ],
    images: [
      {
        label: 'Base',
        src: './assets/side-raises.gif'
      }
    ],
    rest: BASE_REST,
    sets: 2,
    reps: '8',
  },
  {
    day: 'b',
    name: 'Dumbbell Rear Delt Squeeze',
    label: 'Croci inverse',
    warnings: [
      'Tieni la schiena dritta! Se non riesci, non fare l\'esercizio, o togli il peso'
    ],
    images: [
      {
        label: 'Base',
        src: './assets/rear-deltoid-lift.gif'
      }
    ],
    rest: BASE_REST,
    sets: 2,
    reps: '8',
  },
  // day C
  {
    day: 'c',
    name: 'Russian Twists',
    label: 'Twist russi',
    hints: [
      'Esegui la variante con o senza i manubri a seconda della difficoltà.'
    ],
    images: [
      {
        label: 'Base',
        src: './assets/russian-twist.gif'
      },
      {
        label: 'Esempio con manubri',
        src: './assets/russian-twist-w-dumbbell.gif'
      }
    ],
    rest: BASE_REST,
    sets: 2,
    reps: '10 twist (5 per lato)',
  },
  {
    day: 'c',
    name: 'Plank Hold',
    label: 'Plank',
    hints: [
      'Tieni la schiena dritta!'
    ],
    images: [
      {
        label: 'Base',
        src: './assets/plank.jpg'
      }
    ],
    rest: BASE_REST,
    sets: 2,
    hold: '20-45 secondi',
  },
  {
    day: 'c',
    name: 'Side Plank Hold',
    label: 'Plank laterale',
    hints: [
      'Posiziona un manubrio lungo la gamba per aumentare la difficoltà.'
    ],
    images: [
      {
        label: 'Base',
        src: './assets/side-plank.jpg'
      }
    ],
    rest: BASE_REST,
    sets: 2,
    hold: '20-45 secondi per lato',
  },
  {
    day: 'c',
    name: 'Wall Sit',
    label: 'Sedia al muro',
    hints: [
      'Esegui la variante con o senza i manubri a seconda della difficoltà.',
      'Tieni le braccia come vuoi, specie nella variante senza manubri.',
    ],
    images: [
      {
        label: 'Base',
        src: './assets/wall-sit.jpg'
      },
      {
        label: 'Con manubri',
        src: './assets/wall-sit-w-dumbbell.jpg'
      }
    ],
    rest: BASE_REST,
    sets: 2,
    hold: '15 secondi',
  },
]


// Fill list

const loadExercises = (inputDay) => {
  exercises
    .filter(({day}) => day === inputDay)
    .forEach(({
      hints, warnings, images, label, rest, sets, reps, hold
    }, idx) => {
      const li = document.createElement('li')
      li.classList.add('exercise-item')
      
      // exercise title
      const label_el = document.createElement('h3')
      label_el.classList.add('label')
      label_el.innerText = `${idx+1}. ${label}`
      li.appendChild(label_el)

      // number of repetitions / time of hold
      if (reps) {
        const reps_el = document.createElement('span')
        reps_el.classList.add('reps')
        reps_el.innerText = `Ripetizioni: ${reps}`
        li.appendChild(reps_el)
      }
      if (hold) {
        const hold_el = document.createElement('span')
        hold_el.classList.add('hold')
        hold_el.innerText = `Mantieni per: ${hold}`
        li.appendChild(hold_el)
      }

      // number of sets
      const sets_el = document.createElement('span')
      sets_el.classList.add('sets')
      sets_el.innerText = `Set: ${sets}`
      li.appendChild(sets_el)
      
      // rest time
      const rest_el = document.createElement('span')
      rest_el.classList.add('rest')
      rest_el.innerText = `Riposa per ${rest.sets} secondi fra un set e l'altro`
      li.appendChild(rest_el)
      
      // hints and caution messages
      if ((hints && hints.length > 0) || (warnings && warnings.length > 0)) {
        const hints_container = document.createElement('div')
        hints_container.classList.add('hints-container')

        const hints_title_el = document.createElement('span')
        hints_title_el.classList.add('hint-list-title')
        hints_title_el.innerText = 'Note:'
        hints_container.appendChild(hints_title_el)

        const hints_list_el = document.createElement('ul')
        hints_list_el.classList.add('hint-list')
        hints_container.appendChild(hints_list_el)
        
        warnings?.forEach((warning) => {
          const warning_el = document.createElement('li')
          warning_el.classList.add('warning')
          warning_el.innerText = warning
          hints_list_el.appendChild(warning_el)
        })

        hints?.forEach((hint) => {
          const hint_el = document.createElement('li')
          hint_el.classList.add('hint')
          hint_el.innerText = hint
          hints_list_el.appendChild(hint_el)
        })

        li.appendChild(hints_container)
      }

      // accordion with examples
      const examples_el = document.createElement('div')
      examples_el.classList.add('examples')
      images.forEach(({ label, src }) => {
        const container = document.createElement('div')
        container.classList.add('example-img-container')
        
        const name = document.createElement('span')
        name.innerText = label
        container.appendChild(name)

        const img = document.createElement('img')
        img.src = src
        img.alt = label
        container.appendChild(img)
        
        examples_el.appendChild(container)
      })
      
      const accordion = document.createElement('details')
      accordion.classList.add('example-accordion')
      accordion.open = true
      const summary = document.createElement('summary')
      summary.innerText = 'Esempi'
      accordion.appendChild(summary)
      accordion.appendChild(examples_el)
      li.appendChild(accordion)

      list.appendChild(li)
    })
}

const list = document.querySelector('#exerciseList')
const tabs = document.querySelector('#filterTabs')

loadExercises('a')

tabs
  .querySelectorAll('.tab')
  .forEach((tab_el) => {
    tab_el.addEventListener('click', () => {
      tabs.querySelectorAll('.tab').forEach(d => d.classList.remove('selected'))
      tab_el.classList.add('selected')

      list.innerHTML = "";
      const selectedDay = tab_el.id
      loadExercises(selectedDay)
    })
  })

