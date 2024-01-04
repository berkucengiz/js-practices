const txtName = document.getElementById("txtName")
const datePoint = document.getElementById("datePoint")
const lastDatePoint = document.getElementById("lastDatePoint")
const tblBody = document.querySelector("#tableList tbody")
const result = document.getElementById("result")



btnAdd.addEventListener("click", () => {
  const name = txtName.value
  const date = datePoint.value
  const lastDate = lastDatePoint.value
  const row = newRow(name, date, lastDate)
  tblBody.prepend(row)
  rowIndex()
  txtName.value = ""
  datePoint.value = ""
  lastDatePoint.value = ""
  daysDifference()


})
const newRow = (name, date, lastDate,) => {
    const row = document.createElement("tr")
  row.innerHTML = `
    <td></td>
    <td>${name}</td>
    <td>${date}</td>
    <td>${lastDate}</td>
    <td id="result">${daysDifference()} GÜN KALDI</td>
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
  daysDifference()
  return row
}
const rowIndex = () => {
    tblBody
      .querySelectorAll("tr td:first-child")
      .forEach((col, i) => (col.innerHTML = i + 1))
  }
  
  
  const actionDelete = (row) => {
    row.querySelector("#btnDelete").addEventListener("click", () => {
      const name = row.querySelector("td:nth-child(2)").innerText
      const result = confirm(`are you sure to delete ${name}?`)
      if (result) {
        row.remove()
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

    })
  }
  const daysDifference = () => {  
    // Use today's date for date1
    var date1 = new Date();

    // Fetch the input for date2 from the HTML form
    var dateI2 = document.getElementById("lastDatePoint").value;

    // Define a date object variable to store the date value for date2
    var date2 = new Date(dateI2);

    // Calculate time difference
    var time_difference = date2.getTime() - date1.getTime();

    // Calculate days difference by dividing total milliseconds in a day
    var result = time_difference / (1000 * 60 * 60 * 24);

    // Round down to remove decimal places
    var roundedResult = Math.floor(result);

    return roundedResult;
}