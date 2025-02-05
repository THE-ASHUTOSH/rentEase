import { returnName, checkUser,returnPhoto,userSignOut } from "../fb.js";
await checkUser();
let name = await returnName();
let photo = await returnPhoto();

// Updating the user with the user name photo
let user = document.querySelectorAll("#userName")
for(let u of user){
  u.innerHTML = name
}
document.querySelector("#profilePic").src = photo || "../images/image.png";

//Dectecting location
const locationBtn = document.querySelector(".location-button");

locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("output").innerText =
      "Geolocation is not supported by this browser.";
  }
});

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // You can use this data with other APIs, e.g., Google Maps API for visualization
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  document.querySelector(
    ".location-box"
  ).innerHTML = `Location: <br>   Latitude: ${latitude}, Longitude: ${longitude}`;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

// profile menu

const profileImg = document.querySelector(".profile-menu");
const profileDropdown = document.querySelector(".dropdown");
let profileDropdownToggle = false;
profileImg.addEventListener("click", () => {
  if (profileDropdownToggle) profileDropdown.classList.add("hidden");
  else profileDropdown.classList.remove("hidden");
  profileDropdownToggle = !profileDropdownToggle;
});

//Logout
document.querySelector("#logoutBtn").addEventListener("click", () => {
  userSignOut();
})