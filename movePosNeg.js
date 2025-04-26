//Move all negative numbers to beginning and positive to end with constant extra space
//Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
//Output: -12 -13 -5 -7 -3 -6 11 6 5

let arr=[-12, 11, -13, -5, 6, -7, 5, -3, -6]

function move(arr){
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            [arr[i],arr[j]]=[arr[j],arr[i]]
            j++;
        }
    }
    return arr;
}

console.log(move(arr))