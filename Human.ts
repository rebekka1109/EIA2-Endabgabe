namespace DönerTrainer {
    export abstract class Human {
        
        public position: Vector;
        public velocity: Vector;
        public mood: number;

        constructor ( _position: Vector) {
            this.position = new Vector(_position.x, _position.y);
            this.velocity = new Vector(0, 0);
        }

        public abstract draw (): void;
        public move (_timeslice: number, _position: Vector): void {
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        public moveTo (_position: Vector, _velocity: number): void {
            let direction: Vector = Vector.getDifference(_position, this.position);
            let timeslice: number = _velocity;
            this.move(timeslice, direction);
        }

    }
}