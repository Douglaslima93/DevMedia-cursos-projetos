const chuvaDeMeteoros = [
    { nome: 'Alfa Centaurídeos', declinacao: -59 },
    { nome: 'Gama Normídeos', declinacao: -50 },
    { nome: 'Pi Pupídeos', declinacao: -45 },
    { nome: 'Líridas', declinacao: 34 },
    { nome: 'Eta Aquáridas', declinacao: -1 },
    { nome: 'Eta Líridas', declinacao: 44 },
    { nome: 'Bootídeos de Junho', declinacao: 48 },
    { nome: 'Alfa Capricornídeos', declinacao: -10 },
    { nome: 'Delta Aquáridas do Sul', declinacao: -16 },
    { nome: 'Piscis Austrinídeos', declinacao: -30 },
    { nome: 'Perseidas', declinacao: 58 },
  ];

  const chuvasNoNorte = chuvaDeMeteoros.filter(
    (chuva) => chuva.declinacao >= 0
  );

  const chuvaNoSul = chuvaDeMeteoros.filter(
    (chuva) => chuva.declinacao < 0
  );

  const imprimeChuva = function(chuva) {
    console.log(chuva)
  };

  console.log("\nChuvas no hemisfeiro Norte:\n");
  chuvasNoNorte.forEach(imprimeChuva);

  console.log("\nChuvas no hemisferio Sul:\n");
  chuvaNoSul.forEach(imprimeChuva);