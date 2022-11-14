console.log('bonjour');

/* Préparation du programme */

// premier item sélectionné
    //  input:checked+p 

// dernier item sélectionné
    // input:checked+p
    // shift
/*
L'utilisateur clique avec la souris sur un input. 
L'utilisateur appuie sur une touche (shift) du clavier.
=> tous les items div.item input:checked+p soit SOULIGNÉ
*/
/* je dois donc RAJOUTER un id à l'input sur lequel je vais installer l'évènement shift 



 // https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps   
 */
/*
var btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
*/

//document.write('je t\'aime mon fils et ma fille') ;
let input = document.querySelector('input');
console.log(input);

function duClic () {
    // ici va venir notre code 
    /* Ce qu'on c'est que TOUS les div qui se trouvent entre le "début" ET la "fin" au checked sur l'input le p qui suit input:checked+p soit mis avec une ligne au travers p text-decoration line-throught*/ // comme il faudra faire la même chose pour PLUSIEURS div, on fera une BOUCLE 
    4 + 2;
    return 6;
}
// Appel de la fonction
let reponse = duClic();
console.log(reponse);

