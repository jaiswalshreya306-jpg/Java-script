//  scope ands closure, HoF
// GLOBAL === ACCCESSIBLE TO EVERYPONE 
// FUNCTION== ACCESSIBLE ONLY TO TTHAT FUNCTION
// BLOCK LEVEL SCOPE === ACCESSIBLE ONLY TO THAT BLOCK




let a = 10;
const b= 20;

if(true){
    console.log(b);

}
function greet(){
    console.log(a);
}
 greet();