var assert = require('assert');
var Hero = require('../hero.js')

describe('Hero', function(){

  var hero;
  var task1;
  var task2;
  var task3;

  beforeEach(function() {
    hero = new Hero("Krisz", 100, "Pizza");
  })

  it('should talk', function() {
    assert.strictEqual(hero.talk(), "Hello, my name is Krisz!")
  })

  it('should have no tasks', function() {
    assert.strictEqual(hero.tasks.length, 0);
  })

  it('should be able to add task to tasks', function() {
    hero.addTask(task1);
    assert.strictEqual(hero.tasks.length, 1);
  })

})
