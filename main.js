var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    console.log("Start");
    var nEmployees;
    var nCustomer;
    var stockCapacity;
    var background;
    // let stockCapacity: string;
    function handleLoad(_event) {
        var form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        var startBtn = document.querySelector("#startBtn");
        startBtn.addEventListener("click", createCanvas);
    }
    function handleChange(_event) {
        stockCapacity = document.querySelector('input[name="stockCapacity"]:checked').value;
        console.log(stockCapacity);
        if (stockCapacity == "high") {
            Endabgabe.stockFactor = 1.2;
        }
        else if (stockCapacity == "low") {
            Endabgabe.stockFactor = 0.8;
        }
        else if (stockCapacity == "medium") {
            Endabgabe.stockFactor = 1.0;
        }
        // StockFactor ist noch buggy
        console.log(Endabgabe.stockFactor);
        nEmployees = document.querySelector("#nEmployees").value;
        console.log(nEmployees);
        // Zuordnung aller Variablen
    }
    function createCanvas() {
        var form = document.getElementById("form");
        form.classList.add("isHidden");
        var mainContainer = document.getElementById("mainContainer");
        mainContainer.classList.remove("isHidden");
        var canvas = document.querySelector("canvas");
        Endabgabe.crc2 = canvas.getContext("2d");
        var barContainer = document.querySelectorAll(".bar");
        for (var _i = 0, barContainer_1 = barContainer; _i < barContainer_1.length; _i++) {
            var i = barContainer_1[_i];
            i.addEventListener("click", callBarMenu);
        }
        var storageContainer = document.querySelectorAll(".storage");
        for (var _a = 0, storageContainer_1 = storageContainer; _a < storageContainer_1.length; _a++) {
            var i = storageContainer_1[_a];
            i.addEventListener("click", callStorageMenu);
        }
        canvas.addEventListener("click", hideBarMenu);
        drawShop();
        background = Endabgabe.crc2.getImageData(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
    }
    function drawShop() {
        Endabgabe.crc2.fillStyle = "HSL(0, 0%, 70%, 1)";
        Endabgabe.crc2.fillRect(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
        Endabgabe.crc2.rect(400, 20, 120, 500);
        Endabgabe.crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        Endabgabe.crc2.fillRect(400, 20, 120, 500);
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.rect(20, 20, 150, 550);
        Endabgabe.crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        Endabgabe.crc2.fillRect(20, 20, 150, 550);
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.rect(170, 20, 230, 100);
        Endabgabe.crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        Endabgabe.crc2.fillRect(170, 20, 230, 100);
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.rect(890, 150, 15, 15);
        Endabgabe.crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        Endabgabe.crc2.fillRect(890, 150, 15, 15);
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.rect(890, 225, 15, 15);
        Endabgabe.crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        Endabgabe.crc2.fillRect(890, 225, 15, 15);
        Endabgabe.crc2.stroke();
        /* crc2.save(),
        crc2.translate(300, 20);
        crc2.beginPath(); */
    }
    function callBarMenu(_event) {
        var target = _event.target.id;
        //VS Code meckert, aber es funktioniert
        console.log(target);
        if (target == "salad") {
            Endabgabe.Salad.showBarMenu(_event);
        }
        else {
        }
    }
    function callStorageMenu(_event) {
        var target = _event.target.id;
        console.log(target);
        if (target == "saladStorage") {
            Endabgabe.Salad.showStorageMenu(_event);
        }
        else {
        }
    }
    function hideBarMenu(_event) {
        var barMenu = document.querySelector("#barMenu");
        barMenu.classList.add("isHidden");
    }
    function handleClick(_event) {
        /* let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
        barMenu.classList.add("isHidden"); */
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map