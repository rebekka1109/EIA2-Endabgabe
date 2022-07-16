var GardenSimulation;
(function (GardenSimulation) {
    window.addEventListener("load", hdlLoad);
    GardenSimulation.allFields = [];
    GardenSimulation.allPlants = [];
    GardenSimulation.player = new GardenSimulation.Player();
    GardenSimulation.time = 0;
    function hdlLoad() {
        GardenSimulation.canvas = document.querySelector("canvas");
        GardenSimulation.cr2 = GardenSimulation.canvas.getContext("2d");
        GardenSimulation.cr2.fillStyle = "red";
        GardenSimulation.cr2.fillRect(0, 0, 100, 100);
        GardenSimulation.canvas.height = 400;
        GardenSimulation.canvas.width = 4000;
        GardenSimulation.canvas.addEventListener("click", function (evt) { getMousePosition(evt); });
        var seedButton1 = document.querySelector("#s1");
        var seedButton2 = document.querySelector("#s2");
        var seedButton3 = document.querySelector("#s3");
        var seedButton4 = document.querySelector("#s4");
        var seedButton5 = document.querySelector("#s5");
        var harvestButton = document.querySelector("#h");
        var waterButton = document.querySelector("#w");
        var fertilizeButton = document.querySelector("#f");
        var pesticideButton = document.querySelector("#p");
        seedButton1.addEventListener("click", function () { return GardenSimulation.player.plant(seedButton1.value); });
        seedButton2.addEventListener("click", function () { return GardenSimulation.player.plant(seedButton2.value); });
        seedButton3.addEventListener("click", function () { return GardenSimulation.player.plant(seedButton3.value); });
        seedButton4.addEventListener("click", function () { return GardenSimulation.player.plant(seedButton4.value); });
        seedButton5.addEventListener("click", function () { return GardenSimulation.player.plant(seedButton5.value); });
        harvestButton.addEventListener("click", GardenSimulation.player.harvest);
        waterButton.addEventListener("click", GardenSimulation.player.water);
        fertilizeButton.addEventListener("click", GardenSimulation.player.fertilize);
        pesticideButton.addEventListener("click", GardenSimulation.player.pesticide);
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 10; j++) {
                GardenSimulation.allFields.push(new GardenSimulation.Field(j, i));
            }
        }
        for (var _i = 0, allFields_1 = GardenSimulation.allFields; _i < allFields_1.length; _i++) {
            var field = allFields_1[_i];
            field.draw();
        }
        startTimer();
        var inputfield = document.querySelector("#moneyinput");
        document.querySelector("#startButton").addEventListener("click", changePlayermoney);
        function changePlayermoney() {
            var inputfieldValue = inputfield.value;
            GardenSimulation.Player.money = parseInt(inputfieldValue);
        }
    }
    function getMousePosition(_evt) {
        var rect = GardenSimulation.canvas.getBoundingClientRect();
        GardenSimulation.mX = _evt.clientX - rect.left;
        GardenSimulation.mY = _evt.clientY - rect.top;
        for (var _i = 0, allFields_2 = GardenSimulation.allFields; _i < allFields_2.length; _i++) {
            var field = allFields_2[_i];
            field.isHit(GardenSimulation.mX, GardenSimulation.mY);
        }
    }
    function startTimer() {
        setInterval(timer, 1000);
    }
    function timer() {
        GardenSimulation.time++;
        console.log(GardenSimulation.time);
        for (var _i = 0, allPlants_1 = GardenSimulation.allPlants; _i < allPlants_1.length; _i++) {
            var plant = allPlants_1[_i];
            plant.grow();
            plant.draw();
            plant.loosesWater();
            plant.getsBug();
            plant.price = Math.abs(Math.sin(GardenSimulation.time) + plant.price);
        }
        document.querySelector("#money").innerHTML = "Money: " + GardenSimulation.Player.money + " €";
    }
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=gardensimulation.js.map