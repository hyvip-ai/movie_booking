function isPrimary(num){
    let isPrimary = true;
    for(let i=2;i<Math.floor(num/2);i++){
        if(num%2===0){
            isPrimary = false
            break;
        }
        else{
            isPrimary = true
        }
    }
    return isPrimary
}
export default isPrimary