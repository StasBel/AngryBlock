document.onkeydown = function(event) 
{
	//alert("aaa");
	var xhr = new XMLHttpRequest();
	if (event.altKey && event.ctrlKey && event.keyCode == 71) 
	{
        if (document.getSelection) 
        {
		    var selection = document.getSelection();
		    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ans");
			xhr.timeout = 5000;
			xhr.setRequestHeader("Content-Type", "text/plain");
			var tmp = new String(selection);
			xhr.onreadystatechange = function()
			{
            	if (xhr.readyState == 4 && xhr.status == 200)	
            		alert(xhr.responseText);	 
            }
			xhr.send(JSON.stringify([{message: tmp, isGood: 1}]));                                       
		}     
	}
    else if (event.altKey && event.ctrlKey && event.keyCode == 66) 
    {
    	if (document.getSelection) 
        {
		    var selection = document.getSelection();
		    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ans");
			xhr.timeout = 5000;
			xhr.setRequestHeader("Content-Type", "text/plain");
			var tmp = new String(selection);
			xhr.onreadystatechange = function()
			{
            	if (xhr.readyState == 4 && xhr.status == 200)
            		alert(xhr.responseText);	 
            }
			xhr.send(JSON.stringify([{message: tmp, isGood: 0}]));                                       
		}
    }	
}
   
