let source=""
function ShowPetImage(){
	let x=document.forms["form"]["pets"].value
	if(x="dog"){
		source="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
	}
	else if(x="cat"){
		source="https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155-scaled.jpg"
	}
	else if(x="parrot"){
		source="https://hips.hearstapps.com/hmg-prod/images/best-pet-birds-lead-1572839035.jpg?crop=0.666xw:1.00xh;0,0&resize=1200:*"
	}
	else if(x="hamster"){
		source="https://media.npr.org/assets/img/2011/04/09/hamster-9209e959e92b65fff6e13613565b89f138716794-s1100-c50.jpg"
	}
	document.getElementById("image").innerHTML=source;
}
document.getElementById("petthing").onclick=ShowPetImage;
