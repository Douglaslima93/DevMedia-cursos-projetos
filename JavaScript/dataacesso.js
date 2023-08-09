const dataUltimoAcesso = new Date('2023/08/09 9:00');
const dataAtual = new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferecaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 *60;
const milissegundosDia = milissegundosHora * 24;

let msn = "";

if ( hora < 6 || hora >=18) 
{
    msn = "Boa noite\n";
}
else if (hora >=6 && hora < 12)
{
    msn = "Bom dia\n";
}
else {
    msn = "Boa tarde\n";
}




if (diferecaTime > milissegundosDia) 
{
    msn += "Você esta ausente há dias!!!";
}
else if (diferecaTime > milissegundosHora)
{
    msn += "Você esta ausente há horas!!!";
}
else 
{
    msn += "Que bom que ainda esta aqui";
}

console.log(msn);