function union(arr1,arr2){
    let result=new Set();
    
    for(let i=0;i<arr1.length;i++){
        result.add(arr1[i])
    }

    for(let j=0;j<arr2.length;j++){
        result.add(arr2[j])
    }

    return [...result]
}


let arr1=[1,2,3] 
let arr2=[2,5,7]    
console.log(union(arr1,arr2))