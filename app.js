console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1: MINIMUM NUMBER #\n==========\n");
function printOdds (count){
  if(count < 1){
    console.log(`This is a negative number.`)
  }
  for (let i = 0; i < count; i++) {
    if(i % 2 != 0){
      console.log(i)
    }
  }
}
printOdds(10);
printOdds(-5);

// Exercise 2 Section
console.log("EXERCISE 2: LEGAL?\n==========\n");
function checkAge (age = 0, userName = "bestie"){
  let aboveSixteen = `Congrats ${userName}, you can drive!`
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
  if(age < 16){
    console.log(belowSixteen);
  } else{
    console.log(aboveSixteen);
  }
}
checkAge(1);
checkAge(22);
checkAge(16, "Sarah");

// Exercise 3 Section
console.log("EXERCISE 3: WHICH QUADRANT?\n==========\n");
function nameQuadrant(x, y){
  //quadrant 1: x & y > 0
  //quadrant 2: x < 0 & y > 0
  //quadrant 3: x < 0 & y < 0
  //quadrant 4: x > 0 & y < 0
  if(x > 0 && y > 0){
    console.log(`(${x},${y}) is in Quadrant 1.`);
  }
  if(x < 0 && y > 0){
    console.log(`(${x},${y}) is in Quadrant 2.`);
  }
  if(x < 0 && y < 0){
    console.log(`(${x},${y}) is in Quadrant 3.`);
  }
  if(x > 0 && y < 0){
    console.log(`(${x},${y}) is in Quadrant 4.`);
  }
  if(x == 0 && y == 0){
    console.log(`This is on the origin.`);
  }
}
nameQuadrant(-1, -2); //quadrant 3
nameQuadrant(5, 10); //quadrant 1
nameQuadrant(-6, 1); //quadrant 2
nameQuadrant(10, -10); //quadrant 4
nameQuadrant(0,0); //origin

// Exercise 4 Section
console.log("EXERCISE 4: WHAT TYPE OF TRIANGLE?\n==========\n");
function triangleType(side1, side2, side3){
  //side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2 :invalid
  //side1 = side2 = side3 : equilateral
  //side1 = side2 || side 2 == side 3 || side3 == side1 : isosceles
  //side1 != side2 && side2 != side3 && side3 != side1 : scalene
  if(side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2){
    console.log(`${side1}, ${side2}, ${side3} does not form a valid triangle.`);
  }
  else if(side1 == side2 && side2 == side3 && side1 == side3){
    console.log(`${side1}, ${side2}, ${side3} makes an equilateral triangle.`);
  }
  else if(side1 == side2 || side2 == side3 || side3 == side1){
    console.log(`${side1}, ${side2}, ${side3} makes an isosceles triangle.`);
  }
  else if(side1 != side2 && side2 != side3 && side3 != side1){
    console.log(`${side1}, ${side2}, ${side3} makes a scalene triangle.`);
  }
}

triangleType(1,1,1); //equilateral
triangleType(1,1,15); //invalid
triangleType(4,4,5); //isosceles
triangleType(3,4,5); //scalene

// Exercise 5 Section
console.log("EXERCISE 5: DATA PLAN STATUS\n==========\n");
// 15 days used, 15 days remaining
// Average daily use: 3.333 GB/day
// You are EXCEEDING your average daily use (3.73 GB/day),
// continuing this high usage, you'll exceed your data plan by
// 11.9 GB.
// To stay below your data plan, use no more than 2.93 GB/day.
function displayDataFeedback(planLimit, day, usage){
  let periodLength = 30;
  let daysLeft = periodLength - day;
  let currentAvgUsage = usage / day;
  let projectedAvgUsage = planLimit / periodLength;
  let projectedUsage = daysLeft * currentAvgUsage;
  let estimatedTotalUsage = planLimit - (usage + projectedUsage);
  let statusMessage;

  
  if(currentAvgUsage > projectedAvgUsage){
    statusMessage = "EXCEEDING";
  }
  else if(currentAvgUsage < projectedAvgUsage){
    statusMessage = "UNDER";
  }
  else if(currentAvgUsage == projectedAvgUsage){
    statusMessage = "RIGHT AT";
  }
  
  console.log(`${day} day(s) used, ${daysLeft} day(s) remaining. Current daily use: ${currentAvgUsage} GB/day`);
  console.log(`You are ${statusMessage} your suggested daily use (${projectedAvgUsage} GB/day), continuing this usage you will use ${estimatedTotalUsage} GB from your data limit. `)
}

displayDataFeedback(50, 15, 50);