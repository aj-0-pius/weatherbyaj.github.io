const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88284519fbmshf94f0fefa0733efp16fcfajsn6e01a7ef483a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city) => {
	cityName.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			//cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

		})
		.catch(err => console.error(err));
};
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getweather(city.value)

})

getweather("Pabna")
$(document).ready(function () {
	// toggle menu/navbar script
	$('.menu-btn').click(function () {
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

});

const Dhaka = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88284519fbmshf94f0fefa0733efp16fcfajsn6e01a7ef483a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dhaka', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pctdhaka.innerHTML = response.cloud_pct
		tempdhaka.innerHTML = response.temp
		feels_likedhaka.innerHTML = response.feels_like
		humiditydhaka.innerHTML = response.humidity
		min_tempdhaka.innerHTML = response.min_temp
		max_tempdhaka.innerHTML = response.max_temp
		wind_speeddhaka.innerHTML = response.wind_speed
		wind_degreesdhaka.innerHTML = response.wind_degrees
		sunrisedhaka.innerHTML = response.sunrise
		sunsetdhaka.innerHTML = response.sunset


	})
	.catch(err => console.error(err));


const Rajshahi = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88284519fbmshf94f0fefa0733efp16fcfajsn6e01a7ef483a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Rajshahi', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pctrajshahi.innerHTML = response.cloud_pct
		temprajshahi.innerHTML = response.temp
		feels_likerajshahi.innerHTML = response.feels_like
		humidityrajshahi.innerHTML = response.humidity
		min_temprajshahi.innerHTML = response.min_temp
		max_temprajshahi.innerHTML = response.max_temp
		wind_speedrajshahi.innerHTML = response.wind_speed
		wind_degreesrajshahi.innerHTML = response.wind_degrees
		sunriserajshahi.innerHTML = response.sunrise
		sunsetrajshahi.innerHTML = response.sunset


	})
	.catch(err => console.error(err));


const Chittagong = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88284519fbmshf94f0fefa0733efp16fcfajsn6e01a7ef483a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chittagong', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pctchittagong.innerHTML = response.cloud_pct
		tempchittagong.innerHTML = response.temp
		feels_likechittagong.innerHTML = response.feels_like
		humiditychittagong.innerHTML = response.humidity
		min_tempchittagong.innerHTML = response.min_temp
		max_tempchittagong.innerHTML = response.max_temp
		wind_speedchittagong.innerHTML = response.wind_speed
		wind_degreeschittagong.innerHTML = response.wind_degrees
		sunrisechittagong.innerHTML = response.sunrise
		sunsetchittagong.innerHTML = response.sunset


	})
	.catch(err => console.error(err));


const Barisal = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88284519fbmshf94f0fefa0733efp16fcfajsn6e01a7ef483a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Barisal', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pctBarisal.innerHTML = response.cloud_pct
		tempBarisal.innerHTML = response.temp
		feels_likeBarisal.innerHTML = response.feels_like
		humidityBarisal.innerHTML = response.humidity
		min_tempBarisal.innerHTML = response.min_temp
		max_tempBarisal.innerHTML = response.max_temp
		wind_speedBarisal.innerHTML = response.wind_speed
		wind_degreesBarisal.innerHTML = response.wind_degrees
		sunriseBarisal.innerHTML = response.sunrise
		sunsetBarisal.innerHTML = response.sunset


	})
	.catch(err => console.error(err));


const Khulna = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88284519fbmshf94f0fefa0733efp16fcfajsn6e01a7ef483a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Khulna', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pctkhulna.innerHTML = response.cloud_pct
		tempkhulna.innerHTML = response.temp
		feels_likekhulna.innerHTML = response.feels_like
		humiditykhulna.innerHTML = response.humidity
		min_tempkhulna.innerHTML = response.min_temp
		max_tempkhulna.innerHTML = response.max_temp
		wind_speedkhulna.innerHTML = response.wind_speed
		wind_degreeskhulna.innerHTML = response.wind_degrees
		sunrisekhulna.innerHTML = response.sunrise
		sunsetkhulna.innerHTML = response.sunset


	})
	.catch(err => console.error(err));


// //const Mymensingh = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '88284519fbmshf94f0fefa0733efp16fcfajsn6e01a7ef483a',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mymensingh', options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response)
// 		cloud_pctrMymensingh.innerHTML = response.cloud_pct
// 		temprMymensingh.innerHTML = response.temp
// 		feels_likerMymensingh.innerHTML = response.feels_like
// 		humidityrMymensingh.innerHTML = response.humidity
// 		min_temprMymensingh.innerHTML = response.min_temp
// 		max_temprMymensingh.innerHTML = response.max_temp
// 		wind_speedrMymensingh.innerHTML = response.wind_speed
// 		wind_degreesrMymensingh.innerHTML = response.wind_degrees
// 		sunriserMymensingh.innerHTML = response.sunrise
// 		sunsetrMymensingh.innerHTML = response.sunset


// 	})
// 	.catch(err => console.error(err));


const Rangpur = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88284519fbmshf94f0fefa0733efp16fcfajsn6e01a7ef483a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Rangpur', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pctrangpur.innerHTML = response.cloud_pct
		temprangpur.innerHTML = response.temp
		feels_likerangpur.innerHTML = response.feels_like
		humidityrangpur.innerHTML = response.humidity
		min_temprangpur.innerHTML = response.min_temp
		max_temprangpur.innerHTML = response.max_temp
		wind_speedrangpur.innerHTML = response.wind_speed
		wind_degreesrangpur.innerHTML = response.wind_degrees
		sunriserangpur.innerHTML = response.sunrise
		sunsetrangpur.innerHTML = response.sunset


	})
	.catch(err => console.error(err));


const Sylhet = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88284519fbmshf94f0fefa0733efp16fcfajsn6e01a7ef483a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sylhet', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pctsylhet.innerHTML = response.cloud_pct
		tempsylhet.innerHTML = response.temp
		feels_likesylhet.innerHTML = response.feels_like
		humiditysylhet.innerHTML = response.humidity
		min_tempsylhet.innerHTML = response.min_temp
		max_tempsylhet.innerHTML = response.max_temp
		wind_speedsylhet.innerHTML = response.wind_speed
		wind_degreessylhet.innerHTML = response.wind_degrees
		sunrisesylhet.innerHTML = response.sunrise
		sunsetsylhet.innerHTML = response.sunset


	})
	.catch(err => console.error(err));







