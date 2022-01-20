// presents "data" file. A present is a JSON object with the following parameters
// -- title (required): 	displayed in the circle in the main page, can be arbitrary HTML
// -- payload (required): 	the part of the present that will get loaded into the viewer, arbitrary HTML
// -- id (optional): 		an HTML id that will get set on the outer div of the present, so later customizations can be done
// -- callback (optional): 	a function that will get called as the present is being loaded. Must take no arguments
//	if you need arguments, wrap the function with an anonymous function


function YoutubeString(videoId, offset) {
	offset = offset ? offset : 0;
	
	return "<object width='425' height='344'><param name='movie' value='http://www.youtube.com/v/" + videoId + "&hl=en&fs=1&autoplay=1&showinfo=0&rel=0&start=" + offset + "'></param><param name='allowFullScreen' value='true'></param><param name='allowscriptaccess' value='always'></param><embed src='http://www.youtube.com/v/" + videoId + "&hl=en&fs=1&autoplay=1&showinfo=0&rel=0&start=" + offset + "' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' width='425' height='344'></embed></object>";
}

function Mp3String(mp3) {
	return "<object width='300' height='30'><param name='src' value='" + mp3 + "'/><param name='autoplay' value='true' /><embed type='audio/mpeg' src='" + mp3 + "' width='300' height='18' autostart='true' loop='false' /></object>";
}

var presents = [
{ 	
	title: "Boom Boom!", 
	id: "katt",
	payload: "<img src='smooch.jpg' alt='mike rowe' width='400px' height='299px' />"
},
{
	title: "Pleetu Bday !!", 
	id: "map",
	payload: "<img src='bday.jpeg' alt='mike rowe' width='400px' height='299px' />"
},
{
	title: "An year to this!",
	payload: "<img src='year.jpeg' alt='mike rowe' width='400px' height='299px' />"
},
{	// Put Huggie Image here
	title: "Huggieee",
	payload: "<img src='huggie.jpg' alt='mike rowe' width='400px' height='299px' />"
},
{
	title: "Our Song!",
	payload: YoutubeString("mPt0sjn0jSw", 57)
},
{	
	title: "Kissie for Apu",
	payload: "<img src='kiss.jpeg' alt='mike rowe' width='400px' height='299px' />"
},
{
	title: "WOMAN!", 
	payload: "<img src='woman.jpg' alt='mike rowe' width='400px' height='299px' />"
},
{
	title: "Beautiful Apeksha",
	payload: "<img src='beautiful.jpeg' alt='mike rowe' width='400px' height='299px' />"
}
	];
	
	///////// CALLBACKS //////////////
	// These methods are defined in the above presents variable in the "callbacks" label
	// These are called as the present is being loaded into the viewer

	function InitMap() {
		if (GBrowserIsCompatible()) {
			var map = new GMap2(document.getElementById("denver_map"));
			// center on a decent place in Denver
			map.setCenter(new GLatLng(39.75, -105), 13);
			map.setUIToDefault();
		}
	}
	