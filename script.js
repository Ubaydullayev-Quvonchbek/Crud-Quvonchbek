let inp = document.querySelector(".form-control");
let form = document.querySelector(".form")
fetch("http://localhost:3000/data")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((element, n, arr) => {
            let listPoragraf = document.createElement("div")
            listPoragraf.classList.add("list-poragraf")
            listPoragraf.innerHTML = `
                <p class="list-item">${element.text}</p>
                <button type="button" onclick="delData(${arr[n].id})" class="btn btn-danger remove">delete</button>
            `
            form.append(listPoragraf)
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
        return
    } else {
        getData()
    }
}

function delData(id) {
    let inp = document.querySelector(".form-control");
    fetch(`http://localhost:3000/data/${id}`, {
        method: "DELETE"
    })
        .then(res => {
            alert("Deleted")
        })
    inp.value = "";
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