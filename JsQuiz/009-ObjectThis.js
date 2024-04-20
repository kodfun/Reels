let obj = {
  a: 2,
  b: 3,
  c: function () {
    return this.a ** this.b;
  }
};

console.log(obj.c());

/* 
Bir nesnenin metodunda kullanılan this anahtar kelimesi
o nesneye referans sağlar ve onun üzerinden özelliklerine
erişim sağlanabilir.
*/