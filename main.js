function getRandomInteger(min, max) {
  if(min>=0 && max>=0){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }  else if (min >= max){
    console.log('Минимальное число не может быть больше или равно максимальному')
  } else {
    console.log('Введите числа больше 0')}
}

console.log(getRandomInteger(2,3));
