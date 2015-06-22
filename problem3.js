function isprime(y) {
    if(y===0 || y===1)
        return false;
    
    for(var a=3;a<=Math.sqrt(y);a++){
        if(y%a===0){
            return false;
        }
    }
    return true;
}

num=600851475143;
var ans=1;
for(a=2;a<=Math.sqrt(num)+1;a++){
    
    if(num%a===0 && isprime(a))
        ans=a;
}
console.log(ans);
