class ExerciseWizardStep extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const type = this.getAttribute('type')
    const label = this.getAttribute('label') || ''
    const setNr = this.getAttribute('set-nr')
    const exerciseNr = this.getAttribute('exercise-nr')
    const data = this.getAttribute('data')
      ? JSON.parse(this.getAttribute('data')) : {}

    if (type === 'exercise' && data.reps) {
      this.shadowRoot.innerHTML = this.makeRepsContent(type, label, setNr, exerciseNr, data)
    }
    else if (type === 'exercise' && data.hold) {
      const { hold } = data
      // // TODO: timer
      this.shadowRoot.innerHTML = `<rest-counter start=${hold} />`
    }
    else if (type === 'rest') {
      const { rest } = data
      // // TODO: timer
      // this.shadowRoot.innerHTML = `
      //   <div>Riposa per ${rest} seconds</div>
      // `
      this.shadowRoot.innerHTML = `<rest-counter start=${10} />`
    }
  }

  makeRepsContent(
    type, label, setNr, exerciseNr, data
  ) {
    const {
      instructions = [],
      hints = [],
      warnings = [],
      images = [],
      rest = '',
      reps = '',
      sets = '',
      weight = '',
    } = data

    return `
        <link rel="stylesheet" href="../base.css">
        <link rel="stylesheet" href="./exercise-wizard-step.css">
        <div class="wizard-step-container">
          <h3>${label} (set ${setNr} di ${sets})</h3>
          <div class="exercise-item">
            <span class="reps">Ripetizioni: ${reps}</span>
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
