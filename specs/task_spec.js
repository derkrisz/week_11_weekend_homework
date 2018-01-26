var assert = require('assert');
var Task = require('../task.js')

describe('Task', function(){

  var task;

  beforeEach(function(){
    task = new Task("clean kitchen", 2, 3, 10);
  })

  it('should mark task as completed', function(){
    task.markCompleted();
    assert.strictEqual(task.completed, true);
  })

})
