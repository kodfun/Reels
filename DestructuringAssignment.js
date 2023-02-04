/* ****  DESTRUCTURING ASSIGNMENT                 **** */
/* ****  DESTRUCTURING: ŞEKLİNİ BOZMA (TÜRKÇESİ)  **** */

// SIRADAN BİR DİZİ (ARRAY) TANIMLAYALIM 
let dizi = [3, 4, 5];
// DİZİNİN ÖĞELERİNİ DEĞİŞKENLERE ATAYALIM
let a = dizi[0];
let b = dizi[1];
console.log(a, b);
// DESTRUCTURING ASSIGNMENT İLE
let [c, d] = dizi;
console.log(c, d);

// İKİ DEĞİŞKENİ YER DEĞİŞTİRME (SWAP)
[c, d] = [d, c];
console.log(c, d);

/*
  INSTAGRAM:
  https://instagram.com/kodfun

  GITHUB: 
  https://github.com/kodfun

  ANLIK ÇIKTI ALMAK İÇİN KULLANILAN EKLENTİ:
  Quokka.js
*/