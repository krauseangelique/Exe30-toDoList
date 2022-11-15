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
let p = document.querySelector('p');
console.log(input);

function duClic () {

  document.getElementsByClassName("ifCheked").checked = true;
  p.style.textDecoration = "line-through";
  p.style.backgroundColor = "green";
    // ici va venir notre code 
    /* Ce qu'on c'est que TOUS les div qui se trouvent entre le "début" ET la "fin" au checked sur l'input le p qui suit input:checked+p soit mis avec une ligne au travers p text-decoration line-throught*/ // comme il faudra faire la même chose pour PLUSIEURS div, on fera une BOUCLE 
    4 + 2;
    return 6;
}
// Appel de la fonction
let reponse = duClic();
console.log(reponse);

function unckeck() {
  document.getElementsByClassName("ifCheked").checked = false;
}

/* Correction LUCAS */
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  console.log(e.shiftKey); // Shift pressed = TRUE || Shift not pressed = FALSE
  const shiftKeyPressed = e.shiftKey;
  const targeting = e.target;
  console.log(shiftKeyPressed);

    if(shiftKeyPressed && targeting.checked) {
      checkboxes.forEach((checkbox)=> {
        console.log(checkbox);

        if(checkbox === targeting || checkbox === lastChecked) {

          // toogle true false
          inBetween = !inBetween;
        }
        if(inBetween) {
          checkbox.checked = true;
        }
      });
    } else if (shiftKeyPressed && !targeting.ckecked) {
      checkboxes.forEach((checkbox) => {
        if (checkbox === targeting || checkbox === lastChecked) {
          inBetween = !inBetween;
        }
        if (inBetween) {
          checkbox.checked = false;
        }
      });
    }

    lastChecked = targeting;
  
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});

const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];   
 
let div = document.getElementById(list);
console.log(div);

  

months.forEach((month, index) => {
  document.querySelector("ul").innerHTML += `<li> ${index + 1}. ${month} </li>`;
});

// changer l'arrère plan
// bouton
// gradient linéar