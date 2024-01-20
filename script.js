const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

const btn = document.getElementById("btn");
// document.getElementById("btn").onclick=addtask();

function addtask() {
    if (inputbox.value != "") {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        inputbox.value = '';
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        save();
    }

}

inputbox.addEventListener("keypress", (event)=> {

    if (event.key === "Enter") {
        document.getElementById("btn").click();
    }
});

listcontainer.addEventListener("click", function event(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

    }
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    save();
}, false);

function save() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function show() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
show();