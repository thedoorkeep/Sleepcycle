var alarm = function (){
  alert("Time to wake up!");
};

var now = moment().format('LT');

var alarmOne = moment().add(1, 'hours').add(30, 'minutes').format('LT');

var alarmTwo = moment().add(3, 'hours').format('LT');

var alarmThree = moment().add(4, 'hours').add(30, 'minutes').format('LT');

var alarmFour = moment().add(6, 'hours').format('LT');

var alarmFive = moment().add(7, 'hours').add(30, 'minutes').format('LT');

$('#alarmOne').text(alarmOne);

$('#alarmTwo').text(alarmTwo);

$('#alarmThree').text(alarmThree);

$('#alarmFour').text(alarmFour);

$('#alarmFive').text(alarmFive);

$('#now').text(now);

