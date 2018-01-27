var Rat = function() {

}

Rat.prototype.touchFood = function(food) {
  food.poisonous = true;
}

module.exports = Rat;
