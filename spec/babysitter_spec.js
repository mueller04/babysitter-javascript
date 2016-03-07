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
      expect(babysitter.calculate(17, 18)).toEqual(12)
    });

    it('the result given when end time is after 4 am', function(){
      expect(babysitter.calculate(17, 5)).toEqual('must end no later than 4 am')
    });

    it('paid 12 per hour from start to bed at 22', function(){
      expect(babysitter.calculate(17, 22)).toEqual(60)
    });

    it('paid 8 per hour from bed to midnight at 22', function(){
      expect(babysitter.calculate(22, 23)).toEqual(8)
    });

    it('paid 12 per hour and 8 per hour start and bed time pay', function(){
      expect(babysitter.calculate(17, 23)).toEqual(68)
    });

    it('paid 16 per hour midnight to end of job', function(){
      expect(babysitter.calculate(24, 4)).toEqual(64)
    });

  });


});
