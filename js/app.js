import { loadUsers } from "./api.js";

const target = document.getElementById("target");

function showLoading() {
  target.innerHTML = "<div class='loading'>Loading...</div>";
}

function showError() {
  target.innerHTML = "<div class='error'>Error</div>";
}

function showUsers() {
  showLoading();
  loadUsers()
    .then((users) => {
      target.innerHTML = "";
      users.map(showUser);
    })
    .catch((error) => {
      console.log("err:", error);
      showError();
    });
}

function showUser(user) {
  const node = document.createElement("div");
  node.innerHTML = `
    <div class="card card-wrapper">
      <div class="card__header">${user.name.first} ${user.name.last}</div>
      <div class="card__content">
        <img
          class="card__photo"
          src="${user.picture.large}"
          width="128"
          height="128"
          alt="${user.name.first}  ${user.name.last}"
        />
        <div class="card__info">
          ${user.gender}, ${user.dob.age} <br />
          ${user.location.country}, ${user.location.city}
        </div>
      </div>
      <div class="card__toolbar">
        <a href="mailto:${user.email}" alt="Написать">&#9993</a>
        <a href="tel:${user.phone}" alt="Позвонить">&#9742</a>
      </div>
    </div>
  `;
  target.append(node);
  console.log(node);
}

showUsers();
