$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Você deve digitar o seu nome",
                    minlength: "O tamanho minimo é 2"
                },
                subject: {
                    required: "Você deve digitar um assunto",
                    minlength: "O tamanho minimo é 4"
                },
                email: {
                    required: "É necessário informar seu e-mail"
                },
                message: {
                    required: "Qual a sua mensagem",
                    minlength: "O tamanho minimo é 10"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"enviaremail.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            /*$(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
                            $('#success').modal('show');*/
                            alert("Mensagem enviado com sucesso!");
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            alert("Houve um erro ao enviar sua mensagem!");

                            /*$('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');*/
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})