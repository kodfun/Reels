const oyuncu = {
  name: "Cristiano Ronaldo",
  age: 38,
  born: 1985,
  height: 1.87
};

for (const key in oyuncu) {
  console.log(key, oyuncu[key]);
}

console.log(JSON.stringify(oyuncu));