class RestCounter extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.count = parseInt(this.getAttribute('start')) || 10
    this.intervalId = null
  }

  connectedCallback() {
    this.render()
    this.startCounter()

    this.addEventListener('next-step', () => {
      clearInterval(this.intervalId)
    })
    this.addEventListener('prev-step', () => {
      clearInterval(this.intervalId)
    })

  }

  disconnectedCallback() {
    clearInterval(this.intervalId)
  }

  startCounter() {
    this.intervalId = setInterval(() => {
      this.count--
      this.render()
      if (this.count <= 0) {
        this.dispatchEvent(new CustomEvent(
          'next-step',
          { bubbles: true, composed: true }
        ))
      }
    }, 1000)
  }

  render() {
    this.shadowRoot.innerHTML = `<div>${this.count}</div>`
  }
}

customElements.define('rest-counter', RestCounter)
