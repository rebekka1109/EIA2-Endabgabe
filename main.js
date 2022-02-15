//Inspiration und Hilfe: David Eichler//
var DönerTrainer;
(function (DönerTrainer) {
    window.addEventListener("load", handleLoad);
    console.log("Start");
    var human = [];
    DönerTrainer.employees = [];
    for (var index = 0; index < DönerTrainer.employees.length; index++) {
        DönerTrainer.anyEmployee = DönerTrainer.employees[index];
    }
    DönerTrainer.ingredients = [];
    var customers = [];
    DönerTrainer.orders = [];
    var nEmployees;
    var nCustomer;
    var timeCustomer;
    var stockCapacity;
    var moodCapacity;
    var background;
    DönerTrainer.gametime = 0;
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
            DönerTrainer.stockFactor = 1.2;
        }
        else if (stockCapacity == "low") {
            DönerTrainer.stockFactor = 0.8;
        }
        else if (stockCapacity == "medium") {
            DönerTrainer.stockFactor = 1.0;
        }
        moodCapacity = document.querySelector('input[name="moodFactor"]:checked').value;
        if (moodCapacity == "high") {
            DönerTrainer.moodFactor = 1.2;
        }
        else if (moodCapacity == "low") {
            DönerTrainer.moodFactor = 0.8;
        }
        else if (moodCapacity == "medium") {
            DönerTrainer.moodFactor = 1.0;
        }
        console.log(DönerTrainer.stockFactor);
        nEmployees = Number(document.querySelector("#nEmployees").value);
        timeCustomer = Number(document.querySelector("#nCustomers").value);
        console.log(timeCustomer);
    }
    function createCanvas() {
        var form = document.getElementById("form");
        form.classList.add("isHidden");
        var mainContainer = document.getElementById("mainContainer");
        mainContainer.classList.remove("isHidden");
        var canvas = document.querySelector("canvas");
        DönerTrainer.crc2 = canvas.getContext("2d");
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
        canvas.addEventListener("click", detectClickCustomer);
        DönerTrainer.drawShop();
        background = DönerTrainer.crc2.getImageData(0, 0, DönerTrainer.crc2.canvas.width, DönerTrainer.crc2.canvas.height);
        createEmployees(nEmployees);
        console.log(nEmployees);
        createCustomer(timeCustomer);
        var salad = new DönerTrainer.Ingredient("Salat", 100 * DönerTrainer.stockFactor, 100 * DönerTrainer.stockFactor, 25, 25, 2, 20, 350, 150, 150, 150);
        var onion = new DönerTrainer.Ingredient("Zwiebeln", 70 * DönerTrainer.stockFactor, 70 * DönerTrainer.stockFactor, 15, 15, 0.5, 30, 350, 180, 150, 180);
        var corn = new DönerTrainer.Ingredient("Mais", 1000 * DönerTrainer.stockFactor, 1000 * DönerTrainer.stockFactor, 300, 300, 30, 5, 350, 210, 150, 210);
        var tomato = new DönerTrainer.Ingredient("Tomate", 50 * DönerTrainer.stockFactor, 50 * DönerTrainer.stockFactor, 15, 15, 0.5, 15, 350, 240, 150, 240);
        var kraut = new DönerTrainer.Ingredient("Kraut", 150 * DönerTrainer.stockFactor, 150 * DönerTrainer.stockFactor, 50, 50, 12.5, 10, 350, 270, 150, 270);
        var peperoni = new DönerTrainer.Ingredient("Peperoni", 50 * DönerTrainer.stockFactor, 50 * DönerTrainer.stockFactor, 30, 30, 2, 5, 350, 300, 150, 300);
        var doener = new DönerTrainer.Ingredient("doener", 1000, 1000, 1000, 1000, 20, 0, 300, 150, 0, 0);
        var yufka = new DönerTrainer.Ingredient("yufka", 1000, 1000, 1000, 1000, 20, 0, 300, 150, 0, 0);
        var classic = new DönerTrainer.Ingredient("classic", 1000, 1000, 1000, 1000, 20, 0, 300, 150, 0, 0);
        var chicken = new DönerTrainer.Ingredient("chicken", 1000, 1000, 1000, 1000, 20, 0, 300, 150, 0, 0);
        var lahmacun = new DönerTrainer.Ingredient("lahmacun", 1000, 1000, 1000, 1000, 20, 0, 300, 150, 0, 0);
        DönerTrainer.ingredients.push(salad, onion, corn, tomato, kraut, peperoni, doener, yufka, classic, chicken, lahmacun);
        window.setInterval(countGametime, 1000);
        window.setInterval(update, 50);
    }
    function createEmployees(_nEmployees) {
        for (var i = 0; i < _nEmployees; i++) {
            var newEmployee = new DönerTrainer.Employee(i);
            DönerTrainer.employees.push(newEmployee);
        }
    }
    function createCustomer(_nCustomer) {
        for (var i = 0; i < _nCustomer; i++) {
            var newCustomer = new DönerTrainer.Customer(i);
            customers.push(newCustomer);
        }
    }
    function callBarMenu(_event) {
        var target = _event.target.id;
        console.log(target);
        if (target == "salad") {
            DönerTrainer.ingredients[0].showBarMenu(_event);
        }
        else if (target == "onion") {
            DönerTrainer.ingredients[1].showBarMenu(_event);
        }
        else if (target == "corn") {
            DönerTrainer.ingredients[2].showBarMenu(_event);
        }
        else if (target == "tomato") {
            DönerTrainer.ingredients[3].showBarMenu(_event);
        }
        else if (target == "kraut") {
            DönerTrainer.ingredients[4].showBarMenu(_event);
        }
        else if (target == "peperoni") {
            DönerTrainer.ingredients[5].showBarMenu(_event);
        }
        else if (target == "yufka") {
            DönerTrainer.ingredients[6].showBarMenu(_event);
        }
        else if (target == "doener") {
            DönerTrainer.ingredients[7].showBarMenu(_event);
        }
        else if (target == "classicKebab") {
            DönerTrainer.ingredients[8].showBarMenu(_event);
        }
        else if (target == "chickenKebab") {
            DönerTrainer.ingredients[9].showBarMenu(_event);
        }
        else if (target == "lahmacun") {
            DönerTrainer.ingredients[10].showBarMenu(_event);
        }
    }
    function callStorageMenu(_event) {
        var target = _event.target.id;
        console.log(target);
        if (target == "saladStorage") {
            DönerTrainer.ingredients[0].showStorageMenu(_event);
        }
        else if (target == "onionStorage") {
            DönerTrainer.ingredients[1].showStorageMenu(_event);
        }
        else if (target == "cornStorage") {
            DönerTrainer.ingredients[2].showStorageMenu(_event);
        }
        else if (target == "tomatoStorage") {
            DönerTrainer.ingredients[3].showStorageMenu(_event);
        }
        else if (target == "krautStorage") {
            DönerTrainer.ingredients[4].showStorageMenu(_event);
        }
        else if (target == "peperoniStorage") {
            DönerTrainer.ingredients[5].showStorageMenu(_event);
        }
    }
    function hideMenus(_event) {
        var barMenu = document.querySelector("#barMenu");
        barMenu.classList.add("isHidden");
        var storageMenu = document.querySelector("#storageMenu");
        storageMenu.classList.add("isHidden");
        DönerTrainer.Ingredient.clicked = false;
        console.log("ingr " + DönerTrainer.Ingredient.clicked);
        var breakBtn = document.querySelector("#breakBtn");
        breakBtn.classList.add("isHidden");
    }
    function detectClick(_event) {
        var xClick = _event.clientX;
        var yClick = _event.clientY;
        for (var _i = 0, employees_1 = DönerTrainer.employees; _i < employees_1.length; _i++) {
            var b = employees_1[_i];
            b.getClicked(xClick, yClick);
        }
    }
    function detectClickCustomer(_event) {
        var xClick = _event.clientX;
        var yClick = _event.clientY;
        for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
            var c = customers_1[_i];
            c.getClicked(xClick, yClick);
        }
    }
    function update() {
        DönerTrainer.crc2.putImageData(background, 0, 0);
        for (var _i = 0, employees_2 = DönerTrainer.employees; _i < employees_2.length; _i++) {
            var a = employees_2[_i];
            a.move(1 / 50);
            a.draw();
        }
        for (var _a = 0, customers_2 = customers; _a < customers_2.length; _a++) {
            var a = customers_2[_a];
            a.draw();
            a.move(1 / 50);
        }
    }
    function countGametime() {
        DönerTrainer.gametime++;
    }
})(DönerTrainer || (DönerTrainer = {}));
//# sourceMappingURL=main.js.map