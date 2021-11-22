///////////////////////     API      //////////////////////////
const BASE_URL = "https://random-word-api.herokuapp.com";

const request = (url) => {
  return fetch(`${BASE_URL}${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};

const getRandomWord = () => request("/word?number=1");
/////////////////////////////////////////////////////////////

async function getImages() {
  let imgs = document.getElementsByTagName("img");
  let imgArrOfAlt = [];

  document.addEventListener('click', (event) => {
    if (event.target.tagName == "IMG") {
      const test = prompt('Enter new alt:');
      event.target.setAttribute('alt', test);
      event.target.setAttribute('class', 'updated');
    }
  });

  // console.log(selectedImage);
  // const test = prompt();

  for (let i = 0; i < imgs.length; i++) {
      const word = await getRandomWord();
      imgs[i].alt = word;
      // imgs[i].setAttribute('class', 'updated');
      imgArrOfAlt.push(imgs[i].alt);
  }

  console.log("imgArrOfAlt", imgArrOfAlt);
  return imgArrOfAlt;
}

getImages();