describe('When Babysitter is given a start and end time: ', function(){

  var babysitter;

  beforeEach(function(){
    babysitter = new Babysitter();
  });

  describe('calculate returns', function(){

    it('the result given when start time is before 5 pm', function(){
      expect(babysitter.calculate(16)).toEqual('must start no later than 5 pm')
    });

    it('the result given when start time is at 5 pm', function(){
      expect(babysitter.calculate(17)).toEqual(17)
    });

    it('the result given when end time is after 4 am', function(){
      expect(babysitter.calculate(17, 5)).toEqual('must end no later than 4 am')
    });

  });


});
