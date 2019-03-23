 (function(){
	// initialising firebase
	firestore = firebase.firestore();
	const db = firebase.firestore();
	// db.settings({timestampsInSnapshots:true});
	const collection = db.collection('bids');
	
	var docRef = db.collection("bids").get();
	count = 0;
	db.collection("bids").get().then(function(querySnapshot) {
	    querySnapshot.forEach(function(doc) {
	    	count++;
	        // doc.data() is never undefined for query doc snapshots
	        putHTML(count, doc.id, doc.data()['bid_amount'], doc.data()['bidder_name'], doc.data()['score'], '#');
	        console.log(doc.id, " => ", doc.data());
	    });
	});
}());

 function putHTML(count, doc_id, bid_amount, bidder_name, score, profile_link) {
 	$('.count').text(count);
 	var inputHTML = '<div class="card"><a href="' + profile_link + '"><img src="default_author.png" alt="" class="card-img-top"></a><div class="card-body"><div class="post-details"><div class="bid-details"><h2 class="card-title">Bid amount: <span class="values">&#8377;' + (bid_amount) + '</span></h2><h3 class="name">Bidder name: <span class="values">' + (bidder_name) + '</span></h3><h3 class="score">Credibility score: <span class="values">' + (score) + '</span></h3></div><!-- .bid-details --><div class="bid-actions"><a href="' + (profile_link) + '""><button class="see-profile">See Profile</button></a><button data-doc="' + doc_id + '" class="accept-bid">Accept Bid</button></div>';
 	$('.bidder-info').append(inputHTML);
 }

 function acceptBid(doc_id) {
 	console.log($(".bidder-info").find("[data-doc='" + doc_id + "']"));
 }

 $('.accept-bid').click(function() {
 	console.log();
 });