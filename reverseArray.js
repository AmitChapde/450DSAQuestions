function reverseArray(arr){
    let l=0;
    let r=arr.length-1
    while(l<r){
        [arr[l],arr[r]]=[arr[r],arr[l]]
        l++;
        r--;
    }
    return arr;
}


let arr=[1,2,3,4,5]
console.log(reverseArray(arr))