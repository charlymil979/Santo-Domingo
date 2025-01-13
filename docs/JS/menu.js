let datos = {};
const url = "https://api.jsonbin.io/v3/b/67848b56e41b4d34e47677a6";


const $container = document.querySelector(".container");

let $seccion = "",
  $info = "",
  $precio,
  $uno,
  clase = "A",
  picture= document.createElement("div"),
  art;
  picture.classList.add("pictures")

function llamarDb(url) {
  fetch(url, {
    headers: {
      "X-Access-Key":
        "$2a$10$8Qhm0RTQSh3ar9zIVLqApO2sZl.4RLtmnqAfWw9C3EgcDJQP7JiXC",
    },
  })
    .then((resp) => resp.json())
    .then((dato) => {
      console.log(dato);
      // console.log(dato.record.menu);
      const data = dato.record;
      console.log(data);
      // Empezando a armar la estructura de datos
      for (const key in data) {
        const seccion = document.createElement("section");
        seccion.classList.add("seccion1");
        const titulo = document.createElement("h3");
        titulo.classList.add("seccion");
        titulo.innerHTML = `${key}`;
        // console.log(key);
        if (key != "id") {
          seccion.innerHTML="<div class= 'pictures'><img src='./imagenes/chop.jpg' alt='foto'></div>";
          for (const articulo in data[key]) {
            let $tipos = "";
            datos = data[key][articulo];
            // console.log(datos);

            $precio = "";

            //Armando el arreglo
            datos[2].forEach((element, i) => {
              if (datos[0].includes("INGREDIENTES")) {
                $tipos += `
                <span class="tipo">${element[0]} - </span>
                `;
                if (i > 0 && i % 3 === 0) {
                  $tipos += `<br>`;
                }
              } else {
                $tipos += `<div>
              <span class="precio">$ ${element[1]}</span>
              </div>
              `;
              }
              // console.log(element);
            });
            art = `
            <h4 class="articulo">${datos[0]}</h4><div class="articulo1">
            <div class="descripcion">${datos[1]}</div>
            <div class="tipos">${$tipos}</div>
            </div>
            `;
            // console.log($tipos);
            // console.log(datos[0]);
            // console.log(datos[1]);
            // console.log(datos[2][0][0]);
            // console.log(datos[2][0][1]);
            seccion.innerHTML += art;
            

            document.querySelector(".menu").appendChild(titulo);
            document.querySelector(".menu").appendChild(seccion);
            console.log(seccion);
          }
        }
      }
    });
}

llamarDb(url);
