var returnobject = new Object();

var Babysitter = function Babysitter(){
  this.bedTime = 22;
  this.bedTimePay = 12.00;
  this.midnight = 24;
  this.midnightpay = 8.00;
  this.endTimePay = 16.00;
}

  Babysitter.prototype = {

    calculate: function calculate(beginTime, endTime) {
      timevalidator = this.validateTime(beginTime, endTime);
      if (timevalidator.isValid === true){

        if (endTime <= 4) {
          endTime += 24;
        }

        return this.addHours(beginTime, endTime);

      } else {
        return this.validateTime(beginTime, endTime);
      }
    },
    addHours: function addHours(beginTime, endTime){
      var total = 0;


      for (i = beginTime + 1; i <= endTime; i++){
        if (i <= this.bedTime) {
          total += this.bedTimePay;
        } else if (i <= this.midnight){
          total += this.midnightpay;
        } else {
          total += this.endTimePay;
        }
      }

      returnobject.pay = total;
      return returnobject;
    },
    validateTime: function validateTime(beginTime, endTime){


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
    }
}
