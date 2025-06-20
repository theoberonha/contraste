jQuery(document).ready(function () {
    var carousel_id = "BACKBONE_OBJ";
    var wrapper = $('#EDG_C1_MD_BACKBONE_OBJ');
    var carousel_fade = 'carousel-fade';
    var objData = {
        'title': 'Técnicas de criptografia',
        'description': '',
        'type': 'infográfico',
        'slides': [
            {
                'name': 'Criptografias',
                'path': 'Criptografias',
                'content': {
                    'image': {
                        'src': 'resources/images/abre_info_cripto_f2.png',
                        'alt': 'Infográfico sobre Técnicas de criptografia é composto por seis hexágonos coloridos ao redor de um hexágono central verde com um ícone de cadeado e a palavra “Criptografia” no centro. Cada hexágono ao redor contém um número de 1 a 6 dentro de um ícone de cadeado, representando diferentes técnicas de criptografia. As ilustrações nos hexágonos são decorativas e representam conceitos relacionados à criptografia e segurança da informação.',
                        'width': 720,
                        'height': 480
                    },
                    'html': '<p><strong style="color: #006400;">Como um agente secreto.</strong> <br/>Este infográfico apresenta uma visão geral de diferentes técnicas de criptografia utilizadas para proteger dados e informações.</p>'
                }
            },
            {
                'name': '1. ROT 13',
                'path': 'ROT 13',
                'content': {
                    'image': {
                        'src': 'resources/images/1_Cifras_simples.png',
                        'alt': 'Ilustração explicativa do método de criptografia ROT 13, mostrando o alfabeto dividido em duas linhas: a linha superior com as letras de A a M e a inferior com as letras de N a Z. Uma frase de exemplo, O UNIVERSO DIGITAL POSSUI MUITAS GALÁXIAS, é exibida com a versão criptografada abaixo, demonstrando a substituição de letras pelo método ROT 13.',
                        'width': 720,
                        'height': 480
                    },
                    'html': '<p><strong style="color: #006400;">Cifras de substituição simples.</strong> <br/>Técnica básica em que cada letra de uma mensagem é substituída por outra, deslocada por um número fixo de posições no alfabeto. Esse método é  uma ótima maneira de iniciar a compreensão da criptografia. </p>'
                }
            },
            {
                'name': '2. Chave simétrica',
                'path': 'chave simérica',
                'content': {
                    'image': {
                        'src': 'resources/images/2_Criptografia_simetrica.png',
                        'alt': 'Ilustração de um processo de criptografia de chave simétrica com duas etapas: o primeira mostra uma pessoa enviando uma mensagem que é cifrada com uma chave e se transforma em uma mensagem criptografada; a segunda mostra a mensagem criptografada sendo decifrada com a mesma chave e entregue a uma pessoa que a lê.',
                        'width': 720,
                        'height': 480
                    },
                    'html': '<p><strong style="color: #006400;">Criptografia de chave simétrica.</strong> <br/>Amplamente utilizada por governos e empresas para proteger dados, emprega uma única chave para cifrar e  decifrar a informação, exigindo um compartilhamento seguro dessa chave.'
                }
            },
            {
                'name': '3. Chave assimétrica',
                'path': 'chave assimétrica',
                'content': {
                    'image': {
                        'src': 'resources/images/3_Criptografia_assimetrica.png',
                        'alt': 'Diagrama explicando a criptografia de chave assimétrica, com duas pessoas trocando mensagens. A mensagem é cifrada com uma chave pública e convertida em mensagem criptografada. Em seguida, a mensagem criptografada é decifrada com uma chave privada e lida pelo destinatário.',
                        'width': 720,
                        'height': 480
                    },
                    'html': '<p><strong style="color: #006400;">Criptografia de chave assimétrica.</strong> <br/>Fundamental para a segurança da internet, essa técnica usa um par de chaves: uma pública, utilizada para cifrar, e uma privada, usada para decifrar. É comum em assinaturas digitais e no estabelecimento de conexões seguras.</p>'
                }
            },
            {
                'name': '4. Fluxo',
                'path': 'Fluxo',
                'content': {
                    'image': {
                        'src': 'resources/images/4_Criptografia_fluxo.png',
                        'alt': 'Diagrama representando a criptografia de fluxo, onde duas pessoas trocam mensagens. Um gerador cria uma chave contínua que é aplicada à mensagem para criptografá-la. A mensagem criptografada é enviada e decodificada pelo receptor, que também utiliza a chave contínua produzida pelo gerador, mantendo a segurança durante a transmissão.',
                        'width': 720,
                        'height': 480
                    },
                    'html': '<p><strong style="color: #006400;">Criptografia de fluxo.</strong> <br/>Essa técnica transforma cada bit de dados com base em uma chave gerada continuamente. Ela foi muito utilizada em comunicações sem fio e streaming, mas, atualmente, vem sendo substituída por técnicas mais seguras.</p>'
                }
            },
            {
                'name': '5. Esteganografia',
                'path': 'Esteganografia',
                'content': {
                    'image': {
                        'src': 'resources/images/5_Esteganografia3.png',
                        'alt': 'Diagrama ilustrando a esteganografia com uma imagem de uma maçã vermelha sendo dividida em três canais de cor: vermelho R, verde G e azul B. Cada canal é representado abaixo por uma versão da maçã somente nessa cor, indicando como os dados podem ser ocultados em diferentes componentes de cor de uma imagem, vendo-se que no canal azul aparece a letra A, oculta na imagem da maçã.',
                        'width': 720,
                        'height': 480
                    },
                    'html': '<p><strong style="color: #006400;">Esteganografia.</strong> <br/>Ocultação de mensagens em imagens digitais, usada para esconder a própria existência da comunicação, camuflando dados em outros arquivos, como imagens ou áudios, sem levantar suspeitas. Na imagem, ao clicar no canal do azul aparece a letra A.</p>'
                }
            },
            {
                'name': '6. Quântica',
                'path': 'Quântica',
                'content': {
                    'image': {
                        'src': 'resources/images/6_Criptografia_quantica.png',
                        'alt': 'Ilustração representando a criptografia quântica, onde duas pessoas trocam mensagens por meio de uma nuvem central que simboliza um sistema de comunicação quântica. A nuvem contém ícones de cadeados e elementos relacionados à segurança, destacando a complexidade e segurança desse método de criptografia.',
                        'width': 720,
                        'height': 480
                    },
                    'html': '<p><strong style="color: #006400;">Criptografia quântica.</strong> <br/>Tecnologia emergente com potencial para revolucionar a segurança da informação, usando princípios da mecânica quântica para criar chaves inquebráveis, ainda em fase experimental, mas com enormes implicações futuras.</p>'
                }

            }
        ]
    };

    var carousel = $('<div id="'+ carousel_id+'" class="carousel slide '+carousel_fade+' col-12" data-bs-touch="true" role="region" aria-roledescription="carrossel" aria-label="" tabindex="0"></div>');
    var carousel_header_ico = $('<div class="carousel_header_ico"> <span class="ico"></span> <small class="carousel-section-indicator badge rounded-top  ">' + objData.type + '</small> </div>');
    var carousel_title = '<h1 class="carousel-header"> <span class="carousel-title">' + objData.title + '</span> <span class="carousel-description">'+ objData.description+'</span> </h1>';
    var carousel_inner = $('<div class="carousel-inner  rounded-bottom-5" role="group"></div>');
    var carousel_indicators = $('<div class="carousel-button-group carousel-indicators" role="group"></div>');
    objData.slides.forEach((item, index) => {
        active = index == 0 ? 'active' : '';
        var carousel_item = $('<div class="carousel-item '+ active +'"></div>');
        var article = $('<article class="carousel-sub">'+item.content.html+'</article>');
        var figure = '<div class="carousel-image"><figure class="m-0"> <img width="' + item.content.image.width + '" height="' + item.content.image.height + '" class="img-fluid" src="' + item.content.image.src + '" alt="' + item.content.image.alt + '" role="img" aria-label="" /></figure></div>';

        var button = $('<button type="button" data-bs-target="#'+carousel_id+'" data-bs-slide-to="'+index+'" tabindex="'+index+'" aria-label="Slide '+ index +'" class="'+active+'">'+ item.name +'</button>');

        carousel_indicators.append(button);
        carousel_item.append(figure,article)
        carousel_inner.append(carousel_item);
    });

    var controllers = '<button class="carousel-control-prev opacity-100" type="button" data-bs-target="#'+carousel_id+'" data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Anterior</span> </button> <button class="carousel-control-next opacity-100" type="button" data-bs-target="#'+carousel_id+'" data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Próximo</span> </button>';

    carousel.append(
        carousel_header_ico,
        carousel_title,
        carousel_indicators,
        carousel_inner,
        controllers);
    wrapper.append(carousel);

    var bs_carousel = new bootstrap.Carousel('#BACKBONE_OBJ');
});
