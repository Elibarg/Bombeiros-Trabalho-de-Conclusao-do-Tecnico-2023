var ImagemAtual = "";

function inserirImagem(event) {
    var DivDasImagens = document.getElementById("div_traumas_localizados");
    if (DivDasImagens.contains(event.target)) {
        // Obtenha as coordenadas do clique do mouse em relação à div
        var x = event.clientX - DivDasImagens.getBoundingClientRect().left;
        var y = event.clientY - DivDasImagens.getBoundingClientRect().top;

        // Crie uma nova imagem
        var novaImagem = document.createElement("img");
        novaImagem.src = ImagemAtual;

        // Defina o tamanho da imagem
        novaImagem.style.width = "20px"; // Defina a largura desejada

        // Defina a posição da imagem exatamente onde o mouse foi clicado na div
        novaImagem.style.position = "absolute"; // Use "absolute" para posicionar em relação à div pai (div_traumas_localizados)
        novaImagem.style.left = x-11 + "px";
        novaImagem.style.top = y-11 + "px";
        novaImagem.style.zIndex = "1"; // Certifique-se de que o z-index seja maior

        // Adicione a nova imagem à div de contêiner
        DivDasImagens.appendChild(novaImagem);


        // Adicionar um evento de clique para apagar a imagem
        novaImagem.addEventListener('click', function () {
            DivDasImagens.removeChild(novaImagem);
        });
    }
}
function MudarImagemFratura(){
    ImagemAtual = "IMAGENS/Fraturas-Luxações-Entorses.png";
}
function MudarImagemFerimento(){
    ImagemAtual = "IMAGENS/Ferimentos-Diversos.png";
}
function MudarImagemHemorragia(){
    ImagemAtual = "IMAGENS/Hemorragias.png";
}
function MudarImagemQueimadura1(){
    ImagemAtual = "IMAGENS/Queimadura-de-1.png";
}
function MudarImagemQueimadura3(){
    ImagemAtual = "IMAGENS/Queimadura-de-3.png";
}
function MudarImagemQueimadura2(){
    ImagemAtual = "IMAGENS/Queimadura-de-2.png";
}
function MudarImagemEsviceracao(){
    ImagemAtual = "IMAGENS/Esviceração.png";
}
function MudarImagemFABFAF(){
    ImagemAtual = "IMAGENS/F.A.B-F.A.F.png";
}
function MudarImagemAmputacao(){
    ImagemAtual = "IMAGENS/Amputação.png";
}
var dadosLinhas = [];

        function adicionarLinhaTraumas() {
            // Recuperar a tabela e a área de corpo (tbody)
            var tabela = document.getElementById("tabela_de_traumas");
            var corpoTabela = tabela.getElementsByTagName("tbody")[0];

            // Criar uma nova linha (tr)
            var novaLinha = corpoTabela.insertRow();
            novaLinha.classList.add("estilo-linha-traumas"); // Adiciona a classe à linha

            // Inserir os valores nas novas células da linha a partir dos inputs
            var inputColuna1 = document.createElement("input");
            inputColuna1.type = "text";
            inputColuna1.classList.add("input-filho", "tamanho-coluna-traumas"); // Adiciona a classe ao input
            var coluna1 = novaLinha.insertCell(0);
            coluna1.appendChild(inputColuna1);

            var inputColuna2 = document.createElement("input");
            inputColuna2.type = "text";
            inputColuna2.classList.add("input-filho", "tamanho-coluna-traumas"); // Adiciona a classe ao input
            var coluna2 = novaLinha.insertCell(1);
            coluna2.appendChild(inputColuna2);

            var inputColuna3 = document.createElement("input");
            inputColuna3.type = "text";
            inputColuna3.classList.add("input-filho", "tamanho-coluna-traumas"); // Adiciona a classe ao input
            var coluna3 = novaLinha.insertCell(2);
            coluna3.appendChild(inputColuna3);

            var inputColuna4 = document.createElement("input");
            inputColuna4.type = "text";
            inputColuna4.classList.add("input-filho", "tamanho-coluna-traumas"); // Adiciona a classe ao input
            var coluna4 = novaLinha.insertCell(3);
            coluna4.appendChild(inputColuna4);
        }

        function limparTabelaTraumas() {
            var corpoTabela = document.getElementById("tbody_corpo");
            
            // Remover todas as linhas do corpo da tabela
            corpoTabela.innerHTML = "";
        }
        function AtivarMenorTrauma(){
            var MenorDiv = document.getElementById("div_menor_trauma");
            var MaiorDIv = document.getElementById("div_maior_trauma");
            var MaiorImagem = document.getElementById("imagem_maior_trauma");
            var MenorImagem = document.getElementById("imagem_menor_trauma");
            var DivDasImagens = document.getElementById("div_traumas_localizados");
            var imagens = DivDasImagens.getElementsByTagName("img");
            for (var i = imagens.length - 1; i >= 0; i--) {
                var imagem = imagens[i];
                var id = imagem.id;
        
                if (id !== "imagem_maior_trauma" && id !== "imagem_menor_trauma") {
                    DivDasImagens.removeChild(imagem);
                }
            }
        
            MenorDiv.style.backgroundColor = "rgb(6, 103, 232)"
            MenorDiv.style.color = "white"
            MaiorDIv.style.backgroundColor = "white"
            MaiorDIv.style.color = "black"
            MenorImagem.style.display = "flex"
            MaiorImagem.style.display = "none"
        }
        function AtivarMaiorTrauma(){
            var MenorDiv = document.getElementById("div_menor_trauma");
            var MaiorDiv = document.getElementById("div_maior_trauma");
            var MaiorImagem = document.getElementById("imagem_maior_trauma");
            var MenorImagem = document.getElementById("imagem_menor_trauma");
            var DivDasImagens = document.getElementById("div_traumas_localizados");
            var imagens = DivDasImagens.getElementsByTagName("img");
            for (var i = imagens.length - 1; i >= 0; i--) {
                var imagem = imagens[i];
                var id = imagem.id;
        
                if (id !== "imagem_maior_trauma" && id !== "imagem_menor_trauma") {
                    DivDasImagens.removeChild(imagem);
                }
            }
        
            MenorDiv.style.backgroundColor = "white"
            MenorDiv.style.color = "black"
            MaiorDiv.style.backgroundColor = "rgb(6, 103, 232)"
            MaiorDiv.style.color = "white"
            MenorImagem.style.display = "none"
            MaiorImagem.style.display = "flex"
        }
//Queimadura
var radio1cabeca = document.getElementById("radio_1_cabeca_trauma");
var radio2cabeca = document.getElementById("radio_2_cabeca_trauma");
var radio3cabeca = document.getElementById("radio_3_cabeca_trauma");
function AtivarRadio1Cabeca(){
if (radio1cabeca.checked){
    radio2cabeca.checked = false;
    radio3cabeca.checked = false;
}
}
function AtivarRadio2Cabeca(){
if (radio2cabeca.checked){
    radio1cabeca.checked = false;
    radio3cabeca.checked = false;
}
}
function AtivarRadio3Cabeca(){
if (radio3cabeca.checked){
    radio1cabeca.checked = false;
    radio2cabeca.checked = false;
}
}
var radio1pescoco = document.getElementById("radio_1_pescoco_trauma");
var radio2pescoco = document.getElementById("radio_2_pescoco_trauma");
var radio3pescoco = document.getElementById("radio_3_pescoco_trauma");
function AtivarRadio1Pescoco(){
if (radio1pescoco.checked){
    radio2pescoco.checked = false;
    radio3pescoco.checked = false;
}
}
function AtivarRadio2Pescoco(){
if (radio2pescoco.checked){
    radio1pescoco.checked = false;
    radio3pescoco.checked = false;
}
}
function AtivarRadio3Pescoco(){
if (radio3pescoco.checked){
    radio1pescoco.checked = false;
    radio2pescoco.checked = false;
}
}
var Radio1TANT = document.getElementById("radio_1_tant_trauma");
var Radio2TANT = document.getElementById("radio_2_tant_trauma");
var Radio3TANT = document.getElementById("radio_3_tant_trauma");
function AtivarRadio1TANT(){
if(Radio1TANT.checked){
    Radio2TANT.checked = false;
    Radio3TANT.checked = false;
}
}
function AtivarRadio2TANT(){
if(Radio2TANT.checked){
    Radio1TANT.checked = false;
    Radio3TANT.checked = false;
}
}
function AtivarRadio3TANT(){
if(Radio3TANT.checked){
    Radio1TANT.checked = false;
    Radio2TANT.checked = false;
}
}
var Radio1TPOS = document.getElementById("radio_1_tpos_trauma");
var Radio2TPOS = document.getElementById("radio_2_tpos_trauma");
var Radio3TPOS = document.getElementById("radio_3_tpos_trauma");
function AtivarRadio1TPOS(){
if (Radio1TPOS.checked){
    Radio2TPOS.checked = false;
    Radio3TPOS.checked = false;
}
}
function AtivarRadio2TPOS(){
if (Radio2TPOS.checked){
    Radio1TPOS.checked = false;
    Radio3TPOS.checked = false;
}
}
function AtivarRadio3TPOS(){
if (Radio3TPOS.checked){
    Radio1TPOS.checked = false;
    Radio2TPOS.checked = false;
}
}
var Radio1Geni = document.getElementById("radio_1_geni_trauma");
var Radio2Geni = document.getElementById("radio_2_geni_trauma");
var Radio3Geni = document.getElementById("radio_3_geni_trauma");
function AtivarRadio1Geni(){
if (Radio1Geni.checked){
    Radio2Geni.checked = false;
    Radio3Geni.checked = false;
}
}
function AtivarRadio2Geni(){
if (Radio2Geni.checked){
    Radio1Geni.checked = false;
    Radio3Geni.checked = false;
}
}
function AtivarRadio3Geni(){
if (Radio3Geni.checked){
    Radio1Geni.checked = false;
    Radio2Geni.checked = false;
}
}
var Radio1MID = document.getElementById("radio_1_mid_trauma");
var Radio2MID = document.getElementById("radio_2_mid_trauma");
var Radio3MID = document.getElementById("radio_3_mid_trauma");
function AtivarRadio1MID(){
if (Radio1MID.checked){
    Radio2MID.checked = false;
    Radio3MID.checked = false;
}
}
function AtivarRadio2MID(){
if (Radio2MID.checked){
    Radio1MID.checked = false;
    Radio3MID.checked = false;
}
}
function AtivarRadio3MID(){
if (Radio3MID.checked){
    Radio1MID.checked = false;
    Radio2MID.checked = false;
}
}
var Radio1MIE = document.getElementById("radio_1_mie_trauma");
var Radio2MIE = document.getElementById("radio_2_mie_trauma");
var Radio3MIE = document.getElementById("radio_3_mie_trauma");
function AtivarRadio1MIE(){
if (Radio1MIE.checked){
    Radio2MIE.checked = false;
    Radio3MIE.checked = false;
}
}
function AtivarRadio2MIE(){
if (Radio2MIE.checked){
    Radio1MIE.checked = false;
    Radio3MIE.checked = false;
}
}
function AtivarRadio3MIE(){
if (Radio3MIE.checked){
    Radio1MIE.checked = false;
    Radio2MIE.checked = false;
}
}
var Radio1MSD = document.getElementById("radio_1_msd_trauma");
var Radio2MSD = document.getElementById("radio_2_msd_trauma");
var Radio3MSD = document.getElementById("radio_3_msd_trauma");
function AtivarRadio1MSD(){
if (Radio1MSD.checked){
    Radio2MSD.checked = false;
    Radio3MSD.checked = false;
}
}
function AtivarRadio2MSD(){
if (Radio2MSD.checked){
    Radio1MSD.checked = false;
    Radio3MSD.checked = false;
}
}
function AtivarRadio3MSD(){
if (Radio3MSD.checked){
    Radio1MSD.checked = false;
    Radio2MSD.checked = false;
}
}
var Radio1MSE = document.getElementById("radio_1_mse_trauma");
var Radio2MSE = document.getElementById("radio_2_mse_trauma");
var Radio3MSE = document.getElementById("radio_3_mse_trauma");
function AtivarRadio1MSE(){
if (Radio1MSE.checked){
    Radio2MSE.checked = false;
    Radio3MSE.checked = false;
}
}
function AtivarRadio2MSE(){
if (Radio2MSE.checked){
    Radio1MSE.checked = false;
    Radio3MSE.checked = false;
}
}
function AtivarRadio3MSE(){
if (Radio3MSE.checked){
    Radio1MSE.checked = false;
    Radio2MSE.checked = false; 
}
}
var dados_trauma = "";
async function LocalizacaoTraumas() {
    console.clear();

    var tabela = document.getElementById("tabela_de_traumas");
    var linhas = tabela.getElementsByTagName("tr");
    var dadosLinhas = [];

    for (var i = 1; i < linhas.length; i++) {
        var colunas = linhas[i].getElementsByTagName("td");
        var linhaDados = [];

        for (var j = 0; j < colunas.length; j++) {
            var input = colunas[j].querySelector("input");

            if (input) {
                linhaDados.push(input.value);
            }
        }

        dadosLinhas.push(linhaDados.join(", "));
    }

    var dados_trauma = dadosLinhas.join("; ");

    // Remova as ocorrências de ",,," e ";;;" da variável dados_trauma
    dados_trauma = dados_trauma.replace(/; , , , /g, '');

    var QueimaduraCabecaTrauma = "";/*Input type radio*/
    if (document.getElementById("radio_1_cabeca_trauma").checked) {
        QueimaduraCabecaTrauma = "Cabeça: Primeiro Grau";
    } else if (document.getElementById("radio_2_cabeca_trauma").checked) {
        QueimaduraCabecaTrauma = "Cabeça: Segundo Grau";
    }else if (document.getElementById("radio_3_cabeca_trauma").checked) {
        QueimaduraCabecaTrauma = "Cabeça: Terceiro Grau";
    }else {QueimaduraCabecaTrauma = "nda"};

    var QueimaduraPescocoTrauma = "";/*Input type radio*/
    if (document.getElementById("radio_1_pescoco_trauma").checked) {
        QueimaduraPescocoTrauma = "Pesoço: Primeiro Grau";
    } else if (document.getElementById("radio_2_pescoco_trauma").checked) {
        QueimaduraPescocoTrauma = "Pesoço: Segundo Grau";
    }else if (document.getElementById("radio_3_pescoco_trauma").checked) {
        QueimaduraPescocoTrauma = "Pesoço: Terceiro Grau";
    }else {QueimaduraPescocoTrauma = "nda"};

    var QueimaduraTANTTrauma = "";/*Input type radio*/
    if (document.getElementById("radio_1_tant_trauma").checked) {
        QueimaduraTANTTrauma = "T.ant: Primeiro Grau";
    } else if (document.getElementById("radio_2_tant_trauma").checked) {
        QueimaduraTANTTrauma = "T.ant: Segundo Grau";
    }else if (document.getElementById("radio_3_tant_trauma").checked) {
        QueimaduraTANTTrauma = "T.ant: Terceiro Grau";
    }else {QueimaduraTANTTrauma = "nda"};

    var QueimaduraTPOSTrauma = "";/*Input type radio*/
    if (document.getElementById("radio_1_tpos_trauma").checked) {
        QueimaduraTPOSTrauma = "T.pos: Primeiro Grau";
    } else if (document.getElementById("radio_2_tpos_trauma").checked) {
        QueimaduraTPOSTrauma = "T.pos: Segundo Grau";
    }else if (document.getElementById("radio_3_tpos_trauma").checked) {
        QueimaduraTPOSTrauma = "T.pos: Terceiro Grau";
    }else {QueimaduraTPOSTrauma = "nda"};

    var QueimaduraGeniTrauma = "";/*Input type radio*/
    if (document.getElementById("radio_1_geni_trauma").checked) {
        QueimaduraGeniTrauma = "GENI: Primeiro Grau";
    } else if (document.getElementById("radio_2_geni_trauma").checked) {
        QueimaduraGeniTrauma = "GENI: Segundo Grau";
    }else if (document.getElementById("radio_3_geni_trauma").checked) {
        QueimaduraGeniTrauma = "GENI: Terceiro Grau";
    }else {QueimaduraGeniTrauma = "nda"};

    var QueimaduraMIDTrauma = "";/*Input type radio*/
    if (document.getElementById("radio_1_mid_trauma").checked) {
        QueimaduraMIDTrauma = "M.I.D: Primeiro Grau";
    } else if (document.getElementById("radio_2_mid_trauma").checked) {
        QueimaduraMIDTrauma = "M.I.D: Segundo Grau";
    }else if (document.getElementById("radio_3_mid_trauma").checked) {
        QueimaduraMIDTrauma = "M.I.D: Terceiro Grau";
    }else {QueimaduraMIDTrauma = "nda"};

    var QueimaduraMIETrauma = "";/*Input type radio*/
    if (document.getElementById("radio_1_mie_trauma").checked) {
        QueimaduraMIETrauma = "M.I.E: Primeiro Grau";
    } else if (document.getElementById("radio_2_mie_trauma").checked) {
        QueimaduraMIETrauma = "M.I.E: Segundo Grau";
    }else if (document.getElementById("radio_3_mie_trauma").checked) {
        QueimaduraMIETrauma = "M.I.E: Terceiro Grau";
    }else {QueimaduraMIETrauma = "nda"};

    var QueimaduraMSDTrauma = "";/*Input type radio*/
    if (document.getElementById("radio_1_msd_trauma").checked) {
        QueimaduraMSDTrauma = "M.S.D: Primeiro Grau";
    } else if (document.getElementById("radio_2_msd_trauma").checked) {
        QueimaduraMSDTrauma = "M.S.D: Segundo Grau";
    }else if (document.getElementById("radio_3_msd_trauma").checked) {
        QueimaduraMSDTrauma = "M.S.D: Terceiro Grau";
    }else {QueimaduraMSDTrauma = "nda"};

    var QueimaduraMSETrauma = "";/*Input type radio*/
    if (document.getElementById("radio_1_mse_trauma").checked) {
        QueimaduraMSETrauma = "M.S.E: Primeiro Grau";
    } else if (document.getElementById("radio_2_mse_trauma").checked) {
        QueimaduraMSETrauma = "M.S.E: Segundo Grau";
    }else if (document.getElementById("radio_3_mse_trauma").checked) {
        QueimaduraMSETrauma = "M.S.E: Terceiro Grau";
    }else {QueimaduraMSETrauma = "nda"};

    var QueimaduraTotalTrauma = "";
    if (QueimaduraCabecaTrauma !== "nda") {
        if (QueimaduraTotalTrauma !== "") { QueimaduraTotalTrauma += ", "; }
        QueimaduraTotalTrauma += QueimaduraCabecaTrauma;
      }
      if (QueimaduraPescocoTrauma !== "nda") {
        if (QueimaduraTotalTrauma !== "") { QueimaduraTotalTrauma += ", "; }
        QueimaduraTotalTrauma += QueimaduraPescocoTrauma;
      }
      if (QueimaduraTANTTrauma !== "nda") {
        if (QueimaduraTotalTrauma !== "") { QueimaduraTotalTrauma += ", "; }
        QueimaduraTotalTrauma += QueimaduraTANTTrauma;
      }
      if (QueimaduraTPOSTrauma !== "nda") {
        if (QueimaduraTotalTrauma !== "") { QueimaduraTotalTrauma += ", "; }
        QueimaduraTotalTrauma += QueimaduraTPOSTrauma;
      }
      if (QueimaduraGeniTrauma !== "nda") {
        if (QueimaduraTotalTrauma !== "") { QueimaduraTotalTrauma += ", "; }
        QueimaduraTotalTrauma += QueimaduraGeniTrauma;
      }
      if (QueimaduraMIDTrauma !== "nda") {
        if (QueimaduraTotalTrauma !== "") { QueimaduraTotalTrauma += ", "; }
        QueimaduraTotalTrauma += QueimaduraMIDTrauma;
      }
      if (QueimaduraMIETrauma !== "nda") {
        if (QueimaduraTotalTrauma !== "") { QueimaduraTotalTrauma += ", "; }
        QueimaduraTotalTrauma += QueimaduraMIETrauma;
      }
      if (QueimaduraMSDTrauma !== "nda") {
        if (QueimaduraTotalTrauma !== "") { QueimaduraTotalTrauma += ", "; }
        QueimaduraTotalTrauma += QueimaduraMSDTrauma;
      }
      if (QueimaduraMSETrauma !== "nda") {
        if (QueimaduraTotalTrauma !== "") { QueimaduraTotalTrauma += ", "; }
        QueimaduraTotalTrauma += QueimaduraMSETrauma;
      }
    
      if(QueimaduraTotalTrauma === ""){QueimaduraTotalTrauma = "nda"}
      if(dados_trauma === ""){dados_trauma = "nda"}

      var resultado = await gerarImagemTrauma();

    console.log(resultado);
    console.log(dados_trauma);
    console.log(QueimaduraTotalTrauma);
    

    $.ajax({
        url: 'PHP/tabela-localizacao-trauma.php',
        method: 'POST',
        data: {
            textotrauma: dados_trauma,
            queimadura: QueimaduraTotalTrauma,
            imagem: resultado,
            Paciente: CpfPaciente,
            Bombeiro: BombeiroAtual
        },
        dataType: 'json'
    }).done(function() {
        alert("Alguma coisa deu!!");
    });
}



async function gerarImagemTrauma() {
    var divParaImagem = document.getElementById('captura_traumas');
    var imagemTrauma = "";
    var canvas = await html2canvas(divParaImagem);

    const imagem = new Image();
    imagem.src = canvas.toDataURL('image/png');
    imagemTrauma = imagem.src;

    return imagemTrauma;
}












    