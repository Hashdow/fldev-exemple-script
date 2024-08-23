document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector('button[name="add"]');
    const imageInput = document.getElementById('uploaded-image-url');
    const imageUploadButton = document.getElementById('image-input-fldev');

    console.log('DOM fully loaded and parsed');
    console.log('addToCart button: ', addToCartButton);
    console.log('imageInput: ', imageInput);
    console.log('imageUploadButton: ', imageUploadButton);

    // Vérifier si le bouton d'ajout d'image est présent
    if (imageUploadButton) {
        // Ajouter un écouteur d'événement au bouton "Ajouter au panier"
        addToCartButton.addEventListener('click', function (event) {
            // Vérifier si l'image a bien été ajoutée (vérifie si l'input caché a une valeur)
            if (!imageInput.value) {
                // Bloquer l'ajout au panier et afficher une alerte
                event.preventDefault();
                alert("Veuillez ajouter une image avant d'ajouter le produit au panier.");
            }
        });
    }
});