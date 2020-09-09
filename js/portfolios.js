var $ = jQuery.noConflict();
const icons = [
	[
		[{
			name: "Vitalik Buterin",
			src: "./images/parallax/vitalik-buterin.jpg",
			href: "https://twitter.com/VitalikButerin"
		},
			{
				name: "Justin Sun",
				src: "./images/parallax/JUSTIN.jpg",
				href: "https://twitter.com/justinsuntron"
			},
				{
				name: "Charles Ponzi",
				src: "./images/parallax/CharlesPonzi.jpg",
				href: "https://en.wikipedia.org/wiki/Charles_Ponzi"
			},
			{
				name: "Unicorn",
				src: "./images/parallax/unicorn.jpg",
				href: "https://uniswap.org/"
			},
			{
				name: "Carlos Matos",
				src: "./images/parallax/Carlos-Matos.jpg",
				href: "https://www.youtube.com/watch?v=e5nyQmaq4k4"
			},
			{
				name: "Sergei Mavrodi",
				src: "./images/parallax/SergeiMavrodi.jpg",
				href: "https://mmmglobal.world/"
			}
		]
	]
	

];
const gLength = icons.length;
const nextButton = $("#next-button");
const prevButton = $("#prev-button");
const gallery = $(".ig-wrapper");
const galleryM = $('.portfolio-wrapper-m');
const pagination = $(".page-dot-wrapper");
var timer = setInterval(function () {
	$(`#ig-dot${currentIndex}`).css("opacity", 0.4);
	currentIndex < gLength - 1 ? currentIndex++ : (currentIndex = 0);
	gallery.css("left", -currentIndex * 1040 + "px");
	$(`#ig-dot${currentIndex}`).css("opacity", 1);
}, 15000);
var currentIndex = 0;

gallery.css("left", -currentIndex * 1040 + "px");
icons.forEach((d, i) => {
	gallery.append(`<div class='icon-group' id=${"ig" + i}></div>`);
	pagination.append(`<div class="page-dot" id=${"ig-dot" + i}></div>`);
	d.forEach((dd, di) => {
		$(`#ig${i}`).append(`<div class='icon-group-inner' id=${"ig-inner" + i + "-" + di}></div>`);
		dd.forEach(ddd => {
			$(`#ig-inner${i}-${di}`).append(
				`<a class='icon-group-item' href='${ddd.href}' target='_blank'><img class='icon-group-item-img' src='${
					ddd.src
				}'/><div class='icon-group-item-text'>${ddd.name}</div></a>`
			);
		});
	});
});
$(`#ig-dot${currentIndex}`).css("opacity", 1);
nextButton.click(function () {
	window.clearInterval(timer);
	$(`#ig-dot${currentIndex}`).css("opacity", 0.4);
	currentIndex < gLength - 1 ? currentIndex++ : (currentIndex = 0);
	gallery.css("left", -currentIndex * 1040 + "px");
	$(`#ig-dot${currentIndex}`).css("opacity", 1);
	timer = setInterval(function () {
		$(`#ig-dot${currentIndex}`).css("opacity", 0.4);
		currentIndex < gLength - 1 ? currentIndex++ : (currentIndex = 0);
		gallery.css("left", -currentIndex * 1040 + "px");
		$(`#ig-dot${currentIndex}`).css("opacity", 1);
	}, 15000);
});

prevButton.click(function () {
	window.clearInterval(timer);
	$(`#ig-dot${currentIndex}`).css("opacity", 0.4);
	currentIndex > 0 ? currentIndex-- : (currentIndex = gLength - 1);
	gallery.css("left", -currentIndex * 1040 + "px");
	$(`#ig-dot${currentIndex}`).css("opacity", 1);
	timer.reset(15000);
	timer = setInterval(function () {
		$(`#ig-dot${currentIndex}`).css("opacity", 0.4);
		currentIndex < gLength - 1 ? currentIndex++ : (currentIndex = 0);
		gallery.css("left", -currentIndex * 1040 + "px");
		$(`#ig-dot${currentIndex}`).css("opacity", 1);
	}, 15000);
});

icons.forEach((d, i) => {
	d.forEach((dd, di) => {
		dd.forEach((ddd, ddi) => {
			ddi % 2 === 0 ? galleryM.append(`<div class='mobile-icon-row' id=${'igm'+ i + '-' + di + '-' + (ddi / 2)}><a class='icon-group-item-m' href='${ddd.href}' target='_blank'><img class='icon-group-item-m-img' src='${ddd.src}'/><div class='icon-group-item-m-text'>${ddd.name}</div></a></div>`)
			: $(`#igm${i}-${di}-${(ddi - 1) / 2 }`).append(`<a class='icon-group-item-m' href='${ddd.href}' target='_blank'><img class='icon-group-item-m-img' src='${ddd.src}'/><div class='icon-group-item-m-text'>${ddd.name}</div></a>`)
		});
	});
});