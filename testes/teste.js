let  arr = [1,3,4,6,3,1,8,4,3]

function findMaxNumber(arr){
    let maior = Math.max(...arr)
    return maior
} 

console.log(Math.max(...arr))