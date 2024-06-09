const display = document.getElementById("display")
function buttonID(input) {
  display.value += input
}

function Equal() {
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = "Not valid"
  }
}

function AC() {
  display.value = ""
}

function DEL() {
  display.value = "Press AC 😂"
}
