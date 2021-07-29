  let id = "vitcholas"
  let userName = "Vitão"
  let avatar = "Vitor"



function nextPage(){

    window.location.href = "http://127.0.0.1:5500/pages/home.html"
}


export function signInWithGoogle(){

    let provider =  new firebase.auth.GoogleAuthProvider();

    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.

      const  { displayName, photoURL, uid } = result.user;

      nextPage()

      user.name = "displayName"
      user.avatar = "photoURL"
      user.id =" uid"

      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

export function test(){
  userName = "displayName"
  avatar = "photoURL"
  id = "uid"

  nextPage()
}

export{
  id,
  userName,
  avatar
}