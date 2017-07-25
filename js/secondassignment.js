{var hour = 5;
var minute = 20;
var period = "PM";}


if (minute > 30) {
  if(period == "AM") {
    console.log("It's almost", hour + 1, "in the morning");
  }
  if(period == "PM") {
    console.log("It's almost", hour + 1, "in the evening");
  }
}
else if (minute < 30){
  if(period == "AM") {
    console.log("It's just past", hour, "in the morning");
  }
  if(period == "PM"){
    console.log("It's just past", hour, "in the evening");
  }
} 