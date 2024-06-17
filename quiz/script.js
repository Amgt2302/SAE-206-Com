function Question (intituler, reponses, check){

    let titre = intituler;
    let answers = reponses;
    let verif = check;

    this.showQuestion = function (liste_question) {

        let intitu = document.querySelector(".questionscr");
        intitu.textContent = titre;
        questions.push(titre);
        let reponse1 = document.getElementById("r1");
        let reponse2 = document.getElementById("r2");
        let reponse3 = document.getElementById("r3");
        let reponse4 = document.getElementById("r4");

        let stock = null;
        for(let i = 0; i < verif.length; i++){
            if (verif[i] == true){
                if (stock == null)
                    stock =  "" + answers[i];
                else{
                    stock += " et ";
                    stock += answers[i];
                }
            }
        }
        for(let i = 0; i < answers.length; i++){
            switch(i){
                case 0:
                    reponse1.textContent = answers[i];
                    if(verif[0] == true){
                        reponse1.value = verif[0];
                        reponse1.onclick = function () { 
                            const tmp = [reponse1.textContent, reponse1.value];
                            valeur.push(tmp);                            
                            popUpTrue(liste_question); };
                    } else {
                        reponse1.value = verif[0];
                        reponse1.onclick = function () { 
                            const tmp = [reponse1.textContent, reponse1.value];
                            valeur.push(tmp);                            
                            popUpFalse(stock, liste_question); };
                    }
                    break;
                case 1:
                    reponse2.textContent = answers[i];
                    if(verif[1] == true){
                        reponse2.value = verif[1];
                        reponse2.onclick = function () { 
                            const tmp = [reponse2.textContent, reponse2.value];
                            valeur.push(tmp);
                            popUpTrue(liste_question); };
                    } else {
                        reponse2.value = verif[1];
                        reponse2.onclick = function () { 
                            const tmp = [reponse2.textContent, reponse2.value];
                            valeur.push(tmp);
                            popUpFalse(stock, liste_question); };
                    }
                    break;
                case 2:
                    reponse3.textContent = answers[i];
                    if(verif[2] == true){
                        reponse3.value = verif[2];
                        reponse3.onclick = function () { 
                            const tmp = [reponse3.textContent, reponse3.value]
                            valeur.push(tmp);
                            popUpTrue(liste_question); };
                    } else {
                        reponse3.value = verif[2];
                        reponse3.onclick = function () { 
                            const tmp = [reponse3.textContent, reponse3.value]
                            valeur.push(tmp);
                            popUpFalse(stock, liste_question); };
                    }
                    break;
                case 3:
                    if(verif[3] == true){
                        reponse4.value = verif[3];
                        reponse4.onclick = function () { 
                            const tmp = [reponse4.textContent, reponse4.value]
                            valeur.push(tmp);
                            popUpTrue(liste_question); };
                    } else {
                        reponse4.value = verif[3];
                        reponse4.onclick = function () { 
                            const tmp = [reponse4.textContent, reponse4.value] 
                            valeur.push(tmp);
                            popUpFalse(stock, liste_question); };
                    }
                    reponse4.textContent = answers[i];
                    break;
            }
        }
    }
}

let nbCorrect = 0;
let terminer = false;
var boucle = 0;
let info_question = [
    new Question("Laquelle de ces connaissances ne fait pas partie du programme d'Informatique ?",["Création de base de données", "Gestion des organisations", "Electrotechnique","Interface Homme Machine"],[false,false,true,false]),
    new Question("Lequel de ces langages n'est pas apprit dans la formation Informatique ?", ["HTML", "Python", "C++", "Processing"], [false, true, false, false]),
    new Question("Quel outil utiliseras-tu en travaux pratique ?", ["Un raspberry pi","Un stéthoscope","Un microscope","Un multimètre"],[true,false,false,false]),
    new Question("Quels locaux particuliers auras-tu l'occasion d'utiliser durant ta formation en informatique ? (trois réponses justes)",["Un cyber-café","Une salle PC","Une salle réseau","Une salle de réalité virtuelle"],[false,true,true,true]),
    new Question("Le BUT Informatique est en...",["1 an", "2 ans", "3 ans","4 ans"],[false,false,true,false])];
let bio_question = [
    new Question("Laquelle de ces connaissances ne fait pas partie du programme de génie biologique ?",["Gestion des stocks et déchets", "Gestion de la qualité et de la sécurité","Savoir adapter ses protocole","Interface Homme Machine"],[false,false,false,true]),
    new Question("Dans ta formation à l'IUT Lyon 1 - site de Bourg-en-Bresse, tu seras formé sur l'industrie agroalimentaire, pharmaceutique, cosmétique et...",["Biotechnologique", "Informatique","Metallurgique","de Charpente"],[true,false,false,false]),
    new Question("Le BUT génie biologique est en...",["1 an", "2 ans", "3 ans","4 ans"],[false,false,true,false]),
    new Question("Quel outil utiliseras-tu en laboratoire ?", ["Un raspberry pi","Un stéthoscope","Un microscope","Un baromètre"],[false,false,true,false]),
    new Question("Quels locaux particuliers auras-tu l'occasion d'utiliser durant ta formation en génie biologique ? (deux réponses justes)",["Un laboratoire","Une salle blanche","Une salle d'observation astronomique","Une salle de réalité virtuelle"],[true,true,false,false])];
let mt2e_question = [
    new Question("Que signifie le sigle MT2E ?",["Métiers de la Transition et de l'Efficacité Energétiques", "Moyens de Transport En Entreprise","Métiers Technologiques en Environnement Energétique","Milieu Tactique d'Evaluation des Energies"],[true,false,false,false]),
    new Question("Quelle salle de travaux pratiques seras-tu amené à utiliser en MT2E ?",["Laboratoire microbiologique", "Salle Blanche","Ateliers","Laboratoire de biochimie"],[false,false,true,false]),
    new Question("Pour quel métier n'êtes-vous pas formé à la fin du BUT MT2E ?",["Chargé d'étude", "Responsable d'énergie en collectivité","Conseiller en maîtrise de l'énergie","Attaché commercial"],[false,false,false,true]),
    new Question("Laquelle de ces connaissances ne fait pas partie du programme de MT2E ?",["Fonctionnements physiques, informatiques et électriques","Utilisation de Git","Communication","Anglais"],[false,true,false,false]),
    new Question("Le BUT MT2E est en...",["1 an", "2 ans", "3 ans","4 ans"],[false,false,true,false])];
let gea_question = [
    new Question("Que signifie le sigle GEA ?",["Gestion des Etablissements et des Arrêtés", "Gestion des Entreprises et des Administrations","Groupe d'Evaluation des Administrations","Gestion des Energies et Amplitudes"],[false,true,false,false]),
    new Question("Quel projet est dans la formation de GEA ?",["Action de Communication pour une Association", "Création d'une SARL","Réalisation d'une fiche de suivi d'une organisation de plantation d'endives bressane","Développement en équipe d'un ERP"],[true,false,false,false]),
    new Question("Pour quel métier n'êtes-vous pas formé à la fin du BUT GEA ?",["Comptable", "Gestionnaire de stock","Attaché commercial","Développeur Web"],[false,false,false,true]),
    new Question("Laquelle de ces matières ne fait pas partie du programme de GEA ?",["Mathématiques", "Communication","Réseau","Anglais"],[false,false,true,false]),
    new Question("Le BUT GEA est en...",["1 an", "2 ans", "3 ans","4 ans"],[false,false,true,false])];
let questions = [];
let valeur = [];

situer(boucle);

function situer(boucle){
    if (window.location.pathname == "/quiz/quiz.html"){
         personnalisation();
    }
    else if (window.location.pathname == "/quiz/info_quiz.html"){
        afficheQuestion(boucle, info_question);
        personnalisation();
        document.querySelector('.personnage').style.display = 'block';
    }
    else if (window.location.pathname == "/quiz/bio_quiz.html"){
        afficheQuestion(boucle, bio_question);
        personnalisation();
        document.querySelector('.personnage').style.display = 'block';
    }
    else if (window.location.pathname == "/quiz/mt2e_quiz.html"){
        afficheQuestion(boucle, mt2e_question);
        personnalisation();
        document.querySelector('.personnage').style.display = 'block';
    }
    else if (window.location.pathname == "/quiz/gea_quiz.html"){
        afficheQuestion(boucle, gea_question);
        personnalisation();
        document.querySelector('.personnage').style.display = 'block';
    }
    else
        return;
}

function afficheQuestion(boucle, liste_question){
    switch(window.location.pathname){
        case '/quiz/info_quiz.html':
            document.querySelector('.personnage').src = '../images/info_1.jpg';
            break;
        case '/quiz/mt2e_quiz.html':
            document.querySelector('.personnage').src = '../images/mt2e_1.jpg';
            break;
        case '/quiz/gea_quiz.html':
            document.querySelector('.personnage').src = '../images/gea_1.jpg';
            break;
        case '/quiz/bio_quiz.html':
            document.querySelector('.personnage').src = '../images/bio_1.jpg';
            break;
    }
    if (document.querySelector('.modalTrue').style.display = "block"){
        document.querySelector('.overlay').style.display = "none";
        document.querySelector('.modalTrue').style.display = "none";
    }
    if (document.querySelector('.modalFalse').style.display = "block"){
        document.querySelector('.overlay').style.display = "none";
        document.querySelector('.modalFalse').style.display = "none";
    }
    if (!terminer){
        liste_question[boucle].showQuestion(liste_question);
    } else {
        sessionStorage.setItem("question", questions);
        sessionStorage.setItem("valeur", valeur);
        sessionStorage.setItem("resultat", nbCorrect);
        if (liste_question == info_question)
            sessionStorage.setItem("liste_question", 1);
        else if (liste_question == mt2e_question)
            sessionStorage.setItem("liste_question", 2);
        else if (liste_question == gea_question)
            sessionStorage.setItem("liste_question", 3);
        else if (liste_question == bio_question)
            sessionStorage.setItem("liste_question", 4);
        window.location.href = 'cr_quiz.html';
    }
}

function popUpTrue(liste_question){
    switch(window.location.pathname){
        case '/quiz/info_quiz.html':
            document.querySelector('.personnage').src = '../images/info_3.jpg';
            break;
        case '/quiz/mt2e_quiz.html':
            document.querySelector('.personnage').src = '../images/mt2e_3.jpg';
            break;
        case '/quiz/gea_quiz.html':
            document.querySelector('.personnage').src = '../images/gea_3.jpg';
            break;
        case '/quiz/bio_quiz.html':
            document.querySelector('.personnage').src = '../images/bio_3.jpg';
            break;
    }
    if(boucle != liste_question.length - 1)
        document.querySelector('.suiteT').textContent = "Suivant";
    else{
        document.querySelector('.suiteT').textContent = "Terminer";
        terminer = true;
    }
    document.querySelector('.overlay').style.display = "block";
    document.querySelector('.modalTrue').style.display = "block";
    nbCorrect++;
}

function popUpFalse(stock, liste_question){
    switch(window.location.pathname){
        case '/quiz/info_quiz.html':
            document.querySelector('.personnage').src = '../images/info_2.jpg';
            break;
        case '/quiz/mt2e_quiz.html':
            document.querySelector('.personnage').src = '../images/mt2e_2.jpg';
            break;
        case '/quiz/gea_quiz.html':
            document.querySelector('.personnage').src = '../images/gea_2.jpg';
            document.querySelector('.personnage').style['max-width'] = "300px"
            console.log(document.querySelector('.personnage').style.width);
            break;
        case '/quiz/bio_quiz.html':
            document.querySelector('.personnage').src = '../images/bio_2.jpg';
            break;
    }
    if(boucle != liste_question.length - 1){
        document.querySelector('.suiteF').textContent = "Suivant";
    }
    else{
        document.querySelector('.suiteF').textContent = "Terminer";
        terminer = true;
    }
    document.querySelector('.repAttendus').textContent = "La/Les réponse(s) juste(s) étai(en)t " + stock + ".";
    document.querySelector('.overlay').style.display = "block";
    document.querySelector('.modalFalse').style.display = "block";
}

function personnalisation(){
    if (window.location.pathname == '/quiz/quiz.html'){
        let mt2e = document.querySelector('.mt2e'),
        info = document.querySelector('.info'),
        gea = document.querySelector('.gea'),
        bio = document.querySelector('.bio');

        mt2e.addEventListener(
            "mouseover",
            function (event){
                document.querySelector('.personnage').src = '../images/mt2e_1.jpg';
                document.querySelector('.personnage').style.display = 'block';
            }
        );

        info.addEventListener(
            "mouseover",
            function (event){
                document.querySelector('.personnage').src = '../images/info_1.jpg';
                document.querySelector('.personnage').style.display = 'block';
            }
        );

        gea.addEventListener(
            "mouseover",
            function (event){
                document.querySelector('.personnage').src = '../images/gea_1.jpg';
                document.querySelector('.personnage').style.display = 'block';
            }
        );

        bio.addEventListener(
            "mouseover",
            function (event){
                document.querySelector('.personnage').src = '../images/bio_1.jpg';
                document.querySelector('.personnage').style.display = 'block';
            }
        );

        document.getElementById("icons").addEventListener(
            "click",
            function(event){
                window.location.href = '../index.html';
            }
        );
    }
    else {
        let btntrue = document.querySelector('.suiteT'),
        btnfalse = document.querySelector('.suiteF');
        switch(window.location.pathname){
            case "/quiz/info_quiz.html":
                btntrue.addEventListener(
                    "mouseover",
                    function(event){
                        btntrue.style.background = "var(--info-color2)";
                        btntrue.style['box-shadow'] = "0px 15px 20px rgba(83, 134, 153, 0.4)";
                    }
                )
                btnfalse.addEventListener(
                    "mouseover",
                    function(event){
                        btnfalse.style.background = "var(--info-color2)";
                        btnfalse.style['box-shadow'] = "0px 15px 20px rgba(83, 134, 153, 0.4)";
                    }
                )
                break;
            case "/quiz/gea_quiz.html":
                btntrue.addEventListener(
                    "mouseover",
                    function(event){
                        btntrue.style.background = "var(--gea-color2)";
                        btntrue.style['box-shadow'] = "0px 15px 20px rgba(156, 140, 55, 0.4)";
                    }
                )
                btnfalse.addEventListener(
                    "mouseover",
                    function(event){
                        btnfalse.style.background = "var(--gea-color2)";
                        btntrue.style['box-shadow'] = "0px 15px 20px rgba(156, 140, 55, 0.4)";
                    }
                )
                break;
            case "/quiz/bio_quiz.html":
                btntrue.addEventListener(
                    "mouseover",
                    function(event){
                        btntrue.style.background = "var(--bio-color2)";
                        btntrue.style['box-shadow'] = "0px 15px 20px rgba(107, 153, 106, 0.4)";
                    }
                )
                btnfalse.addEventListener(
                    "mouseover",
                    function(event){
                        btnfalse.style.background = "var(--bio-color2)";
                        btntrue.style['box-shadow'] = "0px 15px 20px rgba(107, 153, 106, 0.4)";
                    }
                )
                break;
            case "/quiz/mt2e_quiz.html":
                btntrue.addEventListener(
                    "mouseover",
                    function(event){
                        btntrue.style.background = "var(--mt2e-color2)";
                        btntrue.style['box-shadow'] = "0px 15px 20px rgba(153, 56, 50, 0.4)";
                    }
                )
                btnfalse.addEventListener(
                    "mouseover",
                    function(event){
                        btnfalse.style.background = "var(--mt2e-color2)";
                        btntrue.style['box-shadow'] = "0px 15px 20px rgba(153, 56, 50, 0.4)";
                    }
                )
                break;
        }
        btntrue.addEventListener(
            "mouseout",
            function(event){
                btntrue.style.background = '#ddd';
                btntrue.style['box-shadow'] = "0px 8px 15px rgba(0, 0, 0, 0.1)";
            }
        )
        btnfalse.addEventListener(
            "mouseout",
            function(event){
                btnfalse.style.background = '#ddd';
                btnfalse.style['box-shadow'] = "0px 8px 15px rgba(0, 0, 0, 0.1)";
            }
        )
    }
}

function resultat(){
    let data = sessionStorage.getItem("valeur");
    if (data){

        let commentaire = [];

        if (sessionStorage.getItem("liste_question") == 1){
            commentaire = [
                "L'électrotechnique n'est pas au programme du BUT informatique ! Par contre, tu apprendras la qualité de développement, l'IHM, les réseaux, l'architecture logicielle des ordinateurs... Mais aussi des matières comme l'anglais, la communication, l'économie, le droit et la gestion.",
                "Durant ta formation tu apprendras à utiliser de nombreux langages informatiques comme le Java, le HTML, le C++, le processing... Le python par contre, n'est actuellement pas au programme.",
                "Le raspberry pi est un outil très intéressant en informatique ! Tu apprendras à l'assembler, le câbler et le configurer durant divers projets ! C'est une sorte de mini ordinateur qui te permet - entre autre - d'héberger un site web par exemple !",
                "Sur le site de Bourg-en-Bresse tu auras non seulement des travaux pratiques en salles équipées d'ordinateurs, mais aussi certains dans une salle en réseau indépendant et dans une salle équipée pour développer de la réalité virtuelle !",
                "Un Bachelor Universitaire de Technologie d'Informatique dure bien trois ans !"];
        } if (sessionStorage.getItem("liste_question") == 2){
            commentaire = [
                "Le BUT MT2E te permettras d'optimiser l'utilisation de l'énergie dans les organisations et entreprises dans lesquelles tu travailleras, en accord avec les transitions énergétiques actuelles.",
                "Durant ta formation à l'IUT Lyon 1 - site de Bourg-en-Bresse, tu auras l'occasion de travailler en ateliers avec des machines et systèmes thermiques.",
                "Le BUT MT2E te permettras - entre autre - de devenir chargé d'étude, conseiller en maîtrise de l'énergie, chargé d'affaires, chargé de mission, chargé de projet, responsable d'énergie en collectivité...",
                "L'utilisation de Git ne fait pas partie du programme de MT2E ! Par contre l'électricité, l'informatique, la mécanique, les transferts thermiques, les propriétés des matériaux, la régulation, la combustion, les échangeurs, la maîtrise de l'énergie et énergies renouvelables, l'anglais et la communication en font partie.",
                "Un Bachelor Universitaire de Technologie de MT2E dure bien trois ans !"];
        } if (sessionStorage.getItem("liste_question") == 3){
            commentaire = [
                "Le BUT GEA te permettra de devenir un employé essentiel dans la gestion de l'entreprise et/ou de l'administration dans laquelle tu travailleras.",
                "Durant ta formation à l'IUT Lyon 1 - site de Bourg-en-Bresse, tu auras l'occasion de venir en aide à une association locale par de la communication.",
                "Le BUT GEA te permettras - entre autre - de devenir comptable,conseiller en gestion, assistant de direction en PME/PMI,chargé de clientèle,responsable du personnel, gestionnaire de stock, attaché commercial...",
                "Le Réseau ne fait pas partie du programme de GEA ! Par contre comptabilité, gestion, fiscalité, ressources humaines, mathématiques, communication, langues vivantes en font partie.",
                "Un Bachelor Universitaire de Technologie de GEA dure bien trois ans !"];
        } if (sessionStorage.getItem("liste_question") == 4){
            commentaire = [
                "Interface Homme Machine ne fait pas partie du programme de génie biologique ! Par contre la gestion des stocks et déchets, la gestion de la qualité et de la sécurité, et savoir adapter ses protocole en font partie.",
                "Le site te formeras dans les domaines des industries agroalimentaire, pharmaceutique, cosmétique et biotechnologique.",
                "Un Bachelor Universitaire de Technologie de génie biologique dure bien trois ans !",
                "Le microscope est l'instrument essentiel d'un bon nombre de techniciens de laboratoire ! Tu sauras analyser et compter de très petits organismes et élements !",
                "Sur le site de Bourg-en-Bresse tu auras non seulement des travaux pratiques en laboratoire, mais aussi certains en salle blanche. Une salle blanche, c'est un espace fermé entièrement stérilisable où toute contamination est contrôlée."];
        }
            
        let valeur = data.split(',');
        let questions = sessionStorage.getItem("question").split(',');

        let rep1 = document.getElementById("user-rep1"),
        rep2 = document.getElementById("user-rep2"),
        rep3 = document.getElementById("user-rep3"),
        rep4 = document.getElementById("user-rep4"),
        rep5 = document.getElementById("user-rep5");

        let com1 = document.getElementById("user-com1"),
        com2 = document.getElementById("user-com2"),
        com3 = document.getElementById("user-com3"),
        com4 = document.getElementById("user-com4"),
        com5 = document.getElementById("user-com5");

        let intitu1 = document.getElementById("intitu1"),
        intitu2 = document.getElementById("intitu2"),
        intitu3 = document.getElementById("intitu3"),
        intitu4 = document.getElementById("intitu4"),
        intitu5 = document.getElementById("intitu5");

        document.querySelector('.nbRep').textContent = "Vous avez eu " + sessionStorage.getItem("resultat") + "/" + questions.length + " !";

        for(let i = 0; i<valeur.length-1; i+=2){
            switch(i){
                case 0:
                    intitu1.textContent = questions[0];
                    if (valeur[1] == "true"){
                        rep1.textContent = valeur[0] + " : Juste";
                        rep1.style['color'] = "rgb(0, 180, 0)";
                    } else if (valeur[1] == "false") {
                        rep1.textContent = valeur[0] + " : Faux";
                        rep1.style['color'] = "rgb(180, 0, 0)";
                    }
                    com1.textContent = commentaire[0];
                    break;
                case 2:
                    intitu2.textContent = questions[1];
                    if (valeur[3] == "true"){
                        rep2.textContent = valeur[2] + " : Juste";
                        rep2.style['color'] = "rgb(0, 180, 0)";
                    } else if (valeur[3] == "false") {
                        rep2.textContent = valeur[2] + " : Faux";
                        rep2.style['color'] = "rgb(180, 0, 0)";
                    }
                    com2.textContent = commentaire[1];
                    break;
                case 4:
                    intitu3.textContent = questions[2];
                    if (valeur[5] == "true"){
                        rep3.textContent = valeur[4] + " : Juste";
                        rep3.style['color'] = "rgb(0, 180, 0)";
                    } else if (valeur[5] == "false") {
                        rep3.textContent = valeur[4] + " : Faux";
                        rep3.style['color'] = "rgb(180, 0, 0)";
                    }
                    com3.textContent = commentaire[2];
                    break;
                case 6:
                    intitu4.textContent = questions[3];
                    if (valeur[7] == "true"){
                        rep4.textContent = valeur[6] + " : Juste";
                        rep4.style['color'] = "rgb(0, 180, 0)";
                    } else if (valeur[7] == "false") {
                        rep4.textContent = valeur[6] + " : Faux";
                        rep4.style['color'] = "rgb(180, 0, 0)";
                    }
                    com4.textContent = commentaire[3];
                    break;
                case 8:
                    intitu5.textContent = questions[4];
                    if (valeur[9] == "true"){
                        rep5.textContent = valeur[8] + " : Juste";
                        rep5.style['color'] = "rgb(0, 180, 0)";
                    } else if (valeur[9] == "false") {
                        rep5.textContent = valeur[8] + " : Faux";
                        rep5.style['color'] = "rgb(180, 0, 0)";
                    }
                    com5.textContent = commentaire[4];
                    break;
            }
        };

        
        document.getElementById("div1").addEventListener(
            "mouseover",
            function(){
                com1.style['display'] = "block";
                document.getElementById("savoir-plus1").style['transform'] = "rotate(180deg)"
            }
        );
        document.getElementById("div1").addEventListener(
            "mouseout",
            function(){
                com1.style['display'] = "none";
                document.getElementById("savoir-plus1").style['transform'] = "rotate(0)"
            }
        );
        document.getElementById("div2").addEventListener(
            "mouseover",
            function(){
                com2.style['display'] = "block";
                document.getElementById("savoir-plus2").style['transform'] = "rotate(180deg)"
            }
        );
        document.getElementById("div2").addEventListener(
            "mouseout",
            function(){
                com2.style['display'] = "none";
                document.getElementById("savoir-plus2").style['transform'] = "rotate(0)"
            }
        );
        document.getElementById("div3").addEventListener(
            "mouseover",
            function(){
                com3.style['display'] = "block";
                document.getElementById("savoir-plus3").style['transform'] = "rotate(180deg)"
            }
        );
        document.getElementById("div3").addEventListener(
            "mouseout",
            function(){
                com3.style['display'] = "none";
                document.getElementById("savoir-plus3").style['transform'] = "rotate(0)"
            }
        );
        document.getElementById("div4").addEventListener(
            "mouseover",
            function(){
                com4.style['display'] = "block";
                document.getElementById("savoir-plus4").style['transform'] = "rotate(180deg)"
            }
        );
        document.getElementById("div4").addEventListener(
            "mouseout",
            function(){
                com4.style['display'] = "none";
                document.getElementById("savoir-plus4").style['transform'] = "rotate(0)"
            }
        );
        document.getElementById("div5").addEventListener(
            "mouseover",
            function(){
                com5.style['display'] = "block";
                document.getElementById("savoir-plus5").style['transform'] = "rotate(180deg)"
            }
        );
        document.getElementById("div5").addEventListener(
            "mouseout",
            function(){
                com5.style['display'] = "none";
                document.getElementById("savoir-plus5").style['transform'] = "rotate(0)"
            }
        );
        document.getElementById("icons").addEventListener("click", function(){
            window.location.href = '/quiz/quiz.html';
        })
    }
    else
        console.log("Problème chef");
}

window.addEventListener(
    "load",
    function (){
        if(this.window.location.pathname == '/quiz/cr_quiz.html')
            resultat();
    }
)

const listkey = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 's','e','c','r','e','t', 'Enter'];
let index = 0;

function Secret(event) {
    if (event.key == listkey[index]) {
        index+=1;
        if (index === listkey.length) {
            alert("Easter Egg unlock !");
            window.location.href = '../Hidden.html';
            index = 0;
        }
    } else {
        index = 0;
    }
}
document.addEventListener('keydown', Secret);