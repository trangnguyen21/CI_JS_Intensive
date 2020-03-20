const view = {};

view.setActiveScreen = screenName => {
  switch (screenName) {
    case "register":
      document.getElementById("app").innerHTML = components.register;
      const registerForm = document.getElementById("register-form");

      registerForm.addEventListener("submit", e => {
        e.preventDefault();
        const registerInfo = {
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value
        };
        controller.validateForm(registerInfo);
      });

      break;
    case "login":
      document.getElementById("app").innerHTML = components.login;
      const loginForm = document.getElementById("login-form");
      loginForm.addEventListener("submit", e => {
        e.preventDefault();
        const loginInfo = {
          email: loginForm.email.value,
          password: loginForm.password.value
        };
        controller.login(loginInfo);
      });
      break;
    case "chat":
      document.getElementById("app").innerHTML = components.chat;
      model.loadConversation();
      const messageForm = document.getElementById("message-form");
      messageForm.addEventListener("submit", e => {
        e.preventDefault();
        const newMessage = messageForm.message.value;
        //1. Thêm message vào danh sách
        controller.addMessage(newMessage);
        //2. Reset Input về vị trí ban đầu
        messageForm.message.value = "";
      });
      const createFormBtn = document.getElementById("create-conversation");
      createFormBtn.addEventListener("click", e => {
        e.stopPropagation();
        document
          .getElementById("add-conversation-modal")
          .classList.add("active");
      });
      document
        .getElementById("add-conversation-modal")
        .addEventListener("click", e => {
          e.stopPropagation();
          document
            .getElementById("add-conversation-modal")
            .classList.add("active");
        });
      document
        .getElementById("cancel-modal-button")
        .addEventListener("click", e => {
          e.preventDefault();
          document
            .getElementById("add-conversation-modal")
            .classList.remove("active");
        });

      break;
  }
};

//Hàm render ra message

//messageObject bao gồm sender và content
view.addMessage = messageObject => {
  //1. Tạo message container
  const messageContainer = document.createElement("div");
  //2. Thêm class cho container
  messageContainer.classList.add("message-container");
  //3. Tạo message
  const message = document.createElement("div");
  message.classList.add("message");
  message.innerHTML = messageObject.content;
  if (messageObject.user === model.authUser.email) {
    messageContainer.classList.add("your");
  }
  const sender = document.createElement("div");
  sender.classList.add("sender");
  sender.innerText = messageObject.user;
  //3.a Thêm tên người gửi
  messageContainer.appendChild(sender);

  //4. Append -thêm message vào cây DOM
  messageContainer.appendChild(message);
  document
    .getElementById("conversation-messages")
    .appendChild(messageContainer);
};

view.setError = (id, textError) => {
  document.getElementById(id).innerHTML = textError;
};
