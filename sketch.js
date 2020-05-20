//seong ryul park
//5646463
//cs099
//spring 2020
//Display Today's Date exercise

let current_date = new Date();
let date;
let Year;
let Day;
let Month;

function setup() {
  createCanvas(600, 200);
  console.log(current_date); 
  
  date = current_date.getDate();
  Day = current_date.getDay();
  Year = current_date.getFullYear();
  Month = current_date.getMonth();
}

function draw() {
  background(220);
  textSize(20);
  text('Day.', 10, 100);
  text('Month.', 150, 100);
  text('Date.', 290, 100);
  text('Year.', 400, 100);
  
  textSize(30);
  text(date, 350, 100);
  text(Year, 460, 100);
  if(Month == 0){
    text('Jan.', 220, 100);
  } else if(Month == 1){
    text('Feb.', 220, 100); 
  } else if(Month == 2){
    text('Mar.', 220, 100); 
  } else if(Month == 3){
    text('Apr.', 220, 100); 
  } else if(Month == 4){
    text('May', 220, 100); 
  } else if(Month == 5){
    text('Jun.', 220, 100); 
  } else if(Month == 6){
    text('Jul.', 220, 100); 
  } else if(Month == 7){
    text('Aug.', 220, 100); 
  } else if(Month == 8){
    text('Sep.', 220, 100); 
  } else if(Month == 9){
    text('Oct.', 220, 100); 
  } else if(Month == 10){
    text('Nov.', 220, 100); 
  } else if(Month == 11){
    text('Dec.', 220, 100); 
  } else {
  }
  
  if (Day == 0){
    text('Sun.', 65, 100);
  } else if (Day == 1) {
    text('Mon.', 65, 100);
  } else if (Day == 2) {
    text('Tues.', 65, 100);
  } else if (Day == 3) {
    text('Wed.', 65, 100);
  } else if (Day == 4) {
    text('Turs.', 65, 100);
  }else if (Day == 5) {
    text('Fri.', 65, 100);
  } else if (Day == 6) {
    text('Sat.', 65, 100);
  } else {
  }
}

