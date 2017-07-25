
// birthday-countdown-fucntion
{
var daysUntilMyBirthday = 364;
while (daysUntilMyBirthday > 0){
    if(daysUntilMyBirthday > 30){
        console.log("its " +daysUntilMyBirthday+" days until my birthday, how terrible!");
    }
    if(daysUntilMyBirthday > 5 && daysUntilMyBirthday <= 30){
        console.log("it's "+ daysUntilMyBirthday+ " days until my brithday, getting closer!");
    }
    if(daysUntilMyBirthday < 5){
        console.log("it's "+ daysUntilMyBirthday+ " days until my birthday, so close!");
    }
    if(daysUntilMyBirthday == 1){
        console.log("it's "+ daysUntilMyBirthday+ " day until my birthday, so close!");
    }
daysUntilMyBirthday-=1;
}
console.log("ITS MY BIRTHDAY");
}