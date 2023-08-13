//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR
// !MUREKKEB OLDUGUNU DUSHUNDUYUNUZ TASKLAR AYRI FAYLDA YAZILMALIDIR. (FAYL ADI TASKA UYGUN QOYULMALIDIR)
// !SONDA BUTUN KODLAR GITHUBA YUKLENILMELIDIR

// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////
// BU BASHLIQ ALTINDAKI HELLER YALNIZ SWITCH CASE ILE QEBUL EDILECEKDIR.

// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN

// let SET = 'SET_DATA';
// let GET = 'GET_DATA'
// let DELETE = 'DELETE_DATA'

// 1.1 Yuxarida gosterilmish type lara uygun case ler yazin
//     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin

// let data = "SET";

// switch (data) {
//   case "SET":
//     console.log(data);
//     break;
//   case "GET":
//     console.log(data);
//     break;
//   case "DELETE":
//     console.log(data);
//     break;
//   default:
//     console.log("Bele type movcud deyil");
// }

// 1.2  2ci merhelede functiondan kenarda array yaradin ve
//         Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin

// let arr1 = [];
// let random = Math.floor(Math.random() * 10) + 1;
// let data1 = "SET";

// switch (data1) {
//   case "SET":
//     arr1.push(random);
//     break;
//   case "GET":
//     console.log(data1);
//     break;
//   case "DELETE":
//     console.log(data1);
//     break;
//   default:
//     console.log("Bele type movcud deyil");
// }

// console.log(arr1);

// 1.3 Case -  'DELETE'  olarsa arraydan 1 item silin

// let data2 = "DELETE";

// switch (data2) {
//   case "SET":
//     console.log(data2);
//     break;
//   case "GET":
//     console.log(data2);
//     break;
//   case "DELETE":
//     arr1.pop();
//     break;
//   default:
//     console.log("Bele type movcud deyil");
// }

// console.log(arr1);

//     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
//     ve sonda arrayi consola cixardin.

// switch (true) {
//   case arr1.length === 0:
//     console.log("SILINECEK DATA TAPILMADI", arr1);
//     break;
//   default:
//     console.log("Bele type movcud deyil");
// }

// 1.4 Case - 'GET' oldugu halda ise sadece array consolda gorunsun

// let data4 = "GET";

// switch (data4) {
//   case "SET":
//     console.log(data4);
//     break;
//   case "GET":
//     console.log(arr1);
//     break;
//   case "DELETE":
//     console.log(data4);
//     break;
//   default:
//     console.log("Bele type movcud deyil");
// }

///////////////////////////////////////////////////////////////////////////////////////////

// let mL = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.

// mL.forEach(function (aylar) {
//   let gun;

//   switch (aylar) {
//     case "February":
//       gun = "28-29 days";
//       break;
//     case "April":
//     case "June":
//     case "September":
//     case "November":
//       gun = "30 days";
//       break;
//     default:
//       gun = "31 days";
//       break;
//   }

//   console.log(`${aylar} - ${gun}`);
// });

// 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin

// let hazirkiTarix = new Date();
// let hazirkiAy = hazirkiTarix.getMonth();
// switch (hazirkiAy) {
//     case 1:
//         gun = '29 days' - '28 days';
//         break;
//     case 3:
//     case 5:
//     case 8:
//     case 10:
//         gun = '30 days';
//         break;
//     default:
//         gun = '31 days';
// }

// console.log(`${mL[hazirkiAy]} - ${gun}`);

// 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// QEYD case - ayin ozu olmalidir.

// let ilinYarisi = hazirkiAy <= 6 ? '1-ci yarisi ' : '2-ci yarisi';

// switch (true) {
//     case hazirkiAy < 6:
//         console.log(`${mL[hazirkiAy]} : ilin  ${ilinYarisi} `);
//         break;
//     case hazirkiAy >= 6:
//         console.log(`${mL[hazirkiAy]} : ilin ${ilinYarisi}`);
//         break;

// }

// 5) 4 cu taski heftenin gunleri ile yoxlayin

// let hefdeninGunu = hazirkiTarix.getDay()
// let hazirkiGun = hefdeninGunu <= 3 ? '1-ci yarisi ' : '2-ci yarisi';

// switch (true) {
//     case hefdeninGunu < 3:
//         console.log(`${hefdeninGunu}-ci gun : Hefdenin  ${hazirkiGun}`);
//         break;
//     case hefdeninGunu >= 3:
//         console.log(`${hefdeninGunu}-ci gun : Hefdenin ${hazirkiGun}`);
//         break;

// }

// 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun

// const day = hazirkiTarix.getDate();
// const week = Math.ceil(day / 7);

// switch (week) {
//   case 1:
//     console.log("ayin 1-ci heftesi");
//     break;
//   case 2:
//     console.log("ayin 2-ci heftesi");
//     break;
//   case 3:
//     console.log("ayin 3-cu heftesi");
//     break;
//   case 4:
//     console.log("ayin 4-cu heftesi");
//     break;
// }

///////////////////////////////////////////////////////////////////////////////////////////

// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS //////////////////////////////////////////////////////////
// Bu hisseye aid olan tapshiriqlar while for for In for Of istifade edilmekle hell edilmelidir.

// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5

// 1.1 // Verilen array

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January'],
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'],
//     ['August'],
//     ['September'],
//     ['October'],
//     ['November'],
//     ['December']
// ];

// let newArr = []

// for(let month of mL){
//   newArr.push([month])
// }

// console.log(newArr);

///////////////////////////////////////////////////////////////////////////////////////////

// 1.2 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'],
//     ['May','June','July','August'],
//     ['September' , 'October', 'November', 'December']
// ];

// let newArr = []

// for(let i = 0; i<mL.length; i+=4){
//   newArr.push(mL.slice(i, i+4))
// }

// console.log(newArr);

///////////////////////////////////////////////////////////////////////////////////////////

// 1.3 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['May','June',['July','August']],
//     ['September' , ['October', 'November', 'December']]
// ];

// let newArr = [];
// let currentIdx = 0;

// for (let i = 0; i < 3; i++) {
//   let innerArr = [mL[currentIdx], mL[currentIdx + 1]];

//   if (i === 0) {
//     innerArr.push([mL[currentIdx + 2], mL[currentIdx + 3]]);
//   } else if (i === 1) {
//     innerArr.push([mL[currentIdx + 2], mL[currentIdx + 3]]);
//   } else if (i === 2) {
//     innerArr.pop()
//     innerArr.push([mL[currentIdx + 1], mL[currentIdx + 2] ,mL[currentIdx + 3]]);
//   }

//   newArr.push(innerArr);
//   currentIdx += 4;
// }

// console.log(newArr);

///////////////////////////////////////////////////////////////////////////////////////////

// 1.4 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March',['April']]],
//     ['May','June',['July',['August']]],
//     ['September' , ['October', 'November', ['December']]]
// ];

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let newArr = [];
// let currentIdx = 0;

// for (let i = 0; i < 3; i++) {
//   let innerArr = [mL[currentIdx], mL[currentIdx + 1]];

//   if (i === 0) {
//     innerArr.push([mL[currentIdx + 2], [mL[currentIdx + 3]]]);
//   } else if (i === 1) {
//     innerArr.push([mL[currentIdx + 2], [mL[currentIdx + 3]]]);
//   } else if (i === 2) {
//     innerArr.pop()
//     innerArr.push([mL[currentIdx + 1], mL[currentIdx + 2] ,[mL[currentIdx + 3]]]);
//   }

//   newArr.push(innerArr);
//   currentIdx += 4;
// }

// console.log(newArr);

///////////////////////////////////////////////////////////////////////////////////////////

// 1.5 // Verilen array

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['September' , ['October', 'November', 'December']]
//     ['May','June',['July','August']],
// ];

// let newArr = [];
// let currentIdx = 0;

// for (let i = 0; i < 3; i++) {
//   let innerArr = [mL[currentIdx], mL[currentIdx + 1]];

//   if (i === 0) {
//     innerArr.push([mL[currentIdx + 2], mL[currentIdx + 3]]);
//   } else if (i === 1) {
//     innerArr.pop()
//     innerArr.push([mL[currentIdx + 1], mL[currentIdx + 2], mL[currentIdx + 3]]);
//   } else if (i === 2) {
//     innerArr.push([mL[currentIdx + 2] ,mL[currentIdx + 3]]);
//   }

//   newArr.push(innerArr);
//   currentIdx += 4;
// }

// console.log(newArr);

///////////////////////////////////////////////////////////////////////////////////////////

// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Murad Nerimanli'

// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]

// let fullName = "Shamil Nazarov";
// let firstName = fullName.split(" ")[0].toUpperCase();
// let lastName = fullName.split(" ")[1].toUpperCase();

// let maxLength = Math.max(firstName.length, lastName.length);
// firstName = firstName.padEnd(maxLength, "X");
// lastName = lastName.padEnd(maxLength, "X");

// let result = firstName.split("").map((a, index) => [a, lastName[index]]);

// console.log(result);

// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var)
// sonra onlari umumi arraya elave etmelisiz

///////////////////////////////////////////////////////////////////////////////////////////

// 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// gozlenilen netice  '!ey Babek Kebab yE' - olmalidir

// let cumle = "'Ey babeK kebaB ye!'";
// let tersCumle = cumle.split('').reverse().join('');

// console.log(tersCumle);

// let cumle = "'Ey babeK kebaB ye!'";
// let tersCumle = '';

// for (let i = cumle.length - 1; i >= 0; i--) {
//     tersCumle += cumle[i];
// }

// console.log(tersCumle);

// let arr = [
//   3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342,
//   34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34,
// ];

// 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin

// let newArr = []
// let sum = 0;
// for (let x of arr) {
//   if (x % 5 == 0 && x % 7 == 0) {
//     newArr.push(x)
//     sum += x;
//   }
// }
// console.log(`3 reqemli ededler: ${newArr} : Cemi: ${sum}`);

// 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)

// let newArr =[]
// for(let i=0; i<arr.length; i++){
//     if(arr[i].toString().length == 3 && arr[i]%2==0){
//         newArr.push(arr[i])
//     }
// }

// let maxNumber = Math.max(...newArr)
// console.log(`${newArr} : en boyuk 3 reqemli cut eded : ${maxNumber}`)

// 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin

// let number = [];
// for (let x of arr) {
//   if (x % 3 == 0 && x !== 3) {
//     number.push(x);
//   }
// }
// console.log(Math.min(...number));

// 7 verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin

// let obj = {
//   key1: 0,
//   key2: 3,
//   key3: 2,
//   key4: 4,
//   key5: 53,
//   key7: 7,
//   key8: 8,
//   key9: 91,
// };

// let newObj = {};

// for (let key in obj) {
//   if (key.slice(-1) == obj[key]) {
//     newObj[key] = obj[key];
//   }
// }
// console.log(newObj);

////////////////////////////////////////////////////////////////////////////////////////////////

// WINDOW & DOCUMENT//////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////

// BURADA SIZDEN YARATMAGINIZ ISTENILEN DIV-LER HER BIRI AYRI OLUB TASK HELL EDILDIKDEN SONRA KOMMENTE ATILMALI
// VE HANSI DIVIN HANSI TAKSA AID OLDUGU KOMMENT SHEKLINDE QEYD EDILMELIDIR!
// VE YA HER BIRINI AYRI FAYLLARDA EDE BILERSINIZ.

// 1) Bir div yaradin pencerenin solunda normal yerinde dayansin. 2 saniyeden bir 20px sola hereket etsin ve 20 saniyeden sonra dayansin.

// let container = document.getElementById('container');
// let div = document.createElement('div');
// div.className = 'box';

// div.style.cssText=`
// width : 150px;
// height: 150px;
// background: red;
// transform: transtateX(0px);
// sransition; .3s linear;
// `;

// container.appendChild(div);

// let conut = 0;
// let myinterval = setInterval(() =>{
//     conut += 20;
//     div.style.transform = `translateX(${conut}px)`
// },2000)

// setTimeout(()=> {
//     clearInterval(myinterval)
// },20000)

// 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px ashagi 10px saga transitionla hereket etsin.

// let container = document.getElementById('container');
// let div = document.createElement('div');
// div.className = 'box';

// div.style.cssText=`
// width : 100px;
// height: 100px;
// background: red;
// transform: transtate(0 , 0);
// sransition; .3s linear;
// `;

// container.appendChild(div);

// let conut = 0;
// let myinterval = setInterval(() =>{
//     conut += 10;
//     div.style.transform = `translate(${conut}px, ${conut}px)`
// },1000)

// 3) Bir div yaradin onu sehifede centerleyin. Olculeri 200-200px
//  kvadrat olsun 1 saniyeden bir boyuyerek 400px-400px sonra yeniden oz olculerine qayitsin
// Transitonla etmeyiniz gozlenilendir.

// let container = document.getElementById("container");
// container.style.cssText = `
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
// `;
// let div = document.createElement("div");
// div.className = "box";
// div.style.cssText = `
//     width: 200px;
//     height: 200px;
//     background: red;
//     transition: .9s linear;
// `;
// container.appendChild(div);

// let width = 200;
// let height = 200;
// setInterval(() => {
//   if (width == 200 && height == 200) {
//     width = 400;
//     height = 400;
//     div.style.width = `${width}px`;
//     div.style.height = `${height}px`;
//   } else {
//     width = 200;
//     height = 200;
//     div.style.width = `${width}px`;
//     div.style.height = `${height}px`;
//   }
// }, 1000);

// 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.

// let container = document.getElementById("container");
// let wrapper = document.createElement("div");
// let div = document.createElement("div");
// let startBtn = document.createElement("button");
// let stopBtn = document.createElement("button");
// startBtn.innerText = "Start";
// stopBtn.innerText = "Stop";
// let time = document.createElement("span");

// container.style.cssText = `
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
// `;

// div.style.cssText = `
//     width: 200px;
//     height: 200px;
//     background: red;
//     margin-bottom: 20px;
//     transition: 0.3s linear;
// `;

// wrapper.style.cssText = `
//     text-align: center;
//     justify-content: space-between;

// `;

// startBtn.style.cssText = `
//   margin: 10px auto;
//   padding: 5px 20px;
//   cursor: pointer;
//   background-color: blue;
//   color: white;

// `;

// stopBtn.style.cssText = `
//   margin: 10px auto;
//   padding: 5px 20px;
//   background-color: red;
//   color: white;
//   cursor: pointer;
// `;

// time.style.cssText = `
//   font-size: 18px;
//   margin-left: 4px;
// `;

// wrapper.append(div, startBtn, stopBtn, time);
// container.appendChild(wrapper);

// let rotateInterval;
// startBtn.onclick = () => {
//   setTimeout(() => {
//     rotateInterval;
//   }, 1000);

//   let deg = 90;
//   rotateInterval = setInterval(() => {
//     div.style.transform = `rotate(${deg}deg)`;
//     deg += 90;
//   }, 2000);
// };

// let count = 3;
// stopBtn.onclick = () => {
//   if(rotateInterval){
//     let timeInterval = setInterval(() => {
//       time.innerText = count;
//       if (count == 0) {
//         clearInterval(rotateInterval);
//         clearInterval(timeInterval);
//         time.innerText = '';
//         count = 4;
//       }
//       count--;
//     }, 1000);
//   }

// };

// 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq en sag kunce
// 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve sonda ilk bashldigi yere qayitsin

// let container = document.getElementById("container");
// let div = document.createElement("div");

// container.style.cssText = `
//     height: 100vh;
//     position: relative;
// `;

// div.style.cssText = `
//     width: 200px;
//     height: 200px;
//     background: red;
//     position: absolute;
//     left: 15px;
//     top: 15px;
//     bottom: auto;
//     right: auto;
//     border-radius: 20px;

// `;
// container.appendChild(div);

// div.addEventListener("click", function () {
//   if (div.offsetLeft == 15 && div.offsetTop == 15) {
//     div.style.left = "auto";
//     div.style.right = "15px";
//   } else if (
//     div.offsetLeft == window.innerWidth - div.offsetWidth - 15 &&
//     div.offsetTop == 15
//   ) {
//     div.style.top = "auto";
//     div.style.bottom = "15px";
//   } else if (
//     div.offsetLeft == window.innerWidth - div.offsetWidth - 15 &&
//     div.offsetTop == window.innerHeight - div.offsetHeight - 15
//   ) {
//     div.style.right = "auto";
//     div.style.left = "15px";
//   } else if (
//     div.offsetLeft == 15 &&
//     div.offsetTop == window.innerHeight - div.offsetHeight - 15
//   ) {
//     div.style.bottom = "auto";
//     div.style.top = "15px";
//   }
// });

// 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin.
// Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.

// document.addEventListener("keydown", function(e){
//   if (e.key == "ArrowRight") {
//     div.style.left = "auto";
//     div.style.right = "15px";
//   }

//   if (e.key == "ArrowDown") {
//     div.style.top = "auto";
//     div.style.bottom = "15px";
//   }

//   if (e.key == "ArrowLeft") {
//     div.style.right = "auto";
//     div.style.left = "15px";
//   }

//   if (e.key == "ArrowUp") {
//     div.style.bottom = "auto";
//     div.style.top = "15px";
//   }

// })

// 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin box-un yerini yadda saxlayin.
// Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// Ipucu localstorage ve ya session storage istifade edin.

// let storedPosition = localStorage.getItem("divPosition");
// if (storedPosition) {
//     let position = JSON.parse(storedPosition);
//     div.style.left = position.left;
//     div.style.right = position.right;
//     div.style.top = position.top;
//     div.style.bottom = position.bottom;
// }

// document.addEventListener("keydown", function(e){
//     if (e.key == "ArrowRight") {
//         div.style.left = "auto";
//         div.style.right = "15px";
//     }

//     if (e.key == "ArrowDown") {
//         div.style.top = "auto";
//         div.style.bottom = "15px";
//     }

//     if (e.key == "ArrowLeft") {
//         div.style.right = "auto";
//         div.style.left = "15px";
//     }

//     if (e.key == "ArrowUp") {
//         div.style.bottom = "auto";
//         div.style.top = "15px";
//     }

//     let position = {
//         left: div.style.left,
//         right: div.style.right,
//         top: div.style.top,
//         bottom: div.style.bottom,
//     };
//     localStorage.setItem("divPosition", JSON.stringify(position));
// });

// 8) Chrome dinozavr oyununu gormush olarsiz Space basdiqca Dinozavr tullanib dushur.
// oradaki kimi oyun yazmaginizi yox sadece istediyiniz bir heyvanin png sheklini ekranda cixarib 'Space' duymesini basdiqda 200px tullanib sora yerine qayitmagini yazin. :D Maragli olacaq

// let container = document.getElementById("container");
// let imgWrap = document.createElement("div");
// let img = document.createElement("img");
// img.setAttribute("src", "img1.png")
// img.style.cssText = `
//   width: 300px;
//   transition: .2s linear;
// `;
// container.style.cssText = `
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
// `;
// imgWrap.style.cssText = `
//   width: 80%;
//   text-align: center;
//   border-bottom: 15px solid rgb(177, 60, 11);
//   box-shadow: rgb(0 0 0 / 50%) 0px 25px 16px -20px;
//   border-radius: 15px;
//   `;

// imgWrap.append(img)
// container.append(imgWrap)

// document.addEventListener("keydown", function(e){
//   if (e.code == "Space") {
//     img.style.transform = "translateY(-200px)";
//   }
// })

// document.addEventListener("keyup", function(e){
//   if (e.code == "Space") {
//     img.style.transform = "translateY(0)";
//   }
// })

// 9) Random reng generate eden functionu internetden tapib ekrana her clickde body-e yeni generate edilmish ve yeni reng-le renglenmish 100px - kvadrat box elave edin.

// const container = document.getElementById("container");
// container.style.cssText = `
//   display: flex;
//   flex-wrap: wrap;
// `;

// function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// window.addEventListener("click", () => {
//   const div = document.createElement("div");
//   div.style.cssText = `
//     width: 100px;
//     height: 100px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: ${getRandomColor()};
//   `;
//   container.appendChild(div);
// });

// 10) Input (Type number) ve box (div 10px kvadrat) elave edin. Inputun icerisine reqem yazdiginiz qeder olculer boyusun ve ya kicilsin.
// Meselen 10px dir inputa 100yazdim olcusu 110px kvadrat olsun

// const container = document.getElementById("container");
// const div = document.createElement("div");
// const input = document.createElement("input");
// input.type = "number";

// container.style.cssText = `
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   flex-direction: column;
// `;

// div.style.cssText = `
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   background: red;
//   margin-bottom: 20px;
// `;

// input.style.cssText = `
//     border: 3px solid black;
//     border-radius: 10px;
//     font-size: 26px;
//     margin-top: 100px;
//     color: red;
//     padding: 15px;
// `

// container.append(div, input);

// input.onchange = () => {
//   const inputValue = parseInt(input.value);
//   const newWidth = Math.abs(inputValue) + 10;

//   div.style.width = `${newWidth}px`;
//   div.style.height = `${newWidth}px`;
// };
