/// berilgan sonning bo'luvchilari va bo'luvchilar sonini topish

function getDivisorsCnt(n){
    // todo
    var num = 0;
    for(let i=1; i<=n; i++){
        if(n%i===0){
            num++;
            console.log(i)
           
        }

      
        
    }
    return num;
}
console.log( getDivisorsCnt(888881))