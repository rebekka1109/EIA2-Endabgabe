var GardenSimulation;
(function (GardenSimulation) {
    var Plant = /** @class */ (function () {
        function Plant(_type, _color, _row, _collum, _finalAge, _price) {
            this.age = 0;
            this.needsWater = false;
            this.bugs = [];
            this.color = _color;
            this.type = _type;
            this.row = _row;
            this.collum = _collum;
            this.finalAge = _finalAge;
            this.price = _price;
            this.currentcolor = _color;
        }
        Plant.prototype.grow = function () {
            if (this.age < this.finalAge && this.needsWater == false && this.bugs.length == 0)
                this.age++;
        };
        Plant.prototype.loosesWater = function () {
            var randomWater = Math.round(Math.random() * 10);
            if (randomWater == 0) {
                this.needsWater = true;
                if (this.bugs.length == 0) {
                    this.currentcolor = "black";
                }
            }
        };
        Plant.prototype.getsBug = function () {
            var randomBug = Math.round(Math.random() * 20);
            if (randomBug == 0) {
                this.currentcolor = "red";
                this.bugs.push(new GardenSimulation.Bug());
            }
        };
        Plant.prototype.killBug = function () {
            this.bugs = [];
            this.currentcolor = this.color;
        };
        Plant.prototype.getsWater = function () {
            if (this.bugs.length == 0) {
                this.needsWater = false;
                this.currentcolor = this.color;
            }
        };
        Plant.prototype.getsFertilizer = function () {
            if (this.age < this.finalAge && this.needsWater == false && this.bugs.length == 0) {
                this.age++;
            }
        };
        Plant.prototype.draw = function () {
            GardenSimulation.cr2.save();
            GardenSimulation.cr2.translate(this.row * 100, this.collum * 100);
            GardenSimulation.cr2.fillStyle = this.currentcolor;
            GardenSimulation.cr2.fillRect(45 - 1 * this.age, 45 - 1 * this.age, 10 + 1 * this.age, 10 + 1 * this.age);
            GardenSimulation.cr2.restore();
        };
        return Plant;
    }());
    GardenSimulation.Plant = Plant;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Plant.js.map