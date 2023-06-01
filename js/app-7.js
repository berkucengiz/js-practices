const txtName = document.getElementById("txtName")
const numPoint = document.getElementById("numPoint")
const btnAdd = document.getElementById("btnAdd")
const tblBody = document.querySelector("#tableList tbody")
const tblFooter = document.querySelector("#tableList tfoot")
const average = document.getElementById("average")

btnAdd.addEventListener("click", () => {
  const name = txtName.value
  const point = numPoint.value
  const row = newRow(name, point)
  tblBody.prepend(row)
  rowIndex()
  txtName.value = ""
  numPoint.value = ""
  newAverage()
})
const newRow = (name, point) => {
  const row = document.createElement("tr")
  row.innerHTML = `
    <td></td>
    <td>${name}</td>
    <td>${point}</td>
    <td> <span class="buttons-first">
    <button class="btn btn-link btn-edit" id="btnEdit">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="btn btn-link btn-edit" id="btnDelete">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  </span>
  <span class="buttons-second d-none">
    <button class="btn btn-link btn-uptade" id="btnUptade">
      <i class="fa-solid fa-check"></i>
    </button>
    <button class="btn btn-link btn-cancel" id="btnCancel">
      <i class="fa-solid fa-times"></i>
    </button>
  </span></td>
   `
  actionDelete(row)
  actionEdit(row)
  actionCancel(row)
  actionUptade(row)
  return row
}

const rowIndex = () => {
  tblBody
    .querySelectorAll("tr td:first-child")
    .forEach((col, i) => (col.innerHTML = i + 1))
}

const newAverage = () => {
  const arr = tblBody.querySelectorAll("tr td:nth-child(3)")
  const arrPoint = Array.from(arr).map((col) => Number(col.innerHTML))

  const sum = arrPoint.reduce((a, b) => a + b, 0)
  const avg = (sum / arrPoint.length).toFixed(2)
  tblFooter.querySelector("#average").innerHTML = avg
  console.log(avg)
  tblFooter.classList.remove("d-none")
}
const actionDelete = (row) => {
  row.querySelector("#btnDelete").addEventListener("click", () => {
    const name = row.querySelector("td:nth-child(2)").innerText
    const result = confirm(`are you sure to delete ${name}?`)
    if (result) {
      row.remove()
      newAverage()
      rowIndex()
    }
  })
}

const actionEdit = (row) => {
  row.querySelector("#btnEdit").addEventListener("click", () => {
    const nameEl = row.querySelector("td:nth-child(2)")
    const pointEl = row.querySelector("td:nth-child(3)")

    nameEl.contentEditable = true
    pointEl.contentEditable = true
    nameEl.focus()
    pointEl.focus()

    nameEl.dataset.name = nameEl.innerText
    pointEl.dataset.point = pointEl.innerText

    row.querySelector(".buttons-first").classList.toggle("d-none")
    row.querySelector(".buttons-second").classList.toggle("d-none")
  })
}
const actionCancel = (row) => {
  row.querySelector("#btnCancel").addEventListener("click", () => {
    const nameEl = row.querySelector("td:nth-child(2)")
    const pointEl = row.querySelector("td:nth-child(3)")

    nameEl.contentEditable = false
    pointEl.contentEditable = false

    nameEl.innerText = nameEl.dataset.name
    pointEl.innerText = pointEl.dataset.point

    row.querySelector(".buttons-first").classList.toggle("d-none")
    row.querySelector(".buttons-second").classList.toggle("d-none")
  })
}

const actionUptade = (row) => {
  row.querySelector("#btnUptade").addEventListener("click", () => {
    const nameEl = row.querySelector("td:nth-child(2)")
    const pointEl = row.querySelector("td:nth-child(3)")

    nameEl.contentEditable = false
    pointEl.contentEditable = false

    nameEl.dataset.name = ""
    pointEl.dataset.point = ""

    row.querySelector(".buttons-first").classList.toggle("d-none")
    row.querySelector(".buttons-second").classList.toggle("d-none")
    newAverage()
  })
}
