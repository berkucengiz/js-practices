const txtNum = document.getElementById("txtNum")
const set = document.getElementById("btnSet")
const start = document.getElementById("btnStart")
const stop = document.getElementById("btnStop")
const timer = document.getElementById("timerDiv")
const over = document.getElementById("overDiv")
const result = document.getElementById("result")

var x

set.addEventListener("click", () => {
  result.innerHTML = txtNum.value
  over.classList.add("d-none")
})

start.addEventListener("click", () => {
  x = setInterval(countDown, 1000)
  function countDown() {
    var getValue = Number(result.textContent)
    if (getValue > 0) {
      result.textContent = getValue - 1
    } else {
      result.textContent = 0
      stop.click()
      over.classList.remove("d-none")
    }
  }
})
stop.addEventListener("click", () => {
  clearInterval(x)
})
