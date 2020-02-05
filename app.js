//PETS APP
var express = require("express"), 
	app = express(), 
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	methodOverride = require("method-override")

//USER AUTH AND PASSPORT DEFINITIONS//////////////////

/////////////////////////////////////////////


mongoose.connect("mongodb://localhost/pets_App", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride("_method_"));

var petSchema = new mongoose.Schema({
	name: String,
	image: String,
	age: Number,
	bio: String,
});

var Pet = mongoose.model("pet", petSchema);

var postSchema = new mongoose.Schema({
	text: String,
	author: String,
});

var post = mongoose.model("post", postSchema);

//PASSPORT ACTIVATION/CONFIGURATION/////////////////////////////




//////////////////////////////////////////////////////////////




////////////////////////////////////////////SEEDING THE DB
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




		seedDB();
////////////////////////////////////////////////////////


//Regular Routes

//INDEX
app.get("/", function(req, res){
	res.render("landing")
});


app.get("/myPets", function(req, res){
	Pet.find({}, function(err, pets){
		if(err){
			console.log("ERROR");
		} else {
			res.render("myPets", {pets: pets});
		}
	});
});

//NEW
app.get("/myPets/new", function(req, res){
	res.render("new");
});

//CREATE 
app.post("/myPets", function(req, res){
	//create pet
	Pet.create(req.body.pet, function(err, newPet){
		if(err){
			res.render("new");
		} else {
			res.redirect("/myPets");
		}
	});
});


/////////////////////////////////SOCIAL MEDIA POSTS ROUTES
app.get("/myPets/newPost/:id", function(req, res){
	Pet.findById(req.params.id).exec(function(err,
	foundPetfornewpost){
		if(err){
			console.log(err);
		} else {
			console.log(foundPetfornewpost)
			res.render("newPost", {pet: foundPetfornewpost});
		} 
	});
	
});

//newsfeed
app.get("/newsFeed", function(req, res){
	post.find({}, function(err, posts){
		if(err){
			console.log("ERROR");
		} else {
			res.render("newsfeed", {post: posts});
		}
	})
	
});

//posting to newsfeed (where it gets tricky)
app.post("/newsFeed", function(req, res){
	post.create(req.body.post, function(err, newPost){
		if(err){
			res.render("newPost");
		} else {
			res.redirect("/newsFeed");
		}
	});
});



///////REGISTRATION/LOGIN STUFF////////////////////////////////////////////
//sign up page route



//code to handle sign up/registration

///////////////////////////////////////////////////////////////////////

app.listen(3000, function(){
	console.log("petApp deploying. listening on P3000");
});
