############################################## Copyright (2024) Netflix ###########################################################################
{
  "expressions": [{
    "expression": "nf.region,brazil-south-1,:eq,nf.cluster,testcluster,:eq,:and,name,cpuALL.stolen,:eq,:and,:sum,(,nf.node,),:by",
    "frequency": 60000,
    "id": "c80bebe3cd68fd1828f627d279584c7891162aa0"
  }, {
    "expression": "nf.app,testapp,:eq,error,400,:eq,:and,name,downstreamErrors,:eq,:and,:sum",
    "frequency": 60000,
    "id": "29b77f4d9c156a8db7db8d642f1ead63fc610887"
  }]
}
[{
	"streamId": "96a784fe-e335-4e76-b3d4-d7b401f65e16",
	"remoteAddress": "142.215.8.5",
	"remoteAddress": "142.215.8.6",
        "remoteAddress": "64.191.232.77",
	"receivedMessages": {
		"current": 50
	},
	"droppedMessages": {
		"current": 0
	}
}, {
	"streamId": "a5f83589-bf3f-4692-9e28-df47dfe8333c",
	"receivedMessages": {
		"current": 128
	},
	"droppedMessages": {
		"current": 0
	}
}

host ('http://videoserver.com/142.215.8.5')
print (segments)
print (target_duration)

public class CommandHelloWorld extends HystrixCommand<String> {

    private final String name;

    public CommandHelloWorld(String name) {
        super(HystrixCommandGroupKey.Factory.asKey("ExampleGroup"));
        this.name = name;
    }

    @Override
    protected String run() {
        return "Nuvem MFC" + name + "!";
    }
}



video.load('http://videoserver.com/ip-142.215.8.5')
print(.dump(url-tvg="https://api.prod.maissbt.com/epg)

import gzip
import ssl
import urllib.request
from urllib.parse import urljoin


class DefaultHTTPClient:
    def __init__(self, proxies=None):
        self.proxies = proxies

    def download(self, uri, timeout=None, headers={}, verify_ssl=True):
        proxy_handler = urllib.request.ProxyHandler(self.proxies)
        https_handler = HTTPSHandler(verify_ssl=verify_ssl)
        opener = urllib.request.build_opener(proxy_handler, https_handler)
        opener.addheaders = headers.items()
        resource = opener.open(uri, timeout=timeout)
        base_uri = urljoin(resource.geturl(), ".")

        if resource.info().get("Content-Encoding") == "gzip":
            content = gzip.decompress(resource.read()).decode(
                resource.headers.get_content_charset(failobj="utf-8")
            )
        else:
            content = resource.read().decode(
                resource.headers.get_content_charset(failobj="utf-8")
            )
        return content, base_uri


class HTTPSHandler:
    def __new__(self, verify_ssl=True):
        context = ssl.create_default_context()
        if not verify_ssl:
            context.check_hostname = False
            context.verify_mode = ssl.CERT_NONE
        return urllib.request.HTTPSHandler(context=context)
{
  "id": "",
  "message": {
    "type": "rate",
    "timestamp": 1596570660000,
    "step": 60000,
    "inputSize": {
      "total": 4,
      "details": {
        "app,www,:eq,name,request,:eq,:and,:sum,(,cluster,),:by": 4
      }
    },
    "intermediateSize": {
      "total": 2,
      "details": {
        "http://localhost:7101/api/v1/graph?q=name,ssCpuUser,:eq,:avg": 2
      }
    },
    "outputSize": {
      "total": 2,
      "details": {}
    }
  }
}
Config config = ConfigFactory.load();
Registry registry = new DefaultRegistry();
ActorSystem system = ActorSystem.create("eval", config);
Evaluator evaluator = new Evaluator(config, registry, system);























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































Canais-MFC 🥥
#EXTINF:-1 tvg-id="aws-cloud" group-title="Informações" tvg-name="Sempre atualize seu MFC para receber os novos filmes & series" tvg-logo="https://myfamilycinema.com/wp-content/uploads/2022/05/cropped-MFClogo-01-1.png",Sempre atualize seu MFC para receber os novos filmes & series 🍿🎬
http://rebrand.ly/cola05
########################
#EXTINF:-1 tvg-id="+SBT_canais" group-title="+SBT" tvg-name="+Criança" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKltbGEHepQEgXt4wCoz0FehGbzGSNNZhWH4v-4hxCCCk67_u6olXntCz&s=10.png"
http://fzcdn.vood.top/live/562284026/8515825/390574.m3u8
#EXTINF:-1 tvg-id="+SBT_canais" group-title="+SBT" tvg-name="+Cinema" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKltbGEHepQEgXt4wCoz0FehGbzGSNNZhWH4v-4hxCCCk67_u6olXntCz&s=10.png",+Cinema
http://hzcdn.vood.top/live/562284026/8515825/390573.m3u8
#EXTINF:-1 tvg-id="+SBT_canais" group-title="+SBT" tvg-name="+Series" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKltbGEHepQEgXt4wCoz0FehGbzGSNNZhWH4v-4hxCCCk67_u6olXntCz&s=10.png",+Series
http://dzcdn.vood.top/live/562284026/8515825/390580.m3u8
#EXTINF:-1 tvg-id="+SBT_canais" group-title="+SBT" tvg-name="+Novelas" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKltbGEHepQEgXt4wCoz0FehGbzGSNNZhWH4v-4hxCCCk67_u6olXntCz&s=10.png",+Novelas
http://dzcdn.vood.top/live/562284026/8515825/390578.m3u8
#EXTINF:-1 tvg-id="canais_globo" group-title="Canais Abertos" tvg-name="TV Globo" tvg-logo="https://gkpb.com.br/wp-content/uploads/2021/12/novo-logo-da-globo-png.png",TV Globo
http://ezcdn.vood.top/live/562284026/8515825/2376.m3u8
#EXTINF:-1 tvg-id="canais_globo" group-title="Variedades" tvg-name="Viva" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Canal_Viva_2018_wordmark.svg/400px-Canal_Viva_2018_wordmark.svg.png",Viva
http://hzcdn.vood.top/live/562284026/8515825/2537.m3u8
#EXTINF:-1 tvg-id="+SBT_canais" group-title="Canais Abertos" tvg-name="SBT" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Logotipo_do_SBT.svg/360px-Logotipo_do_SBT.svg.png",SBT
https://cdn.live.br1.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/chunklist.m3u8
#EXTINF:-1 tvg-id="tvcultura" group-title="Canais Abertos" tvg-name="TV Cultura" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Cultura_logo_2013.svg/400px-Cultura_logo_2013.svg.png",TV Cultura
http://dzcdn.vood.top/live/562284026/8515825/149.m3u8
#EXTINF:-1 tvg-id="recordtv" group-title="Canais Abertos" tvg-name="Record" tvg-logo="https://upload.wikimedia.org/wikipedia/pt/thumb/0/0e/Logotipo_da_Record_(rede_de_televisão).png/360px-Logotipo_da_Record_(rede_de_televisão).png",Record
http://ezcdn.vood.top/live/562284026/8515825/244071.m3u8
#EXTINF:-1 tvg-id="canais_globo" group-title="Variedades" tvg-name="Multishow" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Multishow.png/400px-Multishow.png",Multishow
http://dzcdn.vood.top/live/562284026/8515825/377241.m3u8
#EXTINF:-1 tvg-id="canais_record" group-title="Noticias" tvg-name="Record News" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Record_News_logo_2023.svg/500px-Record_News_logo_2023.svg.png",Record News
http://ezcdn.vood.top/live/562284026/8515825/488.m3u8

















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" dir="LTR" lang="pt"><head>
    <meta charset="utf-8">
    <meta name="_csrf" content="cab82c36-44e2-4046-a146-e5d02efe5368">
    <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1">
    <meta name="google-site-verification" content="GmHfooq7jctbhvRUSGtLpE_XImtIATNo0iLofqbb16I">
    <meta name="google-site-verification" content="pmHhB6aGnjhY8K733ElVmlTDLHz7qzkA6NA__G40QUc">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="apple-touch-icon" content="https://assets.nflxext.com/en_us/layout/ecweb/netflix-app-icon_152.jpg">
    <link rel="apple-touch-icon" sizes="152x152" href="https://assets.nflxext.com/en_us/layout/ecweb/netflix-app-icon_152.jpg">
    <link rel="dns-prefetch" href="https://help.nflxext.com/">
    <link rel="dns-prefetch" href="https://assets.nflxext.com/">

    
    <title>A Netflix está fora do ar? | Status do serviço Netflix | Centro de ajuda Netflix</title>

    <link rel="shortcut icon" href="https://help.nflxext.com/nficon2023.ico">
    <link rel="stylesheet" href="https://help.nflxext.com/helpcenter/common_df8f40d215f7d0cc9b79.css">

    
    <script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8" data-domain-script="87b6a5c0-0104-4e96-a291-092c11350111"></script><style type="text/css">* {user-select: auto !important; -webkit-user-select: auto !important;}</style><input type="hidden" id="inject_idm_text_selection"><style></style>
    <script type="text/javascript">
        function OptanonWrapper() {}
    </script>


    
    <meta name="description" content="Consulte este artigo para saber como determinar se a Netflix está fora do ar.">
    <meta property="og:description" content="Consulte este artigo para saber como determinar se a Netflix está fora do ar.">
  </head>
  <body class="page-is-netflix-down">
    




    <div class="global-container">
      




<div class="global-header  ">
    <div class="overlay"></div>

    <div class="container">
        <div class="inner-container">
            <div class="branding">
                <a class="logo nf-logo-link n-logo" href="https://netflix.com" title="Netflix">
                    <svg class="netflix-svg" width="88px" height="32px" viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#e50914" d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"></path>
                    </svg>
                    <svg class="n-svg" focusable="true" viewBox="225 0 552 1000" height="32px">
                        <defs>
                            <radialGradient id="54260309-7575-46f4-a806-31673acf60fe-a" r="75%" gradientTransform="matrix(.38 0 .5785 1 .02 0)">
                                <stop offset="60%" stop-opacity=".3"></stop>
                                <stop offset="90%" stop-opacity=".05"></stop>
                                <stop offset="100%" stop-opacity="0"></stop>
                            </radialGradient>
                        </defs>
                        <path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path>
                        <path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path>
                        <path d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225" fill="url(#54260309-7575-46f4-a806-31673acf60fe-a)"></path>
                        <path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914"></path>
                    </svg>
                </a>
                <a class="helpcenter-logo" href="/pt">Central de Ajuda</a>

            </div>

            <div class="actions">
                <ul class="nav navbar-nav member-sign-in account-dropdown pull-right">
                    <li class="dropdown">
                        <a href="#" class="btn btn-med hc-profile-name dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">drakoz00023</a>
                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="https://netflix.com/YourAccount" class="your-account-link">Conta</a>
                            </li>
                            <li>
                                <a href="https://netflix.com/SignOut?lnkctr=mL" class="signout-link">Sair da Netflix</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                
            </div>
        </div>

        <div class="logo-wrapper">
            <a class="helpcenter-logo" href="/pt">Central de Ajuda</a>
        </div>
    </div>
</div>


      
        <div class="notifications">
    <div id="notification-holder"><div class="global-notifications"></div></div>
</div>

        <div id="personalization-placeholder"></div>
      

      <div class="global-content">
        

            <div class="container">
                <ul class="breadcrumb">
  <li>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81 8.74697H13.9966V7.24697H4.81095L7.52932 4.52961L6.46886 3.46875L2.46959 7.46654C2.32891 7.60716 2.24985 7.79791 2.24982 7.99683C2.24978 8.19574 2.32876 8.38652 2.46939 8.5272L6.46866 12.528L7.52952 11.4675L4.81 8.74697Z" fill="black"></path>
    </svg>
  </li>
  <li>
    <a href="/pt">Voltar à página inicial da ajuda</a>
  </li>
  
  
  
</ul>


                <section>
                    <h1>A Netflix está fora do ar?</h1>

                    <div id="down-notifications">
                        <div class="down-notification">
                            <div class="down-notification-content">
                                <h2>A Netflix está funcionando!</h2>
                                <p>Não estamos com problemas de interrupção no serviço de transmissão online.</p>
                            </div>
                            <div class="down-notification-indicator">
                                <i class="hcicon-uma-check"></i>
                            </div>
                        </div>
                    </div>

                    <hr>

                    <p>Nós nos esforçamos para disponibilizar seus filmes e séries favoritos sempre que você quiser assistir, mas, em ocasiões muito raras, o serviço pode ficar indisponível. Se estivermos passando por uma interrupção no serviço de transmissão, atualizaremos esta página com uma descrição do problema.</p>

                    
                        <h3>Ainda está com problemas?</h3>

                        <p>
                            Se o seu problema não estiver listado acima, faça uma busca no Centro de ajuda pelo código de erro ou problema enfrentado. 
                        </p>

                        <div class="search-form-container">
    <div id="search-placeholder"><form action="/pt/search" method="GET"><div class="input-group"><div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" class="react-autosuggest__container"><div class="search-control-wrapper"><input type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" class="form-control" name="q" id="search-input" placeholder="Buscar" aria-label="Buscar" value=""><button class="search-control" type="submit" tabindex="-1">Buscar</button></div><div id="react-autowhatever-1" role="listbox" class="react-autosuggest__suggestions-container"></div></div></div></form></div>
</div>

                    
                </section>
            </div>
        
      </div>

      <div class="footer-push"></div>
    </div>

    



<div class="global-page-footer">
    <div class="global-page-contactbar">
  <div class="container">
    <div class="wrapper">
      <h3 class="bar-title">Precisa de mais ajuda?</h3>
      <a id="contact-us-button" href="/pt/contactus" class="h-btn btn-primary-dark">Entre em contato</a>
    </div>
  </div>
</div>


    <div class="container">

        
        
            <div id="lang-switcher-wrapper" class="select-wrapper">
                <div class="select select-grey">
                    <label for="lang-switcher" id="lang-switcher-label" class="sr-only">Selecione seu idioma preferido:</label>
                    <select id="lang-switcher" title="Selecione seu idioma preferido:" aria-label="Selecione seu idioma preferido:">
                        <option value="" disabled="" selected="">Selecione um idioma</option>
                        
                            <option value="en">English</option>
                        
                            <option value="pt" selected="selected">Português</option>
                        
                    </select>

                    <svg width="24px" height="24px" viewBox="0 0 24 24">
    <path d="M12.9416531,7.71264972 L17.9520258,15.2282087 C18.4421897,15.9634546 18.2435115,16.9568456 17.5082656,17.4470095 C17.2454376,17.6222282 16.9366253,17.715729 16.6207453,17.715729 L6.6,17.715729 C5.7163444,17.715729 5,16.9993846 5,16.115729 C5,15.799849 5.09350084,15.4910367 5.26871953,15.2282087 L10.2790922,7.71264972 C10.7692561,6.97740382 11.7626471,6.77872563 12.497893,7.26888957 C12.6736566,7.38606534 12.8244774,7.53688606 12.9416531,7.71264972 Z" transform="translate(11.610458, 12.357865) scale(1, -1) translate(-11.610458, -12.357865) "></path>
</svg>

                </div>
            </div>
        

        <ul class="footer-links">
            <li class="footer-link">
                <a href="/pt/legal/termsofuse">Termos de uso</a>
            </li>
            <li class="footer-link">
                <a href="/pt/legal/privacy">Privacidade</a>
            </li>
            

            

            <li class="footer-link">
                <a href="/pt/legal/privacy#cookies" class="evidon-trigger toggle-cookie-info">Preferências de cookie</a>
            </li>
            
                
                
                <li class="footer-link">
                    <a href="/pt/legal/corpinfo">Informações corporativas</a>
                </li>
            
        </ul>
    </div>
</div>


    
    <script>
/*<![CDATA[*/
    window.netflix = {
        i18n: {
            "locale": "pt"
        },
        urls: {
            "base": "https:\/\/help.netflix.com",
            "signIn": "https:\/\/netflix.com" + "/Login?locale=" + "pt" + "&nextpage=" + encodeURIComponent(window.location.href),
            "signUp": "https:\/\/netflix.com\/signup",
            "signInHelp": "https:\/\/netflix.com" + "/LoginHelp?locale=" + "pt"
        },
        config: {
            "page": "IsNetflixDown",
            "chatCookieName": "cseChatSessionId",
            "chatForce": true,
            "clBatchInterval": 10000,
            "q": null,
            "oneTrust": true,
            "searchAutocompleteEnabled": true
        },
        data: {
            "source": "helpCenter",
            "survey": null,
            "sourceHiddenLinks": false,
            "tests": "65654~2~65451~3~64895~1",
            "isRtl": false,
            "isAgent": false,
            "geoCountry": "BR",
            "isMember": false,
            "isMemberSignedIn": true,
            phone: {
                "appHelpDeepLink": "https:\/\/netflix.com\/mobilehelp",
                "enablePhoneMobileDeepLink": false
            },
            article: {
                "lang": null,
                "tnid": null,
                "alias": null,
                "nodeid": null,
                "allCountries": null,
                "defaultCountry": null,
                "legalDocument": false,
                "selectedCountry": null,
                "specifiedCountry": null
            }
        },
        l10n: {
            "localeOverride": "pt",
            "no": "N\u00E3o",
            "yes": "Sim",
            "close": "Fechar",
            "not.sure": "N\u00E3o sei",
            "next": "Pr\u00F3ximo",
            "other": "Outro",
            "search": "Buscar",
            "submit": "Enviar",
            "sign.in": "Acessar",
            "sign.up": "Assine a Netflix",
            "get.help": "Ajuda",
            "skip": "Ignorar",
            "previous": "Anterior",
            "optional": "(Opcional) N\u00F3s n\u00E3o respondemos a coment\u00E1rios individuais. N\u00E3o deixe informa\u00E7\u00F5es pessoais.",
            "learn.more": "Saiba mais",
            "help.center": "Central de Ajuda",
            "skip.for.now": "Deixar para depois",
            "read.article": "Ler o artigo",
            "call.us.in.app": "Ligue para n\u00F3s pelo aplicativo",
            "what.went.wrong": "O que deu errado?",
            "select.a.country": "Selecione um pa\u00EDs",
            "already.a.member": "J\u00E1 \u00E9 assinante?",
            "no.results.found": "Nenhum resultado encontrado",
            "not.ready.to.signin": "N\u00E3o est\u00E1 pronto para acessar sua conta?",
            "recommended.for.you": "Sugest\u00F5es para voc\u00EA",
            "need.help.signing.in": "Precisa de ajuda para acessar?",
            "thanks.for.your.feedback": "Obrigado por enviar seus coment\u00E1rios.",
            "was.this.article.helpful": "Este artigo foi \u00FAtil?",
            "padme.search.kb.noresults": "Nenhum resultado encontrado",
            "additional.search.results": "Resultados adicionais de busca",
            "the.steps.did.not.resolve": "Os passos do artigo n\u00E3o resolveram o meu problema",
            "the.wording.was.confusing": "A escolha das palavras usadas no artigo o tornou confuso",
            "what.do.you.need.help.with": "Como podemos ajudar?",
            "the.article.did.not.address": "Este artigo n\u00E3o foi relevante para a minha busca",
            "padme.pages.did.this.resolve": "Essas informa\u00E7\u00F5es resolveram o problema?",
            "sign.in.for.personalized.help": "Acesse sua conta para obter ajuda personalizada",
            "let.us.know.how.we.can.improve": "(Opcional) Diga como podemos melhorar. N\u00F3s n\u00E3o respondemos a coment\u00E1rios individuais. N\u00E3o deixe informa\u00E7\u00F5es pessoais.",
            "note.currently.unable.to.respond": "Observa\u00E7\u00E3o: no momento, n\u00E3o podemos responder aos coment\u00E1rios individualmente",
            "currently.viewing.information.for": "Consultando informa\u00E7\u00F5es referentes a:",
            "thanks.for.your.feedback.improvement": "Obrigado por enviar seus coment\u00E1rios! Alguma sugest\u00E3o de melhoria?",
            "information.not.available.for.country": "Desculpe, esta informa\u00E7\u00E3o n\u00E3o est\u00E1 dispon\u00EDvel para {0}.",
            "viewing.information.intended.for.country": "As informa\u00E7\u00F5es que voc\u00EA est\u00E1 consultando s\u00E3o v\u00E1lidas para <strong>{0}<\/strong> e podem n\u00E3o se aplicar \u00E0 sua assinatura Netflix. Selecione seu pa\u00EDs abaixo.",
            "padme.pages.isnetflixdown.status.up.body": "N\u00E3o estamos com problemas de interrup\u00E7\u00E3o no servi\u00E7o de transmiss\u00E3o online.",
            "padme.pages.isnetflixdown.status.up.header": "A Netflix est\u00E1 funcionando!",
            "characters.left": "[NUMBER] caracteres restantes",
            "describe.your.issue": "Descreva seu problema",
            "chat.recording.notice": "Para melhorar o atendimento ao cliente da Netflix, podemos monitorar ou gravar os bate-papos.",
            "received.and.email.about.account": "Recebi um email sobre altera\u00E7\u00E3o do email da conta",
            "netflix.says.cant.find.account": "Mensagem da Netflix: \u201CN\u00E3o encontramos uma conta com este email\u201D",
            "please.provide.a.short.description": "Informe uma breve descri\u00E7\u00E3o de seu problema",
            "recommended.popular.topics": "Principais assuntos",
            "padme.pages.contactus.chatbox.title": "Atendimento ao cliente da Netflix",
            "chat.contactus.chatbox.endchat.question": "Finalizar bate-papo?",
            "chat.contactus.chatbox.end": "Encerrar",
            "padme.pages.contactus.chatbox.submit": "Enviar",
            "padme.pages.contactus.chatbox.cancel": "Cancelar",
            "chat.new.message": "Nova mensagem",
            "chat.ewt.wait.time": "Tempo de espera: {0} minutos",
            "chat.write.reply": "Insira uma resposta",
            "chat.mop.enter.new.payment": "Insira a nova forma de pagamento",
            "chat.mop.enter.new.payment.verification": "Informe os dados de pagamento para verifica\u00E7\u00E3o",
            "chat.mop.agentname.cant.see": "{0} n\u00E3o pode ver isto",
            "chat.mop.agent.cant.see": "O agente n\u00E3o pode ver isto",
            "chat.email.chat.transcript": "Informe o email para enviarmos a transcri\u00E7\u00E3o do bate-papo",
            "chat.email.chat.transcript.sent": "Transcri\u00E7\u00E3o enviada!",
            "padme.pages.contactus.chatbox.transcript": "Quero receber uma c\u00F3pia desta conversa por email",
            "chat.email.sent.transcript.email": "A transcri\u00E7\u00E3o desta sess\u00E3o de bate-papo foi enviada para o email informado.",
            "chat.mop.first.name.required": "O nome \u00E9 obrigat\u00F3rio",
            "chat.mop.last.name.required": "O sobrenome \u00E9 obrigat\u00F3rio",
            "chat.mop.card.required": "O n\u00FAmero do cart\u00E3o de cr\u00E9dito ou d\u00E9bito \u00E9 obrigat\u00F3rio",
            "chat.mop.zip.code.required": "O CEP \u00E9 obrigat\u00F3rio",
            "chat.mop.cvv": "C\u00F3digo de seguran\u00E7a (CVV)",
            "chat.mop.cvv.required": "O c\u00F3digo de seguran\u00E7a (CVV) \u00E9 obrigat\u00F3rio",
            "chat.mop.expiration.required": "A data de validade \u00E9 obrigat\u00F3ria",
            "chat.mop.expiration.format": "A data de validade deve estar no formato MM\/AAAA",
            "chat.mop.invalid.exp": "Data de validade inv\u00E1lida",
            "chat.mop.first.name": "Nome registrado no cart\u00E3o",
            "chat.mop.last.name": "Sobrenome registrado no cart\u00E3o",
            "chat.mop.zip": "CEP do endere\u00E7o de cobran\u00E7a",
            "chat.mop.number": "N\u00FAmero do cart\u00E3o",
            "chat.mop.last.eight.digits.of.number": "\u00DAltimos 8 d\u00EDgitos do n\u00FAmero do cart\u00E3o",
            "chat.mop.expiration": "Data de validade (MM\/AAAA)",
            "chat.mop.dob": "Data de nascimento (AAAA-MM-DD)",
            "chat.mop.dob.required": "A data de nascimento \u00E9 obrigat\u00F3ria",
            "padme.pages.chat.mop.eudd": "No. da conta do d\u00E9bito em conta:",
            "padme.pages.chat.mop.upi": "ID do UPI:",
            "padme.pages.chat.mop.upi.invalid": "Informe um ID do UPI v\u00E1lido",
            "chat.mop.upi.required": "O ID do UPI \u00E9 obrigat\u00F3rio",
            "chat.mop.account.number.required": "O n\u00FAmero da conta \u00E9 obrigat\u00F3rio",
            "chat.mop.routing.number.required": "O n\u00FAmero de roteamento \u00E9 obrigat\u00F3rio",
            "chat.mop.digit.required": "O d\u00EDgito verificador \u00E9 obrigat\u00F3rio",
            "chat.mop.branch.number": "N\u00FAmero da ag\u00EAncia",
            "chat.mop.routing.number": "N\u00FAmero de roteamento",
            "chat.mop.account.number": "N\u00FAmero da conta",
            "chat.mop.digit": "D\u00EDgito",
            "chat.mop.card.invalid": "O n\u00FAmero do cart\u00E3o de cr\u00E9dito ou d\u00E9bito \u00E9 inv\u00E1lido",
            "chat.mop.paypal.billing.id.required": "O ID de faturamento BA \u00E9 obrigat\u00F3rio",
            "chat.mop.paypal.billing.id.valid": "O ID de faturamento BA precisa ser v\u00E1lido",
            "chat.mop.paypal.billing.id": "ID de faturamento do PayPal",
            "chat.resolve.issue": "Resolvemos o seu problema?",
            "padme.pages.contactus.chatbox.send": "Enviar",
            "padme.pages.contactus.chatbox.endchat": "Finalizar bate-papo",
            "padme.pages.contactus.chatbox.clickhere": "Clique aqui",
            "padme.pages.contactus.chatbox.welcome": "Obrigado por usar o bate-papo da Netflix",
            "chat.mop.bank.name": "Nome do banco",
            "chat.mop.bank.name.required": "O nome do banco \u00E9 obrigat\u00F3rio",
            "chat.mop.account.type": "Tipo de conta",
            "chat.mop.account.type.required": "O tipo de conta \u00E9 obrigat\u00F3rio",
            "chat.mop.account.type.CHECKING": "Conta corrente",
            "chat.mop.account.type.SAVINGS": "Conta poupan\u00E7a",
            "netflix": "Netflix",
            "chat.mop.dob.invalid": "Uma data de nascimento v\u00E1lida \u00E9 obrigat\u00F3ria",
            "netflix.connecting": "Conectando", #EXTINF:-1 tvg-id="netflix-info" group-title="Informações" tvg-name="A Netflix está funcionando!" tvg-logo="https://help.nflxext.com/helpcenter/c336e9810131f82eaf84.svg",A Netflix está funcionando!
cdn22.cc/2223060/78647/168251.m3u8
            "padme.pages.contactus.chat.chatEnded": "Esta sess\u00E3o de atendimento online foi encerrada.",
            "difficult": "Dif\u00EDcil",
            "dissatisfied": "Insatisfeito",
            "dont.know.not.applicable": "N\u00E3o sei \/ N\u00E3o aplic\u00E1vel",
            "easy": "F\u00E1cil",
            "neutral": "Neutro",
            "satisfied": "Satisfeito",
            "very.difficult": "Muito dif\u00EDcil",
            "very.dissatisfied": "Muito insatisfeito",
            "very.easy": "Muito f\u00E1cil",
            "very.satisfied": "Muito satisfeito",
            "you.can.start.a.new.chat": "Voc\u00EA pode <button>iniciar um novo bate-papo<\/button>.",
            "your.issue": "Seu problema:",
            "tell.us.more": "Conte-nos mais para sugerirmos a melhor solu\u00E7\u00E3o",
            "get.in.touch": "Entre em contato:",
            "try.these.recommendations": "Tente estas recomenda\u00E7\u00F5es:",
            "recommended": "Recomendado",
            "describe.your.issue.placeholder": "Descreva seu problema"
        }
    };
/*]]>*/
</script>


    <script crossorigin="anonymous" src="https://help.nflxext.com/helpcenter/manifest_b4b5aa08441a2eda054f.js"></script>
    <script crossorigin="anonymous" src="https://help.nflxext.com/helpcenter/common_b3b80fe8eca9e55cc5dc.js"></script>

    
    
            <script crossorigin="anonymous" src="https://help.nflxext.com/helpcenter/is-netflix-down_bac4a4839ac733b98775.js"></script>
        

    <script crossorigin="anonymous" src="/interface/chat/supportscript?forceCountry=BR&amp;locale=pt"></script>


  

</body></html>#EXTINF:-1 tvg-id="netflix-info" group-title="Informações" tvg-name="A Netflix está funcionando!" tvg-logo="https://help.nflxext.com/helpcenter/c336e9810131f82eaf84.svg",A Netflix está funcionando!
cdn22.cc/2223060/78647/168251.m3u8
