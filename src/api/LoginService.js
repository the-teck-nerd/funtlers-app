export default async function loginUser(credentials, token) {
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
    token.user = "taimoor@gmail.com";
    token.state = "success";
     
    return token;
  } else {
    token.state = "failed";
    return null;
  }
}
