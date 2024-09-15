const url = 'https://rickandmortyapi.com/api/character';
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let container = document.getElementById('item');
    data.results.forEach(element => {
      let itemDiv = document.createElement('div');
      itemDiv.classList.add('item');

      let text = document.createElement('p');
      text.textContent = element.name;

      let img = document.createElement('img');
      img.src = element.image;

      itemDiv.appendChild(text);
      itemDiv.appendChild(img);
      container.appendChild(itemDiv);
    });
  });
