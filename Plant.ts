namespace GardenSimulation {


    export class Plant {

        type: string;
        color: string;
        currentcolor: string;
        row: number;
        collum: number;
        age: number = 0;
        finalAge: number;
        price: number;
        needsWater: boolean = false;
        bugs: Bug[] = [];

        constructor(_type: string, _color: string, _row: number, _collum: number, _finalAge: number, _price: number) {
            this.color = _color;
            this.type = _type;
            this.row = _row;
            this.collum = _collum;
            this.finalAge = _finalAge;
            this.price = _price;
            this.currentcolor = _color;
        }


        grow(): void {
            if (this.age < this.finalAge && this.needsWater == false && this.bugs.length == 0)
                this.age++;
        }
        loosesWater(): void {
            let randomWater: number = Math.round(Math.random() * 10);
            if (randomWater == 0) {
                this.needsWater = true;
                if (this.bugs.length == 0) {
                this.currentcolor = "black";
                }
            }
        }

        getsBug(): void {
            let randomBug: number = Math.round(Math.random() * 20);
            if (randomBug == 0) {
                this.currentcolor = "red";
                this.bugs.push(new Bug());
            }
        }

        killBug(): void {
            this.bugs = [];
            this.currentcolor = this.color;
        }

        getsWater(): void {
            if (this.bugs.length == 0) {
            this.needsWater = false;
            this.currentcolor = this.color;
            }
        }
        getsFertilizer(): void {
            if (this.age < this.finalAge && this.needsWater == false && this.bugs.length == 0) {
                this.age++;
            }
        }


        draw(): void {
            cr2.save();
            cr2.translate(this.row * 100, this.collum * 100);
            cr2.fillStyle = this.currentcolor;
            cr2.fillRect(45 - 1 * this.age, 45 - 1 * this.age, 10 + 1 * this.age, 10 + 1 * this.age);
            cr2.restore();
        }
    }
}