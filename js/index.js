const wrapper = document.querySelector("#wrapper");

function createCard(data) {
    return `
        <div class="block">
            <h3>${data.name}</h3>
            <h3>${data.email}</h3>
            <p>${data.body}</p>
            <p>${data.id}</p>
        </div>
    `
}

document.addEventListener('DOMContentLoaded', function() {
    fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "GET"
    })

        .then(response => {
            if (response.status == 200) {
                return response.json()
            }
        })
        .then(data => {
            wrapper.innerHTML = "";
            data.forEach(element => {
                let card = createCard(element);
                wrapper.innerHTML += card
            });
        })
        .catch(error => {
            console.log(error);
        })
})