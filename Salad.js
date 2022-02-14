/* static showStorageMenu(_event: MouseEvent): void {
    let storageMenu: HTMLDivElement = document.querySelector("#storageMenu")!;
    storageMenu.classList.remove("isHidden");
    let x: number = _event.clientX;
    let y: number = _event.clientY;
    storageMenu.style.marginLeft = x + 20 + "px";
    storageMenu.style.marginTop = y + -50 + "px";
    let ingredientNameStorage: HTMLParagraphElement = document.querySelector("#ingredientNameStorage")!;
    ingredientNameStorage.innerHTML = "Salat";
    let percentageDisplayStorage: number = (this.nStorage / this.storageSize) * 100;
    console.log(percentageDisplayStorage);
    let ingredientLevelStorage: HTMLParagraphElement = document.querySelector("#ingredientLevelStorage")!;
    ingredientLevelStorage.innerHTML = "Auf Lager: " + percentageDisplayStorage + "% " + this.nStorage + "/" + this.storageSize;
    let prepareBtn: HTMLButtonElement = document.querySelector("#prepare")!;
    if (this.nStorage == 0) {
        prepareBtn.classList.add("isHidden");
    }
    prepareBtn.addEventListener("click", Salad.prepare);
    let orderBtn: HTMLButtonElement = document.querySelector("#orderBtn")!;
    if (this.nStorage == this.storageSize) {
        orderBtn.classList.add("isHidden");
    }
    orderBtn.addEventListener("click", Salad.orderIngredients);
} */
/*    static placeTopping(): void {
   }
   
   static prepare(): void {
       let storageMenu: HTMLDivElement = document.querySelector("#storageMenu")!;
       let prepareBtn: HTMLButtonElement = document.querySelector("#prepare")!;
       prepareBtn.classList.add("isHidden");
       let progress: HTMLDivElement = document.createElement("div");
       progress.id = "progress";
       storageMenu.appendChild(progress);
       let pBar: HTMLDivElement = document.createElement("div");
       pBar.id = "pBar";
       progress.appendChild(pBar);
       let neededFillAmount: number = this.barSize - this.nBar;
       //let nPreperation: number =
       if (neededFillAmount > this.nStorage) {
           this.nStorage -= this.nStorage;
       } else {
           this.nStorage -= neededFillAmount;
       }
       
       Employee.busy = true;
       let counter: number = 20;
       const interval: number = setInterval(function(): void {
           console.log(counter);
           counter--;
           progress.style.width = "100px";
           pBar.style.width = (counter / 20) * 100 + "%";
           if (counter < 0) {
               clearInterval(interval);
               Employee.busy = false;
               
               pBar.classList.add("isHidden");
               progress.classList.add("isHidden");
               let fillBar: HTMLButtonElement = document.createElement("button");
               fillBar.id = "fillBar";
               storageMenu.appendChild(fillBar);
               fillBar.innerText = "Theke füllen";
               fillBar.addEventListener("click", Salad.fillBar);
           
           }
       },                                   1000);
   }
   static fillBar(): void {
       
   } */
/* static orderIngredients(): void {
    let storageMenu: HTMLDivElement = document.querySelector("#storageMenu")!;
    let orderBtn: HTMLButtonElement = document.querySelector("#orderBtn")!;
    orderBtn.classList.add("isHidden");
    let progress: HTMLDivElement = document.createElement("div");
    progress.id = "progress2";
    storageMenu.appendChild(progress);
    let pBar: HTMLDivElement = document.createElement("div");
    pBar.id = "pBar2";
    progress.appendChild(pBar);
    let orderDuration: number = 50;
    let counter: number = orderDuration;
    const interval: number = setInterval((): void => {
        //Pfeilfunktion genutzt, da sonst kein Zugriff auf this.XY möglich
        console.log(counter);
        counter--;
        progress.style.width = "100px";
        pBar.style.width = (counter / 50) * 100 + "%";
        if (counter < 0) {
            clearInterval(interval);
            pBar.classList.add("isHidden");
            progress.classList.add("isHidden");
            this.nStorage = this.storageSize;
        }
     },                                  1000);
} */ 
//# sourceMappingURL=Salad.js.map