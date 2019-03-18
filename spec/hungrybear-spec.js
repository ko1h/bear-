import { HungryBear } from './../js/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = new HungryBear("Fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });


  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });
  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a mood level of 10', function() {
    fuzzy.setMood();
    jasmine.clock().tick(6001);
    expect(fuzzy.moodLevel).toEqual(4);
  });

  it('should get happy before you get clawed',function() {
    jasmine.clock().tick(8001);
    fuzzy.getHappy();
    expect(fuzzy.moodLevel).toEqual(20);
  });

  it('should have a snack level of 10',function() {
    fuzzy.setSnack();
    jasmine.clock().tick(5001);
    expect(fuzzy.snackLevel).toEqual(5);
  });

  it('should have a bee level of 10',function() {
    fuzzy.setHive();
    jasmine.clock().tick(7001);
    expect(fuzzy.beeLevel).toEqual(3);
  });
  it("should probably eat soon before more bee's leave", function() {
    jasmine.clock().tick(9001);
    expect(fuzzy.didYouEatAHive()).toEqual(true);
    fuzzy.feedBear();
    expect(fuzzy.beeLevel).toEqual(15);
  });
});
