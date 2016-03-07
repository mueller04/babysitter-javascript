function Babysitter(){

var bedTime = 22;
var bedTimePay = 12.00;

  Babysitter.prototype.calculate = function(beginTime, endTime){
    isValidTime = Babysitter.prototype.validateTime(beginTime, endTime);

    if (isValidTime === true){


      var finish;
      if (endTime > bedTime || endTime <= 4){
        finish = bedTime;
      } else {
        finish = endTime;
      }

      return ((finish - beginTime) * bedTimePay)
    } else {
      return Babysitter.prototype.validateTime(beginTime, endTime);
    }

  };

  Babysitter.prototype.validateTime = function(beginTime, endTime) {
    if (beginTime < 17 && beginTime > 4) {
      return 'must start no earlier than 5 pm';
    }
    if (endTime > 4 && endTime < 17){
      return 'must end no later than 4 am';
    }
    return true;
  };

}
