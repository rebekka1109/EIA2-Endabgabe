namespace DönerTrainer {
    export let employeePaths: Path2D;
    export let customerPaths: Path2D;

    export function drawShop(): void {
        crc2.fillStyle = "HSL(0, 0%, 70%, 1)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.rect(400, 20, 120, 500);
        crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        crc2.fillRect(400, 20, 120, 500);
        crc2.stroke();
        
        crc2.rect(20, 20, 150, 550);
        crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        crc2.fillRect(20, 20, 150, 550);
        crc2.stroke();

        crc2.rect(170, 20, 230, 100);
        crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        crc2.fillRect(170, 20, 230, 100);
        crc2.stroke();

        crc2.rect(890, 150, 15, 15);
        crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        crc2.fillRect(890, 150, 15, 15);
        crc2.stroke();

        crc2.rect(890, 225, 15, 15);
        crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        crc2.fillRect(890, 225, 15, 15);
        crc2.stroke();
    }

    export function drawExcitedCustomer(): void {
        crc2.beginPath();
        crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "lightgreen";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(-10, -10);
        crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(10, -10);
        crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(-10, 10);
        crc2.quadraticCurveTo(0, 30, 10, 10);
        crc2.lineTo(-10, 10);
        crc2.stroke();
        crc2.closePath();
    }

    export function drawHappyCustomer(): void {
        crc2.beginPath();
        crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(-10, -10);
        crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(10, -10);
        crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(-10, 10);
        crc2.quadraticCurveTo(0, 20, 10, 10);
        crc2.stroke();
        crc2.closePath();
    }

    export function drawNeutralCustomer(): void {
        crc2.beginPath();
        crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(-10, -10);
        crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(10, -10);
        crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(-10, 10);
        crc2.lineTo(10, 10);
        crc2.stroke();
        crc2.closePath();
    }

    export function drawAnnoyedCustomer(): void {
        crc2.beginPath();
        crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(-10, -10);
        crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(10, -10);
        crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(-10, 5);
        crc2.lineTo(10, 10);
        crc2.stroke();
        crc2.closePath();
    }
    
    export function drawAngryCustomer(): void {
        crc2.beginPath();
        crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(-10, -10);
        crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(10, -10);
        crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(-10, 10);
        crc2.quadraticCurveTo(0, 0, 10, 10);
        crc2.moveTo(-12, -20);
        crc2.lineTo(-6, -15);
        crc2.moveTo(6, -15);
        crc2.lineTo(12, -20);
        crc2.stroke();
        crc2.closePath();
    }

    export function drawHappyEmployee(): void {
        crc2.beginPath();
        crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(-10, -10);
        crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(10, -10);
        crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(-10, 10);
        crc2.quadraticCurveTo(0, 20, 10, 10);
        crc2.moveTo(0, -25);
        crc2.rect(-20, -35, 40, 8);  
        crc2.stroke();
        crc2.closePath();
    }

    export function drawBoredEmployee(): void {       
        crc2.beginPath();
        crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "lightblue";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(-10, -10);
        crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(10, -10);
        crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(-10, 10);
        crc2.lineTo(10, 10);
        crc2.moveTo(0, -25);
        crc2.rect(-20, -35, 40, 8);  
        crc2.stroke();
        crc2.closePath();
    } 

    export function drawUnderchallengedEmployee(): void {
        crc2.beginPath();
        crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(-10, -10);
        crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(10, -10);
        crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(-10, 10);
        crc2.lineTo(10, 10);
        crc2.moveTo(25, -20);
        crc2.lineTo(20, -20);
        crc2.lineTo(25, -25);
        crc2.lineTo(20, -25);
        crc2.moveTo(35, -20);
        crc2.lineTo(30, -20);
        crc2.lineTo(35, -25);
        crc2.lineTo(30, -25);
        crc2.moveTo(0, -25);
        crc2.rect(-20, -35, 40, 8);  
        crc2.stroke();
        crc2.closePath();
    } 

    export function drawStressedEmployee(): void {
        crc2.beginPath();
        crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(-10, -10);
        crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(10, -10);
        crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(-10, 10);
        crc2.lineTo(10, 15);
        crc2.moveTo(-12, -15);
        crc2.lineTo(-6, -20);
        crc2.moveTo(0, -25);
        crc2.rect(-20, -35, 40, 8);  
        crc2.stroke();
        crc2.closePath();
    }

    export function drawOverchallengedEmployee(): void {
        crc2.beginPath();
        crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(-10, -10);
        crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(10, -10);
        crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        crc2.moveTo(-10, 10);
        crc2.quadraticCurveTo(0, -10, 10, 10);
        crc2.moveTo(0, -25);
        crc2.rect(-20, -35, 40, 8);  
        crc2.stroke();
        crc2.closePath();
    }

    export function drawHighlight(): void {
        crc2.beginPath();
        crc2.moveTo(employees[0].position.x, employees[0].position.y - 25);
        crc2.rect(-20, -35, 40, 8);  
        crc2.strokeStyle = "red";
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.closePath();
    }
}