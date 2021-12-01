const array=[];
for (i=0;i<=9;i++)
{
    array[i]=Math.floor(Math.random()*899)+100;     //Inserting random values in array
}
for (i=0;i<=9;i++)
{
    console.log(array[i]);
}
let temp=0;
for (i=0;i<=9;i++)
{
    for(j=0;j<=9;j++){
    if(array[i]>array[j])                //finding minimum element using if condition
    {
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    }
}
console.log("Maximum number : "+array[8])                //printing max element 
console.log("Minimum number : "+array[1]);               //printing min element
