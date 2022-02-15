var DönerTrainer;
(function (DönerTrainer) {
    function drawShop() {
        DönerTrainer.crc2.fillStyle = "HSL(0, 0%, 70%, 1)";
        DönerTrainer.crc2.fillRect(0, 0, DönerTrainer.crc2.canvas.width, DönerTrainer.crc2.canvas.height);
        DönerTrainer.crc2.rect(400, 20, 120, 500);
        DönerTrainer.crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        DönerTrainer.crc2.fillRect(400, 20, 120, 500);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.rect(20, 20, 150, 550);
        DönerTrainer.crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        DönerTrainer.crc2.fillRect(20, 20, 150, 550);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.rect(170, 20, 230, 100);
        DönerTrainer.crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        DönerTrainer.crc2.fillRect(170, 20, 230, 100);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.rect(890, 150, 15, 15);
        DönerTrainer.crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        DönerTrainer.crc2.fillRect(890, 150, 15, 15);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.rect(890, 225, 15, 15);
        DönerTrainer.crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        DönerTrainer.crc2.fillRect(890, 225, 15, 15);
        DönerTrainer.crc2.stroke();
    }
    DönerTrainer.drawShop = drawShop;
    function drawExcitedCustomer() {
        DönerTrainer.crc2.beginPath();
        DönerTrainer.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        DönerTrainer.crc2.fillStyle = "lightgreen";
        DönerTrainer.crc2.fill();
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.moveTo(-10, -10);
        DönerTrainer.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(10, -10);
        DönerTrainer.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(-10, 10);
        DönerTrainer.crc2.quadraticCurveTo(0, 30, 10, 10);
        DönerTrainer.crc2.lineTo(-10, 10);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.closePath();
    }
    DönerTrainer.drawExcitedCustomer = drawExcitedCustomer;
    function drawHappyCustomer() {
        DönerTrainer.crc2.beginPath();
        DönerTrainer.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        DönerTrainer.crc2.fillStyle = "green";
        DönerTrainer.crc2.fill();
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.moveTo(-10, -10);
        DönerTrainer.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(10, -10);
        DönerTrainer.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(-10, 10);
        DönerTrainer.crc2.quadraticCurveTo(0, 20, 10, 10);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.closePath();
    }
    DönerTrainer.drawHappyCustomer = drawHappyCustomer;
    function drawNeutralCustomer() {
        DönerTrainer.crc2.beginPath();
        DönerTrainer.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        DönerTrainer.crc2.fillStyle = "yellow";
        DönerTrainer.crc2.fill();
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.moveTo(-10, -10);
        DönerTrainer.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(10, -10);
        DönerTrainer.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(-10, 10);
        DönerTrainer.crc2.lineTo(10, 10);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.closePath();
    }
    DönerTrainer.drawNeutralCustomer = drawNeutralCustomer;
    function drawAnnoyedCustomer() {
        DönerTrainer.crc2.beginPath();
        DönerTrainer.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        DönerTrainer.crc2.fillStyle = "orange";
        DönerTrainer.crc2.fill();
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.moveTo(-10, -10);
        DönerTrainer.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(10, -10);
        DönerTrainer.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(-10, 5);
        DönerTrainer.crc2.lineTo(10, 10);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.closePath();
    }
    DönerTrainer.drawAnnoyedCustomer = drawAnnoyedCustomer;
    function drawAngryCustomer() {
        DönerTrainer.crc2.beginPath();
        DönerTrainer.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        DönerTrainer.crc2.fillStyle = "red";
        DönerTrainer.crc2.fill();
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.moveTo(-10, -10);
        DönerTrainer.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(10, -10);
        DönerTrainer.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(-10, 10);
        DönerTrainer.crc2.quadraticCurveTo(0, 0, 10, 10);
        DönerTrainer.crc2.moveTo(-12, -20);
        DönerTrainer.crc2.lineTo(-6, -15);
        DönerTrainer.crc2.moveTo(6, -15);
        DönerTrainer.crc2.lineTo(12, -20);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.closePath();
    }
    DönerTrainer.drawAngryCustomer = drawAngryCustomer;
    function drawHappyEmployee() {
        DönerTrainer.crc2.beginPath();
        DönerTrainer.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        DönerTrainer.crc2.fillStyle = "green";
        DönerTrainer.crc2.fill();
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.moveTo(-10, -10);
        DönerTrainer.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(10, -10);
        DönerTrainer.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(-10, 10);
        DönerTrainer.crc2.quadraticCurveTo(0, 20, 10, 10);
        DönerTrainer.crc2.moveTo(0, -25);
        DönerTrainer.crc2.rect(-20, -35, 40, 8);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.closePath();
    }
    DönerTrainer.drawHappyEmployee = drawHappyEmployee;
    function drawBoredEmployee() {
        DönerTrainer.crc2.beginPath();
        DönerTrainer.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        DönerTrainer.crc2.fillStyle = "lightblue";
        DönerTrainer.crc2.fill();
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.moveTo(-10, -10);
        DönerTrainer.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(10, -10);
        DönerTrainer.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(-10, 10);
        DönerTrainer.crc2.lineTo(10, 10);
        DönerTrainer.crc2.moveTo(0, -25);
        DönerTrainer.crc2.rect(-20, -35, 40, 8);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.closePath();
    }
    DönerTrainer.drawBoredEmployee = drawBoredEmployee;
    function drawUnderchallengedEmployee() {
        DönerTrainer.crc2.beginPath();
        DönerTrainer.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        DönerTrainer.crc2.fillStyle = "blue";
        DönerTrainer.crc2.fill();
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.moveTo(-10, -10);
        DönerTrainer.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(10, -10);
        DönerTrainer.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(-10, 10);
        DönerTrainer.crc2.lineTo(10, 10);
        DönerTrainer.crc2.moveTo(25, -20);
        DönerTrainer.crc2.lineTo(20, -20);
        DönerTrainer.crc2.lineTo(25, -25);
        DönerTrainer.crc2.lineTo(20, -25);
        DönerTrainer.crc2.moveTo(35, -20);
        DönerTrainer.crc2.lineTo(30, -20);
        DönerTrainer.crc2.lineTo(35, -25);
        DönerTrainer.crc2.lineTo(30, -25);
        DönerTrainer.crc2.moveTo(0, -25);
        DönerTrainer.crc2.rect(-20, -35, 40, 8);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.closePath();
    }
    DönerTrainer.drawUnderchallengedEmployee = drawUnderchallengedEmployee;
    function drawStressedEmployee() {
        DönerTrainer.crc2.beginPath();
        DönerTrainer.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        DönerTrainer.crc2.fillStyle = "orange";
        DönerTrainer.crc2.fill();
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.moveTo(-10, -10);
        DönerTrainer.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(10, -10);
        DönerTrainer.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(-10, 10);
        DönerTrainer.crc2.lineTo(10, 15);
        DönerTrainer.crc2.moveTo(-12, -15);
        DönerTrainer.crc2.lineTo(-6, -20);
        DönerTrainer.crc2.moveTo(0, -25);
        DönerTrainer.crc2.rect(-20, -35, 40, 8);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.closePath();
    }
    DönerTrainer.drawStressedEmployee = drawStressedEmployee;
    function drawOverchallengedEmployee() {
        DönerTrainer.crc2.beginPath();
        DönerTrainer.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
        DönerTrainer.crc2.fillStyle = "red";
        DönerTrainer.crc2.fill();
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.moveTo(-10, -10);
        DönerTrainer.crc2.arc(-10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(10, -10);
        DönerTrainer.crc2.arc(10, -10, 3, 0, 2 * Math.PI);
        DönerTrainer.crc2.moveTo(-10, 10);
        DönerTrainer.crc2.quadraticCurveTo(0, -10, 10, 10);
        DönerTrainer.crc2.moveTo(0, -25);
        DönerTrainer.crc2.rect(-20, -35, 40, 8);
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.closePath();
    }
    DönerTrainer.drawOverchallengedEmployee = drawOverchallengedEmployee;
    function drawHighlight() {
        DönerTrainer.crc2.beginPath();
        DönerTrainer.crc2.moveTo(DönerTrainer.employees[0].position.x, DönerTrainer.employees[0].position.y - 25);
        DönerTrainer.crc2.rect(-20, -35, 40, 8);
        DönerTrainer.crc2.strokeStyle = "red";
        DönerTrainer.crc2.lineWidth = 3;
        DönerTrainer.crc2.stroke();
        DönerTrainer.crc2.closePath();
    }
    DönerTrainer.drawHighlight = drawHighlight;
})(DönerTrainer || (DönerTrainer = {}));
//# sourceMappingURL=Path.js.map