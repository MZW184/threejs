function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

let isShaking = false;
const nameElement = document.querySelector(".name");

function startShaking() {
  if (!isShaking) {
    nameElement.classList.add("shake");
    isShaking = true;
  }
}

function stopShaking() {
  if (isShaking) {
    nameElement.classList.remove("shake");
    isShaking = false;
  }
}

const codeVoyagerHeading = document.getElementById("codeVoyager");
const originalText = "Code Voyager";
const transformedText = "Frontend Developer";

function toggleText() {
  if (codeVoyagerHeading.textContent === originalText) {
    codeVoyagerHeading.textContent = transformedText;
  } else {
    codeVoyagerHeading.textContent = originalText;
  }
}

codeVoyagerHeading.addEventListener("mouseenter", toggleText);
codeVoyagerHeading.addEventListener("mouseleave", toggleText);

codeVoyagerHeading.style.transition = "color 0.5s ease";
