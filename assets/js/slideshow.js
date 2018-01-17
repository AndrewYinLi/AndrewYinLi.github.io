var slideIndices = [1,1]; // 0 = oprestissimo, 1 = leapyfrog
var slideClassNames = ["oprestissimo-slide", "leapyfrog-slide"];
var slideSizes = [false,false];

var slideIndex;
for(slideIndex = 0; slideIndex < slideIndices.length; slideIndex++){
	showSlide(slideIndices[slideIndex],slideClassNames[slideIndex]);
}

function toggleSize(name){
	var slideElements = document.getElementsByClassName(name);
	var indexKey = getKey(name);
	var newSize;
	if(slideSizes[indexKey]){
		slideSizes[indexKey] = false;
		newSize = '60%';
	}
	else{
		slideSizes[indexKey] = true;
		newSize = '100%';
	}
	var i;
	for (i = 0; i < slideElements.length; i++) {
		slideElements[i].getElementsByTagName('img')[0].style.height = newSize;
		slideElements[i].getElementsByTagName('img')[0].style.width = newSize;
	}
}

function getKey(name){
	if(!name.localeCompare("oprestissimo-slide")){
		return 0;
	}
	else if(!name.localeCompare("leapyfrog-slide")){ // else is omitted because I will probably add more slides as I do more projects
		return 1;
	}
}

function changeSlide(transition, name) {
	showSlide((slideIndices[getKey(name)] += transition), name);
}

function showSlide(transition, name) {
	var indexKey = getKey(name);
	var slideElements = document.getElementsByClassName(name);
	if (transition > slideElements.length) {
		slideIndices[indexKey] = 1;
	}    
	else if (transition < 1) {
		slideIndices[indexKey] = slideElements.length;
	}
	var i;
	for (i = 0; i < slideElements.length; i++) {
		slideElements[i].style.display = "none";  
	}

	try{ // Will throw an error if page isn't done loading!
		slideElements[slideIndices[indexKey]-1].style.display = "block";
	}
	catch(error){}
}