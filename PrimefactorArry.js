const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter a number to print Prime factors of number : ");          //Taking inputs from user
const prime=[];                                                             //prime array for storing prime factors
var k=0;
while(number%2==0){
    number/=2;
    prime[k]=2;
    k=k+1;
}
for(i=3;i<=Math.sqrt(number);i+=2){
    while(number%i==0){
        number=number/i;
        prime[k]=i;
        k=k+1;
    }
}
if(number>2){
    prime[k]=number;
}
console.log(prime);                                         //printing elements in prime array