"use strict"
// Задача 2. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.

class SportsmanList {
    constructor(sportsmanList) {
        this.sportsmanList = sportsmanList
        this.checkedSportsmanList = []
    }

    listRender() {
        const list = document.createElement("ul")
        list.className = "list"
        for (const itemText of this.sportsmanList) {
            const button = document.createElement("button")
            button.type = "button"
            button.innerText = "<==="
            button.classList.add("list__button")
            button.onclick = () => {
                button.classList.toggle("active")
                const isParEl = button.closest(".list__current-container")
                const isCheckEl = button.closest(".list__checked-container")
                const newContList = document.querySelector(
                    ".list__checked-container"
                )
                const listInCheckedContainer =
                    newContList.querySelector(".list")
                if (isParEl) {
                    item.remove()
                    listInCheckedContainer.append(item)
                } else if (isCheckEl) {
                    item.remove()
                    list.append(item)
                }
            }
            const nameItem = document.createElement("p")
            nameItem.innerText = itemText
            const item = document.createElement("li")
            item.className = "list__item"
            list.append(item)
            item.append(nameItem)
            item.append(button)
        }
        return list
    }

    render(targetElement) {
        const listContainer = document.createElement("div")
        listContainer.className = "list__container"
        const currentContainer = document.createElement("div")
        currentContainer.className = "list__current-container"
        const curentListTitle = document.createElement("h2")
        curentListTitle.innerText = "Загальний список"
        curentListTitle.className = "list__title"


        const checkedContainer = document.createElement("div")
        checkedContainer.className = "list__checked-container"
        const newLitsTitle = document.createElement("h2")
        newLitsTitle.innerText = "Обрані для змагання"
        newLitsTitle.className = "list__title"
        const currentList = this.listRender()
        const checkedSportList = this.listRender()
        checkedSportList.innerText = ""

		
        //--- Загальний список
        listContainer.append(currentContainer)
        currentContainer.prepend(curentListTitle)
        currentContainer.append(currentList)
        //--- Обрані спортсмени
        listContainer.append(checkedContainer)
        checkedContainer.prepend(newLitsTitle)
        checkedContainer.append(checkedSportList)

        document.querySelector(targetElement).append(listContainer)
    }
}

const sportsmanList = [
    "John Depp",
    "Sara Wik",
    "Den Miro",
    "Alan Woo",
    "Olga Sich",
    "Ivan Hal",
]

window.onload = function () {
    let l = new SportsmanList(sportsmanList)
    l.render("#container")
}
