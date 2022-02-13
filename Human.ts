namespace Abschlussarbeit {
    export abstract class Human {
        
        public position: Vector;
        public velocity: Vector;
        public mood: number;

        constructor (_position: Vector) {
            this.position = new Vector(_position.x, _position.y);
            this.velocity = new Vector(0, 0);
        }

        public abstract draw (): void;
        public abstract move (_timeslice: number): void;
    }
}