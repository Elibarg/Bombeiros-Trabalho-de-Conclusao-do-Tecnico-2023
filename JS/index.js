/*REGISTRO DE PÁGINAS slide1
    Paginas:
    PacienteRegistro()       PHP FEITO
    EmergenciaRegistro()     PHP FEITO
    AvaliacaoPacienteMa() ChooseAvaPaciente()
    AvaliacaoPacienteMe() ChooseAvaPaciente()
    TermoDeRecusa()          PHP FEITO
    FormaDeConducao()        PHP FEITO
    DecisaoDeTransporte()    PHP FEITO
    SinaisVitais()           PHP FEITO
    Anamnese()               PHP FEITO
    AnamneseGestacional()    PHP FEITO
    ProblemasSuspeitos()     PHP FEITO
    SinaisESintomas()        PHP FEITO
    AvaliacaoCinematica()    PHP FEITO
    MaterialUtilizadosA()    PHP FEITO
    MaterialUtilizadosB()    PHP FEITO 
    ObservacoesImportantes() PHP FEITO
    ProcedimentosEfetuados() PHP FEITO
    ObjetosRecolhidos()      PHP FEITO

*/

$(document).ready(function(){
    document.documentElement.scrollTop = 0; // Para navegadores modernos
    document.body.scrollTop = 0; // Para navegadores antigos
})

var BombeiroAtual = "";
var CpfPaciente = ""

$.ajax({
    url: 'PHP/tabela-bombeiros.php',
    method: 'GET',
    data: {},
    dataType: 'json'
}).done(function(result) {
    if (result.hasOwnProperty('cod_cadastro')) {
        BombeiroAtual = result.cod_cadastro;
        console.log(BombeiroAtual);
    } else {
        console.log('A chave "cod_cadastro" não está presente no objeto JSON retornado.');
    }
}).fail(function(jqXHR, textStatus, errorThrown) {
    alert("Erro na solicitação AJAX: " + errorThrown);
});

function RegistrarPaciente(){
    var NomePaciente = $('#nome_paciente').val();if(NomePaciente === ""){NomePaciente = "nda"}

    $.ajax({
        url: 'PHP/botao-final.php',
        method: 'POST',
        data: {
            NomePaciente: NomePaciente
        },
        dataType: 'json'
    }).done(function(resposta){
        if (resposta.sucesso) {
            CpfPaciente = resposta.cpf_paciente;
            PacienteRegistro();
            EmergenciaRegistro();
            FormaDeConducao();
            DecisaoDeTransporte();
            ProblemasSuspeitos()
            SinaisVitais();
            SinaisESintomas();
            ProcedimentosEfetuados();
            MaterialUtilizadosA();
            MaterialUtilizadosB();
            Anamnese();
            AnamneseGestacional();
            ObservacoesImportantes();
            AvaliacaoCinematica();
            TermoDeRecusa();
            ObjetosRecolhidos();
            SalvarImagensObj();
            ChooseAvaPaciente();
            LocalizacaoTraumas();
            console.clear();
            console.log("Consulta Executada com sucesso!!!");
        } else {
            console.clear();
            console.log("A consulta falhou.");
        }
    }).fail(function(){
        alert("Área vazia ou valor inválido em Paciente RG/CPF")
        console.clear();
        console.log(CpfPaciente);
    });
}

function ChegarInputs(){
     //PacienteRegistro

     var Data = $('#data').val();
     if (Data === "") {
         Data = "nda";
     }
     
     var NomeHospitalPaciente = $('#nome_hospital_paciente').val().trim();
     if (NomeHospitalPaciente === "") {
         NomeHospitalPaciente = "nda";
     }
     
     var NomePaciente = $('#nome_paciente').val().trim();
     if (NomePaciente === "") {
         NomePaciente = "nda";
     }
     
     var IdadePaciente = $('#idade_paciente').val();
     if (IdadePaciente === "") {
         IdadePaciente = "nda";
     }
     
     var RgCpfPaciente = $('#rg_cpf_paciente').val().trim();
     if (RgCpfPaciente === "") {
         RgCpfPaciente = "nda";
     }
     
     var FonePaciente = $('#fone_paciente').val().trim();
     if (FonePaciente === "") {
         FonePaciente = "nda";
     }
     
     var AcompanhantePaciente = $('#acompanhante_paciente').val().trim();
     if (AcompanhantePaciente === "") {
         AcompanhantePaciente = "nda";
     }
     
     var IdadeAcompanhantePaciente = $('#idade_acompanhante_paciente').val();
     if (IdadeAcompanhantePaciente === "") {
         IdadeAcompanhantePaciente = "nda";
     }
     
     var LocalOcorrenciaPaciente = $('#local_ocorrencia_paciente').val().trim();
     if (LocalOcorrenciaPaciente === "") {
         LocalOcorrenciaPaciente = "nda";
     }
     
     var NUsbPaciente = $('#n_usab_paciente').val().trim();
     if (NUsbPaciente === "") {
         NUsbPaciente = "nda";
     }
     
     var NOcorrPaciente = $('#n_ocorr_paciente').val().trim();
     if (NOcorrPaciente === "") {
         NOcorrPaciente = "nda";
     }
     
     var DespPaciente = $('#desp_paciente').val().trim();
     if (DespPaciente === "") {
         DespPaciente = "nda";
     }
     
     var HChPaciente = $('#h_ch_paciente').val().trim();
     if (HChPaciente === "") {
         HChPaciente = "nda";
     }
     
     var KmFinalPaciente = $('#km_final_paciente').val().trim();
     if (KmFinalPaciente === "") {
         KmFinalPaciente = "nda";
     }
     
     var CodSiaSusPaciente = $('#cod_sia_sus_paciente').val().trim();
     if (CodSiaSusPaciente === "") {
         CodSiaSusPaciente = "nda";
     }
     
     var SexoPaciente = "";
     if (document.getElementById("sexo_paciente_m").checked) {
         SexoPaciente = document.getElementById("sexo_paciente_m").value;
     } else if (document.getElementById("sexo_paciente_f").checked) {
         SexoPaciente = document.getElementById("sexo_paciente_f").value;
     } else {
         SexoPaciente = "nda";
     }
     
     
     if (Data === "nda" || NomeHospitalPaciente === "nda" || NomePaciente === "nda" || IdadePaciente === "nda" || RgCpfPaciente === "nda" || FonePaciente === "nda" || AcompanhantePaciente === "nda" || IdadeAcompanhantePaciente === "nda" || LocalOcorrenciaPaciente === "nda" || NUsbPaciente === "nda" || NOcorrPaciente === "nda" || DespPaciente === "nda" || HChPaciente === "nda" || KmFinalPaciente === "nda" || CodSiaSusPaciente === "nda" || SexoPaciente === "nda") {
         alert("Por favor, preencha todos os campos obrigatórios. Da página Paciente");
     }
     
     

 //EmergenciaRegistro
    
    var EmergenciaMedicaEr, ComMeioTransporteEr, CausadoPorAnimaisEr, IncendioEr, AfogamentoEr, DeslizamentoDesmoronamentoEr, AgressaoEr, QuedaAltura2mEr, SuicidioEr, QuedaPropriaAlturaEr, AtropelamentoEr, ChoqueEletricoEr, DesabamentoEr, DomesticoEr, EsportivoEr, IntoxicacaoEr, QuedaBicicletaEr, QuedaMotoEr, QuedaEr, TrabalhoEr, TransferenciaEr, OutroEr;

if (document.getElementById("emergencia_medica_er").checked) {
    EmergenciaMedicaEr = document.getElementById("emergencia_medica_er").value;
} else {
    EmergenciaMedicaEr = "";
}

if (document.getElementById("com_meio_de_transporte_er").checked) {
    ComMeioTransporteEr = document.getElementById("com_meio_de_transporte_er").value;
} else {
    ComMeioTransporteEr = "";
}

if (document.getElementById("causado_por_animais_er").checked) {
    CausadoPorAnimaisEr = document.getElementById("causado_por_animais_er").value;
} else {
    CausadoPorAnimaisEr = "";
}

if (document.getElementById("incendio_er").checked) {
    IncendioEr = document.getElementById("incendio_er").value;
} else {
    IncendioEr = "";
}

if (document.getElementById("afogamento_er").checked) {
    AfogamentoEr = document.getElementById("afogamento_er").value;
} else {
    AfogamentoEr = "";
}

if (document.getElementById("deslizamento_desmoronamento_er").checked) {
    DeslizamentoDesmoronamentoEr = document.getElementById("deslizamento_desmoronamento_er").value;
} else {
    DeslizamentoDesmoronamentoEr = "";
}

if (document.getElementById("agressao_er").checked) {
    AgressaoEr = document.getElementById("agressao_er").value;
} else {
    AgressaoEr = "";
}

if (document.getElementById("queda_aluta_2m_er").checked) {
    QuedaAltura2mEr = document.getElementById("queda_aluta_2m_er").value;
} else {
    QuedaAltura2mEr = "";
}

if (document.getElementById("tentativa_suicidio_er").checked) {
    SuicidioEr = document.getElementById("tentativa_suicidio_er").value;
} else {
    SuicidioEr = "";
}

if (document.getElementById("queda_propria_altura_er").checked) {
    QuedaPropriaAlturaEr = document.getElementById("queda_propria_altura_er").value;
} else {
    QuedaPropriaAlturaEr = "";
}

if (document.getElementById("Atropelamento_er").checked) {
    AtropelamentoEr = document.getElementById("Atropelamento_er").value;
} else {
    AtropelamentoEr = "";
}

if (document.getElementById("choque_eletrico_er").checked) {
    ChoqueEletricoEr = document.getElementById("choque_eletrico_er").value;
} else {
    ChoqueEletricoEr = "";
}

if (document.getElementById("desabamento_er").checked) {
    DesabamentoEr = document.getElementById("desabamento_er").value;
} else {
    DesabamentoEr = "";
}

if (document.getElementById("domestico_er").checked) {
    DomesticoEr = document.getElementById("domestico_er").value;
} else {
    DomesticoEr = "";
}

if (document.getElementById("esportivo_er").checked) {
    EsportivoEr = document.getElementById("esportivo_er").value;
} else {
    EsportivoEr = "";
}

if (document.getElementById("intoxicacao_er").checked) {
    IntoxicacaoEr = document.getElementById("intoxicacao_er").value;
} else {
    IntoxicacaoEr = "";
}

if (document.getElementById("queda_bicicleta_er").checked) {
    QuedaBicicletaEr = document.getElementById("queda_bicicleta_er").value;
} else {
    QuedaBicicletaEr = "";
}

if (document.getElementById("queda_moto_er").checked) {
    QuedaMotoEr = document.getElementById("queda_moto_er").value;
} else {
    QuedaMotoEr = "";
}

if (document.getElementById("queda_er").checked) {
    QuedaEr = document.getElementById("queda_er").value;
} else {
    QuedaEr = "";
}

if (document.getElementById("trabalho_er").checked) {
    TrabalhoEr = document.getElementById("trabalho_er").value;
} else {
    TrabalhoEr = "";
}

if (document.getElementById("transferencia_er").checked) {
    TransferenciaEr = document.getElementById("transferencia_er").value;
} else {
    TransferenciaEr = "";
}

if (document.getElementById("outro_er").checked) {
    OutroEr = document.getElementById("outro_er").value;
} else {
    OutroEr = "";
}

var EmergenciaRegistro1 = "";
if (EmergenciaMedicaEr !== "") { EmergenciaRegistro1 += EmergenciaMedicaEr + ", "; }
if (ComMeioTransporteEr !== "") { EmergenciaRegistro1 += ComMeioTransporteEr + ", "; }
if (CausadoPorAnimaisEr !== "") { EmergenciaRegistro1 += CausadoPorAnimaisEr + ", "; }
if (IncendioEr !== "") { EmergenciaRegistro1 += IncendioEr + ", "; }
if (AfogamentoEr !== "") { EmergenciaRegistro1 += AfogamentoEr + ", "; }
if (DeslizamentoDesmoronamentoEr !== "") { EmergenciaRegistro1 += DeslizamentoDesmoronamentoEr + ", "; }
if (AgressaoEr !== "") { EmergenciaRegistro1 += AgressaoEr + ", "; }
if (QuedaAltura2mEr !== "") { EmergenciaRegistro1 += QuedaAltura2mEr + ", "; }
if (SuicidioEr !== "") { EmergenciaRegistro1 += SuicidioEr + ", "; }
if (QuedaPropriaAlturaEr !== "") { EmergenciaRegistro1 += QuedaPropriaAlturaEr + ", "; }
if (AtropelamentoEr !== "") { EmergenciaRegistro1 += AtropelamentoEr + ", "; }
if (ChoqueEletricoEr !== "") { EmergenciaRegistro1 += ChoqueEletricoEr + ", "; }
if (DesabamentoEr !== "") { EmergenciaRegistro1 += DesabamentoEr + ", "; }
if (DomesticoEr !== "") { EmergenciaRegistro1 += DomesticoEr + ", "; }
if (EsportivoEr !== "") { EmergenciaRegistro1 += EsportivoEr + ", "; }
if (IntoxicacaoEr !== "") { EmergenciaRegistro1 += IntoxicacaoEr + ", "; }
if (QuedaBicicletaEr !== "") { EmergenciaRegistro1 += QuedaBicicletaEr + ", "; }
if (QuedaMotoEr !== "") { EmergenciaRegistro1 += QuedaMotoEr + ", "; }
if (QuedaEr !== "") { EmergenciaRegistro1 += QuedaEr + ", "; }
if (TrabalhoEr !== "") { EmergenciaRegistro1 += TrabalhoEr + ", "; }
if (TransferenciaEr !== "") { EmergenciaRegistro1 += TransferenciaEr + ", "; }
if (OutroEr !== "") { EmergenciaRegistro1 += OutroEr + ", "; }
if (EmergenciaRegistro1 === "") { EmergenciaRegistro1 = "nda"; alert("Por favor, preencha todos os campos obrigatórios. Da página Emergência"); }



    //TermoDeRecusa 
//arrumar página let AssImagem = '';
var NomeTermoRecusa = $('#nome_Recusa').val().trim();
var IdentidadeRecusa = $('#identidade_Recusa').val().trim();
var CpfRescusa = $('#cpf_Recusa').val().trim();
var TestemunhaRecusa = $('#testemunha_Recusa').val().trim();
var DocRecusa = $('#doc_Recusa').val().trim();
var TestemunhaRecusa2 = $('#testemunha_Recusa_2').val().trim();
var DocRecusa2 = $('#doc_Recusa_2').val().trim();

// Verifica se algum dos campos obrigatórios está vazio
if (
  NomeTermoRecusa === "" ||
  IdentidadeRecusa === "" ||
  CpfRescusa === "" ||
  TestemunhaRecusa === "" ||
  DocRecusa === "" ||
  TestemunhaRecusa2 === "" ||
  DocRecusa2 === ""
) {
  alert("Por favor, preencha todos os campos obrigatórios na página Termo de Recusa.");
} else {
  // Verifica se o campo de arquivo tem pelo menos um arquivo selecionado
  var fileInput = $('#assinatura_Recusa')[0]; // Substitua 'fileInput' pelo id do seu input type="file"
  if (fileInput.files.length === 0) {
    alert("Por favor, selecione um arquivo. Na página Termo de Recusa");
  } else {
    // Constrói a mensagem de notificação
    var AssTxtRecusa =
      "EU " +
      NomeTermoRecusa +
      " PORTADOR DA CARTEIRA DE IDENTIDADE RG Nº " +
      IdentidadeRecusa +
      " INSCRITO NO CPF SOB Nº" +
      CpfRescusa +
      " NA QUALIDADE DE VÍTIMA/PACIENTE, USANDO DOS DIREITOS QUE A LEI ME GARANTE, ME RECUSO NESTE ATO O ATENDIMENTO E/OU TRANSPORTE OFERECIDO PELOS BOMBEIROS-VOLUNTÁRIOS DE GUARAMIRIM/SC, E ASSUMO, INDIVIDUALMENTE A RESPONSABILIDADE PELAS CONSEQUENCIAS QUE POSSAM OCORRER POR RAZÃO DA MINHA RECUSA. DECLARO QUE FUI DEVIDAMENTE INFORMADO SOBRE O PROCEDIMENTO PELO QUAL EU DEVERIA ME SUBMETER, E ALERTADO SOBRE OS RISCOS À SAÚDE DA SUA NÃO REALIZAÇÃO.";

    // Faça o que for necessário com a mensagem de notificação
    console.log(AssTxtRecusa);
  }
}
   //FormaDeConducao
var Conducao = ""; /* Input type radio */
if (document.getElementById("deitada_conducao").checked) {
    Conducao = document.getElementById("deitada_conducao").value;
} else if (document.getElementById("semi_deitada_conducao").checked) {
    Conducao = document.getElementById("semi_deitada_conducao").value;
} else if (document.getElementById("sentada_conducao").checked) {
    Conducao = document.getElementById("sentada_conducao").value; /* Input type radio */
} else {
    Conducao = "";
}

// Segunda parte
var FcCiclista = "";
var FcCondutor = "";
var FcGestante = "";
var FcPassBanFrente = "";
var FcPassMoto = "";
var FcCondutorCarro = "";
var FcClinico = "";
var FcTrauma = "";
var FcPassBanTras = "";
var FcPedestre = "";

if (document.getElementById("fc_ciclista").checked) {
    FcCiclista = document.getElementById("fc_ciclista").value;
}

if (document.getElementById("fc_condutor_moto").checked) {
    FcCondutor = document.getElementById("fc_condutor_moto").value;
}

if (document.getElementById("fc_gestante").checked) {
    FcGestante = document.getElementById("fc_gestante").value;
}

if (document.getElementById("fc_pass_ban_frente").checked) {
    FcPassBanFrente = document.getElementById("fc_pass_ban_frente").value;
}

if (document.getElementById("fc_pass_moto").checked) {
    FcPassMoto = document.getElementById("fc_pass_moto").value;
}

if (document.getElementById("fc_condutor_carro").checked) {
    FcCondutorCarro = document.getElementById("fc_condutor_carro").value;
}

if (document.getElementById("fc_clinico").checked) {
    FcClinico = document.getElementById("fc_clinico").value;
}

if (document.getElementById("fc_trauma").checked) {
    FcTrauma = document.getElementById("fc_trauma").value;
}

if (document.getElementById("fc_pass_ban_tras").checked) {
    FcPassBanTras = document.getElementById("fc_pass_ban_tras").value;
}

if (document.getElementById("fc_pedestre").checked) {
    FcPedestre = document.getElementById("fc_pedestre").value;
}

// Notificação se apenas uma parte foi preenchida
if (
    (Conducao.trim() !== "" && (
        FcCiclista.trim() === "" &&
        FcCondutor.trim() === "" &&
        FcGestante.trim() === "" &&
        FcPassBanFrente.trim() === "" &&
        FcPassMoto.trim() === "" &&
        FcCondutorCarro.trim() === "" &&
        FcClinico.trim() === "" &&
        FcTrauma.trim() === "" &&
        FcPassBanTras.trim() === "" &&
        FcPedestre.trim() === ""
    )) ||
    (Conducao.trim() === "" && (
        FcCiclista.trim() !== "" ||
        FcCondutor.trim() !== "" ||
        FcGestante.trim() !== "" ||
        FcPassBanFrente.trim() !== "" ||
        FcPassMoto.trim() !== "" ||
        FcCondutorCarro.trim() !== "" ||
        FcClinico.trim() !== "" ||
        FcTrauma.trim() !== "" ||
        FcPassBanTras.trim() !== "" ||
        FcPedestre.trim() !== ""
    )) ||
    (Conducao.trim() === "" && FcCiclista.trim() === "" && FcCondutor.trim() === "" && FcGestante.trim() === "" &&
        FcPassBanFrente.trim() === "" && FcPassMoto.trim() === "" && FcCondutorCarro.trim() === "" &&
        FcClinico.trim() === "" && FcTrauma.trim() === "" && FcPassBanTras.trim() === "" && FcPedestre.trim() === "")
) {
    alert("Por favor, preencha apenas uma das partes obrigatórias. Da página Forma De Condução");
}



    //AvaliacaoPaciente

    //SinaisVitais 
    var Psa1 = $('#pressao_arterial_sv').val();
if (Psa1 === "") {
    Psa1 = "0";
}
var Psa2 = $('#mmhg_sv').val();
if (Psa2 === "") {
    Psa2 = "0";
}
var PressaoArterial = Psa1 + " x " + Psa2 + " mmhg";

var Pulso = $('#pulso_sv').val();
if (Pulso === "") {
    Pulso = "0";
}
var Respiracao = $('#respiracao_sv').val();
if (Respiracao === "") {
    Respiracao = "0";
}
var Temperatura = $('#temperatura_sv').val();
if (Temperatura === "") {
    Temperatura = "0";
}

var AnormalCheckbox = document.getElementById("anormal_sv");/*Input type Checkbox*/
var AnormalCheck = AnormalCheckbox.checked;
var Anormal = AnormalCheck ? 's' : 'n';

var Maior2SegSv = "";/*Input type radio*/
if (document.getElementById("menor_2_seg_sv").checked) {
    Maior2SegSv = document.getElementById("menor_2_seg_sv").value;
} else if (document.getElementById("normal_sv").checked) {
    Maior2SegSv = document.getElementById("normal_sv").value;
} else if (document.getElementById("maior_2_seg_sv").checked) {
    Maior2SegSv = document.getElementById("maior_2_seg_sv").value;
} else {
    Maior2SegSv = "0";
}

if (Psa1 === "0" || Psa2 === "0" || Pulso === "0" || Respiracao === "0" || Temperatura === "0" || Maior2SegSv === "0") {
    alert("Por favor, preencha todos os campos obrigatórios. Da página sinais vitais");}


    //DecisaoDeTransporte

    var MDT = $('#m_dt').val().trim(); 
if (MDT === "") {
    MDT = "nda";
}

var S1DT = $('#s1_dt').val().trim(); 
if (S1DT === "") {
    S1DT = "nda";
}

var S2DT = $('#s2_dt').val().trim(); 
if (S2DT === "") {
    S2DT = "nda";
}

var S3DT = $('#s3_dr').val().trim(); 
if (S3DT === "") {
    S3DT = "nda";
}

var DemanteDT = $('#demante_dt').val().trim(); 
if (DemanteDT === "") {
    DemanteDT = "nda";
}

var DecisaoDeTransporteDt = "";
var criticoDtChecked = document.getElementById("critico_dt").checked;
var instavelDtChecked = document.getElementById("instavel_dt").checked;
var estavelDtChecked = document.getElementById("estavel_dt").checked;
var potencialMenteInstavelDtChecked = document.getElementById("potencial_mente_instavel_dt").checked;

if (criticoDtChecked) {
    DecisaoDeTransporteDt = document.getElementById("critico_dt").value.trim();
} else if (instavelDtChecked) {
    DecisaoDeTransporteDt = document.getElementById("instavel_dt").value.trim();
} else if (estavelDtChecked) {
    DecisaoDeTransporteDt = document.getElementById("estavel_dt").value.trim();
} else if (potencialMenteInstavelDtChecked) {
    DecisaoDeTransporteDt = document.getElementById("potencial_mente_instavel_dt").value.trim();
} else {
    DecisaoDeTransporteDt = "nda";
}

if (MDT === "nda" || S1DT === "nda" || S2DT === "nda" || S3DT === "nda" || DemanteDT === "nda" || DecisaoDeTransporteDt === "nda") {
    alert("Por favor, preencha todos os campos obrigatórios. Da página Decisão de Transporte");
}

//     //AnamneseGestacional
//     var PeriodoDeGestacao = $('#pg_anamnese_gestacional').val().trim();
//     if (PeriodoDeGestacao === "") {
//         PeriodoDeGestacao = "nda";
//     }
    
//     var NomeDoMedico = $('#nm_anamnese_gestacional').val().trim();
//     if (NomeDoMedico === "") {
//         NomeDoMedico = "nda";
//     }
    
//     var Duracao = $('#tc_anamnese_gestacional').val().trim();
//     if (Duracao === "") {
//         Duracao = "nda";
//     }
    
//     var Intervalo = $('#io_anamnese_gestacional').val().trim();
//     if (Intervalo === "") {
//         Intervalo = "nda";
//     }
    
//     var HoraDoNascimento = $('#hn_anamnese_gestacional').val().trim();
//     if (HoraDoNascimento === "") {
//         HoraDoNascimento = "nda";
//     }
    
//     var NomeDoBebe = $('#nb_anamnese_gestacional').val().trim();
//     if (NomeDoBebe === "") {
//         NomeDoBebe = "nda";
//     }
    
//     var FpAnamneseGestacional = "";
//     if ($('#s_fp').prop('checked')) {
//         FpAnamneseGestacional = "s";
//     } else if ($('#n_fp').prop('checked')) {
//         FpAnamneseGestacional = "n";
//     } else {
//         FpAnamneseGestacional = "nda";
//     }
    
//     var EcAnamneseGestacional = "";
// var s_ec_value = $('#s_ec').val().trim();
// if (s_ec_value !== "") {
//     EcAnamneseGestacional = s_ec_value;
// } else {
//     var n_ec_value = $('#n_ec').val().trim();
//     if (n_ec_value !== "") {
//         EcAnamneseGestacional = n_ec_value;
//     } else {
//         EcAnamneseGestacional = "nda";
//     }
// }

// var QtdFilhos = "";
// var EfAnamneseGestacional = "";
// var s_ef_checked = $('#s_ef').prop('checked');
// if (s_ef_checked) {
//     EfAnamneseGestacional = "Primeiro filho";
// } else {
//     var n_ef_checked = $('#n_ef').prop('checked');
//     if (n_ef_checked) {
//         QtdFilhos = $('#qs_anamnese_gestacional').val().trim();
//         if (QtdFilhos === "") {
//             QtdFilhos = "1+";
//         }
//         EfAnamneseGestacional = QtdFilhos;
//     } else {
//         EfAnamneseGestacional = "nda";
//     }
// }

// var SqAnamneseGestacional = "";
// var s_sq_value = $('#s_sq').val().trim();
// if (s_sq_value !== "") {
//     SqAnamneseGestacional = s_sq_value;
// } else {
//     var n_sq_value = $('#n_sq').val().trim();
//     if (n_sq_value !== "") {
//         SqAnamneseGestacional = n_sq_value;
//     } else {
//         SqAnamneseGestacional = "nda";
//     }
// }

// var JbAnamneseGestacional = "";
// var s_jb_value = $('#s_jb').val().trim();
// if (s_jb_value !== "") {
//     JbAnamneseGestacional = s_jb_value;
// } else {
//     var n_jb_value = $('#n_jb').val().trim();
//     if (n_jb_value !== "") {
//         JbAnamneseGestacional = n_jb_value;
//     } else {
//         JbAnamneseGestacional = "nda";
//     }
// }

// var FvAnamneseGestacional = "";
// var s_fv_value = $('#s_fv').val().trim();
// if (s_fv_value !== "") {
//     FvAnamneseGestacional = s_fv_value;
// } else {
//     var n_fv_value = $('#n_fv').val().trim();
//     if (n_fv_value !== "") {
//         FvAnamneseGestacional = n_fv_value;
//     } else {
//         FvAnamneseGestacional = "nda";
//     }
// }

// var PrAnamneseGestacional = "";
// var s_pr_value = $('#s_pr').val().trim();
// if (s_pr_value !== "") {
//     PrAnamneseGestacional = s_pr_value;
// } else {
//     var n_pr_value = $('#n_pr').val().trim();
//     if (n_pr_value !== "") {
//         PrAnamneseGestacional = n_pr_value;
//     } else {
//         PrAnamneseGestacional = "nda";
//     }
// }

// var SexoAnamneseGestacional = "";
// var fem_checked = $('#fem').prop('checked');
// if (fem_checked) {
//     SexoAnamneseGestacional = $('#fem').val().trim();
// } else {
//     var mas_checked = $('#mas').prop('checked');
//     if (mas_checked) {
//         SexoAnamneseGestacional = $('#mas').val().trim();
//     } else {
//         SexoAnamneseGestacional = "nda";
//     }
// }
    
// if (PeriodoDeGestacao === "nda" || NomeDoMedico === "nda" || Duracao === "nda" || Intervalo === "nda" || HoraDoNascimento === "nda" || NomeDoBebe === "nda" || FpAnamneseGestacional === "nda" || EcAnamneseGestacional === "nda" || EfAnamneseGestacional === "nda" || SqAnamneseGestacional === "nda" || JbAnamneseGestacional === "nda" || FvAnamneseGestacional === "nda" || PrAnamneseGestacional === "nda" || SexoAnamneseGestacional === "nda" || EcAnamneseGestacional === "nda" || EfAnamneseGestacional === "nda" || SqAnamneseGestacional === "nda" || JbAnamneseGestacional === "nda" || FvAnamneseGestacional === "nda" || PrAnamneseGestacional === "nda" || SexoAnamneseGestacional === "nda") {
//     alert("Por favor, preencha todos os campos obrigatórios. Da página Anamnese Gestacional");
// }



//AvaliacaoCinematica

var DisturbioDeComportamento = $('#avaliacao_cimetica_dc_s').prop('checked') ? 's' :
                             $('#avaliacao_cimetica_dc_n').prop('checked') ? 'n' : 'nda';
DisturbioDeComportamento = DisturbioDeComportamento.trim();

var EncontradoDeCapacete = $('#avaliacao_cimetica_ec_s').prop('checked') ? 's' :
                           $('#avaliacao_cimetica_ec_n').prop('checked') ? 'n' : 'nda';
EncontradoDeCapacete = EncontradoDeCapacete.trim();

var EncontradoDeCinto = $('#avaliacao_cimetica_eo_s').prop('checked') ? 's' :
                        $('#avaliacao_cimetica_eo_n').prop('checked') ? 'n' : 'nda';
EncontradoDeCinto = EncontradoDeCinto.trim();

var ParaBrisasAvariado = $('#avaliacao_cimetica_pba_s').prop('checked') ? 's' :
                         $('#avaliacao_cimetica_pba_n').prop('checked') ? 'n' : 'nda';
ParaBrisasAvariado = ParaBrisasAvariado.trim();

var CaminhandoNaCena = $('#avaliacao_cimetica_cc_s').prop('checked') ? 's' :
                       $('#avaliacao_cimetica_cc_n').prop('checked') ? 'n' : 'nda';
CaminhandoNaCena = CaminhandoNaCena.trim();

var PainelAvariado = $('#avaliacao_cimetica_pa_s').prop('checked') ? 's' :
                     $('#avaliacao_cimetica_pa_n').prop('checked') ? 'n' : 'nda';
PainelAvariado = PainelAvariado.trim();

var VolanteTorcido = $('#avaliacao_cimetica_vt_s').prop('checked') ? 's' :
                     $('#avaliacao_cimetica_vt_n').prop('checked') ? 'n' : 'nda';
VolanteTorcido = VolanteTorcido.trim();

// Notificação
if (DisturbioDeComportamento === "nda" || EncontradoDeCapacete === "nda" || EncontradoDeCinto === "nda" ||
    ParaBrisasAvariado === "nda" || CaminhandoNaCena === "nda" || PainelAvariado === "nda" || VolanteTorcido === "nda") {
    alert("Por favor, preencha todos os campos obrigatórios. Da página Avaliação Cinemática");
}


//Anamnese
var PsAnamnese = "";
var QsAnamnese = "";
if ($('#anamnese_quais_ps').is(':visible')) {
    if (document.getElementById("s_ps").checked) {
        QsAnamnese = $('#qs_anamnese').val().trim() || "nda";
    } else if (document.getElementById("n_ps").checked) {
        QsAnamnese = "nda";
    } else {
        PsAnamnese = "nda";
        QsAnamnese = "nda";
    }
}

var HuAnamnese = "";
var QisAnamnese = "";
var FmAnamnese = "";
if ($('#anamnese_hm_fm').is(':visible')) {
    if (document.getElementById("s_fm").checked) {
        HuAnamnese = $('#hu_anamnese').val().trim() || "nda";
        QisAnamnese = $('#qis_anamnese').val().trim() || "nda";
        FmAnamnese = QisAnamnese + "(" + HuAnamnese + ")";
    } else if (document.getElementById("n_fm").checked) {
        HuAnamnese = "nda";
        QisAnamnese = "nda";
        FmAnamnese = "nda";
    } else {
        HuAnamnese = "nda";
        QisAnamnese = "nda";
        FmAnamnese = "nda";
    }
}

var EqAnamnese = "";
if ($('#anamnese_ee_aa').is(':visible')) {
    if (document.getElementById("s_al").checked) {
        EqAnamnese = $('#eq_anamnese').val().trim() || "nda";
    } else if (document.getElementById("n_al").checked) {
        EqAnamnese = "nda";
    } else {
        EqAnamnese = "nda";
    }
}

var IlAnamnese = "";
var QrAnamnese = "";
if ($('#anamnese_qh_il').is(':visible')) {
    if (document.getElementById("s_il").checked) {
        QrAnamnese = $('#qr_anamnese').val().trim() || "nda";
    } else if (document.getElementById("n_il").checked) {
        QrAnamnese = "nda";
    } else {
        IlAnamnese = "nda";
        QrAnamnese = "nda";
    }
}

// Notificação
if (PsAnamnese === "nda" || FmAnamnese === "nda" || EqAnamnese === "nda" || IlAnamnese === "nda" || QrAnamnese === "nda") {
    alert("Por favor, preencha todos os campos obrigatórios na página Anamnese.");
}



//ObservacoesImportantes
var ObservacoesImportantesText = document.getElementById("obsdiv").textContent.trim();

if (ObservacoesImportantesText === "") {
    alert("A área de observações importantes está vazia.");
}
    }
   




    var SexoPaciente = "";/*Input type radio*/
    var EmergenciaRegistro1 = ""

function PacienteRegistro(){    

    var Data = $('#data_paciente').val();if(Data === ""){Data = "nda"}
    var NomeHospitalPaciente = $('#nome_hospital_paciente').val();if(NomeHospitalPaciente === ""){NomeHospitalPaciente = "nda"}
    var NomePaciente = $('#nome_paciente').val();if(NomePaciente === ""){NomePaciente = "nda"}
    var IdadePaciente = $('#idade_paciente').val();if(IdadePaciente === ""){IdadePaciente = "nda"}
    var RgCpfPaciente = $('#rg_cpf_paciente').val();if(RgCpfPaciente === ""){RgCpfPaciente = "nda"}
    var FonePaciente = $('#fone_paciente').val();if(FonePaciente === ""){FonePaciente = "nda"}
    var AcompanhantePaciente = $('#acompanhante_paciente').val();if(AcompanhantePaciente === ""){AcompanhantePaciente = "nda"}
    var IdadeAcompanhantePaciente = $('#idade_acompanhante_paciente').val();if(IdadeAcompanhantePaciente === ""){IdadeAcompanhantePaciente = "nda"}
    var LocalOcorrenciaPaciente = $('#local_ocorrencia_paciente').val();if(LocalOcorrenciaPaciente === ""){LocalOcorrenciaPaciente = "nda"}
    var NUsbPaciente = $('#n_usab_paciente').val();if(NUsbPaciente === ""){NUsbPaciente = "nda"}
    var NOcorrPaciente = $('#n_ocorr_paciente').val();if(NOcorrPaciente === ""){NOcorrPaciente = "nda"}
    var DespPaciente = $('#desp_paciente').val();if(DespPaciente === ""){DespPaciente = "nda"}
    var HChPaciente = $('#h_ch_paciente').val();if(HChPaciente === ""){HChPaciente = "nda"}
    var KmFinalPaciente = $('#km_final_paciente').val();if(KmFinalPaciente === ""){KmFinalPaciente = "nda"}
    var CodSiaSusPaciente = $('#cod_sia_sus_paciente').val();if(CodSiaSusPaciente === ""){CodSiaSusPaciente = "nda"}

    if (document.getElementById("sexo_paciente_m").checked) {
        SexoPaciente = document.getElementById("sexo_paciente_m").value;
    } else if (document.getElementById("sexo_paciente_f").checked) {
        SexoPaciente = document.getElementById("sexo_paciente_f").value;
    }else{SexoPaciente = "nda"}

    var CodUrCheckbox = document.getElementById("cod_ur");/*Input type Checkbox*/
    var CodUrChecked = CodUrCheckbox.checked;
    if (CodUrChecked) {
        var CodUr = 's';
    } else {
        var CodUr = 'n';
    }

    var CodPsCheckbox = document.getElementById("cod_ps");/*Input type Checkbox*/
    var CodPsChecked = CodPsCheckbox.checked;
    if (CodPsChecked) {
        var CodPs = 's';
    } else {
        var CodPs = 'n';
    }
    console.log("Data: " + Data)
    console.log("Sexo: " + SexoPaciente)
    console.log("Hospital: " + NomeHospitalPaciente)
    console.log("Nome Paciente: " + NomePaciente)
    console.log("Idade: " + IdadePaciente)
    console.log("RG/CPF: " + RgCpfPaciente)
    console.log("Telefone: " + FonePaciente)
    console.log("Acompanhante: " + AcompanhantePaciente)
    console.log("Idade da Acompanhante: " + IdadeAcompanhantePaciente)
    console.log("Local da Ocorrência: " + LocalOcorrenciaPaciente)
    console.log("N°USB do Paciente: " + NUsbPaciente)
    console.log("CodUr: " + CodUr)
    console.log("N°Ocorrência: " + NOcorrPaciente)
    console.log("CodPs: " + CodPs)
    console.log("Desp. Paciente: " + DespPaciente)
    console.log("H.CH: " + HChPaciente)
    console.log("KmFinal: " + KmFinalPaciente)
    console.log("CodSiaSus: " + CodSiaSusPaciente)
    console.log("Paciente: " + CpfPaciente)
    
     $.ajax({
        url: 'PHP/tabela-paciente.php',
        method: 'POST',
        data: {
            Data: Data,
            SexoPaciente: SexoPaciente,
            NomeHospitalPaciente: NomeHospitalPaciente,
            NomePaciente: NomePaciente,
            IdadePaciente: IdadePaciente,
            RgCpfPaciente: RgCpfPaciente,
            FonePaciente: FonePaciente,
            AcompanhantePaciente: AcompanhantePaciente,
            IdadeAcompanhantePaciente: IdadeAcompanhantePaciente,
            LocalOcorrenciaPaciente: LocalOcorrenciaPaciente,
            NUsbPaciente: NUsbPaciente,
            CodUr: CodUr,
            NOcorrPaciente: NOcorrPaciente,
            CodPs: CodPs,
            DespPaciente: DespPaciente,
            HChPaciente: HChPaciente,
            KmFinalPaciente: KmFinalPaciente,
            CodSiaSusPaciente: CodSiaSusPaciente,
            Bombeiro: BombeiroAtual,
            Paciente: CpfPaciente
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    
};
function SexoMasculino() {/*Input type radio*/
    var sexo_paciente_f = document.getElementById("sexo_paciente_f");
    var slideAnamneseGestacional = document.getElementById("slide15");
    var navigateAnamneseGestacional = document.getElementById("slide15Nav");
    var slide20 = document.getElementById("slide20");
    sexo_paciente_f.checked = false;
    slideAnamneseGestacional.style.display = "none";
    navigateAnamneseGestacional.style.display = "none";
    slide20.style.display = "none";
} 
function SexoFeminino() {/*Input type radio*/
    var sexo_paciente_m = document.getElementById("sexo_paciente_m");
    var slideAnamneseGestacional = document.getElementById("slide15");
    var navigateAnamneseGestacional = document.getElementById("slide15Nav");
    var slide20 = document.getElementById("slide20");
    sexo_paciente_m.checked = false;
    slideAnamneseGestacional.style.display = "flex";
    navigateAnamneseGestacional.style.display = "flex";
    slide20.style.display = "flex";
}
function EmergenciaRegistro(){

    if (document.getElementById("emergencia_medica_er").checked) {
        EmergenciaMedicaEr = document.getElementById("emergencia_medica_er").value;
    }else(EmergenciaMedicaEr = "")

    if (document.getElementById("com_meio_de_transporte_er").checked) {
        ComMeioTransporteEr = document.getElementById("com_meio_de_transporte_er").value;
    }else(ComMeioTransporteEr = "")

    if (document.getElementById("causado_por_animais_er").checked) {
        CausadoPorAnimaisEr = document.getElementById("causado_por_animais_er").value;
    }else(CausadoPorAnimaisEr = "")
    
    if (document.getElementById("incendio_er").checked) {
        IncendioEr = document.getElementById("incendio_er").value;
    }else(IncendioEr = "")

    if (document.getElementById("afogamento_er").checked) {
        AfogamentoEr = document.getElementById("afogamento_er").value;
    }else(AfogamentoEr = "")

    if (document.getElementById("deslizamento_desmoronamento_er").checked) {
        DeslizamentoDesmoronamentoEr = document.getElementById("deslizamento_desmoronamento_er").value;
    }else(DeslizamentoDesmoronamentoEr = "")

    if (document.getElementById("agressao_er").checked) {
        AgressaoEr = document.getElementById("agressao_er").value;
    }else(AgressaoEr = "")

    if (document.getElementById("queda_aluta_2m_er").checked) {
        QuedaAltura2mEr = document.getElementById("queda_aluta_2m_er").value;
    }else(QuedaAltura2mEr = "")

    if (document.getElementById("tentativa_suicidio_er").checked) {
        SuicidioEr = document.getElementById("tentativa_suicidio_er").value;
    }else(SuicidioEr = "")

    if (document.getElementById("queda_propria_altura_er").checked) {
        QuedaPropriaAlturaEr = document.getElementById("queda_propria_altura_er").value;
    }else(QuedaPropriaAlturaEr = "")

    if (document.getElementById("Atropelamento_er").checked) {
        AtropelamentoEr = document.getElementById("Atropelamento_er").value;
    }else(AtropelamentoEr = "")

    if (document.getElementById("choque_eletrico_er").checked) {
        ChoqueEletricoEr = document.getElementById("choque_eletrico_er").value;
    }else(ChoqueEletricoEr = "")

    if (document.getElementById("desabamento_er").checked) {
        DesabamentoEr = document.getElementById("desabamento_er").value;
    }else(DesabamentoEr = "")

    if (document.getElementById("domestico_er").checked) {
        DomesticoEr = document.getElementById("domestico_er").value;
    }else(DomesticoEr = "")

    if (document.getElementById("esportivo_er").checked) {
        EsportivoEr = document.getElementById("esportivo_er").value;
    }else(EsportivoEr = "")

    if (document.getElementById("intoxicacao_er").checked) {
        IntoxicacaoEr = document.getElementById("intoxicacao_er").value;
    }else(IntoxicacaoEr = "")

    if (document.getElementById("queda_bicicleta_er").checked) {
        QuedaBicicletaEr = document.getElementById("queda_bicicleta_er").value;
    }else(QuedaBicicletaEr = "")

    if (document.getElementById("queda_moto_er").checked) {
        QuedaMotoEr = document.getElementById("queda_moto_er").value;
    }else(QuedaMotoEr = "")

    if (document.getElementById("queda_er").checked) {
        QuedaEr = document.getElementById("queda_er").value;
    }else(QuedaEr = "")

    if (document.getElementById("trabalho_er").checked) {
        TrabalhoEr = document.getElementById("trabalho_er").value;
    }else(TrabalhoEr = "")

    if (document.getElementById("transferencia_er").checked) {
        TransferenciaEr = document.getElementById("transferencia_er").value;
    }else(TransferenciaEr = "")

    if (document.getElementById("outro_er").checked) {
        OutroEr = document.getElementById("outro_er").value;
    }else(OutroEr = "")

     EmergenciaRegistro1 = "";
     if(EmergenciaMedicaEr !== ""){EmergenciaRegistro1 += EmergenciaMedicaEr + ", "}
     if(ComMeioTransporteEr !== ""){EmergenciaRegistro1 += ComMeioTransporteEr + ", "}
     if(CausadoPorAnimaisEr !== ""){EmergenciaRegistro1 += CausadoPorAnimaisEr + ", "}
     if(IncendioEr !== ""){EmergenciaRegistro1 += IncendioEr + ", "}
     if(AfogamentoEr !== ""){EmergenciaRegistro1 += AfogamentoEr + ", "}
     if(DeslizamentoDesmoronamentoEr !== ""){EmergenciaRegistro1 += DeslizamentoDesmoronamentoEr + ", "}
     if(AgressaoEr !== ""){EmergenciaRegistro1 += AgressaoEr + ", "}
     if(QuedaAltura2mEr !== ""){EmergenciaRegistro1 += QuedaAltura2mEr + ", "}
     if(SuicidioEr !== ""){EmergenciaRegistro1 += SuicidioEr + ", "}
     if(QuedaPropriaAlturaEr !== ""){EmergenciaRegistro1 += QuedaPropriaAlturaEr + ", "}
     if(AtropelamentoEr !== ""){EmergenciaRegistro1 += AtropelamentoEr + ", "}
     if(AtropelamentoEr !== ""){EmergenciaRegistro1 += AtropelamentoEr + ", "}
     if(ChoqueEletricoEr !== ""){EmergenciaRegistro1 += ChoqueEletricoEr + ", "}
     if(DesabamentoEr !== ""){EmergenciaRegistro1 += DesabamentoEr + ", "}
     if(DomesticoEr !== ""){EmergenciaRegistro1 += DomesticoEr + ", "}
     if(EsportivoEr !== ""){EmergenciaRegistro1 += EsportivoEr + ", "}
     if(IntoxicacaoEr !== ""){EmergenciaRegistro1 += IntoxicacaoEr + ", "}
     if(QuedaBicicletaEr !== ""){EmergenciaRegistro1 += QuedaBicicletaEr + ", "}
     if(QuedaMotoEr !== ""){EmergenciaRegistro1 += QuedaMotoEr + ", "}
     if(QuedaEr !== ""){EmergenciaRegistro1 += QuedaEr + ", "}
     if(TrabalhoEr !== ""){EmergenciaRegistro1 += TrabalhoEr + ", "}
     if(TransferenciaEr !== ""){EmergenciaRegistro1 += TransferenciaEr + ", "}
     if(OutroEr !== ""){EmergenciaRegistro1 += OutroEr + ", "}
     if(EmergenciaRegistro1 === ""){EmergenciaRegistro1 = "nda"}

    console.log(EmergenciaRegistro1)

    $.ajax({
        url: 'PHP/tabela-emergencia.php',
        method: 'POST',
        data: {
            EmergenciaRegistro:EmergenciaRegistro1,
            Paciente: CpfPaciente,
            Bombeiro: BombeiroAtual
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
};
let AssImagem = '';
document.getElementById('assinatura_Recusa').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            AssImagem = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function TermoDeRecusa(){

  var NomeTermoRecusa = $('#nome_Recusa').val();
  var IdentidadeRecusa = $('#identidade_Recusa').val();
  var CpfRescusa = $('#cpf_Recusa').val();
  var TestemunhaRecusa = $('#testemunha_Recusa').val();
  var DocRecusa = $('#doc_Recusa').val();
  var TestemunhaRecusa2 = $('#testemunha_Recusa_2').val();
  var DocRecusa2 = $('#doc_Recusa_2').val();
  var AssTxtRecusa = "EU " + NomeTermoRecusa + " PORTADOR DA CARTEIRA DE IDENTIDADE RG Nº " + IdentidadeRecusa + " INSCRITO NO CPF SOB Nº" + CpfRescusa + " NA QUALIDADE DE VÍTIMA/PACIENTE, USANDO DOS DIREITOS QUE A LEI ME GARANTE, ME RECUSO NESTE ATO O ATENDIMENTO E/OU TRANSPORTE OFERECIDO PELOS BOMBEIROS-VOLUNTÁRIOS DE GUARAMIRIM/SC, E ASSUMO, INDIVIDUALMENTE A RESPONSABILIDADE PELAS CONSEQUENCIAS QUE POSSAMOCORRER POR RAZÃO DA MINHA RECUSA. DECLARO QUE FUI DEVIDAMENTE INFORMADO SOBRE O PROCEDIMENTO PELO QUAL EU DEVERIA ME SUBMETER, E ALERTADO SOBRE OS RISCOS À SAÚDE DA SUA NÃO REALIZAÇÃO."
    
    console.log(AssImagem)
    console.log(AssTxtRecusa)
    console.log(TestemunhaRecusa);
    console.log(DocRecusa);
    console.log(TestemunhaRecusa2);
    console.log(DocRecusa2);

     $.ajax({
        url: 'PHP/tabela-termo-recusa.php',
        method: 'POST',
        data: {
            TermoRecusa: AssTxtRecusa,
            TestemunhaRecusa: TestemunhaRecusa,
            DocRecusa: DocRecusa,
            TestemunhaRecusa2: TestemunhaRecusa2,
            DocRecusa2: DocRecusa2,
            Imagem: AssImagem,
            Bombeiro: BombeiroAtual,
            Paciente: CpfPaciente
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    
};
var FormaConducao = "";
function FormaDeConducao(){

    var Conducao = "";/*Input type radio*/
    if (document.getElementById("deitada_conducao").checked) {
        Conducao = document.getElementById("deitada_conducao").value;
    } else if (document.getElementById("semi_deitada_conducao").checked) {
        Conducao = document.getElementById("semi_deitada_conducao").value;
    }else if (document.getElementById("sentada_conducao").checked) {
        Conducao = document.getElementById("sentada_conducao").value;/*Input type radio*/
    }else{Conducao = ""}

    if (document.getElementById("fc_ciclista").checked) {
        FcCiclista = document.getElementById("fc_ciclista").value;
    }else(FcCiclista = "")

    if (document.getElementById("fc_condutor_moto").checked) {
        FcCondutor = document.getElementById("fc_condutor_moto").value;
    }else(FcCondutor = "")

    if (document.getElementById("fc_gestante").checked) {
        FcGestante = document.getElementById("fc_gestante").value;
    }else(FcGestante = "")

    if (document.getElementById("fc_pass_ban_frente").checked) {
        FcPassBanFrente = document.getElementById("fc_pass_ban_frente").value;
    }else(FcPassBanFrente = "")

    if (document.getElementById("fc_pass_moto").checked) {
        FcPassMoto = document.getElementById("fc_pass_moto").value;
    }else(FcPassMoto = "")

    if (document.getElementById("fc_condutor_carro").checked) {
        FcCondutorCarro = document.getElementById("fc_condutor_carro").value;
    }else(FcCondutorCarro = "")

    if (document.getElementById("fc_clinico").checked) {
        FcClinico = document.getElementById("fc_clinico").value;
    }else(FcClinico = "")

    if (document.getElementById("fc_trauma").checked) {
        FcTrauma = document.getElementById("fc_trauma").value;
    }else( FcTrauma = "")

    if (document.getElementById("fc_pass_ban_tras").checked) {
        FcPassBanTras = document.getElementById("fc_pass_ban_tras").value;
    }else(FcPassBanTras = "")

    if (document.getElementById("fc_pedestre").checked) {
        FcPedestre = document.getElementById("fc_pedestre").value;
    }else(FcPedestre = "")

     FormaConducao = "";
    if(FcCiclista !== ""){FormaConducao += FcCiclista + ", "}
    if(FcCondutor !== ""){FormaConducao += FcCondutor + ", "}
    if(FcGestante !== ""){FormaConducao += FcGestante + ", "}
    if(FcPassBanFrente !== ""){FormaConducao += FcPassBanFrente + ", "}
    if(FcPassMoto !== ""){FormaConducao += FcPassMoto + ", "}
    if(FcCondutorCarro !== ""){FormaConducao += FcCondutorCarro + ", "}
    if(FcClinico !== ""){FormaConducao += FcClinico + ", "}
    if(FcTrauma !== ""){FormaConducao += FcTrauma + ", "}
    if(FcPassBanTras !== ""){FormaConducao += FcPassBanTras + ", "}
    if(FcPedestre !== ""){FormaConducao += FcPedestre + ", "}

    if(FormaConducao === ""){FormaConducao = "nda"}

    if(Conducao === ""){Conducao = "nda"}

    console.log(Conducao);
    console.log(FormaConducao);

    $.ajax({
        url: 'PHP/tabela-forma_de_conducao.php',
        method: 'POST',
        data: {
           Conducao: Conducao,
           FormaConducao: FormaConducao,
           Paciente: CpfPaciente,
           Bombeiro: BombeiroAtual
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
}
function Deitada() {/*Input type radio*/
    var semi_deitada_conducao = document.getElementById("semi_deitada_conducao"); 
    semi_deitada_conducao.checked = false;

    var sentada_conducao = document.getElementById("sentada_conducao"); 
    sentada_conducao.checked = false;
} 
function Semi_Deitada() {/*Input type radio*/
    var deitada_conducao = document.getElementById("deitada_conducao"); 
    deitada_conducao.checked = false;

    var sentada_conduo = document.getElementById("sentada_conducao"); 
    sentada_conduo.checked = false;
} 
function Sentada() {/*Input type radio*/
    var deitada_conducao = document.getElementById("deitada_conducao"); 
    deitada_conducao.checked = false;

    var semi_deitada_conducao = document.getElementById("semi_deitada_conducao"); 
    semi_deitada_conducao.checked = false;
}

var AberturaOcular = "Nenhuma";/*Input type radio*/
var ValorAberturaOcularMa = 4;

var RespostaVerbal = "Nenhuma";/*Input type radio*/
var ValorRespostaVerbalMa = 5;

var RespostaMotora = "Nenhuma";/*Input type radio*/
var ValorRespostaMotoraMa = 6;

function AvaliacaoPacienteMaGCS(){

    console.clear();

    if (document.getElementById("espontanea_paciente_ma").checked) {
        AberturaOcular = document.getElementById("espontanea_paciente_ma").value;
        ValorAberturaOcularMa = 1
    }  else if (document.getElementById("comando_verbal_paciente_ma").checked) {
        AberturaOcular = document.getElementById("comando_verbal_paciente_ma").value;
        ValorAberturaOcularMa = 2
    } else if (document.getElementById("estimulo_doloroso_paciente_ma").checked) {
        AberturaOcular = document.getElementById("estimulo_doloroso_paciente_ma").value;
        ValorAberturaOcularMa = 3
    } else if (document.getElementById("nenhuma_paciente_ma_ao").checked) {
        AberturaOcular = document.getElementById("nenhuma_paciente_ma_ao").value;
        ValorAberturaOcularMa = 4
    } else {
        AberturaOcular = document.getElementById("nenhuma_paciente_ma_ao").value;
        ValorAberturaOcularMa = 4
    }

    console.log(AberturaOcular)
    
    /*RespostaVerbal*/
    var ValorRespostaVerbalMa = "";
    if (document.getElementById("orientado_paciente_ma").checked) {
        RespostaVerbal = document.getElementById("orientado_paciente_ma").value;
        ValorRespostaVerbalMa = 1
    }  else if (document.getElementById("confuso_paciente_ma").checked) {
        RespostaVerbal = document.getElementById("confuso_paciente_ma").value;
        ValorRespostaVerbalMa = 2
    } else if (document.getElementById("palavras_inapropriadas_paciente_ma").checked) {
        RespostaVerbal = document.getElementById("palavras_inapropriadas_paciente_ma").value;
        ValorRespostaVerbalMa = 3
    } else if (document.getElementById("palavras_incompreensiveis_paciente_ma").checked) {
        RespostaVerbal = document.getElementById("palavras_incompreensiveis_paciente_ma").value;
        ValorRespostaVerbalMa = 4
    }else if (document.getElementById("nenhuma_paciente_ma_rv").checked) {
        RespostaVerbal = document.getElementById("nenhuma_paciente_ma_rv").value;
        ValorRespostaVerbalMa = 5
    }else {
        RespostaVerbal = document.getElementById("nenhuma_paciente_ma_rv").value;
        ValorRespostaVerbalMa = 5
    }

    console.log(RespostaVerbal)

    var ValorRespostaMotoraMa = "";
    if (document.getElementById("obedece_comandos_paciente_ma").checked) {
        RespostaMotora = document.getElementById("obedece_comandos_paciente_ma").value;
        ValorRespostaMotoraMa = 1
    } else if (document.getElementById("localiza_dor_paciente_ma").checked) {
        RespostaMotora = document.getElementById("localiza_dor_paciente_ma").value;
        ValorRespostaMotoraMa = 2
    }  else if (document.getElementById("movimento_retirada_paciente_ma").checked) {
        RespostaMotora = document.getElementById("movimento_retirada_paciente_ma").value;
        ValorRespostaMotoraMa = 3
    } else if (document.getElementById("flexao_anormal_paciente_ma").checked) {
        RespostaMotora = document.getElementById("flexao_anormal_paciente_ma").value;
        ValorRespostaMotoraMa = 4
    } else if (document.getElementById("extensao_anormal_paciente_ma").checked) {
        RespostaMotora = document.getElementById("extensao_anormal_paciente_ma").value;
        ValorRespostaMotoraMa = 5
    }else if (document.getElementById("nenhuma_paciente_ma_rm").checked) {
        RespostaMotora = document.getElementById("nenhuma_paciente_ma_rm").value;
        ValorRespostaMotoraMa = 6
    }else{
        RespostaMotora = document.getElementById("nenhuma_paciente_ma_rm").value;
        ValorRespostaMotoraMa = 6
    }
   
    console.log(RespostaMotora)

    //var SpanGCS = document.getElementById("total_gcs_paciente");
 ValorGCS = ValorRespostaMotoraMa + ValorAberturaOcularMa + ValorRespostaVerbalMa;
 SpanGCS = document.getElementById("total_gcs_paciente")
SpanGCS.textContent = " " + ValorGCS;

console.log(ValorGCS);
}

//var SpanGCS = document.getElementById("total_gcs_paciente");
var ValorGCS = ValorRespostaMotoraMa + ValorAberturaOcularMa + ValorRespostaVerbalMa;
var SpanGCS = document.getElementById("total_gcs_paciente")
SpanGCS.textContent = " " + ValorGCS;

function AvaliacaoPacienteMa(){
    console.clear();
    console.log("maior")
    console.log(AberturaOcular);
    console.log(RespostaVerbal);
    console.log(RespostaMotora);
    console.log(ValorGCS);

    $.ajax({
        url: 'PHP/tabela-avaliacao-paciente-maior.php',
        method: 'POST',
        data: {
            AberturaOcular: AberturaOcular,
            RespostaVerbal: RespostaVerbal,
            RespostaMotora: RespostaMotora,
            ValorGCS: ValorGCS,
            Paciente: CpfPaciente,
            Bombeiro: BombeiroAtual
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
}
function Espontanea(){/*Input type radio*/
    var ComandoVerbalPacienteMa = document.getElementById("comando_verbal_paciente_ma"); 
    ComandoVerbalPacienteMa.checked = false;

    var EstimuloDolorosoPacienteMa = document.getElementById("estimulo_doloroso_paciente_ma"); 
    EstimuloDolorosoPacienteMa.checked = false;

    var NenhumaAoPacienteMa = document.getElementById("nenhuma_paciente_ma_ao"); 
    NenhumaAoPacienteMa.checked = false;
}
function  ComandoVerbal(){
    var EspontaneaPacienteMa = document.getElementById("espontanea_paciente_ma"); 
    EspontaneaPacienteMa.checked = false;

    var EstimuloDolorosoPacienteMa = document.getElementById("estimulo_doloroso_paciente_ma"); 
    EstimuloDolorosoPacienteMa.checked = false;

    var NenhumaAoPacienteMa = document.getElementById("nenhuma_paciente_ma_ao"); 
    NenhumaAoPacienteMa.checked = false; 
}
function  EstimuloDoloroso(){
    var EspontaneaPacienteMa = document.getElementById("espontanea_paciente_ma"); 
    EspontaneaPacienteMa.checked = false;

    var ComandoVerbalPacienteMa = document.getElementById("comando_verbal_paciente_ma"); 
    ComandoVerbalPacienteMa.checked = false;

    var NenhumaAoPacienteMa = document.getElementById("nenhuma_paciente_ma_ao"); 
    NenhumaAoPacienteMa.checked = false; 
}
function  NenhumaAo(){
    var EspontaneaPacienteMa = document.getElementById("espontanea_paciente_ma"); 
    EspontaneaPacienteMa.checked = false;

    var ComandoVerbalPacienteMa = document.getElementById("comando_verbal_paciente_ma"); 
    ComandoVerbalPacienteMa.checked = false;

    var EstimuloDolorosoPacienteMa = document.getElementById("estimulo_doloroso_paciente_ma"); 
    EstimuloDolorosoPacienteMa.checked = false;

}
function Orientado() {/*Input type radio*/
   
        var ConfusoPacienteMa = document.getElementById("confuso_paciente_ma"); 
        ConfusoPacienteMa.checked = false;

        var PalavrasInapropriadasPacienteMa = document.getElementById("palavras_inapropriadas_paciente_ma"); 
        PalavrasInapropriadasPacienteMa.checked = false;

        var PalavrasIncompreensiveisPacienteMa = document.getElementById("palavras_incompreensiveis_paciente_ma"); 
        PalavrasIncompreensiveisPacienteMa.checked = false;

        var NenhumaRvPacienteMa = document.getElementById("nenhuma_paciente_ma_rv"); 
        NenhumaRvPacienteMa.checked = false;
    
}
function Confuso() {/*Input type radio*/
   
        var PalavrasInapropriadasPacienteMa = document.getElementById("palavras_inapropriadas_paciente_ma"); 
        PalavrasInapropriadasPacienteMa.checked = false;

        var PalavrasIncompreensiveisPacienteMa = document.getElementById("palavras_incompreensiveis_paciente_ma"); 
        PalavrasIncompreensiveisPacienteMa.checked = false;

        var OrientadoPacienteMa = document.getElementById("orientado_paciente_ma"); 
        OrientadoPacienteMa.checked = false;  

        var NenhumaRvPacienteMa = document.getElementById("nenhuma_paciente_ma_rv"); 
        NenhumaRvPacienteMa.checked = false;
}
function PalavrasInapropriadas() {/*Input type radio*/
   
        var ConfusoPacienteMa = document.getElementById("confuso_paciente_ma"); 
        ConfusoPacienteMa.checked = false;

        var PalavrasIncompreensiveisPacienteMa = document.getElementById("palavras_incompreensiveis_paciente_ma"); 
        PalavrasIncompreensiveisPacienteMa.checked = false;

        var OrientadoPacienteMa = document.getElementById("orientado_paciente_ma"); 
        OrientadoPacienteMa.checked = false;  

        var NenhumaRvPacienteMa = document.getElementById("nenhuma_paciente_ma_rv"); 
        NenhumaRvPacienteMa.checked = false;
}
function PalavrasIncompreensiveis() {/*Input type radio*/

    var ConfusoPacienteMa = document.getElementById("confuso_paciente_ma"); 
        ConfusoPacienteMa.checked = false;
   
    var PalavrasInapropriadasPacienteMa = document.getElementById("palavras_inapropriadas_paciente_ma"); 
    PalavrasInapropriadasPacienteMa.checked = false;
    

    var OrientadoPacienteMa = document.getElementById("orientado_paciente_ma"); 
     OrientadoPacienteMa.checked = false;  

    var NenhumaRvPacienteMa = document.getElementById("nenhuma_paciente_ma_rv"); 
    NenhumaRvPacienteMa.checked = false;
}
function NenhumaRv() {/*Input type radio*/
   
        var ConfusoPacienteMa = document.getElementById("confuso_paciente_ma"); 
        ConfusoPacienteMa.checked = false;

        var PalavrasInapropriadasPacienteMa = document.getElementById("palavras_inapropriadas_paciente_ma"); 
        PalavrasInapropriadasPacienteMa.checked = false;

        var PalavrasIncompreensiveisPacienteMa = document.getElementById("palavras_incompreensiveis_paciente_ma"); 
        PalavrasIncompreensiveisPacienteMa.checked = false;

        var OrientadoPacienteMa = document.getElementById("orientado_paciente_ma"); 
        OrientadoPacienteMa.checked = false;  

}
function ObedeceComandosMa() {/*Input type radio*/
    var LocalizaDorPacienteMa = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPacienteMa.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;
}
function LocalizaDorMa() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;
    
}
function MovimentoDeRetiradaMa() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;

    var LocalizaDorPacienteMa = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPacienteMa.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;
    
}
function FlexaoAnormalMa() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;

    var LocalizaDorPacienteMa = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPacienteMa.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;
}
function ExtensaoAnormalMa() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;

    var LocalizaDorPacienteMa = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPacienteMa.checked = false;

    var NenhumaRmPacienteMa = document.getElementById("nenhuma_paciente_ma_rm"); 
    NenhumaRmPacienteMa.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;
}
function NenhumaRmMa() {/*Input type radio*/
    var ObedeceComandosPaciente = document.getElementById("obedece_comandos_paciente_ma"); 
    ObedeceComandosPaciente.checked = false;

    var LocalizaDorPacienteMa = document.getElementById("localiza_dor_paciente_ma"); 
    LocalizaDorPacienteMa.checked = false;

    var MovimentoDeRetiradaPaciente = document.getElementById("movimento_retirada_paciente_ma"); 
    MovimentoDeRetiradaPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_ma"); 
    FlexaoAnormalPaciente.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_ma"); 
    ExtensaoAnormalPaciente.checked = false;
    
}
function RespostaVerbalMe() {/*Input type radio*/
    var PalavrasEFrasesInapropriadasPacienteMe = document.getElementById("palavras_e_frases_inapropriadas_paciente_me"); 
    PalavrasEFrasesInapropriadasPacienteMe.checked = false;
    
    var PalavrasInapropriadasacienteMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
    PalavrasInapropriadasacienteMe.checked = false;

    var ChoroPersistentesOuGritosPacienteMe = document.getElementById("choro_persistentes_ou_gritos_paciente_me"); 
    ChoroPersistentesOuGritosPacienteMe.checked = false;
    
    var SonsIncompreensíveisPacienteMe = document.getElementById("palavras_incompreensiveis_paciente_ma"); 
    SonsIncompreensíveisPacienteMe.checked = false;

    var NenhumaRvPacienteMe = document.getElementById("nenhuma_paciente_me_rv"); 
    NenhumaRvPacienteMe.checked = false;
}
function RespostaMotoraMa() {/*Input type radio*/
    var ObedeceComandosPacienteMe = document.getElementById("obedece_comando_paciente_me"); 
   ObedeceComandosPacienteMe.checked = false;
    
    var LocalizaDorEstimuloTatilPaciente = document.getElementById("localiza_dor_estimulo_tatil_paciente_me"); 
    LocalizaDorEstimuloTatilPaciente.checked = false;

    var RetiradaDoSegmentoEstimuladoPaciente = document.getElementById("retirada_do_segmento_estimulado_paciente"); 
    RetiradaDoSegmentoEstimuladoPaciente.checked = false;

    var FlexaoAnormalPaciente = document.getElementById("flexao_anormal_paciente_me"); 
    FlexaoAnormalPaciente.checked = false;

    var ExtensaoAnormalPaciente = document.getElementById("extensao_anormal_paciente_me"); 
    ExtensaoAnormalPaciente.checked = false;

    var AusenciaPacienteMa = document.getElementById("ausencia_paciente"); 
    AusenciaPacienteMa.checked = false;
}
/*Menor 5*/

var AberturaOcularMe = "Nenhuma";
var ValorAberturaOcularMe = 4;

var RespostaVerbalMe = "Nenhuma";
var ValorRespostaVerbalMe = 5;

var RespostaMotoraMe = "Ausência(Paralisia Falecida, Hipônia)";
var ValorRespostaMotoraMe = 6;

function AvaliacaoPacienteMeGCS() {/*Input type radio*/

console.clear();

if (document.getElementById("espontanea_paciente_me").checked) {
    AberturaOcularMe = document.getElementById("espontanea_paciente_me").value;
    ValorAberturaOcularMe = 1
}  else if (document.getElementById("comando_verbal_paciente_me").checked) {
    AberturaOcularMe = document.getElementById("comando_verbal_paciente_me").value;
    ValorAberturaOcularMe = 2
} else if (document.getElementById("estimulo_doloroso_paciente_me").checked) {
    AberturaOcularMe = document.getElementById("estimulo_doloroso_paciente_me").value;
    ValorAberturaOcularMe = 3
} else if (document.getElementById("nenhuma_paciente_me_ao").checked) {
    AberturaOcularMe = document.getElementById("nenhuma_paciente_me_ao").value;
    ValorAberturaOcularMe = 4
} else {
    AberturaOcularMe = document.getElementById("nenhuma_paciente_me_ao").value;
    ValorAberturaOcularMe = 4
}
console.log(AberturaOcularMe);

/*RespostaVerbal*/
if (document.getElementById("palavras_e_frases_inapropriadas_paciente_me").checked) {
    RespostaVerbalMe = document.getElementById("palavras_e_frases_inapropriadas_paciente_me").value;
    ValorRespostaVerbalMe = 1
}  else if (document.getElementById("palavras_inapropriadas_paciente_me").checked) {
    RespostaVerbalMe = document.getElementById("palavras_inapropriadas_paciente_me").value;
    ValorRespostaVerbalMe = 2
} else if (document.getElementById("choro_persistentes_ou_gritos_paciente_me").checked) {
    RespostaVerbalMe = document.getElementById("choro_persistentes_ou_gritos_paciente_me").value;
    ValorRespostaVerbalMe = 3
} else if (document.getElementById("sons_incompreensíveis_paciente_me").checked) {
    RespostaVerbalMe = document.getElementById("sons_incompreensíveis_paciente_me").value;
    ValorRespostaVerbalMe = 4
}else if (document.getElementById("nenhuma_paciente_me_rv").checked) {
    RespostaVerbalMe = document.getElementById("nenhuma_paciente_me_rv").value;
    ValorRespostaVerbalMe = 5
}  else{
    RespostaVerbalMe = document.getElementById("nenhuma_paciente_me_rv").value;
    ValorRespostaVerbalMe = 5
}
console.log(RespostaVerbalMe)

if (document.getElementById("obedece_comando_paciente_me").checked) {
    RespostaMotoraMe = document.getElementById("obedece_comando_paciente_me").value;
    ValorRespostaMotoraMe = 1
} else if (document.getElementById("localiza_dor_estimulo_tatil_paciente_me").checked) {
    RespostaMotoraMe = document.getElementById("localiza_dor_estimulo_tatil_paciente_me").value;
    ValorRespostaMotoraMe = 2
}  else if (document.getElementById("retirada_do_segmento_estimulado_paciente").checked) {
    RespostaMotoraMe = document.getElementById("retirada_do_segmento_estimulado_paciente").value;
    ValorRespostaMotoraMe = 3
} else if (document.getElementById("flexao_anormal_paciente_me").checked) {
    RespostaMotoraMe = document.getElementById("flexao_anormal_paciente_me").value;
    ValorRespostaMotoraMe = 4
} else if (document.getElementById("extensao_anormal_paciente_me").checked) {
    RespostaMotoraMe = document.getElementById("extensao_anormal_paciente_me").value;
    ValorRespostaMotoraMe = 5
}else if (document.getElementById("ausencia_paciente").checked) {
    RespostaMotoraMe = document.getElementById("ausencia_paciente").value;
    ValorRespostaMotoraMe = 6
} else{
    RespostaMotoraMe = document.getElementById("ausencia_paciente").value;
    ValorRespostaMotoraMe = 6
}
console.log(RespostaMotoraMe)

 SpanGCSMe = document.getElementById("total_gcs_paciente");
 ValorGCSMe = ValorRespostaMotoraMe + ValorAberturaOcularMe + ValorRespostaVerbalMe;
SpanGCSMe.textContent = ValorGCSMe;

console.log(ValorGCSMe);
}

var SpanGCSMe = document.getElementById("total_gcs_paciente");
var ValorGCSMe = ValorRespostaMotoraMe + ValorAberturaOcularMe + ValorRespostaVerbalMe;
SpanGCSMe.textContent = ValorGCSMe;

function AvaliacaoPacienteMe(){
    console.clear();
    console.log("menor")
    console.log(AberturaOcularMe);
    console.log(RespostaVerbalMe);
    console.log(RespostaMotoraMe);
    console.log(ValorGCSMe)

$.ajax({
    url: 'PHP/tabela-avaliacao-paciente-menor.php',
    method: 'POST',
    data: {
        AberturaOcular: AberturaOcularMe,
        RespostaVerbal: RespostaVerbalMe,
        RespostaMotora: RespostaMotoraMe,
        ValorGCS: ValorGCSMe,
        Bombeiro: BombeiroAtual,
        Paciente: CpfPaciente
    },
    dataType: 'json'
}).done(function() {
    alert("alguma coisa deu!!");
});
}
/*Abertura Ocular*/
function EspontaneaMe(){/*Input type radio*/
        var ComandoVerbalPacienteMe = document.getElementById("comando_verbal_paciente_me"); 
        ComandoVerbalPacienteMe.checked = false;

        var EstimuloDolorosoPacienteMe = document.getElementById("estimulo_doloroso_paciente_me"); 
        EstimuloDolorosoPacienteMe.checked = false;

        var NenhumaAoPacienteMe = document.getElementById("nenhuma_paciente_me_ao"); 
        NenhumaAoPacienteMe.checked = false;
    
}
function ComandoVerbalMe(){/*Input type radio*/
     var EspontaneaPacienteMe = document.getElementById("espontanea_paciente_me"); 
    EspontaneaPacienteMe.checked = false;
    

    var EstimuloDolorosoPacienteMe = document.getElementById("estimulo_doloroso_paciente_me"); 
    EstimuloDolorosoPacienteMe.checked = false;

    var NenhumaAoPacienteMe = document.getElementById("nenhuma_paciente_me_ao"); 
    NenhumaAoPacienteMe.checked = false;
}
function EstimuloDolorosoMe(){/*Input type radio*/
     var EspontaneaPacienteMe = document.getElementById("espontanea_paciente_me"); 
    EspontaneaPacienteMe.checked = false;
    
    var ComandoVerbalPacienteMe = document.getElementById("comando_verbal_paciente_me"); 
    ComandoVerbalPacienteMe.checked = false;

    var NenhumaAoPacienteMe = document.getElementById("nenhuma_paciente_me_ao"); 
    NenhumaAoPacienteMe.checked = false;
}
function NenhumaAoMe(){/*Input type radio*/
     var EspontaneaPacienteMe = document.getElementById("espontanea_paciente_me"); 
    EspontaneaPacienteMe.checked = false;
    
    var ComandoVerbalPacienteMe = document.getElementById("comando_verbal_paciente_me"); 
    ComandoVerbalPacienteMe.checked = false;

    var EstimuloDolorosoPacienteMe = document.getElementById("estimulo_doloroso_paciente_me"); 
    EstimuloDolorosoPacienteMe.checked = false;
}
/*Resposta Verbal*/
function PalavrasEFrasesInapropriadasMe(){

    var ChoroPersistentesOuGritosMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
    ChoroPersistentesOuGritosMe.checked = false;

    var EstimuloDolorosoPacienteMe = document.getElementById("choro_persistentes_ou_gritos_paciente_me"); 
    EstimuloDolorosoPacienteMe.checked = false;

    var SonsIncompreensiveisMe = document.getElementById("sons_incompreensíveis_paciente_me"); 
    SonsIncompreensiveisMe.checked = false;

    var NenhumaRvMe = document.getElementById("nenhuma_paciente_me_rv"); 
    NenhumaRvMe.checked = false;
}
function PalavrasInapropriadasMe(){
     
    var PalavrasEFrasesInapropriadasMe = document.getElementById("palavras_e_frases_inapropriadas_paciente_me"); 
    PalavrasEFrasesInapropriadasMe.checked = false; 

    var ChoroPersistentesOuGritosMe = document.getElementById("choro_persistentes_ou_gritos_paciente_me"); 
    ChoroPersistentesOuGritosMe.checked = false;

    var SonsIncompreensiveisMe = document.getElementById("sons_incompreensíveis_paciente_me"); 
    SonsIncompreensiveisMe.checked = false;

    var NenhumaRvMe = document.getElementById("nenhuma_paciente_me_rv"); 
    NenhumaRvMe.checked = false;
}
function ChoroPersistentesOuGritosMe(){
     var PalavrasEFrasesInapropriadasMe = document.getElementById("palavras_e_frases_inapropriadas_paciente_me"); 
    PalavrasEFrasesInapropriadasMe.checked = false;
    
    var PalavrasInapropriadasMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
    PalavrasInapropriadasMe.checked = false;

    var SonsIncompreensiveisMe = document.getElementById("sons_incompreensíveis_paciente_me"); 
    SonsIncompreensiveisMe.checked = false;

    var NenhumaRvMe = document.getElementById("nenhuma_paciente_me_rv"); 
    NenhumaRvMe.checked = false;
}
function SonsIncompreensiveisMe(){
    var PalavrasEFrasesInapropriadasMe = document.getElementById("palavras_e_frases_inapropriadas_paciente_me"); 
    PalavrasEFrasesInapropriadasMe.checked = false;
    
    var PalavrasInapropriadasMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
    PalavrasInapropriadasMe.checked = false;

    var ChoroPersistentesOuGritosMe = document.getElementById("choro_persistentes_ou_gritos_paciente_me"); 
    ChoroPersistentesOuGritosMe.checked = false;

    var NenhumaRvMe = document.getElementById("nenhuma_paciente_me_rv"); 
    NenhumaRvMe.checked = false;
}
function NenhumaRvMe(){
    var PalavrasEFrasesInapropriadasMe = document.getElementById("palavras_e_frases_inapropriadas_paciente_me"); 
    PalavrasEFrasesInapropriadasMe.checked = false;
    
    var PalavrasInapropriadasMe = document.getElementById("palavras_inapropriadas_paciente_me"); 
    PalavrasInapropriadasMe.checked = false;

    var ChoroPersistentesOuGritosMe = document.getElementById("choro_persistentes_ou_gritos_paciente_me"); 
    ChoroPersistentesOuGritosMe.checked = false;

    var SonsIncompreensiveisMe = document.getElementById("sons_incompreensíveis_paciente_me"); 
    SonsIncompreensiveisMe.checked = false;

}
/*Resposta Motora*/
function ObedeceComandosMe(){
     
    var LocalizaDorEstimuloTatilMe = document.getElementById("localiza_dor_estimulo_tatil_paciente_me"); 
    LocalizaDorEstimuloTatilMe.checked = false;
 
     var RetiradaDoSegmentoEstimuladoMe = document.getElementById("retirada_do_segmento_estimulado_paciente"); 
     RetiradaDoSegmentoEstimuladoMe.checked = false;
 
     var FlexaoAnormal = document.getElementById("flexao_anormal_paciente_me"); 
     FlexaoAnormal.checked = false;
 
     var ExtensaoAnormal = document.getElementById("extensao_anormal_paciente_me"); 
     ExtensaoAnormal.checked = false;
 
     var AusenciaMe = document.getElementById("ausencia_paciente"); 
     AusenciaMe.checked = false;
}
function LocalizaDorEstimuloTatilMe(){
     
    var ObedeceComandosMe = document.getElementById("obedece_comando_paciente_me"); 
    ObedeceComandosMe.checked = false;


    var RetiradaDoSegmentoEstimuladoMe = document.getElementById("retirada_do_segmento_estimulado_paciente"); 
    RetiradaDoSegmentoEstimuladoMe.checked = false;

    var FlexaoAnormal = document.getElementById("flexao_anormal_paciente_me"); 
    FlexaoAnormal.checked = false;

    var ExtensaoAnormal = document.getElementById("extensao_anormal_paciente_me"); 
    ExtensaoAnormal.checked = false;

    var AusenciaMe = document.getElementById("ausencia_paciente"); 
    AusenciaMe.checked = false;
}
function RetiradaDoSegmentoEstimuladoMe(){
    var ObedeceComandosMe = document.getElementById("obedece_comando_paciente_me"); 
    ObedeceComandosMe.checked = false;

    var LocalizaDorEstimuloTatilMe = document.getElementById("localiza_dor_estimulo_tatil_paciente_me"); 
    LocalizaDorEstimuloTatilMe.checked = false;

    var FlexaoAnormal = document.getElementById("flexao_anormal_paciente_me"); 
    FlexaoAnormal.checked = false;

    var ExtensaoAnormal = document.getElementById("extensao_anormal_paciente_me"); 
    ExtensaoAnormal.checked = false;

    var AusenciaMe = document.getElementById("ausencia_paciente"); 
    AusenciaMe.checked = false;
}
function FlexaoAnormal(){
    var ObedeceComandosMe = document.getElementById("obedece_comando_paciente_me"); 
    ObedeceComandosMe.checked = false;

    var LocalizaDorEstimuloTatilMe = document.getElementById("localiza_dor_estimulo_tatil_paciente_me"); 
    LocalizaDorEstimuloTatilMe.checked = false;

    var RetiradaDoSegmentoEstimuladoMe = document.getElementById("retirada_do_segmento_estimulado_paciente"); 
    RetiradaDoSegmentoEstimuladoMe.checked = false;


    var ExtensaoAnormal = document.getElementById("extensao_anormal_paciente_me"); 
    ExtensaoAnormal.checked = false;

    var AusenciaMe = document.getElementById("ausencia_paciente"); 
    AusenciaMe.checked = false;
}
function ExtensaoAnormal(){
    var ObedeceComandosMe = document.getElementById("obedece_comando_paciente_me"); 
    ObedeceComandosMe.checked = false;

    var LocalizaDorEstimuloTatilMe = document.getElementById("localiza_dor_estimulo_tatil_paciente_me"); 
    LocalizaDorEstimuloTatilMe.checked = false;

    var RetiradaDoSegmentoEstimuladoMe = document.getElementById("retirada_do_segmento_estimulado_paciente"); 
    RetiradaDoSegmentoEstimuladoMe.checked = false;

    var FlexaoAnormal = document.getElementById("flexao_anormal_paciente_me"); 
    FlexaoAnormal.checked = false;

    var AusenciaMe = document.getElementById("ausencia_paciente"); 
    AusenciaMe.checked = false;

}
function AusenciaMe(){
    var ObedeceComandosMe = document.getElementById("obedece_comando_paciente_me"); 
    ObedeceComandosMe.checked = false;

    var LocalizaDorEstimuloTatilMe = document.getElementById("localiza_dor_estimulo_tatil_paciente_me"); 
    LocalizaDorEstimuloTatilMe.checked = false;

    var RetiradaDoSegmentoEstimuladoMe = document.getElementById("retirada_do_segmento_estimulado_paciente"); 
    RetiradaDoSegmentoEstimuladoMe.checked = false;

    var FlexaoAnormal = document.getElementById("flexao_anormal_paciente_me"); 
    FlexaoAnormal.checked = false;

    var ExtensaoAnormal = document.getElementById("extensao_anormal_paciente_me"); 
    ExtensaoAnormal.checked = false;

}
function ocultarDivMe() {
    var maiorque5paciente = document.getElementById("maiorque5paciente");
    var menorque5paciente = document.getElementById("menorque5paciente");
    var ocultardivma = document.getElementById("ocultar_div_ma");
    var ocultardivme = document.getElementById("ocultar_div_me");
    var conteudoGCSspan = document.getElementById("total_gcs_paciente");
    /*Trocar a tela a ser exibida*/
    menorque5paciente.style.display = "none";
    maiorque5paciente.style.display = "flex";
    /*Alterar a cor do botão selecionado*/
    ocultardivme.style.backgroundColor = "#0667E8";
    ocultardivme.style.color = "white";
    /*Alterar a cor do botão não selecionado*/
    ocultardivma.style.backgroundColor = "white";
    ocultardivma.style.color = "black";
    /*Desselecionar os radios do menor*/
    espontanea_paciente_me.checked = false;
    comando_verbal_paciente_me.checked = false;
    estimulo_doloroso_paciente_me.checked = false;
    nenhuma_paciente_me_ao.checked = false;
    palavras_e_frases_inapropriadas_paciente_me.checked = false;
    palavras_inapropriadas_paciente_me.checked = false;
    choro_persistentes_ou_gritos_paciente_me.checked = false;
    sons_incompreensíveis_paciente_me.checked = false;
    nenhuma_paciente_me_rv.checked = false;
    obedece_comando_paciente_me.checked = false;
    localiza_dor_estimulo_tatil_paciente_me.checked = false;
    retirada_do_segmento_estimulado_paciente.checked = false;
    flexao_anormal_paciente_me.checked = false;
    extensao_anormal_paciente_me.checked = false;
    ausencia_paciente.checked = false;
    /*Limpar Span Total GCS*/
    conteudoGCSspan.textContent = 0


}
function ocultarDivMa() {
    var maiorque5paciente = document.getElementById("maiorque5paciente");
    var menorque5paciente = document.getElementById("menorque5paciente");
    var ocultardivma = document.getElementById("ocultar_div_ma");
    var ocultardivme = document.getElementById("ocultar_div_me");
    var conteudoGCSspan = document.getElementById("total_gcs_paciente");
    /*Trocar a tela a ser exibida*/
    menorque5paciente.style.display = "flex";
    maiorque5paciente.style.display = "none";
    /*Alterar a cor do botão selecionado*/
    ocultardivme.style.backgroundColor = "white";
    ocultardivme.style.color = "black";
    /*Alterar a cor do botão não selecionado*/
    ocultardivma.style.backgroundColor = "#0667E8";
    ocultardivma.style.color = "white";
    /*Desselecionar os radios do menor*/
    espontanea_paciente_ma.checked = false;
    comando_verbal_paciente_ma.checked = false;
    estimulo_doloroso_paciente_ma.checked = false;
    nenhuma_paciente_ma_ao.checked = false;
    orientado_paciente_ma.checked = false;
    confuso_paciente_ma.checked = false;
    palavras_inapropriadas_paciente_ma.checked = false;
    palavras_incompreensiveis_paciente_ma.checked = false;
    nenhuma_paciente_ma_rv.checked = false;
    obedece_comandos_paciente_ma.checked = false;
    localiza_dor_paciente_ma.checked = false;
    movimento_retirada_paciente_ma.checked = false;
    flexao_anormal_paciente_ma.checked = false;
    extensao_anormal_paciente_ma.checked = false;
    nenhuma_paciente_ma_rm.checked = false;
    conteudoGCSspan.textContent = 0
} 

function ChooseAvaPaciente(){
    var ocultardivme = document.getElementById("ocultar_div_me");
    if(ocultardivme.style.backgroundColor === "rgb(6, 103, 232)"){
        AvaliacaoPacienteMa();
    }else{
        AvaliacaoPacienteMe();
    }
}

var DecisaoDeTransporteDt = ""
function DecisaoDeTransporte(){
    var MDT = $('#m_dt').val(); if(MDT === ""){MDT = "nda"}
    var S1DT = $('#s1_dt').val(); if(S1DT === ""){S1DT = "nda"}
    var S2DT = $('#s2_dt').val(); if(S2DT === ""){S2DT = "nda"}
    var S3DT = $('#s3_dr').val(); if(S3DT === ""){S3DT = "nda"}
    var DemanteDT = $('#demante_dt').val(); if(DemanteDT === ""){DemanteDT = "nda"}
    
     DecisaoDeTransporteDt = "";/*Input type radio*/
    if (document.getElementById("critico_dt").checked) {
        DecisaoDeTransporteDt = document.getElementById("critico_dt").value;
    }  else if (document.getElementById("instavel_dt").checked) {
        DecisaoDeTransporteDt = document.getElementById("instavel_dt").value;
    } else if (document.getElementById("estavel_dt").checked) {
        DecisaoDeTransporteDt = document.getElementById("estavel_dt").value;
    } else if (document.getElementById("potencial_mente_instavel_dt").checked) {
        DecisaoDeTransporteDt = document.getElementById("potencial_mente_instavel_dt").value;
    }else{DecisaoDeTransporteDt = "nda"}

    console.log(DecisaoDeTransporteDt)
    console.log(MDT);
    console.log(S1DT);
    console.log(S2DT);
    console.log(S3DT);
    console.log(DemanteDT);

     $.ajax({
        url: 'PHP/tabela-decisao-de-transporte.php',
        method: 'POST',
        data: {
            DecisaoDeTransporteDt: DecisaoDeTransporteDt,
            MDT: MDT,
            S1DT: S1DT,
            S2DT: S2DT,
            S3DT: S3DT,
            DemanteDT: DemanteDT,
            Paciente: CpfPaciente,
            Bombeiro: BombeiroAtual
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    

}   
var Maior2SegSv = "";
function SinaisVitais(){

    var Psa1 = $('#pressao_arterial_sv').val();
    if (Psa1 === "") {
        Psa1 = "0";
    }
    var Psa2 = $('#mmhg_sv').val();
    if (Psa2 === "") {
        Psa2 = "0";
    }
    var PressaoArterial = Psa1 + " x " + Psa2 + " mmhg";

    var Pulso = $('#pulso_sv').val(); if(Pulso === ""){Pulso = "0"}
    var Respiracao = $('#respiracao_sv').val(); if(Respiracao === ""){Respiracao = "0"}
    var Temperatura = $('#temperatura_sv').val(); if(Temperatura === ""){Temperatura = "0"}

    var AnormalCheckbox = document.getElementById("anormal_sv");/*Input type Checkbox*/
    var AnormalCheck = AnormalCheckbox.checked;
    if (AnormalCheck) {
        var Anormal = 's';
    } else {
        var Anormal = 'n';
    }

       Maior2SegSv = "";/*Input type radio*/
    if (document.getElementById("menor_2_seg_sv").checked) {
        Maior2SegSv  = document.getElementById("menor_2_seg_sv").value;
    } else if (document.getElementById("normal_sv").checked) {
        Maior2SegSv  = document.getElementById("normal_sv").value;
    } else if (document.getElementById("maior_2_seg_sv").checked) {
        Maior2SegSv  = document.getElementById("maior_2_seg_sv").value;
    } else{Maior2SegSv = "Normal"}

    console.log(PressaoArterial)
    console.log(Pulso)
    console.log(Maior2SegSv)
    console.log(Respiracao)
    console.log(Temperatura)
    console.log(Anormal)
    console.log(Maior2SegSv)
    
$.ajax({
    url: 'PHP/tabela-sinais-vitais.php',
    method: 'POST',
    data: {
        PressaoArterial: PressaoArterial,
        Pulso: Pulso,
        SegSv: Maior2SegSv,
        Respiracao: Respiracao,
        Temperatura: Temperatura,
        Anormal: Anormal,
        Bombeiro: BombeiroAtual,
        Paciente: CpfPaciente
    },
    dataType: 'json'
}).done(function() {
    alert("alguma coisa deu!!");
});

}
function Anamnese(){
    console.clear()
    /*Cute log*/
    console.log("Estou funcionando!! ~senpai.. (>//<");
    /*Cute log*/

    var OaAnamnese = $('#oa_anamnese').val();if(OaAnamnese === ""){OaAnamnese = "nda"};

    var AvAnamnese = "";/*Input type radio*/
    if (document.getElementById("s_av").checked) {
        AvAnamnese  = "sim";
    } else if (document.getElementById("n_av").checked) {
        AvAnamnese  = "não";
    }else(AvAnamnese = "nda")

    var AcAnamnese = $('#ac_anamnese').val();if(AcAnamnese === ""){AcAnamnese = "nda"};

    var PsAnamnese = "";/*Input type radio*/
    var QsAnamnese = "";
    if (document.getElementById("s_ps").checked) {
        QsAnamnese = $('#qs_anamnese').val();if(QsAnamnese === ""){QsAnamnese = "nda"};;
    } else if (document.getElementById("n_ps").checked) {
        QsAnamnese = "nda";
    }else{PsAnamnese = "nda"; QsAnamnese = "nda"}

    var HuAnamnese = ""
    var QisAnamnese = ""
    var FmAnamnese = ""
    if (document.getElementById("s_fm").checked) {
        HuAnamnese = $('#hu_anamnese').val();if(HuAnamnese === ""){HuAnamnese = "nda"};
        QisAnamnese = $('#qis_anamnese').val();if(QisAnamnese === ""){QisAnamnese = "nda"};
        FmAnamnese = QisAnamnese + "(" + HuAnamnese + ")";
    } else if (document.getElementById("n_fm").checked) {
        HuAnamnese = "nda"
        QisAnamnese = "nda"
        FmAnamnese = "nda"
    }else{
        HuAnamnese = "nda";
        QisAnamnese = "nda";
        FmAnamnese = "nda"
    }

    var EqAnamnese = ""
    if (document.getElementById("s_al").checked) {
        EqAnamnese = $('#eq_anamnese').val();if(EqAnamnese === ""){EqAnamnese = "nda"};
    } else if (document.getElementById("n_al").checked) {
        EqAnamnese = "nda"
    }else{AlAnamnese = "nda"; EqAnamnese = "nda"}

    var IlAnamnese = "";/*Input type radio*/
    var QrAnamnese = "";
    if (document.getElementById("s_il").checked) {
        QrAnamnese = $('#qr_anamnese').val();if(QrAnamnese === ""){QrAnamnese = "nda"};
    } else if (document.getElementById("n_il").checked) {
        QrAnamnese = "nda"
    }else{IlAnamnese = "nda"; QrAnamnese = "nda"}

    console.log(OaAnamnese)
    console.log(AvAnamnese)
    console.log(AcAnamnese)
    console.log(QsAnamnese)
    console.log(FmAnamnese)
    console.log(EqAnamnese)
    console.log(QrAnamnese)
    
    
 $.ajax({
        url: 'PHP/tabela-anamnese.php',
        method: 'POST',
        data: {
           Ocorrido: OaAnamnese,
           Ocorrencia: AvAnamnese,
           Aconteceu: AcAnamnese,
           ProblemaSaude: QsAnamnese,
           Medicamento: FmAnamnese,
           Alergia: EqAnamnese,
           Liquido: QrAnamnese,
           Bombeiro: BombeiroAtual,
           Paciente: CpfPaciente
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    
}

var PAPDSQuais = document.getElementById("anamnese_quais_ps");
var PAPDSSim = document.getElementById("s_ps");
var PAPDSNao = document.getElementById("n_ps");

function PAPDSQuaisRadio(){ /*Input type DIV NONE*/

    
    if(PAPDSSim.checked){
        PAPDSQuais.style.display = "flex";
    }else if(PAPDSNao.checked){
        PAPDSQuais.style.display = "none";
    };
}

var FUDM = document.getElementById("anamnese_hm_fm");
var FUDMSim = document.getElementById("s_fm");
var FUDMNao = document.getElementById("n_fm");

function FUDMRadio(){ /*Input type DIV NONE*/

    
    if(FUDMSim.checked){
        FUDM.style.display = "flex";
    }else if(FUDMNao.checked){
        FUDM.style.display = "none";
    };
}
var LaL = document.getElementById("anamnese_ee_aa");
var LaLSim = document.getElementById("s_al");
var LaLNao = document.getElementById("n_al");

function LaLRadio(){ /*Input type DIV NONE*/

    
    if(LaLSim.checked){
       LaL.style.display = "flex";
    }else if(LaLNao.checked){
       LaL.style.display = "none";
    };
}
var IAOLEHQueHoras = document.getElementById("anamnese_qh_il");
var IAOLEHQueHorasSim = document.getElementById("s_il");
var IAOLEHQueHorasNao = document.getElementById("n_il");

function IAOLEH(){ /*Input type DIV NONE*/

    
    if(IAOLEHQueHorasSim.checked){
        IAOLEHQueHoras.style.display = "flex";
    }else if(IAOLEHQueHorasNao.checked){
        IAOLEHQueHoras.style.display = "none";
    };
}


function AnamneseGestacional(){
    console.clear()
    /*Cute log*/
    console.log("Estou funcionando!! ~senpai.. (>//<");
    /*Cute log*/
    var PeriodoDeGestacao = $('#pg_anamnese_gestacional').val();if(PeriodoDeGestacao === ""){PeriodoDeGestacao = "nda"}
    var NomeDoMedico = $('#nm_anamnese_gestacional').val();if(NomeDoMedico === ""){NomeDoMedico = "nda"}
    var Duracao = $('#tc_anamnese_gestacional').val();if(Duracao === ""){Duracao = "nda"}
    var Intervalo = $('#io_anamnese_gestacional').val();if(Intervalo === ""){Intervalo = "nda"}
    var HoraDoNascimento = $('#hn_anamnese_gestacional').val();if(HoraDoNascimento === ""){HoraDoNascimento = "nda"}
    var NomeDoBebe = $('#nb_anamnese_gestacional').val();if(NomeDoBebe === ""){NomeDoBebe = "nda"}

    

    var FpAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_fp").checked) {
        FpAnamneseGestacional  = document.getElementById("s_fp").value;
    } else if (document.getElementById("n_fp").checked) {
        FpAnamneseGestacional  = document.getElementById("n_fp").value;
    }else{FpAnamneseGestacional = "nda"}

    var EcAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_ec").checked) {
        EcAnamneseGestacional  = document.getElementById("s_ec").value;
    } else if (document.getElementById("n_ec").checked) {
       EcAnamneseGestacional  = document.getElementById("n_ec").value;
    }else{EcAnamneseGestacional = "nda"}

    var QtdFilhos = "";
    var EfAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_ef").checked) {
       EfAnamneseGestacional = "Primeiro filhos";
    } else if (document.getElementById("n_ef").checked) {
        QtdFilhos = $('#qs_anamnese_gestacional').val();if(QtdFilhos === ""){QtdFilhos = "1+"}
        EfAnamneseGestacional = QtdFilhos
    }else{EfAnamneseGestacional = "nda"}

    var SqAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_sq").checked) {
        SqAnamneseGestacional  = document.getElementById("s_sq").value;
    } else if (document.getElementById("n_sq").checked) {
        SqAnamneseGestacional  = document.getElementById("n_sq").value;
    }else{SqAnamneseGestacional = "nda"}

    var JbAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_jb").checked) {
        JbAnamneseGestacional  = document.getElementById("s_jb").value;
    } else if (document.getElementById("n_jb").checked) {
        JbAnamneseGestacional  = document.getElementById("n_jb").value;
    }else{JbAnamneseGestacional = "nda"}

    var FvAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_fv").checked) {
        FvAnamneseGestacional  = document.getElementById("s_fv").value;
    } else if (document.getElementById("n_fv").checked) {
        FvAnamneseGestacional  = document.getElementById("n_fv").value;
    }else{FvAnamneseGestacional = "nda"}

    var PrAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("s_pr").checked) {
        PrAnamneseGestacional  = document.getElementById("s_pr").value;
    } else if (document.getElementById("n_pr").checked) {
        PrAnamneseGestacional  = document.getElementById("n_pr").value;
    }else{PrAnamneseGestacional = "nda"}

    var SexoAnamneseGestacional = "";/*Input type radio*/
    if (document.getElementById("fem").checked) {
        SexoAnamneseGestacional  = document.getElementById("fem").value;
    } else if (document.getElementById("mas").checked) {
        SexoAnamneseGestacional  = document.getElementById("mas").value;
    }else{SexoAnamneseGestacional = "nda"}
    
    console.log(PeriodoDeGestacao)//Periodo gestação
    console.log(FpAnamneseGestacional)//pré natal
    console.log(NomeDoMedico)//nome do medico
    console.log(EcAnamneseGestacional)//possibilidade complicações
    console.log(EfAnamneseGestacional)//primeiro filho
    console.log(Duracao)//duracao
    console.log(Intervalo)//intervalo
    console.log(SqAnamneseGestacional)//vontade evacuar
    console.log(JbAnamneseGestacional)//Ruptura da bolsa
    console.log(FvAnamneseGestacional)//inspeção visual
    console.log(PrAnamneseGestacional)//parto realizado
    console.log(HoraDoNascimento)//hora nascimento
    console.log(SexoAnamneseGestacional)//sexo bebe
    console.log(NomeDoBebe)//nome bebe

 $.ajax({
        url: 'PHP/tabela-Anamnese-gestacional.php',
        method: 'POST',
        data: {
           PeriodoGestacao: PeriodoDeGestacao,
           PreNatal: FpAnamneseGestacional,
           NomeMedico: NomeDoMedico,
           Complicacoes: EcAnamneseGestacional,
           Filhos: EfAnamneseGestacional,
           ContracaoDuracao: Duracao,
           ContracaoIntervalo: Intervalo,
           Evacuacao: SqAnamneseGestacional,
           RupturaBolsa: JbAnamneseGestacional,
           InspecaoVisual: FvAnamneseGestacional,
           PartoRealizado: PrAnamneseGestacional,
           HoraNascimento: HoraDoNascimento,
           SexoBebe: SexoAnamneseGestacional,
           NomeBebe: NomeDoBebe,
           Bombeiro: BombeiroAtual,
           Paciente: CpfPaciente
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    
}
var EOPF = document.getElementById("ef_anamnese_gestacional");
var EOPFSim = document.getElementById("s_ef");
var EOPFNao = document.getElementById("n_ef");

function EOPFRadio(){ /*Input type DIV NONE*/

    if(EOPFSim.checked){
        EOPF.style.display = "none"
    }else if(EOPFNao.checked){
        EOPF.style.display = "flex"
    }

}//n tem notificaiton abaixo
function SinaisESintomas(){
   

    var AbdomenCheckbox = document.getElementById("sinais_e_sintomas_abdomen_sensivel_ou_rigido");/*Input type Checkbox*/
    var AbdomenChecked = AbdomenCheckbox.checked;
    if (AbdomenChecked) {
        var Abdomen = 'Abdomen';
    } else {
        var Abdomen = 'n';
    }
    var AfundamentoCheckbox = document.getElementById("sinais_e_sintomas_afundamento_cranio");/*Input type Checkbox*/
    var AfundamentoChecked = AfundamentoCheckbox.checked;
    if (AfundamentoChecked) {
        var Afundamento = 'Afundamento';
    } else {
        var Afundamento = 'n';
    }
    var AgitacaoCheckbox = document.getElementById("sinais_e_sintomas_agitacao");/*Input type Checkbox*/
    var AgitacaoChecked = AgitacaoCheckbox.checked;
    if (AgitacaoChecked) {
        var Agitacao = 'Agitacão';
    } else {
        var Agitacao = 'n';
    }
    var AminesiaCheckbox = document.getElementById("sinais_e_sintomas_aminesia");/*Input type Checkbox*/
    var AminesiaChecked = AminesiaCheckbox.checked;
    if (AminesiaChecked) {
        var Aminesia = 'Aminésia';
    } else {
        var Aminesia = 'n';
    }
    var ApineiaCheckbox = document.getElementById("sinais_e_sintomas_apineia");/*Input type Checkbox*/
    var ApineiaChecked = ApineiaCheckbox.checked;
    if (ApineiaChecked) {
        var Apineia = 'Apinéia';
    } else {
        var Apineia = 'n';
    }
    var BradicardiaCheckbox = document.getElementById("sinais_e_sintomas_bradicardia");/*Input type Checkbox*/
    var BradicardiaChecked = BradicardiaCheckbox.checked;
    if (BradicardiaChecked) {
        var Bradicardia = 'Bradicardia';
    } else {
        var Bradicardia = 'n';
    }
    var BradipneiaCheckbox = document.getElementById("sinais_e_sintomas_bradipneia");/*Input type Checkbox*/
    var BradipneiaChecked = BradipneiaCheckbox.checked;
    if (BradipneiaChecked) {
        var Bradipneia = 'Bradipnéia';
    } else {
        var Bradipneia = 'n';
    }
    var BroncoAspirandoCheckbox = document.getElementById("sinais_e_sintomas_bronco_aspirando");/*Input type Checkbox*/
    var BroncoAspirandoChecked = BroncoAspirandoCheckbox.checked;
    if (BroncoAspirandoChecked) {
        var BroncoAspirando = 'Bronco-Aspirando';
    } else {
        var BroncoAspirando = 'n';
    }
    var CefaliaCheckbox = document.getElementById("sinais_e_sintomas_cefaleia");/*Input type Checkbox*/
    var CefaliaChecked = CefaliaCheckbox.checked;
    if (CefaliaChecked) {
        var Cefaleia = 'Cefaleia';
    } else {
        var Cefaleia = 'n';
    }
    var ConvulsaoCheckbox = document.getElementById("sinais_e_sintomas_convulsao");/*Input type Checkbox*/
    var ConvulsaoChecked = ConvulsaoCheckbox.checked;
    if (ConvulsaoChecked) {
        var Convulsao = 'Convulsão';
    } else {
        var Convulsao = 'n';
    }

    var DecorticacaoCheckbox = document.getElementById("sinais_e_sintomas_decorticacao");/*Input type Checkbox*/
    var DecorticacaoChecked = DecorticacaoCheckbox.checked;
    if (DecorticacaoChecked) {
        var Decorticacao = 'Decorticação';
    } else {
        var Decorticacao = 'n';
    }

    var DeformidadeCheckbox = document.getElementById("sinais_e_sintomas_deformidade");/*Input type Checkbox*/
    var DeformidadeChecked = DeformidadeCheckbox.checked;
    if (DeformidadeChecked) {
        var Deformidade = 'Deformidade';
    } else {
        var Deformidade = 'n'; 
    }
    
    var DescerebracaoCheckbox = document.getElementById("sinais_e_sintomas_descerebracao");/*Input type Checkbox*/
    var DescerebracaoChecked = DescerebracaoCheckbox.checked;
    if (DescerebracaoChecked) {
        var Descerebracao = 'Decorticação';
    } else {
        var Descerebracao = 'n'; 
    }

    
    var DesmaioCheckbox = document.getElementById("sinais_e_sintomas_desmaio");/*Input type Checkbox*/
    var DesmaioChecked = DesmaioCheckbox.checked;
    if (DesmaioChecked) {
        var Desmaio = 'Desmaio';
    } else {
        var Desmaio = 'n';
    }
    var TraqueiaCheckbox = document.getElementById("sinais_e_sintomas_desvio_de_traqueia");/*Input type Checkbox*/
    var TraqueiaChecked = TraqueiaCheckbox.checked;
    if (TraqueiaChecked) {
        var Traqueia = 'Desvio de Traquéia';
    } else {
        var Traqueia = 'n';
    }
    var DispneiaCheckbox = document.getElementById("sinais_e_sintomas_dispneia");/*Input type Checkbox*/
    var DispneiaChecked = DispneiaCheckbox.checked;
    if (DispneiaChecked) {
        var Dispneia = 'Dispnéia';
    } else {
        var Dispneia = 'n';
    }
    var DorLocalCheckbox = document.getElementById("sinais_e_sintomas_dor_local");/*Input type Checkbox*/
    var DorLocalChecked = DorLocalCheckbox.checked;
    if (DorLocalChecked) {
        var DorLocal = 'Dor local';
    } else {
        var DorLocal = 'n';
    }
    
    var EnfisemaSubcutaneoCheckbox = document.getElementById("sinais_e_sintomas_enfisema_subcutaneo");/*Input type Checkbox*/
    var EnfisemaSubcutaneoChecked = EnfisemaSubcutaneoCheckbox.checked;
    if (EnfisemaSubcutaneoChecked) {
        var EnfisemaSubcutaneo = 'Enfisema subcutâneo';
    } else {
        var EnfisemaSubcutaneo = 'n';
    }
    var EstaseDeJugularCheckbox = document.getElementById("sinais_e_sintomas_estase_de_jugular");/*Input type Checkbox*/
    var EstaseDeJugularChecked = EstaseDeJugularCheckbox.checked;
    if (EstaseDeJugularChecked) {
        var EstaseDeJugular = 'Êstase de jugular';
    } else {
        var EstaseDeJugular = 'n';
    }
    var FacePalidaCheckbox = document.getElementById("sinais_e_sintomas_face_palida");/*Input type Checkbox*/
    var FacePalidaChecked = FacePalidaCheckbox.checked;
    if (FacePalidaChecked) {
        var FacePalida = 'Face Pálida';
    } else {
        var FacePalida = 'n';
    }
    
    var HipertensaoCheckbox = document.getElementById("sinais_e_sintomas_hipertensao");/*Input type Checkbox*/
    var HipertensaoChecked = HipertensaoCheckbox.checked;
    if (HipertensaoChecked) {
        var Hipertensao = 'Hipertensão';
    } else {
        var Hipertensao = 'n';
    }
    var HipotensaoCheckbox = document.getElementById("sinais_e_sintomas_hipotensao");/*Input type Checkbox*/
    var HipotensaoChecked = HipotensaoCheckbox.checked;
    if (HipotensaoChecked) {
        var Hipotensao = 'Hipotensão';
    } else {
        var Hipotensao = 'n';
    }
    var NausesEVomitosCheckbox = document.getElementById("sinais_e_sintomas_nauses_e_vomitos");/*Input type Checkbox*/
    var NausesEVomitosChecked = NausesEVomitosCheckbox.checked;
    if (NausesEVomitosChecked) {
        var NausesEVomitos = 'Náuses e vômitos';
    } else {
        var NausesEVomitos = 'n';
    }
    var NasoragiaCheckbox = document.getElementById("sinais_e_sintomas_nasoragia");/*Input type Checkbox*/
    var NasoragiaChecked = NasoragiaCheckbox.checked;
    if (NasoragiaChecked) {
        var Nasoragia = 'Nasoragia';
    } else {
        var Nasoragia = 'n';
    }
    var ObitoCheckbox = document.getElementById("sinais_e_sintomas_obito");/*Input type Checkbox*/
    var ObitoChecked = ObitoCheckbox.checked;
    if (ObitoChecked) {
        var Obito = 'Óbito';
    } else {
        var Obito = 'n';
    }
    var OtorreiaCheckbox = document.getElementById("sinais_e_sintomas_otorreia");/*Input type Checkbox*/
    var OtorreiaChecked = OtorreiaCheckbox.checked;
    if (OtorreiaChecked) {
        var Otorreia = 'Otorréia';
    } else {
        var Otorreia = 'n';
    }
    var OvaceCheckbox = document.getElementById("sinais_e_sintomas_ovace");/*Input type Checkbox*/
    var OvaceChecked = OvaceCheckbox.checked;
    if (OvaceChecked) {
        var Ovace = 'O.V.A.C.E';
    } else {
        var Ovace = 'n';
    }
    
    var PriaprismoCheckbox = document.getElementById("sinais_e_sintomas_priaprismo");/*Input type Checkbox*/
    var PriaprismoChecked = PriaprismoCheckbox.checked;
    if (PriaprismoChecked) {
        var Priaprismo = 'Priaprismo';
    } else {
        var Priaprismo = 'n';
    }
    var PruridoNaPeleCheckbox = document.getElementById("sinais_e_sintomas_prurido_na_pele");/*Input type Checkbox*/
    var PruridoNaPeleChecked = PruridoNaPeleCheckbox.checked;
    if (PruridoNaPeleChecked) {
        var PruridoNaPele = 'Prurido na Pele';
    } else {
        var PruridoNaPele = 'n';
    }
    
    var SedeCheckbox = document.getElementById("sinais_e_sintomas_sede");/*Input type Checkbox*/
    var SedeChecked = SedeCheckbox.checked;
    if (SedeChecked) {
        var Sede = 'Sede';
    } else {
        var Sede = 'n';
    }
    var SinalDeBattleCheckbox = document.getElementById("sinais_e_sintomas_sinal_de_battle");/*Input type Checkbox*/
    var SinalDeBattleChecked = SinalDeBattleCheckbox.checked;
    if (SinalDeBattleChecked) {
        var SinalDeBattle = 'Sinal de Battle';
    } else {
        var SinalDeBattle = 'n';
    }
    var SinalDeGuaxinimCheckbox = document.getElementById("sinais_e_sintomas_sinal_de_guaxinim");/*Input type Checkbox*/
    var SinalDeGuaxinimChecked = SinalDeGuaxinimCheckbox.checked;
    if (SinalDeGuaxinimChecked) {
        var SinalDeGuaxinim = 'Sinal de Guaxinim';
    } else {
        var SinalDeGuaxinim = 'n';
    }
    var SudoreseCheckbox = document.getElementById("sinais_e_sintomas_sudorese");/*Input type Checkbox*/
    var SudoreseChecked = SudoreseCheckbox.checked;
    if (SudoreseChecked) {
        var Sudorese = 'Sudorese';
    } else {
        var Sudorese = 'n';
    }
    var TaquipnéiaCheckbox = document.getElementById("sinais_e_sintomas_taquipnéia");/*Input type Checkbox*/
    var TaquipnéiaChecked = TaquipnéiaCheckbox.checked;
    if (TaquipnéiaChecked) {
        var Taquipnéia = 'Taquipnéia';
    } else {
        var Taquipnéia = 'n';
    }
    var TaquicardiaCheckbox = document.getElementById("sinais_e_sintomas_taquicardia");/*Input type Checkbox*/
    var TaquicardiaChecked = TaquicardiaCheckbox.checked;
    if (TaquicardiaChecked) {
        var Taquicardia = 'Taquicardia';
    } else {
        var Taquicardia = 'n';
    }
    var TonturaCheckbox = document.getElementById("sinais_e_sintomas_tontura");/*Input type Checkbox*/
    var TonturaChecked = TonturaCheckbox.checked;
    if (TonturaChecked) {
        var Tontura = 'Tontura';
    } else {
        var Tontura = 'n';
    }
    var LabiosSinaiESintomas = "";/*Input type radio*/
    if (document.getElementById("sinais_e_sintomas_labios").checked) {
        LabiosSinaiESintomas = document.getElementById("sinais_e_sintomas_labios").value;
    } else if (document.getElementById("sinais_e_sintomas_extremidades").checked) {
        LabiosSinaiESintomas = document.getElementById("sinais_e_sintomas_extremidades").value;
    } else {LabiosSinaiESintomas = "n"}

    var GeneralizadoSinaiESintomas = "";/*Input type radio*/
    if (document.getElementById("sinais_e_sintomas_generalizado").checked) {
        GeneralizadoSinaiESintomas = document.getElementById("sinais_e_sintomas_generalizado").value;
    } else if (document.getElementById("sinais_e_sintomas_localizado").checked) {
        GeneralizadoSinaiESintomas = document.getElementById("sinais_e_sintomas_localizado").value;
    } else {GeneralizadoSinaiESintomas = "n"}
    var InternaSinaiESintomas = "";/*Input type radio*/
    if (document.getElementById("sinais_e_sintomas_interna").checked) {
        InternaSinaiESintomas = document.getElementById("sinais_e_sintomas_interna").value;
    } else if (document.getElementById("sinais_e_sintomas_externa").checked) {
        InternaSinaiESintomas = document.getElementById("sinais_e_sintomas_externa").value;
    } else {InternaSinaiESintomas = "n"}

    var CardiacaSinaiESintomas = "";/*Input type radio*/
    if (document.getElementById("sinais_e_sintomas_cardiaca").checked) {
        CardiacaSinaiESintomas = document.getElementById("sinais_e_sintomas_cardiaca").value;
    } else if (document.getElementById("sinais_e_sintomas_respiratoria").checked) {
        CardiacaSinaiESintomas = document.getElementById("sinais_e_sintomas_respiratoria").value;
    } else {CardiacaSinaiESintomas = "n"}

    var AnisocoriaSinaiESintomas = "";/*Input type radio*/
    if (document.getElementById("sinais_e_sintomas_anisocoria").checked) {
        AnisocoriaSinaiESintomas = document.getElementById("sinais_e_sintomas_anisocoria").value;
    } else if (document.getElementById("sinais_e_sintomas_isocoria").checked) {
        AnisocoriaSinaiESintomas = document.getElementById("sinais_e_sintomas_isocoria").value;
    }else if (document.getElementById("sinais_e_sintomas_reagente").checked) {
        AnisocoriaSinaiESintomas = document.getElementById("sinais_e_sintomas_reagente").value;
    }else if (document.getElementById("sinais_e_sintomas_n_reagente").checked) {
        AnisocoriaSinaiESintomas = document.getElementById("sinais_e_sintomas_n_reagente").value;
    }else if (document.getElementById("sinais_e_sintomas_midriase").checked) {
        AnisocoriaSinaiESintomas = document.getElementById("sinais_e_sintomas_midriase").value;
    }else if (document.getElementById("sinais_e_sintomas_miose").checked) {
        AnisocoriaSinaiESintomas = document.getElementById("sinais_e_sintomas_miose").value;
    } else {AnisocoriaSinaiESintomas = "n"}
    
    if (document.getElementById("sinais_e_sintomas_txt").checked){
        var TextoSes = document.getElementById("sinais_e_sintomas_input_txt").value;
    } else{
        var TextoSes= "n";
    }

    var TodosOsValoresSeS = ""
    if(LabiosSinaiESintomas !== "n"){TodosOsValoresSeS += LabiosSinaiESintomas + ", "} 
    if(TextoSes !== "n"){TodosOsValoresSeS += TextoSes + ", "}
    if(GeneralizadoSinaiESintomas !== "n"){TodosOsValoresSeS += GeneralizadoSinaiESintomas + ", "}
    if(InternaSinaiESintomas !== "n"){TodosOsValoresSeS += InternaSinaiESintomas + ", "}
    if(CardiacaSinaiESintomas !== "n"){TodosOsValoresSeS += CardiacaSinaiESintomas + ", "}
    if(AnisocoriaSinaiESintomas !== "n"){TodosOsValoresSeS += AnisocoriaSinaiESintomas + ", "}
    if(Abdomen !== "n"){TodosOsValoresSeS += Abdomen + ", "}
    if(Afundamento !== "n"){TodosOsValoresSeS += Afundamento + ", "}
    if(Agitacao !== "n"){TodosOsValoresSeS += Agitacao + ", "}
    if(Apineia !== "n"){TodosOsValoresSeS += Apineia + ", "}
    if(Aminesia !== "n"){TodosOsValoresSeS += Aminesia + ", "}
    if(Ovace !== "n"){TodosOsValoresSeS += Ovace + ", "} 
    if(Hipotensao !== "n"){TodosOsValoresSeS += Hipotensao + ", "}   
    if(Bradipneia !== "n"){TodosOsValoresSeS += Bradipneia + ", "}
    if(Bradicardia !== "n"){TodosOsValoresSeS += Bradicardia + ", "}
    if(BroncoAspirando !== "n"){TodosOsValoresSeS += BroncoAspirando + ", "}
    if(Convulsao !== "n"){TodosOsValoresSeS += Convulsao + ", "}
    if(Decorticacao !== "n"){TodosOsValoresSeS += Decorticacao + ", "}
    if(Desmaio !== "n"){TodosOsValoresSeS += Desmaio + ", "}
    if(Deformidade !== "n"){TodosOsValoresSeS += Deformidade + ", "}
    if(Descerebracao !== "n"){TodosOsValoresSeS += Descerebracao + ", "}
    if(Traqueia !== "n"){TodosOsValoresSeS += Traqueia + ", "}
    if(Dispneia !== "n"){TodosOsValoresSeS += Dispneia + ", "}
    if(DorLocal !== "n"){TodosOsValoresSeS += DorLocal + ", "}
    if(EnfisemaSubcutaneo !== "n"){TodosOsValoresSeS += EnfisemaSubcutaneo + ", "}
    if(EstaseDeJugular !== "n"){TodosOsValoresSeS += EstaseDeJugular + ", "}
    if(FacePalida !== "n"){TodosOsValoresSeS += FacePalida + ", "}
    if(Hipertensao !== "n"){TodosOsValoresSeS += Hipertensao + ", "}
    if(NausesEVomitos !== "n"){TodosOsValoresSeS += NausesEVomitos + ", "}
    if(Obito !== "n"){TodosOsValoresSeS += Obito + ", "}
    if(Nasoragia !== "n"){TodosOsValoresSeS += Nasoragia + ", "}
    if(Otorreia !== "n"){TodosOsValoresSeS += Otorreia + ", "}
    if(Priaprismo !== "n"){TodosOsValoresSeS += Priaprismo + ", "}
    if(PruridoNaPele !== "n"){TodosOsValoresSeS += PruridoNaPele + ", "}
    if(Sede !== "n"){TodosOsValoresSeS += Sede + ", "}
    if(SinalDeBattle !== "n"){TodosOsValoresSeS += SinalDeBattle + ", "}
    if(SinalDeGuaxinim !== "n"){TodosOsValoresSeS += SinalDeGuaxinim + ", "}
    if(Sudorese !== "n"){TodosOsValoresSeS += Sudorese + ", "}
    if(Taquipnéia !== "n"){TodosOsValoresSeS += Taquipnéia + ", "}
    if(Taquicardia !== "n"){TodosOsValoresSeS += Taquicardia + ", "}
    if(Tontura !== "n"){TodosOsValoresSeS += Tontura + ", "}
    if(Cefaleia !== "n"){TodosOsValoresSeS += Cefaleia + ", "}
    if(TodosOsValoresSeS === ""){TodosOsValoresSeS = "nda"}
    console.log(TodosOsValoresSeS)

    $.ajax({
        url: 'PHP/tabela-sinais-sintomas.php',
        method: 'POST',
        data: {
            TodosOsValoresSeS: TodosOsValoresSeS,
            Bombeiro: BombeiroAtual,
            Paciente: CpfPaciente
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    
}


function CinoseCheckbox(){ /*Input type DIV NONE*/

    var Cinose = document.getElementById("sinais_e_sintomas_cinose");
    var DivCinose = document.getElementById("div_cinose");
    var Labios = document.getElementById("sinais_e_sintomas_labios");/*Input type Radio*/
    var Extremidades = document.getElementById("sinais_e_sintomas_extremidades");/*Input type Radio*/
    if(Cinose.checked){
        DivCinose.style.display = "flex";
    }else{
        DivCinose.style.display = "none";
        Labios.checked = false;/*Input type Radio*/
        Extremidades.checked = false;/*Input type Radio*/
    };  
}

function EdemaCheckbox(){ /*Input type DIV NONE*/

    var Cinose = document.getElementById("sinais_e_sintomas_edema");
    var DivEdema = document.getElementById("div_edema");
    var Generalizado = document.getElementById("sinais_e_sintomas_generalizado");/*Input type Radio*/
    var Localizado = document.getElementById("sinais_e_sintomas_localizado");/*Input type Radio*/
    if(Cinose.checked){
        DivEdema.style.display = "flex";
    }else{
        DivEdema.style.display = "none";
        Generalizado.checked = false;/*Input type Radio*/
        Localizado.checked = false;/*Input type Radio*/
    };  
}

function ParadaCheckbox(){ /*Input type DIV NONE*/

    var Parada = document.getElementById("sinais_e_sintomas_parada");
    var DivParada = document.getElementById("div_parada");
    var Cardiaca = document.getElementById("sinais_e_sintomas_cardiaca");/*Input type Radio*/
    var Respiratoria = document.getElementById("sinais_e_sintomas_respiratoria");/*Input type Radio*/
    if(Parada.checked){
        DivParada.style.display = "flex";
    }else{
        DivParada.style.display = "none";
        Cardiaca.checked = false;/*Input type Radio*/
        Respiratoria.checked = false;/*Input type Radio*/
    };  
}
function HemorragiaCheckbox(){ /*Input type DIV NONE*/

    var Hemorragia = document.getElementById("sinais_e_sintomas_hemorragia");
    var DivHemorragia = document.getElementById("div_hemorragia");
    var Interna = document.getElementById("sinais_e_sintomas_interna");/*Input type Radio*/
    var Externa = document.getElementById("sinais_e_sintomas_externa");/*Input type Radio*/
    if(Hemorragia.checked){
        DivHemorragia.style.display = "flex";
    }else{
        DivHemorragia.style.display = "none";
        Interna.checked = false;/*Input type Radio*/
        Externa.checked = false;/*Input type Radio*/
    };  
}
function PupilasCheckbox(){ /*Input type DIV NONE*/

    var Pupilas = document.getElementById("sinais_e_sintomas_pupilas");
    var DivPupilas = document.getElementById("div_pupilas");
    var Anisocoria = document.getElementById("sinais_e_sintomas_anisocoria");/*Input type Radio*/
    var Isocoria = document.getElementById("sinais_e_sintomas_isocoria");/*Input type Radio*/
    var Reagente = document.getElementById("sinais_e_sintomas_reagente");/*Input type Radio*/
    var NReagente = document.getElementById("sinais_e_sintomas_n_reagente");/*Input type Radio*/
    var Midriase = document.getElementById("sinais_e_sintomas_midriase");/*Input type Radio*/
    var Miose = document.getElementById("sinais_e_sintomas_miose");/*Input type Radio*/

    if(Pupilas.checked){
        DivPupilas.style.display = "flex";
    }else{
        DivPupilas.style.display = "none";
        Anisocoria.checked = false;/*Input type Radio*/
        Isocoria.checked = false;/*Input type Radio*/
        Reagente.checked = false;/*Input type Radio*/
        NReagente.checked = false;/*Input type Radio*/
        Midriase.checked = false;/*Input type Radio*/
        Miose.checked = false;/*Input type Radio*/
    };  
}
function TXTCheckbox(){ /*Input type DIV NONE*/

    var TXT = document.getElementById("sinais_e_sintomas_txt");
    var DivTXT = document.getElementById("sinais_e_sintomas_input_txt");
    if(TXT.checked){
        DivTXT.style.display = "flex";
    }else{
        DivTXT.style.display = "none";
        DivTXT.value = "";/*Input type Radio*/
    
    };  
}
function ProblemasSuspeitos(){

    console.log("Estou funcionando!! ~senpai.. (>//< )");

    var psiqcheckboxps = document.getElementById("psiquiatrico_ps");/*Input type Checkbox*/
    var confirmapsiqcheck = psiqcheckboxps.checked;
    if (confirmapsiqcheck) {
        var Psiquiatricops = 'sim';
    } else {
        var Psiquiatricops = 'nda';
    }console.log("Psiquiatrico: " + Psiquiatricops);

    var respradioboxps = "nda";/*Input type radio*/
    if (document.getElementById("respiratorio_dpoc_ps").checked) {
        respradioboxps = document.getElementById("respiratorio_dpoc_ps").value;
    } else if (document.getElementById("respiratorio_fumaca_ps").checked) {
        respradioboxps = document.getElementById("respiratorio_fumaca_ps").value;
    }console.log("Respiratorio: " + respradioboxps);

    var diabradioboxps = "nda";/*Input type radio*/
    if (document.getElementById("diabete_hiperglicemia_ps").checked) {
        diabradioboxps = document.getElementById("diabete_hiperglicemia_ps").value;
    } else if (document.getElementById("diabete_hipoglicemia_ps").checked) {
        diabradioboxps = document.getElementById("diabete_hipoglicemia_ps").value;
    }console.log("Diabetes: " + diabradioboxps);

    var obsterradioboxps = "nda";/*Input type radio*/
    if (document.getElementById("obsterico_parto_emergencial_ps").checked) {
        obsterradioboxps = document.getElementById("obsterico_parto_emergencial_ps").value;
    } else if (document.getElementById("obsterico_gestante_ps").checked) {
        obsterradioboxps = document.getElementById("obsterico_gestante_ps").value;
    } else if (document.getElementById("obsterico_hemor_ps").checked) {
        obsterradioboxps = document.getElementById("obsterico_hemor_ps").value;
    }console.log("Obsterico: " + obsterradioboxps);

    var transpradiobox = "nda";/*Input type radio*/
    if (document.getElementById("transporte_aereo_ps").checked) {
        transpradiobox = document.getElementById("transporte_aereo_ps").value;
    } else if (document.getElementById("transporte_clinico_ps").checked) {
        transpradiobox = document.getElementById("transporte_clinico_ps").value;
    } else if (document.getElementById("transporte_emergencial_ps").checked) {
        transpradiobox = document.getElementById("transporte_emergencial_ps").value;
    } else if (document.getElementById("transporte_pos_trauma_ps").checked) {
        transpradiobox = document.getElementById("transporte_pos_trauma_ps").value;
    } else if (document.getElementById("transporte_samu_ps").checked) {
        transpradiobox = document.getElementById("transporte_samu_ps").value;
    } else if (document.getElementById("transporte_outros_ps").checked) {
        transpradiobox = document.getElementById("transporte_outros_ps").value;
    } else if (document.getElementById("transporte_sem_remocao_ps").checked) {
        transpradiobox = document.getElementById("transporte_sem_remocao_ps").value;
    } console.log("Transporte: " + transpradiobox);

    if (document.getElementById("transporte_outro_texto_ps").value === ""){
        var OutroTextoPs = "nda";
    } else{
        var OutroTextoPs = document.getElementById("transporte_outro_texto_ps").value;
    }console.log("Outro: " + OutroTextoPs);
    
    $.ajax({
        url: 'PHP/tabela-problemas-suspeitos.php',
        method: 'POST',
        data: {
            Psiquiatrico: Psiquiatricops,
            Respiratorio: respradioboxps,
            Diabete: diabradioboxps,
            Obsterico: obsterradioboxps,
            Transporte: transpradiobox,
            Outro: OutroTextoPs,
            Bombeiro: BombeiroAtual,
            Paciente: CpfPaciente
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
}
function MostrarRespiratorioPS(){
    
    var MostrarDivRespiratorio = document.getElementById("respiratorio_ps_checkbox");
    var DivRespiratorioPS = document.getElementById("div_respiratorio_ps");

    if(MostrarDivRespiratorio.checked){
        DivRespiratorioPS.style.display = "flex";
    }else{
        DivRespiratorioPS.style.display = "none";
    };
}
function MostrarDiabetesPS(){

    var MostrarDivDiabestes = document.getElementById("diabetes_ps");
    var DivDiabetesPS = document.getElementById("div_diabetes_ps")

    if(MostrarDivDiabestes.checked){
        DivDiabetesPS.style.display = "flex";
    }else{
        DivDiabetesPS.style.display = "none";
    };
}
function MostrarObstericosPS(){

    var MostrarDivObstericoPS = document.getElementById("obsterico_ps");
    var DivObstericoPS = document.getElementById("div_obsterico_ps");

    if(MostrarDivObstericoPS.checked){
        DivObstericoPS.style.display = "flex"
    }else{
        DivObstericoPS.style.display = "none"
    }
}
function MostrarTransportePS(){

    var MostrarDivTransportePS = document.getElementById("transporte_ps");
    var DivTransportePS = document.getElementById("div_transporte_ps");

    if(MostrarDivTransportePS.checked){
        DivTransportePS.style.display = "flex"
    }else{
        DivTransportePS.style.display = "none"
    }

}
function LimparRadioPS(){
    var Psiquiatrico  = document.getElementById("psiquiatrico_ps");
    var Respiratorio = document.getElementById("respiratorio_ps_checkbox");
    var DPOC = document.getElementById("respiratorio_dpoc_ps");
    var InalacaoFumaca = document.getElementById("respiratorio_fumaca_ps");
    var Diabete = document.getElementById("diabetes_ps");
    var Hiperglicemia = document.getElementById("diabete_hiperglicemia_ps");
    var Hipoglicemia = document.getElementById("diabete_hipoglicemia_ps");
    var Obsterico = document.getElementById("obsterico_ps");
    var PartoEmergencial = document.getElementById("obsterico_parto_emergencial_ps");
    var Gestante = document.getElementById("obsterico_gestante_ps");
    var Hemor = document.getElementById("obsterico_hemor_ps");
    var Transporte = document.getElementById("transporte_ps");
    var Aereo = document.getElementById("transporte_aereo_ps");
    var Clinico = document.getElementById("transporte_clinico_ps");
    var Emergencial = document.getElementById("transporte_emergencial_ps");
    var PosTrauma = document.getElementById("transporte_pos_trauma_ps");
    var Samu = document.getElementById("transporte_samu_ps");
    var Outros = document.getElementById("transporte_outros_ps");
    var SemRemocao = document.getElementById("transporte_sem_remocao_ps");
    var OutroTexto = document.getElementById("transporte_outro_texto_ps");
    var DivRespiratorioPS = document.getElementById("div_respiratorio_ps");
    var DivDiabetesPS = document.getElementById("div_diabetes_ps");
    var DivObstericoPS = document.getElementById("div_obsterico_ps");
    var DivTransportePS = document.getElementById("div_transporte_ps");

    Psiquiatrico.checked = false;
    Respiratorio.checked = false;
    DPOC.checked = false;
    InalacaoFumaca.checked = false;
    Diabete.checked = false;
    Hiperglicemia.checked = false;
    Hipoglicemia.checked = false;
    Obsterico.checked = false;
    PartoEmergencial.checked = false;
    Gestante.checked = false;
    Hemor.checked = false;
    Transporte.checked = false;
    Aereo.checked = false;
    Clinico.checked = false;
    Emergencial.checked = false;
    PosTrauma.checked = false;
    Samu.checked = false;
    Outros.checked = false;
    SemRemocao.checked = false;
    OutroTexto.value = "";
    DivRespiratorioPS.style.display = "none";
    DivDiabetesPS.style.display = "none";
    DivObstericoPS.style.display = "none";
    DivTransportePS.style.display = "none";
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}
function ProcedimentosEfetuados(){

    var AspiracaoPefCheckbox = document.getElementById("aspiracao_pef");/*Input type Checkbox*/
    var AspiracaoPefChecked = AspiracaoPefCheckbox.checked;
    if (AspiracaoPefChecked) {
        var AspiracaoPef = 'Aspiração';
    } else {
        var AspiracaoPef = 'n';
    };

    var AvaliacaoInicialPefCheckbox = document.getElementById("avaliacao_inicial_pef");/*Input type Checkbox*/
    var AvaliacaoInicialPefChecked = AvaliacaoInicialPefCheckbox.checked;
    if (AvaliacaoInicialPefChecked) {
        var AvaliacaoInicialPef = 'Avaliação Inicial';
    } else {
        var AvaliacaoInicialPef = 'n';
    }

    var AvaliacaoContinuadaPefCheckbox = document.getElementById("avaliacao_continuada_pef");/*Input type Checkbox*/
    var AvaliacaoContinuadaPefChecked = AvaliacaoContinuadaPefCheckbox.checked;
    if (AvaliacaoContinuadaPefChecked) {
        var AvaliacaoContinuadaPef = 'Avaliação continuada';
    } else {
        var AvaliacaoContinuadaPef = 'n';
    }

    var ChaveRautekPefCheckbox = document.getElementById("chave_rautek_pef");/*Input type Checkbox*/
    var ChaveRautekPefChecked = ChaveRautekPefCheckbox.checked;
    if (ChaveRautekPefChecked) {
        var ChaveRautekPef = 'Chave de Rautek';
    } else {
        var ChaveRautekPef = 'n';
    }

    var CanulaGuedelPefCheckbox = document.getElementById("canula_guedel_pef");/*Input type Checkbox*/
    var CanulaGuedelPefChecked = CanulaGuedelPefCheckbox.checked;
    if (CanulaGuedelPefChecked) {
        var CanulaGuedelPef = 'Cânula de Guedel';
    } else {
        var CanulaGuedelPef = 'n';
    }

    var DesobstrucaoVAPefCheckbox = document.getElementById("desobstrucao_va_pef");/*Input type Checkbox*/
    var DesobstrucaoVAPefChecked = DesobstrucaoVAPefCheckbox.checked;
    if (DesobstrucaoVAPefChecked) {
        var DesobstrucaoVAPef = 'Desobstrução de V.A';
    } else {
        var DesobstrucaoVAPef = 'n';
    }

    var DesobstrucaoDEAPefCheckbox = document.getElementById("desobtrucao_dea_pef");/*Input type Checkbox*/
    var DesobstrucaoDEAPefChecked = DesobstrucaoDEAPefCheckbox.checked;
    if (DesobstrucaoDEAPefChecked) {
        var DesobstrucaoDEAPef = 'Desobstrução do D.E.A';
    } else {
        var DesobstrucaoDEAPef = 'n';
    }

    var EmpregoDEAPefCheckbox = document.getElementById("emprego_dea_pef");/*Input type Checkbox*/
    var EmpregoDEAPefChecked = EmpregoDEAPefCheckbox.checked;
    if (EmpregoDEAPefChecked) {
        var EmpregoDEAPef = 'Emprego do D.E.A';
    } else {
        var EmpregoDEAPef = 'n';
    }

    var GerenciamentoRiscosPefCheckbox = document.getElementById("gerenciamento_riscos_pef");/*Input type Checkbox*/
    var GerenciamentoRiscosPefChecked = GerenciamentoRiscosPefCheckbox.checked;
    if (GerenciamentoRiscosPefChecked) {
        var GerenciamentoRiscosPef = 'Gerenciamento de Riscos';
    } else {
        var GerenciamentoRiscosPef = 'n';
    }

    var LimpezaFerimentosPefCheckbox = document.getElementById("limpeza_ferimentos_pef");/*Input type Checkbox*/
    var LimpezaFerimentosPefChecked = LimpezaFerimentosPefCheckbox.checked;
    if (LimpezaFerimentosPefChecked) {
        var LimpezaFerimentosPef = 'Limpeza de Ferimentos';
    } else {
        var LimpezaFerimentosPef = 'n';
    }

    var CurativosPefCheckbox = document.getElementById("curativos_pef");/*Input type Checkbox*/
    var CurativosPefChecked = CurativosPefCheckbox.checked;
    if (CurativosPefChecked) {
        var CurativosPef = 'Curativos';
    } else {
        var CurativosPef = 'n';
    }

    var CompressivosPefCheckbox = document.getElementById("compressivo_pef");/*Input type Checkbox*/
    var CompressivosPefChecked = CompressivosPefCheckbox.checked;
    if (CompressivosPefChecked) {
        var CompressivosPef = 'Compressivo';
    } else {
        var CompressivosPef = 'n';
    }

    var EncravamentoPefCheckbox = document.getElementById("encravamento_pef");/*Input type Checkbox*/
    var EncravamentoPefChecked = EncravamentoPefCheckbox.checked;
    if (EncravamentoPefChecked) {
        var EncravamentoPef = 'Encravamento';
    } else {
        var EncravamentoPef = 'n';
    }

    var OcularPefCheckbox = document.getElementById("ocular_pef");/*Input type Checkbox*/
    var OcularPefChecked = OcularPefCheckbox.checked;
    if (OcularPefChecked) {
        var OcularPef = 'Ocular';
    } else {
        var OcularPef = 'n';
    }

    var QueimaduraPefCheckbox = document.getElementById("queimadura_pef");/*Input type Checkbox*/
    var QueimaduraPefChecked = QueimaduraPefCheckbox.checked;
    if (QueimaduraPefChecked) {
        var QueimaduraPef = 'Queimadura';
    } else {
        var QueimaduraPef = 'n';
    }

    var SimplesPefCheckbox = document.getElementById("simples_pef");/*Input type Checkbox*/
    var SimplesPefChecked = SimplesPefCheckbox.checked;
    if (SimplesPefChecked) {
        var SimplesPef = 'Simples';
    } else {
        var SimplesPef = 'n';
    }

    var TresPontasPefCheckbox = document.getElementById("3pontas_pef");/*Input type Checkbox*/
    var TresPontasPefChecked = TresPontasPefCheckbox.checked;
    if (TresPontasPefChecked) {
        var TresPontasPef = '3 pontas';
    } else {
        var TresPontasPef = 'n';
    }

    var ImobilizacaoPefCheckbox = document.getElementById("imobilizacao_pef");/*Input type Checkbox*/
    var ImobilizacaoPefChecked = ImobilizacaoPefCheckbox.checked;
    if (ImobilizacaoPefChecked) {
        var ImobilizacaoPef = 'Imobilização';
    } else {
        var ImobilizacaoPef = 'n';
    }

    var MmbInfDirPefCheckbox = document.getElementById("mmb_inf_dir_pef");/*Input type Checkbox*/
    var MmbInfDirPefChecked = MmbInfDirPefCheckbox.checked;
    if (MmbInfDirPefChecked) {
        var MmbInfDirPef = 'Membro inferior Direito';
    } else {
        var MmbInfDirPef = 'n';
    }

    var MmbInfEsqPefCheckbox = document.getElementById("mmb_inf_esq_pef");/*Input type Checkbox*/
    var MmbInfEsqPefChecked = MmbInfEsqPefCheckbox.checked;
    if (MmbInfEsqPefChecked) {
        var MmbInfEsqPef = 'Membro Inferior Esquerdo';
    } else {
        var MmbInfEsqPef = 'n';
    }

    var MmbSupDirPefCheckbox = document.getElementById("mmb_sup_dir_pef");/*Input type Checkbox*/
    var MmbSupDirPefChecked = MmbSupDirPefCheckbox.checked;
    if (MmbSupDirPefChecked) {
        var MmbSupDirPef = 'Membro Superior Direito';
    } else {
        var MmbSupDirPef = 'n';
    }

    var MmbSupEsqPefCheckbox = document.getElementById("mmb_sup_esq_pef");/*Input type Checkbox*/
    var MmbSupEsqPefChecked = MmbSupEsqPefCheckbox.checked;
    if (MmbSupEsqPefChecked) {
        var MmbSupEsqPef = 'Membro Superior Esquerdo';
    } else {
        var MmbSupEsqPef = 'n';
    }

    var QuadrilPefCheckbox = document.getElementById("quadril_pef");/*Input type Checkbox*/
    var QuadrilPefChecked = QuadrilPefCheckbox.checked;
    if (QuadrilPefChecked) {
        var QuadrilPef = 'Quadril';
    } else {
        var QuadrilPef = 'n';
    }

    var CervicalPefCheckbox = document.getElementById("cervical_pef");/*Input type Checkbox*/
    var CervicalPefChecked = CervicalPefCheckbox.checked;
    if (CervicalPefChecked) {
        var CervicalPef = 'Cervical';
    } else {
        var CervicalPef = 'n';
    }

    var MacaSobreRodasPefCheckbox = document.getElementById("maca_sobre_rodas_pef");/*Input type Checkbox*/
    var MacaSobreRodasPefChecked = MacaSobreRodasPefCheckbox.checked;
    if (MacaSobreRodasPefChecked) {
        var MacaSobreRodasPef = 'Maca Sobre Rodas';
    } else {
        var MacaSobreRodasPef = 'n';
    }

    var MacaRigidaPefCheckbox = document.getElementById("maca_rigida_pef");/*Input type Checkbox*/
    var MacaRigidaPefChecked = MacaRigidaPefCheckbox.checked;
    if (MacaRigidaPefChecked) {
        var MacaRigidaPef = 'Maca Sobre Rodas';
    } else {
        var MacaRigidaPef = 'n';
    }

    var RetiradoCapacetePefCheckbox = document.getElementById("retirado_capacete_pef");/*Input type Checkbox*/
    var RetiradoCapacetePefChecked = RetiradoCapacetePefCheckbox.checked;
    if (RetiradoCapacetePefChecked) {
        var RetiradoCapacetePef = 'Retirado Do Capacete';
    } else {
        var RetiradoCapacetePef = 'n';
    }

    var RCPPefCheckbox = document.getElementById("rcp_pef");/*Input type Checkbox*/
    var RCPPefChecked = RCPPefCheckbox.checked;
    if (RCPPefChecked) {
        var RCPPef = 'R.C.P';
    } else {
        var RCPPef = 'n';
    }

    var Rolamento90PefCheckbox = document.getElementById("rolamento90_pef");/*Input type Checkbox*/
    var Rolamento90PefChecked = Rolamento90PefCheckbox.checked;
    if (Rolamento90PefChecked) {
        var Rolamento90Pef = 'Rolamento 90°';
    } else {
        var Rolamento90Pef = 'n';
    }

    var Rolamento180PefCheckbox = document.getElementById("rolamento180_pef");/*Input type Checkbox*/
    var Rolamento180PefChecked = Rolamento180PefCheckbox.checked;
    if (Rolamento180PefChecked) {
        var Rolamento180Pef = 'Rolamento 180°';
    } else {
        var Rolamento180Pef = 'n';
    }

    var TomadaDecisaoPefCheckbox = document.getElementById("tomada_decisao_pef");/*Input type Checkbox*/
    var TomadaDecisaoPefChecked = TomadaDecisaoPefCheckbox.checked;
    if (TomadaDecisaoPefChecked) {
        var TomadaDecisaoPef = 'Tomada Decisão';
    } else {
        var TomadaDecisaoPef = 'n';
    }

    var TratamentoChoquePefCheckbox = document.getElementById("tratamento_choque_pef");/*Input type Checkbox*/
    var TratamentoChoquePefChecked = TratamentoChoquePefCheckbox.checked;
    if (TratamentoChoquePefChecked) {
        var TratamentoChoquePef = 'Tratamento de Choque';
    } else {
        var TratamentoChoquePef = 'n';
    }

    var UsoCanulaPefCheckbox = document.getElementById("uso_canula_pef");/*Input type Checkbox*/
    var UsoCanulaPefChecked = UsoCanulaPefCheckbox.checked;
    if (UsoCanulaPefChecked) {
        var UsoCanulaPef = 'Uso de Cânula';
    } else {
        var UsoCanulaPef = 'n';
    }

    var UsoColarPefCheckbox = document.getElementById("uso_colar_pef");/*Input type Checkbox*/
    var UsoColarPefChecked = UsoColarPefCheckbox.checked;
    if (UsoColarPefChecked) {
        var UsoColarPef = 'Uso de Colar: ' + document.getElementById("text_colar_pef").value;
    } else {
        var UsoColarPef = 'n';
    }

    var UsoKEDPefCheckbox = document.getElementById("uso_ked_pef");/*Input type Checkbox*/
    var UsoKEDPefChecked = UsoKEDPefCheckbox.checked;
    if (UsoKEDPefChecked) {
        var UsoKEDPef = 'Uso KED';
    } else {
        var UsoKEDPef = 'n';
    }

    var UsoTTFPefCheckbox = document.getElementById("Uso_ttf_pef");/*Input type Checkbox*/
    var UsoTTFPefChecked = UsoTTFPefCheckbox.checked;
    if (UsoTTFPefChecked) {
        var UsoTTFPef = 'Uso TTF';
    } else {
        var UsoTTFPef = 'n';
    }

    var VentilacaoSuportePefCheckbox = document.getElementById("ventilacao_suporte_pef");/*Input type Checkbox*/
    var VentilacaoSuportePefChecked = VentilacaoSuportePefCheckbox.checked;
    if (VentilacaoSuportePefChecked) {
        var VentilacaoSuportePef = 'Ventilação Suporte';
    } else {
        var VentilacaoSuportePef = 'n';
    }

    var OxigenoterapiaPefCheckbox = document.getElementById("oxigenoterapia_pef");/*Input type Checkbox*/
    var OxigenoterapiaPefChecked = OxigenoterapiaPefCheckbox.checked;
    if (OxigenoterapiaPefChecked) {
        var OxigenoterapiaPef = 'Oxigenoterapia: ' + document.getElementById("text_oxigenoterapia_pef").value;
    } else {
        var OxigenoterapiaPef = 'n';
    }

    var ReanimadorPefCheckbox = document.getElementById("reanimador_pef");/*Input type Checkbox*/
    var ReanimadorPefChecked = ReanimadorPefCheckbox.checked;
    if (ReanimadorPefChecked) {
        var ReanimadorPef = 'Reanimador: ' + document.getElementById("text_reanimador_pef").value;
    } else {
        var ReanimadorPef = 'n';
    }

    var MeiosAuxiliaresPefCheckbox = document.getElementById("meios_auxiliares_pef");/*Input type Checkbox*/
    var MeiosAuxiliaresPefChecked = MeiosAuxiliaresPefCheckbox.checked;
    if (MeiosAuxiliaresPefChecked) {
        var MeiosAuxiliaresPef = 'Meios Auxiliares';
    } else {
        var MeiosAuxiliaresPef = 'n';
    }

    var CelescPefCheckbox = document.getElementById("celesc_pef");/*Input type Checkbox*/
    var CelescPefChecked = CelescPefCheckbox.checked;
    if (CelescPefChecked) {
        var CelescPef = 'Celesc';
    } else {
        var CelescPef = 'n';
    }

    var PoliciaCivilPefCheckbox = document.getElementById("policia_civil_pef");/*Input type Checkbox*/
    var PoliciaCivilPefChecked = PoliciaCivilPefCheckbox.checked;
    if (PoliciaCivilPefChecked) {
        var PoliciaCivilPef = 'Policia Civil';
    } else {
        var PoliciaCivilPef = 'n';
    }

    var PoliciaMilitarPefCheckbox = document.getElementById("policia_militar_pef");/*Input type Checkbox*/
    var PoliciaMilitarPefChecked = PoliciaMilitarPefCheckbox.checked;
    if (PoliciaMilitarPefChecked) {
        var PoliciaMilitarPef = 'Policia Militar';
    } else {
        var PoliciaMilitarPef = 'n';
    }

    var PoliciaPrePefCheckbox = document.getElementById("policia_pre_pef");/*Input type Checkbox*/
    var PoliciaPrePefChecked = PoliciaPrePefCheckbox.checked;
    if (PoliciaPrePefChecked) {
        var PoliciaPrePef = 'Policia Pre';
    } else {
        var PoliciaPrePef = 'n';
    }

    var PoliciaPrfPefCheckbox = document.getElementById("policia_prf_pef");/*Input type Checkbox*/
    var PoliciaPrfPefChecked = PoliciaPrfPefCheckbox.checked;
    if (PoliciaPrfPefChecked) {
        var PoliciaPrfPef = 'Policia Prf';
    } else {
        var PoliciaPrfPef = 'n';
    }

    var DefCivilPefCheckbox = document.getElementById("def_civil_pef");/*Input type Checkbox*/
    var DefCivilPefChecked = DefCivilPefCheckbox.checked;
    if (DefCivilPefChecked) {
        var DefCivilPef = 'DEF. Civil';
    } else {
        var DefCivilPef = 'n';
    }

    var IPGPCPefCheckbox = document.getElementById("ipg_pc_pef");/*Input type Checkbox*/
    var IPGPCPefChecked = IPGPCPefCheckbox.checked;
    if (IPGPCPefChecked) {
        var IPGPCPef = 'IPG/PC';
    } else {
        var IPGPCPef = 'n';
    }

    var SamuPefCheckbox = document.getElementById("samu_pef");/*Input type Checkbox*/
    var SamuPefChecked = SamuPefCheckbox.checked;
    if (SamuPefChecked) {
        var SamuPef = 'Samu';
    } else {
        var SamuPef = 'n';
    }

    var CITPefCheckbox = document.getElementById("cit_pef");/*Input type Checkbox*/
    var CITPefChecked = CITPefCheckbox.checked;
    if (CITPefChecked) {
        var CITPef = 'CIT';
    } else {
        var CITPef = 'n';
    }

    if (document.getElementById("textobox_pef").checked){
        var TextoPef = document.getElementById("texto_pef").value;
    } else{
        var TextoPef = "n";
    }
    
    var TodosOsValoresPef = ""
    if(AspiracaoPef !== "n"){TodosOsValoresPef += AspiracaoPef + ", "}
    if(AvaliacaoInicialPef !== "n"){TodosOsValoresPef += AvaliacaoInicialPef + ", "}
    if(AvaliacaoContinuadaPef !== "n"){TodosOsValoresPef += AvaliacaoContinuadaPef + ", "}
    if(ChaveRautekPef !== "n"){TodosOsValoresPef += ChaveRautekPef + ", "}
    if(CanulaGuedelPef !== "n"){TodosOsValoresPef += CanulaGuedelPef + ", "}
    if(DesobstrucaoVAPef !== "n"){TodosOsValoresPef += DesobstrucaoVAPef + ", "}
    if(DesobstrucaoDEAPef !== "n"){TodosOsValoresPef += DesobstrucaoDEAPef + ", "}
    if(EmpregoDEAPef !== "n"){TodosOsValoresPef += EmpregoDEAPef + ", "}
    if(GerenciamentoRiscosPef !== "n"){TodosOsValoresPef += GerenciamentoRiscosPef + ", "}
    if(LimpezaFerimentosPef !== "n"){TodosOsValoresPef += LimpezaFerimentosPef + ", "}
    if(CurativosPef !== "n"){TodosOsValoresPef += CurativosPef + ", "}
    if(CompressivosPef !== "n"){TodosOsValoresPef += CompressivosPef + ", "}
    if(EncravamentoPef !== "n"){TodosOsValoresPef += EncravamentoPef + ", "}
    if(OcularPef !== "n"){TodosOsValoresPef += OcularPef + ", "}
    if(QueimaduraPef !== "n"){TodosOsValoresPef += QueimaduraPef + ", "}
    if(SimplesPef !== "n"){TodosOsValoresPef += SimplesPef + ", "}
    if(TresPontasPef !== "n"){TodosOsValoresPef += TresPontasPef + ", "}
    if(ImobilizacaoPef !== "n"){TodosOsValoresPef += ImobilizacaoPef + ", "}
    if(MmbInfDirPef !== "n"){TodosOsValoresPef += MmbInfDirPef + ", "}
    if(MmbInfEsqPef !== "n"){TodosOsValoresPef += MmbInfEsqPef + ", "}
    if(MmbSupDirPef !== "n"){TodosOsValoresPef += MmbSupDirPef + ", "}
    if(MmbSupEsqPef !== "n"){TodosOsValoresPef += MmbSupEsqPef + ", "}
    if(QuadrilPef !== "n"){TodosOsValoresPef += QuadrilPef + ", "}
    if(CervicalPef !== "n"){TodosOsValoresPef += CervicalPef + ", "}
    if(MacaSobreRodasPef !== "n"){TodosOsValoresPef += MacaSobreRodasPef + ", "}
    if(MacaRigidaPef !== "n"){TodosOsValoresPef += MacaRigidaPef + ", "}
    if(RCPPef !== "n"){TodosOsValoresPef += RCPPef + ", "}
    if(Rolamento90Pef !== "n"){TodosOsValoresPef += Rolamento90Pef + ", "}
    if(Rolamento180Pef !== "n"){TodosOsValoresPef += Rolamento180Pef + ", "}
    if(TomadaDecisaoPef !== "n"){TodosOsValoresPef += TomadaDecisaoPef + ", "}
    if(TratamentoChoquePef !== "n"){TodosOsValoresPef += TratamentoChoquePef + ", "}
    if(UsoCanulaPef !== "n"){TodosOsValoresPef += UsoCanulaPef + ", "}
    if(UsoColarPef !== "n"){TodosOsValoresPef += UsoColarPef + ", "}
    if(UsoKEDPef !== "n"){TodosOsValoresPef += UsoKEDPef + ", "}
    if(UsoTTFPef !== "n"){TodosOsValoresPef += UsoTTFPef + ", "}
    if(VentilacaoSuportePef !== "n"){TodosOsValoresPef += VentilacaoSuportePef + ", "}
    if(OxigenoterapiaPef !== "n"){TodosOsValoresPef += OxigenoterapiaPef + ", "}
    if(ReanimadorPef !== "n"){TodosOsValoresPef += ReanimadorPef + ", "}
    if(MeiosAuxiliaresPef !== "n"){TodosOsValoresPef += MeiosAuxiliaresPef + ", "}
    if(CelescPef !== "n"){TodosOsValoresPef += CelescPef + ", "}
    if(PoliciaCivilPef !== "n"){TodosOsValoresPef += PoliciaCivilPef + ", "}
    if(PoliciaMilitarPef !== "n"){TodosOsValoresPef += PoliciaMilitarPef + ", "}
    if(PoliciaPrePef !== "n"){TodosOsValoresPef += PoliciaPrePef + ", "}
    if(PoliciaPrfPef !== "n"){TodosOsValoresPef += PoliciaPrfPef + ", "}
    if(DefCivilPef !== "n"){TodosOsValoresPef += DefCivilPef + ", "}
    if(IPGPCPef !== "n"){TodosOsValoresPef += IPGPCPef + ", "}
    if(SamuPef !== "n"){TodosOsValoresPef += SamuPef + ", "}
    if(CITPef !== "n"){TodosOsValoresPef += CITPef + ", "}
    if(TextoPef !== "n"){TodosOsValoresPef += TextoPef + ", "}
    if(TodosOsValoresPef === ""){TodosOsValoresPef = "nda"}
    console.log(TodosOsValoresPef)

    $.ajax({
        url: 'PHP/tabela-procedimentos-efetuados.php',
        method: 'POST',
        data: {
            TodosOsValoresPef: TodosOsValoresPef,
            Bombeiro: BombeiroAtual,
            Paciente: CpfPaciente
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
    
};

function UsoDeColarTamPef(){
    var TextColarTamPef = document.getElementById("text_colar_pef");
    var ColarTamCheckBoxPef = document.getElementById("uso_colar_pef");

    if(ColarTamCheckBoxPef.checked){
        TextColarTamPef.style.display = "flex"
    }else{
        TextColarTamPef.style.display = "none"
        TextColarTamPef.value = ""
    }
}
function OxigenoterapiaPef(){
    var OxigenoterapiaCheckBoxPef = document.getElementById("oxigenoterapia_pef");
    var TextOxigenoterapia = document.getElementById("text_oxigenoterapia_pef");

    if(OxigenoterapiaCheckBoxPef.checked){
        TextOxigenoterapia.style.display = "flex"
    }else{
        TextOxigenoterapia.style.display = "none"
        TextOxigenoterapia.value = ""
    }
}
function ReanimadorPef(){
    var TextReanimadorPef = document.getElementById("text_reanimador_pef");
    var ReanimadorCheckBoxPef = document.getElementById("reanimador_pef");

    if(ReanimadorCheckBoxPef.checked){
        TextReanimadorPef.style.display = "flex"
    }else{
        TextReanimadorPef.style.display = "none"
        TextReanimadorPef.value = ""
    }
}
function PoliciaPef(){
    var PoliciaCheckBoxPef = document.getElementById("policia_radio_box");
    var DivPoliciaPef = document.getElementById("policia_div_pef");
    var Policia1 = document.getElementById("policia_civil_pef");
    var Policia2 = document.getElementById("policia_militar_pef");
    var Policia3 = document.getElementById("policia_pre_pef");
    var Policia4 = document.getElementById("policia_prf_pef");

    if(PoliciaCheckBoxPef.checked){
        DivPoliciaPef.style.display = "flex"
    }else{
        DivPoliciaPef.style.display = "none"
        DivPoliciaPef.value = ""
        Policia1.checked = false
        Policia2.checked = false
        Policia3.checked = false
        Policia4.checked = false
    }
}
function OutroPef(){
    var OutroCheckBoxPef = document.getElementById("textobox_pef");
    var TextOutroPef = document.getElementById("texto_pef");

    if(OutroCheckBoxPef.checked){
        TextOutroPef.style.display = "flex"
    }else{
        TextOutroPef.style.display = "none"
        TextOutroPef.value = ""
    }
}
var DivObservacoes = document.getElementById("obsdiv");
document.addEventListener("click", function(ObservacoesImportantes) {
    if (ObservacoesImportantes.target !== DivObservacoes) {
        DivObservacoes.setAttribute("contenteditable", "false");
    }else{
        DivObservacoes.setAttribute("contenteditable", "true");
    }
});
var DivObjEscolhido = document.getElementById("objescolhido_div");
document.addEventListener("click", function(ObjEscDiv) {
    if (ObjEscDiv.target !== DivObjEscolhido) {
        DivObjEscolhido.setAttribute("contenteditable", "false");
    }else{
        DivObjEscolhido.setAttribute("contenteditable", "true");
    }
});
function AvaliacaoCinematica(){
    console.clear();
    var DisturbioDeComportamento = "";/*Input type radio*/
    if (document.getElementById("avaliacao_cimetica_dc_s").checked) {
        DisturbioDeComportamento = "s"
    } else if (document.getElementById("avaliacao_cimetica_dc_n").checked) {
        DisturbioDeComportamento = "n"
    }else{DisturbioDeComportamento = "nda"}

    var EncontradoDeCapacete = "";/*Input type radio*/
    if (document.getElementById("avaliacao_cimetica_ec_s").checked) {
        EncontradoDeCapacete = "s"
    } else if (document.getElementById("avaliacao_cimetica_ec_n").checked) {
        EncontradoDeCapacete = "n"
    }else{EncontradoDeCapacete = "nda"}
    var EncontradoDeCinto = "";/*Input type radio*/
    if (document.getElementById("avaliacao_cimetica_eo_s").checked) {
        EncontradoDeCinto = "s"
    } else if (document.getElementById("avaliacao_cimetica_eo_n").checked) {
        EncontradoDeCinto = "n"
    }else{EncontradoDeCinto = "nda"}

    var ParaBrisasAvariado = "";/*Input type radio*/
    if (document.getElementById("avaliacao_cimetica_pba_s").checked) {
        ParaBrisasAvariado = "s"
    } else if (document.getElementById("avaliacao_cimetica_pba_n").checked) {
        ParaBrisasAvariado = "n"
    }else{ParaBrisasAvariado = "nda"}

    var CaminhandoNaCena = "";/*Input type radio*/
    if (document.getElementById("avaliacao_cimetica_cc_s").checked) {
        CaminhandoNaCena = "s"
    } else if (document.getElementById("avaliacao_cimetica_cc_n").checked) {
        CaminhandoNaCena = "n"
    }else{CaminhandoNaCena = "nda"}

    var PainelAvariado = "";/*Input type radio*/
    if (document.getElementById("avaliacao_cimetica_pa_s").checked) {
        PainelAvariado = "s"
    } else if (document.getElementById("avaliacao_cimetica_pa_n").checked) {
        PainelAvariado = "n"
    }else{PainelAvariado = "nda"}

    var VolanteTorcido = "";/*Input type radio*/
    if (document.getElementById("avaliacao_cimetica_vt_s").checked) {
        VolanteTorcido = "s"
    } else if (document.getElementById("avaliacao_cimetica_vt_n").checked) {
        VolanteTorcido = "n"
    }else{VolanteTorcido = "nda"}

    console.log(DisturbioDeComportamento)
    console.log(EncontradoDeCapacete)
    console.log(PainelAvariado)
    console.log(EncontradoDeCinto)
    console.log(ParaBrisasAvariado)
    console.log(VolanteTorcido)
    console.log(CaminhandoNaCena)
    console.log(PainelAvariado)
   

    $.ajax({
        url: 'PHP/tabela-avaliacao-cinematica.php',
        method: 'POST',
        data: {
            DisturbioDeComportamento: DisturbioDeComportamento,
            EncontradoDeCapacete: EncontradoDeCapacete,
            EncontradoDeCinto: EncontradoDeCinto,
            ParaBrisasAvariado: ParaBrisasAvariado,
            VolanteTorcido: VolanteTorcido,
            CaminhandoNaCena: CaminhandoNaCena,
            PainelAvariado: PainelAvariado,
            Bombeiro: BombeiroAtual,
            Paciente: CpfPaciente
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });

}
function MaterialUtilizadosA(){
    var CheckBoxTXTA = document.getElementById("materiais_utilizadosA_input_txt");/*Input type text*/
    var CheckBoxTXTADiv = document.getElementById("materiais_utilizadosA_txt_div");
    var Text = document.getElementById("materiais_utilizadosA_txt");
    if(CheckBoxTXTA.checked){
        var OutroText = CheckBoxTXTADiv.value + ": " + Text.value;
    }else{var OutroText = "nda"};console.log(OutroText);  

    var CateterTpOculosCheckBox = document.getElementById("materiais_utilizadosA_cateter_tp_oculos"); /*Input type Checkbox e TXT*/
    var CateterTpOculosText = $("#materiais_utilizadosA_cateter_tp_oculos_txt").val();
    if(CateterTpOculosCheckBox.checked){
        var CateterTpOculos = "Catéter TP. óculos: " + CateterTpOculosText;
    }else{ var CateterTpOculos = "nda"};console.log(CateterTpOculos);

    var CompressaComumCheckBox = document.getElementById("materiais_utilizadosA_compressa_comum"); /*Input type Checkbox e TXT*/
    var CompressaComumText = $("#materiais_utilizadosA_compressa_comum_txt").val();
    if(CompressaComumCheckBox.checked){
        var CompressaComum = "Compressa Comum: " + CompressaComumText;
    }else{ var CompressaComum = "nda"};console.log(CompressaComum);

    var LuvasDescartaveisCheckBox = document.getElementById("materiais_utilizadosA_luvas_descartaveis"); /*Input type Checkbox e TXT*/
    var LuvasDescartaveisText = $("#materiais_utilizadosA_luvas_descartaveis_txt").val();
    if(LuvasDescartaveisCheckBox.checked){
        var LuvasDescartaveis = "Luvas Descartaveis: " + LuvasDescartaveisText;
    }else{ var LuvasDescartaveis = "nda"};console.log(LuvasDescartaveis);

    var MascarasDescCheckBox = document.getElementById("materiais_utilizadosA_mascaras_desc"); /*Input type Checkbox e TXT*/
    var MascarasDescText = $("#materiais_utilizadosA_mascaras_desc_txt").val();
    if(MascarasDescCheckBox.checked){
        var MascarasDesc = "Mascaras Descartaveis: " + MascarasDescText;
    }else{ var MascarasDesc = "nda"};console.log(MascarasDesc);

    var MantaAlumiadaCheckBox = document.getElementById("materiais_utilizadosA_manta_alumiada"); /*Input type Checkbox e TXT*/
    var MantaAlumiadaText = $("#materiais_utilizadosA_manta_alumiada_txt").val();
    if(MantaAlumiadaCheckBox.checked){
        var MantaAlumiada = "Manta Alumiada: " + MantaAlumiadaText;
    }else{ var MantaAlumiada = "nda"};console.log(MantaAlumiada);

    var PasDoDeaCheckBox = document.getElementById("materiais_utilizadosA_pas_do_dea"); /*Input type Checkbox e TXT*/
    var PasDoDeaText = $("#materiais_utilizadosA_pas_do_dea_txt").val();
    if(PasDoDeaCheckBox.checked){
        var PasDoDea = "Pás do DEA: " + PasDoDeaText;
    }else{ var PasDoDea = "nda"};console.log(PasDoDea);

    var SondaDeAspiracaoCheckBox = document.getElementById("materiais_utilizadosA_sonda_de_aspiracao"); /*Input type Checkbox e TXT*/
    var SondaDeAspiracaoText = $("#materiais_utilizadosA_sonda_de_aspiracao_txt").val();
    if(SondaDeAspiracaoCheckBox.checked){
        var SondaDeAspiracao = "Sonda de Aspiração: " + SondaDeAspiracaoText;
    }else{ var SondaDeAspiracao = "nda"};console.log(SondaDeAspiracao);

    var SoroFisiologicoCheckBox = document.getElementById("materiais_utilizadosA_soro_fisiologico"); /*Input type Checkbox e TXT*/
    var SoroFisiologicoText = $("#materiais_utilizadosA_soro_fisiologico_txt").val();
    if(SoroFisiologicoCheckBox.checked){
        var SoroFisiologico = "Soro Fisiológico: " + SoroFisiologicoText;
    }else{ var SoroFisiologico = "nda"};console.log(SoroFisiologico);

    
    var AtaduraCheckBox1 = document.getElementById("materiais_utilizadosA_ataduras");
    var AtaduraText1 = document.getElementById("materiais_utilizadosA_ataduras_txt");
    var Atadura1 = "";
    var AtaduraTamanho1 = "";
    if(AtaduraCheckBox1.checked){
        if(document.getElementById("atadura_8").checked){
            AtaduraTamanho1 = "8";
            Atadura1 = "Atadura " + AtaduraTamanho1 + ": " + AtaduraText1.value;
        }else if(document.getElementById("atadura_12")){
            AtaduraTamanho1 = "12"
            Atadura1 = "Atadura " + AtaduraTamanho1 + ": " + AtaduraText1.value;
        }else if(document.getElementById("atadura_20")){
            AtaduraTamanho1 = "20";
            Atadura1 = "Atadura " + AtaduraTamanho1 + ": " + AtaduraText1.value;
        }else{Atadura1 = "nda"};
    }else{Atadura1 = "nda"};console.log(Atadura1);

    var KitCheckBox1 = document.getElementById("materiais_utilizadosA_kit");
    var KitText1 = document.getElementById("materiais_utilizadosA_kit_txt");
    var Kit1 = "";
    var KitTamanho1 = "";
    if(KitCheckBox1.checked){
        if(document.getElementById("kits_h").checked){
            KitTamanho1 = "H";
            Kit1 = "Kit " + KitTamanho1 + ": " + KitText1.value;
        }else if(document.getElementById("kits_p")){
            KitTamanho1 = "P"
            Kit1 = "Kit " + KitTamanho1 + ": " + KitText1.value;
        }else if(document.getElementById("kits_q")){
            KitTamanho1 = "Q";
            Kit1 = "Kit " + KitTamanho1 + ": " + KitText1.value;
        }else{Kit1 = "nda"};
    }else{Kit1 = "nda"};console.log(Kit1);
   
    var TalaCheckBox1 = document.getElementById("materiais_utilizadosA_talas");
    var TalaText1 = document.getElementById("materiais_utilizadosA_talas_txt");
    var Tala1 = "";
    var TalaTamanho1 = "";
    if(TalaCheckBox1.checked){
        if(document.getElementById("talas_p").checked){
            TalaTamanho1 = "P";
            Tala1 = "Tala " + TalaTamanho1 + ": " + TalaText1.value;
        }else if(document.getElementById("talas_g")){
            TalaTamanho1 = "G"
            Tala1 = "Tala " + TalaTamanho1 + ": " + TalaText1.value;
        }else{Tala1 = "nda"};
    }else{Tala1 = "nda"};console.log(Tala1);

    $.ajax({
        url: 'PHP/tabela-material-utilizado-descartavel.php',
        method: 'POST',
        data: {
            OutroText: OutroText,
            CateterTpOculos: CateterTpOculos,
            CompressaComum: CompressaComum,
            LuvasDescartaveis: LuvasDescartaveis,
            MascarasDesc: MascarasDesc,
            MantaAlumiada: MantaAlumiada,
            PasDoDea: PasDoDea,
            SondaDeAspiracao: SondaDeAspiracao,
            SoroFisiologico: SoroFisiologico,
            Atadura1: Atadura1,
            Kit1: Kit1,
            Tala1: Tala1,
            Bombeiro:  BombeiroAtual,
            Paciente:CpfPaciente
        },
        dataType: 'json'
    }).done(function(){
       
    }).fail(function(){
       
    });
   

}
function AtaduraCheckboxDivNone(){ /*Input type DIV NONE*/


    var Atadura = document.getElementById("materiais_utilizadosA_ataduras");
    var DivAtadura = document.getElementById("div_atadura");
    var Tamanho8 = document.getElementById("atadura_8");/*Input type Radio*/
    var Tamanho12 = document.getElementById("atadura_12");/*Input type Radio*/
    var Tamanho20 = document.getElementById("atadura_20");/*Input type Radio*/
    if(Atadura.checked){
        DivAtadura.style.display = "flex";
    }else{
        DivAtadura.style.display = "none";
        Tamanho8.checked = false;/*Input type Radio*/
        Tamanho12.checked = false;/*Input type Radio*/
        Tamanho20.checked = false;/*Input type Radio*/
    };  
}
function KitCheckboxDivNone(){
    var Kit = document.getElementById("materiais_utilizadosA_kit");
    var DivKit = document.getElementById("div_kits");
    var TipoH = document.getElementById("kits_h");/*Input type Radio*/
    var TipoP  = document.getElementById("kits_p");/*Input type Radio*/
    var TipoQ  = document.getElementById("kits_q");/*Input type Radio*/
    if(Kit.checked){
        DivKit.style.display = "flex";
    }else{
        DivKit.style.display = "none";
        TipoH .checked = false;/*Input type Radio*/
        TipoP .checked = false;/*Input type Radio*/
        TipoQ .checked = false;/*Input type Radio*/
    };  
    
}

function TalasCheckboxDivNone(){
    var Talas = document.getElementById("materiais_utilizadosA_talas");
    var DivTalas = document.getElementById("div_talas");
    var TamanhoP = document.getElementById("talas_p");/*Input type Radio*/
    var TamanhoG = document.getElementById("talas_g");/*Input type Radio*/
    if(Talas.checked){
        DivTalas.style.display = "flex";
    }else{
        DivTalas.style.display = "none";
        TamanhoP.checked = false;/*Input type Radio*/
        TamanhoG.checked = false;/*Input type Radio*/
    };  

}

function TXTCheckboxDivNone(){ /*Input type DIV NONE*/

    var TXTA = document.getElementById("materiais_utilizadosA_input_txt");
    var DivTXTA = document.getElementById("materiais_utilizadosA_txt_div");
    if(TXTA.checked){
        DivTXTA.style.display = "flex";
    }else{
        DivTXTA.style.display = "none";
        DivTXTA.value = "";/*Input type Radio*/
    
    };  

}


function MaterialUtilizadosB(){

    var BaseEstabilizadorCheckBox = document.getElementById("base_estabilizador_mub"); 
    var BaseEstabilizadorText = $("#base_estabilizador_text_mub").val();
    if(BaseEstabilizadorCheckBox.checked){
        var BaseEstabilizador = "Base Estabilizador: " + BaseEstabilizadorText;
    }else{ var BaseEstabilizador = "nda"};console.log(BaseEstabilizador);



    var ColarCheckBox1 = document.getElementById("colar_n_mub");
    var ColarText1 = document.getElementById("colar_text_n_mub");
    var Colar1 = "";
    var ColarTamanho1 = "";
    if(ColarCheckBox1.checked){
        if(document.getElementById("n_colar_mub").checked){
            ColarTamanho1 = "N";
            Colar1 = "Colar " + ColarTamanho1 + ": " + ColarText1.value;
        }else if(document.getElementById("pp_colar_mub")){
            ColarTamanho1 = "PP"
            Colar1 = "Colar " + ColarTamanho1 + ": " + ColarText1.value;
        }else if(document.getElementById("p_colar_mub")){
            ColarTamanho1 = "P";
            Colar1 = "Colar " + ColarTamanho1 + ": " + ColarText1.value;
        }else{Colar1 = "nda"};
    }else{Colar1 = "nda"};console.log(Colar1);



    var ColarCheckBox2 = document.getElementById("colar_m_mub");
    var ColarText2 = document.getElementById("colar_m_text_mub");
    var ColarText2b = document.getElementById("text_colar_mub");
    var Colar2 = "";
    var ColarTamanho2 = "";
    if (ColarCheckBox2.checked){
        if (document.getElementById("m_colar_mub").checked) {
            ColarTamanho2 = "M";
            Colar2 = "Colar " + ColarTamanho2 + ": " + ColarText2.value;
        } else if (document.getElementById("g_colar_mub").checked) {
            ColarTamanho2 = "G";
            Colar2 = "Colar " + ColarTamanho2 + " " + ColarText2b.value + ": " + ColarText2.value;
        } else {
            Colar2 = "nda";
        }
    } else {
        Colar2 = "nda";
    }console.log(Colar2);



    var CoxinsStabCheckBox = document.getElementById("conxin_estabilizador_mub");
    var CoxinsText = document.getElementById("conxin_estabilizador_text_mub");
    if(CoxinsStabCheckBox.checked){
        var CoxinsStab = "Coxins Estabilizador: " + CoxinsText.value;
    }else{var CoxinsStab = "nda"};console.log(CoxinsStab);



    var KEDCheckBox = document.getElementById("ked_checkbox_mub");
    var KEDText = document.getElementById("ked_text_mub");
    if(KEDCheckBox.checked){
        if(document.getElementById("adul_mub").checked){
            var KED =  "KED Adulto: " + KEDText.value;
        }else if(document.getElementById("infa_mub").checked){
            var KED =  "KED Infantil: " + KEDText.value;
        }else{var KED = "nda"};
    }else{var KED = "nda"};console.log(KED);



    var MacaRigidaCheckbox = document.getElementById("maca_rigida_mub");
    var MacaRigidaText = document.getElementById("maca_rigita_text_mub");
    if(MacaRigidaCheckbox.checked){
        var MacaRigida = "Maca Rigida: " + MacaRigidaText.value;
    }else{MacaRigida = "nda"};console.log(MacaRigida);



    var TiranteAranhaCheckbox = document.getElementById("tirante_aranha_mub");
    var TiranteAranhaText = document.getElementById("tirante_aranha_text_mub");
    if(TiranteAranhaCheckbox.checked){
        var TiranteAranha = "Tirante Aranha: " + TiranteAranhaText.value;
    }else{TiranteAranha = "nda"};console.log(TiranteAranha);



    var TiranteCabecaCheckbox = document.getElementById("tirante_cabeca_mub");
    var TiranteCabecaText = document.getElementById("tirante_cabeca_text_mub");
    if(TiranteCabecaCheckbox.checked){
        var TiranteCabeca = "Tirante Cabeca: " + TiranteCabecaText.value;
    }else{TiranteCabeca = "nda"};console.log(TiranteCabeca);



    var SondaAspiracaoCheckBox = document.getElementById("soma_aspiracao_mub");
    var SondaASpiracaoText = document.getElementById("soma_aspiracao_text_mub");
    if(SondaAspiracaoCheckBox.checked){
        var SondaAspiracao = "Sonda Aspiração: " + SondaASpiracaoText.value;
    }else{ var SondaAspiracao = "nda"};console.log(SondaAspiracao);



    var CanulaCheckBox = document.getElementById("canula_mub");
    var CanulaText = document.getElementById("canula_text_mub");
    if(CanulaCheckBox.checked){
        var Canula = "Canula: " + CanulaText.value;
    }else{var Canula = "nda"};console.log(Canula);



    var MUBOutroCheckBox = document.getElementById("checkbox_text_mub");
    var MUBOutroText = document.getElementById("text_mub");
    var QTDMUBText = document.getElementById("text_text_mub");
    if(MUBOutroCheckBox.checked){
        var OutroMUB = MUBOutroText.value + ": " + QTDMUBText.value;
    }else{var OutroMUB = "nda"};console.log(OutroMUB);

    $.ajax({
        url: 'PHP/tabela-materiais-utilizados-deixados-hospital.php',
        method: 'POST',
            data: {
            BaseEstabilizador: BaseEstabilizador,
            Colar1: Colar1,
            Colar2: Colar2,
            CoxinsStab: CoxinsStab,
            KED: KED,
            MacaRigida: MacaRigida,
            TiranteAranha: TiranteAranha,
            TiranteCabeca: TiranteCabeca,
            SondaAspiracao: SondaAspiracao,
            Canula: Canula,
            OutroMUB: OutroMUB,
            Bombeiro: BombeiroAtual,
            Paciente: CpfPaciente
        },
        dataType: 'json'
    }).done(function(){
       
    }).fail(function(){
       
    });

}



function ExibirBaseEstab(){
    BaseEstabDisplayCheckBox = document.getElementById("base_estabilizador_mub");
    BaseEstabDisplayText1 = document.getElementById("base_estabilizador_text_mub");
    if(BaseEstabDisplayCheckBox.checked){
        BaseEstabDisplayText1.style.display = "flex";
    }else{
        BaseEstabDisplayText1.style.display = "none";
        BaseEstabDisplayText1.value = "";
    }
}
function ExibirColar1MUB(){
    var ColarDisplayCheckBox = document.getElementById("colar_n_mub");
    var ColarDisplayDiv = document.getElementById("exibir_div_colar1");
    var ColarDisplayRadio1 = document.getElementById("n_colar_mub");
    var ColarDisplayRadio2 = document.getElementById("pp_colar_mub");
    var ColarDisplayRadio3 = document.getElementById("p_colar_mub");
    var ColarDisplayText1 = document.getElementById("colar_text_n_mub");
    if(ColarDisplayCheckBox.checked){
        ColarDisplayDiv.style.display = "flex";
        ColarDisplayText1.style.display = "flex"
    }else{
        ColarDisplayRadio1.checked = false;
        ColarDisplayRadio2.checked = false;
        ColarDisplayRadio3.checked = false;
        ColarDisplayText1.value = "";
        ColarDisplayDiv.style.display = "none";
        ColarDisplayText1.style.display = "none"
    }
}
function ExibirColar2MUB(){
    var ColarDisplayCheckBox = document.getElementById("colar_m_mub");
    var ColarDisplayDiv = document.getElementById("exibir_div_colar2");
    var ColarDisplayRadio1 = document.getElementById("m_colar_mub");
    var ColarDisplayRadio2 = document.getElementById("g_colar_mub");
    var ColarDisplayRadio3 = document.getElementById("text_colar_mub");
    var ColarDisplayText1 = document.getElementById("colar_m_text_mub");
    if(ColarDisplayCheckBox.checked){
        ColarDisplayDiv.style.display = "flex";
        ColarDisplayText1.style.display = "flex"
    }else{
        ColarDisplayRadio1.checked = false;
        ColarDisplayRadio2.checked = false;
        ColarDisplayRadio3.checked = false;
        ColarDisplayText1.value = "";
        ColarDisplayDiv.style.display = "none";
        ColarDisplayText1.style.display = "none"
    }
}
function ExibirCoxinsEstab(){
    CoxinsEstabDisplayCheckBox = document.getElementById("conxin_estabilizador_mub");
    CoxinsEstabDisplayText1 = document.getElementById("conxin_estabilizador_text_mub");
    if(CoxinsEstabDisplayCheckBox.checked){
        CoxinsEstabDisplayText1.style.display = "flex";
    }else{
        CoxinsEstabDisplayText1.style.display = "none";
        CoxinsEstabDisplayText1.value = "";
    }
}
function ExibirKEDMUB(){
    var KEDDisplayCheckBox = document.getElementById("ked_checkbox_mub");
    var KEDDisplayDiv = document.getElementById("exibir_div_ked");
    var KEDDisplayRadio1 = document.getElementById("adul_mub");
    var KEDDisplayRadio2 = document.getElementById("infa_mub");
    var KEDDisplayText1 = document.getElementById("ked_text_mub");
    if(KEDDisplayCheckBox.checked){
        KEDDisplayDiv.style.display = "flex";
        KEDDisplayText1.style.display = "flex";
    }else{
        KEDDisplayDiv.style.display = "none";
        KEDDisplayText1.style.display = "none";
        KEDDisplayText1.value = "";
        KEDDisplayRadio1.checked = false;
        KEDDisplayRadio2.checked = false;
    }
}
function ExibirMacaRigida(){
    MacaRigidaDisplayCheckBox = document.getElementById("maca_rigida_mub");
    MacaRigidaDisplayText1 = document.getElementById("maca_rigita_text_mub");
    if(MacaRigidaDisplayCheckBox.checked){
        MacaRigidaDisplayText1.style.display = "flex";
    }else{
        MacaRigidaDisplayText1.style.display = "none";
        MacaRigidaDisplayText1.value = "";
    }
}
function ExibirTiranteAranha(){
    TiranteAranhaDisplayCheckBox = document.getElementById("tirante_aranha_mub");
    TiranteAranhaDisplayText1 = document.getElementById("tirante_aranha_text_mub");
    if(TiranteAranhaDisplayCheckBox.checked){
        TiranteAranhaDisplayText1.style.display = "flex";
    }else{
        TiranteAranhaDisplayText1.style.display = "none";
        TiranteAranhaDisplayText1.value = "";
    }
}
function ExibirTiranteCabeca(){
    TiranteCabecaDisplayCheckBox = document.getElementById("tirante_cabeca_mub");
    TiranteCabecaDisplayText1 = document.getElementById("tirante_cabeca_text_mub");
    if(TiranteCabecaDisplayCheckBox.checked){
        TiranteCabecaDisplayText1.style.display = "flex";
    }else{
        TiranteCabecaDisplayText1.style.display = "none";
        TiranteCabecaDisplayText1.value = "";
    }
}
function ExibirSondaAsp(){
    SondaAspDisplayCheckBox = document.getElementById("soma_aspiracao_mub");
    SondaAspDisplayText1 = document.getElementById("soma_aspiracao_text_mub");
    if(SondaAspDisplayCheckBox.checked){
        SondaAspDisplayText1.style.display = "flex";
    }else{
        SondaAspDisplayText1.style.display = "none";
        SondaAspDisplayText1.value = "";
    }
}
function ExibirCanula(){
    CanulaDisplayCheckBox = document.getElementById("canula_mub");
    CanulaDisplayText1 = document.getElementById("canula_text_mub");
    if(CanulaDisplayCheckBox.checked){
        CanulaDisplayText1.style.display = "flex";
    }else{
        CanulaDisplayText1.style.display = "none";
        CanulaDisplayText1.value = "";
    }
}
function ExibirOutroMUB(){
    CanulaDisplayCheckBox = document.getElementById("checkbox_text_mub");
    CanulaDisplayText1 = document.getElementById("text_mub");
    CanulaDisplayText2 = document.getElementById("text_text_mub");
    if(CanulaDisplayCheckBox.checked){
        CanulaDisplayText1.style.display = "flex";
        CanulaDisplayText2.style.display = "flex";
    }else{
        CanulaDisplayText1.style.display = "none";
        CanulaDisplayText2.style.display = "none";
        CanulaDisplayText1.value = "";
        CanulaDisplayText2.value = "";
    }
}
function ObservacoesImportantes(){
    var ObservacoesImportantesText = document.getElementById("obsdiv");
    if(ObservacoesImportantesText.textContent !== ""){
        var TextoDentroObs = ObservacoesImportantesText.textContent;
    }else{
        TextoDentroObs = "nda";
    }console.log(TextoDentroObs);

    $.ajax({
        url: 'PHP/tabela-observacoes.php',
        method: 'POST',
        data: {
            TextoDentroObs: TextoDentroObs,
            Bombeiro: BombeiroAtual,
            Paciente: CpfPaciente
        },
        dataType: 'json'
    }).done(function(){
       
    }).fail(function(){
       
    });
    
}
function SelecionarImagensObj() {
    // Cria um input de arquivo oculto
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';

    // Adiciona um ouvinte de eventos de mudança no input de arquivo
    input.addEventListener('change', function () {
      var file = input.files[0];

      if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
          var image = new Image();
          image.src = e.target.result;
          image.width = 100;
          image.classList.add('imagem-obj'); // Adiciona a classe imagem-obj

          var divImagensObj = document.getElementById('div_imagens_obj');
          divImagensObj.appendChild(image);

          // Adiciona um ouvinte de evento de duplo clique para remover a imagem
          image.addEventListener('dblclick', function () {
            divImagensObj.removeChild(image);
          });
        };

        reader.readAsDataURL(file);
      }
    });

    // Dispara um clique no input de arquivo para abrir o seletor de arquivo
    input.click();
  }

  function ObjetosRecolhidos(){
    console.clear();
    var ObjetosRecolhidosText = document.getElementById("objescolhido_div");
    if(ObjetosRecolhidosText.textContent !== ""){
        var TextoDentroObj = ObjetosRecolhidosText.textContent;
    }else{
        TextoDentroObj = "nda";
    }console.log(TextoDentroObj);
    
    $.ajax({
        url: 'PHP/tabela-texto-obj-recolhidos.php',
        method: 'POST',
        data: {
            TextoDentroObj: TextoDentroObj,
            Paciente: CpfPaciente,
            Bombeiro: BombeiroAtual
        },
        dataType: 'json'
    }).done(function() {
        alert("alguma coisa deu!!");
    });
};

var base64ImagesObj = [];

function SalvarImagensObj() {

    // Limpe o console
    console.clear();

    // Limpe a variável base64ImagesObj
    base64ImagesObj = [];

    // Selecione a div com o ID "div_imagens_obj"
    var divImagensObj = document.getElementById("div_imagens_obj");

    // Encontre todas as tags <img> dentro dessa div
    var imagens = divImagensObj.querySelectorAll("img");

    // Para cada tag <img>, obtenha o valor do atributo src e adicione-o ao array
    imagens.forEach(function(imagem) {
        var src = imagem.getAttribute("src");
        base64ImagesObj.push(src); 

        // Exibir os valores completos das imagens
        console.log(src);
    });

    async function enviarImagens() {
        await new Promise(resolve => setTimeout(resolve, 3000));
        for (var i = 0; i < base64ImagesObj.length; i++) {
            var imagemBase64 = base64ImagesObj[i];
            console.log("Enviando imagem " + (i + 1) + " de " + base64ImagesObj.length);
    
            $.ajax({
                url: 'PHP/tabela-imagem-obj-recolhido.php',
                method: 'POST',
                data: {
                    imagens: imagemBase64,
                    Bombeiro: BombeiroAtual,
                    Paciente: CpfPaciente
                },
                dataType: 'json'
            });
        }
            // Exibir os valores resumidos das imagens
            console.log(base64ImagesObj);
    }
    
    // Chame a função async
    enviarImagens();
    
    
}