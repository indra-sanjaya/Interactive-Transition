const button = document.querySelector("button")
const list = document.querySelector(".list")
let listItems = list.querySelectorAll("li")
const listItemButtons = list.querySelectorAll("li > button")

function makeFirstListItemsButtonDisabled() {
    listItems = list.querySelectorAll("li")
    listItems.forEach((item) => {
        item.querySelector("button").disabled = false
    })
    listItems[0].querySelector("button").disabled = true
}

function moveListItemFirst(item) {
    const firstListItem = list.querySelector(".list :first-child")
    list.insertBefore(item, firstListItem)
}

listItemButtons.forEach((button) => {
    button.hidden = false
    button.addEventListener("click", async () => {
        const item = button.parentElement
        item.style.viewTransitionName = "woosh"
        item.querySelector(".fa-solid").style.viewTransitionName = "tony-hawk"

        if (document.startViewTransition) {
            const transition = document.startViewTransition(() => {
                moveListItemFirst(item)
            })

            try {

                await transition.finished

            } 
            
            finally {

                item.style.viewTransitionName = ""
                item.querySelector(".fa-solid").style.viewTransitionName = ""
                makeFirstListItemsButtonDisabled()

            }

        } else {

            moveListItemFirst(item)

        }
    })
})