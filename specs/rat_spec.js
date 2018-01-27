var assert = require('assert');
var Rat = require('../rat.js')
var Food = require('../food.js')

describe('Rat', function(){

  var rat;
  var food;

  beforeEach(function(){
    rat = new Rat;
    food = new Food("Apple", 5);
  })

  it('should touch food and make it poisonous', function(){
    rat.touchFood(food);
    assert.strictEqual(food.poisonous, true);
  })

})
