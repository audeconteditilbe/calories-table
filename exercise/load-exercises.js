const SHORT_REST = 45

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
    hints: [],
    instructions: [],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: img('squat.gif'),
        open: false
      },
      {
        label: 'Con bilanciere',
        src: img('squat-w-barbell.gif'),
        open: true
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
    instructions: [
      'Posiziona il peso all\'altezza dell\'anca. Non farlo scivolare lungo l\'addome mentre esegui l\'esercizio!',
    ],
    hints: [],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: img('glutes-bridge.gif'),
        open: true
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
      'Non serve andare in alto come la tizia, quella è matta.',
    ],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: img('side-leg-raise.gif'),
        open: true

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
    instructions: [
      'Non è necessario che il tallone arrivi a toccare a terra nella fase di discesa.',
    ],
    hints: [
    ],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: img('calf-raises.gif'),
        open: false

      },
      {
        label: 'Con manubri',
        src: img('calf-raises-w-dumbbell.gif'),
        open: true

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
      'Se più comodo, puoi ruotare i polsi durante il movimento.'
    ],
    warnings: [
      'Non inclinare la schiena indietro! Se non riesci, interrompi pure la serie.'
    ],
    images: [
      {
        label: 'Base',
        src: img('curl.gif'),
        open: false
      },
      {
        label: 'Con rotazione dei posii',
        src: img('curl-with-rotation.gif'),
        open: true
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
      'Puoi eseguire l\'esercizio sia seduta che in piedi.',
    ],
    hints: [
      'Cerca di abbassare i manubri lentamente.'
    ],
    warnings: [],
    images: [
      {
        label: 'Con manubri',
        src: img('dumbbell-shoulder-press.gif'),
        open: false,
      },
      {
        label: 'Con bilanciere',
        src: img('barbell-shoulder-press.gif'),
        open: true,
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
        src: img('side-raises.gif'),
        open: true,
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
    instructions: [
      "Tieni la schiena dritta e le braccia leggermente piegate, senza piegarle ulteriormente durante l'esercizio. Immagina di avere le braccia ingessate!",
      "Avvicina le scapole, senza portare i gomiti dietro la schiena.",
    ],
    warnings: [
      'Se ti sembra di non riuscire a fare l\'esercizio correttamente, interrompi la serie, o smetti di fare l\'esercizio in toto - tanto un\'alternativa si trova'
    ],
    images: [
      {
        label: 'Base',
        src: img('rear-deltoid-lift.gif'),
        open: true
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
    instructions: [
      "Tocca con il peso (o le mani) a terra, possibilmente leggermente dietro il punto d'appoggio a terra.",
      "Ruota l'intero bacino, muovendo le braccia solo quanto serve per toccare a terra con il peso (o le mani)",
    ],
    hints: [
      "Cerca di non far toccare i talloni a terra, a meno tu che non stia perdendo l'equilibrio.",
      "E' normale sentirne un po' di lavoro anche nelle braccia, ma dovresti sentirne la maggior parte nei muscoli addominali.",
    ],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: img('russian-twist.gif'),
        open: false
      },
      {
        label: 'Esempio con manubri',
        src: img('russian-twist-w-dumbbell.gif'),
        open: true
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
        src: img('plank.jpg'),
        open: true
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
      "Se utile per non perdere l'equilibrio, puoi toccare a terra con entrambi i piedi.",
    ],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: img('side-plank.jpg'),
        open: true
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
      'Tieni pure le braccia come vuoi: attaccate al muro, al petto, o distese in avanti',
      'Porta il sedere all\'altezza delle ginocchia. Se ti sembra troppo facile, probabilmente devi scendere ancora un po\' 🙃',
    ],
    warnings: [],
    images: [
      {
        label: 'Base',
        src: img('wall-sit.jpg'),
        open: false
      },
      {
        label: 'Con manubri',
        src: img('wall-sit-w-dumbbell.jpg'),
        open: true
      }
    ],
    rest: SHORT_REST,
    sets: SHORT_SET,
    hold: '45 secondi',
    weight: '2kg per mano',
  },
]

const getQuery = () => {
  return window.location.search.substring(1).split('&').reduce((acc, param) => {
    const [key, val] = param.split('=')
    if (key) {
      acc[key] = val
    }
    return acc
  }, {})
}

const setQuery = (patch = {}) => {
  const query = { ...getQuery(), ...patch }
  const qs = Object.entries(query).reduce((acc, [key, val]) => {
    acc.push(`${key}=${val}`)
    return acc
  }, []).join('&')
  window.history.pushState({}, '', `?${qs}`)
}

const list = document.querySelector('#exerciseList')
const tabsContainer = document.querySelector('#filterTabs')
const goToWizardButton = document.querySelector('#goToWizard')

const makeVL = () => {
  const vl = document.createElement('div')
  vl.classList.add('vl')
  return vl
}

const loadExercises = (inputDay) => {
  list.innerHTML = ""
  exercises
    .filter(({ day }) => day === inputDay)
    .forEach(({
      instructions, hints, warnings, images, label, rest, sets, reps, hold, weight
    }, idx) => {
      const li = document.createElement('li')

      const item = document.createElement('exercise-item')
      item.setAttribute('label', `${idx + 1}. ${label}`)
      reps && item.setAttribute('reps', reps)
      hold && item.setAttribute('hold', hold)
      sets && item.setAttribute('sets', sets)
      rest && item.setAttribute('rest', rest)
      weight && item.setAttribute('weight', weight)
      instructions && item.setAttribute('instructions', JSON.stringify(instructions))
      hints && item.setAttribute('hints', JSON.stringify(hints))
      warnings && item.setAttribute('warnings', JSON.stringify(warnings))
      images && item.setAttribute('images', JSON.stringify(images))

      li.appendChild(item)
      list.appendChild(li)
    })
}

const loadTabs = () => {
  const tabA = document.createElement('div')
  tabA.classList.add('nowrap', 'tab')
  tabA.id = DAY_A
  tabA.innerText = 'Giorno A'

  const tabB = document.createElement('div')
  tabB.classList.add('nowrap', 'tab')
  tabB.id = DAY_B
  tabB.innerText = 'Giorno B'

  const tabC = document.createElement('div')
  tabC.classList.add('nowrap', 'tab')
  tabC.id = DAY_C
  tabC.innerText = 'Giorno C'

  tabsContainer.appendChild(makeVL())
  tabsContainer.appendChild(tabA)
  tabsContainer.appendChild(makeVL())
  tabsContainer.appendChild(tabB)
  tabsContainer.appendChild(makeVL())
  tabsContainer.appendChild(tabC)
  tabsContainer.appendChild(makeVL())

  const tabs = [tabA, tabB, tabC]
  const onSelectedDay = (day) => {
    tabs.forEach(d => d.classList.remove('selected'))
    const tab_el = tabsContainer.querySelector(`#${day}`)
    tab_el.classList.add('selected')

    setQuery({ day })
    loadExercises(day)
  }
  tabA.addEventListener('click', () => onSelectedDay(DAY_A))
  tabB.addEventListener('click', () => onSelectedDay(DAY_B))
  tabC.addEventListener('click', () => onSelectedDay(DAY_C))

  return onSelectedDay
}

const onWizardNavigation = () => {
  const currentDay = tabsContainer.querySelector('.selected').id
  const dst = '../exercise-wizard/index.html'
  const context = {
    day: currentDay,
    exercises: exercises.filter(({ day }) => day === currentDay),
  }
  sessionStorage.setItem('context', JSON.stringify(context))
  window.location.href = dst
}

const query = getQuery()
const selectDay = loadTabs()
goToWizardButton.addEventListener('click', onWizardNavigation)
selectDay(query.day ?? DAY_A)

