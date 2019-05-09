function SelectionOrder(array){
    let outputArray=[];
    let arr = Array.from(array);
    for(var index =0; index<array.length;index++){
        let result = getMenor(arr);
        outputArray.push(result.menor);
        arr.splice(result.menorIndex,1);
    }
    return outputArray;
}
function getMenor(array){
    let menor=array[0];
    let menorIndex= 0;
    for(var index=0;index<array.length;index++){
        if(array[index]<menor){
            menor= array[index];
            menorIndex=index;
        }
    }
    return {menor,menorIndex};
}
console.log(SelectionOrder([5,84,95,6,1232312312,12313123,12312,12312,1231,345,53,54654,345345,23442,1231545,324241,9945]))