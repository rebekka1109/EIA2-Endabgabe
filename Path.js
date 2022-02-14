var Abschlussarbeit;
(function (Abschlussarbeit) {
    function drawShop() {
        Abschlussarbeit.crc2.fillStyle = "HSL(0, 0%, 70%, 1)";
        Abschlussarbeit.crc2.fillRect(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
        Abschlussarbeit.crc2.rect(400, 20, 120, 500);
        Abschlussarbeit.crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        Abschlussarbeit.crc2.fillRect(400, 20, 120, 500);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.rect(20, 20, 150, 550);
        Abschlussarbeit.crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        Abschlussarbeit.crc2.fillRect(20, 20, 150, 550);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.rect(170, 20, 230, 100);
        Abschlussarbeit.crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        Abschlussarbeit.crc2.fillRect(170, 20, 230, 100);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.rect(890, 150, 15, 15);
        Abschlussarbeit.crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        Abschlussarbeit.crc2.fillRect(890, 150, 15, 15);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.rect(890, 225, 15, 15);
        Abschlussarbeit.crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        Abschlussarbeit.crc2.fillRect(890, 225, 15, 15);
        Abschlussarbeit.crc2.stroke();
    }
    Abschlussarbeit.drawShop = drawShop;
    function drawHappyEmployee() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "yellowgreen";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(-10, -10);
        Abschlussarbeit.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(10, -10);
        Abschlussarbeit.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(-10, 10);
        Abschlussarbeit.crc2.quadraticCurveTo(0, 20, 10, 10);
        Abschlussarbeit.crc2.moveTo(0, -25);
        Abschlussarbeit.crc2.rect(-20, -35, 40, 8);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawHappyEmployee = drawHappyEmployee;
    function drawBoredEmployee() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "yellow";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(-10, -10);
        Abschlussarbeit.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(10, -10);
        Abschlussarbeit.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(-10, 10);
        Abschlussarbeit.crc2.lineTo(10, 10);
        Abschlussarbeit.crc2.moveTo(0, -25);
        Abschlussarbeit.crc2.rect(-20, -35, 40, 8);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawBoredEmployee = drawBoredEmployee;
    function drawUnderchallengedEmployee() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "orange";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(-10, -10);
        Abschlussarbeit.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(10, -10);
        Abschlussarbeit.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(-10, 10);
        Abschlussarbeit.crc2.lineTo(10, 10);
        Abschlussarbeit.crc2.moveTo(25, -20);
        Abschlussarbeit.crc2.lineTo(20, -20);
        Abschlussarbeit.crc2.lineTo(25, -25);
        Abschlussarbeit.crc2.lineTo(20, -25);
        Abschlussarbeit.crc2.moveTo(35, -20);
        Abschlussarbeit.crc2.lineTo(30, -20);
        Abschlussarbeit.crc2.lineTo(35, -25);
        Abschlussarbeit.crc2.lineTo(30, -25);
        Abschlussarbeit.crc2.moveTo(0, -25);
        Abschlussarbeit.crc2.rect(-20, -35, 40, 8);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawUnderchallengedEmployee = drawUnderchallengedEmployee;
    function drawStressedEmployee() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "yellow";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(-10, -10);
        Abschlussarbeit.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(10, -10);
        Abschlussarbeit.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(-10, 10);
        Abschlussarbeit.crc2.lineTo(10, 15);
        Abschlussarbeit.crc2.moveTo(-12, -15);
        Abschlussarbeit.crc2.lineTo(-6, -20);
        Abschlussarbeit.crc2.moveTo(0, -25);
        Abschlussarbeit.crc2.rect(-20, -35, 40, 8);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawStressedEmployee = drawStressedEmployee;
    function drawOverchallengedEmployee() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "red";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(-10, -10);
        Abschlussarbeit.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(10, -10);
        Abschlussarbeit.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(-10, 10);
        Abschlussarbeit.crc2.quadraticCurveTo(0, -10, 10, 10);
        Abschlussarbeit.crc2.moveTo(0, -25);
        Abschlussarbeit.crc2.rect(-20, -35, 40, 8);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawOverchallengedEmployee = drawOverchallengedEmployee;
    function drawExcitedCustomer() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "green";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(-10, -10);
        Abschlussarbeit.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(10, -10);
        Abschlussarbeit.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(-10, 10);
        Abschlussarbeit.crc2.quadraticCurveTo(0, 30, 10, 10);
        Abschlussarbeit.crc2.lineTo(-10, 10);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawExcitedCustomer = drawExcitedCustomer;
    function drawHappyCustomer() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "yellowgreen";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(-10, -10);
        Abschlussarbeit.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(10, -10);
        Abschlussarbeit.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(-10, 10);
        Abschlussarbeit.crc2.quadraticCurveTo(0, 20, 10, 10);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawHappyCustomer = drawHappyCustomer;
    function drawNeutralCustomer() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "yellow";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(-10, -10);
        Abschlussarbeit.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(10, -10);
        Abschlussarbeit.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(-10, 10);
        Abschlussarbeit.crc2.lineTo(10, 10);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawNeutralCustomer = drawNeutralCustomer;
    function drawAnnoyedCustomer() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "orange";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(-10, -10);
        Abschlussarbeit.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(10, -10);
        Abschlussarbeit.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(-10, 5);
        Abschlussarbeit.crc2.lineTo(10, 10);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawAnnoyedCustomer = drawAnnoyedCustomer;
    function drawAngryCustomer() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.fillStyle = "red";
        Abschlussarbeit.crc2.fill();
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.moveTo(-10, -10);
        Abschlussarbeit.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(10, -10);
        Abschlussarbeit.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        Abschlussarbeit.crc2.moveTo(-10, 10);
        Abschlussarbeit.crc2.quadraticCurveTo(0, 0, 10, 10);
        Abschlussarbeit.crc2.moveTo(-12, -20);
        Abschlussarbeit.crc2.lineTo(-6, -15);
        Abschlussarbeit.crc2.moveTo(6, -15);
        Abschlussarbeit.crc2.lineTo(12, -20);
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawAngryCustomer = drawAngryCustomer;
    function drawHighlight() {
        Abschlussarbeit.crc2.beginPath();
        Abschlussarbeit.crc2.moveTo(Abschlussarbeit.employees[0].position.x, Abschlussarbeit.employees[0].position.y - 25);
        Abschlussarbeit.crc2.rect(-20, -35, 40, 8);
        Abschlussarbeit.crc2.strokeStyle = "red";
        Abschlussarbeit.crc2.lineWidth = 3;
        Abschlussarbeit.crc2.stroke();
        Abschlussarbeit.crc2.closePath();
    }
    Abschlussarbeit.drawHighlight = drawHighlight;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Path.js.map