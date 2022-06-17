let number = '102.343.000,40'

let replace = number.replace(',','.')

document.write("Replace: " + replace + "<br>")


/*
document.write("parseInt: " + parseInt(replace)+ "<br>")
document.write("parseFloat: " + parseFloat(replace) + "<br>")
document.write("Number: " + Number(replace)+ "<br>")
document.write("+nome_da_var: " + +replace + "<br>")
*/




function parsePotentiallyGroupedFloat(stringValue) {
    stringValue = stringValue.trim(); //trim() limpar os espaços brancos do começo e final da string
    console.log(stringValue);
    var result = stringValue.replace(/[^0-9]/g, '');
    if (/[,\.]\d{2}$/.test(stringValue)) {
        result = result.replace(/(\d{2})$/, '.$1');
    }
    return parseFloat(result);
}

document.write(parsePotentiallyGroupedFloat(number))