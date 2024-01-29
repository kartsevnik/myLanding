class ChangeBlock {
    constructor(blockToMove, destinationBlock, positionDestination, returnBlock, positionReturn) {
        this.onResize = this.listening.bind(this);
        window.addEventListener('resize', this.onResize);

        this.positionDestination = positionDestination;
        this.positionReturn = positionReturn;

        this.blockToMove = document.getElementById(blockToMove);
        this.destinationBlock = document.getElementById(destinationBlock);
        this.returnBlock = document.getElementById(returnBlock);

        this.blockMoved = false;
    }

    listening() {
        // Получаем текущую ширину экрана
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Условие для определенного размера экрана (например, 1200 пикселей)
        if (screenWidth >= 1200 && this.blockMoved === true) {
            this.moveBlockReturn(this.blockToMove, this.destinationBlock);
        } else if (screenWidth < 1200 && this.blockMoved === false) {
            this.moveBlock(this.blockToMove, this.returnBlock);
        }
    }

    moveBlock() {
        // Перемещаем блок внутрь другого блока
        if (this.positionDestination == "append") {
            this.destinationBlock.append(this.blockToMove);
        } else if (this.positionDestination == "prepend") {
            this.destinationBlock.prepend(this.blockToMove);
        }
        // Устанавливаем флаг, чтобы не выполнять перемещение повторно
        this.blockMoved = true;
    }

    moveBlockReturn() {
        console.log(this.positionReturn);
        // Перемещаем блок внутрь другого блока
        if (this.positionReturn == "append") {
            this.returnBlock.append(this.blockToMove);
        } else if (this.positionReturn == "prepend") {
            this.returnBlock.prepend(this.blockToMove);
        }


        // Сбрасываем флаг, чтобы при следующем изменении экрана код снова мог выполнить перемещение
        this.blockMoved = false;
    }
}

const changeTitleWorkExpirience = new ChangeBlock("blockToMove", "right-Block", "prepend", "left-Block", "prepend");
const changeExperienceButton = new ChangeBlock("experience-button", "left-Block", "append", "right-Block", "append");

function greatings() {
    let currentDate = new Date;
    let time = currentDate.getHours();
    const element = document.getElementById("greatings");

    switch (time) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            element.innerHTML = "Good Morning!";
            break;

        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
            element.innerHTML = "Good Day!";
            break;

        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            element.innerHTML = "Good Evening!";
            break;

        default:
            element.innerHTML = "Good Night!";
    }
}

window.onload = function () {
    greatings()
}

