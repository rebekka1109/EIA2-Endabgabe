namespace Abschlussarbeit {
    export class Employee extends Human {
                
        static position: Vector;
        static busy: boolean;
        
        busy: boolean;
        selected: boolean;
        employeeNum: number;
        
        constructor(_employeeNum: number) {
            super(new Vector(Math.floor(Math.random() * (370 - 190 + 1) + 190), Math.floor(Math.random() * (560 - 140 + 1) + 140)));
            this.mood = Math.floor(Math.random() * (10 - 20 + 1) + 10);
            console.log(this.mood);
            this.busy = false;
            this.selected = false;
            this.employeeNum = _employeeNum;
            console.log(this.position);
        }
                
        public draw(): void {
            if (this.mood <= 20 && this.mood >= -20) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawHappyEmployee();
                crc2.restore();
            } else if (this.mood > 20 && this.mood <= 40) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawStressedEmployee();
                crc2.restore();
            } else if (this.mood > 40) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawOverchallengedEmployee();
                crc2.restore();
            } else if (this.mood <= -21 && this.mood >= -40) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawBoredEmployee();
                crc2.restore();
            } else if (this.mood <= -41) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawUnderchallengedEmployee();
                crc2.restore();
            }

            if (this.selected == true) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawHighlight();
                crc2.restore();
            }
        }

        public move (_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        public getClicked(_xClick: number, _yClick: number): boolean {
            let distance: number =
            Math.sqrt(( (_xClick - this.position.x) * (_xClick - this.position.x) )
            +
            ( (_yClick - this.position.y) * (_yClick - this.position.y) ));
            console.log(distance);

            if (distance < 30) {
                this.selected = true;
                return true;
            }  else 
            this.selected = false;
            return false;
        }

        /* public highlightEmployee(): void {
            console.log("highlight");
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y - 25);
            crc2.rect(-20, -35, 40, 8);  
            crc2.fillStyle = "red";
            crc2.stroke();
            crc2.closePath();
        } */

        
    }

    
}