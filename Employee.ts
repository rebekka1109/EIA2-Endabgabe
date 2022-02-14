namespace Abschlussarbeit {
    export class Employee extends Human {
                
        static position: Vector;
        static busy: boolean;
        
        busy: boolean;
        selected: boolean;
        employeeNum: number;
        didBreak: boolean;
        worktime: number;
        pausetime: number;
        
        constructor(_employeeNum: number) {
            super(new Vector(Math.floor(Math.random() * (370 - 190 + 1) + 190), Math.floor(Math.random() * (560 - 140 + 1) + 140)));
            this.mood = Math.floor(Math.random() * (10 - 20 + 1) - 10);
            this.busy = false;
            this.selected = false;
            this.employeeNum = _employeeNum;
            this.velocity = new Vector (0, 0);
            //this.didBreak = false;

            console.log(this.busy);
            setInterval(this.countPausetime, 1000);
            setInterval(this.countWorkime, 1000);
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

            //if (this.selected == true && )
            
            // this.velocity = new Vector (movePoint.x - this.position.x, movePoint.y - this.position.y);
            // if (this.position.x == movePoint.x && this.position.y == movePoint.y) {
            //     this.velocity = new Vector (0, 0);
            // }
            // this.velocity = new Vector (movePoint.x - this.position.x, movePoint.y - this.position.y);
            // if (this.position.x == movePoint.x && this.position.y == movePoint.y) {
            //      this.velocity = new Vector (0, 0);
            // }
        }

        public moveTo (_positionX: number, _positionY: number, _timeslice: number): void {

            let offset: Vector = this.velocity.copy();
            offset.scale(1 / 50);
            this.position.add(offset);

            console.log(this.position);
            console.log(_positionX, _positionY, this.velocity);

            this.velocity = new Vector (_positionX - this.position.x, _positionY - this.position.y);
            if (this.position.x == _positionX && this.position.y == _positionY) {
                    this.velocity = new Vector (0, 0);
            }

            console.log(this.velocity);
        }


        public getClicked(_xClick: number, _yClick: number): boolean {
            let distance: number =
            Math.sqrt(( (_xClick - this.position.x) * (_xClick - this.position.x) )
            +
            ( (_yClick - this.position.y) * (_yClick - this.position.y) ));
            console.log(distance);

            if (distance < 30) {
                this.selected = true;
                this.showBreakBtn();
                return true;
            }  else 
            this.selected = false;
            return false;
        }

        showBreakBtn(): void {
            let breakBtn: HTMLButtonElement = document.querySelector("#breakBtn")!;
            breakBtn.classList.remove("isHidden");
            breakBtn.addEventListener("click", this.takeBreak);
        }

        takeBreak(): void {
            this.moveTo(200, 700, 1 / 50);
            //setTimeout
            this.moveTo((Math.floor(Math.random() * (370 - 190 + 1) + 190)), Math.floor(Math.random() * (560 - 140 + 1) + 140), 1 / 50 );
            this.didBreak = true;
            this.worktime = 0;
            this.pausetime = 0;
        }

        changeMood(): void {
            if (gametime <= 10) {
                this.mood = this.mood;
            } else

            this.mood += this.worktime;
            this.mood -= this.pausetime;

            console.log(this.mood);
            /* if (this.didBreak == true) {
                this.mood = 0;
            } */
        }

        public countWorkime(): number {
            if (this.busy == true) {
                //setInterval((): void => { 
                    this.worktime++;
                    
                    //},      1000);
            } 
            return this.worktime;
        }

        public countPausetime(): number {
            console.log(this.busy);
            if (this.busy == false) {
                //setInterval((): void => { 
                    this.pausetime++;
                    
                   // },      1000);
            } 
            console.log(this.pausetime);
            return this.pausetime;
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