const COLORS = [
  '#81c9c8',
  '#8cc4c3',
  '#8cd1d0',
  '#8fd6d5',
  '#9fd8d7',
  '#a8e0de',
  '#b2e0de',
  '#b8e4e2',
  '#c5e8e5',
  '#c8e9e5',
  '#d8f0ec',
  '#e0f2ef',
  '#f2f2f2',
]

class HoldCounter extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.start = parseInt(this.getAttribute('start')) || 60
    this.count = this.start
    this.intervalId = null
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../base.css">
      <link rel="stylesheet" href="./counter.css">
      <div class="counter hold">
        <span id="message" class="message">Quando sei pronta premi "Inizio"</span>
        <h3 id="count" class="count" hidden>${this.start}</h3>
        <button id="btn">Inizo</button>
      </div>
    `
    this.countEl = this.shadowRoot.querySelector('#count')
    this.messageEl = this.shadowRoot.querySelector('#message')
    this.btn = this.shadowRoot.querySelector('#btn')

    this.btn.addEventListener('click', () => {
      if (this.counting) {
        this.reset()
      } else {
        this.countEl.hidden = false
        this.messageEl.hidden = true
        this.btn.textContent = '⟳'
        this.startCounter()
        this.counting = true
      }
      // this.applyBackground()
    })

    this.addEventListener('count-over', this.reset.bind(this))
    this.addEventListener('next-step', this.reset.bind(this))
    this.addEventListener('prev-step', this.reset.bind(this))
  }

  disconnectedCallback() {
    clearInterval(this.intervalId)
  }

  reset() {
    clearInterval(this.intervalId)
    this.messageEl.hidden = false
    this.countEl.hidden = true
    this.btn.textContent = 'Inizio'
    this.counting = false
    this.count = this.start
    this.countEl.textContent = this.start
  }

  updateCount() {
    if (this.countEl) {
      this.countEl.textContent = this.count
      // this.applyBackground()
    }
  }

  startCounter() {
    this.intervalId = setInterval(() => {
      this.count--
      this.updateCount()
      if (this.count <= 0) {
        this.dispatchEvent(new CustomEvent(
          'count-over',
          { bubbles: true, composed: true }
        ))
      }
    }, 1000)
  }

  // applyBackground() {
  //   const percentage = this.count / this.start
  //   const index = Math.floor(COLORS.length - (COLORS.length * percentage))
  //   const color = COLORS[index] ?? COLORS[0]
  //   this.shadowRoot.querySelector('.counter').style.backgroundColor = color
  // }
}

class RestCounter extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.start = parseInt(this.getAttribute('start')) || 45
    this.count = this.start
    this.intervalId = null
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../base.css">
      <link rel="stylesheet" href="./counter.css">
      <div class="counter rest">
        <span class="message">Riposa un po' bestia</span>
        <h3 id="count" class="count">${this.count}</h3>
        ${this.makeImg()}
      </div>
    `
    this.countEl = this.shadowRoot.querySelector('#count')
    this.startCounter()
    this.applyBackground()

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

  updateCount() {
    if (this.countEl) {
      this.countEl.textContent = this.count
      this.applyBackground()
    }
  }

  startCounter() {
    this.intervalId = setInterval(() => {
      this.count--
      this.updateCount()
      if (this.count <= 0) {
        this.dispatchEvent(new CustomEvent(
          'next-step',
          { bubbles: true, composed: true }
        ))
      }
    }, 1000)
  }

  makeImg() {
    const paths = [
      `../assets/pause/pause-1.gif`,
      `../assets/pause/pause-2.gif`,
      `../assets/pause/pause-3.gif`,
      `../assets/pause/pause-4.gif`,
      `../assets/pause/pause-5.gif`,
      `../assets/pause/pause-6.gif`,
      `../assets/pause/pause-7.gif`,
      `../assets/pause/pause-8.gif`
    ]
    const rand = Math.floor(Math.random() * paths.length)
    return `
      <div class="img-container">
        <img src=${paths[rand]} />
      </div>
    `
  }

  applyBackground() {
    const percentage = this.count / this.start
    const index = Math.floor(COLORS.length - (COLORS.length * percentage))
    const color = COLORS[index] ?? COLORS[0]
    this.shadowRoot.querySelector('.counter').style.backgroundColor = color
  }
}

customElements.define('rest-counter', RestCounter)
customElements.define('hold-counter', HoldCounter)
