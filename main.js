function getRandomInteger(min, max) {
  if(min>=0 && max>=0){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }  else if (min >= max){
    throw new Error('Минимальное число не может быть больше или равно максимальному')
  } else {
    throw new Error('Введите числа больше 0')}
}

console.log(getRandomInteger(2,10));

function getRandomFloat(min, max,num) {
  if(min>=0 && max>=0){
    return ((Math.random() * (max - min + 1)) + min).toFixed(num);
  }  else if (min >= max){
    throw new Error('Минимальное число не может быть больше или равно максимальному')
  } else {
    throw new Error('Введите числа больше 0')}
}

console.log(getRandomFloat(2,10,4));
