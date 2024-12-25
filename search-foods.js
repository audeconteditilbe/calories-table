const searchInput = document.getElementById('search')
searchInput.addEventListener('keyup', function () {
  const query = searchInput.value.toLowerCase()

  // Get all the rows in the table except the header row
  const rows = document.querySelectorAll('#foodTable tr:not(:first-child)')

  rows.forEach(row => {
    const cells = row.getElementsByTagName('td')
    let match = false

    for (let i = 0; i < cells.length; i++) {
      if (cells[i].innerText.toLowerCase().includes(query)) {
        match = true
        break
      }
    }

    if (match) {
      row.style.display = ''
    } else {
      row.style.display = 'none'
    }
  })
})