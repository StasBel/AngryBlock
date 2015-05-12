function updateClassificator(title, estimate){
	var xhr = new XMLHttpRequest()

	var json = JSON.stringify([{
  		message: title,
  		isGood: estimate
	}])

	xhr.open('POST', 'https://stormy-ravine-9552.herokuapp.com/ans', false)
	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')

	xhr.onreadystatechange = function() {
		console.log("readyState: " + xhr.readyState + ", status: " + xhr.status)
		if (xhr.readyState == 4 && xhr.status == 200){
			console.log("OK")
		}
	}

	xhr.send(json)
}