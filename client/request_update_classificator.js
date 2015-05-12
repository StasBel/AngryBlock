function updateClassificator(title, estimate){
	var xhr = new XMLHttpRequest()

	var json = JSON.stringify([{
  		message: title,
  		isGood: estimate
	}])

	xhr.open('POST', 'https://stormy-ravine-9552.herokuapp.com/ans', false)
	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200){
			//...
		}
	}

	xhr.send(json)
}