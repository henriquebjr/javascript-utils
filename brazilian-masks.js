var masks = function() {
  function applyCpfMask(value) {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  function cnpj(value) {
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

  function cep(value) {
    return value.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  function phone(value) {
    return value.replace(/(\d\d)(\d{4})(\d{4})/, '($1) $2-$3');
  }

  function cellphone(value) {
    return value.replace(/(\d\d)(\d{5})(\d{4})/, '($1) $2-$3');
  }

  function carplate(value) {
    return value.replace(/([a-zA-Z]{3})(\d{4})/, '$1-$2');
  }

  function  currency(value) {
    if(isNaN(value)) {
        value = 0;
    }
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  return {
    cpf: function(value) {
      return applyCpfMask(value);
    }
  };
}();
