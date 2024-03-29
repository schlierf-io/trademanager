(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [1075],
  {
    9790: (e) => {
      e.exports = {
        menuWrap: "menuWrap-biWYdsXC",
        isMeasuring: "isMeasuring-biWYdsXC",
        scrollWrap: "scrollWrap-biWYdsXC",
        momentumBased: "momentumBased-biWYdsXC",
        menuBox: "menuBox-biWYdsXC",
        isHidden: "isHidden-biWYdsXC",
      };
    },
    9745: (e, t, n) => {
      "use strict";
      n.d(t, { Icon: () => i });
      var s = n(50959);
      const i = s.forwardRef((e, t) => {
        const { icon: n = "", ...i } = e;
        return s.createElement("span", {
          ...i,
          ref: t,
          dangerouslySetInnerHTML: { __html: n },
        });
      });
    },
    99054: (e, t, n) => {
      "use strict";
      n.d(t, { setFixedBodyState: () => u });
      const s = (() => {
        let e;
        return () => {
          var t;
          if (void 0 === e) {
            const n = document.createElement("div"),
              s = n.style;
            (s.visibility = "hidden"),
              (s.width = "100px"),
              (s.msOverflowStyle = "scrollbar"),
              document.body.appendChild(n);
            const i = n.offsetWidth;
            n.style.overflow = "scroll";
            const o = document.createElement("div");
            (o.style.width = "100%"), n.appendChild(o);
            const r = o.offsetWidth;
            null === (t = n.parentNode) || void 0 === t || t.removeChild(n),
              (e = i - r);
          }
          return e;
        };
      })();
      function i(e, t, n) {
        null !== e && e.style.setProperty(t, n);
      }
      function o(e, t) {
        return getComputedStyle(e, null).getPropertyValue(t);
      }
      function r(e, t) {
        return parseInt(o(e, t));
      }
      let l = 0,
        a = !1;
      function u(e) {
        const { body: t } = document,
          n = t.querySelector(".widgetbar-wrap");
        if (e && 1 == ++l) {
          const e = o(t, "overflow"),
            l = r(t, "padding-right");
          "hidden" !== e.toLowerCase() &&
            t.scrollHeight > t.offsetHeight &&
            (i(n, "right", `${s()}px`),
            (t.style.paddingRight = `${l + s()}px`),
            (a = !0)),
            t.classList.add("i-no-scroll");
        } else if (
          !e &&
          l > 0 &&
          0 == --l &&
          (t.classList.remove("i-no-scroll"), a)
        ) {
          i(n, "right", "0px");
          let e = 0;
          0,
            t.scrollHeight <= t.clientHeight && (e -= s()),
            (t.style.paddingRight = (e < 0 ? 0 : e) + "px"),
            (a = !1);
        }
      }
    },
    58095: (e, t, n) => {
      "use strict";
      n.d(t, { useOutsideEvent: () => o });
      var s = n(50959),
        i = n(39640);
      function o(e) {
        const {
            click: t,
            mouseDown: n,
            touchEnd: o,
            touchStart: r,
            handler: l,
            reference: a,
            ownerDocument: u = document,
          } = e,
          c = (0, s.useRef)(null),
          d = (0, s.useRef)(new CustomEvent("timestamp").timeStamp);
        return (
          (0, s.useLayoutEffect)(() => {
            const e = { click: t, mouseDown: n, touchEnd: o, touchStart: r },
              s = a ? a.current : c.current;
            return (0, i.addOutsideEventListener)(d.current, s, l, u, e);
          }, [t, n, o, r, l]),
          a || c
        );
      }
    },
    90692: (e, t, n) => {
      "use strict";
      n.d(t, { MatchMedia: () => i });
      var s = n(50959);
      class i extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._handleChange = () => {
              this.forceUpdate();
            }),
            (this.state = { query: window.matchMedia(this.props.rule) });
        }
        componentDidMount() {
          this._subscribe(this.state.query);
        }
        componentDidUpdate(e, t) {
          this.state.query !== t.query &&
            (this._unsubscribe(t.query), this._subscribe(this.state.query));
        }
        componentWillUnmount() {
          this._unsubscribe(this.state.query);
        }
        render() {
          return this.props.children(this.state.query.matches);
        }
        static getDerivedStateFromProps(e, t) {
          return e.rule !== t.query.media
            ? { query: window.matchMedia(e.rule) }
            : null;
        }
        _subscribe(e) {
          e.addListener(this._handleChange);
        }
        _unsubscribe(e) {
          e.removeListener(this._handleChange);
        }
      }
    },
    64706: (e, t, n) => {
      "use strict";
      n.d(t, { MenuContext: () => s });
      const s = n(50959).createContext(null);
    },
    27317: (e, t, n) => {
      "use strict";
      n.d(t, { DEFAULT_MENU_THEME: () => _, Menu: () => v });
      var s = n(50959),
        i = n(97754),
        o = n.n(i),
        r = n(50151),
        l = n(91031),
        a = n(33933),
        u = n(50655),
        c = n(59064),
        d = n(88216),
        h = n(66141),
        p = n(14758),
        m = n(64706),
        f = n(9790);
      const _ = f;
      class v extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._containerRef = null),
            (this._scrollWrapRef = null),
            (this._raf = null),
            (this._scrollRaf = null),
            (this._scrollTimeout = void 0),
            (this._manager = new d.OverlapManager()),
            (this._hotkeys = null),
            (this._scroll = 0),
            (this._handleContainerRef = (e) => {
              (this._containerRef = e),
                this.props.reference &&
                  ("function" == typeof this.props.reference &&
                    this.props.reference(e),
                  "object" == typeof this.props.reference &&
                    (this.props.reference.current = e));
            }),
            (this._handleScrollWrapRef = (e) => {
              (this._scrollWrapRef = e),
                "function" == typeof this.props.scrollWrapReference &&
                  this.props.scrollWrapReference(e),
                "object" == typeof this.props.scrollWrapReference &&
                  (this.props.scrollWrapReference.current = e);
            }),
            (this._handleMeasure = ({
              callback: e,
              forceRecalcPosition: t,
            } = {}) => {
              var n, s, i, o, a, u, c, d, h, p, m, f;
              if (this.state.isMeasureValid && !t) return;
              const { position: _ } = this.props,
                v = (0, r.ensureNotNull)(this._containerRef);
              let g = v.getBoundingClientRect();
              const y = document.documentElement.clientHeight,
                C = document.documentElement.clientWidth,
                x =
                  null !== (n = this.props.closeOnScrollOutsideOffset) &&
                  void 0 !== n
                    ? n
                    : 0;
              let w = y - 0 - x;
              const b = g.height > w;
              if (b) {
                ((0, r.ensureNotNull)(this._scrollWrapRef).style.overflowY =
                  "scroll"),
                  (g = v.getBoundingClientRect());
              }
              const { width: W, height: M } = g,
                S = "function" == typeof _ ? _(W, M, y) : _,
                E =
                  null !==
                    (i =
                      null === (s = null == S ? void 0 : S.indentFromWindow) ||
                      void 0 === s
                        ? void 0
                        : s.left) && void 0 !== i
                    ? i
                    : 0,
                R =
                  C -
                  (null !== (o = S.overrideWidth) && void 0 !== o ? o : W) -
                  (null !==
                    (u =
                      null === (a = null == S ? void 0 : S.indentFromWindow) ||
                      void 0 === a
                        ? void 0
                        : a.right) && void 0 !== u
                    ? u
                    : 0),
                O = (0, l.clamp)(S.x, E, Math.max(E, R)),
                N =
                  (null !==
                    (d =
                      null === (c = null == S ? void 0 : S.indentFromWindow) ||
                      void 0 === c
                        ? void 0
                        : c.top) && void 0 !== d
                    ? d
                    : 0) + x,
                T =
                  y -
                  (null !== (h = S.overrideHeight) && void 0 !== h ? h : M) -
                  (null !==
                    (m =
                      null === (p = null == S ? void 0 : S.indentFromWindow) ||
                      void 0 === p
                        ? void 0
                        : p.bottom) && void 0 !== m
                    ? m
                    : 0);
              let P = (0, l.clamp)(S.y, N, Math.max(N, T));
              if (
                (S.forbidCorrectYCoord &&
                  P < S.y &&
                  ((w -= S.y - P), (P = S.y)),
                t &&
                  void 0 !== this.props.closeOnScrollOutsideOffset &&
                  S.y <= this.props.closeOnScrollOutsideOffset)
              )
                return void this._handleGlobalClose(!0);
              const D =
                null !== (f = S.overrideHeight) && void 0 !== f
                  ? f
                  : b
                  ? w
                  : void 0;
              this.setState(
                {
                  appearingMenuHeight: t ? this.state.appearingMenuHeight : D,
                  appearingMenuWidth: t
                    ? this.state.appearingMenuWidth
                    : S.overrideWidth,
                  appearingPosition: { x: O, y: P },
                  isMeasureValid: !0,
                },
                () => {
                  this._restoreScrollPosition(), e && e();
                }
              );
            }),
            (this._restoreScrollPosition = () => {
              const e = document.activeElement,
                t = (0, r.ensureNotNull)(this._containerRef);
              if (null !== e && t.contains(e))
                try {
                  e.scrollIntoView();
                } catch (e) {}
              else
                (0, r.ensureNotNull)(this._scrollWrapRef).scrollTop =
                  this._scroll;
            }),
            (this._resizeForced = () => {
              this.setState({
                appearingMenuHeight: void 0,
                appearingMenuWidth: void 0,
                appearingPosition: void 0,
                isMeasureValid: void 0,
              });
            }),
            (this._resize = () => {
              null === this._raf &&
                (this._raf = requestAnimationFrame(() => {
                  this.setState({
                    appearingMenuHeight: void 0,
                    appearingMenuWidth: void 0,
                    appearingPosition: void 0,
                    isMeasureValid: void 0,
                  }),
                    (this._raf = null);
                }));
            }),
            (this._handleGlobalClose = (e) => {
              this.props.onClose(e);
            }),
            (this._handleSlot = (e) => {
              this._manager.setContainer(e);
            }),
            (this._handleScroll = () => {
              this._scroll = (0, r.ensureNotNull)(
                this._scrollWrapRef
              ).scrollTop;
            }),
            (this._handleScrollOutsideEnd = () => {
              clearTimeout(this._scrollTimeout),
                (this._scrollTimeout = setTimeout(() => {
                  this._handleMeasure({ forceRecalcPosition: !0 });
                }, 80));
            }),
            (this._handleScrollOutside = (e) => {
              e.target !== this._scrollWrapRef &&
                (this._handleScrollOutsideEnd(),
                null === this._scrollRaf &&
                  (this._scrollRaf = requestAnimationFrame(() => {
                    this._handleMeasure({ forceRecalcPosition: !0 }),
                      (this._scrollRaf = null);
                  })));
            }),
            (this.state = {});
        }
        componentDidMount() {
          this._handleMeasure({ callback: this.props.onOpen });
          const { customCloseDelegate: e = c.globalCloseDelegate } = this.props;
          e.subscribe(this, this._handleGlobalClose),
            window.addEventListener("resize", this._resize);
          const t = null !== this.context;
          this._hotkeys ||
            t ||
            ((this._hotkeys = h.createGroup({ desc: "Popup menu" })),
            this._hotkeys.add({
              desc: "Close",
              hotkey: 27,
              handler: () => {
                this.props.onKeyboardClose && this.props.onKeyboardClose(),
                  this._handleGlobalClose();
              },
            })),
            this.props.repositionOnScroll &&
              window.addEventListener("scroll", this._handleScrollOutside, {
                capture: !0,
              });
        }
        componentDidUpdate() {
          this._handleMeasure();
        }
        componentWillUnmount() {
          const { customCloseDelegate: e = c.globalCloseDelegate } = this.props;
          e.unsubscribe(this, this._handleGlobalClose),
            window.removeEventListener("resize", this._resize),
            window.removeEventListener("scroll", this._handleScrollOutside, {
              capture: !0,
            }),
            this._hotkeys && (this._hotkeys.destroy(), (this._hotkeys = null)),
            null !== this._raf &&
              (cancelAnimationFrame(this._raf), (this._raf = null)),
            null !== this._scrollRaf &&
              (cancelAnimationFrame(this._scrollRaf), (this._scrollRaf = null)),
            this._scrollTimeout && clearTimeout(this._scrollTimeout);
        }
        render() {
          const {
              id: e,
              role: t,
              "aria-label": n,
              "aria-labelledby": i,
              "aria-activedescendant": r,
              "aria-hidden": l,
              children: c,
              minWidth: d,
              theme: h = f,
              className: _,
              maxHeight: v,
              onMouseOver: y,
              onMouseOut: C,
              onKeyDown: x,
              onFocus: w,
              onBlur: b,
            } = this.props,
            {
              appearingMenuHeight: W,
              appearingMenuWidth: M,
              appearingPosition: S,
              isMeasureValid: E,
            } = this.state;
          return s.createElement(
            m.MenuContext.Provider,
            { value: this },
            s.createElement(
              p.SubmenuHandler,
              null,
              s.createElement(
                u.SlotContext.Provider,
                { value: this._manager },
                s.createElement(
                  "div",
                  {
                    id: e,
                    role: t,
                    "aria-label": n,
                    "aria-labelledby": i,
                    "aria-activedescendant": r,
                    "aria-hidden": l,
                    className: o()(_, h.menuWrap, !E && h.isMeasuring),
                    style: {
                      height: W,
                      left: S && S.x,
                      minWidth: d,
                      position: "fixed",
                      top: S && S.y,
                      width: M,
                    },
                    "data-name": this.props["data-name"],
                    ref: this._handleContainerRef,
                    onScrollCapture: this.props.onScroll,
                    onContextMenu: a.preventDefaultForContextMenu,
                    tabIndex: this.props.tabIndex,
                    onMouseOver: y,
                    onMouseOut: C,
                    onKeyDown: x,
                    onFocus: w,
                    onBlur: b,
                  },
                  s.createElement(
                    "div",
                    {
                      className: o()(
                        h.scrollWrap,
                        !this.props.noMomentumBasedScroll && h.momentumBased
                      ),
                      style: {
                        overflowY: void 0 !== W ? "scroll" : "auto",
                        maxHeight: v,
                      },
                      onScrollCapture: this._handleScroll,
                      ref: this._handleScrollWrapRef,
                    },
                    s.createElement(g, { className: h.menuBox }, c)
                  )
                )
              ),
              s.createElement(u.Slot, { reference: this._handleSlot })
            )
          );
        }
        update(e) {
          e ? this._resizeForced() : this._resize();
        }
      }
      function g(e) {
        const t = (0, r.ensureNotNull)((0, s.useContext)(p.SubmenuContext)),
          n = s.useRef(null);
        return s.createElement(
          "div",
          {
            ref: n,
            className: e.className,
            onMouseOver: function (e) {
              if (
                !(
                  null !== t.current &&
                  e.target instanceof Node &&
                  ((s = e.target),
                  null === (i = n.current) || void 0 === i
                    ? void 0
                    : i.contains(s))
                )
              )
                return;
              var s, i;
              t.isSubmenuNode(e.target) || t.setCurrent(null);
            },
            "data-name": "menu-inner",
          },
          e.children
        );
      }
      v.contextType = p.SubmenuContext;
    },
    88216: (e, t, n) => {
      "use strict";
      n.d(t, { OverlapManager: () => o, getRootOverlapManager: () => l });
      var s = n(50151);
      class i {
        constructor() {
          this._storage = [];
        }
        add(e) {
          this._storage.push(e);
        }
        remove(e) {
          this._storage = this._storage.filter((t) => e !== t);
        }
        has(e) {
          return this._storage.includes(e);
        }
        getItems() {
          return this._storage;
        }
      }
      class o {
        constructor(e = document) {
          (this._storage = new i()),
            (this._windows = new Map()),
            (this._index = 0),
            (this._document = e),
            (this._container = e.createDocumentFragment());
        }
        setContainer(e) {
          const t = this._container,
            n = null === e ? this._document.createDocumentFragment() : e;
          !(function (e, t) {
            Array.from(e.childNodes).forEach((e) => {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
            });
          })(t, n),
            (this._container = n);
        }
        registerWindow(e) {
          this._storage.has(e) || this._storage.add(e);
        }
        ensureWindow(e, t = { position: "fixed", direction: "normal" }) {
          const n = this._windows.get(e);
          if (void 0 !== n) return n;
          this.registerWindow(e);
          const s = this._document.createElement("div");
          if (
            ((s.style.position = t.position),
            (s.style.zIndex = this._index.toString()),
            (s.dataset.id = e),
            void 0 !== t.index)
          ) {
            const e = this._container.childNodes.length;
            if (t.index >= e) this._container.appendChild(s);
            else if (t.index <= 0)
              this._container.insertBefore(s, this._container.firstChild);
            else {
              const e = this._container.childNodes[t.index];
              this._container.insertBefore(s, e);
            }
          } else
            "reverse" === t.direction
              ? this._container.insertBefore(s, this._container.firstChild)
              : this._container.appendChild(s);
          return this._windows.set(e, s), ++this._index, s;
        }
        unregisterWindow(e) {
          this._storage.remove(e);
          const t = this._windows.get(e);
          void 0 !== t &&
            (null !== t.parentElement && t.parentElement.removeChild(t),
            this._windows.delete(e));
        }
        getZindex(e) {
          const t = this.ensureWindow(e);
          return parseInt(t.style.zIndex || "0");
        }
        moveToTop(e) {
          if (this.getZindex(e) !== this._index) {
            this.ensureWindow(e).style.zIndex = (++this._index).toString();
          }
        }
        removeWindow(e) {
          this.unregisterWindow(e);
        }
      }
      const r = new WeakMap();
      function l(e = document) {
        const t = e.getElementById("overlap-manager-root");
        if (null !== t) return (0, s.ensureDefined)(r.get(t));
        {
          const t = new o(e),
            n = (function (e) {
              const t = e.createElement("div");
              return (
                (t.style.position = "absolute"),
                (t.style.zIndex = (150).toString()),
                (t.style.top = "0px"),
                (t.style.left = "0px"),
                (t.id = "overlap-manager-root"),
                t
              );
            })(e);
          return r.set(n, t), t.setContainer(n), e.body.appendChild(n), t;
        }
      }
    },
    29197: (e, t, n) => {
      "use strict";
      n.d(t, { CloseDelegateContext: () => o });
      var s = n(50959),
        i = n(59064);
      const o = s.createContext(i.globalCloseDelegate);
    },
    65718: (e, t, n) => {
      "use strict";
      n.d(t, { Portal: () => a, PortalContext: () => u });
      var s = n(50959),
        i = n(962),
        o = n(68671),
        r = n(88216),
        l = n(50655);
      class a extends s.PureComponent {
        constructor() {
          super(...arguments), (this._uuid = (0, o.guid)());
        }
        componentWillUnmount() {
          this._manager().removeWindow(this._uuid);
        }
        render() {
          const e = this._manager().ensureWindow(
            this._uuid,
            this.props.layerOptions
          );
          return (
            (e.style.top = this.props.top || ""),
            (e.style.bottom = this.props.bottom || ""),
            (e.style.left = this.props.left || ""),
            (e.style.right = this.props.right || ""),
            (e.style.pointerEvents = this.props.pointerEvents || ""),
            i.createPortal(
              s.createElement(u.Provider, { value: this }, this.props.children),
              e
            )
          );
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid);
        }
        _manager() {
          return null === this.context
            ? (0, r.getRootOverlapManager)()
            : this.context;
        }
      }
      a.contextType = l.SlotContext;
      const u = s.createContext(null);
    },
    50655: (e, t, n) => {
      "use strict";
      n.d(t, { Slot: () => i, SlotContext: () => o });
      var s = n(50959);
      class i extends s.Component {
        shouldComponentUpdate() {
          return !1;
        }
        render() {
          return s.createElement("div", {
            style: { position: "fixed", zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          });
        }
      }
      const o = s.createContext(null);
    },
    14758: (e, t, n) => {
      "use strict";
      n.d(t, { SubmenuContext: () => i, SubmenuHandler: () => o });
      var s = n(50959);
      const i = s.createContext(null);
      function o(e) {
        const [t, n] = (0, s.useState)(null),
          o = (0, s.useRef)(null),
          r = (0, s.useRef)(new Map());
        return (
          (0, s.useEffect)(
            () => () => {
              null !== o.current && clearTimeout(o.current);
            },
            []
          ),
          s.createElement(
            i.Provider,
            {
              value: {
                current: t,
                setCurrent: function (e) {
                  null !== o.current &&
                    (clearTimeout(o.current), (o.current = null));
                  null === t
                    ? n(e)
                    : (o.current = setTimeout(() => {
                        (o.current = null), n(e);
                      }, 100));
                },
                registerSubmenu: function (e, t) {
                  return (
                    r.current.set(e, t),
                    () => {
                      r.current.delete(e);
                    }
                  );
                },
                isSubmenuNode: function (e) {
                  return Array.from(r.current.values()).some((t) => t(e));
                },
              },
            },
            e.children
          )
        );
      }
    },
  },
]);
