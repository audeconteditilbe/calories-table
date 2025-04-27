const container = document.querySelector('#wizardContainer')
const prevButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')

const context = JSON.parse(sessionStorage.getItem('context')) ?? {}
let currentStep = 0

const makeSteps = (exercises) => {
  return exercises.reduce((acc, exercise, exerciseNr) => {
    const { rest, sets, label } = exercise
    Array(sets).fill(0).forEach((_, setNr) => {
      acc.push({
        type: 'exercise',
        setNr: setNr + 1,
        exerciseNr: exerciseNr + 1,
        label,
        data: exercise,
      })
      if (setNr + 1 !== sets) {
        acc.push({
          type: 'rest',
          setNr: setNr + 1,
          exerciseNr: exerciseNr + 1,
          label,
          data: { rest },
        })
      }
    })
    return acc
  }, [])
}

// define back button target
const backButton = document.querySelector('#backButton')
backButton.href = context.day
  ? `../exercise/index.html?day=${context.day}`
  : "../index.html"

// load step
const loadStep = ({
  type, setNr, exerciseNr, label, data
}, stepNr) => {
  console.log('loading', stepNr)
  container.innerHTML = ''

  const item = document.createElement('exercise-wizard-step')
  item.setAttribute('type', type)
  item.setAttribute('set-nr', setNr)
  item.setAttribute('exercise-nr', exerciseNr)
  item.setAttribute('label', label)
  item.setAttribute('data', JSON.stringify(data))

  container.appendChild(item)
}

const onNext = () => {
  currentStep += 1
  loadStep(steps[currentStep], currentStep)
}
const onPrev = () => {
  currentStep -= 1
  loadStep(steps[currentStep], currentStep)
}
prevButton.addEventListener('click', () => {
  container.dispatchEvent(new CustomEvent(
    'prev-step',
    { bubbles: true, composed: true }
  ))
})
nextButton.addEventListener('click', () => {
  container.dispatchEvent(new CustomEvent(
    'next-step',
    { bubbles: true, composed: true }
  ))
})
container.addEventListener('prev-step', onPrev)
container.addEventListener('next-step', onNext)

const steps = makeSteps(context.exercises)
loadStep(steps[0], 0)
