newElement = document.createElement("h2");
newElement.textContent = "strike is comming soon";
newElement.id = "second";


// select element
const element = document.getElementById("first");
element.after(newElement);


const newElement2 = document.createElement('h3');
newElement2.textContent = "diwali is coming soon";
newElement2.id ="third";
//newElement2.className ="diwali";
//newElement2.className += " holi";
newElement2.classList.add("diwali");
newElement2.classList.add("holi");
newElement2.classList.remove("diwali");

newElement2.style.backgroundcolor = "pink";
newElement2.style.fontSize ="20px";

element.before(newElement2);

console.log(newElement2);



