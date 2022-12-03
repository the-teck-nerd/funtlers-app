import FetchService from "./FetchService";

export async function loginUser(credentials, token) {
  // return fetch('http://localhost:8080/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(credentials)
  // })
  //   .then(data => data.json())

  if (
    credentials.userName === "taimoor@gmail.com" &&
    credentials.password === "taimoor"
  ) {
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
}

export function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

export function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);

  return userToken?.state === "success";
}

export function isLoggedIn() {
  const tokenString = sessionStorage.getItem("token");
  const user = JSON.parse(tokenString);

  return user?.state === "success" ? user : null;
}
export function logOut(setIsLoggedOut) {
  setIsLoggedOut(null);
  sessionStorage.removeItem("token");
}

export function register(user) {
  return FetchService.RegisterUser(user).then((response) => {
    return response.data?"Success":"Failed";
  });
}
