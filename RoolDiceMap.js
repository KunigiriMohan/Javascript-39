let numberOne = new Map();
let numberTwo = new Map();
let numberThree = new Map();
let numberFour = new Map();
let numberFive = new Map();
let numberSix = new Map();

let count1=0;
    let count2=0;
    let count3=0;
    let count4=0;
    let count5=0;
    let count6=0;

while(count1<=9&&count2<=9&&count3<=9&&count4<=9&&count5<=9&&count6<=9)
{
    let random=Math.floor(Math.random()*6)+1;

    if (random==1){
        numberOne.set(count1,random);
        count1=count1+1;       
    }
    else if (random==2){
        numberTwo.set(count2,random);
        count2=count2+1;   
    }
    else if (random==3){
        numberThree.set(count3,random);
        count3=count3+1;      
    }
    else if (random==4){
        numberFour.set(count4,random);
        count4=count4+1;      
    }
    else if (random==5){
        numberFive.set(count5,random);
        count5=count5+1;
    }
    else if (random==6){
        numberSix.set(count6,random);
        count6=count6+1;
    }
}


var maximum =Math.max(count1,count2,count3,count4,count5,count6);

if (numberOne.size==maximum){
    console.log("Number 1 reached max times")
}
else if (numberTwo.size==maximum){
    console.log("Number 2 reached maximum times")
}
else if (numberThree.size==maximum){
    console.log("Number 3 reached maximum times")
}
else if (numberFour.size==maximum){
    console.log("Number 4 reached maximum times")
}
else if (numberFive.size==maximum){
    console.log("Number 5 reached maximum times")
}
else if (numberSix.size=maximum){
    console.log("Number 6 reached maximum times")
}

var minimum =Math.min(count1,count2,count3,count4,count5,count6);

if (numberOne.size==minimum){
    console.log("Number 1 reached minimum times")
}
else if (numberTwo.size==minimum){
    console.log("Number 2 reached minimum times")
}
else if (numberThree.size==minimum){
    console.log("Number 3 reached minimum times")
}
else if (numberFour.size==minimum){
    console.log("Number 4 reached minimum times")
}
else if (numberFive.size==minimum){
    console.log("Number 5 reached minimum times")
}
else if (numberSix.size=minimum){
    console.log("Number 6 reached minimum times")
}
