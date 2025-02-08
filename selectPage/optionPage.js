import {returnName,returnPhoto} from "../fb.js";

let name = await returnName();
let photo = await returnPhoto();

  let user = document.querySelectorAll("#userName");
for (let u of user) {
  u.innerHTML = name;
}
document.querySelector("#profilePic").src = photo || "images/image.png";
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
});


//Dectecting location
const locationBtn = document.querySelector(".location-button");

locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(getLocation, showError);
     
  } else {
    document.getElementById("output").innerText =
      "Geolocation is not supported by this browser.";
  }
});

async function getLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  try {
    const address = await fetchAddress(latitude, longitude);
    document.querySelector(".location-box").innerHTML = `
      <strong>Location:</strong><br>
      Address: ${address}
    `;
  } catch (error) {
    console.error("Error fetching address:", error);
    document.querySelector(".location-box").innerHTML =
      "Failed to retrieve address. Please try again.";
  }
}

async function fetchAddress(latitude, longitude) {
  try {
    const response = await fetch(
      `https://us1.locationiq.com/v1/reverse?key=pk.78a59df4fd8aaf9781702d79911e2a29&lat=${latitude}&lon=${longitude}&format=json`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch address. Status: ${response.status}`);
    }

    const data = await response.json();
    return data.display_name;  
  } catch (error) {
    throw new Error("Unable to fetch address.");
  }
}

function showError(error) {
  let message;
  switch (error.code) {
    case error.PERMISSION_DENIED:
      message = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      message = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      message = "The request to get user location timed out.";
      break;
    default:
      message = "An unknown error occurred.";
      break;
  }
  alert(message);
}
