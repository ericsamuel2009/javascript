
// OUTPUT
	//document.getElementById("demo").innerHTML = 5+4; //primera manera de imprimir en pantalla tomando en cuenta que necesita un id para desplegar en pantalla
	//document.write(5+4); //segunda manera de imprimir en pantalla no hace falta que tenga una coneccion con alguna etiqueta
	//window.alert(5+4); //tercera manera de imprimir caja de alerta con mensaje
	//console.log(5+4); // cuanta manera de imprimir esta manera imrpime en consola

//STATEMENT
	// var x,y,z;
	// x = 5;
	// y = 6;
	// z = x + y;
	// document.write(z);

//ASSIGMENT
	// var x = 10;
	// x +=5;
	// document.write(x);

	// var z = 10;
	// z -=5;
	// document.write(z);

	// var x = 10;
	// x *=5;
	// document.write(x);

	// var length = 16; //entero o number
	// var	last = "jhon"; //string
	// var x = {nombre : "jhon",apellido:"perez"} //objeto
	// var car = ["saab","bmw","mazda","volvo"] //<i class="far fa-rectangle-landscape"></i>o
	// var bool = (0 === 0); //booleano
	// typeof bool //para identificar que tipo de datos es bool utilise "typeof" y me retorna "boolean";
		// console.log(typeof bool);

//FUNCTIONS
	 //function myfunction(p1,p2){
	 	//return p1 * p2 ;
	 //}
	 //var x = myfunction(3,3);
	 //document.getElementById("demo").innerHTML = x; // es lo mismo que decir document.getElementById("demo").innerHTML = myfunction(3,3);
	
	// function aCelsius(valor){
	// 	return 5/9 * (valor-32);
	// }
	// var t = "la Temperatura es de " + aCelsius(40) + " Celsius";
	// document.getElementById("demo").innerHTML = t;

	// var persona = {
	// 	id:1,
	// 	nomber:"eric",
	// 	apellido:"maldonado",
	// 	edad:25,
	// 	InfoCompleta : function(){
	// 		return "tu id es "+this.id+" tu nombre es "+this.nomber+" tu apellido es "+this.apellido+" tu edad es "+this.edad;
	// 	}
	// };
	// document.getElementById("demo").innerHTML = persona.InfoCompleta(); 
	// console.log(persona.InfoCompleta());

	// function holamundo(){
	// 	var d = document.getElementById("demo").innerHTML = "hola mundo";
	// }
	// var x = new holamundo();
	// console.log(x);

	// var x = "hola";
	// var y = new String("hola")
	// console.log(y);

	// var string1 = "Please locate where 'locate' occurs!";
	// var resultstr1 = string1.substr(7);
	// var d = document.getElementById("demo").innerHTML = resultstr1;
	// alert(resultstr1.trim());

	// var x = 123;
	// //x.toString();
	// document.getElementById("demo").innerHTML = x.toString();

	// var frutas = ["mango","uva","papaya"];
	// 	document.getElementById("demo").innerHTML = frutas;
	// 	function prueba(){
	// 		frutas.push("wanabana"); //agrega un nuevo campo (en este caso con el nombre "wanabana") en el array frutas
	// 	document.getElementById("demo").innerHTML = frutas;
	// 	}

		// var frutas = ["mango","uva","papaya"];
		// document.getElementById("demo").innerHTML = frutas;
		// function prueba(){
		// 	frutas.shift();//quita el primer campo del arreglo frutas
		// document.getElementById("demo").innerHTML = frutas;
		// }

	// 	var frutas = ["mango","uva","papaya"];
	// 	document.getElementById("demo").innerHTML = frutas;
	// 	function prueba(){
	// 		frutas.unshift("wanabana");//agrega un campo en el primer campo del arreglo frutas
	// 	document.getElementById("demo").innerHTML = frutas;
	// }	

		// 	var frutas = ["mango","uva","papaya","mamon"];
		// frutas[frutas.length]="durazno"; //coloca "durazno" en el ultimo puesto
		// document.getElementById("demo").innerHTML = frutas;


		// var frutas = ["mango","uva","papaya","mamon"];
		// delete frutas[0]; //elimina la posicion del arreglo seleccionado
		// document.getElementById("demo").innerHTML = frutas;

		// var frutas = ["mango","uva","papaya","mamon"];
		// frutas.splice(2,0, "kiwi","melon") //splice se usa para agregar nuevos elementos al arreglo splice(posicion recortar de derecha a izquierda,posicion recortar de derecha a izquierda,#valores a agregar)
		// document.getElementById("demo").innerHTML = frutas;


		// var frutas = ["mango","uva","papaya","mamon"];
		// // frutas.splice(0,1) //splice Tambien se puede utilizar para remover ... splice(posicion donde comenzara a remover elementos,cantidades de elemtos a remover)
		// document.getElementById("demo").innerHTML = frutas;
		// function prueba(){
		// frutas.splice(0,1) //splice Tambien se puede utilizar para remover ... splice(posicion donde comenzara a remover elementos,cantidades de elemtos a remover)
		// document.getElementById("demo").innerHTML = frutas;
		// }

		// var frutas = ["mango","uva","papaya","mamon"];
		// var animales = ["perro","gato","foca","mono"];
		// var union = frutas.concat(animales);
		// document.getElementById("demo").innerHTML = union;
