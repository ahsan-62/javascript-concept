function factorial(n){

    if(n==0 || n==1){
        return 1;
    }
    let result=1;
    while(n>1){

        result=result*n;
        n--;
    }
    return result;
}

let result=factorial(6);
console.log(result);
