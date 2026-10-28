const quotes = [ "I think, therefore I am.",
 "Life is what happens to you while you're busy making other plans." ,
 "An unexamined life is not worth living." ,
 "History will be kind to me, for I intend to write it." ,
 "No problem can be solved from the same level of consciousness that created it.",
 "Education is the most powerful weapon which you can use to change the world." 

];
  
  const button = document.querySelector("button");
  const quote = document.querySelector('h1');
  button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20);
    quote.textContent = quotes[index];
    

  })
