var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", handleLoad);
    console.log("Start");
    var human = [];
    Abschlussarbeit.employee = [];
    var ingredients = [];
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
            Abschlussarbeit.stockFactor = 1.2;
        }
        else if (stockCapacity == "low") {
            Abschlussarbeit.stockFactor = 0.8;
        }
        else if (stockCapacity == "medium") {
            Abschlussarbeit.stockFactor = 1.0;
        }
        console.log(Abschlussarbeit.stockFactor);
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
        Abschlussarbeit.crc2 = canvas.getContext("2d");
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
        canvas.addEventListener("click", hideMenus);
        canvas.addEventListener("click", detectClick);
        Abschlussarbeit.drawShop();
        background = Abschlussarbeit.crc2.getImageData(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
        var salad = new Abschlussarbeit.Ingredient("Salat", 100 * Abschlussarbeit.stockFactor, 100 * Abschlussarbeit.stockFactor, 25, 25, 2, 20);
        var onion = new Abschlussarbeit.Ingredient("Zwiebeln", 70 * Abschlussarbeit.stockFactor, 70 * Abschlussarbeit.stockFactor, 15, 15, 0.5, 30);
        var corn;
        ingredients.push(salad, onion);
        var testEmployee = new Abschlussarbeit.Employee(1);
        testEmployee.draw();
        Abschlussarbeit.employee.push(testEmployee);
        window.setInterval(update, 50);
    }
    function callBarMenu(_event) {
        var target = _event.target.id;
        //VS Code meckert, aber es funktioniert
        console.log(target);
        if (target == "salad") {
            ingredients[0].showBarMenu(_event);
        }
        else {
        }
    }
    function callStorageMenu(_event) {
        var target = _event.target.id;
        console.log(target);
        if (target == "saladStorage") {
            Abschlussarbeit.Ingredient.showStorageMenu(_event);
        }
        else {
        }
    }
    function hideMenus(_event) {
        var barMenu = document.querySelector("#barMenu");
        barMenu.classList.add("isHidden");
        var storageMenu = document.querySelector("#storageMenu");
        storageMenu.classList.add("isHidden");
        Abschlussarbeit.Salad.clicked = false;
        console.log("ingr " + Abschlussarbeit.Ingredient.clicked);
        console.log("salat" + Abschlussarbeit.Salad.clicked);
    }
    function detectClick(_event) {
        var xClick = _event.clientX;
        var yClick = _event.clientY;
        //console.log(employee[0].getClicked(xClick, yClick));
    }
    function update() {
        Abschlussarbeit.crc2.putImageData(background, 0, 0);
        Abschlussarbeit.employee[0].draw();
    }
    /* function drawShop(): void {
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
    } */
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map