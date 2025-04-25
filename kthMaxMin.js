function kthMaxMin(arr,k=3){
    let max,min;
    arr.sort((a,b)=>a-b);
    min=arr[k-1]
    max=arr[arr.length-k]
    return [max,min]
}

let arr=[7, 10, 4, 3, 20, 15]
console.log(kthMaxMin(arr))