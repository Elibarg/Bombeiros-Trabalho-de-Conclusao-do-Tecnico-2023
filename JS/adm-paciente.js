$(document).ready(function() {
    verificarUsuario()
});

{//PREPARAR DOCUMENTO----------------------------------------------//

    function ChamarRegistro(){
        

        $.ajax({
            url: 'PHP/adm-chamar-paciente.php',
            method: 'GET',
            dataType: 'json'
        }).done(function(result){
            $('.exibir').empty();

            for (var i = 0; i < result.length; i++) {
                $('.exibir').prepend('<div id="' + result[i].cpf_paciente + '" class="linha-tabela justify div-pai"><div class="space-evenly" style="width: 900px;"><input class="input-text-usuario" value="' + result[i].nome_paciente + '" id="nomeEspecifico' + result[i].cpf_paciente + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].data_paciente + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].cpf_paciente + '" id="codeEspecifico' + result[i].cpf_paciente + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].bombeiro + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div></div><div class="space-evenly justify" style="width: 250px ;height: 100%; float: right;"><button onclick="DadosPDF(' + result[i].cpf_paciente +', ' + result[i].bombeiro + ')" style = "width: 25px; height: 25px; display: flex; justify-content: center; justify-items: center; align-items: center; align-content: center; background-color: rgba(255, 255, 255, 0); border: none; cursor: pointer;"><img src="IMAGENS/ficha.png" width="22px"></button><button class="centro" onclick="editarNomeEspecifico(' + result[i].cpf_paciente + ')" style="border:1px solid black; width: 20px; height: 20px;  background-color: rgb(230, 154, 12);"><img src="IMAGENS/edit.png" width="15px"></button><button class="centro" onclick="ExcluirGeral(' + result[i].cpf_paciente + ')" style="border:1px solid black; width: 20px; height: 20px;  background-color: rgb(199, 114, 114);"><img src="IMAGENS/lixo.png" width="13px"></button></div></div>');
            }
            
        }).fail(function(errorThrown) {
            ChamarRegistro();
            console.log(errorThrown);
        });
    }

    function chamarNomeUsuario(){

        $.ajax({
            url: 'PHP/adm-chamarUsuario.php',
            method: 'GET',
            dataType: 'json'
        }).done(function(response){
            $("#nome_que_vai_vir").text(response[0].nome_cadastro);
    
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.log('Erro de requisição: ' + textStatus, errorThrown);
            
        });
    }

    function verificarUsuario(){

        $.ajax({
            url: 'PHP/adm-verificarUsuario.php',
            method: 'GET',
            dataType: 'json'
        }).done(function(response){
            if(response.success){
                alert(response.success);
                window.location.href = 'adm.html';

            }else if(response.error){
                console.log(response.error);
                chamarNomeUsuario();
                ChamarRegistro();
                
            }
    
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.log('Erro de requisição: ' + textStatus, errorThrown);
        });
    }
}

{//VARIAVEIS-------------------------------------------------------//
    var inputGeralRegistro = document.getElementById('registro_geral');
    var inputHiddenEditar = document.getElementById('idPaciente');
    var painelEdicao = document.getElementById('painelEdicao');
    var blackbg = document.getElementById('blackbg');
    var nomeGeralPaciente = document.getElementById('nome_geral');
    var registroGeralPaciente = document.getElementById('registro_geral');
}

{//------REQUISIÇÕES AJAX------------------------------------------//

//-------ADICIONAR PACIENTES----------------------------------------

function AdicionarGeral(){

    var NomeGeral = $("#nome_geral").val();
    var RegistroGeral = $("#registro_geral").val();

    $.ajax({
        url: 'PHP/adm-adicionar-paciente.php',
        method: 'POST',
        data: {
           nome: NomeGeral,
           id: RegistroGeral
        },
        dataType: 'json'
    }).done(function(){
        ChamarRegistro();
    }).fail(function(errorThrown) {
        console.log(errorThrown);
        ChamarRegistro();
        alert("Chave de Registro Indisponível!!");
    });
};

//-------EXCLUIR PACIENTES----------------------------------------

function ExcluirGeral(idExcluir){
    var RegistroGeral
    
    if(idExcluir != 0){
        RegistroGeral = idExcluir;
    }else{
        RegistroGeral = $("#registro_geral").val();
    };

    $.ajax({
        url: 'PHP/adm-excluir-paciente.php',
        method: 'POST',
        data: {
           id: RegistroGeral
        },
        dataType: 'json'
    }).done(function(response){
        if ('error' in response) {
            console.log(response.error);
        } else {
            console.log(response);
            ChamarRegistro();
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log('Erro na requisição:', errorThrown);
        alert("Ops, achamos um erro!\n1.Em caso de persistencia chame o responsável pela base de dados");
    });
}

function editarNome(){
    $.ajax({
        url: 'PHP/adm-editar-nome-paciente.php',
        method: 'POST',
        data: {
           nome: nomeGeralPaciente.value,
           id: registroGeralPaciente.value
        },
        dataType: 'json'
    }).done(function(){
        ChamarRegistro();
    }).fail(function(errorThrown) {
        console.log(errorThrown);
        ChamarRegistro();
    });
};

function executarSelect(){

    var select = document.getElementById("select_adm");
    var OpcaoSelecionada = select.options[select.selectedIndex].value;

    if (OpcaoSelecionada === "opcao_nome") {

    $.ajax({
        url: 'PHP/adm-ordenar-paciente-nome.php',
        method: 'GET',
        dataType: 'json'
    }).done(function(result){
        $('.exibir').empty();

        for (var i = 0; i < result.length; i++) {
            $('.exibir').prepend('<div id="' + result[i].cpf_paciente + '" class="linha-tabela justify div-pai"><div class="space-evenly" style="width: 900px;"><input class="input-text-usuario" value="' + result[i].nome_paciente + '" id="nomeEspecifico' + result[i].cpf_paciente + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].data_paciente + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].cpf_paciente + '" id="codeEspecifico' + result[i].cpf_paciente + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].bombeiro + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div></div><div class="space-evenly justify" style="width: 250px ;height: 100%; float: right;"><button onclick="DadosPDF(' + result[i].cpf_paciente +')" style = "width: 25px; height: 25px; display: flex; justify-content: center; justify-items: center; align-items: center; align-content: center; background-color: rgba(255, 255, 255, 0); border: none; cursor: pointer;"><img src="IMAGENS/ficha.png" width="22px"></button><button class="centro" onclick="editarNomeEspecifico(' + result[i].cpf_paciente + ')" style="border:1px solid black; width: 20px; height: 20px;  background-color: rgb(230, 154, 12);"><img src="IMAGENS/edit.png" width="15px"></button><button class="centro" onclick="ExcluirGeral(' + result[i].cpf_paciente + ')" style="border:1px solid black; width: 20px; height: 20px;  background-color: rgb(199, 114, 114);"><img src="IMAGENS/lixo.png" width="13px"></button></div></div>');
        }
        
    }).fail(function(errorThrown) {
        ChamarRegistro();
        console.log(errorThrown);
    });

    }else if(OpcaoSelecionada === "opcao_data"){
        
        $.ajax({
            url: 'PHP/adm-ordenar-paciente-data.php',
            method: 'GET',
            dataType: 'json'
        }).done(function(result){
            $('.exibir').empty();
    
            for (var i = 0; i < result.length; i++) {
                $('.exibir').prepend('<div id="' + result[i].cpf_paciente + '" class="linha-tabela justify div-pai"><div class="space-evenly" style="width: 900px;"><input class="input-text-usuario" value="' + result[i].nome_paciente + '" id="nomeEspecifico' + result[i].cpf_paciente + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].data_paciente + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].cpf_paciente + '" id="codeEspecifico' + result[i].cpf_paciente + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div><input class="input-text-usuario" value="' + result[i].bombeiro + '" readonly><div style="width: 1px; height: 52px; background-color: black;"></div></div><div class="space-evenly justify" style="width: 250px ;height: 100%; float: right;"><button onclick="DadosPDF(' + result[i].cpf_paciente +')" style = "width: 25px; height: 25px; display: flex; justify-content: center; justify-items: center; align-items: center; align-content: center; background-color: rgba(255, 255, 255, 0); border: none; cursor: pointer;"><img src="IMAGENS/ficha.png" width="22px"></button><button class="centro" onclick="editarNomeEspecifico(' + result[i].cpf_paciente + ')" style="border:1px solid black; width: 20px; height: 20px;  background-color: rgb(230, 154, 12);"><img src="IMAGENS/edit.png" width="15px"></button><button class="centro" onclick="ExcluirGeral(' + result[i].cpf_paciente + ')" style="border:1px solid black; width: 20px; height: 20px;  background-color: rgb(199, 114, 114);"><img src="IMAGENS/lixo.png" width="13px"></button></div></div>');
            }
            
        }).fail(function(errorThrown) {
            ChamarRegistro();
            console.log(errorThrown);
        });

    }else if(OpcaoSelecionada === "opcao_nada"){ChamarRegistro()}
    }

    function editarNomeEspecifico(id){
        var nomeEspId = document.getElementById("nomeEspecifico" + id);
        var codeEspId = document.getElementById("codeEspecifico" + id);
        
        if (nomeEspId.readOnly === true) {
            nomeEspId.classList.toggle("input-text-usuario-active");
            nomeEspId.classList.remove("input-text-usuario");
            nomeEspId.removeAttribute("readonly");

        } else {
            nomeEspId.classList.toggle("input-text-usuario");
            nomeEspId.classList.remove("input-text-usuario-active");
            nomeEspId.readOnly = true;

            $.ajax({
                url: 'PHP/adm-editar-paciente-especifico.php',
                method: 'POST',
                data: {
                   nome: nomeEspId.value,
                   acesso: codeEspId.value
                },
                dataType: 'json'
            }).done(function(response){
                if(response.success){
                    alert("Edição Realizada!")
                }

            }).fail(function(errorThrown) {
                console.log(errorThrown);

            });

        }

    }

    function logout(){

        $.ajax({
            url: 'PHP/adm-logout.php',
            method: 'POST',
            data: {},
            dataType: 'json'
        }).done(function(response){
            if(response.success){
                window.location.href = 'adm.html';
            }
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.log('Erro de requisição: ' + textStatus, errorThrown);
        });
        
    }

}

{//-------FUNÇÕES LOCAIS-------------------------------------------//

//Input Hidden valor = input Geral valor
inputGeralRegistro.addEventListener('input', function() {
    inputHiddenEditar.value = inputGeralRegistro.value;
});

//Aciona uma função dependendo da opção selecionada no editar geral
function selecionarOpcaoEditarGeral(select) {
    var opcaoSelecionada = select.value;
    if (opcaoSelecionada === "nome") {
        editarNome();
    } else if (opcaoSelecionada === "avancado") {
        if (inputGeralRegistro.value != ""){
            abrirPainelEdicao();
        }else{alert("Registro vazio ou inválido")}
    }
}

function abrirPainelEdicao(){
    painelEdicao.style.display = "flex";
    blackbg.style.display = "flex";
}

function blackBgNone(){
    painelEdicao.style.display = "none";
    blackbg.style.display = "none";
}

function valueSelectEdicaoGeral(select){
    select.value = "";
}

function MudarOrdemRegistro() {
    var divsPai = $('.exibir .div-pai');
    var divsArray = divsPai.toArray();
    divsArray = divsArray.reverse(); // Inverte a ordem do array
    $('.exibir').html(divsArray); // Atualiza o conteúdo do elemento .exibir
}

var menuIcons = document.getElementsByClassName("menu-icon");//TRAZ BARRA LATERAL PARA A TELA E A RETIRA
var barraLateral = document.querySelector(".barra-Lateral");

    for (var i = 0; i < menuIcons.length; i++) {
      menuIcons[i].addEventListener("click", function() {
        if (barraLateral.style.left === "-220px") {
          barraLateral.style.left = "70px";
        } else {
          barraLateral.style.left = "-220px";
        }
      });
    }

document.addEventListener("click", function(event) {//TRAZ BARRA LATERAL PARA A TELA E A RETIRA
var isClickedInsideBarraLateral = barraLateral.contains(event.target);
var isClickedMenuIcon = event.target.classList.contains("menu-icon");
  
      if (!isClickedInsideBarraLateral && !isClickedMenuIcon) {
        barraLateral.style.left = "-220px";
      }
    });

var menuIcons = document.getElementsByClassName("menu-icon");

    for (var i = 0; i < menuIcons.length; i++) {//MUDA A OPACIDADE DA IMAGEM APÓS O CLIQUE
      menuIcons[i].addEventListener("click", function(event) {
        var clickedIcon = event.target;
        clickedIcon.classList.add("clicked");

        setTimeout(function() {
          clickedIcon.classList.remove("clicked");
        }, 100); // Remove a classe "clicked" após 1 milisegundo (100 milissegundos)
      });
    }

}