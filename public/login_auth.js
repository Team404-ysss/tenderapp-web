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

	// getting elements from a form
	const email = document.getElementById('input-email');
	const pwd = document.getElementById('input-password');
	const submit = document.getElementById('btn1');

	//login
	submit.addEventListener('click', e =>{
		const email = email.value;
		const pass = pwd.value;
		const auth  = firebase.auth();
		auth.signInWithEmailAndPassword(email,pass);
		promise.catch(e => console.log(e.message));
	});
}());