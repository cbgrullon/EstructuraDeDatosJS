function SelectionOrder(array){
    let hourStart= process.hrtime();
    let outputArray=[];
    let arr = Array.from(array);
    for(var index =0; index<array.length;index++){
        let result = getMenor(arr);
        outputArray.push(result.menor);
        arr.splice(result.menorIndex,1);
    }
    console.log(outputArray);
    let hourEnd = process.hrtime(hourStart);
    console.info('Execution time (hr): %ds %dms', hourEnd[0], hourEnd[1] / 1000000)
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
SelectionOrder([5,84,95,6,1232312312,12313123,12312,12312,1231,345,53,54654,345345,23442,1231545,324241,9945])