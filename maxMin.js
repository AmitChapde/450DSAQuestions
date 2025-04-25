function maxMin(arr){
    let max=arr[0];
    let min=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return [max,min]
}


let arr=[1,2,3,4,4,122,0]
console.log(maxMin(arr))