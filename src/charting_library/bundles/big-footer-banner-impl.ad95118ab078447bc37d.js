(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[69910,19157,60190],{302399:(e,n,t)=>{"use strict";t.d(n,{default:()=>o});var r=t(601141);const i=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};const a=function(e){return this.__data__.has(e)};function s(e){var n=-1,t=null==e?0:e.length;for(this.__data__=new r.default;++n<t;)this.add(e[n])}s.prototype.add=s.prototype.push=i,s.prototype.has=a;const o=s},517487:(e,n,t)=>{"use strict";t.d(n,{default:()=>V});var r=t(396335),i=t(302399);const a=function(e,n){for(var t=-1,r=null==e?0:e.length;++t<r;)if(n(e[t],t,e))return!0;return!1};var s=t(817651);const o=function(e,n,t,r,o,d){var l=1&t,u=e.length,c=n.length;if(u!=c&&!(l&&c>u))return!1;var k=d.get(e);if(k&&d.get(n))return k==n;var h=-1,_=!0,p=2&t?new i.default:void 0;for(d.set(e,n),d.set(n,e);++h<u;){var g=e[h],v=n[h];if(r)var m=l?r(v,g,h,n,e,d):r(g,v,h,e,n,d);if(void 0!==m){if(m)continue;_=!1;break}if(p){if(!a(n,(function(e,n){if(!(0,s.default)(p,n)&&(g===e||o(g,e,t,r,d)))return p.push(n)}))){_=!1;break}}else if(g!==v&&!o(g,v,t,r,d)){_=!1;break}}return d.delete(e),d.delete(n),_};var d=t(503060),l=t(735246),u=t(872575);const c=function(e){var n=-1,t=Array(e.size);return e.forEach((function(e,r){t[++n]=[r,e]})),t};var k=t(870729),h=d.default?d.default.prototype:void 0,_=h?h.valueOf:void 0;const p=function(e,n,t,r,i,a,s){switch(t){case"[object DataView]":if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=n.byteLength||!a(new l.default(e),new l.default(n)));case"[object Boolean]":case"[object Date]":case"[object Number]":return(0,u.default)(+e,+n);case"[object Error]":return e.name==n.name&&e.message==n.message;case"[object RegExp]":case"[object String]":return e==n+"";case"[object Map]":var d=c;case"[object Set]":var h=1&r;if(d||(d=k.default),e.size!=n.size&&!h)return!1;var p=s.get(e);if(p)return p==n;r|=2,s.set(e,n);var g=o(d(e),d(n),r,i,a,s);return s.delete(e),g;case"[object Symbol]":if(_)return _.call(e)==_.call(n)}return!1};var g=t(885747),v=Object.prototype.hasOwnProperty;const m=function(e,n,t,r,i,a){var s=1&t,o=(0,g.default)(e),d=o.length;if(d!=(0,g.default)(n).length&&!s)return!1;for(var l=d;l--;){var u=o[l];if(!(s?u in n:v.call(n,u)))return!1}var c=a.get(e);if(c&&a.get(n))return c==n;var k=!0;a.set(e,n),a.set(n,e);for(var h=s;++l<d;){var _=e[u=o[l]],p=n[u];if(r)var m=s?r(p,_,u,n,e,a):r(_,p,u,e,n,a);if(!(void 0===m?_===p||i(_,p,t,r,a):m)){k=!1;break}h||(h="constructor"==u)}if(k&&!h){var w=e.constructor,f=n.constructor;w==f||!("constructor"in e)||!("constructor"in n)||"function"==typeof w&&w instanceof w&&"function"==typeof f&&f instanceof f||(k=!1)}return a.delete(e),a.delete(n),k};var w=t(903427),f=t(854814),S=t(925247),I=t(54744),T="[object Arguments]",b="[object Array]",M="[object Object]",y=Object.prototype.hasOwnProperty;const E=function(e,n,t,i,a,s){var d=(0,f.default)(e),l=(0,f.default)(n),u=d?b:(0,w.default)(e),c=l?b:(0,w.default)(n),k=(u=u==T?M:u)==M,h=(c=c==T?M:c)==M,_=u==c
;if(_&&(0,S.default)(e)){if(!(0,S.default)(n))return!1;d=!0,k=!1}if(_&&!k)return s||(s=new r.default),d||(0,I.default)(e)?o(e,n,t,i,a,s):p(e,n,u,t,i,a,s);if(!(1&t)){var g=k&&y.call(e,"__wrapped__"),v=h&&y.call(n,"__wrapped__");if(g||v){var E=g?e.value():e,z=v?n.value():n;return s||(s=new r.default),a(E,z,t,i,s)}}return!!_&&(s||(s=new r.default),m(e,n,t,i,a,s))};var z=t(383527);const V=function e(n,t,r,i,a){return n===t||(null==n||null==t||!(0,z.default)(n)&&!(0,z.default)(t)?n!=n&&t!=t:E(n,t,r,i,e,a))}},817651:(e,n,t)=>{"use strict";t.d(n,{default:()=>r});const r=function(e,n){return e.has(n)}},870729:(e,n,t)=>{"use strict";t.d(n,{default:()=>r});const r=function(e){var n=-1,t=Array(e.size);return e.forEach((function(e){t[++n]=e})),t}},316230:(e,n,t)=>{"use strict";t.d(n,{default:()=>i});var r=t(517487);const i=function(e,n){return(0,r.default)(e,n)}},630790:(e,n,t)=>{"use strict";t.r(n),t.d(n,{bigFooterBannerInitImpl:()=>a});var r=t(72498),i=t(510485);function a(){document.querySelector(".js-big-footer-banner-init-ssr")&&(0,r.hydrate)(i.BigFooterBanner,".js-big-footer-banner-init-ssr")}},402863:(e,n,t)=>{"use strict";t.d(n,{getComponentInitData:()=>a});var r=t(650151),i=t(588948);function a(e){return(0,i.getFreshInitData)()[(0,r.ensureDefined)(e.dataset.propsId)]}},72498:(e,n,t)=>{"use strict";t.r(n),t.d(n,{hydrate:()=>o});var r=t(50959),i=t(500962),a=t(650151),s=t(402863);function o(e,n){const t=(0,a.ensureNotNull)(document.querySelector(n));return i.hydrate(r.createElement(e,{...(0,s.getComponentInitData)(t)}),t),()=>i.unmountComponentAtNode(t)}},822373:e=>{e.exports={ar:["نصوص {linkScriptStart}المخصصة{linkScriptEnd} والتحليلات {linkIdeasStart} {linkIdeasEnd} التي يشاركها المستخدمون"],ca_ES:"Custom {linkScriptStart}scripts{linkScriptEnd} and {linkIdeasStart}ideas{linkIdeasEnd} shared by our users",cs:"Custom {linkScriptStart}scripts{linkScriptEnd} and {linkIdeasStart}ideas{linkIdeasEnd} shared by our users",de:["Benutzerdefinierte {linkScriptStart}Skripte{linkScriptEnd} und {linkIdeasStart}Ideen{linkIdeasEnd}, die von unseren Nutzern geteilt wurden"],el:"Custom {linkScriptStart}scripts{linkScriptEnd} and {linkIdeasStart}ideas{linkIdeasEnd} shared by our users",en:"Custom {linkScriptStart}scripts{linkScriptEnd} and {linkIdeasStart}ideas{linkIdeasEnd} shared by our users",es:["{linkScriptStart}Scripts{linkScriptEnd} personalizados e {linkIdeasStart}ideas{linkIdeasEnd} compartidas por nuestros usuarios"],fa:"Custom {linkScriptStart}scripts{linkScriptEnd} and {linkIdeasStart}ideas{linkIdeasEnd} shared by our users",fr:["{linkScriptStart}Scripts{linkScriptEnd} personnalisés et {linkIdeasStart}idées{linkIdeasEnd} partagés par nos utilisateurs"],he_IL:["{linkScriptStart}סקריפטים{linkScriptEnd} ו-{linkIdeasStart}רעיונות{linkIdeasEnd} מותאמים אישית ששותפו על ידי המשתמשים שלנו"],hu_HU:"Custom {linkScriptStart}scripts{linkScriptEnd} and {linkIdeasStart}ideas{linkIdeasEnd} shared by our users",id_ID:["{linkScriptStart}Skrip{linkScriptEnd} kustom dan {linkIdeasStart}ide-ide{linkIdeasEnd} yang dibagikan oleh pengguna kami"],
it:["Personalizza gli {linkScriptStart}script{linkScriptEnd} e le {linkIdeasStart}idee{linkIdeasEnd} condivise dai nostri utenti"],ja:["ユーザーから寄せられた{linkScriptStart}カスタムスクリプト{linkScriptEnd}や{linkIdeasStart}アイデア{linkIdeasEnd}"],ko:["사용자가 공유한 커스텀 {linkScriptStart}스크립트{linkScriptEnd} 및 {linkIdeasStart}아이디어{linkIdeasEnd}"],ms_MY:["{linkScriptStart}Skrip{linkScriptEnd} tersuai dan {linkIdeasStart}idea{linkIdeasEnd} dikongsi oleh pengguna kami"],nl_NL:"Custom {linkScriptStart}scripts{linkScriptEnd} and {linkIdeasStart}ideas{linkIdeasEnd} shared by our users",pl:["Niestandardowe {linkScriptStart}skrypty{linkScriptEnd} i {linkIdeasStart}pomysły{linkIdeasEnd} udostępnione przez naszych użytkowników"],pt:["{linkScriptStart}scripts{linkScriptEnd} e {linkIdeasStart}ideias{linkIdeasEnd} personalizadas compartilhadas por nossos usuários"],ro:"Custom {linkScriptStart}scripts{linkScriptEnd} and {linkIdeasStart}ideas{linkIdeasEnd} shared by our users",ru:["Оригинальных {linkScriptStart}скриптов{linkScriptEnd} и {linkIdeasStart}идей{linkIdeasEnd} от наших пользователей."],sv:["Anpassa {linkScriptStart}skript{linkScriptEnd} och {linkIdeasStart}idéer{linkIdeasEnd} delade av våra användare"],th:["{linkScriptStart}สคริปต์{linkScriptEnd} ที่กำหนดเองและ{linkIdeasStart}แนวคิด{linkIdeasEnd}ที่ผู้ใช้ของเราแบ่งปัน"],tr:["Kullanıcılarımız tarafından paylaşılan özel {linkScriptStart}komut {linkScriptEnd} ve {linkIdeasStart}fikir {linkIdeasEnd}"],vi:["Tùy chỉnh {linkScriptStart}các tập lệnh{linkScriptEnd} và {linkIdeasStart}các ý tưởng{linkIdeasEnd} được người dùng chia sẻ"],zh:["我们用户共享的自定义{linkScriptStart}脚本{linkScriptEnd}和{linkIdeasStart}观点{linkIdeasEnd}"],zh_TW:["我們用戶共享的自訂{linkScriptStart}腳本{linkScriptEnd}和{linkIdeasStart}想法{linkIdeasEnd}"]}},737166:e=>{e.exports={ar:["أليكس هونولد على صخرة"],ca_ES:"Alex Honnold on the rock",cs:"Alex Honnold on the rock",de:["Alex Honnold am Felsen"],el:"Alex Honnold on the rock",en:"Alex Honnold on the rock",es:"Alex Honnold on the rock",fa:"Alex Honnold on the rock",fr:"Alex Honnold on the rock",he_IL:["אלכס הונולד על הסלע"],hu_HU:"Alex Honnold on the rock",id_ID:["Alex Honnold sedang beraksi"],it:"Alex Honnold on the rock",ja:["岩壁上のアレックス・オノルド"],ko:["알렉스 호놀드 온 더 락"],ms_MY:["Alex Honnold mendaki"],nl_NL:"Alex Honnold on the rock",pl:["Alex Honnold na skale"],pt:["Alex Honnold escalando"],ro:"Alex Honnold on the rock",ru:["Алекс Хоннольд взбирается на вершину"],sv:["Alex Honnold på berget"],th:"Alex Honnold on the rock",tr:["Alex Honnold kayanın üzerinde"],vi:["Alex Honnold trên đỉnh núi"],zh:["亚历克斯·霍诺德在攀岩"],zh_TW:["艾力克斯·霍諾德在攀岩"]}},752624:e=>{e.exports={ar:["أكثر من 1 مليون تقييم. لا يوجد تطبيق {link_start}مالي{link_end} آخر محبوب أكثر من تطبيقنا"],ca_ES:"From 1M+ reviews. No other {link_start}finance{link_end} app is more loved",cs:"From 1M+ reviews. No other {link_start}finance{link_end} app is more loved",de:["Mehr als 1 Million Reviews zufolge. Keine andere{link_start}Finanz-App{link_end} ist beliebter"],el:"From 1M+ reviews. No other {link_start}finance{link_end} app is more loved",
en:"From 1M+ reviews. No other {link_start}finance{link_end} app is more loved",es:["Más de 1M de reseñas. No encontrará otra app {link_start}financiera{link_end} tan querida"],fa:"From 1M+ reviews. No other {link_start}finance{link_end} app is more loved",fr:["Selon 1M+ de commentaires. Aucune autre application de {link_start}finance{link_end} n'est plus appréciée"],he_IL:["מ-1 מיליון+ ביקורות. אין אפליקציה אחרת של {link_start}פיננסים{link_end} שאהובה יותר"],hu_HU:"From 1M+ reviews. No other {link_start}finance{link_end} app is more loved",id_ID:["Dengan lebih dari 1 Juta ulasan. Tidak ada aplikasi {link_start}keuangan{link_end} yang lebih dicintai selain kami"],it:["Oltre 1M di recensioni. Nessun'altra applicazione {link_start}finanziaria{link_end} è più amata"],ja:["100万人以上のレビューによると ー これほど愛用されている{link_start}ファイナンスアプリ{link_end}は他にありません"],ko:["100만 건 이상의 리뷰에서. 이보다 더 사랑받는 {link_start}금융{link_end} 앱은 없습니다."],ms_MY:["Dari 1J+ ulasan. Tiada aplikasi {link_start}kewangan{link_end} lain yang lebih disukai"],nl_NL:"From 1M+ reviews. No other {link_start}finance{link_end} app is more loved",pl:["Z ponad miliona recenzji. Żadna inna aplikacja {link_start}finanse{link_end} nie jest tak popularna"],pt:["Mais de 1M de avaliações. Nenhum outro app de {link_start}finanças{link_end} é tão amado."],ro:"From 1M+ reviews. No other {link_start}finance{link_end} app is more loved",ru:["Рейтинг на основе 1 млн оценок. Нет {link_start}финансового{link_end} приложения, которое любят больше."],sv:["Fler än 1 miljoner recensioner. Ingen annan {link_start}finans{link_end}-app är mer omtyckt"],th:"From 1M+ reviews. No other {link_start}finance{link_end} app is more loved",tr:"From 1M+ reviews. No other {link_start}finance{link_end} app is more loved",vi:["Từ hơn 1 triệu đánh giá. Không có ứng dụng {link_start}tài chính{link_end} nào được yêu thích hơn"],zh:["来自超过1M+条评论。没有其它{link_start}金融{link_end}app比它更受欢迎"],zh_TW:["超過100萬條評論。沒有其他{link_start}金融{link_end}app比它更受歡迎"]}},21090:e=>{e.exports={ar:["إليك السبب"],ca_ES:"Here's why",cs:"Here's why",de:["Sehen Sie, wieso"],el:"Here's why",en:"Here's why",es:["¿Por qué?"],fa:"Here's why",fr:["Voyez pourquoi"],he_IL:["ראה מדוע"],hu_HU:"Here's why",id_ID:["Lihat mengapa"],it:["Ecco perché"],ja:["理由を見てみる"],ko:["까닭은 다음과 같습니다"],ms_MY:["Lihat kenapa"],nl_NL:"Here's why",pl:["Dlatego"],pt:["Aqui está o porquê"],ro:"Here's why",ru:["О TradingView"],sv:["Läs varför"],th:"Here's why",tr:["Neden olduğunu öğrenin"],vi:["Xem lý do tại sao"],zh:["这就是为什么"],zh_TW:["這就是為什麼"]}},882777:e=>{e.exports={ar:["التضامن في كل \n#TradingView"],ca_ES:"Love in every\n#TradingView",cs:"Love in every\n#TradingView",de:["Liebe in jedem\n#TradingView"],el:"Love in every\n#TradingView",en:"Love in every\n#TradingView",es:["Amor en cada\n#TradingView"],fa:"Love in every\n#TradingView",fr:["#TradingView \nC'est que de l'amour"],he_IL:["אהבה בכל\n#TradingView"],hu_HU:"Love in every\n#TradingView",id_ID:["Cinta di setiap\n#TradingView"],it:["Amore ad ogni \n#TradingView"],ja:["#TradingView に\n愛を込めて"],ko:["모든 곳에서 사랑받는\n#트레이딩뷰"],
ms_MY:["Cinta dalam setiap\n#TradingView"],nl_NL:"Love in every\n#TradingView",pl:["Miłość w każdym \n#TradingView"],pt:["Amor em tudo\n#TradingView"],ro:"Love in every\n#TradingView",ru:["Любовь в каждом\n#TradingView"],sv:["Kärlek i varje\n#TradingView"],th:"Love in every\n#TradingView",tr:["Tümüyle sevgi\n#TradingView"],vi:["Yêu trong từng \n#TradingView"],zh:["爱上每一个\n#TradingView"],zh_TW:["愛無所不在\n#TradingView"]}},130902:e=>{e.exports={ar:["عرض أقل"],ca_ES:"Show less",cs:"Show less",de:["Weniger anzeigen"],el:"Show less",en:"Show less",es:["Mostrar menos"],fa:"Show less",fr:["Afficher moins"],he_IL:["הצג פחות"],hu_HU:"Show less",id_ID:["Tampilkan lebih sedikit"],it:["Mostra meno"],ja:["少なく表示"],ko:["덜 보기"],ms_MY:["Kurangkan paparan"],nl_NL:"Show less",pl:["Pokaż mniej"],pt:["Mostrar menos"],ro:"Show less",ru:["Показать меньше"],sv:["Visa mindre"],th:["แสดงน้อยลง"],tr:["Daha az göster"],vi:["Hiển thị ít hơn"],zh:["显示较少"],zh_TW:["顯示較少"]}},567402:e=>{e.exports={ar:["اعرض المزيد"],ca_ES:"Show more",cs:"Show more",de:["Mehr anzeigen"],el:"Show more",en:"Show more",es:["Mostrar más"],fa:"Show more",fr:["Montrer plus"],he_IL:["הצג עוד"],hu_HU:["Mutass többet"],id_ID:["Perlihatkan lebih banyak"],it:["Mostra di più"],ja:["詳細を表示"],ko:["더 보기"],ms_MY:["Paparkan lebih lanjut"],nl_NL:"Show more",pl:["Pokaż więcej"],pt:["Mostrar Mais"],ro:"Show more",ru:["Показать больше"],sv:["Visa mer"],th:["แสดงเพิ่มเติม"],tr:["Daha fazla göster"],vi:["Hiển thị thêm"],zh:["显示更多"],zh_TW:["顯示更多"]}},524936:e=>{e.exports={ar:["مهما كان هدفك"],ca_ES:"Whatever the trade",cs:"Whatever the trade",de:["Was auch getradet wird"],el:"Whatever the trade",en:"Whatever the trade",es:["Para cualquier operación"],fa:"Whatever the trade",fr:["Quel que soit le trade"],he_IL:["יהיה המסחר אשר יהיה"],hu_HU:"Whatever the trade",id_ID:["Apa pun tradingnya"],it:["Qualunque sia il trade"],ja:["どんなトレードでも"],ko:["어떤 거래든"],ms_MY:["Apapun dagangan"],nl_NL:"Whatever the trade",pl:"Whatever the trade",pt:["Qualquer que seja a negociação"],ro:"Whatever the trade",ru:["Где бы вы ни оказались"],sv:["Oavsett vilken bransch det handlar om"],th:"Whatever the trade",tr:["İşlem ne olursa olsun"],vi:["Dù giao dịch là gì"],zh:["无论任何交易"],zh_TW:["無論任何交易"]}},800675:e=>{e.exports={ar:["المتداولون والمستثمرون الذين يزوروننا كل شهر"],ca_ES:"Traders and investors who visit us every month",cs:"Traders and investors who visit us every month",de:["Trader und Investoren, die uns jeden Monat besuchen"],el:"Traders and investors who visit us every month",en:"Traders and investors who visit us every month",es:["Traders e inversores que nos visitan todos los meses"],fa:"Traders and investors who visit us every month",fr:["Traders et investisseurs qui visitent notre site chaque mois."],he_IL:["סוחרים ומשקיעים שמבקרים אותנו מדי חודש"],hu_HU:"Traders and investors who visit us every month",id_ID:["Trader dan investor mengunjungi kami setiap bulannya"],it:["Trader ed investitori che passano di qua ogni mese"],ja:["トレーダーと投資家の月間訪問者数"],ko:["매달 우리를 찾아 오시는 트레이더 및 인베스터분들"],
ms_MY:["Pedagang dan pelabur yang melawati kami setiap bulan"],nl_NL:"Traders and investors who visit us every month",pl:["Traderów i inwestorów, którzy odwiedzają nas co miesiąc"],pt:["Traders e investidores que nos visitam todos os meses"],ro:"Traders and investors who visit us every month",ru:["Столько трейдеров и инвесторов пользуется TradingView ежемесячно."],sv:["Traders och investerare som besöker oss varje månad"],th:["มีเทรดเดอร์และนักลงทุนเข้ามาเยี่ยมเราเพิ่มขึ้นในทุกๆเดือน"],tr:["Her ay bizi ziyaret eden işlemci ve yatırımcılar"],vi:["Các nhà giao dịch và nhà đầu tư ghé thăm chúng tôi hàng tháng"],zh:["每月访问我们的交易者和投资人"],zh_TW:["每月訪問我們的交易者和投資人"]}},549862:e=>{e.exports={ar:["رسم بياني من TradingView على حساب إنستغرام {user}"],ca_ES:"TradingView Chart on Instagram {user}",cs:"TradingView Chart on Instagram {user}",de:["TradingView Chart bei Instagram {user}"],el:"TradingView Chart on Instagram {user}",en:"TradingView Chart on Instagram {user}",es:["Gráfico de TradingView en {user} de Instagram"],fa:"TradingView Chart on Instagram {user}",fr:["TradingView Chart sur {user} Instagram"],he_IL:["גרף TradingView באינסטגרם {user}"],hu_HU:"TradingView Chart on Instagram {user}",id_ID:["Chart TradingView di Instagram {user}"],it:["Grafico TradingView su Instagram {user}"],ja:["Instagram {user} のTradingViewチャート"],ko:["{user} 인스타그램의 트레이딩뷰 차트"],ms_MY:["Carta TradingView pada Instagram {user}"],nl_NL:"TradingView Chart on Instagram {user}",pl:["Wykres TradingView na Instagramie {user}"],pt:["Gráfico do TradingView no Instragam {user}"],ro:"TradingView Chart on Instagram {user}",ru:["График TradingView в Instagram {user}"],sv:["TradingView Chart på Instagram {user}"],th:["ชาร์ต TradingView บน Instagram {user}"],tr:["Instagram {user} üzerinde TradingView Grafiği"],vi:["Biểu đồ TradingView trên Instagram {user}"],zh:["Instagram上的TradingView图表{user}"],zh_TW:["Instagram上的TradingView圖表{user}"]}},497937:e=>{e.exports={ar:["{link_start}أفضل موقع{link_end} في العالم عندما يتعلق الأمر بالاستثمار"],ca_ES:"{link_start}Top website{link_end} in the world when it comes to all things investing",cs:"{link_start}Top website{link_end} in the world when it comes to all things investing",de:["{link_start} Top-Webseite {link_end} der Welt, wenn es um Investitionen geht"],el:"{link_start}Top website{link_end} in the world when it comes to all things investing",en:"{link_start}Top website{link_end} in the world when it comes to all things investing",es:["{link_start}El mejor sitio web{link_end} del mundo en lo que respecta a inversiones"],fa:"{link_start}Top website{link_end} in the world when it comes to all things investing",fr:["{link_start} Le meilleur site web au monde {link_end} pour tout ce qui concerne les investissements"],he_IL:["{link_start} האתר המוביל {link_end} בעולם בכל הקשור להשקעות"],hu_HU:"{link_start}Top website{link_end} in the world when it comes to all things investing",id_ID:["{link_start}Situs web paling top{link_end} di dunia jika berbicara tentang semua hal yang berhubungan dengan investasi"],
it:["{link_start} maggiori siti web {link_end} al mondo in ambito finanziario"],ja:["投資に関するあらゆることを網羅した{link_start}世界トップレベルのウェブサイト{link_end}"],ko:["투자하는 모든 것에 관한 {link_start} 세계 최고의 웹사이트 {link_end}"],ms_MY:["{link_start}Laman web terbaik {link_end} di dunia untuk semua perkara berkaitan pelaburan"],nl_NL:"{link_start}Top website{link_end} in the world when it comes to all things investing",pl:["{link_start} Najlepsza witryna {link_end} na świecie, jeśli chodzi o wszystkie kwestie związane z inwestowaniem"],pt:["{link_start} Principal site {link_end} do mundo quando se trata de investimentos"],ro:"{link_start}Top website{link_end} in the world when it comes to all things investing",ru:["{link_start}Самый популярный в мире сайт{link_end} в сфере инвестирования."],sv:["{link_start} Världens bästa webbplats {link_end} när det gäller allt som rör investeringar."],th:["{link_start} เว็บไซต์ยอดนิยม {link_end} ที่สุดในโลกเมื่อพูดถึงการลงทุนทุกอย่าง"],tr:["Konu yatırım olduğunda dünyanın {link_start} en iyi web sitesi {link_end}"],vi:["{link_start}Trang web hàng đầu{link_end} trên thế giới về mọi vấn đề liên quan đến đầu tư"],zh:["关于所有投资的世界{link_start}顶级网站{link_end}"],zh_TW:["關於所有投資的世界{link_start}頂級網站{link_end}"]}},670867:e=>{e.exports={ar:"{scripts_count}M+",ca_ES:"{scripts_count}M+",cs:"{scripts_count}M+",de:"{scripts_count}M+",el:"{scripts_count}M+",en:"{scripts_count}M+",es:"{scripts_count}M+",fa:"{scripts_count}M+",fr:"{scripts_count}M+",he_IL:"{scripts_count}M+",hu_HU:"{scripts_count}M+",id_ID:"{scripts_count}M+",it:"{scripts_count}M+",ja:["{scripts_count}00万+"],ko:"{scripts_count}M+",ms_MY:"{scripts_count}M+",nl_NL:"{scripts_count}M+",pl:"{scripts_count}M+",pt:"{scripts_count}M+",ro:"{scripts_count}M+",ru:"{scripts_count}M+",sv:["{scripts_count}+ M"],th:"{scripts_count}M+",tr:"{scripts_count}M+",vi:["Hơn {scripts_count}Triệu"],zh:"{scripts_count}M+",zh_TW:"{scripts_count}M+"}},375897:e=>{e.exports={ar:"{traders_count}M+",ca_ES:"{traders_count}M+",cs:"{traders_count}M+",de:"{traders_count}M+",el:"{traders_count}M+",en:"{traders_count}M+",es:"{traders_count}M+",fa:"{traders_count}M+",fr:"{traders_count}M+",he_IL:"{traders_count}M+",hu_HU:"{traders_count}M+",id_ID:"{traders_count}M+",it:"{traders_count}M+",ja:["{traders_count}00万+"],ko:"{traders_count}M+",ms_MY:"{traders_count}M+",nl_NL:"{traders_count}M+",pl:"{traders_count}M+",pt:"{traders_count}M+",ro:"{traders_count}M+",ru:"{traders_count}M+",sv:["{traders_count}+ M"],th:"{traders_count}M+",tr:"{traders_count}M+",vi:["Hơn {traders_count}Triệu"],zh:"{traders_count}M+",zh_TW:"{traders_count}M+"}}}]);