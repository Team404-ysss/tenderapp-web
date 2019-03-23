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
	$('#logout-link').click(function(e) {
		console.log("DONE");
		e.preventDefault();
		firebase.auth().signOut();
	});
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (!firebaseUser) {
			window.location = "index.html";
		} else {
			console.log("Wrong");
		}
	});
}());