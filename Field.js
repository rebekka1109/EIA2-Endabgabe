var GardenSimulation;
(function (GardenSimulation) {
    var Field = /** @class */ (function () {
        function Field(_row, _collum) {
            this.color = "tan";
            this.isClear = true;
            this.row = _row;
            this.collum = _collum;
        }
        Field.prototype.isHit = function (_mX, _mY) {
            var _this = this;
            if (_mX - 100 < this.row * 100 && _mX - 100 > this.row * 100 - 100 && _mY - 100 < this.collum * 100 && _mY - 100 > this.collum * 100 - 100) {
                switch (GardenSimulation.Player.task) {
                    case GardenSimulation.TASK.PLANTSEED1:
                        if (this.isClear == true && GardenSimulation.Player.money > 0) {
                            console.log("seed 1");
                            GardenSimulation.allPlants.push(new GardenSimulation.Plant("seed1", "rgb(00, 250, 00)", this.row, this.collum, 10, 5));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.Player.money--;
                        }
                        else {
                            console.log("cannot do this on a full field");
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSEED2:
                        if (this.isClear == true && GardenSimulation.Player.money > 0) {
                            console.log("seed 2");
                            GardenSimulation.allPlants.push(new GardenSimulation.Plant("seed2", "rgb(00, 200, 00)", this.row, this.collum, 20, 4));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.Player.money--;
                        }
                        else {
                            console.log("cannot do this on a full field");
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSEED3:
                        if (this.isClear == true && GardenSimulation.Player.money > 0) {
                            console.log("seed 3");
                            GardenSimulation.allPlants.push(new GardenSimulation.Plant("seed3", "rgb(00, 150, 00)", this.row, this.collum, 30, 3));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.Player.money--;
                        }
                        else {
                            console.log("cannot do this on a full field");
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSEED4:
                        if (this.isClear == true && GardenSimulation.Player.money > 0) {
                            console.log("seed 4");
                            GardenSimulation.allPlants.push(new GardenSimulation.Plant("seed4", "rgb(00, 100, 00)", this.row, this.collum, 25, 2));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.Player.money--;
                        }
                        else {
                            console.log("cannot do this on a full field");
                        }
                        break;
                    case GardenSimulation.TASK.PLANTSEED5:
                        if (this.isClear == true && GardenSimulation.Player.money > 0) {
                            console.log("seed 5");
                            GardenSimulation.allPlants.push(new GardenSimulation.Plant("seed5", "rgb(00, 50, 00)", this.row, this.collum, 15, 1));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.Player.money--;
                        }
                        else {
                            console.log("cannot do this on a full field");
                        }
                        break;
                    case GardenSimulation.TASK.HARVEST:
                        if (this.isClear == false) {
                            console.log("harvest");
                            GardenSimulation.allPlants.splice(GardenSimulation.allPlants.findIndex(function (e) { return e == _this.plant; }), 1);
                            this.isClear = true;
                            if (this.plant.age == this.plant.finalAge) {
                                GardenSimulation.Player.money = GardenSimulation.Player.money + this.plant.price;
                            }
                        }
                        else {
                            console.log("cannot do this on a clear field");
                        }
                        break;
                    case GardenSimulation.TASK.WATER:
                        if (this.isClear == false) {
                            console.log("water");
                            this.plant.getsWater();
                        }
                        else {
                            console.log("cannot do this on a clear field");
                        }
                        break;
                    case GardenSimulation.TASK.FERTILIZE:
                        if (this.isClear == false) {
                            console.log("fertilize");
                            this.plant.getsFertilizer();
                        }
                        else {
                            console.log("cannot do this on a clear field");
                        }
                        break;
                    case GardenSimulation.TASK.PESTICIDE:
                        if (this.isClear == false) {
                            console.log("pesticide");
                            this.plant.killBug();
                        }
                        else {
                            console.log("cannot do this on a clear field");
                        }
                        break;
                }
                this.draw();
                for (var _i = 0, allPlants_1 = GardenSimulation.allPlants; _i < allPlants_1.length; _i++) {
                    var plant = allPlants_1[_i];
                    plant.draw();
                }
            }
        };
        Field.prototype.draw = function () {
            GardenSimulation.cr2.save();
            GardenSimulation.cr2.translate(this.row * 100, this.collum * 100);
            GardenSimulation.cr2.fillStyle = this.color;
            GardenSimulation.cr2.fillRect(5, 5, 95, 95);
            GardenSimulation.cr2.restore();
        };
        return Field;
    }());
    GardenSimulation.Field = Field;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Field.js.map