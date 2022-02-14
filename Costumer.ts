namespace Abschlussarbeit {
    export class Customer extends Human {
        customerNum: number;
        order: string;
        waitingTime: number;

        constructor(_customerNum: number) {
            super(new Vector(870, 195));
            this.mood = Math.floor(Math.random() * (90 - 80 + 1) + 80);
            this.customerNum = _customerNum;
            this.order = this.randomOrder();
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

        randomOrder(): string {

            let cstmrOrder: string = " ";

            let breadArray: string[] = ["Yufka", "Döner"];
            let mainIngredientArray: string[] = ["Normalen", "Hähnchen", "Falafel"];
            let ingredientWithArray: string[] = ["nur Salat", "nur Tomate", "nur Zwiebeln", "nur Mais", "nur Kraut", "nur Peperoni"];
            let ingredientWithoutArray: string[] = ["ohne Salat", " ohne Tomate", "ohne Zwiebeln", "ohne Mais", "ohne Kraut", "ohne Peperoni"];
            let ingredientWithEverything: string [] = ["mit allem"];
            let ingredientOrderArray: string [][] = [ingredientWithArray, ingredientWithoutArray, ingredientWithEverything];

            let extrasArray: string[] = ["und extra scharf.", "und mit Feta.", ".", ".", "."];

            /* for (let i: number = 5; i >= 1; i++) {
                let feedback = getOrder (breadArray, mainIngredientArray, ingredientOrderArray, extrasArray);
                
            } */

            //function getOrder (_bread: string[], _main: string [], _ingredient: string [], _extras: string[]) 
            let breadOrder: number = Math.floor(Math.random() * breadArray.length);
            let mainIngredientOrder: number = Math.floor(Math.random() * mainIngredientArray.length);

            let ingredientOrderWithoutX: number = Math.floor(Math.random() * ingredientWithoutArray.length);
            let ingredientOrderWithoutXY: number = Math.floor(Math.random() * ingredientWithoutArray.length);
            let ingredientOrderOnlyX: number = Math.floor(Math.random() * ingredientWithArray.length);
            let ingredientOrderOnlyXY: number = Math.floor(Math.random() * ingredientWithArray.length);
            let ingredientOrderEverything: number = 0;


            let ingredientOrder: number = Math.floor(Math.random() * ingredientOrderArray.length);
            let extraOrder: number = Math.floor(Math.random() * Ingredient.extrasArray.length);

            cstmrOrder += breadArray.splice(breadOrder) + " ";
            cstmrOrder += mainIngredientArray.splice(mainIngredientOrder) + " ";
            cstmrOrder += breadArray.splice(ingredientOrder) + " ";
            cstmrOrder += breadArray.splice(extraOrder);

            console.log(cstmrOrder);
            return cstmrOrder;
        }

        placeOrder(): void {


        }
    }
}