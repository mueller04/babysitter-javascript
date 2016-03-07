describe('When Babysitter is given a start and end time: ', function(){

  var babysitter;

  beforeEach(function(){
    babysitter = new Babysitter();
  });

  describe('calculate returns', function(){

    it('the result given when start time is before 5 pm', function(){
      expect(babysitter.calculate(16, 17)).toEqual('must start no earlier than 5 pm')
    });

    it('the result given when start time is at 5 pm', function(){
      expect(babysitter.calculate(17, 18)).toEqual(true)
    });

    it('the result given when end time is after 4 am', function(){
      expect(babysitter.calculate(17, 5)).toEqual('must end no later than 4 am')
    });

    it('paid 12 per hour from start to bed at 22', function(){
      expect(babysitter.calculate(17, 23)).toEqual(60)
    });

  });


});
