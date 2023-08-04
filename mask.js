$(":input").inputmask();
$("#age").inputmask('Regex', {regex: "^[0-9]{1,6}(\\.\\d{1,2})?$"});
$("#cpf").inputmask({"mask": "999.999.999-99"});
$("#value").inputmask({"mask": "999.999.999-99"});
