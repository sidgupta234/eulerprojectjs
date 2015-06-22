var sum=0, a=1,b=1,c=0;i=2;

while(b<=4000000){
    c=a+b;
    a=b;
    b=c;
    if(b%2===0)
        sum+=b;
    i+=1;
}

console.log(sum);