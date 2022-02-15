var DönerTrainer;
(function (DönerTrainer) {
    var Order = /** @class */ (function () {
        function Order(_orderType) {
            this.bread = ["Yufka", "Döner"];
            this.mainIngredient = ["Normaler", "Hähnchen", "Lahmacun"];
            this.barIngredient = ["Salat", "Zwieblen", "Mais", "Tomate", "Kraut", "Peperoni"];
            this.extra = ["extra scharf", "mit Feta"];
            this.fullOrder = " ";
            this.orderType = _orderType;
            if (this.orderType == true) {
                this.generateCustomerOrder();
            }
            else
                this.makeOrder();
        }
        Order.prototype.generateCustomerOrder = function () {
            var rndMain = Math.floor(Math.random() * this.mainIngredient.length);
            var mainPick = this.mainIngredient.splice(rndMain, 1);
            this.fullOrder += mainPick + " ";
            var rndBread = Math.floor(Math.random() * this.bread.length);
            var breadPick = this.bread.splice(rndBread, 1);
            this.fullOrder += breadPick + " ";
            var rndBar = Math.floor(Math.random() * this.barIngredient.length);
            var rndAmtBar = Math.floor(Math.random() * this.barIngredient.length);
            var barPick = this.barIngredient.splice(rndBar, rndAmtBar);
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
            var rndExtra = Math.floor(Math.random() * this.extra.length);
            var rngNum1 = Math.floor(Math.random() * 3 + 1);
            var rngNum2 = Math.floor(Math.random() * 3 + 1);
            console.log(rngNum1, rngNum2);
            if (rngNum1 == rngNum2) {
                var extraPick = this.extra.splice(rndExtra, 1);
                this.fullOrder += " " + extraPick;
            }
            console.log(this.fullOrder);
        };
        Order.prototype.makeOrder = function () {
        };
        return Order;
    }());
    DönerTrainer.Order = Order;
})(DönerTrainer || (DönerTrainer = {}));
//# sourceMappingURL=Order.js.map