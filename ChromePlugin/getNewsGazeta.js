if (window.location.href == 'http://www.gazeta.spb.ru/allnews/')
{
    var main = document.getElementById('main')   //Get news from page
    var divs = main.getElementsByTagName('div')
    var firstTable
    for (var i = 0; i < divs.length; i++)
    {
    	if (divs[i].className.match(/\bcontent\b/))
    	{
    		firstTable = divs[i].getElementsByTagName('div')[0]
    		break;
    	}	
    }
    var newsTable = firstTable.getElementsByTagName('div')[1]

    var messages = []
    var textNews = newsTable.getElementsByTagName('a')   //Getting text of news
    for (var i = 0; i < textNews.length; i++)
    	messages[i] = textNews[i].innerHTML;
   
    var news = newsTable.getElementsByTagName('div');
    

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ask");   //Request to server
    xhr.timeout = 5000;
    var good = 0, bad = 0, del = 0;
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function()
    {
    	if (xhr.readyState == 4 && xhr.status == 200)
    	{
    		var answer = JSON.parse(xhr.responseText);   //Accept and parse answer from server
    		for (var i = 0; i < answer.estimates.length; i++)
    			if (answer.estimates[i].rate != 1)
    				textNews[i].style.color="red";   //Highlight text in red
    	}	
    }   

    xhr.send(JSON.stringify({messages: messages}));   //Send news text 
}
