 (function(){
	// initialising firebase
	const config = {
	    apiKey: "AIzaSyAhMIyNFN31gW9YYHxTvz3T5FSJ4Sx1Uek",
	    authDomain: "tender-261f1.firebaseapp.com",
	    databaseURL: "https://tender-261f1.firebaseio.com",
	    projectId: "tender-261f1",
	    storageBucket: "tender-261f1.appspot.com",
	    messagingSenderId: "175461595113"
	};
	firebase.initializeApp(config);
	auth = firebase.auth();
	$('#btn1').click(function(e) {
		e.preventDefault();
		// console.log($('#input-password').val(), $('#confirm-password').val());
		if ($('#input-password').val() !== $('#confirm-password').val()) {
			alert("Passwords don't match");
		}
		auth.createUserWithEmailAndPassword($('#input-email').val(), $('#input-password').val());
	});
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			window.location = "new_user.html";
		}
	});
}());