namespace GardenSimulation {
    export class Field {

        row: number;
        collum: number;
        color: string = "tan";
        isClear: boolean = true;
        plant: Plant;

        constructor(_row: number, _collum: number) {
            this.row = _row;
            this.collum = _collum;
        }

        isHit(_mX: number, _mY: number): void {
            if (_mX - 100 < this.row * 100 && _mX - 100 > this.row * 100 - 100 && _mY - 100 < this.collum * 100 && _mY - 100 > this.collum * 100 - 100) {
                switch (Player.task) {
                    case TASK.PLANTSEED1:
                        if (this.isClear == true && Player.money > 0) {
                            console.log("seed 1");
                            allPlants.push(new Plant("seed1", "rgb(00, 250, 00)", this.row, this.collum, 10, 5));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isClear = false;
                            Player.money --;
                        }
                        else {
                            console.log("cannot do this on a full field");

                        }
                        break;
                    case TASK.PLANTSEED2:
                        if (this.isClear == true && Player.money > 0) {
                            console.log("seed 2");
                            allPlants.push(new Plant("seed2", "rgb(00, 200, 00)", this.row, this.collum, 20, 4));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isClear = false;
                            Player.money --;
                        }
                        else {
                            console.log("cannot do this on a full field");

                        }
                        break;
                    case TASK.PLANTSEED3:
                        if (this.isClear == true && Player.money > 0) {
                            console.log("seed 3");
                            allPlants.push(new Plant("seed3", "rgb(00, 150, 00)", this.row, this.collum, 30, 3));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isClear = false;
                            Player.money --;
                        }
                        else {
                            console.log("cannot do this on a full field");

                        }
                        break;
                    case TASK.PLANTSEED4:
                        if (this.isClear == true && Player.money > 0) {
                            console.log("seed 4");
                            allPlants.push(new Plant("seed4", "rgb(00, 100, 00)", this.row, this.collum, 25, 2));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isClear = false;
                            Player.money --;
                        }
                        else {
                            console.log("cannot do this on a full field");

                        }
                        break;
                    case TASK.PLANTSEED5:
                        if (this.isClear == true && Player.money > 0) {
                            console.log("seed 5");
                            allPlants.push(new Plant("seed5", "rgb(00, 50, 00)", this.row, this.collum, 15, 1));
                            this.plant = allPlants[allPlants.length - 1];
                            this.isClear = false;
                            Player.money --;
                        }
                        else {
                            console.log("cannot do this on a full field");

                        }
                        break;
                    case TASK.HARVEST:
                        if (this.isClear == false) {
                            console.log("harvest");
                            allPlants.splice(allPlants.findIndex((e) => e == this.plant), 1);
                            this.isClear = true;
                            this.plant.price = 3; 
                            if (this.plant.age == this.plant.finalAge) {
                                Player.money = Player.money + this.plant.price;
                                
                            }
                        }
                        else {
                            console.log("cannot do this on a clear field");

                        }
                        break;
                    case TASK.WATER:
                        if (this.isClear == false) {
                            console.log("water");
                            this.plant.getsWater();
                        }
                        else {
                            console.log("cannot do this on a clear field");

                        }
                        break;
                    case TASK.FERTILIZE:
                        if (this.isClear == false) {
                            console.log("fertilize");
                            this.plant.getsFertilizer();
                        }
                        else {
                            console.log("cannot do this on a clear field");

                        }
                        break;
                    case TASK.PESTICIDE:
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
                for (let plant of allPlants) {
                    plant.draw();
                }

            }
        }

        draw(): void {
            cr2.save();
            cr2.translate(this.row * 100, this.collum * 100);
            cr2.fillStyle = this.color;
            cr2.fillRect(5, 5, 95, 95);
            cr2.restore();
        }
    }
}