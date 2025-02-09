import {returnName,returnPhoto} from "../fb.js";
import { getUserAddress } from "../address.js";
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
  getUserAddress.then((address) => {
    document.querySelector(".location-box").innerHTML = `
      <strong>Location:</strong><br>
      Address: ${address}
    `;
  });
});
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(getLocation, showError);
  
// } else {
//  document.getElementById("output").innerText =
//    "Geolocation is not supported by this browser.";
// }

// async function getLocation(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;

//   try {
//     const address = await fetchAddress(latitude, longitude);
//     document.querySelector(".location-box").innerHTML = `
//       <strong>Location:</strong><br>
//       Address: ${address}
//     `;    
//     document.querySelector(".location-box").style.display = "none";
    
//   } catch (error) {
//     console.error("Error fetching address:", error);
//     document.querySelector(".location-box").innerHTML =
//       "Failed to retrieve address. Please try again.";
//   }
// }


