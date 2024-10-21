console.log('%c HI', 'color: firebrick')

// CHALLENGE 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', () => {
   
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imagesArray = data.message;
            const imgContainer = document.querySelector('#dog-image-container');

            imagesArray.forEach(imageUrl => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.alt = 'Random Dog Image';
                imgElement.style.width = '200px';
                imgElement.style.margin = '10px';
                imgContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching dog images:', error));

// CHALLENGE 2
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsObject = data.message;
            const breedList = document.querySelector('#dog-breeds');

            // Add breeds to the <ul> as <li> elements
            for (const breed in breedsObject) {
                const li = document.createElement('li');
                li.textContent = breed;
                breedList.appendChild(li);

// CHALLENGE 3
                li.addEventListener('click', (e) => {
                    // changing my font to the color I want
                    e.target.style.color = 'pink'; 
                });
            }
        })
        .catch(error => console.error('Error fetching dog breeds:', error));

// CHALLENGE 4
// Making it possible to switch letters to view the dogs according to the first letter.
    const breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', (e) => {
        const selectedLetter = e.target.value;
        const breedList = document.querySelectorAll('#dog-breeds li');

        breedList.forEach(li => {
            if (li.textContent.startsWith(selectedLetter)) {
                li.style.display = ''; 
            } else {
                li.style.display = 'none';
            }
        });
    });
});