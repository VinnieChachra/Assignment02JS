// Constants for query selector
const myStudentId = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");

// Function to change bg color from user input and add student id
function changeCustomColor() {
  const userInput = parseInt(customNumberInput.value);
  myStudentId.textContent = `Student ID: 200547583`;
  let bgColor = "";

  if (userInput < 0 || userInput > 100) {
    bgColor = "red";
  } else if (userInput >= 0 && userInput <= 20) {
    bgColor = "green";
  } else if (userInput > 20 && userInput <= 40) {
    bgColor = "blue";
  } else if (userInput > 40 && userInput <= 60) {
    bgColor = "orange";
  } else if (userInput > 60 && userInput <= 80) {
    bgColor = "purple";
  } else if (userInput > 80 && userInput <= 100) {
    bgColor = "yellow";
  }

  document.body.style.backgroundColor = bgColor;
}

// Function to change bg color from random no.
function changeRandomColor() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  customNumberInput.value = randomNum;
  changeCustomColor();
}

// Function to generate options for select list
function addList() {
  const imgFolder = "img/";
  const imageNames = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
  ];
  imageSelect.innerHTML = "";

  for (let i = 0; i < imageNames.length; i++) {
    const option = document.createElement("option");
    option.value = imgFolder + imageNames[i];
    option.text = imageNames[i];
    imageSelect.appendChild(option);
  }
}

// Function to change image
function changeImage() {
  const selectedImage = imageSelect.value;
  images.src = selectedImage;
}

// Event listeners for on click event of buttons
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);

// Event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);

// Initialize the select options
addList();
