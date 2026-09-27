newElement = document.createElement("h2");
newElement.textContent = "strike is comming soon";
newElement.id = "second";


// select element
const element = document.getElementById("first");
element.after(newElement);


const newElement2 = document.createElement('h3');
newElement2.textContent = "diwali is coming soon";
newElement2.id ="third";
newElement2.className ="diwali";
newElement2.className += " holi";

console.log(newElement2);



