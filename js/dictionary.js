const dictionary = {
    'title': {
        'EN': 'Title',
        'CN': '标题',
    },
    'subtitle': {
        'EN': 'DEDICATED TO EXPLORING THE BOUNDARIES OF THE CLASSICAL BLOCKCHAIN',
        'CN': '致力於探索古典區塊鏈的邊界',
    },
    /*-- Nav Bar Entries --*/
    'nav-button-home': {
        'EN': 'HOME',
        'CN': '主頁',
    },
    'nav-button2': {
        'EN': 'ABOUT US',
        'CN': '關於我們',
    },
    'nav-button3': {
        'EN': 'INSPIRATION BOARD',
        'CN': '特別感謝',
    },
    'nav-button4': {
        'EN': 'PRODUCTS',
        'CN': '作品',
    },
    'nav-button5': {
        'EN': 'TEAM',
        'CN': '團隊',
    },
    'nav-button-lang': {
        'EN': 'LANGUAGE',
        'CN': 'LANGUAGE',
    },

    /*-- Intro Page --*/
    'intro-text1': {
        'EN': "The original members of BlockNG Capital are from third world countries whose economic systems have collapsed, and have been spared the swamp of inflation thanks to the immense wealth brought about by the blockchain.",
        'CN': "BlockNG Capital 的初始成員均來自經濟系統已經崩潰的第三世界國家，得益於區塊鏈帶來的巨大財富，使得他們幸免於通貨膨脹的泥沼之中。"
    },
    'intro-text2': {
        'EN': 'BlockNG Capital is a professional investment institutions focusing on blockchain industry.',
        'CN': 'BlockNG Capital是一家專注於區塊鏈行業的專業投資機構。'
    },

    'intro-text5': {
        'EN': '<b style=\'font-size: 16px;color: white\'>Vision</b><br> BlockNG Capital aims to connect every participant in the classical blockchain through project investments and collaborations to build a strong industry ecosystem and build a new economic system for the blockchain.',
        'CN': '<b style=\'font-size: 15px;color: white\'>願景</b><br>BlockNG Capital旨在通過項目投資與合作來連接古典區塊鏈的每個參與者，建立一個强大的行業生態系統，構建區塊鏈新經濟系統。'
    },

    'intro-text6': {
        'EN': '<b style=\'font-size: 16px;color: white\'>Culture </b><br>Always verify, Don\'t trust. ',
        'CN': '<b style=\'font-size: 15px;color: white\'>價值觀</b><br>Always verify, Don\'t trust. '
    },
    /*-- Service Page --*/
    'service-title1': {
        'EN': 'N-G CYBERSAPCE CREDIT\n',
        'CN': '次世代賽博信用'
    },
    'service-content1': {
        'EN': 'The classical financial system is dying, and everyone is responsible for it',
        'CN': '傳統金融系統正在死亡，所有人都應為此負責'
    },
    'service-tooltip1': {
        'EN': 'Enter',
        'CN': 'Enter'
    },
    'service-title2': {
        'EN': 'WISH BOX',
        'CN': '许愿盒'
    },
    'service-content2': {
        'EN': 'The Dream of Decentralization and Financial Freedom',
        'CN': '去中心化與財務自由的美夢'
    },
    'service-tooltip2': {
        'EN': 'Coming Soon',
        'CN': 'Coming Soon'
    },
    'service-title3': {
        'EN': 'BLESSING FUND',
        'CN': '福报基金会'
    },
    'service-content3': {
        'EN': 'No more financial slavery for Cyberspace.',
        'CN': '賽博空間不會再有金融奴隸制'
    },
    'service-tooltip3': {
        'EN': 'Coming Soon',
        'CN': 'Coming Soon'
    },
    'service-title4': {
        'EN': 'TRONMASK',
        'CN': 'TRONMASK'
    },
    'service-content4': {
        'EN': 'A decentralized portal to security and peace of mind.',
        'CN': '安全無憂的中心化的傳送之門'
    },
    'service-tooltip4': {
        'EN': 'Coming Soon',
        'CN': 'Coming Soon'
    },
     /*-- Team Page --*/
    'team-text': {
        'EN': 'Over 15 investment/service professionals worldwide located in Singapore, Turkey, Iran, Venezuela, etc.',
        'CN': '全球超過15名專業的投資/服務人員分佈在新加坡、土耳其、伊朗、委內瑞拉'
    },
    'team-location1': {
        'EN': 'República Bolivariana de Venezuela',
        'CN': '委內瑞拉'
    },
    'team-location2': {
        'EN': 'Türkiye Cumhuriyeti',
        'CN': '土耳其'
    },
    'team-location3': {
        'EN': 'جمهوری اسلامی ایران',
        'CN': '首  尔'
    },
    'team-location4': {
        'EN': 'The Republic of Zimbabwe',
        'CN': '津巴布韦'
    },
    'team-location5': {
        'EN': 'Singapore',
        'CN': '新加坡'
    }
}

const langs = ['EN', 'CN'];
var current_lang = langs[0];
window.change_lang = (index) => {
    current_lang = langs[index];
    translate();
}

function translate() {
    $("[data-translate]").each(function () {
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
    });
}

translate();
