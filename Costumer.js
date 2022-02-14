var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Abschlussarbeit;
(function (Abschlussarbeit) {
    var Customer = /** @class */ (function (_super) {
        __extends(Customer, _super);
        function Customer(_customerNum) {
            var _this = _super.call(this, new Abschlussarbeit.Vector(870, 195)) || this;
            _this.mood = Math.floor(Math.random() * (90 - 80 + 1) + 80);
            _this.customerNum = _customerNum;
            _this.order = _this.randomOrder();
            _this.velocity = new Abschlussarbeit.Vector(0, 0);
            return _this;
        }
        Customer.prototype.draw = function () {
            if (this.mood > 91) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawExcitedCustomer();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood > 71 && this.mood < 90) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawHappyCustomer();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood > 41 && this.mood < 70) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawNeutralCustomer();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood > 21 && this.mood < 40) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawAnnoyedCustomer();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood < 20) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawAngryCustomer();
                Abschlussarbeit.crc2.restore();
            }
        };
        Customer.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            this.velocity = new Abschlussarbeit.Vector(-200, 200);
            if (this.position.x == 670 && this.position.y == 395) {
                this.velocity = new Abschlussarbeit.Vector(0, 0);
            }
        };
        Customer.prototype.randomOrder = function () {
            var cstmrOrder = " ";
            var breadArray = ["Yufka", "Döner"];
            var mainIngredientArray = ["Normalen", "Hähnchen", "Falafel"];
            var ingredientWithArray = ["nur Salat", "nur Tomate", "nur Zwiebeln", "nur Mais", "nur Kraut", "nur Peperoni"];
            var ingredientWithoutArray = ["ohne Salat", " ohne Tomate", "ohne Zwiebeln", "ohne Mais", "ohne Kraut", "ohne Peperoni"];
            var ingredientWithEverything = ["mit allem"];
            var ingredientOrderArray = [ingredientWithArray, ingredientWithoutArray, ingredientWithEverything];
            var extrasArray = ["und extra scharf.", "und mit Feta.", ".", ".", "."];
            /* for (let i: number = 5; i >= 1; i++) {
                let feedback = getOrder (breadArray, mainIngredientArray, ingredientOrderArray, extrasArray);
                
            } */
            //function getOrder (_bread: string[], _main: string [], _ingredient: string [], _extras: string[]) 
            var breadOrder = Math.floor(Math.random() * breadArray.length);
            var mainIngredientOrder = Math.floor(Math.random() * mainIngredientArray.length);
            var ingredientOrderWithoutX = Math.floor(Math.random() * ingredientWithoutArray.length);
            var ingredientOrderWithoutXY = Math.floor(Math.random() * ingredientWithoutArray.length);
            var ingredientOrderOnlyX = Math.floor(Math.random() * ingredientWithArray.length);
            var ingredientOrderOnlyXY = Math.floor(Math.random() * ingredientWithArray.length);
            var ingredientOrderEverything = 0;
            var ingredientOrder = Math.floor(Math.random() * ingredientOrderArray.length);
            var extraOrder = Math.floor(Math.random() * Abschlussarbeit.Ingredient.extrasArray.length);
            cstmrOrder += breadArray.splice(breadOrder) + " ";
            cstmrOrder += mainIngredientArray.splice(mainIngredientOrder) + " ";
            cstmrOrder += breadArray.splice(ingredientOrder) + " ";
            cstmrOrder += breadArray.splice(extraOrder);
            console.log(cstmrOrder);
            return cstmrOrder;
        };
        Customer.prototype.placeOrder = function () {
        };
        return Customer;
    }(Abschlussarbeit.Human));
    Abschlussarbeit.Customer = Customer;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Costumer.js.map