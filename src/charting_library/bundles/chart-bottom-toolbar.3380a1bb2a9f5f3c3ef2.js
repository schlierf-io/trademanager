(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [7260],
  {
    59142: function (e, t) {
      var n, a, s;
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
          var s =
              "undefined" != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iP(ad|hone|od)/.test(window.navigator.platform),
            i = [],
            r = !1,
            o = -1,
            l = void 0,
            c = void 0,
            d = function (e) {
              return i.some(function (t) {
                return !(
                  !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                );
              });
            },
            u = function (e) {
              var t = e || window.event;
              return (
                !!d(t.target) ||
                1 < t.touches.length ||
                (t.preventDefault && t.preventDefault(), !1)
              );
            },
            h = function () {
              setTimeout(function () {
                void 0 !== c &&
                  ((document.body.style.paddingRight = c), (c = void 0)),
                  void 0 !== l &&
                    ((document.body.style.overflow = l), (l = void 0));
              });
            };
          (e.disableBodyScroll = function (e, a) {
            if (s) {
              if (!e)
                return void console.error(
                  "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
                );
              if (
                e &&
                !i.some(function (t) {
                  return t.targetElement === e;
                })
              ) {
                var h = { targetElement: e, options: a || {} };
                (i = [].concat(t(i), [h])),
                  (e.ontouchstart = function (e) {
                    1 === e.targetTouches.length &&
                      (o = e.targetTouches[0].clientY);
                  }),
                  (e.ontouchmove = function (t) {
                    var n, a, s, i;
                    1 === t.targetTouches.length &&
                      ((a = e),
                      (i = (n = t).targetTouches[0].clientY - o),
                      !d(n.target) &&
                        ((a && 0 === a.scrollTop && 0 < i) ||
                        ((s = a) &&
                          s.scrollHeight - s.scrollTop <= s.clientHeight &&
                          i < 0)
                          ? u(n)
                          : n.stopPropagation()));
                  }),
                  r ||
                    (document.addEventListener(
                      "touchmove",
                      u,
                      n ? { passive: !1 } : void 0
                    ),
                    (r = !0));
              }
            } else {
              (p = a),
                setTimeout(function () {
                  if (void 0 === c) {
                    var e = !!p && !0 === p.reserveScrollBarGap,
                      t =
                        window.innerWidth -
                        document.documentElement.clientWidth;
                    e &&
                      0 < t &&
                      ((c = document.body.style.paddingRight),
                      (document.body.style.paddingRight = t + "px"));
                  }
                  void 0 === l &&
                    ((l = document.body.style.overflow),
                    (document.body.style.overflow = "hidden"));
                });
              var m = { targetElement: e, options: a || {} };
              i = [].concat(t(i), [m]);
            }
            var p;
          }),
            (e.clearAllBodyScrollLocks = function () {
              s
                ? (i.forEach(function (e) {
                    (e.targetElement.ontouchstart = null),
                      (e.targetElement.ontouchmove = null);
                  }),
                  r &&
                    (document.removeEventListener(
                      "touchmove",
                      u,
                      n ? { passive: !1 } : void 0
                    ),
                    (r = !1)),
                  (i = []),
                  (o = -1))
                : (h(), (i = []));
            }),
            (e.enableBodyScroll = function (e) {
              if (s) {
                if (!e)
                  return void console.error(
                    "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                  );
                (e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (i = i.filter(function (t) {
                    return t.targetElement !== e;
                  })),
                  r &&
                    0 === i.length &&
                    (document.removeEventListener(
                      "touchmove",
                      u,
                      n ? { passive: !1 } : void 0
                    ),
                    (r = !1));
              } else
                1 === i.length && i[0].targetElement === e
                  ? (h(), (i = []))
                  : (i = i.filter(function (t) {
                      return t.targetElement !== e;
                    }));
            });
        }),
        void 0 === (s = "function" == typeof n ? n.apply(t, a) : n) ||
          (e.exports = s);
    },
    97754: (e, t) => {
      var n;
      !(function () {
        "use strict";
        var a = {}.hasOwnProperty;
        function s() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var i = typeof n;
              if ("string" === i || "number" === i) e.push(n);
              else if (Array.isArray(n) && n.length) {
                var r = s.apply(null, n);
                r && e.push(r);
              } else if ("object" === i)
                for (var o in n) a.call(n, o) && n[o] && e.push(o);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((s.default = s), (e.exports = s))
          : void 0 ===
              (n = function () {
                return s;
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
    68550: (e) => {
      e.exports = {
        item: "item-bWEYVlEJ",
        interactive: "interactive-bWEYVlEJ",
        hovered: "hovered-bWEYVlEJ",
        disabled: "disabled-bWEYVlEJ",
        active: "active-bWEYVlEJ",
        shortcut: "shortcut-bWEYVlEJ",
        normal: "normal-bWEYVlEJ",
        big: "big-bWEYVlEJ",
        iconCell: "iconCell-bWEYVlEJ",
        icon: "icon-bWEYVlEJ",
        checkmark: "checkmark-bWEYVlEJ",
        content: "content-bWEYVlEJ",
        label: "label-bWEYVlEJ",
        checked: "checked-bWEYVlEJ",
        toolbox: "toolbox-bWEYVlEJ",
        showToolboxOnHover: "showToolboxOnHover-bWEYVlEJ",
        arrowIcon: "arrowIcon-bWEYVlEJ",
        subMenu: "subMenu-bWEYVlEJ",
        invisibleHotkey: "invisibleHotkey-bWEYVlEJ",
      };
    },
    3651: (e) => {
      e.exports = {
        item: "item-X2LmiiGx",
        emptyIcons: "emptyIcons-X2LmiiGx",
        loading: "loading-X2LmiiGx",
        disabled: "disabled-X2LmiiGx",
        interactive: "interactive-X2LmiiGx",
        hovered: "hovered-X2LmiiGx",
        normal: "normal-X2LmiiGx",
        big: "big-X2LmiiGx",
        icon: "icon-X2LmiiGx",
        label: "label-X2LmiiGx",
        title: "title-X2LmiiGx",
        nested: "nested-X2LmiiGx",
        shortcut: "shortcut-X2LmiiGx",
        remove: "remove-X2LmiiGx",
      };
    },
    94725: (e) => {
      e.exports = { separator: "separator-LQ6E1iWj" };
    },
    45829: (e) => {
      e.exports = {
        separator: "separator-w5iW5vBm",
        small: "small-w5iW5vBm",
        normal: "normal-w5iW5vBm",
        large: "large-w5iW5vBm",
      };
    },
    86355: (e) => {
      e.exports = {
        tabs: "tabs-g47ZTMzc",
        tab: "tab-g47ZTMzc",
        noBorder: "noBorder-g47ZTMzc",
        disabled: "disabled-g47ZTMzc",
        active: "active-g47ZTMzc",
        defaultCursor: "defaultCursor-g47ZTMzc",
        slider: "slider-g47ZTMzc",
        content: "content-g47ZTMzc",
      };
    },
    26996: (e, t, n) => {
      "use strict";
      n.d(t, { Loader: () => c });
      var a,
        s = n(50959),
        i = n(97754),
        r = n(74991),
        o = n(33319),
        l = n.n(o);
      !(function (e) {
        (e[(e.Initial = 0)] = "Initial"),
          (e[(e.Appear = 1)] = "Appear"),
          (e[(e.Active = 2)] = "Active");
      })(a || (a = {}));
      class c extends s.PureComponent {
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
            r = i(l().item, l()[t], l()[n]);
          return s.createElement(
            "span",
            {
              className: i(
                l().loader,
                a && l().static,
                this._getStateClass(),
                e
              ),
            },
            s.createElement("span", { className: r }),
            s.createElement("span", { className: r }),
            s.createElement("span", { className: r })
          );
        }
        componentDidMount() {
          this.setState({ state: a.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: a.Active });
            }, 2 * r.dur));
        }
        componentWillUnmount() {
          this._stateChangeTimeout &&
            (clearTimeout(this._stateChangeTimeout),
            (this._stateChangeTimeout = null));
        }
        _getStateClass() {
          switch (this.state.state) {
            case a.Initial:
              return l()["loader-initial"];
            case a.Appear:
              return l()["loader-appear"];
            default:
              return "";
          }
        }
      }
    },
    42142: (e, t, n) => {
      "use strict";
      n.d(t, { FragmentMap: () => s });
      var a = n(50959);
      function s(e) {
        if (e.map) {
          return a.Children.toArray(e.children).map(e.map);
        }
        return e.children;
      }
    },
    99025: (e, t, n) => {
      "use strict";
      n.d(t, { Hint: () => o });
      var a = n(50959),
        s = n(97754),
        i = n.n(s),
        r = n(68550);
      function o(e) {
        const { text: t = "", className: n } = e;
        return a.createElement("span", { className: i()(r.shortcut, n) }, t);
      }
    },
    23829: (e, t, n) => {
      "use strict";
      n.d(t, { ContextMenuItem: () => p });
      var a = n(50959),
        s = n(97754),
        i = n.n(s),
        r = n(9745),
        o = n(26996),
        l = n(54627),
        c = n(99025),
        d = n(39750),
        u = n(79978),
        h = n(69311),
        m = n(3651);
      function p(e) {
        const {
            isTitle: t,
            isLoading: n,
            isHovered: s,
            active: p,
            checkable: g,
            disabled: v,
            checked: _,
            icon: f,
            iconChecked: b,
            hint: y,
            subItems: S,
            label: E,
            onClick: C,
            children: k,
            toolbox: x,
            jsxLabel: T,
            size: R = "normal",
          } = e,
          M = (0, a.useContext)(l.EmptyIconsContext),
          z = !!S.length;
        return n
          ? a.createElement(
              "li",
              { className: i()(m.item, m.loading, m[R]) },
              a.createElement(o.Loader, null)
            )
          : a.createElement(
              "li",
              {
                className: i()(
                  m.item,
                  m.interactive,
                  t && m.title,
                  v && m.disabled,
                  s && m.hovered,
                  p && m.active,
                  M && m.emptyIcons,
                  m[R]
                ),
                onClick: C,
              },
              a.createElement(r.Icon, {
                className: i()(m.icon),
                icon: (function () {
                  if (g && _) return b || f || d;
                  return f;
                })(),
              }),
              a.createElement(
                "span",
                { className: i()(m.label) },
                null != T ? T : E
              ),
              !!x &&
                a.createElement(r.Icon, {
                  onClick: function () {
                    x && x.action();
                  },
                  className: m.remove,
                  icon: h,
                }),
              !z &&
                y &&
                a.createElement(c.Hint, { className: m.shortcut, text: y }),
              z && a.createElement(r.Icon, { className: m.nested, icon: u }),
              k
            );
      }
    },
    54627: (e, t, n) => {
      "use strict";
      n.d(t, { EmptyIconsContext: () => a });
      const a = n(50959).createContext(!1);
    },
    1109: (e, t, n) => {
      "use strict";
      n.d(t, { Separator: () => r });
      var a = n(50959),
        s = n(97754),
        i = n(94725);
      function r(e) {
        return a.createElement("div", {
          className: s(i.separator, e.className),
        });
      }
    },
    51613: (e, t, n) => {
      "use strict";
      n.d(t, { PopupMenuSeparator: () => o });
      var a = n(50959),
        s = n(97754),
        i = n.n(s),
        r = n(45829);
      function o(e) {
        const { size: t = "normal", className: n, ariaHidden: s = !1 } = e;
        return a.createElement("div", {
          className: i()(
            r.separator,
            "small" === t && r.small,
            "normal" === t && r.normal,
            "large" === t && r.large,
            n
          ),
          role: "separator",
          "aria-hidden": s,
        });
      }
    },
    64205: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_SLIDER_THEME: () => o,
        SliderItem: () => l,
        factory: () => c,
      });
      var a = n(50959),
        s = n(97754),
        i = n(50151),
        r = n(86355);
      const o = r;
      function l(e) {
        const t = s(e.className, r.tab, {
          [r.active]: e.isActive,
          [r.disabled]: e.isDisabled,
          [r.defaultCursor]: !!e.shouldUseDefaultCursor,
          [r.noBorder]: !!e.noBorder,
        });
        return a.createElement(
          "div",
          {
            className: t,
            onClick: e.onClick,
            ref: e.reference,
            "data-type": "tab-item",
            "data-value": e.value,
            "data-name": "tab-item-" + e.value.toString().toLowerCase(),
          },
          e.children
        );
      }
      function c(e) {
        return class extends a.PureComponent {
          constructor() {
            super(...arguments), (this.activeTab = { current: null });
          }
          componentDidUpdate() {
            ((0, i.ensureNotNull)(this._slider).style.transition =
              "transform 350ms"),
              this._componentDidUpdate();
          }
          componentDidMount() {
            this._componentDidUpdate();
          }
          render() {
            const { className: t } = this.props,
              n = this._generateTabs();
            return a.createElement(
              "div",
              { className: s(t, r.tabs), "data-name": this.props["data-name"] },
              n,
              a.createElement(e, {
                reference: (e) => {
                  this._slider = e;
                },
              })
            );
          }
          _generateTabs() {
            return (
              (this.activeTab.current = null),
              a.Children.map(this.props.children, (e) => {
                const t = e,
                  n = Boolean(t.props.isActive),
                  s = {
                    reference: (e) => {
                      n && (this.activeTab.current = e),
                        t.props.reference && t.props.reference(e);
                    },
                  };
                return a.cloneElement(t, s);
              })
            );
          }
          _componentDidUpdate() {
            const e = (0, i.ensureNotNull)(this._slider).style;
            if (this.activeTab.current) {
              const t = this.activeTab.current.offsetWidth,
                n = this.activeTab.current.offsetLeft;
              (e.transform = `translateX(${n}px)`),
                (e.width = `${t}px`),
                (e.opacity = "1");
            } else e.opacity = "0";
          }
        };
      }
      c(function (e) {
        return a.createElement("div", {
          className: r.slider,
          ref: e.reference,
        });
      });
    },
    40173: (e, t, n) => {
      "use strict";
      function a(e, t, n = {}) {
        return Object.assign(
          {},
          e,
          (function (e, t, n = {}) {
            const a = Object.assign({}, t);
            for (const s of Object.keys(t)) {
              const i = n[s] || s;
              i in e && (a[s] = [e[i], t[s]].join(" "));
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
      function s() {}
      function i() {}
      (i.resetWarningCache = s),
        (e.exports = function () {
          function e(e, t, n, s, i, r) {
            if (r !== a) {
              var o = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((o.name = "Invariant Violation"), o);
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
            checkPropTypes: i,
            resetWarningCache: s,
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
        s = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        r = Symbol.for("react.profiler"),
        o = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        c = Symbol.for("react.forward_ref"),
        d = Symbol.for("react.suspense"),
        u = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy"),
        m = Symbol.iterator;
      var p = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        g = Object.assign,
        v = {};
      function _(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || p);
      }
      function f() {}
      function b(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || p);
      }
      (_.prototype.isReactComponent = {}),
        (_.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (_.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (f.prototype = _.prototype);
      var y = (b.prototype = new f());
      (y.constructor = b), g(y, _.prototype), (y.isPureReactComponent = !0);
      var S = Array.isArray,
        E = Object.prototype.hasOwnProperty,
        C = { current: null },
        k = { key: !0, ref: !0, __self: !0, __source: !0 };
      function x(e, t, a) {
        var s,
          i = {},
          r = null,
          o = null;
        if (null != t)
          for (s in (void 0 !== t.ref && (o = t.ref),
          void 0 !== t.key && (r = "" + t.key),
          t))
            E.call(t, s) && !k.hasOwnProperty(s) && (i[s] = t[s]);
        var l = arguments.length - 2;
        if (1 === l) i.children = a;
        else if (1 < l) {
          for (var c = Array(l), d = 0; d < l; d++) c[d] = arguments[d + 2];
          i.children = c;
        }
        if (e && e.defaultProps)
          for (s in (l = e.defaultProps)) void 0 === i[s] && (i[s] = l[s]);
        return {
          $$typeof: n,
          type: e,
          key: r,
          ref: o,
          props: i,
          _owner: C.current,
        };
      }
      function T(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n;
      }
      var R = /\/+/g;
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
      function z(e, t, s, i, r) {
        var o = typeof e;
        ("undefined" !== o && "boolean" !== o) || (e = null);
        var l = !1;
        if (null === e) l = !0;
        else
          switch (o) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case n:
                case a:
                  l = !0;
              }
          }
        if (l)
          return (
            (r = r((l = e))),
            (e = "" === i ? "." + M(l, 0) : i),
            S(r)
              ? ((s = ""),
                null != e && (s = e.replace(R, "$&/") + "/"),
                z(r, t, s, "", function (e) {
                  return e;
                }))
              : null != r &&
                (T(r) &&
                  (r = (function (e, t) {
                    return {
                      $$typeof: n,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    r,
                    s +
                      (!r.key || (l && l.key === r.key)
                        ? ""
                        : ("" + r.key).replace(R, "$&/") + "/") +
                      e
                  )),
                t.push(r)),
            1
          );
        if (((l = 0), (i = "" === i ? "." : i + ":"), S(e)))
          for (var c = 0; c < e.length; c++) {
            var d = i + M((o = e[c]), c);
            l += z(o, t, s, d, r);
          }
        else if (
          ((d = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (m && e[m]) || e["@@iterator"])
              ? e
              : null;
          })(e)),
          "function" == typeof d)
        )
          for (e = d.call(e), c = 0; !(o = e.next()).done; )
            l += z((o = o.value), t, s, (d = i + M(o, c++)), r);
        else if ("object" === o)
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
        return l;
      }
      function w(e, t, n) {
        if (null == e) return e;
        var a = [],
          s = 0;
        return (
          z(e, a, "", "", function (e) {
            return t.call(n, e, s++);
          }),
          a
        );
      }
      function W(e) {
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
      var P = { current: null },
        A = { transition: null },
        j = {
          ReactCurrentDispatcher: P,
          ReactCurrentBatchConfig: A,
          ReactCurrentOwner: C,
        };
      (t.Children = {
        map: w,
        forEach: function (e, t, n) {
          w(
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
            w(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            w(e, function (e) {
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
        (t.Component = _),
        (t.Fragment = s),
        (t.Profiler = r),
        (t.PureComponent = b),
        (t.StrictMode = i),
        (t.Suspense = d),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
        (t.cloneElement = function (e, t, a) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
            );
          var s = g({}, e.props),
            i = e.key,
            r = e.ref,
            o = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((r = t.ref), (o = C.current)),
              void 0 !== t.key && (i = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var l = e.type.defaultProps;
            for (c in t)
              E.call(t, c) &&
                !k.hasOwnProperty(c) &&
                (s[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) s.children = a;
          else if (1 < c) {
            l = Array(c);
            for (var d = 0; d < c; d++) l[d] = arguments[d + 2];
            s.children = l;
          }
          return {
            $$typeof: n,
            type: e.type,
            key: i,
            ref: r,
            props: s,
            _owner: o,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: l,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: o, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = x),
        (t.createFactory = function (e) {
          var t = x.bind(null, e);
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
            $$typeof: h,
            _payload: { _status: -1, _result: e },
            _init: W,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = A.transition;
          A.transition = {};
          try {
            e();
          } finally {
            A.transition = t;
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }),
        (t.useCallback = function (e, t) {
          return P.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return P.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return P.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return P.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return P.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return P.current.useImperativeHandle(e, t, n);
        }),
        (t.useInsertionEffect = function (e, t) {
          return P.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return P.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return P.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return P.current.useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return P.current.useRef(e);
        }),
        (t.useState = function (e) {
          return P.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return P.current.useSyncExternalStore(e, t, n);
        }),
        (t.useTransition = function () {
          return P.current.useTransition();
        }),
        (t.version = "18.2.0");
    },
    50959: (e, t, n) => {
      "use strict";
      e.exports = n(95257);
    },
    78838: (e) => {
      e.exports = {
        button: "button-MHRXYii0",
        hover: "hover-MHRXYii0",
        inner: "inner-MHRXYii0",
      };
    },
    77907: (e) => {
      e.exports = { title: "title-t_2RnW3_" };
    },
    26756: (e) => {
      e.exports = {
        toolbar: "toolbar-uWw2aReP",
        dateRangeWrapper: "dateRangeWrapper-uWw2aReP",
        seriesControlWrapper: "seriesControlWrapper-uWw2aReP",
        dateRangeExpanded: "dateRangeExpanded-uWw2aReP",
        dateRangeCollapsed: "dateRangeCollapsed-uWw2aReP",
        item: "item-uWw2aReP",
        first: "first-uWw2aReP",
        last: "last-uWw2aReP",
        inline: "inline-uWw2aReP",
        timezone: "timezone-uWw2aReP",
        session: "session-uWw2aReP",
        icon: "icon-uWw2aReP",
        hidden: "hidden-uWw2aReP",
        collapsed: "collapsed-uWw2aReP",
      };
    },
    35900: (e) => {
      e.exports = {
        button: "button-wVK1yQmF",
        separator: "separator-wVK1yQmF",
      };
    },
    46632: (e) => {
      e.exports = {
        button: "button-rgQ5VWWu",
        hover: "hover-rgQ5VWWu",
        icon: "icon-rgQ5VWWu",
      };
    },
    92194: (e) => {
      e.exports = { separator: "separator-tdPP3m5x" };
    },
    87017: (e) => {
      e.exports = { headerMenuText: "headerMenuText-kxGYI1CJ" };
    },
    87457: (e) => {
      e.exports = { button: "button-WB93ygW4" };
    },
    81195: (e) => {
      e.exports = {
        item: "item-Jc9IXW74",
        hover: "hover-Jc9IXW74",
        isActive: "isActive-Jc9IXW74",
        isFirst: "isFirst-Jc9IXW74",
        isLast: "isLast-Jc9IXW74",
      };
    },
    7595: (e) => {
      e.exports = { slider: "slider-yrq2LKUD", inner: "inner-yrq2LKUD" };
    },
    19731: (e) => {
      e.exports = { sliderRow: "sliderRow-hx8kZa1R" };
    },
    81384: (e, t, n) => {
      "use strict";
      n.d(t, { ToolWidgetMenuSummary: () => r });
      var a = n(50959),
        s = n(97754),
        i = n(77907);
      function r(e) {
        return a.createElement(
          "div",
          { className: s(e.className, i.title) },
          e.children
        );
      }
    },
    33366: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { BottomToolbarRenderer: () => at });
      var a = n(50959),
        s = n(962),
        i = n(44352),
        r = n(19036),
        o = n(97754),
        l = n(2484),
        c = n(37536),
        d = n(39313),
        u = n(59064),
        h = n(90692),
        m = n(16396),
        p = n(51613),
        g = n(50151),
        v = n(51768),
        _ = n(10654),
        f = n(26867),
        b = n.n(f);
      class y {
        constructor(e) {
          (this._state = { ranges: [] }),
            (this._change = new (b())()),
            (this._rangeChangedListenerBound = this._onRangeChanged.bind(this));
          const { chartWidget: t } = (this._context = e);
          t.withModel(null, () => {
            const e = t.model(),
              n = e.mainSeries();
            n.onStatusChanged().subscribe(this, this._updateAvailableRanges),
              l.enabled("update_timeframes_set_on_symbol_resolve") &&
                n
                  .dataEvents()
                  .symbolResolved()
                  .subscribe(this, this._updateAvailableRanges),
              n
                .priceScale()
                .properties()
                .childs()
                .lockScale.subscribe(this, this._updateAvailableRanges);
            const a = e.model().appliedTimeFrame();
            a.subscribe(this._rangeChangedListenerBound),
              this._rangeChangedListenerBound(a.value()),
              this._updateAvailableRanges();
          });
        }
        state() {
          return this._state;
        }
        onChange() {
          return this._change;
        }
        selectRange(e) {
          this._setState({ activeRange: e.value.value });
          const { chartWidgetCollection: t } = this._context,
            n = { val: e.value, res: e.targetResolution };
          t.setTimeFrame(n);
        }
        destroy() {
          const { chartWidget: e } = this._context;
          e.withModel(null, () => {
            const t = e.model(),
              n = t.mainSeries();
            n.onStatusChanged().unsubscribe(this, this._updateAvailableRanges),
              l.enabled("update_timeframes_set_on_symbol_resolve") &&
                n
                  .dataEvents()
                  .symbolResolved()
                  .unsubscribe(this, this._updateAvailableRanges),
              n
                .priceScale()
                .properties()
                .childs()
                .lockScale.unsubscribe(this, this._updateAvailableRanges),
              t
                .model()
                .appliedTimeFrame()
                .unsubscribe(this._rangeChangedListenerBound);
          }),
            this._change.destroy();
        }
        _setState(e) {
          (this._state = Object.assign({}, this._state, e)),
            this._change.fire(this._state);
        }
        _onRangeChanged(e) {
          let t;
          null !== e && "period-back" === e.val.type && (t = e.val.value),
            this._setState({ activeRange: t });
        }
        _updateAvailableRanges() {
          const { availableTimeFrames: e, chartWidget: t } = this._context;
          if (!t.hasModel()) return;
          const n = t.model().mainSeries(),
            a = n.status();
          if (2 === a || 1 === a) return;
          const s = e(n.symbolInfo(), n.status());
          0 !== s.length && this._setState({ ranges: s });
        }
      }
      const S = (0, _.registryContextType)();
      function E(e) {
        var t;
        return (
          ((t = class extends a.PureComponent {
            constructor(e, t) {
              super(e, t),
                (this._handleUpdate = (e) => {
                  this.setState(e);
                }),
                (this._handleSelectRange = (e) => {
                  var t, n;
                  (0, v.trackEvent)(
                    "GUI",
                    "Chart Bottom Toolbar",
                    `range ${e.value}`
                  ),
                    null === (n = (t = this.props).onSelectRange) ||
                      void 0 === n ||
                      n.call(t, e),
                    this._binding.selectRange(e);
                }),
                (0, _.validateRegistry)(t, {
                  availableTimeFrames: r.any.isRequired,
                  chartWidgetCollection: r.any.isRequired,
                  chartWidget: r.any.isRequired,
                }),
                C.has(t.chartWidget) || C.set(t.chartWidget, new y(t));
              const n = (this._binding = (0, g.ensureDefined)(
                C.get(t.chartWidget)
              ));
              this.state = n.state();
            }
            componentDidMount() {
              this._binding.onChange().subscribe(this, this._handleUpdate);
            }
            componentWillUnmount() {
              this._binding.onChange().unsubscribe(this, this._handleUpdate);
            }
            render() {
              return a.createElement(e, {
                goToDateButton: this.props.goToDateButton,
                className: this.props.className,
                ranges: this.state.ranges,
                activeRange: this.state.activeRange,
                onSelectRange: this._handleSelectRange,
              });
            }
          }).contextType = S),
          t
        );
      }
      const C = new WeakMap();
      var k = n(68009),
        x = n(23829),
        T = n(1109),
        R = n(86339),
        M = n(90752),
        z = n(35900);
      function w(e) {
        const { ranges: t, activeRange: n, onSelectRange: s } = e;
        return a.createElement(
          a.Fragment,
          null,
          t.map((e) =>
            a.createElement(x.ContextMenuItem, {
              key: e.value.value,
              label: e.description || e.text,
              active: n === e.value.value,
              checked: n === e.value.value,
              checkable: !0,
              disabled: !1,
              onClick: i.bind(null, e),
              doNotCloseOnClick: !1,
              subItems: [],
            })
          )
        );
        function i(e) {
          e && s && s(e), (0, u.globalCloseMenu)();
        }
      }
      function W(e) {
        const { onGoToDateClick: t } = e;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(T.Separator, { className: z.separator }),
          a.createElement(x.ContextMenuItem, {
            icon: M,
            label: (0, R.appendEllipsis)(i.t(null, void 0, n(369))),
            onClick: t,
            active: !1,
            checked: !1,
            checkable: !1,
            disabled: !1,
            doNotCloseOnClick: !1,
            subItems: [],
          })
        );
      }
      const P = {
          title: i.t(null, void 0, n(60222)),
          goToDate: (0, R.appendEllipsis)(i.t(null, void 0, n(369))),
        },
        A = (0, _.registryContextType)();
      class j extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleGoToDateClick = () => {
              const { chartWidget: e } = this.context;
              (0, k.showGoToDateDialog)(e), (0, u.globalCloseMenu)();
            }),
            (this._handleRangeSelect = (e) => {
              e && this.props.onSelectRange && this.props.onSelectRange(e),
                (0, u.globalCloseMenu)();
            }),
            (this._renderChildren = (e) => {
              const {
                ranges: t,
                activeRange: n,
                goToDateButton: s,
              } = this.props;
              return e
                ? a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(w, {
                      ranges: t,
                      activeRange: n,
                      onSelectRange: this._handleRangeSelect,
                    }),
                    s &&
                      a.createElement(W, {
                        onGoToDateClick: this._handleGoToDateClick,
                      })
                  )
                : a.createElement(
                    a.Fragment,
                    null,
                    t.map((e) =>
                      a.createElement(m.PopupMenuItem, {
                        key: e.value.value,
                        label: e.description || e.text,
                        isActive: n === e.value.value,
                        onClick: this._handleRangeSelect,
                        onClickArg: e,
                      })
                    ),
                    s && a.createElement(p.PopupMenuSeparator, null),
                    s &&
                      a.createElement(m.PopupMenuItem, {
                        label: P.goToDate,
                        onClick: this._handleGoToDateClick,
                      })
                  );
            }),
            (0, _.validateRegistry)(t, { chartWidget: r.any.isRequired });
        }
        render() {
          return a.createElement(
            h.MatchMedia,
            { rule: "screen and (max-width: 430px)" },
            (e) =>
              a.createElement(
                c.ToolWidgetMenu,
                {
                  className: z.button,
                  content: P.title,
                  arrow: !0,
                  verticalAttachEdge: d.VerticalAttachEdge.Top,
                  verticalDropDirection:
                    d.VerticalDropDirection.FromBottomToTop,
                  horizontalMargin: 4,
                  "data-name": "date-ranges-menu",
                  isDrawer: e,
                  onClick: this._trackClick,
                },
                this._renderChildren(e)
              )
          );
        }
        _trackClick() {
          0;
        }
      }
      j.contextType = A;
      const H = E(j);
      var L = n(64205),
        N = n(81195);
      function I(e) {
        const t = o(e.className, N.item, {
          [N.isActive]: e.isActive,
          [N.isFirst]: e.isFirst,
          [N.isLast]: e.isLast,
        });
        return a.createElement(
          "div",
          { className: t, onClick: e.onClick, ref: e.reference },
          e.children
        );
      }
      var D = n(40173),
        B = n(7595);
      const F = (0, D.mergeThemes)(L.DEFAULT_SLIDER_THEME, B);
      var U = n(19731);
      const O = (0, L.factory)(function (e) {
        return a.createElement(
          "div",
          { className: o(e.className, F.slider), ref: e.reference },
          a.createElement("div", { className: F.inner })
        );
      });
      const V = E(function (e) {
        const { className: t, ranges: n, activeRange: s, onSelectRange: i } = e;
        return a.createElement(
          O,
          { className: o(U.sliderRow, t), "data-name": "date-ranges-tabs" },
          n.map((e, t) =>
            a.createElement(
              I,
              {
                key: e.value.value,
                value: e.value.value,
                isFirst: 0 === t,
                isLast: t === n.length - 1,
                isActive: s === e.value.value,
                onClick: i && i.bind(null, e),
              },
              a.createElement(
                "div",
                {
                  title: e.description || e.text,
                  className: "apply-common-tooltip",
                },
                e.text
              )
            )
          )
        );
      });
      var Y = n(9745),
        q = n(61814),
        G = n(68335),
        Z = n(15270),
        J = n(46632);
      const $ = (0, q.hotKeySerialize)({
          keys: [(0, G.humanReadableModifiers)(G.Modifiers.Alt, !1), "G"],
          text: "{0} + {1}",
        }),
        X = (0, _.registryContextType)();
      class K extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleClick = () => {
              const { chartWidget: e } = this.context;
              (0, v.trackEvent)("GUI", "Chart Bottom Toolbar", "go to"),
                (0, k.showGoToDateDialog)(e);
            }),
            (0, _.validateRegistry)(t, { chartWidget: r.any.isRequired });
        }
        render() {
          const { className: e, ranges: t } = this.props;
          return (
            t.length > 0 &&
            a.createElement(
              "div",
              {
                className: o("apply-common-tooltip", J.button, e),
                "data-name": "go-to-date",
                "data-tooltip-hotkey": $,
                onClick: this._handleClick,
                title: i.t(null, void 0, n(369)),
              },
              a.createElement(Y.Icon, { className: J.icon, icon: Z })
            )
          );
        }
      }
      K.contextType = X;
      const Q = E(K);
      var ee = n(78838);
      function te(e) {
        const { reference: t, className: n, children: s, ...i } = e;
        return a.createElement(
          "button",
          { ...i, className: o(n, ee.button), ref: t },
          a.createElement("span", { className: ee.inner }, s)
        );
      }
      var ne = n(43925),
        ae = n(78831),
        se = n(43986),
        ie = n(60223);
      class re extends a.PureComponent {
        constructor(e) {
          super(e),
            (this._element = null),
            (this._menuShown = !1),
            (this._preventShowingMenu = !1),
            (this._handleRef = (e) => {
              this._element = e;
            }),
            (this._onMouseDown = () => {
              this._preventShowingMenu = this._menuShown;
            }),
            (this._showMenu = () => {
              if (this._preventShowingMenu)
                return void ie.ContextMenuManager.hideAll();
              const { getActions: e } = this.props,
                t = (0, g.ensureNotNull)(this._element),
                n = e();
              if (0 === n.length) return;
              const a = t.getBoundingClientRect();
              ie.ContextMenuManager.showMenu(
                n,
                { clientX: a.left, clientY: a.top, attachToYBy: "bottom" },
                void 0,
                { menuName: "TimezoneMenuContextMenu" },
                () => {
                  this._menuShown = !1;
                }
              ).then(() => {
                this._menuShown = !0;
              });
            });
        }
        render() {
          const { children: e } = this.props;
          return a.createElement(
            "span",
            {
              onClick: this._showMenu,
              onMouseDown: this._onMouseDown,
              ref: this._handleRef,
            },
            e
          );
        }
      }
      var oe = n(32769),
        le = n(74914),
        ce = n(51620),
        de = n(87457);
      const ue = { hint: i.t(null, void 0, n(87492)) };
      const he = (0, _.registryContextType)();
      class me extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._timeFormatter = new ae.TimeFormatter(
              (0, le.getHourMinuteSecondFormat)(
                ce.timeHoursFormatProperty.value()
              )
            )),
            (this._tickInterval = void 0),
            (this._tickClock = () => {
              const { chartApiInstance: e } = this.context;
              if (void 0 !== this._timezone) {
                const t = (0, oe.utc_to_cal)(this._timezone, e.serverTime());
                this.setState({ time: this._timeFormatter.format(t) });
              }
            }),
            (this._getActions = () => {
              if (!this.props.withMenu) return [];
              const { chartWidget: e } = this.context;
              return (function (e) {
                e.updateActions();
                const t = e.actions();
                return t && t.applyTimeZone instanceof se.Action
                  ? t.applyTimeZone.getSubItems()
                  : [];
              })(e);
            }),
            (0, _.validateRegistry)(t, {
              chartWidget: r.any.isRequired,
              chartApiInstance: r.any.isRequired,
            }),
            (this.state = { time: "" });
        }
        componentDidMount() {
          const { chartWidget: e } = this.context;
          (this._tickInterval = setInterval(this._tickClock, 1e3)),
            e.withModel(null, () => {
              const t = e.model();
              t
                .model()
                .mainSeries()
                .dataEvents()
                .symbolResolved()
                .subscribe(this, this.updateTimezonesButton),
                t
                  .model()
                  .properties()
                  .childs()
                  .timezone.subscribe(this, this.updateTimezonesButton),
                ce.timeHoursFormatProperty.subscribe(
                  this,
                  this._timeHoursFormatPropertyChanged
                );
            });
        }
        componentWillUnmount() {
          const { chartWidget: e } = this.context;
          clearInterval(this._tickInterval),
            e.withModel(null, () => {
              const t = e.model();
              t
                .model()
                .mainSeries()
                .dataEvents()
                .symbolResolved()
                .unsubscribe(this, this.updateTimezonesButton),
                t
                  .model()
                  .properties()
                  .childs()
                  .timezone.unsubscribe(this, this.updateTimezonesButton),
                ce.timeHoursFormatProperty.unsubscribe(
                  this,
                  this._timeHoursFormatPropertyChanged
                );
            });
        }
        render() {
          const { className: e, withMenu: t } = this.props,
            { time: n } = this.state,
            s =
              void 0 !== this._timezone
                ? (0, ne.parseTzOffset)(this._timezone.name()).string
                : null;
          return a.createElement(
            re,
            { getActions: this._getActions },
            a.createElement(
              te,
              {
                className: o(e, de.button, "apply-common-tooltip"),
                title: t ? ue.hint : void 0,
                disabled: !t,
                "data-name": "time-zone-menu",
              },
              n && s && `${n} (${s})`
            )
          );
        }
        updateTimezonesButton() {
          const { chartWidget: e } = this.context;
          if (!e.hasModel()) return;
          if (null === e.model().mainSeries().symbolInfo()) return;
          let t = e.model().model().timezone();
          if ("exchange" === t) {
            const n = (0, g.ensureNotNull)(
              e.model().mainSeries().symbolInfo()
            ).timezone;
            n && (t = n);
          }
          (this._timezone = (0, oe.get_timezone)(t)), this._tickClock();
        }
        _timeHoursFormatPropertyChanged() {
          (this._timeFormatter = new ae.TimeFormatter(
            (0, le.getHourMinuteSecondFormat)(
              ce.timeHoursFormatProperty.value()
            )
          )),
            this.updateTimezonesButton();
        }
      }
      me.contextType = he;
      var pe = n(92194);
      function ge(e) {
        return a.createElement("span", {
          className: o(pe.separator, e.className),
        });
      }
      var ve = n(94206),
        _e = n(47539),
        fe = n(49483);
      class be {
        constructor(e, t, n) {
          (this._highlighted = !1),
            (this._chartWidget = e),
            (this._priceScaleGetter = t),
            (this._owner = n),
            (this._setHighlight = this._setHighlight.bind(this)),
            (this._removeHighlight = this._removeHighlight.bind(this));
        }
        destroy() {
          this._highlighted && this._removeHighlight();
        }
        handlers() {
          const e = fe.CheckMobile.any();
          return {
            onMouseEnter: e ? void 0 : this._setHighlight,
            onMouseLeave: e ? void 0 : this._removeHighlight,
          };
        }
        _setHighlight() {
          if (!this._chartWidget.hasModel()) return;
          const e = this._chartWidget.model().model(),
            t = e.paneForSource(e.mainSeries()),
            n = this._priceScaleGetter();
          if (null === t || null === n) return;
          const a = this._chartWidget.paneByState(t);
          if (null !== a) {
            const t = a.rightPriceAxisesContainer().findAxisWidgetForScale(n);
            let s = null;
            null !== t && (s = t.axisInfo());
            const i = a.leftPriceAxisesContainer().findAxisWidgetForScale(n);
            null !== i && (s = i.axisInfo());
            const r = a.highlightedPriceAxis();
            null !== s &&
              r.value().axis !== s &&
              (r.setValue({ owner: this._owner, axis: s }),
              e.lightUpdate(),
              (this._highlighted = !0));
          }
        }
        _removeHighlight() {
          if (!this._chartWidget.hasModel()) return;
          const e = this._chartWidget.model().model(),
            t = e.paneForSource(e.mainSeries());
          if (null === t) return;
          const n = this._chartWidget.paneByState(t);
          if (null !== n) {
            const t = n.highlightedPriceAxis(),
              a = t.value();
            null !== a.axis &&
              a.owner === this._owner &&
              (t.setValue({ owner: this._owner, axis: null }),
              e.lightUpdate(),
              (this._highlighted = !1));
          }
        }
      }
      const ye = (0, _.registryContextType)(),
        Se = new _e.TranslatedString(
          "toggle log scale",
          i.t(null, void 0, n(60166))
        );
      const Ee = (0, _.registryContextType)(),
        Ce = new _e.TranslatedString(
          "toggle auto scale",
          i.t(null, void 0, n(63060))
        );
      const ke = (0, _.registryContextType)(),
        xe = new _e.TranslatedString(
          "toggle percentage scale",
          i.t(null, void 0, n(68642))
        );
      const Te = (0, _.registryContextType)();
      var Re = n(42142),
        Me = n(33933),
        ze = n(81384),
        we = n(12272),
        We = n(87017);
      const Pe = new _e.TranslatedString(
          "change session",
          i.t(null, void 0, n(65303))
        ),
        Ae = {
          hint: i.t(null, void 0, n(25866)),
          headerMenuText: i.t(null, void 0, n(44794)),
        },
        je = (0, _.registryContextType)();
      class He extends a.PureComponent {
        constructor(e, t) {
          super(e, t),
            (0, _.validateRegistry)(t, {
              chartWidget: r.any.isRequired,
              chartApiInstance: r.any.isRequired,
            }),
            (this.state = { availableSessions: [] });
        }
        componentDidMount() {
          const { chartWidget: e } = this.context;
          e.withModel(null, () => {
            const t = e.model();
            t
              .model()
              .mainSeries()
              .dataEvents()
              .symbolResolved()
              .subscribe(this, this.updateSessionButton),
              t
                .model()
                .mainSeries()
                .properties()
                .childs()
                .sessionId.subscribe(this, this.updateSessionButton),
              this.updateSessionButton();
          });
        }
        componentWillUnmount() {
          const { chartWidget: e } = this.context;
          e.withModel(null, () => {
            const t = e.model();
            t
              .model()
              .mainSeries()
              .dataEvents()
              .symbolResolved()
              .unsubscribe(this, this.updateSessionButton),
              t
                .model()
                .mainSeries()
                .properties()
                .childs()
                .sessionId.unsubscribe(this, this.updateSessionButton);
          });
        }
        render() {
          const { className: e, withMenu: t } = this.props,
            { sessionName: n } = this.state;
          return a.createElement(
            c.ToolWidgetMenu,
            {
              arrow: !1,
              isDisabled: !t,
              content: n,
              className: e,
              closeOnClickOutside: !0,
              title: t ? Ae.hint : void 0,
              "data-name": "session-menu",
              verticalDropDirection: d.VerticalDropDirection.FromBottomToTop,
              verticalAttachEdge: d.VerticalAttachEdge.Top,
              onClick: this._trackClick,
            },
            this._menuItems()
          );
        }
        updateSessionButton() {
          var e, t;
          const { chartWidget: n } = this.context;
          if (!n.model()) return;
          const a = n.model().mainSeries().symbolInfo();
          if (null === a) return;
          const s = a.subsession_id,
            i =
              null !==
                (t =
                  null === (e = a.subsessions) || void 0 === e
                    ? void 0
                    : e.filter((e) => !e.private)) && void 0 !== t
                ? t
                : [],
            r = i.find((e) => e.id === s);
          this.setState({
            sessionId: s,
            sessionName: (0, we.translateSessionShortDescription)(
              (null == r ? void 0 : r.description) || ""
            ),
            availableSessions: i,
          });
        }
        _menuItems() {
          if (!this.props.withMenu) return [];
          const { chartWidget: e } = this.context,
            { availableSessions: t } = this.state;
          if (!e.model()) return [];
          const n = e.model().mainSeries(),
            s = [
              a.createElement(
                ze.ToolWidgetMenuSummary,
                { key: "header_menu_text", className: We.headerMenuText },
                Ae.headerMenuText.toUpperCase()
              ),
            ];
          for (const i of t) {
            const t = { category: "SetSession", event: i.id },
              r = () => {
                e.model().setProperty(
                  n.properties().childs().sessionId,
                  i.id,
                  Pe
                );
              };
            s.push(
              a.createElement(m.PopupMenuItem, {
                key: i.id,
                label: (0, we.translateSessionDescription)(i.description),
                isActive: this.state.sessionId === i.id,
                trackEventObject: t,
                onClick: r,
              })
            );
          }
          return s;
        }
        _trackClick() {
          0;
        }
      }
      He.contextType = je;
      var Le = n(21868),
        Ne = n(83863),
        Ie = n(26756);
      const De = {
          extLabel: i.t(null, void 0, n(8877)),
          extHint: i.t(null, void 0, n(41421)),
          percentageHint: i.t(null, void 0, n(43737)),
          logLabel: i.t(null, { context: "scale" }, n(885)),
          logHint: i.t(null, void 0, n(21329)),
          autoLabel: i.t(null, { context: "scale" }, n(99247)),
          autoHint: i.t(null, void 0, n(60879)),
          fullscreenHint: i.t(null, void 0, n(98948)),
          adjLabel: i.t(null, { context: "adjustments" }, n(38219)),
          adjHint: i.t(null, void 0, n(9994)),
          adjForDividendsOnlyHint: i.t(null, void 0, n(1217)),
          adjForSplitsOnlyHint: i.t(null, void 0, n(18540)),
          backAdjustLabel: i.t(null, { context: "adjustments" }, n(53457)),
          backAdjustHint: i.t(null, void 0, n(10989)),
          settlementAsCloseLabel: i.t(
            null,
            { context: "adjustments" },
            n(17077)
          ),
          settlementAsCloseHint: i.t(null, void 0, n(23500)),
        },
        Be =
          ((Fe = (e) =>
            a.createElement(ve.ToolWidgetButton, {
              text: De.logLabel,
              title: De.logHint,
              className: e.className,
              isActive: e.isLogarithm,
              isGrouped: !0,
              onClick: Xe(e.onClick, "log", e.isLogarithm),
              onMouseEnter: e.onMouseEnter,
              onMouseLeave: e.onMouseLeave,
              "data-name": "logarithm",
            })),
          ((Ue = class extends a.PureComponent {
            constructor(e, t) {
              super(e, t),
                (this._priceScale = null),
                (this._handleSelect = () => {
                  const e = this.context.chartWidget.model(),
                    t = (0, g.ensureNotNull)(this.state.series),
                    n = t.priceScale(),
                    a = n.mode();
                  t.priceScale().isLockScale() ||
                    e.setPriceScaleMode({ log: !a.log }, n, Se);
                }),
                (0, _.validateRegistry)(t, { chartWidget: r.any.isRequired }),
                (this.state = { isActive: !1, series: null }),
                (this._priceAxisHighlighter = new be(
                  this.context.chartWidget,
                  () => this._priceScale,
                  "logarithm"
                ));
            }
            componentDidMount() {
              const e = this.context.chartWidget;
              e.withModel(null, () => {
                const t = e.model().mainSeries(),
                  n = t.priceScale();
                this._handleMainSeriesPriceScaleChanged(n),
                  t
                    .priceScaleChanged()
                    .subscribe(this, this._handleMainSeriesPriceScaleChanged),
                  this._handleModeChanged({}, n.mode()),
                  this.setState({
                    isActive: t.priceScale().isLog(),
                    series: t,
                  });
              });
            }
            componentWillUnmount() {
              const e = this.context.chartWidget;
              e.withModel(null, () => {
                e.model()
                  .mainSeries()
                  .priceScaleChanged()
                  .unsubscribe(this, this._handleMainSeriesPriceScaleChanged);
              }),
                null !== this._priceScale &&
                  (this._priceScale.modeChanged().unsubscribeAll(this),
                  (this._priceScale = null)),
                this._priceAxisHighlighter.destroy();
            }
            render() {
              const { className: e } = this.props,
                { isActive: t, series: n } = this.state;
              return a.createElement(Fe, {
                ...this._priceAxisHighlighter.handlers(),
                className: e,
                isLogarithm: t,
                isDisabled: null === n,
                onClick: this._handleSelect,
              });
            }
            _handleMainSeriesPriceScaleChanged(e) {
              null !== this._priceScale &&
                this._priceScale
                  .modeChanged()
                  .unsubscribe(this, this._handleModeChanged),
                (this._priceScale = e),
                this._priceScale
                  .modeChanged()
                  .subscribe(this, this._handleModeChanged),
                this._handleModeChanged({}, e.mode());
            }
            _handleModeChanged(e, t) {
              Boolean(t.log) !== this.state.isActive &&
                this.setState({ isActive: Boolean(t.log) });
            }
          }).contextType = ye),
          Ue);
      var Fe, Ue;
      const Oe = (function (e) {
          var t;
          return (
            ((t = class extends a.PureComponent {
              constructor(e, t) {
                super(e, t),
                  (this._priceScale = null),
                  (this._handleSelect = () => {
                    const e = this.context.chartWidget.model(),
                      t = (0, g.ensureNotNull)(this.state.series).priceScale(),
                      n = t.mode();
                    e.setPriceScaleMode({ autoScale: !n.autoScale }, t, Ce);
                  }),
                  (0, _.validateRegistry)(t, { chartWidget: r.any.isRequired }),
                  (this.state = { isActive: !1, series: null }),
                  (this._priceAxisHighlighter = new be(
                    this.context.chartWidget,
                    () => this._priceScale,
                    "auto"
                  ));
              }
              componentDidMount() {
                const e = this.context.chartWidget;
                e.withModel(null, () => {
                  const t = e.model().mainSeries(),
                    n = t.priceScale();
                  this._handleMainSeriesPriceScaleChanged(n),
                    t
                      .priceScaleChanged()
                      .subscribe(this, this._handleMainSeriesPriceScaleChanged),
                    this._handleModeChanged({}, n.mode()),
                    this.setState({
                      isActive: t.priceScale().isAutoScale(),
                      series: t,
                    });
                });
              }
              componentWillUnmount() {
                const e = this.context.chartWidget;
                e.withModel(null, () => {
                  e.model()
                    .mainSeries()
                    .priceScaleChanged()
                    .unsubscribe(this, this._handleMainSeriesPriceScaleChanged);
                }),
                  null !== this._priceScale &&
                    (this._priceScale.modeChanged().unsubscribeAll(this),
                    (this._priceScale = null)),
                  this._priceAxisHighlighter.destroy();
              }
              render() {
                const { className: t } = this.props,
                  { isActive: n, series: s } = this.state;
                return a.createElement(e, {
                  ...this._priceAxisHighlighter.handlers(),
                  className: t,
                  isAuto: n,
                  isDisabled: null === s,
                  onClick: this._handleSelect,
                });
              }
              _handleMainSeriesPriceScaleChanged(e) {
                null !== this._priceScale &&
                  this._priceScale
                    .modeChanged()
                    .unsubscribe(this, this._handleModeChanged),
                  (this._priceScale = e),
                  this._priceScale
                    .modeChanged()
                    .subscribe(this, this._handleModeChanged),
                  this._handleModeChanged({}, e.mode());
              }
              _handleModeChanged(e, t) {
                Boolean(t.autoScale) !== this.state.isActive &&
                  this.setState({ isActive: Boolean(t.autoScale) });
              }
            }).contextType = Ee),
            t
          );
        })((e) =>
          a.createElement(ve.ToolWidgetButton, {
            text: De.autoLabel,
            title: De.autoHint,
            className: e.className,
            isActive: e.isAuto,
            isGrouped: !0,
            onClick: Xe(e.onClick, "auto", e.isAuto),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            "data-name": "auto",
          })
        ),
        Ve = (function (e) {
          var t;
          return (
            ((t = class extends a.PureComponent {
              constructor(e, t) {
                super(e, t),
                  (this._priceScale = null),
                  (this._handleSelect = () => {
                    const e = this.context.chartWidget.model(),
                      t = (0, g.ensureNotNull)(this.state.series),
                      n = t.priceScale(),
                      a = n.mode();
                    t.priceScale().isLockScale() ||
                      e.setPriceScaleMode({ percentage: !a.percentage }, n, xe);
                  }),
                  (0, _.validateRegistry)(t, { chartWidget: r.any.isRequired }),
                  (this.state = { isActive: !1, series: null }),
                  (this._priceAxisHighlighter = new be(
                    this.context.chartWidget,
                    () => this._priceScale,
                    "percentage"
                  ));
              }
              componentDidMount() {
                const e = this.context.chartWidget;
                e.withModel(null, () => {
                  const t = e.model().mainSeries(),
                    n = t.priceScale();
                  this._handleMainSeriesPriceScaleChanged(n),
                    t
                      .priceScaleChanged()
                      .subscribe(this, this._handleMainSeriesPriceScaleChanged),
                    this._handleScaleChange({}, n.mode()),
                    this.setState({
                      isActive: t.priceScale().isPercentage(),
                      series: t,
                    });
                });
              }
              componentWillUnmount() {
                const e = this.context.chartWidget;
                e.withModel(null, () => {
                  e.model()
                    .mainSeries()
                    .priceScaleChanged()
                    .unsubscribe(this, this._handleMainSeriesPriceScaleChanged);
                }),
                  null !== this._priceScale &&
                    (this._priceScale.modeChanged().unsubscribeAll(this),
                    (this._priceScale = null)),
                  this._priceAxisHighlighter.destroy();
              }
              render() {
                const { className: t } = this.props,
                  { isActive: n, series: s } = this.state;
                return a.createElement(e, {
                  ...this._priceAxisHighlighter.handlers(),
                  className: t,
                  isPercentage: n,
                  isDisabled: null === s,
                  onClick: this._handleSelect,
                });
              }
              _handleMainSeriesPriceScaleChanged(e) {
                null !== this._priceScale &&
                  this._priceScale
                    .modeChanged()
                    .unsubscribe(this, this._handleScaleChange),
                  (this._priceScale = e),
                  this._priceScale
                    .modeChanged()
                    .subscribe(this, this._handleScaleChange),
                  this._handleScaleChange({}, e.mode());
              }
              _handleScaleChange(e, t) {
                Boolean(t.percentage) !== this.state.isActive &&
                  this.setState({ isActive: Boolean(t.percentage) });
              }
            }).contextType = ke),
            t
          );
        })((e) =>
          a.createElement(ve.ToolWidgetButton, {
            icon: Le,
            title: De.percentageHint,
            className: e.className,
            isActive: e.isPercentage,
            isDisabled: e.isDisabled,
            isGrouped: !0,
            onClick: Xe(e.onClick, "percent", e.isPercentage),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            "data-name": "percentage",
          })
        );
      const Ye = (0, q.hotKeySerialize)({
          keys: [(0, G.humanReadableModifiers)(G.Modifiers.Alt, !1), "Enter"],
          text: "{0} + {1}",
        }),
        qe = (function (e) {
          var t;
          return (
            ((t = class extends a.PureComponent {
              constructor(e, t) {
                super(e, t),
                  (this._handleClick = (e) => {
                    const { resizerDetacher: t, chartWidgetCollection: n } =
                      this.context;
                    e.shiftKey && t.detachable.value()
                      ? t.detach()
                      : this.state.isFullscreen
                      ? t.exitFullscreen()
                      : t.requestFullscreen();
                  }),
                  (this._handleLayoutChange = (e) => {
                    this.setState({ isFullscreen: e });
                  }),
                  (this._handlePhoneSize = () => {
                    0;
                  }),
                  (0, _.validateRegistry)(t, {
                    chartWidgetCollection: r.any.isRequired,
                    resizerDetacher: r.any.isRequired,
                  });
                const { resizerDetacher: n } = t;
                this.state = {
                  isFullscreen: n.fullscreen.value(),
                  isChangeLayoutButton: this._isChangeLayoutButton(),
                };
              }
              componentDidMount() {
                const { resizerDetacher: e, chartWidgetCollection: t } =
                    this.context,
                  { mobileChangeLayoutEnabled: n } = this.props;
                e.fullscreen.subscribe(this._handleLayoutChange);
              }
              componentWillUnmount() {
                const { resizerDetacher: e, chartWidgetCollection: t } =
                    this.context,
                  { mobileChangeLayoutEnabled: n } = this.props;
                e.fullscreen.unsubscribe(this._handleLayoutChange);
              }
              render() {
                const { className: t } = this.props,
                  { isFullscreen: n, isChangeLayoutButton: s } = this.state;
                return a.createElement(e, {
                  className: t,
                  isFullscreen: n,
                  onClick: this._handleClick,
                });
              }
              _isChangeLayoutButton() {
                return !1;
              }
            }).contextType = Te),
            t
          );
        })((e) =>
          a.createElement(ve.ToolWidgetButton, {
            icon: Ne,
            title: De.fullscreenHint,
            className: e.className,
            isActive: e.isFullscreen,
            onClick: Xe(e.onClick, "maximize chart", e.isFullscreen),
            "data-tooltip-hotkey": Ye,
            "data-name": "fullscreen",
          })
        ),
        Ge = { properties: !0, fullscreen: !0, preventPhoneLayout: !0 },
        Ze = {
          fullscreen: Number.MIN_SAFE_INTEGER,
          preventPhoneLayout: Number.MIN_SAFE_INTEGER,
          properties: Number.MIN_SAFE_INTEGER,
          separator: -2,
          timeZones: -1,
          auto: 0,
          logarithm: 1,
          percentage: 2,
          session: 3,
          adj: 4,
          backAdj: 5,
          settlementAsClose: 6,
        },
        Je = (() => {
          const e = new Map();
          return (
            e.set(Be, "logarithm"),
            e.set(Ve, "percentage"),
            e.set(Oe, "auto"),
            e.set(He, "session"),
            e.set(qe, "fullscreen"),
            e
          );
        })();
      function $e(e) {
        0;
      }
      function Xe(e, t, n) {
        return (t) => {
          e(t);
        };
      }
      const Ke = {
          dateRangeMode: "hidden",
          separator: !0,
          timeZones: !0,
          fullscreen: !0,
          preventPhoneLayout: !0,
          properties: !0,
          auto: !0,
          logarithm: !0,
          percentage: !0,
          session: !0,
          adj: !0,
          backAdj: !0,
          settlementAsClose: !0,
        },
        Qe = (0, _.registryContextType)();
      class et extends a.PureComponent {
        constructor(e, t) {
          var n, i;
          super(e, t),
            (this._timezoneButtonRef = null),
            (this._layout = Object.assign({}, Ke)),
            (this._raf = null),
            (this._toolbar = null),
            (this._rangeExpanded = null),
            (this._rangeCollapsed = null),
            (this._seriesComponents = {}),
            (this._resizeObserver = null),
            (this._injector =
              ((n = () => this._layout),
              (i = (e, t) => (this._seriesComponents[t] = e)),
              (e, t, s) => {
                if (a.isValidElement(e) && "string" != typeof e.type) {
                  const { props: r } = e;
                  if ("string" == typeof r.className) {
                    const l = {
                        className: o(
                          r.className,
                          0 === t && Ie.first,
                          t === s.length - 1 && Ie.last
                        ),
                      },
                      c = n(),
                      d = (0, g.ensureDefined)(Je.get(e.type));
                    return a.createElement(
                      "div",
                      {
                        key: null === e.key ? void 0 : e.key,
                        className: o(Ie.inline, c[d] && Ie.collapsed),
                        ref: (e) => i(e, d),
                        onClick: () => $e(),
                      },
                      a.cloneElement(e, l)
                    );
                  }
                }
                return e;
              })),
            (this._updateButtonsVisibility = () => {
              const { chartWidget: e } = this.context,
                t = e.model().model(),
                n = t.mainSeries(),
                a = n.symbolInfo(),
                s = !n.isDWMProperty().value();
              if (n.symbolResolvingActive().value())
                return void this._setStateWithResize({
                  intervalAllowsSessionButton: s,
                });
              const i =
                ((null == a ? void 0 : a.subsessions) || []).filter(
                  (e) => !e.private
                ).length > 1;
              this._setStateWithResize({
                intervalAllowsSessionButton: s,
                symbolAllowsSessionButton: i,
              });
            }),
            (this._handleResize = () => {
              null === this._raf &&
                (this._raf = requestAnimationFrame(() => {
                  const e = this._layout,
                    t = (0, g.ensureNotNull)(this._toolbar),
                    n = (0, g.ensureNotNull)(this._rangeExpanded),
                    a =
                      ((i = (function (e) {
                        const t = {};
                        return (
                          Object.keys(e).forEach((n) => {
                            const a = e[n];
                            if (null !== a) {
                              const e = s.findDOMNode(a);
                              null !== e && (t[n] = e);
                            }
                          }),
                          t
                        );
                      })(this._seriesComponents)),
                      Object.keys(i)
                        .map((e) => ({ name: e, width: i[e].offsetWidth }))
                        .sort((e, t) => Ze[e.name] - Ze[t.name]));
                  var i;
                  const r = t.offsetWidth,
                    o = a.reduce((e, t) => e + t.width, 0),
                    l = n.offsetWidth,
                    c =
                      !Boolean(n.textContent) || r - o - l <= 0
                        ? "collapsed"
                        : "expanded";
                  if (
                    (Object.assign(e, { dateRangeMode: c }), "expanded" !== c)
                  ) {
                    const t =
                      r -
                      (0, g.ensureNotNull)(this._rangeCollapsed).offsetWidth -
                      0;
                    let n = 0,
                      s = 0;
                    for (const i of a)
                      (n += i.width),
                        i.name in Ge
                          ? ((s += i.width), Object.assign(e, { [i.name]: !1 }))
                          : Object.assign(e, { [i.name]: t <= n });
                    t <= s && Object.assign(e, { dateRangeMode: "hidden" });
                  } else
                    Object.assign(e, {
                      separator: !1,
                      timeZones: !1,
                      fullscreen: !1,
                      preventPhoneLayout: !1,
                      properties: !1,
                      auto: !1,
                      logarithm: !1,
                      percentage: !1,
                      session: !1,
                      adj: !1,
                      settlementAsClose: !1,
                      backAdj: !1,
                    });
                  this._applyResizing(), (this._raf = null);
                }));
            }),
            (this._handleTimezoneButtonRef = (e) => {
              this._timezoneButtonRef = e;
            }),
            (this._handleMeasure = () => {
              null !== this._toolbar && this.resizeUI();
            }),
            (this._handleFullscreenableChange = (e) => {
              this._setStateWithResize({ isFullscreenable: e });
            }),
            (this._handlePreventPhoneLayoutButtonVisibility = () => {
              0;
            }),
            (this._handleToolbarRef = (e) => (this._toolbar = e)),
            (this._handleRangeCollapsedRef = (e) => (this._rangeCollapsed = e)),
            (this._handleRangeExpandedRef = (e) => {
              this._updateResizeObserver(this._rangeExpanded, e),
                (this._rangeExpanded = e);
            }),
            (this._handleTimeZonesRef = (e) => {
              this._updateResizeObserver(this._seriesComponents.timeZones, e),
                (this._seriesComponents.timeZones = e);
            }),
            (this._handleSessionsRef = (e) => {
              this._updateResizeObserver(this._seriesComponents.session, e),
                (this._seriesComponents.session = e);
            }),
            (this._handleSeparatorRef = (e) => {
              this._seriesComponents.separator = e;
            }),
            (this._updateResizeObserver = (e, t) => {
              this._resizeObserver &&
                e !== t &&
                (e && this._resizeObserver.unobserve(e),
                t && this._resizeObserver.observe(t));
            }),
            (0, _.validateRegistry)(t, {
              onContentBoxChanged: r.any.isRequired,
              chartApiInstance: r.any.isRequired,
              chartWidget: r.any.isRequired,
              chartWidgetCollection: r.any.isRequired,
              resizerDetacher: r.any.isRequired,
            });
          const { resizerDetacher: l } = this.context;
          (this.state = {
            isFullscreenable: l.fullscreenable.value(),
            isPreventPhoneLayoutButton: this._isPreventPhoneLayoutButton(),
          }),
            (this._resizeObserver = new ResizeObserver(this._handleMeasure));
        }
        componentDidMount() {
          const {
            onContentBoxChanged: e,
            resizerDetacher: t,
            chartWidgetCollection: n,
            chartWidget: a,
          } = this.context;
          e.subscribe(this, this._handleResize),
            t.fullscreenable.subscribe(this._handleFullscreenableChange),
            a.withModel(null, () => {
              const e = a.model(),
                t = e.model();
              e
                .mainSeries()
                .isDWMProperty()
                .subscribe(this, this._updateButtonsVisibility),
                t
                  .symbolSourceResolvingActive()
                  .subscribe(this._updateButtonsVisibility),
                t
                  .symbolSourceCollectionChanged()
                  .subscribe(this, this._updateButtonsVisibility),
                this._updateButtonsVisibility();
            }),
            this.updateTimezonesButton(),
            this.resizeUI();
        }
        componentWillUnmount() {
          var e;
          const {
            onContentBoxChanged: t,
            resizerDetacher: n,
            chartWidgetCollection: a,
            chartWidget: s,
          } = this.context;
          t.unsubscribe(this, this._handleResize),
            n.fullscreenable.unsubscribe(this._handleFullscreenableChange),
            null === (e = this._resizeObserver) ||
              void 0 === e ||
              e.disconnect(),
            s.withModel(null, () => {
              const e = s.model(),
                t = e.model();
              e
                .mainSeries()
                .isDWMProperty()
                .unsubscribe(this, this._updateButtonsVisibility),
                e
                  .mainSeries()
                  .isBackAdjustmentForbiddenProperty()
                  .unsubscribe(this, this._updateButtonsVisibility),
                e
                  .mainSeries()
                  .isSettlementAsCloseForbiddenProperty()
                  .unsubscribe(this, this._updateButtonsVisibility),
                t
                  .symbolSourceCollectionChanged()
                  .unsubscribe(this, this._updateButtonsVisibility),
                t
                  .symbolSourceResolvingActive()
                  .unsubscribe(this._updateButtonsVisibility);
            }),
            null !== this._raf &&
              (cancelAnimationFrame(this._raf), (this._raf = null));
        }
        render() {
          const e = this._layout,
            {
              timeFramesWidgetEnabled: t,
              timeWidgetEnabled: n,
              percentageScaleButtonEnabled: s,
              logScaleButtonEnabled: i,
              autoScaleButtonEnabled: r,
              fullscreenButtonEnabled: c,
            } = this.props;
          return a.createElement(
            "div",
            {
              className: Ie.toolbar,
              ref: this._handleToolbarRef,
              onContextMenu: Me.preventDefault,
            },
            t &&
              a.createElement(
                Re.FragmentMap,
                null,
                a.createElement(
                  "div",
                  {
                    className: o(
                      Ie.dateRangeWrapper,
                      "collapsed" !== e.dateRangeMode && Ie.collapsed
                    ),
                    ref: this._handleRangeCollapsedRef,
                  },
                  a.createElement(
                    "div",
                    { className: o(Ie.dateRangeCollapsed) },
                    a.createElement(H, {
                      goToDateButton: this.props.goToDateEnabled,
                    })
                  )
                ),
                a.createElement(
                  "div",
                  {
                    className: o(
                      Ie.dateRangeWrapper,
                      "expanded" !== e.dateRangeMode && Ie.collapsed
                    ),
                    ref: this._handleRangeExpandedRef,
                  },
                  a.createElement(
                    "div",
                    { className: o(Ie.dateRangeExpanded) },
                    a.createElement(V, {
                      onSelectRange: this._trackRangeButtonClick,
                    }),
                    this.props.goToDateEnabled && a.createElement(ge, null),
                    this.props.goToDateEnabled && a.createElement(Q, null)
                  )
                )
              ),
            a.createElement(
              "div",
              { className: Ie.seriesControlWrapper },
              n &&
                a.createElement(
                  "div",
                  {
                    className: o(Ie.inline, e.timeZones && Ie.collapsed),
                    ref: this._handleTimeZonesRef,
                  },
                  a.createElement(
                    "div",
                    {
                      className: Ie.inline,
                      onClick: this._trackTimezonesButtonClick,
                    },
                    a.createElement(me, {
                      className: Ie.timezone,
                      withMenu: this.props.timezoneMenuEnabled,
                      ref: this._handleTimezoneButtonRef,
                    })
                  )
                ),
              this.props.sessionIdButtonEnabled &&
                this.state.symbolAllowsSessionButton &&
                this.state.intervalAllowsSessionButton &&
                a.createElement(
                  "div",
                  {
                    className: o(Ie.inline, e.session && Ie.collapsed),
                    ref: this._handleSessionsRef,
                  },
                  a.createElement(
                    "div",
                    { className: Ie.inline },
                    a.createElement(He, {
                      className: Ie.session,
                      withMenu: this.props.sessionIdButtonEnabled,
                    })
                  )
                ),
              a.createElement(
                "div",
                {
                  ref: this._handleSeparatorRef,
                  className: o(Ie.inline, e.separator && Ie.collapsed),
                },
                a.createElement(ge, null)
              ),
              a.createElement(
                Re.FragmentMap,
                { map: this._injector },
                !1,
                !1,
                !1,
                s &&
                  !l.enabled("fundamental_widget") &&
                  a.createElement(Ve, { className: Ie.icon }),
                i && a.createElement(Be, { className: Ie.item }),
                r && a.createElement(Oe, { className: Ie.item }),
                c &&
                  this.state.isFullscreenable &&
                  a.createElement(qe, {
                    className: Ie.icon,
                    mobileChangeLayoutEnabled:
                      this.props.mobileChangeLayoutEnabled,
                  }),
                !1
              )
            )
          );
        }
        updateTimezonesButton() {
          null !== this._timezoneButtonRef &&
            this._timezoneButtonRef.updateTimezonesButton();
        }
        resizeUI() {
          this._handleResize();
        }
        _trackRangeButtonClick(e) {
          0;
        }
        _trackTimezonesButtonClick() {
          $e();
        }
        _setStateWithResize(e) {
          Object.assign(this._layout, Ke),
            this._applyResizing(),
            this.setState(e, () => this._handleResize());
        }
        _applyResizing() {
          const { dateRangeMode: e, ...t } = this._layout;
          this._rangeExpanded &&
            this._rangeExpanded.classList.toggle(
              Ie.collapsed,
              "expanded" !== e
            ),
            this._rangeCollapsed &&
              this._rangeCollapsed.classList.toggle(
                Ie.collapsed,
                "collapsed" !== e
              ),
            Object.keys(t).forEach((e) => {
              const n = e,
                a = this._seriesComponents[n];
              a && a.classList.toggle(Ie.collapsed, t[n]);
            });
        }
        _isPreventPhoneLayoutButton() {
          return !1;
        }
      }
      et.contextType = Qe;
      const tt = {
        onContentBoxChanged: r.any,
        computeContentBox: r.any,
        chartWidget: r.any,
        chartApiInstance: r.any,
        chartWidgetCollection: r.any,
        resizerDetacher: r.any,
        availableTimeFrames: r.any,
      };
      class nt extends a.PureComponent {
        constructor(e) {
          super(e),
            (this._setActiveChart = (e) => {
              this._defineRegistry(e), this.setState({ chartWidget: e });
            });
          const t = this.props.chartWidgetCollection.activeChartWidget.value();
          (this.state = { chartWidget: t }), this._defineRegistry(t);
        }
        componentDidMount() {
          this.props.chartWidgetCollection.activeChartWidget.subscribe(
            this._setActiveChart
          );
        }
        componentWillUnmount() {
          this.props.chartWidgetCollection.activeChartWidget.unsubscribe(
            this._setActiveChart
          );
        }
        render() {
          const { chartWidget: e } = this.state;
          if (!e) return null;
          const { options: t } = this.props,
            n = {
              timeFramesWidgetEnabled: t.timeFramesWidgetEnabled,
              goToDateEnabled: t.timeFramesWidget.goToDateEnabled,
              timeWidgetEnabled: t.timeWidgetEnabled,
              timezoneMenuEnabled:
                t.timeWidget && t.timeWidget.timezoneMenuEnabled,
              sessionIdButtonEnabled: t.sessionIdButtonEnabled,
              backAdjustmentButtonEnabled: t.backAdjustmentButtonEnabled,
              settlementAsCloseButtonEnabled: t.settlementAsCloseButtonEnabled,
              adjustForDividendsButtonEnabled:
                t.adjustForDividendsButtonEnabled,
              logScaleButtonEnabled: t.logScaleButtonEnabled,
              percentageScaleButtonEnabled: t.percentageScaleButtonEnabled,
              autoScaleButtonEnabled: t.autoScaleButtonEnabled,
              fullscreenButtonEnabled: t.fullscreenButtonEnabled,
              mobileChangeLayoutEnabled: t.mobileChangeLayoutEnabled,
            };
          return a.createElement(
            _.RegistryProvider,
            { validation: tt, value: this._registry },
            a.createElement(et, { key: e.id(), ...n })
          );
        }
        _defineRegistry(e) {
          const {
              onContentBoxChanged: t,
              computeContentBox: n,
              chartApiInstance: a,
              chartWidgetCollection: s,
              options: { timeFramesWidgetEnabled: i, timeFramesWidget: r },
            } = this.props,
            o = i ? r.availableTimeFrames : void 0;
          this._registry = {
            onContentBoxChanged: t,
            computeContentBox: n,
            chartWidget: e,
            availableTimeFrames: o,
            chartApiInstance: a,
            chartWidgetCollection: s,
            resizerDetacher: e.getResizerDetacher(),
          };
        }
      }
      class at {
        constructor(e, t, n, i, r, o, l) {
          this._container = e;
          const c = a.createElement(nt, {
            onContentBoxChanged: t,
            computeContentBox: n,
            chartWidgetCollection: i,
            chartApiInstance: r,
            chartWidgetOptions: o,
            options: l,
          });
          s.render(c, e), e.setAttribute("data-initialized", "true");
        }
        destroy() {
          s.unmountComponentAtNode(this._container),
            this._container.removeAttribute("data-initialized");
        }
      }
    },
    10654: (e, t, n) => {
      "use strict";
      n.d(t, {
        validateRegistry: () => o,
        RegistryProvider: () => l,
        registryContextType: () => c,
      });
      var a = n(50959),
        s = n(19036),
        i = n.n(s);
      const r = a.createContext({});
      function o(e, t) {
        i().checkPropTypes(t, e, "context", "RegistryContext");
      }
      function l(e) {
        const { validation: t, value: n } = e;
        return o(n, t), a.createElement(r.Provider, { value: n }, e.children);
      }
      function c() {
        return r;
      }
    },
    12272: (e, t, n) => {
      "use strict";
      n.d(t, {
        translateSessionDescription: () => i,
        translateSessionShortDescription: () => o,
      });
      var a = n(44352);
      const s = new Map([
        ["Premarket", a.t(null, { context: "sessions" }, n(56935))],
        ["Postmarket", a.t(null, { context: "sessions" }, n(98801))],
        ["Regular Trading Hours", a.t(null, { context: "sessions" }, n(24380))],
        [
          "Extended Trading Hours",
          a.t(null, { context: "sessions" }, n(97442)),
        ],
        [
          "Electronic Trading Hours",
          a.t(null, { context: "sessions" }, n(75610)),
        ],
      ]);
      function i(e) {
        var t;
        return null !== (t = s.get(e)) && void 0 !== t ? t : e;
      }
      const r = new Map([
        ["Premarket", a.t(null, { context: "sessions" }, n(56137))],
        ["Postmarket", a.t(null, { context: "sessions" }, n(32929))],
        ["Regular Trading Hours", a.t(null, { context: "sessions" }, n(63798))],
        [
          "Extended Trading Hours",
          a.t(null, { context: "sessions" }, n(33021)),
        ],
        [
          "Electronic Trading Hours",
          a.t(null, { context: "sessions" }, n(33021)),
        ],
      ]);
      function o(e) {
        var t;
        return null !== (t = r.get(e)) && void 0 !== t ? t : e;
      }
    },
    79978: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>';
    },
    83863: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="none" stroke="currentColor" d="M11 1.5h3.5a2 2 0 0 1 2 2V7m0 5v2.5a2 2 0 0 1-2 2H11m-4 0H3.5a2 2 0 0 1-2-2V11m0-4V3.5a2 2 0 0 1 2-2H7"/></svg>';
    },
    21868: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><g fill="none" stroke="currentColor"><circle cx="3.5" cy="3.5" r="2"/><circle cx="10.5" cy="10.5" r="2"/><path stroke-linecap="square" d="M9.5 1.5l-5 11"/></g></svg>';
    },
    39750: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>';
    },
    69311: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>';
    },
    90752: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M5.5 13v-2.5m8.5 11h6.5a2 2 0 0 0 2-2v-9m-17 0v-2c0-1.1.9-2 2-2h13a2 2 0 0 1 2 2v2m-17 0h17"/><path fill="currentColor" d="M10 4h1v4h-1V4zM17 4h1v4h-1V4z"/><path stroke="currentColor" d="M4 18.5h7.5m0 0L8 22m3.5-3.5L8 15"/></svg>';
    },
    15270: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M1.5 8V6.5m7.5 9h5.5a2 2 0 0 0 2-2v-7m-15 0v-2c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v2m-15 0h15"/><path fill="currentColor" d="M5 1h1v3H5V1zM12 1h1v3h-1V1z"/><path stroke="currentColor" d="M0 12.5h7.5m0 0L4 16m3.5-3.5L4 9"/></svg>';
    },
    38219: (e) => {
      e.exports = {
        ar: ["تعديل"],
        ca_ES: ["aj"],
        cs: "adj",
        de: ["Anp."],
        el: "adj",
        en: "adj",
        es: ["aj"],
        fa: "adj",
        fr: "adj",
        he_IL: ["התאם"],
        hu_HU: "adj",
        id_ID: ["penyesuaian"],
        it: ["adg"],
        ja: ["調整"],
        ko: ["조정"],
        ms_MY: ["laras"],
        nl_NL: "adj",
        pl: "adj",
        pt: ["ajustes"],
        ro: "adj",
        ru: ["коррект."],
        sv: "adj",
        th: "adj",
        tr: ["dzlt"],
        vi: ["đ.chỉnh"],
        zh: ["调整"],
        zh_TW: ["調整"],
      };
    },
    53457: (e) => {
      e.exports = {
        ar: "b-adj",
        ca_ES: "b-adj",
        cs: "b-adj",
        de: "b-adj",
        el: "b-adj",
        en: "b-adj",
        es: "b-adj",
        fa: "b-adj",
        fr: "b-adj",
        he_IL: "b-adj",
        hu_HU: "b-adj",
        id_ID: "b-adj",
        it: ["b-adg"],
        ja: "b-adj",
        ko: "b-adj",
        ms_MY: "b-adj",
        nl_NL: "b-adj",
        pl: "b-adj",
        pt: "b-adj",
        ro: "b-adj",
        ru: ["корр"],
        sv: "b-adj",
        th: "b-adj",
        tr: "b-adj",
        vi: "b-adj",
        zh: ["b-调整"],
        zh_TW: ["b-調整"],
      };
    },
    17077: (e) => {
      e.exports = {
        ar: ["ضبط"],
        ca_ES: "set",
        cs: "set",
        de: ["setzen"],
        el: "set",
        en: "set",
        es: "set",
        fa: "set",
        fr: ["fixer"],
        he_IL: ["הגדר"],
        hu_HU: "set",
        id_ID: ["SET"],
        it: "set",
        ja: "set",
        ko: ["셋"],
        ms_MY: "set",
        nl_NL: "set",
        pl: ["ustaw"],
        pt: ["definir"],
        ro: "set",
        ru: ["расч.цена"],
        sv: ["ställ in"],
        th: "set",
        tr: "set",
        vi: "set",
        zh: ["清算价"],
        zh_TW: ["清算價"],
      };
    },
    99247: (e) => {
      e.exports = {
        ar: ["تلقائي"],
        ca_ES: "auto",
        cs: ["automatické"],
        de: "auto",
        el: ["αυτοματο"],
        en: "auto",
        es: "auto",
        fa: ["خودکار"],
        fr: ["automatique"],
        he_IL: ["אוטומטי"],
        hu_HU: "auto",
        id_ID: "auto",
        it: "auto",
        ja: ["自動"],
        ko: ["자동"],
        ms_MY: "auto",
        nl_NL: "auto",
        pl: "auto",
        pt: "auto",
        ro: "auto",
        ru: ["авто"],
        sv: "auto",
        th: ["อัตโนมัติ"],
        tr: ["otomatik"],
        vi: ["tự động"],
        zh: ["自动"],
        zh_TW: ["自動"],
      };
    },
    885: (e) => {
      e.exports = {
        ar: ["لوغاريتمي"],
        ca_ES: "log",
        cs: "log",
        de: "log",
        el: "log",
        en: "log",
        es: "log",
        fa: "log",
        fr: "log",
        he_IL: ["לוג"],
        hu_HU: "log",
        id_ID: "log",
        it: "log",
        ja: ["ログスケール"],
        ko: ["로그"],
        ms_MY: "log",
        nl_NL: "log",
        pl: "log",
        pt: "log",
        ro: "log",
        ru: ["лог"],
        sv: ["logg"],
        th: ["ล็อก"],
        tr: "log",
        vi: "log",
        zh: "log",
        zh_TW: "log",
      };
    },
    33021: (e) => {
      e.exports = {
        ar: "ETH",
        ca_ES: ["HTE"],
        cs: "ETH",
        de: "ETH",
        el: "ETH",
        en: "ETH",
        es: ["HTE"],
        fa: "ETH",
        fr: "ETH",
        he_IL: "ETH",
        hu_HU: "ETH",
        id_ID: "ETH",
        it: ["EXT"],
        ja: ["時間外"],
        ko: "ETH",
        ms_MY: "ETH",
        nl_NL: "ETH",
        pl: "ETH",
        pt: "ETH",
        ro: "ETH",
        ru: ["Расш."],
        sv: "ETH",
        th: "ETH",
        tr: "ETH",
        vi: "ETH",
        zh: "ETH",
        zh_TW: "ETH",
      };
    },
    75610: (e) => {
      e.exports = {
        ar: ["ساعات التداول الإلكتروني"],
        ca_ES: ["Horari de trading electrònic"],
        cs: "Electronic trading hours",
        de: ["Elektronische Handelszeiten"],
        el: "Electronic trading hours",
        en: "Electronic trading hours",
        es: ["Horario de trading electrónico"],
        fa: "Electronic trading hours",
        fr: ["Horaires de trading électronique"],
        he_IL: ["שעות מסחר אלקטרוניות"],
        hu_HU: "Electronic trading hours",
        id_ID: ["Jam Trading Elektronik"],
        it: ["Orari di trading estesi"],
        ja: ["電子取引時間"],
        ko: ["전자 거래 시간"],
        ms_MY: ["Jam Dagangan Elektronik"],
        nl_NL: "Electronic trading hours",
        pl: ["Godziny handlu elektronicznego"],
        pt: ["Horário de pregão eletrônico"],
        ro: ["Electronic Trading Hours"],
        ru: ["Электронная торговая сессия"],
        sv: ["Elektroniska handelstimmar"],
        th: ["ชั่วโมงการซื้อขายทางอิเล็กทรอนิกส์"],
        tr: ["Elektronik işlem saatleri"],
        vi: ["Giờ giao dịch điện tử"],
        zh: ["电子交易时间"],
        zh_TW: ["電子交易時間"],
      };
    },
    97442: (e) => {
      e.exports = {
        ar: ["ساعات التداول المُمددة"],
        ca_ES: ["Horari ampliat de trading"],
        cs: "Extended trading hours",
        de: ["Verlängerte Handelszeit"],
        el: "Extended trading hours",
        en: "Extended trading hours",
        es: ["Horario ampliado de trading"],
        fa: "Extended trading hours",
        fr: ["Horaires de trading étendus"],
        he_IL: ["שעות מסחר מורחבות"],
        hu_HU: ["Bővített kereskedési órák"],
        id_ID: ["Jam trading perpanjangan"],
        it: ["Orari di trading estesi"],
        ja: ["時間外取引"],
        ko: ["확장거래시간"],
        ms_MY: ["Waktu dagangan dilanjutkan"],
        nl_NL: "Extended trading hours",
        pl: ["Rozszerzone godziny handlu"],
        pt: ["Horário de Negociação Estendido"],
        ro: "Extended trading hours",
        ru: ["Торговые данные вне сессии"],
        sv: ["Förlängda handelstider"],
        th: ["ยืดชั่วโมงการเทรด"],
        tr: ["Genişletilmiş işlem saatleri"],
        vi: ["Ngoài giờ giao dịch"],
        zh: ["延长交易时段"],
        zh_TW: ["延長交易時段"],
      };
    },
    32929: (e) => {
      e.exports = {
        ar: ["بعد"],
        ca_ES: ["posterior"],
        cs: "POST",
        de: ["post"],
        el: "POST",
        en: "POST",
        es: ["posterior"],
        fa: "POST",
        fr: ["post"],
        he_IL: ["מאוחר"],
        hu_HU: "POST",
        id_ID: ["pasca"],
        it: ["post"],
        ja: ["アフター"],
        ko: "POST",
        ms_MY: ["post"],
        nl_NL: "POST",
        pl: ["post"],
        pt: ["PÓS"],
        ro: ["post"],
        ru: ["пост"],
        sv: ["efter"],
        th: ["หลัง"],
        tr: ["SONRA"],
        vi: ["SAU"],
        zh: ["后"],
        zh_TW: ["後"],
      };
    },
    56137: (e) => {
      e.exports = {
        ar: ["قبل"],
        ca_ES: ["PREVI"],
        cs: "PRE",
        de: ["pre"],
        el: "PRE",
        en: "PRE",
        es: ["PREVIO"],
        fa: "PRE",
        fr: ["pré"],
        he_IL: ["טרום"],
        hu_HU: "PRE",
        id_ID: ["pra"],
        it: ["pre"],
        ja: ["プレ"],
        ko: ["프리"],
        ms_MY: ["pre"],
        nl_NL: "PRE",
        pl: ["pre"],
        pt: ["PRÉ"],
        ro: ["pre"],
        ru: ["пре"],
        sv: ["för"],
        th: ["ก่อน"],
        tr: ["ÖNCE"],
        vi: ["TRC"],
        zh: ["前"],
        zh_TW: ["前"],
      };
    },
    98801: (e) => {
      e.exports = {
        ar: ["ما بعد الإغلاق"],
        ca_ES: ["Postmercat"],
        cs: "Postmarket",
        de: ["Nach der Markteröffnung"],
        el: "Postmarket",
        en: "Postmarket",
        es: "Postmarket",
        fa: "Postmarket",
        fr: ["Post-marché"],
        he_IL: ["מסחר מאוחר"],
        hu_HU: "Postmarket",
        id_ID: ["Pasca pasar"],
        it: "Postmarket",
        ja: ["アフターマーケット"],
        ko: ["포스트마켓"],
        ms_MY: ["Pasca pasaran"],
        nl_NL: "Postmarket",
        pl: "Postmarket",
        pt: "Postmarket",
        ro: "Postmarket",
        ru: ["Постмаркет"],
        sv: ["Eftermarknads"],
        th: ["โพสต์มาร์เก็ต"],
        tr: ["Piyasa-sonrası"],
        vi: ["Sau khi đóng cửa"],
        zh: ["盘后"],
        zh_TW: ["盤後"],
      };
    },
    56935: (e) => {
      e.exports = {
        ar: ["ما قبل الافتتاح"],
        ca_ES: ["Premercat"],
        cs: "Premarket",
        de: ["Vor der Markteröffnung"],
        el: "Premarket",
        en: "Premarket",
        es: "Premarket",
        fa: "Premarket",
        fr: ["Pré-marché"],
        he_IL: ["טרום מסחר"],
        hu_HU: "Premarket",
        id_ID: ["Pra pasar"],
        it: "Premarket",
        ja: ["プレマーケット"],
        ko: ["프리마켓"],
        ms_MY: ["Pra pasaran"],
        nl_NL: "Premarket",
        pl: "Premarket",
        pt: ["Pré-market"],
        ro: "Premarket",
        ru: ["Премаркет"],
        sv: ["Förmarknad"],
        th: ["การซื้อขายล่วงหน้าในตลาด"],
        tr: ["Piyasa-öncesi"],
        vi: ["Trước giờ mở cửa"],
        zh: ["盘前"],
        zh_TW: ["盤前"],
      };
    },
    63798: (e) => {
      e.exports = {
        ar: ["ساعات التداول العادية"],
        ca_ES: ["HTH"],
        cs: "RTH",
        de: "RTH",
        el: "RTH",
        en: "RTH",
        es: ["HTH"],
        fa: "RTH",
        fr: "RTH",
        he_IL: "RTH",
        hu_HU: "RTH",
        id_ID: "RTH",
        it: ["STD"],
        ja: ["通常"],
        ko: "RTH",
        ms_MY: "RTH",
        nl_NL: "RTH",
        pl: "RTH",
        pt: "RTH",
        ro: "RTH",
        ru: ["рег"],
        sv: "RTH",
        th: "RTH",
        tr: "RTH",
        vi: "RTH",
        zh: "RTH",
        zh_TW: "RTH",
      };
    },
    24380: (e) => {
      e.exports = {
        ar: ["ساعات التداول العادية"],
        ca_ES: ["Horari de trading habitual"],
        cs: "Regular trading hours",
        de: ["Reguläre Handelszeiten"],
        el: "Regular trading hours",
        en: "Regular trading hours",
        es: ["Horario de trading habitual"],
        fa: "Regular trading hours",
        fr: ["Horaires de trading régulier"],
        he_IL: ["שעות מסחר רגילות"],
        hu_HU: "Regular trading hours",
        id_ID: ["Jam Trading Reguler"],
        it: ["Orari di trading standard"],
        ja: ["通常取引時間"],
        ko: ["정규 거래 시간"],
        ms_MY: ["Jam dagangan biasa"],
        nl_NL: "Regular trading hours",
        pl: ["Regularne godziny handlu"],
        pt: ["Horário regular de negociação"],
        ro: ["Regular Trading Hours"],
        ru: ["Регулярная торговая сессия"],
        sv: ["Vanliga handelstimmar"],
        th: ["เวลาซื้อขายปกติ"],
        tr: ["Normal işlem saatleri"],
        vi: ["Giờ giao dịch thông thường"],
        zh: ["常规交易时间"],
        zh_TW: ["常規交易時間"],
      };
    },
    9994: (e) => {
      e.exports = {
        ar: ["تعديل البيانات لأرباح الأسهم"],
        ca_ES: ["Ajusta dades dels dividends"],
        cs: "Adjust data for dividends",
        de: ["Daten für Dividenden anpassen"],
        el: "Adjust data for dividends",
        en: "Adjust data for dividends",
        es: ["Ajustar datos de los dividendos"],
        fa: "Adjust data for dividends",
        fr: ["Ajuster les données pour les dividendes"],
        he_IL: ["התאם נתונים לדיבידנדים"],
        hu_HU: "Adjust data for dividends",
        id_ID: ["Sesuaikan data untuk dividen"],
        it: ["Adegua i dati a seconda dei dividendi"],
        ja: ["配当でデータを調整"],
        ko: ["배당에 따른 데이터 조정"],
        ms_MY: ["Laras data untuk dividen"],
        nl_NL: "Adjust data for dividends",
        pl: ["Dopasuj dane według dywidend"],
        pt: ["Ajustar dados de dividendos"],
        ro: "Adjust data for dividends",
        ru: ["Корректировать данные на дивиденды"],
        sv: ["Justera data för utdelning"],
        th: ["ปรับเปลี่ยนข้อมูลเนื่องจากเงินปันผล"],
        tr: ["Verileri temettülere göre düzelt"],
        vi: ["Điều chỉnh dữ liệu cho Cổ tức"],
        zh: ["调整股息数据"],
        zh_TW: ["調整股息數據"],
      };
    },
    10989: (e) => {
      e.exports = {
        ar: ["ضبط لتغييرات العقود"],
        ca_ES: ["Ajusta els canvis dels contractes"],
        cs: "Adjust for contract changes",
        de: ["Veränderungen der Kontraktgrößen und Verfalltage"],
        el: "Adjust for contract changes",
        en: "Adjust for contract changes",
        es: ["Ajustar los cambios de los contratos"],
        fa: "Adjust for contract changes",
        fr: ["Ajustement pour les changements de contrat"],
        he_IL: ["התאם לשינויים בחוזה"],
        hu_HU: "Adjust for contract changes",
        id_ID: ["Penyesuaian untuk perubahan kontrak"],
        it: ["Incorpora variazioni dovute al cambio di contratto"],
        ja: ["限月の切り替えを調整"],
        ko: ["컨트랙트 변경 조절"],
        ms_MY: ["Laraskan untuk perubahan-perubahan kontrak"],
        nl_NL: "Adjust for contract changes",
        pl: ["Dostosuj do zmian w kontrakcie"],
        pt: ["Ajustes para mudanças no contrato"],
        ro: "Adjust for contract changes",
        ru: ["Корректировать с учётом изменений контрактов"],
        sv: ["Förändringar i avtalens storlek och datum för upphörande"],
        th: ["ปรับตามการเปลี่ยนแปลงสัญญา"],
        tr: ["Sözleşme değişiklikleri için ayarlama"],
        vi: ["Điều chỉnh để thay đổi hợp đồng"],
        zh: ["根据合约变更调整"],
        zh_TW: ["調整合約變更"],
      };
    },
    369: (e) => {
      e.exports = {
        ar: ["الذهاب إلى"],
        ca_ES: ["Anar a"],
        cs: "Go to",
        de: ["Gehe zu"],
        el: "Go to",
        en: "Go to",
        es: ["Ir a"],
        fa: ["برو به"],
        fr: ["Aller à"],
        he_IL: ["עבור ל"],
        hu_HU: ["Ugrás ide:"],
        id_ID: ["Menuju ke"],
        it: ["Vai a"],
        ja: ["移動"],
        ko: ["가기"],
        ms_MY: ["Pergi ke"],
        nl_NL: "Go to",
        pl: ["Idź do..."],
        pt: ["Ir para"],
        ro: "Go to",
        ru: ["Перейти к дате"],
        sv: ["Hoppa till"],
        th: ["ไปที่"],
        tr: ["Tarihe git"],
        vi: ["Đến"],
        zh: ["前往到"],
        zh_TW: ["前往到"],
      };
    },
    41421: (e) => {
      e.exports = {
        ar: [
          "ساعات التداول المُمددة متاحة فقط على النطاقات الصغرى خلال اليوم للرسوم البيانية",
        ],
        ca_ES: [
          "L'horari ampliat només està disponible per a gràfics intradia",
        ],
        cs: "Extended Hours is available only for intraday charts",
        de: [
          "Verlängerte Handelszeiten sind nur für Intraday-Charts verfügbar",
        ],
        el: "Extended Hours is available only for intraday charts",
        en: "Extended Hours is available only for intraday charts",
        es: [
          "El horario ampliado solo se encuentra disponible para gráficos intradía",
        ],
        fa: "Extended Hours is available only for intraday charts",
        fr: [
          "L'option Horaires étendus est disponible uniquement pour les graphiques intrajournaliers",
        ],
        he_IL: ["שעות מורחבות זמינות רק עבור גרפים תוך-יומיים"],
        hu_HU: "Extended Hours is available only for intraday charts",
        id_ID: ["Jam Perpanjangan hanya tersedia bagi chart intrahari"],
        it: [
          "Gli orari di negoziazione estesi sono disponibili solo per i grafici intraday",
        ],
        ja: ["時間外取引の機能は、イントラデイのチャートでのみ利用できます"],
        ko: ["확장시간은 인트라데이 차트에서만 가능합니다"],
        ms_MY: ["Waktu Dilanjutkan hanya tersedia untuk carta intra hari"],
        nl_NL: "Extended Hours is available only for intraday charts",
        pl: ["Sesja rozszerzona dostępna jest wyłącznie dla wykresów intraday"],
        pt: [
          "O Horário Estendido está disponível apenas para gráficos intradiário",
        ],
        ro: "Extended Hours is available only for intraday charts",
        ru: [
          "Функция расширенных торговых часов доступна только для внутридневных графиков",
        ],
        sv: ["Utökade timmar är endast tillgänglig för intradagsdiagram"],
        th: ["ชั่วโมงที่เพิ่มเติมขึ้นมาใช้ได้สำหรับกราฟแบบระหว่างวันเท่านั้น"],
        tr: ["Uzatılmış saatler sadece gün içi grafiklerde kullanılabilir"],
        vi: [
          "Tính năng Thời gian Giao dịch Ngoài giờ chỉ có sẵn cho các biểu đồ trong ngày",
        ],
        zh: ["延长时段仅适用于日内图表"],
        zh_TW: ["延長時段僅適用於日內圖表"],
      };
    },
    1217: (e) => {
      e.exports = {
        ar: ["يتم ضبط بيانات الرمز الرئيسي لتوزيعات الأرباح فقط"],
        ca_ES: ["Les dades del símbol principal s'ajusten només als dividends"],
        cs: "Main symbol data is adjusted for dividends only",
        de: [
          "Die Daten des Hauptsymbols sind nur für die Dividenden angepasst",
        ],
        el: "Main symbol data is adjusted for dividends only",
        en: "Main symbol data is adjusted for dividends only",
        es: [
          "Los datos del símbolo principal se ajustan solo a los dividendos",
        ],
        fa: "Main symbol data is adjusted for dividends only",
        fr: [
          "Les données du symbole principal sont ajustées pour les dividendes uniquement",
        ],
        he_IL: ["הנתונים של הסימול הראשי מותאמים לדיבידנדים בלבד"],
        hu_HU: "Main symbol data is adjusted for dividends only",
        id_ID: ["Data simbol utama disesuaikan hanya untuk deviden"],
        it: [
          "I dati del simbolo principale sono adeguati solo per lo stacco dei dividendi",
        ],
        ja: ["メインシンボルのデータは配当のみで調整されています。"],
        ko: ["메인 심볼 데이터는 디비든드에 대해서만 조정됩니다"],
        ms_MY: ["Data utama simbol adalah diselaraskan untuk dividend sahaja"],
        nl_NL: "Main symbol data is adjusted for dividends only",
        pl: ["Dane głównego symbolu są dostosowywane tylko do dywidend"],
        pt: [
          "Os dados do símbolo principal são ajustados apenas para dividendos",
        ],
        ro: "Main symbol data is adjusted for dividends only",
        ru: [
          "Данные по основному инструменту корректируются только для дивидендов",
        ],
        sv: ["Uppgifterna om huvudsymbolen justeras endast för utdelningar."],
        th: ["ข้อมูลสัญลักษณ์หลักถูกปรับเป็นเงินปันผลเท่านั้น"],
        tr: ["Ana sembol verileri yalnızca temettüler için ayarlanır"],
        vi: ["Dữ liệu của mã chính chỉ được điều chỉnh cho cổ tức"],
        zh: ["主要商品数据仅针对股息进行调整"],
        zh_TW: ["主要商品數據僅針對股息進行調整"],
      };
    },
    18540: (e) => {
      e.exports = {
        ar: ["يتم ضبط بيانات الرمز الرئيسي للتقسيمات فقط"],
        ca_ES: ["Les dades del símbol principal s'ajusten només als splits"],
        cs: "Main symbol data is adjusted for splits only",
        de: ["Die Daten des Hauptsymbols werden nur für Splits angepasst"],
        el: "Main symbol data is adjusted for splits only",
        en: "Main symbol data is adjusted for splits only",
        es: ["Los datos del símbolo principal se ajustan solo a los splits"],
        fa: "Main symbol data is adjusted for splits only",
        fr: [
          "Les données du symbole principal sont ajustées pour les fractions uniquement",
        ],
        he_IL: ["הנתונים של הסימול הראשי מותאמים לספליטים בלבד"],
        hu_HU: "Main symbol data is adjusted for splits only",
        id_ID: ["Data simbol utama disesuaikan hanya untuk pecahan."],
        it: [
          "I dati del simbolo principale sono adeguati solo per i frazionamenti",
        ],
        ja: ["メインシンボルのデータは株式分割でのみ調整されています。"],
        ko: ["메인 심볼 데이터는 스플릿에 대해서만 조정됩니다"],
        ms_MY: [
          "Data utama simbol adalah diselaraskan untuk pembahagian sahaja",
        ],
        nl_NL: "Main symbol data is adjusted for splits only",
        pl: ["Dane głównego symbolu są dostosowywane tylko do podziałów"],
        pt: [
          "Os dados do símbolo principal são ajustados apenas para desdobramentos",
        ],
        ro: "Main symbol data is adjusted for splits only",
        ru: [
          "Данные по основному инструменту корректируются только для сплитов",
        ],
        sv: ["Uppgifter om huvudsymbolen justeras endast för splits."],
        th: ["ข้อมูลสัญลักษณ์หลักถูกปรับสำหรับการแยกเท่านั้น"],
        tr: ["Ana sembol verileri yalnızca bölmeler için ayarlanır"],
        vi: ["Dữ liệu của mã chính chỉ được điều chỉnh để tách"],
        zh: ["主要商品数据仅针对拆分进行调整"],
        zh_TW: ["主要商品數據僅針對拆分進行調整"],
      };
    },
    44794: (e) => {
      e.exports = {
        ar: ["الجلسات"],
        ca_ES: "Sessions",
        cs: "Sessions",
        de: "Sessions",
        el: "Sessions",
        en: "Sessions",
        es: ["Sesiones"],
        fa: "Sessions",
        fr: "Sessions",
        he_IL: ["סשנים"],
        hu_HU: "Sessions",
        id_ID: ["Sesi"],
        it: ["Sessioni"],
        ja: ["セッション"],
        ko: ["세션"],
        ms_MY: ["Sesi-sesi"],
        nl_NL: "Sessions",
        pl: ["Sesje"],
        pt: ["Sessões"],
        ro: "Sessions",
        ru: ["Сессии"],
        sv: ["Sessioner"],
        th: ["เซสชั่น"],
        tr: ["Oturum"],
        vi: ["Phiên"],
        zh: ["交易时段"],
        zh_TW: ["交易時段"],
      };
    },
    98948: (e) => {
      e.exports = {
        ar: ["تبديل تكبير الرسم البياني"],
        ca_ES: ["Alterna maximitzar gràfic"],
        cs: "Toggle Maximize Chart",
        de: ["Auf maximierten Chart umschalten"],
        el: "Toggle Maximize Chart",
        en: "Toggle Maximize Chart",
        es: ["Alternar maximizar gráfico"],
        fa: "Toggle Maximize Chart",
        fr: ["Agrandir le graphique"],
        he_IL: ["החלף לגרף מקסימלי"],
        hu_HU: ["Maximális Chat Kiterjesztése"],
        id_ID: ["Toggle Memperbesar Chart"],
        it: ["Espandi/riduci grafico"],
        ja: ["チャート最大化切り替え"],
        ko: ["차트최대화토글"],
        ms_MY: ["Carta Memaksimumkan Togol"],
        nl_NL: "Toggle Maximize Chart",
        pl: ["Maksymalizuj wykres"],
        pt: ["Alternar para gráfico maximizado"],
        ro: "Toggle Maximize Chart",
        ru: ["Развернуть/свернуть график"],
        sv: ["Slå på/av maximering av diagram"],
        th: ["สลับเป็นชาร์ตขนาดใหญ่ที่สุด"],
        tr: ["Grafik Maksimize Değiştir"],
        vi: ["Chuyển đổi Tối đa hoá Biểu đồ"],
        zh: ["切换为最大化图表"],
        zh_TW: ["切換最大化圖表"],
      };
    },
    60879: (e) => {
      e.exports = {
        ar: ["نطاق قياس تلقائي"],
        ca_ES: ["Alterna l'escala automàtica"],
        cs: ["Přepnout na Auto Stupnici"],
        de: ["Auf automatische Skalierung umschalten"],
        el: ["Αυτόματη κλίμακα"],
        en: "Toggle Auto Scale",
        es: ["Alternar escala automática"],
        fa: "Toggle Auto Scale",
        fr: ["Mise à l'échelle automatique"],
        he_IL: ["הפעל/כבה קנה מידה אוטומטיות"],
        hu_HU: ["Váltás Automata Méretezés"],
        id_ID: ["Toggle Skala Otomatis"],
        it: ["Seleziona/deseleziona scala automatica"],
        ja: ["自動スケール切り替え"],
        ko: ["자동눈금토글"],
        ms_MY: ["Skala Auto Togol"],
        nl_NL: ["Schakel autoschaal"],
        pl: ["Włącz skalę automatyczną"],
        pt: ["Alternar Para Escala Automática"],
        ro: "Toggle Auto Scale",
        ru: ["Автоматический масштаб вкл/выкл"],
        sv: ["Växla skala automatiskt"],
        th: ["สลับเป็นสเกลอัตโนมัติ"],
        tr: ["Otomatik Ölçeklendirmeyi Aç/Kapat"],
        vi: ["Chuyển đổi Tỷ lệ tự động"],
        zh: ["切换为自动坐标"],
        zh_TW: ["切換為自動刻度"],
      };
    },
    21329: (e) => {
      e.exports = {
        ar: ["نطاق قياس لوغاريتمي"],
        ca_ES: ["Alterna l'escala logarítmica"],
        cs: ["Přepnout Log Měřítko"],
        de: ["Auf logarithmische Skalierung umschalten"],
        el: ["Λογαριθμική κλίμακα"],
        en: "Toggle Log Scale",
        es: ["Alternar escala logarítmica"],
        fa: "Toggle Log Scale",
        fr: ["Mise à l'échelle logarithmique"],
        he_IL: ["הפעל/כבה סקאלה לוגריתמית"],
        hu_HU: ["Váltás Log Skála"],
        id_ID: ["Toggle Skala Log"],
        it: ["Seleziona/Deseleziona scala logaritmica"],
        ja: ["ログスケール切り替え"],
        ko: ["로그눈금토글"],
        ms_MY: ["Skala Log Togol"],
        nl_NL: ["Schakel log schaal"],
        pl: ["Przełącz na skalę logarytmiczną"],
        pt: ["Alternar Para Escala Logarítmica"],
        ro: "Toggle Log Scale",
        ru: ["Логарифмическая шкала вкл/выкл"],
        sv: ["Slå på/av Log-skala"],
        th: ["สลับเป็นมาตราแบบล๊อก"],
        tr: ["Logaritmik Ölçeklendirmeyi Aç/Kapat"],
        vi: ["Chuyển đổi Quy mô Đăng nhập"],
        zh: ["切换为对数坐标"],
        zh_TW: ["切換為對數刻度"],
      };
    },
    43737: (e) => {
      e.exports = {
        ar: ["نطاق قياس النسبة المئوية"],
        ca_ES: ["Altarna percentatge"],
        cs: ["Přepnout na Procenta"],
        de: ["Auf Prozent umschalten"],
        el: ["Ποσοστιαία κλίμακα"],
        en: "Toggle Percentage",
        es: ["Alternar porcentaje"],
        fa: "Toggle Percentage",
        fr: ["Echelle en pourcentage"],
        he_IL: ["החלף אחוזים"],
        hu_HU: ["Váltás Százalék"],
        id_ID: ["Toggle Persentase"],
        it: ["Seleziona/Deseleziona percentuale"],
        ja: ["％スケール切り替え"],
        ko: ["백분율토글"],
        ms_MY: ["Peratusan Togol"],
        nl_NL: ["Schakel percentage"],
        pl: ["Włącz skalę procentową"],
        pt: ["Alternar Para Percentagem"],
        ro: "Toggle Percentage",
        ru: ["Процентная шкала вкл/выкл"],
        sv: ["Slå på/av procentsats"],
        th: ["สลับเป็นเปอร์เซ็นต์"],
        tr: ["Yüzde Olarak Değiştir"],
        vi: ["Chuyển đồi Phần trăm"],
        zh: ["切换为百分比坐标"],
        zh_TW: ["切換為百分比"],
      };
    },
    87492: (e) => {
      e.exports = {
        ar: ["توقيت"],
        ca_ES: ["Zona horària"],
        cs: ["Časové pásmo"],
        de: ["Zeitzone"],
        el: "Timezone",
        en: "Timezone",
        es: ["Zona horaria"],
        fa: "Timezone",
        fr: ["Fuseau horaire"],
        he_IL: ["אזור זמן"],
        hu_HU: ["Időzóna"],
        id_ID: ["Zona waktu"],
        it: ["Fuso orario"],
        ja: ["タイムゾーン"],
        ko: ["타임존"],
        ms_MY: ["Zon Waktu"],
        nl_NL: "Timezone",
        pl: ["Strefa czasowa"],
        pt: ["Fuso Horário"],
        ro: "Timezone",
        ru: ["Часовой пояс"],
        sv: ["Tidszon"],
        th: ["เขตเวลา"],
        tr: ["Saat Dilimi"],
        vi: ["Múi giờ"],
        zh: ["时区"],
        zh_TW: ["時區"],
      };
    },
    23500: (e) => {
      e.exports = {
        ar: ["استخدم التسوية في أقرب وقت على الفاصل الزمني اليومي"],
        ca_ES: ["Fer servir la liquidació com a tancament en intervals diaris"],
        cs: "Use settlement as close on daily interval",
        de: ["Settlement als Schlusskurs im Tagesintervall verwenden"],
        el: "Use settlement as close on daily interval",
        en: "Use settlement as close on daily interval",
        es: ["Utilizar la liquidación como cierre en intervalos diarios"],
        fa: "Use settlement as close on daily interval",
        fr: ["Utiliser le règlement comme proche de l'intervalle quotidien"],
        he_IL: ["השתמש בסליקה כסגירה באינטרוול יומי"],
        hu_HU: "Use settlement as close on daily interval",
        id_ID: ["Gunakan penyelesaian sedekat mungkin pada interval harian"],
        it: ["Usa il settlement come chiusura nel giornaliero"],
        ja: ["日足で清算価格を終値として利用"],
        ko: ["데일리 클로즈를 청산가로 쓰기"],
        ms_MY: ["Gunakan penyelesaian sebagai penutup pada selang masa harian"],
        nl_NL: "Use settlement as close on daily interval",
        pl: ["Użyj ceny rozliczenia jako dziennej ceny zamknięcia"],
        pt: ["Usar a liquidação como fechamento no intervalo diário"],
        ro: "Use settlement as close on daily interval",
        ru: [
          "Использовать расчетную цену для цены закрытия на дневном интервале",
        ],
        sv: ["Använd avräkning så nära daglig intervallängd"],
        th: ["ใช้การชำระราคาที่ใกล้เคียงกันในแต่ละวัน"],
        tr: ["Ödemeyi günlük aralıklarla yakın olarak kullanma"],
        vi: ["Sử dụng giải quyết càng gần vào khoảng thời gian hàng ngày"],
        zh: ["使用结算价作为每日周期的收盘价"],
        zh_TW: ["使用結算價做為日圖的收盤價"],
      };
    },
    8877: (e) => {
      e.exports = {
        ar: "ext",
        ca_ES: "ext",
        cs: "ext",
        de: ["verl."],
        el: "ext",
        en: "ext",
        es: "ext",
        fa: "ext",
        fr: "ext",
        he_IL: ["הרחב"],
        hu_HU: "ext",
        id_ID: ["perp"],
        it: ["est"],
        ja: ["時間外"],
        ko: ["확장"],
        ms_MY: ["dilanjutkan"],
        nl_NL: "ext",
        pl: ["rozsz"],
        pt: ["est"],
        ro: "ext",
        ru: ["расш"],
        sv: ["utökad"],
        th: ["ต่อ"],
        tr: ["ek"],
        vi: ["mở rộng"],
        zh: ["延时"],
        zh_TW: ["延時"],
      };
    },
  },
]);
