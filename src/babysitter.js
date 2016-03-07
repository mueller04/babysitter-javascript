function Babysitter(){

  Babysitter.prototype.calculate = function(beginTime, endTime){

    if (beginTime < 17 && beginTime > 4) {
      return 'must start no earlier than 5 pm';
    }
    if (endTime > 4 && endTime < 17){
      return 'must end no later than 4 am';
    }
    return true;
  };
}
