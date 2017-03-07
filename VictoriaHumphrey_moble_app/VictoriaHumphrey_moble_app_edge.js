/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Facebook',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Facebook2.jpg",'0px','0px']
                        },
                        {
                            id: 'profile',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"profile.jpg",'0px','0px']
                        },
                        {
                            id: 'signupBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['29px', '1023px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.29028']]
                        },
                        {
                            id: 'facebookBTN',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['255px', '734px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['2.20912','0.73958']]
                        },
                        {
                            id: 'usephoto_price',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"usephoto_price.jpg",'0px','0px']
                        },
                        {
                            id: 'priceBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['238px', '394px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'text',
                            transform: [[],[],[],['1.56997','0.68171']]
                        },
                        {
                            id: 'approve',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"approvephoto.jpg",'0px','0px']
                        },
                        {
                            id: 'retakeBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['17px', '1026px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.21619','1.02792']]
                        },
                        {
                            id: 'usephotoBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['458px', '1025px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.28931','1.05787']]
                        },
                        {
                            id: 'album',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"select_album.jpg",'0px','0px']
                        },
                        {
                            id: 'sell',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sell.jpg",'0px','0px']
                        },
                        {
                            id: 'about',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"VictoriaHumphrey_app_about.jpg",'0px','0px']
                        },
                        {
                            id: 'home',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"VictoriaHumphrey_app_main.jpg",'0px','0px']
                        },
                        {
                            id: 'cameraBtn',
                            symbolName: 'Btn',
                            display: 'block',
                            type: 'rect',
                            rect: ['231px', '1028px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'profleBtn',
                            symbolName: 'Btn',
                            display: 'block',
                            type: 'rect',
                            rect: ['460px', '1027px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.2555','1.14468']]
                        },
                        {
                            id: 'sign_in',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sign%20in.jpg",'0px','0px']
                        },
                        {
                            id: 'fbBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['242px', '601px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['2.23367','0.82194']]
                        },
                        {
                            id: 'emailBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['240px', '228px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'text',
                            transform: [[],[],[],['2.74166','0.64388']]
                        },
                        {
                            id: 'passwordBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['240px', '313px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'text',
                            transform: [[],[],[],['2.74166','0.64388']]
                        },
                        {
                            id: 'signupBtnpage',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['241px', '417px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.19497','0.60826']]
                        },
                        {
                            id: 'profilepage',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"profilepage.jpg",'0px','0px']
                        },
                        {
                            id: 'keypad',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '716px', '640px', '420px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"keypad.jpg",'0px','0px']
                        },
                        {
                            id: 'uploadmoreBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['235px', '1028px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.65312']]
                        },
                        {
                            id: 'takepicBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['240px', '1028px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'fbkeypadBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['241px', '371px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'text',
                            transform: [[],[],[],['3.5641','1.60541']]
                        },
                        {
                            id: 'fbloginBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['242px', '516px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['3.49153','0.78632']]
                        },
                        {
                            id: 'doneBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['238px', '486px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.56604','0.52778']]
                        },
                        {
                            id: 'purchase',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"purchase.jpg",'0px','0px']
                        },
                        {
                            id: 'albumBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '1028px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'purchaseBtn-Skull',
                            symbolName: 'Btn',
                            display: 'block',
                            type: 'rect',
                            rect: ['94px', '210px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.62893','2.4245']]
                        },
                        {
                            id: 'numPad',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '704px', '640px', '432px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"numPad.jpg",'0px','0px']
                        },
                        {
                            id: 'youroffer',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"youroffer2.png",'0px','0px']
                        },
                        {
                            id: 'crayon',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"crayon.jpg",'0px','0px']
                        },
                        {
                            id: 'owl',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"owl.jpg",'0px','0px']
                        },
                        {
                            id: 'splat',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"splat.jpg",'0px','0px']
                        },
                        {
                            id: 'twine',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"twine.jpg",'0px','0px']
                        },
                        {
                            id: 'wine',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"wine.jpg",'0px','0px']
                        },
                        {
                            id: 'crayonBtn',
                            symbolName: 'Btn',
                            display: 'block',
                            type: 'rect',
                            rect: ['395px', '212px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.67731','2.38035']]
                        },
                        {
                            id: 'owlBtn',
                            symbolName: 'Btn',
                            display: 'block',
                            type: 'rect',
                            rect: ['94px', '505px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.62893','2.46011']]
                        },
                        {
                            id: 'wineBtn',
                            symbolName: 'Btn',
                            display: 'block',
                            type: 'rect',
                            rect: ['395px', '508px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.67925','2.53134']]
                        },
                        {
                            id: 'twineBtn',
                            symbolName: 'Btn',
                            display: 'block',
                            type: 'rect',
                            rect: ['91px', '802px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.74656','2.46011']]
                        },
                        {
                            id: 'splatBtn',
                            symbolName: 'Btn',
                            display: 'block',
                            type: 'rect',
                            rect: ['395px', '801px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.67925','2.4537']]
                        },
                        {
                            id: 'offersent',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"offersent2.png",'0px','0px']
                        },
                        {
                            id: 'confirm',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"confirm.png",'0px','0px']
                        },
                        {
                            id: 'purchaseBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['35px', '1024px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.43541','1.08333']]
                        },
                        {
                            id: 'backBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'aboutBtn',
                            symbolName: 'Btn',
                            display: 'block',
                            type: 'rect',
                            rect: ['481', '0', '159', '108', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'doneBtn2youroffer',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['246px', '501px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.60474','0.53704']]
                        },
                        {
                            id: 'makeofferBtn',
                            symbolName: 'Btn',
                            display: 'none',
                            type: 'rect',
                            rect: ['433px', '1019px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.60474']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '640px', '1136px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5250,
                    autoPlay: true,
                    labels: {
                        "home": 0,
                        "about": 250,
                        "sell": 500,
                        "album": 750,
                        "approve": 1000,
                        "usephoto": 1250,
                        "numpad": 1500,
                        "profile": 1750,
                        "signup": 2000,
                        "keypad": 2250,
                        "facebook": 2500,
                        "profilepage": 2750,
                        "purchase": 3000,
                        "youroffer": 3250,
                        "offersent": 3500,
                        "confirm": 3750,
                        "crayon": 4000,
                        "owl": 4250,
                        "splat": 4500,
                        "twine": 4750,
                        "wine": 5000
                    },
                    data: [
                        [
                            "eid19",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${usephoto_price}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${usephoto_price}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            0,
                            0,
                            "linear",
                            "${owlBtn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid147",
                            "display",
                            250,
                            0,
                            "linear",
                            "${owlBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${twine}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${twine}",
                            'block',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${emailBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${emailBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid3",
                            "display",
                            250,
                            0,
                            "linear",
                            "${about}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4",
                            "display",
                            500,
                            0,
                            "linear",
                            "${about}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            0,
                            0,
                            "linear",
                            "${splatBtn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid153",
                            "display",
                            250,
                            0,
                            "linear",
                            "${splatBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${approve}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${approve}",
                            'block',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            0,
                            0,
                            "linear",
                            "${twineBtn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            250,
                            0,
                            "linear",
                            "${twineBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${fbloginBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${fbloginBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid148",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wineBtn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            250,
                            0,
                            "linear",
                            "${wineBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${crayonBtn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            250,
                            0,
                            "linear",
                            "${crayonBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${purchase}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${purchase}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${crayon}",
                            'none',
                            'block'
                        ],
                        [
                            "eid135",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${crayon}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${doneBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${doneBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${makeofferBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${makeofferBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid157",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${makeofferBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid161",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${makeofferBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${owl}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${owl}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${retakeBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${retakeBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            0,
                            0,
                            "linear",
                            "${purchaseBtn-Skull}",
                            'block',
                            'block'
                        ],
                        [
                            "eid101",
                            "display",
                            250,
                            0,
                            "linear",
                            "${purchaseBtn-Skull}",
                            'block',
                            'none'
                        ],
                        [
                            "eid23",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aboutBtn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid24",
                            "display",
                            250,
                            0,
                            "linear",
                            "${aboutBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${aboutBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${aboutBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${aboutBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid84",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${aboutBtn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${aboutBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${aboutBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid160",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${aboutBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid130",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${confirm}",
                            'none',
                            'block'
                        ],
                        [
                            "eid131",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${confirm}",
                            'block',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${offersent}",
                            'none',
                            'block'
                        ],
                        [
                            "eid129",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${offersent}",
                            'block',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${signupBtnpage}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${signupBtnpage}",
                            'block',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            500,
                            0,
                            "linear",
                            "${profleBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${profleBtn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid127",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${doneBtn2youroffer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid125",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${doneBtn2youroffer}",
                            'block',
                            'block'
                        ],
                        [
                            "eid126",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${doneBtn2youroffer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${doneBtn2youroffer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${doneBtn2youroffer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            750,
                            0,
                            "linear",
                            "${album}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${album}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            500,
                            0,
                            "linear",
                            "${cameraBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid73",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${passwordBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid74",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${passwordBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid142",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${wine}",
                            'none',
                            'block'
                        ],
                        [
                            "eid143",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${wine}",
                            'block',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${signupBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid60",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${signupBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${uploadmoreBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${uploadmoreBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sell}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "display",
                            750,
                            0,
                            "linear",
                            "${sell}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Facebook}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${Facebook}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${splat}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${splat}",
                            'block',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${facebookBTN}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${facebookBTN}",
                            'block',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${facebookBTN}",
                            'none',
                            'none'
                        ],
                        [
                            "eid27",
                            "display",
                            500,
                            0,
                            "linear",
                            "${takepicBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "display",
                            750,
                            0,
                            "linear",
                            "${takepicBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            500,
                            0,
                            "linear",
                            "${albumBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "display",
                            750,
                            0,
                            "linear",
                            "${albumBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${albumBtn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            250,
                            0,
                            "linear",
                            "${backBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid48",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${backBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid102",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${backBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${backBtn}",
                            'block',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${backBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${backBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid159",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${backBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${youroffer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${youroffer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid164",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${youroffer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid165",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${youroffer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${profile}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${profile}",
                            'block',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sign_in}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${sign_in}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${sign_in}",
                            'block',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${purchaseBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${purchaseBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${purchaseBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid158",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${purchaseBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${home}",
                            'block',
                            'block'
                        ],
                        [
                            "eid2",
                            "display",
                            250,
                            0,
                            "linear",
                            "${home}",
                            'block',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${usephotoBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${usephotoBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${numPad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid22",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${numPad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${numPad}",
                            'none',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${numPad}",
                            'none',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${numPad}",
                            'none',
                            'none'
                        ],
                        [
                            "eid31",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${priceBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid32",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${priceBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${profilepage}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${profilepage}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${fbBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid67",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${fbBtn}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${keypad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${keypad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${fbkeypadBtn}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${fbkeypadBtn}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Btn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '159px', '108px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '159px', '108px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("VictoriaHumphrey_moble_app_edgeActions.js");
})("EDGE-45771325");
