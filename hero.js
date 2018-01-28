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
  var multiplier = 1.5;
  if (food.name == this.fav_food && !food.poisonous) {
    this.health += food.replenishment_value * multiplier;
  } else if (food.name == this.fav_food && food.poisonous) {
      this.health -= food.replenishment_value * multiplier;
  } else if (food.name != this.fav_food && food.poisonous) {
      this.health -= food.replenishment_value;
  } else {
    this.health += food.replenishment_value;
  }
}

Hero.prototype.sortSetup = function(sortType) {
  return function(firstItem, secondItem) {
    switch (sortType) {
      case 'difficulty':
      return firstItem.difficulty_level - secondItem.difficulty_level;
      break;
      case 'urgency':
      return firstItem.urgency_level - secondItem.urgency_level;
      break;
      case 'reward':
      return firstItem.reward - secondItem.reward;
      break;
    }
  }
}

Hero.prototype.sortTasks = function(type) {
  return this.tasks.sort(this.sortSetup(type))
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
