// window.onload = () => {
// view.setActiveScreen('register');

// };
let getSignUp = document.getElementById('signup-button')
getSignUp.addEventListener('click', function (item) {
    item.preventDefault();
    /*---------------------------------------------*/
    let user = {
        Name: document.getElementById('name-input').value,
        email: document.getElementById('email-input').value,
        UserName: document.getElementById('username-input').value,
        password: document.getElementById('password-input').value,
        confilmpassword: document.getElementById('confilm').value
    }
    /*---------CHECK-EMAIL--------*/
    const mail = document.getElementById('email-input')
    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.value.match(mailformat)) {
            return true;
        }
        else {
            mail.value = ''
            return false;
        }
    }
    const checks = ValidateEmail(mail)

    /*---------END-CHECK EMAIL---*/

    /*---------CHECK-INPUT--------*/
    function Check(user) {
        if (user.Name == "" || user.email == "" || user.UserName == "" || user.password == "" || user.confilmpassword == "") {
            return 0;
        } else {
            return 1;
        }
    }
    /*-------------------------------*/

    const check = Check(user)
    
        if (check == 1) {
            if(checks){
            /*-------SOSANH PASSWORD VS CONFILM PASSWORD-----*/
                if (user.password == user.confilmpassword) {
                    /*------------GET DATA SOSANH INPUT-EMAIL ----------*/
                    async function data(user) {
                        let request = await fetch('http://5dfe28f303f98e0014e92871.mockapi.io/api/v1/user')
                        let data = await request.json()
                        let find = data.filter(function (item) {
                            return item.email == user.email
                        })
                        if (find.length != 0) {
                            /* email used*/
                            window.location.href = "google.com"
                        } else { return 100 }
                    }
                    /*---------------------------------------------------*/

                    async function postdata(user) {
                    const check = await data(user)
                    if (check == 100) {
                        const setting = {
                            method: "POST",
                            body: JSON.stringify(user),
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            }
                        }
                        /*---------------POST DATA ->API--------------*/
                        const response = await fetch('http://5dfe28f303f98e0014e92871.mockapi.io/api/v1/user', setting)
                        if (!response.ok) throw Error(response.message);

                        try {
                            const data = await response.json();
                            return data;
                        }
                        catch (err) {
                            throw err;
                        }

                    } else {
                        return 0;
                    }
                     }
                 
                     /*-----------SIGNUP SUCCESS------------------*/
                 
                     async function getpost() {
                         let resutl = await postdata(user)
                         if (resutl != 0) {
                             window.location.href = "www.google.com"
                         }
                     }
                     data(user)
                     getpost()
                 
                     /* ---case password != confilmlpassword------*/
                } else {/*-----FAIL-PASSWORD-----*/
                    let password = document.getElementById('confilm')
                    password.value = "";
                    let erro =document.getElementById('message-erro')
                    erro.innerHTML=`<p id='mg-erro'>Mật khẩu nhập lại bị sai!<p>`
                }
            }else{/*------END-FAIL-EMAIL---*/
                let erro =document.getElementById('message-erro')
                erro.innerHTML=`<p id='mg-erro'>Nhập lại Email!<p>`
            }
        } else {/*-----END FAIL INPUT-----*/
            let erro =document.getElementById('message-erro')
            erro.innerHTML=`<p id='mg-erro'>Nhập đầy đủ thông tin!<p>`
        }
    
})