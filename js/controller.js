const controller = {};

controller.validateForm = async registerInfo => {
  if (!registerInfo.email) {
    view.setError("email-error", "Email không được bỏ trống");
  } else {
    view.setError("email-error", "");
  }

  if (!registerInfo.password) {
    view.setError("password-error", "Mật khẩu không được bỏ trống");
  } else {
    view.setError("email-error", "");
  }

  if (
    !registerInfo.confirmPassword ||
    registerInfo.confirmPassword !== registerInfo.password
  ) {
    view.setError("confirmPassword-error", "Mật khẩu không trùng nhau");
  } else {
    view.setError("email-error", "");
  }

  if (
    !!registerInfo.email &&
    !!registerInfo.password &&
    !!registerInfo.confirmPassword &&
    registerInfo.confirmPassword === registerInfo.password
  ) {
    //Đăng kí người dùng
    //Hàm đăng kí, truyền vào 2 tham số Email và Password
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(
          registerInfo.email,
          registerInfo.password
        );
      await firebase.auth().currentUser.sendEmailVerification();
      view.setActiveScreen("login");
    } catch (error) {
      view.setError("form-error", error.message);
    }
  }
};

controller.login = async loginForm => {
  //1. Validate Form

  //2. Login Firebase
  if (!!loginForm.email && !!loginForm.password) {
    try {
      //2.a Gọi hàm login firebase
      const loginResult = await firebase
        .auth()
        .signInWithEmailAndPassword(loginForm.email, loginForm.password);
      //2.b Kiểm tra người dùng đã xác nhận mai chưa, nếu chưa thì thông báo ra

      if (!loginResult.user.emailVerified) {
        view.setError("form-error", "You need to verify your email");
      } else {
        //2.c Thực hiện lưu dữ liệu
        console.log(loginResult.user);
        model.loginSuccess({
          uid: loginResult.user.uid,
          email: loginResult.user.email
        });
        view.setActiveScreen("chat");
      }
    } catch (error) {
      console.log(error);
      //2.d Show lỗi khi đăng nhập
      view.setError("form-error", error.message);
    }
  }
};

controller.addMessage = newMessage => {
  //1. Tạo message của mình
  const myMessage = {
    content: newMessage,
    user: model.authUser.email,
    createdAt: new Date().toISOString()
  };
  model.addMessage(myMessage);

  // view.addMessage(myMessage);
};
