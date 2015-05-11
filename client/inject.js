//arrays calc

elementsList = document.querySelectorAll("div[class^='news_item']")

function getTitleText(id){
	var element = elementsList[id].getElementsByClassName("colm_preview_post")[0].getElementsByClassName("title")[0].getElementsByTagName("a")[0]
	return element.innerHTML
}

titlesList = new Array()
for (var i = 0; i < elementsList.length; i++) {
	titlesList[i] = getTitleText(i);
};

estimatesList = getEstimates(titlesList)

//clearing spaces

clearElements = document.getElementsByClassName("clear")

for (var i = clearElements.length - 2; i >= 0; i--) {
	clearElements[i].remove()
}

//clearing adds

addsElements = document.getElementsByClassName("group")[0].querySelectorAll("div[class^='mgs']")

for (var i = addsElements.length - 1; i >= 0; i--) {
	addsElements[i].remove()
}

document.getElementsByClassName("group")[0].getElementsByTagName("style")[0].remove()

//useful funcs

goodEmount = 0
blockEmount = 0
badEmount = 0

function goodButton(id){
	updateClassificator(titlesList[id], 1)
}

function badButton(id){
	updateClassificator(titlesList[id], 0)
}

function isGood(estimate){
	if (estimate >= 0){
		return true;
	}else {
		return false;
	}
}

function addButtons(id){
	var element = elementsList[id].getElementsByClassName("colm_preview_post")[0]
	var buttons = ""
	buttons += "<table style='width: 100%; border-spacing: 0;'><tr><td><div align='left'><button style='background-color: green; color: white;' id='goodButton-" + id + "'>GOOD</button></div></td>"
	buttons += "<td><div align='right'><button style='background-color: red; color: white;' id='badButton-" + id + "'>BAD</button></div></td></tr></table>"
	element.innerHTML = element.innerHTML + buttons
	document.getElementById("goodButton-" + id).addEventListener("click", function(id) { return function() {goodButton(id)}}(id), false)
	document.getElementById("badButton-" + id).addEventListener("click", function(id) { return function() {badButton(id)}}(id), false)
}

function updateHTMLStructure(id){
	var notBlocked = id + 1 - blockEmount
	if (notBlocked % 3 == 0){
		elementsList[id].className = "news_item last mgs_marb_20"
	}else {
		elementsList[id].className = "news_item mgs_marb_20"
		if (notBlocked % 3 == 1 && notBlocked > 1){
			var newSpace = document.createElement("div")
			newSpace.className = "clear"
			elementsList[id].parentNode.insertBefore(newSpace, elementsList[id])
		}
	}
}

function changeBackgroundColor(id, color, transparencyLevel){
	var element = elementsList[id].getElementsByClassName("colm_preview_post")[0]
	if (color == "green"){
		element.style["background-color"] = "rgba(0, 128, 0, " + transparencyLevel + ")"
	}else {
		element.style["background-color"] = "rgba(256, 0, 0, " + transparencyLevel + ")"
	}
}

function addNews(id, type, transparencyLevel){
	addButtons(id)
	updateHTMLStructure(id)
	if (type == "good"){
		changeBackgroundColor(id, "green", transparencyLevel)
	}else {
		changeBackgroundColor(id, "red", transparencyLevel)
	}
}

function showPage(){
	document.body.style.display = "inline"
}

//adding buttons

function addingButtonsAndBlock(){
	chrome.storage.local.get("isNeedToBlockNews", function(obj1){
		if (typeof(obj1.isNeedToBlockNews) == "undefined"){
			obj1.isNeedToBlockNews = false
			chrome.storage.local.set({"isNeedToBlockNews": false})	
		}
		chrome.storage.local.get("transparencyLevel", function(obj2){
			if (typeof(obj2.transparencyLevel) == "undefined"){
				obj2.transparencyLevel = 0.25
				chrome.storage.local.set({"transparencyLevel": 0.25})
			}
			for (var id = 0; id < elementsList.length; id++) {
				if (isGood(estimatesList[id])){
					goodEmount++
					addNews(id, "good", obj2.transparencyLevel);
				}else {
					if (obj1.isNeedToBlockNews){
						blockEmount++
						elementsList[id].remove()
					}else {
						badEmount++;
						addNews(id, "bad", obj2.transparencyLevel);
					}
				}
			}
			showPage()
		})
	})
}

addingButtonsAndBlock()

//response event

chrome.runtime.onMessage.addListener(
  	function(request, sender, sendResponse) {
  		if (request.request_type == "get_counters"){
  			sendResponse({
  				blocked: blockEmount,
  				positive: goodEmount,
  				negative: badEmount
  			})
  		}
 });