try{
    let x = 1

    if (x === 1) {
        throw "equal to one"
    }else{
        throw "different from 1"
    }
}catch(error){
    console.log(error);
}finally{
    console.log("Exiting program")
}