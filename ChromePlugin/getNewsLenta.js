if (window.location.href == 'http://lenta.ru/')
{

//////////////////////////////////////////////////FirstTable    
	var all = document.querySelector("section.b-layout.b-layout_main");   //Getting news from page
	var firstTable = all.querySelector("div.first-item");
    var header = firstTable.querySelector("h2");
    var text = header.querySelector("a");

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ask", false);   //Create request to server
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function()
    {
    	if (xhr.readyState == 4 && xhr.status == 200)   //Check request status
    	{	
    		var answer = JSON.parse(xhr.responseText);
    		for (var i = 0; i < answer.estimates.length; i++)
    			if (answer.estimates[i].rate != 1)
    				firstTable.parentNode.removeChild(firstTable)   //Lock bad news
    	}	
    }
    xhr.send(JSON.stringify({messages: [text.innerHTML]}));   //Send news text to server         
    

///////////////////////////////////////////////////SecondTable
	var headers = all.querySelector("div.items");
	var news = headers.querySelectorAll("a")
    
    var messages = [];
    for (var i = 0; i < news.length; i++)
    	messages[i] = news[i].innerHTML;

	var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ask", false);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function()
    {
    	if (xhr.readyState == 4 && xhr.status == 200)
    	{			
    		var answer = JSON.parse(xhr.responseText);
    		for (var i = 0; i < answer.estimates.length; i++)
    			if (answer.estimates[i].rate != 1)
    				news[i].parentNode.parentNode.removeChild(news[i].parentNode)
    	}	
    }
    xhr.send(JSON.stringify({messages: messages}));  


///////////////////////////////////////////////////ThirdTable
	var thirdTable = document.querySelector("section.b-feature.b-feature_article", false);
	header = thirdTable.querySelector("div.b-feature__header");
	text = header.querySelector("a");

	var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ask", false);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function()
    {
    	if (xhr.readyState == 4 && xhr.status == 200)
    	{			
    		var answer = JSON.parse(xhr.responseText);
    		for (var i = 0; i < answer.estimates.length; i++)
    			if (answer.estimates[i].rate != 1)
    				thirdTable.parentNode.removeChild(thirdTable)
    	}	
    }
    xhr.send(JSON.stringify({messages: [text.innerHTML]}));         


//////////////////////////////////////////////////FourthTable
	var row = all.querySelector("div.row");
	row = row.querySelector("div.row");
	var fourthTable = row.querySelector("div.span4");
	news = fourthTable.querySelectorAll("h3");
	
	messages = [];
	for (var i = 0; i < news.length; i++)
    	messages[i] = news[i].innerHTML;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ask", false);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function()
    {
    	if (xhr.readyState == 4 && xhr.status == 200)
    	{			
    		var answer = JSON.parse(xhr.responseText);
    		for (var i = 0; i < answer.estimates.length; i++)
    			if (answer.estimates[i].rate != 1)
    				news[i].parentNode.parentNode.parentNode.removeChild(news[i].parentNode.parentNode)
    	}	
    }
    xhr.send(JSON.stringify({messages: messages}));  


/////////////////////////////////////////////////FifthTable
	var fifthTable = row.querySelectorAll("div.span4")[1];
	news = fifthTable.querySelectorAll("h3");
	
	messages = [];
	for (var i = 0; i < news.length; i++)
    	messages[i] = news[i].innerHTML;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ask", false);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function()
    {
    	if (xhr.readyState == 4 && xhr.status == 200)
    	{			
    		var answer = JSON.parse(xhr.responseText);
    		for (var i = 0; i < answer.estimates.length; i++)
    			if (answer.estimates[i].rate != 1)
    				news[i].parentNode.parentNode.parentNode.removeChild(news[i].parentNode.parentNode)
    	}	
    }
    xhr.send(JSON.stringify({messages: messages}));  
                                                           

///////////////////////////////////////////////////SixthTable
	var sixthTable = all.querySelector("div.b-yellow-box__wrap");
	news = sixthTable.querySelectorAll("a");

	messages = [];
	for (var i = 0; i < news.length; i++)
		messages[i] = news[i].innerHTML;

	var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ask", false);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function()
    {
    	if (xhr.readyState == 4 && xhr.status == 200)
    	{			
    		var answer = JSON.parse(xhr.responseText);
    		for (var i = 0; i < answer.estimates.length; i++)
    			if (answer.estimates[i].rate != 1)
    				news[i].parentNode.parentNode.removeChild(news[i].parentNode)
    	}	
    }
    xhr.send(JSON.stringify({messages: messages}));  


/////////////////////////////////////////////////////////SeventhTable
	var seventhTable = all.querySelector("div.b-popular.js-popular-block");
	news = seventhTable.querySelectorAll("a");

	messages = [];
	for (var i = 0; i < news.length; i++)
		messages[i] = news[i].innerHTML;

	var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ask", false);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function()
    {
    	if (xhr.readyState == 4 && xhr.status == 200)
    	{			
    		var answer = JSON.parse(xhr.responseText);
    		for (var i = 0; i < answer.estimates.length; i++)
    			if (answer.estimates[i].rate != 1)
    				news[i].parentNode.parentNode.removeChild(news[i].parentNode)
    	}	
    }
    xhr.send(JSON.stringify({messages: messages}));  


////////////////////////////////////////////////////EigthTable
	var eigthTable = seventhTable.parentNode.querySelector("section.b-longgrid-column");
	headers = eigthTable.querySelectorAll("div.article.item");
	
    news = [];
	for (var i = 0; i < headers.length; i++)
		news[i] = headers[i].querySelector("h3");
	for (var i = 0; i < headers.length; i++)
		news[i] = news[i].querySelector("span");

	messages = [];
	for (var i = 0; i < news.length; i++)
		messages[i] = news[i].innerHTML;

	var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ask", false);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function()
    {
    	if (xhr.readyState == 4 && xhr.status == 200)
    	{			
    		var answer = JSON.parse(xhr.responseText);
    		for (var i = 0; i < answer.estimates.length; i++)
    			if (answer.estimates[i].rate != 1)
    				news[i].parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(news[i].parentNode.parentNode.parentNode.parentNode)
    	}	
    }
    xhr.send(JSON.stringify({messages: messages}));


	
	headers = eigthTable.querySelectorAll("h3");
	news = [];
	var tmp = 0;
	for (var i = 0; i < headers.length; i++)
	    if (!headers[i].querySelector("span"))
			news[tmp++] = headers[i].querySelector("a");

	messages = [];
	for (var i = 0; i < news.length; i++)
		messages[i] = news[i].innerHTML;

	var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ask", false);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function()
    {
    	if (xhr.readyState == 4 && xhr.status == 200)
    	{			
    		var answer = JSON.parse(xhr.responseText);
    		for (var i = 0; i < answer.estimates.length; i++)
    			if (answer.estimates[i].rate != 1)
    				news[i].parentNode.parentNode.parentNode.parentNode.removeChild(news[i].parentNode.parentNode.parentNode)
    	}	
    }
    xhr.send(JSON.stringify({messages: messages}));   


/////////////////////////////////////////////////////////NinethTable
	var ninethTable = document.querySelector("section.b-tabloid");
	headers = ninethTable.querySelectorAll("div.b-tabloid__topic");
	
	for (var i = 0; i < headers.length; i++)
		if (headers[i].querySelectorAll("a").length == 1)
			news[i] = headers[i].querySelector("a");
		else
			news[i] = headers[i].querySelectorAll("a")[1];

    messages = [];
	for (var i = 0; i < news.length; i++)
		messages[i] = news[i].innerHTML;  

	var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ask", false);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function()
    {
    	if (xhr.readyState == 4 && xhr.status == 200)
    	{			
    		var answer = JSON.parse(xhr.responseText);
    		for (var i = 0; i < answer.estimates.length; i++)
    			if (answer.estimates[i].rate != 1)
    				news[i].parentNode.parentNode.removeChild(news[i].parentNode)
    	}	
    }
    xhr.send(JSON.stringify({messages: messages}));   

    
}        	                                         	