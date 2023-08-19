const propiedadesJSON = [
  {
    nombre: "Casa de campo",
    descripcion: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    cuartos: 2,
    metros: 170,
  },
  {
    nombre: "Casa de playa",
    descripcion: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    cuartos: 2,
    metros: 130,
  },
  {
    nombre: "Casa en el centro",
    descripcion: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    cuartos: 1,
    metros: 80,
  },
  {
    nombre: "Casa rodante",
    descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    cuartos: 1,
    metros: 6,
  },
  {
    nombre: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    cuartos: 3,
    metros: 200,
  },
  {
    nombre: "Mansión",
    descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    cuartos: 5,
    metros: 500,
  },
];

const button = document.getElementById("busqueda");
button.addEventListener("click", clickSearch);

function clickSearch() {
  let camposBusqueda = document.querySelectorAll(".form-control");
  if (faltanCampos(camposBusqueda)) {
    alert("Por favor, complete todos los campos de búsqueda.");
  } else {
    ejecutarCriterios(camposBusqueda);
    pintarPropiedadesContainer(propiedadesFiltradas);
    pintarTotal(propiedadesFiltradas);
  }
}

function faltanCampos(array) {
  let campoInvalido = false;
  for (let valor of array) {
    if (!valor.value) {
      campoInvalido = true;
    }
  }
  return campoInvalido;
}

let propiedadesFiltradas = [];
function ejecutarCriterios(array) {
  propiedadesFiltradas = [];

  for (let propiedad of propiedadesJSON) {
    if (
      propiedad.cuartos == array[0].value &&
      propiedad.metros >= array[1].value &&
      propiedad.metros <= array[2].value
    ) {
      propiedadesFiltradas.push(propiedad);
    }
  }

  return propiedadesFiltradas;
}

function pintarPropiedadesContainer(array) {
  const propiedadesContainer = document.querySelector(".propiedades");
  propiedadesContainer.innerHTML = "";
  for (const propiedad of array) {
    const propiedadElement = document.createElement("div");
    propiedadElement.classList.add("propiedad");

    propiedadElement.innerHTML = `
    <div class="img" style="background-image: url('${propiedad.src}')"></div>
    <section>
        <h5>${propiedad.nombre}</h5>
        <div class="d-flex justify-content-between">
            <p>Cuartos: ${propiedad.cuartos}</p>
            <p>Metros: ${propiedad.metros}</p>
        </div>
        <p class="my-3">${propiedad.descripcion}</p>
        <button class="btn btn-info">Ver más</button>
    </section>
  `;
    propiedadesContainer.appendChild(propiedadElement);
  }
}
function pintarTotal(array) {
  const totalCount = document.getElementById("Total");
  totalCount.textContent = array.length;
}
//Vista inicial
pintarPropiedadesContainer(propiedadesJSON);
pintarTotal(propiedadesJSON);
