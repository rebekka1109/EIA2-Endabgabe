var DönerTrainer;
(function (DönerTrainer) {
    var Human = /** @class */ (function () {
        function Human(_position) {
            this.position = new DönerTrainer.Vector(_position.x, _position.y);
            this.velocity = new DönerTrainer.Vector(0, 0);
        }
        Human.prototype.move = function (_timeslice, _position) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        };
        Human.prototype.moveTo = function (_position, _velocity) {
            var direction = DönerTrainer.Vector.getDifference(_position, this.position);
            var timeslice = _velocity;
            this.move(timeslice, direction);
        };
        return Human;
    }());
    DönerTrainer.Human = Human;
})(DönerTrainer || (DönerTrainer = {}));
//# sourceMappingURL=Human.js.map