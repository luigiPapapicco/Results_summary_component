// Attendre que le DOM soit complètement chargé avant d'exécuter le script
try {
    // Envoyer une requête pour récupérer le fichier JSON
    const response = await fetch("../data.json");
    // Convertir la réponse en un objet JavaScript
    const datas = await response.json();

    // Parcourir chaque élément du tableau JSON
    datas.forEach((data, index) => {
    // Sélectionner le conteneur parent correspondant à l'index actuel
    const elementParent = document.querySelector(`.element${index + 1}`);
    // Vérifier si le conteneur parent existe
    if (elementParent) {
        // Sélectionner l'élément image à l'intérieur du conteneur
        const iconElement = elementParent.querySelector(".container_img");
        // Sélectionner l'élément paragraphe à l'intérieur du conteneur
        const textElement = elementParent.querySelector("p");
        // Sélectionner l'élément paragraphe pour le score qui est le frère suivant du conteneur parent
        const scoreElement = elementParent.nextElementSibling.querySelector("p:first-child");

        // Mettre à jour la source de l'image avec la valeur du JSON
        if (iconElement) iconElement.src = data.icon;
        // Mettre à jour le texte du paragraphe avec la catégorie du JSON
        if (textElement) textElement.textContent = data.category;
        // Mettre à jour le texte du score avec le score du JSON
        if (scoreElement) scoreElement.textContent = data.score;
        }

        });

    // mise en place du score final
    let averageScore = 0;
    for (let i = 0; i < datas.length; i++) {
        averageScore += datas[i].score
    }
    // récuperation de la balise score
    const scoreElement = document.getElementById("score")
    // mise a jour de l'élément score avec un arrondi
    scoreElement.innerText = Math.round(averageScore / datas.length)

} catch (error) {
// Afficher une erreur dans la console si la requête échoue
console.error('Error fetching data:', error);
}


