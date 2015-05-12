function getEstimates(titles){
	var xhr = new XMLHttpRequest()

	var json = JSON.stringify({
  		messages: titles
	})

	xhr.open('POST', 'https://stormy-ravine-9552.herokuapp.com/ask', true)
	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')

	var est = new Array()

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200){
			var ansArr = JSON.parse(xhr.responseText)
        	for (var i = 0; i < ansArr.estimates.length; i++) {
        		est[i] = ansArr.estimates[i].rate
        	};
		}
	}

	xhr.send(json)

	return est
}
