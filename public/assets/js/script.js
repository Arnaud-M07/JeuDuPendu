// // // // // Déclaration des variables // // // // // 
// Tableau contenant une liste de capitales
const capitalList = [
    "KABOUL", "TIRANA", "ALGER", "LUANDA", "BUENOS AIRES", "EREVAN", "CANBERRA", "VIENNE", "BAKOU", "NASSAU", "MANAMA", "DACCA", "BRIDGETOWN", "MINSK", "BRUXELLES", "BELMOPAN", "PORTONOVO", "THIMPHOU", "LAPAZ", "SARAJEVO", "GABORONE", "BRASILIA", "SOFIA", "OUAGADOUGOU", "BUJUMBURA", "PHNOMPENH", "YAOUNDE", "OTTAWA", "PRAIA", "BANGUI", "NDJAMENA", "SANTIAGO", "PEKIN", "BOGOTA", "MORONI", "BRAZZAVILLE", "KINSHASA", "SANJOSE", "ZAGREB", "LAHAVANE", "NICOSIE", "PRAGUE", "COPENHAGUE", "DJIBOUTI", "ROSEAU", "SAINTDOMINGUE", "LECAIRE", "SANSALVADOR", "MALABO", "ASMARA", "TALLINN", "ADDISABEBA", "SUVA", "HELSINKI", "PARIS", "LIBREVILLE", "BANJUL", "TBILISSI", "BERLIN", "ACCRA", "ATHENES", "GUATEMALA", "CONAKRY", "BUDAPEST", "GEORGETOWN", "PORTAUPRINCE", "TEGUCIGALPA", "BISSAU", "REYKJAVIK", "NEWDELHI", "JAKARTA", "TEHERAN", "BAGDAD", "DUBLIN", "JERUSALEM", "ROME", "KINGSTON", "TOKYO", "AMMAN", "NOURSOULTAN", "NAIROBI", "TARAWA", "KOWEIT", "BICHKEK", "VIENTIANE", "RIGA", "BEYROUTH", "MASERU", "MONROVIA", "TRIPOLI", "VADUZ", "VILNIUS", "LUXEMBOURG", "SKOPJE", "ANTANANARIVO", "LILONGWE", "KUALALUMPUR", "MALE", "BAMAKO", "LAVALETTE", "MAJURO", "NOUAKCHOTT", "PORTLOUIS", "MEXICO", "PALIKIR", "CHISINAU", "MONACO", "OULANBATOR", "PODGORICA", "RABAT", "MAPUTO", "WINDHOEK", "NAYPYIDAW", "KATMANDOU", "AMSTERDAM", "WELLINGTON", "MANAGUA", "NIAMEY", "ABUJA", "PYONGYANG", "SKOPJE", "OSLO", "ISLAMABAD", "NGERULMUD", "JERUSALEM", "PANAMA", "PORTMORESBY", "ASUNCION", "LIMA", "MANILLE", "VARSOVIE", "LISBONNE", "DOHA", "BUCAREST", "MOSCOW", "KIGALI", "BASSETERRE", "KINGSTOWN", "CASTRIES", "APIA", "SAINTMARIN", "DAKAR", "BELGRADE", "VICTORIA", "FREETOWN", "SINGAPOUR", "BRATISLAVA", "LJUBLJANA", "HONIARA", "MOGADISCIO", "BLOEMFONTEIN", "LECAP", "JUBA", "MADRID", "COLOMBO", "KHARTOUM", "PARAMARIBO", "MBABANE", "STOCKHOLM", "BERNE", "DAMAS", "TAIPEI", "DOUCHANBE", "DODOMA", "BANGKOK", "LOME", "NUKUALOFA", "PORTOFSPAIN", "TUNIS", "ANKARA", "ACHGABAT", "FUNAFUTI", "KAMPALA", "KIEV", "ABOUDHABI", "LONDRES", "WASHINGTON", "MONTEVIDEO", "TACHKENT", "PORTVILA", "VATICAN", "CARACAS", "HANOI", "LUSAKA", "HARARE"
];
// Récupération des élements
const keys = document.querySelectorAll(".keyboard .btn"); 
let displayMan = document.querySelectorAll(".svg-part.d-none")
let message = document.getElementById("message")
// Déclaration des variables
let capitalName = capitalList[ Math.floor(Math.random() * capitalList.length) ]; // Variable retournant une capitale aléatoire
let capitalNameLength = capitalName.length; // Variable retournant la longueur de la capitale (pas necessaire ?)
let arrayCapitalLetters = Array.from(capitalName); // Récupérer capitalName et en faire un tableau
let arrayUserLetters = ['']; //Création d'un tableau vide contenant les valeurs trouvées par le joueur

// Définir les conditions de defaite
let attempts = 0; // Initialisez le nombre d'essais à zéro
const maxAttempts = 7; // Définir le nombre maximum d'essais autorisés


// // // // // Déclaration des fonctions // // // // // 
// Pour chaque lettre dans le mot, afficher une "*"
for(letter=0;letter<arrayCapitalLetters.length;letter++){
    arrayCapitalLetters[letter]="*"
}
// Afficher la grille vide au debut de partie 
arrayCapitalLetters.forEach((star)=>{
    wordToGuess.textContent += star
})

keys.forEach((button) => {
    button.addEventListener("click", function () {
        let letterText = button.textContent;
        // Si la lettre cliquée est comprise dans le mot, l'ajouter au tableau 
        if (capitalName.includes(letterText)) {
            for (let letter = 0; letter < capitalName.length; letter++) {
                if (capitalName[letter] === letterText) {
                    arrayUserLetters[letter] = letterText;
                    // Maj de arrayCapitalLetters avec la lettre correcte
                    arrayCapitalLetters[letter] = letterText;
                    
                }
            }
        }
        // Ajouter les lettres au DOM en conservant les "*"
        wordToGuess.textContent = arrayCapitalLetters.join('');
        // Boucle vérifiant le nombre d'essai max et la conditioon de victoire
        if (!capitalName.includes(letterText)) {
            // Retire la classe 'd-none' des éléments .svg-part un par un
            if (attempts < maxAttempts) {
                displayMan[attempts].classList.remove('d-none');
                attempts++;
            }
            // Condition de défaite
            if (attempts >= maxAttempts) {
                message.innerHTML =`<div id="inner-message">
                                        <h2 class="titleModal">Game Over...</h2>
                                        <p class="textModal">Oups... Vous avez perdu 😢<br>
                                        La bonne réponse était ${capitalName}</p>
                                        <a href="index.html"><button type="button" class="btn btn-dark btn-end" id="btnReplay">Rejouer</button></a>
                                    </div>`
            }
        // Condiiton de victoire    
        } else if (arrayUserLetters.join('') === capitalName) {
            message.innerHTML =`<div id="inner-message">
                                    <h2 class="titleModal">Victoire</h2>
                                    <p class="textModal">🎉 Félicitations ! Vous avez gagné 🎉</p>
                                    <a href="index.html"><button type="button" class="btn btn-dark btn-end" id="btnReplay">Rejouer</button></a>
                                </div>`
        }
        button.classList.add('presse'); // Ajoute la classe "presse" au bouton (style bouton pressé)
    });
});

// // // // // Tests // // // // // 
// console.log(capitalName);
// console.log(arrayCapitalLetters);
// console.log(arrayUserLetters)
// console.log(arrayCapitalLetters)
