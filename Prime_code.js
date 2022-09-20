function primeORnot(num){
let count=1;  //instead of 1 use 0
for(let i=0;i<=num;i++){
  if(num%i==0){
    count--;   // use ++
    }
  }
  if(count==2){
  return true;
}
return false;
}
let result=primeoRnot(17);
if(result==true)
{
console.log("This number is prime");
}else{
   console.log("oop! not prime);
}