namespace DönerTrainer {
    export class Order {
        orderType: boolean;
        bread: string[] = ["Yufka", "Döner"];
        mainIngredient: string[] = ["Normaler", "Hähnchen", "Lahmacun"];
        barIngredient: string[] = ["Salat", "Zwieblen", "Mais", "Tomate", "Kraut", "Peperoni"];      
        extra: string [] = ["extra scharf", "mit Feta"];  
        fullOrder: string = " ";

        constructor(_orderType: boolean) {
            this.orderType = _orderType;
            if (this.orderType == true) {
                this.generateCustomerOrder();
            } else this.makeOrder();
        }

        generateCustomerOrder (): void {
            let rndMain: number = Math.floor(Math.random() * this.mainIngredient.length);
            let mainPick: string[] = this.mainIngredient.splice(rndMain, 1);
            this.fullOrder += mainPick + " ";

            let rndBread: number = Math.floor(Math.random() * this.bread.length);
            let breadPick: string[] = this.bread.splice(rndBread, 1);
            this.fullOrder += breadPick + " ";

            let rndBar: number = Math.floor(Math.random() * this.barIngredient.length);
            let rndAmtBar: number = Math.floor(Math.random() * this.barIngredient.length);
            let barPick: string[] = this.barIngredient.splice(rndBar, rndAmtBar);

            switch (rndAmtBar) {
                case 0:
                    this.fullOrder += "ohne alles";
                    break;
                case 1:
                    this.fullOrder += "nur mit " + barPick;
                    break;
                case 2:
                    this.fullOrder += "nur mit " + barPick;
                    break;
                case 3:
                    this.fullOrder += "mit " + barPick;
                    break;
                case 4:
                    this.fullOrder += "ohne " + this.barIngredient;
                    break;
                case 5: 
                    this.fullOrder += "ohne " + this.barIngredient;
                    break;
                case 6: 
                    this.fullOrder += "mit allem";
                    break;
            }

            let rndExtra: number = Math.floor(Math.random() * this.extra.length);
            let rngNum1: number = Math.floor(Math.random() * 3 + 1);
            let rngNum2: number = Math.floor(Math.random() * 3 + 1);

            console.log(rngNum1, rngNum2);
            if (rngNum1 == rngNum2) {
                let extraPick: string [] = this.extra.splice(rndExtra, 1);
                this.fullOrder += " " + extraPick;
            }
            console.log(this.fullOrder);
        }

        makeOrder(): void {
        }
    }
}