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
const changeGradient = document.getElementById("change");

changeGradient.addEventListener('click', ()=>{
  const red = Math.round(Math.random() *255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random() *255);
  const red1 = Math.round(Math.random()*255);
  const green1 = Math.round(Math.random()*255);
  const blue1 = Math.round(Math.random() *255);

  document.body.style.background = `linear-gradient(rgb(${red}, ${green}, ${blue}), rgb(${red1}, ${green1}, ${blue1}))`;
});

// changer le titre

const titles = ["🔍", "💩", "🦄", "🤣", "😎"];
document.getElementById('changeTitle').addEventListener('click', ()=>{
  document.title = titles[Math.floor(Math.random() * titles.length)];
  /*
  const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

  */
  if(document.title === "🦄"){
    /* add display img into div#im
    var img = document. createElement("img");
    img.src = "images/"+thisImg;
    document.getElementById('imageDiv').appendChild(img);
    document.querySelector("img").style.display = "block";
  } else {
    document.querySelector("img").style.display = "none";
  }
  */
  document.querySelector("img").style.display = "block";
  } else {
    document.querySelector("img").style.display = "none";
  }
  
 });
 // if index = 2 afficher une image de licorne display img

 const javaScriptClass = [
  "Marcus",
  "Sven",
  "Fabio",
  "Etienne",
  "Angélique",
  "Wella",
  "Kevin",
  "Sam",
  "Mebrouka",
];

javaScriptClass.sort();
console.log(javaScriptClass);
/*
let div = document.getElementById(list);
console.log(div);

  

months.forEach((month, index) => {
  document.querySelector("ul").innerHTML += `<li> ${index + 1}. ${month} </li>`;
});
voir correction Discord !
*/
const sortedClass = javaScriptClass.sort();
sortedClass.forEach((learner, index) => {
  document.getElementById("sortedArray").innerHTML += `<li>${
    index + 1
  }. ${learner}</li>`;
});