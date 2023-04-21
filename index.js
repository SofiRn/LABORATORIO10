/*let peliculaUno = {
  name: "Money Heist",
  description: "nsisbksvnsivnsfvliusfvwrfvbdfviudfhvdoiuh",
  cover:
    "https://peru21.pe/resizer/rTMtTH8P9P4Z2ZxK7GguCmpVVdA=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/P3M6J7IKYBHS3LD7C3ODMWNLH4.jpg",
  thumbnail:
    "https://media.revistagq.com/photos/5e941e89d39d4700080d7e2b/master/w_1200,h_1502,c_limit/la-casa-de-papel.jpg",
  rating: 5.5,
};*/

let peliculas = [{
    name: "Money Heist",
    description: "Es una excelente serie para pasar el rato",
    cover: "https://peru21.pe/resizer/rTMtTH8P9P4Z2ZxK7GguCmpVVdA=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/P3M6J7IKYBHS3LD7C3ODMWNLH4.jpg",
    thumbnail: "https://media.revistagq.com/photos/5e941e89d39d4700080d7e2b/master/w_1200,h_1502,c_limit/la-casa-de-papel.jpg",
    rating: 2.5,
  },

  {
    name: "Stranger Things",
    description: "Es una excelente serie para pasar el rato",
    cover: "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/O5NRUGHHFNF2DF72LUSHJKBJD4.jpg",
    thumbnail: "https://sm.ign.com/t/ign_es/tv/s/stranger-t/stranger-things_tqfy.1200.jpg",
    rating: 3.5,
  },

  {
    name: "Lucifer",
    description: "Es una excelente serie para pasar el rato",
    cover: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lucifer-netflix-1559907366.jpg",
    thumbnail: "https://www.alohacriticon.com/wp-content/uploads/2020/08/lucifer-teleserie-netflix-poster.jpg",
    rating: 4.5,
  },

  {
    name: "Emily in paris",
    description: "Es una excelente serie para pasar el rato",
    cover: "https://elcofresuena.es/wp-content/uploads/2020/10/emily-en-paris-portada.jpg",
    thumbnail: "https://www.lavanguardia.com/peliculas-series/images/serie/poster/2020/10/w1280/3eLwEucFbyeAullj024d5jsXKnk.jpg",
    rating: 3.5,
  },

  {
    name: "Sabrina",
    description: "Es una excelente serie para pasar el rato",
    cover: "https://www.revistafactum.com/wp-content/uploads/2019/05/Sabrina-portada.jpg",
    thumbnail: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chilling-adventures-of-sabrina-poster-1536820949.png",
    rating: 4.5,
  },

  {
    name: "Sex education",
    description: "Es una excelente serie para pasar el rato",
    cover: "https://masdecultura.com/wp-content/uploads/2019/02/sex-education.jpg",
    thumbnail: "https://www.ecartelera.com/carteles-series/1200/1227/010_p.jpg",
    rating: 4.7,
  },
];





let portada = document.querySelector(".portada");
let cardRow = document.querySelector(".card_row");


peliculas.map(peli => {
  let divDOM = document.createElement('div');
  divDOM.className = "card";
  divDOM.innerHTML = `
      <img class="thumbnail" src=${peli.thumbnail}/>
      <div class="calificacion">
        <p>Rating:${peli.rating}</p>
        <img class="estrellas" src="IMAGENES/baseline_bookmark_border_white_48dp.png"/>
      </div>`;

  divDOM.addEventListener('click', (e) => {
    console.log(`Hello I am ${peli.name}`);
    showBanner(peli);
  });

  cardRow.appendChild(divDOM);
});

function showBanner(peli) {
  portada.innerHTML = '';
  let divDOM = document.createElement('div');
  portada.setAttribute('background-image', peli.cover);
  divDOM.innerHTML = `
      <img class="cover-image" src= ${peli.cover}/>
      <div class="texto"> <h1>${peli.name}</h1> </div>
      <div class="descripcion"> <p> ${peli.description} </p> </div>
      <div class="degrade"> <p>.</p> </div>`;

  portada.appendChild(divDOM);
};



/*
cardRow.innerHTML = `
<div class="card">
  <img
    class="stranger thumbnail"
    src= ${peliculas[2].thumbnail}

  />
  <div class="calificacion">
    <p>Rating:${peliculas[2].rating}</p>
    <img
      class="estrellas"
      src="IMAGENES/baseline_bookmark_border_white_48dp.png"
    />
  </div>
</div>
`;

let banner = document.querySelector(".portada")

banner.innerHTML= `

<div class="portada" style = background-image:url("${peliculas[0].cover}");">
<div class="casadepapel">
  <div class="texto">
    <h1>${peliculas[0].name}</h1>
 </div>
 <div class="descripcion">
    <p>
    ${peliculas[0].description}
    </p>
  </div>
  <div class="degrade"><p>.</p></div>

  </div>
</div>
`;
*/