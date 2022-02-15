//Start
$( document ).ready(function() {
    MaskPhoneNumber();
    MaskAreCodeNumber();
    SubmitForm();
});


/*
Define um limite de 11 numeros
RegExp:
\D - Corresponde qualquer caractere que não é um dígito no alfabeto basic Latin. Equivalente a [^0-9].
\ - Para caracteres que são geralmente tratados literalmente, indica que o próximo caractere é especial e não deve ser interpretado literalmente.
g - corresponder globalmente; acha todas as correspondências em vez de parar após achar a primeira
*/
function MaskPhoneNumber()
{
    var behavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        }
    };
    
    //Coloca uma mascara de telefone na entrada de texto Telefone
    $('#phonenumber').mask(behavior, options);
}

function MaskAreCodeNumber()
{
    var behavior = function (val) {
        return val.replace(/\D/g, '').length === 4 ? '000' : '0000';
    },
    options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        }
    };
    
    //Coloca uma mascara de telefone na entrada de texto Telefone
    $('#arecode').mask(behavior, options);
}

//Alerta para adicionar o nome do usuário
function SubmitForm()
{
    $("#submitbtn").click(function()
    {
       if( $('#name').val().length != 0 && $('#lastname').val().length != 0 ) 
       {
          alert("Escreva seu nome");
       }
    });
}

