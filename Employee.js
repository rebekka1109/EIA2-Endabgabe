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
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(_employeeNum) {
            var _this = _super.call(this, new DönerTrainer.Vector(Math.floor(Math.random() * (370 - 190 + 1) + 190), Math.floor(Math.random() * (560 - 140 + 1) + 140))) || this;
            _this.mood = Math.floor(Math.random() * (10 - 20 + 1) - 10);
            _this.busy = false;
            _this.selected = false;
            _this.employeeNum = _employeeNum;
            _this.velocity = new DönerTrainer.Vector(0, 0);
            console.log(_this.busy);
            setInterval(_this.changeMood, 1000);
            return _this;
        }
        Employee.prototype.getClicked = function (_xClick, _yClick) {
            var distanceEmp = Math.sqrt(((_xClick - this.position.x) * (_xClick - this.position.x))
                +
                    ((_yClick - this.position.y) * (_yClick - this.position.y)));
            console.log(distanceEmp);
            if (distanceEmp < 30) {
                console.log(distanceEmp);
                this.selected = true;
                console.log(this.selected);
                this.showBreakBtn();
                return true;
            }
            this.selected = false;
            return false;
        };
        Employee.prototype.draw = function () {
            DönerTrainer.crc2.save();
            DönerTrainer.crc2.translate(this.position.x, this.position.y);
            if (this.mood <= 20 && this.mood >= -20) {
                DönerTrainer.drawHappyEmployee();
            }
            else if (this.mood > 20 && this.mood <= 40) {
                DönerTrainer.drawStressedEmployee();
            }
            else if (this.mood > 40) {
                DönerTrainer.drawOverchallengedEmployee();
            }
            else if (this.mood <= -21 && this.mood >= -40) {
                DönerTrainer.drawBoredEmployee();
            }
            else if (this.mood <= -41) {
                DönerTrainer.drawUnderchallengedEmployee();
            }
            DönerTrainer.crc2.restore();
            if (this.selected == true) {
                DönerTrainer.crc2.save();
                DönerTrainer.crc2.translate(this.position.x, this.position.y);
                DönerTrainer.drawHighlight();
                DönerTrainer.crc2.restore();
            }
        };
        Employee.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        };
        Employee.prototype.moveTo = function (_positionX, _positionY, _timeslice) {
            var offset = this.velocity.copy();
            offset.scale(1 / 50);
            this.position.add(offset);
            console.log(this.position);
            console.log(_positionX, _positionY, this.velocity);
            this.velocity = new DönerTrainer.Vector(_positionX - this.position.x, _positionY - this.position.y);
            if (this.position.x == _positionX && this.position.y == _positionY) {
                this.velocity = new DönerTrainer.Vector(0, 0);
            }
            console.log(this.velocity);
        };
        Employee.prototype.showBreakBtn = function () {
            var breakBtn = document.querySelector("#breakBtn");
            breakBtn.classList.remove("isHidden");
            breakBtn.addEventListener("click", this.takeBreak);
        };
        Employee.prototype.takeBreak = function () {
            this.moveTo(200, 700, 1 / 50);
            this.moveTo((Math.floor(Math.random() * (370 - 190 + 1) + 190)), Math.floor(Math.random() * (560 - 140 + 1) + 140), 1 / 50);
            this.didBreak = true;
            this.worktime = 0;
            this.pausetime = 0;
        };
        Employee.prototype.changeMood = function () {
            this.updateTime();
            if (DönerTrainer.gametime <= 5) {
                this.mood = this.mood;
            }
            else
                this.mood = this.worktime - this.pausetime;
        };
        Employee.prototype.updateTime = function () {
            if (this.busy == true) {
                this.worktime += DönerTrainer.moodFactor;
            }
            else
                this.pausetime += DönerTrainer.moodFactor;
        };
        Employee.prototype.takeOrder = function () {
            console.log("i will do this");
            var orderDisplay = document.querySelector("#orderDisplay");
            orderDisplay.classList.add("isHidden");
            var topIngredient = document.querySelector("#topIngredient");
            topIngredient.classList.remove("isHidden");
            var newOrder = new DönerTrainer.Order(false);
        };
        return Employee;
    }(DönerTrainer.Human));
    DönerTrainer.Employee = Employee;
})(DönerTrainer || (DönerTrainer = {}));
//# sourceMappingURL=Employee.js.map