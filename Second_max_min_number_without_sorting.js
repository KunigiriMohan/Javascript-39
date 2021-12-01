const array=[];
const sort=[];
for (i=0;i<=9;i++)
{
    array[i]=Math.floor(Math.random()*899)+100;     //Inserting random values in array
}
for (i=0;i<=9;i++)                                  //compying values to teporary array
{
    sort[i]=array[i];
}
for (i=0;i<=9;i++)
{
    console.log(array[i]);
}

let temp=0;
for (i=0;i<=9;i++)
{
    for(j=0;j<=9;j++)
    {
        if(sort[i]<sort[j])                //Sorting array in ascending order
    {
        temp=sort[i];
        sort[i]=sort[j]
        sort[j]=temp;
    }
    }
}
console.log("Second Maximum number : "+sort[8]);                //printing second maximum element 
console.log("Second Minimum number : "+sort[1]);               //printing second minimumd element
