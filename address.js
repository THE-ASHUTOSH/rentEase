// Export a Promise for the user's address
export const getUserAddress = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => handleGeolocationSuccess(position, resolve, reject),
        (error) => {
          showError(error);
          reject("Failed to get user location.");
        }
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
  
  // Callback Function to Handle Geolocation Success
  async function handleGeolocationSuccess(position, resolve, reject) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    try {
      const address = await fetchAddress(latitude, longitude);
      resolve(address); // Resolve the promise with the address
    } catch (error) {
      console.error("Error fetching address:", error);
      reject("Failed to retrieve address.");
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