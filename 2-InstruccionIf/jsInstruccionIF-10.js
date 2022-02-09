function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let random;
	random = Math.floor(Math.random() * (1,10));
	if (random > 4 && random <9){
		alert('Aprobo, nota: ' + random);
	}
	else if (random > 8){
		alert('Excelente, nota ' + random);
	}
	else{
		alert('Vamos la proxima se puede, nota: ' + random);
	}
}//FIN DE LA FUNCIÓN