const txtCity = document.querySelector("#txtCity")
      const btnAdd = document.querySelector("#btnAdd")
      const btnSort = document.querySelector("#btnSort")
      const btnReverse = document.querySelector("#btnReverse")
      const btnRemoveLast = document.querySelector("#btnRemoveLast")
      const btnRemoveFirst = document.querySelector("#btnRemoveFirst")
      const btnRemoveAll = document.querySelector("#btnRemoveAll")
      const ulEl = document.querySelector("#list")
      const btnMix = document.querySelector("#btnMix")

      const arr = []

      btnAdd.addEventListener("click", () => {
        const city = txtCity.value
        arr.push(city)
        console.log(arr)
        txtCity.value = ""
        addLi()
      })
      const addLi = () => {
        while (ulEl.firstChild) {
          ulEl.removeChild(ulEl.firstChild)
        }

        arr.forEach((item) => {
          const li = document.createElement("li")
          li.textContent = item
          ulEl.appendChild(li)
        })
      }

      btnSort.addEventListener("click", () => {
        arr.sort((a, b) => a.localeCompare(b))
        addLi()
      })

      btnReverse.addEventListener("click", () => {
        arr.reverse((a, b) => a.localeCompare(b))
        addLi()
      })

      btnRemoveLast.addEventListener("click", () => {
        arr.pop()
        addLi()
      })

      btnRemoveFirst.addEventListener("click", () => {
        arr.shift()
        addLi()
      })

      btnRemoveAll.addEventListener("click", () => {
        arr.length = 0
        addLi()
      })

      btnMix.addEventListener("click", () => {
        arr.sort(() => Math.random() - 0.5)
        addLi()
      })