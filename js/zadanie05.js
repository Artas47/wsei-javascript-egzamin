document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector("#container");
    document.querySelectorAll('[data-text]').forEach((element) => {
        element.addEventListener("click", () => {
            container.innerText = element.dataset.text
        })
    })
})