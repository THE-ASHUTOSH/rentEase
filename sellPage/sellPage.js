import {collection,addDoc,} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { db ,returnName,returnPhoto,returnEmail} from "../fb.js";
import { getUserAddress } from "../address.js";

let loader = document.querySelector('.loader');

let n = await returnName();
let photo = await returnPhoto();
let email = await returnEmail();


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


async function addUser() {
  try {
    let docRef = await addDoc(collection(db, "property"), {
      name: name.value,
      address: address.value,
      price: price.value,
      rating: 5,
      type: type.value,
      image: image.value
    
    });
    console.log("Document written with ID: ", docRef.id);
    let docRefUser = await addDoc(collection(db, "user"), {
      useremail:email,
      name: name.value,
      address: address.value,
      price: price.value,
      rating: 5,
      type: type.value,
      image: image.value,
      propertyId: docRef.id
    });
    console.log("Document written with ID: ", docRefUser.id);
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
getUserAddress.then((address) => {
  document.querySelector("#location").value = address;
})
document.addEventListener("submit", async (e) => {
  loader.style.display = 'flex'
  e.preventDefault();
  if(address.value == "" || name.value == "" || price.value == "" || type.value == "" || image.value == ""){
    alert("Please fill all the fields");
    loader.style.display = 'none'
  }else{
    await addUser();
    alert("Property added successfully");
    window.location.href = "../selectPage/optionPage.html";
    loader.style.display = 'none'
  }
});




