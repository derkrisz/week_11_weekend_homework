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

Hero.prototype.eatFood = function(food) {
  if (food.name == this.fav_food) {
    this.health += food.replenishment_value * 1.5;
  } else {
    this.health += food.replenishment_value;
  }
}

  module.exports = Hero;
