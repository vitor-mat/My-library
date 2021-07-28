
async function signInWithGoogle(){
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

      const nome = document.querySelector("#nome")
      const image = document.querySelector("#btn-google")

      nome.innerHTML = displayName
      image.src = photoURL
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

function test(){
    const constante = firebase.auth
    console.log(constante)
}

document.querySelector("#btn-google").addEventListener("click", signInWithGoogle)

