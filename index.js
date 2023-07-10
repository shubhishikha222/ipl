
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');


searchButton.addEventListener('click', function() {

  const searchTerm = searchInput.value;
  
  console.log(`Searching for "${searchTerm}"...`);
});


searchInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {

    searchButton.click();
  }
});

function displayText() {
    var text = document.getElementById("textField");
    text.style.display = "block";
  }

