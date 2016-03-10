describe('When Babysitter is given a start and end time: ', function(){

  var babysitter;

  beforeEach(function(){
    babysitter = new Babysitter();
  });

  describe('calculate returns', function(){

    it('the result given when start time is before 5 pm', function(){
      var result = babysitter.calculate(16, 17);
      expect(result.message).toEqual('must start no earlier than 5 pm')
    });

    it('the result given when start time is at 5 pm', function(){
      var result = babysitter.calculate(17, 18);
      expect(result.pay).toEqual(12)
    });

    it('the result given when end time is after 4 am', function(){
      var result = babysitter.calculate(17, 5);
      expect(result.message).toEqual('must end no later than 4 am')
    });

    it('paid 12 per hour from start to bed at 22', function(){
      var result = babysitter.calculate(17, 22);
      expect(result.pay).toEqual(60)
    });

    it('paid 8 per hour from bed to midnight at 22', function(){
      var result = babysitter.calculate(22, 23);
      expect(result.pay).toEqual(8)
    });

    it('paid 12 per hour and 8 per hour start and bed time pay', function(){
      var result = babysitter.calculate(17, 23);
      expect(result.pay).toEqual(68)
    });

    it('paid 16 per hour midnight to end of job', function(){
      var result = babysitter.calculate(24, 4);
      expect(result.pay).toEqual(64)
    });

    it('paid 8 per hour from bed to midnight at end at midnight', function(){
      var result = babysitter.calculate(22, 24);
      expect(result.pay).toEqual(16)
    });

    it('paid start to midnight', function(){
      var result = babysitter.calculate(17, 24);
      expect(result.pay).toEqual(76)
    });

    it('min start time to max end time test', function(){
      var result = babysitter.calculate(17, 4);
      expect(result.pay).toEqual(140)
    });

  });


});
