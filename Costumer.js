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
var DönerTrainer;
(function (DönerTrainer) {
    var Customer = /** @class */ (function (_super) {
        __extends(Customer, _super);
        function Customer(_customerNum) {
            var _this = _super.call(this, new DönerTrainer.Vector(870, 195)) || this;
            _this.mood = Math.floor(Math.random() * (90 - 80 + 1) + 80);
            _this.customerNum = _customerNum;
            _this.order = new DönerTrainer.Order(true);
            _this.velocity = new DönerTrainer.Vector(0, 0);
            return _this;
        }
        Customer.prototype.draw = function () {
            if (this.mood > 91) {
                DönerTrainer.crc2.save();
                DönerTrainer.crc2.translate(this.position.x, this.position.y);
                DönerTrainer.drawExcitedCustomer();
                DönerTrainer.crc2.restore();
            }
            else if (this.mood > 71 && this.mood < 90) {
                DönerTrainer.crc2.save();
                DönerTrainer.crc2.translate(this.position.x, this.position.y);
                DönerTrainer.drawHappyCustomer();
                DönerTrainer.crc2.restore();
            }
            else if (this.mood > 41 && this.mood < 70) {
                DönerTrainer.crc2.save();
                DönerTrainer.crc2.translate(this.position.x, this.position.y);
                DönerTrainer.drawNeutralCustomer();
                DönerTrainer.crc2.restore();
            }
            else if (this.mood > 21 && this.mood < 40) {
                DönerTrainer.crc2.save();
                DönerTrainer.crc2.translate(this.position.x, this.position.y);
                DönerTrainer.drawAnnoyedCustomer();
                DönerTrainer.crc2.restore();
            }
            else if (this.mood < 20) {
                DönerTrainer.crc2.save();
                DönerTrainer.crc2.translate(this.position.x, this.position.y);
                DönerTrainer.drawAngryCustomer();
                DönerTrainer.crc2.restore();
            }
        };
        Customer.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            this.velocity = new DönerTrainer.Vector(-200, 200);
            if (this.position.x == 670 && this.position.y == 395) {
                this.velocity = new DönerTrainer.Vector(0, 0);
            }
        };
        Customer.prototype.getClicked = function (_xClick, _yClick) {
            var distance = Math.sqrt(((_xClick - this.position.x) * (_xClick - this.position.x))
                +
                    ((_yClick - this.position.y) * (_yClick - this.position.y)));
            console.log(distance);
            if (distance < 30 == true) {
                this.placeOrder();
                return true;
            }
            else
                DönerTrainer.employees[0].selected = false;
            return false;
        };
        Customer.prototype.placeOrder = function () {
            console.log("placeOrder");
            var orderDisplay = document.querySelector("#orderDisplay");
            var orderParagraph = document.querySelector("#orderParagraph");
            var acceptBtn = document.querySelector("#acceptBtn");
            orderDisplay.classList.remove("isHidden");
            acceptBtn.addEventListener("click", DönerTrainer.employees[0].takeOrder);
            orderParagraph.innerHTML = this.order.fullOrder;
        };
        return Customer;
    }(DönerTrainer.Human));
    DönerTrainer.Customer = Customer;
})(DönerTrainer || (DönerTrainer = {}));
//# sourceMappingURL=Costumer.js.map