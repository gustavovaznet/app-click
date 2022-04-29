//APP

//VARIABLES
var height = 0
var width = 0
var life = 1
var time = 15
var createObjectTime = 1500

var level = window.location.search
level = level.replace('?', '')

//GAME LEVEL
if(level === 'normal') {
	createObjectTime = 1500
} else if(level === 'hard') {
	createObjectTime = 1000
} else if (level === 'hardcore') {
	createObjectTime = 750
}

//SCREEN SIZE
function adjustSizeGameScreen() {
	height = window.innerHeight
	width = window.innerWidth

	console.log(width, height)
}

adjustSizeGameScreen()

var timer = setInterval(function() {

	time -= 1

	if(time < 0) {
		clearInterval(timer)
		clearInterval(criaMosca)
		window.location.href = 'victory.html'
	} else {
		document.getElementById('timer').innerHTML = time
	}
	
}, 1000);

//POSITION
function randomPosition() {

	if(document.getElementById('object')) {
		document.getElementById('object').remove()

		if(life > 3) {

			window.location.href = 'end.html'
		} else {
			document.getElementById('v' + life).src = "img/empty_heart.png"

			life++
		}
	}

	var positionX = Math.floor(Math.random() * width) - 90
	var positionY = Math.floor(Math.random() * height) - 90

	positionX = positionX < 0 ? 0 : positionX
	positionY = positionY < 0 ? 0 : positionY

	console.log(positionX, positionY)

	var object = document.createElement('img')
	object.src = 'img/object.png'
	object.className = randomSize() + ' ' + randomSide()
	object.style.left = positionX + 'px'
	object.style.top = positionY + 'px'
	object.style.position = 'absolute'
	object.id = 'object'
	object.onclick = function() {
		this.remove()
	}

	document.body.appendChild(object)

}

//OBJECT SIZE
function randomSize() {
	var classes = Math.floor(Math.random() * 3)
	
	switch(classes) {
		case 0:
			return 'object1'
		
		case 1:
			return 'object2'

		case 2:
			return 'object3'
	}
}

//OBJECT SIDE
function randomSide() {
	var classes = Math.floor(Math.random() * 2)
	
	switch(classes) {
		case 0:
			return 'sideA'
		
		case 1:
			return 'sideB'

	}
}
