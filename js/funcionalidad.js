window.addEventListener('load', () => {
  const filas = 4;
  const columnas = 4;
  //***************************  Utilidad Botones  ***************************

  //Accionamiento del boton Create table
  document.getElementById('createTabla').addEventListener('click', () => {
    document
      .getElementById('seccionPrincipal')
      .appendChild(crearTabla(filas, columnas));

    //Activamos botones Add y Delete
    document.getElementById('addFila').disabled = false;
    document.getElementById('deleteFila').disabled = false;
    document.getElementById('createTabla').disabled = true;
  });

  //Accionamiento boton de borrar Filas
  document.getElementById('deleteFila').addEventListener('click', () => {
    let tbody = document.getElementById('tBody');
    tbody.lastChild.remove();
    document.dispatchEvent(
      new CustomEvent('evento-personalizado', { detail: 'filaElimonada' })
    );
  });

  //Accionamiento boton de añadir filas
  document.getElementById('addFila').addEventListener('click', () => {
    let tbody = document.getElementById('tBody');
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (let i = 1; i <= columnas; i++) {
      let td = document.createElement('td');
      let parrafo = document.createElement('p');
      let contenido = document.createTextNode(
        `Fila ${tbody.childElementCount} || Columna: ${i} `
      );
      parrafo.appendChild(contenido);
      td.appendChild(parrafo);
      tr.appendChild(td);
      tbody.append(tr);
    }
  });
  //***************************  Funciones crear tabla ***************************

  // Funcion crear Tabla
  const crearTabla = (fila, columna) => {
    let tabla = document.createElement('table');
    tabla.setAttribute('class', 'claseTabla');
    tabla.appendChild(crearThead(columna));
    tabla.appendChild(crearTbody(columna, fila));
    tabla.appendChild(crearTfoot(columna));
    return tabla;
  };

  // Funcion crear Thead
  const crearThead = (columna) => {
    let thead = document.createElement('thead');
    thead.setAttribute('id', 'tHead');
    let tr = document.createElement('tr');
    for (let i = 0; i < columna; i++) {
      let th = document.createElement('th');
      let parrafo = document.createElement('p');
      let contenido = document.createTextNode('Columna: ' + (i + 1));
      parrafo.appendChild(contenido);
      th.setAttribute('class', 'claseTh');
      th.appendChild(parrafo);
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    return thead;
  };

  //funcion creacion del Tbody
  const crearTbody = (columna, fila) => {
    let tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'tBody');

    for (let i = 0; i < fila; i++) {
      let tr = document.createElement('tr');
      tr.setAttribute('class', 'claseTr');
      tbody.append(tr);
    }
    [...tbody.childNodes].forEach((elemento, tr) => {
      for (let j = 1; j <= columna; j++) {
        let td = document.createElement('td');
        let parrafo = document.createElement('p');
        let contenido = document.createTextNode(
          'Fila ' + (tr + 1) + ' || Columna: ' + (j + 1)
        );
        parrafo.appendChild(contenido);
        td.setAttribute('class', 'claseTd');
        td.appendChild(parrafo);
        elemento.appendChild(td);
      }
    });
    return tbody;
  };

  document.addEventListener('evento-personalizado', (evento) => {
    console.log(evento.detail);
  });

  // funcion para Tfoot
  const crearTfoot = (columna) => {
    let tfoot = document.createElement('tfoot');
    tfoot.setAttribute('id', 'tFoot');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let p = document.createElement('p');
    let contenido = document.createTextNode(
      'Tabla creada integramente mediante JavaScript por Alex,el original'
    );
    td.setAttribute('colspan', columna);
    p.appendChild(contenido);
    td.appendChild(p);
    tr.appendChild(td);
    tfoot.appendChild(tr);
    return tfoot;
  };
});
