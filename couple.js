// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log(coupleEntry([1, 2, 1, 2, 1]))

function coupleEntry(arr){
    let occDigit = {};
    // creating mapping for occurence
    for (let i=0; i < arr.length; i++){
        if(occDigit[arr[i]]){
            let temp = occDigit[arr[i]];
            // console.log(temp)
            temp = temp + 1 
            occDigit[arr[i]] = temp;
        }
        else{
            occDigit[arr[i]] = 1;
        }
    }
    let ans = 0;
    // console.log(occDigit)
    for (let k in occDigit){
        // console.log(k)
        if (occDigit[k] == 1){
            continue;
        }
        // combination and addiing it as no repetion
        ans = ans + nCr(occDigit[k], 2);
    }
    return ans;
}

function nCr(n,r){
    if(n==r||r==0){
        return 1;
    }
    else{
        r = (r<n-r)?n-r:r;
        return rec(r+1,n)/rec(1,n-r);
    }
}

function rec(a,b){
    let prd = a, i = a;
    while(i++ < b){
        prod *=i;
    }
    return prd;
}

