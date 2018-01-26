var Task = function(name, difficulty_level, urgency_level, reward) {
  this.name = name;
  this.difficulty_level = difficulty_level;
  this.urgency_level = urgency_level;
  this.reward = reward;
  this.completed = false;
}

Task.prototype.markCompleted = function() {
  this.completed = true;
}

module.exports = Task;
