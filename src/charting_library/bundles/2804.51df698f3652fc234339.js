(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [2804],
  {
    97754: (e, t) => {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var s = typeof n;
              if ("string" === s || "number" === s) e.push(n);
              else if (Array.isArray(n) && n.length) {
                var i = o.apply(null, n);
                i && e.push(i);
              } else if ("object" === s)
                for (var a in n) r.call(n, a) && n[a] && e.push(a);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function () {
                return o;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    46587: (e) => {
      e.exports = {
        wrapper: "wrapper-bUw_gKIQ",
        input: "input-bUw_gKIQ",
        box: "box-bUw_gKIQ",
        icon: "icon-bUw_gKIQ",
        noOutline: "noOutline-bUw_gKIQ",
        "intent-danger": "intent-danger-bUw_gKIQ",
        check: "check-bUw_gKIQ",
        dot: "dot-bUw_gKIQ",
      };
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
    76946: (e) => {
      e.exports = {
        loaderWrap: "loaderWrap-aELfTl0o",
        big: "big-aELfTl0o",
        loader: "loader-aELfTl0o",
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
    10852: (e) => {
      e.exports = {
        row: "row-HxlnbRyI",
        line: "line-HxlnbRyI",
        hint: "hint-HxlnbRyI",
      };
    },
    69655: (e) => {
      e.exports = { menu: "menu-Oq10ZTMF" };
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
    81956: (e) => {
      e.exports = { separator: "separator-blm_vtaP" };
    },
    8794: (e) => {
      e.exports = {
        button: "button-cC4UjNEF",
        disabled: "disabled-cC4UjNEF",
        active: "active-cC4UjNEF",
        hidden: "hidden-cC4UjNEF",
      };
    },
    70673: (e, t, n) => {
      "use strict";
      n.d(t, { CheckboxInput: () => c });
      var r = n(50959),
        o = n(97754),
        s = n(9745),
        i = n(65890),
        a = n(46587),
        l = n.n(a);
      function c(e) {
        const t = o(l().box, l()[`intent-${e.intent}`], {
            [l().check]: !Boolean(e.indeterminate),
            [l().dot]: Boolean(e.indeterminate),
            [l().noOutline]: -1 === e.tabIndex,
          }),
          n = o(l().wrapper, e.className);
        return r.createElement(
          "span",
          { className: n, title: e.title, style: e.style },
          r.createElement("input", {
            id: e.id,
            tabIndex: e.tabIndex,
            className: l().input,
            type: "checkbox",
            name: e.name,
            checked: e.checked,
            disabled: e.disabled,
            value: e.value,
            autoFocus: e.autoFocus,
            role: e.role,
            onChange: function () {
              e.onChange && e.onChange(e.value);
            },
            ref: e.reference,
            "aria-required": e["aria-required"],
          }),
          r.createElement(
            "span",
            { className: t },
            r.createElement(s.Icon, { icon: i, className: l().icon })
          )
        );
      }
    },
    26996: (e, t, n) => {
      "use strict";
      n.d(t, { Loader: () => c });
      var r,
        o = n(50959),
        s = n(97754),
        i = n(74991),
        a = n(33319),
        l = n.n(a);
      !(function (e) {
        (e[(e.Initial = 0)] = "Initial"),
          (e[(e.Appear = 1)] = "Appear"),
          (e[(e.Active = 2)] = "Active");
      })(r || (r = {}));
      class c extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._stateChangeTimeout = null),
            (this.state = { state: r.Initial });
        }
        render() {
          const {
              className: e,
              color: t = "black",
              size: n = "medium",
              staticPosition: r,
            } = this.props,
            i = s(l().item, l()[t], l()[n]);
          return o.createElement(
            "span",
            {
              className: s(
                l().loader,
                r && l().static,
                this._getStateClass(),
                e
              ),
            },
            o.createElement("span", { className: i }),
            o.createElement("span", { className: i }),
            o.createElement("span", { className: i })
          );
        }
        componentDidMount() {
          this.setState({ state: r.Appear }),
            (this._stateChangeTimeout = setTimeout(() => {
              this.setState({ state: r.Active });
            }, 2 * i.dur));
        }
        componentWillUnmount() {
          this._stateChangeTimeout &&
            (clearTimeout(this._stateChangeTimeout),
            (this._stateChangeTimeout = null));
        }
        _getStateClass() {
          switch (this.state.state) {
            case r.Initial:
              return l()["loader-initial"];
            case r.Appear:
              return l()["loader-appear"];
            default:
              return "";
          }
        }
      }
    },
    29332: (e, t, n) => {
      "use strict";
      n.d(t, { ContextMenu: () => k, OverlapContextMenu: () => w });
      var r = n(50959),
        o = n(97754),
        s = n.n(o),
        i = n(86431),
        a = n(27317),
        l = n(76594),
        c = n(9481),
        u = n(82757),
        p = n(37558),
        h = n(90692),
        d = n(81956);
      function m(e) {
        return r.createElement("li", { className: d.separator });
      }
      var f = n(23829),
        b = n(41590),
        v = n(59064);
      function E(e) {
        const { action: t } = e,
          [n, o] = (0, r.useState)(() => t.getState()),
          [s, i] = (0, r.useState)(!1),
          a = !!n.subItems.length,
          l = a && s;
        return (
          (0, r.useEffect)(() => {
            const e = () => o(t.getState());
            return (
              t.onUpdate().subscribe(null, e),
              () => {
                t.onUpdate().unsubscribe(null, e);
              }
            );
          }, []),
          r.createElement(
            f.ContextMenuItem,
            {
              ...n,
              onClick: function (e) {
                if (n.disabled || e.defaultPrevented) return;
                if (a) return void i(!0);
                n.doNotCloseOnClick || (0, v.globalCloseMenu)();
                t.execute();
              },
              isLoading: n.loading,
              isHovered: l,
            },
            l &&
              r.createElement(
                b.Drawer,
                { onClose: c },
                r.createElement(x, {
                  items: n.subItems,
                  parentAction: t,
                  closeNested: c,
                })
              )
          )
        );
        function c(e) {
          e && e.preventDefault(), i(!1);
        }
      }
      var _ = n(54627),
        y = n(66493);
      function x(e) {
        const { items: t, parentAction: n, closeNested: o } = e,
          s =
            !Boolean(n) &&
            t.every(
              (e) =>
                !Boolean(
                  "separator" !== e.type &&
                    (e.getState().icon || e.getState().checkable)
                )
            );
        return r.createElement(
          _.EmptyIconsContext.Provider,
          { value: s },
          r.createElement(
            "ul",
            null,
            n &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(f.ContextMenuItem, {
                  label: n.getState().label,
                  isTitle: !0,
                  active: !1,
                  disabled: !1,
                  subItems: [],
                  checkable: !1,
                  checked: !1,
                  doNotCloseOnClick: !1,
                  icon: y,
                  onClick: o,
                }),
                r.createElement(m, null)
              ),
            t.map((e) => {
              switch (e.type) {
                case "action":
                  return r.createElement(E, { key: e.id, action: e });
                case "separator":
                  return r.createElement(m, { key: e.id });
              }
            })
          )
        );
      }
      const g = r.createContext(null);
      var C = n(69655);
      class k extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._menuRef = r.createRef()),
            (this._handleRequestUpdate = () => {
              this.update();
            }),
            (this._handleClose = () => {
              this.props.onClose && this.props.onClose();
            }),
            (this._handleOutsideClickClose = (e) => {
              const { doNotCloseOn: t, onClose: n } = this.props;
              !n || (void 0 !== t && t.contains(e.target)) || n();
            }),
            (this._handleFocusOnOpen = () => {
              var e, t;
              (null === (e = this.props.menuElementReference) || void 0 === e
                ? void 0
                : e.current) &&
                this.props.takeFocus &&
                (null === (t = this.props.menuElementReference) ||
                  void 0 === t ||
                  t.current.focus({ preventScroll: !0 }));
            }),
            (this.state = {});
        }
        render() {
          const {
            isOpened: e,
            onClose: t,
            items: n,
            doNotCloseOn: o,
            menuStatName: i,
            parentStatName: d,
            takeFocus: m,
            ...f
          } = this.props;
          return e
            ? r.createElement(
                p.DrawerManager,
                null,
                r.createElement(c.KeyboardDocumentListener, {
                  keyCode: 27,
                  eventType: "keyup",
                  handler: this._handleClose,
                }),
                r.createElement(
                  h.MatchMedia,
                  { rule: "screen and (max-width: 430px)" },
                  (t) =>
                    this._isDrawer(t)
                      ? r.createElement(
                          g.Provider,
                          { value: { type: "drawer" } },
                          r.createElement(
                            b.Drawer,
                            {
                              onClose: this._handleClose,
                              position: "Bottom",
                              "data-name": f["data-name"],
                            },
                            r.createElement(x, { items: n })
                          )
                        )
                      : r.createElement(
                          g.Provider,
                          { value: { type: "menu" } },
                          r.createElement(
                            l.OutsideEvent,
                            {
                              handler: this._handleOutsideClickClose,
                              mouseDown: !0,
                              touchStart: !0,
                              reference: this.props.menuElementReference,
                            },
                            (t) =>
                              r.createElement(
                                a.Menu,
                                {
                                  ...f,
                                  reference: t,
                                  className: s()(C.menu, "context-menu"),
                                  onClose: this._handleClose,
                                  noMomentumBasedScroll: !0,
                                  ref: this._menuRef,
                                  tabIndex: m ? -1 : void 0,
                                  onOpen: this._handleFocusOnOpen,
                                },
                                r.createElement(u.ActionsTable, {
                                  items: n,
                                  menuStatName: i,
                                  parentStatName: d,
                                  parentIsOpened: e,
                                  onRequestUpdate: this._handleRequestUpdate,
                                })
                              )
                          )
                        )
                )
              )
            : null;
        }
        update() {
          this._menuRef.current && this._menuRef.current.update();
        }
        _isDrawer(e) {
          return void 0 === this.props.mode ? e : "drawer" === this.props.mode;
        }
      }
      const w = (0, i.makeOverlapable)(k);
    },
    99025: (e, t, n) => {
      "use strict";
      n.d(t, { Hint: () => a });
      var r = n(50959),
        o = n(97754),
        s = n.n(o),
        i = n(68550);
      function a(e) {
        const { text: t = "", className: n } = e;
        return r.createElement("span", { className: s()(i.shortcut, n) }, t);
      }
    },
    23829: (e, t, n) => {
      "use strict";
      n.d(t, { ContextMenuItem: () => m });
      var r = n(50959),
        o = n(97754),
        s = n.n(o),
        i = n(9745),
        a = n(26996),
        l = n(54627),
        c = n(99025),
        u = n(39750),
        p = n(79978),
        h = n(69311),
        d = n(3651);
      function m(e) {
        const {
            isTitle: t,
            isLoading: n,
            isHovered: o,
            active: m,
            checkable: f,
            disabled: b,
            checked: v,
            icon: E,
            iconChecked: _,
            hint: y,
            subItems: x,
            label: g,
            onClick: C,
            children: k,
            toolbox: w,
            jsxLabel: S,
            size: I = "normal",
          } = e,
          N = (0, r.useContext)(l.EmptyIconsContext),
          M = !!x.length;
        return n
          ? r.createElement(
              "li",
              { className: s()(d.item, d.loading, d[I]) },
              r.createElement(a.Loader, null)
            )
          : r.createElement(
              "li",
              {
                className: s()(
                  d.item,
                  d.interactive,
                  t && d.title,
                  b && d.disabled,
                  o && d.hovered,
                  m && d.active,
                  N && d.emptyIcons,
                  d[I]
                ),
                onClick: C,
              },
              r.createElement(i.Icon, {
                className: s()(d.icon),
                icon: (function () {
                  if (f && v) return _ || E || u;
                  return E;
                })(),
              }),
              r.createElement(
                "span",
                { className: s()(d.label) },
                null != S ? S : g
              ),
              !!w &&
                r.createElement(i.Icon, {
                  onClick: function () {
                    w && w.action();
                  },
                  className: d.remove,
                  icon: h,
                }),
              !M &&
                y &&
                r.createElement(c.Hint, { className: d.shortcut, text: y }),
              M && r.createElement(i.Icon, { className: d.nested, icon: p }),
              k
            );
      }
    },
    54627: (e, t, n) => {
      "use strict";
      n.d(t, { EmptyIconsContext: () => r });
      const r = n(50959).createContext(!1);
    },
    9481: (e, t, n) => {
      "use strict";
      n.d(t, { KeyboardDocumentListener: () => o });
      var r = n(50959);
      class o extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleKeyDown = (e) => {
              e.keyCode === this.props.keyCode && this.props.handler(e);
            });
        }
        componentDidMount() {
          document.addEventListener(
            this.props.eventType || "keydown",
            this._handleKeyDown,
            !1
          );
        }
        componentWillUnmount() {
          document.removeEventListener(
            this.props.eventType || "keydown",
            this._handleKeyDown,
            !1
          );
        }
        render() {
          return null;
        }
      }
    },
    76594: (e, t, n) => {
      "use strict";
      n.d(t, { OutsideEvent: () => o });
      var r = n(58095);
      function o(e) {
        const { children: t, ...n } = e;
        return t((0, r.useOutsideEvent)(n));
      }
    },
    86431: (e, t, n) => {
      "use strict";
      n.d(t, { makeOverlapable: () => s });
      var r = n(50959),
        o = n(65718);
      function s(e) {
        return class extends r.PureComponent {
          render() {
            const { isOpened: t, root: n } = this.props;
            if (!t) return null;
            const s = r.createElement(e, { ...this.props, zIndex: 150 });
            return "parent" === n ? s : r.createElement(o.Portal, null, s);
          }
        };
      }
    },
    96040: (e, t, n) => {
      "use strict";
      n.d(t, { RemoveButton: () => u });
      var r = n(44352),
        o = n(50959),
        s = n(97754),
        i = n(9745),
        a = n(33765),
        l = n(8794);
      const c = { remove: r.t(null, void 0, n(34596)) };
      function u(e) {
        const {
          className: t,
          isActive: n,
          onClick: r,
          onMouseDown: u,
          title: p,
          hidden: h,
          "data-name": d = "remove-button",
          ...m
        } = e;
        return o.createElement(i.Icon, {
          ...m,
          "data-name": d,
          className: s(
            l.button,
            "apply-common-tooltip",
            n && l.active,
            h && l.hidden,
            t
          ),
          icon: a,
          onClick: r,
          onMouseDown: u,
          title: p || c.remove,
        });
      }
    },
    95257: (e, t) => {
      "use strict";
      var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler"),
        a = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        c = Symbol.for("react.forward_ref"),
        u = Symbol.for("react.suspense"),
        p = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy"),
        d = Symbol.iterator;
      var m = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        f = Object.assign,
        b = {};
      function v(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = n || m);
      }
      function E() {}
      function _(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = n || m);
      }
      (v.prototype.isReactComponent = {}),
        (v.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (v.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (E.prototype = v.prototype);
      var y = (_.prototype = new E());
      (y.constructor = _), f(y, v.prototype), (y.isPureReactComponent = !0);
      var x = Array.isArray,
        g = Object.prototype.hasOwnProperty,
        C = { current: null },
        k = { key: !0, ref: !0, __self: !0, __source: !0 };
      function w(e, t, r) {
        var o,
          s = {},
          i = null,
          a = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (i = "" + t.key),
          t))
            g.call(t, o) && !k.hasOwnProperty(o) && (s[o] = t[o]);
        var l = arguments.length - 2;
        if (1 === l) s.children = r;
        else if (1 < l) {
          for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
          s.children = c;
        }
        if (e && e.defaultProps)
          for (o in (l = e.defaultProps)) void 0 === s[o] && (s[o] = l[o]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: a,
          props: s,
          _owner: C.current,
        };
      }
      function S(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n;
      }
      var I = /\/+/g;
      function N(e, t) {
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
      function M(e, t, o, s, i) {
        var a = typeof e;
        ("undefined" !== a && "boolean" !== a) || (e = null);
        var l = !1;
        if (null === e) l = !0;
        else
          switch (a) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case n:
                case r:
                  l = !0;
              }
          }
        if (l)
          return (
            (i = i((l = e))),
            (e = "" === s ? "." + N(l, 0) : s),
            x(i)
              ? ((o = ""),
                null != e && (o = e.replace(I, "$&/") + "/"),
                M(i, t, o, "", function (e) {
                  return e;
                }))
              : null != i &&
                (S(i) &&
                  (i = (function (e, t) {
                    return {
                      $$typeof: n,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    i,
                    o +
                      (!i.key || (l && l.key === i.key)
                        ? ""
                        : ("" + i.key).replace(I, "$&/") + "/") +
                      e
                  )),
                t.push(i)),
            1
          );
        if (((l = 0), (s = "" === s ? "." : s + ":"), x(e)))
          for (var c = 0; c < e.length; c++) {
            var u = s + N((a = e[c]), c);
            l += M(a, t, o, u, i);
          }
        else if (
          ((u = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
              ? e
              : null;
          })(e)),
          "function" == typeof u)
        )
          for (e = u.call(e), c = 0; !(a = e.next()).done; )
            l += M((a = a.value), t, o, (u = s + N(a, c++)), i);
        else if ("object" === a)
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
      function O(e, t, n) {
        if (null == e) return e;
        var r = [],
          o = 0;
        return (
          M(e, r, "", "", function (e) {
            return t.call(n, e, o++);
          }),
          r
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
      var L = { current: null },
        T = { transition: null },
        P = {
          ReactCurrentDispatcher: L,
          ReactCurrentBatchConfig: T,
          ReactCurrentOwner: C,
        };
      (t.Children = {
        map: O,
        forEach: function (e, t, n) {
          O(
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
            O(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            O(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!S(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        },
      }),
        (t.Component = v),
        (t.Fragment = o),
        (t.Profiler = i),
        (t.PureComponent = _),
        (t.StrictMode = s),
        (t.Suspense = u),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P),
        (t.cloneElement = function (e, t, r) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
            );
          var o = f({}, e.props),
            s = e.key,
            i = e.ref,
            a = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (a = C.current)),
              void 0 !== t.key && (s = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var l = e.type.defaultProps;
            for (c in t)
              g.call(t, c) &&
                !k.hasOwnProperty(c) &&
                (o[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) o.children = r;
          else if (1 < c) {
            l = Array(c);
            for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
            o.children = l;
          }
          return {
            $$typeof: n,
            type: e.type,
            key: s,
            ref: i,
            props: o,
            _owner: a,
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
            }).Provider = { $$typeof: a, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = w),
        (t.createFactory = function (e) {
          var t = w.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: c, render: e };
        }),
        (t.isValidElement = S),
        (t.lazy = function (e) {
          return {
            $$typeof: h,
            _payload: { _status: -1, _result: e },
            _init: R,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = T.transition;
          T.transition = {};
          try {
            e();
          } finally {
            T.transition = t;
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }),
        (t.useCallback = function (e, t) {
          return L.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return L.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return L.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return L.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return L.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return L.current.useImperativeHandle(e, t, n);
        }),
        (t.useInsertionEffect = function (e, t) {
          return L.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return L.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return L.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return L.current.useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return L.current.useRef(e);
        }),
        (t.useState = function (e) {
          return L.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return L.current.useSyncExternalStore(e, t, n);
        }),
        (t.useTransition = function () {
          return L.current.useTransition();
        }),
        (t.version = "18.2.0");
    },
    50959: (e, t, n) => {
      "use strict";
      e.exports = n(95257);
    },
    82757: (e, t, n) => {
      "use strict";
      n.d(t, { ActionsTable: () => M });
      var r = n(50959),
        o = n(10852);
      function s(e) {
        return r.createElement(
          "tr",
          { className: o.row },
          r.createElement(
            "td",
            null,
            r.createElement("div", { className: o.line })
          ),
          r.createElement(
            "td",
            null,
            r.createElement("div", { className: o.line }),
            e.hint
              ? r.createElement("div", { className: o.hint }, e.hint)
              : null
          )
        );
      }
      var i = n(50151),
        a = n(97754),
        l = n.n(a),
        c = n(70673),
        u = n(49483),
        p = n(32563);
      var h = n(96040),
        d = n(36189),
        m = n(99025),
        f = n(25812),
        b = n(80802),
        v = n(14665),
        E = n(68550);
      class _ extends r.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleMouseOver = (e) => {
              (function (e) {
                const t = e.sourceCapabilities;
                let n = t && t.firesTouchEvents;
                return void 0 === n && (n = p.touch), n;
              })(e.nativeEvent) ||
                (this.props.onMouseOver && this.props.onMouseOver());
            }),
            (this._handleClickToolbox = (e) => {
              e.stopPropagation(),
                this.props.onClickToolbox && this.props.onClickToolbox();
            });
        }
        render() {
          const {
              hasSubItems: e,
              shortcutHint: t,
              hint: n,
              invisibleHotkey: o,
              favourite: s,
              theme: i = E,
              size: l = "normal",
            } = this.props,
            c =
              this.props.checkable && this.props.checkboxInput
                ? "label"
                : "div";
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              "tr",
              {
                className: a(
                  i.item,
                  !this.props.noInteractive && i.interactive,
                  this.props.hovered && i.hovered,
                  this.props.disabled && i.disabled,
                  this.props.active && i.active,
                  this.props.selected && i.selected,
                  i[l]
                ),
                onClick: this.props.onClick,
                onMouseOver: this._handleMouseOver,
                ref: this.props.reference,
                "data-action-name": this.props.actionName,
              },
              void 0 !== s &&
                r.createElement(
                  "td",
                  null,
                  r.createElement(d.FavoriteButton, {
                    className: i.favourite,
                    isFilled: s,
                    onClick: this.props.onFavouriteClick,
                  })
                ),
              r.createElement(
                "td",
                { className: a(i.iconCell), "data-icon-cell": !0 },
                this._icon(i)
              ),
              r.createElement(
                "td",
                { className: i.contentCell },
                r.createElement(
                  c,
                  { className: i.content },
                  r.createElement(
                    "span",
                    {
                      className: a(i.label, this.props.checked && i.checked),
                      "data-label": !0,
                    },
                    this.props.label
                  ),
                  this._toolbox(i),
                  e &&
                    r.createElement("span", {
                      className: i.arrowIcon,
                      dangerouslySetInnerHTML: { __html: v },
                      "data-submenu-arrow": !0,
                    }),
                  !e &&
                    t &&
                    !u.CheckMobile.any() &&
                    r.createElement(m.Hint, {
                      className: a(o && i.invisibleHotkey),
                      text: t,
                    }),
                  !e && !t && n && r.createElement(m.Hint, { text: n })
                )
              )
            ),
            r.createElement(
              "tr",
              { className: i.subMenu },
              r.createElement("td", null, this.props.children)
            )
          );
        }
        _icon(e) {
          if (this.props.checkable) {
            if (this.props.checkboxInput)
              return r.createElement(c.CheckboxInput, {
                className: a(e.icon, e.checkboxInput),
                checked: this.props.checked,
              });
            if (this.props.checked) {
              const t = !this.props.icon && !this.props.iconChecked,
                n = this.props.iconChecked || this.props.icon || b;
              return r.createElement("span", {
                className: a(e.icon, t && e.checkmark),
                dangerouslySetInnerHTML: { __html: n },
                "data-icon-checkmark": t,
              });
            }
            return this.props.icon
              ? r.createElement("span", {
                  className: e.icon,
                  dangerouslySetInnerHTML: { __html: this.props.icon },
                })
              : r.createElement("span", { className: e.icon });
          }
          return this.props.icon
            ? r.createElement("span", {
                className: e.icon,
                dangerouslySetInnerHTML: { __html: this.props.icon },
              })
            : null;
        }
        _toolbox(e) {
          return this.props.toolbox
            ? r.createElement(
                "span",
                {
                  className: a(
                    e.toolbox,
                    this.props.showToolboxOnHover && e.showToolboxOnHover
                  ),
                  onClick: this._handleClickToolbox,
                  "data-toolbox": !0,
                },
                this._renderToolboxContent()
              )
            : null;
        }
        _renderToolboxContent() {
          return this.props.toolbox &&
            this.props.toolbox.type === f.ToolboxType.Delete
            ? r.createElement(h.RemoveButton, {
                onClick: this.props.toolbox.action,
              })
            : null;
        }
      }
      var y = n(29332),
        x = n(59064),
        g = n(51768),
        C = n(80142);
      var k = n(14758),
        w = n(26996),
        S = n(76946);
      function I(e) {
        const { size: t = "normal" } = e;
        return r.createElement(_, {
          size: t,
          label: r.createElement(
            "div",
            { className: l()(S.loaderWrap, S[t]) },
            r.createElement(w.Loader, { className: S.loader })
          ),
          noInteractive: !0,
          onMouseOver: e.onMouseOver,
        });
      }
      class N extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._itemRef = null),
            (this._menuElementRef = r.createRef()),
            (this._menuRef = null),
            (this._handleClick = (e) => {
              e.isDefaultPrevented() ||
                this.state.disabled ||
                (this._hasSubItems()
                  ? this._showSubMenu()
                  : (this.state.doNotCloseOnClick || (0, x.globalCloseMenu)(),
                    this.props.action.execute(),
                    this._trackEvent(),
                    this.props.onExecute &&
                      this.props.onExecute(this.props.action)));
            }),
            (this._handleClickToolbox = () => {
              (0, x.globalCloseMenu)();
            }),
            (this._handleItemMouseOver = () => {
              this._showSubMenu(), this._setCurrentContextValue();
            }),
            (this._handleMenuMouseOver = () => {
              this._setCurrentContextValue();
            }),
            (this._showSubMenu = () => {
              this.props.onShowSubMenu(this.props.action);
            }),
            (this._calcSubMenuPos = (e) =>
              (function (e, t, n = { x: 0, y: 10 }) {
                if (t) {
                  const {
                      left: n,
                      right: r,
                      top: o,
                    } = t.getBoundingClientRect(),
                    s = document.documentElement.clientWidth,
                    i = { x: n - e, y: o },
                    a = { x: r, y: o };
                  return (0, C.isRtl)() ? (n <= e ? a : i) : s - r >= e ? a : i;
                }
                return n;
              })(e, this._itemRef)),
            (this._updateState = (e) => {
              this.setState(e.getState());
            }),
            (this._setItemRef = (e) => {
              this._itemRef = e;
            }),
            (this._handleMenuRef = (e) => {
              this._menuRef = e;
            }),
            (this._registerSubmenu = () => {
              var e;
              return null === (e = this.context) || void 0 === e
                ? void 0
                : e.registerSubmenu(
                    this.props.action.id,
                    (e) =>
                      (0, i.ensureNotNull)(this._itemRef).contains(e) ||
                      (null !== this._menuElementRef.current &&
                        this._menuElementRef.current.contains(e))
                  );
            }),
            (this.state = { ...this.props.action.getState() });
        }
        componentDidMount() {
          this.props.action.onUpdate().subscribe(this, this._updateState),
            this.state.subItems.length &&
              (this._unsubscribe = this._registerSubmenu()),
            this.props.reference &&
              (this._itemRef = this.props.reference.current);
        }
        componentDidUpdate(e, t) {
          var n, r, o;
          t.loading !== this.state.loading &&
            (null === (r = (n = this.props).onRequestUpdate) ||
              void 0 === r ||
              r.call(n)),
            0 === t.subItems.length &&
              this.state.subItems.length > 0 &&
              (this._unsubscribe = this._registerSubmenu()),
            t.subItems.length > 0 &&
              0 === this.state.subItems.length &&
              (null === (o = this._unsubscribe) ||
                void 0 === o ||
                o.call(this)),
            t.subItems !== this.state.subItems &&
              null !== this._menuRef &&
              this._menuRef.update();
        }
        componentWillUnmount() {
          this.props.action.onUpdate().unsubscribe(this, this._updateState),
            this._unsubscribe && this._unsubscribe();
        }
        render() {
          var e, t, n;
          const o =
              null !== (e = this.state.jsxLabel) && void 0 !== e
                ? e
                : this.state.label,
            s = (
              null === (t = this.context) || void 0 === t ? void 0 : t.current
            )
              ? this.context.current === this.props.action.id
              : this.props.isSubMenuOpened;
          return this.state.loading
            ? r.createElement(I, { size: this.state.size })
            : r.createElement(
                _,
                {
                  theme: this.props.theme,
                  reference:
                    null !== (n = this.props.reference) && void 0 !== n
                      ? n
                      : this._setItemRef,
                  onClick: this._handleClick,
                  onClickToolbox: this._handleClickToolbox,
                  onMouseOver: this._handleItemMouseOver,
                  hovered: s,
                  hasSubItems: this._hasSubItems(),
                  actionName: this.state.name,
                  checkboxInput: this.props.checkboxInput,
                  selected: this.props.selected,
                  ...this.state,
                  label: o,
                },
                r.createElement(y.ContextMenu, {
                  isOpened: s,
                  items: this.state.subItems,
                  position: this._calcSubMenuPos,
                  menuStatName: this.props.menuStatName,
                  parentStatName: this._getStatName(),
                  menuElementReference: this._menuElementRef,
                  onMouseOver: this.state.subItems.length
                    ? this._handleMenuMouseOver
                    : void 0,
                  ref: this._handleMenuRef,
                })
              );
        }
        _setCurrentContextValue() {
          var e;
          this.state.subItems.length &&
            (null === (e = this.context) ||
              void 0 === e ||
              e.setCurrent(this.props.action.id));
        }
        _hasSubItems() {
          return this.state.subItems.length > 0;
        }
        _trackEvent() {
          const e = this._getStatName();
          (0, g.trackEvent)(
            "ContextMenuClick",
            this.props.menuStatName || "",
            e
          );
        }
        _getStatName() {
          return [this.props.parentStatName, this.state.statName]
            .filter((e) => Boolean(e))
            .join(".");
        }
      }
      N.contextType = k.SubmenuContext;
      class M extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._handleShowSubMenu = (e) => {
              const t = e.getState();
              this.setState({ showSubMenuOf: t.subItems.length ? e : void 0 });
            }),
            (this.state = {});
        }
        render() {
          return r.createElement(
            "table",
            null,
            r.createElement(
              "tbody",
              null,
              this.props.items.map((e) => this._item(e))
            )
          );
        }
        static getDerivedStateFromProps(e, t) {
          return !e.parentIsOpened && t.showSubMenuOf
            ? { showSubMenuOf: void 0 }
            : null;
        }
        _item(e) {
          switch (e.type) {
            case "separator":
              return r.createElement(s, { key: e.id, hint: e.getHint() });
            case "action":
              return r.createElement(N, {
                key: e.id,
                action: e,
                onShowSubMenu: this._handleShowSubMenu,
                isSubMenuOpened: this.state.showSubMenuOf === e,
                menuStatName: this.props.menuStatName,
                parentStatName: this.props.parentStatName,
                onRequestUpdate: this.props.onRequestUpdate,
              });
          }
        }
      }
    },
    65890: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>';
    },
    66493: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 20L11 14.5 16.5 9"/></svg>';
    },
    79978: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>';
    },
    80802: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" width="18" height="14"><path fill="currentColor" d="M6 11.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41-10.59 10.58z"/></svg>';
    },
    39750: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>';
    },
    33765: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
    },
    69311: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>';
    },
  },
]);
