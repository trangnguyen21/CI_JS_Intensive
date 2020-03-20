const model = {};

//1. khởi tại dữ liệu trống
model.authUser = {
  email: "vumytrang.nguyen@gmail"
};
model.activeConversation = undefined;

//2. Hàm cập nhật thông tin sau khi đăng nhập thành công
model.loginSuccess = authUser => {
  model.authUser = authUser;
};

model.addMessage = async newMessage => {
  //1. Khai báo sử dụng firebase firestore
  const db = firebase.firestore();

  //2. Update danh sách mesage
  await db
    .collection("conversations")
    .doc(model.activeConversation.id)
    .update({
      messages: firebase.firestore.FieldValue.arrayUnion(newMessage)
    });
};

model.loadConversation = async () => {
  const db = firebase.firestore();
  await db
    .collection("conversations")
    .where("users", "array-contains", model.authUser.email)
    .onSnapshot(snapshot => {
      console.log(snapshot);
      //1. Kiểm tra xem model.conversations đã tòn tại chưa, nếu chưa thì lấy về
      if (!model.conversations) {
        //1.b lấy tất cả conversation về
        const conversations = snapshot.docChanges().map(item => ({
          id: item.doc.id,
          ...item.doc.data()
        }));
        //1.c
        model.conversations = conversations;
        model.activeConversation = conversations[0];

        for (let message of model.activeConversation.messages) {
          view.addMessage(message);
        }
      } else {
        for (const item of snapshot.docChanges()) {
          //1. Lấy cập nhật mới nhât
          const conversation = {
            id: item.doc.id,
            ...item.doc.data()
          };

          //2. Cập nhật vào các conversations đã có
          for (let i = 0; i < model.conversations.length; i++) {
            if (model.conversations[i].id == conversation.id) {
              model.conversations[i] = conversation;
            }
          }
          //3. Cập nhật vào activeConversations
          if (conversation.id == model.activeConversation.id) {
            model.activeConversation = conversation;
            //3. thêm tin nhắn mới nhất vào danh sách đang active
            view.addMessage(
              conversation.messages[conversation.messages.length - 1]
            );
          }
        }
      }
    });
};
