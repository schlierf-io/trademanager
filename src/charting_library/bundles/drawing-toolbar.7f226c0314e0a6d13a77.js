(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [2878],
  {
    58385: (e) => {
      e.exports = { "default-drawer-min-top-distance": "100px" };
    },
    45966: (e) => {
      e.exports = {
        "default-drawer-min-top-distance": "100px",
        wrap: "wrap-yBUNQyVA",
        positionBottom: "positionBottom-yBUNQyVA",
        backdrop: "backdrop-yBUNQyVA",
        drawer: "drawer-yBUNQyVA",
        positionLeft: "positionLeft-yBUNQyVA",
      };
    },
    44486: (e) => {
      e.exports = { emoji: "emoji-uB3D7z9N" };
    },
    33746: (e) => {
      e.exports = { list: "list-Sd3S32zT" };
    },
    59604: (e) => {
      e.exports = { wrapper: "wrapper-VM8LlHff" };
    },
    94464: (e) => {
      e.exports = {
        wrapper: "wrapper-QWFWOklX",
        emojiItem: "emojiItem-QWFWOklX",
      };
    },
    95670: (e) => {
      e.exports = {
        wrapper: "wrapper-rSoA6gh6",
        isActive: "isActive-rSoA6gh6",
      };
    },
    90055: (e) => {
      e.exports = { wrapper: "wrapper-Eql3Ds_R" };
    },
    26603: (e) => {
      e.exports = { wrapper: "wrapper-AiJtzpQ1" };
    },
    80952: (e) => {
      e.exports = { wrapper: "wrapper-VMJXvHWY" };
    },
    12222: (e) => {
      e.exports = { wrapper: "wrapper-yrezKVPX" };
    },
    67158: (e) => {
      e.exports = {
        item: "item-pso1R1PY",
        label: "label-pso1R1PY",
        labelRow: "labelRow-pso1R1PY",
        toolbox: "toolbox-pso1R1PY",
      };
    },
    55498: (e) => {
      e.exports = {
        "tablet-small-breakpoint": "screen and (max-width: 430px)",
        item: "item-RhC5uhZw",
        hovered: "hovered-RhC5uhZw",
        isDisabled: "isDisabled-RhC5uhZw",
        isActive: "isActive-RhC5uhZw",
        shortcut: "shortcut-RhC5uhZw",
        toolbox: "toolbox-RhC5uhZw",
        withIcon: "withIcon-RhC5uhZw",
        icon: "icon-RhC5uhZw",
        labelRow: "labelRow-RhC5uhZw",
        label: "label-RhC5uhZw",
        showOnHover: "showOnHover-RhC5uhZw",
      };
    },
    19566: (e, t, o) => {
      "use strict";
      o.d(t, { useResizeObserver: () => s });
      var n = o(50959),
        i = o(59255);
      function l(e, t) {
        null !== e && ("function" == typeof e ? e(t) : (e.current = t));
      }
      function s(e, t = []) {
        const { callback: o, ref: s = null } = (function (e) {
            return "function" == typeof e ? { callback: e } : e;
          })(e),
          a = (0, n.useRef)(null),
          r = (0, n.useRef)(o);
        r.current = o;
        const c = (function (e) {
            const t = (0, n.useMemo)(
                () =>
                  (function (e) {
                    const t = (o) => {
                      e(o), (t.current = o);
                    };
                    return (t.current = null), t;
                  })((e) => {
                    s.current(e);
                  }),
                []
              ),
              o = (0, n.useRef)(null),
              i = (t) => {
                if (null === t) return l(o.current, t), void (o.current = null);
                o.current !== e && ((o.current = e), l(o.current, t));
              },
              s = (0, n.useRef)(i);
            return (
              (s.current = i),
              (0, n.useLayoutEffect)(() => {
                if (null !== t.current)
                  return s.current(t.current), () => s.current(null);
              }, [e]),
              t
            );
          })(s),
          h = (0, n.useCallback)(
            (e) => {
              c(e),
                null !== a.current &&
                  (a.current.disconnect(), null !== e && a.current.observe(e));
            },
            [c, a]
          );
        return (
          (function (e, t) {
            ("undefined" == typeof window ? n.useEffect : n.useLayoutEffect)(
              e,
              t
            );
          })(
            () => (
              (a.current = new i.default((e, t) => {
                r.current(e, t);
              })),
              c.current && h(c.current),
              () => {
                var e;
                null === (e = a.current) || void 0 === e || e.disconnect();
              }
            ),
            [c, ...t]
          ),
          h
        );
      }
    },
    90186: (e, t, o) => {
      "use strict";
      function n(e) {
        return l(e, s);
      }
      function i(e) {
        return l(e, a);
      }
      function l(e, t) {
        const o = Object.entries(e).filter(t),
          n = {};
        for (const [e, t] of o) n[e] = t;
        return n;
      }
      function s(e) {
        const [t, o] = e;
        return 0 === t.indexOf("data-") && "string" == typeof o;
      }
      function a(e) {
        return 0 === e[0].indexOf("aria-");
      }
      o.d(t, {
        filterDataProps: () => n,
        filterAriaProps: () => i,
        filterProps: () => l,
        isDataAttribute: () => s,
        isAriaAttribute: () => a,
      });
    },
    39640: (e, t, o) => {
      "use strict";
      function n(e, t, o, n, i) {
        function l(i) {
          if (e > i.timeStamp) return;
          const l = i.target;
          void 0 !== o &&
            null !== t &&
            null !== l &&
            l.ownerDocument === n &&
            (t.contains(l) || o(i));
        }
        return (
          i.click && n.addEventListener("click", l, !1),
          i.mouseDown && n.addEventListener("mousedown", l, !1),
          i.touchEnd && n.addEventListener("touchend", l, !1),
          i.touchStart && n.addEventListener("touchstart", l, !1),
          () => {
            n.removeEventListener("click", l, !1),
              n.removeEventListener("mousedown", l, !1),
              n.removeEventListener("touchend", l, !1),
              n.removeEventListener("touchstart", l, !1);
          }
        );
      }
      o.d(t, { addOutsideEventListener: () => n });
    },
    45601: (e, t, o) => {
      "use strict";
      o.d(t, { Measure: () => i });
      var n = o(19566);
      function i(e) {
        const { children: t, onResize: o } = e;
        return t((0, n.useResizeObserver)(o || (() => {}), [null === o]));
      }
    },
    37558: (e, t, o) => {
      "use strict";
      o.d(t, { DrawerManager: () => l, DrawerContext: () => s });
      var n = o(50959),
        i = o(99054);
      class l extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._isBodyFixed = !1),
            (this._addDrawer = (e) => {
              this.setState((t) => ({ stack: [...t.stack, e] }));
            }),
            (this._removeDrawer = (e) => {
              this.setState((t) => ({ stack: t.stack.filter((t) => t !== e) }));
            }),
            (this.state = { stack: [] });
        }
        componentDidUpdate(e, t) {
          !t.stack.length &&
            this.state.stack.length &&
            ((0, i.setFixedBodyState)(!0), (this._isBodyFixed = !0)),
            t.stack.length &&
              !this.state.stack.length &&
              this._isBodyFixed &&
              ((0, i.setFixedBodyState)(!1), (this._isBodyFixed = !1));
        }
        componentWillUnmount() {
          this.state.stack.length &&
            this._isBodyFixed &&
            (0, i.setFixedBodyState)(!1);
        }
        render() {
          return n.createElement(
            s.Provider,
            {
              value: {
                addDrawer: this._addDrawer,
                removeDrawer: this._removeDrawer,
                currentDrawer: this.state.stack.length
                  ? this.state.stack[this.state.stack.length - 1]
                  : null,
              },
            },
            this.props.children
          );
        }
      }
      const s = n.createContext(null);
    },
    41590: (e, t, o) => {
      "use strict";
      o.d(t, { Drawer: () => d });
      var n = o(50959),
        i = o(50151),
        l = o(97754),
        s = o(68671),
        a = o(65718),
        r = o(37558),
        c = o(29197),
        h = o(86656),
        u = o(45966);
      function d(e) {
        const {
            position: t = "Bottom",
            onClose: o,
            children: d,
            className: m,
            theme: p = u,
          } = e,
          v = (0, i.ensureNotNull)((0, n.useContext)(r.DrawerContext)),
          [g] = (0, n.useState)(() => (0, s.randomHash)()),
          b = (0, n.useRef)(null),
          C = (0, n.useContext)(c.CloseDelegateContext);
        return (
          (0, n.useLayoutEffect)(
            () => (
              (0, i.ensureNotNull)(b.current).focus({ preventScroll: !0 }),
              C.subscribe(v, o),
              v.addDrawer(g),
              () => {
                v.removeDrawer(g), C.unsubscribe(v, o);
              }
            ),
            []
          ),
          n.createElement(
            a.Portal,
            null,
            n.createElement(
              "div",
              { className: l(u.wrap, u[`position${t}`]) },
              g === v.currentDrawer &&
                n.createElement("div", { className: u.backdrop, onClick: o }),
              n.createElement(
                h.TouchScrollContainer,
                {
                  className: l(u.drawer, p.drawer, u[`position${t}`], m),
                  tabIndex: -1,
                  ref: b,
                  "data-name": e["data-name"],
                },
                d
              )
            )
          )
        );
      }
    },
    173: (e, t, o) => {
      "use strict";
      o.d(t, { removeUnavailableEmoji: () => E, emojiGroups: () => y });
      var n = o(50959),
        i = o(44352),
        l = o(99616),
        s = o(37603),
        a = o(32386),
        r = o(68796),
        c = o(5474),
        h = o(92177),
        u = o(83137),
        d = o(86209),
        m = o(14082),
        p = o(93826);
      const v = [
          "😀",
          "😃",
          "😄",
          "😁",
          "😆",
          "😅",
          "😂",
          "🤣",
          "☺️",
          "😊",
          "😇",
          "🙂",
          "🙃",
          "😉",
          "😌",
          "😍",
          "🥰",
          "😘",
          "😗",
          "😙",
          "😚",
          "😋",
          "😛",
          "😝",
          "😜",
          "🤪",
          "🤨",
          "🧐",
          "🤓",
          "😎",
          "🤩",
          "🥳",
          "😏",
          "😒",
          "😞",
          "😔",
          "😟",
          "😕",
          "🙁",
          "☹️",
          "😣",
          "😖",
          "😫",
          "😩",
          "🥺",
          "😢",
          "😭",
          "😤",
          "😠",
          "😡",
          "🤬",
          "🤯",
          "😳",
          "🥵",
          "🥶",
          "😱",
          "😨",
          "😰",
          "😥",
          "😓",
          "🤗",
          "🤔",
          "🤭",
          "🤫",
          "🤥",
          "😶",
          "😐",
          "😑",
          "😬",
          "🙄",
          "😯",
          "😦",
          "😧",
          "😮",
          "😲",
          "🥱",
          "😴",
          "🤤",
          "😪",
          "😵",
          "🤐",
          "🥴",
          "🤢",
          "🤮",
          "🤧",
          "😷",
          "🤒",
          "🤕",
          "🤑",
          "🤠",
          "😈",
          "👿",
          "👹",
          "👺",
          "🤡",
          "💩",
          "👻",
          "💀",
          "☠️",
          "👽",
          "👾",
          "🤖",
          "🎃",
          "😺",
          "😸",
          "😹",
          "😻",
          "😼",
          "😽",
          "🙀",
          "😿",
          "😾",
          "👋",
          "🤚",
          "🖐",
          "✋",
          "🖖",
          "👌",
          "🤏",
          "✌️",
          "🤞",
          "🤟",
          "🤘",
          "🤙",
          "👈",
          "👉",
          "👆",
          "🖕",
          "👇",
          "☝️",
          "👍",
          "👎",
          "✊",
          "👊",
          "🤛",
          "🤜",
          "👏",
          "🙌",
          "👐",
          "🤲",
          "🤝",
          "🙏",
          "✍️",
          "💅",
          "🤳",
          "💪",
          "🦾",
          "🦵",
          "🦿",
          "🦶",
          "👂",
          "🦻",
          "👃",
          "🧠",
          "🦷",
          "🦴",
          "👀",
          "👁",
          "👅",
          "👄",
          "💋",
          "🩸",
          "👶",
          "🧒",
          "👦",
          "👧",
          "🧑",
          "👱",
          "👨",
          "🧔",
          "👨‍🦰",
          "👨‍🦱",
          "👨‍🦳",
          "👨‍🦲",
          "👩",
          "👩‍🦰",
          "🧑‍🦰",
          "👩‍🦱",
          "🧑‍🦱",
          "👩‍🦳",
          "🧑‍🦳",
          "👩‍🦲",
          "🧑‍🦲",
          "👱‍♀️",
          "👱‍♂️",
          "🧓",
          "👴",
          "👵",
          "🙍",
          "🙍‍♂️",
          "🙍‍♀️",
          "🙎",
          "🙎‍♂️",
          "🙎‍♀️",
          "🙅",
          "🙅‍♂️",
          "🙅‍♀️",
          "🙆",
          "🙆‍♂️",
          "🙆‍♀️",
          "💁",
          "💁‍♂️",
          "💁‍♀️",
          "🙋",
          "🙋‍♂️",
          "🙋‍♀️",
          "🧏",
          "🧏‍♂️",
          "🧏‍♀️",
          "🙇",
          "🙇‍♂️",
          "🙇‍♀️",
          "🤦",
          "🤦‍♂️",
          "🤦‍♀️",
          "🤷",
          "🤷‍♂️",
          "🤷‍♀️",
          "🧑‍⚕️",
          "👨‍⚕️",
          "👩‍⚕️",
          "🧑‍🎓",
          "👨‍🎓",
          "👩‍🎓",
          "🧑‍🏫",
          "👨‍🏫",
          "👩‍🏫",
          "🧑‍⚖️",
          "👨‍⚖️",
          "👩‍⚖️",
          "🧑‍🌾",
          "👨‍🌾",
          "👩‍🌾",
          "🧑‍🍳",
          "👨‍🍳",
          "👩‍🍳",
          "🧑‍🔧",
          "👨‍🔧",
          "👩‍🔧",
          "🧑‍🏭",
          "👨‍🏭",
          "👩‍🏭",
          "🧑‍💼",
          "👨‍💼",
          "👩‍💼",
          "🧑‍🔬",
          "👨‍🔬",
          "👩‍🔬",
          "🧑‍💻",
          "👨‍💻",
          "👩‍💻",
          "🧑‍🎤",
          "👨‍🎤",
          "👩‍🎤",
          "🧑‍🎨",
          "👨‍🎨",
          "👩‍🎨",
          "🧑‍✈️",
          "👨‍✈️",
          "👩‍✈️",
          "🧑‍🚀",
          "👨‍🚀",
          "👩‍🚀",
          "🧑‍🚒",
          "👨‍🚒",
          "👩‍🚒",
          "👮",
          "👮‍♂️",
          "👮‍♀️",
          "🕵",
          "🕵️‍♂️",
          "🕵️‍♀️",
          "💂",
          "💂‍♂️",
          "💂‍♀️",
          "👷",
          "👷‍♂️",
          "👷‍♀️",
          "🤴",
          "👸",
          "👳",
          "👳‍♂️",
          "👳‍♀️",
          "👲",
          "🧕",
          "🤵",
          "👰",
          "🤰",
          "🤱",
          "👼",
          "🎅",
          "🤶",
          "🦸",
          "🦸‍♂️",
          "🦸‍♀️",
          "🦹",
          "🦹‍♂️",
          "🦹‍♀️",
          "🧙",
          "🧙‍♂️",
          "🧙‍♀️",
          "🧚",
          "🧚‍♂️",
          "🧚‍♀️",
          "🧛",
          "🧛‍♂️",
          "🧛‍♀️",
          "🧜",
          "🧜‍♂️",
          "🧜‍♀️",
          "🧝",
          "🧝‍♂️",
          "🧝‍♀️",
          "🧞",
          "🧞‍♂️",
          "🧞‍♀️",
          "🧟",
          "🧟‍♂️",
          "🧟‍♀️",
          "💆",
          "💆‍♂️",
          "💆‍♀️",
          "💇",
          "💇‍♂️",
          "💇‍♀️",
          "🚶",
          "🚶‍♂️",
          "🚶‍♀️",
          "🧍",
          "🧍‍♂️",
          "🧍‍♀️",
          "🧎",
          "🧎‍♂️",
          "🧎‍♀️",
          "🧑‍🦯",
          "👨‍🦯",
          "👩‍🦯",
          "🧑‍🦼",
          "👨‍🦼",
          "👩‍🦼",
          "🧑‍🦽",
          "👨‍🦽",
          "👩‍🦽",
          "🏃",
          "🏃‍♂️",
          "🏃‍♀️",
          "💃",
          "🕺",
          "🕴",
          "👯",
          "👯‍♂️",
          "👯‍♀️",
          "🧖",
          "🧖‍♂️",
          "🧖‍♀️",
          "🧑‍🤝‍🧑",
          "👭",
          "👫",
          "👬",
          "💏",
          "👨‍❤️‍💋‍👨",
          "👩‍❤️‍💋‍👩",
          "💑",
          "👨‍❤️‍👨",
          "👩‍❤️‍👩",
          "👪",
          "👨‍👩‍👦",
          "👨‍👩‍👧",
          "👨‍👩‍👧‍👦",
          "👨‍👩‍👦‍👦",
          "👨‍👩‍👧‍👧",
          "👨‍👨‍👦",
          "👨‍👨‍👧",
          "👨‍👨‍👧‍👦",
          "👨‍👨‍👦‍👦",
          "👨‍👨‍👧‍👧",
          "👩‍👩‍👦",
          "👩‍👩‍👧",
          "👩‍👩‍👧‍👦",
          "👩‍👩‍👦‍👦",
          "👩‍👩‍👧‍👧",
          "👨‍👦",
          "👨‍👦‍👦",
          "👨‍👧",
          "👨‍👧‍👦",
          "👨‍👧‍👧",
          "👩‍👦",
          "👩‍👦‍👦",
          "👩‍👧",
          "👩‍👧‍👦",
          "👩‍👧‍👧",
          "🗣",
          "👤",
          "👥",
          "👣",
        ],
        g = [
          "🐶",
          "🐱",
          "🐭",
          "🐹",
          "🐰",
          "🦊",
          "🐻",
          "🐼",
          "🐨",
          "🐯",
          "🦁",
          "🐮",
          "🐷",
          "🐽",
          "🐸",
          "🐵",
          "🙈",
          "🙉",
          "🙊",
          "🐒",
          "🐔",
          "🐧",
          "🐦",
          "🐤",
          "🐣",
          "🐥",
          "🦆",
          "🦅",
          "🦉",
          "🦇",
          "🐺",
          "🐗",
          "🐴",
          "🦄",
          "🐝",
          "🐛",
          "🦋",
          "🐌",
          "🐞",
          "🐜",
          "🦟",
          "🦗",
          "🕷",
          "🕸",
          "🦂",
          "🐢",
          "🐍",
          "🦎",
          "🦖",
          "🦕",
          "🐙",
          "🦑",
          "🦐",
          "🦞",
          "🦀",
          "🐡",
          "🐠",
          "🐟",
          "🐬",
          "🐳",
          "🐋",
          "🦈",
          "🐊",
          "🐅",
          "🐆",
          "🦓",
          "🦍",
          "🦧",
          "🐘",
          "🦛",
          "🦏",
          "🐪",
          "🐫",
          "🦒",
          "🦘",
          "🐃",
          "🐂",
          "🐄",
          "🐎",
          "🐖",
          "🐏",
          "🐑",
          "🦙",
          "🐐",
          "🦌",
          "🐕",
          "🐩",
          "🦮",
          "🐕‍🦺",
          "🐈",
          "🐓",
          "🦃",
          "🦚",
          "🦜",
          "🦢",
          "🦩",
          "🕊",
          "🐇",
          "🦝",
          "🦨",
          "🦡",
          "🦦",
          "🦥",
          "🐁",
          "🐀",
          "🐿",
          "🦔",
          "🐾",
          "🐉",
          "🐲",
          "🌵",
          "🎄",
          "🌲",
          "🌳",
          "🌴",
          "🌱",
          "🌿",
          "☘️",
          "🍀",
          "🎍",
          "🎋",
          "🍃",
          "🍂",
          "🍁",
          "🍄",
          "🐚",
          "🌾",
          "💐",
          "🌷",
          "🌹",
          "🥀",
          "🌺",
          "🌸",
          "🌼",
          "🌻",
          "🌞",
          "🌝",
          "🌛",
          "🌜",
          "🌚",
          "🌕",
          "🌖",
          "🌗",
          "🌘",
          "🌑",
          "🌒",
          "🌓",
          "🌔",
          "🌙",
          "🌎",
          "🌍",
          "🌏",
          "🪐",
          "💫",
          "⭐️",
          "🌟",
          "✨",
          "⚡️",
          "☄️",
          "💥",
          "🔥",
          "🌪",
          "🌈",
          "☀️",
          "🌤",
          "⛅️",
          "🌥",
          "☁️",
          "🌦",
          "🌧",
          "⛈",
          "🌩",
          "🌨",
          "❄️",
          "☃️",
          "⛄️",
          "🌬",
          "💨",
          "💧",
          "💦",
          "☔️",
          "🌊",
          "🌫",
        ],
        b = [
          "🍏",
          "🍎",
          "🍐",
          "🍊",
          "🍋",
          "🍌",
          "🍉",
          "🍇",
          "🍓",
          "🍈",
          "🍒",
          "🍑",
          "🥭",
          "🍍",
          "🥥",
          "🥝",
          "🍅",
          "🍆",
          "🥑",
          "🥦",
          "🥬",
          "🥒",
          "🌶",
          "🌽",
          "🥕",
          "🧄",
          "🧅",
          "🥔",
          "🍠",
          "🥐",
          "🥯",
          "🍞",
          "🥖",
          "🥨",
          "🧀",
          "🥚",
          "🍳",
          "🧈",
          "🥞",
          "🧇",
          "🥓",
          "🥩",
          "🍗",
          "🍖",
          "🌭",
          "🍔",
          "🍟",
          "🍕",
          "🥪",
          "🥙",
          "🧆",
          "🌮",
          "🌯",
          "🥗",
          "🥘",
          "🥫",
          "🍝",
          "🍜",
          "🍲",
          "🍛",
          "🍣",
          "🍱",
          "🥟",
          "🦪",
          "🍤",
          "🍙",
          "🍚",
          "🍘",
          "🍥",
          "🥠",
          "🥮",
          "🍢",
          "🍡",
          "🍧",
          "🍨",
          "🍦",
          "🥧",
          "🧁",
          "🍰",
          "🎂",
          "🍮",
          "🍭",
          "🍬",
          "🍫",
          "🍿",
          "🍩",
          "🍪",
          "🌰",
          "🥜",
          "🍯",
          "🥛",
          "🍼",
          "☕️",
          "🍵",
          "🧃",
          "🥤",
          "🍶",
          "🍺",
          "🍻",
          "🥂",
          "🍷",
          "🥃",
          "🍸",
          "🍹",
          "🧉",
          "🍾",
          "🧊",
          "🥄",
          "🍴",
          "🍽",
          "🥣",
          "🥡",
          "🥢",
          "🧂",
        ],
        C = [
          "⚽️",
          "🏀",
          "🏈",
          "⚾️",
          "🥎",
          "🎾",
          "🏐",
          "🏉",
          "🥏",
          "🎱",
          "🪀",
          "🏓",
          "🏸",
          "🏒",
          "🏑",
          "🥍",
          "🏏",
          "🥅",
          "⛳️",
          "🪁",
          "🏹",
          "🎣",
          "🤿",
          "🥊",
          "🥋",
          "🎽",
          "🛹",
          "🛷",
          "⛸",
          "🥌",
          "🎿",
          "⛷",
          "🏂",
          "🪂",
          "🏋️",
          "🏋️‍♂️",
          "🏋️‍♀️",
          "🤼",
          "🤼‍♂️",
          "🤼‍♀️",
          "🤸‍♀️",
          "🤸",
          "🤸‍♂️",
          "⛹️",
          "⛹️‍♂️",
          "⛹️‍♀️",
          "🤺",
          "🤾",
          "🤾‍♂️",
          "🤾‍♀️",
          "🏌️",
          "🏌️‍♂️",
          "🏌️‍♀️",
          "🏇",
          "🧘",
          "🧘‍♂️",
          "🧘‍♀️",
          "🏄",
          "🏄‍♂️",
          "🏄‍♀️",
          "🏊",
          "🏊‍♂️",
          "🏊‍♀️",
          "🤽",
          "🤽‍♂️",
          "🤽‍♀️",
          "🚣",
          "🚣‍♂️",
          "🚣‍♀️",
          "🧗",
          "🧗‍♂️",
          "🧗‍♀️",
          "🚵",
          "🚵‍♂️",
          "🚵‍♀️",
          "🚴",
          "🚴‍♂️",
          "🚴‍♀️",
          "🏆",
          "🥇",
          "🥈",
          "🥉",
          "🏅",
          "🎖",
          "🏵",
          "🎗",
          "🎫",
          "🎟",
          "🎪",
          "🤹",
          "🤹‍♂️",
          "🤹‍♀️",
          "🎭",
          "🎨",
          "🎬",
          "🎤",
          "🎧",
          "🎼",
          "🎹",
          "🥁",
          "🎷",
          "🎺",
          "🎸",
          "🪕",
          "🎻",
          "🎲",
          "🎯",
          "🎳",
          "🎮",
          "🎰",
          "🧩",
        ],
        w = [
          "🚗",
          "🚕",
          "🚙",
          "🚌",
          "🚎",
          "🏎",
          "🚓",
          "🚑",
          "🚒",
          "🚐",
          "🚚",
          "🚛",
          "🚜",
          "🦯",
          "🦽",
          "🦼",
          "🛴",
          "🚲",
          "🛵",
          "🏍",
          "🛺",
          "🚨",
          "🚔",
          "🚍",
          "🚘",
          "🚖",
          "🚡",
          "🚠",
          "🚟",
          "🚃",
          "🚋",
          "🚞",
          "🚝",
          "🚄",
          "🚅",
          "🚈",
          "🚂",
          "🚆",
          "🚇",
          "🚊",
          "🚉",
          "✈️",
          "🛫",
          "🛬",
          "🛩",
          "💺",
          "🛰",
          "🚀",
          "🛸",
          "🚁",
          "🛶",
          "⛵️",
          "🚤",
          "🛥",
          "🛳",
          "⛴",
          "🚢",
          "⚓️",
          "⛽️",
          "🚧",
          "🚦",
          "🚥",
          "🚏",
          "🗺",
          "🗿",
          "🗽",
          "🗼",
          "🏰",
          "🏯",
          "🏟",
          "🎡",
          "🎢",
          "🎠",
          "⛲️",
          "⛱",
          "🏖",
          "🏝",
          "🏜",
          "🌋",
          "⛰",
          "🏔",
          "🗻",
          "🏕",
          "⛺️",
          "🏠",
          "🏡",
          "🏘",
          "🏚",
          "🏗",
          "🏭",
          "🏢",
          "🏬",
          "🏣",
          "🏤",
          "🏥",
          "🏦",
          "🏨",
          "🏪",
          "🏫",
          "🏩",
          "💒",
          "🏛",
          "⛪️",
          "🕌",
          "🕍",
          "🛕",
          "🕋",
          "⛩",
          "🛤",
          "🛣",
          "🗾",
          "🎑",
          "🏞",
          "🌅",
          "🌄",
          "🌠",
          "🎇",
          "🎆",
          "🌇",
          "🌆",
          "🏙",
          "🌃",
          "🌌",
          "🌉",
          "🌁",
        ],
        _ = [
          "⌚️",
          "📱",
          "📲",
          "💻",
          "⌨️",
          "🖥",
          "🖨",
          "🖱",
          "🖲",
          "🕹",
          "🗜",
          "💽",
          "💾",
          "💿",
          "📀",
          "📼",
          "📷",
          "📸",
          "📹",
          "🎥",
          "📽",
          "🎞",
          "📞",
          "☎️",
          "📟",
          "📠",
          "📺",
          "📻",
          "🎙",
          "🎚",
          "🎛",
          "🧭",
          "⏱",
          "⏲",
          "⏰",
          "🕰",
          "⌛️",
          "⏳",
          "📡",
          "🔋",
          "🔌",
          "💡",
          "🔦",
          "🕯",
          "🪔",
          "🧯",
          "🛢",
          "💸",
          "💵",
          "💴",
          "💶",
          "💷",
          "💰",
          "💳",
          "💎",
          "⚖️",
          "🧰",
          "🔧",
          "🔨",
          "⚒",
          "🛠",
          "⛏",
          "🔩",
          "⚙️",
          "🧱",
          "⛓",
          "🧲",
          "🔫",
          "💣",
          "🧨",
          "🪓",
          "🔪",
          "🗡",
          "⚔️",
          "🛡",
          "🚬",
          "⚰️",
          "⚱️",
          "🏺",
          "🔮",
          "📿",
          "🧿",
          "💈",
          "⚗️",
          "🔭",
          "🔬",
          "🕳",
          "🩹",
          "🩺",
          "💊",
          "💉",
          "🧬",
          "🦠",
          "🧫",
          "🧪",
          "🌡",
          "🧹",
          "🧺",
          "🧻",
          "🚽",
          "🚰",
          "🚿",
          "🛁",
          "🛀",
          "🧼",
          "🪒",
          "🧽",
          "🧴",
          "🛎",
          "🔑",
          "🗝",
          "🚪",
          "🪑",
          "🛋",
          "🛏",
          "🛌",
          "🧸",
          "🖼",
          "🛍",
          "🛒",
          "🎁",
          "🎈",
          "🎏",
          "🎀",
          "🎊",
          "🎉",
          "🎎",
          "🏮",
          "🎐",
          "🧧",
          "✉️",
          "📩",
          "📨",
          "📧",
          "💌",
          "📥",
          "📤",
          "📦",
          "🏷",
          "📪",
          "📫",
          "📬",
          "📭",
          "📮",
          "📯",
          "📜",
          "📃",
          "📄",
          "📑",
          "🧾",
          "📊",
          "📈",
          "📉",
          "🗒",
          "🗓",
          "📆",
          "📅",
          "🗑",
          "📇",
          "🗃",
          "🗳",
          "🗄",
          "📋",
          "📁",
          "📂",
          "🗂",
          "🗞",
          "📰",
          "📓",
          "📔",
          "📒",
          "📕",
          "📗",
          "📘",
          "📙",
          "📚",
          "📖",
          "🔖",
          "🧷",
          "🔗",
          "📎",
          "🖇",
          "📐",
          "📏",
          "🧮",
          "📌",
          "📍",
          "✂️",
          "🖊",
          "🖋",
          "✒️",
          "🖌",
          "🖍",
          "📝",
          "✏️",
          "🔍",
          "🔎",
          "🔏",
          "🔐",
          "🔒",
          "🔓",
          "🧳",
          "🌂",
          "☂️",
          "🧵",
          "🧶",
          "👓",
          "🕶",
          "🥽",
          "🥼",
          "🦺",
          "👔",
          "👕",
          "👖",
          "🧣",
          "🧤",
          "🧥",
          "🧦",
          "👗",
          "👘",
          "🥻",
          "🩱",
          "🩲",
          "🩳",
          "👙",
          "👚",
          "👛",
          "👜",
          "👝",
          "🎒",
          "👞",
          "👟",
          "🥾",
          "🥿",
          "👠",
          "👡",
          "🩰",
          "👢",
          "👑",
          "👒",
          "🎩",
          "🎓",
          "🧢",
          "⛑",
          "💄",
          "💍",
          "💼",
        ],
        f = [
          "❤️",
          "🧡",
          "💛",
          "💚",
          "💙",
          "💜",
          "🖤",
          "🤍",
          "🤎",
          "💔",
          "❣️",
          "💕",
          "💞",
          "💓",
          "💗",
          "💖",
          "💘",
          "💝",
          "💟",
          "☮️",
          "✝️",
          "☪️",
          "🕉",
          "☸️",
          "✡️",
          "🔯",
          "🕎",
          "☯️",
          "☦️",
          "🛐",
          "⛎",
          "♈️",
          "♉️",
          "♊️",
          "♋️",
          "♌️",
          "♍️",
          "♎️",
          "♏️",
          "♐️",
          "♑️",
          "♒️",
          "♓️",
          "🆔",
          "⚛️",
          "🉑",
          "☢️",
          "☣️",
          "📴",
          "📳",
          "🈶",
          "🈚️",
          "🈸",
          "🈺",
          "🈷️",
          "✴️",
          "🆚",
          "💮",
          "🉐",
          "㊙️",
          "㊗️",
          "🈴",
          "🈵",
          "🈹",
          "🈲",
          "🅰️",
          "🅱️",
          "🆎",
          "🆑",
          "🅾️",
          "🆘",
          "❌",
          "⭕️",
          "🛑",
          "⛔️",
          "📛",
          "🚫",
          "💯",
          "💢",
          "♨️",
          "🚷",
          "🚯",
          "🚳",
          "🚱",
          "🔞",
          "📵",
          "🚭",
          "❗️",
          "❕",
          "❓",
          "❔",
          "‼️",
          "⁉️",
          "🔅",
          "🔆",
          "〽️",
          "⚠️",
          "🚸",
          "🔱",
          "⚜️",
          "🔰",
          "♻️",
          "✅",
          "🈯️",
          "💹",
          "❇️",
          "✳️",
          "❎",
          "🌐",
          "💠",
          "Ⓜ️",
          "🌀",
          "💤",
          "🏧",
          "🚾",
          "♿️",
          "🅿️",
          "🈳",
          "🈂️",
          "🛂",
          "🛃",
          "🛄",
          "🛅",
          "🚹",
          "🚺",
          "🚼",
          "🚻",
          "🚮",
          "🎦",
          "📶",
          "🈁",
          "🔣",
          "ℹ️",
          "🔤",
          "🔡",
          "🔠",
          "🆖",
          "🆗",
          "🆙",
          "🆒",
          "🆕",
          "🆓",
          "0️⃣",
          "1️⃣",
          "2️⃣",
          "3️⃣",
          "4️⃣",
          "5️⃣",
          "6️⃣",
          "7️⃣",
          "8️⃣",
          "9️⃣",
          "🔟",
          "🔢",
          "#️⃣",
          "*️⃣",
          "⏏️",
          "▶️",
          "⏸",
          "⏯",
          "⏹",
          "⏺",
          "⏭",
          "⏮",
          "⏩",
          "⏪",
          "⏫",
          "⏬",
          "◀️",
          "🔼",
          "🔽",
          "➡️",
          "⬅️",
          "⬆️",
          "⬇️",
          "↗️",
          "↘️",
          "↙️",
          "↖️",
          "↕️",
          "↔️",
          "↪️",
          "↩️",
          "⤴️",
          "⤵️",
          "🔀",
          "🔁",
          "🔂",
          "🔄",
          "🔃",
          "🎵",
          "🎶",
          "➕",
          "➖",
          "➗",
          "✖️",
          "♾",
          "💲",
          "💱",
          "™️",
          "©️",
          "®️",
          "〰️",
          "➰",
          "➿",
          "🔚",
          "🔙",
          "🔛",
          "🔝",
          "🔜",
          "✔️",
          "☑️",
          "🔘",
          "🔴",
          "🟠",
          "🟡",
          "🟢",
          "🔵",
          "🟣",
          "⚫️",
          "⚪️",
          "🟤",
          "🔺",
          "🔻",
          "🔸",
          "🔹",
          "🔶",
          "🔷",
          "🔳",
          "🔲",
          "▪️",
          "▫️",
          "◾️",
          "◽️",
          "◼️",
          "◻️",
          "🟥",
          "🟧",
          "🟨",
          "🟩",
          "🟦",
          "🟪",
          "⬛️",
          "⬜️",
          "🟫",
          "🔈",
          "🔇",
          "🔉",
          "🔊",
          "🔔",
          "🔕",
          "📣",
          "📢",
          "👁‍🗨",
          "💬",
          "💭",
          "🗯",
          "♠️",
          "♣️",
          "♥️",
          "♦️",
          "🃏",
          "🎴",
          "🀄️",
          "🕐",
          "🕑",
          "🕒",
          "🕓",
          "🕔",
          "🕕",
          "🕖",
          "🕗",
          "🕘",
          "🕙",
          "🕚",
          "🕛",
          "🕜",
          "🕝",
          "🕞",
          "🕟",
          "🕠",
          "🕡",
          "🕢",
          "🕣",
          "🕤",
          "🕥",
          "🕦",
          "🕧",
        ],
        T = [
          "🏳️",
          "🏴",
          "🏁",
          "🚩",
          "🏳️‍🌈",
          "🏴‍☠️",
          "🇦🇫",
          "🇦🇽",
          "🇦🇱",
          "🇩🇿",
          "🇦🇸",
          "🇦🇩",
          "🇦🇴",
          "🇦🇮",
          "🇦🇶",
          "🇦🇬",
          "🇦🇷",
          "🇦🇲",
          "🇦🇼",
          "🇦🇺",
          "🇦🇹",
          "🇦🇿",
          "🇧🇸",
          "🇧🇭",
          "🇧🇩",
          "🇧🇧",
          "🇧🇾",
          "🇧🇪",
          "🇧🇿",
          "🇧🇯",
          "🇧🇲",
          "🇧🇹",
          "🇧🇴",
          "🇧🇦",
          "🇧🇼",
          "🇧🇷",
          "🇮🇴",
          "🇻🇬",
          "🇧🇳",
          "🇧🇬",
          "🇧🇫",
          "🇧🇮",
          "🇰🇭",
          "🇨🇲",
          "🇨🇦",
          "🇮🇨",
          "🇨🇻",
          "🇧🇶",
          "🇰🇾",
          "🇨🇫",
          "🇹🇩",
          "🇨🇱",
          "🇨🇳",
          "🇨🇽",
          "🇨🇨",
          "🇨🇴",
          "🇰🇲",
          "🇨🇬",
          "🇨🇩",
          "🇨🇰",
          "🇨🇷",
          "🇨🇮",
          "🇭🇷",
          "🇨🇺",
          "🇨🇼",
          "🇨🇾",
          "🇨🇿",
          "🇩🇰",
          "🇩🇯",
          "🇩🇲",
          "🇩🇴",
          "🇪🇨",
          "🇪🇬",
          "🇸🇻",
          "🇬🇶",
          "🇪🇷",
          "🇪🇪",
          "🇪🇹",
          "🇪🇺",
          "🇫🇰",
          "🇫🇴",
          "🇫🇯",
          "🇫🇮",
          "🇫🇷",
          "🇬🇫",
          "🇵🇫",
          "🇹🇫",
          "🇬🇦",
          "🇬🇲",
          "🇬🇪",
          "🇩🇪",
          "🇬🇭",
          "🇬🇮",
          "🇬🇷",
          "🇬🇱",
          "🇬🇩",
          "🇬🇵",
          "🇬🇺",
          "🇬🇹",
          "🇬🇬",
          "🇬🇳",
          "🇬🇼",
          "🇬🇾",
          "🇭🇹",
          "🇭🇳",
          "🇭🇰",
          "🇭🇺",
          "🇮🇸",
          "🇮🇳",
          "🇮🇩",
          "🇮🇷",
          "🇮🇶",
          "🇮🇪",
          "🇮🇲",
          "🇮🇱",
          "🇮🇹",
          "🇯🇲",
          "🇯🇵",
          "🎌",
          "🇯🇪",
          "🇯🇴",
          "🇰🇿",
          "🇰🇪",
          "🇰🇮",
          "🇽🇰",
          "🇰🇼",
          "🇰🇬",
          "🇱🇦",
          "🇱🇻",
          "🇱🇧",
          "🇱🇸",
          "🇱🇷",
          "🇱🇾",
          "🇱🇮",
          "🇱🇹",
          "🇱🇺",
          "🇲🇴",
          "🇲🇰",
          "🇲🇬",
          "🇲🇼",
          "🇲🇾",
          "🇲🇻",
          "🇲🇱",
          "🇲🇹",
          "🇲🇭",
          "🇲🇶",
          "🇲🇷",
          "🇲🇺",
          "🇾🇹",
          "🇲🇽",
          "🇫🇲",
          "🇲🇩",
          "🇲🇨",
          "🇲🇳",
          "🇲🇪",
          "🇲🇸",
          "🇲🇦",
          "🇲🇿",
          "🇲🇲",
          "🇳🇦",
          "🇳🇷",
          "🇳🇵",
          "🇳🇱",
          "🇳🇨",
          "🇳🇿",
          "🇳🇮",
          "🇳🇪",
          "🇳🇬",
          "🇳🇺",
          "🇳🇫",
          "🇰🇵",
          "🇲🇵",
          "🇳🇴",
          "🇴🇲",
          "🇵🇰",
          "🇵🇼",
          "🇵🇸",
          "🇵🇦",
          "🇵🇬",
          "🇵🇾",
          "🇵🇪",
          "🇵🇭",
          "🇵🇳",
          "🇵🇱",
          "🇵🇹",
          "🇵🇷",
          "🇶🇦",
          "🇷🇪",
          "🇷🇴",
          "🇷🇺",
          "🇷🇼",
          "🇼🇸",
          "🇸🇲",
          "🇸🇦",
          "🇸🇳",
          "🇷🇸",
          "🇸🇨",
          "🇸🇱",
          "🇸🇬",
          "🇸🇽",
          "🇸🇰",
          "🇸🇮",
          "🇬🇸",
          "🇸🇧",
          "🇸🇴",
          "🇿🇦",
          "🇰🇷",
          "🇸🇸",
          "🇪🇸",
          "🇱🇰",
          "🇧🇱",
          "🇸🇭",
          "🇰🇳",
          "🇱🇨",
          "🇵🇲",
          "🇻🇨",
          "🇸🇩",
          "🇸🇷",
          "🇸🇿",
          "🇸🇪",
          "🇨🇭",
          "🇸🇾",
          "🇹🇼",
          "🇹🇯",
          "🇹🇿",
          "🇹🇭",
          "🇹🇱",
          "🇹🇬",
          "🇹🇰",
          "🇹🇴",
          "🇹🇹",
          "🇹🇳",
          "🇹🇷",
          "🇹🇲",
          "🇹🇨",
          "🇹🇻",
          "🇻🇮",
          "🇺🇬",
          "🇺🇦",
          "🇦🇪",
          "🇬🇧",
          "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
          "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
          "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
          "🇺🇳",
          "🇺🇸",
          "🇺🇾",
          "🇺🇿",
          "🇻🇺",
          "🇻🇦",
          "🇻🇪",
          "🇻🇳",
          "🇼🇫",
          "🇪🇭",
          "🇾🇪",
          "🇿🇲",
          "🇿🇼",
        ],
        x = [...v, ...g, ...b, ...C, ...w, ..._, ...f, ...T],
        k = new Set(x);
      function E(e) {
        return e.filter((e) => k.has(e));
      }
      const y = [
        {
          title: i.t(null, { context: "emoji_group" }, o(15426)),
          emojis: [],
          content: n.createElement(l.IconItem, { icon: s }),
        },
        {
          title: i.t(null, { context: "emoji_group" }, o(96330)),
          emojis: v,
          content: n.createElement(l.IconItem, { icon: a }),
        },
        {
          title: i.t(null, { context: "emoji_group" }, o(60558)),
          emojis: g,
          content: n.createElement(l.IconItem, { icon: r }),
        },
        {
          title: i.t(null, { context: "emoji_group" }, o(35305)),
          emojis: b,
          content: n.createElement(l.IconItem, { icon: c }),
        },
        {
          title: i.t(null, { context: "emoji_group" }, o(14232)),
          emojis: C,
          content: n.createElement(l.IconItem, { icon: h }),
        },
        {
          title: i.t(null, { context: "emoji_group" }, o(15395)),
          emojis: w,
          content: n.createElement(l.IconItem, { icon: u }),
        },
        {
          title: i.t(null, { context: "emoji_group" }, o(72302)),
          emojis: _,
          content: n.createElement(l.IconItem, { icon: d }),
        },
        {
          title: i.t(null, { context: "emoji_group" }, o(6878)),
          emojis: f,
          content: n.createElement(l.IconItem, { icon: m }),
        },
        {
          title: i.t(null, { context: "emoji_group" }, o(49546)),
          emojis: T,
          content: n.createElement(l.IconItem, { icon: p }),
        },
      ];
    },
    10259: (e, t, o) => {
      "use strict";
      o.d(t, { EmojiList: () => _ });
      var n = o(50959),
        i = o(97754),
        l = o.n(i),
        s = o(29006),
        a = o(85034),
        r = o(20037),
        c = o(26603);
      function h(e) {
        const { title: t } = e;
        return n.createElement("div", { className: c.wrapper }, t);
      }
      var u = o(83682),
        d = o(94464);
      const m = n.memo((e) => {
        const { emojis: t, itemSize: o, onEmojiClick: i, ItemComponent: l } = e;
        return n.createElement(
          "div",
          { className: d.wrapper },
          t.map((e) =>
            n.createElement(u.EmojiWrap, {
              key: e,
              className: d.emojiItem,
              emoji: e,
              size: o,
              onClick: i,
              ItemComponent: l,
            })
          )
        );
      });
      var p = o(78036),
        v = o(33746);
      const g = n.createContext(null);
      function b(e) {
        const {
          listRef: t,
          emojiGroups: o,
          emojiSize: i,
          onSelect: l,
          onContentRendered: s,
          ItemComponent: a,
          height: c,
        } = e;
        (0, n.useEffect)(() => {
          var e;
          return null === (e = t.current) || void 0 === e
            ? void 0
            : e.resetAfterIndex(0, !0);
        }, [o]);
        const h = (0, n.useCallback)(
            (e) => ("title" === o[e].type ? 30 : 38),
            [o]
          ),
          u = (0, n.useCallback)(
            ({ visibleStartIndex: e }) => {
              const { relatedTitle: t } = o[e];
              s(t);
            },
            [o, s]
          ),
          d = Math.min(c - 102, window.innerHeight - 102);
        return n.createElement(
          g.Provider,
          {
            value: (0, n.useMemo)(
              () => ({ size: i, onSelect: l, ItemComponent: a }),
              [i, l, a]
            ),
          },
          n.createElement(r.VariableSizeList, {
            className: v.list,
            ref: t,
            width: "100%",
            height: d,
            itemData: o,
            itemCount: o.length,
            children: C,
            onItemsRendered: u,
            itemSize: h,
          })
        );
      }
      const C = n.memo((e) => {
        const { style: t, index: o, data: i } = e,
          l = i[o],
          {
            size: s,
            onSelect: a,
            ItemComponent: r,
          } = (0, p.useEnsuredContext)(g);
        return "title" === l.type
          ? n.createElement(
              "div",
              { style: t },
              n.createElement(h, { title: l.relatedTitle })
            )
          : n.createElement(
              "div",
              { style: t },
              n.createElement(m, {
                emojis: l.content,
                itemSize: s,
                onEmojiClick: a,
                ItemComponent: r,
              })
            );
      });
      var w = o(59604);
      function _(e) {
        var t;
        const {
            className: o,
            emojis: i,
            onSelect: r,
            ItemComponent: c,
            height: h,
            category: u,
          } = e,
          d = (0, n.useRef)(null),
          m = (0, n.useRef)(!1),
          [p, v] = (0, n.useState)(0),
          g = (0, n.useMemo)(
            () =>
              (function (e, t) {
                if (0 === t) return [];
                const o = [];
                return (
                  e.forEach(({ title: e, emojis: n }) => {
                    o.push({ type: "title", relatedTitle: e, content: [e] });
                    let i = [];
                    for (const l of n)
                      i.length < t
                        ? i.push(l)
                        : (o.push({
                            type: "emojiRow",
                            relatedTitle: e,
                            content: i,
                          }),
                          (i = [l]));
                    i.length &&
                      o.push({ type: "emojiRow", relatedTitle: e, content: i });
                  }),
                  o
                );
              })(i, p),
            [i, p]
          ),
          C = (0, s.useResizeObserver)(function (e) {
            const [t] = e,
              { width: o } = t.contentRect,
              n = Math.floor((o - 12) / 38);
            v(n);
          });
        (0, n.useEffect)(() => {
          var e;
          return null === (e = d.current) || void 0 === e
            ? void 0
            : e.scrollTo(0);
        }, [u]);
        const [_, f] = (0, n.useState)(
            (null === (t = g[0]) || void 0 === t ? void 0 : t.relatedTitle) ||
              ""
          ),
          T = (0, n.useCallback)((e) => {
            m.current || f(e);
          }, []);
        return n.createElement(
          "div",
          { className: l()(w.wrapper, o) },
          n.createElement(a.GroupTabs, {
            tabs: i,
            activeTab: _,
            onTabClick: function (e) {
              f(e);
              !(function (e) {
                var t;
                (m.current = !0),
                  null === (t = d.current) ||
                    void 0 === t ||
                    t.scrollToItem(e, "start"),
                  requestAnimationFrame(() => {
                    var t;
                    null === (t = d.current) ||
                      void 0 === t ||
                      t.scrollToItem(e, "start"),
                      (m.current = !1);
                  });
              })(
                (function (e) {
                  return g.findIndex(
                    ({ relatedTitle: t, type: o }) => "title" === o && t === e
                  );
                })(e)
              );
            },
          }),
          n.createElement(
            "div",
            { ref: C },
            n.createElement(b, {
              listRef: d,
              emojiGroups: g,
              emojiSize: 38,
              onSelect: r,
              onContentRendered: T,
              ItemComponent: c,
              height: h,
            })
          )
        );
      }
    },
    85034: (e, t, o) => {
      "use strict";
      o.d(t, { GroupTabs: () => c });
      var n = o(50959),
        i = o(97754),
        l = o.n(i),
        s = o(95670);
      function a(e) {
        const {
          tab: t,
          isActive: o,
          onTabClick: i,
          content: a,
          className: r,
        } = e;
        return n.createElement(
          "div",
          {
            className: l()(s.wrapper, o && s.isActive, r),
            onClick: function () {
              i(t);
            },
          },
          a
        );
      }
      var r = o(90055);
      function c(e) {
        const {
          activeTab: t,
          tabs: o,
          onTabClick: i,
          className: s,
          tabClassName: c,
        } = e;
        return n.createElement(
          "div",
          { className: l()(r.wrapper, s) },
          o.map(({ title: e, content: o }) =>
            n.createElement(a, {
              key: e,
              tab: e,
              className: c,
              content: o,
              isActive: t === e,
              onTabClick: i,
            })
          )
        );
      }
    },
    99616: (e, t, o) => {
      "use strict";
      o.d(t, { IconItem: () => s });
      var n = o(50959),
        i = o(9745),
        l = o(80952);
      function s(e) {
        return n.createElement(
          "div",
          { className: l.wrapper },
          n.createElement(i.Icon, { icon: e.icon })
        );
      }
    },
    83682: (e, t, o) => {
      "use strict";
      o.d(t, { EmojiWrap: () => u });
      var n = o(50959),
        i = o(97754),
        l = o.n(i),
        s = o(5692),
        a = o(44486);
      function r(e) {
        const { emoji: t } = e,
          o = (0, s.getTwemojiUrl)(t, "png");
        return n.createElement("img", {
          className: a.emoji,
          src: o,
          decoding: "async",
          width: "24",
          height: "24",
          alt: "",
          draggable: !1,
          onContextMenu: function (e) {
            e.preventDefault();
          },
        });
      }
      var c = o(12222);
      const h = 34;
      function u(e) {
        const {
          className: t,
          emoji: o,
          size: i = h,
          onClick: s,
          ItemComponent: a = r,
        } = e;
        return n.createElement(
          "div",
          {
            className: l()(c.wrapper, t),
            style: { width: i, height: i },
            onClick: function () {
              s(o);
            },
          },
          n.createElement(a, { emoji: o })
        );
      }
    },
    78036: (e, t, o) => {
      "use strict";
      o.d(t, { useEnsuredContext: () => l });
      var n = o(50959),
        i = o(50151);
      function l(e) {
        return (0, i.ensureNotNull)((0, n.useContext)(e));
      }
    },
    70412: (e, t, o) => {
      "use strict";
      o.d(t, {
        hoverMouseEventFilter: () => l,
        useAccurateHover: () => s,
        useHover: () => i,
      });
      var n = o(50959);
      function i() {
        const [e, t] = (0, n.useState)(!1);
        return [
          e,
          {
            onMouseOver: function (e) {
              l(e) && t(!0);
            },
            onMouseOut: function (e) {
              l(e) && t(!1);
            },
          },
        ];
      }
      function l(e) {
        return !e.currentTarget.contains(e.relatedTarget);
      }
      function s(e) {
        const [t, o] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            const t = (t) => {
              if (null === e.current) return;
              const n = e.current.contains(t.target);
              o(n);
            };
            return (
              document.addEventListener("mouseover", t),
              () => document.removeEventListener("mouseover", t)
            );
          }, []),
          t
        );
      }
    },
    29006: (e, t, o) => {
      "use strict";
      o.d(t, { useResizeObserver: () => n.useResizeObserver });
      var n = o(19566);
    },
    77975: (e, t, o) => {
      "use strict";
      o.d(t, { useWatchedValueReadonly: () => i });
      var n = o(50959);
      const i = (e, t = !1) => {
        const o = "watchedValue" in e ? e.watchedValue : void 0,
          i = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
          [l, s] = (0, n.useState)(o ? o.value() : i);
        return (
          (t ? n.useLayoutEffect : n.useEffect)(() => {
            if (o) {
              s(o.value());
              const e = (e) => s(e);
              return o.subscribe(e), () => o.unsubscribe(e);
            }
            return () => {};
          }, [o]),
          l
        );
      };
    },
    16396: (e, t, o) => {
      "use strict";
      o.d(t, {
        DEFAULT_POPUP_MENU_ITEM_THEME: () => c,
        PopupMenuItem: () => u,
      });
      var n = o(50959),
        i = o(97754),
        l = o(59064),
        s = o(51768),
        a = o(90186),
        r = o(55498);
      const c = r;
      function h(e) {
        e.stopPropagation();
      }
      function u(e) {
        const {
            id: t,
            role: o,
            "aria-label": c,
            "aria-selected": u,
            "aria-checked": d,
            className: m,
            title: p,
            labelRowClassName: v,
            labelClassName: g,
            shortcut: b,
            forceShowShortcuts: C,
            icon: w,
            isActive: _,
            isDisabled: f,
            isHovered: T,
            appearAsDisabled: x,
            label: k,
            link: E,
            showToolboxOnHover: y,
            target: S,
            rel: A,
            toolbox: F,
            reference: M,
            onMouseOut: L,
            onMouseOver: D,
            onKeyDown: I,
            suppressToolboxClick: N = !0,
            theme: B = r,
            tabIndex: z,
            tagName: R,
            renderComponent: P,
          } = e,
          W = (0, a.filterDataProps)(e),
          j = (0, n.useRef)(null),
          O = (0, n.useMemo)(
            () =>
              (function (e) {
                function t(t) {
                  const { reference: o, ...i } = t,
                    l = null != e ? e : i.href ? "a" : "div",
                    s =
                      "a" === l
                        ? i
                        : (function (e) {
                            const {
                              download: t,
                              href: o,
                              hrefLang: n,
                              media: i,
                              ping: l,
                              rel: s,
                              target: a,
                              type: r,
                              referrerPolicy: c,
                              ...h
                            } = e;
                            return h;
                          })(i);
                  return n.createElement(l, { ...s, ref: o });
                }
                return (t.displayName = `DefaultComponent(${e})`), t;
              })(R),
            [R]
          ),
          V = null != P ? P : O;
        return n.createElement(
          V,
          {
            ...W,
            id: t,
            role: o,
            "aria-label": c,
            "aria-selected": u,
            "aria-checked": d,
            className: i(m, B.item, w && B.withIcon, {
              [B.isActive]: _,
              [B.isDisabled]: f || x,
              [B.hovered]: T,
            }),
            title: p,
            href: E,
            target: S,
            rel: A,
            reference: function (e) {
              (j.current = e), "function" == typeof M && M(e);
              "object" == typeof M && (M.current = e);
            },
            onClick: function (t) {
              const {
                dontClosePopup: o,
                onClick: n,
                onClickArg: i,
                trackEventObject: a,
              } = e;
              if (f) return;
              a && (0, s.trackEvent)(a.category, a.event, a.label);
              n && n(i, t);
              o || (0, l.globalCloseMenu)();
            },
            onContextMenu: function (t) {
              const { trackEventObject: o, trackRightClick: n } = e;
              o &&
                n &&
                (0, s.trackEvent)(o.category, o.event, `${o.label}_rightClick`);
            },
            onMouseUp: function (t) {
              const { trackEventObject: o, trackMouseWheelClick: n } = e;
              if (1 === t.button && E && o) {
                let e = o.label;
                n && (e += "_mouseWheelClick"),
                  (0, s.trackEvent)(o.category, o.event, e);
              }
            },
            onMouseOver: D,
            onMouseOut: L,
            onKeyDown: I,
            tabIndex: z,
          },
          void 0 !== w &&
            n.createElement("span", {
              className: B.icon,
              dangerouslySetInnerHTML: { __html: w },
            }),
          n.createElement(
            "span",
            { className: i(B.labelRow, v) },
            n.createElement("span", { className: i(B.label, g) }, k)
          ),
          (void 0 !== b || C) &&
            n.createElement(
              "span",
              { className: B.shortcut },
              (H = b) && H.split("+").join(" + ")
            ),
          void 0 !== F &&
            n.createElement(
              "span",
              {
                onClick: N ? h : void 0,
                className: i(B.toolbox, { [B.showOnHover]: y }),
              },
              F
            )
        );
        var H;
      }
    },
    81332: (e, t, o) => {
      "use strict";
      o.d(t, { multilineLabelWithIconAndToolboxTheme: () => s });
      var n = o(40173),
        i = o(55498),
        l = o(67158);
      const s = (0, n.mergeThemes)(i, l);
    },
    50628: (e, t, o) => {
      "use strict";
      o.d(t, { PopupMenu: () => h });
      var n = o(50959),
        i = o(962),
        l = o(62942),
        s = o(65718),
        a = o(27317),
        r = o(29197),
        c = o(58095);
      function h(e) {
        const {
            controller: t,
            children: o,
            isOpened: h,
            closeOnClickOutside: u = !0,
            doNotCloseOn: d,
            onClickOutside: m,
            onClose: p,
            onKeyboardClose: v,
            "data-name": g = "popup-menu-container",
            ...b
          } = e,
          C = (0, n.useContext)(r.CloseDelegateContext),
          w = (0, c.useOutsideEvent)({
            handler: function (e) {
              m && m(e);
              if (!u) return;
              const t = (0, l.default)(d) ? d() : d;
              if (t && e.target instanceof Node) {
                const o = i.findDOMNode(t);
                if (o instanceof Node && o.contains(e.target)) return;
              }
              p();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return h
          ? n.createElement(
              s.Portal,
              {
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                pointerEvents: "none",
              },
              n.createElement(
                "span",
                { ref: w, style: { pointerEvents: "auto" } },
                n.createElement(
                  a.Menu,
                  {
                    ...b,
                    onClose: p,
                    onKeyboardClose: v,
                    onScroll: function (t) {
                      const { onScroll: o } = e;
                      o && o(t);
                    },
                    customCloseDelegate: C,
                    ref: t,
                    "data-name": g,
                  },
                  o
                )
              )
            )
          : null;
      }
    },
    86656: (e, t, o) => {
      "use strict";
      o.d(t, { TouchScrollContainer: () => a });
      var n = o(50959),
        i = o(59142),
        l = o(50151),
        s = o(49483);
      const a = (0, n.forwardRef)((e, t) => {
        const { children: o, ...l } = e,
          a = (0, n.useRef)(null);
        return (
          (0, n.useImperativeHandle)(t, () => a.current),
          (0, n.useLayoutEffect)(() => {
            if (s.CheckMobile.iOS())
              return (
                null !== a.current &&
                  (0, i.disableBodyScroll)(a.current, { allowTouchMove: r(a) }),
                () => {
                  null !== a.current && (0, i.enableBodyScroll)(a.current);
                }
              );
          }, []),
          n.createElement("div", { ref: a, ...l }, o)
        );
      });
      function r(e) {
        return (t) => {
          const o = (0, l.ensureNotNull)(e.current),
            n = document.activeElement;
          return (
            !o.contains(t) || (null !== n && o.contains(n) && n.contains(t))
          );
        };
      }
    },
    6132: (e, t, o) => {
      "use strict";
      var n = o(22134);
      function i() {}
      function l() {}
      (l.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, o, i, l, s) {
            if (s !== n) {
              var a = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var o = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: l,
            resetWarningCache: i,
          };
          return (o.PropTypes = o), o;
        });
    },
    19036: (e, t, o) => {
      e.exports = o(6132)();
    },
    22134: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    73380: (e) => {
      e.exports = {
        dropdown: "dropdown-ckSKjGRJ",
        buttonWrap: "buttonWrap-ckSKjGRJ",
        control: "control-ckSKjGRJ",
        arrow: "arrow-ckSKjGRJ",
        arrowIcon: "arrowIcon-ckSKjGRJ",
        isOpened: "isOpened-ckSKjGRJ",
        hover: "hover-ckSKjGRJ",
        isGrayed: "isGrayed-ckSKjGRJ",
      };
    },
    76650: (e) => {
      e.exports = {
        container: "container-ZZvWrNQq",
        mirror: "mirror-ZZvWrNQq",
        background: "background-ZZvWrNQq",
        arrow: "arrow-ZZvWrNQq",
      };
    },
    72998: (e) => {
      e.exports = { item: "item-_6u5bx_C", label: "label-_6u5bx_C" };
    },
    84400: (e) => {
      e.exports = {
        drawingToolbar: "drawingToolbar-gmpTgcxI",
        isHidden: "isHidden-gmpTgcxI",
        inner: "inner-gmpTgcxI",
        group: "group-gmpTgcxI",
        lastGroup: "lastGroup-gmpTgcxI",
        fill: "fill-gmpTgcxI",
      };
    },
    55958: (e) => {
      e.exports = {
        toggleButton: "toggleButton-YUoEHbCV",
        collapsed: "collapsed-YUoEHbCV",
        background: "background-YUoEHbCV",
        arrow: "arrow-YUoEHbCV",
      };
    },
    85923: (e) => {
      e.exports = { item: "item-h_TLrUbG", hovered: "hovered-h_TLrUbG" };
    },
    49327: (e) => {
      e.exports = {
        desktopSize: "desktopSize-TlKkLixs",
        smallSize: "smallSize-TlKkLixs",
        tabs: "tabs-TlKkLixs",
        categories: "categories-TlKkLixs",
      };
    },
    8044: (e) => {
      e.exports = { wrapper: "wrapper-wawooJAf" };
    },
    77613: (e) => {
      e.exports = { drawer: "drawer-ujlqtSsK", menuBox: "menuBox-ujlqtSsK" };
    },
    85450: (e) => {
      e.exports = {
        toolButtonMagnet: "toolButtonMagnet-ndi4EWeE",
        toolButtonMagnet__menuItem: "toolButtonMagnet__menuItem-ndi4EWeE",
        toolButtonMagnet__hintPlaceholder:
          "toolButtonMagnet__hintPlaceholder-ndi4EWeE",
      };
    },
    72744: (e) => {
      e.exports = {
        wrap: "wrap-g7ay5OPA",
        scrollWrap: "scrollWrap-g7ay5OPA",
        noScrollBar: "noScrollBar-g7ay5OPA",
        content: "content-g7ay5OPA",
        icon: "icon-g7ay5OPA",
        scrollBot: "scrollBot-g7ay5OPA",
        scrollTop: "scrollTop-g7ay5OPA",
        isVisible: "isVisible-g7ay5OPA",
        iconWrap: "iconWrap-g7ay5OPA",
        fadeBot: "fadeBot-g7ay5OPA",
        fadeTop: "fadeTop-g7ay5OPA",
      };
    },
    46609: (e) => {
      e.exports = { iconContainer: "iconContainer-vjoWR_Zn" };
    },
    48221: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, { DrawingToolbarRenderer: () => Vt });
      var n = o(50959),
        i = o(962),
        l = o(50151),
        s = o(97754),
        a = o.n(s),
        r = o(32563),
        c = o(56840),
        h = o(2484),
        u = o(76076),
        d = o(76422),
        m = o(26867),
        p = o.n(m),
        v = o(49483),
        g = o(84015),
        b = o(71758);
      class C {
        constructor(e) {
          this._drawingsAccess = e || { tools: [], type: "black" };
        }
        isToolEnabled(e) {
          const t = this._findTool(e);
          return (
            !(!t || !t.grayed) ||
            ("black" === this._drawingsAccess.type ? !t : !!t)
          );
        }
        isToolGrayed(e) {
          const t = this._findTool(e);
          return Boolean(t && t.grayed);
        }
        _findTool(e) {
          return this._drawingsAccess.tools.find((t) => t.name === e);
        }
      }
      var w = o(44352),
        _ = o(68335);
      const f = [
        {
          id: "linetool-group-cursors",
          title: w.t(null, void 0, o(82401)),
          items: [
            { name: "cursor" },
            { name: "dot" },
            { name: "arrow" },
            { name: "eraser" },
          ],
          trackLabel: null,
        },
        {
          id: "linetool-group-trend-line",
          title: w.t(null, void 0, o(52899)),
          items: [
            { name: "LineToolTrendLine", hotkeyHash: _.Modifiers.Alt + 84 },
            { name: "LineToolArrow" },
            { name: "LineToolRay" },
            { name: "LineToolInfoLine" },
            { name: "LineToolExtended" },
            { name: "LineToolTrendAngle" },
            { name: "LineToolHorzLine", hotkeyHash: _.Modifiers.Alt + 72 },
            { name: "LineToolHorzRay", hotkeyHash: _.Modifiers.Alt + 74 },
            { name: "LineToolVertLine", hotkeyHash: _.Modifiers.Alt + 86 },
            { name: "LineToolCrossLine", hotkeyHash: _.Modifiers.Alt + 67 },
            { name: "LineToolParallelChannel" },
            { name: "LineToolRegressionTrend" },
            { name: "LineToolFlatBottom" },
            { name: "LineToolDisjointAngle" },
            null,
          ].filter(Boolean),
          trackLabel: null,
        },
        {
          id: "linetool-group-gann-and-fibonacci",
          title: w.t(null, void 0, o(75377)),
          items: [
            {
              name: "LineToolFibRetracement",
              hotkeyHash: _.Modifiers.Alt + 70,
            },
            { name: "LineToolTrendBasedFibExtension" },
            { name: "LineToolPitchfork" },
            { name: "LineToolSchiffPitchfork2" },
            { name: "LineToolSchiffPitchfork" },
            { name: "LineToolInsidePitchfork" },
            { name: "LineToolFibChannel" },
            { name: "LineToolFibTimeZone" },
            { name: "LineToolGannSquare" },
            { name: "LineToolGannFixed" },
            { name: "LineToolGannComplex" },
            { name: "LineToolGannFan" },
            { name: "LineToolFibSpeedResistanceFan" },
            { name: "LineToolTrendBasedFibTime" },
            { name: "LineToolFibCircles" },
            { name: "LineToolPitchfan" },
            { name: "LineToolFibSpiral" },
            { name: "LineToolFibSpeedResistanceArcs" },
            { name: "LineToolFibWedge" },
          ],
          trackLabel: null,
        },
        {
          id: "linetool-group-geometric-shapes",
          title: w.t(null, void 0, o(95537)),
          items: [
            { name: "LineToolBrush" },
            {
              name: "LineToolHighlighter",
            },
            { name: "LineToolRectangle" },
            { name: "LineToolCircle" },
            { name: "LineToolEllipse" },
            { name: "LineToolPath" },
            { name: "LineToolBezierQuadro" },
            { name: "LineToolPolyline" },
            { name: "LineToolTriangle" },
            { name: "LineToolRotatedRectangle" },
            { name: "LineToolArc" },
            { name: "LineToolBezierCubic" },
          ],
          trackLabel: null,
        },
        {
          id: "linetool-group-annotation",
          title: w.t(null, void 0, o(99878)),
          items: [
            { name: "LineToolText" },
            { name: "LineToolTextAbsolute" },
            { name: "LineToolNote" },
            { name: "LineToolNoteAbsolute" },
            { name: "LineToolSignpost" },
            null,
            null,
            null,
            { name: "LineToolCallout" },
            { name: "LineToolComment" },
            { name: "LineToolPriceLabel" },
            { name: "LineToolPriceNote" },
            { name: "LineToolArrowMarker" },
            { name: "LineToolArrowMarkLeft" },
            { name: "LineToolArrowMarkRight" },
            { name: "LineToolArrowMarkUp" },
            { name: "LineToolArrowMarkDown" },
            { name: "LineToolFlagMark" },
          ].filter(Boolean),
          trackLabel: null,
        },
        {
          id: "linetool-group-patterns",
          title: w.t(null, void 0, o(19693)),
          items: [
            { name: "LineTool5PointsPattern" },
            { name: "LineToolCypherPattern" },
            { name: "LineToolABCD" },
            { name: "LineToolTrianglePattern" },
            { name: "LineToolThreeDrivers" },
            { name: "LineToolHeadAndShoulders" },
            { name: "LineToolElliottImpulse" },
            { name: "LineToolElliottTriangle" },
            { name: "LineToolElliottTripleCombo" },
            { name: "LineToolElliottCorrection" },
            { name: "LineToolElliottDoubleCombo" },
            { name: "LineToolCircleLines" },
            { name: "LineToolTimeCycles" },
            { name: "LineToolSineLine" },
          ],
          trackLabel: null,
        },
        {
          id: "linetool-group-prediction-and-measurement",
          title: w.t(null, void 0, o(10234)),
          items: [
            { name: "LineToolRiskRewardLong" },
            { name: "LineToolRiskRewardShort" },
            { name: "LineToolPrediction" },
            { name: "LineToolDateRange" },
            { name: "LineToolPriceRange" },
            { name: "LineToolDateAndPriceRange" },
            { name: "LineToolBarsPattern" },
            { name: "LineToolGhostFeed" },
            { name: "LineToolProjection" },
            { name: "LineToolFixedRangeVolumeProfile" },
          ].filter(Boolean),
          trackLabel: null,
        },
      ];
      var T = o(85323),
        x = o(9745),
        k = o(70439),
        E = o(41207),
        y = o(45601),
        S = o(72744),
        A = o(61380);
      class F extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._scroll = null),
            (this._handleScrollTop = () => {
              this.animateTo(
                Math.max(
                  0,
                  this.currentPosition() - (this.state.heightWrap - 50)
                )
              );
            }),
            (this._handleScrollBot = () => {
              this.animateTo(
                Math.min(
                  (this.state.heightContent || 0) -
                    (this.state.heightWrap || 0),
                  this.currentPosition() + (this.state.heightWrap - 50)
                )
              );
            }),
            (this._handleResizeWrap = ([e]) => {
              this.setState({ heightWrap: e.contentRect.height });
            }),
            (this._handleResizeContent = ([e]) => {
              this.setState({ heightContent: e.contentRect.height });
            }),
            (this._handleScroll = () => {
              const { onScroll: e } = this.props;
              e && e(this.currentPosition(), this.isAtTop(), this.isAtBot()),
                this._checkButtonsVisibility();
            }),
            (this._checkButtonsVisibility = () => {
              const { isVisibleTopButton: e, isVisibleBotButton: t } =
                  this.state,
                o = this.isAtTop(),
                n = this.isAtBot();
              o || e
                ? o && e && this.setState({ isVisibleTopButton: !1 })
                : this.setState({ isVisibleTopButton: !0 }),
                n || t
                  ? n && t && this.setState({ isVisibleBotButton: !1 })
                  : this.setState({ isVisibleBotButton: !0 });
            }),
            (this.state = {
              heightContent: 0,
              heightWrap: 0,
              isVisibleBotButton: !1,
              isVisibleTopButton: !1,
            });
        }
        componentDidMount() {
          this._checkButtonsVisibility();
        }
        componentDidUpdate(e, t) {
          (t.heightWrap === this.state.heightWrap &&
            t.heightContent === this.state.heightContent) ||
            this._handleScroll();
        }
        currentPosition() {
          return this._scroll ? this._scroll.scrollTop : 0;
        }
        isAtTop() {
          return this.currentPosition() <= 1;
        }
        isAtBot() {
          return (
            this.currentPosition() + this.state.heightWrap >=
            this.state.heightContent - 1
          );
        }
        animateTo(e, t = E.dur) {
          const o = this._scroll;
          o &&
            (0, k.doAnimate)({
              onStep(e, t) {
                o.scrollTop = t;
              },
              from: o.scrollTop,
              to: Math.round(e),
              easing: E.easingFunc.easeInOutCubic,
              duration: t,
            });
        }
        render() {
          const {
              children: e,
              isVisibleScrollbar: t,
              isVisibleFade: o,
              isVisibleButtons: i,
              onMouseOver: l,
              onMouseOut: s,
            } = this.props,
            {
              heightContent: r,
              heightWrap: c,
              isVisibleBotButton: h,
              isVisibleTopButton: u,
            } = this.state;
          return n.createElement(
            y.Measure,
            { onResize: this._handleResizeWrap },
            (d) =>
              n.createElement(
                "div",
                { className: S.wrap, onMouseOver: l, onMouseOut: s, ref: d },
                n.createElement(
                  "div",
                  {
                    className: a()(S.scrollWrap, { [S.noScrollBar]: !t }),
                    onScroll: this._handleScroll,
                    ref: (e) => (this._scroll = e),
                  },
                  n.createElement(
                    y.Measure,
                    { onResize: this._handleResizeContent },
                    (t) =>
                      n.createElement(
                        "div",
                        { className: S.content, ref: t },
                        e
                      )
                  )
                ),
                o &&
                  n.createElement("div", {
                    className: a()(S.fadeTop, { [S.isVisible]: u && r > c }),
                  }),
                o &&
                  n.createElement("div", {
                    className: a()(S.fadeBot, { [S.isVisible]: h && r > c }),
                  }),
                i &&
                  n.createElement(
                    "div",
                    {
                      className: a()(S.scrollTop, {
                        [S.isVisible]: u && r > c,
                      }),
                      onClick: this._handleScrollTop,
                    },
                    n.createElement(
                      "div",
                      { className: S.iconWrap },
                      n.createElement(x.Icon, { icon: A, className: S.icon })
                    )
                  ),
                i &&
                  n.createElement(
                    "div",
                    {
                      className: a()(S.scrollBot, {
                        [S.isVisible]: h && r > c,
                      }),
                      onClick: this._handleScrollBot,
                    },
                    n.createElement(
                      "div",
                      { className: S.iconWrap },
                      n.createElement(x.Icon, { icon: A, className: S.icon })
                    )
                  )
              )
          );
        }
      }
      F.defaultProps = { isVisibleScrollbar: !0 };
      var M = o(66141),
        L = o(59064),
        D = o(87955);
      function I(e) {
        const {
          id: t,
          action: o,
          isActive: i,
          isHidden: l,
          isTransparent: s,
          toolName: a,
        } = e;
        return n.createElement(D.ToolButton, {
          id: t,
          icon: b.lineToolsInfo[a].icon,
          isActive: i,
          isHidden: l,
          isTransparent: s,
          onClick: o,
          title: b.lineToolsInfo[a].localizedName,
          "data-name": a,
        });
      }
      var N = o(90186),
        B = o(40549);
      const z = new (o.n(B)())("icons");
      var R = o(99616),
        P = o(8044);
      function W(e) {
        return n.createElement("div", { className: P.wrapper }, e.text);
      }
      var j = o(48269),
        O = o(51609),
        V = o(22976),
        H = o(70616),
        U = o(18042),
        G = o(44986),
        Z = o(83778),
        K = o(48748);
      const J = [
          "0xF087",
          "0xF088",
          "0xF164",
          "0xF165",
          "0xF0A4",
          "0xF0A5",
          "0xF007",
          "0xF0A6",
          "0xF0A7",
          "0xF118",
          "0xF11A",
          "0xF119",
          "0xF183",
        ],
        Q = [
          "0xF153",
          "0xF154",
          "0xF155",
          "0xF156",
          "0xF157",
          "0xF158",
          "0xF159",
          "0xF195",
          "0xF15A",
        ],
        q = [
          "0xF060",
          "0xF061",
          "0xF062",
          "0xF063",
          "0xF053",
          "0xF054",
          "0xF077",
          "0xF078",
          "0xF07D",
          "0xF07E",
          "0xF0A9",
          "0xF0AA",
          "0xF0AB",
          "0xF0D9",
          "0xF0DA",
          "0xF0D7",
          "0xF0D8",
          "0xF102",
          "0xF103",
          "0xF104",
          "0xF105",
          "0xF106",
          "0xF107",
          "0xF137",
          "0xF139",
          "0xF13A",
          "0xF112",
          "0xF064",
          "0xF148",
          "0xF149",
          "0xF177",
          "0xF178",
          "0xF175",
          "0xF176",
          "0xF01A",
          "0xF01B",
          "0xF065",
          "0xF066",
        ],
        Y = [
          "0xF11D",
          "0xF11E",
          "0xF024",
          "0xF004",
          "0xF005",
          "0xF006",
          "0xF046",
          "0xF00C",
          "0xF00D",
          "0xF011",
          "0xF012",
          "0xF021",
          "0xF01E",
          "0xF192",
          "0xF041",
          "0xF14A",
          "0xF055",
          "0xF056",
          "0xF057",
          "0xF059",
          "0xF058",
          "0xF05A",
          "0xF05B",
          "0xF05C",
          "0xF05D",
          "0xF05E",
          "0xF067",
          "0xF068",
          "0xF069",
          "0xF06A",
          "0xF071",
          "0xF06E",
          "0xF070",
          "0xF075",
          "0xF08A",
          "0xF0A3",
          "0xF0E5",
          "0xF110",
          "0xF111",
          "0xF123",
          "0xF124",
          "0xF10C",
          "0xF128",
          "0xF129",
          "0xF12A",
          "0xF140",
          "0xF113",
          "0xF17C",
          "0xF179",
        ],
        $ = ["0xF06C", "0xF185", "0xF186", "0xF188", "0xF0E7"],
        X = [
          "0xF000",
          "0xF002",
          "0xF00E",
          "0xF015",
          "0xF017",
          "0xF030",
          "0xF013",
          "0xF043",
          "0xF06B",
          "0xF072",
          "0xF076",
          "0xF080",
          "0xF084",
          "0xF040",
          "0xF0A1",
          "0xF0A2",
          "0xF0D6",
          "0xF0E3",
          "0xF0EB",
          "0xF0F3",
          "0xF135",
          "0xF13D",
          "0xF2FE",
        ],
        ee = [...J, ...Q, ...q, ...Y, ...$, ...X].map((e) => +e),
        te = new Set(ee);
      const oe = [
          {
            title: w.t(null, { context: "emoji_group" }, o(15426)),
            emojis: [],
            content: n.createElement(R.IconItem, { icon: G }),
          },
          {
            title: w.t(null, { context: "emoji_group" }, o(33628)),
            emojis: J,
            content: n.createElement(R.IconItem, { icon: Z }),
          },
          {
            title: w.t(null, { context: "emoji_group" }, o(77011)),
            emojis: Y,
            content: n.createElement(R.IconItem, { icon: H }),
          },
          {
            title: w.t(null, { context: "emoji_group" }, o(11739)),
            emojis: $,
            content: n.createElement(R.IconItem, { icon: K }),
          },
          {
            title: w.t(null, { context: "emoji_group" }, o(14281)),
            emojis: Q,
            content: n.createElement(R.IconItem, { icon: V }),
          },
          {
            title: w.t(null, { context: "emoji_group" }, o(72302)),
            emojis: X,
            content: n.createElement(R.IconItem, { icon: U }),
          },
          {
            title: w.t(null, { context: "emoji_group" }, o(57792)),
            emojis: q,
            content: n.createElement(R.IconItem, { icon: O }),
          },
        ],
        ne = {
          icons: j.drawingToolsIcons.heart,
          emojis: j.drawingToolsIcons.smile,
        },
        ie = [
          {
            title: "icons",
            content: n.createElement(W, { text: w.t(null, void 0, o(92464)) }),
          },
          {
            title: "emojis",
            content: n.createElement(W, { text: w.t(null, void 0, o(19570)) }),
          },
        ];
      var le = o(50628),
        se = o(41590),
        ae = o(27317),
        re = o(40173),
        ce = o(14665);
      const he = o(73380);
      class ue extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._toggleDropdown = (e) => {
              this.setState({
                isOpened: void 0 !== e ? e : !this.state.isOpened,
              });
            }),
            (this._handleClose = () => {
              this._toggleDropdown(!1);
            }),
            (this._getDropdownPosition = () => {
              if (!this._control) return { x: 0, y: 0 };
              const e = this._control.getBoundingClientRect();
              return { x: e.left + e.width + 1, y: e.top - 6 };
            }),
            (this._handleClickArrow = () => {
              var e, t;
              null === (t = (e = this.props).onArrowClick) ||
                void 0 === t ||
                t.call(e),
                this._toggleDropdown();
            }),
            (this._handleTouchStart = () => {
              this.props.onClickButton && this.props.onClickButton(),
                this._toggleDropdown();
            }),
            (this._handlePressStart = () => {
              if (r.mobiletouch && !this.props.checkable)
                !this._longPressDelay &&
                  this.props.onClickButton &&
                  this.props.onClickButton();
              else {
                if (this._doubleClickDelay)
                  return (
                    clearTimeout(this._doubleClickDelay),
                    delete this._doubleClickDelay,
                    void this._toggleDropdown(!0)
                  );
                this._doubleClickDelay = setTimeout(() => {
                  delete this._doubleClickDelay,
                    !this._longPressDelay &&
                      this.props.onClickButton &&
                      this.props.onClickButton();
                }, 175);
              }
              this._longPressDelay = setTimeout(() => {
                delete this._longPressDelay, this._toggleDropdown(!0);
              }, 300);
            }),
            (this._cancelAllTimeouts = () => {
              clearTimeout(this._longPressDelay),
                delete this._longPressDelay,
                clearTimeout(this._doubleClickDelay),
                delete this._doubleClickDelay;
            }),
            (this._handleTouchPressEnd = (e) => {
              e.cancelable && e.preventDefault(), this._handlePressEnd();
            }),
            (this._handlePressEnd = () => {
              this._longPressDelay &&
                (clearTimeout(this._longPressDelay),
                delete this._longPressDelay,
                this.state.isOpened
                  ? this._toggleDropdown(!1)
                  : this.props.checkable ||
                    this.state.isOpened ||
                    r.mobiletouch ||
                    (!this.props.isActive && !this.props.openDropdownByClick)
                  ? !this._doubleClickDelay &&
                    this.props.onClickButton &&
                    this.props.onClickButton()
                  : this._toggleDropdown(!0));
            }),
            (this.state = { isOpened: !1 });
        }
        render() {
          const {
              buttonActiveClass: e,
              buttonClass: t,
              buttonIcon: o,
              buttonTitle: i,
              buttonHotKey: l,
              dropdownTooltip: a,
              children: c,
              isActive: h,
              isGrayed: u,
              onClickWhenGrayed: d,
              checkable: m,
              isSmallTablet: p,
              theme: v = he,
            } = this.props,
            { isOpened: g } = this.state,
            b = (0, N.filterDataProps)(this.props),
            C = (0, re.mergeThemes)(ae.DEFAULT_MENU_THEME, {
              menuBox: v.menuBox,
            });
          return n.createElement(
            "div",
            {
              className: s(v.dropdown, {
                [v.isGrayed]: u,
                [v.isActive]: h,
                [v.isOpened]: g,
              }),
              onClick: u ? d : void 0,
            },
            n.createElement(
              "div",
              { ...b, ref: (e) => (this._control = e), className: v.control },
              n.createElement(
                "div",
                {
                  ...this._getButtonHandlers(),
                  className: s(v.buttonWrap, {
                    "apply-common-tooltip common-tooltip-vertical": Boolean(
                      i || l
                    ),
                  }),
                  "data-tooltip-hotkey": l,
                  "data-tooltip-delay": 1500,
                  "data-role": "button",
                  title: i,
                },
                n.createElement(D.ToolButton, {
                  activeClass: e,
                  className: t,
                  icon: o,
                  isActive: h,
                  isGrayed: u,
                  isTransparent: !m,
                })
              ),
              !u &&
                !r.mobiletouch &&
                n.createElement(
                  "div",
                  {
                    className: s(
                      v.arrow,
                      a && "apply-common-tooltip common-tooltip-vertical"
                    ),
                    title: a,
                    onClick: this._handleClickArrow,
                    "data-role": "menu-handle",
                  },
                  n.createElement(x.Icon, { className: v.arrowIcon, icon: ce })
                )
            ),
            !u &&
              (p
                ? g &&
                  n.createElement(
                    se.Drawer,
                    {
                      className: v.drawer,
                      onClose: this._handleClose,
                      position: "Bottom",
                    },
                    c
                  )
                : n.createElement(
                    le.PopupMenu,
                    {
                      theme: C,
                      doNotCloseOn: this,
                      isOpened: g,
                      onClose: this._handleClose,
                      position: this._getDropdownPosition,
                    },
                    c
                  ))
          );
        }
        _getButtonHandlers() {
          const { isGrayed: e, checkable: t } = this.props;
          return e
            ? {}
            : r.mobiletouch
            ? t
              ? {
                  onTouchStart: this._handlePressStart,
                  onTouchEnd: this._handleTouchPressEnd,
                  onTouchMove: this._cancelAllTimeouts,
                }
              : { onClick: this._handleTouchStart }
            : {
                onMouseDown: this._handlePressStart,
                onMouseUp: this._handlePressEnd,
              };
        }
      }
      var de = o(10259),
        me = o(85034),
        pe = o(67065),
        ve = o(21097);
      class ge extends pe.CommonJsonStoreService {
        constructor(e, t, o, n) {
          super(ve.TVXWindowEvents, c, e, t, []),
            (this._onChangeDrawingState = () => {
              const e = u[this._drawingType].value();
              this._promote(e);
            }),
            (this._sanitizer = o),
            (this._drawingType = n),
            u[this._drawingType].subscribe(this._onChangeDrawingState);
        }
        destroy() {
          u[this._drawingType].unsubscribe(this._onChangeDrawingState),
            super.destroy();
        }
        _deserialize(e) {
          const t = this._sanitizer(e);
          return this._removeUnavailableRecents(e, t);
        }
        _removeUnavailableRecents(e, t) {
          return (
            Array.isArray(e) ? e.length > 18 && (t = e.slice(0, 18)) : (t = []),
            t
          );
        }
        _promote(e) {
          let t = [...this.get()];
          const o = t.indexOf(e);
          -1 !== o && t.splice(o, 1), (t = [e, ...t.slice(0, 17)]), this.set(t);
        }
      }
      const be = new ge(
        "RECENT_ICONS_CHANGED",
        "linetoolicon.recenticons",
        function (e) {
          return e.filter((e) => te.has(e));
        },
        "iconTool"
      );
      var Ce = o(46609);
      function we(e) {
        const { fallback: t, ...o } = e;
        return n.createElement(
          n.Suspense,
          { fallback: null != t ? t : null },
          n.createElement(_e, { ...o })
        );
      }
      const _e = n.lazy(async () => {
        const { getSvgContentForCharCode: e } = await o
          .e(7987)
          .then(o.bind(o, 30414));
        return {
          default: (t) => {
            var o;
            const { charCode: i } = t,
              l = null !== (o = e(i)) && void 0 !== o ? o : void 0;
            return n.createElement(x.Icon, {
              icon: l,
              className: Ce.iconContainer,
            });
          },
        };
      });
      var fe = o(85923);
      var Te = o(173);
      const xe = {
        icons: {
          service: be,
          toolName: "LineToolIcon",
          ItemComponent: function (e) {
            const { emoji: t } = e;
            return n.createElement(
              "div",
              { className: fe.item },
              n.createElement(we, { charCode: Number(t) })
            );
          },
          icons: oe,
          onEmojiSelect: (e) => {
            u.iconTool.setValue(Number(e)), u.tool.setValue("LineToolIcon");
          },
        },
        emojis: {
          service: new ge(
            "RECENT_EMOJIS_CHANGED",
            "linetoolemoji.recents",
            Te.removeUnavailableEmoji,
            "emojiTool"
          ),
          toolName: "LineToolEmoji",
          icons: Te.emojiGroups,
          onEmojiSelect: (e) => {
            u.emojiTool.setValue(e), u.tool.setValue("LineToolEmoji");
          },
        },
      };
      var ke = o(49327);
      function Ee(e) {
        const { isSmallTablet: t, maxHeight: o } = e,
          [i, l] = ((e) => {
            const [t, o] = (0, n.useState)(e.value());
            return (
              (0, n.useEffect)(() => {
                const t = (e) => o(e);
                return e.subscribe(t), () => e.unsubscribe(t);
              }, [e]),
              [t, (t) => e.setValue(t)]
            );
          })(z),
          a = xe[i],
          { service: r, ItemComponent: c, onEmojiSelect: h } = a,
          [u, d] = (0, n.useState)(ye(a));
        return (
          (0, n.useLayoutEffect)(() => {
            const e = {},
              t = () => {
                const e = ye(a);
                d(e);
              };
            return (
              t(),
              r.getOnChange().subscribe(e, t),
              () => {
                r.getOnChange().unsubscribeAll(e);
              }
            );
          }, [a]),
          n.createElement(
            "div",
            { style: { maxHeight: o } },
            n.createElement(de.EmojiList, {
              className: s(ke.desktopSize, t && ke.smallSize),
              emojis: u,
              onSelect: function (e) {
                h(e), (0, L.globalCloseMenu)();
              },
              ItemComponent: c,
              height: o,
              category: i,
            }),
            n.createElement(me.GroupTabs, {
              className: ke.tabs,
              tabClassName: ke.categories,
              tabs: ie,
              activeTab: i,
              onTabClick: function (e) {
                l(e);
              },
            })
          )
        );
      }
      function ye(e) {
        const { icons: t, service: o } = e,
          n = [...t],
          i = o.get();
        return (
          (n[0].emojis = i.map((e) => String(e))),
          n.filter((e) => e.emojis.length)
        );
      }
      var Se = o(58385),
        Ae = o(77613);
      const Fe = {
          icon: w.t(null, void 0, o(26579)),
          dropdownTooltip: w.t(null, void 0, o(92464)),
        },
        Me = (0, re.mergeThemes)(he, {
          menuBox: Ae.menuBox,
          drawer: Ae.drawer,
        }),
        Le = parseInt(Se["default-drawer-min-top-distance"]);
      class De extends n.Component {
        constructor(e) {
          super(e),
            (this._onChangeDrawingStateTool = () => {
              this.setState({ isActive: this._isActive() });
            }),
            (this._onChangeActiveCategory = (e) => {
              const { toolName: t } = xe[e];
              this.setState({ category: e, toolName: t });
            }),
            (this._handleClick = () => {
              this._trackClick();
            }),
            (this._handleArrowClick = () => {
              this._trackClick("menu");
            });
          const { toolName: t } = xe[z.value()];
          this.state = {
            category: z.value(),
            toolName: t,
            isActive: u.tool.value() === t,
          };
        }
        componentDidMount() {
          u.tool.subscribe(this._onChangeDrawingStateTool),
            z.subscribe(this._onChangeActiveCategory);
        }
        componentWillUnmount() {
          u.tool.unsubscribe(this._onChangeDrawingStateTool),
            z.unsubscribe(this._onChangeActiveCategory);
        }
        render() {
          const { isGrayed: e, isSmallTablet: t } = this.props,
            { isActive: o, category: i, toolName: l } = this.state,
            s = (0, N.filterDataProps)(this.props);
          return n.createElement(
            ue,
            {
              theme: Me,
              buttonIcon: ne[i],
              buttonTitle: Fe.icon,
              dropdownTooltip: Fe.dropdownTooltip,
              isActive: o,
              isGrayed: e,
              isSmallTablet: t,
              onClickButton: this._handleClick,
              onClickWhenGrayed: () =>
                (0, d.emit)("onGrayedObjectClicked", {
                  type: "drawing",
                  name: b.lineToolsInfo[l].localizedName,
                }),
              onArrowClick: this._handleArrowClick,
              openDropdownByClick: !0,
              ...s,
            },
            n.createElement(Ee, {
              isSmallTablet: t,
              maxHeight: t ? Math.min(679, window.innerHeight - Le) : 679,
            })
          );
        }
        _isActive() {
          return u.tool.value() === this.state.toolName;
        }
        _trackClick(e) {
          0;
        }
      }
      var Ie = o(7711);
      class Ne extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._handleClick = () => {
              this.props.saveDefaultOnChange &&
                (0, Ie.saveDefaultProperties)(!0);
              const e = !this.props.property.value();
              this.props.property.setValue(e),
                this.props.saveDefaultOnChange &&
                  (0, Ie.saveDefaultProperties)(!1),
                this.props.onClick && this.props.onClick(e);
            }),
            (this.state = { isActive: this.props.property.value() });
        }
        componentDidMount() {
          this.props.property.subscribe(this, this._onChange);
        }
        componentWillUnmount() {
          this.props.property.unsubscribe(this, this._onChange);
        }
        render() {
          const { toolName: e } = this.props,
            { isActive: t } = this.state,
            o = b.lineToolsInfo[e];
          return n.createElement(D.ToolButton, {
            icon: t && o.iconActive ? o.iconActive : o.icon,
            isActive: t,
            onClick: this._handleClick,
            title: o.localizedName,
            buttonHotKey: o.hotKey,
            "data-name": e,
          });
        }
        _onChange(e) {
          this.setState({ isActive: e.value() });
        }
      }
      class Be extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._handleClick = () => {
              var e, t;
              u.tool.setValue(this.props.toolName),
                null === (t = (e = this.props).onClick) ||
                  void 0 === t ||
                  t.call(e);
            }),
            (this._onChange = () => {
              this.setState({
                isActive: u.tool.value() === this.props.toolName,
              });
            }),
            (this.state = { isActive: u.tool.value() === this.props.toolName });
        }
        componentDidMount() {
          u.tool.subscribe(this._onChange);
        }
        componentWillUnmount() {
          u.tool.unsubscribe(this._onChange);
        }
        render() {
          const { toolName: e } = this.props,
            { isActive: t } = this.state,
            o = b.lineToolsInfo[e];
          return n.createElement(D.ToolButton, {
            icon: b.lineToolsInfo[e].icon,
            isActive: t,
            isTransparent: !0,
            onClick: this._handleClick,
            title: o.localizedName,
            buttonHotKey: o.hotKey,
            "data-name": e,
          });
        }
      }
      class ze extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._boundUndoModel = null),
            (this._handleClick = () => {
              const e = this._activeChartWidget();
              e.hasModel() && e.model().zoomFromViewport();
            }),
            (this._syncUnzoomButton = () => {
              const e = this._activeChartWidget();
              let t = !1;
              if (e.hasModel()) {
                const o = e.model();
                this._boundUndoModel !== o &&
                  (this._boundUndoModel &&
                    this._boundUndoModel
                      .zoomStack()
                      .onChange()
                      .unsubscribe(null, this._syncUnzoomButton),
                  o
                    .zoomStack()
                    .onChange()
                    .subscribe(null, this._syncUnzoomButton),
                  (this._boundUndoModel = o)),
                  (t = !o.zoomStack().isEmpty());
              } else e.withModel(null, this._syncUnzoomButton);
              this.setState({ isVisible: t });
            }),
            (this.state = { isVisible: !1 });
        }
        componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(
            this._syncUnzoomButton,
            { callWithLast: !0 }
          );
        }
        componentWillUnmount() {
          this.props.chartWidgetCollection.activeChartWidget.unsubscribe(
            this._syncUnzoomButton
          );
        }
        render() {
          return this.state.isVisible
            ? n.createElement(I, {
                action: this._handleClick,
                isTransparent: !0,
                toolName: "zoom-out",
              })
            : n.createElement("div", null);
        }
        _activeChartWidget() {
          return this.props.chartWidgetCollection.activeChartWidget.value();
        }
      }
      var Re = o(65383),
        Pe = o(36189),
        We = o(16396),
        je = o(81332);
      class Oe extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._onChangeDrawingState = () => {
              const e = this._getActiveToolIndex();
              this.setState({
                current: -1 !== e ? e : this.state.current,
                isActive: -1 !== e,
              });
            }),
            (this._handleClickButton = () => {
              if ((this._trackClick(), v.CheckMobile.any())) return;
              const e = this._getCurrentToolName();
              this._selectTool(e);
            }),
            (this._handleClickItem = (e) => {
              this._selectTool(e);
            }),
            (this._handleGrayedClick = (e) => {
              (0, d.emit)("onGrayedObjectClicked", {
                type: "drawing",
                name: b.lineToolsInfo[e].localizedName,
              });
            }),
            (this._handleClickFavorite = (e) => {
              this.state.favState && this.state.favState[e]
                ? Re.LinetoolsFavoritesStore.removeFavorite(e)
                : Re.LinetoolsFavoritesStore.addFavorite(e);
            }),
            (this._onAddFavorite = (e) => {
              this.setState({ favState: { ...this.state.favState, [e]: !0 } });
            }),
            (this._onRemoveFavorite = (e) => {
              this.setState({ favState: { ...this.state.favState, [e]: !1 } });
            }),
            (this._onSyncFavorites = () => {
              this.setState({ favState: this._composeFavState() });
            }),
            (this._handleArrowClick = () => {
              this._trackClick("menu");
            }),
            (this._trackClick = (e) => {
              const { trackLabel: t } = this.props;
            });
          const t = this._getActiveToolIndex();
          this.state = {
            current: -1 === t ? this._firstNonGrayedTool() : t,
            favState: this._composeFavState(),
            isActive: -1 !== t,
          };
        }
        componentDidMount() {
          u.tool.subscribe(this._onChangeDrawingState),
            Re.LinetoolsFavoritesStore.favoriteAdded.subscribe(
              null,
              this._onAddFavorite
            ),
            Re.LinetoolsFavoritesStore.favoriteRemoved.subscribe(
              null,
              this._onRemoveFavorite
            ),
            Re.LinetoolsFavoritesStore.favoritesSynced.subscribe(
              null,
              this._onSyncFavorites
            );
        }
        componentWillUnmount() {
          u.tool.unsubscribe(this._onChangeDrawingState),
            Re.LinetoolsFavoritesStore.favoriteAdded.unsubscribe(
              null,
              this._onAddFavorite
            ),
            Re.LinetoolsFavoritesStore.favoriteRemoved.unsubscribe(
              null,
              this._onRemoveFavorite
            ),
            Re.LinetoolsFavoritesStore.favoritesSynced.unsubscribe(
              null,
              this._onSyncFavorites
            );
        }
        componentDidUpdate(e, t) {
          e.lineTools !== this.props.lineTools &&
            this.setState({ favState: this._composeFavState() });
        }
        render() {
          const {
              favoriting: e,
              grayedTools: t,
              lineTools: o,
              dropdownTooltip: i,
              isSmallTablet: l,
            } = this.props,
            { current: s, favState: a, isActive: r } = this.state,
            c = this._getCurrentToolName(),
            h = b.lineToolsInfo[c],
            u = this._showShortcuts(),
            d = (0, N.filterDataProps)(this.props);
          return n.createElement(
            "span",
            null,
            n.createElement(
              ue,
              {
                buttonIcon: h.icon,
                buttonTitle: h.localizedName,
                buttonHotKey: h.hotKey,
                dropdownTooltip: i,
                isActive: r,
                onClickButton: this._handleClickButton,
                onArrowClick: this._handleArrowClick,
                isSmallTablet: l,
                ...d,
              },
              o.map((o, i) => {
                const c = o.name,
                  h = b.lineToolsInfo[c],
                  d = t[c];
                return n.createElement(We.PopupMenuItem, {
                  key: c,
                  "data-name": o.name,
                  theme: l ? je.multilineLabelWithIconAndToolboxTheme : void 0,
                  dontClosePopup: d,
                  forceShowShortcuts: u,
                  shortcut:
                    !l && o.hotkeyHash
                      ? (0, _.humanReadableHash)(o.hotkeyHash)
                      : void 0,
                  icon: h.icon,
                  isActive: r && s === i,
                  appearAsDisabled: d,
                  label: h.localizedName,
                  onClick: d ? this._handleGrayedClick : this._handleClickItem,
                  onClickArg: c,
                  showToolboxOnHover: !a[c],
                  toolbox:
                    e && !d
                      ? n.createElement(Pe.FavoriteButton, {
                          isActive: r && s === i,
                          isFilled: a[c],
                          onClick: () => this._handleClickFavorite(c),
                        })
                      : void 0,
                });
              })
            )
          );
        }
        _getCurrentToolName() {
          const { current: e } = this.state,
            { lineTools: t } = this.props;
          return t[e || 0].name;
        }
        _firstNonGrayedTool() {
          const { grayedTools: e, lineTools: t } = this.props;
          return t.findIndex((t) => !e[t.name]);
        }
        _getActiveToolIndex() {
          return this.props.lineTools.findIndex(
            (e) => e.name === u.tool.value()
          );
        }
        _showShortcuts() {
          return this.props.lineTools.some((e) => "shortcut" in e);
        }
        _selectTool(e) {
          u.tool.setValue(e);
        }
        _composeFavState() {
          const e = {};
          return (
            this.props.lineTools.forEach((t) => {
              e[t.name] = Re.LinetoolsFavoritesStore.isFavorite(t.name);
            }),
            e
          );
        }
      }
      var Ve = o(51768),
        He = o(72998);
      const Ue = (0, re.mergeThemes)(We.DEFAULT_POPUP_MENU_ITEM_THEME, He);
      var Ge = o(6250),
        Ze = o(89215);
      const Ke = !1;
      class Je extends n.PureComponent {
        constructor(e) {
          super(e),
            (this._handleRemoveToolClick = () => {
              r.mobiletouch || this._handleRemoveDrawings(), qe();
            }),
            (this._handleRemoveDrawings = () => {
              Qe("remove drawing"),
                this.props.chartWidgetCollection.activeChartWidget
                  .value()
                  .removeAllDrawingTools();
            }),
            (this._handleRemoveStudies = () => {
              Qe("remove indicator"),
                this.props.chartWidgetCollection.activeChartWidget
                  .value()
                  .removeAllStudies();
            }),
            (this._handleRemoveAll = () => {
              Qe("remove all"),
                this.props.chartWidgetCollection.activeChartWidget
                  .value()
                  .removeAllStudiesDrawingTools();
            }),
            (this._handleActiveChartWidgetChanged = (e) => {
              this._activeChartWidget &&
                this._unsubscribeToModelChanges(this._activeChartWidget),
                e && this._subscribeToModelChanges(e),
                (this._activeChartWidget = e),
                this._handleCollectionChanged();
            }),
            (this._handleCollectionChanged = () => {
              this.setState(this._getActualState());
            }),
            (this._getActualState = () => {
              if (
                !this._activeChartWidget ||
                !this._activeChartWidget.hasModel()
              )
                return { numOfDrawings: 0, numOfIndicators: 0 };
              const e = this._activeChartWidget.model().dataSources(),
                t = e
                  .filter(Ge.isLineTool)
                  .filter((e) => e.isActualSymbol() && e.isUserDeletable()),
                o = e
                  .filter(Ze.isStudy)
                  .filter((e) => e.removeByRemoveAllStudies());
              return { numOfDrawings: t.length, numOfIndicators: o.length };
            }),
            (this._activeChartWidget =
              this.props.chartWidgetCollection.activeChartWidget.value()),
            (this.state = this._getActualState());
        }
        componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(
            this._handleActiveChartWidgetChanged,
            { callWithLast: !0 }
          );
        }
        componentWillUnmount() {
          this._activeChartWidget &&
            this._unsubscribeToModelChanges(this._activeChartWidget),
            this.props.chartWidgetCollection.activeChartWidget.unsubscribe(
              this._handleActiveChartWidgetChanged
            );
        }
        render() {
          const e = this.props.isSmallTablet ? Ue : void 0,
            { numOfDrawings: t, numOfIndicators: i } = this.state,
            l = w.t(
              null,
              {
                plural: "{amount} drawings",
                count: t,
                replace: { amount: t.toString() },
              },
              o(93030)
            ),
            s = w.t(
              null,
              {
                plural: "{amount} indicators",
                count: i,
                replace: { amount: i.toString() },
              },
              o(80437)
            ),
            a = w.t(null, { replace: { drawings: l } }, o(30513)),
            r = w.t(null, { replace: { indicators: s } }, o(55084)),
            c = w.t(
              null,
              { replace: { drawings: l, indicators: s } },
              o(10049)
            );
          return n.createElement(
            ue,
            {
              buttonIcon: b.lineToolsInfo[this.props.toolName].icon,
              buttonTitle: a,
              onClickButton: this._handleRemoveToolClick,
              isSmallTablet: this.props.isSmallTablet,
              "data-name": this.props.toolName,
              onArrowClick: this._handleArrowClick,
              openDropdownByClick: Ke,
            },
            n.createElement(We.PopupMenuItem, {
              "data-name": "remove-drawing-tools",
              label: a,
              onClick: this._handleRemoveDrawings,
              theme: e,
            }),
            n.createElement(We.PopupMenuItem, {
              "data-name": "remove-studies",
              label: r,
              onClick: this._handleRemoveStudies,
              theme: e,
            }),
            n.createElement(We.PopupMenuItem, {
              "data-name": "remove-all",
              label: c,
              onClick: this._handleRemoveAll,
              theme: e,
            })
          );
        }
        _handleArrowClick() {
          qe("menu");
        }
        _subscribeToModelChanges(e) {
          e.withModel(this, () => {
            this._handleCollectionChanged(),
              e
                .model()
                .model()
                .dataSourceCollectionChanged()
                .subscribe(this, this._handleCollectionChanged);
          });
        }
        _unsubscribeToModelChanges(e) {
          e.hasModel() &&
            e
              .model()
              .model()
              .dataSourceCollectionChanged()
              .unsubscribe(this, this._handleCollectionChanged),
            e.modelCreated().unsubscribeAll(this);
        }
      }
      function Qe(e) {
        (0, Ve.trackEvent)("GUI", "Chart Left Toolbar", e);
      }
      function qe(e) {
        0;
      }
      var Ye = o(90995),
        $e = o(14881);
      const Xe = n.createContext({ hideMode: "drawings", isActive: !1 });
      function et(e) {
        const {
            hideMode: t,
            option: { label: o, dataName: i, getBoxedValue: l },
            isSmallTablet: s,
            onClick: a,
          } = e,
          { hideMode: r, isActive: c } = (0, n.useContext)(Xe),
          h = null == l ? void 0 : l();
        return "all" === t || h
          ? n.createElement(We.PopupMenuItem, {
              label: o,
              isActive: r === t && c,
              onClick: function () {
                a(t, (0, Ye.toggleHideMode)(t));
              },
              "data-name": i,
              theme: s ? Ue : void 0,
            })
          : n.createElement(n.Fragment, null);
      }
      const tt = {
        drawings: {
          active: j.drawingToolsIcons.hideAllDrawingToolsActive,
          inactive: j.drawingToolsIcons.hideAllDrawingTools,
        },
        indicators: {
          active: j.drawingToolsIcons.hideAllIndicatorsActive,
          inactive: j.drawingToolsIcons.hideAllIndicators,
        },
        positions: {
          active: j.drawingToolsIcons.hideAllPositionsToolsActive,
          inactive: j.drawingToolsIcons.hideAllPositionsTools,
        },
        all: {
          active: j.drawingToolsIcons.hideAllDrawingsActive,
          inactive: j.drawingToolsIcons.hideAllDrawings,
        },
      };
      function ot(e) {
        const { isSmallTablet: t } = e,
          [{ isActive: o, hideMode: i }, s] = (0, n.useState)(() => ({
            isActive: !1,
            hideMode: (0, Ye.getSavedHideMode)(),
          }));
        (0, n.useEffect)(
          () => (
            $e.hideStateChange.subscribe(null, s),
            () => {
              $e.hideStateChange.unsubscribe(null, s);
            }
          ),
          []
        );
        const a = b.lineToolsInfo.hideAllDrawings,
          {
            trackLabel: r,
            tooltip: c,
            dataName: h,
          } = (0, l.ensureDefined)((0, Ye.getHideOptions)().get(i)),
          u = tt[i][o ? "active" : "inactive"],
          d = o ? c.active : c.inactive;
        return n.createElement(
          ue,
          {
            buttonIcon: u,
            buttonTitle: d,
            buttonHotKey: a.hotKey,
            onClickButton: function () {
              (0, Ye.toggleHideMode)(i), nt(r, !o), it(o ? "on" : "off");
            },
            isSmallTablet: t,
            isActive: o,
            checkable: !0,
            "data-name": "hide-all",
            "data-type": h,
            onArrowClick: function () {
              it("menu");
            },
          },
          n.createElement(
            Xe.Provider,
            { value: { isActive: o, hideMode: i } },
            Array.from((0, Ye.getHideOptions)()).map(([e, o]) =>
              n.createElement(et, {
                key: e,
                hideMode: e,
                option: o,
                isSmallTablet: t,
                onClick: m,
              })
            )
          )
        );
        function m(e, t) {
          nt(
            (0, l.ensureDefined)((0, Ye.getHideOptions)().get(e)).trackLabel,
            t
          );
        }
      }
      function nt(e, t) {
        (0, Ve.trackEvent)(
          "GUI",
          "Chart Left Toolbar",
          `${e} ${t ? "on" : "off"}`
        );
      }
      function it(e) {
        0;
      }
      var lt = o(8222),
        st = o(51445);
      const at = w.t(null, void 0, o(49616));
      class rt extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._instance = null),
            (this._promise = null),
            (this._bindedForceUpdate = () => this.forceUpdate()),
            (this._handleClick = () => {
              null !== this._instance &&
                (this._instance.isVisible()
                  ? (this._instance.hideAndSaveSettingsValue(),
                    this._trackClick(!1))
                  : (this._instance.showAndSaveSettingsValue(),
                    this._trackClick(!0)));
            });
        }
        componentDidMount() {
          const e = (this._promise = (0, l.ensureNotNull)(
            (0, lt.getFavoriteDrawingToolbarPromise)()
          ));
          e.then((t) => {
            this._promise === e &&
              ((this._instance = t),
              this._instance.canBeShown().subscribe(this._bindedForceUpdate),
              this._instance.visibility().subscribe(this._bindedForceUpdate),
              this.forceUpdate());
          });
        }
        componentWillUnmount() {
          (this._promise = null),
            null !== this._instance &&
              (this._instance.canBeShown().unsubscribe(this._bindedForceUpdate),
              this._instance.visibility().unsubscribe(this._bindedForceUpdate),
              (this._instance = null));
        }
        render() {
          return null !== this._instance && this._instance.canBeShown().value()
            ? n.createElement(D.ToolButton, {
                id: this.props.id,
                icon: st,
                isActive: this._instance.isVisible(),
                onClick: this._handleClick,
                title: at,
              })
            : null;
        }
        _trackClick(e) {
          0;
        }
      }
      var ct = o(77975),
        ht = o(64810),
        ut = o(71248),
        dt = o(85450);
      const mt = {
        [ht.MagnetMode.WeakMagnet]: {
          id: ht.MagnetMode.WeakMagnet,
          name: "weakMagnet",
          icon: j.drawingToolsIcons.magnet,
          localizedName: w.t(null, void 0, o(45265)),
        },
        [ht.MagnetMode.StrongMagnet]: {
          id: ht.MagnetMode.StrongMagnet,
          name: "strongMagnet",
          icon: j.drawingToolsIcons.strongMagnet,
          localizedName: w.t(null, void 0, o(85422)),
        },
      };
      function pt(e) {
        const { isSmallTablet: t } = e,
          o = (0, ct.useWatchedValueReadonly)({
            watchedValue: (0, ut.magnetEnabled)(),
          }),
          i = (0, ct.useWatchedValueReadonly)({
            watchedValue: (0, ut.magnetMode)(),
          });
        return n.createElement(
          "div",
          { className: dt.toolButtonMagnet },
          n.createElement(
            ue,
            {
              "data-name": "magnet-button",
              buttonIcon: mt[i].icon,
              buttonTitle: b.lineToolsInfo.magnet.localizedName,
              isActive: o,
              onClickButton: function () {
                const e = !o;
                (0, Ve.trackEvent)(
                  "GUI",
                  "Chart Left Toolbar",
                  "magnet mode " + (e ? "on" : "off")
                ),
                  !1;
                (0, ut.setIsMagnetEnabled)(e);
              },
              buttonHotKey: b.lineToolsInfo.magnet.hotKey,
              checkable: !0,
              isSmallTablet: t,
              onArrowClick: function () {
                0;
              },
            },
            Object.values(mt).map(
              ({ id: e, name: s, localizedName: a, icon: r }) =>
                n.createElement(We.PopupMenuItem, {
                  key: e,
                  className: t ? dt.toolButtonMagnet__menuItem : void 0,
                  "data-name": s,
                  icon: r,
                  isActive: o && i === e,
                  label: a,
                  onClick: l,
                  onClickArg: e,
                })
            )
          ),
          !1
        );
        function l(e) {
          void 0 !== e &&
            ((0, Ve.trackEvent)(
              "GUI",
              "Magnet mode",
              e === ht.MagnetMode.WeakMagnet ? "Weak" : "Strong"
            ),
            (0, ut.setMagnetMode)(e));
        }
      }
      var vt;
      !(function (e) {
        (e.Screenshot = "drawing-toolbar-screenshot"),
          (e.FavoriteDrawings = "drawing-toolbar-favorite-drawings"),
          (e.ObjectTree = "drawing-toolbar-object-tree");
      })(vt || (vt = {}));
      var gt = o(70412),
        bt = o(33933),
        Ct = o(85108),
        wt = o(29197),
        _t = o(76650);
      const ft = _t,
        Tt = "http://www.w3.org/2000/svg";
      function xt(e) {
        const { direction: t, theme: o = _t } = e;
        return n.createElement(
          "svg",
          {
            xmlns: Tt,
            width: "9",
            height: "27",
            viewBox: "0 0 9 27",
            className: s(o.container, "right" === t ? o.mirror : null),
            onContextMenu: bt.preventDefault,
          },
          n.createElement(
            "g",
            { fill: "none", fillRule: "evenodd" },
            n.createElement("path", {
              className: o.background,
              d: "M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z",
            }),
            n.createElement("path", {
              className: o.arrow,
              d: "M5.5 10l-2 3.5 2 3.5",
            })
          )
        );
      }
      var kt = o(55958);
      const Et = (0, re.mergeThemes)(ft, kt),
        yt = {
          hide: w.t(null, void 0, o(96411)),
          show: w.t(null, void 0, o(63354)),
        };
      class St extends n.PureComponent {
        constructor() {
          super(...arguments),
            (this._toggleVisibility = () => {
              T.isDrawingToolbarVisible.setValue(
                !T.isDrawingToolbarVisible.value()
              );
            });
        }
        render() {
          const { toolbarVisible: e, "data-name": t } = this.props;
          return n.createElement(
            "div",
            {
              className: s(
                Et.toggleButton,
                "apply-common-tooltip common-tooltip-vertical",
                !e && Et.collapsed
              ),
              onClick: this._toggleVisibility,
              title: e ? yt.hide : yt.show,
              "data-name": t,
              "data-value": e ? "visible" : "collapsed",
            },
            n.createElement(xt, {
              direction: e ? "left" : "right",
              theme: e ? void 0 : Et,
            })
          );
        }
      }
      var At = o(37558),
        Ft = o(24437),
        Mt = o(90692);
      const Lt = { chartWidgetCollection: o(19036).any.isRequired };
      var Dt = o(10654),
        It = o(84400);
      const Nt = h.enabled("right_toolbar"),
        Bt = h.enabled("keep_object_tree_widget_in_right_toolbar"),
        zt = (0, v.onWidget)(),
        Rt = new (p())(),
        Pt = Ve.trackEvent.bind(null, "GUI", "Chart Left Toolbar"),
        Wt = (e, t) => Pt(`${e} ${t ? "on" : "off"}`);
      class jt extends n.PureComponent {
        constructor(e) {
          var t;
          super(e),
            (this._grayedTools = {}),
            (this._handleMeasureClick = () => {
              Ot("measure");
            }),
            (this._handleZoomInClick = () => {
              Ot("zoom in");
            }),
            (this._handleDrawingClick = (e) => {
              Wt("drawing mode", e), Ot("drawing mode", e ? "on" : "off");
            }),
            (this._handleLockClick = (e) => {
              Wt("lock all drawing", e), Ot("lock", e ? "on" : "off");
            }),
            (this._handleSyncClick = (e) => {
              Wt("sync", e), Ot("sync", e ? "on" : "off");
            }),
            (this._handleObjectsTreeClick = () => {
              this._activeChartWidget().showObjectsTreeDialog(),
                Ot("object tree");
            }),
            (this._handleMouseOver = (e) => {
              (0, gt.hoverMouseEventFilter)(e) &&
                this.setState({ isHovered: !0 });
            }),
            (this._handleMouseOut = (e) => {
              (0, gt.hoverMouseEventFilter)(e) &&
                this.setState({ isHovered: !1 });
            }),
            (this._handleChangeVisibility = (e) => {
              this.setState({ isVisible: e });
            }),
            (this._handleEsc = () => {
              u.resetToCursor(!0);
            }),
            (this._handleWidgetbarSettled = (e) => {
              var t;
              this.setState({
                isWidgetbarVisible: Boolean(
                  null === (t = window.widgetbar) || void 0 === t
                    ? void 0
                    : t.visible().value()
                ),
                widgetbarSettled: e,
              });
            }),
            (this._handleWidgetbarVisible = (e) => {
              this.setState({ isWidgetbarVisible: e });
            }),
            u.init(),
            (this._toolsFilter = new C(this.props.drawingsAccess)),
            (this._filteredLineTools = f
              .map((e) => ({
                id: e.id,
                title: e.title,
                items: e.items.filter((e) =>
                  this._toolsFilter.isToolEnabled(
                    b.lineToolsInfo[e.name].localizedName
                  )
                ),
                trackLabel: e.trackLabel,
              }))
              .filter((e) => 0 !== e.items.length)),
            this._filteredLineTools.forEach((e) =>
              e.items.forEach((e) => {
                this._grayedTools[e.name] = this._toolsFilter.isToolGrayed(
                  b.lineToolsInfo[e.name].localizedName
                );
              })
            ),
            (this.state = {
              isHovered: !1,
              isVisible: T.isDrawingToolbarVisible.value(),
              isWidgetbarVisible: Boolean(
                null === (t = window.widgetbar) || void 0 === t
                  ? void 0
                  : t.visible().value()
              ),
              widgetbarSettled: void 0 !== window.widgetbar,
            }),
            (this._features = {
              favoriting: !zt && h.enabled("items_favoriting"),
              multicharts: h.enabled("support_multicharts"),
              tools: !zt || h.enabled("charting_library_base"),
            }),
            (this._registry = {
              chartWidgetCollection: this.props.chartWidgetCollection,
            }),
            this._negotiateResizer();
        }
        componentDidMount() {
          var e;
          T.isDrawingToolbarVisible.subscribe(this._handleChangeVisibility),
            L.globalCloseDelegate.subscribe(this, this._handleGlobalClose),
            (this._tool = u.tool.spawn()),
            this._tool.subscribe(this._updateHotkeys.bind(this)),
            this._initHotkeys(),
            this.props.widgetbarSettled &&
              (this.props.widgetbarSettled.subscribe(
                this,
                this._handleWidgetbarSettled
              ),
              v.CheckMobile.any() &&
                (null === (e = window.widgetbar) ||
                  void 0 === e ||
                  e.visible().subscribe(this._handleWidgetbarVisible)));
        }
        componentWillUnmount() {
          var e;
          null === (e = window.widgetbar) ||
            void 0 === e ||
            e.visible().unsubscribe(this._handleWidgetbarVisible),
            T.isDrawingToolbarVisible.unsubscribe(this._handleChangeVisibility),
            L.globalCloseDelegate.unsubscribe(this, this._handleGlobalClose),
            this._tool.destroy(),
            this._hotkeys.destroy();
        }
        componentDidUpdate(e, t) {
          var o;
          const { isVisible: n, widgetbarSettled: i } = this.state;
          n !== t.isVisible &&
            (d.emit("toggle_sidebar", !n),
            c.setValue("ChartDrawingToolbarWidget.visible", n),
            this._negotiateResizer()),
            t.widgetbarSettled !== i &&
              i &&
              v.CheckMobile.any() &&
              (null === (o = window.widgetbar) ||
                void 0 === o ||
                o.visible().subscribe(this._handleWidgetbarVisible));
        }
        render() {
          const {
              bgColor: e,
              chartWidgetCollection: t,
              readOnly: o,
            } = this.props,
            { isHovered: i, isVisible: l } = this.state,
            a = { backgroundColor: e && `#${e}` };
          let c;
          c = n.createElement(St, {
            toolbarVisible: l,
            "data-name": "toolbar-drawing-toggle-button",
          });
          const d = () =>
            !!this._features.tools &&
            !(!h.enabled("show_object_tree") || (Bt && !Nt));
          return n.createElement(
            Dt.RegistryProvider,
            { validation: Lt, value: this._registry },
            n.createElement(
              wt.CloseDelegateContext.Provider,
              { value: Rt },
              n.createElement(
                At.DrawerManager,
                null,
                n.createElement(
                  Mt.MatchMedia,
                  { rule: Ft.DialogBreakpoints.TabletSmall },
                  (e) =>
                    n.createElement(
                      "div",
                      {
                        id: "drawing-toolbar",
                        className: s(It.drawingToolbar, { [It.isHidden]: !l }),
                        style: a,
                        onClick: this.props.onClick,
                        onContextMenu: bt.preventDefaultForContextMenu,
                      },
                      n.createElement(
                        F,
                        {
                          onScroll: this._handleGlobalClose,
                          isVisibleFade: r.mobiletouch,
                          isVisibleButtons: !r.mobiletouch && i,
                          isVisibleScrollbar: !1,
                          onMouseOver: this._handleMouseOver,
                          onMouseOut: this._handleMouseOut,
                        },
                        n.createElement(
                          "div",
                          { className: It.inner },
                          !o &&
                            n.createElement(
                              "div",
                              { className: It.group, style: a },
                              this._filteredLineTools.map((o, i) =>
                                n.createElement(Oe, {
                                  "data-name": o.id,
                                  chartWidgetCollection: t,
                                  favoriting:
                                    this._features.favoriting &&
                                    !(
                                      "linetool-group-cursors" === o.id &&
                                      (0, g.isOnMobileAppPage)("any")
                                    ),
                                  grayedTools: this._grayedTools,
                                  key: i,
                                  dropdownTooltip: o.title,
                                  lineTools: o.items,
                                  isSmallTablet: e,
                                  trackLabel: o.trackLabel,
                                })
                              ),
                              this._toolsFilter.isToolEnabled("Font Icons") &&
                                n.createElement(De, {
                                  "data-name": "linetool-group-font-icons",
                                  isGrayed: this._grayedTools["Font Icons"],
                                  isSmallTablet: e,
                                })
                            ),
                          !o &&
                            n.createElement(
                              "div",
                              { className: It.group, style: a },
                              n.createElement(Be, {
                                toolName: "measure",
                                onClick: this._handleMeasureClick,
                              }),
                              n.createElement(Be, {
                                toolName: "zoom",
                                onClick: this._handleZoomInClick,
                              }),
                              n.createElement(ze, { chartWidgetCollection: t })
                            ),
                          !o &&
                            n.createElement(
                              "div",
                              { className: It.group, style: a },
                              n.createElement(pt, { isSmallTablet: e }),
                              this._features.tools &&
                                n.createElement(Ne, {
                                  property: u.properties().childs()
                                    .stayInDrawingMode,
                                  saveDefaultOnChange: !0,
                                  toolName: "drawginmode",
                                  onClick: this._handleDrawingClick,
                                }),
                              this._features.tools &&
                                n.createElement(Ne, {
                                  property: u.lockDrawings(),
                                  toolName: "lockAllDrawings",
                                  onClick: this._handleLockClick,
                                }),
                              this._features.tools &&
                                n.createElement(ot, { isSmallTablet: e }),
                              !1
                            ),
                          !o &&
                            this._features.tools &&
                            n.createElement(
                              "div",
                              { className: It.group, style: a },
                              n.createElement(Je, {
                                chartWidgetCollection: t,
                                isSmallTablet: e,
                                toolName: "removeAllDrawingTools",
                              })
                            ),
                          n.createElement("div", {
                            className: It.fill,
                            style: a,
                          }),
                          !o &&
                            (this._features.tools || !1) &&
                            n.createElement(
                              "div",
                              {
                                className: s(It.group, It.lastGroup),
                                style: a,
                              },
                              !1,
                              this._features.tools &&
                                this._features.favoriting &&
                                n.createElement(rt, {
                                  id: vt.FavoriteDrawings,
                                }),
                              d() &&
                                n.createElement(I, {
                                  id: vt.ObjectTree,
                                  action: this._handleObjectsTreeClick,
                                  toolName: "showObjectsTree",
                                })
                            )
                        )
                      ),
                      c
                    )
                )
              )
            )
          );
        }
        _activeChartWidget() {
          return this.props.chartWidgetCollection.activeChartWidget.value();
        }
        _negotiateResizer() {
          const e = Ct.TOOLBAR_WIDTH_COLLAPSED;
          this.props.resizerBridge.negotiateWidth(
            this.state.isVisible ? Ct.TOOLBAR_WIDTH_EXPANDED : e
          );
        }
        _handleGlobalClose() {
          Rt.fire();
        }
        _updateHotkeys() {
          this._hotkeys.promote();
        }
        _initHotkeys() {
          (this._hotkeys = M.createGroup({ desc: "Drawing Toolbar" })),
            this._hotkeys.add({
              desc: "Reset",
              hotkey: 27,
              handler: () => this._handleEsc(),
              isDisabled: () => u.toolIsCursor(u.tool.value()),
            });
        }
      }
      function Ot(e, t) {
        0;
      }
      class Vt {
        constructor(e, t) {
          (this._component = null),
            (this._handleRef = (e) => {
              this._component = e;
            }),
            (this._container = e),
            i.render(
              n.createElement(jt, { ...t, ref: this._handleRef }),
              this._container
            );
        }
        destroy() {
          i.unmountComponentAtNode(this._container);
        }
        getComponent() {
          return (0, l.ensureNotNull)(this._component);
        }
      }
    },
    10654: (e, t, o) => {
      "use strict";
      o.d(t, {
        validateRegistry: () => a,
        RegistryProvider: () => r,
        registryContextType: () => c,
      });
      var n = o(50959),
        i = o(19036),
        l = o.n(i);
      const s = n.createContext({});
      function a(e, t) {
        l().checkPropTypes(t, e, "context", "RegistryContext");
      }
      function r(e) {
        const { validation: t, value: o } = e;
        return a(o, t), n.createElement(s.Provider, { value: o }, e.children);
      }
      function c() {
        return s;
      }
    },
    61380: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>';
    },
    51445: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.103.687a1 1 0 0 1 1.794 0l2.374 4.81 5.309.772a1 1 0 0 1 .554 1.706l-3.841 3.745.906 5.287a1 1 0 0 1-1.45 1.054L10 15.565 5.252 18.06A1 1 0 0 1 3.8 17.007l.907-5.287L.866 7.975a1 1 0 0 1 .554-1.706l5.31-.771L9.102.688zM10 1.13L7.393 6.412l-5.829.847 4.218 4.111-.996 5.806L10 14.436l5.214 2.74-.996-5.805 4.218-4.112-5.83-.847L10 1.13z"/></svg>';
    },
    51609: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4.31 14.5a1.07 1.07 0 0 1 0-1.5L13 4.3c.42-.41 1.1-.41 1.52 0l.99 1c.42.42.41 1.11-.02 1.53l-5.38 5.12h12.83c.6 0 1.07.48 1.07 1.07v1.43c0 .6-.48 1.07-1.07 1.07H10.1l5.38 5.13c.44.41.45 1.1.02 1.53l-1 .99c-.41.42-1.1.42-1.5 0L4.3 14.5Zm7.97 9.38-8.67-8.67c-.81-.8-.82-2.12 0-2.93l8.68-8.67c.8-.81 2.12-.82 2.92 0l1 .99c.82.82.8 2.16-.04 2.96l-3.57 3.4h10.33c1.14 0 2.07.93 2.07 2.07v1.43c0 1.15-.93 2.07-2.07 2.07H12.6l3.57 3.4c.84.8.86 2.14.03 2.97l-.99.99c-.8.8-2.12.8-2.93 0Z"/></svg>';
    },
    22976: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M4.87 4.52a.5.5 0 0 1 .61.35L6.91 10h5.47l1.03-4.67c.14-.63 1.04-.63 1.18 0L15.62 10h5.47l1.43-5.13a.5.5 0 0 1 .96.26L22.13 10H25a.5.5 0 0 1 0 1h-3.15l-.83 3H25a.5.5 0 0 1 0 1h-4.26l-2.15 7.75c-.17.6-1.03.58-1.16-.03L15.7 15h-3.42l-1.72 7.72c-.13.6-1 .63-1.16.03L7.26 15H3a.5.5 0 1 1 0-1h3.98l-.83-3H3a.5.5 0 1 1 0-1h2.87L4.52 5.13a.5.5 0 0 1 .35-.61ZM7.19 11l.83 3h3.47l.66-3H7.2Zm5.99 0-.67 3h2.98l-.67-3h-1.64Zm1.42-1L14 7.3l-.6 2.7h1.2Zm1.25 1 .66 3h3.47l.83-3h-4.96Zm3.85 4h-2.97l1.32 5.94L19.7 15Zm-8.43 0H8.3l1.65 5.94L11.27 15Z"/></svg>';
    },
    70616: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 24v-5.5m0 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v-6m-14 6v-6m0 0v-6s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v6m-14 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1"/></svg>';
    },
    48748: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14.08 3.73c.1.16.1.37 0 .54a9.4 9.4 0 0 0 3.35 13.26 9.9 9.9 0 0 0 6.49 1.18.5.5 0 0 1 .5.76 10.67 10.67 0 0 1-3.83 3.64 10.91 10.91 0 0 1-14.28-3.3A10.44 10.44 0 0 1 8.69 5.56a10.86 10.86 0 0 1 4.9-2.06.5.5 0 0 1 .49.22Zm8.3 15.61v.5c-1.91 0-3.8-.5-5.45-1.44a10.64 10.64 0 0 1-3.95-3.97 10.4 10.4 0 0 1-.3-9.72 9.6 9.6 0 0 0-6.37 5.39 9.39 9.39 0 0 0 .83 9.14 9.7 9.7 0 0 0 3.6 3.17 9.92 9.92 0 0 0 12.21-2.59c-.19.02-.38.02-.57.02v-.5Z"/></svg>';
    },
    18042: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M6 11.69C6 7.46 9.56 4 14 4c4.44 0 8 3.46 8 7.69 0 2.63-1.2 4.93-3.25 6.31H14.5v-5H18v-1h-8v1h3.5v5H9.14A8.06 8.06 0 0 1 6 11.69Zm2 6.67a9.1 9.1 0 0 1-3-6.67C5 6.87 9.05 3 14 3s9 3.87 9 8.69a8.51 8.51 0 0 1-3 6.62V22h-2v3h-8v-3H8v-3.64ZM11 22v2h6v-2h-6Zm-2-1v-2h10v2H9Z"/></svg>';
    },
    44986: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5ZM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5ZM14 16V9h1v6h4v1h-5Z"/></svg>';
    },
    83778: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5ZM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5ZM12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-6 4-.43.26v.01l.03.03a3.55 3.55 0 0 0 .3.4 5.7 5.7 0 0 0 9.22 0 5.42 5.42 0 0 0 .28-.4l.02-.03v-.01L19 17l-.43-.26v.02a2.45 2.45 0 0 1-.24.32c-.17.21-.43.5-.78.79a4.71 4.71 0 0 1-6.88-.8 4.32 4.32 0 0 1-.23-.31l-.01-.02L10 17Z"/></svg>';
    },
    92177: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M13.98 6.02L14.5 6c2.18 0 4.16.8 5.66 2.14l-5.66 5.65-2.31-2.3a8.43 8.43 0 0 0 1.55-3.64 14.01 14.01 0 0 0 .24-1.83zm-1.01.12a8.45 8.45 0 0 0-4.13 2l2.64 2.63a7.59 7.59 0 0 0 1.28-3.12c.12-.59.18-1.12.2-1.51zm-4.83 2.7a8.45 8.45 0 0 0-2 4.13c.39-.03.92-.1 1.51-.21a7.59 7.59 0 0 0 3.12-1.28L8.14 8.84zm-2.12 5.14a8.48 8.48 0 0 0 2.12 6.18l5.65-5.66-2.3-2.31a8.43 8.43 0 0 1-3.64 1.55 14.03 14.03 0 0 1-1.83.24zm2.82 6.88a8.46 8.46 0 0 0 5.13 2.12v-.07A8.95 8.95 0 0 1 16.3 17l-1.8-1.8-5.66 5.65zM14.97 23c2-.1 3.8-.9 5.19-2.13L17 17.72a7.94 7.94 0 0 0-2.04 5.27zm5.9-2.83a8.46 8.46 0 0 0 2.11-5.13h-.02a10.62 10.62 0 0 0-5.2 2l3.1 3.13zm2.12-6.13c-.1-2-.9-3.8-2.13-5.19l-5.65 5.66 1.83 1.83a11.6 11.6 0 0 1 5.95-2.3zM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5z"/></svg>';
    },
    68796: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M4.54 3.2l.78-.59 5.49 4.5 1.43 1.07a5.28 5.28 0 0 1 2.19-2.3 9.19 9.19 0 0 1 1.88-.85h.04l.01-.01.14.48.42-.28v.01l.01.02a3.14 3.14 0 0 1 .16.26l.37.72c.2.45.4 1.02.5 1.64a2.13 2.13 0 0 1 1.89.46l.18.16.03.02.18.16c.22.16.42.27.81.25a5.9 5.9 0 0 0 2.2-.86l.66-.36.09.75a5.98 5.98 0 0 1-1.7 5.1 6.87 6.87 0 0 1-1.7 1.23 19.97 19.97 0 0 1 .48 2.48c.25 1.73.42 4.08.06 6.5A1.46 1.46 0 0 1 19.68 25h-7.71a1.5 1.5 0 0 1-1.4-2.06l1-2.47c-.18.02-.37.03-.58.03a3 3 0 0 1-1.53-.4 6.84 6.84 0 0 1-1.6.64c-1.08.27-2.55.29-3.72-.89a4.06 4.06 0 0 1-.96-3 5.1 5.1 0 0 1 2-3.74 98.5 98.5 0 0 0 2.7-2.24L4.55 3.2zM16.5 5.5l-.14-.48.35-.1.2.3-.41.28zm-7.87 6.06a57.48 57.48 0 0 1-2.19 1.82l.49.26c.65.37 1.48.9 1.97 1.56a5.78 5.78 0 0 1 1.14 4.07l.06.03c.19.1.49.2.9.2.68 0 .95-.11 1.03-.16v-.03l.97.19h-.5.5v.03a.75.75 0 0 1-.01.1.74.74 0 0 1-.09.21l-1.39 3.47a.5.5 0 0 0 .47.69h7.71c.24 0 .43-.17.47-.38a22 22 0 0 0-.06-6.22 24.4 24.4 0 0 0-.56-2.71 11.35 11.35 0 0 0-.94-1.52 7.1 7.1 0 0 0-2.31-2.22l-.62-.31.49-.5A3.03 3.03 0 0 0 17 8.6a1.2 1.2 0 0 0 .01-.1c0-.65-.22-1.33-.46-1.86-.1-.21-.18-.4-.26-.54a8.07 8.07 0 0 0-1.34.64c-.9.54-1.74 1.32-1.95 2.36v.03l-.02.03L12.5 9l.47.16v.02a2.97 2.97 0 0 1-.1.26 5.9 5.9 0 0 1-.31.62c-.27.46-.7 1.07-1.34 1.39-.63.31-1.38.3-1.9.23a5.83 5.83 0 0 1-.7-.12zm3.26-2.39L10.2 7.9l-.02-.01L6.3 4.7l2.57 5.88h.01c.14.04.34.08.57.11.47.06.97.05 1.34-.14.36-.18.68-.57.91-.99.08-.14.15-.27.2-.39zm8.32 4.68a5.47 5.47 0 0 0 1.37-1.02 4.88 4.88 0 0 0 1.46-3.53c-.8.39-1.41.58-1.92.61-.7.05-1.14-.18-1.49-.45a5.6 5.6 0 0 1-.22-.19l-.03-.03-.17-.13a1.4 1.4 0 0 0-.33-.22c-.18-.07-.44-.12-.93 0l-.1.4c-.1.3-.28.69-.58 1.09.87.59 1.6 1.46 2.14 2.2a14.92 14.92 0 0 1 .8 1.27zM9.05 19.19v-.09a4.78 4.78 0 0 0-.96-3.3 5.56 5.56 0 0 0-1.65-1.29c-.3-.17-.6-.3-.8-.4l-.05-.03a4.05 4.05 0 0 0-1.4 2.82 3.1 3.1 0 0 0 .66 2.25c.83.82 1.86.84 2.78.62a5.71 5.71 0 0 0 1.42-.58zm4.26-5.87c-.3.24-.74.54-1.18.66-.37.1-.81.1-1.12.08a6.95 6.95 0 0 1-.54-.06h-.05l.08-.5.08-.5.03.01a5.02 5.02 0 0 0 1.26 0c.24-.06.54-.25.83-.47a6.1 6.1 0 0 0 .42-.37l.02-.02.36.35.35.36h-.01l-.03.04a6.09 6.09 0 0 1-.5.42zM6 17h1v-1H6v1z"/></svg>';
    },
    93826: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 24v-5.5m0 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v-6m-14 6v-6m0 0v-6s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v6m-14 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1"/></svg>';
    },
    5474: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12.5 8h1.36l-.85-3.38.98-.24.9 3.62h7.64a1.34 1.34 0 0 1 .2.02c.13.02.31.07.5.16.18.09.38.24.53.46.15.24.24.52.24.86 0 .34-.09.62-.24.86a1.38 1.38 0 0 1-.79.56L22 24.54l-.03.46H6.5c-1 0-1.64-.68-1.99-1.23a4.4 4.4 0 0 1-.38-.78l-.01-.04c-.1-.03-.22-.07-.34-.13a1.36 1.36 0 0 1-.54-.46A1.51 1.51 0 0 1 3 21.5c0-.34.09-.62.24-.86.15-.22.35-.37.54-.46.1-.05.2-.09.28-.11a6.6 6.6 0 0 1 .96-2.34C5.92 16.35 7.56 15 10.5 15c.72 0 1.36.08 1.93.22l-.4-4.3a1.38 1.38 0 0 1-.8-.57A1.51 1.51 0 0 1 11 9.5c0-.34.09-.62.24-.86.15-.22.35-.37.54-.46a1.73 1.73 0 0 1 .7-.18h.02v.5V8zm.96 7.57a5.73 5.73 0 0 1 2.52 2.16 6.86 6.86 0 0 1 .95 2.34 1.38 1.38 0 0 1 .82.58c.16.23.25.51.25.85 0 .34-.09.62-.24.86-.15.22-.35.37-.54.46-.12.06-.24.1-.34.13l-.01.04a4.4 4.4 0 0 1-.54 1.01h4.7l.93-13h-8.91l.41 4.57zM14.5 9h8a.73.73 0 0 1 .28.07c.06.04.11.08.15.13.03.05.07.14.07.3 0 .16-.04.25-.07.3a.38.38 0 0 1-.15.13.73.73 0 0 1-.27.07H12.5a.73.73 0 0 1-.28-.07.38.38 0 0 1-.15-.13.52.52 0 0 1-.07-.3c0-.16.04-.25.07-.3.04-.05.09-.1.15-.13A.73.73 0 0 1 12.5 9h2.01zm1.4 11a5.8 5.8 0 0 0-.76-1.73C14.41 17.15 13.06 16 10.5 16c-2.56 0-3.91 1.15-4.64 2.27A5.86 5.86 0 0 0 5.1 20h10.78zM4.5 21a.72.72 0 0 0-.28.07.38.38 0 0 0-.15.13.52.52 0 0 0-.07.3c0 .16.04.25.07.3.04.05.09.1.15.13a.73.73 0 0 0 .27.07H16.5a.72.72 0 0 0 .28-.07.38.38 0 0 0 .15-.13.52.52 0 0 0 .07-.3.52.52 0 0 0-.07-.3.38.38 0 0 0-.15-.13.73.73 0 0 0-.27-.07H4.5zm.73 2l.13.23c.28.45.65.77 1.14.77h8c.5 0 .86-.32 1.14-.77.05-.07.1-.15.13-.23H5.23zM11 17v1h-1v-1h1zm-3 1h1v1H8v-1zm4 1v-1h1v1h-1z"/></svg>';
    },
    86209: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M9.5 21H9h.5zm8 0H17h.5zm-6-10H11v1h.5v-1zm4 1h.5v-1h-.5v1zm2 7.5h.5-.5zm.29-1.59A7.97 7.97 0 0 0 21 11.5h-1a6.97 6.97 0 0 1-2.79 5.59l.58.82zM21 11.5A7.5 7.5 0 0 0 13.5 4v1a6.5 6.5 0 0 1 6.5 6.5h1zM13.5 4A7.5 7.5 0 0 0 6 11.5h1A6.5 6.5 0 0 1 13.5 5V4zM6 11.5a7.98 7.98 0 0 0 3.21 6.41l.57-.82A6.98 6.98 0 0 1 7 11.5H6zM9 21a1 1 0 0 0 1 1v-1H9zm8 1a1 1 0 0 0 1-1h-1v1zm-6-.5V23h1v-1.5h-1zm0 1.5a1 1 0 0 0 1 1v-1h-1zm1 1h3v-1h-3v1zm3 0a1 1 0 0 0 1-1h-1v1zm1-1v-1.5h-1V23h1zm-3-11.5v6h1v-6h-1zM9.5 20h8v-1h-8v1zM9 17.5v2h1v-2H9zm0 2V21h1v-1.5H9zm9 1.5v-1.5h-1V21h1zm0-1.5v-2h-1v2h1zM9.5 18h4v-1h-4v1zm4 0h4v-1h-4v1zm-2-6h2v-1h-2v1zm2 0h2v-1h-2v1zM10 22h1.5v-1H10v1zm1.5 0h4v-1h-4v1zm4 0H17v-1h-1.5v1z"/></svg>';
    },
    37603: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5zM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5zM14 16V9h1v6h4v1h-5z"/></svg>';
    },
    32386: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5zM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5zM12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 4l-.43.26v.01l.03.03a3.55 3.55 0 0 0 .3.4 5.7 5.7 0 0 0 9.22 0 5.42 5.42 0 0 0 .28-.4l.02-.03v-.01L19 17l-.43-.26v.02a2.45 2.45 0 0 1-.24.32c-.17.21-.43.5-.78.79a4.71 4.71 0 0 1-6.88-.8 4.32 4.32 0 0 1-.23-.31l-.01-.02L10 17z"/></svg>';
    },
    14082: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M5.6 15.43A6.19 6.19 0 0 1 14 6.36a6.19 6.19 0 0 1 8.4 9.08l-.03.02-7.3 7.31a1.5 1.5 0 0 1-2.13 0l-7.3-7.3-.03-.03m.71-.7v-.01a5.19 5.19 0 0 1 7.33-7.34v.01c.2.2.51.19.7 0a5.19 5.19 0 0 1 7.34 7.33l-.03.02-7.3 7.31a.5.5 0 0 1-.71 0l-7.3-7.3-.03-.02z"/></svg>';
    },
    83137: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M22.87 6.44c.09-.78-.53-1.4-1.3-1.31-1.43.15-3.43.48-5.42 1.2a11.8 11.8 0 0 0-5.23 3.44L9.86 11.9l6.24 6.24 2.13-1.06a11.8 11.8 0 0 0 3.44-5.23c.72-1.99 1.05-4 1.2-5.41zm-4.93 11.9l-1.72.86-.04.02h-.04l-2.2.67v.01a19.68 19.68 0 0 0-.13 3.33c.01.14.08.22.17.26.08.04.2.05.32-.03a18.83 18.83 0 0 0 2.79-2.26 8.18 8.18 0 0 0 .44-1.1c.16-.51.33-1.12.41-1.76zm-.44 3.16l.35.35-.01.02-.05.05a16.85 16.85 0 0 1-.83.76c-.54.47-1.3 1.08-2.1 1.61a1.3 1.3 0 0 1-2.05-.98 16.46 16.46 0 0 1 .09-3.08l-.16.05a1.5 1.5 0 0 1-1.53-.36l-3.13-3.13c-.4-.4-.54-1-.36-1.53l.05-.16-.36.04c-.7.06-1.62.11-2.54.06a1.3 1.3 0 0 1-1.13-.8c-.18-.42-.13-.94.17-1.35a87.55 87.55 0 0 1 2.15-2.8l.04-.04v-.02l.4.31-.22-.45.03-.01a5.93 5.93 0 0 1 .34-.16c.23-.1.55-.22.94-.35A9.77 9.77 0 0 1 10.26 9a12.9 12.9 0 0 1 5.55-3.61c2.09-.76 4.18-1.1 5.65-1.26 1.41-.15 2.56 1 2.4 2.41a24.04 24.04 0 0 1-1.25 5.65A12.9 12.9 0 0 1 19 17.74a9.77 9.77 0 0 1-.88 3.61 9.18 9.18 0 0 1-.16.34v.03h-.01l-.45-.22zm0 0l.45.22-.04.08-.06.05-.35-.35zm-11-11l-.4-.31.08-.09.1-.05.22.45zm3.16-.44a9.61 9.61 0 0 0-2.84.84l-.13.16a109.83 109.83 0 0 0-1.97 2.58.4.4 0 0 0-.06.38c.04.1.12.17.27.18a16.05 16.05 0 0 0 3.18-.15l.66-2.2.01-.03.02-.04.86-1.72zm5.4 8.45l-5.57-5.56-.51 1.7-.31.92a.5.5 0 0 0 .12.51l3.13 3.13a.5.5 0 0 0 .5.12l.92-.3h.02l1.7-.52zm-10.91.64l2-2 .7.7-2 2-.7-.7zm0 4l4-4 .7.7-4 4-.7-.7zm4 0l2-2 .7.7-2 2-.7-.7zM16 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM17.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>';
    },
  },
]);
