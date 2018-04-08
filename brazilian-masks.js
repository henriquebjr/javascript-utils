var masks = function() {
  function cpf(value) {
    value = ensureThatIsAString(value);
    value = paddingLeft(11, value);
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  function cnpj(value) {
    value = ensureThatIsAString(value);
    value = paddingLeft(14, value);
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

  function cep(value) {
    value = ensureThatIsAString(value);
    value = paddingLeft(8, value);
    return value.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  function phone(value) {
    value = ensureThatIsAString(value);
    return value.replace(/(\d\d)(\d{4})(\d{4})/, '($1) $2-$3');
  }

  function cellphone(value) {
    value = ensureThatIsAString(value);
    return value.replace(/(\d\d)(\d{5})(\d{4})/, '($1) $2-$3');
  }

  function carplate(value) {
    value = ensureThatIsAString(value);
    return value.replace(/([a-zA-Z]{3})(\d{4})/, '$1-$2');
  }

  function ensureThatIsAString(value) {
    if(value !== undefined) {
      if (typeof value === 'string' || value instanceof String) {
        return value;
      } else {
        return value.toString();
      }
    }
    return "";
  }

  function paddingLeft(min,  content) {
    content = content.replace(/\D+/g, '');

    while(content.length < min) {
      content = "0" + content;
    }
    return content;
  }

  function currency(value) {
    if(isNaN(value)) {
        value = 0;
    }
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  return {
    cpf: function(value) {
      return cpf(value);
    },
    cnpj: function(value) {
      return cnpj(value);
    },
    cep: function(value) {
      return cep(value);
    },
    phone: function(value) {
      return phone(value);
    },
    cellphone: function(value) {
      return cellphone(value);
    },
    carplate: function(value) {
      return carplate(value);
    },
    currency: function(value) {
      return currency(value);
    },
  };
}();
