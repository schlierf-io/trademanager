(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [3005],
  {
    39416: (e) => {
      e.exports = {
        wrap: "wrap-qKQlcmkd",
        wrapWithArrowsOuting: "wrapWithArrowsOuting-qKQlcmkd",
        wrapOverflow: "wrapOverflow-qKQlcmkd",
        scrollWrap: "scrollWrap-qKQlcmkd",
        noScrollBar: "noScrollBar-qKQlcmkd",
        icon: "icon-qKQlcmkd",
        scrollLeft: "scrollLeft-qKQlcmkd",
        scrollRight: "scrollRight-qKQlcmkd",
        isVisible: "isVisible-qKQlcmkd",
        iconWrap: "iconWrap-qKQlcmkd",
        fadeLeft: "fadeLeft-qKQlcmkd",
        fadeRight: "fadeRight-qKQlcmkd",
      };
    },
    19566: (e, t, s) => {
      "use strict";
      s.d(t, { useResizeObserver: () => a });
      var r = s(50959),
        i = s(59255);
      function n(e, t) {
        null !== e && ("function" == typeof e ? e(t) : (e.current = t));
      }
      function a(e, t = []) {
        const { callback: s, ref: a = null } = (function (e) {
            return "function" == typeof e ? { callback: e } : e;
          })(e),
          o = (0, r.useRef)(null),
          l = (0, r.useRef)(s);
        l.current = s;
        const c = (function (e) {
            const t = (0, r.useMemo)(
                () =>
                  (function (e) {
                    const t = (s) => {
                      e(s), (t.current = s);
                    };
                    return (t.current = null), t;
                  })((e) => {
                    a.current(e);
                  }),
                []
              ),
              s = (0, r.useRef)(null),
              i = (t) => {
                if (null === t) return n(s.current, t), void (s.current = null);
                s.current !== e && ((s.current = e), n(s.current, t));
              },
              a = (0, r.useRef)(i);
            return (
              (a.current = i),
              (0, r.useLayoutEffect)(() => {
                if (null !== t.current)
                  return a.current(t.current), () => a.current(null);
              }, [e]),
              t
            );
          })(a),
          u = (0, r.useCallback)(
            (e) => {
              c(e),
                null !== o.current &&
                  (o.current.disconnect(), null !== e && o.current.observe(e));
            },
            [c, o]
          );
        return (
          (function (e, t) {
            ("undefined" == typeof window ? r.useEffect : r.useLayoutEffect)(
              e,
              t
            );
          })(
            () => (
              (o.current = new i.default((e, t) => {
                l.current(e, t);
              })),
              c.current && u(c.current),
              () => {
                var e;
                null === (e = o.current) || void 0 === e || e.disconnect();
              }
            ),
            [c, ...t]
          ),
          u
        );
      }
    },
    9745: (e, t, s) => {
      "use strict";
      s.d(t, { Icon: () => i });
      var r = s(50959);
      const i = r.forwardRef((e, t) => {
        const { icon: s = "", ...i } = e;
        return r.createElement("span", {
          ...i,
          ref: t,
          dangerouslySetInnerHTML: { __html: s },
        });
      });
    },
    42142: (e, t, s) => {
      "use strict";
      s.d(t, { FragmentMap: () => i });
      var r = s(50959);
      function i(e) {
        if (e.map) {
          return r.Children.toArray(e.children).map(e.map);
        }
        return e.children;
      }
    },
    45601: (e, t, s) => {
      "use strict";
      s.d(t, { Measure: () => i });
      var r = s(19566);
      function i(e) {
        const { children: t, onResize: s } = e;
        return t((0, r.useResizeObserver)(s || (() => {}), [null === s]));
      }
    },
    70412: (e, t, s) => {
      "use strict";
      s.d(t, {
        hoverMouseEventFilter: () => n,
        useAccurateHover: () => a,
        useHover: () => i,
      });
      var r = s(50959);
      function i() {
        const [e, t] = (0, r.useState)(!1);
        return [
          e,
          {
            onMouseOver: function (e) {
              n(e) && t(!0);
            },
            onMouseOut: function (e) {
              n(e) && t(!1);
            },
          },
        ];
      }
      function n(e) {
        return !e.currentTarget.contains(e.relatedTarget);
      }
      function a(e) {
        const [t, s] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            const t = (t) => {
              if (null === e.current) return;
              const r = e.current.contains(t.target);
              s(r);
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
    39440: (e, t, s) => {
      "use strict";
      s.d(t, { HorizontalScroll: () => _ });
      var r = s(50959),
        i = s(97754),
        n = s(50151),
        a = s(9745),
        o = s(70439),
        l = s(41207),
        c = s(80142),
        u = s(45601),
        d = s(61380),
        h = s(39416);
      const m = {
        isVisibleScrollbar: !0,
        shouldMeasure: !0,
        hideButtonsFrom: 1,
      };
      function p(e) {
        return r.createElement("div", {
          className: i(h.fadeLeft, e.className, { [h.isVisible]: e.isVisible }),
        });
      }
      function v(e) {
        return r.createElement("div", {
          className: i(h.fadeRight, e.className, {
            [h.isVisible]: e.isVisible,
          }),
        });
      }
      function f(e) {
        return r.createElement(S, { ...e, className: h.scrollLeft });
      }
      function g(e) {
        return r.createElement(S, { ...e, className: h.scrollRight });
      }
      function S(e) {
        return r.createElement(
          "div",
          {
            className: i(e.className, { [h.isVisible]: e.isVisible }),
            onClick: e.onClick,
          },
          r.createElement(
            "div",
            { className: h.iconWrap },
            r.createElement(a.Icon, { icon: d, className: h.icon })
          )
        );
      }
      const _ = (function (e = f, t = g, s = p, a = v) {
        var d;
        return (
          ((d = class extends r.PureComponent {
            constructor(e) {
              super(e),
                (this._scroll = r.createRef()),
                (this._handleScrollLeft = () => {
                  if (this.props.onScrollButtonClick)
                    return void this.props.onScrollButtonClick("left");
                  const e =
                    this.props.scrollStepSize || this.state.widthWrap - 50;
                  this.animateTo(Math.max(0, this.currentPosition() - e));
                }),
                (this._handleScrollRight = () => {
                  if (this.props.onScrollButtonClick)
                    return void this.props.onScrollButtonClick("right");
                  const e =
                    this.props.scrollStepSize || this.state.widthWrap - 50;
                  this.animateTo(
                    Math.min(
                      (this.state.widthContent || 0) -
                        (this.state.widthWrap || 0),
                      this.currentPosition() + e
                    )
                  );
                }),
                (this._handleResizeWrap = ([e]) => {
                  const t = e.target.getBoundingClientRect();
                  this.props.onMeasureWrap && this.props.onMeasureWrap(t),
                    this.setState({ widthWrap: t.width }),
                    this._checkButtonsVisibility();
                }),
                (this._handleResizeContent = ([e]) => {
                  const t = e.target.getBoundingClientRect();
                  this.props.onMeasureContent && this.props.onMeasureContent(t);
                  const {
                    shouldDecreaseWidthContent: s,
                    buttonsWidthIfDecreasedWidthContent: r,
                  } = this.props;
                  s && r
                    ? this.setState({ widthContent: t.width + 2 * r })
                    : this.setState({ widthContent: t.width });
                }),
                (this._handleScroll = () => {
                  const { onScroll: e } = this.props;
                  e &&
                    e(
                      this.currentPosition(),
                      this.isAtLeft(),
                      this.isAtRight()
                    ),
                    this._checkButtonsVisibility();
                }),
                (this._checkButtonsVisibility = () => {
                  const { isVisibleLeftButton: e, isVisibleRightButton: t } =
                      this.state,
                    s = this.isAtLeft(),
                    r = this.isAtRight();
                  s || e
                    ? s && e && this.setState({ isVisibleLeftButton: !1 })
                    : this.setState({ isVisibleLeftButton: !0 }),
                    r || t
                      ? r && t && this.setState({ isVisibleRightButton: !1 })
                      : this.setState({ isVisibleRightButton: !0 });
                }),
                (this.state = {
                  widthContent: 0,
                  widthWrap: 0,
                  isVisibleRightButton: !1,
                  isVisibleLeftButton: !1,
                });
            }
            componentDidMount() {
              this._checkButtonsVisibility();
            }
            componentDidUpdate(e, t) {
              (t.widthWrap === this.state.widthWrap &&
                t.widthContent === this.state.widthContent) ||
                this._handleScroll();
            }
            currentPosition() {
              return this._scroll.current
                ? (0, c.isRtl)()
                  ? (0, c.getLTRScrollLeft)(this._scroll.current)
                  : this._scroll.current.scrollLeft
                : 0;
            }
            isAtLeft() {
              return (
                !this._isOverflowed() ||
                this.currentPosition() <=
                  (0, n.ensureDefined)(this.props.hideButtonsFrom)
              );
            }
            isAtRight() {
              return (
                !this._isOverflowed() ||
                this.currentPosition() + this.state.widthWrap >=
                  this.state.widthContent -
                    (0, n.ensureDefined)(this.props.hideButtonsFrom)
              );
            }
            animateTo(e, t = l.dur) {
              const s = this._scroll.current;
              s &&
                ((0, c.isRtl)() && (e = (0, c.getLTRScrollLeftOffset)(s, e)),
                t <= 0
                  ? (s.scrollLeft = Math.round(e))
                  : (0, o.doAnimate)({
                      onStep(e, t) {
                        s.scrollLeft = Math.round(t);
                      },
                      from: s.scrollLeft,
                      to: Math.round(e),
                      easing: l.easingFunc.easeInOutCubic,
                      duration: t,
                    }));
            }
            render() {
              const {
                  children: n,
                  isVisibleScrollbar: o,
                  isVisibleFade: l,
                  isVisibleButtons: c,
                  shouldMeasure: d,
                  shouldDecreaseWidthContent: m,
                  buttonsWidthIfDecreasedWidthContent: p,
                  onMouseOver: v,
                  onMouseOut: f,
                  scrollWrapClassName: g,
                  fadeClassName: S,
                } = this.props,
                { isVisibleRightButton: _, isVisibleLeftButton: y } =
                  this.state,
                b = m && p;
              return r.createElement(
                u.Measure,
                { onResize: d ? this._handleResizeWrap : null },
                (m) =>
                  r.createElement(
                    "div",
                    {
                      className: h.wrapOverflow,
                      onMouseOver: v,
                      onMouseOut: f,
                      ref: m,
                    },
                    r.createElement(
                      "div",
                      { className: i(h.wrap, b ? h.wrapWithArrowsOuting : "") },
                      r.createElement(
                        "div",
                        {
                          className: i(h.scrollWrap, g, {
                            [h.noScrollBar]: !o,
                          }),
                          onScroll: this._handleScroll,
                          ref: this._scroll,
                        },
                        r.createElement(
                          u.Measure,
                          { onResize: d ? this._handleResizeContent : null },
                          n
                        )
                      ),
                      l && r.createElement(s, { isVisible: y, className: S }),
                      l && r.createElement(a, { isVisible: _, className: S }),
                      c &&
                        r.createElement(e, {
                          onClick: this._handleScrollLeft,
                          isVisible: y,
                        }),
                      c &&
                        r.createElement(t, {
                          onClick: this._handleScrollRight,
                          isVisible: _,
                        })
                    )
                  )
              );
            }
            _isOverflowed() {
              const { widthContent: e, widthWrap: t } = this.state;
              return e > t;
            }
          }).defaultProps = m),
          d
        );
      })(f, g, p, v);
    },
    65496: (e) => {
      e.exports = {
        group: "group-HlcUjC8J",
        separator: "separator-HlcUjC8J",
        noLeftDecoration: "noLeftDecoration-HlcUjC8J",
        noRightDecoration: "noRightDecoration-HlcUjC8J",
        noMinimalWidth: "noMinimalWidth-HlcUjC8J",
        separatorWrap: "separatorWrap-HlcUjC8J",
      };
    },
    59589: (e) => {
      e.exports = { separator: "separator-XAfcqqAz" };
    },
    43435: (e) => {
      e.exports = {
        "css-value-header-toolbar-height": "38px",
        toolbar: "toolbar-OOd_B2x2",
        isHidden: "isHidden-OOd_B2x2",
        overflowWrap: "overflowWrap-OOd_B2x2",
        customButton: "customButton-OOd_B2x2",
        hovered: "hovered-OOd_B2x2",
      };
    },
    36098: (e) => {
      e.exports = { wrap: "wrap-la10RAov", icon: "icon-la10RAov" };
    },
    53602: (e) => {
      e.exports = {
        "css-value-header-toolbar-height": "38px",
        innerWrap: "innerWrap-TPBYkbxL",
        inner: "inner-TPBYkbxL",
        fake: "fake-TPBYkbxL",
        fill: "fill-TPBYkbxL",
        collapse: "collapse-TPBYkbxL",
        button: "button-TPBYkbxL",
        iconButton: "iconButton-TPBYkbxL",
        hidden: "hidden-TPBYkbxL",
        content: "content-TPBYkbxL",
        desktopPublish: "desktopPublish-TPBYkbxL",
        startTrial: "startTrial-TPBYkbxL",
        mobilePublish: "mobilePublish-TPBYkbxL",
      };
    },
    71485: (e, t, s) => {
      "use strict";
      s.d(t, { INTERVALS: () => i });
      var r = s(44352);
      const i = [
        { name: "", label: r.t(null, { context: "interval" }, s(37830)) },
        { name: "H", label: r.t(null, { context: "interval" }, s(5285)) },
        { name: "D", label: r.t(null, { context: "interval" }, s(6174)) },
        { name: "W", label: r.t(null, { context: "interval" }, s(25042)) },
        { name: "M", label: r.t(null, { context: "interval" }, s(79410)) },
      ];
    },
    2869: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { HeaderToolbarRenderer: () => _e });
      var r = s(50959),
        i = s(962),
        n = s(50151),
        a = s(97754),
        o = s.n(a),
        l = s(85459),
        c = s.n(l),
        u = s(43370),
        d = s(2484),
        h = s(76422),
        m = s(19036),
        p = s(32563),
        v = s(42142),
        f = s(59589);
      function g(e) {
        return r.createElement("div", {
          className: o()(f.separator, e.className),
        });
      }
      var S = s(65496);
      function _(e) {
        const {
          children: t,
          className: s,
          noLeftDecoration: i,
          noRightDecoration: n,
          noMinimalWidth: o,
          onClick: l,
          removeSeparator: c,
        } = e;
        return r.createElement(
          r.Fragment,
          null,
          !c &&
            r.createElement(
              "div",
              { className: S.separatorWrap },
              r.createElement(g, { className: S.separator })
            ),
          r.createElement(
            "div",
            {
              className: a(s, S.group, {
                [S.noMinimalWidth]: o,
                [S.noLeftDecoration]: i,
                [S.noRightDecoration]: n,
              }),
              onClick: l,
            },
            t
          )
        );
      }
      var y = s(45601),
        b = s(44352),
        C = s(9745),
        E = s(36098),
        w = s(45820);
      const k = { text: b.t(null, void 0, s(55646)) };
      function M(e) {
        return r.createElement(
          "div",
          { className: E.wrap },
          r.createElement(C.Icon, { className: E.icon, icon: w }),
          k.text
        );
      }
      var R,
        I = s(39440),
        L = s(33933);
      !(function (e) {
        (e.SymbolSearch = "header-toolbar-symbol-search"),
          (e.Intervals = "header-toolbar-intervals"),
          (e.ChartStyles = "header-toolbar-chart-styles"),
          (e.Compare = "header-toolbar-compare"),
          (e.Indicators = "header-toolbar-indicators"),
          (e.StudyTemplates = "header-toolbar-study-templates"),
          (e.Dropdown = "header-toolbar-dropdown"),
          (e.Alerts = "header-toolbar-alerts"),
          (e.Layouts = "header-toolbar-layouts"),
          (e.SaveLoad = "header-toolbar-save-load"),
          (e.UndoRedo = "header-toolbar-undo-redo"),
          (e.Properties = "header-toolbar-properties"),
          (e.QuickSearch = "header-toolbar-quick-search"),
          (e.PublishDesktop = "header-toolbar-publish-desktop"),
          (e.PublishMobile = "header-toolbar-publish-mobile"),
          (e.Fullscreen = "header-toolbar-fullscreen"),
          (e.Screenshot = "header-toolbar-screenshot"),
          (e.Replay = "header-toolbar-replay"),
          (e.Financials = "header-toolbar-financials"),
          (e.StartTrial = "header-toolbar-start-trial");
      })(R || (R = {}));
      var W = s(70412),
        V = s(10654),
        T = s(53602);
      const F = (0, V.registryContextType)(),
        B = d.enabled("widget");
      class x extends r.PureComponent {
        constructor(e, t) {
          super(e, t),
            (this._handleMouseOver = (e) => {
              (0, W.hoverMouseEventFilter)(e) &&
                this.setState({ isHovered: !0 });
            }),
            (this._handleMouseOut = (e) => {
              (0, W.hoverMouseEventFilter)(e) &&
                this.setState({ isHovered: !1 });
            }),
            (this._handleInnerResize = ([e]) => {
              const t = e.contentRect.width,
                { onWidthChange: s } = this.props;
              s && s(t);
            }),
            (this._handleMeasureAvailableSpace = (e) => {
              const { onAvailableSpaceChange: t } = this.props;
              t && t(e.width);
            }),
            (this._processCustoms = (e) => {
              const { isFake: t, displayMode: s } = this.props,
                { tools: i } = this.context;
              return e.map((e) =>
                r.createElement(
                  _,
                  { key: e.id },
                  ((e) => {
                    switch (e.type) {
                      case "Button":
                        return r.createElement(i.Custom, {
                          ...e.params,
                          isFake: t,
                        });
                      case "TradingViewStyledButton":
                        return r.createElement(
                          i.CustomTradingViewStyledButton,
                          { ...e.params, className: T.button, displayMode: s }
                        );
                      case "Dropdown":
                        return r.createElement(i.Dropdown, {
                          displayMode: s,
                          params: e.params,
                        });
                      default:
                        return null;
                    }
                  })(e)
                )
              );
            }),
            (this._fixLastGroup = (e, t, s) => {
              if (t === s.length - 1 && r.isValidElement(e) && e.type === _) {
                const t =
                  void 0 !== this.context.tools.Publish && !this.props.readOnly;
                return r.cloneElement(e, { noRightDecoration: t });
              }
              return e;
            }),
            (0, V.validateRegistry)(t, { tools: m.any.isRequired }),
            (this.state = { isHovered: !1, isAuthenticated: void 0 });
        }
        componentDidMount() {
          0;
        }
        componentWillUnmount() {
          0;
        }
        render() {
          const { tools: e } = this.context,
            {
              features: t,
              displayMode: s,
              chartSaver: i,
              studyMarket: n,
              readOnly: o,
              saveLoadSyncEmitter: l,
              leftCustomElements: c,
              rightCustomElements: u,
              showScrollbarWhen: d,
              isFake: h = !1,
            } = this.props,
            { isHovered: m, isAuthenticated: f } = this.state,
            g = this._processCustoms(c),
            S = this._processCustoms(u),
            b = d.includes(s);
          return r.createElement(
            "div",
            {
              className: a(T.inner, { [T.fake]: h }),
              onContextMenu: L.preventDefaultForContextMenu,
              "data-is-fake-main-panel": h,
            },
            r.createElement(
              I.HorizontalScroll,
              {
                isVisibleFade: p.mobiletouch && b,
                isVisibleButtons: !p.mobiletouch && b && m,
                isVisibleScrollbar: !1,
                shouldMeasure: !h,
                onMouseOver: this._handleMouseOver,
                onMouseOut: this._handleMouseOut,
                onMeasureWrap: this._handleMeasureAvailableSpace,
              },
              (c) =>
                r.createElement(
                  "div",
                  { className: T.content, ref: c },
                  r.createElement(
                    y.Measure,
                    { onResize: h ? this._handleInnerResize : null },
                    (c) =>
                      r.createElement(
                        "div",
                        { className: T.innerWrap, ref: c },
                        r.createElement(
                          v.FragmentMap,
                          { map: this._fixLastGroup },
                          !o &&
                            r.Children.toArray([
                              (e.SymbolSearch || e.Compare) &&
                                r.createElement(
                                  _,
                                  { key: "symbol" },
                                  e.SymbolSearch &&
                                    r.createElement(e.SymbolSearch, {
                                      id: h ? void 0 : R.SymbolSearch,
                                      isActionsVisible:
                                        t.allowSymbolSearchSpread,
                                    }),
                                  e.Compare &&
                                    r.createElement(e.Compare, {
                                      id: h ? void 0 : R.Compare,
                                      className: T.button,
                                      displayMode: s,
                                    })
                                ),
                              e.DateRange &&
                                r.createElement(
                                  _,
                                  { key: "range" },
                                  r.createElement(e.DateRange, null)
                                ),
                              e.Intervals &&
                                r.createElement(
                                  _,
                                  { key: "intervals" },
                                  r.createElement(e.Intervals, {
                                    id: h ? void 0 : R.Intervals,
                                    isShownQuicks: t.allowFavoriting,
                                    isFavoritingAllowed: t.allowFavoriting,
                                    displayMode: s,
                                    isFake: h,
                                  })
                                ),
                              e.Bars &&
                                r.createElement(
                                  _,
                                  { key: "styles" },
                                  r.createElement(e.Bars, {
                                    id: h ? void 0 : R.ChartStyles,
                                    isShownQuicks: t.allowFavoriting,
                                    isFavoritingAllowed: t.allowFavoriting,
                                    displayMode: s,
                                    isFake: h,
                                  })
                                ),
                              B &&
                                e.Compare &&
                                !e.SymbolSearch &&
                                r.createElement(
                                  _,
                                  { key: "compare" },
                                  r.createElement(e.Compare, {
                                    id: h ? void 0 : R.Compare,
                                    className: T.button,
                                    displayMode: s,
                                  })
                                ),
                              e.Indicators &&
                                r.createElement(
                                  _,
                                  { key: "indicators" },
                                  r.createElement(e.Indicators, {
                                    id: h ? void 0 : R.Indicators,
                                    className: T.button,
                                    studyMarket: n,
                                    displayMode: s,
                                  }),
                                  e.Templates &&
                                    r.createElement(e.Templates, {
                                      id: h ? void 0 : R.StudyTemplates,
                                      isShownQuicks: t.allowFavoriting,
                                      isFavoritingAllowed: t.allowFavoriting,
                                      displayMode: s,
                                    })
                                ),
                              e.Alert &&
                                r.createElement(
                                  _,
                                  { key: "alert" },
                                  r.createElement(e.Alert, {
                                    id: h ? void 0 : R.Alerts,
                                    className: T.button,
                                    displayMode: s,
                                  }),
                                  e.Replay &&
                                    r.createElement(e.Replay, {
                                      id: h ? void 0 : R.Replay,
                                      className: T.button,
                                      displayMode: s,
                                    })
                                ),
                              e.AlertReferral &&
                                r.createElement(
                                  _,
                                  { key: "alert-referral" },
                                  r.createElement(e.AlertReferral, {
                                    className: T.button,
                                    displayMode: s,
                                  })
                                ),
                              e.ScalePercentage &&
                                r.createElement(
                                  _,
                                  { key: "percentage" },
                                  r.createElement(e.ScalePercentage, null)
                                ),
                              e.ScaleLogarithm &&
                                r.createElement(
                                  _,
                                  { key: "logarithm" },
                                  r.createElement(e.ScaleLogarithm, null)
                                ),
                              ...g,
                            ]),
                          (function (e) {
                            const t = e.findIndex(
                              (e) =>
                                r.isValidElement(e) &&
                                !!e.key &&
                                -1 !==
                                  e.key.toString().indexOf("view-only-badge")
                            );
                            return (
                              [t]
                                .filter((e) => e >= 0)
                                .forEach((t) => {
                                  e = r.Children.map(e, (e, s) => {
                                    if (r.isValidElement(e)) {
                                      switch ([t - 1, t, t + 1].indexOf(s)) {
                                        case 0:
                                          const t = { noRightDecoration: !0 };
                                          e = r.cloneElement(e, t);
                                          break;
                                        case 1:
                                          const s = {
                                            noLeftDecoration: !0,
                                            noRightDecoration: !0,
                                          };
                                          e = r.cloneElement(e, s);
                                          break;
                                        case 2:
                                          const i = { noLeftDecoration: !0 };
                                          e = r.cloneElement(e, i);
                                      }
                                    }
                                    return e;
                                  });
                                }),
                              e
                            );
                          })(
                            r.Children.toArray([
                              o &&
                                r.createElement(
                                  _,
                                  {
                                    key: "view-only-badge",
                                    removeSeparator: !0,
                                  },
                                  r.createElement(M, null)
                                ),
                              !o &&
                                e.UndoRedo &&
                                r.createElement(
                                  _,
                                  { key: "undo-redo" },
                                  r.createElement(e.UndoRedo, {
                                    id: h ? void 0 : R.UndoRedo,
                                  })
                                ),
                              r.createElement(_, {
                                removeSeparator: !0,
                                key: "gap-1",
                                className: a(T.fill, h && T.collapse),
                              }),
                              (e.Layout || e.SaveLoad) &&
                                r.createElement(
                                  _,
                                  { key: "layout", removeSeparator: !0 },
                                  !o &&
                                    e.Layout &&
                                    r.createElement(e.Layout, {
                                      id: h ? void 0 : R.Layouts,
                                    }),
                                  e.SaveLoad &&
                                    r.createElement(e.SaveLoad, {
                                      id: h ? void 0 : R.SaveLoad,
                                      chartSaver: i,
                                      isReadOnly: o,
                                      displayMode: s,
                                      isFake: h,
                                      stateSyncEmitter: l,
                                    })
                                ),
                              e.SaveLoadReferral &&
                                r.createElement(
                                  _,
                                  { key: "save-load-referral" },
                                  r.createElement(e.SaveLoadReferral, {
                                    isReadOnly: o,
                                    displayMode: s,
                                  })
                                ),
                              !1,
                              t.showLaunchInPopupButton &&
                                e.OpenPopup &&
                                r.createElement(
                                  _,
                                  { key: "popup", removeSeparator: !1 },
                                  r.createElement(e.OpenPopup, null)
                                ),
                              !o &&
                                e.Properties &&
                                r.createElement(
                                  _,
                                  { key: "properties", removeSeparator: !1 },
                                  !o &&
                                    e.QuickSearch &&
                                    r.createElement(e.QuickSearch, {
                                      id: h ? void 0 : R.QuickSearch,
                                      className: T.iconButton,
                                    }),
                                  !o &&
                                    r.createElement(e.Properties, {
                                      id: h ? void 0 : R.Properties,
                                      className: T.iconButton,
                                    }),
                                  r.createElement(
                                    r.Fragment,
                                    null,
                                    !o &&
                                      e.Fullscreen &&
                                      r.createElement(
                                        _,
                                        {
                                          key: "fullscreen",
                                          onClick:
                                            this._trackFullscreenButtonClick,
                                          removeSeparator: !0,
                                        },
                                        r.createElement(e.Fullscreen, {
                                          id: h ? void 0 : R.Fullscreen,
                                        })
                                      ),
                                    e.Screenshot &&
                                      r.createElement(e.Screenshot, {
                                        id: h ? void 0 : R.Screenshot,
                                        className: T.iconButton,
                                      })
                                  )
                                ),
                              B &&
                                !o &&
                                e.Fullscreen &&
                                r.createElement(
                                  _,
                                  {
                                    key: "fullscreen",
                                    onClick: this._trackFullscreenButtonClick,
                                    removeSeparator: !0,
                                  },
                                  r.createElement(e.Fullscreen, {
                                    id: h ? void 0 : R.Fullscreen,
                                  })
                                ),
                              B &&
                                e.Screenshot &&
                                r.createElement(
                                  _,
                                  { key: "screenshot", removeSeparator: !0 },
                                  r.createElement(e.Screenshot, {
                                    id: h ? void 0 : R.Screenshot,
                                    className: T.iconButton,
                                  })
                                ),
                              !o &&
                                e.Publish &&
                                r.createElement(
                                  _,
                                  {
                                    key: "publish",
                                    className: T.mobilePublish,
                                    removeSeparator: !0,
                                  },
                                  r.createElement(e.Publish, {
                                    id: h ? void 0 : R.PublishMobile,
                                  })
                                ),
                              ...S,
                            ])
                          )
                        )
                      )
                  )
                )
            ),
            e.Publish &&
              !o &&
              !h &&
              r.createElement(e.Publish, {
                id: R.PublishDesktop,
                className: T.desktopPublish,
              })
          );
        }
        _onLoginStateChange() {
          0;
        }
        _trackFullscreenButtonClick() {
          0;
        }
      }
      x.contextType = F;
      var D = s(40549),
        N = s.n(D),
        A = s(67065);
      class O extends A.CommonJsonStoreService {
        constructor(e, t, s = []) {
          super(e, t, "FAVORITE_CHART_STYLES_CHANGED", "StyleWidget.quicks", s);
        }
      }
      var P = s(92133),
        z = s(21095);
      class H extends A.AbstractJsonStoreService {
        constructor(e, t, s) {
          super(e, t, "FAVORITE_INTERVALS_CHANGED", "IntervalWidget.quicks", s);
        }
        _serialize(e) {
          return (0, z.uniq)(e.map(P.normalizeIntervalString));
        }
        _deserialize(e) {
          return (0, z.uniq)(
            (0, P.convertResolutionsFromSettings)(e)
              .filter(P.isResolutionMultiplierValid)
              .map(P.normalizeIntervalString)
          );
        }
      }
      var q = s(82992),
        U = s(26867),
        j = s.n(U),
        K = s(56840),
        Q = s(21097);
      class Y extends A.AbstractJsonStoreService {
        constructor(e, t, s = []) {
          super(
            e,
            t,
            "CUSTOM_INTERVALS_CHANGED",
            "IntervalWidget.intervals",
            s
          );
        }
        set(e, t) {
          e.length, this.get().length, super.set(e, t);
        }
        _serialize(e) {
          return (0, z.uniq)(e.map(P.normalizeIntervalString));
        }
        _deserialize(e) {
          return (0, z.uniq)(
            (0, P.convertResolutionsFromSettings)(e)
              .filter(P.isResolutionMultiplierValid)
              .map(P.normalizeIntervalString)
          );
        }
      }
      const J = new Y(Q.TVXWindowEvents, K);
      var G = s(71485);
      class X {
        constructor(e) {
          (this._customIntervalsService = J),
            (this._supportedIntervalsMayChange = new (j())()),
            (this._fireSupportedIntervalsMayChange = () => {
              this._supportedIntervalsMayChange.fire();
            }),
            (this._chartApiInstance = e),
            q.linking.supportedResolutions.subscribe(
              this._fireSupportedIntervalsMayChange
            ),
            q.linking.range.subscribe(this._fireSupportedIntervalsMayChange),
            q.linking.seconds.subscribe(this._fireSupportedIntervalsMayChange),
            q.linking.ticks.subscribe(this._fireSupportedIntervalsMayChange),
            q.linking.intraday.subscribe(this._fireSupportedIntervalsMayChange),
            q.linking.dataFrequencyResolution.subscribe(
              this._fireSupportedIntervalsMayChange
            );
        }
        destroy() {
          q.linking.supportedResolutions.unsubscribe(
            this._fireSupportedIntervalsMayChange
          ),
            q.linking.range.unsubscribe(this._fireSupportedIntervalsMayChange),
            q.linking.seconds.unsubscribe(
              this._fireSupportedIntervalsMayChange
            ),
            q.linking.ticks.unsubscribe(this._fireSupportedIntervalsMayChange),
            q.linking.intraday.unsubscribe(
              this._fireSupportedIntervalsMayChange
            ),
            q.linking.dataFrequencyResolution.unsubscribe(
              this._fireSupportedIntervalsMayChange
            );
        }
        getDefaultIntervals() {
          return null === this._chartApiInstance
            ? []
            : this._chartApiInstance
                .defaultResolutions()
                .map(P.normalizeIntervalString);
        }
        getCustomIntervals() {
          return this._customIntervalsService.get();
        }
        add(e, t, s) {
          if (!this.isValidInterval(e, t)) return null;
          const r = (0, P.normalizeIntervalString)(`${e}${t}`),
            i = this.getCustomIntervals();
          return this._isIntervalDefault(r) || i.includes(r)
            ? null
            : (this._customIntervalsService.set(
                (0, P.sortResolutions)([...i, r])
              ),
              r);
        }
        remove(e) {
          this._customIntervalsService.set(
            this.getCustomIntervals().filter((t) => t !== e)
          );
        }
        isValidInterval(e, t) {
          return (0, P.isResolutionMultiplierValid)(`${e}${t}`);
        }
        isSupportedInterval(e) {
          return (0, P.isAvailable)(e);
        }
        supportedIntervalsMayChange() {
          return this._supportedIntervalsMayChange;
        }
        getOnChange() {
          return this._customIntervalsService.getOnChange();
        }
        getPossibleIntervals() {
          return G.INTERVALS;
        }
        getResolutionUtils() {
          return {
            getMaxResolutionValue: P.getMaxResolutionValue,
            getTranslatedResolutionModel: P.getTranslatedResolutionModel,
            mergeResolutions: P.mergeResolutions,
            sortResolutions: P.sortResolutions,
          };
        }
        _isIntervalDefault(e) {
          return this.getDefaultIntervals().includes(e);
        }
      }
      var $ = s(23568),
        Z = s(4774),
        ee = s(14905);
      const te = {};
      let se = null;
      class re {
        constructor(e = K) {
          (this._favorites = []),
            (this._favoritesChanged = new (j())()),
            (this._settings = e),
            Q.TVXWindowEvents.on("StudyFavoritesChanged", (e) => {
              const t = JSON.parse(e);
              this._loadFromState(t.favorites || []);
            }),
            this._settings.onSync.subscribe(this, this._loadFavs),
            this._loadFavs();
        }
        isFav(e) {
          const t = this.favId(e);
          return -1 !== this._findFavIndex(t);
        }
        toggleFavorite(e) {
          this.isFav(e) ? this.removeFavorite(e) : this.addFavorite(e);
        }
        addFavorite(e) {
          const t = this.favId(e);
          this._favorites.push(ne(t)),
            this._favoritesChanged.fire(),
            this._saveFavs();
        }
        removeFavorite(e) {
          const t = this.favId(e),
            s = this._findFavIndex(t);
          -1 !== s &&
            (this._favorites.splice(s, 1), this._favoritesChanged.fire()),
            this._saveFavs();
        }
        favId(e) {
          return (0, ee.isPineIdString)(e)
            ? e
            : (0, ee.extractPineId)(e) || (0, Z.extractStudyId)(e);
        }
        favorites() {
          return this._favorites;
        }
        favoritePineIds() {
          return this._favorites
            .filter((e) => "pine" === e.type)
            .map((e) => e.pineId);
        }
        favoritesChanged() {
          return this._favoritesChanged;
        }
        static getInstance() {
          return null === se && (se = new re()), se;
        }
        static create(e) {
          return new re(e);
        }
        _loadFavs() {
          const e = this._settings.getJSON("studyMarket.favorites", []);
          this._loadFromState(e);
        }
        _saveFavs() {
          const e = this._stateToSave();
          this._settings.setJSON("studyMarket.favorites", e, {
            forceFlush: !0,
          }),
            Q.TVXWindowEvents.emit(
              "StudyFavoritesChanged",
              JSON.stringify({ favorites: e })
            );
        }
        _stateToSave() {
          return this._favorites.map(ie);
        }
        _loadFromState(e) {
          (this._favorites = e.map((e) =>
            ne(
              (function (e) {
                return e in te ? te[e] : e;
              })(e)
            )
          )),
            this._favoritesChanged.fire();
        }
        _findFavIndex(e) {
          return this._favorites.findIndex((t) => e === ie(t));
        }
      }
      function ie(e) {
        return "java" === e.type ? e.studyId : e.pineId;
      }
      function ne(e) {
        return (0, ee.isPineIdString)(e)
          ? { type: "pine", pineId: e }
          : { type: "java", studyId: e };
      }
      var ae = s(578);
      const oe = {
        [ae.ResolutionKind.Ticks]: !1,
        [ae.ResolutionKind.Seconds]: !1,
        [ae.ResolutionKind.Minutes]: !1,
        [ae.SpecialResolutionKind.Hours]: !1,
        [ae.ResolutionKind.Days]: !1,
        [ae.ResolutionKind.Range]: !1,
      };
      class le extends A.CommonJsonStoreService {
        constructor(e, t, s = oe) {
          super(
            e,
            t,
            "INTERVALS_MENU_VIEW_STATE_CHANGED",
            "IntervalWidget.menu.viewState",
            s
          );
        }
        isAllowed(e) {
          return Object.keys(oe).includes(e);
        }
      }
      var ce = s(81205);
      const ue = {
          Area: 3,
          Bars: 0,
          Candles: 1,
          "Heiken Ashi": 8,
          "Hollow Candles": 9,
          Line: 2,
          Renko: 4,
          Kagi: 5,
          "Point & figure": 6,
          "Line Break": 7,
          Baseline: 10,
        },
        de = ["1", "30", "60"];
      function he(e = []) {
        let t = e.map((e) => ue[e]) || [1, 4, 5, 6];
        return d.enabled("widget") && (t = [0, 1, 3]), t;
      }
      function me(e = []) {
        return (0, P.mergeResolutions)(
          e,
          d.enabled("star_some_intervals_by_default") ? de : []
        );
      }
      new H(Q.TVXWindowEvents, K, me()),
        new O(Q.TVXWindowEvents, K, he()),
        new ce.FavoriteStudyTemplateService(Q.TVXWindowEvents, K);
      const pe = {
        tools: m.any.isRequired,
        isFundamental: m.any,
        chartApiInstance: m.any,
        availableTimeFrames: m.any,
        chartWidgetCollection: m.any,
        windowMessageService: m.any,
        favoriteChartStylesService: m.any,
        favoriteIntervalsService: m.any,
        intervalService: m.any,
        favoriteStudyTemplatesService: m.any,
        studyTemplates: m.any,
        chartChangesWatcher: m.any,
        saveChartService: m.any,
        sharingChartService: m.any,
        loadChartService: m.any,
        chartWidget: m.any,
        favoriteScriptsModel: m.any,
        intervalsMenuViewStateService: m.any,
        templatesMenuViewStateService: m.any,
        financialsDialogController: m.any,
        openGlobalSearch: m.any,
        snapshotUrl: m.any,
      };
      var ve = s(66032),
        fe = s(43435);
      const ge = [];
      class Se extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._saveLoadSyncEmitter = new (c())()),
            (this._handleFullWidthChange = (e) => {
              (this._fullWidth = e), this.setState({ measureValid: !1 });
            }),
            (this._handleFavoritesWidthChange = (e) => {
              (this._favoritesWidth = e), this.setState({ measureValid: !1 });
            }),
            (this._handleCollapseWidthChange = (e) => {
              (this._collapseWidth = e), this.setState({ measureValid: !1 });
            }),
            (this._handleMeasure = (e) => {
              this.setState({ availableWidth: e, measureValid: !1 });
            });
          const {
            tools: t,
            windowMessageService: s,
            chartWidgetCollection: r,
            chartApiInstance: i,
            availableTimeFrames: a,
            isFundamental: o,
            favoriteIntervalsService: l,
            favoriteChartStylesService: h,
            favoriteStudyTemplatesService: m,
            studyTemplates: p,
            saveChartService: v,
            sharingChartService: f,
            loadChartService: g,
            financialsDialogController: S,
            snapshotUrl: _,
            openGlobalSearch: y,
          } = e;
          (this._showScrollbarWhen = (0, n.ensureDefined)(e.allowedModes).slice(
            -1
          )),
            (this._panelWidthChangeHandlers = {
              full: this._handleFullWidthChange,
              medium: this._handleFavoritesWidthChange,
              small: this._handleCollapseWidthChange,
            });
          const { chartChangesWatcher: b } = e;
          this._chartChangesWatcher = b;
          const C = he(this.props.defaultFavoriteStyles);
          this._favoriteChartStylesService =
            h || new O(Q.TVXWindowEvents, K, C);
          const E = me(this.props.defaultFavoriteIntervals);
          (this._favoriteIntervalsService =
            l || new H(Q.TVXWindowEvents, K, E)),
            (this._intervalsMenuViewStateService = new le(
              Q.TVXWindowEvents,
              K
            )),
            (this._intervalService = new X(i)),
            (this._registry = {
              tools: t,
              isFundamental: o,
              chartWidgetCollection: r,
              windowMessageService: s,
              chartApiInstance: i,
              availableTimeFrames: a,
              favoriteStudyTemplatesService: m,
              studyTemplates: p,
              saveChartService: v,
              sharingChartService: f,
              loadChartService: g,
              intervalsMenuViewStateService:
                this._intervalsMenuViewStateService,
              favoriteChartStylesService: this._favoriteChartStylesService,
              favoriteIntervalsService: this._favoriteIntervalsService,
              intervalService: this._intervalService,
              chartChangesWatcher: this._chartChangesWatcher,
              chartWidget: r.activeChartWidget.value(),
              favoriteScriptsModel: re.getInstance(),
              templatesMenuViewStateService:
                this._templatesMenuVuewStateService,
              financialsDialogController: S,
              snapshotUrl: _,
              openGlobalSearch: y,
            }),
            (this.state = {
              isVisible: !0,
              availableWidth: 0,
              displayMode: "full",
              measureValid: !1,
              leftCustomElements: [],
              rightCustomElements: [],
            }),
            (this._readOnly = r.readOnly()),
            (this._features = {
              allowFavoriting: d.enabled("items_favoriting"),
              showIdeasButton: Boolean(this.props.ideas),
              showLaunchInPopupButton: Boolean(this.props.popupButton),
              allowSymbolSearchSpread:
                d.enabled("header_symbol_search") &&
                d.enabled("show_spread_operators"),
              allowToolbarHiding: d.enabled("collapsible_header"),
            }),
            (this._setDisplayMode = (0, u.default)(this._setDisplayMode, 100)),
            this._negotiateResizer();
        }
        componentDidUpdate(e, t) {
          const { isVisible: s, measureValid: r } = this.state;
          s !== t.isVisible &&
            (h.emit("toggle_header", s), this._negotiateResizer()),
            r || this._setDisplayMode();
        }
        render() {
          const { resizerBridge: e, allowedModes: t, ...s } = this.props,
            {
              displayMode: i,
              isVisible: o,
              leftCustomElements: l,
              rightCustomElements: c,
            } = this.state,
            u = {
              features: this._features,
              readOnly: this._readOnly,
              isFake: !1,
              saveLoadSyncEmitter: this._saveLoadSyncEmitter,
              leftCustomElements: l,
              rightCustomElements: c,
              ...s,
            },
            d = { ...u, isFake: !0, showScrollbarWhen: ge },
            h = (0, n.ensureDefined)(t),
            m = this.props.tools.PublishButtonManager || r.Fragment;
          return r.createElement(
            V.RegistryProvider,
            { value: this._registry, validation: pe },
            r.createElement(
              m,
              null,
              r.createElement(
                "div",
                {
                  className: a(fe.toolbar, { [fe.isHidden]: !o }),
                  onClick: this.props.onClick,
                },
                r.createElement(
                  "div",
                  { className: fe.overflowWrap },
                  h.map((e) =>
                    r.createElement(x, {
                      key: e,
                      displayMode: e,
                      onWidthChange: this._panelWidthChangeHandlers[e],
                      ...d,
                    })
                  ),
                  r.createElement(x, {
                    key: "live",
                    showScrollbarWhen: this._showScrollbarWhen,
                    displayMode: i,
                    onAvailableSpaceChange: this._handleMeasure,
                    ...u,
                  })
                )
              )
            )
          );
        }
        addButton(e, t) {
          if (!t.useTradingViewStyle)
            return this._addCustomHTMLButton(e, t.align);
          this._addCustomTradingViewStyledButton(e, t);
        }
        addDropdown(e, t) {
          const { leftCustomElements: s, rightCustomElements: r } = this.state,
            i = { type: "Dropdown", id: e, params: t };
          "left" === t.align
            ? this.setState({ leftCustomElements: [...s, i] })
            : this.setState({ rightCustomElements: [...r, i] });
        }
        updateDropdown(e, t) {
          const s = (t) => "Dropdown" === t.type && t.id === e,
            r =
              this.state.leftCustomElements.find(s) ||
              this.state.rightCustomElements.find(s);
          void 0 !== r &&
            ((r.params = { ...r.params, ...t }),
            this.setState({
              leftCustomElements: this.state.leftCustomElements.slice(),
              rightCustomElements: this.state.rightCustomElements.slice(),
            }));
        }
        removeDropdown(e) {
          const t = (t) => "Dropdown" === t.type && t.id !== e,
            s = this.state.leftCustomElements.filter(t),
            r = this.state.rightCustomElements.filter(t);
          this.setState({ leftCustomElements: s, rightCustomElements: r });
        }
        _negotiateResizer() {
          this.props.resizerBridge.negotiateHeight(
            this.state.isVisible
              ? $.HEADER_TOOLBAR_HEIGHT_EXPANDED
              : $.HEADER_TOOLBAR_HEIGHT_COLLAPSED
          );
        }
        _setDisplayMode() {
          const { availableWidth: e } = this.state,
            { allowedModes: t } = this.props,
            s = {
              full: this._fullWidth,
              medium: this._favoritesWidth,
              small: this._collapseWidth,
            },
            r = (0, n.ensureDefined)(t);
          let i = r.map((e) => s[e]).findIndex((t) => e >= t);
          -1 === i && (i = r.length - 1);
          const a = r[i];
          this.setState({ measureValid: !0, displayMode: a });
        }
        _addCustomHTMLButton(e, t = "left") {
          const s = new (N())(0),
            r = (0, ve.parseHtmlElement)(
              `<div class="apply-common-tooltip ${fe.customButton}">`
            ),
            i = {
              type: "Button",
              id: e,
              params: { key: Number(new Date()), element: r, width: s },
            };
          return this._addCustomElementToState(t, i), r;
        }
        _addCustomTradingViewStyledButton(e, t) {
          const s = {
            type: "TradingViewStyledButton",
            id: e,
            params: {
              key: Number(new Date()),
              text: t.text,
              title: t.title,
              onClick: t.onClick,
            },
          };
          this._addCustomElementToState(t.align, s);
        }
        _addCustomElementToState(e, t) {
          const { leftCustomElements: s, rightCustomElements: r } = this.state;
          "left" === e
            ? this.setState({ leftCustomElements: [...s, t] })
            : this.setState({ rightCustomElements: [...r, t] });
        }
      }
      Se.defaultProps = { allowedModes: ["full", "medium"] };
      class _e {
        constructor(e, t) {
          (this._component = null),
            (this._handleRef = (e) => {
              this._component = e;
            }),
            (this._container = e),
            i.render(
              r.createElement(Se, { ...t, ref: this._handleRef }),
              this._container
            );
        }
        destroy() {
          i.unmountComponentAtNode(this._container);
        }
        getComponent() {
          return (0, n.ensureNotNull)(this._component);
        }
      }
    },
    10654: (e, t, s) => {
      "use strict";
      s.d(t, {
        validateRegistry: () => o,
        RegistryProvider: () => l,
        registryContextType: () => c,
      });
      var r = s(50959),
        i = s(19036),
        n = s.n(i);
      const a = r.createContext({});
      function o(e, t) {
        n().checkPropTypes(t, e, "context", "RegistryContext");
      }
      function l(e) {
        const { validation: t, value: s } = e;
        return o(s, t), r.createElement(a.Provider, { value: s }, e.children);
      }
      function c() {
        return a;
      }
    },
    61380: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>';
    },
    45820: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4.56 14a10.05 10.05 0 00.52.91c.41.69 1.04 1.6 1.85 2.5C8.58 19.25 10.95 21 14 21c3.05 0 5.42-1.76 7.07-3.58A17.18 17.18 0 0023.44 14a9.47 9.47 0 00-.52-.91c-.41-.69-1.04-1.6-1.85-2.5C19.42 8.75 17.05 7 14 7c-3.05 0-5.42 1.76-7.07 3.58A17.18 17.18 0 004.56 14zM24 14l.45-.21-.01-.03a7.03 7.03 0 00-.16-.32c-.11-.2-.28-.51-.5-.87-.44-.72-1.1-1.69-1.97-2.65C20.08 7.99 17.45 6 14 6c-3.45 0-6.08 2-7.8 3.92a18.18 18.18 0 00-2.64 3.84v.02h-.01L4 14l-.45-.21-.1.21.1.21L4 14l-.45.21.01.03a5.85 5.85 0 00.16.32c.11.2.28.51.5.87.44.72 1.1 1.69 1.97 2.65C7.92 20.01 10.55 22 14 22c3.45 0 6.08-2 7.8-3.92a18.18 18.18 0 002.64-3.84v-.02h.01L24 14zm0 0l.45.21.1-.21-.1-.21L24 14zm-10-3a3 3 0 100 6 3 3 0 000-6zm-4 3a4 4 0 118 0 4 4 0 01-8 0z"/></svg>';
    },
    6174: (e) => {
      e.exports = {
        ar: ["أيام"],
        ca_ES: ["dies"],
        cs: "days",
        de: ["Tage"],
        el: "days",
        en: "days",
        es: ["días"],
        fa: "days",
        fr: ["jours"],
        he_IL: ["ימים"],
        hu_HU: ["nap"],
        id_ID: ["hari"],
        it: ["giorni"],
        ja: ["日"],
        ko: ["날"],
        ms_MY: ["hari"],
        nl_NL: "days",
        pl: ["dni"],
        pt: ["dias"],
        ro: "days",
        ru: ["дни"],
        sv: ["dagar"],
        th: ["วัน"],
        tr: ["gün"],
        vi: ["ngày"],
        zh: ["日"],
        zh_TW: ["天"],
      };
    },
    5285: (e) => {
      e.exports = {
        ar: ["ساعات"],
        ca_ES: ["hores"],
        cs: "hours",
        de: ["Stunden"],
        el: "hours",
        en: "hours",
        es: ["horas"],
        fa: "hours",
        fr: ["heures"],
        he_IL: ["שעות"],
        hu_HU: ["óra"],
        id_ID: ["jam"],
        it: ["ore"],
        ja: ["時間"],
        ko: ["시"],
        ms_MY: ["jam"],
        nl_NL: "hours",
        pl: ["godziny"],
        pt: ["horas"],
        ro: "hours",
        ru: ["часы"],
        sv: ["timmar"],
        th: ["ชั่วโมง"],
        tr: ["saat"],
        vi: ["giờ"],
        zh: ["小时"],
        zh_TW: ["小時"],
      };
    },
    79410: (e) => {
      e.exports = {
        ar: ["شهور"],
        ca_ES: ["mesos"],
        cs: "months",
        de: ["Monate"],
        el: "months",
        en: "months",
        es: ["meses"],
        fa: "months",
        fr: ["mois"],
        he_IL: ["חודשים"],
        hu_HU: ["hónap"],
        id_ID: ["bulan"],
        it: ["mesi"],
        ja: ["月"],
        ko: ["달"],
        ms_MY: ["bulan"],
        nl_NL: "months",
        pl: ["miesiące"],
        pt: ["meses"],
        ro: "months",
        ru: ["месяцы"],
        sv: ["månader"],
        th: ["เดือน"],
        tr: ["ay"],
        vi: ["tháng"],
        zh: ["个月"],
        zh_TW: ["個月"],
      };
    },
    37830: (e) => {
      e.exports = {
        ar: ["دقائق"],
        ca_ES: ["minuts"],
        cs: "minutes",
        de: ["Minuten"],
        el: "minutes",
        en: "minutes",
        es: ["minutos"],
        fa: "minutes",
        fr: "minutes",
        he_IL: ["דקות"],
        hu_HU: ["perc"],
        id_ID: ["menit"],
        it: ["minuti"],
        ja: ["分"],
        ko: ["분"],
        ms_MY: ["minit"],
        nl_NL: "minutes",
        pl: ["minuty"],
        pt: ["minutos"],
        ro: "minutes",
        ru: ["минуты"],
        sv: ["minuter"],
        th: ["นาที"],
        tr: ["dakika"],
        vi: ["phút"],
        zh: ["分钟"],
        zh_TW: ["分鐘"],
      };
    },
    25042: (e) => {
      e.exports = {
        ar: ["أسابيع"],
        ca_ES: ["setmanes"],
        cs: "weeks",
        de: ["Wochen"],
        el: "weeks",
        en: "weeks",
        es: ["semanas"],
        fa: "weeks",
        fr: ["semaines"],
        he_IL: ["שבועות"],
        hu_HU: ["hét"],
        id_ID: ["minggu"],
        it: ["settimane"],
        ja: ["週"],
        ko: ["주"],
        ms_MY: ["minggu"],
        nl_NL: "weeks",
        pl: ["tygodnie"],
        pt: ["semanas"],
        ro: "weeks",
        ru: ["недели"],
        sv: ["veckor"],
        th: ["สัปดาห์"],
        tr: ["hafta"],
        vi: ["tuần"],
        zh: ["周"],
        zh_TW: ["周"],
      };
    },
    55646: (e) => {
      e.exports = {
        ar: ["وضع العرض فقط"],
        ca_ES: ["Mode només lectura"],
        cs: "View Only Mode",
        de: ["Ansichtsmodus"],
        el: "View Only Mode",
        en: "View Only Mode",
        es: ["Modo sólo lectura"],
        fa: "View Only Mode",
        fr: ["Mode Voir uniquement"],
        he_IL: ["מצב תצוגה בלבד"],
        hu_HU: "View Only Mode",
        id_ID: ["Mode Hanya Melihat"],
        it: ["Modalità di sola visualizzazione"],
        ja: ["表示専用モード"],
        ko: ["뷰 온리 모드"],
        ms_MY: ["Mod Lihat Sahaja"],
        nl_NL: "View Only Mode",
        pl: ["Tryb Podglądu"],
        pt: ["Modo de Visualização"],
        ro: "View Only Mode",
        ru: ['Режим "Только просмотр"'],
        sv: ["Endast visningsläge"],
        th: ["โหมดแบบดูอย่างเดียว"],
        tr: ["Sadece Görme Modu"],
        vi: ["Chế độ chỉ xem"],
        zh: ["仅查看模式"],
        zh_TW: ["僅查看模式"],
      };
    },
  },
]);
