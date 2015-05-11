function setInitialSettings(){
	function setBlockNewsSettings(){
		chrome.storage.local.get("isNeedToBlockNews", function(obj){
			if (typeof(obj.isNeedToBlockNews) == "undefined"){
				document.getElementById("isdel_checkbox").checked = false
				chrome.storage.local.set({"isNeedToBlockNews": false})
			}else {
				document.getElementById("isdel_checkbox").checked = obj.isNeedToBlockNews
			}
		})
	}

	document.addEventListener( "DOMContentLoaded", function() {setBlockNewsSettings()})

	function setTransparencySettings(){
		chrome.storage.local.get("transparencyLevel", function(obj){
			if (typeof(obj.transparencyLevel) == "undefined"){
				document.getElementById("transparency_range").value = 0.25
				chrome.storage.local.set({"transparencyLevel": 0.25})
			}else {
				document.getElementById("transparency_range").value = obj.transparencyLevel
			}
		})
	}

	document.addEventListener( "DOMContentLoaded", function() {setTransparencySettings()})
}

function setChangeSettings(){
	function changeBlockNewsSettings(){
		chrome.storage.local.set({"isNeedToBlockNews": document.getElementById("isdel_checkbox").checked})
	}

	document.getElementById("isdel_checkbox").addEventListener("change", function() {changeBlockNewsSettings()})

	function changeTransparencySettings(){
		chrome.storage.local.set({"transparencyLevel": document.getElementById("transparency_range").value})
	}

	document.getElementById("transparency_range").addEventListener("change", function() {changeTransparencySettings()})
}

function updateCounters(response){
	document.getElementById("blocked_result").innerHTML = response.blocked
	document.getElementById("positive_result").innerHTML = response.positive
	document.getElementById("negative_result").innerHTML = response.negative
}

function getCurrentNumbers(){
	updateCounters({
		blocked: 0,
		positive: 0,
		negative: 0
	})
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		chrome.tabs.sendMessage(tabs[0].id, {request_type: "get_counters"}, function(response) {
    		updateCounters(response)
  		})
	})
}

setInitialSettings()
setChangeSettings()
getCurrentNumbers()