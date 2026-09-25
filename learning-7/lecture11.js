function createCounter(){
   function increment(){
      console.log("i am increment function");

     }  
     increment();
   } 

    createCounter();
let user ={
    balance:500,
    deposite:function(amount){
        console.log(this);
   }
}
user.deposite(200);
