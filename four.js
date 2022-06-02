//"Siz banjo o'ynayapsizmi?" Degan savolga javob beradigan funksiya yarating.
//Agar ismingiz "R" harfi yoki kichik "r" harfi bilan boshlansa, siz banjo o'ynayapsiz!
//Funktsiya o'zining yagona argumenti sifatida nom oladi va quyidagi satrlardan birini qaytaradi:

var sss = 'Mihsfs'

function areYouPlayingBanjo(sss) {
    // Implement me
    let a = sss.split(''); /// massivga aylantirish
    let b;

    if(a[0].toLowerCase() == 'r'){
      return   b = sss + ' plays banjo';
    }else{
        return   b = sss + ' does not play banjo';
    }
return b;
  }

 console.log( areYouPlayingBanjo(sss))
  
