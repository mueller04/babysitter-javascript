function Babysitter(){

  Babysitter.prototype.calculate = function(number){
    if (number < 17) {
      return 'must start no later than 5 pm';
    } else {
      return number;
    }
  };
}
