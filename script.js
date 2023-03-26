let inp = document.querySelector(".form-control");
let form = document.querySelector(".form")
fetch("http://localhost:3000/data")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(element => {
            let listPoragraf = document.createElement("div")
            listPoragraf.classList.add("list-poragraf")
            listPoragraf.innerHTML = `
                <p class="list-item">${element.text}</p>
                <button type="button" data-id="1" class="btn btn-danger remove">delete</button>
            `
            form.append(listPoragraf)
        });
        data.forEach(element => {
            console.log(element.text);
        });
    })

const getData = async () => {
    let inp = document.querySelector(".form-control");
    const URL = "http://localhost:3000/data";
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inp.value }),
    })
        .then(res => {
            alert(res.statusText)
        })
    inp.value = "";
}
document.querySelector(".btn-success").onclick = () => {
    if (inp.value == "") {
        console.log(false);
    } else {
        getData()
    }
}

setInterval(() => {
    let inp = document.querySelector(".form-control");
    let btnDiv = document.querySelector(".btn-div");
    let clear = document.querySelector(".btn-primary");
    if (inp.value == "") {
        btnDiv.style.display = "none";
    } else {
        btnDiv.style.display = "block";
    }
    clear.onclick = () => {
        inp.value = "";
    }
}, 10);