var slideIndices = [1,1]; // 0 = oprestissimo, 1 = leapyfrog
var slideClassNames = ["oprestissimo-slide", "leapyfrog-slide"];
var slideSizes = [false,false];

var i;
for(i = 0; i < slideIndices.length; i++){
	showSlide(slideIndices[i],slideClassNames[i]);
}

function toggleSize(name){
	var slideElements = document.getElementsByClassName(name);
	var indexKey = getKey(name);
	var newSize;
	if(slideSizes[indexKey]){
		slideSizes[indexKey] = false;
		newSize = '100%';
	}
	else{
		slideSizes[indexKey] = true;
		newSize = '167%';
	}
	for (i = 0; i < slideElements.length; i++) {
		slideElements[i].style.height = newSize;
		slideElements[i].style.width = newSize;
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

	for (i = 0; i < slideElements.length; i++) {
		slideElements[i].style.display = "none";  
	}
	slideElements[slideIndices[indexKey]-1].style.display = "block";
}