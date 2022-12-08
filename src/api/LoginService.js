import FetchService from "./FetchService";

export function loginUser(credentials, token) {
  token = token ?? {};
 return  FetchService.VerifyUser(credentials).then((response) => {

    if (response.data) {
      console.log(response.data);
      token.user = {
        Id: 3,
        FirstName: "Taimoor",
        LastName: "Faizal",
        Phone: "96741213",
        Email: "taimoor.fazal@test.com",
        usertype: "Consumer",
      };
      token.state = "success";
     
       
      return token;
    } else {
      
      token.state = "failed";
      token.user = null;
      return null;
    }
  });
}

export function setUserSession(userObject) {
  sessionStorage.setItem("token", JSON.stringify(userObject));
}

export function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);

  return userToken?.state === "success";
}

export function isLoggedIn() {
  const tokenString = sessionStorage.getItem("token");
  if (tokenString) {
    return null;
  }

  const user = JSON.parse(tokenString);

  return user?.state === "success" ? user : null;
}
export function logOut(setIsLoggedOut) {
  setIsLoggedOut(null);
  sessionStorage.removeItem("token");
}

export function register(user) {
  return FetchService.RegisterUser(user).then((response) => {
    return response.data ? "Success" : "Failed";
  });
}
