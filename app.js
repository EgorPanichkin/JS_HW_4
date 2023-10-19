// Requests
const wrapper = document.querySelector('.wrapper')
let card
let img
let header
let date
let oscar

const request = new XMLHttpRequest()
request.open('GET', 'data.json')
request.setRequestHeader('Content-type', 'application/json')
request.send()

request.onload = () => {
  let resp = JSON.parse(request.response);
  resp.forEach(person => {
    createCard()
    const imgURL = person.src
    img.setAttribute('src', imgURL)
    header.innerText = person.name
    date.innerText = person.date
    if (person.oscar === true) {
      card.append(oscar)
    }
  });
}

function createCard() {
  card = document.createElement('div')
  card.setAttribute('class', 'card')
  img = document.createElement('img')
  img.setAttribute('class', 'image')
  header = document.createElement('h2')
  date = document.createElement('p')
  oscar = document.createElement('img')
  oscar.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/207/207033.png')
  oscar.style.width = 50 + 'px'
  wrapper.append(card)
  card.append(img)
  card.append(header)
  card.append(date)
}

const carXhr = new XMLHttpRequest()
carXhr.open('GET', 'cars.json')
carXhr.setRequestHeader('Content-type', 'application/json')
carXhr.send()
carXhr.onload = () => {
  console.log(JSON.parse(carXhr.response));
}