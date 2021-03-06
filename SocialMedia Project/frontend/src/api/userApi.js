import axios from 'axios';

export async function fetchUser() {
  return axios.get(`http://127.0.0.1:8000/api/account/user/`).then().catch();
}

export async function updateUser(userId, data) {
  return axios.patch(`http://127.0.0.1:8000/api/account/user/${userId}/`, data).then().catch();
}

export async function getProfile() {
  return axios
    .get(`http://127.0.0.1:8000/api/user/profile/`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then()
    .catch();
}

export async function updateProfile(userId, data) {
  return axios
    .patch(`http://127.0.0.1:8000/api/user/profile/${userId}/`, data, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then()
    .catch();
}

export async function getProfileById(id) {
  return axios
    .get(`http://127.0.0.1:8000/api/user/profile/${id}/`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then()
    .catch();
}
export async function getUserById(id) {
  return axios
    .get(`http://127.0.0.1:8000/api/account/user/${id}/`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then()
    .catch();
}
