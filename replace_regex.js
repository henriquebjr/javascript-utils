// CPF
var cpf = "04695493223";
cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

// CNPJ
var cnpj = "53113791000122";
cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');

// CEP
var cep = "89222333";
cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');

// PHONE
var phone = "1120204040";
phone = phone.replace(/(\d\d)(\d{4})(\d{4})/, '($1) $2-$3');

// CELLPHONE
var cellphone = "11999882211";
cellphone = cellphone.replace(/(\d\d)(\d{5})(\d{4})/, '($1) $2-$3');

// CARPLATE
var carplate = "CCX6020";
carplate = carplate.replace(/([a-zA-Z]{3})(\d{4})/, '$1-$2');

// CURRENCY
var currencyValue = "1000";
if(isNaN(currencyValue)) {
    currencyValue = 0;
}
currencyValue =  Number(currencyValue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// ONLY NUMBERS
var onlyNumbers = "a1b2c3";
onlyNumbers = onlyNumbers.replace(/\D+/g, '');
