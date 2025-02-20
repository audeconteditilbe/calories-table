const SHORT_REST = '45'
const LONG_REST = '60'

const exercises = [
  // day A
  {
    day: 'a',
    name: 'Bodyweight Squats',
    label: 'Squat',
    hints: [
      'Esegui la variante con o senza i manubri a seconda della difficoltà.'
    ],
    instructions: [],
    warnings: [],
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
    rest: SHORT_REST,
    sets: 3,
    reps: '10',
    weight: null,
  },
  {
    day: 'a',
    name: 'Dumbbell Glute Bridges',
    label: 'Ponte',
    instructions: [],
    hints: [
      'Se troppo difficile, rimuovi il manubrio.'
    ],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: './assets/glutes-bridge.gif'
      }
    ],
    rest: SHORT_REST,
    sets: 3,
    reps: '10',
    weight: '5kg'
  },
  {
    day: 'a',
    name: 'Side Leg Raises',
    label: 'Alzata di gamba laterale',
    instructions: [
      'Cerca di mantenere la gamba tesa, e abbassala lentamente.',
      'Una singola ripetizione è composta da una serie su entrambe le gambe!',
      'Non serve fare una pausa fra una gamba e l\'altra. Quindi: 8 gamba destra + 8 gamba sinistra, pausa, 8+8, pausa, 8+8.',
    ],
    hints: [
      'Se troppo facile, appoggia un manubrio sulla gamba, tenendolo stabile con la mano.',
      'Non serve andare in alto come la tizia, quella è matta.',
    ],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: './assets/side-leg-raise.gif'
      }
    ],
    rest: SHORT_REST,
    sets: 3,
    reps: '8 per gamba (gamba destra + gamba sinistra contano come un solo set!)',
    weight: null,
  },
  {
    day: 'a',
    name: 'Seated Calf Raises',
    label: 'Alzata di polpaccio seduta',
    instructions: [],
    hints: [
      'Esegui la variante con o senza i manubri a seconda della difficoltà.'
    ],
    warnings: [],
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
    rest: SHORT_REST,
    sets: 3,
    reps: '10 per gamba',
    weight: '2kg per gamba',
  },
  // day B
  {
    day: 'b',
    name: 'Dumbbell Bicep Curls',
    label: 'Curl',
    instructions: [
      'Tieni i gomiti vicini al corpo.',
    ],
    hints: [
      'Se più comodo, ruota i polsi durante il movimento.'
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
    rest: LONG_REST,
    sets: 2,
    reps: '8',
    weight: '2kg',
  },
  {
    day: 'b',
    name: 'Dumbbell Shoulder Press',
    label: 'Spinte',
    instructions: [
    ],
    hints: [
      'Cerca di abbassare i manubri lentamente.'
    ],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: './assets/shoulder-press.gif'
      }
    ],
    rest: LONG_REST,
    sets: 2,
    reps: '8',
    weight: '1kg o senza',
  },
  {
    day: 'b',
    name: 'Dumbbell Side Raises',
    label: 'Alzate laterali',
    instructions: [],
    hints: [
      'Se più comodo, mantieni le braccia leggermente piegate.'
    ],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: './assets/side-raises.gif'
      }
    ],
    rest: LONG_REST,
    sets: 2,
    reps: '8',
    weight: '1kg o senza',
  },
  {
    day: 'b',
    name: 'Dumbbell Rear Delt Squeeze',
    label: 'Croci inverse',
    instructions: [],
    warnings: [
      'Tieni la schiena dritta! Se non riesci, non fare l\'esercizio, o togli il peso'
    ],
    images: [
      {
        label: 'Base',
        src: './assets/rear-deltoid-lift.gif'
      }
    ],
    rest: LONG_REST,
    sets: 2,
    reps: '8',
    weight: '1kg o 2kg',
  },
  // day C
  {
    day: 'c',
    name: 'Russian Twists',
    label: 'Twist russi',
    instructions: [],
    hints: [
      'Esegui la variante con o senza i manubri a seconda della difficoltà.'
    ],
    warnings: [],
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
    rest: SHORT_REST,
    sets: 3,
    reps: '14 twist (7 per lato)',
    weight: null,
  },
  {
    day: 'c',
    name: 'Plank Hold',
    label: 'Plank',
    instructions: [],
    hints: [
      'Tieni la schiena dritta!'
    ],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: './assets/plank.jpg'
      }
    ],
    rest: LONG_REST,
    sets: 2,
    hold: '60 secondi',
    weight: null,
  },
  {
    day: 'c',
    name: 'Side Plank Hold',
    label: 'Plank laterale',
    instructions: [],
    hints: [
      'Posiziona un manubrio lungo la gamba per aumentare la difficoltà.'
    ],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: './assets/side-plank.jpg'
      }
    ],
    rest: LONG_REST,
    sets: 2,
    hold: '45 secondi per lato',
    weight: null,
  },
  {
    day: 'c',
    name: 'Wall Sit',
    label: 'Sedia al muro',
    instructions: [],
    hints: [
      'Esegui la variante con o senza i manubri a seconda della difficoltà.',
      'Tieni le braccia come vuoi, specie nella variante senza manubri.',
    ],
    warnings: [],
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
    rest: LONG_REST,
    sets: 2,
    hold: '60 secondi',
    weight: null,
  },
]

// Fill list

const loadExercises = (inputDay) => {
  exercises
    .filter(({ day }) => day === inputDay)
    .forEach(({
      instructions, hints, warnings, images, label, rest, sets, reps, hold, weight
    }, idx) => {
      const li = document.createElement('li')
      li.classList.add('exercise-item')

      // exercise title
      const label_el = document.createElement('h3')
      label_el.classList.add('label')
      label_el.innerText = `${idx + 1}. ${label}`
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
      rest_el.innerText = `Riposa per ${rest} secondi fra un set e l'altro`
      li.appendChild(rest_el)

      // weight
      if (weight) {
        const weight_el = document.createElement('span')
        weight_el.classList.add('weight')
        weight_el.innerText = `Peso suggerito: ${weight}`
        li.appendChild(weight_el)
      }

      // hints and caution messages
      if (
        (instructions && instructions.length > 0)
        || (hints && hints.length > 0)
        || (warnings && warnings.length > 0)
      ) {
        const messages_container = document.createElement('div')
        messages_container.classList.add('message-container')

        const messages_title_el = document.createElement('span')
        messages_title_el.classList.add('message-list-title')
        messages_title_el.innerText = 'Note:'
        messages_container.appendChild(messages_title_el)

        const messages_ul = document.createElement('ul')
        messages_ul.classList.add('message-list')
        messages_container.appendChild(messages_ul)

        warnings?.forEach((warning) => {
          const warning_el = document.createElement('li')
          warning_el.classList.add('warning')
          warning_el.innerText = warning
          messages_ul.appendChild(warning_el)
        })
        if (warnings.length > 0) {
          messages_ul.appendChild(document.createElement('br'))
        }
        instructions?.forEach((instruction) => {
          const instruction_el = document.createElement('li')
          instruction_el.classList.add('instruction')
          instruction_el.innerText = instruction
          messages_ul.appendChild(instruction_el)
        })

        if (instructions.length > 0) {
          messages_ul.appendChild(document.createElement('br'))
        }

        hints?.forEach((hint) => {
          const hint_el = document.createElement('li')
          hint_el.classList.add('hint')
          hint_el.innerText = hint
          messages_ul.appendChild(hint_el)
        })

        li.appendChild(messages_container)
      }

      // accordion with examples
      const examples_el = document.createElement('div')
      examples_el.classList.add('examples')
      images.forEach(({ label, src }) => {
        const container = document.createElement('div')
        container.classList.add('example-img-container')

        const img = document.createElement('img')
        img.src = src
        img.alt = label
        container.appendChild(img)

        const accordion = document.createElement('details')
        accordion.classList.add('example-accordion')
        accordion.open = true
        const summary = document.createElement('summary')
        summary.innerText = label
        accordion.appendChild(summary)
        accordion.appendChild(container)
        examples_el.appendChild(accordion)
      })

      li.appendChild(examples_el)

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

