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
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(_employeeNum) {
            var _this = _super.call(this, new Abschlussarbeit.Vector(Math.floor(Math.random() * (370 - 190 + 1) + 190), Math.floor(Math.random() * (560 - 140 + 1) + 140))) || this;
            _this.mood = Math.floor(Math.random() * (10 - 20 + 1) + 10);
            console.log(_this.mood);
            _this.busy = false;
            _this.selected = false;
            _this.employeeNum = _employeeNum;
            console.log(_this.position);
            return _this;
        }
        Employee.prototype.draw = function () {
            if (this.mood <= 20 && this.mood >= -20) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawHappyEmployee();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood > 20 && this.mood <= 40) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawStressedEmployee();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood > 40) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawOverchallengedEmployee();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood <= -21 && this.mood >= -40) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawBoredEmployee();
                Abschlussarbeit.crc2.restore();
            }
            else if (this.mood <= -41) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawUnderchallengedEmployee();
                Abschlussarbeit.crc2.restore();
            }
            if (this.selected == true) {
                Abschlussarbeit.crc2.save();
                Abschlussarbeit.crc2.translate(this.position.x, this.position.y);
                Abschlussarbeit.drawHighlight();
                Abschlussarbeit.crc2.restore();
            }
        };
        Employee.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        };
        Employee.prototype.getClicked = function (_xClick, _yClick) {
            var distance = Math.sqrt(((_xClick - this.position.x) * (_xClick - this.position.x))
                +
                    ((_yClick - this.position.y) * (_yClick - this.position.y)));
            console.log(distance);
            if (distance < 30) {
                this.selected = true;
                return true;
            }
            else
                this.selected = false;
            return false;
        };
        return Employee;
    }(Abschlussarbeit.Human));
    Abschlussarbeit.Employee = Employee;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Employee.js.map