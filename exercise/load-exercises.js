const SHORT_REST = '45'

const SHORT_SET = 2
const LONG_SET = 3

const DAY_A = 'a'
const DAY_B = 'b'
const DAY_C = 'c'

const img = (fileName) => `../assets/exercises/${fileName}`

const exercises = [
  // day A
  {
    day: DAY_A,
    name: 'Bodyweight Squats',
    label: 'Squat',
    hints: [
      'Esegui la variante con o senza bilanciere a seconda della difficoltà.'
    ],
    instructions: [],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: img('squat.gif')
      },
      {
        label: 'Con bilanciere',
        src: img('squat-w-barbell.gif')
      },
    ],
    rest: SHORT_REST,
    sets: LONG_SET,
    reps: '10',
    weight: 'Bilanciere',
  },
  {
    day: DAY_A,
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
        src: img('glutes-bridge.gif')
      }
    ],
    rest: SHORT_REST,
    sets: LONG_SET,
    reps: '10',
    weight: '10kg'
  },
  {
    day: DAY_A,
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
        src: img('side-leg-raise.gif')
      }
    ],
    rest: SHORT_REST,
    sets: LONG_SET,
    reps: '10 per gamba (gamba destra + gamba sinistra contano come un solo set!)',
    weight: null,
  },
  {
    day: DAY_A,
    name: 'Seated Calf Raises',
    label: 'Alzata di polpaccio',
    instructions: [],
    hints: [
      'Esegui la variante con o senza i manubri a seconda della difficoltà.'
    ],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: img('calf-raises.gif')
      },
      {
        label: 'Con bilancere',
        src: img('calf-raises-w-dumbbell.gif')
      }
    ],
    rest: SHORT_REST,
    sets: LONG_SET,
    reps: '10',
    weight: '2kg per mano'
  },
  // day B
  {
    day: DAY_B,
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
        src: img('curl.gif')
      },
      {
        label: 'Con rotazione dei gomiti',
        src: img('curl-2.gif')
      }
    ],
    rest: SHORT_REST,
    sets: LONG_SET,
    reps: '8',
    weight: '2kg',
  },
  {
    day: DAY_B,
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
        src: img('shoulder-press.gif')
      }
    ],
    rest: SHORT_REST,
    sets: LONG_SET,
    reps: '8',
    weight: 'Bilanciere',
  },
  {
    day: DAY_B,
    name: 'Dumbbell Side Raises',
    label: 'Alzate laterali',
    instructions: [
      'Mantieni le braccia leggermente piegate.'
    ],
    hints: [],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: img('side-raises.gif')
      }
    ],
    rest: SHORT_REST,
    sets: SHORT_SET,
    reps: '10',
    weight: '1kg o senza',
  },
  {
    day: DAY_B,
    name: 'Dumbbell Rear Delt Squeeze',
    label: 'Croci inverse',
    instructions: [],
    warnings: [
      'Tieni la schiena dritta! Se non riesci, non fare l\'esercizio, o togli il peso'
    ],
    images: [
      {
        label: 'Base',
        src: img('rear-deltoid-lift.gif')
      }
    ],
    rest: SHORT_REST,
    sets: SHORT_SET,
    reps: '5',
    weight: '2kg',
  },
  // day C
  {
    day: DAY_C,
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
        src: img('russian-twist.gif')
      },
      {
        label: 'Esempio con manubri',
        src: img('russian-twist-w-dumbbell.gif')
      }
    ],
    rest: SHORT_REST,
    sets: LONG_SET,
    reps: '20 twist (10 per lato)',
    weight: '2kg (senza manubrio: solo il disco o i due pesetti insieme)',
  },
  {
    day: DAY_C,
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
        src: img('plank.jpg')
      }
    ],
    rest: SHORT_REST,
    sets: SHORT_SET,
    hold: '60 secondi',
    weight: null,
  },
  {
    day: DAY_C,
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
        src: img('side-plank.jpg')
      }
    ],
    rest: SHORT_REST,
    sets: SHORT_SET,
    hold: '45 secondi per lato',
    weight: null,
  },
  {
    day: DAY_C,
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
        src: img('wall-sit.jpg')
      },
      {
        label: 'Con manubri',
        src: img('wall-sit-w-dumbbell.jpg')
      }
    ],
    rest: SHORT_REST,
    sets: SHORT_SET,
    hold: '45 secondi',
    weight: '2kg per mano',
  },
]

const list = document.querySelector('#exerciseList')
const tabsContainer = document.querySelector('#filterTabs')
const tabs = tabsContainer.querySelectorAll('.tab')

const makeHints = (instructions, hints, warnings) => {
  const list = []
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

    list.push(messages_container)
  }
  return list
}

const makeExamples = (images) => {
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

  return examples_el
}

const loadExercises = (inputDay) => {
  exercises
    .filter(({ day }) => day === inputDay)
    .forEach(({
      instructions, hints, warnings, images, label, rest, sets, reps, hold, weight
    }, idx) => {
      const li = document.createElement('li')
      li.classList.add('exercise-item')

      const accordion = document.createElement('details')
      accordion.open = true
      const summary = document.createElement('summary')
      summary.innerText = `${idx + 1}. ${label}`
      accordion.appendChild(summary)

      // number of repetitions / time of hold
      if (reps) {
        const reps_el = document.createElement('span')
        reps_el.classList.add('reps')
        reps_el.innerText = `Ripetizioni: ${reps}`
        accordion.appendChild(reps_el)
      }
      if (hold) {
        const hold_el = document.createElement('span')
        hold_el.classList.add('hold')
        hold_el.innerText = `Mantieni per: ${hold}`
        accordion.appendChild(hold_el)
      }

      // number of sets
      const sets_el = document.createElement('span')
      sets_el.classList.add('sets')
      sets_el.innerText = `Set: ${sets}`
      accordion.appendChild(sets_el)

      // rest time
      const rest_el = document.createElement('span')
      rest_el.classList.add('rest')
      rest_el.innerText = `Riposo: ${rest} secondi fra un set e l'altro`
      accordion.appendChild(rest_el)

      // weight
      if (weight) {
        const weight_el = document.createElement('span')
        weight_el.classList.add('weight')
        weight_el.innerText = `Peso suggerito: ${weight}`
        accordion.appendChild(weight_el)
      }

      // hints and caution messages
      makeHints(instructions, hints, warnings)
        .forEach((msg) => accordion.appendChild(msg))

      // accordion with examples
      const examples_el = makeExamples(images)
      accordion.appendChild(examples_el)

      li.appendChild(accordion)
      list.appendChild(li)
    })
}

const onTabClick = (tab_el) => {
  tabs.forEach(d => d.classList.remove('selected'))
  tab_el.classList.add('selected')

  list.innerHTML = "";
  const selectedDay = tab_el.id
  loadExercises(selectedDay)
}

loadExercises(DAY_A)
tabs.forEach((tab_el) =>
  tab_el.addEventListener('click', () => onTabClick(tab_el))
)

