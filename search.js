// Get the input element
const searchInput = document.getElementById('search');

// Add event listener for input
searchInput.addEventListener('keyup', function () {
  // Get the search query
  const query = searchInput.value.toLowerCase();

  // Get all the rows in the table except the header row
  const rows = document.querySelectorAll('#foodTable tr:not(:first-child)');

  // Loop through the rows and hide those that don't match the query
  rows.forEach(row => {
    const cells = row.getElementsByTagName('td');
    let match = false;

    // Check if any cell in the row contains the query
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].innerText.toLowerCase().includes(query)) {
        match = true;
        break;
      }
    }

    // Show or hide the row based on the match
    if (match) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});