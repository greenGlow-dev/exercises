// Tasodifiy manfiy bo'lmagan raqam berilgan bo'lsa,
// siz ushbu raqamning raqamlarini massivdagi teskari
// tartibda qaytarishingiz kerak. example: 348597 => [7,9,5,8,4,3]
let n = 124;
function digitize(n) {

    let a = n.toString(); /// n sonini satrga o'tkazish

    let b = a.split(''); /// satrga o'tgan value ni qismga bo'lib , massive ga joylash

    let c = b.reverse(); /// reverse - teskari ,,,  elementlarni teskari tartibda qayta joylash

    let d = c.map(Number); /// har bir value dan o'tib uni number qiladi
    
    console.log(d);

   }

digitize(n) 