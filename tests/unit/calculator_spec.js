var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('can add two numbers', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.strictEqual(5, calculator.runningTotal);
  });

  it('can subtract a number from another', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(3, calculator.runningTotal);
  });

  it('can multiply 2 numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(15, calculator.runningTotal);
  });

  it('can divide 2 numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(3, calculator.runningTotal);
  });

  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(2);
    assert.strictEqual(22, calculator.runningTotal);
  });

  it('can chain multiple operations together', function(){
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(4);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.strictEqual(8, calculator.runningTotal);
  });

  it('can clear the running total without affecting the calculation', function(){
    calculator.runningTotal = 2;
    calculator.operatorClick("+")
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.strictEqual(10, calculator.runningTotal);
  });

});
