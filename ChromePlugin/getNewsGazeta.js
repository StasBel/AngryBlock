if (window.location.href == 'http://www.gazeta.spb.ru/allnews/')
{
    var main = document.getElementById('main')
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
    var textNews = newsTable.getElementsByTagName('a')
    for (var i = 0; i < textNews.length; i++)
    	messages[i] = textNews[i].innerHTML;



    var news = newsTable.getElementsByTagName('div');
    console.log(news.length);
    var xhr = new XMLHttpRequest();
    newsTable.removeChild(news[2]);
    //xhr.open("POST", "http://192.168.210.5:33507/ask");
    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ask");
    xhr.timeout = 5000;
    var good = 0, bad = 0, del = 0;
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function(){
    	console.log(xhr.status);
    	if (xhr.readyState == 4 && xhr.status == 200)
    	{
    		var answer = JSON.parse(xhr.responseText);
    		console.log(answer.estimates.length);
    		for (var i = 0; i < answer.estimates.length; i++)
    			if (answer.estimates[i].rate < 0.8)
    			{
    				//newsTable.removeChild(news[i * 2 - del]);
    				bad++;
    				del += 2;	
    				textNews[i].style.color="red";
    			}
    			else
    				good++;
    		console.log(good);
    		console.log(bad);
    	}	
    }   

    xhr.send(JSON.stringify({messages: messages}));  
}
