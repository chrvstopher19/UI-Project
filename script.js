const rickNMort_URL = "https://rickandmortyapi.com/api/character";
let rAndMort = []

fetch(rickNMort_URL)
.then(response => response.json())
.then(responseJson => rAndMort = [...responseJson.results])
.then(res => {
    image.src = rAndMort[0].image
    charName.innerText = rAndMort[0].name

})



let container = document.querySelector('#RnMContainer')
let image = document.querySelector('#image')
let charName = document.querySelector('#name')
const leftBtn = document.querySelector('#lBtn')
const rightBtn = document.querySelector('#rBtn')

let currentIndex = 0

const updateChar = function () {
    image.src = rAndMort[currentIndex].image
    charName.innerText = rAndMort[currentIndex].name
}
rightBtn.addEventListener('click', () => {
    if (currentIndex + 1 != rAndMort.length ) {
      currentIndex++;
      console.log(currentIndex);
      updateChar()
    }
  });

leftBtn.addEventListener('click', () => {
    if (currentIndex  - 1 >= 0)
    currentIndex--;
    console.log(currentIndex);
    updateChar()
})



