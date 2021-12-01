const double=[];
let k=0;
for(i=0;i<=100;i++)                     //runing for loop 0 to 100 to find number which in between reapet twice
{
    if((i%11)==0)                       //if number two digits same it should divisible by 11 checking this condition using if 
    {
        double[k]=i;                    //storing double digit values in double array
        k++;
    }
}
for(i=0;i<=double.length;i++)   
{
    console.log(double[i]);                 //printing values in double array
    k++;
}
