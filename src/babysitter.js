var returnobject = new Object();



function Babysitter(){

var bedTime = 22;
var bedTimePay = 12.00;
var midnight = 24;
var midnightpay = 8.00;
var endTimePay = 16.00;


  Babysitter.prototype.calculate = function(beginTime, endTime){
    timevalidator = Babysitter.prototype.validateTime(beginTime, endTime);

    if (timevalidator.isValid === true){

      if (endTime <= 4) {
        endTime += 24;
      }

      return Babysitter.prototype.addHours(beginTime, endTime);

    } else {
      return Babysitter.prototype.validateTime(beginTime, endTime);
    }

  };

  Babysitter.prototype.addHours = function(beginTime, endTime){
    var total = 0;

    for (i = beginTime + 1; i <= endTime; i++){
      if (i <= bedTime) {
        total += bedTimePay;
      } else if (i <= midnight){
        total += midnightpay;
      } else {
        total += endTimePay;
      }
    }
    returnobject.pay = total;
    return returnobject;
  }

  Babysitter.prototype.validateTime = function(beginTime, endTime) {
    if (beginTime < 17 && beginTime > 4) {
      //return 'must start no earlier than 5 pm';
      returnobject.message = 'must start no earlier than 5 pm';
      returnobject.isValid = false;
      return returnobject;
    }
    if (endTime > 4 && endTime < 17){
      returnobject.message = 'must end no later than 4 am';
      returnobject.isValid = false;
      return returnobject;
    }
    returnobject.isValid = true;
    return returnobject;
  };



}
