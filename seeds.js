//SEEDING DATABASE FOR PET APP
var mongoose = require("mongoose");
var Pet = require("./app");

var data = [
	
	{
		name: "George",
		image: "https://s28164.pcdn.co/files/sea-turtle-iStock_000011381141Large-e1547156592926-1280x720.jpg",
		age: "94",
		bio: "orem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa."
	},
	{
		name: "Bucky",
		image: "https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548__340.jpg",
		age: "5",
		bio: "row itself, let it be sorrow; let him love it; let him pursue it, ishing for its acquisitiendum. Because he will ab hold, uniess but through concer, and also of those who resist. Now a pure snore disturbeded sum dust. He ejjnoyes, in order that somewon, also with a severe one, unless of life. "			
	},
	{
		name: "Elliot",
		image: "http://dickinsoncountyconservationboard.com/wp-content/uploads/sites/2/2017/10/IMG_5241.jpg",
		age: "10",
		bio: "Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu."	
		
	}
	
]

function seedDB(){
	Pet.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed pets");
		
		data.forEach(function(seed){
			Pet.create(seed, function(err, pet){
				if(err){
					console.log(err)
				} else {
					console.log("added pet");
				}
			});
		});
	});
};




module.exports = seedDB;