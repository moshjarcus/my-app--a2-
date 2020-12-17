import firebase from 'firebase';

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    // initialize firebase with the info from my firebase
    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyAp2X36TWp2FLoB1A4210EHAM5-wHd3flg",
                authDomain: "chat-app-98ddb.firebaseapp.com",
                databaseURL: "https://chat-app-98ddb.firebaseio.com",
                projectId: "chat-app-98ddb",
                storageBucket: "chat-app-98ddb.appspot.com",
                messagingSenderId: "777087493",
                appId: "1:777087493:web:d38143c6ecc7c8f72eca6c"
              })
        }
    }


    // check for authentication, Anonymous Auth must be enabled in Firebase's console. 
    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user =>{
            if (!user){
                firebase.auth().signInAnonymously();
            }
        });
    };

    // send command, push the new message into the database.
    send = (messages) =>{
        messages.forEach(item =>{
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message)
        })
    }

    // create the message object. 
    parse = (message) => {
        const {user, text, timestamp} =  message.val();
        const {key: _id } = message;
        const createdAt =  new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };

    };


    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    }

    off(){
        this.db.off();
    }

    //firebase database collection called "messages"
    get db() {
        return firebase.database().ref("messages");
    }

    // get the uid of the current user
    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();