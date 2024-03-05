class Multimedia {
  constructor(url) {
    this._url = url;
  }
  getUrl() {
    return this._url;
  }
  setUrl(nuevaUrl) {
    this._url = nuevaUrl;
  }
  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
  playMultimedia = () => {
    moduloMultimedia.insertarVideo(this._url, this._id);
  };

  setInicio = (tiempo) => {
    const urlInicio = `${this._url}&amp;start=${tiempo}`;
    return urlInicio;
  };
}

const moduloMultimedia = (() => {
  const mostrarVideo = (url, id) => {
    const iframe = document.getElementById(id);
    iframe.setAttribute("src", url);
  };
  const insertarVideo = (url, id) => {
    mostrarVideo(url, id);
  };
  return {
    insertarVideo,
  };
})();

let reproducirMusica = new Reproductor(
  "https://www.youtube.com/embed/-g6MYL5lOZs?si=G4AKapS8z1vU6nP7",
  "musica"
);
let reproducirPelicula = new Reproductor(
  "https://www.youtube.com/embed/UoRfIHRyVZc?si=IVW1-kNf5NbD3ZjL",
  "peliculas"
);

let reproducirPeliculaSet = new Reproductor(
  "https://www.youtube.com/embed/UoRfIHRyVZc?si=IVW1-kNf5NbD3ZjL",
  "peliculaTiempoModificado"
);

let reproudcirSerie = new Reproductor(
  "https://www.youtube.com/embed/6riDJMI-Y8U?si=V1Zq1j6UYaDjEZJw",
  "series"
);

reproducirMusica.playMultimedia();

reproudcirSerie.playMultimedia();

reproducirPelicula.playMultimedia();

reproducirPeliculaSet.playMultimedia("3000");
