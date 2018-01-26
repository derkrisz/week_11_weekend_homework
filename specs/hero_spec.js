var assert = require('assert');
var Hero = require('../hero.js')
var Task = require('../task.js')

describe('Hero', function(){

  var hero;
  var task1;
  var task2;
  var task3;
  var task4;

  beforeEach(function() {
    hero = new Hero("Krisz", 100, "Pizza");
    task1 = new Task("Do nothing", 1, 1, 0);
    task2 = new Task("Clean kitchen", 2, 3, 10);
    task3 = new Task("Cut the grass in garden", 5, 2, 15);
    task4 = new Task("Take the dog for a walk", 3, 2, 5);
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
  })

  it('should talk', function() {
    assert.strictEqual(hero.talk(), "Hello, my name is Krisz!")
  })

  xit('should have no tasks', function() {
    assert.strictEqual(hero.tasks.length, 0);
  })

  it('should be able to add task to tasks', function() {
    hero.addTask(task4);
    assert.strictEqual(hero.tasks.length, 4);
  })

})
