import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { db,returnName,returnPhoto } from "../fb.js";

let propertyArray = [];

//Updating the user with the user name photolet name = await returnName();
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


// Get all documents from the "users" collection
async function getUsers() {
  const querySnapshot = await getDocs(collection(db, "property"));
  querySnapshot.forEach((doc) => {
    propertyArray.push(doc.data());
    document.querySelector(".property-grid").innerHTML += `
                <div class="property-card">
                    <img src="${doc.data().image}" alt="Property 1" class="property-image">
                    <div class="property-info">
                        <h3 class="property-title">${doc.data().name}</h3>
                        <div class="property-price">₹${doc.data().price}/month</div>
                        <div class="property-rating">★★★★★ ${doc.data().rating}</div>
                        <div class="property-location">${doc.data().address}</div>
                    </div>
                </div>`;
  });
}
getUsers();

//filter search for all properties
document.querySelector("#allProperties").addEventListener("click", () => {
  document.querySelector(".property-grid").innerHTML = "";
  propertyArray.forEach((property) => {
    document.querySelector(".property-grid").innerHTML += `
                <div class="property-card">
                    <img src="${property.image}" alt="Property 1" class="property-image">
                    <div class="property-info">
                        <h3 class="property-title">${property.name}</h3>
                        <div class="property-price">₹${property.price}/month</div>    
                        <div class="property-rating">★★★★★ ${property.rating}</div>
                        <div class="property-location">${property.address}</div>
                    </div>
                </div>`;
  });
});

//filter search for apartments
document.querySelector("#apartment").addEventListener("click", () => {
  document.querySelector(".property-grid").innerHTML = "";
  propertyArray.forEach((property) => {
    if (property.type == "Apartment") {
      document.querySelector(".property-grid").innerHTML += `
                <div class="property-card">
                    <img src="${property.image}" alt="Property 1" class="property-image">
                    <div class="property-info">
                        <h3 class="property-title">${property.name}</h3>
                        <div class="property-price">₹${property.price}/month</div>
                        <div class="property-rating">★★★★★ ${property.rating}</div>
                        <div class="property-location">${property.address}</div>
                    </div>
                </div>`;
    }
  });
});
//filter search for houses
document.querySelector("#houses").addEventListener("click", () => {
  document.querySelector(".property-grid").innerHTML = "";
  propertyArray.forEach((property) => {
    if (property.type == "House") {
      document.querySelector(".property-grid").innerHTML += `
                <div class="property-card">
                    <img src="${property.image}" alt="Property 1" class="property-image">
                    <div class="property-info">
                        <h3 class="property-title">${property.name}</h3>
                        <div class="property-price">₹${property.price}/month</div>
                        <div class="property-rating">★★★★★ ${property.rating}</div>
                        <div class="property-location">${property.address}</div>
                    </div>
                </div>`;
    }
  });
});
//filter search for villas
document.querySelector("#villas").addEventListener("click", () => {
  document.querySelector(".property-grid").innerHTML = "";
  propertyArray.forEach((property) => {
    if (property.type == "Villa") {
      document.querySelector(".property-grid").innerHTML += `
                <div class="property-card">
                    <img src="${property.image}" alt="Property 1" class="property-image">
                    <div class="property-info">
                        <h3 class="property-title">${property.name}</h3>
                        <div class="property-price">₹${property.price}/month</div>
                        <div class="property-rating">★★★★★ ${property.rating}</div>
                        <div class="property-location">${property.address}</div>
                    </div>
                </div>`;
    }  
  });
});
//filter search for townhouse
document.querySelector("#townhouse").addEventListener("click", () => {
  document.querySelector(".property-grid").innerHTML = "";
  propertyArray.forEach((property) => {
    if (property.type == "Townhouse") {
      document.querySelector(".property-grid").innerHTML += `
                <div class="property-card">
                    <img src="${property.image}" alt="Property 1" class="property-image">
                    <div class="property-info"> 
                        <h3 class="property-title">${property.name}</h3>
                        <div class="property-price">₹${property.price}/month</div>
                        <div class="property-rating">★★★★★ ${property.rating}</div>
                        <div class="property-location">${property.address}</div>
                    </div>
                </div>`;
    }
  });
});