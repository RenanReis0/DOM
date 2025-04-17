const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragrafo = document.createElement("p")

const body = document.querySelector("body")

paragrafo.textContent = "Hey I'm red!"
paragrafo.style.color = "red";
body.appendChild(paragrafo)

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
body.appendChild(h3)

const div = document.createElement("div")
div.style.border = "2px solid black"
div.style.backgroundColor = "pink"
body.appendChild(div)

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div"
div.appendChild(h1)

const paragrafo2 = document.createElement("p")
paragrafo2.textContent = "ME TOO!"
div.appendChild(paragrafo2)