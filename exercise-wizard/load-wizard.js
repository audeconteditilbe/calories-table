const container = document.querySelector('#wizardContainer')
const prevButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')

const context = JSON.parse(sessionStorage.getItem('context')) ?? {}
let currentStep = 0

const backHref = context.day
  ? `../exercise/index.html?day=${context.day}`
  : "../index.html"

const pageTitle = context.day
  ? `Giorno ${context.day.toUpperCase()}`
  : 'Daje 💪'

const makeSteps = (exercises) => {
  return exercises.reduce((acc, exercise, exerciseIdx) => {
    const { rest, sets, label } = exercise
    const isLastExercise = exerciseIdx === exercises.length - 1

    Array(sets).fill(0).forEach((_, setIdx) => {
      const isLastSet = setIdx === sets - 1
      acc.push({
        type: 'exercise',
        setNr: setIdx + 1,
        exerciseNr: exerciseIdx + 1,
        label,
        data: exercise,
      })
      if (!isLastSet) {
        acc.push({
          type: 'rest',
          setNr: setIdx + 1,
          exerciseNr: exerciseIdx + 1,
          label,
          data: { rest },
        })
      } else if (isLastSet && !isLastExercise) {
        acc.push({
          type: 'change-exercise',
          setNr: setIdx + 1,
          exerciseNr: exerciseIdx + 1,
          label,
          data: {
            next: exercises[exerciseIdx + 1].label,
          },
        })
      } else if (isLastSet && isLastExercise) {
        acc.push({
          type: 'finish',
          setNr: setIdx + 1,
          exerciseNr: exerciseIdx + 1,
          label,
          data: {},
        })
      }
    })
    return acc
  }, [])
}

const emit = (event) => {
  container.dispatchEvent(
    new CustomEvent(event, { bubbles: true, composed: true })
  )
}

// set page title
const title = document.querySelector('#pageTitle')
title.innerHTML = pageTitle

// set back button target
const backButton = document.querySelector('#backButton')
backButton.href = backHref

// load step
const loadStep = ({
  type, setNr, exerciseNr, label, data
}, stepNr) => {
  container.innerHTML = ''

  const item = document.createElement('exercise-wizard-step')
  item.setAttribute('type', type)
  item.setAttribute('set-nr', setNr)
  item.setAttribute('exercise-nr', exerciseNr)
  item.setAttribute('label', label)
  item.setAttribute('step-nr', stepNr)
  item.setAttribute('data', JSON.stringify(data))

  container.appendChild(item)
}

// handle steps navigation
const reactToNextStep = () => {
  if (currentStep === steps.length - 1) {
    nextButton.innerHTML = 'Fine'
  } else {
    nextButton.innerHTML = 'Avanti'
  }
  if (currentStep === 0) {
    prevButton.classList.add('disabled')
    prevButton.setAttribute('disabled', true)
  } else {
    prevButton.classList.remove('disabled')
    prevButton.removeAttribute('disabled')
  }

}
const onNext = () => {
  if (currentStep < steps.length - 1) {
    currentStep += 1
    loadStep(steps[currentStep], currentStep)
  } else {
    window.location.href = backHref
  }
  reactToNextStep()
}
const onPrev = () => {
  if (currentStep > 0) {
    currentStep -= 1
    loadStep(steps[currentStep], currentStep)
  }
  reactToNextStep()
}
prevButton.addEventListener('click', () => emit('prev-step'))
nextButton.addEventListener('click', () => emit('next-step'))
container.addEventListener('prev-step', onPrev)
container.addEventListener('next-step', onNext)

// init
const steps = makeSteps(context.exercises)
loadStep(steps[0], 0)
