// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");
var Article = require(".models/schema.js");

//Make a request call for the NY Times website. So that the HTML is saved as the callbacks argument
module.exports = function(app){
	request("https:nytimes.com/", function(errror, response, html){

		//Load HTML into cheerio and save in a variable
		//'$' is cheerio's selector command 
		var $ = cheerio.load(html);

		//empty array to save the data scraped
		var result = [];

		//with cheerio, find each h2 tag with the "story-heading" class
		//(i: iterator. element: thecurrent element)
		$("h2.story-heading").each(function(i, element){

			// Save the text of the elemt this in a tittle variable
			var tittle = $(this).text().trim();

			// In the currently selected element, look at its child element
			var link = $(element).children().attr("href");

			// Save these results in a object that will be push into the result array
			if (tittle === undefined || tittle === ""){
				result.push({
					tittle: "Missing Tittle",
					link: link

				});

			}else if (link === undefined || link === "") {
				result.push({
					tittle: tittle,
					link: "Missing Link"
				});
			}else {
				result.push({
					tittle: tittle,
					link: link
				});
			}

			//save the array in the database
			var newInfo = new Article({
				tittle: tittle,
				link: link
			});

			newsInfo.save(function(err){
				if(err){
					console.log(err);
				}else{
					console.log(newsInfo);
				}
			});
		});

		//Log the result once cheerio analyzes each of its selected elements
        console.log(result.slice(0, 21));

	});
}