import {collection,addDoc,} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { db ,returnName,returnPhoto} from "../fb.js";

//Updating the user with the user name photolet name = await returnName();
let n = await returnName();
let photo = await returnPhoto();

  let user = document.querySelectorAll("#userName");
for (let u of user) {
  u.innerHTML = n;
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


// Add a new user to the "users" collection

async function addUser() {
  try {
    const docRef = await addDoc(collection(db, "property"), {
      name: name.value,
      address: address.value,
      price: price.value,
      rating: 5,
      type: type.value,
      image: image.value
    
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
// addUser();

// fetching the data from the inputs
const address = document.querySelector("#location");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const type = document.querySelector("#type");
const rating = document.querySelector("#rating");
const image = document.querySelector("#image");

document.addEventListener("submit", async (e) => {
  e.preventDefault();
  if(address.value == "" || name.value == "" || price.value == "" || type.value == "" || rating.value == "" || image.value == ""){
    alert("Please fill all the fields");
  }else{
    await addUser();
    alert("Property added successfully");
    window.location.href = "../selectPage/optionPage.html";
  }
});




