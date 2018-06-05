var vowels = ['a','e','i','o','u'];

var books = ['abc','coquito','marh'];

console.log (vowels.reverse());
console.log(vowels);

console.log(books.reverse());
console.log(books);

/*

var reverse = function (array) {

  for (var i = 0; i<array.length; i++)    {
      var item = array.pop();

      array.splice(i,0,item);
  }
  return array
}

console.log(reverse(vowels));
console.log(vowels);

/*
console.log(vowels.pop());
console.log(vowels.splice(0,0,'u')); //[]
console.log(vowels);
console.log(vowels.pop()); //0
console.log(vowels.splice(1,0,'o'));
console.log(vowels); //['u','o','a',']

*/

/*
console.log(vowels.slice(0,0,'hola2'));
console.log(vowels);
console.log(vowels.splice(2.0, 'hola3'));
console.log(vowels); */

/* metodo splice pude funcionar con 3 pararametros*/
/* si solo quiero eliminar elementos de cualquier array, funciona con 2 parametros*/
/* me retorna un array con el elemento eliminado y adicionalmente modifica el array original*/

/* console.log(vowels.splice(0,1)); 
/* el cero señala posición y el uno la cantidad de elementos que va a borrar*/
/* console.log(vowels);

console.log(vowels.splice(1,1));

console.log(vowels.splice(1,2,'hola'));
console.log(vowels);

*/



/*
metodo pop

console.log(vowels.pop());
console.log(vowels);
console.log(vowels.pop());
console.log(vowels);

/*


/*
var size = vowels.length; //5

var reverse = function (array) {
    var newAarray = [];
    var size = array.length;
    var lastPositions= size -1;
    for (var i=lastPositions;i>=0;i--) {
        newAarray.push(array[i]);
    }

    return newAarray;
}

console.log (reverse (vawols));
console.log (vowels);
*/

/*
var lastPositions = size-1; 


for (var i=lastPositions; i>=0; i--) {
    console.log (vowels[i]);
}*/