(() => {
  "use strict";
  var e,
    a,
    c,
    d,
    f,
    t = {},
    b = {};
  function r(e) {
    var a = b[e];
    if (void 0 !== a) return a.exports;
    var c = (b[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(c.exports, c, c.exports, r), (c.loaded = !0), c.exports;
  }
  (r.m = t),
    (r.c = b),
    (e = []),
    (r.O = (a, c, d, f) => {
      if (!c) {
        var t = 1 / 0;
        for (i = 0; i < e.length; i++) {
          for (var [c, d, f] = e[i], b = !0, o = 0; o < c.length; o++)
            (!1 & f || t >= f) && Object.keys(r.O).every((e) => r.O[e](c[o]))
              ? c.splice(o--, 1)
              : ((b = !1), f < t && (t = f));
          if (b) {
            e.splice(i--, 1);
            var n = d();
            void 0 !== n && (a = n);
          }
        }
        return a;
      }
      f = f || 0;
      for (var i = e.length; i > 0 && e[i - 1][2] > f; i--) e[i] = e[i - 1];
      e[i] = [c, d, f];
    }),
    (r.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return r.d(a, { a }), a;
    }),
    (c = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (r.t = function (e, d) {
      if ((1 & d && (e = this(e)), 8 & d)) return e;
      if ("object" == typeof e && e) {
        if (4 & d && e.__esModule) return e;
        if (16 & d && "function" == typeof e.then) return e;
      }
      var f = Object.create(null);
      r.r(f);
      var t = {};
      a = a || [null, c({}), c([]), c(c)];
      for (var b = 2 & d && e; "object" == typeof b && !~a.indexOf(b); b = c(b))
        Object.getOwnPropertyNames(b).forEach((a) => (t[a] = () => e[a]));
      return (t.default = () => e), r.d(f, t), f;
    }),
    (r.d = (e, a) => {
      for (var c in a)
        r.o(a, c) &&
          !r.o(e, c) &&
          Object.defineProperty(e, c, { enumerable: !0, get: a[c] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((a, c) => (r.f[c](e, a), a), []))),
    (r.u = (e) =>
      5652 === e
        ? "__LANG__.5652.e8bf228a6da07385f3cd.js"
        : 2468 === e
        ? "__LANG__.2468.4338de5955cc8d3cb66d.js"
        : 4782 === e
        ? "__LANG__.4782.b54749a80d1b22661ce2.js"
        : 6848 === e
        ? "__LANG__.6848.1833cd09ce56c0318402.js"
        : 2194 === e
        ? "__LANG__.2194.1e0d9da8ae0e0c6b9fec.js"
        : 1626 === e
        ? "__LANG__.1626.e17efbef59ce9b4bc834.js"
        : 6682 === e
        ? "__LANG__.6682.fc6d6d5a6889089c265c.js"
        : 4800 === e
        ? "__LANG__.4800.b83a96f0775e7b691faa.js"
        : 6847 === e
        ? "__LANG__.6847.490ee46270bef6a878dd.js"
        : 4150 === e
        ? "__LANG__.4150.61de76c7f578feeb03b8.js"
        : 8087 === e
        ? "__LANG__.8087.02a950e0b171d1520043.js"
        : ({
            92: "chart-screenshot-hint",
            139: "get-error-card",
            507: "study-pane-views",
            607: "study-property-pages-with-definitions",
            731: "add-compare-dialog",
            1583: "lt-pane-views",
            1584: "context-menu-renderer",
            1702: "manage-drawings-dialog",
            1754: "symbol-search-dialog",
            1859: "go-to-date-dialog-impl",
            1890: "line-tools-icons",
            2077: "change-interval-dialog",
            2183: "study-inputs-pane-views",
            2306: "floating-toolbars",
            2377: "hammerjs",
            2616: "svg-renderer",
            2704: "currency-label-menu",
            2878: "drawing-toolbar",
            3005: "header-toolbar",
            3030: "new-confirm-inputs-dialog",
            3596: "general-property-page",
            4013: "custom-intervals-add-dialog",
            4079: "series-pane-views",
            4389: "take-chart-image-impl",
            4665: "share-chart-to-social-utils",
            4862: "object-tree-dialog",
            5009: "load-chart-dialog",
            5093: "chart-widget-gui",
            5516: "restricted-toolset",
            5551: "favorite-drawings-api",
            6166: "chart-event-hint",
            6265: "new-edit-object-dialog",
            6456: "study-market",
            6631: "study-template-dialog",
            6780: "source-properties-editor",
            7078: "general-chart-properties-dialog",
            7260: "chart-bottom-toolbar",
            7271: "compare-model",
            7648: "show-theme-save-dialog",
            7987: "lt-icons-atlas",
            8020: "user-defined-bars-marks-tooltip",
            8537: "lt-property-pages-with-definitions",
            8643: "full-tooltips-popup",
            8890: "simple-dialog",
            9039: "lollipop-tooltip-renderer",
            9374: "symbol-info-dialog-impl",
            9498: "export-data",
            9685: "series-icons-map",
          }[e] || e) +
          "." +
          {
            92: "313b0b47e4c76ba21a62",
            105: "85874ab839d32a8a7c70",
            139: "ea6360a95cdae7dad70f",
            140: "c698f8c0979e0aa76e73",
            240: "92480a47078a540a8a03",
            346: "76334afce982f8384be4",
            507: "8e4a9692b00afacda22d",
            535: "74d9bc0e51d0ad585990",
            537: "76ee48ffd2cc878e82ae",
            607: "0c619cfdb68ef43fdb67",
            731: "edd0f8d5d2491a1d1c06",
            892: "ac3eeb47e69ab8ff8ac7",
            962: "e2eb6a85de39a3d76e5d",
            1033: "bb804c64fe58de0bace7",
            1075: "1c913af3f0b8358a4d09",
            1140: "530d2fbf19217c6c2837",
            1271: "87cc24463b0ab368ff24",
            1416: "87239bba7a5772e2e600",
            1428: "4db8f95385076af2ebe2",
            1528: "9cdf3baeece30724e816",
            1553: "c076714f5e24887f0b94",
            1583: "8c72818165133979bf16",
            1584: "45f14d00e0059c52ee00",
            1685: "838d129505966759899c",
            1702: "35e2e7bf6e31f5598ae4",
            1754: "318dd6851c75d04282d4",
            1830: "d1c5f4191fdcdbf7b350",
            1859: "473a3b561104e5c3d51f",
            1890: "f41aaa48b2150958e27c",
            1960: "8ebd2403c6732e36d3bb",
            2077: "c471fd455cbea7147266",
            2140: "5564abccc94437be80a9",
            2158: "4b603780e909661194b1",
            2182: "e89f57afaf29667aec87",
            2183: "45f89fd8e14c3fbea0d7",
            2215: "e87235d359e4c375c7b9",
            2306: "91bb0faa913751e75714",
            2377: "6e30e0c48af40bf2f6c0",
            2397: "b12d74441412d9602243",
            2616: "20f83194edf7431f951e",
            2685: "c1a906d8819deb9b5ca4",
            2704: "2815415ec54984e7a75c",
            2754: "617c76909eb4b2b7f861",
            2804: "51df698f3652fc234339",
            2842: "61ec1448858319f48d5a",
            2878: "7f226c0314e0a6d13a77",
            2913: "8db22dab61beccd65338",
            3005: "d4a8df2c27395bb909ac",
            3016: "534185c97bcc73193183",
            3030: "15afcdcee91654fbb6d7",
            3046: "620828ac31103f5257d0",
            3200: "da649f495aae3ade4977",
            3261: "d557899efcd7e4276746",
            3562: "1a11925dc658611c08ed",
            3578: "972a3bea2327d8adc96b",
            3596: "22ecdfa32d18165d6800",
            3626: "626757ec98cee6b4ccdb",
            3687: "60cdd7c35ed91e8ff15c",
            3795: "f7338c3d409d1ba72117",
            3988: "5a425dfbe11985aa0fb7",
            4013: "cd4f3ce7f332bef49355",
            4062: "ef79254d1273624a61fe",
            4079: "8a869c79235246b14f50",
            4147: "5e81c46177f5963f61bd",
            4369: "81ecb47c4af1b9de72fa",
            4389: "273732dacb23911fb5c7",
            4412: "b2890fa257fb53a16249",
            4450: "71a13a69c033ad5110aa",
            4665: "d0d8c434b737debe6dd6",
            4785: "3d5f5dd0e8226a08f4b1",
            4819: "3a61ed5890e6fa29c91e",
            4862: "ceb623c9061579ef4afa",
            4884: "5bb05ba58fdd28f9b5da",
            5009: "a3210be66957f59f90ce",
            5020: "b9af824a0a7e5e020d9b",
            5093: "da89b18b9a0f95f6231b",
            5100: "ce3f026abe4f758bfc67",
            5384: "3dc3207fa2eabbc2a630",
            5516: "292f68f628b81c513fdc",
            5551: "ebdaba98fd7e4f0a9c1d",
            5639: "09442c72990cfe1eee09",
            5729: "7c2985725216bfa75c30",
            5747: "53cf5258c22b561b8dac",
            5761: "7cafd7b3fe32b50091c7",
            5890: "86bca7644e9b4742cfc0",
            5916: "2c61b4317a248eb7a089",
            6092: "54c2d754de303c9b7c8a",
            6166: "0ca3adae43eea16801cf",
            6265: "d3927b935fd414fbe5ee",
            6304: "7cb3ed0e3be488d1c8cc",
            6456: "bc7f3b05f94ea2ddbb50",
            6631: "a3c9e3bef9359e4ab092",
            6780: "b847fde494a538aa4b2f",
            6812: "8859133de433354e78db",
            6879: "5e54654d836077075405",
            7078: "efb2c0f56f646a659b5e",
            7177: "24fd4fdf27847261104f",
            7260: "3380a1bb2a9f5f3c3ef2",
            7263: "f352f6d262009a8bb227",
            7271: "6458a853f4c2c658810e",
            7342: "6817554120c91fc72713",
            7507: "eec4c33278ede4ff77aa",
            7624: "2fec070ad8eb57fc72aa",
            7648: "24c0661ddf7f0b31089c",
            7695: "12e5d268652a1c17d1d3",
            7895: "6745fb102d98150c4426",
            7920: "e0aa14628406fdd9aa39",
            7987: "e989af9bf8cf9856ff25",
            7989: "c8b3bf0c012e67260f47",
            8009: "fced7dbff98ff0282061",
            8020: "bb7109c0dd0c814114f0",
            8049: "eb5d0cfe52ecca5d4a13",
            8110: "f1e1b764c4f798416c97",
            8180: "640f9faeb3f5f9fa190f",
            8230: "4f8002f852c9259f2469",
            8251: "233bde7b9dbc42454f05",
            8271: "ac057a0f1d09d0520f9c",
            8483: "abe3ea54e13546b167af",
            8494: "143450f7c00be27369b3",
            8537: "eafc283dde13edc363ab",
            8619: "ca45b77c88569b91c04c",
            8622: "434c53cea7418e4f7bd6",
            8643: "c4d76612cc0c730a7389",
            8707: "6f43254d31fccaa6165b",
            8819: "e3ef6f9f028524561c02",
            8825: "b6acc714d8c2208ce81d",
            8887: "5fa45d75b8eeb4bdead8",
            8890: "5dd31d8783a4794959a0",
            8955: "bafc3cf104daf05f1298",
            9039: "a3d3a335db14444e4890",
            9050: "f4820dabd96059521d2c",
            9230: "eb70b4621f18a82dd739",
            9262: "da35e5943f851a3e49f4",
            9333: "aa89d1acb624d48d0e25",
            9374: "f8ffbbd0e68800ec13af",
            9415: "5fa19f422ac378f0cac9",
            9498: "3a616045107200f76244",
            9519: "2141b98224d9a2c0391a",
            9685: "43449af05ef22dfd0e5b",
            9776: "40b8cf612c827a83ffac",
            9908: "33de634c55f5a8edf1f5",
          }[e] +
          ".js"),
    (r.miniCssF = (e) =>
      e +
      "." +
      {
        105: "104b2f6f9b0648dec9bf",
        140: "c417fa2d4e2b597fd2e3",
        240: "593f7d3c53306cf0999b",
        346: "6fa4b7609b1ee60b9fb5",
        537: "727e7a8061aba6353cce",
        1033: "dea80f470e3a5dc32a99",
        1140: "9be2612a2846a641de60",
        1271: "e73cc4ab8811551cb45c",
        1416: "6c0ade7cf2b94bcf389f",
        1428: "41a7517d6c141851eae2",
        1528: "5a2e936d44d63a48a319",
        1685: "eced2d2ad306de76de93",
        1830: "3d15be044bd7454440f3",
        1960: "cd6136275cf3692b2266",
        2140: "93a097540409472a6ad2",
        2397: "b9ff782e9526b4bffdd5",
        2685: "e8f70c0201a60bff4a47",
        2754: "46c79b8e0e2bc98e902a",
        2913: "843022c70197263550f1",
        3046: "de47c70192f405571439",
        3200: "d157ce6579f91f2f5451",
        3261: "fe3d72da3000b9dbf293",
        3562: "7453d38d0f6e1f0e1a49",
        3578: "4df13838b20232303215",
        3626: "ef3204dc35e71442a34a",
        3687: "9ffb6026c275aa140253",
        3795: "6c74ef9929e63857d37b",
        4147: "19673911190824b00786",
        4369: "6857708113ce1c4a7366",
        4412: "8d4e1fafa391b5384b61",
        4450: "a48b4a4cfbe6f6242b22",
        4819: "7e5dabc76f3e263cb701",
        4884: "5b077a3cf794b5066e78",
        5020: "b567a8a918688a78eefe",
        5100: "cde5d07bb6ed8d0a8328",
        5384: "3532ec81f09f0141e063",
        5639: "9e2022f70344965799f4",
        5729: "cadde5f41c8c665ff811",
        5761: "5db6f6616a2be01d5134",
        5916: "ab1c13c6b34fbbeefca4",
        6092: "a16d5261d5e9f1e1a7e1",
        6304: "596786a2b899ca328639",
        6812: "e4cb798c8384903bd813",
        6879: "be7ca80c11bcfdfe07be",
        7177: "ef0a796f40d1c904a10c",
        7263: "33a0f5a8d0ecca3d6e24",
        7342: "627086d22455386a2362",
        7507: "15b05cc8ed1b2cbfc54d",
        7624: "85a46f1fadf76e279382",
        7695: "45a1554b55fcf2a2ed5a",
        7895: "289d3858a8027e0fe15d",
        7920: "367547efd90fe510d37e",
        7989: "5cffc6b68a106434f7c8",
        8009: "1b77a042c86ea9603545",
        8049: "0ee06a219c0b23490584",
        8110: "37ff9a45c0ecfd622003",
        8230: "fbb750fd312778403036",
        8251: "63e0709659f930aeabbf",
        8271: "4f5f0c715d1210b60de8",
        8619: "30c312c31b435f209065",
        8707: "82dca75e9f28e0c0ffda",
        8819: "3b1eafc3afb1e3b37d09",
        8825: "93e4bb012e7e3630302e",
        8887: "0779d4b1159318c66688",
        8955: "3b79457016de928c90de",
        9230: "cf0c009c4a14731a6723",
        9262: "ecc84aaa9d0bd39ee899",
        9333: "cd2a3f2212d4663f2c0a",
        9415: "46497a002c7a98a2f3fa",
        9519: "9380073fab73395bfea9",
        9776: "f3f7d85b8d83d2c36ae0",
        9908: "99b4c96fbed415f14f94",
      }[e] +
      ".css"),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (r.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (d = {}),
    (f = "tradingview:"),
    (r.l = (e, a, c, t) => {
      if (d[e]) d[e].push(a);
      else {
        var b, o;
        if (void 0 !== c)
          for (
            var n = document.getElementsByTagName("script"), i = 0;
            i < n.length;
            i++
          ) {
            var s = n[i];
            if (
              s.getAttribute("src") == e ||
              s.getAttribute("data-webpack") == f + c
            ) {
              b = s;
              break;
            }
          }
        b ||
          ((o = !0),
          ((b = document.createElement("script")).charset = "utf-8"),
          (b.timeout = 120),
          r.nc && b.setAttribute("nonce", r.nc),
          b.setAttribute("data-webpack", f + c),
          (b.src = e),
          0 !== b.src.indexOf(window.location.origin + "/") &&
            (b.crossOrigin = "anonymous")),
          (d[e] = [a]);
        var l = (a, c) => {
            (b.onerror = b.onload = null), clearTimeout(u);
            var f = d[e];
            if (
              (delete d[e],
              b.parentNode && b.parentNode.removeChild(b),
              f && f.forEach((e) => e(c)),
              a)
            )
              return a(c);
          },
          u = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: b }),
            12e4
          );
        (b.onerror = l.bind(null, b.onerror)),
          (b.onload = l.bind(null, b.onload)),
          o && document.head.appendChild(b);
      }
    }),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      r.g.importScripts && (e = r.g.location + "");
      var a = r.g.document;
      if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
        var c = a.getElementsByTagName("script");
        c.length && (e = c[c.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (r.p = e);
    })(),
    r.p.startsWith(location.origin) &&
      (r.p = r.p.slice(location.origin.length)),
    (() => {
      const e = r.u;
      r.u = (a) => e(a).replace("__LANG__", r.g.language);
    })(),
    (r.p = self.WEBPACK_PUBLIC_PATH || r.p);
  var o,
    n,
    i = r.e,
    s = Object.create(null);
  function l(e, a) {
    return i(e).catch(function () {
      return new Promise(function (c) {
        var d = function () {
          self.removeEventListener("online", d, !1),
            !1 === navigator.onLine
              ? self.addEventListener("online", d, !1)
              : c(a < 2 ? l(e, a + 1) : i(e));
        };
        setTimeout(d, a * a * 1e3);
      });
    });
  }
  (r.e = function (e) {
    if (!s[e]) {
      s[e] = l(e, 0);
      var a = function () {
        delete s[e];
      };
      s[e].then(a, a);
    }
    return s[e];
  }),
    (o = (e) =>
      new Promise((a, c) => {
        var d = r.miniCssF(e),
          f = r.p + d;
        if (
          ((e, a) => {
            for (
              var c = document.getElementsByTagName("link"), d = 0;
              d < c.length;
              d++
            ) {
              var f =
                (b = c[d]).getAttribute("data-href") || b.getAttribute("href");
              if ("stylesheet" === b.rel && (f === e || f === a)) return b;
            }
            var t = document.getElementsByTagName("style");
            for (d = 0; d < t.length; d++) {
              var b;
              if ((f = (b = t[d]).getAttribute("data-href")) === e || f === a)
                return b;
            }
          })(d, f)
        )
          return a();
        ((e, a, c, d) => {
          var f = document.createElement("link");
          (f.rel = "stylesheet"),
            (f.type = "text/css"),
            (f.onerror = f.onload =
              (t) => {
                if (((f.onerror = f.onload = null), "load" === t.type)) c();
                else {
                  var b = t && ("load" === t.type ? "missing" : t.type),
                    r = (t && t.target && t.target.href) || a,
                    o = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                    );
                  (o.code = "CSS_CHUNK_LOAD_FAILED"),
                    (o.type = b),
                    (o.request = r),
                    f.parentNode.removeChild(f),
                    d(o);
                }
              }),
            (f.href = a),
            0 !== f.href.indexOf(window.location.origin + "/") &&
              (f.crossOrigin = "anonymous"),
            document.head.appendChild(f);
        })(e, f, a, c);
      })),
    (n = { 3666: 0 }),
    (r.f.miniCss = (e, a) => {
      n[e]
        ? a.push(n[e])
        : 0 !== n[e] &&
          {
            105: 1,
            140: 1,
            240: 1,
            346: 1,
            537: 1,
            1033: 1,
            1140: 1,
            1271: 1,
            1416: 1,
            1428: 1,
            1528: 1,
            1685: 1,
            1830: 1,
            1960: 1,
            2140: 1,
            2397: 1,
            2685: 1,
            2754: 1,
            2913: 1,
            3046: 1,
            3200: 1,
            3261: 1,
            3562: 1,
            3578: 1,
            3626: 1,
            3687: 1,
            3795: 1,
            4147: 1,
            4369: 1,
            4412: 1,
            4450: 1,
            4819: 1,
            4884: 1,
            5020: 1,
            5100: 1,
            5384: 1,
            5639: 1,
            5729: 1,
            5761: 1,
            5916: 1,
            6092: 1,
            6304: 1,
            6812: 1,
            6879: 1,
            7177: 1,
            7263: 1,
            7342: 1,
            7507: 1,
            7624: 1,
            7695: 1,
            7895: 1,
            7920: 1,
            7989: 1,
            8009: 1,
            8049: 1,
            8110: 1,
            8230: 1,
            8251: 1,
            8271: 1,
            8619: 1,
            8707: 1,
            8819: 1,
            8825: 1,
            8887: 1,
            8955: 1,
            9230: 1,
            9262: 1,
            9333: 1,
            9415: 1,
            9519: 1,
            9776: 1,
            9908: 1,
          }[e] &&
          a.push(
            (n[e] = o(e).then(
              () => {
                n[e] = 0;
              },
              (a) => {
                throw (delete n[e], a);
              }
            ))
          );
    }),
    (() => {
      var e = { 3666: 0, 7717: 0 };
      (r.f.j = (a, c) => {
        var d = r.o(e, a) ? e[a] : void 0;
        if (0 !== d)
          if (d) c.push(d[2]);
          else if (
            /^(1(4(0|16|28)|(14|83|96)0|033|05|271|528|685)|2((|1)40|397|685|754|913)|3(6(26|66|87)|(|0)46|200|261|562|578|795)|4(147|369|412|450|819|884)|5(020|100|37|384|639|729|761|916)|6(092|304|812|879)|7((17|50|71)7|[68]95|263|342|624|920|989)|8(2(30|51|71)|8(19|25|87)|(00|04|61)9|110|707|955)|9(230|262|333|415|519|776|908))$/.test(
              a
            )
          )
            e[a] = 0;
          else {
            var f = new Promise((c, f) => (d = e[a] = [c, f]));
            c.push((d[2] = f));
            var t = r.p + r.u(a),
              b = new Error();
            r.l(
              t,
              (c) => {
                if (r.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var f = c && ("load" === c.type ? "missing" : c.type),
                    t = c && c.target && c.target.src;
                  (b.message =
                    "Loading chunk " + a + " failed.\n(" + f + ": " + t + ")"),
                    (b.name = "ChunkLoadError"),
                    (b.type = f),
                    (b.request = t),
                    d[1](b);
                }
              },
              "chunk-" + a,
              a
            );
          }
      }),
        (r.O.j = (a) => 0 === e[a]);
      var a = (a, c) => {
          var d,
            f,
            [t, b, o] = c,
            n = 0;
          if (t.some((a) => 0 !== e[a])) {
            for (d in b) r.o(b, d) && (r.m[d] = b[d]);
            if (o) var i = o(r);
          }
          for (a && a(c); n < t.length; n++)
            (f = t[n]), r.o(e, f) && e[f] && e[f][0](), (e[t[n]] = 0);
          return r.O(i);
        },
        c = (self.webpackChunktradingview = self.webpackChunktradingview || []);
      c.forEach(a.bind(null, 0)), (c.push = a.bind(null, c.push.bind(c)));
    })(),
    (() => {
      const { miniCssF: e } = r;
      r.miniCssF = (a) =>
        self.document && "rtl" === self.document.dir
          ? e(a).replace(/\.css$/, ".rtl.css")
          : e(a);
    })();
})();
