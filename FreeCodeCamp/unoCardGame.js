//receive ajax call for suit and rank
//select card div
//add color
//add rank
//repeat for all cards in hand
//repeat for discard pile
$(document).ready(function() {
    function drawPicOfCard(suit, rank) {
        var color=this.suit;
        var cardRank=this.rank;
        $(".card").css('background-color', color);
        $(".rank1, .rank2, .rank3").append(cardRank);      
    }
    
    function arrayOfHand() {
        
    }
    
    
    var example = {
	deck: 72,
	discardRank: "Draw 2",
	discardSuit: "Yellow",
	players: [
		{
			name: "Dan",
			hand: [
				{
					cardRank: "7",
					cardSuit: "yellow"
				},
				{
					cardRank: "Reverse",
					cardSuit: "blue"
				},
				{
					cardRank: "Wild",
					cardSuit: ""
				},
				{
					cardRank: "0",
					cardSuit: "green"
				},
				{
					cardRank: "2",
					cardSuit: "yellow"
				},
				{
					cardRank: "Skip",
					cardSuit: "red"
				},
				{
					cardRank: "5",
					cardSuit: "blue"
				}
				
			]
		},
		{
			name: "David",
			hand: 7
		},
		{
			name: "John",
			hand: 7
		},
		{
			name: "Kent",
			hand: 7
		}
	]
};

}
                  
