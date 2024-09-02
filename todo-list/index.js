const DEFAULT_STATE_ITEM = {
  phExercise: false,
  houseKeeping: false,
  laundry: false
}

const LOCAL_STORAGE_KEY = 'todo-list'


const list = document.getElementById('root')

const read = () => {
  let state = {}
  
  const stateStr = window.localStorage.getItem(LOCAL_STORAGE_KEY)
  if (stateStr) {
    try {
      state = JSON.parse(stateStr)
    } catch {
      console.error('Unable to parse local storage')
      state = {}
    }
  }
  
  const now = new Date()
  const y = now.getFullYear()
  const m = now.getMonth()
  const d = now.getDate()
  const key = `${d}/${m}/${y}`

  if (!(key in state)) {
    state[key] = DEFAULT_STATE_ITEM
  }

  return state
}

const write = (state) => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
}

const createListItem = (key, {phExercise = false, houseKeeping = false, laundry = false} = {}) => { 
  const li = document.createElement('li')

  const p = document.createElement('p')
  p.innerText = key
  li.appendChild(p)
  
  const innerList = document.createElement('ul')
  
  ;[
    ['Physical excercise', 'pe', phExercise],
    ['House keeping', 'hk', houseKeeping],
    ['Laundry', 'l', laundry],
  ].forEach(([title, id, status]) => {
    const li = document.createElement('li')
    li.innerText = title
    
    const span = document.createElement('span')
    span.setAttribute('id', `${id}-${key}`)
    span.innerText = status ? 'YES' : 'NO'
    li.appendChild(span)
    
    innerList.appendChild(li)
  })
  
  li.appendChild(innerList)
  return li
}

const load = () => {
  const state = read()

  Object.entries(state).map(([key, content]) => {
    const li = createListItem(key, content)
    
    const peBtn = document.createElement('button')
    peBtn.innerText = 'PE'
    peBtn.addEventListener('click', () => {
      state[key].phExercise = !state[key].phExercise
      document.getElementById(`pe-${key}`).innerText = state[key].phExercise ? 'YES' : 'NO'
      write(state)
    })
    
    const hkBtn = document.createElement('button')
    hkBtn.innerText = 'House Keeping'
    hkBtn.addEventListener('click', () => {
      state[key].houseKeeping = !state[key].houseKeeping
      document.getElementById(`hk-${key}`).innerText = state[key].houseKeeping ? 'YES' : 'NO'
      write(state)
    })

    const lBtn = document.createElement('button')
    lBtn.innerText = 'Laundry'
    lBtn.addEventListener('click', () => {
      state[key].laundry = !state[key].laundry
      document.getElementById(`l-${key}`).innerText = state[key].laundry ? 'YES' : 'NO'
      write(state)
    })
    

    list.appendChild(li)
    list.appendChild(peBtn)
    list.appendChild(hkBtn)
    list.appendChild(lBtn)
  })


}

load()