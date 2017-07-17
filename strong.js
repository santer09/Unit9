//create a list of all bold items
var wordItems;
window.onload = getItems();

//collect all <strong> tags
function getItems(){
wordItems = document.getElementsByTagName('strong');
}

//go through all bold tags and change color
function highlight(){
	for(var i=0; i<wordItems.length; i++)
		wordItems[i].style.color = "red";
}

//on mouse out the words go back to normal color
function return_normal(){
	for(var i=0; i<wordItems.length; i++)
		wordItems[i].style.color = "black";
}