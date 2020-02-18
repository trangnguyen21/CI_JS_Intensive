const view = {};
    view.setActiveScreen = screenName=> {
        switch(screenName){
            case 'register':
                document.getElementById('app').innerHTML = components.register;
                break;
            case 'login':
                document.getElementById('app').innerHTML = components.login;
                break;
        }
    }


 