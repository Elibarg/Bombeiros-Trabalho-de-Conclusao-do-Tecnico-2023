function dividirTexto(str, chunkSize) {
   var chunks = [];
   for (var i = 0; i < str.length; i += chunkSize) {
     chunks.push(str.slice(i, i + chunkSize));
   }
   return chunks;
 }
function DadosPDF(valor_id_ficha, valor_id_bombeiro){
   console.clear();

   {//VARIAVEIS GLOBAIS
      var id = valor_id_ficha;
      var idBombeiro = valor_id_bombeiro;
      var imagem = [];
   }

   {//OBTEM OS ARQUIVOS DAS IMAGENS

      {//IMAGEM DO TRAUMA
      $.ajax({
         url: 'PHP/pdf-imagem-trauma.php',
         method: 'GET',
         data: {
            id: id
         },
         dataType: 'json'
      }).done(function(data){
         data.forEach((item) => {
            imagem.push(item.trauma_img);
          })
          imagemDaAssinatura();
      }).fail(function(errorThrown) {
            console.log(errorThrown);
      });
      }

      function imagemDaAssinatura(){
      $.ajax({
         url: 'PHP/pdf-imagem-assinatura.php',
         method: 'GET',
         data: {
            id: id
         },
         dataType: 'json'
      }).done(function(data){
         data.forEach((item) => {
            imagem.push(item.assinatura_recusa);
          })
          imagemDosObjetosRecolhidos();
      }).fail(function(errorThrown) {
            console.log(errorThrown);
      });
      }

      function imagemDosObjetosRecolhidos(){
         $.ajax({
            url: 'PHP/pdf-imagem-objetos.php',
            method: 'GET',
            data: {
                id: id
            },
            dataType: 'json'
        }).done(function(data) {
         data.forEach((item) => {
            imagem.push(item.imagem);
        });
        
        }).fail(function(errorThrown) {
            console.log(errorThrown);
        });
        
      }
      
      console.log(imagem);
   }

   setTimeout(() => {//ESPERO 1 SEGUNDO PARA EXECUTAR O PDF
      executarPDF();
    }, 1000);
    
    function executarPDF(){
      new Vue({//CODIGO DO PDF
         vuetify: new Vuetify(),
         data() {
           return {
             additionalInfo: "",
             imagem: imagem,
           };
         },
         created() {
           this.obterDados();
         },
         methods: {
           obterDados(){
             console.log("Paciente: " + id);

             $.ajax({
                type: 'GET',
                url: 'PHP-PDF/obterDados.php',
                dataType: 'json',
                data: {
                   id: id,
                   idBombeiro: idBombeiro
                },
                success: (data) => {
                  console.log(data)
                   data.forEach((item) => {
                      this.additionalInfo += "Bombeiro responsável: " + item.nome_cadastro + "\n";
                      this.additionalInfo += "" + "\n";
                      this.additionalInfo += "" + "\n";
                      this.additionalInfo += "Paciente" + "\n";
                      this.additionalInfo += "" + "\n";
                      this.additionalInfo += "Data: " + item.data_paciente + "\n";
                      this.additionalInfo += "RG/CPF: " + item.rg_cpf_paciente + "\n";
                      this.additionalInfo += "Idade: " + item.idade_paciente + "\n";
                      this.additionalInfo += "Nome: " + item.nome_paciente + "\n";
                      this.additionalInfo += "Sexo: " + item.sexo_paciente + "\n";
                      this.additionalInfo += "Nome do Hospital: " + item.nome_hospital_paciente + "\n";
                      this.additionalInfo += "Fone Paciente: " + item.fone_paciente + "\n";
                      this.additionalInfo += "Acompanhante: " + item.acompanhante_paciente	 + "\n";
                      this.additionalInfo += "Idade do Acompanhante: " + item.idade_acompanhante_paciente + "\n";
                      this.additionalInfo += "Local do acidente: " + item.local_ocorrencia_paciente + "\n";
                      this.additionalInfo += "Numero Usb: " + item.n_usb_paciente	 + "\n";
                      this.additionalInfo += "Codigo Ur: " + item.cod_ur_paciente + "\n";
                      this.additionalInfo += "Numero da Ocorrência: " + item.n_ocorr_paciente + "\n";
                      this.additionalInfo += "Código ps: " + item.cod_ps_paciente	 + "\n";
                      this.additionalInfo += "Desp: " + item.desp_paciente	+ "\n";
                      this.additionalInfo += "H.CH: " + item.h_ch_paciente	+ "\n";
                      this.additionalInfo += "Km final: " + item.km_final_paciente	+ "\n";
                      this.additionalInfo += "Código sia/sus: " + item.cod_sia_sus_paciente	 + "\n";
                     //  this.additionalInfo += "" + item.exemplo + "\n";
                     $.ajax({
                       type: 'GET',
                       url: 'PHP-PDF/emergencias.php',
                       dataType: 'json',
                       data: {
                          id: id
                       },
                       success: (data) => {
                          data.forEach((item) => {
                           this.additionalInfo += "-------" + "\n";
                           this.additionalInfo += "Emergências" + "\n";
                           this.additionalInfo += "" + "\n";
                           texto = item.tipo_emergencia;
                           var tamanhoParte = 40;
                           // Divida o texto em partes
                           var partes = dividirTexto(texto, tamanhoParte);
                           // Concatene as partes usando uma quebra de linha
                           var texto = partes.join('\n'); 
                           this.additionalInfo += "Emergencias: " + texto + "\n";
                            //  this.additionalInfo += "" + item.exemplo + "\n";
                            $.ajax({
                               type: 'GET',
                               url: 'PHP-PDF/forma_conducao.php',
                               dataType: 'json',
                               data: {
                                  id: id
                               },
                               success: (data) => {
                                  data.forEach((item) => {
                                    this.additionalInfo += "-------" + "\n";
                                    this.additionalInfo += "Forma de Condução" + "\n";
                                    this.additionalInfo += "" + "\n";
                                     this.additionalInfo += "Condução: " + item.conducao + "\n";
                                     this.additionalInfo += "A vitima era: " + item.forma_conducao + "\n";
                                    //  this.additionalInfo += "" + item.exemplo + "\n";
                                    $.ajax({
                                     type: 'GET',
                                     url: 'PHP-PDF/decisao_transporte.php',
                                     dataType: 'json',
                                     data: {
                                        id: id
                                     },
                                     success: (data) => {
                                        data.forEach((item) => {
                                          this.additionalInfo += "-------" + "\n";
                                          this.additionalInfo += "Decisão de Transporte" + "\n";
                                          this.additionalInfo += "" + "\n";
                                           this.additionalInfo += "MDT: " + item.MDT + "\n";
                                           this.additionalInfo += "S1DT: " + item.S1DT + "\n";
                                           this.additionalInfo += "S2DT: " + item.S2DT + "\n";
                                           this.additionalInfo += "S3DT: " + item.S3DT + "\n";
                                           this.additionalInfo += "Demante DT: " + item.DemanteDT + "\n";
                                           this.additionalInfo += "Decisão De Transporte: " + item.DecisaoDeTransporteDt + "\n";
                                          //  this.additionalInfo += "" + item.exemplo + "\n";
                                          $.ajax({
                                           type: 'GET',
                                           url: 'PHP-PDF/problemas_suspeitos.php',
                                           dataType: 'json',
                                           data: {
                                              id: id
                                           },
                                           success: (data) => {
                                              data.forEach((item) => {
                                                this.additionalInfo += "-------" + "\n";
                                                this.additionalInfo += "Problemas Suspeitos" + "\n";
                                                this.additionalInfo += "" + "\n";
                                                 this.additionalInfo += "Psiquiatrico: " + item.Psiquiatrico + "\n";
                                                 this.additionalInfo += "Respiratório: " + item.Respiratorio + "\n";
                                                 this.additionalInfo += "Diabete: " + item.Diabete + "\n";
                                                 this.additionalInfo += "Obsterico: " + item.Obsterico + "\n";
                                                 this.additionalInfo += "Transporte: " + item.Transporte + "\n";
                                                 this.additionalInfo += "Outro: " + item.Outro + "\n";
                                                //  this.additionalInfo += "" + item.exemplo + "\n";
                                                $.ajax({
                                                 type: 'GET',
                                                 url: 'PHP-PDF/sinais_vitais.php',
                                                 dataType: 'json',
                                                 data: {
                                                    id: id
                                                 },
                                                 success: (data) => {
                                                    data.forEach((item) => {
                                                      this.additionalInfo += "-------" + "\n";
                                                      this.additionalInfo += "Sinais Vitais" + "\n";
                                                      this.additionalInfo += "" + "\n";
                                                       this.additionalInfo += "Pressão Arterial: " + item.PressaoArterial + "\n";
                                                       this.additionalInfo += "Pulso: " + item.Pulso + "\n";
                                                       this.additionalInfo += "SegSv: " + item.SegSv + "\n";
                                                       this.additionalInfo += "Respiração: " + item.Respiracao + "\n";
                                                       this.additionalInfo += "Temperatura: " + item.Temperatura + "\n";
                                                       this.additionalInfo += "Anormal: " + item.Anormal + "\n";
                                                      //  this.additionalInfo += "" + item.exemplo + "\n";
                                                      $.ajax({
                                                       type: 'GET',
                                                       url: 'PHP-PDF/localizacao_traumas.php',
                                                       dataType: 'json',
                                                       data: {
                                                          id: id
                                                       },
                                                       success: (data) => {
                                                          data.forEach((item) => {
                                                            this.additionalInfo += "-------" + "\n";
                                                            this.additionalInfo += "Localização dos Traumas" + "\n";
                                                            this.additionalInfo += "" + "\n";
                                                             this.additionalInfo += "Ferimentos: " + item.texto_trauma + "\n";
                                                             this.additionalInfo += "Queimadura: " + item.queimadura + "\n";
                                                             this.additionalInfo += "SegSv: " + item.SegSv + "\n";
                                                             //this.additionalInfo += "Trauma:" + item.trauma_img + "\n";
                                                            //  this.additionalInfo += "" + item.exemplo + "\n";
                                                            $.ajax({
                                                             type: 'GET',
                                                             url: 'PHP-PDF/objetos_recolhidos.php',
                                                             dataType: 'json',
                                                             data: {
                                                                id: id
                                                             },
                                                             success: (data) => {
                                                                data.forEach((item) => {
                                                                  this.additionalInfo += "-------" + "\n";
                                                                  this.additionalInfo += "Objeto Recolhidos" + "\n";
                                                                  this.additionalInfo += "" + "\n";
                                                                   this.additionalInfo += "Objeto Recolhido: " + item.TextoDentroObj + "\n";
                                                                   
                                                                  //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                  $.ajax({
                                                                   type: 'GET',
                                                                   url: 'PHP-PDF/sinais_e_sintomas.php',
                                                                   dataType: 'json',
                                                                   data: {
                                                                      id: id
                                                                   },
                                                                   success: (data) => {
                                                                      data.forEach((item) => {
                                                                        this.additionalInfo += "-------" + "\n";
                                                                        this.additionalInfo += "Sinais e Sintomas" + "\n";
                                                                        this.additionalInfo += "" + "\n";
                                                                        texto = item.TodosOsValoresSeS;
                                                                        var tamanhoParte = 40;
                                                                        // Divida o texto em partes
                                                                        var partes = dividirTexto(texto, tamanhoParte);
                                                                        // Concatene as partes usando uma quebra de linha
                                                                        var texto = partes.join('\n');                                                                       
                                                                         this.additionalInfo += "Sinais e Sintomas: " + texto + "\n";
                                                                        $.ajax({
                                                                         type: 'GET',
                                                                         url: 'PHP-PDF/procedimentos_efetuados.php',
                                                                         dataType: 'json',
                                                                         data: {
                                                                            id: id
                                                                         },
                                                                         success: (data) => {
                                                                            data.forEach((item) => {
                                                                              this.additionalInfo += "-------" + "\n";
                                                                              this.additionalInfo += "Procedimentos Efetuados" + "\n";
                                                                              this.additionalInfo += "" + "\n";
                                                                              texto = item.TodosOsValoresPef;
                                                                              var tamanhoParte = 40;
                                                                              // Divida o texto em partes
                                                                              var partes = dividirTexto(texto, tamanhoParte);
                                                                              // Concatene as partes usando uma quebra de linha
                                                                              var texto = partes.join('\n'); 
                                                                               this.additionalInfo += "Procedimentos Efetuados: " + texto + "\n";
                                                                               
                                                                              //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                              $.ajax({
                                                                               type: 'GET',
                                                                               url: 'PHP-PDF/material_utilizados_descartavel.php',
                                                                               dataType: 'json',
                                                                               data: {
                                                                                  id: id
                                                                               },
                                                                               success: (data) => {
                                                                                  data.forEach((item) => {
                                                                                    this.additionalInfo += "-------" + "\n";
                                                                                    this.additionalInfo += "Materiais Utilizados Descartável" + "\n";
                                                                                    this.additionalInfo += "" + "\n";
                                                                                     this.additionalInfo += "Atadura: " + item.Atadura1 + "\n";
                                                                                     this.additionalInfo += "Catéter TP. óculos: " + item.CateterTpOculos + "\n";
                                                                                     this.additionalInfo += "Compressa Comum: " + item.CompressaComum + "\n";
                                                                                     this.additionalInfo += "Kit's: " + item.Kit1 + "\n";
                                                                                     this.additionalInfo += "Luvas Descartáveis: " + item.LuvasDescartaveis + "\n";
                                                                                     this.additionalInfo += "Mascaras Descartáveis: " + item.MascarasDesc + "\n";
                                                                                     this.additionalInfo += "Manta Alumiada: " + item.MantaAlumiada + "\n";
                                                                                     this.additionalInfo += "Pás Do Dea: " + item.PasDoDea + "\n";
                                                                                     this.additionalInfo += "Sonda De Aspiração: " + item.SondaDeAspiracao + "\n";
                                                                                     this.additionalInfo += "Soro Fisiológico: " + item.SoroFisiologico + "\n";
                                                                                     this.additionalInfo += "Talas: " + item.Tala1 + "\n";
                                                                                     this.additionalInfo += "Outro: " + item.OutroText + "\n";
                                                                                    //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                    $.ajax({
                                                                                     type: 'GET',
                                                                                     url: 'PHP-PDF/materiais_utilizados_deixados_hospital.php',
                                                                                     dataType: 'json',
                                                                                     data: {
                                                                                        id: id
                                                                                     },
                                                                                     success: (data) => {
                                                                                        data.forEach((item) => {
                                                                                          this.additionalInfo += "-------" + "\n";
                                                                                          this.additionalInfo += "Materiais Utilizados Deixados Hospital" + "\n";
                                                                                          this.additionalInfo += "" + "\n";
                                                                                           this.additionalInfo += "Base Estabilizador: " + item.BaseEstabilizador + "\n";
                                                                                           this.additionalInfo += "Colar1: " + item.Colar1 + "\n";
                                                                                           this.additionalInfo += "Colar2: " + item.Colar2 + "\n";
                                                                                           this.additionalInfo += "Kit's: " + item.Kit1 + "\n";
                                                                                           this.additionalInfo += "Coxins Estabiliza: " + item.CoxinsStab + "\n";
                                                                                           this.additionalInfo += "KED: " + item.KED + "\n";
                                                                                           this.additionalInfo += "Maca Rigida: " + item.MacaRigida + "\n";
                                                                                           this.additionalInfo += "Tirante Aranha: " + item.TiranteAranha + "\n";
                                                                                           this.additionalInfo += "Sonda Aspiração: " + item.SondaAspiracao + "\n";
                                                                                           this.additionalInfo += "Cânula: " + item.Canula + "\n";
                                                                                           this.additionalInfo += "Outro: " + item.OutroMUB + "\n";
                                                                                          //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                          $.ajax({
                                                                                           type: 'GET',
                                                                                           url: 'PHP-PDF/anamnese.php',
                                                                                           dataType: 'json',
                                                                                           data: {
                                                                                              id: id
                                                                                           },
                                                                                           success: (data) => {
                                                                                              data.forEach((item) => {
                                                                                                this.additionalInfo += "-------" + "\n";
                                                                                                this.additionalInfo += "Anamnese" + "\n";
                                                                                                this.additionalInfo += "" + "\n";
                                                                                                 this.additionalInfo += "O que aconteceu(sinais e sintomas): " + item.ocorrido_anamnese + "\n";
                                                                                                 this.additionalInfo += "Aconteceu outras vezes?" + item.ocorrencia_anamnese + "\n";
                                                                                                 this.additionalInfo += "A quanto tempo isso aconteceu? " + item.aconteceu_anamnese + "\n";
                                                                                                 this.additionalInfo += "Possui algum problema de saúde? " + item.problema_saude_anamnese + "\n";
                                                                                                 this.additionalInfo += "Faz uso de medicação? " + item.medicamento_anamnese + "\n";
                                                                                                 this.additionalInfo += "Alérgico a algo? " + item.alergia_anamnese + "\n";
                                                                                                 this.additionalInfo += "Ingeriu alimento ou liquido em 6h? " + item.liquido_anamnese + "\n";
                                                                                                //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                                $.ajax({
                                                                                                   type: 'GET',
                                                                                                   url: 'PHP-PDF/anamnese_gestacional.php',
                                                                                                   dataType: 'json',
                                                                                                   data: {
                                                                                                      id: id
                                                                                                   },
                                                                                                   success: (data) => {
                                                                                                      data.forEach((item) => {
                                                                                                         this.additionalInfo += "-------" + "\n";
                                                                                                         this.additionalInfo += "Anamnese Gestacional" + "\n";
                                                                                                         this.additionalInfo += "" + "\n";
                                                                                                         this.additionalInfo += "Periodo de gestação: " + item.periodo_gestacao + "\n";
                                                                                                         this.additionalInfo += "Fez pré-natal?" + item.pre_natal + "\n";
                                                                                                         this.additionalInfo += "Nome do médico" + item.nome_medico + "\n";
                                                                                                         this.additionalInfo += "Existe possibilidade de complicações?" + item.complicacoes + "\n";
                                                                                                         this.additionalInfo += "É o primeiro filho?" + item.filhos + "\n";
                                                                                                         this.additionalInfo += "Contrações Duração:" + item.contracao_duracao + "\n";
                                                                                                         this.additionalInfo += "Contrações Intervalo:" + item.contracao_intervalo + "\n";
                                                                                                         this.additionalInfo += "Sente pressão na região do quadril ou vontade de evacuar?" + item.evacuacao + "\n";
                                                                                                         this.additionalInfo += "Já houve ruptura da bolsa?" + item.ruptura_bolsa + "\n";
                                                                                                         this.additionalInfo += "Foi feito inspeção visual?" + item.inspecao_visual + "\n";
                                                                                                         this.additionalInfo += "Parto realizado?" + item.parto_realizado + "\n";
                                                                                                         this.additionalInfo += "Hora do nascimento:" + item.hora_nascimento + "\n";
                                                                                                         this.additionalInfo += "Sexo do bebê:" + item.sexo_bebe + "\n";
                                                                                                         this.additionalInfo += "Nome do bebê:" + item.nome_bebe + "\n";
                                                                                                        //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                                      });
                                                                                                   },
                                                                                                   error: function (xhr, status, error) {
                                                                                                      console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                                                   }
                                                                                                });
                                                                                                $.ajax({
                                                                                                 type: 'GET',
                                                                                                 url: 'PHP-PDF/termo_recusa.php',
                                                                                                 dataType: 'json',
                                                                                                 data: {
                                                                                                    id: id
                                                                                                 },
                                                                                                 success: (data) => {
                                                                                                    data.forEach((item) => {
                                                                                                      this.additionalInfo += "-------" + "\n";
                                                                                                      this.additionalInfo += "TERMO DE RECUSA DE ATENDIMENTO E/OU TRANSPORTE" + "\n";
                                                                                                      this.additionalInfo += "" + "\n";
                                                                                                      texto = item.termo_recusa; 
                                                                                                      var tamanhoParte = 60;
   
                                                                                                      // Divida o texto em partes
                                                                                                      var partes = dividirTexto(texto, tamanhoParte);
                                                                                                      // Concatene as partes usando uma quebra de linha
                                                                                                      var texto = partes.join('\n');
                                                                                                       this.additionalInfo += "Termo Recusa: " + texto + "\n";
                                                                                                       //this.additionalInfo += "ASS:" + item.assinatura_recusa + "\n";
                                                                                                       this.additionalInfo += "Testemunha: " + item.testemunha_recusa + "\n";
                                                                                                       this.additionalInfo += "Doc:" + item.doc_recusa + "\n";
                                                                                                       this.additionalInfo += "Testemunha(2): " + item.testemunha_recusa2 + "\n";
                                                                                                       this.additionalInfo += "Doc(2):" + item.doc_recusa2 + "\n";
                                                                                                      //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                                      $.ajax({
                                                                                                       type: 'GET',
                                                                                                       url: 'PHP-PDF/observacoes_importantes.php',
                                                                                                       dataType: 'json',
                                                                                                       data: {
                                                                                                          id: id
                                                                                                       },
                                                                                                       success: (data) => {
                                                                                                          data.forEach((item) => {
                                                                                                            this.additionalInfo += "-------" + "\n";
                                                                                                            this.additionalInfo += "Observações Importantes" + "\n";
                                                                                                            this.additionalInfo += "" + "\n";
                                                                                                             this.additionalInfo += "Observações: " + item.observacoes_importantes + "\n";
                                                                                                            //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                                            $.ajax({
                                                                                                             type: 'GET',
                                                                                                             url: 'PHP-PDF/avaliacao_cinematica.php',
                                                                                                             dataType: 'json',
                                                                                                             data: {
                                                                                                                id: id
                                                                                                             },
                                                                                                             success: (data) => {
                                                                                                                data.forEach((item) => {
                                                                                                                  this.additionalInfo += "-------" + "\n";
                                                                                                                  this.additionalInfo += "Avaliação Cinemática" + "\n";
                                                                                                                  this.additionalInfo += "" + "\n";
                                                                                                                   this.additionalInfo += "Distúrbio de comportamento: " + item.DisturbioDeComportamento + "\n";
                                                                                                                   this.additionalInfo += "Encontrado de capacete: " + item.EncontradoDeCapacete + "\n";
                                                                                                                   this.additionalInfo += "Encontrado de cinto: " + item.EncontradoDeCinto + "\n";
                                                                                                                   this.additionalInfo += "Para-brisas avariado: " + item.ParaBrisasAvariado + "\n";
                                                                                                                   this.additionalInfo += "Caminhando na cena: " + item.CaminhandoNaCena + "\n";
                                                                                                                   this.additionalInfo += "Painel avariado: " + item.PainelAvariado + "\n";
                                                                                                                   this.additionalInfo += "Volante torcido: " + item.VolanteTorcido + "\n";
                                                                                                                  //  this.additionalInfo += "" + item.exemplo + "\n";
                                                                                                                  
                                                                                                                });
                                                                                                             },
                                                                                                             error: function (xhr, status, error) {
                                                                                                                console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                                                             }
                                                                                                          });
                                                                                                          });
                                                                                                       },
                                                                                                       error: function (xhr, status, error) {
                                                                                                          console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                                                       }
                                                                                                    });
                                                                                                    
                                                                                                    });
                                                                                                 },
                                                                                                 error: function (xhr, status, error) {
                                                                                                    console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                                                 }
                                                                                              });
                                                                                              });
                                                                                           },
                                                                                           error: function (xhr, status, error) {
                                                                                              console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                                           }
                                                                                        });
                                                                                        });
                                                                                     },
                                                                                     error: function (xhr, status, error) {
                                                                                        console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                                     }
                                                                                  });
                                                                                  });
                                                                               },
                                                                               error: function (xhr, status, error) {
                                                                                  console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                               }
                                                                            });
                                                                            });
                                                                         },
                                                                         error: function (xhr, status, error) {
                                                                            console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                         }
                                                                      });
                                                                      });
                                                                   },
                                                                   error: function (xhr, status, error) {
                                                                      console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                                   }
                                                                });
                                                                });
                                                             },
                                                             error: function (xhr, status, error) {
                                                                console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                             }
                                                          });
                                                          });
                                                       },
                                                       error: function (xhr, status, error) {
                                                          console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                       }
                                                    });
                                                    });
                                                 },
                                                 error: function (xhr, status, error) {
                                                    console.error("Erro na requisição AJAX: " + status + " - " + error);
                                                 }
                                              });
                                              });
                                           },
                                           error: function (xhr, status, error) {
                                              console.error("Erro na requisição AJAX: " + status + " - " + error);
                                           }
                                        });
                                        });
                                     },
                                     error: function (xhr, status, error) {
                                        console.error("Erro na requisição AJAX: " + status + " - " + error);
                                     }
                                  });
                                  });
                               },
                               error: function (xhr, status, error) {
                                  console.error("Erro na requisição AJAX: " + status + " - " + error);
                               }
                            });
                            $.ajax({
                             type: 'GET',
                             url: 'PHP-PDF/avaliacao_paciente_maior.php',
                             dataType: 'json',
                             data: {
                                id: id
                             },
                             success: (data) => {
                                data.forEach((item) => {
                                 this.additionalInfo += "-------" + "\n";
                                 this.additionalInfo += "Avaliação Do Paciente Maior" + "\n";
                                 this.additionalInfo += "" + "\n";
                                   this.additionalInfo += "Abertura Ocular(Maior): " + item.AberturaOcular + "\n";
                                   this.additionalInfo += "Resposta Verbal(Maior): " + item.RespostaVerbal + "\n";
                                   this.additionalInfo += "Resposta Motora(Maior): " + item.RespostaMotora + "\n";
                                   this.additionalInfo += "Valor: " + item.valor_gcs + "\n";
                                   //  this.additionalInfo += "" + item.exemplo + "\n";
                                });
                             },
                             error: function (xhr, status, error) {
                                console.error("Erro na requisição AJAX: " + status + " - " + error);
                             }
                          });
                          });
                          $.ajax({
                            type: 'GET',
                            url: 'PHP-PDF/avaliacao_paciente_menor.php',
                            dataType: 'json',
                            data: {
                               id: id
                            },
                            success: (data) => {
                               data.forEach((item) => {
                                 this.additionalInfo += "-------" + "\n";
                                 this.additionalInfo += "Avaliação Do Paciente Menor" + "\n";
                                 this.additionalInfo += "" + "\n";
                                  this.additionalInfo += "Abertura Ocular(Menor): " + item.AberturaOcularMe + "\n";
                                  this.additionalInfo += "Resposta Verbal(Menor): " + item.RespostaVerbalMe + "\n";
                                  this.additionalInfo += "Resposta Motora(Menor): " + item.RespostaMotoraMe + "\n";
                                  this.additionalInfo += "Valor: " + item.valor_gcs + "\n";
                                 //  this.additionalInfo += "" + item.exemplo + "\n";
                                
                               });
                            },
                            error: function (xhr, status, error) {
                               console.error("Erro na requisição AJAX: " + status + " - " + error);
                            }
                         });
                       },
                       error: function (xhr, status, error) {
                          console.error("Erro na requisição AJAX: " + status + " - " + error);
                       }
                    });
                   });
                },
                error: function (xhr, status, error) {
                   console.error("Erro na requisição AJAX: " + status + " - " + error);
                } 
             });
             
             setTimeout(() => {
                this.generatePDF();
              }, 3000);
          },
          
          generatePDF() {
            const doc = new jsPDF({
              orientation: "portrait",
              unit: "in",
              format: "letter",
            });
          
            // Adiciona texto ao PDF
            this.addTextToPDF(doc);
          
            // Adiciona imagens ao PDF
            this.addImagesToPDF(doc);
          
            // Salva o arquivo PDF com o nome 'Ficha_de_Bombeiro.pdf'
            doc.save("Ficha_de_Bombeiro.pdf");
          },
          
          addTextToPDF(doc) {
            const lines = this.additionalInfo.split('\n');
            const lineHeight = 12 / 72; // Altura de linha em polegadas
            const pageHeight = 11; // Altura da página em polegadas
            let y = 1; // Posição Y inicial
          
            lines.forEach(line => {
              // Verifica se a próxima linha cabe na página atual
              if (y + lineHeight > pageHeight) {
                // Adiciona uma nova página
                doc.addPage();
                y = 1;
              }
          
              // Adiciona a linha ao PDF
              doc.setFontSize(12);
              doc.text(line, 0.5, y);
              y += lineHeight;
            });
          },
          
          addImagesToPDF(doc) {
            // Define as coordenadas iniciais
            let xCoordinate = 1;
            let imageYCoordinate = 1; // Inicia na parte superior da página
            
            // Define a largura padrão para todas as imagens
            const imgWidth = 2;
            
            doc.addPage();
            imageYCoordinate = 1;
            
            // Define uma variável para controlar o número de imagens processadas
            let imagensProcessadas = 0;
            
            // Itera sobre as imagens no vetor
            for (const imagem of this.imagem) {
              // Obtém as propriedades da imagem
              const imgProps = doc.getImageProperties(imagem);
              
              // Calcula a altura proporcional com base na largura padrão
              const imgHeight = imgProps.height * imgWidth / imgProps.width;
              
              // Verifica se a próxima imagem cabe na página atual
              if (imageYCoordinate + imgHeight > doc.internal.pageSize.height) {
                // Adiciona uma nova página
                doc.addPage();
                imageYCoordinate = 1;
              }
              if (xCoordinate + imgWidth > doc.internal.pageSize.width) {
                // Adiciona uma nova página
                doc.addPage();
                xCoordinate = 1; // Volta para a margem esquerda
                imageYCoordinate = 1;
              }
              
              // Verifica se ainda não foram processadas as duas primeiras imagens
              if (imagensProcessadas < 2) {
                // Multiplica a largura e altura pelo fator de escala de 5 apenas para as duas primeiras imagens
                const escala = 3.2;
                const imgWidthScaled = imgWidth * escala;
                const imgHeightScaled = imgHeight * escala;
                
                // Adiciona a imagem com as dimensões escaladas apenas para as duas primeiras imagens
                doc.addImage(imagem, 'JPEG', xCoordinate, imageYCoordinate, imgWidthScaled, imgHeightScaled);
                
                // Atualiza a coordenada Y para a próxima imagem
                imageYCoordinate += imgHeightScaled + 0.2; // Adiciona um pequeno espaço entre as imagens
                
                // Define um limite para mudar de linha (você pode ajustar conforme necessário)
                if (imageYCoordinate + imgHeightScaled > doc.internal.pageSize.height) {
                  xCoordinate += imgWidthScaled + 0.2; // move para a próxima coluna
                  imageYCoordinate = 1; // reinicia a coordenada Y
                }
                
                // Incrementa o número de imagens processadas
                imagensProcessadas++;
              } else {
                // Adiciona as outras imagens sem aplicar a escala
                doc.addImage(imagem, 'JPEG', xCoordinate, imageYCoordinate, imgWidth, imgHeight);
                
                // Atualiza a coordenada Y para a próxima imagem
                imageYCoordinate += imgHeight + 0.2; // Adiciona um pequeno espaço entre as imagens
                
                // Define um limite para mudar de linha (você pode ajustar conforme necessário)
                if (imageYCoordinate + imgHeight > doc.internal.pageSize.height) {
                  xCoordinate += imgWidth + 0.2; // move para a próxima coluna
                  imageYCoordinate = 1; // reinicia a coordenada Y
                }
              }
            }
          }
          
          
          
          
        },
      });
    }
   
}
