//Sinfingizda test bor edi va siz uni topshirdingiz. Tabriklaymiz!
//Ammo siz ambitsiyali odamsiz. Siz o'z sinfingizdagi o'rtacha talabadan yaxshiroq ekanligingizni bilishni xohlaysiz.
//Siz tengdoshlaringizning test ballari bilan massiv olasiz. Endi o'rtachani hisoblang va balingizni solishtiring!
//Agar siz yaxshiroq bo'lsangiz, rostni qaytaring, aks holda yolg'on!
//Eslatma:
//Sizning ballaringiz sinfingiz ballari qatoriga kiritilmagan. O'rtacha ballni
// hisoblash uchun siz o'z nuqtangizni berilgan massivga qo'shishingiz mumkin!

var classPoints = [3,3,3,4,4,1,3,4];
var yourPoints = 6;

function betterThanAverage(classPoints, yourPoints) {

    classPoints.push(yourPoints); /// massivga element ni qo'shish
    var b = 0; // massiv elementlari yig'indisi uchun boshlang'ich qiymat
   a = classPoints.forEach(element => {
      b = b + element;
      return b;
   });
    let points = b/classPoints.length;
    if(points>yourPoints){
        return false;
    }else{
        return true;
    }
  }

 
  betterThanAverage(classPoints, yourPoints)