(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5516, 9685],
  {
    59142: function (e, t) {
      var n, a, i;
      (a = [t]),
        (n = function (e) {
          "use strict";
          function t(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
            return Array.from(e);
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = !1;
          if ("undefined" != typeof window) {
            var a = {
              get passive() {
                n = !0;
              },
            };
            window.addEventListener("testPassive", null, a),
              window.removeEventListener("testPassive", null, a);
          }
          var i =
              "undefined" != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iP(ad|hone|od)/.test(window.navigator.platform),
            o = [],
            s = !1,
            l = -1,
            r = void 0,
            c = void 0,
            h = function (e) {
              return o.some(function (t) {
                return !(
                  !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                );
              });
            },
            d = function (e) {
              var t = e || window.event;
              return (
                !!h(t.target) ||
                1 < t.touches.length ||
                (t.preventDefault && t.preventDefault(), !1)
              );
            },
            u = function () {
              setTimeout(function () {
                void 0 !== c &&
                  ((document.body.style.paddingRight = c), (c = void 0)),
                  void 0 !== r &&
                    ((document.body.style.overflow = r), (r = void 0));
              });
            };
          (e.disableBodyScroll = function (e, a) {
            if (i) {
              if (!e)
                return void console.error(
                  "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
                );
              if (
                e &&
                !o.some(function (t) {
                  return t.targetElement === e;
                })
              ) {
                var u = { targetElement: e, options: a || {} };
                (o = [].concat(t(o), [u])),
                  (e.ontouchstart = function (e) {
                    1 === e.targetTouches.length &&
                      (l = e.targetTouches[0].clientY);
                  }),
                  (e.ontouchmove = function (t) {
                    var n, a, i, o;
                    1 === t.targetTouches.length &&
                      ((a = e),
                      (o = (n = t).targetTouches[0].clientY - l),
                      !h(n.target) &&
                        ((a && 0 === a.scrollTop && 0 < o) ||
                        ((i = a) &&
                          i.scrollHeight - i.scrollTop <= i.clientHeight &&
                          o < 0)
                          ? d(n)
                          : n.stopPropagation()));
                  }),
                  s ||
                    (document.addEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0
                    ),
                    (s = !0));
              }
            } else {
              (v = a),
                setTimeout(function () {
                  if (void 0 === c) {
                    var e = !!v && !0 === v.reserveScrollBarGap,
                      t =
                        window.innerWidth -
                        document.documentElement.clientWidth;
                    e &&
                      0 < t &&
                      ((c = document.body.style.paddingRight),
                      (document.body.style.paddingRight = t + "px"));
                  }
                  void 0 === r &&
                    ((r = document.body.style.overflow),
                    (document.body.style.overflow = "hidden"));
                });
              var m = { targetElement: e, options: a || {} };
              o = [].concat(t(o), [m]);
            }
            var v;
          }),
            (e.clearAllBodyScrollLocks = function () {
              i
                ? (o.forEach(function (e) {
                    (e.targetElement.ontouchstart = null),
                      (e.targetElement.ontouchmove = null);
                  }),
                  s &&
                    (document.removeEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0
                    ),
                    (s = !1)),
                  (o = []),
                  (l = -1))
                : (u(), (o = []));
            }),
            (e.enableBodyScroll = function (e) {
              if (i) {
                if (!e)
                  return void console.error(
                    "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                  );
                (e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (o = o.filter(function (t) {
                    return t.targetElement !== e;
                  })),
                  s &&
                    0 === o.length &&
                    (document.removeEventListener(
                      "touchmove",
                      d,
                      n ? { passive: !1 } : void 0
                    ),
                    (s = !1));
              } else
                1 === o.length && o[0].targetElement === e
                  ? (u(), (o = []))
                  : (o = o.filter(function (t) {
                      return t.targetElement !== e;
                    }));
            });
        }),
        void 0 === (i = "function" == typeof n ? n.apply(t, a) : n) ||
          (e.exports = i);
    },
    97754: (e, t) => {
      var n;
      !(function () {
        "use strict";
        var a = {}.hasOwnProperty;
        function i() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var o = typeof n;
              if ("string" === o || "number" === o) e.push(n);
              else if (Array.isArray(n) && n.length) {
                var s = i.apply(null, n);
                s && e.push(s);
              } else if ("object" === o)
                for (var l in n) a.call(n, l) && n[l] && e.push(l);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((i.default = i), (e.exports = i))
          : void 0 ===
              (n = function () {
                return i;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    33319: (e) => {
      e.exports = {
        loader: "loader-PZ4hqS2H",
        static: "static-PZ4hqS2H",
        item: "item-PZ4hqS2H",
        "tv-button-loader": "tv-button-loader-PZ4hqS2H",
        medium: "medium-PZ4hqS2H",
        small: "small-PZ4hqS2H",
        black: "black-PZ4hqS2H",
        white: "white-PZ4hqS2H",
        gray: "gray-PZ4hqS2H",
        primary: "primary-PZ4hqS2H",
        "loader-initial": "loader-initial-PZ4hqS2H",
        "loader-appear": "loader-appear-PZ4hqS2H",
      };
    },
    82335: (e) => {
      e.exports = {
        switcher: "switcher-Wv0rGnT8",
        "thumb-wrapper": "thumb-wrapper-Wv0rGnT8",
        "size-small": "size-small-Wv0rGnT8",
        "size-medium": "size-medium-Wv0rGnT8",
        "size-large": "size-large-Wv0rGnT8",
        input: "input-Wv0rGnT8",
        "intent-default": "intent-default-Wv0rGnT8",
        "disable-active-state-styles": "disable-active-state-styles-Wv0rGnT8",
        "intent-select": "intent-select-Wv0rGnT8",
        track: "track-Wv0rGnT8",
        thumb: "thumb-Wv0rGnT8",
      };
    },
    45469: (e) => {
      e.exports = {
        "tablet-normal-breakpoint": "screen and (max-width: 768px)",
        "small-height-breakpoint": "screen and (max-height: 360px)",
        "tablet-small-breakpoint": "screen and (max-width: 430px)",
      };
    },
    72087: (e) => {
      e.exports = { footer: "footer-w4vEml4d" };
    },
    64429: (e) => {
      e.exports = {
        favorite: "favorite-TPXOIXOJ",
        disabled: "disabled-TPXOIXOJ",
        active: "active-TPXOIXOJ",
        checked: "checked-TPXOIXOJ",
      };
    },
    67158: (e) => {
      e.exports = {
        item: "item-pso1R1PY",
        label: "label-pso1R1PY",
        labelRow: "labelRow-pso1R1PY",
        toolbox: "toolbox-pso1R1PY",
      };
    },
    45829: (e) => {
      e.exports = {
        separator: "separator-w5iW5vBm",
        small: "small-w5iW5vBm",
        normal: "normal-w5iW5vBm",
        large: "large-w5iW5vBm",
      };
    },
    8794: (e) => {
      e.exports = {
        button: "button-cC4UjNEF",
        disabled: "disabled-cC4UjNEF",
        active: "active-cC4UjNEF",
        hidden: "hidden-cC4UjNEF",
      };
    },
    17946: (e, t, n) => {
      "use strict";
      n.d(t, { CustomBehaviourContext: () => a });
      const a = (0, n(50959).createContext)({ enableActiveStateStyles: !0 });
      a.displayName = "CustomBehaviourContext";
    },
    76974: (e, t, n) => {
      "use strict";
      n.d(t, { useIsMounted: () => i });
      var a = n(50959);
      const i = () => {
        const e = (0, a.useRef)(!1);
        return (
          (0, a.useEffect)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      };
    },
    26996: (e, t, n) => {
      "use strict";
      n.d(t, { Loader: () => c });
      var a,
        i = n(50959),
        o = n(97754),
        s = n(74991),
        l = n(33319),
        r = n.n(l);
      !(function (e) {
        (e[(e.Initial = 0)] = "Initial"),
          (e[(e.Appear = 1)] = "Appear"),
          (e[(e.Active = 2)] = "Active");
      })(a || (a = {}));
      class c extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._stateChangeTimeout = null),
            (this.state = { state: a.Initial });
        }
        render() {
          const {
              className: e,
              color: t = "black",
              size: n = "medium",
              staticPosition: a,
            } = this.props,
            s = o(r().item, r()[t], r()[n]);
          return i.createElement(
            "span",
            {
              className: o(
                r().loader,
                a && r().static,
                this._getStateClass(),
                e
              ),
            },
            i.createElement("span", { className: s }),
            i.createElement("span", { className: s }),
            i.createElement("span", { className: s })
          );
        }
        componentDidMount() {
          this.setState({ state: a.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: a.Active });
            }, 2 * s.dur));
        }
        componentWillUnmount() {
          this._stateChangeTimeout &&
            (clearTimeout(this._stateChangeTimeout),
            (this._stateChangeTimeout = null));
        }
        _getStateClass() {
          switch (this.state.state) {
            case a.Initial:
              return r()["loader-initial"];
            case a.Appear:
              return r()["loader-appear"];
            default:
              return "";
          }
        }
      }
    },
    24437: (e, t, n) => {
      "use strict";
      n.d(t, { DialogBreakpoints: () => i });
      var a = n(45469);
      const i = {
        SmallHeight: a["small-height-breakpoint"],
        TabletSmall: a["tablet-small-breakpoint"],
        TabletNormal: a["tablet-normal-breakpoint"],
      };
    },
    39362: (e, t, n) => {
      "use strict";
      n.d(t, { SymbolSearchDialogFooter: () => l });
      var a = n(50959),
        i = n(97754),
        o = n.n(i),
        s = n(72087);
      function l(e) {
        const { className: t, children: n } = e;
        return a.createElement("div", { className: o()(s.footer, t) }, n);
      }
    },
    36189: (e, t, n) => {
      "use strict";
      n.d(t, { FavoriteButton: () => d });
      var a = n(44352),
        i = n(50959),
        o = n(97754),
        s = n(9745),
        l = n(39146),
        r = n(48010),
        c = n(64429);
      const h = {
        add: a.t(null, void 0, n(44629)),
        remove: a.t(null, void 0, n(72482)),
      };
      function d(e) {
        const { className: t, isFilled: n, isActive: a, onClick: d, ...u } = e;
        return i.createElement(s.Icon, {
          ...u,
          className: o(
            c.favorite,
            "apply-common-tooltip",
            n && c.checked,
            a && c.active,
            t
          ),
          icon: n ? l : r,
          onClick: d,
          title: n ? h.remove : h.add,
        });
      }
    },
    36947: (e, t, n) => {
      "use strict";
      n.d(t, { useForceUpdate: () => i });
      var a = n(50959);
      const i = () => {
        const [, e] = (0, a.useReducer)((e) => e + 1, 0);
        return e;
      };
    },
    70412: (e, t, n) => {
      "use strict";
      n.d(t, {
        hoverMouseEventFilter: () => o,
        useAccurateHover: () => s,
        useHover: () => i,
      });
      var a = n(50959);
      function i() {
        const [e, t] = (0, a.useState)(!1);
        return [
          e,
          {
            onMouseOver: function (e) {
              o(e) && t(!0);
            },
            onMouseOut: function (e) {
              o(e) && t(!1);
            },
          },
        ];
      }
      function o(e) {
        return !e.currentTarget.contains(e.relatedTarget);
      }
      function s(e) {
        const [t, n] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            const t = (t) => {
              if (null === e.current) return;
              const a = e.current.contains(t.target);
              n(a);
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
    81332: (e, t, n) => {
      "use strict";
      n.d(t, { multilineLabelWithIconAndToolboxTheme: () => s });
      var a = n(40173),
        i = n(55498),
        o = n(67158);
      const s = (0, a.mergeThemes)(i, o);
    },
    51613: (e, t, n) => {
      "use strict";
      n.d(t, { PopupMenuSeparator: () => l });
      var a = n(50959),
        i = n(97754),
        o = n.n(i),
        s = n(45829);
      function l(e) {
        const { size: t = "normal", className: n, ariaHidden: i = !1 } = e;
        return a.createElement("div", {
          className: o()(
            s.separator,
            "small" === t && s.small,
            "normal" === t && s.normal,
            "large" === t && s.large,
            n
          ),
          role: "separator",
          "aria-hidden": i,
        });
      }
    },
    96040: (e, t, n) => {
      "use strict";
      n.d(t, { RemoveButton: () => h });
      var a = n(44352),
        i = n(50959),
        o = n(97754),
        s = n(9745),
        l = n(33765),
        r = n(8794);
      const c = { remove: a.t(null, void 0, n(34596)) };
      function h(e) {
        const {
          className: t,
          isActive: n,
          onClick: a,
          onMouseDown: h,
          title: d,
          hidden: u,
          "data-name": m = "remove-button",
          ...v
        } = e;
        return i.createElement(s.Icon, {
          ...v,
          "data-name": m,
          className: o(
            r.button,
            "apply-common-tooltip",
            n && r.active,
            u && r.hidden,
            t
          ),
          icon: l,
          onClick: a,
          onMouseDown: h,
          title: d || c.remove,
        });
      }
    },
    40173: (e, t, n) => {
      "use strict";
      function a(e, t, n = {}) {
        return Object.assign(
          {},
          e,
          (function (e, t, n = {}) {
            const a = Object.assign({}, t);
            for (const i of Object.keys(t)) {
              const o = n[i] || i;
              o in e && (a[i] = [e[o], t[i]].join(" "));
            }
            return a;
          })(e, t, n)
        );
      }
      n.d(t, { mergeThemes: () => a });
    },
    6132: (e, t, n) => {
      "use strict";
      var a = n(22134);
      function i() {}
      function o() {}
      (o.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, o, s) {
            if (s !== a) {
              var l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
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
            checkPropTypes: o,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    19036: (e, t, n) => {
      e.exports = n(6132)();
    },
    22134: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    95257: (e, t) => {
      "use strict";
      var n = Symbol.for("react.element"),
        a = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        s = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        r = Symbol.for("react.context"),
        c = Symbol.for("react.forward_ref"),
        h = Symbol.for("react.suspense"),
        d = Symbol.for("react.memo"),
        u = Symbol.for("react.lazy"),
        m = Symbol.iterator;
      var v = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        p = Object.assign,
        g = {};
      function f(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = g),
          (this.updater = n || v);
      }
      function b() {}
      function S(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = g),
          (this.updater = n || v);
      }
      (f.prototype.isReactComponent = {}),
        (f.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (f.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (b.prototype = f.prototype);
      var _ = (S.prototype = new b());
      (_.constructor = S), p(_, f.prototype), (_.isPureReactComponent = !0);
      var C = Array.isArray,
        y = Object.prototype.hasOwnProperty,
        w = { current: null },
        k = { key: !0, ref: !0, __self: !0, __source: !0 };
      function E(e, t, a) {
        var i,
          o = {},
          s = null,
          l = null;
        if (null != t)
          for (i in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (s = "" + t.key),
          t))
            y.call(t, i) && !k.hasOwnProperty(i) && (o[i] = t[i]);
        var r = arguments.length - 2;
        if (1 === r) o.children = a;
        else if (1 < r) {
          for (var c = Array(r), h = 0; h < r; h++) c[h] = arguments[h + 2];
          o.children = c;
        }
        if (e && e.defaultProps)
          for (i in (r = e.defaultProps)) void 0 === o[i] && (o[i] = r[i]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: l,
          props: o,
          _owner: w.current,
        };
      }
      function T(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n;
      }
      var x = /\/+/g;
      function M(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function I(e, t, i, o, s) {
        var l = typeof e;
        ("undefined" !== l && "boolean" !== l) || (e = null);
        var r = !1;
        if (null === e) r = !0;
        else
          switch (l) {
            case "string":
            case "number":
              r = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case n:
                case a:
                  r = !0;
              }
          }
        if (r)
          return (
            (s = s((r = e))),
            (e = "" === o ? "." + M(r, 0) : o),
            C(s)
              ? ((i = ""),
                null != e && (i = e.replace(x, "$&/") + "/"),
                I(s, t, i, "", function (e) {
                  return e;
                }))
              : null != s &&
                (T(s) &&
                  (s = (function (e, t) {
                    return {
                      $$typeof: n,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    s,
                    i +
                      (!s.key || (r && r.key === s.key)
                        ? ""
                        : ("" + s.key).replace(x, "$&/") + "/") +
                      e
                  )),
                t.push(s)),
            1
          );
        if (((r = 0), (o = "" === o ? "." : o + ":"), C(e)))
          for (var c = 0; c < e.length; c++) {
            var h = o + M((l = e[c]), c);
            r += I(l, t, i, h, s);
          }
        else if (
          ((h = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (m && e[m]) || e["@@iterator"])
              ? e
              : null;
          })(e)),
          "function" == typeof h)
        )
          for (e = h.call(e), c = 0; !(l = e.next()).done; )
            r += I((l = l.value), t, i, (h = o + M(l, c++)), s);
        else if ("object" === l)
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead."
            ))
          );
        return r;
      }
      function P(e, t, n) {
        if (null == e) return e;
        var a = [],
          i = 0;
        return (
          I(e, a, "", "", function (e) {
            return t.call(n, e, i++);
          }),
          a
        );
      }
      function R(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            }
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var A = { current: null },
        F = { transition: null },
        N = {
          ReactCurrentDispatcher: A,
          ReactCurrentBatchConfig: F,
          ReactCurrentOwner: w,
        };
      (t.Children = {
        map: P,
        forEach: function (e, t, n) {
          P(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            P(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            P(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!T(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        },
      }),
        (t.Component = f),
        (t.Fragment = i),
        (t.Profiler = s),
        (t.PureComponent = S),
        (t.StrictMode = o),
        (t.Suspense = h),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
        (t.cloneElement = function (e, t, a) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
            );
          var i = p({}, e.props),
            o = e.key,
            s = e.ref,
            l = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((s = t.ref), (l = w.current)),
              void 0 !== t.key && (o = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var r = e.type.defaultProps;
            for (c in t)
              y.call(t, c) &&
                !k.hasOwnProperty(c) &&
                (i[c] = void 0 === t[c] && void 0 !== r ? r[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) i.children = a;
          else if (1 < c) {
            r = Array(c);
            for (var h = 0; h < c; h++) r[h] = arguments[h + 2];
            i.children = r;
          }
          return {
            $$typeof: n,
            type: e.type,
            key: o,
            ref: s,
            props: i,
            _owner: l,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: r,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: l, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = E),
        (t.createFactory = function (e) {
          var t = E.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: c, render: e };
        }),
        (t.isValidElement = T),
        (t.lazy = function (e) {
          return {
            $$typeof: u,
            _payload: { _status: -1, _result: e },
            _init: R,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = F.transition;
          F.transition = {};
          try {
            e();
          } finally {
            F.transition = t;
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }),
        (t.useCallback = function (e, t) {
          return A.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return A.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return A.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return A.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return A.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return A.current.useImperativeHandle(e, t, n);
        }),
        (t.useInsertionEffect = function (e, t) {
          return A.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return A.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return A.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return A.current.useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return A.current.useRef(e);
        }),
        (t.useState = function (e) {
          return A.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return A.current.useSyncExternalStore(e, t, n);
        }),
        (t.useTransition = function () {
          return A.current.useTransition();
        }),
        (t.version = "18.2.0");
    },
    50959: (e, t, n) => {
      "use strict";
      e.exports = n(95257);
    },
    26854: (e) => {
      e.exports = {
        summary: "summary-WgEIQSbO",
        hovered: "hovered-WgEIQSbO",
        caret: "caret-WgEIQSbO",
      };
    },
    65785: (e) => {
      e.exports = {
        wrapper: "wrapper-o7rRFc7H",
        labelRow: "labelRow-o7rRFc7H",
        label: "label-o7rRFc7H",
        labelHint: "labelHint-o7rRFc7H",
        labelOn: "labelOn-o7rRFc7H",
      };
    },
    6001: (e) => {
      e.exports = {
        wrapper: "wrapper-n_GqAsy6",
        hovered: "hovered-n_GqAsy6",
        withIcon: "withIcon-n_GqAsy6",
        labelRow: "labelRow-n_GqAsy6",
        label: "label-n_GqAsy6",
        switchWrap: "switchWrap-n_GqAsy6",
        icon: "icon-n_GqAsy6",
        labelHint: "labelHint-n_GqAsy6",
        labelOn: "labelOn-n_GqAsy6",
      };
    },
    45184: (e) => {
      e.exports = {
        button: "button-gbkEfGm4",
        withText: "withText-gbkEfGm4",
        withoutText: "withoutText-gbkEfGm4",
      };
    },
    74749: (e) => {
      e.exports = { button: "button-rqVQ8gUB" };
    },
    86464: (e) => {
      e.exports = {
        form: "form-tGP0FmdI",
        interacting: "interacting-tGP0FmdI",
        input: "input-tGP0FmdI",
        menu: "menu-tGP0FmdI",
        add: "add-tGP0FmdI",
        hovered: "hovered-tGP0FmdI",
        hover: "hover-tGP0FmdI",
        wrap: "wrap-tGP0FmdI",
      };
    },
    52149: (e) => {
      e.exports = { spinnerWrap: "spinnerWrap-q9igAFmQ" };
    },
    77907: (e) => {
      e.exports = { title: "title-t_2RnW3_" };
    },
    42431: (e) => {
      e.exports = {
        button: "button-NU6T1Gv2",
        first: "first-NU6T1Gv2",
        last: "last-NU6T1Gv2",
      };
    },
    72281: (e) => {
      e.exports = { wrap: "wrap-ZOLycUbI" };
    },
    46949: (e) => {
      e.exports = { hidden: "hidden-K_dNKcEL" };
    },
    32924: (e) => {
      e.exports = {
        "tablet-small-breakpoint": "screen and (max-width: 430px)",
        item: "item-TtgC6v1y",
        withIcon: "withIcon-TtgC6v1y",
        shortcut: "shortcut-TtgC6v1y",
        loading: "loading-TtgC6v1y",
        icon: "icon-TtgC6v1y",
      };
    },
    90965: (e) => {
      e.exports = { button: "button-opm_4K5V", menu: "menu-opm_4K5V" };
    },
    43741: (e) => {
      e.exports = {
        customTradingViewStyleButton: "customTradingViewStyleButton-Y_dY8Pmt",
        withoutIcon: "withoutIcon-Y_dY8Pmt",
      };
    },
    20443: (e) => {
      e.exports = {
        dropdown: "dropdown-IvhZ8gpO",
        label: "label-IvhZ8gpO",
        smallWidthTitle: "smallWidthTitle-IvhZ8gpO",
        smallWidthMenuItem: "smallWidthMenuItem-IvhZ8gpO",
        smallWidthWrapper: "smallWidthWrapper-IvhZ8gpO",
      };
    },
    19606: (e) => {
      e.exports = { value: "value-Os5mxnuv", selected: "selected-Os5mxnuv" };
    },
    937: (e) => {
      e.exports = { smallWidthMenuItem: "smallWidthMenuItem-Fj7ZZh1_" };
    },
    65057: (e) => {
      e.exports = {
        button: "button-_8r4li9v",
        first: "first-_8r4li9v",
        last: "last-_8r4li9v",
        menu: "menu-_8r4li9v",
        dropdown: "dropdown-_8r4li9v",
        menuContent: "menuContent-_8r4li9v",
        section: "section-_8r4li9v",
        smallTabletSectionTitle: "smallTabletSectionTitle-_8r4li9v",
        addCustomInterval: "addCustomInterval-_8r4li9v",
        hovered: "hovered-_8r4li9v",
      };
    },
    14402: (e) => {
      e.exports = { button: "button-G2fjEkbQ" };
    },
    12805: (e) => {
      e.exports = {
        button: "button-fhE1_4Xj",
        isDisabled: "isDisabled-fhE1_4Xj",
      };
    },
    47406: (e) => {
      e.exports = {
        saveString: "saveString-Wuq5IorU",
        hidden: "hidden-Wuq5IorU",
        loader: "loader-Wuq5IorU",
      };
    },
    80803: (e) => {
      e.exports = {
        opened: "opened-PSZfKmCG",
        hover: "hover-PSZfKmCG",
        autoSaveWrapper: "autoSaveWrapper-PSZfKmCG",
        sharingWrapper: "sharingWrapper-PSZfKmCG",
        button: "button-PSZfKmCG",
        buttonSmallPadding: "buttonSmallPadding-PSZfKmCG",
        hintPlaceHolder: "hintPlaceHolder-PSZfKmCG",
        smallHintPlaceHolder: "smallHintPlaceHolder-PSZfKmCG",
        popupItemRowTabletSmall: "popupItemRowTabletSmall-PSZfKmCG",
        shortcut: "shortcut-PSZfKmCG",
        toolTitle: "toolTitle-PSZfKmCG",
        toolTitleMobile: "toolTitleMobile-PSZfKmCG",
        layoutItem: "layoutItem-PSZfKmCG",
        layoutMeta: "layoutMeta-PSZfKmCG",
        labelRow: "labelRow-PSZfKmCG",
        layoutTitle: "layoutTitle-PSZfKmCG",
        layoutItemWrap: "layoutItemWrap-PSZfKmCG",
        layoutTitleMobile: "layoutTitleMobile-PSZfKmCG",
        active: "active-PSZfKmCG",
        textWrap: "textWrap-PSZfKmCG",
        text: "text-PSZfKmCG",
        withIcon: "withIcon-PSZfKmCG",
        sharingLabelWrap: "sharingLabelWrap-PSZfKmCG",
        infoIcon: "infoIcon-PSZfKmCG",
        copyLink: "copyLink-PSZfKmCG",
        copyLinkMobile: "copyLinkMobile-PSZfKmCG",
      };
    },
    58893: (e) => {
      e.exports = {
        button: "button-rlvYsQ_k",
        largeLeftPadding: "largeLeftPadding-rlvYsQ_k",
        text: "text-rlvYsQ_k",
        uppercase: "uppercase-rlvYsQ_k",
      };
    },
    10431: (e) => {
      e.exports = {
        button: "button-_iN2IH5A",
        text: "text-_iN2IH5A",
        logo: "logo-_iN2IH5A",
      };
    },
    48813: (e) => {
      e.exports = { description: "description-pI85IN0X" };
    },
    8538: (e) => {
      e.exports = { item: "item-V0xAFkBB", round: "round-V0xAFkBB" };
    },
    50444: (e) => {
      e.exports = {
        wrap: "wrap-tynHcbsI",
        titleWrap: "titleWrap-tynHcbsI",
        indicators: "indicators-tynHcbsI",
        title: "title-tynHcbsI",
        icon: "icon-tynHcbsI",
        text: "text-tynHcbsI",
        titleTabletSmall: "titleTabletSmall-tynHcbsI",
        labelRow: "labelRow-tynHcbsI",
        label: "label-tynHcbsI",
      };
    },
    23978: (e) => {
      e.exports = {
        labelRow: "labelRow-nQmSZ6zP",
        toolbox: "toolbox-nQmSZ6zP",
        description: "description-nQmSZ6zP",
        descriptionTabletSmall: "descriptionTabletSmall-nQmSZ6zP",
        item: "item-nQmSZ6zP",
        titleItem: "titleItem-nQmSZ6zP",
        titleItemTabletSmall: "titleItemTabletSmall-nQmSZ6zP",
        itemTabletSmall: "itemTabletSmall-nQmSZ6zP",
        itemLabelTabletSmall: "itemLabelTabletSmall-nQmSZ6zP",
        wrap: "wrap-nQmSZ6zP",
        hovered: "hovered-nQmSZ6zP",
      };
    },
    19366: (e) => {
      e.exports = {
        menu: "menu-UCGfiau8",
        menuSmallTablet: "menuSmallTablet-UCGfiau8",
        menuItemHeaderTabletSmall: "menuItemHeaderTabletSmall-UCGfiau8",
        menuItemHeader: "menuItemHeader-UCGfiau8",
      };
    },
    15865: (e) => {
      e.exports = {
        wrap: "wrap-_hkHmHWX",
        full: "full-_hkHmHWX",
        first: "first-_hkHmHWX",
        last: "last-_hkHmHWX",
        medium: "medium-_hkHmHWX",
        buttonWithFavorites: "buttonWithFavorites-_hkHmHWX",
      };
    },
    93260: (e) => {
      e.exports = { icon: "icon-ZSkNJ_HT" };
    },
    1626: (e, t, n) => {
      "use strict";
      n.d(t, { CollapsibleSection: () => r });
      var a = n(50959),
        i = n(97754),
        o = n.n(i),
        s = n(41890),
        l = n(26854);
      function r(e) {
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "div",
            {
              className: o()(e.className, l.summary),
              onClick: function () {
                e.onStateChange && e.onStateChange(!e.open);
              },
              "data-open": e.open,
            },
            e.summary,
            a.createElement(s.ToolWidgetCaret, {
              className: l.caret,
              dropped: Boolean(e.open),
            })
          ),
          e.open && e.children
        );
      }
    },
    51107: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_MENU_ITEM_SWITCHER_THEME: () => v,
        MenuItemSwitcher: () => p,
      });
      var a = n(50959),
        i = n(97754),
        o = n.n(i),
        s = n(17946),
        l = n(82335),
        r = n.n(l);
      function c(e) {
        const t = (0, a.useContext)(s.CustomBehaviourContext),
          {
            className: n,
            intent: o = "default",
            size: l = "small",
            enableActiveStateStyles: c = t.enableActiveStateStyles,
          } = e;
        return i(
          n,
          r().switcher,
          r()[`size-${l}`],
          r()[`intent-${o}`],
          !c && r()["disable-active-state-styles"]
        );
      }
      function h(e) {
        var t;
        const {
            reference: n,
            size: i,
            intent: o,
            role: s,
            "aria-checked": l,
            checked: h,
            defaultChecked: d,
            onKeyDown: u,
            ...m
          } = e,
          v = (0, a.useCallback)(
            (e) => {
              13 === e.keyCode && e.target.click(), u && u(e);
            },
            [u]
          );
        return a.createElement(
          "span",
          { className: c(e) },
          a.createElement("input", {
            ...m,
            type: "checkbox",
            className: r().input,
            ref: n,
            role: null != s ? s : "switch",
            "aria-checked":
              null !== (t = null != l ? l : h) && void 0 !== t ? t : d,
            checked: h,
            defaultChecked: d,
            onKeyDown: v,
          }),
          a.createElement(
            "span",
            { className: r()["thumb-wrapper"] },
            a.createElement("span", { className: r().track }),
            a.createElement("span", { className: r().thumb })
          )
        );
      }
      var d = n(9745),
        u = n(90186),
        m = n(6001);
      const v = m;
      function p(e) {
        const {
            className: t,
            checked: n,
            id: i,
            label: s,
            labelDescription: l,
            value: r,
            preventLabelHighlight: c,
            reference: v,
            switchReference: p,
            theme: g = m,
            disabled: f,
            icon: b,
          } = e,
          S = o()(g.label, n && !c && g.labelOn),
          _ = o()(
            t,
            g.wrapper,
            n && g.wrapperWithOnLabel,
            l && g.wrapperWithDescription
          );
        return a.createElement(
          "label",
          { className: o()(_, b && g.withIcon), htmlFor: i, ref: v },
          void 0 !== b &&
            a.createElement(d.Icon, { className: g.icon, icon: b }),
          a.createElement(
            "div",
            { className: g.labelRow },
            a.createElement("div", { className: S }, s),
            l && a.createElement("div", { className: g.labelHint }, l)
          ),
          a.createElement(
            "div",
            { className: m.switchWrap },
            a.createElement(h, {
              disabled: f,
              className: g.switch,
              reference: p,
              checked: n,
              onChange: function (t) {
                const n = t.target.checked;
                void 0 !== e.onChange && e.onChange(n);
              },
              value: r,
              tabIndex: -1,
              id: i,
              role: e.switchRole,
              ...(0, u.filterDataProps)(e),
            })
          )
        );
      }
    },
    97482: (e, t, n) => {
      "use strict";
      n.d(t, { ToolWidgetIconButton: () => l });
      var a = n(50959),
        i = n(97754),
        o = n(94206),
        s = n(74749);
      const l = a.forwardRef((e, t) => {
        const { className: n, id: l, ...r } = e;
        return a.createElement(o.ToolWidgetButton, {
          "data-name": l,
          ...r,
          ref: t,
          className: i(n, s.button),
        });
      });
    },
    71485: (e, t, n) => {
      "use strict";
      n.d(t, { INTERVALS: () => i });
      var a = n(44352);
      const i = [
        { name: "", label: a.t(null, { context: "interval" }, n(37830)) },
        { name: "H", label: a.t(null, { context: "interval" }, n(5285)) },
        { name: "D", label: a.t(null, { context: "interval" }, n(6174)) },
        { name: "W", label: a.t(null, { context: "interval" }, n(25042)) },
        { name: "M", label: a.t(null, { context: "interval" }, n(79410)) },
      ];
    },
    81384: (e, t, n) => {
      "use strict";
      n.d(t, { ToolWidgetMenuSummary: () => s });
      var a = n(50959),
        i = n(97754),
        o = n(77907);
      function s(e) {
        return a.createElement(
          "div",
          { className: i(e.className, o.title) },
          e.children
        );
      }
    },
    19475: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          getRestrictedToolSet: () => qn,
        });
      var a = n(2484),
        i = n(50959),
        o = n(19036),
        s = n(44352),
        l = n(82992),
        r = n(77906),
        c = n(11316),
        h = n(36189),
        d = n(9745),
        u = n(16396),
        m = n(37536),
        v = n(97754),
        p = n.n(v),
        g = n(72281);
      const f = i.forwardRef((e, t) => {
        const { children: n, className: a, ...o } = e;
        return i.createElement(
          "div",
          { className: v(a, g.wrap), ref: t, ...o },
          n
        );
      });
      var b = n(94206),
        S = n(90186),
        _ = n(42431);
      class C extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleClick = () => {
              const { onClick: e, onClickArg: t } = this.props;
              e && e(t);
            });
        }
        render() {
          const {
              isFirst: e,
              isLast: t,
              hint: n,
              text: a,
              icon: o,
              isActive: s,
              isDisabled: l,
              className: r,
            } = this.props,
            c = (0, S.filterDataProps)(this.props);
          return i.createElement(b.ToolWidgetButton, {
            ...c,
            icon: o,
            text: a,
            title: n,
            isDisabled: l,
            isActive: s,
            isGrouped: !0,
            onClick: this._handleClick,
            className: v(r, _.button, { [_.first]: e, [_.last]: t }),
          });
        }
      }
      var y = n(51613),
        w = n(90692),
        k = n(24437),
        E = n(81332),
        T = n(10654),
        x = n(50745),
        M = n(1930),
        I = n(90965);
      const P = { barsStyle: s.t(null, void 0, n(84232)) },
        R = (0, T.registryContextType)();
      function A(e) {
        var t;
        return !(null === (t = l.linking.supportedChartStyles.value()) ||
        void 0 === t
          ? void 0
          : t.includes(e));
      }
      class F extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleChangeStyle = (e) => {
              const {
                favorites: t,
                lastSelectedNotFavorite: n,
                activeStyle: a,
              } = this.state;
              this.setState({
                activeStyle: e,
                lastSelectedNotFavorite: t.includes(a) ? n : a,
              });
            }),
            (this._handleSelectStyle = (e) => {
              const { chartWidgetCollection: t } = this.context;
              e !== t.activeChartStyle.value() && t.setChartStyleToWidget(e);
            }),
            (this._handleClickFavorite = (e) => {
              this._isStyleFavorited(e)
                ? this._handleRemoveFavorite(e)
                : this._handleAddFavorite(e);
            }),
            (this._boundForceUpdate = () => {
              this.forceUpdate();
            }),
            (this._handleQuickClick = (e) => {
              this._handleSelectStyle(e), this._trackClick();
            }),
            (0, T.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
              favoriteChartStylesService: o.any.isRequired,
            });
          const { chartWidgetCollection: n, favoriteChartStylesService: a } = t,
            i = n.activeChartStyle.value(),
            s = a.get(),
            l = (0, x.japaneseChartStyles)();
          this.state = {
            activeStyle: i,
            favorites: s,
            styles: (0, x.commonChartStyles)(),
            japaneseStyles: l,
          };
        }
        componentDidMount() {
          const { chartWidgetCollection: e, favoriteChartStylesService: t } =
            this.context;
          e.activeChartStyle.subscribe(this._handleChangeStyle),
            t.getOnChange().subscribe(this, this._handleChangeSettings),
            l.linking.supportedChartStyles.subscribe(this._boundForceUpdate);
        }
        componentWillUnmount() {
          const { chartWidgetCollection: e, favoriteChartStylesService: t } =
            this.context;
          e.activeChartStyle.unsubscribe(this._handleChangeStyle),
            t.getOnChange().unsubscribe(this, this._handleChangeSettings),
            l.linking.supportedChartStyles.unsubscribe(this._boundForceUpdate);
        }
        render() {
          const {
              isShownQuicks: e,
              displayMode: t = "full",
              id: n,
            } = this.props,
            {
              activeStyle: a,
              favorites: o,
              styles: s,
              japaneseStyles: l,
              lastSelectedNotFavorite: h,
            } = this.state,
            u = "small" !== t && e && 0 !== o.length,
            v = [...o];
          v.includes(a) ? void 0 !== h && v.push(h) : v.push(a);
          const p = u && v.length > 1;
          return i.createElement(
            w.MatchMedia,
            { rule: k.DialogBreakpoints.TabletSmall },
            (e) => {
              const t = s.map((t) => this._renderPopupMenuItem(t, t === a, e)),
                o = l.map((t) => this._renderPopupMenuItem(t, t === a, e));
              return i.createElement(
                f,
                { id: n },
                p &&
                  v.map((e, t) =>
                    i.createElement(C, {
                      className: I.button,
                      icon: c.SERIES_ICONS[e],
                      isActive: u && a === e,
                      isDisabled: A(e),
                      key: t,
                      hint: (0, M.getTranslatedChartStyleName)(e),
                      isFirst: 0 === t,
                      isLast: t === v.length - 1,
                      onClick: u ? this._handleQuickClick : void 0,
                      onClickArg: e,
                      "data-value": r.STYLE_SHORT_NAMES[e],
                    })
                  ),
                i.createElement(
                  m.ToolWidgetMenu,
                  {
                    arrow: Boolean(p),
                    content: p
                      ? void 0
                      : i.createElement(
                          f,
                          null,
                          i.createElement(d.Icon, { icon: c.SERIES_ICONS[a] })
                        ),
                    title: p
                      ? P.barsStyle
                      : (0, M.getTranslatedChartStyleName)(a),
                    className: I.menu,
                    isDrawer: e,
                    onClick: this._trackClick,
                  },
                  t,
                  !!o.length && i.createElement(y.PopupMenuSeparator, null),
                  o
                )
              );
            }
          );
        }
        _renderPopupMenuItem(e, t, n) {
          const { isFavoritingAllowed: a } = this.props,
            o = this._isStyleFavorited(e);
          return i.createElement(u.PopupMenuItem, {
            key: e,
            theme: n ? E.multilineLabelWithIconAndToolboxTheme : void 0,
            icon: c.SERIES_ICONS[e],
            isActive: t,
            isDisabled: A(e),
            label: (0, M.getTranslatedChartStyleName)(e) || "",
            onClick: this._handleSelectStyle,
            onClickArg: e,
            showToolboxOnHover: !o,
            toolbox:
              a &&
              i.createElement(h.FavoriteButton, {
                isActive: t,
                isFilled: o,
                onClick: () => this._handleClickFavorite(e),
              }),
            "data-value": r.STYLE_SHORT_NAMES[e],
          });
        }
        _handleChangeSettings(e) {
          this.setState({ lastSelectedNotFavorite: void 0, favorites: e });
        }
        _isStyleFavorited(e) {
          return -1 !== this.state.favorites.indexOf(e);
        }
        _handleAddFavorite(e) {
          const { favorites: t } = this.state,
            { favoriteChartStylesService: n } = this.context;
          n.set([...t, e]);
        }
        _handleRemoveFavorite(e) {
          const { favorites: t } = this.state,
            { favoriteChartStylesService: n } = this.context;
          n.set(t.filter((t) => t !== e));
        }
        _trackClick() {
          0;
        }
      }
      F.contextType = R;
      var N = n(45184);
      const H = ["medium", "small"];
      function W(e) {
        const {
            text: t,
            className: n,
            displayMode: a,
            collapseWhen: o = H,
            ...s
          } = e,
          l = !o.includes(a);
        return i.createElement(b.ToolWidgetButton, {
          ...s,
          text: l ? t : void 0,
          className: v(n, N.button, l ? N.withText : N.withoutText),
        });
      }
      var z = n(51768),
        O = n(1393);
      const L = {
          compare: s.t(null, void 0, n(90069)),
          compareOrAddSymbol: s.t(null, void 0, n(20229)),
        },
        D = (0, T.registryContextType)();
      class U extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._updateState = (e) => {
              this.setState({ isActive: e });
            }),
            (this._handleClick = () => {
              var e;
              (0, z.trackEvent)("GUI", "Chart Header Toolbar", "compare"),
                null === (e = this._compareDialogRenderer) ||
                  void 0 === e ||
                  e.show();
            }),
            (0, T.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
            }),
            (this.state = { isActive: !1 }),
            (this._compareDialogRenderer =
              this.context.chartWidgetCollection.getCompareDialogRenderer());
        }
        componentDidMount() {
          var e;
          null === (e = this._compareDialogRenderer) ||
            void 0 === e ||
            e.visible().subscribe(this._updateState);
        }
        componentWillUnmount() {
          var e;
          null === (e = this._compareDialogRenderer) ||
            void 0 === e ||
            e.visible().unsubscribe(this._updateState);
        }
        render() {
          const { isActive: e } = this.state;
          return i.createElement(W, {
            ...this.props,
            icon: O,
            isOpened: e,
            onClick: this._handleClick,
            title: L.compareOrAddSymbol,
            collapseWhen: ["full", "medium", "small"],
          });
        }
      }
      U.contextType = D;
      var B = n(97482),
        V = n(61814),
        G = n(68335),
        Z = n(97268);
      const K = { hint: s.t(null, void 0, n(11682)) },
        q = (0, V.hotKeySerialize)({
          keys: [(0, G.humanReadableModifiers)(G.Modifiers.Shift, !1), "F"],
          text: "{0} + {1}",
        }),
        j = (0, T.registryContextType)();
      class $ extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const { chartWidgetCollection: e } = this.context;
              e.startFullscreen();
            }),
            (0, T.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
            });
        }
        render() {
          const { className: e, id: t } = this.props;
          return i.createElement(B.ToolWidgetIconButton, {
            id: t,
            icon: Z,
            onClick: this._handleClick,
            title: K.hint,
            className: v(e),
            "data-tooltip-hotkey": q,
          });
        }
      }
      $.contextType = j;
      var Q = n(50151);
      const Y = (0, n(98351).getLogger)("FavoritesInfo");
      function X(e, t) {
        if (0 === e.length) return Promise.resolve([]);
        Y.logNormal("Requesting favorites info");
        const n = [],
          a = new Map(),
          i = new Map(),
          o = new Map();
        return (
          e.forEach((e) => {
            switch (e.type) {
              case "java":
                o.set(e.studyId, e);
                break;
              case "pine":
                isPublishedPineId(e.pineId)
                  ? a.set(e.pineId, e)
                  : i.set(e.pineId, e);
                break;
              default:
                (0, Q.assert)(!1, `unknown favorite type ${JSON.stringify(e)}`);
            }
          }),
          0 !== o.size &&
            n.push(
              t
                .findAllJavaStudies()
                .then((e) => {
                  const t = new Map();
                  for (const n of e)
                    !n.is_hidden_study &&
                      o.has(n.id) &&
                      t.set(n.id, {
                        name: n.description,
                        localizedName: n.description_localized,
                        studyMarketShittyObject: n,
                      });
                  return t;
                })
                .then((e) => {
                  const t = (function (e, t) {
                    const n = { items: [], notFoundItems: [] };
                    return (
                      e.forEach((e, a) => {
                        const i = t.get(a);
                        void 0 !== i
                          ? n.items.push({ item: e, info: i })
                          : n.notFoundItems.push(e);
                      }),
                      n
                    );
                  })(o, e);
                  if (0 !== t.notFoundItems.length) {
                    const e = t.notFoundItems.map((e) => e.studyId);
                    Y.logWarn(`Cannot find java scripts: ${JSON.stringify(e)}`);
                  }
                  return t.items;
                })
            ),
          Promise.all(n).then(
            (e) => (
              Y.logNormal("Requesting favorites info finished"),
              e.reduce((e, t) => e.concat(t), [])
            )
          )
        );
      }
      var J = n(6250),
        ee = n(76076),
        te = n(26996),
        ne = n(52149);
      function ae(e) {
        const { className: t } = e;
        return i.createElement(
          "div",
          { className: p()(ne.spinnerWrap, t) },
          i.createElement(te.Loader, null)
        );
      }
      var ie = n(81384),
        oe = n(76422),
        se = n(39681),
        le = n(20443);
      const re = {
          text: s.t(null, void 0, n(61142)),
          hint: s.t(null, void 0, n(74527)),
          favorites: s.t(null, void 0, n(33959)),
        },
        ce = (0, V.hotKeySerialize)({ keys: ["/"], text: "{0}" }),
        he = (0, T.registryContextType)();
      class de extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._promise = null),
            (this._menu = i.createRef()),
            (this._favoriteFundamentalsModel = null),
            (this._setActiveState = (e) => {
              this.setState({ isActive: e });
            }),
            (this._handleClick = () => {
              const { studyMarket: e } = this.props;
              this.setState({ isActive: !0 }, () => {
                e.visible().value() ? e.hide() : e.show();
              }),
                this._trackClick();
            }),
            (this._handleSelectIndicator = (e) => {
              (e = (0, Q.ensureDefined)(e)),
                this._trackFavoriteAction("Favorite indicator from toolbar");
              const { chartWidgetCollection: t } = this.context;
              if ("java" === e.type) {
                const t = (0, J.tryFindStudyLineToolNameByStudyId)(e.studyId);
                if (null !== t) return void ee.tool.setValue(t);
              }
              t.activeChartWidget.value().insertStudy(e, []);
            }),
            (this._handleFavoriteIndicatorsChange = () => {
              const { favoriteScriptsModel: e } = this.context,
                t = [...(0, Q.ensureDefined)(e).favorites()];
              this.setState({ favorites: t }), this._clearCache();
            }),
            (this._handleFavoriteFundamentalsChange = () => {
              var e;
              const t = new Set(
                (null === (e = this._favoriteFundamentalsModel) || void 0 === e
                  ? void 0
                  : e.favorites()) || []
              );
              this.setState({ favoriteFundamentals: t }), this._clearCache();
            }),
            (this._handleMouseEnter = () => {
              this._prefetchFavorites();
            }),
            (this._handleWrapClick = () => {
              this._prefetchFavorites();
            }),
            (this._handleChangeActiveWidget = () => {
              this._clearCache();
            }),
            (this._clearCache = () => {
              (this._promise = null), this.setState({ infos: [] });
            }),
            (this._handleScriptRenamed = (e) => {
              const { favoriteScriptsModel: t } = this.context;
              void 0 !== t && t.isFav(e.scriptIdPart) && this._clearCache();
            }),
            (this._handleFavoriteMenuClick = () => {
              this._trackClick(),
                this._trackFavoriteAction(
                  "Select favorite indicators dropdown"
                );
            }),
            (0, T.validateRegistry)(t, {
              favoriteScriptsModel: o.any,
              chartWidgetCollection: o.any.isRequired,
            });
          const { favoriteScriptsModel: n } = t,
            a = void 0 !== n ? n.favorites() : [];
          this.state = {
            isActive: !1,
            isLoading: !1,
            favorites: a,
            favoriteFundamentals: void 0,
            infos: [],
          };
        }
        componentDidMount() {
          const { studyMarket: e } = this.props,
            { favoriteScriptsModel: t, chartWidgetCollection: n } =
              this.context;
          e.visible().subscribe(this._setActiveState),
            void 0 !== t &&
              (t
                .favoritesChanged()
                .subscribe(this, this._handleFavoriteIndicatorsChange),
              n.activeChartWidget.subscribe(this._handleChangeActiveWidget)),
            oe.on("TVScriptRenamed", this._handleScriptRenamed, null);
        }
        componentWillUnmount() {
          const { studyMarket: e } = this.props,
            { favoriteScriptsModel: t, chartWidgetCollection: n } =
              this.context;
          e.visible().unsubscribe(this._setActiveState),
            void 0 !== t &&
              (t
                .favoritesChanged()
                .unsubscribe(this, this._handleFavoriteIndicatorsChange),
              n.activeChartWidget.unsubscribe(this._handleChangeActiveWidget)),
            oe.unsubscribe("TVScriptRenamed", this._handleScriptRenamed, null),
            (this._promise = null);
        }
        render() {
          const {
              isActive: e,
              favorites: t,
              favoriteFundamentals: a,
              isLoading: o,
            } = this.state,
            { className: l, displayMode: r, id: c } = this.props,
            { chartWidgetCollection: h } = this.context;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              f,
              {
                id: c,
                onMouseEnter: this._handleMouseEnter,
                onClick: this._handleWrapClick,
              },
              i.createElement(W, {
                displayMode: r,
                className: l,
                icon: se,
                isOpened: e,
                onClick: this._handleClick,
                text: re.text,
                title: re.hint,
                "data-role": "button",
                "data-name": "open-indicators-dialog",
                "data-tooltip-hotkey": ce,
              }),
              Boolean(t.length > 0 || (null == a ? void 0 : a.size)) &&
                i.createElement(
                  w.MatchMedia,
                  { rule: "screen and (max-width: 430px)" },
                  (e) =>
                    i.createElement(
                      m.ToolWidgetMenu,
                      {
                        key: h.activeChartWidget.value().id(),
                        arrow: !0,
                        closeOnClickOutside: !0,
                        isDrawer: e,
                        drawerPosition: "Bottom",
                        title: re.favorites,
                        ref: this._menu,
                        onClick: this._handleFavoriteMenuClick,
                        "data-name": "show-favorite-indicators",
                      },
                      i.createElement(
                        "div",
                        {
                          className: p()(
                            le.dropdown,
                            e && le.smallWidthWrapper
                          ),
                        },
                        i.createElement(
                          ie.ToolWidgetMenuSummary,
                          { className: e && le.smallWidthTitle },
                          s.t(null, void 0, n(83127))
                        ),
                        o && i.createElement(ae, null),
                        !o &&
                          i.createElement(
                            i.Fragment,
                            null,
                            this.state.infos.length > 0
                              ? this.state.infos.map((t) =>
                                  i.createElement(u.PopupMenuItem, {
                                    className: p()(e && le.smallWidthMenuItem),
                                    theme: e
                                      ? E.multilineLabelWithIconAndToolboxTheme
                                      : void 0,
                                    key:
                                      "java" === t.item.type
                                        ? t.item.studyId
                                        : t.item.pineId,
                                    onClick: this._handleSelectIndicator,
                                    onClickArg: t.item,
                                    label: i.createElement(
                                      "span",
                                      {
                                        className: p()(
                                          !e && le.label,
                                          e && le.smallWidthLabel,
                                          "apply-overflow-tooltip"
                                        ),
                                      },
                                      ue(t)
                                    ),
                                  })
                                )
                              : null !== this._promise &&
                                  i.createElement(u.PopupMenuItem, {
                                    isDisabled: !0,
                                    label: s.t(null, void 0, n(23687)),
                                  })
                          )
                      )
                    )
                )
            )
          );
        }
        _prefetchFavorites() {
          const { chartWidgetCollection: e } = this.context;
          if (null !== this._promise || !window.is_authenticated) return;
          const t = e.activeChartWidget.value();
          if (!t.hasModel()) return;
          const n = t.model().model().studyMetaInfoRepository();
          this.setState({ isLoading: !0 });
          const a = (this._promise = Promise.all([
            X(this.state.favorites, n),
            void 0,
          ]).then((e) => {
            if (a !== this._promise) return;
            const [t, n] = e;
            let i = [...t];
            if (n) {
              const e = n
                .filter((e) => {
                  var t;
                  return null === (t = this.state.favoriteFundamentals) ||
                    void 0 === t
                    ? void 0
                    : t.has(e.scriptIdPart);
                })
                .map(this._mapFundamentalToFavoriteItemInfo);
              i.push(...e);
            }
            (i = [...i].sort((e, t) => ue(e).localeCompare(ue(t)))),
              this.setState({ infos: i, isLoading: !1 }, () => {
                this._menu.current && this._menu.current.update();
              });
          }));
        }
        _trackClick() {
          0;
        }
        _trackFavoriteAction(e) {
          (0, z.trackEvent)("GUI", "Chart Header Toolbar", e);
        }
        _mapFundamentalToFavoriteItemInfo(e) {
          return {
            item: { type: "pine", pineId: e.scriptIdPart },
            info: {
              name: e.scriptName,
              localizedName: getLocalizedFundamentalsName(e),
              studyMarketShittyObject: void 0,
            },
          };
        }
      }
      function ue(e) {
        return (
          e.info.localizedName ||
          s.t(e.info.name, { context: "study" }, n(68716))
        );
      }
      de.contextType = he;
      var me = n(92133),
        ve = n(19606);
      function pe(e) {
        return i.createElement(
          "div",
          { className: v(ve.value, { [ve.selected]: e.isSelected }) },
          e.value,
          e.metric
        );
      }
      var ge = n(50628),
        fe = n(41890),
        be = n(71485),
        Se = n(86464);
      class _e extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._timeMenu = null),
            (this._setMenuRef = (e) => {
              this._timeMenu = e;
            }),
            (this._handleChangeInput = (e) => {
              const { value: t } = e.currentTarget;
              /^[0-9]*$/.test(t) && this.setState({ inputValue: t });
            }),
            (this._handleSelectTime = (e) => {
              this.setState({ selectedIntervalSuffix: e }), this._closeMenu();
            }),
            (this._handleClickAdd = () => {
              const { inputValue: e, selectedIntervalSuffix: t } = this.state;
              this.props.onAdd(e, t);
            }),
            (this._toggleMenu = () => {
              this.state.isOpenedMenu ? this._closeMenu() : this._openMenu();
            }),
            (this._closeMenu = () => {
              this.props.onCloseMenu(), this.setState({ isOpenedMenu: !1 });
            }),
            (this._openMenu = () => {
              this.props.onOpenMenu(), this.setState({ isOpenedMenu: !0 });
            }),
            (this._getMenuPosition = () => {
              const e = (0, Q.ensureNotNull)(
                this._timeMenu
              ).getBoundingClientRect();
              return { overrideWidth: e.width, x: e.left, y: e.bottom + 1 };
            }),
            (this.state = {
              inputValue: "1",
              isOpenedMenu: !1,
              selectedIntervalSuffix: be.INTERVALS[0].name,
            });
        }
        render() {
          const {
            inputValue: e,
            isOpenedMenu: t,
            menuWidth: a,
            selectedIntervalSuffix: o,
          } = this.state;
          return i.createElement(
            "div",
            { className: v(Se.form, { [Se.interacting]: t }) },
            i.createElement("input", {
              className: Se.input,
              maxLength: 7,
              onChange: this._handleChangeInput,
              value: e,
            }),
            i.createElement(
              "div",
              {
                className: Se.menu,
                onClick: this._toggleMenu,
                ref: this._setMenuRef,
              },
              be.INTERVALS.find((e) => e.name === o).label,
              i.createElement(fe.ToolWidgetCaret, { dropped: t })
            ),
            i.createElement(
              "div",
              { className: Se.add, onClick: this._handleClickAdd },
              s.t(null, void 0, n(54777))
            ),
            i.createElement(
              ge.PopupMenu,
              {
                doNotCloseOn: this,
                isOpened: t,
                minWidth: a,
                onClose: this._closeMenu,
                position: this._getMenuPosition,
              },
              be.INTERVALS.map((e) =>
                i.createElement(u.PopupMenuItem, {
                  dontClosePopup: !0,
                  key: e.name,
                  label: e.label,
                  onClick: this._handleSelectTime,
                  onClickArg: e.name,
                })
              )
            )
          );
        }
      }
      var Ce = n(96040),
        ye = n(70412),
        we = n(32563),
        ke = n(937);
      function Ee(e) {
        const {
            interval: t,
            hint: n,
            isActive: a,
            isDisabled: o,
            isFavorite: s,
            isSignaling: l,
            onClick: r,
            onClickRemove: c,
            onClickFavorite: d,
            isSmallTablet: m,
          } = e,
          v = (0, S.filterDataProps)(e),
          [g, f] = (0, ye.useHover)(),
          b = i.useCallback(() => c(t), [c, t]),
          _ = i.useCallback(() => d(t), [d, t]),
          C = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            var e;
            l &&
              m &&
              (null === (e = C.current) || void 0 === e || e.scrollIntoView());
          }, [l, m]),
          i.createElement(
            "div",
            { ...f, ref: C },
            i.createElement(u.PopupMenuItem, {
              ...v,
              className: p()(m && ke.smallWidthMenuItem),
              theme: m ? E.multilineLabelWithIconAndToolboxTheme : void 0,
              isActive: a,
              isDisabled: o,
              isHovered: l,
              onClick: r,
              onClickArg: t,
              toolbox: (function () {
                const { isRemovable: t, isFavoritingAllowed: n } = e,
                  l = i.createElement(Ce.RemoveButton, {
                    key: "remove",
                    isActive: a,
                    hidden: !we.touch && !g,
                    onClick: b,
                  }),
                  r = i.createElement(h.FavoriteButton, {
                    key: "favorite",
                    isActive: a,
                    isFilled: s,
                    onClick: _,
                  });
                return [t && l, !o && n && r];
              })(),
              showToolboxOnHover: !s,
              label: n,
            })
          )
        );
      }
      var Te = n(578);
      const xe = {
        [Te.ResolutionKind.Ticks]: s.t(
          null,
          { context: "interval_group_name" },
          n(30426)
        ),
        [Te.ResolutionKind.Seconds]: s.t(
          null,
          { context: "interval_group_name" },
          n(74973)
        ),
        [Te.ResolutionKind.Minutes]: s.t(
          null,
          { context: "interval_group_name" },
          n(57470)
        ),
        [Te.SpecialResolutionKind.Hours]: s.t(
          null,
          { context: "interval_group_name" },
          n(62346)
        ),
        [Te.ResolutionKind.Days]: s.t(
          null,
          { context: "interval_group_name" },
          n(74787)
        ),
        [Te.ResolutionKind.Weeks]: s.t(
          null,
          { context: "interval_group_name" },
          n(86614)
        ),
        [Te.ResolutionKind.Months]: s.t(
          null,
          { context: "interval_group_name" },
          n(94328)
        ),
        [Te.ResolutionKind.Range]: s.t(
          null,
          { context: "interval_group_name" },
          n(48801)
        ),
        [Te.ResolutionKind.Invalid]: "",
      };
      function Me(e, t = !1) {
        return { id: e, name: xe[e], items: [], mayOmitSeparator: t };
      }
      var Ie = n(1626),
        Pe = n(26867),
        Re = n.n(Pe),
        Ae = n(29197),
        Fe = n(59064),
        Ne = n(65057);
      const He = {
          openDialog: s.t(null, void 0, n(79353)),
          timeInterval: s.t(null, void 0, n(32916)),
        },
        We = (0, V.hotKeySerialize)({
          keys: [","],
          text: s.t(null, void 0, n(14605)),
        }),
        ze = (0, T.registryContextType)(),
        Oe = new (Re())(),
        Le = i.lazy(async () => ({
          default: (
            await Promise.all([
              n.e(5384),
              n.e(1428),
              n.e(1685),
              n.e(8619),
              n.e(346),
              n.e(7177),
              n.e(3578),
              n.e(1416),
              n.e(3016),
              n.e(4013),
            ]).then(n.bind(n, 66735))
          ).ToolWidgetIntervalsAddDialog,
        }));
      class De extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._menu = i.createRef()),
            (this._renderChildren = (e, t) => [
              ...this._createMenuItems(e, t),
              ...this._createIntervalForm(t),
            ]),
            (this._handleChangeInterval = (e) => {
              const { activeInterval: t, lastNotQuicked: n } = this.state,
                a = this._getQuicks();
              this.setState({
                activeInterval: (0, me.normalizeIntervalString)(e),
                lastNotQuicked: void 0 === t || a.includes(t) ? n : t,
              });
            }),
            (this._bindedForceUpdate = () => {
              this.forceUpdate();
            }),
            (this._handleCloseMenu = () => {
              this.setState({ isOpenedFormMenu: !1 });
            }),
            (this._handleOpenMenu = () => {
              this.setState({ isOpenedFormMenu: !0 });
            }),
            (this._handleSelectInterval = (e) => {
              void 0 !== e &&
                e !== l.linking.interval.value() &&
                this.context.chartWidgetCollection.setResolution(e),
                e && (0, z.trackEvent)("GUI", "Time Interval", e);
            }),
            (this._handleClickFavorite = (e) => {
              (e = (0, Q.ensureDefined)(e)),
                this._isIntervalFavorite(e)
                  ? this._handleRemoveFavorite(e)
                  : this._handleAddFavorite(e);
            }),
            (this._handleAddFavorite = (e) => {
              const { favorites: t } = this.state;
              this.context.favoriteIntervalsService.set([...t, e]);
            }),
            (this._handleRemoveFavorite = (e) => {
              const { favorites: t } = this.state;
              this.context.favoriteIntervalsService.set(
                t.filter((t) => t !== e)
              );
            }),
            (this._handleAddInterval = (e, t) => {
              const { intervalService: n } = this.context,
                a = n.add(e, t);
              a && this.setState({ lastAddedInterval: a });
            }),
            (this._handleRemoveInterval = (e) => {
              const { intervalService: t } = this.context;
              e && (t.remove(e), this._handleRemoveFavorite(e));
            }),
            (this._getHandleSectionStateChange = (e) => (t) => {
              const { menuViewState: n } = this.state,
                { intervalsMenuViewStateService: a } = this.context;
              a.set({ ...n, [e]: !t });
            }),
            (this._handleOpenAddIntervalDialog = () => {
              this.setState({ isAddIntervalDialogOpened: !0 });
            }),
            (this._handleCloseAddIntervalDialog = () => {
              this.setState({ isAddIntervalDialogOpened: !1 });
            }),
            (this._handleGlobalClose = () => {
              const { isFake: e } = this.props,
                { isAddIntervalDialogOpened: t } = this.state;
              e || t || Oe.fire();
            }),
            (this._handeQuickClick = (e) => {
              this._handleSelectInterval(e), this._trackClick();
            }),
            (0, T.validateRegistry)(t, {
              chartApiInstance: o.any.isRequired,
              favoriteIntervalsService: o.any.isRequired,
              intervalService: o.any.isRequired,
              intervalsMenuViewStateService: o.any.isRequired,
            });
          const {
            chartApiInstance: n,
            favoriteIntervalsService: s,
            intervalService: r,
            intervalsMenuViewStateService: c,
          } = t;
          this._customIntervals = a.enabled("custom_resolutions");
          const h = l.linking.interval.value(),
            d = h && (0, me.normalizeIntervalString)(h),
            u = s.get(),
            m = r.getCustomIntervals(),
            v = c.get();
          (this._defaultIntervals = n
            .defaultResolutions()
            .filter(me.isIntervalEnabled)
            .map(me.normalizeIntervalString)),
            (this.state = {
              isOpenedFormMenu: !1,
              activeInterval: d,
              favorites: u,
              customs: m,
              menuViewState: v,
              isAddIntervalDialogOpened: !1,
            });
        }
        componentDidMount() {
          const {
            favoriteIntervalsService: e,
            intervalService: t,
            intervalsMenuViewStateService: n,
          } = this.context;
          e.getOnChange().subscribe(this, this._handleChangeFavorites),
            n.getOnChange().subscribe(this, this._handleChangeMenuViewState),
            t.getOnChange().subscribe(this, this._handleChangeCustoms),
            l.linking.interval.subscribe(this._handleChangeInterval),
            l.linking.intraday.subscribe(this._bindedForceUpdate),
            l.linking.seconds.subscribe(this._bindedForceUpdate),
            l.linking.ticks.subscribe(this._bindedForceUpdate),
            l.linking.range.subscribe(this._bindedForceUpdate),
            l.linking.supportedResolutions.subscribe(this._bindedForceUpdate),
            l.linking.dataFrequencyResolution.subscribe(
              this._bindedForceUpdate
            ),
            Fe.globalCloseDelegate.subscribe(this, this._handleGlobalClose);
        }
        componentWillUnmount() {
          const {
            favoriteIntervalsService: e,
            intervalService: t,
            intervalsMenuViewStateService: n,
          } = this.context;
          e.getOnChange().unsubscribe(this, this._handleChangeFavorites),
            n.getOnChange().unsubscribe(this, this._handleChangeMenuViewState),
            t.getOnChange().unsubscribe(this, this._handleChangeCustoms),
            l.linking.interval.unsubscribe(this._handleChangeInterval),
            l.linking.intraday.unsubscribe(this._bindedForceUpdate),
            l.linking.seconds.unsubscribe(this._bindedForceUpdate),
            l.linking.ticks.unsubscribe(this._bindedForceUpdate),
            l.linking.range.unsubscribe(this._bindedForceUpdate),
            l.linking.supportedResolutions.unsubscribe(this._bindedForceUpdate),
            l.linking.dataFrequencyResolution.unsubscribe(
              this._bindedForceUpdate
            ),
            Fe.globalCloseDelegate.unsubscribe(this, this._handleGlobalClose);
        }
        componentDidUpdate(e, t) {
          this.state.lastAddedInterval &&
            setTimeout(() => this.setState({ lastAddedInterval: void 0 }), 400);
        }
        render() {
          const { isShownQuicks: e, id: t } = this.props,
            {
              activeInterval: n,
              customs: a,
              lastNotQuicked: o,
              isAddIntervalDialogOpened: s,
            } = this.state,
            l = this._getQuicks(),
            r = (0, me.sortResolutions)([...l]);
          void 0 !== n && r.includes(n)
            ? void 0 !== o && r.push(o)
            : void 0 !== n && r.push(n);
          const c = (!(!e || 0 === l.length) || void 0) && r.length > 1,
            h = {},
            d = (0, me.mergeResolutions)(this._defaultIntervals, a);
          (void 0 !== n ? d.concat(n) : d)
            .filter(me.isAvailable)
            .forEach((e) => (h[e] = !0));
          const u =
            void 0 !== n ? (0, me.getTranslatedResolutionModel)(n) : null;
          return i.createElement(
            f,
            { id: t },
            c &&
              r.map((e, t) => {
                const a = (0, me.getTranslatedResolutionModel)(e);
                return i.createElement(C, {
                  key: t,
                  className: v(Ne.button, {
                    [Ne.first]: 0 === t,
                    [Ne.last]: t === r.length - 1,
                  }),
                  text: i.createElement(pe, {
                    value: a.mayOmitMultiplier ? void 0 : a.multiplier,
                    metric: a.shortKind,
                  }),
                  hint: a.hint,
                  isActive: n === e,
                  isDisabled: !h[e] && e !== o,
                  onClick: this._handeQuickClick,
                  onClickArg: e,
                  "data-value": e,
                });
              }),
            i.createElement(
              w.MatchMedia,
              { rule: k.DialogBreakpoints.TabletSmall },
              (e) =>
                i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(
                    Ae.CloseDelegateContext.Provider,
                    { value: Oe },
                    i.createElement(
                      m.ToolWidgetMenu,
                      {
                        arrow: Boolean(c),
                        closeOnClickOutside: !0,
                        content:
                          c || null === u
                            ? void 0
                            : i.createElement(
                                f,
                                { className: Ne.menuContent },
                                i.createElement(pe, {
                                  value: u.mayOmitMultiplier
                                    ? void 0
                                    : u.multiplier,
                                  metric: u.shortKind,
                                })
                              ),
                        title: c || null === u ? He.timeInterval : u.hint,
                        hotKey: c ? We : void 0,
                        className: Ne.menu,
                        ref: this._menu,
                        isDrawer: e,
                        onClick: this._trackClick,
                      },
                      i.createElement(
                        "div",
                        { className: Ne.dropdown },
                        this._renderChildren(d, e)
                      )
                    )
                  ),
                  e &&
                    s &&
                    i.createElement(
                      i.Suspense,
                      { fallback: null },
                      i.createElement(Le, {
                        onAdd: this._handleAddInterval,
                        onClose: this._handleCloseAddIntervalDialog,
                        onUnmount: this._handleCloseAddIntervalDialog,
                      })
                    )
                )
            )
          );
        }
        _createMenuItems(e, t) {
          const n = (function (e) {
            const t = Me(Te.ResolutionKind.Ticks),
              n = Me(Te.ResolutionKind.Seconds),
              a = Me(Te.ResolutionKind.Minutes),
              i = Me(Te.SpecialResolutionKind.Hours),
              o = Me(Te.ResolutionKind.Days),
              s = Me(Te.ResolutionKind.Range);
            return (
              e.forEach((e) => {
                const l = Te.Interval.parse(e);
                l.isMinuteHours()
                  ? i.items.push(e)
                  : l.isMinutes()
                  ? (0, Te.isHour)(Number(l.multiplier()))
                    ? i.items.push(e)
                    : a.items.push(e)
                  : l.isSeconds()
                  ? n.items.push(e)
                  : l.isDWM()
                  ? o.items.push(e)
                  : l.isRange()
                  ? s.items.push(e)
                  : l.isTicks() && t.items.push(e);
              }),
              [t, n, a, i, o, s].filter((e) => 0 !== e.items.length)
            );
          })(e).map((e, n, a) =>
            this._renderResolutionsGroup(e, 1 === a.length, t)
          );
          return (function (e) {
            let t = !1;
            return e.filter((e, n, a) => {
              let i = !0;
              return (
                e.type === y.PopupMenuSeparator &&
                  ((0 !== n && n !== a.length - 1) || (i = !1), t && (i = !1)),
                (t = e.type === y.PopupMenuSeparator),
                i
              );
            });
          })([].concat(...n));
        }
        _createIntervalForm(e) {
          if (this._customIntervals) {
            const t = e
              ? i.createElement(
                  "div",
                  {
                    key: "add-dialog",
                    className: Ne.addCustomInterval,
                    onClick: this._handleOpenAddIntervalDialog,
                  },
                  s.t(null, void 0, n(95798)) + "…"
                )
              : i.createElement(_e, {
                  key: "add-form",
                  onAdd: this._handleAddInterval,
                  onCloseMenu: this._handleCloseMenu,
                  onOpenMenu: this._handleOpenMenu,
                });
            return [
              i.createElement(y.PopupMenuSeparator, {
                key: "custom-interval-separator",
              }),
              t,
            ];
          }
          return [];
        }
        _renderResolutionsGroup(e, t = !1, n) {
          const a = [],
            o = e.items.map((e) => this._renderPopupMenuItem(e, n));
          if (t) a.push(...o);
          else if (n) {
            const t = i.createElement(
              "div",
              { key: e.id },
              i.createElement(
                "div",
                { className: Ne.smallTabletSectionTitle },
                e.name
              ),
              o
            );
            a.push(t);
          } else {
            const { intervalsMenuViewStateService: t } = this.context,
              { menuViewState: n } = this.state;
            if (!t.isAllowed(e.id)) return [];
            const s = i.createElement(
              Ie.CollapsibleSection,
              {
                key: e.id,
                className: Ne.section,
                summary: e.name,
                open: !n[e.id],
                onStateChange: this._getHandleSectionStateChange(e.id),
              },
              o
            );
            a.push(s);
          }
          return (
            (!e.mayOmitSeparator || e.items.length > 1) &&
              (a.unshift(
                i.createElement(y.PopupMenuSeparator, {
                  key: `begin-${e.name}`,
                })
              ),
              a.push(
                i.createElement(y.PopupMenuSeparator, { key: `end-${e.name}` })
              )),
            a
          );
        }
        _handleChangeFavorites(e) {
          this.setState({ lastNotQuicked: void 0, favorites: e });
        }
        _handleChangeCustoms(e) {
          this.setState({ customs: e });
        }
        _handleChangeMenuViewState(e) {
          this.setState({ menuViewState: e }, () => {
            this._menu.current && this._menu.current.update();
          });
        }
        _renderPopupMenuItem(e, t) {
          const { isFavoritingAllowed: n } = this.props,
            { activeInterval: a, lastAddedInterval: o } = this.state,
            s = e === a,
            l = (0, me.isAvailable)(e),
            r = this._isIntervalFavorite(e),
            c = this._isIntervalDefault(e),
            h = (0, me.getTranslatedResolutionModel)(e);
          return i.createElement(Ee, {
            key: e,
            isSmallTablet: t,
            interval: e,
            hint: h.hint,
            isSignaling: o === e,
            isFavoritingAllowed: n,
            isDisabled: !l,
            isFavorite: r,
            isRemovable: !c,
            isActive: s,
            onClick: this._handleSelectInterval,
            onClickRemove: this._handleRemoveInterval,
            onClickFavorite: this._handleClickFavorite,
            "data-value": e,
          });
        }
        _isIntervalDefault(e) {
          return this._defaultIntervals.includes(e);
        }
        _isIntervalFavorite(e) {
          return this.state.favorites.includes(e);
        }
        _getQuicks(e) {
          return this.props.isShownQuicks && "small" !== this.props.displayMode
            ? void 0 === e
              ? this.state.favorites
              : e
            : [];
        }
        _trackClick() {
          0;
        }
      }
      De.contextType = ze;
      var Ue = n(14402),
        Be = n(82436);
      const Ve = { hint: s.t(null, void 0, n(55520)) },
        Ge = (0, T.registryContextType)();
      class Ze extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const {
                  chartWidgetCollection: e,
                  windowMessageService: t,
                  isFundamental: n,
                } = this.context,
                a = e.activeChartWidget.value();
              a.withModel(null, () => {
                t.post(parent, "openChartInPopup", {
                  symbol: a.model().mainSeries().actualSymbol(),
                  interval: a.model().mainSeries().interval(),
                  fundamental: n,
                });
              });
            }),
            (0, T.validateRegistry)(t, {
              isFundamental: o.any,
              chartWidgetCollection: o.any.isRequired,
              windowMessageService: o.any.isRequired,
            });
        }
        render() {
          const { className: e } = this.props;
          return i.createElement(B.ToolWidgetIconButton, {
            className: v(e, Ue.button),
            icon: Be,
            onClick: this._handleClick,
            title: Ve.hint,
          });
        }
      }
      Ze.contextType = Ge;
      var Ke = n(48449);
      const qe = { hint: s.t(null, void 0, n(74207)) },
        je = (0, T.registryContextType)();
      class $e extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const { chartWidgetCollection: e } = this.context,
                t = e.activeChartWidget.value();
              (0, z.trackEvent)(
                "GUI",
                "Chart Header Toolbar",
                "chart properties"
              ),
                t.showGeneralChartProperties();
            }),
            (0, T.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
            });
        }
        render() {
          return i.createElement(B.ToolWidgetIconButton, {
            ...this.props,
            icon: Ke,
            title: qe.hint,
            onClick: this._handleClick,
          });
        }
      }
      $e.contextType = je;
      var Qe = n(66141),
        Ye = n(93352),
        Xe = n(40173),
        Je = n(51107),
        et = n(65785);
      (0, Xe.mergeThemes)(Je.DEFAULT_MENU_ITEM_SWITCHER_THEME, et);
      var tt = n(86339),
        nt = n(47406);
      function at(e) {
        const { wasChanges: t, isSaving: a, className: o } = e;
        return i.createElement(
          "span",
          { className: v(nt.saveString, !t && !a && nt.hidden, o) },
          a
            ? i.createElement(te.Loader, {
                className: nt.loader,
                size: "small",
                staticPosition: !0,
              })
            : s.t(null, void 0, n(85520))
        );
      }
      var it = n(36296),
        ot = n(80803),
        st = n(12805);
      n(6001);
      const lt = a.enabled("widget"),
        rt = s.t(null, void 0, n(75789)),
        ct = (0, Xe.mergeThemes)(b.DEFAULT_TOOL_WIDGET_BUTTON_THEME, st),
        ht = (0, Xe.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, {
          shortcut: ot.shortcut,
          withIcon: ot.withIcon,
        }),
        dt = s.t(null, void 0, n(80959)),
        ut = s.t(null, void 0, n(11680)),
        mt = [],
        vt = (0, V.hotKeySerialize)({
          keys: [(0, G.humanReadableModifiers)(G.Modifiers.Mod, !1), "S"],
          text: "{0} + {1}",
        });
      class pt extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._copyElRef = i.createRef()),
            (this._handleCopyLinkClick = () => Promise.resolve()),
            (this._handleCloneClick = () => {
              var e, t;
              null === (t = (e = this.props).onCloneChart) ||
                void 0 === t ||
                t.call(e);
            }),
            (this._handleSaveClick = () => {
              var e, t;
              null === (t = (e = this.props).onSaveChart) ||
                void 0 === t ||
                t.call(e),
                this._trackClick();
            }),
            (this._handleSaveAsClick = () => {
              var e, t;
              null === (t = (e = this.props).onSaveAsChart) ||
                void 0 === t ||
                t.call(e);
            }),
            (this.state = { isSaving: !1 });
        }
        componentDidUpdate(e, t) {
          e.isProcessing &&
            !this.props.isProcessing &&
            (clearTimeout(this._timeout),
            (this._timeout = void 0),
            this.setState({ isSaving: !1 })),
            !e.isProcessing &&
              this.props.isProcessing &&
              (this._timeout = setTimeout(() => {
                this.setState({ isSaving: !0 });
              }, 1e3));
        }
        componentWillUnmount() {
          this._timeout && clearTimeout(this._timeout);
        }
        render() {
          const {
              id: e,
              isReadOnly: t,
              displayMode: a,
              isProcessing: o,
              title: l,
              wasChanges: r,
              hideMenu: c,
              isTabletSmall: h,
              onOpenMenu: u,
              dataNameSaveMenu: p,
            } = this.props,
            g = !t && !c,
            b = !(r || !l || this.state.isSaving),
            S = i.createElement(
              "div",
              { className: ot.textWrap },
              i.createElement(
                "span",
                { className: ot.text },
                l || s.t(null, void 0, n(85520))
              ),
              i.createElement(at, {
                isSaving: this.state.isSaving,
                wasChanges: r,
              })
            );
          return i.createElement(
            f,
            null,
            t
              ? i.createElement(
                  f,
                  null,
                  i.createElement(W, {
                    id: e,
                    displayMode: a,
                    icon: i.createElement(d.Icon, { icon: it }),
                    isDisabled: o,
                    onClick: this._handleCloneClick,
                    text: s.t(null, void 0, n(35216)),
                    title: dt,
                    collapseWhen: mt,
                  })
                )
              : i.createElement(
                  f,
                  null,
                  i.createElement(W, {
                    id: e,
                    className: v(ot.button, g && ot.buttonSmallPadding),
                    displayMode: a,
                    isDisabled: o,
                    onClick: b ? void 0 : this._handleSaveClick,
                    text: S,
                    title: b
                      ? s.t(null, void 0, n(88368))
                      : s.t(null, void 0, n(87409)),
                    theme: ct,
                    collapseWhen: mt,
                    "data-tooltip-hotkey": lt || b ? "" : vt,
                  }),
                  g &&
                    i.createElement(
                      m.ToolWidgetMenu,
                      {
                        "data-name": p,
                        className: "js-save-load-menu-open-button",
                        arrow: !0,
                        isDrawer: h,
                        drawerPosition: "Bottom",
                        title: s.t(null, void 0, n(58219)),
                        onClick: this._trackClick,
                        onOpen: u,
                      },
                      this._renderMenuItems(Boolean(h))
                    )
                )
          );
        }
        _renderMenuItems(e) {
          const {
              wasChanges: t,
              isProcessing: a,
              chartId: o,
              onSaveChartFromMenu: l,
              onRenameChart: r,
              onLoadChart: c,
              onNewChart: h,
              isAutoSaveEnabled: d,
              autoSaveId: m,
              sharingId: p,
              onAutoSaveChanged: g,
              isSharingEnabled: f,
              onSharingChanged: b,
              layoutItems: S,
              onExportData: _,
              isAuthenticated: C,
            } = this.props,
            w = e ? E.multilineLabelWithIconAndToolboxTheme : ht,
            k = e ? void 0 : (0, G.humanReadableHash)(G.Modifiers.Mod + 83),
            T = e ? void 0 : s.t(null, { context: "hotkey" }, n(14229)),
            x = [];
          return (
            x.push(
              i.createElement(u.PopupMenuItem, {
                key: "save",
                isDisabled: Boolean(a || (!t && o)),
                label: ut,
                onClick: l,
                shortcut: k,
                labelRowClassName: v(e && ot.popupItemRowTabletSmall),
                theme: w,
                "data-name": "save-load-menu-item-save",
              })
            ),
            void 0 !== o &&
              x.push(
                i.createElement(u.PopupMenuItem, {
                  key: "rename",
                  icon: void 0,
                  label: (0, tt.appendEllipsis)(s.t(null, void 0, n(35038))),
                  onClick: r,
                  labelRowClassName: v(e && ot.popupItemRowTabletSmall),
                  theme: w,
                  "data-name": "save-load-menu-item-rename",
                }),
                i.createElement(u.PopupMenuItem, {
                  key: "save-as",
                  icon: void 0,
                  label: (0, tt.appendEllipsis)(dt),
                  onClick: this._handleSaveAsClick,
                  labelRowClassName: v(e && ot.popupItemRowTabletSmall),
                  theme: w,
                  "data-name": "save-load-menu-item-clone",
                })
              ),
            x.push(
              i.createElement(y.PopupMenuSeparator, {
                key: "all-layouts-separator",
              }),
              i.createElement(u.PopupMenuItem, {
                key: "all-layouts",
                className: "js-save-load-menu-item-load-chart",
                label: (0, tt.appendEllipsis)(rt),
                onClick: c,
                labelRowClassName: v(e && ot.popupItemRowTabletSmall),
                theme: w,
                shortcut: T,
                "data-name": "save-load-menu-item-load",
              })
            ),
            x
          );
        }
        _trackClick() {
          0;
        }
      }
      const gt = (0, T.registryContextType)();
      class ft extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._exportDialogPromise = null),
            (this._layoutsAbortController = null),
            (this._requestRecentLayouts = () => {}),
            (this._handleExportData = () => {
              0;
            }),
            (this._syncState = (e) => {
              this.setState(e);
            }),
            (this._onChangeHasChanges = (e) => {
              this.state.wasChanges !== e && this.setState({ wasChanges: e });
            }),
            (this._onChangeAutoSaveEnabled = (e) => {
              0;
            }),
            (this._onChangeSharingEnabled = (e) => {
              this.setState({ isSharingEnabled: e });
            }),
            (this._onChangeTitle = (e) => {
              this.setState({ title: e });
            }),
            (this._onChangeId = (e) => {
              this.setState({ id: e });
            }),
            (this._onChartAboutToBeSaved = () => {
              this.setState({ isProcessing: !0 });
            }),
            (this._onChartSaved = () => {
              this.setState({ isProcessing: !1 });
            }),
            (this._handleAutoSaveEnabled = (e) => {
              0;
            }),
            (this._handleSharingEnabled = (e) => {
              0;
            }),
            (this._handleClickSave = () => {
              this.context.saveChartService.saveChartOrShowTitleDialog(),
                this._trackEvent("Save click");
            }),
            (this._handleOpenMenu = () => {
              this._requestRecentLayouts();
            }),
            (this._handleClickSaveFromMenu = () => {
              this.context.saveChartService.saveChartOrShowTitleDialog(),
                this._trackEvent("Save From Menu");
            }),
            (this._handleClickClone = () => {
              this.context.saveChartService.cloneChart();
            }),
            (this._handleClickSaveAs = () => {
              this.context.saveChartService.saveChartAs(),
                this._trackEvent("Make a copy");
            }),
            (this._handleClickNew = () => {
              this._trackEvent("New chart layout");
            }),
            (this._handleClickLoad = () => {
              this.context.loadChartService.showLoadDialog();
              this._trackEvent("Load chart layout");
            }),
            (this._handleHotkey = () => {
              this.context.loadChartService.showLoadDialog();
            }),
            (this._handleClickRename = () => {
              this.context.saveChartService.renameChart(),
                this._trackEvent("Rename");
            }),
            (0, T.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
              chartChangesWatcher: o.any.isRequired,
              saveChartService: o.any.isRequired,
              sharingChartService: o.any,
              loadChartService: o.any.isRequired,
            });
          const {
            chartWidgetCollection: n,
            chartChangesWatcher: a,
            saveChartService: i,
            sharingChartService: s,
          } = t;
          this.state = {
            isAuthenticated: window.is_authenticated,
            isProcessing: !1,
            id: n.metaInfo.id.value(),
            title: n.metaInfo.name.value(),
            wasChanges: a.hasChanges(),
            iconHovered: !1,
          };
        }
        componentDidMount() {
          const { chartSaver: e, isFake: t, stateSyncEmitter: a } = this.props,
            {
              chartWidgetCollection: i,
              chartChangesWatcher: o,
              saveChartService: l,
              sharingChartService: r,
            } = this.context;
          t
            ? a.on("change", this._syncState)
            : (o.getOnChange().subscribe(this, this._onChangeHasChanges),
              i.metaInfo.name.subscribe(this._onChangeTitle),
              i.metaInfo.id.subscribe(this._onChangeId),
              (this._hotkeys = (0, Qe.createGroup)({ desc: "Save/Load" })),
              this._hotkeys.add({
                desc: s.t(null, void 0, n(75687)),
                handler: this._handleHotkey,
                hotkey: 190,
              }),
              e.chartSaved().subscribe(this, this._onChartSaved),
              e
                .chartAboutToBeSaved()
                .subscribe(this, this._onChartAboutToBeSaved),
              window.loginStateChange.subscribe(
                this,
                this._onLoginStateChange
              ));
        }
        componentDidUpdate(e, t) {
          this.props.isFake ||
            (t !== this.state &&
              this.props.stateSyncEmitter.emit("change", this.state));
        }
        componentWillUnmount() {
          var e;
          const { chartSaver: t, isFake: n, stateSyncEmitter: a } = this.props,
            {
              chartWidgetCollection: i,
              chartChangesWatcher: o,
              saveChartService: s,
              sharingChartService: l,
            } = this.context;
          n
            ? a.off("change", this._syncState)
            : (o.getOnChange().unsubscribe(this, this._onChangeHasChanges),
              i.metaInfo.name.unsubscribe(this._onChangeTitle),
              i.metaInfo.id.unsubscribe(this._onChangeId),
              (0, Q.ensureDefined)(this._hotkeys).destroy(),
              t.chartSaved().unsubscribe(this, this._onChartSaved),
              t
                .chartAboutToBeSaved()
                .unsubscribe(this, this._onChartAboutToBeSaved),
              window.loginStateChange.unsubscribe(
                this,
                this._onLoginStateChange
              ),
              null === (e = this._layoutsAbortController) ||
                void 0 === e ||
                e.abort());
        }
        render() {
          const {
              isReadOnly: e,
              displayMode: t,
              id: n,
              isFake: a,
            } = this.props,
            {
              isProcessing: o,
              isAuthenticated: s,
              title: l,
              id: r,
              wasChanges: c,
              isAutoSaveEnabled: h,
              isSharingEnabled: d,
              recentLayouts: u,
            } = this.state,
            m = {
              displayMode: t,
              isReadOnly: e,
              isAuthenticated: s,
              isProcessing: o,
              wasChanges: c,
              title: l,
              id: n,
              chartId: null !== r ? r : void 0,
              dataNameSaveMenu: a ? void 0 : "save-load-menu",
              onCloneChart: this._handleClickClone,
              onSaveChart: this._handleClickSave,
              onSaveChartFromMenu: this._handleClickSaveFromMenu,
              onRenameChart: this._handleClickRename,
              onSaveAsChart: this._handleClickSaveAs,
              onLoadChart: this._handleClickLoad,
            };
          return i.createElement(
            w.MatchMedia,
            { rule: k.DialogBreakpoints.TabletSmall },
            (e) => i.createElement(pt, { ...m, isTabletSmall: e })
          );
        }
        _onLoginStateChange() {
          this.setState({ isAuthenticated: window.is_authenticated });
        }
        _trackEvent(e) {
          0;
        }
      }
      ft.contextType = gt;
      var bt = n(91811),
        St = n(96701),
        _t = n(83232);
      const Ct = new St.DateTimeFormatter({
          dateTimeSeparator: "_",
          timeFormat: "%h-%m-%s",
        }),
        yt = { takeSnapshot: s.t(null, void 0, n(88513)) },
        wt = (0, T.registryContextType)();
      const kt = s.t(null, void 0, n(90879));
      function Et(e, t, n) {
        return (async function (e, t, n) {
          const a = URL.createObjectURL(
            new Blob(
              [
                `<!doctype html><html style="background-color:${
                  getComputedStyle(document.documentElement).backgroundColor
                }"><head><meta charset="utf-8"><title>${kt}</title></head><body style="background-color:${
                  getComputedStyle(document.body).backgroundColor
                }"></body></html>`,
              ],
              { type: "text/html" }
            )
          );
          try {
            const i = open(a, t, n);
            if (!i) throw new Error("cound not open a new tab");
            const o = await e.catch(() => {});
            void 0 !== o ? i.location.replace(o) : i.close();
          } finally {
            URL.revokeObjectURL(a);
          }
        })(e, t, n);
      }
      var Tt = n(65446),
        xt = n(23864),
        Mt = n(46949);
      function It(e) {
        const t = v(e.isLoading && Mt.hidden),
          n = v(!e.isLoading && Mt.hidden);
        return i.createElement(
          "div",
          null,
          i.createElement("span", { className: t }, e.children),
          i.createElement(
            "span",
            { className: n },
            i.createElement(te.Loader, null)
          )
        );
      }
      var Pt = n(76974),
        Rt = n(84502),
        At = n(1457),
        Ft = n(23595),
        Nt = n(29414),
        Ht = n(99280),
        Wt = n(32924);
      const zt = (0, Xe.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, Wt);
      function Ot(e) {
        const { serverSnapshot: t, clientSnapshot: a, hideShortcuts: o } = e,
          [l, r] = (0, i.useState)(!1),
          [c, h] = (0, i.useState)(!1),
          [d, m] = (0, i.useState)(!1),
          p = (0, Pt.useIsMounted)(),
          g = (0, i.useCallback)(async () => {
            var e;
            const t = a(),
              n = t.then(
                (e) =>
                  new Promise((t) =>
                    e.canvas.toBlob((e) => {
                      null !== e && t(e);
                    })
                  )
              );
            try {
              await (0, Tt.writePromiseUsingApi)(n, "image/png"),
                oe.emit("onClientScreenshotCopiedToClipboard");
            } catch (n) {
              const { canvas: a } = await t;
              null === (e = window.open()) ||
                void 0 === e ||
                e.document.write(`<img width="100%" src="${a.toDataURL()}"/>`);
            }
          }, [a]),
          f = (0, i.useCallback)(async () => {
            const e = await a(),
              t = await (function (e) {
                return new Promise((t) => {
                  try {
                    e.canvas.toBlob((e) => {
                      if (null === e)
                        throw new Error("Unable to generate blob");
                      t(URL.createObjectURL(e));
                    });
                  } catch (n) {
                    t(e.canvas.toDataURL());
                  }
                });
              })(e);
            t && (0, xt.downloadFile)(`${e.name}.png`, t);
          }, [a]),
          b = (e) => Et(e.then((e) => e.imageUrl)),
          S = (0, i.useCallback)(
            async (e = !1) => {
              const n = t();
              try {
                if (e) await b(n);
                else {
                  const e = n.then(
                    (e) => new Blob([e.imageUrl], { type: "text/plain" })
                  );
                  await (0, Tt.writePromiseUsingApi)(e, "text/plain"),
                    oe.emit("onServerScreenshotCopiedToClipboard");
                }
                return !0;
              } catch (e) {
                return b(n), !0;
              } finally {
                p.current && (h(!1), r(!1), (0, Fe.globalCloseMenu)());
              }
            },
            [t]
          ),
          _ = (0, i.useCallback)(async () => {
            m(!0);
            const [e, a] = await Promise.all([
              n.e(4665).then(n.bind(n, 96333)),
              t(),
            ]);
            e.Twitter.shareSnapshotInstantly(a.symbol, a.imageUrl),
              p.current && (m(!1), (0, Fe.globalCloseMenu)());
          }, [t]);
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(u.PopupMenuItem, {
            "data-name": "save-chart-image",
            label: s.t(null, void 0, n(57352)),
            icon: Ft,
            onClick: f,
            shortcut: o
              ? void 0
              : (0, G.humanReadableHash)(
                  G.Modifiers.Mod + G.Modifiers.Alt + 83
                ),
            theme: zt,
          }),
          i.createElement(u.PopupMenuItem, {
            "data-name": "copy-chart-image",
            label: s.t(null, void 0, n(96935)),
            icon: At,
            onClick: g,
            shortcut: o
              ? void 0
              : (0, G.humanReadableHash)(
                  G.Modifiers.Mod + G.Modifiers.Shift + 83
                ),
            theme: zt,
          }),
          i.createElement(u.PopupMenuItem, {
            "data-name": "copy-link-to-the-chart-image",
            label: i.createElement(
              It,
              { isLoading: l },
              s.t(null, void 0, n(15803))
            ),
            icon: Nt,
            onClick: () => {
              r(!0), S(!1);
            },
            dontClosePopup: !0,
            isDisabled: l,
            shortcut: o
              ? void 0
              : (0, G.humanReadableHash)(G.Modifiers.Alt + 83),
            className: v(l && Wt.loading),
            theme: zt,
          }),
          i.createElement(u.PopupMenuItem, {
            "data-name": "open-image-in-new-tab",
            label: i.createElement(
              It,
              { isLoading: c },
              s.t(null, void 0, n(2226))
            ),
            icon: Ht,
            onClick: () => {
              h(!0), S(!0);
            },
            dontClosePopup: !0,
            isDisabled: c,
            className: v(c && Wt.loading),
            theme: zt,
          }),
          i.createElement(u.PopupMenuItem, {
            "data-name": "tweet-chart-image",
            label: i.createElement(
              It,
              { isLoading: d },
              s.t(null, void 0, n(9765))
            ),
            icon: Rt,
            onClick: _,
            dontClosePopup: !0,
            isDisabled: d,
            className: v(d && Wt.loading),
            theme: zt,
          })
        );
      }
      var Lt = n(84015);
      function Dt(e) {
        const [t, n] = (0, i.useState)(!1),
          a = (0, Pt.useIsMounted)(),
          o = (0, i.useCallback)(async () => {
            n(!0), await e.serverSnapshot(), a.current && n(!1);
          }, [e.serverSnapshot]);
        return i.createElement(b.ToolWidgetButton, {
          id: e.id,
          className: e.className,
          isDisabled: t,
          onClick: o,
          title: e.tooltip,
          icon: e.icon,
        });
      }
      var Ut = n(72644);
      const Bt =
        ((Vt = function (e) {
          return (0, Lt.isOnMobileAppPage)("any")
            ? i.createElement(Dt, { ...e, icon: Ut })
            : i.createElement(
                m.ToolWidgetMenu,
                {
                  content: i.createElement(b.ToolWidgetButton, {
                    id: e.id,
                    className: e.className,
                    title: e.tooltip,
                    icon: Ut,
                  }),
                  drawerPosition: "Bottom",
                  drawerBreakpoint: k.DialogBreakpoints.TabletSmall,
                  arrow: !1,
                  onClick: function () {},
                },
                i.createElement(Ot, { ...e })
              );
        }),
        ((Gt = class extends i.PureComponent {
          constructor(e, t) {
            super(e, t),
              (this._clientSnapshot = async () => {
                const e = this.context.chartWidgetCollection.activeChartWidget
                  .value()
                  .model()
                  .mainSeries()
                  .actualSymbol();
                return {
                  canvas:
                    await this.context.chartWidgetCollection.clientSnapshot(),
                  name: `${(0, _t.shortName)(e)}_${Ct.formatLocal(new Date())}`,
                };
              }),
              (this._serverSnapshot = async () => {
                const e = this.context.chartWidgetCollection.activeChartWidget
                    .value()
                    .model()
                    .mainSeries()
                    .actualSymbol(),
                  t = await this.context.chartWidgetCollection.takeScreenshot(),
                  n =
                    a.enabled("charting_library_base") &&
                    void 0 !== this.context.snapshotUrl
                      ? t
                      : (0, bt.convertImageNameToUrl)(t);
                return { symbol: (0, _t.shortName)(e), imageUrl: n };
              }),
              (0, T.validateRegistry)(t, {
                chartWidgetCollection: o.any.isRequired,
              });
          }
          render() {
            const { className: e, id: t } = this.props;
            return i.createElement(Vt, {
              id: t,
              className: e,
              tooltip: yt.takeSnapshot,
              serverSnapshot: this._serverSnapshot,
              clientSnapshot: this._clientSnapshot,
            });
          }
        }).contextType = wt),
        Gt);
      var Vt,
        Gt,
        Zt = n(36309),
        Kt = n(39362),
        qt = n(90877);
      class jt {
        async show(e) {
          if (null !== jt._provider) {
            const e = await jt._provider.getSymbol();
            return l.linking.symbol.setValue(e.symbol), e;
          }
          if (jt._currentShowingInstance)
            throw new DOMException(
              "SymbolSearchUI is already shown",
              "InvalidStateError"
            );
          try {
            (jt._currentShowingInstance = this), jt.preload();
            const t = await jt._implementation;
            return (
              (0, Q.assert)(null !== t),
              new Promise((n) => {
                t.showDefaultSearchDialog({
                  ...e,
                  onSearchComplete: (e) => {
                    n({ symbol: e });
                  },
                });
              })
            );
          } finally {
            jt._currentShowingInstance = null;
          }
        }
        static setProvider(e) {
          this._provider = e;
        }
        static preload() {
          null === this._provider &&
            null === this._implementation &&
            (this._implementation = (0, qt.loadNewSymbolSearch)());
        }
      }
      (jt._currentShowingInstance = null),
        (jt._provider = null),
        (jt._implementation = null);
      var $t = n(58893),
        Qt = n(10431);
      const Yt = (0, Xe.mergeThemes)(b.DEFAULT_TOOL_WIDGET_BUTTON_THEME, $t);
      (0, Xe.mergeThemes)(Yt, Qt);
      class Xt extends i.PureComponent {
        constructor(e) {
          super(e),
            (this._openSymbolSearchDialog = async (e) => {
              if ((0, G.modifiersFromEvent)(e) !== G.Modifiers.Alt)
                try {
                  (0, z.trackEvent)("GUI", "SS", "main search"),
                    await new jt().show({
                      defaultValue: this._isSpread(this.state.symbol)
                        ? this.state.symbol
                        : this.state.shortName,
                      showSpreadActions:
                        (0, Zt.canShowSpreadActions)() &&
                        this.props.isActionsVisible,
                      source: "searchBar",
                      footer: we.mobiletouch
                        ? void 0
                        : i.createElement(
                            Kt.SymbolSearchDialogFooter,
                            null,
                            s.t(null, void 0, n(20987))
                          ),
                    });
                } catch (e) {}
              else (0, Ye.getClipboard)().writeText(this.state.symbol);
            }),
            (this._isSpread = (e) => !1),
            (this._onSymbolChanged = () => {
              const e = l.linking.symbol.value();
              this.setState({ symbol: e, shortName: Jt() });
            }),
            (this.state = {
              symbol: l.linking.symbol.value(),
              shortName: Jt(),
            });
        }
        componentDidMount() {
          l.linking.symbol.subscribe(this._onSymbolChanged),
            l.linking.seriesShortSymbol.subscribe(this._onSymbolChanged),
            jt.preload();
        }
        componentWillUnmount() {
          l.linking.symbol.unsubscribe(this._onSymbolChanged),
            l.linking.seriesShortSymbol.unsubscribe(this._onSymbolChanged);
        }
        render() {
          const { id: e, className: t } = this.props;
          return i.createElement(b.ToolWidgetButton, {
            id: e,
            className: p()(
              t,
              a.enabled("uppercase_instrument_names") && $t.uppercase,
              $t.largeLeftPadding
            ),
            theme: Yt,
            icon: void 0,
            text: this.state.shortName,
            title: s.t(null, void 0, n(99983)),
            onClick: this._openSymbolSearchDialog,
          });
        }
        async _updateQuotes(e) {}
      }
      function Jt() {
        return (
          l.linking.seriesShortSymbol.value() || l.linking.symbol.value() || ""
        );
      }
      var en = n(8538);
      class tn extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleClick = (e) => {
              e.stopPropagation();
              const { onApply: t, item: n } = this.props;
              t(n);
            });
        }
        render() {
          const { className: e, item: t } = this.props;
          return i.createElement(
            "div",
            {
              className: v(e, en.item, "apply-common-tooltip"),
              onClick: this._handleClick,
              title: t.name,
            },
            i.createElement(
              "div",
              { className: en.round },
              t.name.length > 0 ? t.name[0].toUpperCase() : " "
            )
          );
        }
      }
      var nn = n(5039),
        an = n(48813);
      function on(e) {
        return i.createElement(
          "div",
          { className: v(an.description, e.className) },
          e.children
        );
      }
      var sn = n(23978);
      const ln = (0, Xe.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, {
          labelRow: sn.labelRow,
          toolbox: sn.toolbox,
          item: sn.titleItem,
        }),
        rn = (0, Xe.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, {
          labelRow: sn.labelRow,
          toolbox: sn.toolbox,
          item: sn.titleItemTabletSmall,
        }),
        cn = (0, Xe.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, {
          item: sn.item,
        }),
        hn = (0, Xe.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, {
          item: sn.itemTabletSmall,
        });
      function dn(e) {
        const {
            item: t,
            onApply: n,
            onRemove: a,
            onFavor: o,
            favorite: s,
            isFavoritingAllowed: l,
            isTabletSmall: r,
          } = e,
          [c, d] = (0, ye.useHover)(),
          m = t.meta_info,
          v = m ? (0, nn.descriptionString)(m.indicators) : void 0,
          g = r ? rn : ln,
          f = r ? hn : cn,
          b = (0, i.useCallback)(() => n(t), [n, t]),
          S = (0, i.useCallback)(() => a(t), [a, t]),
          _ = (0, i.useCallback)(() => {
            o && o(t);
          }, [o, t]);
        return i.createElement(
          "div",
          {
            ...d,
            className: sn.wrap,
            "data-name": t.name,
            "data-id": t.id,
            "data-is-default": Boolean(t.is_default),
          },
          i.createElement(u.PopupMenuItem, {
            theme: g,
            label: t.name,
            labelRowClassName: p()(r && sn.itemLabelTabletSmall),
            isHovered: c,
            showToolboxOnHover: !s && !c,
            onClick: b,
            toolbox: i.createElement(
              i.Fragment,
              null,
              !t.is_default &&
                i.createElement(Ce.RemoveButton, {
                  key: "remove",
                  hidden: !we.touch && !c,
                  onClick: S,
                }),
              Boolean(o) &&
                l &&
                i.createElement(h.FavoriteButton, {
                  key: "favorite",
                  isFilled: Boolean(s),
                  onClick: _,
                })
            ),
          }),
          v &&
            i.createElement(u.PopupMenuItem, {
              theme: f,
              label: i.createElement(
                on,
                {
                  className: p()(
                    sn.description,
                    r && sn.descriptionTabletSmall
                  ),
                },
                v
              ),
              onClick: b,
              isHovered: c,
            })
        );
      }
      var un = n(53707),
        mn = n(50444);
      const vn = (0, Xe.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, mn),
        pn = { text: (0, tt.appendEllipsis)(s.t(null, void 0, n(92093))) };
      function gn(e) {
        const { onClick: t, isTabletSmall: n } = e;
        return i.createElement(u.PopupMenuItem, {
          theme: vn,
          className: mn.wrap,
          label: i.createElement(
            "div",
            { className: mn.titleWrap },
            i.createElement(
              "div",
              { className: p()(mn.title, n && mn.titleTabletSmall) },
              i.createElement(d.Icon, { className: mn.icon, icon: un }),
              i.createElement("div", { className: mn.text }, pn.text)
            )
          ),
          onClick: t,
        });
      }
      var fn = n(36947),
        bn = n(64706);
      const Sn = i.createContext(null);
      var _n = n(19366);
      function Cn(e) {
        const {
            templates: t,
            favorites: n,
            onTemplateSave: a,
            onTemplateRemove: o,
            onTemplateSelect: s,
            onTemplateFavorite: l,
            isTabletSmall: r,
            isLoading: c,
          } = e,
          h = (0, i.useMemo)(() => t.filter((e) => e.is_default), [t]),
          d = (0, i.useMemo)(() => t.filter((e) => !e.is_default), [t]),
          u = (0, i.useMemo)(() => new Set(n.map((e) => e.name)), [n]),
          m = (0, i.useContext)(Sn),
          v = (0, i.useContext)(bn.MenuContext),
          g = (0, fn.useForceUpdate)();
        (0, i.useEffect)(() => {
          if (null !== m) {
            const e = {};
            return (
              m.getOnChange().subscribe(e, () => {
                g(), v && v.update();
              }),
              () => m.getOnChange().unsubscribeAll(e)
            );
          }
          return () => {};
        }, []);
        const f = (e) =>
          i.createElement(dn, {
            key: e.name,
            item: e,
            isFavoritingAllowed: Boolean(l),
            favorite: u.has(e.name),
            onApply: s,
            onFavor: l,
            onRemove: o,
            isTabletSmall: r,
          });
        return i.createElement(
          "div",
          { className: p()(_n.menu, r && _n.menuSmallTablet) },
          i.createElement(gn, { onClick: a, isTabletSmall: r }),
          c &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(y.PopupMenuSeparator, null),
              i.createElement(ae, null)
            ),
          !c &&
            (r
              ? i.createElement(yn, { defaults: h, customs: d, render: f })
              : i.createElement(wn, {
                  defaults: h,
                  customs: d,
                  render: f,
                  state: m,
                }))
        );
      }
      function yn(e) {
        const { defaults: t, customs: a, render: o } = e;
        return i.createElement(
          i.Fragment,
          null,
          a.length > 0 &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(y.PopupMenuSeparator, null),
              i.createElement(
                ie.ToolWidgetMenuSummary,
                { className: _n.menuItemHeaderTabletSmall },
                s.t(null, void 0, n(38554))
              ),
              a.map(o)
            ),
          t.length > 0 &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(y.PopupMenuSeparator, null),
              i.createElement(
                ie.ToolWidgetMenuSummary,
                { className: _n.menuItemHeaderTabletSmall },
                s.t(null, void 0, n(43399))
              ),
              t.map(o)
            )
        );
      }
      function wn(e) {
        const { defaults: t, customs: a, render: o, state: l } = e;
        return i.createElement(
          i.Fragment,
          null,
          a.length > 0 &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(y.PopupMenuSeparator, null),
              i.createElement(
                ie.ToolWidgetMenuSummary,
                { className: _n.menuItemHeader },
                s.t(null, void 0, n(38554))
              ),
              a.map(o)
            ),
          a.length > 0 &&
            t.length > 0 &&
            l &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(y.PopupMenuSeparator, null),
              i.createElement(
                Ie.CollapsibleSection,
                {
                  summary: s.t(null, void 0, n(43399)),
                  open: !l.get().defaultsCollapsed,
                  onStateChange: (e) => l.set({ defaultsCollapsed: !e }),
                },
                t.map(o)
              )
            ),
          0 === a.length &&
            t.length > 0 &&
            i.createElement(
              i.Fragment,
              null,
              i.createElement(y.PopupMenuSeparator, null),
              i.createElement(
                ie.ToolWidgetMenuSummary,
                { className: _n.menuItemHeader },
                s.t(null, void 0, n(43399))
              ),
              t.map(o)
            )
        );
      }
      var kn = n(40549),
        En = n.n(kn);
      class Tn {
        constructor(e, t) {
          var n, i;
          (this._isFavoriteEnabled = a.enabled("items_favoriting")),
            (this.handleFavorTemplate = (e) => {
              if (!this._isFavoriteEnabled) return;
              const { name: t } = e;
              this._isTemplateFavorite(t)
                ? this._removeFavoriteTemplate(t)
                : this._addFavoriteTemplate(t);
            }),
            (this.handleDropdownOpen = () => {
              this._setState({ isLoading: !0 }),
                this._studyTemplates.invalidate(),
                this._studyTemplates.refreshStudyTemplateList(() =>
                  this._setState({ isLoading: !1 })
                );
            }),
            (this.handleApplyTemplate = (e) => {
              this._studyTemplates.applyTemplate(e.name);
            }),
            (this.handleRemoveTemplate = (e) => {
              this._studyTemplates.deleteStudyTemplate(e.name);
            }),
            (this.handleSaveTemplate = () => {
              this._studyTemplates.showSaveAsDialog();
            }),
            (this._studyTemplates = e),
            (this._favoriteStudyTemplatesService = t);
          const o =
              (null === (n = this._favoriteStudyTemplatesService) ||
              void 0 === n
                ? void 0
                : n.get()) || [],
            s = this._studyTemplates.list();
          (this._state = new (En())({
            isLoading: !1,
            studyTemplatesList: s,
            favorites: o,
          })),
            this._studyTemplates
              .getOnChange()
              .subscribe(this, this._handleTemplatesChange),
            this._studyTemplates.refreshStudyTemplateList(),
            this._isFavoriteEnabled &&
              (null === (i = this._favoriteStudyTemplatesService) ||
                void 0 === i ||
                i.getOnChange().subscribe(this, this._handleFavoritesChange));
        }
        destroy() {
          var e;
          this._studyTemplates
            .getOnChange()
            .unsubscribe(this, this._handleTemplatesChange),
            this._isFavoriteEnabled &&
              (null === (e = this._favoriteStudyTemplatesService) ||
                void 0 === e ||
                e.getOnChange().unsubscribe(this, this._handleFavoritesChange));
        }
        state() {
          return this._state.readonly();
        }
        _setState(e) {
          this._state.setValue({ ...this._state.value(), ...e });
        }
        _handleTemplatesChange() {
          this._setState({ studyTemplatesList: this._studyTemplates.list() });
        }
        _handleFavoritesChange(e) {
          this._isFavoriteEnabled && this._setState({ favorites: e });
        }
        _removeFavoriteTemplate(e) {
          var t;
          const { favorites: n } = this._state.value();
          null === (t = this._favoriteStudyTemplatesService) ||
            void 0 === t ||
            t.set(n.filter((t) => t !== e));
        }
        _addFavoriteTemplate(e) {
          var t;
          const { favorites: n } = this._state.value();
          null === (t = this._favoriteStudyTemplatesService) ||
            void 0 === t ||
            t.set([...n, e]);
        }
        _isTemplateFavorite(e) {
          const { favorites: t } = this._state.value();
          return t.includes(e);
        }
      }
      var xn = n(99812),
        Mn = n(15865);
      const In = {
          title: s.t(null, void 0, n(91900)),
          tooltip: s.t(null, void 0, n(15812)),
        },
        Pn = (0, T.registryContextType)();
      class Rn extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._updateState = (e) => {
              this.setState({ ...e, isActive: this.state.isActive });
            }),
            (this._handleApplyTemplate = (e) => {
              this._handleClose(), this._model.handleApplyTemplate(e);
            }),
            (this._handleRemoveTemplate = (e) => {
              this._handleClose(), this._model.handleRemoveTemplate(e);
            }),
            (this._handleClose = () => {
              this._handleToggleDropdown(!1);
            }),
            (this._handleToggleDropdown = (e) => {
              const { isActive: t } = this.state,
                n = "boolean" == typeof e ? e : !t;
              this.setState({ isActive: n });
            }),
            (0, T.validateRegistry)(t, {
              favoriteStudyTemplatesService: o.any,
              studyTemplates: o.any.isRequired,
              templatesMenuViewStateService: o.any,
            });
          const { favoriteStudyTemplatesService: n, studyTemplates: a } = t;
          (this._model = new Tn(a, n)),
            (this.state = { ...this._model.state().value(), isActive: !1 });
        }
        componentDidMount() {
          this._model.state().subscribe(this._updateState);
        }
        componentWillUnmount() {
          this._model.state().unsubscribe(this._updateState),
            this._model.destroy();
        }
        render() {
          const { studyTemplatesList: e, favorites: t } = this.state,
            {
              isShownQuicks: n,
              className: a,
              displayMode: o,
              id: s,
            } = this.props;
          return i.createElement(
            Sn.Provider,
            { value: this.context.templatesMenuViewStateService || null },
            i.createElement(An, {
              id: s,
              className: a,
              mode: o,
              templates: e,
              favorites: t,
              onMenuOpen: this._model.handleDropdownOpen,
              onTemplateFavorite: n ? this._model.handleFavorTemplate : void 0,
              onTemplateSelect: this._handleApplyTemplate,
              onTemplateRemove: this._handleRemoveTemplate,
              onTemplateSave: this._model.handleSaveTemplate,
            })
          );
        }
      }
      function An(e) {
        const {
            id: t,
            className: n,
            mode: a,
            favorites: o,
            templates: s,
            isMenuOpen: l,
            onTemplateSelect: r,
            onTemplateSave: c,
            onTemplateFavorite: h,
            onTemplateRemove: d,
          } = e,
          u = p()(n, Mn.wrap, {
            [Mn.full]: "full" === a,
            [Mn.medium]: "medium" === a,
          }),
          v = s.filter((e) => o.includes(e.name)),
          g = "small" !== a && h && v.length > 0;
        return i.createElement(
          f,
          { id: t, className: u },
          i.createElement(
            w.MatchMedia,
            { rule: k.DialogBreakpoints.TabletSmall },
            (t) =>
              i.createElement(
                m.ToolWidgetMenu,
                {
                  onOpen: e.onMenuOpen,
                  isDrawer: t,
                  drawerPosition: "Bottom",
                  arrow: !1,
                  content: i.createElement(W, {
                    className: p()(g && Mn.buttonWithFavorites),
                    displayMode: a,
                    isOpened: l,
                    icon: xn,
                    title: In.tooltip,
                    forceInteractive: !0,
                    collapseWhen: ["full", "medium", "small"],
                  }),
                  onClick: b,
                },
                i.createElement(Cn, {
                  onTemplateSave: c,
                  onTemplateSelect: r,
                  onTemplateRemove: d,
                  onTemplateFavorite: h,
                  templates: s,
                  favorites: v,
                  isTabletSmall: t,
                })
              )
          ),
          g &&
            i.createElement(Fn, {
              favorites: v,
              onTemplateSelect: function (e) {
                r(e), b();
              },
            })
        );
        function b() {
          0;
        }
      }
      function Fn(e) {
        return i.createElement(
          i.Fragment,
          null,
          e.favorites.map((t, n, a) =>
            i.createElement(tn, {
              key: t.name,
              item: t,
              onApply: e.onTemplateSelect,
              className: p()({
                [Mn.first]: 0 === n,
                [Mn.last]: n === a.length - 1,
              }),
            })
          )
        );
      }
      Rn.contextType = Pn;
      n(93731);
      var Nn = n(93260),
        Hn = n(35194),
        Wn = n(77665),
        zn = n(96052);
      const On = {
          undoHint: s.t(null, void 0, n(80323)),
          redoHint: s.t(null, void 0, n(70728)),
        },
        Ln = {
          undoHotKey: (0, V.hotKeySerialize)({
            keys: [(0, G.humanReadableModifiers)(G.Modifiers.Mod, !1), "Z"],
            text: "{0} + {1}",
          }),
          redoHotKey: (0, V.hotKeySerialize)({
            keys: [(0, G.humanReadableModifiers)(G.Modifiers.Mod, !1), "Y"],
            text: "{0} + {1}",
          }),
        },
        Dn = (0, Xe.mergeThemes)(Hn, Nn),
        Un = (0, T.registryContextType)();
      class Bn extends i.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._batched = null),
            (this._handleClickUndo = () => {
              (0, z.trackEvent)("GUI", "Undo");
              const { chartWidgetCollection: e } = this.context;
              e.undoHistory.undo();
            }),
            (this._handleClickRedo = () => {
              (0, z.trackEvent)("GUI", "Redo");
              const { chartWidgetCollection: e } = this.context;
              e.undoHistory.redo();
            }),
            (0, T.validateRegistry)(t, {
              chartWidgetCollection: o.any.isRequired,
            }),
            (this.state = this._getStateFromUndoHistory());
        }
        componentDidMount() {
          const { chartWidgetCollection: e } = this.context;
          e.undoHistory
            .redoStack()
            .onChange()
            .subscribe(this, this._onChangeStack),
            e.undoHistory
              .undoStack()
              .onChange()
              .subscribe(this, this._onChangeStack);
        }
        componentWillUnmount() {
          const { chartWidgetCollection: e } = this.context;
          e.undoHistory
            .redoStack()
            .onChange()
            .unsubscribe(this, this._onChangeStack),
            e.undoHistory
              .undoStack()
              .onChange()
              .unsubscribe(this, this._onChangeStack),
            (this._batched = null);
        }
        render() {
          const { id: e } = this.props,
            {
              isEnabledRedo: t,
              isEnabledUndo: n,
              redoStack: a,
              undoStack: o,
            } = this.state;
          return i.createElement(
            f,
            { id: e },
            i.createElement(b.ToolWidgetButton, {
              icon: Wn,
              isDisabled: !n,
              onClick: this._handleClickUndo,
              title: n ? On.undoHint.format({ hint: o }) : void 0,
              "data-tooltip-hotkey": n ? Ln.undoHotKey : void 0,
              theme: Dn,
            }),
            i.createElement(b.ToolWidgetButton, {
              icon: zn,
              isDisabled: !t,
              onClick: this._handleClickRedo,
              title: t ? On.redoHint.format({ hint: a }) : void 0,
              "data-tooltip-hotkey": t ? Ln.redoHotKey : void 0,
              theme: Dn,
            })
          );
        }
        _onChangeStack() {
          null === this._batched &&
            (this._batched = Promise.resolve().then(() => {
              if (null === this._batched) return;
              this._batched = null;
              const e = this._getStateFromUndoHistory();
              this.setState(e);
            }));
        }
        _getStateFromUndoHistory() {
          const { chartWidgetCollection: e } = this.context,
            t = e.undoHistory.undoStack(),
            n = e.undoHistory.redoStack(),
            a = n.head(),
            i = t.head();
          return {
            isEnabledRedo: !n.isEmpty(),
            isEnabledUndo: !t.isEmpty(),
            redoStack: a ? a.text().translatedText() : "",
            undoStack: i ? i.text().translatedText() : "",
          };
        }
      }
      Bn.contextType = Un;
      class Vn extends i.PureComponent {
        constructor() {
          super(...arguments),
            (this._wrapperElement = null),
            (this._resizeObserver = null),
            (this._update = () => {
              this.forceUpdate();
            }),
            (this._setRef = (e) => {
              this._wrapperElement = e;
            }),
            (this._handleMeasure = ([e]) => {
              this.props.width.setValue(e.contentRect.width);
            });
        }
        componentDidMount() {
          const { element: e, isFake: t, width: n } = this.props;
          !t && this._wrapperElement
            ? ((this._resizeObserver = new ResizeObserver(this._handleMeasure)),
              this._wrapperElement.appendChild(e),
              this._resizeObserver.observe(this._wrapperElement))
            : n.subscribe(this._update);
        }
        componentWillUnmount() {
          const { width: e, isFake: t } = this.props;
          t && e.unsubscribe(this._update),
            this._resizeObserver &&
              this._wrapperElement &&
              this._resizeObserver.unobserve(this._wrapperElement);
        }
        render() {
          const { isFake: e = !1, width: t } = this.props;
          return i.createElement(f, {
            ref: this._setRef,
            style: e ? { width: t.value() } : void 0,
            "data-is-custom-header-element": !0,
          });
        }
      }
      function Gn(e) {
        const { displayMode: t, params: n } = e;
        return i.createElement(
          m.ToolWidgetMenu,
          {
            content: i.createElement(W, {
              collapseWhen: void 0 !== n.icon ? void 0 : [],
              displayMode: t,
              icon: n.icon,
              text: n.title,
              title: n.tooltip,
              "data-name": "dropdown",
              "data-is-custom-header-element": !0,
            }),
            drawerPosition: "Bottom",
            drawerBreakpoint: k.DialogBreakpoints.TabletSmall,
            arrow: !1,
          },
          n.items.map((e, t) =>
            i.createElement(u.PopupMenuItem, {
              key: t,
              label: e.title,
              onClick: () => e.onSelect(),
              "data-name": "dropdown-item",
            })
          )
        );
      }
      var Zn = n(43741);
      function Kn(e) {
        const { className: t, ...n } = e;
        return i.createElement(W, {
          ...n,
          className: v(t, Zn.customTradingViewStyleButton, Zn.withoutIcon),
          collapseWhen: [],
          "data-name": "custom-tradingview-styled-button",
        });
      }
      function qn() {
        return {
          Bars: a.enabled("header_chart_type") ? F : void 0,
          Compare: a.enabled("header_compare") ? U : void 0,
          Custom: Vn,
          CustomTradingViewStyledButton: Kn,
          Fullscreen: a.enabled("header_fullscreen_button") ? $ : void 0,
          Indicators: a.enabled("header_indicators") ? de : void 0,
          Intervals: a.enabled("header_resolutions") ? De : void 0,
          OpenPopup: Ze,
          Properties:
            a.enabled("header_settings") &&
            a.enabled("show_chart_property_page")
              ? $e
              : void 0,
          SaveLoad: a.enabled("header_saveload") ? ft : void 0,
          Screenshot: a.enabled("header_screenshot") ? Bt : void 0,
          SymbolSearch: a.enabled("header_symbol_search") ? Xt : void 0,
          Templates: a.enabled("study_templates") ? Rn : void 0,
          Dropdown: Gn,
          UndoRedo: a.enabled("header_undo_redo") ? Bn : void 0,
          Layout: undefined,
        };
      }
    },
    5039: (e, t, n) => {
      "use strict";
      n.d(t, {
        createStudyTemplateMetaInfo: () => i,
        descriptionString: () => o,
      });
      var a = n(89215);
      function i(e, t) {
        return {
          indicators: e
            .orderedDataSources(!0)
            .filter((e) => (0, a.isStudy)(e) && !0)
            .map((e) => ({
              id: e.metaInfo().id,
              description: e.title(!0, void 0, !0),
            })),
          interval: t,
        };
      }
      function o(e) {
        const t = new Map();
        return (
          e.forEach((e) => {
            const [n, a] = t.get(e.id) || [e.description, 0];
            t.set(e.id, [n, a + 1]);
          }),
          Array.from(t.values())
            .map(([e, t]) => `${e}${t > 1 ? ` x ${t}` : ""}`)
            .join(", ")
        );
      }
    },
    10654: (e, t, n) => {
      "use strict";
      n.d(t, {
        validateRegistry: () => l,
        RegistryProvider: () => r,
        registryContextType: () => c,
      });
      var a = n(50959),
        i = n(19036),
        o = n.n(i);
      const s = a.createContext({});
      function l(e, t) {
        o().checkPropTypes(t, e, "context", "RegistryContext");
      }
      function r(e) {
        const { validation: t, value: n } = e;
        return l(n, t), a.createElement(s.Provider, { value: n }, e.children);
      }
      function c() {
        return s;
      }
    },
    11316: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { SERIES_ICONS: () => u });
      var a = n(94670),
        i = n(39956),
        o = n(14083),
        s = n(45504),
        l = n(52867),
        r = n(41473),
        c = n(24464),
        h = n(71705),
        d = n(9450);
      const u = { 3: a, 0: i, 1: o, 8: s, 9: l, 2: r, 10: c, 12: h, 13: d };
    },
    91811: (e, t, n) => {
      "use strict";
      n.d(t, { convertImageNameToUrl: () => o });
      var a = n(2484),
        i = n(76861);
      function o(e) {
        return a.enabled("charting_library_base") || (0, i.isProd)()
          ? "https://www.tradingview.com/x/" + e + "/"
          : window.location.protocol +
              "//" +
              window.location.host +
              "/x/" +
              e +
              "/";
      }
    },
    23864: (e, t, n) => {
      "use strict";
      function a(e, t) {
        const n = document.createElement("a");
        (n.style.display = "none"), (n.href = t), (n.download = e), n.click();
      }
      n.d(t, { downloadFile: () => a });
    },
    97268: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"/></svg>';
    },
    99280: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5v11A2.5 2.5 0 0 0 8.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-3h-1v3c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 19.5v-11C7 7.67 7.67 7 8.5 7h3V6h-3zm7 1h4.8l-7.49 7.48.71.7L21 7.72v4.79h1V6h-6.5v1z"/></svg>';
    },
    94670: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M12.5 17.207L18.707 11h2l3.647-3.646-.708-.708L20.293 10h-2L12.5 15.793l-3-3-4.854 4.853.708.708L9.5 14.207z"/><path d="M9 16h1v1H9zm1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-3-3h1v1H8zm-1 1h1v1H7zm-1 1h1v1H6zm2 0h1v1H8zm-1 1h1v1H7zm-2 0h1v1H5zm17-9h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-5-7h1v1h-1zm2 0h1v1h-1zm1-1h1v1h-1zm-2 2h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-2-6h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-3-3h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1z"/></svg>';
    },
    39956: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor" stroke-linecap="square"><path d="M10.5 7.5v15M7.5 20.5H10M13.5 11.5H11M19.5 6.5v15M16.5 9.5H19M22.5 16.5H20"/></g></svg>';
    },
    24464: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor"><path stroke-dasharray="1,1" d="M4 14.5h22"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.5l2-4 1 2 2-4 3 6"/><path stroke-linecap="round" d="M5.5 16.5l-1 2"/><path stroke-linecap="round" stroke-linejoin="round" d="M17.5 16.5l2 4 2-4m2-4l1-2-1 2z"/></g></svg>';
    },
    14083: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"/></svg>';
    },
    53707: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none"><path stroke="currentColor" d="M11 20.5H7.5a5 5 0 1 1 .42-9.98 7.5 7.5 0 0 1 14.57 2.1 4 4 0 0 1-1 7.877H18"/><path stroke="currentColor" d="M14.5 24V12.5M11 16l3.5-3.5L18 16"/></g></svg>';
    },
    9450: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12 7v14h5V7h-5Zm4 1h-3v12h3V8ZM19 15v6h5v-6h-5Zm4 1h-3v4h3v-4ZM5 12h5v9H5v-9Zm1 1h3v7H6v-7Z"/></svg>';
    },
    1393: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="currentColor" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"/></svg>';
    },
    45504: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M9 8v12h3V8H9zm-1-.502C8 7.223 8.215 7 8.498 7h4.004c.275 0 .498.22.498.498v13.004a.493.493 0 0 1-.498.498H8.498A.496.496 0 0 1 8 20.502V7.498z"/><path d="M10 4h1v3.5h-1z"/><path d="M17 6v6h3V6h-3zm-1-.5c0-.276.215-.5.498-.5h4.004c.275 0 .498.23.498.5v7c0 .276-.215.5-.498.5h-4.004a.503.503 0 0 1-.498-.5v-7z"/><path d="M18 2h1v3.5h-1z"/></svg>';
    },
    71705: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7H7v14h5V7H7.5zM8 20V8h3v12H8zm7.5-11H15v10h5V9h-4.5zm.5 9v-8h3v8h-3z"/></svg>';
    },
    52867: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"/></svg>';
    },
    39681: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"/></svg>';
    },
    41473: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11.982 16.689L17.192 12h3.033l4.149-4.668-.748-.664L19.776 11h-2.968l-4.79 4.311L9 12.293l-4.354 4.353.708.708L9 13.707z"/></svg>';
    },
    82436: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21"><g fill="none" stroke="currentColor"><path d="M18.5 11v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2H9"/><path stroke-linecap="square" d="M18 2l-8.5 8.5m4-9h5v5"/></g></svg>';
    },
    48449: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"/></g></svg>';
    },
    96052: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"/></svg>';
    },
    72644: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>';
    },
    99812: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M8 7h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM6 8c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8zm11-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8zm-4 8H8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-3-1a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H8zm9 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3z"/></svg>';
    },
    77665: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"/></svg>';
    },
    33765: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
    },
    36296: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>';
    },
    23595: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 16v4.5a1 1 0 001 1h14a1 1 0 001-1V16M14.5 5V17m-4-3.5l4 4l4-4"/></svg>';
    },
    39146: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
    },
    48010: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
    },
    29414: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M19 15l2.5-2.5c1-1 1.5-3.5-.5-5.5s-4.5-1.5-5.5-.5L13 9M10 12l-2.5 2.5c-1 1-1.5 3.5.5 5.5s4.5 1.5 5.5.5L16 18M17 11l-5 5"/></svg>';
    },
    84502: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#1DA1F2" d="M10.28 22.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 00-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 001.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 003.29 4.02 4 4 0 01-1.85.08 4.1 4.1 0 003.83 2.85A8.23 8.23 0 014 20.43a11.67 11.67 0 006.28 1.83z"/></svg>';
    },
  },
]);
