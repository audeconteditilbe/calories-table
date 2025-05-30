const secondsReadable = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}m ${remainingSeconds}s`
}

class ExerciseWizardStep extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const type = this.getAttribute('type')
    const label = this.getAttribute('label')
    const setNr = this.getAttribute('set-nr')
    const stepNr = this.getAttribute('step-nr')
    const exerciseNr = this.getAttribute('exercise-nr')
    const data = this.getAttribute('data')
      ? JSON.parse(this.getAttribute('data')) : {}

    let content = `
      <span>
        Ups tuo fratello è un po' pirla e ha sbagliato qualcosa... mandagli un messaggio!
      </span>
    `

    if (type === 'exercise' && data.reps) {
      content = this.makeExerciseCard(label, setNr, data)
    }
    else if (type === 'exercise' && data.hold) {
      const { hold } = data
      console.log('hold', this.makeExerciseCard(label, setNr, data))
      content = `
        <div>
          <hold-counter start=${hold}></hold-counter>
          <br />
          ${this.makeExerciseCard(label, setNr, data)}
        </div>
      `
    }
    else if (type === 'rest') {
      const { rest } = data
      content = `<rest-counter start=${rest} />`
    }
    else if (type === 'change-exercise') {
      const { next } = data
      content = `
        <div class="intermezzo-step">
          <span>Prossimo esercizio:</span>
          <h3>${next}</h3>
        </div>
      `
    } else if (type === 'finish') {
      const { startTime, totalExercises } = data
      content = `
        <div class="intermezzo-step finish">
          <span>Brava!</span>
          <span>Hai completato l'allenamento!</span>
          <span>Tempo totale: ${secondsReadable(Math.floor((new Date().getTime() - startTime) / 1000))}</span>
          <span>Numero di esercizi: ${totalExercises}</span>
        </div>
      `
    }

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../base.css">
      <link rel="stylesheet" href="./exercise-wizard-step.css">
      ${content}
    `
  }

  makeExerciseCard(
    label,
    setNr,
    data
  ) {
    const {
      instructions = [],
      hints = [],
      warnings = [],
      images = [],
      reps = '',
      sets = '',
      weight = '',
    } = data

    return `
        <div class="exercise-step">
          <h3>${label} (set ${setNr} di ${sets})</h3>
          <div class="exercise-item">
            ${reps && `<span class="reps">Ripetizioni: ${reps}</span>`}
            ${weight ? `<span class="weight">Peso suggerito: ${weight}</span>` : ''}
            ${this.makeHints(instructions, hints, warnings)}
            ${this.makeExamples(images)}
          </div>
        </div>
      `
  }

  makeExamples(images) {
    if (images.length === 0) return ''
    const exampleAccordions = images.map(({ label, src, open = true }) => {
      return `
        <details class="example-accordion" ${open ? 'open' : ''}>
          <summary>${label}</summary>
          <div class="example-img-container">
            <img src="${src}" alt="${label}" />
          </div>
        </details>
      `
    }).join('')
    return `<div class="examples">${exampleAccordions}</div>`
  }

  makeHints(instructions, hints, warnings) {
    if (
      (instructions && instructions.length > 0)
      || (hints && hints.length > 0)
      || (warnings && warnings.length > 0)
    ) {
      return `
        <div class="message-container">
          <span class="message-list-title">Note:</span>
          <ul class="message-list">
            ${instructions.map(instruction => `<li class="instruction">${instruction}</li>`).join('')}
            ${instructions.length > 0 ? '<br />' : ''}
            ${warnings.map(warning => `<li class="warning">${warning}</li>`).join('')}
            ${warnings.length > 0 ? '<br />' : ''}
            ${hints.map(hint => `<li class="hint">${hint}</li>`).join('')}
          </ul>
        </div>
      `
    }
    return ''
  }
}
customElements.define('exercise-wizard-step', ExerciseWizardStep)
