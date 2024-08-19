$('#formlogin').submit(function(e){
    e.preventDefault();

    var cod = $('#cod_bombeiro').val();
    var senha = $('#senha_bombeiro').val();

    $.ajax({
        url: 'PHP/verificar-login.php',
        method: 'POST',
        data: { cod: cod, senha: senha },
        dataType: 'json'
    }).done(function(result) {
        if (result.success) {
            window.location.href = 'ficha.html';
        } else {
            alert("Erro: " + result.error);
        }
    });
});
