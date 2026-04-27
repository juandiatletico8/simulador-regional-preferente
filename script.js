const equipos = [
  "La Cistérniga",
  "Benavente",
  "Noname",
  "Helmántico",
  "Moraleja",
  "Cubillos",
  "Betis",
  "Sariegos",
  "Salamanca UDS B",
  "Victoria",
  "Ponferradina B",
  "Zamora B",
  "Ciudad Rodrigo",
  "Béjar Industrial",
  "La Bañeza",
  "Laguna"
];

const escudos = {
  "La Cistérniga": "escudos/la_cisterniga.png",
  "Benavente": "escudos/benavente.png",
  "Noname": "escudos/noname.png",
  "Helmántico": "escudos/helmantico.png",
  "Moraleja": "escudos/moraleja.png",
  "Cubillos": "escudos/cubillos.png",
  "Betis": "escudos/betis.png",
  "Sariegos": "escudos/sariegos.png",
  "Salamanca UDS B": "escudos/salamancauds_b.png",
  "Victoria": "escudos/victoria.png",
  "Ponferradina B": "escudos/ponferradina_b.png",
  "Zamora B": "escudos/zamora_b.png",
  "Ciudad Rodrigo": "escudos/ciudad_rodrigo.png",
  "Béjar Industrial": "escudos/bejar_industrial.png",
  "La Bañeza": "escudos/la_baneza.png",
  "Laguna": "escudos/laguna.png"
};

 const partidos = [
  // Jornada 1
  { jornada: 1, local: "Noname", visitante: "La Cistérniga", gLocal: 1, gVis: 2 },
  { jornada: 1, local: "Laguna", visitante: "Zamora B", gLocal: 2, gVis: 3 },
  { jornada: 1, local: "Betis", visitante: "Benavente", gLocal: 0, gVis: 0 },
  { jornada: 1, local: "Béjar Industrial", visitante: "Victoria", gLocal: 1, gVis: 0 },
  { jornada: 1, local: "Moraleja", visitante: "Salamanca UDS B", gLocal: 1, gVis: 2 },
  { jornada: 1, local: "Cubillos", visitante: "Ponferradina B", gLocal: 3, gVis: 1 },
  { jornada: 1, local: "La Bañeza", visitante: "Ciudad Rodrigo", gLocal: 2, gVis: 3 },
  { jornada: 1, local: "Helmántico", visitante: "Sariegos", gLocal: 0, gVis: 3 },

  // Jornada 2
  { jornada: 2, local: "Victoria", visitante: "Laguna", gLocal: 1, gVis: 2 },
  { jornada: 2, local: "Ponferradina B", visitante: "Moraleja", gLocal: 2, gVis: 0 },
  { jornada: 2, local: "Sariegos", visitante: "Cubillos", gLocal: 1, gVis: 0 },
  { jornada: 2, local: "Salamanca UDS B", visitante: "Noname", gLocal: 1, gVis: 1 },
  { jornada: 2, local: "Zamora B", visitante: "Helmántico", gLocal: 1, gVis: 1 },
  { jornada: 2, local: "La Cistérniga", visitante: "La Bañeza", gLocal: 0, gVis: 1 },
  { jornada: 2, local: "Benavente", visitante: "Béjar Industrial", gLocal: 4, gVis: 2 },
  { jornada: 2, local: "Ciudad Rodrigo", visitante: "Betis", gLocal: 1, gVis: 0 },

  // Jornada 3
  { jornada: 3, local: "Noname", visitante: "Ponferradina B", gLocal: 0, gVis: 3 },
  { jornada: 3, local: "Moraleja", visitante: "Sariegos", gLocal: 1, gVis: 1 },
  { jornada: 3, local: "Laguna", visitante: "Benavente", gLocal: 0, gVis: 2 },
  { jornada: 3, local: "Cubillos", visitante: "Zamora B", gLocal: 0, gVis: 0 },
  { jornada: 3, local: "Helmántico", visitante: "Victoria", gLocal: 1, gVis: 1 },
  { jornada: 3, local: "La Bañeza", visitante: "Salamanca UDS B", gLocal: 0, gVis: 0 },
  { jornada: 3, local: "Ciudad Rodrigo", visitante: "La Cistérniga", gLocal: 4, gVis: 2 },
  { jornada: 3, local: "Betis", visitante: "Béjar Industrial", gLocal: 1, gVis: 0 },

  // Jornada 4
  { jornada: 4, local: "Zamora B", visitante: "Moraleja", gLocal: 3, gVis: 0 },
  { jornada: 4, local: "Sariegos", visitante: "Noname", gLocal: 0, gVis: 2 },
  { jornada: 4, local: "Benavente", visitante: "Helmántico", gLocal: 4, gVis: 1 },
  { jornada: 4, local: "Ponferradina B", visitante: "La Bañeza", gLocal: 3, gVis: 0 },
  { jornada: 4, local: "Salamanca UDS B", visitante: "Ciudad Rodrigo", gLocal: 1, gVis: 3 },
  { jornada: 4, local: "Victoria", visitante: "Cubillos", gLocal: 1, gVis: 1 },
  { jornada: 4, local: "Béjar Industrial", visitante: "Laguna", gLocal: 2, gVis: 1 },
  { jornada: 4, local: "La Cistérniga", visitante: "Betis", gLocal: 1, gVis: 2 },

  // Jornada 5
  { jornada: 5, local: "Noname", visitante: "Zamora B", gLocal: 0, gVis: 0 },
  { jornada: 5, local: "Cubillos", visitante: "Benavente", gLocal: 1, gVis: 0 },
  { jornada: 5, local: "La Cistérniga", visitante: "Salamanca UDS B", gLocal: 1, gVis: 1 },
  { jornada: 5, local: "Betis", visitante: "Laguna", gLocal: 1, gVis: 0 },
  { jornada: 5, local: "Moraleja", visitante: "Victoria", gLocal: 1, gVis: 0 },
  { jornada: 5, local: "Helmántico", visitante: "Béjar Industrial", gLocal: 1, gVis: 2 },
  { jornada: 5, local: "Ciudad Rodrigo", visitante: "Ponferradina B", gLocal: 3, gVis: 0 },
  { jornada: 5, local: "La Bañeza", visitante: "Sariegos", gLocal: 3, gVis: 1 },

  // Jornada 6
  { jornada: 6, local: "Victoria", visitante: "Noname", gLocal: 2, gVis: 2 },
  { jornada: 6, local: "Zamora B", visitante: "La Bañeza", gLocal: 2, gVis: 0 },
  { jornada: 6, local: "Laguna", visitante: "Helmántico", gLocal: 2, gVis: 1 },
  { jornada: 6, local: "Salamanca UDS B", visitante: "Betis", gLocal: 3, gVis: 0 },
  { jornada: 6, local: "Ponferradina B", visitante: "La Cistérniga", gLocal: 1, gVis: 1 },
  { jornada: 6, local: "Sariegos", visitante: "Ciudad Rodrigo", gLocal: 3, gVis: 1 },
  { jornada: 6, local: "Béjar Industrial", visitante: "Cubillos", gLocal: 0, gVis: 0 },
  { jornada: 6, local: "Benavente", visitante: "Moraleja", gLocal: 1, gVis: 1 },

 // Jornada 7
  { jornada: 7, local: "Noname", visitante: "Benavente", gLocal: 1, gVis: 2 },
  { jornada: 7, local: "Moraleja", visitante: "Béjar Industrial", gLocal: 1, gVis: 0 },
  { jornada: 7, local: "La Bañeza", visitante: "Victoria", gLocal: 1, gVis: 2 },
  { jornada: 7, local: "Salamanca UDS B", visitante: "Ponferradina B", gLocal: 2, gVis: 0 },
  { jornada: 7, local: "Betis", visitante: "Helmántico", gLocal: 1, gVis: 0 },
  { jornada: 7, local: "Cubillos", visitante: "Laguna", gLocal: 0, gVis: 0 },
  { jornada: 7, local: "La Cistérniga", visitante: "Sariegos", gLocal: 0, gVis: 2 },
  { jornada: 7, local: "Ciudad Rodrigo", visitante: "Zamora B", gLocal: 1, gVis: 2 },

  // Jornada 8
  { jornada: 8, local: "Laguna", visitante: "Moraleja", gLocal: 3, gVis: 0 },
  { jornada: 8, local: "Zamora B", visitante: "La Cistérniga", gLocal: 0, gVis: 1 },
  { jornada: 8, local: "Victoria", visitante: "Ciudad Rodrigo", gLocal: 0, gVis: 2 },
  { jornada: 8, local: "Helmántico", visitante: "Cubillos", gLocal: 1, gVis: 1 },
  { jornada: 8, local: "Sariegos", visitante: "Salamanca UDS B", gLocal: 1, gVis: 1 },
  { jornada: 8, local: "Ponferradina B", visitante: "Betis", gLocal: 0, gVis: 1 },
  { jornada: 8, local: "Béjar Industrial", visitante: "Noname", gLocal: 3, gVis: 1 },
  { jornada: 8, local: "Benavente", visitante: "La Bañeza", gLocal: 0, gVis: 1 },

 // Jornada 9
  { jornada: 9, local: "Noname", visitante: "Laguna", gLocal: 3, gVis: 1 },
  { jornada: 9, local: "Moraleja", visitante: "Helmántico", gLocal: 1, gVis: 2 },
  { jornada: 9, local: "Betis", visitante: "Cubillos", gLocal: 3, gVis: 0 },
  { jornada: 9, local: "Ponferradina B", visitante: "Sariegos", gLocal: 4, gVis: 0 },
  { jornada: 9, local: "La Cistérniga", visitante: "Victoria", gLocal: 2, gVis: 1 },
  { jornada: 9, local: "Salamanca UDS B", visitante: "Zamora B", gLocal: 2, gVis: 1 },
  { jornada: 9, local: "La Bañeza", visitante: "Béjar Industrial", gLocal: 1, gVis: 0 },
  { jornada: 9, local: "Ciudad Rodrigo", visitante: "Benavente", gLocal: 0, gVis: 3 },

 // Jornada 10
  { jornada: 10, local: "Cubillos", visitante: "Moraleja", gLocal: 2, gVis: 1 },
  { jornada: 10, local: "Zamora B", visitante: "Ponferradina B", gLocal: 2, gVis: 1 },
  { jornada: 10, local: "Laguna", visitante: "La Bañeza", gLocal: 0, gVis: 1 },
  { jornada: 10, local: "Victoria", visitante: "Salamanca UDS B", gLocal: 1, gVis: 1 },
  { jornada: 10, local: "Sariegos", visitante: "Betis", gLocal: 2, gVis: 0 },
  { jornada: 10, local: "Béjar Industrial", visitante: "Ciudad Rodrigo", gLocal: 2, gVis: 0 },
  { jornada: 10, local: "Benavente", visitante: "La Cistérniga", gLocal: 0, gVis: 1 },
  { jornada: 10, local: "Helmántico", visitante: "Noname", gLocal: 2, gVis: 1 },

 // Jornada 11
  { jornada: 11, local: "Ponferradina B", visitante: "Victoria", gLocal: 3, gVis: 1 },
  { jornada: 11, local: "Noname", visitante: "Cubillos", gLocal: 2, gVis: 4 },
  { jornada: 11, local: "Betis", visitante: "Moraleja", gLocal: 2, gVis: 0 },
  { jornada: 11, local: "Salamanca UDS B", visitante: "Benavente", gLocal: 6, gVis: 1 },
  { jornada: 11, local: "La Cistérniga", visitante: "Béjar Industrial", gLocal: 0, gVis: 0 },
  { jornada: 11, local: "Sariegos", visitante: "Zamora B", gLocal: 1, gVis: 2 },
  { jornada: 11, local: "La Bañeza", visitante: "Helmántico", gLocal: 4, gVis: 0 },
  { jornada: 11, local: "Ciudad Rodrigo", visitante: "Laguna", gLocal: 1, gVis: 0 },

  // Jornada 12
  { jornada: 12, local: "Laguna", visitante: "La Cistérniga", gLocal: 1, gVis: 0 },
  { jornada: 12, local: "Cubillos", visitante: "La Bañeza", gLocal: 0, gVis: 1 },
  { jornada: 12, local: "Moraleja", visitante: "Noname", gLocal: 1, gVis: 3 },
  { jornada: 12, local: "Zamora B", visitante: "Betis", gLocal: 0, gVis: 1 },
  { jornada: 12, local: "Victoria", visitante: "Sariegos", gLocal: 3, gVis: 0 },
  { jornada: 12, local: "Béjar Industrial", visitante: "Salamanca UDS B", gLocal: 0, gVis: 4 },
  { jornada: 12, local: "Benavente", visitante: "Ponferradina B", gLocal: 2, gVis: 4 },
  { jornada: 12, local: "Helmántico", visitante: "Ciudad Rodrigo", gLocal: 1, gVis: 2 },

  // Jornada 13
  { jornada: 13, local: "Zamora B", visitante: "Victoria", gLocal: 0, gVis: 1 },
  { jornada: 13, local: "Betis", visitante: "Noname", gLocal: 3, gVis: 2 },
  { jornada: 13, local: "La Cistérniga", visitante: "Helmántico", gLocal: 3, gVis: 2 },
  { jornada: 13, local: "Sariegos", visitante: "Benavente", gLocal: 3, gVis: 1 },
  { jornada: 13, local: "Salamanca UDS B", visitante: "Laguna", gLocal: 4, gVis: 1 },
  { jornada: 13, local: "Ciudad Rodrigo", visitante: "Cubillos", gLocal: 2, gVis: 1 },
  { jornada: 13, local: "Ponferradina B", visitante: "Béjar Industrial", gLocal: 4, gVis: 1 },
  { jornada: 13, local: "La Bañeza", visitante: "Moraleja", gLocal: 5, gVis: 1 },

  // Jornada 14
  { jornada: 14, local: "Betis", visitante: "Victoria", gLocal: 0, gVis: 3 },
  { jornada: 14, local: "Béjar Industrial", visitante: "Sariegos", gLocal: 1, gVis: 1 },
  { jornada: 14, local: "Laguna", visitante: "Ponferradina B", gLocal: 1, gVis: 0 },
  { jornada: 14, local: "Noname", visitante: "La Bañeza", gLocal: 0, gVis: 2 },
  { jornada: 14, local: "Cubillos", visitante: "La Cistérniga", gLocal: 1, gVis: 0 },
  { jornada: 14, local: "Moraleja", visitante: "Ciudad Rodrigo", gLocal: 0, gVis: 1 },
  { jornada: 14, local: "Benavente", visitante: "Zamora B", gLocal: 4, gVis: 1 },
  { jornada: 14, local: "Helmántico", visitante: "Salamanca UDS B", gLocal: 1, gVis: 3 },

  // Jornada 15
  { jornada: 15, local: "Ponferradina B", visitante: "Helmántico", gLocal: 0, gVis: 1 },
  { jornada: 15, local: "Zamora B", visitante: "Béjar Industrial", gLocal: 2, gVis: 1 },
  { jornada: 15, local: "Salamanca UDS B", visitante: "Cubillos", gLocal: 3, gVis: 1 },
  { jornada: 15, local: "Sariegos", visitante: "Laguna", gLocal: 1, gVis: 0 },
  { jornada: 15, local: "La Cistérniga", visitante: "Moraleja", gLocal: 6, gVis: 1 },
  { jornada: 15, local: "Ciudad Rodrigo", visitante: "Noname", gLocal: 1, gVis: 1 },
  { jornada: 15, local: "La Bañeza", visitante: "Betis", gLocal: 0, gVis: 2 },
  { jornada: 15, local: "Victoria", visitante: "Benavente", gLocal: 3, gVis: 0 },

// Jornada 16
  { jornada: 16, local: "Salamanca UDS B", visitante: "Moraleja", gLocal: 1, gVis: 0 },
  { jornada: 16, local: "Zamora B", visitante: "Laguna", gLocal: 0, gVis: 1 },
  { jornada: 16, local: "Victoria", visitante: "Béjar Industrial", gLocal: 2, gVis: 1 },
  { jornada: 16, local: "Sariegos", visitante: "Helmántico", gLocal: 2, gVis: 1 },
  { jornada: 16, local: "Ponferradina B", visitante: "Cubillos", gLocal: 4, gVis: 0 },
  { jornada: 16, local: "Benavente", visitante: "Betis", gLocal: 1, gVis: 2 },
  { jornada: 16, local: "Ciudad Rodrigo", visitante: "La Bañeza", gLocal: 1, gVis: 1 },
  { jornada: 16, local: "La Cistérniga", visitante: "Noname", gLocal: 1, gVis: 1 },

  // Jornada 17
  { jornada: 17, local: "Laguna", visitante: "Victoria", gLocal: 1, gVis: 0 },
  { jornada: 17, local: "Noname", visitante: "Salamanca UDS B", gLocal: 4, gVis: 1 },
  { jornada: 17, local: "Betis", visitante: "Ciudad Rodrigo", gLocal: 1, gVis: 1 },
  { jornada: 17, local: "Helmántico", visitante: "Zamora B", gLocal: 2, gVis: 0 },
  { jornada: 17, local: "La Bañeza", visitante: "La Cistérniga", gLocal: 2, gVis: 1 },
  { jornada: 17, local: "Moraleja", visitante: "Ponferradina B", gLocal: 0, gVis: 3 },
  { jornada: 17, local: "Cubillos", visitante: "Sariegos", gLocal: 0, gVis: 0 },
  { jornada: 17, local: "Béjar Industrial", visitante: "Benavente", gLocal: 1, gVis: 1 },

  // Jornada 18
  { jornada: 18, local: "La Cistérniga", visitante: "Ciudad Rodrigo", gLocal: 4, gVis: 1 },
  { jornada: 18, local: "Salamanca UDS B", visitante: "La Bañeza", gLocal: 2, gVis: 0 },
  { jornada: 18, local: "Zamora B", visitante: "Cubillos", gLocal: 1, gVis: 1 },
  { jornada: 18, local: "Ponferradina B", visitante: "Noname", gLocal: 1, gVis: 3 },
  { jornada: 18, local: "Béjar Industrial", visitante: "Betis", gLocal: 0, gVis: 0 },
  { jornada: 18, local: "Benavente", visitante: "Laguna", gLocal: 3, gVis: 0 },
  { jornada: 18, local: "Victoria", visitante: "Helmántico", gLocal: 3, gVis: 0 },
  { jornada: 18, local: "Sariegos", visitante: "Moraleja", gLocal: 3, gVis: 0 },

  // Jornada 19
  { jornada: 19, local: "Noname", visitante: "Sariegos", gLocal: 2, gVis: 0 },
  { jornada: 19, local: "Moraleja", visitante: "Zamora B", gLocal: 3, gVis: 2 },
  { jornada: 19, local: "Cubillos", visitante: "Victoria", gLocal: 0, gVis: 0 },
  { jornada: 19, local: "Betis", visitante: "La Cistérniga", gLocal: 2, gVis: 1 },
  { jornada: 19, local: "Helmántico", visitante: "Benavente", gLocal: 1, gVis: 0 },
  { jornada: 19, local: "La Bañeza", visitante: "Ponferradina B", gLocal: 5, gVis: 0 },
  { jornada: 19, local: "Ciudad Rodrigo", visitante: "Salamanca UDS B", gLocal: 1, gVis: 1 },
  { jornada: 19, local: "Laguna", visitante: "Béjar Industrial", gLocal: 3, gVis: 2 },

  // Jornada 20
  { jornada: 20, local: "Salamanca UDS B", visitante: "La Cistérniga", gLocal: 3, gVis: 0 },
  { jornada: 20, local: "Zamora B", visitante: "Noname", gLocal: 0, gVis: 1 },
  { jornada: 20, local: "Laguna", visitante: "Betis", gLocal: 1, gVis: 3 },
  { jornada: 20, local: "Victoria", visitante: "Moraleja", gLocal: 0, gVis: 2 },
  { jornada: 20, local: "Sariegos", visitante: "La Bañeza", gLocal: 1, gVis: 0 },
  { jornada: 20, local: "Ponferradina B", visitante: "Ciudad Rodrigo", gLocal: 2, gVis: 1 },
  { jornada: 20, local: "Béjar Industrial", visitante: "Helmántico", gLocal: 2, gVis: 1 },
  { jornada: 20, local: "Benavente", visitante: "Cubillos", gLocal: 0, gVis: 2 },

// Jornada 21
{ jornada: 21, local: "La Cistérniga", visitante: "Ponferradina B", gLocal: 2, gVis: 1 },
{ jornada: 21, local: "Noname", visitante: "Victoria", gLocal: 4, gVis: 2 },
{ jornada: 21, local: "Cubillos", visitante: "Béjar Industrial", gLocal: 0, gVis: 0 },
{ jornada: 21, local: "Moraleja", visitante: "Benavente", gLocal: 1, gVis: 1 },
{ jornada: 21, local: "Betis", visitante: "Salamanca UDS B", gLocal: 1, gVis: 2 },
{ jornada: 21, local: "Ciudad Rodrigo", visitante: "Sariegos", gLocal: 1, gVis: 1 },
{ jornada: 21, local: "La Bañeza", visitante: "Zamora B", gLocal: 1, gVis: 1 },
{ jornada: 21, local: "Helmántico", visitante: "Laguna", gLocal: 5, gVis: 1 },

// Jornada 22
{ jornada: 22, local: "Zamora B", visitante: "Ciudad Rodrigo", gLocal: 2, gVis: 1 },
{ jornada: 22, local: "Laguna", visitante: "Cubillos", gLocal: 1, gVis: 0 },
{ jornada: 22, local: "Victoria", visitante: "La Bañeza", gLocal: 2, gVis: 2 },
{ jornada: 22, local: "Sariegos", visitante: "La Cistérniga", gLocal: 2, gVis: 1 },
{ jornada: 22, local: "Ponferradina B", visitante: "Salamanca UDS B", gLocal: 0, gVis: 4 },
{ jornada: 22, local: "Benavente", visitante: "Noname", gLocal: 2, gVis: 0 },
{ jornada: 22, local: "Béjar Industrial", visitante: "Moraleja", gLocal: 3, gVis: 2 },
{ jornada: 22, local: "Helmántico", visitante: "Betis", gLocal: 0, gVis: 2 },

// Jornada 23
{ jornada: 23, local: "La Cistérniga", visitante: "Zamora B", gLocal: 2, gVis: 0 },
{ jornada: 23, local: "Noname", visitante: "Béjar Industrial", gLocal: 4, gVis: 2 },
{ jornada: 23, local: "Betis", visitante: "Ponferradina B", gLocal: 0, gVis: 0 },
{ jornada: 23, local: "Salamanca UDS B", visitante: "Sariegos", gLocal: 1, gVis: 0 },
{ jornada: 23, local: "Moraleja", visitante: "Laguna", gLocal: 1, gVis: 2 },
{ jornada: 23, local: "Cubillos", visitante: "Helmántico", gLocal: 1, gVis: 0 },
{ jornada: 23, local: "La Bañeza", visitante: "Benavente", gLocal: 1, gVis: 0 },
{ jornada: 23, local: "Ciudad Rodrigo", visitante: "Victoria", gLocal: 0, gVis: 0 },

// Jornada 24
{ jornada: 24, local: "Laguna", visitante: "Noname", gLocal: 0, gVis: 0 },
{ jornada: 24, local: "Cubillos", visitante: "Betis", gLocal: 1, gVis: 2 },
{ jornada: 24, local: "Victoria", visitante: "La Cistérniga", gLocal: 2, gVis: 1 },
{ jornada: 24, local: "Helmántico", visitante: "Moraleja", gLocal: 1, gVis: 2 },
{ jornada: 24, local: "Zamora B", visitante: "Salamanca UDS B", gLocal: 2, gVis: 6 },
{ jornada: 24, local: "Sariegos", visitante: "Ponferradina B", gLocal: 0, gVis: 0 },
{ jornada: 24, local: "Béjar Industrial", visitante: "La Bañeza", gLocal: 3, gVis: 2 },
{ jornada: 24, local: "Benavente", visitante: "Ciudad Rodrigo", gLocal: 2, gVis: 1 },

// Jornada 25
{ jornada: 25, local: "La Cistérniga", visitante: "Benavente", gLocal: 2, gVis: 1 },
{ jornada: 25, local: "Noname", visitante: "Helmántico", gLocal: 2, gVis: 4 },
{ jornada: 25, local: "Moraleja", visitante: "Cubillos", gLocal: 0, gVis: 2 },
{ jornada: 25, local: "Betis", visitante: "Sariegos", gLocal: 2, gVis: 0 },
{ jornada: 25, local: "Salamanca UDS B", visitante: "Victoria", gLocal: 1, gVis: 1 },
{ jornada: 25, local: "Ponferradina B", visitante: "Zamora B", gLocal: 0, gVis: 2 },
{ jornada: 25, local: "Ciudad Rodrigo", visitante: "Béjar Industrial", gLocal: 2, gVis: 0 },
{ jornada: 25, local: "La Bañeza", visitante: "Laguna", gLocal: 1, gVis: 0 },

// Jornada 26
{ jornada: 26, local: "Zamora B", visitante: "Sariegos", gLocal: 2, gVis: 2 },
{ jornada: 26, local: "Victoria", visitante: "Ponferradina B", gLocal: 4, gVis: 0 },
{ jornada: 26, local: "Benavente", visitante: "Salamanca UDS B", gLocal: 0, gVis: 2 },
{ jornada: 26, local: "Béjar Industrial", visitante: "La Cistérniga", gLocal: 3, gVis: 2 },
{ jornada: 26, local: "Laguna", visitante: "Ciudad Rodrigo", gLocal: 0, gVis: 0 },
{ jornada: 26, local: "Helmántico", visitante: "La Bañeza", gLocal: 0, gVis: 1 },
{ jornada: 26, local: "Cubillos", visitante: "Noname", gLocal: 0, gVis: 0 },
{ jornada: 26, local: "Moraleja", visitante: "Betis", gLocal: 0, gVis: 4 },

// Jornada 27
{ jornada: 27, local: "Betis", visitante: "Zamora B", gLocal: 1, gVis: 3 },
{ jornada: 27, local: "Sariegos", visitante: "Victoria", gLocal: 1, gVis: 0 },
{ jornada: 27, local: "Ponferradina B", visitante: "Benavente", gLocal: 3, gVis: 1 },
{ jornada: 27, local: "Salamanca UDS B", visitante: "Béjar Industrial", gLocal: 0, gVis: 0 },
{ jornada: 27, local: "La Cistérniga", visitante: "Laguna", gLocal: 2, gVis: 0 },
{ jornada: 27, local: "Ciudad Rodrigo", visitante: "Helmántico", gLocal: 2, gVis: 0 },
{ jornada: 27, local: "La Bañeza", visitante: "Cubillos", gLocal: 1, gVis: 2 },
{ jornada: 27, local: "Noname", visitante: "Moraleja", gLocal: 1, gVis: 3 },

// Jornada 28
{ jornada: 28, local: "Victoria", visitante: "Zamora B", gLocal: 2, gVis: 0 },
{ jornada: 28, local: "Benavente", visitante: "Sariegos", gLocal: 1, gVis: 0 },
{ jornada: 28, local: "Béjar Industrial", visitante: "Ponferradina B", gLocal: 2, gVis: 1 },
{ jornada: 28, local: "Laguna", visitante: "Salamanca UDS B", gLocal: 1, gVis: 1 },
{ jornada: 28, local: "Helmántico", visitante: "La Cistérniga", gLocal: 1, gVis: 5 },
{ jornada: 28, local: "Cubillos", visitante: "Ciudad Rodrigo", gLocal: 2, gVis: 1 },
{ jornada: 28, local: "Moraleja", visitante: "La Bañeza", gLocal: 0, gVis: 3 },
{ jornada: 28, local: "Noname", visitante: "Betis", gLocal: 1, gVis: 1 },

// Jornada 29
{ jornada: 29, local: "Victoria", visitante: "Betis", gLocal: null, gVis: null },
{ jornada: 29, local: "Zamora B", visitante: "Benavente", gLocal: null, gVis: null },
{ jornada: 29, local: "Sariegos", visitante: "Béjar Industrial", gLocal: null, gVis: null },
{ jornada: 29, local: "Ponferradina B", visitante: "Laguna", gLocal: null, gVis: null },
{ jornada: 29, local: "Salamanca UDS B", visitante: "Helmántico", gLocal: null, gVis: null },
{ jornada: 29, local: "La Cistérniga", visitante: "Cubillos", gLocal: null, gVis: null },
{ jornada: 29, local: "Ciudad Rodrigo", visitante: "Moraleja", gLocal: null, gVis: null },
{ jornada: 29, local: "La Bañeza", visitante: "Noname", gLocal: null, gVis: null },

// Jornada 30
{ jornada: 30, local: "Benavente", visitante: "Victoria", gLocal: null, gVis: null },
{ jornada: 30, local: "Béjar Industrial", visitante: "Zamora B", gLocal: null, gVis: null },
{ jornada: 30, local: "Laguna", visitante: "Sariegos", gLocal: null, gVis: null },
{ jornada: 30, local: "Helmántico", visitante: "Ponferradina B", gLocal: null, gVis: null },
{ jornada: 30, local: "Cubillos", visitante: "Salamanca UDS B", gLocal: null, gVis: null },
{ jornada: 30, local: "Moraleja", visitante: "La Cistérniga", gLocal: null, gVis: null },
{ jornada: 30, local: "Noname", visitante: "Ciudad Rodrigo", gLocal: null, gVis: null },
{ jornada: 30, local: "Betis", visitante: "La Bañeza", gLocal: null, gVis: null },

];

let jornadasDisponibles = [];
let jornadaActual = 26;
let posicionesBaseJornada = {};
let simulacionFinalizada = false;

function crearTablaBase() {
  const tabla = {};
  for (let i = 0; i < equipos.length; i++) {
    const e = equipos[i];
    tabla[e] = {
      equipo: e,
      PJ: 0,
      PG: 0,
      PE: 0,
      PP: 0,
      GF: 0,
      GC: 0,
      PTS: 0,
      directos: {}
    };
  }
  return tabla;
}

function asegurarDirecto(tabla, eq1, eq2) {
  if (!tabla[eq1].directos[eq2]) {
    tabla[eq1].directos[eq2] = {
      partidos: 0,
      puntos: 0,
      gf: 0,
      gc: 0
    };
  }
}

function partidoJugado(p) {
  return Number.isInteger(p.gLocal) && Number.isInteger(p.gVis);
}

function jornadaCompleta(numeroJornada) {
  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (p.jornada === numeroJornada && !partidoJugado(p)) {
      return false;
    }
  }
  return true;
}

function aplicarPartido(tabla, local, visitante, gl, gv) {
  const home = tabla[local];
  const away = tabla[visitante];

  home.PJ += 1;
  away.PJ += 1;

  home.GF += gl;
  home.GC += gv;
  away.GF += gv;
  away.GC += gl;

  asegurarDirecto(tabla, local, visitante);
  asegurarDirecto(tabla, visitante, local);

  tabla[local].directos[visitante].partidos += 1;
  tabla[visitante].directos[local].partidos += 1;

  tabla[local].directos[visitante].gf += gl;
  tabla[local].directos[visitante].gc += gv;
  tabla[visitante].directos[local].gf += gv;
  tabla[visitante].directos[local].gc += gl;

  if (gl > gv) {
    home.PG += 1;
    away.PP += 1;
    home.PTS += 3;
    tabla[local].directos[visitante].puntos += 3;
  } else if (gl < gv) {
    away.PG += 1;
    home.PP += 1;
    away.PTS += 3;
    tabla[visitante].directos[local].puntos += 3;
  } else {
    home.PE += 1;
    away.PE += 1;
    home.PTS += 1;
    away.PTS += 1;
    tabla[local].directos[visitante].puntos += 1;
    tabla[visitante].directos[local].puntos += 1;
  }
}

function compararPorGeneral(a, b) {
  const dgA = a.GF - a.GC;
  const dgB = b.GF - b.GC;

  if (dgB !== dgA) return dgB - dgA;
  if (b.GF !== a.GF) return b.GF - a.GF;

  return a.equipo.localeCompare(b.equipo, "es");
}

function compararDosEquipos(a, b) {
  if (b.PTS !== a.PTS) {
    return b.PTS - a.PTS;
  }

  const da = a.directos[b.equipo];
  const db = b.directos[a.equipo];

  // Solo vale el enfrentamiento directo si están jugados LOS DOS partidos
  if (da && db && da.partidos === 2 && db.partidos === 2) {
    if (db.puntos !== da.puntos) {
      return db.puntos - da.puntos;
    }

    const diffA = da.gf - da.gc;
    const diffB = db.gf - db.gc;
    if (diffB !== diffA) {
      return diffB - diffA;
    }

    if (db.gf !== da.gf) {
      return db.gf - da.gf;
    }
  }

  return compararPorGeneral(a, b);
}

function estanTodosLosPartidosMiniLiga(grupo) {
  const n = grupo.length;
  const partidosEsperadosPorEquipo = (n - 1) * 2;

  for (let i = 0; i < grupo.length; i++) {
    let jugados = 0;
    const eq = grupo[i];

    for (let j = 0; j < grupo.length; j++) {
      if (i === j) continue;
      const rival = grupo[j];

      if (eq.directos[rival.equipo]) {
        jugados += eq.directos[rival.equipo].partidos;
      }
    }

    if (jugados !== partidosEsperadosPorEquipo) {
      return false;
    }
  }

  return true;
}

function crearMiniClasificacion(grupo) {
  const mini = {};

  for (let i = 0; i < grupo.length; i++) {
    const e = grupo[i];
    mini[e.equipo] = {
      equipo: e.equipo,
      PTS: 0,
      GF: 0,
      GC: 0
    };
  }

  for (let i = 0; i < grupo.length; i++) {
    const e = grupo[i];

    for (let j = 0; j < grupo.length; j++) {
      if (i === j) continue;

      const rival = grupo[j];
      const dir = e.directos[rival.equipo];

      if (dir) {
        mini[e.equipo].PTS += dir.puntos;
        mini[e.equipo].GF += dir.gf;
        mini[e.equipo].GC += dir.gc;
      }
    }
  }

  return mini;
}

function ordenarGrupoEmpatado(grupo) {
  if (grupo.length === 1) return grupo;

  if (grupo.length === 2) {
    return grupo.slice().sort(compararDosEquipos);
  }

  // 3 o más empatados: miniclasificación SOLO si están todos los partidos
  if (estanTodosLosPartidosMiniLiga(grupo)) {
    const mini = crearMiniClasificacion(grupo);

    return grupo.slice().sort((a, b) => {
      const ma = mini[a.equipo];
      const mb = mini[b.equipo];

      if (mb.PTS !== ma.PTS) {
        return mb.PTS - ma.PTS;
      }

      const dgMiniA = ma.GF - ma.GC;
      const dgMiniB = mb.GF - mb.GC;
      if (dgMiniB !== dgMiniA) {
        return dgMiniB - dgMiniA;
      }

      if (mb.GF !== ma.GF) {
        return mb.GF - ma.GF;
      }

      return compararPorGeneral(a, b);
    });
  }

  // Si no está completa la miniliga, ir a DG general
  return grupo.slice().sort(compararPorGeneral);
}

function ordenarClasificacionConEmpates(clasificacionBase) {
  const grupos = [];
  let grupoActual = [];

  for (let i = 0; i < clasificacionBase.length; i++) {
    const equipo = clasificacionBase[i];

    if (grupoActual.length === 0) {
      grupoActual.push(equipo);
      continue;
    }

    if (equipo.PTS === grupoActual[0].PTS) {
      grupoActual.push(equipo);
    } else {
      grupos.push(grupoActual);
      grupoActual = [equipo];
    }
  }

  if (grupoActual.length > 0) {
    grupos.push(grupoActual);
  }

  let resultado = [];
  for (let i = 0; i < grupos.length; i++) {
    resultado = resultado.concat(ordenarGrupoEmpatado(grupos[i]));
  }

  return resultado;
}

function obtenerPosicionesClasificacionActual() {
  const tabla = crearTablaBase();

  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (!partidoJugado(p)) continue;
    aplicarPartido(tabla, p.local, p.visitante, p.gLocal, p.gVis);
  }

  const clasificacionBase = Object.values(tabla).sort((a, b) => {
    if (b.PTS !== a.PTS) return b.PTS - a.PTS;
    return a.equipo.localeCompare(b.equipo, "es");
  });

  const clasificacion = ordenarClasificacionConEmpates(clasificacionBase);
  const posiciones = {};

  for (let i = 0; i < clasificacion.length; i++) {
    posiciones[clasificacion[i].equipo] = i + 1;
  }

  return posiciones;
}

function reiniciarReferenciaJornada() {
  posicionesBaseJornada = obtenerPosicionesClasificacionActual();
}

function construirListaJornadas() {
  jornadasDisponibles = [];
  for (let i = 0; i < partidos.length; i++) {
    if (!jornadasDisponibles.includes(partidos[i].jornada)) {
      jornadasDisponibles.push(partidos[i].jornada);
    }
  }
  jornadasDisponibles.sort(function (a, b) {
    return a - b;
  });
}

function obtenerPrimeraJornadaPendiente() {
  construirListaJornadas();

  for (let j = 0; j < jornadasDisponibles.length; j++) {
    const numeroJornada = jornadasDisponibles[j];

    for (let i = 0; i < partidos.length; i++) {
      const p = partidos[i];
      if (p.jornada === numeroJornada && !partidoJugado(p)) {
        return numeroJornada;
      }
    }
  }

  // Si todas están completas, ir a la última
  return jornadasDisponibles[jornadasDisponibles.length - 1];
}

function mostrarPartidos() {
  const contenedor = document.getElementById("partidos");
  if (!contenedor) return;

  construirListaJornadas();

  if (!jornadasDisponibles.includes(jornadaActual)) {
    jornadaActual = jornadasDisponibles[0];
  }

  contenedor.innerHTML = "";

  const titulo = document.getElementById("titulo-jornada");
  if (titulo) {
    titulo.textContent = "Jornada " + jornadaActual;
  }

  const bloque = document.createElement("div");
  bloque.className = "bloque-jornada";

  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (p.jornada !== jornadaActual) continue;

    const fila = document.createElement("div");
    fila.className = "fila-partido";

    const spanLocal = document.createElement("span");
    spanLocal.className = "equipo-local";
    spanLocal.innerHTML =
      `<img class="escudo" src="${obtenerEscudo(p.local)}" alt="${p.local}">
       <span>${p.local}</span>`;

    const inputLocal = document.createElement("input");
    inputLocal.type = "number";
    inputLocal.min = "0";
    inputLocal.id = "gl" + i;
    inputLocal.value = partidoJugado(p) ? p.gLocal : "";

    const guion = document.createElement("span");
    guion.className = "guion";
    guion.textContent = "-";

    const inputVis = document.createElement("input");
    inputVis.type = "number";
    inputVis.min = "0";
    inputVis.id = "gv" + i;
    inputVis.value = partidoJugado(p) ? p.gVis : "";

    const spanVis = document.createElement("span");
    spanVis.className = "equipo-visitante";
    spanVis.innerHTML =
      `<img class="escudo" src="${obtenerEscudo(p.visitante)}" alt="${p.visitante}">
       <span>${p.visitante}</span>`;

    fila.appendChild(spanLocal);
    fila.appendChild(inputLocal);
    fila.appendChild(guion);
    fila.appendChild(inputVis);
    fila.appendChild(spanVis);

    bloque.appendChild(fila);
  }

  contenedor.appendChild(bloque);

  const inputs = contenedor.querySelectorAll('input[type="number"]');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
      leerResultados();
      calcularClasificacion();
    });
  }

  actualizarBotonesJornada();
}

function leerResultados() {
  for (let i = 0; i < partidos.length; i++) {
    const gl = document.getElementById("gl" + i);
    const gv = document.getElementById("gv" + i);

    if (!gl || !gv) continue;

    const valorLocal = gl.value.trim();
    const valorVis = gv.value.trim();

    partidos[i].gLocal = valorLocal === "" ? null : parseInt(valorLocal, 10);
    partidos[i].gVis = valorVis === "" ? null : parseInt(valorVis, 10);
  }
}

function obtenerClasificacionActual() {
  const tabla = crearTablaBase();

  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (!partidoJugado(p)) continue;
    aplicarPartido(tabla, p.local, p.visitante, p.gLocal, p.gVis);
  }

  // Aplicar sanción
  if (tabla["Helmántico"]) {
    tabla["Helmántico"].PTS -= 3;
  }

  const clasificacionBase = Object.values(tabla).sort((a, b) => {
    if (b.PTS !== a.PTS) return b.PTS - a.PTS;
    return a.equipo.localeCompare(b.equipo, "es");
  });

  return ordenarClasificacionConEmpates(clasificacionBase);
}

function renderizarResumenFinal(clasificacion) {
  const contenedor = document.getElementById("partidos");
  if (!contenedor) return;

  const ascensoDirecto = clasificacion[0];
  const playoff = clasificacion.slice(1, 3);
  const arrastre = clasificacion.slice(10, 13);
  const descenso = clasificacion.slice(13, 16);

  function renderEquipoResumen(equipo) {
    return `
      <span class="equipo-resumen">
        <img class="escudo" src="${obtenerEscudo(equipo.equipo)}" alt="${equipo.equipo}">
        <span>${equipo.equipo}</span>
      </span>
    `;
  }

  contenedor.innerHTML = `
    <div class="resumen-final">
      <h3>Resumen final de la liga</h3>

      <div class="linea-resumen">
        <span class="punto-resumen punto-verde"></span>
        <div>
          <strong>Ascenso directo a 3ª RFEF:</strong>
          ${renderEquipoResumen(ascensoDirecto)}
        </div>
      </div>

      <div class="linea-resumen">
        <span class="punto-resumen punto-naranja"></span>
        <div>
          <strong>Play-off:</strong>
          ${playoff.map(renderEquipoResumen).join("")}
        </div>
      </div>

      <div class="linea-resumen">
        <span class="punto-resumen punto-morado"></span>
        <div>
          <strong>En peligro por arrastre:</strong>
          ${arrastre.map(renderEquipoResumen).join("")}
        </div>
      </div>

      <div class="linea-resumen">
        <span class="punto-resumen punto-rojo"></span>
        <div>
          <strong>Descenso a Provincial:</strong>
          ${descenso.map(renderEquipoResumen).join("")}
        </div>
      </div>

      <div class="bloque-descarga-clasificacion">
        <p class="texto-descarga-clasificacion">
          Descarga tu clasificación y envíasela a Juandi
        </p>
        <button id="btn-descargar-clasificacion" type="button">
          Descargar clasificación
        </button>
      </div>
    </div>
  `;

  const btnDescargar = document.getElementById("btn-descargar-clasificacion");
  if (btnDescargar) {
    btnDescargar.addEventListener("click", descargarClasificacionComoImagen);
  }
}

function descargarClasificacionComoImagen() {
  const tabla = document.getElementById("tabla-clasificacion");
  if (!tabla) return;

  html2canvas(tabla, {
    backgroundColor: "#ffffff",
    scale: 2
  }).then((canvas) => {
    const enlace = document.createElement("a");
    enlace.download = "clasificacion-final.png";
    enlace.href = canvas.toDataURL("image/png");
    enlace.click();
  });
}

function calcularClasificacion() {
  leerResultados();

  const clasificacion = obtenerClasificacionActual();

  const tbody = document.querySelector("#tabla-clasificacion tbody");

  const posicionesAntes = {};
  const filasActuales = tbody.querySelectorAll("tr");
  filasActuales.forEach((fila) => {
    posicionesAntes[fila.dataset.equipo] = fila.getBoundingClientRect().top;
  });

  tbody.innerHTML = "";

  for (let i = 0; i < clasificacion.length; i++) {
    const e = clasificacion[i];
    const tr = document.createElement("tr");
    tr.dataset.equipo = e.equipo;

    if (i === 0) {
  tr.classList.add("pos-ascenso");
} else if (i >= 1 && i <= 2) {
  tr.classList.add("pos-playoff");
} else if (i >= 10 && i <= 12) {
  tr.classList.add("pos-arrastre");
} else if (i >= 13 && i <= 15) {
  tr.classList.add("pos-descenso");
}

    let flecha = "";
    const posicionBase = posicionesBaseJornada[e.equipo];
    const posicionActual = i + 1;

    if (posicionBase !== undefined) {
      if (posicionActual < posicionBase) {
        flecha = '<span class="flecha-sube">▲</span>';
      } else if (posicionActual > posicionBase) {
        flecha = '<span class="flecha-baja">▼</span>';
      }
    }

    tr.innerHTML =
      `<td>${posicionActual} ${flecha}</td>
       <td>
         <div class="equipo-con-escudo">
           <img class="escudo" src="${obtenerEscudo(e.equipo)}" alt="${e.equipo}">
           <span>${e.equipo}</span>
         </div>
       </td>
       <td class="col-puntos">${e.PTS}</td>
       <td>${e.PJ}</td>
       <td>${e.PG}</td>
       <td>${e.PE}</td>
       <td>${e.PP}</td>
       <td>${e.GF}</td>
       <td>${e.GC}</td>
       <td>${e.GF - e.GC}</td>`;

    tbody.appendChild(tr);
  }

  requestAnimationFrame(() => {
    animarCambiosTabla(tbody, posicionesAntes);
  });

  const jugados = partidos.filter(partidoJugado).length;
  const estado = document.getElementById("estado");
  if (estado) {
    estado.textContent = "Clasificación actualizada. Partidos contabilizados: " + jugados;
  }

  actualizarBotonesJornada();
}

function actualizarBotonesJornada() {
  construirListaJornadas();

  const btnAnterior = document.getElementById("btn-anterior");
  const btnSiguiente = document.getElementById("btn-siguiente");

  if (!btnAnterior || !btnSiguiente) return;

  // Si estamos en la pantalla final
  if (simulacionFinalizada) {
    btnAnterior.disabled = false;
    btnAnterior.style.display = "";
    btnSiguiente.style.display = "none";
    return;
  }

  const indice = jornadasDisponibles.indexOf(jornadaActual);

  btnAnterior.style.display = "";
  btnSiguiente.style.display = "";

  btnAnterior.disabled = indice <= 0;

  const esUltimaJornada = indice === jornadasDisponibles.length - 1;
  const ultimaJornadaCompleta = jornadaCompleta(jornadaActual);

  if (esUltimaJornada && ultimaJornadaCompleta) {
    btnSiguiente.disabled = false;
    btnSiguiente.textContent = "Finalizar";
  } else {
    btnSiguiente.textContent = "→";
    btnSiguiente.disabled = indice === -1 || indice >= jornadasDisponibles.length - 1;
  }
}

function irAJornadaAnterior() {
  construirListaJornadas();

  const btnSiguiente = document.getElementById("btn-siguiente");
  const botonCalcular = document.getElementById("calcular");

  // Si estamos en la pantalla final, volver a la última jornada
  if (simulacionFinalizada) {
    simulacionFinalizada = false;

    jornadaActual = jornadasDisponibles[jornadasDisponibles.length - 1];

    if (btnSiguiente) {
      btnSiguiente.style.display = "";
      btnSiguiente.textContent = "→";
    }

    if (botonCalcular) {
      botonCalcular.style.display = "";
    }

    reiniciarReferenciaJornada();
    mostrarPartidos();
    calcularClasificacion();
    return;
  }

  const indice = jornadasDisponibles.indexOf(jornadaActual);

  if (indice > 0) {
    jornadaActual = jornadasDisponibles[indice - 1];
    reiniciarReferenciaJornada();
    mostrarPartidos();
    calcularClasificacion();
  }
}

function finalizarSimulacion() {
  leerResultados();

  const clasificacion = obtenerClasificacionActual();
  simulacionFinalizada = true;

  const btnSiguiente = document.getElementById("btn-siguiente");
  if (btnSiguiente) {
    btnSiguiente.style.display = "none";
  }

  const titulo = document.getElementById("titulo-jornada");
  if (titulo) {
    titulo.textContent = "Resumen final";
  }

  const botonCalcular = document.getElementById("calcular");
  if (botonCalcular) {
    botonCalcular.style.display = "none";
  }

  renderizarResumenFinal(clasificacion);
  calcularClasificacion();

  const estado = document.getElementById("estado");
  if (estado) {
    estado.textContent = "Simulación finalizada.";
  }
}

function finalizarSimulacion() {
  leerResultados();

  const clasificacion = obtenerClasificacionActual();
  simulacionFinalizada = true;

  const btnSiguiente = document.getElementById("btn-siguiente");
  if (btnSiguiente) {
    btnSiguiente.style.display = "none";
  }

  const titulo = document.getElementById("titulo-jornada");
  if (titulo) {
    titulo.textContent = "Resumen final";
  }

  const botonCalcular = document.getElementById("calcular");
  if (botonCalcular) {
    botonCalcular.style.display = "none";
  }

  renderizarResumenFinal(clasificacion);
  calcularClasificacion();

  const estado = document.getElementById("estado");
  if (estado) {
    estado.textContent = "Simulación finalizada.";
  }

  actualizarBotonesJornada();
}

function irAJornadaSiguiente() {
  construirListaJornadas();

  if (simulacionFinalizada) return;

  const indice = jornadasDisponibles.indexOf(jornadaActual);
  const esUltimaJornada = indice === jornadasDisponibles.length - 1;
  const ultimaJornadaCompleta = jornadaCompleta(jornadaActual);

  if (esUltimaJornada && ultimaJornadaCompleta) {
    finalizarSimulacion();
    return;
  }

  if (indice !== -1 && indice < jornadasDisponibles.length - 1) {
    jornadaActual = jornadasDisponibles[indice + 1];
    reiniciarReferenciaJornada();
    mostrarPartidos();
    calcularClasificacion();
  }
}

function obtenerEscudo(equipo) {
  return escudos[equipo] || "";
}

window.onload = function () {
  jornadaActual = obtenerPrimeraJornadaPendiente();
  reiniciarReferenciaJornada();
  mostrarPartidos();
  calcularClasificacion();

  const boton = document.getElementById("calcular");
  if (boton) {
    boton.addEventListener("click", calcularClasificacion);
  }

  const btnAnterior = document.getElementById("btn-anterior");
  if (btnAnterior) {
    btnAnterior.addEventListener("click", irAJornadaAnterior);
  }

  const btnSiguiente = document.getElementById("btn-siguiente");
  if (btnSiguiente) {
    btnSiguiente.addEventListener("click", irAJornadaSiguiente);
  }
};