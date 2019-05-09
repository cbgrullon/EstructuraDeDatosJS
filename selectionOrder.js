function SelectionOrder(array){
    if(!array){
        return;
    }
    let outputArray=[];
    let start = process.hrtime();
    while(1===1){
        if(array.length===0){
            break;
        }
        let menorIndex= 0;
        for(var index=0;index<array.length;index++){
            if(array[index]<array[menorIndex]){
                menorIndex=index;
            }
        }
        outputArray.push(array[menorIndex]);
        array.splice(menorIndex,1);
    }
    console.log(outputArray);
    let end = process.hrtime(start);
    console.info('Execution time (hr): %ds %dms', end[0], end[1] / 1000000)
}
SelectionOrder([5,84,95,6,1232312312,12313123,12312,12312,1231,345,53,54654,345345,23442,1231545,324241,9945])