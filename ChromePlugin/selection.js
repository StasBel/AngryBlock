document.onkeydown = function(event) 
{
	var xhr = new XMLHttpRequest();   //Create request
	if (event.altKey && event.ctrlKey && event.keyCode == 71)   //Check shortcut   Ctrl+Alt+G
	{
        if (document.getSelection) 
        {
		    var selection = document.getSelection();   //Get the selected text
		    xhr.open("POST", "https://stormy-ravine-9552.herokuapp.com/ans");   //Request to the server
			xhr.timeout = 5000;
			xhr.setRequestHeader("Content-Type", "text/plain");
			var tmp = new String(selection);
			xhr.onreadystatechange = function()
			{
            	if (xhr.readyState == 4 && xhr.status == 200)	
            		alert(xhr.responseText);   //Alert server answer	 
            }
			xhr.send(JSON.stringify([{message: tmp, isGood: 1}]));   //Send selected text                                       
		}     
	}
    else if (event.altKey && event.ctrlKey && event.keyCode == 66)   //Check shortcut Ctrl+Alt+B
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
   
