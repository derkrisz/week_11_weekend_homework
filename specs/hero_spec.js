var assert = require('assert');
var Hero = require('../hero.js')

describe('Hero', function(){

  var hero;

  beforeEach(function() {
    hero = new Hero("Krisz", 100, "Pizza");
  })

  it('should talk', function(){
    assert.strictEqual(hero.talk(), "Hello, my name is Krisz!")
  })

})
