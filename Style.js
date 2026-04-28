<script>
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTask() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task;

        li.onclick = () => {
            li.style.textDecoration = "line-through";
        };

        const del = document.createElement("button");
        del.innerText = "X";
        del.style.marginLeft = "10px";

        del.onclick = () => {
            tasks.splice(index, 1);
            saveTask();
        };

        li.appendChild(del);
        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    const value = input.value;

    if (value === "") return;

    tasks.push(value);
    saveTask();
    input.value = "";
}

function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask();
}

// Enter key
document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// pertama kali load
renderTask();
</script>
<script>
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.style.color = "#f87171";
        if (a.getAttribute("href") === "#" + current) {
            a.style.color = "#ffffff";
        }
    });
});
</script>

<script>
function openProject(link) {
    window.open(link, "_blank");
}
</script>