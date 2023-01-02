for (let x = 0; x < 10; x++){
    if(x === 7){
        continue; // continue will skip this iteration
    }
    if(x === 8){
        break; // break will stop the loop
    }
    console.log(x);
}