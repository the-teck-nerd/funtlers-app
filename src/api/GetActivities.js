
export async function getAllActivities() {
    let response;
    await fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then((result) => response = result.data);
    return response;
}

