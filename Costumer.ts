namespace DönerTrainer {
    export class Customer extends Human {
        customerNum: number;
        order: Order;
        waitingTime: number;

        constructor(_customerNum: number) {
            super(new Vector(870, 195));
            this.mood = Math.floor(Math.random() * (90 - 80 + 1) + 80);
            this.customerNum = _customerNum;
            this.order = new Order(true);
            this.velocity = new Vector (0, 0);
        }
        
        public draw(): void {
            if (this.mood > 91) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawExcitedCustomer();
                crc2.restore();
            } else if (this.mood > 71 && this.mood < 90) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawHappyCustomer();
                crc2.restore();
            } else if (this.mood > 41 && this.mood < 70) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawNeutralCustomer();
                crc2.restore();
            } else if (this.mood > 21 && this.mood < 40) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawAnnoyedCustomer();
                crc2.restore();
            } else if (this.mood < 20) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                drawAngryCustomer();
                crc2.restore();
            }
        }

        public move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            this.velocity = new Vector(-200, 200);
            if (this.position.x == 670 && this.position.y == 395) {
                this.velocity = new Vector(0, 0);
            }
        }

        public getClicked(_xClick: number, _yClick: number): boolean {
            let distance: number =
            Math.sqrt(( (_xClick - this.position.x) * (_xClick - this.position.x) )
            +
            ( (_yClick - this.position.y) * (_yClick - this.position.y) ));
            console.log(distance);

            if (distance < 30 == true) {
                this.placeOrder();
                return true;
            }  else 
            employees[0].selected = false;
            return false;
        }

        placeOrder(): void {
            console.log("placeOrder");
            let orderDisplay: HTMLSpanElement = document.querySelector("#orderDisplay")!;
            let orderParagraph: HTMLParagraphElement = document.querySelector("#orderParagraph")!;
            let acceptBtn: HTMLButtonElement = document.querySelector("#acceptBtn")!;

            orderDisplay.classList.remove("isHidden");
            acceptBtn.addEventListener("click", employees[0].takeOrder);
            orderParagraph.innerHTML = this.order.fullOrder;
        }
    }
}