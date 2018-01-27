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
  if (food.name == this.fav_food && !food.poisonous) {
    this.health += food.replenishment_value * 1.5;
  } else if (food.name == this.fav_food && food.poisonous) {
      this.health -= food.replenishment_value * 1.5;
  } else if (food.name != this.fav_food && food.poisonous) {
      this.health -= food.replenishment_value;
  } else {
    this.health += food.replenishment_value;
  }
}

Hero.prototype.sortTasksByDifficulty = function() {
   return this.tasks.sort(function(task1, task2) {
    return task1.difficulty_level - task2.difficulty_level;
  })
}

Hero.prototype.viewTasksThatAreCompleted = function() {
  return this.tasks.filter(function(task){
    return task.completed == true;
  })
}

Hero.prototype.viewTasksThatAreNotCompleted = function() {
  return this.tasks.filter(function(task){
    return task.completed == false;
  })
}

  module.exports = Hero;
