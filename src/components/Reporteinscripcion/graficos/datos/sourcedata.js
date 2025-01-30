const sourcedata = [
  {
    label: "lunes",
    estexit: 404,
    estinsc: 290,
  },
  {
    label: "martes",
    estexit: 256,
    estinsc: 38,
  },
  {
    label: "miercoles",
    estexit: 122,
    estinsc: 0,
  },
  {
    label: "jueves",
    estexit: 538,
    estinsc: 0,
  },
  {
    label: "viernes",
    estexit: 103,
    estinsc: 0,
  },
];

sourcedata.push({
  label: "Total",
  estexit: sourcedata.reduce((prev, curr) => prev + curr.estexit, 0),
  estinsc: sourcedata.reduce((prev, curr) => prev + curr.estinsc, 0),
});

export default sourcedata;
