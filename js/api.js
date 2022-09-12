export function loadUsers(amount = 20) {
  return fetch(`https://randomuser.me/api/?results=${amount}`)
    .then((response) => {
      console.log("response: ", response);
      if (response.status === 200) {
        return response.json();
      }
      throw Error("Don't loaded");
    })
    .then((data) => {
      console.log("users:", data.results);
      return data.results;
    });
}
