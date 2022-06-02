// Massivni oling va har ikkinchi elementni massivdan olib tashlang.
//  Har doim birinchi elementni saqlang va keyingi element bilan olib tashlashni boshlang.
var arr = ['a', 'b','a', 'b','a', 'b','a', 'b','a', 'b'];
function removeEveryOther(arr){
    for(var i = 0; i < arr.length; i++){
        if(i%2!==0){
            arr.splice(i,1)

            console.log(i)
        }
    }
    return arr
  }
  console.log(removeEveryOther(arr))

