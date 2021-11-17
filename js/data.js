import {getRandomInteger, getRandomFloat} from './util.js';


const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const NUM = 5;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const COUNT_OBJECTS = 10;
const TYPES = ['palace', 'flat', 'house', 'bungalow','hotel'];
const TIME_TO_CHECK_IN_AND_CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES_LIST = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_LIST = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const createObj = (id) => {
  const location = {
    lat:getRandomFloat(LAT_MIN, LAT_MAX,NUM),
    lng:getRandomFloat(LNG_MIN, LNG_MAX,NUM),
  };
  const myObj={
    author:{
      avatar:`img/avatars/user${String(id).padStart(2, '0')}.png`,
    },
    offer:{
      title:'Заголовок',
      address:`${location.lat}, ${location.lng}`,
      price:getRandomInteger(1,100),
      type:TYPES[getRandomInteger(0,TYPES.length)],
      rooms:getRandomInteger(1,100),
      guests:getRandomInteger(1,100),
      checkin: TIME_TO_CHECK_IN_AND_CHECKOUT[getRandomInteger(0,TIME_TO_CHECK_IN_AND_CHECKOUT.length)],
      checkout:TIME_TO_CHECK_IN_AND_CHECKOUT[getRandomInteger(0,TIME_TO_CHECK_IN_AND_CHECKOUT.length)],
      features:FEATURES_LIST.slice(0,getRandomInteger(1,FEATURES_LIST.length)),
      photos: PHOTOS_LIST.slice(0,getRandomInteger(1,PHOTOS_LIST.length)),

    },
    location,
  };
  return myObj;
};

const createArrayOfObjects=()=>{
  const myObjects=[];
  for (let num=1;num<=COUNT_OBJECTS;num++){
    myObjects.push(createObj(num));
  }
  return myObjects;
};


export {createArrayOfObjects};
