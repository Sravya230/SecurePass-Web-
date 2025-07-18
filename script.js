function savePassword() {
  const site = document.getElementById("site").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const data = { site, username, password };
  const saved = JSON.parse(localStorage.getItem("passwords") || "[]");
  saved.push(data);
  localStorage.setItem("passwords", JSON.stringify(saved));

  showPasswords();
}

function showPasswords() {
  const list = document.getElementById("passwordList");
  list.innerHTML = "";
  const saved = JSON.parse(localStorage.getItem("passwords") || "[]");
  saved.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.site} - ${entry.username} - ${entry.password}`;
    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", showPasswords);
