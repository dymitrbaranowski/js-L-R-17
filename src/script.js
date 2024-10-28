// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// https://www.jscamp.app/ru/docs/javascript25/
// https://uk.wikipedia.org/wiki/%D0%A7%D0%B0%D1%81_Unix

// console.log('start');

// setTimeout(() => {
//   console.log('setTimeout', 2);
// }, 0);

// console.time('for');
// for (let i = 0; i < 99999; i += 1) {
//   console.log(i, 'for');
// }
// console.timeEnd('for');

// console.log('end');

// let counter = 0;
// const id = setInterval(() => {
//   counter += 1;
//   console.log('hello world', counter);
// }, 1000);
// const id1 = setInterval(() => {
//   counter += 1;
//   //console.log('hello world', counter);
// }, 1000);
// const id2 = setInterval(() => {
//   counter += 1;
//   //console.log('hello world', counter);
// }, 1000);
// const id3 = setInterval(() => {
//   counter += 1;
//   //console.log('hello world', counter);
// }, 1000);

// console.log(id);
// console.log(id1);
// console.log(id2);
// console.log(id3);
// clearInterval(id);

// const content = document.querySelector('.content');
// const text = document.querySelector('.text');
// let counter = 8;
// text.textContent = `Залишилось ${counter} секунд`;

// const id = setInterval(() => {
//   counter -= 1;
//   text.textContent = `Залишилось ${counter} секунд`;
// }, 1000);

// const idOut = setTimeout(() => {
//   clearInterval(id);
//   content.style.display = 'none';
// }, 1000 * counter);

// console.log('id', id);
// console.log('idOut', idOut);

// const currentDate = new Date();
// const targetDate = new Date('Jul 05 2025');
// console.log(currentDate);
// console.log(targetDate);

// console.log(targetDate - currentDate);

const selectors = {
  day: document.querySelector('.date-day'),
  date: document.querySelector('.date'),
  month: document.querySelector('.date-month'),
  year: document.querySelector('.date-year'),
  clock: document.querySelector('.digital-clock'),
  seconds: document.querySelector('.clock-seconds__arrow'),
  minutes: document.querySelector('.clock-minutes__arrow'),
  hours: document.querySelector('.clock-hours__arrow'),
};

const currentDate = new Date();
const arrDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'П`ятниця',
  'Субота',
];
const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

setInterval(() => {
  const currentDate = new Date();

  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const localTime = currentDate.toLocaleTimeString('uk-UA');

  selectors.day.textContent = arrDay[day];
  selectors.month.textContent = namesOfMonth[month];
  selectors.date.textContent = date;
  selectors.year.textContent = year;
  selectors.clock.textContent = `Поточний час${localTime}`;

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const secondDeg = (360 / 60) * seconds;
  const minutesDeg = (360 / 60) * minutes; //  + (360 / 3600) * seconds;
  const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;

  selectors.seconds.style.transform = `rotate(${secondDeg}deg)`;
  selectors.minutes.style.transform = `rotate(${minutesDeg}deg)`;
  selectors.hours.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);

// console.log('month', month);
// console.log(namesOfMonth[month]);

// console.log(namesOfMonth[date.getMonth()]);

// console.log(arrDay[date.getDay()]);
// console.log('new Date()',date);
// const currentDate = Date.now()

// console.log('Date.now()',currentDate);

// const box = document.querySelector(".js-box");
// const titleTimer = document.querySelector(".js-timer");
// let counter = 11;
// setTimeout(() => {
//   box.style.display = "block";

//   const id = setInterval(() => {
//     counter -= 1;
//     titleTimer.textContent = counter;

//     if (!counter) {
//       //!counter counter === 0
//       clearInterval(id);
//       titleTimer.textContent = "X";
//       titleTimer.addEventListener("click", onClick);
//       // box.style.display = "none";
//     }
//   }, 1000);

// }, 5000);

// function onClick() {
//   box.style.display = "none";
// }

// const day = document.querySelector(".date-day");
// const date = document.querySelector(".date");
// const month = document.querySelector(".date-month");
// const year = document.querySelector(".date-year");
// const digitalClock = document.querySelector(".digital-clock");
// const arrowSecond = document.querySelector(".clock-seconds__arrow");
// const arrowMinutes = document.querySelector(".clock-minutes__arrow");
// const arrowHours = document.querySelector(".clock-hours__arrow");

// const namesOfMonth = [
//   "Січень",
//   "Лютий",
//   "Березень",
//   "Квітень",
//   "Травень",
//   "Червень",
//   "Липень",
//   "Серпень",
//   "Вересень",
//   "Жовтень",
//   "Листопад",
//   "Грудень",
// ];

// const arrDay = [
//   "Неділя",
//   "Понеділок",
//   "Вівторок",
//   "Середа",
//   "Четвер",
//   "П`ятниця",
//   "Субота",
// ];

// setInterval(() => {
//   const currentTime = new Date();
//   const currentDay = arrDay[currentTime.getDay()];
//   const currentDate = currentTime.getDate();
//   const currentMonth = namesOfMonth[currentTime.getMonth()];
//   const currentYear = currentTime.getFullYear();
//   const currentHour = currentTime.getHours();
//   const currentMinutes = currentTime.getMinutes();
//   const currentSeconds = currentTime.getSeconds();

//   const changeSeconds = (360 / 60) * currentSeconds;
//   const changeMinutes = (360 / 60) * currentMinutes;
//   const changeHours =(360 / 12) * currentHour + (360 / 12 / 60) * currentMinutes;

//   console.log(changeSeconds);
//   const formatTime = `${currentHour
//     .toString()
//     .padStart(2, "0")} : ${currentMinutes
//     .toString()
//     .padStart(2, "0")} : ${currentSeconds.toString().padStart(2, "0")}`;

//   day.textContent = currentDay;
//   date.textContent = currentDate;
//   month.textContent = currentMonth;
//   year.textContent = currentYear;

//   digitalClock.textContent = `Поточний час: ${formatTime}`;

//   arrowSecond.style.transform = `rotate(${changeSeconds}deg)`;
//   arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`;
//   arrowHours.style.transform = `rotate(${changeHours}deg)`;
// }, 1000);

// // console.log(currentYear);

// const currentTime = new Date();

// const targetDate = new Date('4/11/2023')

// setInterval(()=>{
//     const currentDate = new Date();

//     console.log(convertMs(targetDate - currentDate));
// },1000)

// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     return { days, hours, minutes, seconds };
//   }
