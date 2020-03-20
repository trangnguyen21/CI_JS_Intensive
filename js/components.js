const components = {};

components.register = `
<div class='register-container'>
<div class='form-wrapper'>
  <div class='logo'>
    <span>Mindx Chat</span>
  </div>
  <div class='form-container'>
    <form id='register-form'>
      <div class='name-wrapper'>
        <div class='input-wrapper'>
          <input class='input' type="text" name="firstName" placeholder="First name" />
          <div class="error" id="firstName-error"></div>
          </div>
        
        <div class='input-wrapper'>
          <input class='input' type="text" name="lastName" placeholder="Last name" />
          <div class="error" id="lastName-error"></div>
          </div>
      </div>
      <div class='input-wrapper'>
        <input class='input' type="email" name="email" placeholder="Email" />
        <div class="error" id="email-error"></div>
      </div>
      <div class='input-wrapper'>
        <input class='input' type="password" name="password" placeholder="Password" />
        <div class="error" id="password-error"></div>
      </div>
      <div class='input-wrapper'>
        <input class='input' type="password" name="confirmPassword" placeholder="Confirm password" />
        <div class="error" id="confirmPassword-error"></div>
      </div>
      <div class="error" id="form-error"></div>
      <div class='input-wrapper register-footer'>
        <a id='already-have-account'>Already have an account? Login</a>
        <button class='btn' type='submit'>
          <span>Register</span>
        </button>
      </div>
    </form>
  </div>
</div>
</div>
`;

components.login = `<div class='register-container'>
<div class='form-wrapper'>
  <div class='logo'>
    <span>Mindx Chat</span>
  </div>
  <div class='form-container'>
    <form id='login-form'>
  
      <div class='input-wrapper'>
        <input class='input' type="email" name="email" placeholder="Email" />
        <div class="error" id="email-error"></div>
      </div>
      <div class='input-wrapper'>
        <input class='input' type="password" name="password" placeholder="Password" />
        <div class="error" id="password-error"></div>
      </div>
      <div class="error" id="form-error"></div>
      <div class='input-wrapper register-footer'>
        <button class='btn' type='submit'>
          <span>Login</span>
        </button>
      </div>
    </form>
  </div>
</div>
</div>`;

components.login = `<div class='register-container'>
 <div class='form-wrapper'>
   <div class='logo'>
     <span>Mindx Chat</span>
   </div>
   <div class='form-container'>
     <form id='login-form'>
   
       <div class='input-wrapper'>
         <input class='input' type="email" name="email" placeholder="Email" />
         <div class="error" id="email-error"></div>
       </div>
       <div class='input-wrapper'>
         <input class='input' type="password" name="password" placeholder="Password" />
         <div class="error" id="password-error"></div>
       </div>
       <div class="error" id="form-error"></div>
       <div class='input-wrapper register-footer'>
         <button class='btn' type='submit'>
           <span>Login</span>
         </button>
       </div>
     </form>
   </div>
 </div>
 </div>`;

components.chat = `<div class="chat-container">

<div class="add-conversation-modal active" id="add-conversation-modal">
<div class="header">
  MindX Chat
</div>
<form id="add-conversation-form">
      <div class='input-wrapper'>
      <input class='input' type="text" name="conversationName" placeholder="Conversation Name">
      </div>
      <div class='input-wrapper'>
      <input class='input' type="text" name="email" placeholder="User email">
      </div>
      <div class="input-wrapper">
      <button class="btn" type="submit">
        <span>Add</span>
      </button>
      <button class="btn cancel-btn" id="cancel-modal-button">
      <span>Cancel</span>
      </button>
      </div>
<form>
</div>

<div class="main">
  <div class="conversation-list">
  <div class="create-conversation">
    <button id="create-conversation" class="btn">+ New Conversation </button>
  </div>
  <div class="conversation-item">
    <span>Conversation A</span>
  </div>
  <div class="conversation-item selected-conversation">
  <span>Conversation B</span>
  </div>
  <div class="conversation-item">
    <span>Conversation C</span>
  </div>


  </div>
  <div class="conversation-detail">
    <div id="conversation-name" class="conversation-header">
      Code Intensive JS
    </div>
    <div class="conversation-messages" id="conversation-messages">
    </div>
    <form name="message-form" id="message-form">
      <div class="conversation-input">
        <input id="message-input" name="message" placeholder="Type your message" />
        <button class="button" type="submit" >Send</button>
      </div>
    </form>
  </div>  
</div>
</div>
`;
