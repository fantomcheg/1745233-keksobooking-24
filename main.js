function randomInteger(min, max) {
  if(min>=0 && max>=0){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {console.log('Введите числа больше 0')}
}

console.log(randomInteger(-1,3));
console.log('changes')
