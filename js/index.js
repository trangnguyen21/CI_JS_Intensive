window.onload = () => {
  console.log(firebase.app().name);
  view.setActiveScreen("login");
  document
    .getElementById("already-have-account")
    .addEventListener("click", () => {
      view.setActiveScreen("login");
    });
};
