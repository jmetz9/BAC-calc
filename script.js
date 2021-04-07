$(document).ready(function () {
    $("button").on("click", calculate);
});


function calculate()
{

    let beers = parseFloat( $("#amountOfBeer").val() );
    let ouncesOfBeer = beers*0.54;

    let wine = parseFloat( $("#amountOfWine").val() );
    let ouncesOfWine = wine*0.6;

    let shots = parseFloat( $("#amountOfShots").val() );
    let ouncesOfShots = shots*0.6;

    let totalLiquidOunces = ouncesOfBeer + ouncesOfShots + ouncesOfWine;

    let weight = parseFloat( $("#weight").val() );

    let hours = parseFloat( $("#numberOfHours").val() );

    let totalBAC = ((totalLiquidOunces*7.5)/weight)-(hours*0.015)

    $("span#totalBAC").text(totalBAC.toFixed(3));

    $(".output").show();
}