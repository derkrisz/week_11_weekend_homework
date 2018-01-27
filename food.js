var Food = function(name, replenishment_value) {
  this.name = name;
  this.replenishment_value = replenishment_value;
  this.poisonous = false;
}

module.exports = Food;
