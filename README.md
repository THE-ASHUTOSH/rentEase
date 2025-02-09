# House Renting and Selling Website  

## 📖 Overview  
This website is a platform for users to rent or sell houses easily. It offers a seamless user experience with multiple features such as detecting the user’s location, fetching data from a database, and using modern JavaScript functionalities like DOM manipulation, promises, async, and await for API calls.  

The website consists of **4 pages**, each serving a specific purpose:  

1. **Homepage:** Introduction to the website, login into the website using the firebase authentication and a contact section.  
2. **Process Selection Page:** Users can select whether they want to rent or sell a house. This page also includes a location detection feature using an **API** to automatically detect the user’s current location.  
3. **Rent Page:** Displays all the available rental properties, fetched dynamically from a database. Users can filter properties based on categories such as apartments, houses, and townhouses using **DOM manipulation**.  
4. **Sell Page:** Users can list their property by filling out a form. The **address is automatically fetched** using an API, and upon submitting the form, the property is saved in the database.  

---

## 🚀 Features  

### 📌 Homepage  
- Provides a brief overview of the website.  
- Helps user login using firebase authentication.

### 📌 Process Selection Page  
- Allows users to select between two options: **Rent** or **Sell**.  
- **Location Detection:** Utilizes a **Location API** to automatically detect and display the user's current location.  
  - This is achieved using **async/await** for handling API responses.  

### 📌 Rent Page  
- Displays a list of all available rental properties fetched from the **database**.  
- **Filter Functionality:**  
  - Users can filter properties based on categories like **apartments, houses, and townhouses** etc.  
  - This is implemented using **DOM manipulation** for dynamically updating the property list.  
- **Promise Handling & API Integration:** Ensures that data is fetched and displayed efficiently with **async/await**.  

### 📌 Sell Page  
- **Form Submission:** Users fill out a form to list their property for sale.  
- **Automatic Address Detection:** The form automatically fetches the user's address using an **API**.  
- **Database Integration:** Once the form is submitted, the property details are **saved in the database**, making them available for potential buyers.  

---

## 🛠️ Technologies Used  
- **Frontend:** HTML, CSS, JavaScript (Vanilla)  
- **Backend:** Firebase (firebase authentication, firebase firestore)  
- **APIs:**  
  - Location API for detecting user location  
  - Custom API for fetching and storing property details  
- **JavaScript Concepts:**  
  - **DOM Manipulation**  
  - **Promises, async/await** for handling asynchronous operations  
  - **API Integration**  

---

