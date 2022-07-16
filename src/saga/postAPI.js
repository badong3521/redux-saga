import axios from "axios";

//Delete API data
async function deleteAPI(action) {
  await axios.delete(
    `https://62b0f5d1196a9e98702d90ca.mockapi.io/users/${action}`
  );
}

//Get API data

function getAPI() {
  return axios.get("https://62b0f5d1196a9e98702d90ca.mockapi.io/users");
}

//Edit API data
async function EditAPI(id, email) {
  console.log("id", id);
  console.log("email", email);

  await axios.put(
    `https://62b0f5d1196a9e98702d90ca.mockapi.io/users/${id}`,
    email
  );
}

//Handle add user
async function addUserAPI(email) {
  return await axios
    .post(`https://62b0f5d1196a9e98702d90ca.mockapi.io/users`, email)
    .then(() => {
      console.log("rerender- API-Add");
    });
}

export { deleteAPI, getAPI, EditAPI, addUserAPI };
