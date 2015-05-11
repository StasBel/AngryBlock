function rateGood(info){
   	updateClassificator(info.selectionText, 1)
}

function rateBad(info){
   	updateClassificator(info.selectionText, 0)
}

chrome.contextMenus.create({
	id: "par",
	title: "Update AngryBlock rate system",
    contexts: ["selection"],
})

chrome.contextMenus.create({
	parentId: "par",
	title: "Mark this text as \"Positive\"",
    contexts: ["selection"],
    onclick: rateGood
})

chrome.contextMenus.create({
	parentId: "par",
	title: "Mark this text as \"Negative\"",
    contexts: ["selection"],
    onclick: rateBad
})