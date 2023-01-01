import FetchService from "./FetchService";

let userObject = { state: "success" | "failed", user: {} };

export function loginUser(credentials) {
  return FetchService.VerifyUser(credentials).then((response) => {
  
    if (response.data) {
   
      userObject.user = response.data;
      userObject.state = "success";
      setUserSession(userObject);
      return userObject;
    } else {
      return null;
    }
  });
}

export function setUserSession(userObject) {
  sessionStorage.setItem("userObject", JSON.stringify(userObject));
}


export function isLoggedIn() {
  
  const userObject = sessionStorage.getItem("userObject");
  return userObject? JSON.parse(userObject) : null;
}

export function logOut(setIsLoggedOut) {
  setIsLoggedOut(null);
  sessionStorage.removeItem("userObject");
}

export function register(user) {
  return FetchService.RegisterUser(user).then((response) => {
    return response.data ? "Success" : "Failed";
  });
  
}

export function setBookingSession(userObject) {
  sessionStorage.setItem("bookingSession", JSON.stringify(userObject));
}

export function getBookingSession() {
  const userObject = sessionStorage.getItem("bookingSession");
  return userObject? JSON.parse(userObject) : null;
}
