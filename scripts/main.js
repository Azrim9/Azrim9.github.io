const myImage = document.querySelector("img");

myImage.onclick = function () {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/lamar.jpg") {
    myImage.setAttribute("src", "images/robert.png");
  } else {
    myImage.setAttribute("src", "images/lamar.jpg");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Logged in, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome back, ${storedName}`;
  }


  myButton.onclick = () => {
    setUserName();
  };