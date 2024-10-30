let isFirstClick = true;
let firstClick = true;
const variantNumber = 10;
const targetElementIndex = (variantNumber % 10) + 1;

document.addEventListener("click", (event) => {
    if (firstClick) {
        // Перший клік — змінити колір фону та тексту з використанням getElementById()
        const element = document.getElementById(`header${targetElementIndex}`);
        if (element) {
            element.style.backgroundColor = "lightblue";
            element.style.color = "darkblue";
            firstClick = false;
        }
    } else {
        // Другий клік — змінити колір фону та тексту з використанням querySelector()
        const element = document.querySelector(`#header${targetElementIndex}`);
        if (element) {
            element.style.backgroundColor = "lightgreen";
            element.style.color = "darkgreen";
            firstClick = true;
        }
    }
});

document.addEventListener("click", (event) => {
    const n = 10;
    const targetId = ((n % 10) + 1).toString();

    if (isFirstClick) {
        if (event.target.id === `header${targetId}`) {
            // Change background and text color using getElementById()
            document.getElementById(`header${targetId}`).style.backgroundColor = "lightblue";
            document.getElementById(`header${targetId}`).style.color = "darkblue";
            isFirstClick = false;
        }
    } else {
        if (event.target.matches(`#header${targetId}`)) {
            // Change background and text color using querySelector()
            document.querySelector(`#header${targetId}`).style.backgroundColor = "lightgreen";
            document.querySelector(`#header${targetId}`).style.color = "darkgreen";
            isFirstClick = true;
        }
    }
});

// Image actions
function addImage() {
    const imgContainer = document.createElement("img");
    imgContainer.src = "./img/20240212211647-1288.png";
    imgContainer.alt = "img";
    imgContainer.id = "image";
    document.body.appendChild(imgContainer);
}

function increaseImage() {
    const image = document.getElementById("image");
    if (image) {
        let width = image.clientWidth;
        image.style.width = (width + 20) + "px";
    }
}

function decreaseImage() {
    const image = document.getElementById("image");
    if (image) {
        let width = image.clientWidth;
        image.style.width = (width - 20) + "px";
    }
}

function removeImage() {
    const image = document.getElementById("image");
    if (image) {
        image.remove();
    }
}
