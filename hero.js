var Hero = function(name, health, fav_food) {
  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
  this.tasks = [];
}

Hero.prototype.talk = function() {
  return `Hello, my name is ${this.name}!`;
}

Hero.prototype.addTask = function(task) {
  this.tasks.push(task);
}

Hero.prototype.markTaskCompleted = function(task) {
  if (this.tasks.includes(task) == true) {
    task.markCompleted();
  }
}

module.exports = Hero;
