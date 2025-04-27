class ExerciseItem extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const instructions = this.getAttribute('instructions')
      ? JSON.parse(this.getAttribute('instructions')) : []
    const hints = this.getAttribute('hints')
      ? JSON.parse(this.getAttribute('hints')) : []
    const warnings = this.getAttribute('warnings')
      ? JSON.parse(this.getAttribute('warnings')) : []
    const images = this.getAttribute('images')
      ? JSON.parse(this.getAttribute('images')) : []
    const label = this.getAttribute('label') || ''
    const rest = this.getAttribute('rest') || ''
    const sets = this.getAttribute('sets') || ''
    const reps = this.getAttribute('reps') || ''
    const hold = this.getAttribute('hold') || ''
    const weight = this.getAttribute('weight') || ''

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../base.css">
      <link rel="stylesheet" href="./exercise-item.css">
      <details class="exercise-accordion" open>
        <summary class="exercise-accordion-summary">
          ${label}
        </summary>
        <div class="exercise-item">
          ${reps ? `<span class="reps">Ripetizioni: ${reps}</span>` : ''}
          ${hold ? `<span class="hold">Mantieni per: ${hold}</span>` : ''}
          <span class="sets">Set: ${sets}</span>
          <span class="rest">Riposo: ${rest} secondi fra un set e l'altro</span>
          ${weight ? `<span class="weight">Peso suggerito: ${weight}</span>` : ''}

          ${this.makeHints(instructions, hints, warnings)}
          ${this.makeExamples(images)}
        </div>
      </details>
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

customElements.define('exercise-item', ExerciseItem)

