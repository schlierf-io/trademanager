(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5093],
  {
    39640: (e, t, i) => {
      "use strict";
      function s(e, t, i, s, l) {
        function o(l) {
          if (e > l.timeStamp) return;
          const o = l.target;
          void 0 !== i &&
            null !== t &&
            null !== o &&
            o.ownerDocument === s &&
            (t.contains(o) || i(l));
        }
        return (
          l.click && s.addEventListener("click", o, !1),
          l.mouseDown && s.addEventListener("mousedown", o, !1),
          l.touchEnd && s.addEventListener("touchend", o, !1),
          l.touchStart && s.addEventListener("touchstart", o, !1),
          () => {
            s.removeEventListener("click", o, !1),
              s.removeEventListener("mousedown", o, !1),
              s.removeEventListener("touchend", o, !1),
              s.removeEventListener("touchstart", o, !1);
          }
        );
      }
      i.d(t, { addOutsideEventListener: () => s });
    },
    967: (e, t, i) => {
      "use strict";
      i.d(t, { weekDaysShortNames: () => o, weekDaysMiniNames: () => n });
      var s = i(44352),
        l = i(84917);
      l.Months.JANUARY,
        s.t(null, void 0, i(26910)),
        l.Months.FEBRUARY,
        s.t(null, void 0, i(16467)),
        l.Months.MARCH,
        s.t(null, void 0, i(84675)),
        l.Months.APRIL,
        s.t(null, void 0, i(97637)),
        l.Months.MAY,
        s.t(null, void 0, i(68327)),
        l.Months.JUNE,
        s.t(null, void 0, i(49385)),
        l.Months.JULY,
        s.t(null, void 0, i(23230)),
        l.Months.AUGUST,
        s.t(null, void 0, i(86797)),
        l.Months.SEPTEMBER,
        s.t(null, void 0, i(61132)),
        l.Months.OCTOBER,
        s.t(null, void 0, i(90784)),
        l.Months.NOVEMBER,
        s.t(null, void 0, i(71194)),
        l.Months.DECEMBER,
        s.t(null, void 0, i(55669)),
        l.Months.JANUARY,
        s.t(null, void 0, i(95425)),
        l.Months.FEBRUARY,
        s.t(null, void 0, i(35050)),
        l.Months.MARCH,
        s.t(null, void 0, i(51369)),
        l.Months.APRIL,
        s.t(null, void 0, i(42762)),
        l.Months.MAY,
        s.t(null, { context: "short" }, i(27991)),
        l.Months.JUNE,
        s.t(null, void 0, i(15224)),
        l.Months.JULY,
        s.t(null, void 0, i(6215)),
        l.Months.AUGUST,
        s.t(null, void 0, i(38465)),
        l.Months.SEPTEMBER,
        s.t(null, void 0, i(57902)),
        l.Months.OCTOBER,
        s.t(null, void 0, i(73546)),
        l.Months.NOVEMBER,
        s.t(null, void 0, i(71230)),
        l.Months.DECEMBER,
        s.t(null, void 0, i(92203)),
        l.WeekDays.SUNDAY,
        s.t(null, void 0, i(72149)),
        l.WeekDays.MONDAY,
        s.t(null, void 0, i(61199)),
        l.WeekDays.TUESDAY,
        s.t(null, void 0, i(44979)),
        l.WeekDays.WEDNESDAY,
        s.t(null, void 0, i(7147)),
        l.WeekDays.THURSDAY,
        s.t(null, void 0, i(7951)),
        l.WeekDays.FRIDAY,
        s.t(null, void 0, i(72970)),
        l.WeekDays.SATURDAY,
        s.t(null, void 0, i(1144));
      const o = {
          [l.WeekDays.SUNDAY]: s.t(null, void 0, i(86577)),
          [l.WeekDays.MONDAY]: s.t(null, void 0, i(83085)),
          [l.WeekDays.TUESDAY]: s.t(null, void 0, i(94316)),
          [l.WeekDays.WEDNESDAY]: s.t(null, void 0, i(75094)),
          [l.WeekDays.THURSDAY]: s.t(null, void 0, i(9787)),
          [l.WeekDays.FRIDAY]: s.t(null, void 0, i(564)),
          [l.WeekDays.SATURDAY]: s.t(null, void 0, i(36835)),
        },
        n = {
          [l.WeekDays.SUNDAY]: s.t(null, { context: "day_of_week" }, i(85954)),
          [l.WeekDays.MONDAY]: s.t(null, { context: "day_of_week" }, i(11268)),
          [l.WeekDays.TUESDAY]: s.t(null, { context: "day_of_week" }, i(31533)),
          [l.WeekDays.WEDNESDAY]: s.t(
            null,
            { context: "day_of_week" },
            i(26230)
          ),
          [l.WeekDays.THURSDAY]: s.t(
            null,
            { context: "day_of_week" },
            i(24793)
          ),
          [l.WeekDays.FRIDAY]: s.t(null, { context: "day_of_week" }, i(19801)),
          [l.WeekDays.SATURDAY]: s.t(
            null,
            { context: "day_of_week" },
            i(63331)
          ),
        };
    },
    77975: (e, t, i) => {
      "use strict";
      i.d(t, { useWatchedValueReadonly: () => l });
      var s = i(50959);
      const l = (e, t = !1) => {
        const i = "watchedValue" in e ? e.watchedValue : void 0,
          l = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
          [o, n] = (0, s.useState)(i ? i.value() : l);
        return (
          (t ? s.useLayoutEffect : s.useEffect)(() => {
            if (i) {
              n(i.value());
              const e = (e) => n(e);
              return i.subscribe(e), () => i.unsubscribe(e);
            }
            return () => {};
          }, [i]),
          o
        );
      };
    },
    49021: (e) => {
      e.exports = {
        "animation-minimize-corner-left-top":
          "animation-minimize-corner-left-top-qWid4aZU",
        "animation-minimize-corner-right-top":
          "animation-minimize-corner-right-top-qWid4aZU",
        "animation-minimize-corner-right-bottom":
          "animation-minimize-corner-right-bottom-qWid4aZU",
        "animation-minimize-corner-left-bottom":
          "animation-minimize-corner-left-bottom-qWid4aZU",
        "animation-maximize-corner-left-top":
          "animation-maximize-corner-left-top-qWid4aZU",
        "animation-maximize-corner-right-top":
          "animation-maximize-corner-right-top-qWid4aZU",
        "animation-maximize-corner-right-bottom":
          "animation-maximize-corner-right-bottom-qWid4aZU",
        "animation-maximize-corner-left-bottom":
          "animation-maximize-corner-left-bottom-qWid4aZU",
      };
    },
    1720: (e) => {
      e.exports = {
        wrapper: "wrapper-iSWHgsXm",
        timezone: "timezone-iSWHgsXm",
        sessionDayWrapper: "sessionDayWrapper-iSWHgsXm",
        nowWrapper: "nowWrapper-iSWHgsXm",
        now: "now-iSWHgsXm",
        sessionDay: "sessionDay-iSWHgsXm",
        weekDay: "weekDay-iSWHgsXm",
        sessionDaySegments: "sessionDaySegments-iSWHgsXm",
        timeMarkWrapper: "timeMarkWrapper-iSWHgsXm",
        timeMarkSegment: "timeMarkSegment-iSWHgsXm",
        timeMark: "timeMark-iSWHgsXm",
        timeMarkSegmentAlignByEnds: "timeMarkSegmentAlignByEnds-iSWHgsXm",
        segment: "segment-iSWHgsXm",
        small: "small-iSWHgsXm",
        start: "start-iSWHgsXm",
        end: "end-iSWHgsXm",
        active: "active-iSWHgsXm",
        green: "green-iSWHgsXm",
        orange: "orange-iSWHgsXm",
        blue: "blue-iSWHgsXm",
        gray: "gray-iSWHgsXm",
        tooltip: "tooltip-iSWHgsXm",
        time: "time-iSWHgsXm",
      };
    },
    39653: (e) => {
      e.exports = {
        marginlegendhoriz: "4px",
        legend: "legend-G1_Pfvwd",
        item: "item-G1_Pfvwd",
        withAction: "withAction-G1_Pfvwd",
        selected: "selected-G1_Pfvwd",
        last: "last-G1_Pfvwd",
        text: "text-G1_Pfvwd",
        noWrapWrapper: "noWrapWrapper-G1_Pfvwd",
        noWrap: "noWrap-G1_Pfvwd",
        series: "series-G1_Pfvwd",
        valuesAdditionalWrapper: "valuesAdditionalWrapper-G1_Pfvwd",
        valueItem: "valueItem-G1_Pfvwd",
        valueTitle: "valueTitle-G1_Pfvwd",
        valueValue: "valueValue-G1_Pfvwd",
        hideUniportantValueItems: "hideUniportantValueItems-G1_Pfvwd",
        unimportant: "unimportant-G1_Pfvwd",
        valuesWrapper: "valuesWrapper-G1_Pfvwd",
        wrappable: "wrappable-G1_Pfvwd",
        directionColumn: "directionColumn-G1_Pfvwd",
        titleWrapper: "titleWrapper-G1_Pfvwd",
        button: "button-G1_Pfvwd",
        statusesWrapper: "statusesWrapper-G1_Pfvwd",
        buttonsWrapper: "buttonsWrapper-G1_Pfvwd",
        buttons: "buttons-G1_Pfvwd",
        noActions: "noActions-G1_Pfvwd",
        title: "title-G1_Pfvwd",
        intervalTitle: "intervalTitle-G1_Pfvwd",
        disabled: "disabled-G1_Pfvwd",
        disabledOnInterval: "disabledOnInterval-G1_Pfvwd",
        withDot: "withDot-G1_Pfvwd",
        withCustomTextColor: "withCustomTextColor-G1_Pfvwd",
        study: "study-G1_Pfvwd",
        mainTitle: "mainTitle-G1_Pfvwd",
        descTitle: "descTitle-G1_Pfvwd",
        hideValues: "hideValues-G1_Pfvwd",
        has5Buttons: "has5Buttons-G1_Pfvwd",
        stayInHoveredMode: "stayInHoveredMode-G1_Pfvwd",
        withTail: "withTail-G1_Pfvwd",
        loading: "loading-G1_Pfvwd",
        loader: "loader-G1_Pfvwd",
        providerTitle: "providerTitle-G1_Pfvwd",
        exchangeTitle: "exchangeTitle-G1_Pfvwd",
        styleTitle: "styleTitle-G1_Pfvwd",
        minHideIntervalTitle: "minHideIntervalTitle-G1_Pfvwd",
        microHideIntervalTitle: "microHideIntervalTitle-G1_Pfvwd",
        hideExchangeProviderTitles: "hideExchangeProviderTitles-G1_Pfvwd",
        flagged: "flagged-G1_Pfvwd",
        medium: "medium-G1_Pfvwd",
        minimized: "minimized-G1_Pfvwd",
        micro: "micro-G1_Pfvwd",
        onlyOneButtonCanBeStick: "onlyOneButtonCanBeStick-G1_Pfvwd",
        touchMode: "touchMode-G1_Pfvwd",
        buttonIcon: "buttonIcon-G1_Pfvwd",
        flag: "flag-G1_Pfvwd",
        invisibleHover: "invisibleHover-G1_Pfvwd",
        eye: "eye-G1_Pfvwd",
        eyeLoading: "eyeLoading-G1_Pfvwd",
        "eye-animation": "eye-animation-G1_Pfvwd",
        intervalEye: "intervalEye-G1_Pfvwd",
        markerContainer: "markerContainer-G1_Pfvwd",
        flagWrapper: "flagWrapper-G1_Pfvwd",
        sourcesWrapper: "sourcesWrapper-G1_Pfvwd",
        legendMainSourceWrapper: "legendMainSourceWrapper-G1_Pfvwd",
        sources: "sources-G1_Pfvwd",
        toggler: "toggler-G1_Pfvwd pane-button-Cky0LHBF",
        onlyOneSourceShown: "onlyOneSourceShown-G1_Pfvwd",
        counter: "counter-G1_Pfvwd",
        iconArrow: "iconArrow-G1_Pfvwd",
        objectTree: "objectTree-G1_Pfvwd",
        closed: "closed-G1_Pfvwd",
        objectsTreeCanBeShown: "objectsTreeCanBeShown-G1_Pfvwd",
      };
    },
    18940: (e) => {
      e.exports = {
        loader: "loader-vqx5DqPL",
        loaderItem: "loaderItem-vqx5DqPL",
        "loader-animation": "loader-animation-vqx5DqPL",
        touchMode: "touchMode-vqx5DqPL",
      };
    },
    58064: (e) => {
      e.exports = {
        "css-value-pane-controls-padding-left": "1px",
        "css-value-pane-controls-padding-right": "5px",
        css_value_pane_controls_margin_top: "6",
        css_value_pane_controls_button_size: "19",
        css_value_pane_controls_button_touch_size: "19",
        paneControls: "paneControls-dKqC8zmq",
        hidden: "hidden-dKqC8zmq",
        forceHidden: "forceHidden-dKqC8zmq",
        button: "button-dKqC8zmq pane-button-Cky0LHBF",
        buttonIcon: "buttonIcon-dKqC8zmq",
        minimize: "minimize-dKqC8zmq",
        restore: "restore-dKqC8zmq",
        newButton: "newButton-dKqC8zmq",
        touchMode: "touchMode-dKqC8zmq",
        maximize: "maximize-dKqC8zmq",
        collapse: "collapse-dKqC8zmq",
        "maximize-animation-up-bracket":
          "maximize-animation-up-bracket-dKqC8zmq",
        "maximize-animation-down-bracket":
          "maximize-animation-down-bracket-dKqC8zmq",
        "minimize-animation-up-bracket":
          "minimize-animation-up-bracket-dKqC8zmq",
        "minimize-animation-down-bracket":
          "minimize-animation-down-bracket-dKqC8zmq",
        up: "up-dKqC8zmq",
        "up-animation": "up-animation-dKqC8zmq",
        down: "down-dKqC8zmq",
        "down-animation": "down-animation-dKqC8zmq",
        buttonsWrapper: "buttonsWrapper-dKqC8zmq",
      };
    },
    62927: (e) => {
      e.exports = {
        blockHidden: "blockHidden-Cky0LHBF",
        "pane-button": "pane-button-Cky0LHBF",
      };
    },
    98532: (e) => {
      e.exports = {
        "css-value-small-size": "18px",
        "css-value-medium-size": "22px",
        "css-value-large-size": "28px",
        "css-value-border-radius-small-size": "9px",
        "css-value-border-radius-medium-size": "11px",
        "css-value-border-radius-large-size": "8px",
        statuses: "statuses-sRKQyF_z",
        statusItem: "statusItem-sRKQyF_z",
        small: "small-sRKQyF_z",
        medium: "medium-sRKQyF_z",
        large: "large-sRKQyF_z",
        blinking: "blinking-sRKQyF_z",
        oneWidgetsVisible: "oneWidgetsVisible-sRKQyF_z",
        twoWidgetsVisible: "twoWidgetsVisible-sRKQyF_z",
        threeWidgetsVisible: "threeWidgetsVisible-sRKQyF_z",
        "blinking-animation": "blinking-animation-sRKQyF_z",
        marketStatusOpen: "marketStatusOpen-sRKQyF_z",
        marketStatusClose: "marketStatusClose-sRKQyF_z",
        marketStatusPre: "marketStatusPre-sRKQyF_z",
        marketStatusPost: "marketStatusPost-sRKQyF_z",
        marketStatusHoliday: "marketStatusHoliday-sRKQyF_z",
        marketStatusExpired: "marketStatusExpired-sRKQyF_z",
        invalidSymbol: "invalidSymbol-sRKQyF_z",
        replayModeAutoPlay: "replayModeAutoPlay-sRKQyF_z",
        replayModePause: "replayModePause-sRKQyF_z",
        replayModePointSelect: "replayModePointSelect-sRKQyF_z",
        "blinking-animation-custom": "blinking-animation-custom-sRKQyF_z",
        notAccurate: "notAccurate-sRKQyF_z",
        delay: "delay-sRKQyF_z",
        eod: "eod-sRKQyF_z",
        dataProblemHigh: "dataProblemHigh-sRKQyF_z",
        dataProblemLow: "dataProblemLow-sRKQyF_z",
      };
    },
    3791: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { ControlBarNavigation: () => K });
      var s = i(50151),
        l = i(44352),
        o = i(32563),
        n = i(2484),
        a = i(11954),
        r = i(80142),
        d = i(66032),
        u = i(61814),
        h = i(49483),
        c = i(68335),
        _ = (i(51768), i(47424)),
        p = i(94881),
        m = i(15741),
        g = i(88398),
        v = i(70340),
        b = i(45697),
        w = i(50119),
        y = i(62884),
        S = i(50662),
        M = i(42205),
        f = i(3106),
        C = i(78360);
      i(49021);
      const E = (0, c.humanReadableModifiers)(c.Modifiers.Alt, !1),
        k = (0, c.humanReadableModifiers)(c.Modifiers.Shift, !1),
        V = (0, c.humanReadableModifiers)(c.Modifiers.Mod, !1),
        x = (0, u.hotKeySerialize)({ keys: [E, "R"], text: "{0} + {1}" }),
        W = (0, u.hotKeySerialize)({
          keys: [E, "Click", E, "Enter"],
          text: "{0} + {1}, {2} + {3}",
        }),
        T = (0, u.hotKeySerialize)({ keys: [w], text: "{0}" }),
        L = (0, u.hotKeySerialize)({ keys: [y], text: "{0}" }),
        A = (0, u.hotKeySerialize)({ keys: [V, S], text: "{0} + {1}" }),
        H = (0, u.hotKeySerialize)({ keys: [V, M], text: "{0} + {1}" }),
        P = (0, u.hotKeySerialize)({
          keys: [E, k, y],
          text: "{0} + {1} + {2}",
        }),
        D = l.t(null, void 0, i(47602)),
        B = l.t(null, void 0, i(61311)),
        z = l.t(null, void 0, i(56470)),
        I = l.t(null, void 0, i(48293)),
        N = l.t(null, void 0, i(40653)),
        O = l.t(null, void 0, i(35809)),
        R = l.t(null, void 0, i(34301)),
        F = l.t(null, void 0, i(26721)),
        G = `<div class="control-bar-wrapper">\n\t<div class="control-bar control-bar--hidden">\n\t\t<div class="control-bar__group js-btn-group js-btn-group-zoom">\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-out apply-common-tooltip" title="${D}" data-tooltip-hotkey="${H}">\n\t\t\t\t${p}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-in apply-common-tooltip" title="${B}" data-tooltip-hotkey="${A}">\n\t\t\t\t${g}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-maximize">\n\t\t\t<div class="control-bar__btn control-bar__btn--maximize apply-common-tooltip" title="${z}" data-tooltip-hotkey="${W}">\n\t\t\t\t${f}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--minimize js-hidden apply-common-tooltip" title="${I}" data-tooltip-hotkey="${W}">\n\t\t\t\t${C}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-scroll">\n\t\t\t<div class="control-bar__btn control-bar__btn--move-left apply-common-tooltip" title="${N}" data-tooltip-hotkey="${T}">\n\t\t\t\t${_}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--move-right apply-common-tooltip" title="${O}" data-tooltip-hotkey="${L}">\n\t\t\t\t${v}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-reset-scale">\n\t\t\t<div class="control-bar__btn control-bar__btn--turn-button control-bar__btn--btn-hidden apply-common-tooltip js-btn-reset" title="${R}" data-tooltip-hotkey="${x}">\n\t\t\t\t${m}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>`,
        U = `<div class="control-bar control-bar__btn control-bar__btn--back-present control-bar__btn--btn-hidden apply-common-tooltip" title="${F}" data-tooltip-hotkey="${P}">\n\t${b}\n</div>`,
        j = h.CheckMobile.any(),
        $ = "control-bar__btn--btn-hidden",
        q = {
          zoomInOut: !0,
          maximize: !0,
          scrollLeftRight: !0,
          resetScale: !0,
          goToRealtime: !0,
        };
      class K {
        constructor(e, t, i) {
          (this._widget = (0, s.ensureNotNull)(
            (0, d.parseHtml)(G).querySelector(".control-bar-wrapper")
          )),
            (this._controlBar = (0, s.ensureNotNull)(
              this._widget.querySelector(".control-bar")
            )),
            (this._back = (0, s.ensureNotNull)(
              (0, d.parseHtml)(U).querySelector(
                ".control-bar__btn--back-present"
              )
            )),
            (this._btnGroups = Array.from(
              this._controlBar.querySelectorAll(".js-btn-group")
            )),
            (this._backButtonVisible = !1),
            (this._boundMouseHandler = null),
            (this._chartModel = null),
            (this._checkIntervalId = 0),
            (this._controlBarVisible = !1),
            (this._priceAxisChanged = null),
            (this._resetAvailabilityChanged = null),
            (this._priceAxisName = "right"),
            (this._rafId = 0),
            (this._visibilityTypeProperty = null),
            (this._boundUpdateMaximizeButtonsVisibility =
              this._updateMaximizeButtonsVisibility.bind(this)),
            (this._boundToggleFullscreenButtons =
              this._toggleFullscreenButtons.bind(this)),
            (this._paneWidth = 0),
            (this._leftPriceScaleWidth = 0),
            (this._rightPriceScaleWidth = 0),
            (this._chart = e),
            (this._parent = t),
            (this._options = Object.assign({}, q, i)),
            (this._visibilityPrioritizedGroups = this._initGroupDescriptions()),
            this._init(),
            this._initHandlers(),
            this.updatePosition();
        }
        destroy() {
          if (
            (null !== this._visibilityTypeProperty &&
              (this._visibilityTypeProperty.unsubscribe(
                this,
                this._onVisibilityTypeChange
              ),
              (this._visibilityTypeProperty = null)),
            null !== this._boundMouseHandler &&
              (this._parent.removeEventListener(
                "mousemove",
                this._boundMouseHandler,
                !1
              ),
              this._parent.removeEventListener(
                "mouseleave",
                this._boundMouseHandler,
                !1
              ),
              (this._boundMouseHandler = null)),
            null !== this._priceAxisChanged &&
              (this._priceAxisChanged.unsubscribe(
                this,
                this._updateBackBtnPosition
              ),
              (this._priceAxisChanged = null)),
            clearInterval(this._checkIntervalId),
            null !== this._resetAvailabilityChanged)
          ) {
            this._resetAvailabilityChanged.unsubscribe(
              this,
              this._updateResetScalesButtonVisibility
            );
            const e = this._chart.getResizerDetacher();
            e.fullscreenable.unsubscribe(
              this._boundUpdateMaximizeButtonsVisibility
            ),
              e.fullscreen.unsubscribe(this._boundToggleFullscreenButtons),
              (this._resetAvailabilityChanged = null);
          }
          this._chart = null;
        }
        updatePosition() {
          const e = this._chart.paneWidgets();
          if (0 === e.length) return;
          (this._paneWidth = e[0].width()),
            (this._leftPriceScaleWidth =
              this._chart.getPriceAxisMaxWidthByName("left")),
            (this._rightPriceScaleWidth =
              this._chart.getPriceAxisMaxWidthByName("right"));
          const t = this._chart.timeAxisHeight() + this._bottomMargin();
          (this._widget.style.bottom = `${t}px`),
            (this._back.style.bottom = `${t}px`),
            this._updateBtnGroupVisibility();
        }
        _bottomMargin() {
          var e;
          const t = this._chart.paneWidgets();
          return (null !== (e = this._chart.maximizedPaneWidget()) &&
          void 0 !== e
            ? e
            : t[t.length - 1]
          ).containsMainSeries()
            ? 32
            : 5;
        }
        _init() {
          if (h.CheckMobile.any())
            for (const e of this._btnGroups) e.classList.add("js-hidden");
          (this._buttons = {
            zoomIn: this._widget.querySelector(".control-bar__btn--zoom-in"),
            zoomOut: this._widget.querySelector(".control-bar__btn--zoom-out"),
            moveLeft: this._widget.querySelector(
              ".control-bar__btn--move-left"
            ),
            moveRight: this._widget.querySelector(
              ".control-bar__btn--move-right"
            ),
            turn: this._widget.querySelector(".control-bar__btn--turn-button"),
            maximize: this._widget.querySelector(".control-bar__btn--maximize"),
            minimize: this._widget.querySelector(".control-bar__btn--minimize"),
          }),
            this._initVisibility(),
            this._parent.appendChild(this._widget),
            this._parent.appendChild(this._back),
            (this._backButtonVisible = !1),
            (this._priceAxisName = (0, r.isRtl)() ? "left" : "right"),
            this._chart.withModel(this, () => {
              (this._chartModel = this._chart.model()),
                (this._priceAxisChanged =
                  this._chart.getPriceAxisWidthChangedByName(
                    this._priceAxisName
                  )),
                (this._resetAvailabilityChanged = this._chartModel
                  .model()
                  .isScalesResetAvailableChanged()),
                this._priceAxisChanged.subscribe(
                  this,
                  this._updateBackBtnPosition
                ),
                this._resetAvailabilityChanged.subscribe(
                  this,
                  this._updateResetScalesButtonVisibility
                );
              const e = this._chart.getResizerDetacher();
              e.fullscreenable.subscribe(
                this._boundUpdateMaximizeButtonsVisibility
              ),
                e.fullscreen.subscribe(this._boundToggleFullscreenButtons),
                this._updateMaximizeButtonsVisibility(),
                this._updateBackBtnPosition(),
                this._back.addEventListener("click", () => {
                  null !== this._chartModel &&
                    this._chartModel.timeScale().scrollToRealtime(!0);
                }),
                (this._checkIntervalId = setInterval(() => this._check(), 1e3));
            });
        }
        _initHandlers() {
          const e = o.mobiletouch ? "touchstart" : "mousedown",
            t = o.mobiletouch ? ["touchend"] : ["mouseup", "mouseout"];
          this._buttons.moveLeft.addEventListener(e, (e) => {
            e.preventDefault(),
              this._chart.scrollHelper().moveByBar(1),
              this._trackEvent("Move Left");
          }),
            this._buttons.moveRight.addEventListener(e, (e) => {
              e.preventDefault(),
                this._chart.scrollHelper().moveByBar(-1),
                this._trackEvent("Move Right");
            });
          for (const e of t)
            this._buttons.moveLeft.addEventListener(e, () =>
              this._chart.scrollHelper().stopMoveByBar()
            ),
              this._buttons.moveRight.addEventListener(e, () =>
                this._chart.scrollHelper().stopMoveByBar()
              );
          this._buttons.turn.addEventListener("click", (e) => {
            e.preventDefault(),
              this._chart.GUIResetScales(),
              this._trackEvent("Reset to Default Settings");
          }),
            this._buttons.zoomOut.addEventListener("click", (e) => {
              e.preventDefault(),
                null !== this._chartModel && this._chartModel.zoomOut(),
                this._trackEvent("Zoom Out");
            }),
            this._buttons.zoomIn.addEventListener("click", (e) => {
              e.preventDefault(),
                null !== this._chartModel && this._chartModel.zoomIn(),
                this._trackEvent("Zoom In");
            }),
            this._buttons.maximize.addEventListener("click", (e) => {
              e.preventDefault(),
                this._chart.setActive(!0),
                this._chart.getResizerDetacher().requestFullscreen(),
                this._trackEvent(" Maximize Chart");
            }),
            this._buttons.minimize.addEventListener("click", (e) => {
              e.preventDefault(),
                this._chart.getResizerDetacher().exitFullscreen(),
                this._trackEvent(" Restore Chart");
            });
          const i = (e) =>
            e.addEventListener("contextmenu", (e) => e.preventDefault());
          i(this._buttons.moveLeft),
            i(this._buttons.moveRight),
            i(this._buttons.turn),
            i(this._buttons.zoomOut),
            i(this._buttons.zoomIn),
            i(this._buttons.minimize),
            i(this._buttons.maximize);
        }
        _initGroupDescriptions() {
          return [
            {
              shouldBeHiddenOnMobile: !1,
              available: this._isMaximizeButtonAvailable.bind(this),
              className: "js-btn-group-maximize",
              element: this._getBtnGroup("js-btn-group-maximize"),
              totalWidth: 50,
            },
            {
              shouldBeHiddenOnMobile: !1,
              available: () => this._options.resetScale,
              className: "js-btn-group-reset-scale",
              element: this._getBtnGroup("js-btn-group-reset-scale"),
              totalWidth: 50,
            },
            {
              shouldBeHiddenOnMobile: !n.enabled(
                "show_zoom_and_move_buttons_on_touch"
              ),
              available: () => this._options.zoomInOut,
              className: "js-btn-group-zoom",
              element: this._getBtnGroup("js-btn-group-zoom"),
              totalWidth: 86,
            },
            {
              shouldBeHiddenOnMobile: !n.enabled(
                "show_zoom_and_move_buttons_on_touch"
              ),
              available: () => this._options.scrollLeftRight,
              className: "js-btn-group-scroll",
              element: this._getBtnGroup("js-btn-group-scroll"),
              totalWidth: 86,
            },
          ];
        }
        _check() {
          if (null === this._chartModel || !this._options.goToRealtime) return;
          const e = this._chartModel.timeScale().rightOffset() < 0;
          e !== this._backButtonVisible &&
            ((this._backButtonVisible = e),
            this._back.classList.toggle($, !this._backButtonVisible));
        }
        _initVisibility() {
          (this._visibilityTypeProperty = (0, a.actualBehavior)()),
            this._visibilityTypeProperty.subscribe(
              this,
              this._onVisibilityTypeChange
            ),
            this._onVisibilityTypeChange();
        }
        _onVisibilityTypeChange() {
          if (null === this._visibilityTypeProperty) return;
          const e = this._visibilityTypeProperty.value();
          "alwaysOn" === e || "alwaysOff" === e
            ? ((this._controlBarVisible = "alwaysOn" === e),
              null !== this._boundMouseHandler &&
                (this._parent.removeEventListener(
                  "mousemove",
                  this._boundMouseHandler,
                  !1
                ),
                this._parent.removeEventListener(
                  "mouseleave",
                  this._boundMouseHandler,
                  !1
                ),
                (this._boundMouseHandler = null)))
            : ((this._controlBarVisible = !1),
              this._boundMouseHandler ||
                ((this._boundMouseHandler =
                  this._visibilityMouseHandler.bind(this)),
                this._parent.addEventListener(
                  "mousemove",
                  this._boundMouseHandler
                ),
                this._parent.addEventListener(
                  "mouseleave",
                  this._boundMouseHandler
                ))),
            this._updateControlBarVisibility();
        }
        _visibilityMouseHandler(e) {
          if (e.buttons) return;
          if (null !== this._chartModel && this._chartModel.lineBeingCreated())
            return;
          let t = "mouseleave" !== e.type;
          if ("mousemove" === e.type) {
            const i = this._widget.getBoundingClientRect(),
              s = 100 - this._bottomMargin();
            t =
              e.clientX >= i.left - 100 &&
              e.clientX <= i.right + 100 &&
              e.clientY >= i.top - s &&
              e.clientY <= i.bottom + 100;
          }
          this._controlBarVisible !== t &&
            ((this._controlBarVisible = t),
            null === this._rafId &&
              (this._rafId =
                this._controlBar.ownerDocument.defaultView.requestAnimationFrame(
                  this._updateControlBarVisibility.bind(this)
                )));
        }
        _updateControlBarVisibility() {
          (this._rafId = null),
            this._controlBar.classList.toggle(
              "control-bar--hidden",
              !this._controlBarVisible
            );
        }
        _updateBackBtnPosition() {
          if (
            "left" === this._priceAxisName ||
            "right" === this._priceAxisName
          ) {
            const e =
              this._chart.getPriceAxisMaxWidthByName(this._priceAxisName) + 14;
            e && (this._back.style.marginRight = `${e}px`);
          }
        }
        _updateBtnGroupVisibility() {
          const e = this._leftPriceScaleWidth + this._paneWidth,
            t = (e + this._rightPriceScaleWidth) / 2;
          let i = 2 * Math.min(e - t, t - this._leftPriceScaleWidth) - 50 - 50,
            s = !1;
          for (const e of this._visibilityPrioritizedGroups) {
            e.enoughSpaceForGroup = !1;
            e.available() &&
              (!j || !e.shouldBeHiddenOnMobile) &&
              ((i -= e.totalWidth),
              (e.enoughSpaceForGroup = i >= 0 && !s),
              (s = s || !e.enoughSpaceForGroup)),
              !e.enoughSpaceForGroup !==
                e.element.classList.contains("js-hidden") &&
                e.element.classList.toggle("js-hidden", !e.enoughSpaceForGroup);
          }
          this._updateControlBarPosition();
        }
        _getBtnGroup(e) {
          return (0, s.ensureDefined)(
            this._btnGroups.find((t) => t.classList.contains(e))
          );
        }
        _updateControlBarPosition() {
          const e = this._visibilityPrioritizedGroups.reduce(
              (e, t) => e + (t.enoughSpaceForGroup ? t.totalWidth : 0),
              0
            ),
            t =
              (this._paneWidth +
                this._leftPriceScaleWidth +
                this._rightPriceScaleWidth) /
                2 -
              Math.ceil(e / 2);
          this._widget.style.left = `${t}px`;
        }
        _updateResetScalesButtonVisibility() {
          if (null === this._chartModel) return;
          const e = this._chartModel.model().isScalesResetAvailable();
          this._buttons.turn.classList.toggle($, !e);
        }
        _updateMaximizeButtonsVisibility() {
          this._updateBtnGroupVisibility();
        }
        _toggleFullscreenButtons() {
          const e = this._chart.getResizerDetacher().fullscreen.value();
          this._buttons.maximize.classList.toggle("js-hidden", e),
            this._buttons.minimize.classList.toggle("js-hidden", !e);
        }
        _isMaximizeButtonAvailable() {
          return this._options.maximize, !1;
        }
        _trackEvent(e) {
          0;
        }
      }
    },
    19401: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { LegendWidget: () => Ks });
      var s = i(27714),
        l = i(50151),
        o = i(40549),
        n = i.n(o),
        a = i(65665),
        r = i(24377),
        d = i(2484),
        u = i(49483),
        h = i(76289),
        c = i(59255),
        _ = i(78029),
        p = i(35861),
        m = i(80007),
        g = i(62927);
      var v = i(18940);
      class b extends class {
        constructor(e, t = {}) {
          (this._loadingEl = document.createElement("span")),
            this._renderLoading(t),
            this.toggleVisibility(!1),
            e.appendChild(this._loadingEl);
        }
        toggleVisibility(e) {
          this._loadingEl.classList.toggle(g.blockHidden, !e);
        }
        _renderLoading(e) {
          const { className: t } = e;
          t && this._loadingEl.classList.add(t);
        }
      } {
        _renderLoading(e) {
          super._renderLoading(e),
            (this._loadingEl.innerHTML = `\n\t\t\t<span class="${v.loaderItem}"></span>\n\t\t\t<span class="${v.loaderItem}"></span>\n\t\t\t<span class="${v.loaderItem}"></span>\n\t\t`),
            this._loadingEl.classList.add(v.loader);
        }
      }
      function w(e, t) {
        null === e.firstChild
          ? (e.textContent = t)
          : (e.firstChild.nodeValue = t);
      }
      var y = i(39653);
      const S = u.CheckMobile.any();
      class M {
        constructor(e, t, i) {
          (this._el = null),
            (this._firstBlockWrapper = null),
            (this._titleParentEl = null),
            (this._titleElements = []),
            (this._valuesParentEl = null),
            (this._valuesAdditionalWrapperEl = null),
            (this._valuesElements = []),
            (this._actionsParentEl = null),
            (this._actionAdditionalWrapperEl = null),
            (this._stayInHoveredMode = !1),
            (this._mode = 4),
            (this._statusesWrapper = null),
            (this._resizeObserver = null),
            (this._hideInvisibleHover = null),
            (this._hideValues = null),
            (this._allButtonsWidth = null),
            (this._lastStatusesWrapperWidth = null),
            (this._lastActionsWrapperWidth = null),
            (this._showActionsHandler = null),
            (this._hideActionsHandler = null),
            (this._selectedSourceHandler = null),
            (this._mouseEventHandlers = []),
            (this._disableTimeout = null),
            (this._loader = null),
            (this._updateDisabledState = (e = this._disabled.value()) => {
              null !== this._el &&
                (this._el.classList.toggle(y.disabled, e),
                this._updateLoadingState(),
                this._updateStatusWidgetVisibility(e),
                this._updateTitleMaxWidth());
            }),
            (this._updateLoadingState = (e = this._loading.value()) => {
              if (null !== this._el) {
                const t = this._el.classList;
                t.toggle(y.eyeLoading, e && !this._disabled.value()),
                  t.toggle(y.loading, e);
              }
              null !== this._loader && this._loader.toggleVisibility(e);
            }),
            (this._model = e),
            (this._parentEl = t),
            (this._disabled = this._model.disabled().spawn()),
            this._disabled.subscribe(this._updateDisabledState),
            (this._disabledOnInterval = this._model
              .disabledOnInterval()
              .spawn()),
            this._disabledOnInterval.subscribe(
              this._updateDisabledOnIntervalState.bind(this)
            ),
            (this._selected = this._model.selected().spawn()),
            this._selected.subscribe(this._updateSelectedState.bind(this)),
            (this._loading = this._model.loading().spawn()),
            this._loading.subscribe(
              (function (e, t) {
                let i = 0;
                return (s) => {
                  clearTimeout(i), s ? e() : (i = setTimeout(e, t));
                };
              })(this._updateLoadingState, 700)
            ),
            (this._isTitleHidden = this._model.isTitleHidden().spawn()),
            (this._isValuesHidden = this._model.isValuesHidden().spawn()),
            (this._isRowHidden = this._model.isRowHidden().spawn()),
            this._isTitleHidden.subscribe(this._updateShowTitles.bind(this)),
            this._isValuesHidden.subscribe(this._updateShowValues.bind(this)),
            this._isRowHidden.subscribe(this._updateShowLine.bind(this)),
            this._createTitlesSpawns();
          for (let e = 0; e < this._titlesSpawns.length; e++)
            this._titlesSpawns[e].title.subscribe(
              this._updateTitlesHandler.bind(this, e)
            );
          (this._values = this._model.values().spawn()),
            this._values.subscribe(this._updateValues.bind(this)),
            this._createValuesSpawns(),
            this._addValuesSpawnsSubscriptions(),
            (this._actionsSpawnArray = this._model
              .actions()
              .map((e) => ({
                visible: e.visible.spawn(),
                title: void 0 === e.title ? null : e.title.spawn(),
              })));
          for (let e = 0; e < this._actionsSpawnArray.length; e++) {
            this._actionsSpawnArray[e].visible.subscribe(
              this._updateActionVisibilities.bind(this, e)
            );
            const t = this._actionsSpawnArray[e].title;
            null !== t && t.subscribe(this._updateActionTitle.bind(this, e));
          }
          (this._withActions = i.withActions),
            this._render(),
            this._updateStates(),
            this._updateShowTitles(),
            this._updateShowValues(),
            this._updateShowLine(),
            null !== this._valuesParentEl &&
              (this._loader = new b(this._valuesParentEl, {
                className: y.loader,
              })),
            (this._customTextColor = i.customTextColor.spawn()),
            this._customTextColor.subscribe(
              this._updateCustomTextColor.bind(this)
            ),
            this._updateCustomTextColor(),
            this._withActions &&
              ((this._showActionsHandler = (0, m.wrapHandlerWithPreventEvent)(
                this._showActions.bind(this)
              )),
              (this._hideActionsHandler = (0, m.wrapHandlerWithPreventEvent)(
                this._hideActions.bind(this)
              )),
              (this._selectedSourceHandler = (0, m.wrapHandlerWithPreventEvent)(
                this._model.setSourceSelected.bind(this._model)
              )),
              null !== this._titleParentEl &&
                (this._titleParentEl.addEventListener(
                  "touchend",
                  this._selectedSourceHandler
                ),
                this._titleParentEl.addEventListener(
                  "mousedown",
                  this._selectedSourceHandler
                ),
                S ||
                  (this._titleParentEl.addEventListener(
                    "mouseenter",
                    this._showActionsHandler
                  ),
                  this._titleParentEl.addEventListener(
                    "mouseleave",
                    this._hideActionsHandler
                  )),
                this._mouseEventHandlers.push(
                  new p.MouseEventHandler(this._titleParentEl, {
                    mouseDoubleClickEvent: this._model.onShowSettings.bind(
                      this._model
                    ),
                    doubleTapEvent: this._model.onShowSettings.bind(
                      this._model
                    ),
                  })
                )),
              null === this._actionAdditionalWrapperEl ||
                null === this._actionsParentEl ||
                S ||
                (this._actionAdditionalWrapperEl.addEventListener(
                  "mouseenter",
                  this._showActionsHandler
                ),
                this._actionAdditionalWrapperEl.addEventListener(
                  "mouseleave",
                  this._hideActionsHandler
                ),
                this._actionsParentEl.addEventListener("contextmenu", (e) => {
                  e.preventDefault(), e.stopPropagation();
                })));
        }
        destroy() {
          var e, t;
          this._disabled.destroy(),
            this._disabledOnInterval.destroy(),
            this._selected.destroy(),
            this._loading.destroy(),
            this._isTitleHidden.destroy(),
            this._isValuesHidden.destroy(),
            this._isRowHidden.destroy(),
            this._customTextColor.destroy(),
            null !== this._disableTimeout && clearTimeout(this._disableTimeout);
          for (const e of this._titlesSpawns) e.title.destroy();
          if (null !== this._titleParentEl) {
            for (const e of this._mouseEventHandlers) e.destroy();
            (this._titleElements = []),
              this._withActions &&
                null !== this._selectedSourceHandler &&
                null !== this._showActionsHandler &&
                null !== this._hideActionsHandler &&
                (this._titleParentEl.removeEventListener(
                  "touchend",
                  this._selectedSourceHandler
                ),
                this._titleParentEl.removeEventListener(
                  "mousedown",
                  this._selectedSourceHandler
                ),
                S ||
                  (this._titleParentEl.removeEventListener(
                    "mouseenter",
                    this._showActionsHandler
                  ),
                  this._titleParentEl.removeEventListener(
                    "mouseleave",
                    this._hideActionsHandler
                  ))),
              (this._titleParentEl = null);
          }
          for (const e of this._actionsSpawnArray) {
            e.visible.destroy();
            const t = e.title;
            null !== t && t.destroy();
          }
          if (
            (null !== this._actionAdditionalWrapperEl &&
              (this._withActions &&
                null !== this._showActionsHandler &&
                null !== this._hideActionsHandler &&
                !S &&
                (this._actionAdditionalWrapperEl.removeEventListener(
                  "mouseenter",
                  this._showActionsHandler
                ),
                this._actionAdditionalWrapperEl.removeEventListener(
                  "mouseleave",
                  this._hideActionsHandler
                )),
              (this._actionAdditionalWrapperEl = null)),
            (this._actionsParentEl = null),
            this._removeValuesSpawnsSubscriptions(),
            this._values.destroy(),
            null !== this._valuesParentEl &&
              ((this._valuesElements = []), (this._valuesParentEl = null)),
            null === (e = this._hideInvisibleHover) ||
              void 0 === e ||
              e.destroy(),
            null === (t = this._hideValues) || void 0 === t || t.destroy(),
            null !== this._resizeObserver &&
              (this._resizeObserver.disconnect(),
              (this._resizeObserver = null)),
            null !== this._el)
          ) {
            (0, l.ensureNotNull)(this._el.parentNode).removeChild(this._el),
              (this._el = null);
          }
        }
        getHeight() {
          return null === this._el ? null : 24;
        }
        updateMode(e) {
          (this._mode === e && null !== this._allButtonsWidth) ||
            ((this._mode = e), this._updateAllButtonsWidth());
        }
        _render() {
          this._renderTitle(),
            this._renderActions(),
            this._renderValues(),
            (this._el = document.createElement("div")),
            (this._firstBlockWrapper = document.createElement("div")),
            this._firstBlockWrapper.classList.add(y.noWrapWrapper),
            this._firstBlockWrapper.appendChild(
              (0, l.ensureNotNull)(this._titleParentEl)
            ),
            null !== this._actionsParentEl &&
              this._firstBlockWrapper.appendChild(this._actionsParentEl),
            this._el.appendChild(this._firstBlockWrapper),
            this._el.appendChild((0, l.ensureNotNull)(this._valuesParentEl)),
            this._parentEl.append(this._el);
        }
        _renderTitle() {
          null === this._titleParentEl &&
            ((this._titleParentEl = document.createElement("div")),
            this._titleParentEl.classList.add(y.titleWrapper));
          const e = this._titleParentEl;
          for (let t = 0; t < this._titlesSpawns.length; t++) {
            const i = this._titlesSpawns[t].title.value(),
              s = this._titlesSpawns[t].class,
              l = document.createElement("div");
            l.classList.add(y.title, s, "apply-overflow-tooltip"),
              (l.dataset.name = "legend-source-title"),
              i.length > 0
                ? (l.appendChild(document.createTextNode(i)),
                  l.classList.add(y.withDot))
                : l.classList.add(g.blockHidden),
              e.appendChild(l),
              this._titleElements.push(l);
          }
        }
        _renderActions() {
          if (!this._withActions) return;
          null === this._actionsParentEl &&
            ((this._actionsParentEl = document.createElement("div")),
            this._actionsParentEl.classList.add(y.buttonsWrapper),
            this._parentEl.append(this._actionsParentEl),
            (this._actionAdditionalWrapperEl = document.createElement("div")),
            this._actionAdditionalWrapperEl.classList.add(y.buttons),
            this._actionsParentEl.appendChild(this._actionAdditionalWrapperEl));
          const e = (0, l.ensureNotNull)(this._actionAdditionalWrapperEl),
            t = h.trackingModeIsAvailable ? "large" : "small";
          for (const i of this._model.actions()) {
            const s = (0, _.createActionElement)(
              i,
              y.button,
              y.buttonIcon,
              g.blockHidden,
              t
            );
            e.appendChild(s);
          }
        }
        _isWidthButtonsMode() {
          return (
            null !== this._el &&
            (this._el.classList.contains(y.withAction) ||
              this._disabled.value() ||
              this._selected.value() ||
              this._stayInHoveredMode)
          );
        }
        _updateTitlesHandler(e, t) {
          const i = (0, l.ensureNotNull)(this._titleElements[e]),
            s = 0 === t.length;
          i.classList.toggle(g.blockHidden, s),
            i.classList.toggle(y.withDot, !s),
            w(i, t);
        }
        _updateStates(e) {
          this._updateDisabledState(),
            this._updateDisabledOnIntervalState(),
            this._updateSelectedState(),
            this._updateLoadingState(),
            e && this._clearDisableState();
        }
        _updateValuesHTMLElHandler(e, t) {
          w((0, l.ensure)(this._valuesElements[e].value), t),
            this._updateShowValues();
        }
        _updateValueColorHandler(e, t = "") {
          (0, l.ensure)(this._valuesElements[e].value).style.color = t;
        }
        _updateValueVisibleHandler(e, t) {
          const i = (0, l.ensure)(this._valuesElements[e].value).closest(
            `.${y.valueItem}`
          );
          null !== i && i.classList.toggle(g.blockHidden, !t);
        }
        _updateShowLine() {
          null !== this._el &&
            this._el.classList.toggle(g.blockHidden, this._isRowHidden.value());
        }
        _createValuesSpawns() {
          this._valuesSpawnArray = this._values
            .value()
            .map((e) => ({
              value: e.value.spawn(),
              color: e.color.spawn(),
              visible: e.visible.spawn(),
              title: e.title.spawn(),
            }));
        }
        _removeValuesSpawnsSubscriptions() {
          for (const e of this._valuesSpawnArray)
            e.value.destroy(),
              e.color.destroy(),
              e.visible.destroy(),
              e.title.destroy();
          this._valuesSpawnArray = [];
        }
        _addValuesSpawnsSubscriptions() {
          for (let e = 0; e < this._valuesSpawnArray.length; e++) {
            const t = this._valuesSpawnArray[e];
            t.value.subscribe(this._updateValuesHTMLElHandler.bind(this, e)),
              t.color.subscribe(this._updateValueColorHandler.bind(this, e)),
              t.visible.subscribe(
                this._updateValueVisibleHandler.bind(this, e)
              ),
              t.title.subscribe(
                this._updateValuesTitleHTMLElHandler.bind(this, e)
              );
          }
        }
        _updateShowValues() {
          null !== this._valuesAdditionalWrapperEl &&
            this._valuesAdditionalWrapperEl.classList.toggle(
              g.blockHidden,
              this._isValuesShouldBeHidden()
            );
        }
        _isValuesShouldBeHidden() {
          return !this._valuesSpawnArray.some(
            (e) => e.value.value().length > 0
          );
        }
        _addStatusesWidget(e, t, i) {
          (this._statusesWrapper = document.createElement("div")),
            this._statusesWrapper.classList.add(y.statusesWrapper),
            this._statusesWrapper.appendChild(e),
            (0, l.ensureNotNull)(this._firstBlockWrapper).appendChild(
              this._statusesWrapper
            ),
            (this._hideInvisibleHover = t.spawn()),
            this._hideInvisibleHover.subscribe(
              this._updateInvisibleHoverMode.bind(this),
              { callWithLast: !0 }
            ),
            (this._hideValues = i.spawn()),
            this._hideValues.subscribe(this._updateHideValuesMode.bind(this), {
              callWithLast: !0,
            }),
            this._updateStatusWidgetVisibility(this._disabled.value()),
            (this._resizeObserver = new c.default(
              this._handlerRestrictTitleWidth.bind(this)
            )),
            null !== this._actionsParentEl &&
              this._resizeObserver.observe(this._actionsParentEl),
            this._resizeObserver.observe(this._statusesWrapper);
        }
        _updateTitleMaxWidth() {
          if (null === this._firstBlockWrapper) return;
          const e = this._allButtonsWidth || 0,
            t =
              (this._lastActionsWrapperWidth || 0) +
              (this._lastStatusesWrapperWidth || 0);
          this._isWidthButtonsMode()
            ? (this._firstBlockWrapper.style.maxWidth = `calc(100% - ${Math.max(
                e,
                t
              )}px)`)
            : (this._firstBlockWrapper.style.maxWidth =
                t > 0 ? `calc(100% - ${t}px)` : "");
        }
        _updateAllButtonsWidth() {
          (this._allButtonsWidth = this._getButtonsCount() * O + 1),
            this._updateTitleMaxWidth();
        }
        _updateInvisibleHoverMode(e) {
          null !== this._el && this._el.classList.toggle(y.invisibleHover, !e);
        }
        _updateHideValuesMode(e) {
          null !== this._el && this._el.classList.toggle(y.hideValues, e);
        }
        _showActions() {
          if (null === this._el || !this._withActions) return;
          this._el.classList.add(y.withAction);
          const e =
            null !== this._valuesParentEl &&
            null !== this._titleParentEl &&
            this._valuesParentEl.offsetTop === this._titleParentEl.offsetTop;
          this._el.classList.toggle(y.withTail, e), this._updateTitleMaxWidth();
        }
        _hideActions() {
          null !== this._el &&
            this._withActions &&
            !this._stayInHoveredMode &&
            (this._el.classList.remove(y.withAction),
            null !== this._valuesParentEl &&
              this._valuesParentEl.classList.remove(y.withTail),
            this._updateTitleMaxWidth());
        }
        _handlerRestrictTitleWidth(e) {
          if (
            null === this._actionsParentEl ||
            null === this._firstBlockWrapper
          )
            return;
          let t = null,
            i = null;
          for (const s of e)
            s.target === this._statusesWrapper && (t = s.contentRect.width),
              s.target === this._actionsParentEl && (i = s.contentRect.width);
          (t === this._lastStatusesWrapperWidth &&
            i === this._lastActionsWrapperWidth) ||
            (null !== t && (this._lastStatusesWrapperWidth = t),
            null !== i && (this._lastActionsWrapperWidth = i),
            this._updateTitleMaxWidth());
        }
        _clearDisableState() {
          null !== this._el &&
            (this._el.classList.remove(y.eyeLoading),
            this._el.classList.remove(y.disabled),
            this._updateStatusWidgetVisibility(this._disabled.value()),
            this._updateTitleMaxWidth());
        }
        _updateDisabledOnIntervalState() {
          var e;
          null === (e = this._el) ||
            void 0 === e ||
            e.classList.toggle(
              y.disabledOnInterval,
              this._disabledOnInterval.value()
            );
        }
        _updateSelectedState() {
          null !== this._el &&
            this._withActions &&
            this._el.classList.toggle(y.selected, this._selected.value());
        }
        _updateShowTitles() {
          null !== this._titleParentEl &&
            (this._titleParentEl.classList.toggle(
              g.blockHidden,
              this._isTitleHidden.value()
            ),
            null !== this._actionsParentEl &&
              this._actionsParentEl.classList.toggle(
                g.blockHidden,
                this._isTitleHidden.value()
              ));
        }
        _updateValues() {
          this._removeValuesSpawnsSubscriptions(),
            this._createValuesSpawns(),
            null !== this._valuesParentEl &&
              null !== this._valuesAdditionalWrapperEl &&
              ((this._valuesElements = []),
              (this._valuesAdditionalWrapperEl.innerHTML = "")),
            this._renderValues(),
            this._addValuesSpawnsSubscriptions(),
            this._updateShowValues();
        }
        _updateActionVisibilities(e) {
          null !== this._actionsParentEl &&
            this._actionsParentEl
              .querySelectorAll(`.${y.button}`)
              [e].classList.toggle(
                g.blockHidden,
                !this._actionsSpawnArray[e].visible.value()
              );
        }
        _updateActionTitle(e) {
          const t = this._actionsSpawnArray[e].title;
          null !== this._actionsParentEl &&
            null !== t &&
            this._actionsParentEl
              .querySelectorAll(`.${y.button}`)
              [e].setAttribute("title", t.value());
        }
        _updateCustomTextColor() {
          const e = this._customTextColor.value() || "";
          for (const t of this._titleElements)
            null !== t && (t.style.color = e);
          const t = (0, l.ensureNotNull)(this._valuesParentEl).querySelectorAll(
            `.${y.valueTitle}`
          );
          for (let i = 0; i < t.length; i++) t[i].style.color = e;
          (0, l.ensureNotNull)(this._el).classList.toggle(
            y.withCustomTextColor,
            Boolean(e)
          );
        }
        _updateStatusWidgetVisibility(e) {
          null !== this._statusesWrapper &&
            this._statusesWrapper.classList.toggle(g.blockHidden, e);
        }
      }
      class f extends M {
        constructor(e, t, i) {
          super(e, t, i),
            (this._clientHeight = null),
            (this._flagged = this._model.flagged().spawn()),
            this._flagged.subscribe(this._updateFlaggedState.bind(this)),
            this._updateStates(),
            i.statusWidgetEl &&
              this._addStatusesWidget(
                i.statusWidgetEl,
                i.hideInvisibleHover,
                i.hideValues
              ),
            this._selected.subscribe(this._updateTitleMaxWidth.bind(this));
        }
        destroy() {
          super.destroy(), void 0 !== this._flagged && this._flagged.destroy();
        }
        getHeight() {
          return null === this._el
            ? null
            : (null === this._clientHeight &&
                ((this._clientHeight = this._el.clientHeight),
                0 === this._clientHeight && (this._clientHeight = null)),
              this._clientHeight);
        }
        _getButtonsCount() {
          return 1 === this._mode ? 1 : 3;
        }
        _render() {
          super._render();
          const e = (0, l.ensureNotNull)(this._el);
          e.classList.add(y.item, y.series),
            e.classList.toggle(
              y.onlyOneButtonCanBeStick,
              this._model.isOneButtonCanBeStick()
            ),
            (e.dataset.name = "legend-series-item");
        }
        _updateStates() {
          super._updateStates(), this._updateFlaggedState();
        }
        _renderValues() {
          null === this._valuesParentEl &&
            ((this._valuesParentEl = document.createElement("div")),
            this._valuesParentEl.classList.add(y.valuesWrapper),
            (this._valuesAdditionalWrapperEl = document.createElement("div")),
            this._valuesAdditionalWrapperEl.classList.add(
              y.valuesAdditionalWrapper
            ),
            this._valuesParentEl.appendChild(this._valuesAdditionalWrapperEl));
          const e = (0, l.ensureNotNull)(this._valuesAdditionalWrapperEl),
            t = this._values.value();
          for (const i of t) {
            const t = document.createElement("div");
            t.classList.add(y.valueItem),
              t.classList.toggle(g.blockHidden, !i.visible.value()),
              t.classList.toggle(y.unimportant, i.unimportant.value());
            const s = document.createElement("div"),
              l = i.title.value() || "";
            s.classList.add(y.valueTitle),
              s.classList.toggle(g.blockHidden, 0 === l.length),
              s.appendChild(document.createTextNode(l)),
              t.appendChild(s);
            const o = document.createElement("div");
            o.classList.add(y.valueValue),
              (o.style.color = i.color.value() || ""),
              o.appendChild(document.createTextNode(i.value.value())),
              t.appendChild(o),
              this._valuesElements.push({ title: s, value: o }),
              e.appendChild(t);
          }
        }
        _createTitlesSpawns() {
          const e = this._model.titles();
          this._titlesSpawns = [
            { title: e.title.spawn(), class: y.mainTitle },
            { title: e.description.spawn(), class: y.descTitle },
            { title: e.interval.spawn(), class: y.intervalTitle },
            { title: e.provider.spawn(), class: y.providerTitle },
            { title: e.exchange.spawn(), class: y.exchangeTitle },
            { title: e.chartStyle.spawn(), class: y.styleTitle },
          ];
        }
        _isValuesShouldBeHidden() {
          return !this._valuesSpawnArray.some(
            (e) =>
              e.value.value().length > 0 || (e.title.value() || "").length > 0
          );
        }
        _updateValuesTitleHTMLElHandler(e, t = "") {
          const i = (0, l.ensure)(this._valuesElements[e].title);
          w(i, t),
            i.classList.toggle(g.blockHidden, 0 === t.length),
            this._updateShowValues();
        }
        _isWidthButtonsMode() {
          return (
            null !== this._el &&
            ((void 0 !== this._flagged && Boolean(this._flagged.value())) ||
              super._isWidthButtonsMode())
          );
        }
        _updateFlaggedState() {
          if (void 0 === this._flagged) return;
          (0, l.ensureNotNull)(this._el).classList.toggle(
            y.flagged,
            Boolean(this._flagged.value())
          ),
            this._updateTitleMaxWidth();
        }
      }
      const C = u.isSafari ? "click" : "auxclick";
      class E extends M {
        constructor(e, t, i) {
          super(e, t, i),
            (this._wheelClickHandler = null),
            (this._canUpdateRowVisibility = !0),
            (this._globalRowVisibility = this._model
              .globalVisibility()
              .spawn()),
            this._globalRowVisibility.subscribe(
              this._updateShowLine.bind(this),
              {
                callWithLast: !0,
              }
            ),
            (this._has5Buttons = this._model.isPineScriptDataSource().spawn()),
            this._has5Buttons.subscribe(this._update5ButtonsStyles.bind(this)),
            this._updateStates(!this._disabled.value()),
            i.statusWidgetEl &&
              this._addStatusesWidget(
                i.statusWidgetEl,
                i.hideInvisibleHover,
                i.hideValues
              ),
            this._selected.subscribe(this._updateTitleMaxWidth.bind(this)),
            i.withActions &&
              ((this._wheelClickHandler = this._onWheelClicked.bind(this)),
              null !== this._titleParentEl &&
                this._titleParentEl.addEventListener(
                  C,
                  this._wheelClickHandler
                ));
        }
        destroy() {
          super.destroy(),
            this._has5Buttons.destroy(),
            this._globalRowVisibility && this._globalRowVisibility.destroy(),
            null !== this._wheelClickHandler &&
              null !== this._titleParentEl &&
              this._titleParentEl.removeEventListener(
                C,
                this._wheelClickHandler
              );
        }
        _updateShowLine() {
          if (null === this._el || !this._canUpdateRowVisibility) return;
          const e = !this._globalRowVisibility.value();
          e
            ? this._el.classList.toggle(g.blockHidden, e)
            : super._updateShowLine();
        }
        _getButtonsCount() {
          switch (this._mode) {
            case 4:
              return this._has5Buttons.value() ? 5 : 4;
            case 3:
              return 3;
            default:
              return 2;
          }
        }
        _render() {
          super._render();
          const e = (0, l.ensureNotNull)(this._el);
          e.classList.add(y.item, y.study),
            (e.dataset.name = "legend-source-item");
        }
        _createTitlesSpawns() {
          const e = this._model.titles();
          this._titlesSpawns = [
            { title: e.title.spawn(), class: y.mainTitle },
            { title: e.args.spawn(), class: y.descTitle },
          ];
        }
        _renderValues() {
          null === this._valuesParentEl &&
            ((this._valuesParentEl = document.createElement("div")),
            this._valuesParentEl.classList.add(y.valuesWrapper),
            (this._valuesAdditionalWrapperEl = document.createElement("div")),
            this._valuesAdditionalWrapperEl.classList.add(
              y.valuesAdditionalWrapper
            ),
            this._valuesParentEl.appendChild(this._valuesAdditionalWrapperEl));
          const e = (0, l.ensureNotNull)(this._valuesAdditionalWrapperEl),
            t = this._values.value();
          for (const i of t) {
            const t = document.createElement("div");
            t.classList.add(y.valueItem),
              t.classList.toggle(g.blockHidden, !i.visible.value());
            const s = document.createElement("div");
            s.classList.add(y.valueValue),
              (s.style.color = i.color.value() || ""),
              s.appendChild(document.createTextNode(i.value.value()));
            const l = i.title.value();
            void 0 !== l &&
              (s.classList.add("apply-common-tooltip"), (s.title = l)),
              t.appendChild(s),
              this._valuesElements.push({ value: s }),
              e.appendChild(t);
          }
        }
        _updateValuesTitleHTMLElHandler(e, t = "") {
          const i = (0, l.ensure)(this._valuesElements[e].value);
          i.classList.toggle("apply-common-tooltip", 0 !== t.length),
            (i.title = t);
        }
        _update5ButtonsStyles(e) {
          null !== this._el &&
            (this._el.classList.toggle(y.has5Buttons, e),
            this._updateAllButtonsWidth());
        }
        _onWheelClicked(e) {
          1 === e.button && this._model.onRemoveSource();
        }
      }
      var k = i(44352),
        V = i(51768);
      function x(e) {
        (0, V.trackEvent)("GUI", "Legend action", e);
      }
      var W = i(47036),
        T = i(62920),
        L = i(65300),
        A = i(36885);
      const H = k.t(null, void 0, i(21686)),
        P = k.t(null, void 0, i(28705)),
        D = k.t(null, void 0, i(51072));
      class B {
        constructor(e, t, i) {
          (this._el = null),
            (this._counterEl = null),
            (this._arrowIconEL = null),
            (this._objectTreeEl = null),
            (this._mode = 0),
            (this._parentEl = e),
            (this._themedColor = t.spawn()),
            this._themedColor.subscribe(this._updateThemedColor.bind(this)),
            (this._sourceCount = i.visibleDataSourceCount.spawn()),
            this._sourceCount.subscribe(this._updateSourceCount.bind(this)),
            (this._isStateOpen = i.isDataSourcesCollapsed.spawn()),
            this._isStateOpen.subscribe(this._updateState.bind(this)),
            (this._showObjectsTree = i.showObjectsTree.spawn()),
            this._showObjectsTree.subscribe(
              this._updateObjectTreeVisibility.bind(this)
            ),
            this._render(),
            this._updateState(),
            this._updateThemedColor(this._themedColor.value()),
            this._updateObjectTreeVisibility(this._showObjectsTree.value()),
            (this._toggleStateHandler = (0, m.wrapHandlerWithPreventEvent)(
              i.onCollapseDataSources
            )),
            (this._showObjectTreeHandler = (0, m.wrapHandlerWithPreventEvent)(
              i.onShowObjectsTreeDialog
            )),
            null !== this._el &&
              (this._el.addEventListener("touchend", this._toggleStateHandler),
              this._el.addEventListener("click", this._toggleStateHandler),
              this._el.addEventListener("contextmenu", (e) => {
                e.preventDefault(), e.stopPropagation();
              })),
            null !== this._objectTreeEl &&
              (this._objectTreeEl.addEventListener(
                "touchend",
                this._showObjectTreeHandler
              ),
              this._objectTreeEl.addEventListener(
                "click",
                this._showObjectTreeHandler
              ));
        }
        destroy() {
          this._sourceCount.destroy(),
            this._isStateOpen.destroy(),
            null !== this._objectTreeEl &&
              (this._objectTreeEl.removeEventListener(
                "touchend",
                this._showObjectTreeHandler
              ),
              this._objectTreeEl.removeEventListener(
                "click",
                this._showObjectTreeHandler
              ),
              (this._objectTreeEl = null)),
            (this._arrowIconEL = null),
            (this._counterEl = null),
            null !== this._el &&
              (this._el.removeEventListener(
                "touchend",
                this._toggleStateHandler
              ),
              this._el.removeEventListener("click", this._toggleStateHandler),
              (this._el.innerHTML = ""),
              (this._el = null));
        }
        setMode(e) {
          (this._mode = e ? 1 : 0), this._updateTooltip();
        }
        _render() {
          (this._el = document.createElement("div")),
            (this._el.className = `${y.toggler} apply-common-tooltip`),
            (this._arrowIconEL = document.createElement("div")),
            this._arrowIconEL.classList.add(y.iconArrow),
            (this._arrowIconEL.innerHTML = h.trackingModeIsAvailable ? T : W),
            this._el.appendChild(this._arrowIconEL),
            (this._objectTreeEl = document.createElement("div")),
            this._objectTreeEl.classList.add(y.objectTree),
            (this._objectTreeEl.innerHTML = h.trackingModeIsAvailable ? A : L),
            this._el.appendChild(this._objectTreeEl),
            (this._counterEl = document.createElement("div")),
            this._counterEl.classList.add(y.counter),
            this._counterEl.appendChild(
              document.createTextNode(String(this._sourceCount.value()))
            ),
            this._el.appendChild(this._counterEl),
            this._parentEl.appendChild(this._el);
        }
        _updateThemedColor(e) {
          if (null !== this._el)
            if (e.length > 0) {
              const [t, i, s] = (0, r.parseRgb)(e);
              this._el.style.backgroundColor = (0, r.rgbaToString)([
                t,
                i,
                s,
                (0, r.normalizeAlphaComponent)(0.8),
              ]);
            } else this._el.style.removeProperty("background-color");
        }
        _updateSourceCount(e) {
          w((0, l.ensureNotNull)(this._counterEl), String(e));
          const t = (0, l.ensureNotNull)(this._el),
            i = e < 1;
          t.classList.toggle(g.blockHidden, i);
          const s = 1 === e;
          t.classList.toggle(y.onlyOneSourceShown, s);
        }
        _updateState() {
          const e = !this._isStateOpen.value();
          this._parentEl.classList.toggle(y.closed, e),
            this._updateTooltip(),
            x((e ? "Hide" : "Show") + " not main sources");
        }
        _tooltip() {
          return 1 === this._mode ? D : this._isStateOpen.value() ? H : P;
        }
        _updateTooltip() {
          null !== this._el && this._el.setAttribute("title", this._tooltip());
        }
        _updateObjectTreeVisibility(e) {
          (0, l.ensureNotNull)(this._el).classList.toggle(
            y.objectsTreeCanBeShown,
            e
          );
        }
      }
      var z = i(38780),
        I = i(39640);
      function N(e, t) {
        const i = new (n())(t(e.value()));
        e.subscribe((e) => {
          i.setValue(t(e));
        });
        return i.readonly().spawn(() => e.unsubscribe());
      }
      const O = h.trackingModeIsAvailable ? 44 : 28,
        R = d.enabled("object_tree_legend_mode");
      class F {
        constructor(e, t) {
          (this._renderToggler = null),
            (this._mainDataSourceRenderer = null),
            (this._dataSourceRenderers = []),
            (this._parentEl = document.createElement("div")),
            (this._mainDataSourceEl = null),
            (this._dataSourcesEl = null),
            (this._dataSourcesAdditionalWrapperEl = null),
            (this._collapsedDataSourcesWrapperEl = null),
            (this._collapsedDataSourcesEl = null),
            (this._outsideEventForCollapsedTooltip = null),
            (this._options = e),
            (this._togglerOptions = t),
            (this._isStudiesLegendHidden = e.isStudiesLegendHidden.spawn()),
            this._isStudiesLegendHidden.subscribe(
              this._updateLegendVisibility.bind(this)
            ),
            (this._isAllLegendHidden = e.isAllLegendHidden.spawn()),
            this._isAllLegendHidden.subscribe(
              this._updateLegendVisibility.bind(this)
            ),
            this._updateLegendVisibility(),
            (this._hideAllExceptFirstLine = e.hideAllExceptFirstLine.spawn()),
            this._hideAllExceptFirstLine.subscribe(
              this._updateAllHiddenExeptFirstLine.bind(this)
            ),
            (this._themedColor = e.themedColor.spawn()),
            this._themedColor.subscribe(this._setCustomBg.bind(this)),
            (this._showBackground = e.showBackground.spawn()),
            this._showBackground.subscribe(this._setCustomBg.bind(this)),
            (this._backgroundTransparency = e.backgroundTransparency.spawn()),
            this._backgroundTransparency.subscribe(
              this._setCustomBg.bind(this)
            ),
            (this._collapsedDataSourcesCountSpawn =
              e.collapsedDataSourcesCount.spawn()),
            this._collapsedDataSourcesCountSpawn.subscribe(
              this._updateCollapsedSourcesCount.bind(this)
            ),
            (this._showCollapsedDataSourcesTooltipHandler =
              this._showCollapsedDataSourcesTooltip.bind(this)),
            this._parentEl.classList.add(y.legend),
            this._parentEl.classList.toggle(
              y.noWrap,
              !h.trackingModeIsAvailable
            ),
            this._parentEl.classList.toggle(
              y.noActions,
              !this._options.withActions
            ),
            this._parentEl.classList.toggle(
              y.touchMode,
              h.trackingModeIsAvailable
            ),
            this._parentEl.classList.toggle(
              y.wrappable,
              !this._hideAllExceptFirstLine.value()
            ),
            (this._parentEl.dataset.name = "legend"),
            this._parentEl.style.setProperty(
              "--legend-source-item-button-width",
              `${O}px`
            );
          const i = (t) => {
            t.preventDefault(), e.showLegendWidgetContextMenu(t);
          };
          this._mouseEventHandler = new p.MouseEventHandler(this._parentEl, {
            contextMenuEvent: i,
            touchContextMenuEvent: i,
          });
        }
        destroy() {
          if (
            (this._isStudiesLegendHidden.destroy(),
            this._isAllLegendHidden.destroy(),
            this._hideAllExceptFirstLine.destroy(),
            this._themedColor.destroy(),
            this._showBackground.destroy(),
            this._backgroundTransparency.destroy(),
            this._collapsedDataSourcesCountSpawn.destroy(),
            h.trackingModeIsAvailable &&
              null !== this._collapsedDataSourcesWrapperEl &&
              this._collapsedDataSourcesWrapperEl.removeEventListener(
                "touchend",
                this._showCollapsedDataSourcesTooltipHandler
              ),
            this._outsideEventForCollapsedTooltip &&
              this._outsideEventForCollapsedTooltip(),
            null !== this._dataSourcesAdditionalWrapperEl &&
              ((this._dataSourcesAdditionalWrapperEl.innerHTML = ""),
              (this._dataSourcesAdditionalWrapperEl = null)),
            null !== this._dataSourcesEl &&
              ((this._dataSourcesEl.innerHTML = ""),
              (this._dataSourcesEl = null)),
            null !== this._renderToggler &&
              (this._renderToggler.destroy(), (this._renderToggler = null)),
            null !== this._mainDataSourceRenderer &&
              (this._mainDataSourceRenderer.destroy(),
              (this._mainDataSourceRenderer = null)),
            0 !== this._dataSourceRenderers.length)
          ) {
            for (const e of this._dataSourceRenderers) e.destroy();
            this._dataSourceRenderers = [];
          }
          this._mouseEventHandler.destroy(),
            (this._parentEl.innerHTML = ""),
            delete this._parentEl;
        }
        addMainDataSource(e, t) {
          this._renderMainDataSourceEl(),
            (this._mainDataSourceRenderer = new f(
              e,
              (0, l.ensureNotNull)(this._mainDataSourceEl),
              {
                withActions: this._options.withActions,
                customTextColor: this._options.customTextColor,
                statusWidgetEl: t.getElement(),
                hideInvisibleHover: N(t.visibleWidgetsCount, (e) => Boolean(e)),
                hideValues: t.errorWidgetIsShown,
              }
            )),
            this._updateLegendVisibility(),
            e.onDestroy().subscribe(
              this,
              () => {
                null !== this._mainDataSourceRenderer &&
                  (this._mainDataSourceRenderer.destroy(),
                  (this._mainDataSourceRenderer = null));
              },
              !0
            );
        }
        addDataSources(e, t) {
          this._renderDataSourcesEl();
          const i = (0, l.ensureNotNull)(this._dataSourcesAdditionalWrapperEl);
          for (let s = 0; s < e.length; s++) {
            const l = e[s],
              o = new E(l, i, {
                withActions: this._options.withActions,
                customTextColor: this._options.customTextColor,
                statusWidgetEl: t[s].getElement(),
                hideInvisibleHover: N(t[s].visibleWidgetsCount, (e) =>
                  Boolean(e)
                ),
                hideValues: t[s].errorWidgetIsShown,
              });
            this._dataSourceRenderers.push(o),
              this._updateLegendVisibility(),
              l.onDestroy().subscribe(
                this,
                () => {
                  const e = this._dataSourceRenderers.indexOf(o);
                  -1 !== e &&
                    (this._dataSourceRenderers[e].destroy(),
                    this._dataSourceRenderers.splice(e, 1));
                },
                !0
              );
          }
        }
        addCustomWidget(e, t) {
          if (0 === t.block) {
            this._renderMainDataSourceEl();
            const i = (0, l.ensureNotNull)(this._mainDataSourceEl);
            1 === t.position && e.renderTo(i, i.firstChild),
              0 === t.position && e.renderTo(i);
          }
          if (1 === t.block) {
            this._renderDataSourcesEl();
            const i = (0, l.ensureNotNull)(
              this._dataSourcesAdditionalWrapperEl
            );
            1 === t.position && e.renderTo(i, i.firstChild),
              0 === t.position && e.renderTo(i);
          }
        }
        firstTitle() {
          return this._parentEl.firstElementChild;
        }
        getElement() {
          return this._parentEl;
        }
        updateMode(e) {
          const t = R && e < 133 ? 1 : e < 205 ? 2 : e < 222 ? 3 : 4;
          null !== this._mainDataSourceRenderer &&
            this._mainDataSourceRenderer.updateMode(t);
          for (const e of this._dataSourceRenderers) e.updateMode(t);
          this._parentEl.classList.toggle(y.medium, 3 === t),
            this._parentEl.classList.toggle(y.minimized, 2 === t),
            this._parentEl.classList.toggle(y.micro, 1 === t),
            null !== this._renderToggler &&
              this._renderToggler.setMode(1 === t);
          const i =
            !this._hideAllExceptFirstLine.value() &&
            (h.trackingModeIsAvailable || e < 542);
          this._parentEl.classList.toggle(y.directionColumn, i),
            this._parentEl.classList.toggle(
              y.hideUniportantValueItems,
              !u.CheckMobile.any() && e <= 272
            );
        }
        getMainSourceHeight() {
          return null === this._mainDataSourceRenderer
            ? 0
            : this._mainDataSourceRenderer.getHeight();
        }
        getDataSourceHeight() {
          return 0 === this._dataSourceRenderers.length
            ? 0
            : this._dataSourceRenderers[0].getHeight();
        }
        _renderMainDataSourceEl() {
          null === this._mainDataSourceEl &&
            ((this._mainDataSourceEl = document.createElement("div")),
            this._mainDataSourceEl.classList.add(y.legendMainSourceWrapper),
            this._parentEl.insertBefore(
              this._mainDataSourceEl,
              this._dataSourcesEl
            ));
        }
        _renderDataSourcesEl() {
          null === this._dataSourcesEl &&
            ((this._dataSourcesEl = document.createElement("div")),
            this._dataSourcesEl.classList.add(y.sourcesWrapper),
            this._renderToggle(this._dataSourcesEl),
            (this._dataSourcesAdditionalWrapperEl =
              document.createElement("div")),
            this._dataSourcesAdditionalWrapperEl.classList.add(y.sources),
            this._dataSourcesEl.appendChild(
              this._dataSourcesAdditionalWrapperEl
            ),
            this._renderCollapsedCounter(this._dataSourcesAdditionalWrapperEl),
            this._parentEl.appendChild(this._dataSourcesEl));
        }
        _renderToggle(e) {
          this._options.showToggleButton &&
            (this._renderToggler = new B(
              e,
              this._options.themedColor,
              this._togglerOptions
            ));
        }
        _renderCollapsedCounter(e) {
          (this._collapsedDataSourcesWrapperEl = document.createElement("div")),
            (this._collapsedDataSourcesWrapperEl.className = `${y.item} ${y.last}`),
            (this._collapsedDataSourcesEl = document.createElement("span")),
            (this._collapsedDataSourcesEl.className = `${y.text} apply-common-tooltip`),
            this._collapsedDataSourcesWrapperEl.append(
              this._collapsedDataSourcesEl
            ),
            e.append(this._collapsedDataSourcesWrapperEl),
            h.trackingModeIsAvailable &&
              this._collapsedDataSourcesWrapperEl.addEventListener(
                "touchend",
                this._showCollapsedDataSourcesTooltipHandler
              ),
            this._updateCollapsedSourcesCount(
              this._collapsedDataSourcesCountSpawn.value()
            );
        }
        _showCollapsedDataSourcesTooltip() {
          (0, z.showOnElement)(this._collapsedDataSourcesEl, {
            text: this._options.collapsedDataSourcesTitle.value(),
          }),
            this._addOutsideEventForHideTooltip();
        }
        _addOutsideEventForHideTooltip() {
          null !== this._outsideEventForCollapsedTooltip &&
            this._outsideEventForCollapsedTooltip(),
            (this._outsideEventForCollapsedTooltip = (0,
            I.addOutsideEventListener)(
              new CustomEvent("timestamp").timeStamp,
              this._collapsedDataSourcesWrapperEl,
              () => {
                null !== this._outsideEventForCollapsedTooltip &&
                  this._outsideEventForCollapsedTooltip(),
                  (0, z.hide)();
              },
              window.document,
              { touchEnd: !0 }
            ));
        }
        _updateCollapsedSourcesCount(e) {
          if (
            null === this._collapsedDataSourcesWrapperEl ||
            null === this._collapsedDataSourcesEl
          )
            return;
          const t = 0 === e;
          this._collapsedDataSourcesWrapperEl.classList.toggle(
            g.blockHidden,
            t
          ),
            t ||
              (w(this._collapsedDataSourcesEl, `+${e}`),
              this._collapsedDataSourcesEl.setAttribute(
                "title",
                this._options.collapsedDataSourcesTitle.value()
              ));
        }
        _updateLegendVisibility() {
          this._parentEl.classList.toggle(
            g.blockHidden,
            this._isAllLegendHidden.value()
          ),
            null !== this._dataSourcesEl &&
              this._dataSourcesEl.classList.toggle(
                g.blockHidden,
                this._isStudiesLegendHidden.value()
              );
        }
        _updateAllHiddenExeptFirstLine() {
          this._parentEl.classList.toggle(
            y.wrappable,
            !this._hideAllExceptFirstLine.value()
          );
        }
        _setCustomBg() {
          const e = this._showBackground.value(),
            t = this._themedColor.value(),
            i = this._backgroundTransparency.value();
          let s = "";
          if (e) {
            const [e, l, o] = (0, r.parseRgb)(t);
            s = (0, r.rgbaToString)([
              e,
              l,
              o,
              (0, r.normalizeAlphaComponent)(1 - i / 100),
            ]);
          }
          this._parentEl.style.color = s;
        }
      }
      var G = i(11536),
        U = i(52865),
        j = i(38031),
        $ = i(47539),
        q = i(26867),
        K = i.n(q),
        Y = i(80142),
        X = i(7019);
      function Z(e) {
        return void 0 !== e ? j.resetTransparency(e) : e;
      }
      const Q = new $.TranslatedString(
          "show {title}",
          k.t(null, void 0, i(87358))
        ),
        J = new $.TranslatedString("hide {title}", k.t(null, void 0, i(70301))),
        ee = k.t(null, void 0, i(81428)),
        te = k.t(null, void 0, i(31971));
      class ie {
        constructor(e, t, i, s, l) {
          (this._values = new (n())([])),
            (this._actions = []),
            (this._onDestroy = new (K())()),
            (this._loading = new (n())(!1)),
            (this._moreActionCM = null),
            (this._updateLoadingStatus = () => {
              this._loading.setValue(this._source.isLoading());
            }),
            (this._model = e),
            (this._source = t),
            (this._options = i),
            (this._callbacks = s),
            (this._contextMenuOptions = l),
            (this._disabled = new (n())(this._getDisabledState())),
            (this._disabledOnInterval = new (n())(
              this._getDisabledOnIntervalState()
            )),
            (this._selected = new (n())(!1)),
            (this._isTitleHidden = new (n())(this._getTitleHiddenValue())),
            (this._isValuesHidden = new (n())(this._getValuesHiddenValue())),
            (this._isRowHidden = new (n())(this._getRowHiddenValue())),
            (0, X.combine)(
              () => ({}),
              this._isTitleHidden,
              this._isValuesHidden,
              this._disabled
            ).subscribe(this._updateRowVisibilities.bind(this)),
            this._values.subscribe(() => {
              this._isValuesHidden.setValue(this._getValuesHiddenValue());
            });
        }
        destroy() {}
        onDestroy() {
          return this._onDestroy;
        }
        titles() {
          return this._titles;
        }
        values() {
          return this._values.readonly();
        }
        actions() {
          return this._actions;
        }
        disabled() {
          return this._disabled.readonly();
        }
        disabledOnInterval() {
          return this._disabledOnInterval.readonly();
        }
        selected() {
          return this._selected.readonly();
        }
        loading() {
          return this._loading.readonly();
        }
        isTitleHidden() {
          return this._isTitleHidden.readonly();
        }
        isValuesHidden() {
          return this._isValuesHidden.readonly();
        }
        isRowHidden() {
          return this._isRowHidden.readonly();
        }
        update() {
          this._updateTitles(), this._updateValues(), this._updateStates();
        }
        updateSource(e) {
          this._source !== e &&
            ((this._source = e),
            this.update(),
            this._isTitleHidden.setValue(this._getTitleHiddenValue()),
            this._isValuesHidden.setValue(this._getValuesHiddenValue()));
        }
        onToggleDisabled() {
          const e = this._source.properties().childs().visible,
            t = !e.value();
          this._model.setProperty(
            e,
            t,
            (t ? Q : J).format({
              title: new $.TranslatedString(
                this._source.name(),
                this._source.title()
              ),
            })
          ),
            x((t ? "Show" : "Hide") + " source");
        }
        onShowSettings(e) {
          this._source.userEditEnabled() &&
            (this.setSourceSelected(),
            this._callbacks.showChartPropertiesForSource(this._source, e),
            x("Settings for source"));
        }
        onShowMoreActions(e) {
          return this._options.readOnlyMode
            ? Promise.resolve(null)
            : (this._callbacks.updateActions(),
              x("Show source context menu"),
              this._callbacks.showContextMenuForSources(
                [this._source],
                this._calcNewPosition(e),
                this._contextMenuOptions
              ));
        }
        setSourceSelected() {
          this._model.selectionMacro((e) => {
            e.clearSelection(), e.addSourceToSelection(this._source);
          });
        }
        _moreActionHandler(e) {
          e.preventDefault(),
            null !== this._moreActionCM && this._moreActionCM.isShown()
              ? (this._moreActionCM = null)
              : (this.setSourceSelected(),
                this.onShowMoreActions(e).then((e) => {
                  this._moreActionCM = e;
                }));
        }
        _updateStates() {
          this._disabled.setValue(this._getDisabledState()),
            this._disabledOnInterval.setValue(
              this._getDisabledOnIntervalState()
            ),
            this._selected.setValue(
              this._model.selection().isSelected(this._source)
            ),
            this._updateLoadingStatus();
        }
        _hasValues() {
          return this._values.value().length > 0;
        }
        _getEyeTitle() {
          return this._disabled.value() ? ee : te;
        }
        _getDisabledState() {
          return !this._source.properties().visible.value();
        }
        _updateRowVisibilities() {
          this._isRowHidden.setValue(this._getRowHiddenValue());
        }
        _getRowHiddenValue() {
          return (
            (this._options.readOnlyMode && this._disabled.value()) ||
            (this._isTitleHidden.value() &&
              (this._isValuesHidden.value() || this._disabled.value()))
          );
        }
        _calcNewPosition(e) {
          let t = {};
          if (e.hasOwnProperty("touches") && e.touches.length > 0)
            t = {
              clientX: e.touches[0].clientX,
              clientY: e.touches[0].clientY,
            };
          else if (null !== e.target) {
            const i = e.target.getBoundingClientRect();
            t = {
              clientX: (0, Y.isRtl)() ? i.right : i.left,
              clientY: i.top + i.height + 3,
            };
          } else {
            const i = e;
            t = { clientX: i.clientX, clientY: i.clientY };
          }
          return t;
        }
      }
      var se = i(35936),
        le = i(3792),
        oe = i(41674),
        ne = i(87258),
        ae = i(45534);
      const re = k.t(null, void 0, i(41610)),
        de = k.t(null, void 0, i(93666)),
        ue = k.t(null, void 0, i(8209)),
        he = d.enabled("show_hide_button_in_legend"),
        ce = d.enabled("hide_resolution_in_legend");
      class _e extends ie {
        constructor(e, t, i, s, l) {
          super(e, t, i, s, l),
            (this._titles = {
              title: new (n())(""),
              description: new (n())(""),
              interval: new (n())(""),
              provider: new (n())(""),
              exchange: new (n())(""),
              chartStyle: new (n())(""),
            }),
            (this._symbolMarker = null),
            (this._symbolMarkerIcon = null),
            (this._flagged = new (n())(null)),
            (this._symbolAction = null),
            (this._symbol = null),
            (this._isOneButtonCanBeStick = !1),
            this._createActions(),
            this._updateSymbolMarker();
          const o = this._model
            .model()
            .properties()
            .childs()
            .paneProperties.childs()
            .legendProperties.childs();
          o.showSeriesTitle.subscribe(this, () => {
            this._isTitleHidden.setValue(this._getTitleHiddenValue());
          }),
            (this._valuesVisibleProperty = (0, U.combineProperty)(
              (e, t, i) => e || t || i,
              o.showSeriesOHLC,
              o.showBarChange,
              o.showVolume
            )),
            this._valuesVisibleProperty.subscribe(null, () => {
              this._isValuesHidden.setValue(this._getValuesHiddenValue());
            }),
            this.update(),
            this._source
              .onStatusChanged()
              .subscribe(this, this._updateLoadingStatus);
        }
        destroy() {
          super.destroy(),
            this._model
              .model()
              .properties()
              .childs()
              .paneProperties.childs()
              .legendProperties.childs()
              .showSeriesTitle.unsubscribeAll(this),
            this._source.onStatusChanged().unsubscribeAll(this),
            this._valuesVisibleProperty.destroy(),
            this._onDestroy.fire();
        }
        flagged() {
          return this._flagged.readonly();
        }
        onShowSettings() {
          this._source.userEditEnabled() &&
            this._callbacks.showGeneralChartProperties(se.TabNames.symbol);
        }
        isOneButtonCanBeStick() {
          return this._isOneButtonCanBeStick;
        }
        _updateTitles() {
          const e = (0, l.ensureNotNull)(
            this._source.statusView()
          ).getSplitTitle();
          this._titles.title.setValue((0, G.clean)(e.title, !0)),
            this._titles.description.setValue((0, G.clean)(e.description, !0)),
            ce || this._titles.interval.setValue((0, G.clean)(e.interval, !0)),
            this._titles.provider.setValue((0, G.clean)(e.provider, !0)),
            this._titles.exchange.setValue((0, G.clean)(e.exchange, !0)),
            this._titles.chartStyle.setValue((0, G.clean)(e.chartStyle, !0));
        }
        _updateValues() {
          const e = this._source.legendView(),
            t = this._values.value(),
            i = e.marketTitle(),
            s = e.marketTitle().length > 0;
          if (0 === t.length) {
            const t = {
                value: new (n())(""),
                color: new (n())(""),
                visible: new (n())(s),
                title: new (n())(i),
                unimportant: new (n())(!1),
              },
              l = e
                .items()
                .map((e) => ({
                  value: new (n())(e.value()),
                  color: new (n())(Z(e.color())),
                  visible: new (n())(e.visible()),
                  title: new (n())(e.title()),
                  unimportant: new (n())(e.unimportant()),
                }));
            this._values.setValue([t].concat(l));
          } else {
            t[0].title.setValue(i), t[0].visible.setValue(s);
            const l = e.items();
            for (let e = 0; e < l.length; e++) {
              const i = l[e];
              t[e + 1].value.setValue(i.value()),
                t[e + 1].color.setValue(Z(i.color())),
                t[e + 1].visible.setValue(i.visible()),
                t[e + 1].title.setValue(i.title());
            }
          }
        }
        _updateStates() {
          super._updateStates(), this._updateSymbolMarker();
        }
        _getDisabledOnIntervalState() {
          return !1;
        }
        _getTitleHiddenValue() {
          return !this._model
            .model()
            .properties()
            .childs()
            .paneProperties.childs()
            .legendProperties.childs()
            .showSeriesTitle.value();
        }
        _getValuesHiddenValue() {
          return !this._hasValues() || !this._valuesVisibleProperty.value();
        }
        _createActions() {
          if (he) {
            const e = {
              iconMap: new Map([
                ["large", oe],
                ["small", le],
              ]),
              action: (0, m.wrapHandlerWithPreventEvent)(
                this.onToggleDisabled.bind(this)
              ),
              visible: new (n())(!0),
              className: y.eye,
              title: new (n())(this._getEyeTitle()),
              dataset: { name: "legend-show-hide-action" },
            };
            this._actions.push(e),
              this._disabled.subscribe(() => {
                e.title.setValue(this._getEyeTitle());
              });
          }
          this._actions.push({
            iconMap: new Map([
              ["large", ae],
              ["small", ne],
            ]),
            action: this._moreActionHandler.bind(this),
            visible: new (n())(!0),
            title: new (n())(re),
            dataset: { name: "legend-more-action" },
          });
        }
        _getMarkerTitle() {
          return null !== this._symbolMarker
            ? this._symbolMarker.isMarked()
              ? ue
              : de
            : "";
        }
        _symbolActionHandler() {
          null !== this._symbolMarker &&
            (this._updateSymbolMarker(), x("Change flag state"));
        }
        _updateSymbolMarker() {
          this._isOneButtonCanBeStick = !0;
        }
      }
      var pe = i(89215),
        me = i(3615);
      var ge = i(46069),
        ve = i(98351),
        be = i(83637),
        we = i(34882),
        ye = i(88658),
        Se = i(52506),
        Me = i(89895),
        fe = i(83956);
      (0, ve.getLogger)("Chart.LegendWidget");
      const Ce = k.t(null, void 0, i(89517)),
        Ee = k.t(null, void 0, i(66324)),
        ke = k.t(null, void 0, i(34596)),
        Ve = k.t(null, void 0, i(41610)),
        xe =
          (k.t(null, void 0, i(82751)),
          k.t(null, void 0, i(89790)),
          k.t(null, void 0, i(37809))),
        We =
          (d.enabled("study_buttons_in_legend"),
          d.enabled("show_hide_button_in_legend")),
        Te = d.enabled("property_pages"),
        Le = d.enabled("format_button_in_legend"),
        Ae = d.enabled("delete_button_in_legend");
      class He extends ie {
        constructor(e, t, i, s, l) {
          super(e, t, i, s, l),
            (this._titles = { title: new (n())(""), args: new (n())("") }),
            (this._error = new (n())(!1)),
            (this._isPineScriptDataSource = new (n())(!1)),
            (this._pineAction = null),
            (this._globalVisibility = new (n())(!0)),
            this._createActions();
          const o = this._model
              .model()
              .properties()
              .childs()
              .paneProperties.childs()
              .legendProperties.childs(),
            a = [o.showSeriesTitle, o.showStudyTitles];
          for (const e of a)
            e.subscribe(this, () => {
              this._isTitleHidden.setValue(this._getTitleHiddenValue());
            });
          const r = [o.showSeriesOHLC, o.showBarChange, o.showStudyValues];
          for (const e of r)
            e.subscribe(this, () => {
              this._isValuesHidden.setValue(this._getValuesHiddenValue());
            });
          this.update();
        }
        destroy() {
          super.destroy();
          const e = this._model
            .model()
            .properties()
            .childs()
            .paneProperties.childs()
            .legendProperties.childs();
          e.showSeriesTitle.unsubscribeAll(this),
            e.showStudyTitles.unsubscribeAll(this),
            e.showSeriesOHLC.unsubscribeAll(this),
            e.showBarChange.unsubscribeAll(this),
            e.showStudyValues.unsubscribeAll(this),
            this._onDestroy.fire();
        }
        error() {
          return this._error.readonly();
        }
        isPineScriptDataSource() {
          return this._isPineScriptDataSource.readonly();
        }
        updateSource(e) {
          this._source !== e &&
            (this._values.setValue([]),
            super.updateSource(e),
            this._updateAbleShowSourceCode());
        }
        onRemoveSource() {
          var e;
          this._source.isUserDeletable() &&
            (this._source.hasChildren()
              ? ((e = this._model.removeSource.bind(
                  this._model,
                  this._source,
                  !1
                )),
                (0, me.showConfirm)({
                  title: k.t(null, void 0, i(38154)),
                  text: k.t(null, void 0, i(52003)),
                  onConfirm: ({ dialogClose: t }) => {
                    e(), t();
                  },
                }))
              : this._model.removeSource(this._source, !1),
            x("Remove sources"));
        }
        onShowSourceCode() {
          0;
        }
        setGlobalVisibility(e) {
          this._globalVisibility.setValue(e);
        }
        globalVisibility() {
          return this._globalVisibility.readonly();
        }
        getFullTitle() {
          return [this._titles.title, this._titles.args]
            .map((e) => e.value())
            .join(" ");
        }
        _updateTitles() {
          const e = (0, l.ensureNotNull)(
            this._source.statusView()
          ).getSplitTitle();
          this._titles.title.setValue((0, G.clean)(e[0], !0));
          const t = Array.isArray(e[1]) ? e[1].join(" ") : e[1] || "";
          this._titles.args.setValue((0, G.clean)(t, !0));
        }
        _updateValues() {
          const e = this._source.legendView();
          if (null === e) return;
          if (0 === e.items().length) return;
          const t = this._values.value();
          if (0 === t.length) {
            const t = e
              .items()
              .map((e) => ({
                value: new (n())(e.value()),
                color: new (n())(Z(e.color())),
                visible: new (n())(e.visible()),
                unimportant: new (n())(e.unimportant()),
                title: new (n())(e.title()),
              }));
            this._values.setValue(t);
          } else {
            const i = e.items();
            for (let e = 0; e < i.length; e++) {
              const s = t[e],
                l = i[e];
              s.value.setValue(l.value()),
                s.color.setValue(Z(l.color())),
                s.visible.setValue(l.visible()),
                s.title.setValue(l.title());
            }
          }
        }
        _updateStates() {
          super._updateStates(),
            void 0 !== this._error &&
              this._error.setValue(Boolean(this._source.isFailed()));
        }
        _getTitleHiddenValue() {
          const e = this._model
            .model()
            .properties()
            .childs()
            .paneProperties.childs()
            .legendProperties.childs();
          return this._isSymbolLikeStudy()
            ? !e.showSeriesTitle.value()
            : !e.showStudyTitles.value();
        }
        _getDisabledOnIntervalState() {
          return (
            !(
              !(0, pe.isStudy)(this._source) &&
              !(0, pe.isStudyStub)(this._source)
            ) && !this._source.isActualInterval()
          );
        }
        _getValuesHiddenValue() {
          if (!this._hasValues()) return !0;
          const e = this._model
            .model()
            .properties()
            .childs()
            .paneProperties.childs()
            .legendProperties.childs();
          return this._isSymbolLikeStudy()
            ? !e.showSeriesOHLC.value() && !e.showBarChange.value()
            : !e.showStudyValues.value();
        }
        _isSymbolLikeStudy() {
          return (
            this._source instanceof Me.study_Overlay ||
            this._source instanceof fe.StudyCompare
          );
        }
        _updateAbleShowSourceCode() {
          0;
        }
        _updateVisibilityPineAction(e) {
          null !== this._pineAction &&
            (this._pineAction.visible.setValue(e),
            this._isPineScriptDataSource.setValue(e));
        }
        _createActions() {
          if (!this._options.readOnlyMode) {
            if (
              ((this._pineAction = {
                iconMap: new Map([
                  ["large", we],
                  ["small", we],
                ]),
                action: (0, m.wrapHandlerWithPreventEvent)(
                  this.onShowSourceCode.bind(this)
                ),
                visible: new (n())(!1),
                title: new (n())(Ee),
                dataset: { name: "legend-pine-action" },
              }),
              We)
            ) {
              const e = {
                iconMap: new Map([
                  ["large", oe],
                  ["small", le],
                ]),
                action: (0, m.wrapHandlerWithPreventEvent)(
                  this.onToggleDisabled.bind(this)
                ),
                visible: new (n())(!this._getDisabledOnIntervalState()),
                className: y.eye,
                title: new (n())(this._getEyeTitle()),
                dataset: { name: "legend-show-hide-action" },
              };
              this._actions.push(e),
                this._disabled.subscribe(() => {
                  e.title.setValue(this._getEyeTitle());
                });
              const t = {
                iconMap: new Map([
                  ["large", oe],
                  ["small", le],
                ]),
                action: (0, m.wrapHandlerWithPreventEvent)(
                  this.onShowSettings.bind(this, se.TabNames.visibility)
                ),
                visible: new (n())(this._getDisabledOnIntervalState()),
                className: y.intervalEye,
                title: new (n())(xe),
                dataset: { name: "legend-interval-show-hide-action" },
              };
              this._actions.push(t),
                this._disabledOnInterval.subscribe((i) => {
                  t.visible.setValue(i), e.visible.setValue(!i);
                });
            }
            Te &&
              Le &&
              (!(0, pe.isStudy)(this._source) ||
                new ge.MetaInfoHelper(
                  this._source.metaInfo()
                ).hasUserEditableOptions()) &&
              this._actions.push({
                iconMap: new Map([
                  ["large", be],
                  ["small", be],
                ]),
                action: (0, m.wrapHandlerWithPreventEvent)(
                  this.onShowSettings.bind(this)
                ),
                visible: new (n())(!0),
                title: new (n())(Ce),
                dataset: { name: "legend-settings-action" },
              }),
              Ae &&
                this._actions.push({
                  iconMap: new Map([
                    ["large", Se],
                    ["small", ye],
                  ]),
                  action: (0, m.wrapHandlerWithPreventEvent)(
                    this.onRemoveSource.bind(this)
                  ),
                  visible: new (n())(!0),
                  title: new (n())(ke),
                  dataset: { name: "legend-delete-action" },
                }),
              this._actions.push({
                iconMap: new Map([
                  ["large", ae],
                  ["small", ne],
                ]),
                action: this._moreActionHandler.bind(this),
                visible: new (n())(!0),
                title: new (n())(Ve),
                dataset: { name: "legend-more-action" },
              });
          }
        }
      }
      var Pe = i(43986),
        De = i(60223),
        Be = i(1930),
        ze = i(35663),
        Ie = i(86339),
        Ne = i(21580),
        Oe = i(51983);
      function Re(e, t, i) {
        e.setProperty(t, !t.value(), i);
      }
      const Fe = new $.TranslatedString(
          "change symbol description visibility",
          k.t(null, void 0, i(26717))
        ),
        Ge = new $.TranslatedString(
          "change open market status visibility",
          k.t(null, void 0, i(18644))
        ),
        Ue = new $.TranslatedString(
          "change OHLC values visibility",
          k.t(null, void 0, i(57889))
        ),
        je = new $.TranslatedString(
          "change bar change visibility",
          k.t(null, void 0, i(45110))
        ),
        $e = new $.TranslatedString(
          "change indicator titles visibility",
          k.t(null, void 0, i(31325))
        ),
        qe = new $.TranslatedString(
          "change indicator arguments visibility",
          k.t(null, void 0, i(96162))
        ),
        Ke = new $.TranslatedString(
          "change indicator values visibility",
          k.t(null, void 0, i(99774))
        ),
        Ye = new $.TranslatedString(
          "change volume values visibility",
          k.t(null, void 0, i(9455))
        ),
        Xe = k.t(null, void 0, i(39339)),
        Ze = k.t(null, void 0, i(75991)),
        Qe = k.t(null, void 0, i(99487)),
        Je = k.t(null, void 0, i(22519)),
        et = k.t(null, void 0, i(1111)),
        tt = k.t(null, void 0, i(26315)),
        it = k.t(null, void 0, i(26935)),
        st = k.t(null, void 0, i(84098)),
        lt = (0, Ie.appendEllipsis)(k.t(null, void 0, i(89517)));
      var ot = i(93975),
        nt = i(20364),
        at = i(74599),
        rt = i(967),
        dt = i(84917),
        ut = i(32769),
        ht = i(21169);
      function ct(e) {
        return e === dt.WeekDays.SUNDAY ? dt.WeekDays.SATURDAY : e - 1;
      }
      function _t(e) {
        return e === dt.WeekDays.SATURDAY ? dt.WeekDays.SUNDAY : e + 1;
      }
      function pt(e, t) {
        const i = ct(t);
        return 0 === e[i].entries.length
          ? pt(e, i)
          : { dayIndex: i, entries: e[i].entries };
      }
      function mt(e, t) {
        const i = _t(t);
        return 0 === e[i].entries.length
          ? mt(e, i)
          : { dayIndex: i, entries: e[i].entries };
      }
      function gt(e) {
        for (; e > ut.minutesPerDay; ) e -= ut.minutesPerDay;
        const t = e % 60,
          i = (e - t) / 60;
        return (
          (0, at.numberToStringWithLeadingZero)(i, 2) +
          ":" +
          (0, at.numberToStringWithLeadingZero)(t, 2)
        );
      }
      const vt = {
        [dt.WeekDays.MONDAY]: {
          title: rt.weekDaysShortNames[dt.WeekDays.MONDAY],
          isActive: !1,
          entries: [],
        },
        [dt.WeekDays.TUESDAY]: {
          title: rt.weekDaysShortNames[dt.WeekDays.TUESDAY],
          isActive: !1,
          entries: [],
        },
        [dt.WeekDays.WEDNESDAY]: {
          title: rt.weekDaysShortNames[dt.WeekDays.WEDNESDAY],
          isActive: !1,
          entries: [],
        },
        [dt.WeekDays.THURSDAY]: {
          title: rt.weekDaysShortNames[dt.WeekDays.THURSDAY],
          isActive: !1,
          entries: [],
        },
        [dt.WeekDays.FRIDAY]: {
          title: rt.weekDaysShortNames[dt.WeekDays.FRIDAY],
          isActive: !1,
          entries: [],
        },
        [dt.WeekDays.SATURDAY]: {
          title: rt.weekDaysShortNames[dt.WeekDays.SATURDAY],
          isActive: !1,
          entries: [],
        },
        [dt.WeekDays.SUNDAY]: {
          title: rt.weekDaysShortNames[dt.WeekDays.SUNDAY],
          isActive: !1,
          entries: [],
        },
      };
      function bt(e, t) {
        return e.start.value === t.start.value && e.end.value === t.end.value;
      }
      function wt(e, t) {
        return bt(e[0], t[0]);
      }
      function yt(e) {
        const t = e.start(),
          i = e.length(),
          s = e.sessionStartDayOfWeek(),
          l = e.sessionEndDayOfWeek(),
          o = gt(t),
          n = gt(t + i);
        return i > ut.minutesPerDay
          ? `${rt.weekDaysShortNames[s]} ${o} — ${rt.weekDaysShortNames[l]} ${n}`
          : `${o} — ${n}`;
      }
      function St(e, t, i, s) {
        return Math.abs(s - i) > 1
          ? `${rt.weekDaysShortNames[i]} ${e.title} — ${rt.weekDaysShortNames[s]} ${t.title}`
          : `${e.title} — ${t.title}`;
      }
      function Mt(e, t, i) {
        for (const s of t) {
          let t = s.sessionStartDayOfWeek();
          const l = s.start(),
            o = s.length(),
            n = l + o,
            a = [];
          if (n <= ut.minutesPerDay) a.push([l, n]);
          else {
            const e = Math.min(ut.minutesPerDay - l, o);
            a.push([l, l + e]), a.push([0, o - e]);
          }
          for (let l = 0; l < a.length; l++) {
            const o = a[l],
              [n, r] = o,
              d = n / ut.minutesPerDay,
              u = (0, ot.lowerbound)(
                e[t].entries,
                d,
                (e, t) => e.start.value < t
              ),
              h = {
                start: {
                  value: d,
                  title: gt(n),
                  isFirstOrLastPoint: n === s.start(),
                },
                end: {
                  value: r / ut.minutesPerDay,
                  title: gt(r),
                  isFirstOrLastPoint: a.length - 1 === l,
                },
                type: i,
                tooltip: yt(s),
                showStartForLastEntry: !1,
                showEndForFirstEntry: !1,
              };
            e[t].entries.splice(u, 0, h), (t = _t(t));
          }
        }
      }
      class ft {
        constructor(e) {
          (this.sessionsDays = new (n())((0, a.clone)(vt))),
            (this.todaySession = new (n())((0, a.clone)({ entries: [] }))),
            (this._todayInExchangeTime = null),
            (this._symbolInfo = e.symbolInfo().spawn()),
            this._symbolInfo.subscribe(
              this._updateEntriesBySubSessions.bind(this),
              { callWithLast: !0 }
            );
        }
        destroy() {
          this._symbolInfo.destroy();
        }
        currentTimeValue() {
          return null === this._todayInExchangeTime
            ? -1
            : ut.get_minutes_from_midnight(this._todayInExchangeTime) /
                ut.minutesPerDay;
        }
        timezone() {
          const e = this._symbolInfo.value();
          return null === e ? "" : (0, nt.timezoneTitle)(e.timezone);
        }
        _updateEntriesBySubSessions(e) {
          var t;
          this._updateTodayWithOffsets(e);
          const i = this._createSubSessionSpecs(e),
            s =
              (o =
                (null === (t = this._todayInExchangeTime) || void 0 === t
                  ? void 0
                  : t.getUTCDay()) || new Date().getDay()) <
              dt.WeekDays.SATURDAY
                ? o + 1
                : dt.WeekDays.SUNDAY;
          var o;
          const n = (0, a.clone)(vt);
          n[s].isActive = !0;
          for (const e of Array.from(i.keys())) {
            Mt(
              n,
              (0, l.ensureDefined)(i.get(e)).getEntriesForWeekByCalendar(
                (0, l.ensureNotNull)(this._todayInExchangeTime)
              ),
              e
            );
          }
          !(function (e) {
            const t = gt(0),
              i = gt(ut.minutesPerDay),
              s = (0, a.clone)(e);
            for (const o of Object.keys(e)) {
              const n = parseInt(o),
                a = e[n].entries;
              if (0 === a.length) {
                a.push({
                  start: { value: 0, title: t, isFirstOrLastPoint: !0 },
                  end: { value: 1, title: i, isFirstOrLastPoint: !0 },
                  type: 3,
                  tooltip: `${t} — ${i}`,
                  showStartForLastEntry: !1,
                  showEndForFirstEntry: !1,
                });
                continue;
              }
              const r = ct(n),
                d = _t(n),
                u = s[r].entries,
                h = s[d].entries,
                c = pt(s, n),
                _ = mt(s, n),
                p = a.length;
              let m = 0;
              for (let e = 0; e < p; e++) {
                const i = a[e],
                  s = e > 0 ? a[e - 1] : null,
                  o = 0 === e;
                if (
                  0 === i.start.value ||
                  (0 === i.start.value && 1 === i.end.value) ||
                  (null !== s && i.start.value === s.end.value)
                ) {
                  m++;
                  continue;
                }
                const r = o
                    ? c.entries[c.entries.length - 1]
                    : (0, l.ensureNotNull)(s),
                  d = {
                    start: {
                      value: o ? 0 : a[e - 1].end.value,
                      title: o ? t : a[e - 1].end.title,
                      isFirstOrLastPoint:
                        !(o && u.length > 0) || 1 === u[u.length - 1].end.value,
                    },
                    end: {
                      value: i.start.value,
                      title: i.start.title,
                      isFirstOrLastPoint: !0,
                    },
                    type: 3,
                    tooltip: St(r.end, i.start, c.dayIndex, n),
                    showStartForLastEntry: !1,
                    showEndForFirstEntry: !1,
                  };
                a.splice(m, 0, d), (m = e + 2);
              }
              const g = a[a.length - 1];
              1 !== g.end.value &&
                a.push({
                  start: {
                    value: g.end.value,
                    title: g.end.title,
                    isFirstOrLastPoint: !0,
                  },
                  end: {
                    value: 1,
                    title: gt(ut.minutesPerDay),
                    isFirstOrLastPoint:
                      !(h.length > 0) || 0 === h[0].start.value,
                  },
                  type: 3,
                  tooltip: St(g.end, _.entries[0].start, n, _.dayIndex),
                  showStartForLastEntry: !1,
                  showEndForFirstEntry: !1,
                });
            }
          })(n),
            (function (e) {
              for (const s of Object.keys(e)) {
                const l = parseInt(s),
                  o = e[l].entries;
                if (1 === o.length) continue;
                const n = ct(l),
                  a = _t(l),
                  r = o[0],
                  d = o[o.length - 1];
                r.start.isFirstOrLastPoint ||
                  (r.showStartForLastEntry =
                    ((t = o),
                    (i = e[n].entries),
                    bt(t[t.length - 1], i[i.length - 1]))),
                  d.end.isFirstOrLastPoint ||
                    (d.showEndForFirstEntry = wt(o, e[a].entries));
              }
              var t, i;
            })(n),
            this.sessionsDays.setValue(n),
            this.todaySession.setValue(n[s]);
        }
        _createSubSessionSpecs(e) {
          if (null === e) return new Map();
          if (void 0 === e.subsessions)
            return new Map([
              [
                0,
                new ht.SessionSpec(
                  e.timezone,
                  e.session,
                  e.session_holidays,
                  e.corrections
                ),
              ],
            ]);
          const t = "regular",
            i = "premarket",
            s = "postmarket",
            l = [t, i, s],
            o = new Map();
          for (const n of l) {
            let l = null;
            switch (n) {
              case t:
                l = 0;
                break;
              case i:
                l = 1;
                break;
              case s:
                l = 2;
            }
            if (null !== l) {
              const t = e.subsessions.find((e) => e.id === n);
              void 0 !== t &&
                o.set(
                  l,
                  new ht.SessionSpec(
                    e.timezone,
                    t["session-display"] || t.session,
                    e.session_holidays,
                    t["session-correction"]
                  )
                );
            }
          }
          return o;
        }
        _updateTodayWithOffsets(e) {
          if (null === e) return void (this._todayInExchangeTime = null);
          const t = 1e3 * window.ChartApiInstance.serverTimeOffset();
          this._todayInExchangeTime = ut.get_cal_from_unix_timestamp_ms(
            ut.get_timezone(e.timezone),
            Date.now() + t
          );
        }
      }
      var Ct = i(50959),
        Et = i(97754),
        kt = i(77975),
        Vt = i(68671),
        xt = i(1720);
      const Wt = new WeakMap();
      function Tt(e) {
        return (
          Wt.has(e) || Wt.set(e, (0, Vt.randomHash)()),
          (0, l.ensureDefined)(Wt.get(e))
        );
      }
      const Lt = new Map([
          [0, xt.green],
          [1, xt.orange],
          [2, xt.blue],
          [3, xt.gray],
        ]),
        At = new Map([
          [0, k.t(null, void 0, i(83949))],
          [1, k.t(null, void 0, i(56042))],
          [2, k.t(null, void 0, i(29985))],
          [3, k.t(null, void 0, i(95814))],
        ]),
        Ht = k.t(null, void 0, i(80227));
      function Pt(e) {
        const { segment: t, forceStart: i, forceEnd: s } = e,
          l = t.end.value - t.start.value,
          o = l < 0.03,
          n = {
            left: 100 * t.start.value + "%",
            width: `calc(${100 * l}% + ${o ? 2 : 0}px)`,
          },
          a = Et(
            xt.segment,
            Lt.get(t.type),
            (i || t.start.isFirstOrLastPoint) && xt.start,
            (s || t.end.isFirstOrLastPoint) && xt.end,
            o && xt.small,
            "common-tooltip-html",
            "apply-common-tooltip"
          ),
          r = (function (e, t) {
            return `<div class="${xt.tooltip}">\n\t\t<span class="${Lt.get(
              t
            )}">${At.get(t)}</span>\n\t\t<span class="${
              xt.time
            }">${e}</span>\n\t</div>`;
          })(t.tooltip, t.type);
        return Ct.createElement("div", {
          className: a,
          style: n,
          "data-tooltip": r,
        });
      }
      function Dt(e) {
        const { sessionDay: t } = e,
          i = t.entries.map((e, i) =>
            Ct.createElement(Pt, {
              key: `${Tt(e)}Segment`,
              segment: e,
              forceStart: 0 === i && 3 === e.type,
              forceEnd: i === t.entries.length - 1 && 3 === e.type,
            })
          ),
          s = Et(xt.sessionDay, t.isActive && xt.active);
        return Ct.createElement(
          "div",
          { className: s },
          Ct.createElement("div", { className: xt.weekDay }, t.title),
          Ct.createElement("div", { className: xt.sessionDaySegments }, i)
        );
      }
      function Bt(e) {
        const { sessionDays: t, currentTimeMark: i } = e,
          s = [],
          l = parseInt(
            Object.keys(t).filter((e) => t[parseInt(e)].isActive)[0]
          ),
          o = t[l],
          n = o.entries.filter(
            (e) => e.start.value <= i && e.end.value >= i
          )[0];
        !n.start.isFirstOrLastPoint && n.showStartForLastEntry
          ? s.push(o.entries[o.entries.length - 1].start)
          : s.push(n.start);
        const a =
          !n.end.isFirstOrLastPoint && n.showEndForFirstEntry
            ? o.entries[0].end
            : n.end;
        if ((s[0].value !== a.value && s.push(a), 0 === s.length)) return null;
        s.sort((e, t) => e.value - t.value);
        const r = s.map((e) =>
            Ct.createElement(
              "div",
              { key: Tt(e), className: xt.timeMark },
              e.title
            )
          ),
          d = 100 * (2 === s.length ? s[1].value - s[0].value : 0),
          u = Et(d > 12 && xt.timeMarkSegmentAlignByEnds, xt.timeMarkSegment);
        return Ct.createElement(
          "div",
          { className: xt.sessionDay },
          Ct.createElement("div", { className: xt.weekDay }),
          Ct.createElement(
            "div",
            { className: xt.timeMarkWrapper },
            Ct.createElement(
              "div",
              {
                className: u,
                style: { left: 100 * s[0].value + "%", width: `${d}%` },
              },
              r
            )
          )
        );
      }
      class zt {
        constructor(e) {
          (this._source = e), (this._fullSessionScheduleViewModel = new ft(e));
        }
        destroy() {
          this._fullSessionScheduleViewModel.destroy();
        }
        renderer(e, t) {
          var i, s;
          return (
            null ===
              (s =
                null === (i = this._source.marketStatusModel()) || void 0 === i
                  ? void 0
                  : i.futuresContractExpirationTime()) || void 0 === s
              ? void 0
              : s.expired().value()
          )
            ? null
            : (function (e) {
                const { key: t, className: i, now: s, timezone: l } = e,
                  o = (0, kt.useWatchedValueReadonly)({
                    watchedValue: e.sessionDays,
                  }),
                  n = Object.values(o).filter((e) => e.isActive)[0],
                  a = Et(i, xt.wrapper);
                return Ct.createElement(
                  "div",
                  { key: t, className: a },
                  Ct.createElement(
                    "div",
                    { className: xt.sessionDayWrapper },
                    Ct.createElement(Dt, { sessionDay: n }),
                    Ct.createElement(
                      "div",
                      { className: xt.nowWrapper },
                      Ct.createElement("div", {
                        className: xt.now,
                        style: { left: 100 * s + "%" },
                      })
                    )
                  ),
                  Ct.createElement(Bt, { sessionDays: o, currentTimeMark: s }),
                  Ct.createElement(
                    "div",
                    { className: xt.timezone },
                    `${Ht}: ${l}`
                  )
                );
              })({
                key: e,
                className: t,
                sessionDays: this._fullSessionScheduleViewModel.sessionsDays,
                now: this._fullSessionScheduleViewModel.currentTimeValue(),
                timezone: this._fullSessionScheduleViewModel.timezone(),
              });
        }
        updateSource(e) {}
      }
      var It = i(7394),
        Nt = i(10381),
        Ot = i(98532);
      class Rt {
        constructor(e) {
          (this.isBlinkingMode = new (n())(!1)),
            (this._status = new (n())(null)),
            (this._fullTooltip = new (n())(null)),
            (this._iconClassNames = new (n())(null)),
            (this._visible = new (n())(!1)),
            (this._tooltip = new (n())(null)),
            (this._icon = new (n())(null)),
            (this._className = new (n())(null)),
            (this._infoMaps = e),
            (this._size = e.size || "small"),
            this._status.subscribe(this._updateByStatus.bind(this), {
              callWithLast: !0,
            }),
            this._className.subscribe(this._updateIconClassName.bind(this));
        }
        turnOffBlinkingMode() {}
        status() {
          return this._status;
        }
        tooltip() {
          return this._tooltip;
        }
        icon() {
          return this._icon;
        }
        className() {
          return this._className;
        }
        visible() {
          return this._visible;
        }
        size() {
          return this._size;
        }
        fullInfo() {
          return this._fullTooltip;
        }
        _getTooltip(e) {
          var t, i;
          return null !==
            (i =
              null === (t = this._infoMaps.tooltipMap) || void 0 === t
                ? void 0
                : t.get(e)) && void 0 !== i
            ? i
            : null;
        }
        _getIcon(e) {
          let t;
          const i = this._infoMaps.iconMap.get(e);
          return void 0 !== i && (t = i.get(this._size)), t || null;
        }
        _getClassName(e) {
          return this._infoMaps.classNameMap.get(e) || null;
        }
        _getTitle(e) {
          var t, i;
          return null !==
            (i =
              null === (t = this._infoMaps.titleMap) || void 0 === t
                ? void 0
                : t.get(e)) && void 0 !== i
            ? i
            : null;
        }
        _getTitleColor(e) {
          var t, i;
          return null !==
            (i =
              null === (t = this._infoMaps.titleColorMap) || void 0 === t
                ? void 0
                : t.get(e)) && void 0 !== i
            ? i
            : null;
        }
        async _getHtml(e) {
          var t, i, s;
          return null !==
            (s =
              null ===
                (i =
                  null === (t = this._infoMaps.htmlMap) || void 0 === t
                    ? void 0
                    : t.get(e)) || void 0 === i
                ? void 0
                : i.map(Nt.htmlEscape)) && void 0 !== s
            ? s
            : null;
        }
        _getAction(e) {
          var t, i;
          return null !==
            (i =
              null === (t = this._infoMaps.actionMap) || void 0 === t
                ? void 0
                : t.get(e)) && void 0 !== i
            ? i
            : null;
        }
        async _updateFullTooltipByStatus(e) {
          const t = await this._getHtml(e);
          this._status.value() === e &&
            this._fullTooltip.setValue([
              {
                icon: this._icon.value(),
                iconClassName: this._iconClassNames.value(),
                title: this._getTitle(e),
                titleColor: this._getTitleColor(e),
                html: t,
                size: this._size,
                action: this._getAction(e),
              },
            ]);
        }
        _updateByStatus(e) {
          if (null === e || this._shouldBeHiddenByStatus(e))
            return (
              this._icon.setValue(null),
              this._tooltip.setValue(null),
              void this._visible.setValue(!1)
            );
          this._icon.setValue(this._getIcon(e)),
            this._className.setValue(this._getClassName(e)),
            this._tooltip.setValue(this._getTooltip(e)),
            this._visible.setValue(!0),
            this._updateFullTooltipByStatus(e);
        }
        _shouldBeHiddenByStatus(e) {
          return !1;
        }
        _updateIconClassName(e) {
          null !== e
            ? this._iconClassNames.setValue([Ot.statusItem, e])
            : this._iconClassNames.setValue(null);
        }
      }
      var Ft = i(56840);
      const Gt = "tv.alreadyBlinkedStatuses",
        Ut = [];
      function jt() {
        return Ft.getJSON(Gt, Ut);
      }
      const $t = new (n())(jt());
      function qt(e) {
        const t = Ft.getJSON(Gt, Ut);
        t.includes(e) || (t.push(e), Ft.setJSON(Gt, t), $t.setValue(jt()));
      }
      Ft.onSync.subscribe(null, () => $t.setValue(jt()));
      const Kt = $t;
      var Yt = i(33972),
        Xt = i(67189),
        Zt = i(57524),
        Qt = i(67957),
        Jt = i(76948),
        ei = i(58189),
        ti = i(56201);
      const ii = (0, ve.getLogger)("Chart.LegendWidget"),
        si = [
          "TFEXDelayForGuest",
          "MOEXDelayForGuest",
          "CHIXAuDelayForGuest",
          "MILDelayForGuest",
          "NGMDelayForGuest",
          "DEForGuest",
          "ICESGDelayForGuest",
          "ADXDelayForGuest",
          "TRADEGATEDelayForGuest",
        ],
        li = new Map([
          [
            "DelayToRealtime",
            new Map([
              ["small", Xt],
              ["medium", Zt],
              ["large", Zt],
            ]),
          ],
          [
            "DelayNoRealtime",
            new Map([
              ["small", Xt],
              ["medium", Zt],
              ["large", Zt],
            ]),
          ],
          [
            "TFEXDelayForGuest",
            new Map([
              ["small", Xt],
              ["medium", Zt],
              ["large", Zt],
            ]),
          ],
          [
            "MOEXDelayForGuest",
            new Map([
              ["small", Xt],
              ["medium", Zt],
              ["large", Zt],
            ]),
          ],
          [
            "CHIXAuDelayForGuest",
            new Map([
              ["small", Xt],
              ["medium", Zt],
              ["large", Zt],
            ]),
          ],
          [
            "MILDelayForGuest",
            new Map([
              ["small", Xt],
              ["medium", Zt],
              ["large", Zt],
            ]),
          ],
          [
            "NGMDelayForGuest",
            new Map([
              ["small", Xt],
              ["medium", Zt],
              ["large", Zt],
            ]),
          ],
          [
            "ICESGDelayForGuest",
            new Map([
              ["small", Xt],
              ["medium", Zt],
              ["large", Zt],
            ]),
          ],
          [
            "ADXDelayForGuest",
            new Map([
              ["small", Xt],
              ["medium", Zt],
              ["large", Zt],
            ]),
          ],
          [
            "TRADEGATEDelayForGuest",
            new Map([
              ["small", Xt],
              ["medium", Zt],
              ["large", Zt],
            ]),
          ],
          [
            "DEForGuest",
            new Map([
              ["small", Xt],
              ["medium", Zt],
              ["large", Zt],
            ]),
          ],
          [
            "EOD",
            new Map([
              ["small", Qt],
              ["medium", Jt],
              ["large", Jt],
            ]),
          ],
          [
            "TickByTick",
            new Map([
              ["small", ei],
              ["medium", ti],
              ["large", ti],
            ]),
          ],
          [
            "BATSToRealtime",
            new Map([
              ["small", ei],
              ["medium", ti],
              ["large", ti],
            ]),
          ],
          [
            "DelayWithoutMarketAgreement",
            new Map([
              ["small", Xt],
              ["medium", Zt],
              ["large", Zt],
            ]),
          ],
        ]),
        oi = new Map([
          ["DelayToRealtime", Ot.delay],
          ["DelayNoRealtime", Ot.delay],
          ["TFEXDelayForGuest", Ot.delay],
          ["MOEXDelayForGuest", Ot.delay],
          ["CHIXAuDelayForGuest", Ot.delay],
          ["MILDelayForGuest", Ot.delay],
          ["NGMDelayForGuest", Ot.delay],
          ["ICESGDelayForGuest", Ot.delay],
          ["ADXDelayForGuest", Ot.delay],
          ["TRADEGATEDelayForGuest", Ot.delay],
          ["DEForGuest", Ot.delay],
          ["EOD", Ot.eod],
          ["TickByTick", Ot.notAccurate],
          ["BATSToRealtime", Ot.notAccurate],
          ["DelayWithoutMarketAgreement", Ot.delay],
        ]),
        ni = new Map([
          ["DelayToRealtime", It.colorsPalette["color-delay-mode"]],
          ["DelayNoRealtime", It.colorsPalette["color-delay-mode"]],
          ["TFEXDelayForGuest", It.colorsPalette["color-delay-mode"]],
          ["MOEXDelayForGuest", It.colorsPalette["color-delay-mode"]],
          ["CHIXAuDelayForGuest", It.colorsPalette["color-delay-mode"]],
          ["MILDelayForGuest", It.colorsPalette["color-delay-mode"]],
          ["NGMDelayForGuest", It.colorsPalette["color-delay-mode"]],
          ["ICESGDelayForGuest", It.colorsPalette["color-delay-mode"]],
          ["ADXDelayForGuest", It.colorsPalette["color-delay-mode"]],
          ["TRADEGATEDelayForGuest", It.colorsPalette["color-delay-mode"]],
          ["DEForGuest", It.colorsPalette["color-delay-mode"]],
          ["EOD", It.colorsPalette["color-eod-mode"]],
          ["TickByTick", It.colorsPalette["color-notaccurate-mode"]],
          ["BATSToRealtime", It.colorsPalette["color-notaccurate-mode"]],
          ["DelayWithoutMarketAgreement", It.colorsPalette["color-delay-mode"]],
        ]),
        ai = k.t(null, void 0, i(57310)),
        ri = k.t(null, void 0, i(59315)),
        di = k.t(null, void 0, i(15815)),
        ui = k.t(null, void 0, i(65636)),
        hi = k.t(null, void 0, i(7435)),
        ci = (0, Nt.htmlEscape)(k.t(null, void 0, i(11155))),
        _i = (0, Nt.htmlEscape)(k.t(null, void 0, i(1084))),
        pi = (0, Nt.htmlEscape)(k.t(null, void 0, i(52984))),
        mi = (0, Nt.htmlEscape)(k.t(null, void 0, i(36015))),
        gi = (0, Nt.htmlEscape)(k.t(null, void 0, i(52916))),
        vi = (0, Nt.htmlEscape)(k.t(null, void 0, i(49321))),
        bi = (0, Nt.htmlEscape)(k.t(null, void 0, i(25978))),
        wi = (0, Nt.htmlEscape)(k.t(null, void 0, i(28412))),
        yi = (0, Nt.htmlEscape)(k.t(null, void 0, i(6667))),
        Si = (0, Nt.htmlEscape)(k.t(null, void 0, i(57918))),
        Mi = (0, Nt.htmlEscape)(k.t(null, void 0, i(68025))),
        fi = (0, Nt.htmlEscape)(k.t(null, void 0, i(91459)));
      k.t(null, void 0, i(36004)),
        k.t(null, void 0, i(18429)),
        (0, Nt.htmlEscape)(k.t(null, void 0, i(25046)));
      class Ci extends Rt {
        constructor(e, t, i) {
          super({ iconMap: li, classNameMap: oi, titleColorMap: ni, size: t }),
            (this._dataUpdatedInfo = new (n())(null).spawn()),
            (this._options = i),
            (this._model = e),
            (this._dataModeBlinkingStatuses = Kt.spawn()),
            this._dataModeBlinkingStatuses.subscribe(
              this._updateBlinkingMode.bind(this)
            ),
            (this.turnOffBlinkingMode = this._turnOffBlinking.bind(this)),
            this.setModel(e);
        }
        destroy() {
          this._dataUpdatedInfo.destroy(),
            this._dataModeBlinkingStatuses.destroy();
        }
        setModel(e) {
          if ((this._dataUpdatedInfo.destroy(), null === e))
            return (
              (this._model = e),
              void (this._dataUpdatedInfo = new (n())(null).spawn())
            );
          (this._dataUpdatedInfo = e.status().spawn()),
            this._dataUpdatedInfo.subscribe(this._updateStatus.bind(this), {
              callWithLast: !0,
            });
        }
        _shouldBeHiddenByStatus(e) {
          var t;
          return (
            !!(null === (t = this._options.shouldBeHiddenRegardlessOfStatus) ||
            void 0 === t
              ? void 0
              : t.value()) || super._shouldBeHiddenByStatus(e)
          );
        }
        _getTooltip() {
          const e = this._getShortTexts();
          return null === e ? null : Object.values(e).join(" · ");
        }
        async _updateFullTooltipByStatus() {
          const e = this._dataUpdatedInfo.value();
          if (null === e) return void this._fullTooltip.setValue(null);
          const t = this._getShortTexts(),
            i = await this._getHtmls(),
            s = await this._getActions();
          if (e !== this._dataUpdatedInfo.value()) return;
          const l = [];
          for (const o of e) {
            const e = o.mode;
            l.push({
              icon: this._getIcon(e),
              iconClassName: this._iconClassNames.value(),
              title: t && t[e],
              titleColor: this._getTitleColor(e),
              html: i && i[e],
              size: this._size,
              action: s && s[e],
            });
          }
          this._fullTooltip.setValue(l);
        }
        _updateStatus(e) {
          var t;
          const i = null !== e ? e[0] : null;
          super._updateByStatus(
            null !== (t = null == i ? void 0 : i.mode) && void 0 !== t
              ? t
              : null
          ),
            this._updateBlinkingMode();
        }
        async _getHtmls() {
          var e, t;
          const s = this._dataUpdatedInfo.value();
          if (null === s || null === this._model) return Promise.resolve(null);
          const l = {},
            o = this._model.symbolName();
          let n = null,
            a = null;
          try {
            (n = await this._model.description()), (a = this._model.exchange());
          } catch (e) {
            ii.logError(
              `Can't get exchange description, reason: ${(0, Yt.errorToString)(
                e
              )}`
            );
          }
          for (const r of s) {
            const s = r.mode;
            if (
              ((l[s] = []),
              [
                "DelayToRealtime",
                "DelayNoRealtime",
                "DelayWithoutMarketAgreement",
                ...si,
              ].includes(s) &&
                (l[s].push(
                  ci.format({
                    symbolName: o,
                    time: this._model.time().toString(),
                  })
                ),
                this._options.subscriptionFullInfo &&
                  null !== n &&
                  "DelayToRealtime" === s &&
                  l[s].push(pi.format({ description: `<b>${n}</b>` })),
                null !== n &&
                  "DelayNoRealtime" === s &&
                  l[s].push(mi.format({ description: `<b>${n}</b>` })),
                "DelayWithoutMarketAgreement" === s &&
                  l[s].push(
                    fi.format({ listedExchange: this._model.listedExchange() })
                  ),
                this._options.subscriptionFullInfo &&
                  si.includes(s) &&
                  l[s].push(
                    _i.format({ listedExchange: this._model.listedExchange() })
                  )),
              "EOD" === s && (l[s] = [gi]),
              "TickByTick" === s)
            ) {
              const o =
                  void 0 === r.updatePeriod
                    ? vi
                    : (0, Nt.htmlEscape)(
                        k.t(
                          null,
                          {
                            count: r.updatePeriod,
                            replace: {
                              amount: (null !== (e = r.updatePeriod) &&
                              void 0 !== e
                                ? e
                                : 1
                              ).toString(),
                            },
                            plural:
                              "Data on our Basic plan is updated once every {amount} seconds, even if there are more updates on the market.",
                          },
                          i(2121)
                        )
                      ),
                n =
                  void 0 === r.updatePeriod
                    ? bi
                    : (0, Nt.htmlEscape)(
                        k.t(
                          null,
                          {
                            count: r.updatePeriod,
                            replace: {
                              amount: (null !== (t = r.updatePeriod) &&
                              void 0 !== t
                                ? t
                                : 1
                              ).toString(),
                            },
                            plural:
                              "Data is updated once every {amount} seconds, even if there are more updates on the market.",
                          },
                          i(77033)
                        )
                      );
              l[s].push(this._options.subscriptionFullInfo ? o : n),
                this._options.subscriptionFullInfo && l[s].push(wi);
            }
            if (null !== a && "BATSToRealtime" === s) {
              let e = this._model.listedExchange();
              0,
                l[s].push(
                  yi.format({ symbolName: o, exchange: a }),
                  "" !== e ? Mi.format({ exchange: e }) : Si
                );
            }
          }
          return Object.keys(l).length > 0 ? l : null;
        }
        async _getActions() {
          if (null === this._dataUpdatedInfo.value() || null === this._model)
            return null;
          const e = {};
          return Object.keys(e).length > 0 ? e : null;
        }
        _getShortTexts() {
          var e, t;
          const s = this._dataUpdatedInfo.value();
          if (null === s || null === this._model) return null;
          const l = {};
          for (const o of s) {
            const s = o.mode;
            if (
              ([
                "DelayToRealtime",
                "DelayNoRealtime",
                ...si,
                "DelayWithoutMarketAgreement",
              ].includes(s) && (l[s] = ai),
              "EOD" === s && (l[s] = ri),
              "TickByTick" === s)
            ) {
              const t =
                void 0 === o.updatePeriod
                  ? di
                  : (0, Nt.htmlEscape)(
                      k.t(
                        null,
                        {
                          plural: "One update every {amount} seconds",
                          count: o.updatePeriod,
                          replace: {
                            amount: (null !== (e = o.updatePeriod) &&
                            void 0 !== e
                              ? e
                              : 1
                            ).toString(),
                          },
                        },
                        i(5223)
                      )
                    );
              l[s] = t;
            }
            if ("BATSToRealtime" === s) {
              let e =
                null !== (t = this._model.firstReplacedByBatsExchange()) &&
                void 0 !== t
                  ? t
                  : "";
              0,
                (l[s] =
                  "" !== e
                    ? hi.format({ exchange: e, originalExchange: ui })
                    : ui);
            }
          }
          return Object.keys(l).length > 0 ? l : null;
        }
        _updateBlinkingMode() {
          const e = this._dataUpdatedInfo.value();
          if (null === e) return;
          const t = this._dataModeBlinkingStatuses.value();
          for (const i of e)
            if (!t.includes(i.mode))
              return void this.isBlinkingMode.setValue(!0);
          this.isBlinkingMode.setValue(!1);
        }
        _turnOffBlinking() {
          const e = this._dataUpdatedInfo.value();
          if (null !== e) for (const t of e) qt(t.mode);
        }
      }
      var Ei = i(27486),
        ki = i(8767);
      const Vi = k.t(null, void 0, i(39045)),
        xi = new Map([
          [
            !0,
            new Map([
              ["small", Ei],
              ["medium", ki],
              ["large", ki],
            ]),
          ],
          [
            !1,
            new Map([
              ["small", ""],
              ["medium", ""],
              ["large", ""],
            ]),
          ],
        ]),
        Wi = new Map([
          [!0, Ot.dataProblemLow],
          [!1, null],
        ]),
        Ti = new Map([
          [!0, Vi],
          [!1, null],
        ]),
        Li = new Map([
          [!0, Vi],
          [!1, null],
        ]),
        Ai = new Map([
          [!0, It.colorsPalette["color-data-problem"]],
          [!1, null],
        ]);
      class Hi extends Rt {
        constructor(e, t, i) {
          super({
            iconMap: xi,
            classNameMap: Wi,
            tooltipMap: Ti,
            titleMap: Li,
            titleColorMap: Ai,
            size: t,
          }),
            (this._dataSourceErrorStatus = new (n())(null).spawn()),
            (this._lastError = null),
            (this._options = i),
            this.setSource(e);
        }
        destroy() {
          this._dataSourceErrorStatus.destroy();
        }
        setSource(e) {
          this._dataSourceErrorStatus.destroy(),
            (this._dataSourceErrorStatus = e.errorStatus().spawn()),
            this._dataSourceErrorStatus.subscribe(
              this._updateStatus.bind(this),
              { callWithLast: !0 }
            );
        }
        _getTooltip(e) {
          var t;
          return null !==
            (t = e ? this._getDataSourceErrorStatusCustomTitle() : null) &&
            void 0 !== t
            ? t
            : super._getTooltip(e);
        }
        _getTitle(e) {
          var t;
          return null !==
            (t = e ? this._getDataSourceErrorStatusCustomTitle() : null) &&
            void 0 !== t
            ? t
            : super._getTitle(e);
        }
        async _getHtml(e) {
          const t = this._dataSourceErrorStatus.value();
          return null !== t ? [(0, Nt.htmlEscape)(t.error)] : null;
        }
        _getAction(e) {
          return null;
        }
        _updateStatus(e) {
          const t = this._status.value();
          null !== e
            ? (this._status.setValue(!0),
              t && this._lastError !== e.error && this._updateByStatus(!0),
              (this._lastError = e.error))
            : (this._status.setValue(null), (this._lastError = null));
        }
        _getDataSourceErrorStatusCustomTitle() {
          var e;
          return (
            (null === (e = this._dataSourceErrorStatus.value()) || void 0 === e
              ? void 0
              : e.title) || null
          );
        }
      }
      const Pi = k.t(null, void 0, i(97325)),
        Di = new Map([
          [
            "high",
            new Map([
              ["small", Ei],
              ["medium", ki],
              ["large", ki],
            ]),
          ],
          [
            "low",
            new Map([
              ["small", Ei],
              ["medium", ki],
              ["large", ki],
            ]),
          ],
        ]),
        Bi = new Map([
          ["high", Ot.dataProblemHigh],
          ["low", Ot.dataProblemLow],
        ]),
        zi = new Map([
          ["high", Pi],
          ["low", Pi],
        ]),
        Ii = new Map([
          ["high", It.colorsPalette["color-data-problem"]],
          ["low", It.colorsPalette["color-data-problem"]],
        ]);
      class Ni extends Rt {
        constructor(e, t) {
          super({
            tooltipMap: zi,
            iconMap: Di,
            classNameMap: Bi,
            titleMap: zi,
            titleColorMap: Ii,
            size: t,
          }),
            (this._dataProblem = new (n())(null).spawn()),
            (this._isDataProblemCritical = new (n())(!1)),
            this.setModel(e);
        }
        destroy() {
          this._dataProblem.destroy();
        }
        isDataProblemCritical() {
          return this._isDataProblemCritical;
        }
        setModel(e) {
          this._dataProblem.destroy(),
            null !== e
              ? ((this._dataProblem = e.status().spawn()),
                this._dataProblem.subscribe(this._updateStatus.bind(this), {
                  callWithLast: !0,
                }))
              : (this._dataProblem = new (n())(null).spawn());
        }
        async _getHtml(e) {
          const t = this._dataProblem.value();
          return null === t ? null : [(0, Nt.htmlEscape)(t.text)];
        }
        _getTooltip(e) {
          var t;
          return null !== (t = this._getDataProblemCustomTitle()) &&
            void 0 !== t
            ? t
            : super._getTooltip(e);
        }
        _getTitle(e) {
          var t;
          return null !== (t = this._getDataProblemCustomTitle()) &&
            void 0 !== t
            ? t
            : super._getTitle(e);
        }
        _updateStatus(e) {
          var t;
          const i =
            null !== (t = null == e ? void 0 : e.severity) && void 0 !== t
              ? t
              : null;
          this._status.setValue(i),
            this._isDataProblemCritical.setValue(
              (function (e) {
                return "high" === e;
              })(i)
            );
        }
        _getDataProblemCustomTitle() {
          var e;
          return (
            (null === (e = this._dataProblem.value()) || void 0 === e
              ? void 0
              : e.title) || null
          );
        }
      }
      class Oi extends Rt {
        constructor(e, t) {
          super(t),
            (this._booleanStatus = new (n())(!1).spawn()),
            this.updateStatus(e);
        }
        destroy() {
          this._booleanStatus.destroy();
        }
        updateStatus(e) {
          this._booleanStatus.destroy(),
            (this._booleanStatus = e.spawn()),
            this._booleanStatus.subscribe(this._updateStatus.bind(this), {
              callWithLast: !0,
            });
        }
        _updateStatus(e) {
          e ? this._status.setValue(!0) : this._status.setValue(null);
        }
      }
      var Ri = i(79639),
        Fi = i(4696);
      const Gi = k.t(null, void 0, i(14177)),
        Ui = k.t(null, void 0, i(73717)),
        ji = new Map([
          [
            !0,
            new Map([
              ["small", Ri],
              ["medium", Fi],
              ["large", Fi],
            ]),
          ],
          [
            !1,
            new Map([
              ["small", ""],
              ["medium", ""],
              ["large", ""],
            ]),
          ],
        ]),
        $i = new Map([
          [!0, Ot.invalidSymbol],
          [!1, null],
        ]),
        qi = new Map([
          [!0, Gi],
          [!1, null],
        ]),
        Ki = new Map([
          [!0, Gi],
          [!1, null],
        ]),
        Yi = new Map([
          [!0, It.colorsPalette["color-invalid-symbol"]],
          [!1, null],
        ]),
        Xi = new Map([
          [!0, [Ui]],
          [!1, null],
        ]),
        Zi = new Map([
          [!0, null],
          [!1, null],
        ]);
      class Qi {
        constructor(e) {
          (this._el = document.createElement("div")),
            (this._prevCustomClass = null),
            (this._icon = e.icon.spawn()),
            this._icon.subscribe(this._updateIcon.bind(this), {
              callWithLast: !0,
            }),
            (this._className = e.className.spawn()),
            this._className.subscribe(this._updateClassName.bind(this), {
              callWithLast: !0,
            }),
            (this._visible = e.visible.spawn()),
            this._visible.subscribe(this._updateVisibility.bind(this), {
              callWithLast: !0,
            }),
            (this._size = e.size || "small"),
            this._render(e.parentEl),
            e.isBlinking &&
              ((this._isBlinking = e.isBlinking.spawn()),
              this._isBlinking.subscribe(this._updateBlinkingMode.bind(this), {
                callWithLast: !0,
              }),
              (this._turnOffBlinking = e.turnOffBlinking));
        }
        destroy() {
          this._visible.destroy(),
            this._icon.destroy(),
            this._isBlinking && this._isBlinking.destroy(),
            this._el.remove();
        }
        onClick() {
          this._turnOffBlinking && this._turnOffBlinking();
        }
        visible() {
          return this._visible;
        }
        _render(e) {
          this._el.classList.add(Ot.statusItem, Ot[this._size]),
            e.appendChild(this._el);
        }
        _updateVisibility(e) {
          this._el.classList.toggle("js-hidden", !e);
        }
        _updateIcon(e) {
          this._el.innerHTML = e || "";
        }
        _updateClassName(e) {
          this._prevCustomClass !== e &&
            (null !== this._prevCustomClass &&
              this._el.classList.remove(this._prevCustomClass),
            null !== e && this._el.classList.add(e),
            (this._prevCustomClass = e));
        }
        _updateBlinkingMode(e) {
          this._el.classList.toggle(Ot.blinking, e);
        }
      }
      class Ji {
        constructor(e, t, i, s) {
          (this.element = document.createElement("div")),
            (this._blinkingSpawns = []),
            (this._iconsRenderers = []);
          const l = [
            Ot.statuses,
            "apply-common-tooltip",
            "common-tooltip-wide",
          ];
          h.trackingModeIsAvailable && l.push(Ot.touchMode),
            this.element.classList.add(...l, Ot[e]),
            (this._visibleWidgetsCount = t.spawn()),
            this._visibleWidgetsCount.subscribe(
              this._updateSpecialClassAndTooltip.bind(this)
            ),
            (this._tooltips = i.spawn()),
            this._tooltips.subscribe(this._updateTooltip.bind(this)),
            (this._onClickCallback = s.onClick),
            (this._onClickHandler = this._onClick.bind(this)),
            this.element.addEventListener("click", this._onClickHandler);
        }
        destroy() {
          for (const e of this._iconsRenderers) e.destroy();
          for (const e of this._blinkingSpawns) e.destroy();
          this._visibleWidgetsCount.destroy(),
            this._tooltips.destroy(),
            this.element.removeEventListener("click", this._onClickHandler),
            this.element.remove();
        }
        addStatusModel(e) {
          this._iconsRenderers.push(
            new Qi({
              visible: e.visible,
              icon: e.model.icon(),
              className: e.model.className(),
              size: e.model.size(),
              parentEl: this.element,
              isBlinking: e.model.isBlinkingMode,
              turnOffBlinking: e.model.turnOffBlinkingMode,
            })
          );
          const t = e.model.isBlinkingMode.spawn();
          t.subscribe(this._updateBlinkingMode.bind(this)),
            this._blinkingSpawns.push(t),
            this._updateBlinkingMode();
        }
        _onClick(e) {
          e.preventDefault();
          const t = this._iconsRenderers.filter((e) => e.visible().value());
          for (const e of t) e.onClick();
          let i = 14;
          t.length > 1 && (i -= 2);
          const s = this.element.getBoundingClientRect(),
            l = { x: s.left - i, y: s.bottom + 4 };
          this._onClickCallback(l);
        }
        _updateTooltip() {
          this.element.setAttribute(
            "title",
            this._tooltips.value().join(" · ")
          );
        }
        _updateSpecialClassAndTooltip() {
          const e = this._visibleWidgetsCount.value();
          this.element.classList.toggle(Ot.oneWidgetsVisible, 1 === e),
            this.element.classList.toggle(Ot.twoWidgetsVisible, 2 === e),
            this.element.classList.toggle(Ot.threeWidgetsVisible, 3 === e),
            this._updateTooltip();
        }
        _updateBlinkingMode() {
          const e = this._blinkingSpawns.some((e) => e.value());
          this.element.classList.toggle(Ot.blinking, e);
        }
      }
      var es = i(21035),
        ts = i(20983),
        is = i(16030),
        ss = i(34074),
        ls = i(27086),
        os = i(20123),
        ns = i(23373),
        as = i(72074);
      const rs = k.t(null, void 0, i(83949)),
        ds = k.t(null, void 0, i(56042)),
        us = k.t(null, void 0, i(29985)),
        hs = k.t(null, void 0, i(95814)),
        cs = k.t(null, void 0, i(88958)),
        _s = k.t(null, void 0, i(69419)),
        ps = k.t(null, void 0, i(1653)),
        ms = k.t(null, void 0, i(40519)),
        gs = k.t(null, void 0, i(57048)),
        vs = k.t(null, void 0, i(87202)),
        bs = k.t(null, void 0, i(39348)),
        ws = k.t(null, void 0, i(7827)),
        ys = k.t(null, void 0, i(19830)),
        Ss = k.t(null, void 0, i(35701)),
        Ms = k.t(null, void 0, i(98105)),
        fs = k.t(null, void 0, i(50634)),
        Cs = k.t(null, void 0, i(74537)),
        Es = new Map([
          [
            "market",
            new Map([
              ["small", ts],
              ["medium", is],
              ["large", is],
            ]),
          ],
          [
            "pre_market",
            new Map([
              ["small", ns],
              ["medium", as],
              ["large", as],
            ]),
          ],
          [
            "post_market",
            new Map([
              ["small", ls],
              ["medium", os],
              ["large", os],
            ]),
          ],
          [
            "out_of_session",
            new Map([
              ["small", es],
              ["medium", es],
              ["large", es],
            ]),
          ],
          [
            "holiday",
            new Map([
              ["small", ss],
              ["medium", ss],
              ["large", ss],
            ]),
          ],
        ]),
        ks = new Map([
          ["market", Ot.marketStatusOpen],
          ["pre_market", Ot.marketStatusPre],
          ["post_market", Ot.marketStatusPost],
          ["out_of_session", Ot.marketStatusClose],
          ["holiday", Ot.marketStatusHoliday],
        ]),
        Vs = new Map([
          ["market", rs],
          ["pre_market", ds],
          ["post_market", us],
          ["out_of_session", hs],
          ["holiday", cs],
        ]),
        xs = new Map([
          ["market", rs],
          ["pre_market", ds],
          ["post_market", us],
          ["out_of_session", hs],
          ["holiday", cs],
        ]),
        Ws = new Map([
          ["market", It.colorsPalette["color-market-open"]],
          ["pre_market", It.colorsPalette["color-pre-market"]],
          ["post_market", It.colorsPalette["color-post-market"]],
          ["out_of_session", It.colorsPalette["color-market-closed"]],
          ["holiday", It.colorsPalette["color-market-holiday"]],
        ]),
        Ts = {
          market: _s,
          pre_market: ps,
          post_market: ms,
          out_of_session: gs,
          holiday: vs,
        };
      function Ls(e) {
        return k
          .t(null, { plural: "{number} minutes", count: e }, i(67151))
          .format({ number: e.toString() });
      }
      function As(e) {
        return k
          .t(null, { plural: "{number} hours", count: e }, i(24430))
          .format({ number: e.toString() });
      }
      function Hs(e) {
        const t = Math.floor(e / 86400),
          s = Math.floor((e - 86400 * t) / 3600),
          l = Math.floor((e - 86400 * t - 3600 * s) / 60);
        return 0 === t && 0 === s && 0 === l
          ? bs
          : t > 0
          ? ws.format({
              days:
                ((o = t),
                k
                  .t(null, { plural: "{number} days", count: o }, i(58609))
                  .format({ number: o.toString() })),
              hours: As(s),
            })
          : s > 0
          ? ys.format({ hours: As(s), minutes: Ls(l) })
          : Ls(l);
        var o;
      }
      const Ps = {
          market: (e) =>
            ("post_market" === e.status ? fs : Ms).format({
              remainingTime: Hs(e.remainingSeconds),
            }),
          pre_market: (e) =>
            Ss.format({ remainingTime: Hs(e.remainingSeconds) }),
          post_market: (e) =>
            Ms.format({ remainingTime: Hs(e.remainingSeconds) }),
          out_of_session: (e) =>
            ("pre_market" === e.status ? Cs : Ss).format({
              remainingTime: Hs(e.remainingSeconds),
            }),
          holiday: (e) =>
            ("pre_market" === e.status ? Cs : Ss).format({
              remainingTime: Hs(e.remainingSeconds),
            }),
        },
        Ds = new Map([
          ["market", null],
          ["pre_market", null],
          ["post_market", null],
          ["out_of_session", null],
          ["holiday", null],
        ]);
      class Bs extends Rt {
        constructor(e, t) {
          super({
            tooltipMap: Vs,
            iconMap: Es,
            classNameMap: ks,
            titleMap: xs,
            titleColorMap: Ws,
            actionMap: Ds,
            size: t,
          }),
            (this._model = null),
            (this._expiredStatus = null),
            (this._marketStatus = new (n())(null).spawn()),
            (this._sessionEdge = new (n())(null).spawn()),
            this.setModel(e),
            ze.showMarketOpenStatusProperty.subscribe(
              this,
              this._showMarketOpenStatusPropertyChanged
            );
        }
        destroy() {
          this._marketStatus.destroy(),
            this._sessionEdge.destroy(),
            (this._model = null),
            ze.showMarketOpenStatusProperty.unsubscribeAll(this);
        }
        setModel(e) {
          var t;
          if (
            (this._marketStatus.destroy(),
            this._sessionEdge.destroy(),
            null === (t = this._expiredStatus) || void 0 === t || t.destroy(),
            null === e)
          )
            return (
              (this._marketStatus = new (n())(null).spawn()),
              (this._sessionEdge = new (n())(null).spawn()),
              void (this._expiredStatus = null)
            );
          this._model = e;
          const i = e.futuresContractExpirationTime();
          i &&
            ((this._expiredStatus = i.expired().spawn()),
            this._expiredStatus.subscribe((e) => {
              e && this._updateByStatus(this._marketStatus.value());
            })),
            (this._marketStatus = e.status().spawn()),
            this._marketStatus.subscribe(this._updateStatus.bind(this), {
              callWithLast: !0,
            }),
            (this._sessionEdge = e.nextSessionEdge().spawn()),
            this._sessionEdge.subscribe(this._updateTooltip.bind(this)),
            this._updateTooltip();
        }
        async _getHtml(e) {
          if (this._isExpiredFutures())
            return [(0, Nt.htmlEscape)(expiredHtml)];
          const t = [(0, Nt.htmlEscape)(Ts[e])],
            i = this._marketStatus.value();
          if (null !== this._model && null !== i) {
            const i = this._model.nextSessionEdge().value();
            null !== i && t.push({ text: Ps[e](i), bold: !0 });
          }
          return t;
        }
        _shouldBeHiddenByStatus(e) {
          return !ze.showMarketOpenStatusProperty.value() && "market" === e;
        }
        _getTooltip(e) {
          return this._isExpiredFutures()
            ? expiredTooltip
            : super._getTooltip(e);
        }
        _getIcon(e) {
          return this._isExpiredFutures()
            ? expiredIconMap.get(this._size) || null
            : super._getIcon(e);
        }
        _getClassName(e) {
          return this._isExpiredFutures()
            ? expiredClassName
            : super._getClassName(e);
        }
        _getTitle(e) {
          return this._isExpiredFutures() ? expiredTitle : super._getTitle(e);
        }
        _getTitleColor(e) {
          return this._isExpiredFutures()
            ? expiredTitleColor
            : super._getTitleColor(e);
        }
        _isExpiredFutures() {
          var e, t, i;
          return (
            null !==
              (i =
                null ===
                  (t =
                    null === (e = this._model) || void 0 === e
                      ? void 0
                      : e.futuresContractExpirationTime()) || void 0 === t
                  ? void 0
                  : t.expired().value()) &&
            void 0 !== i &&
            i
          );
        }
        _updateStatus(e) {
          this._status.setValue(e);
        }
        _updateTooltip() {
          const e = this._status.value();
          null !== e && this._updateFullTooltipByStatus(e);
        }
        _showMarketOpenStatusPropertyChanged() {
          this._updateByStatus(this._status.value());
        }
      }
      class zs {
        constructor(e, t) {
          var i, s;
          (this.visibleWidgetsCount = new (n())(0)),
            (this.errorWidgetIsShown = new (n())(!1)),
            (this._size = h.trackingModeIsAvailable ? "medium" : "small"),
            (this._tooltips = new (n())([])),
            (this._visibilitySpawns = []),
            (this._tooltipSpawns = []),
            (this._statusWidgetInfos = []),
            (this._renderer = new Ji(
              this._size,
              this.visibleWidgetsCount,
              this._tooltips,
              { onClick: this._handleToggleDropdown.bind(this) }
            )),
            (this._symbolInvalidViewModel = null),
            (this._dataSourceErrorStatusViewModel = null),
            (this._marketStatusViewModel = null),
            (this._dataUpdatedModeViewModel = null),
            (this._dataProblemViewModel = null),
            (this._sessionWidget = null),
            (this._dataSourceHasErrorVisible = null),
            (this._dataSourceErrorCanBeShown = new (n())(!1)),
            (this._marketStatusCanBeShown = new (n())(!1)),
            (this._dataUpdatedModeCanBeShown = new (n())(!1)),
            (this._dataProblemCanBeShown = new (n())(!1)),
            (this._isDataProblemCritical = null),
            (this._container = document.createElement("div")),
            (this._menuOpened = !1),
            (this._menuPosition = null),
            (this._handleDropdownMenuClose = () => {
              var e;
              (this._menuOpened = !1),
                null === (e = this._source.symbol()) ||
                  void 0 === e ||
                  e.unsubscribe(this._handleDropdownMenuClose),
                this._updateDropdownMenu();
            }),
            (this._source = e),
            (this._symbol =
              null !==
                (s =
                  null === (i = e.symbol()) || void 0 === i
                    ? void 0
                    : i.spawn()) && void 0 !== s
                ? s
                : null),
            (this._options = t),
            this._recreateWidgets(),
            this._addSubscriptionForSymbolInvalid(),
            null !== this._dataSourceHasErrorVisible &&
              (this._dataSourceHasErrorVisible.subscribe(
                this._updateStatusWidgetsVisibilities.bind(this)
              ),
              this._dataSourceHasErrorVisible.subscribe(
                this._updateErrorWidgetIsShown.bind(this)
              )),
            this._options.dataProblemEnabled &&
              null !== this._isDataProblemCritical &&
              this._isDataProblemCritical.subscribe(
                this._updateStatusWidgetsVisibilities.bind(this)
              );
          for (const e of this._tooltipSpawns)
            e.subscribe(this._updateTooltips.bind(this));
          for (const e of this._visibilitySpawns)
            e.subscribe(this._updateVisibleWidgetsCount.bind(this)),
              e.subscribe(this._updateTooltips.bind(this));
          this._updateErrorWidgetIsShown(),
            this._updateStatusWidgetsVisibilities(),
            this._updateVisibleWidgetsCount(),
            this._updateTooltips();
        }
        destroy() {
          var e, t;
          this._source.destroy(),
            null === (e = this._symbol) || void 0 === e || e.destroy(),
            null === (t = this._isDataProblemCritical) ||
              void 0 === t ||
              t.destroy();
          for (const e of this._tooltipSpawns) e.destroy();
          for (const e of this._visibilitySpawns) e.destroy();
          this.visibleWidgetsCount.unsubscribe();
          for (const e of this._statusWidgetInfos) e.model.destroy();
          this._renderer.destroy();
        }
        getElement() {
          return this._renderer.element;
        }
        updateSource(e) {
          var t, i, s;
          this._source !== e &&
            (null === (t = this._symbol) || void 0 === t || t.destroy(),
            this._source.destroy(),
            (this._source = e),
            (this._symbol =
              null !==
                (s =
                  null === (i = e.symbol()) || void 0 === i
                    ? void 0
                    : i.spawn()) && void 0 !== s
                ? s
                : null),
            this._recreateWidgets(),
            this._updateStatusWidgetsVisibilities(),
            this._updateErrorWidgetIsShown(),
            this._updateVisibleWidgetsCount(),
            this._updateTooltips());
        }
        _updateStatusWidgetsVisibilities() {
          const e = this._isForceStatusActive();
          this._dataSourceErrorCanBeShown.setValue(!e),
            this._marketStatusCanBeShown.setValue(!e),
            this._dataUpdatedModeCanBeShown.setValue(!e),
            this._dataProblemCanBeShown.setValue(!this._isPrimaryWidgetShown());
        }
        _isPrimaryWidgetShown() {
          var e, t;
          return (
            null !==
              (t =
                null === (e = this._source.isSymbolInvalid()) || void 0 === e
                  ? void 0
                  : e.value()) &&
            void 0 !== t &&
            t
          );
        }
        _isForceStatusActive() {
          var e, t;
          return (
            this._isPrimaryWidgetShown() ||
            (null !==
              (t =
                null === (e = this._isDataProblemCritical) || void 0 === e
                  ? void 0
                  : e.value()) &&
              void 0 !== t &&
              t)
          );
        }
        _updateVisibleWidgetsCount() {
          const e = this._statusWidgetInfos.filter((e) => e.visible.value());
          this.visibleWidgetsCount.setValue(e.length);
        }
        _updateTooltips() {
          const e = [];
          for (let t = 0; t < this._tooltipSpawns.length; t++) {
            if (!this._visibilitySpawns[t].value()) continue;
            const i = this._tooltipSpawns[t].value();
            null !== i && i.length > 0 && e.push(i);
          }
          this._tooltips.setValue(e);
        }
        _recreateWidgets() {
          var e, t, i;
          if (this._options.sourceStatusesEnabled) {
            const e = this._source.isSymbolInvalid();
            if (null !== e)
              if (null === this._symbolInvalidViewModel) {
                this._symbolInvalidViewModel = new Oi(e, {
                  tooltipMap: qi,
                  iconMap: ji,
                  classNameMap: $i,
                  titleMap: Ki,
                  titleColorMap: Yi,
                  htmlMap: Xi,
                  actionMap: Zi,
                  size: this._size,
                });
                const t = this._symbolInvalidViewModel.visible().spawn();
                this._visibilitySpawns.push(t),
                  this._tooltipSpawns.push(
                    this._symbolInvalidViewModel.tooltip().spawn()
                  );
                const i = { visible: t, model: this._symbolInvalidViewModel };
                this._statusWidgetInfos.push(i),
                  this._renderer.addStatusModel(i);
              } else
                this._symbolInvalidViewModel.updateStatus(e),
                  this._addSubscriptionForSymbolInvalid();
            if (null === this._dataSourceErrorStatusViewModel) {
              (this._dataSourceErrorStatusViewModel = new Hi(
                this._source,
                this._size,
                this._options.sourceStatuses
              )),
                (this._dataSourceHasErrorVisible = (0, X.combine)(
                  () =>
                    this._dataSourceErrorCanBeShown.value() &&
                    (0, l.ensureNotNull)(this._dataSourceErrorStatusViewModel)
                      .visible()
                      .value(),
                  this._dataSourceErrorCanBeShown,
                  this._dataSourceErrorStatusViewModel.visible()
                )),
                this._visibilitySpawns.push(this._dataSourceHasErrorVisible),
                this._tooltipSpawns.push(
                  this._dataSourceErrorStatusViewModel.tooltip().spawn()
                );
              const e = {
                visible: this._dataSourceHasErrorVisible,
                model: this._dataSourceErrorStatusViewModel,
              };
              this._statusWidgetInfos.push(e), this._renderer.addStatusModel(e);
            } else this._dataSourceErrorStatusViewModel.setSource(this._source);
          }
          if (this._options.marketStatusEnabled) {
            const t = this._source.marketStatusModel();
            if (null === this._marketStatusViewModel) {
              this._marketStatusViewModel = new Bs(t, this._size);
              const e = (0, X.combine)(
                () =>
                  this._marketStatusCanBeShown.value() &&
                  (0, l.ensureNotNull)(this._marketStatusViewModel)
                    .visible()
                    .value() &&
                  !(0, Be.isEconomicSymbol)(this._source.symbolInfo().value()),
                this._marketStatusCanBeShown,
                this._marketStatusViewModel.visible(),
                this._source.symbolInfo()
              );
              this._visibilitySpawns.push(e),
                this._tooltipSpawns.push(
                  this._marketStatusViewModel.tooltip().spawn()
                );
              const i = { visible: e, model: this._marketStatusViewModel };
              null !== t &&
                ((this._sessionWidget = new zt(this._source)),
                (i.additionalWidgets = [this._sessionWidget])),
                this._statusWidgetInfos.push(i),
                this._renderer.addStatusModel(i);
            } else
              this._marketStatusViewModel.setModel(t),
                null === (e = this._sessionWidget) ||
                  void 0 === e ||
                  e.updateSource(this._source);
          }
          if (this._options.dataUpdateModeEnabled) {
            const e = this._source.dataUpdatedModeModel();
            if (null === this._dataUpdatedModeViewModel) {
              const s = {
                ...this._options.dataUpdateMode,
                shouldBeHiddenRegardlessOfStatus:
                  null ===
                    (i =
                      null === (t = this._source.marketStatusModel()) ||
                      void 0 === t
                        ? void 0
                        : t.futuresContractExpirationTime()) || void 0 === i
                    ? void 0
                    : i.expired(),
              };
              this._dataUpdatedModeViewModel = new Ci(e, this._size, s);
              const o = (0, X.combine)(
                () =>
                  this._dataUpdatedModeCanBeShown.value() &&
                  (0, l.ensureNotNull)(this._dataUpdatedModeViewModel)
                    .visible()
                    .value() &&
                  !(0, Be.isEconomicSymbol)(this._source.symbolInfo().value()),
                this._dataUpdatedModeCanBeShown,
                this._dataUpdatedModeViewModel.visible(),
                this._source.symbolInfo()
              );
              this._visibilitySpawns.push(o),
                this._tooltipSpawns.push(
                  this._dataUpdatedModeViewModel.tooltip().spawn()
                );
              const n = { visible: o, model: this._dataUpdatedModeViewModel };
              this._statusWidgetInfos.push(n), this._renderer.addStatusModel(n);
            } else this._dataUpdatedModeViewModel.setModel(e);
          }
          if (this._options.dataProblemEnabled) {
            const e = this._source.dataProblemModel();
            if (null === this._dataProblemViewModel) {
              (this._dataProblemViewModel = new Ni(e, this._size)),
                (this._isDataProblemCritical = this._dataProblemViewModel
                  .isDataProblemCritical()
                  .spawn());
              const t = (0, X.combine)(
                () =>
                  this._dataProblemCanBeShown.value() &&
                  (0, l.ensureNotNull)(this._dataProblemViewModel)
                    .visible()
                    .value(),
                this._dataProblemCanBeShown,
                this._dataProblemViewModel.visible()
              );
              this._visibilitySpawns.push(t),
                this._tooltipSpawns.push(
                  this._dataProblemViewModel.tooltip().spawn()
                );
              const i = { visible: t, model: this._dataProblemViewModel };
              this._statusWidgetInfos.push(i), this._renderer.addStatusModel(i);
            } else this._dataProblemViewModel.setModel(e);
          }
        }
        _addSubscriptionForSymbolInvalid() {
          const e = this._source.isSymbolInvalid();
          this._options.sourceStatusesEnabled &&
            null !== e &&
            (e.subscribe(this._updateStatusWidgetsVisibilities.bind(this)),
            e.subscribe(this._updateErrorWidgetIsShown.bind(this), {
              callWithLast: !0,
            }));
        }
        _updateErrorWidgetIsShown() {
          var e, t, i, s;
          const l =
              null !==
                (t =
                  null === (e = this._source.isSymbolInvalid()) || void 0 === e
                    ? void 0
                    : e.value()) &&
              void 0 !== t &&
              t,
            o =
              null !==
                (s =
                  null === (i = this._dataSourceHasErrorVisible) || void 0 === i
                    ? void 0
                    : i.value()) &&
              void 0 !== s &&
              s;
          this.errorWidgetIsShown.setValue(l || o);
        }
        _handleToggleDropdown(e) {
          var t, i;
          (this._menuPosition = e),
            (this._menuOpened = !this._menuOpened),
            this._menuOpened &&
              (null === (t = this._source.symbol()) ||
                void 0 === t ||
                t.subscribe(this._handleDropdownMenuClose),
              (i = `Open full tooltip for statuses: ${this._tooltips
                .value()
                .join(", ")}`),
              (0, V.trackEvent)("GUI", "Statuses widget's action", i)),
            this._updateDropdownMenu();
        }
        _updateDropdownMenu() {
          Promise.all([
            i.e(7624),
            i.e(6092),
            i.e(2397),
            i.e(962),
            i.e(1075),
            i.e(8643),
          ])
            .then(i.bind(i, 35814))
            .then((e) => {
              e.render(
                this._menuOpened,
                this._container,
                this._renderer.element,
                this._statusWidgetInfos,
                this._handleDropdownMenuClose,
                (0, l.ensureNotNull)(this._menuPosition)
              );
            });
        }
      }
      var Is = i(65407),
        Ns = i(6250);
      class Os {
        constructor(e, t) {
          (this._symbol = null),
            (this._isSymbolInvalid = null),
            (this._symbolInfo = new (n())(null).spawn()),
            (this._source = e),
            e.properties().hasChild("symbol") &&
              (this._symbol = (0, U.createWVFromGetterAndSubscription)(
                () => e.properties().symbol.value(),
                e.properties().symbol.listeners()
              ));
          const i = [];
          if ((0, Ns.isStudyLineTool)(e)) i.push(e.onStatusChanged());
          else if ((0, pe.isStudy)(e) || (0, pe.isStudyStub)(e))
            (this._isSymbolInvalid = (0, Is.createWVFromGetterAndSubscriptions)(
              () => e.isSymbolInvalid() && e.isActualInterval(),
              i
            )),
              i.push(e.onStatusChanged(), e.onIsActualIntervalChange());
          else {
            (0, l.assert)(e === t.mainSeries());
            const s = t.mainSeries();
            (this._isSymbolInvalid = (0, U.createWVFromGetterAndSubscription)(
              () => s.isSymbolInvalid(),
              s.onStatusChanged()
            )),
              i.push(s.onStatusChanged()),
              (this._symbolInfo = (0, U.createWVFromGetterAndSubscription)(
                s.symbolInfo.bind(s),
                s.dataEvents().symbolResolved()
              ));
          }
          this._dataSourceErrorStatus = (0,
          Is.createWVFromGetterAndSubscriptions)(
            () => this._source.statusProvider({}).errorStatus(),
            i
          );
        }
        destroy() {
          var e, t;
          null === (e = this._symbol) || void 0 === e || e.destroy(),
            null === (t = this._isSymbolInvalid) || void 0 === t || t.destroy(),
            this._dataSourceErrorStatus.destroy(),
            this._symbolInfo.destroy();
        }
        symbol() {
          return this._symbol;
        }
        isSymbolInvalid() {
          return this._isSymbolInvalid;
        }
        errorStatus() {
          return this._dataSourceErrorStatus;
        }
        symbolInfo() {
          return this._symbolInfo;
        }
        marketStatusModel() {
          return this._source.marketStatusModel();
        }
        dataProblemModel() {
          return this._source.dataProblemModel();
        }
        dataUpdatedModeModel() {
          return this._source.dataUpdatedModeModel();
        }
      }
      class Rs extends zs {
        constructor(e, t, i) {
          super(new Os(e, t), i),
            (this._isInReplay = new (n())(!1).readonly().spawn()),
            (this._isInReplayCanBeShown = null),
            (this._inited = !1);
        }
        destroy() {
          super.destroy();
        }
        _updateStatusWidgetsVisibilities() {
          super._updateStatusWidgetsVisibilities();
        }
        _isPrimaryWidgetShown() {
          var e, t;
          return (
            super._isPrimaryWidgetShown() ||
            (null !==
              (t =
                null === (e = this._isInReplay) || void 0 === e
                  ? void 0
                  : e.value()) &&
              void 0 !== t &&
              t)
          );
        }
      }
      var Fs = i(8840),
        Gs = i(43370);
      const Us = {
          readOnlyMode: !1,
          contextMenu: {
            settings: !0,
            mainSeries: !0,
            studies: !0,
            showOpenMarketStatus: !1,
          },
          symbolMarkerEnabled: !1,
          showToggleButton: !0,
          canShowSourceCode: !1,
          statusesWidgets: {
            sourceStatusesEnabled: !1,
            sourceStatuses: { errorSolution: !0 },
            marketStatusEnabled: !1,
            marketStatus: { preMarketSolution: !0, postMarketSolution: !0 },
            dataUpdateModeEnabled: !1,
            dataUpdateMode: { subscriptionFullInfo: !0 },
            dataProblemEnabled: !1,
          },
        },
        js =
          (d.enabled("hide_legend_by_default"),
          d.enabled("fundamental_widget")),
        $s = d.enabled("legend_context_menu"),
        qs = 2 * parseInt(y.marginlegendhoriz);
      class Ks {
        constructor(e, t, i, s, l, o, r, d) {
          (this._mainSeriesViewModel = null),
            (this._dataSourceViewModels = []),
            (this._visibleDataSourceCount = new (n())(0)),
            (this._themedColor = new (n())("")),
            (this._mainSeriesRowHidden = null),
            (this._dataSourceRowsHidden = []),
            (this._customWidgetsVisibilities = []),
            (this._allLegendHidden = new (n())(!1)),
            (this._studiesLegendHidden = new (n())(!1)),
            (this._customWidgetsHeights = []),
            (this._onLegendVisibilityToggled = null),
            (this._availableHeight = 0),
            (this._collapsedDataSourcesCount = new (n())(0)),
            (this._collapsedDataSourcesTitle = new (n())("")),
            (this._mainSeriesStatusWidget = null),
            (this._dataSourcesStatusesWidgets = []),
            (this._size = null),
            (this._customLegendWidgetsFactoriesMap = new Map()),
            (this._customLegendWidgetsMap = new Map()),
            (this._margin = 0),
            (this._model = e),
            (this._paneWidget = t),
            (this._options = (0, a.merge)((0, a.clone)(Us), r)),
            (this._callbacks = d),
            (this._mainSeriesViewModelsOptions = {
              readOnlyMode: this._options.readOnlyMode,
              symbolMarkerEnabled: this._options.symbolMarkerEnabled,
            }),
            (this._dataSourceViewModelsOptions = {
              ...this._mainSeriesViewModelsOptions,
              canShowSourceCode: this._options.canShowSourceCode,
            }),
            (this._backgroundThemeName = i);
          const u = this._showLegendCalculatedProperty();
          (this._isDataSourcesCollapsed = new (n())(u.value())),
            u.subscribe(this, () => {
              this._isDataSourcesCollapsed.setValue(u.value());
            });
          const h = new (n())(this._getCustomTextColorValue()),
            c = this._model.model().properties().childs();
          c.scalesProperties.childs().textColor.subscribe(this, () => {
            h.setValue(this._getCustomTextColorValue());
          });
          const _ = c.paneProperties
              .childs()
              .legendProperties.childs().showBackground,
            p = new (n())(_.value());
          _.subscribe(this, () => {
            p.setValue(_.value());
          });
          const m = c.paneProperties
              .childs()
              .legendProperties.childs().backgroundTransparency,
            g = new (n())(m.value());
          m.subscribe(this, () => {
            g.setValue(m.value());
          }),
            (this._hideNotMainSources = s),
            this._hideNotMainSources.subscribe(
              this._updateLegendVisibilities.bind(this)
            ),
            (this._hideAllExceptFirstLine = l),
            this._hideAllExceptFirstLine.subscribe(
              this._updateCollapsedSourcesMode.bind(this)
            ),
            (this._hideWholeLegend = o),
            this._hideWholeLegend.subscribe(
              this._updateLegendVisibilities.bind(this)
            ),
            (this._isPaneMain = new (n())(this._getIsPaneMainValue())),
            (this._updateCollapsedSourcesModeThrottle = (0, Gs.default)(
              this._updateCollapsedSourcesMode.bind(this),
              100
            )),
            (this._renderer = new F(
              {
                withActions: !this._options.readOnlyMode,
                showToggleButton: this._options.showToggleButton,
                isStudiesLegendHidden: this._studiesLegendHidden.readonly(),
                isAllLegendHidden: this._allLegendHidden.readonly(),
                customTextColor: h.readonly(),
                themedColor: this._themedColor.readonly(),
                showBackground: p.readonly(),
                backgroundTransparency: g.readonly(),
                collapsedDataSourcesCount:
                  this._collapsedDataSourcesCount.readonly(),
                collapsedDataSourcesTitle:
                  this._collapsedDataSourcesTitle.readonly(),
                showLegendWidgetContextMenu:
                  this.onShowLegendWidgetContextMenu.bind(this),
                hideAllExceptFirstLine: this._hideAllExceptFirstLine,
              },
              {
                visibleDataSourceCount: this._visibleDataSourceCount.readonly(),
                isDataSourcesCollapsed: this._isDataSourcesCollapsed.readonly(),
                showObjectsTree: this._isPaneMain.readonly(),
                onCollapseDataSources: this.onCollapseDataSources.bind(this),
                onShowObjectsTreeDialog: this._callbacks.showObjectsTreeDialog,
              }
            ));
        }
        destroy() {
          this._backgroundThemeName.destroy(),
            this._hideNotMainSources.destroy(),
            this._hideAllExceptFirstLine.destroy(),
            this._hideWholeLegend.destroy(),
            null !== this._mainSeriesViewModel && this._destroyMainDataSource();
          for (const e of this._dataSourceViewModels) e.destroy();
          for (const e of this._dataSourcesStatusesWidgets) e.destroy();
          this._clearSubscriptions();
          for (const e of Array.from(this._customLegendWidgetsMap.keys()))
            this._destroyCustomWidgetFromLayerBlock(e);
          this._customLegendWidgetsMap.clear(),
            this._renderer.destroy(),
            delete this._renderer,
            this._showLegendCalculatedProperty().unsubscribeAll(this),
            this._showLegendOriginalProperty().unsubscribeAll(this);
          const e = this._model.model().properties().childs();
          e.scalesProperties.childs().textColor.unsubscribeAll(this),
            e.paneProperties
              .childs()
              .legendProperties.childs()
              .showBackground.unsubscribeAll(this),
            e.paneProperties
              .childs()
              .legendProperties.childs()
              .backgroundTransparency.unsubscribeAll(this);
        }
        addCustomWidgetToLegend(e, t) {
          const i =
              this._customLegendWidgetsFactoriesMap.get(t.block) || new Map(),
            s = i.get(t.position) || [];
          s.push(e),
            i.set(t.position, s),
            this._customLegendWidgetsFactoriesMap.set(t.block, i),
            this.updateLayout(),
            this._updateCustomWidgetModeBySize();
        }
        onShowLegendWidgetContextMenu(e, t) {
          if (this._options.readOnlyMode || !$s) return Promise.resolve();
          x("Show legend context menu");
          const i = new Map();
          for (const e of Array.from(this._customLegendWidgetsMap.keys())) {
            const t = (0, l.ensureDefined)(this._customLegendWidgetsMap.get(e)),
              s = new Map();
            for (const e of Array.from(t.keys())) {
              const i = (0, l.ensureDefined)(t.get(e)),
                o = s.get(e) || [];
              for (const e of i) o.push(...e.contextMenuActions());
              s.set(e, o);
            }
            i.set(e, s);
          }
          return (function (e, t, i, s, l, o) {
            const n = [],
              a = s.get(0);
            if (void 0 !== a) {
              const e = a.get(1);
              void 0 !== e &&
                e.length > 0 &&
                (n.push(...e), n.push(new Pe.Separator()));
            }
            const r = e
              .model()
              .properties()
              .childs()
              .paneProperties.childs()
              .legendProperties.childs();
            if (
              (n.push(
                new Pe.Action({
                  actionId: "Chart.Legend.ToggleSymbolVisibility",
                  checkable: !0,
                  checked: r.showSeriesTitle.value(),
                  label: Xe,
                  statName: "Show Symbol",
                  onExecute: () => Re(e, r.showSeriesTitle, Fe),
                })
              ),
              t.showOpenMarketStatus &&
                "market" ===
                  e.mainSeries().marketStatusModel().status().value() &&
                !(0, Be.isEconomicSymbol)(e.mainSeries().symbolInfo()) &&
                n.push(
                  new Pe.Action({
                    actionId: "Chart.Legend.ToggleOpenMarketStatusVisibility",
                    checkable: !0,
                    checked: ze.showMarketOpenStatusProperty.value(),
                    label: Ze,
                    statName: "Show Open market status",
                    onExecute: () => Re(e, ze.showMarketOpenStatusProperty, Ge),
                  })
                ),
              n.push(
                new Pe.Action({
                  actionId: "Chart.Legend.ToggleOhlcValuesVisibility",
                  checkable: !0,
                  checked: r.showSeriesOHLC.value(),
                  label: Qe,
                  statName: "Show OHLC Values",
                  onExecute: () => Re(e, r.showSeriesOHLC, Ue),
                })
              ),
              n.push(
                new Pe.Action({
                  actionId: "Chart.Legend.ToggleBarChangeValuesVisibility",
                  checkable: !0,
                  checked: r.showBarChange.value(),
                  label: Je,
                  statName: "Show Bar Change Values",
                  onExecute: () => Re(e, r.showBarChange, je),
                })
              ),
              n.push(
                new Pe.Action({
                  actionId: "Chart.Legend.ToggleVolumeVisibility",
                  checkable: !0,
                  checked: r.showVolume.value(),
                  label: et,
                  statName: "Show Volume",
                  onExecute: () => Re(e, r.showVolume, Ye),
                })
              ),
              n.push(new Pe.Separator()),
              void 0 !== a)
            ) {
              const e = a.get(0);
              void 0 !== e &&
                e.length > 0 &&
                (n.push(...e), n.push(new Pe.Separator()));
            }
            const d = s.get(1);
            if (void 0 !== d) {
              const e = d.get(1);
              void 0 !== e &&
                e.length > 0 &&
                (n.push(...e), n.push(new Pe.Separator()));
            }
            if (
              (e
                .model()
                .priceDataSources()
                .some(
                  (e) =>
                    !(0, Ne.isActingAsSymbolSource)(e) && e.showInObjectTree()
                ) &&
                (n.push(
                  new Pe.Action({
                    actionId: "Chart.Legend.ToggleIndicatorTitlesVisibility",
                    checkable: !0,
                    checked: r.showStudyTitles.value(),
                    label: tt,
                    statName: "Show Indicator Titles",
                    onExecute: () => Re(e, r.showStudyTitles, $e),
                  })
                ),
                n.push(
                  new Pe.Action({
                    actionId: "Chart.Legend.ToggleIndicatorArgumentsVisibility",
                    checkable: !0,
                    checked: r.showStudyArguments.value(),
                    label: it,
                    statName: "Show Indicator Arguments",
                    onExecute: () => Re(e, r.showStudyArguments, qe),
                  })
                ),
                n.push(
                  new Pe.Action({
                    actionId: "Chart.Legend.ToggleIndicatorValuesVisibility",
                    checkable: !0,
                    checked: r.showStudyValues.value(),
                    label: st,
                    statName: "Show Indicator Values",
                    onExecute: () => Re(e, r.showStudyValues, Ke),
                  })
                )),
              void 0 !== d)
            ) {
              const e = d.get(0);
              void 0 !== e &&
                e.length > 0 &&
                (n.push(...e), n.push(new Pe.Separator()));
            }
            return (
              t.settings &&
                (n[n.length - 1] instanceof Pe.Separator ||
                  n.push(new Pe.Separator()),
                n.push(
                  new Pe.Action({
                    actionId: "Chart.Dialogs.ShowGeneralSettings.LegendTab",
                    label: lt,
                    icon: Oe,
                    statName: "Settings...",
                    onExecute: () => i(se.TabNames.legend),
                  })
                )),
              De.ContextMenuManager.showMenu(
                n,
                l,
                void 0,
                { menuName: "LegendPropertiesContextMenu" },
                o
              )
            );
          })(
            this._model,
            this._options.contextMenu,
            this._callbacks.showGeneralChartProperties,
            i,
            e,
            t
          );
        }
        onCollapseDataSources() {
          const e = this._showLegendOriginalProperty();
          e.setValue(!e.value());
        }
        updateLayout() {
          const e = this._paneWidget
            .state()
            .sourcesByGroup()
            .legendViewSources()
            .filter((e) => null !== e.statusView() && e.isDisplayedInLegend());
          if (0 === e.length) return;
          const t = this._model.mainSeries(),
            i = e.indexOf(t);
          i > -1
            ? (e.splice(i, 1),
              js ||
                null !== this._mainSeriesViewModel ||
                ((this._mainSeriesViewModel = new _e(
                  this._model,
                  t,
                  this._mainSeriesViewModelsOptions,
                  this._callbacks,
                  this._options.contextMenu
                )),
                (this._mainSeriesStatusWidget = new Rs(
                  t,
                  this._model.model(),
                  this._options.statusesWidgets
                )),
                this._renderer.addMainDataSource(
                  this._mainSeriesViewModel,
                  this._mainSeriesStatusWidget
                )),
              this._addCustomWidgetForLayerBlock(0))
            : null !== this._mainSeriesViewModel &&
              (this._destroyMainDataSource(),
              this._destroyCustomWidgetFromLayerBlock(0));
          const s = [],
            o = [],
            n = this._dataSourceViewModels.length;
          if (0 === n)
            for (let t = e.length - 1; t >= 0; t--) {
              const i = e[t];
              s.push(
                new He(
                  this._model,
                  i,
                  this._dataSourceViewModelsOptions,
                  this._callbacks,
                  this._options.contextMenu
                )
              ),
                o.push(
                  new zs(
                    new Os(i, this._model.model()),
                    this._options.statusesWidgets
                  )
                );
            }
          else {
            let t = 0;
            for (let i = e.length - 1; i >= 0; i--) {
              const l = e[i];
              this._dataSourceViewModels[t]
                ? (this._dataSourceViewModels[t].updateSource(l),
                  this._dataSourcesStatusesWidgets[t].updateSource(
                    new Os(l, this._model.model())
                  ))
                : (s.push(
                    new He(
                      this._model,
                      l,
                      this._dataSourceViewModelsOptions,
                      this._callbacks,
                      this._options.contextMenu
                    )
                  ),
                  o.push(
                    new zs(
                      new Os(e[i], this._model.model()),
                      this._options.statusesWidgets
                    )
                  )),
                t++;
            }
            for (; this._dataSourceViewModels.length > t; )
              (0, l.ensureDefined)(this._dataSourceViewModels.pop()).destroy();
            for (; this._dataSourcesStatusesWidgets.length > t; )
              (0, l.ensureDefined)(
                this._dataSourcesStatusesWidgets.pop()
              ).destroy();
          }
          0 !== s.length &&
            (this._renderer.addDataSources(s, o),
            this._dataSourceViewModels.push(...s),
            this._dataSourcesStatusesWidgets.push(...o)),
            n !== this._dataSourceViewModels.length &&
              this._updateCollapsedSourcesMode(),
            this._dataSourceViewModels.length > 0
              ? this._addCustomWidgetForLayerBlock(1)
              : this._destroyCustomWidgetFromLayerBlock(1),
            this._recreateSubscriptions(),
            this._isPaneMain.setValue(this._getIsPaneMainValue()),
            this.update(),
            this._updateWidgetModeByWidth();
        }
        update() {
          null !== this._mainSeriesViewModel &&
            this._mainSeriesViewModel.update();
          for (const e of this._dataSourceViewModels) e.update();
        }
        updateThemedColors(e) {
          null === e &&
            (e = (0, Fs.getStdThemedValue)(
              "chartProperties.paneProperties.background",
              this._backgroundThemeName.value()
            )),
            this._themedColor.setValue(e || "");
        }
        firstTitle() {
          return this._renderer.firstTitle();
        }
        getElement() {
          return this._renderer.getElement();
        }
        addMargin(e) {
          if (this._margin === e) return;
          this._margin = e;
          (this._renderer.getElement().style.maxWidth =
            0 === this._margin ? "" : `calc(100% - ${this._margin + qs}px)`),
            this._updateWidgetModeBySize();
        }
        updateWidgetModeBySize(e) {
          (this._size = e), this._updateWidgetModeBySize();
        }
        _updateWidgetModeBySize() {
          this._updateWidgetModeByWidth(),
            this._updateWidgetModeByHeight(),
            this._updateCustomWidgetModeBySize();
        }
        _updateWidgetModeByWidth() {
          if (null === this._size) return;
          const e = this._availableWidth();
          this._renderer.updateMode(e),
            this._paneWidget.hasState() &&
              this._paneWidget.state().containsMainSeries() &&
              this._model
                .mainSeries()
                .setTextSourceIsAlwaysTickerRestrictionEnabled(e <= 132);
        }
        _updateWidgetModeByHeight() {
          null !== this._size &&
            ((this._availableHeight = 0.8 * this._size.height),
            this._updateCollapsedSourcesModeThrottle());
        }
        _updateCustomWidgetModeBySize() {
          if (null === this._size) return;
          const e = (0, s.size)({
            width: this._availableWidth(),
            height: this._size.height,
          });
          for (const t of Array.from(this._customLegendWidgetsMap.values()))
            for (const i of Array.from(t.values()))
              for (const t of i) t.updateWidgetModeBySize(e);
        }
        _destroyMainDataSource() {
          (0, l.ensureNotNull)(this._mainSeriesStatusWidget).destroy(),
            (this._mainSeriesStatusWidget = null),
            (0, l.ensureNotNull)(this._mainSeriesViewModel).destroy(),
            (this._mainSeriesViewModel = null);
        }
        _updateCollapsedSourcesMode() {
          const e = this._dataSourceViewModels.length,
            t = this._hideAllExceptFirstLine.value();
          if (this._availableHeight > 0 && e > 2) {
            const i = Number(this._renderer.getMainSourceHeight()),
              s = this._renderer.getDataSourceHeight(),
              l = this._getCustomWidgetsHeight();
            if (null !== s) {
              const o = Math.floor((this._availableHeight - i - l) / s),
                n = Math.max(o, 2) - 1;
              if (e > n + 1) {
                let i = "";
                for (let s = 0; s < e; s++) {
                  const e = s < n;
                  this._dataSourceViewModels[s].setGlobalVisibility(
                    e && (!t || 0 === s)
                  ),
                    e ||
                      (i += `${
                        0 === i.length ? "" : ", "
                      }${this._dataSourceViewModels[s].getFullTitle()}`);
                }
                return (
                  this._collapsedDataSourcesTitle.setValue(i),
                  void this._collapsedDataSourcesCount.setValue(e - n)
                );
              }
            }
          }
          for (let e = 0; e < this._dataSourceViewModels.length; ++e)
            this._dataSourceViewModels[e].setGlobalVisibility(!t || 0 === e);
          this._collapsedDataSourcesCount.setValue(0),
            this._collapsedDataSourcesTitle.setValue("");
        }
        _getCustomWidgetsHeight() {
          let e = 0;
          for (const t of Array.from(this._customLegendWidgetsMap.values()))
            for (const i of Array.from(t.values()))
              for (const t of i) e += t.height().value();
          return e;
        }
        _getCustomTextColorValue() {
          const e = this._model
            .model()
            .properties()
            .childs()
            .scalesProperties.childs()
            .textColor.value();
          return (0, Fs.isStdThemedDefaultValue)(
            "chartProperties.scalesProperties.textColor",
            e,
            (0, Fs.getCurrentTheme)().name
          )
            ? null
            : e;
        }
        _clearSubscriptions() {
          null !== this._mainSeriesRowHidden &&
            (this._mainSeriesRowHidden.destroy(),
            (this._mainSeriesRowHidden = null));
          for (const e of this._dataSourceRowsHidden) e.destroy();
          this._dataSourceRowsHidden = [];
          for (const e of this._customWidgetsVisibilities) e.destroy();
          this._customWidgetsVisibilities = [];
          for (const e of this._customWidgetsHeights) e.destroy();
          this._customWidgetsHeights = [];
        }
        _recreateSubscriptions() {
          this._clearSubscriptions(),
            null !== this._mainSeriesViewModel &&
              ((this._mainSeriesRowHidden = this._mainSeriesViewModel
                .isRowHidden()
                .spawn()),
              this._mainSeriesRowHidden.subscribe(
                this._updateLegendVisibilities.bind(this)
              ));
          for (const e of this._dataSourceViewModels) {
            const t = e.isRowHidden().spawn();
            this._dataSourceRowsHidden.push(t),
              t.subscribe(this._updateVisibleDataSourceCount.bind(this)),
              t.subscribe(this._updateLegendVisibilities.bind(this));
          }
          for (const e of Array.from(this._customLegendWidgetsMap.values()))
            for (const t of Array.from(e.values()))
              for (const e of t) {
                const t = e.visibility().spawn();
                this._customWidgetsVisibilities.push(t),
                  t.subscribe(this._updateLegendVisibilities.bind(this));
                const i = e.height().spawn();
                this._customWidgetsHeights.push(i),
                  i.subscribe(this._updateCollapsedSourcesMode.bind(this));
              }
          this._updateVisibleDataSourceCount(),
            this._updateLegendVisibilities();
        }
        _updateLegendVisibilities() {
          if (this._hideWholeLegend.value())
            return void this._allLegendHidden.setValue(!0);
          const e = this._dataSourceRowsHidden.every((e) => e.value()),
            t = this._hideNotMainSources.value() || e;
          this._studiesLegendHidden.setValue(t);
          const i =
              null === this._mainSeriesRowHidden ||
              this._mainSeriesRowHidden.value(),
            s = this._customWidgetsVisibilities.some((e) => e.value());
          this._allLegendHidden.setValue(e && i && !s);
        }
        _updateVisibleDataSourceCount() {
          const e = this._dataSourceRowsHidden.filter((e) => !e.value()).length;
          this._visibleDataSourceCount.setValue(e);
        }
        _setLegendVisibilityToggled() {
          0;
        }
        _getIsPaneMainValue() {
          return this._paneWidget.containsMainSeries();
        }
        _showLegendCalculatedProperty() {
          return this._model.model().showLegend();
        }
        _showLegendOriginalProperty() {
          return this._model
            .model()
            .properties()
            .childs()
            .paneProperties.childs()
            .legendProperties.childs().showLegend;
        }
        _addCustomWidgetForLayerBlock(e) {
          const t = this._customLegendWidgetsFactoriesMap.get(e);
          if (void 0 === t) return;
          const i = this._customLegendWidgetsMap.get(e) || new Map();
          let s = !1;
          for (const l of Array.from(t.keys())) {
            const o = i.get(l) || [],
              n = t.get(l) || [];
            for (let t = o.length; t < n.length; t++) {
              const i = n[t](this._model.model(), this._backgroundThemeName);
              0 === e &&
                0 === l &&
                i.setGlobalVisibility(
                  (0, X.combine)(
                    (e, t) => !e && !t,
                    this._hideNotMainSources,
                    this._hideAllExceptFirstLine
                  )
                ),
                o.push(i),
                this._renderer.addCustomWidget(i, { block: e, position: l }),
                (s = !0);
            }
            s && i.set(l, o);
          }
          s && this._customLegendWidgetsMap.set(e, i);
        }
        _destroyCustomWidgetFromLayerBlock(e) {
          const t = this._customLegendWidgetsMap.get(e);
          if (void 0 !== t) {
            for (const e of Array.from(t.values()))
              for (const t of e) t.destroy();
            t.clear(), this._customLegendWidgetsMap.delete(e);
          }
        }
        _availableWidth() {
          return null === this._size ? 0 : this._size.width - this._margin - qs;
        }
      }
    },
    28756: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { PaneControlsWidget: () => Z });
      var s = i(32563),
        l = i(51768),
        o = i(44352),
        n = i(68335),
        a = i(43074),
        r = i(89215),
        d = i(50151),
        u = i(24377),
        h = i(76289),
        c = i(78029),
        _ = i(58064),
        p = i(62927);
      class m {
        constructor(e, t, i) {
          (this._parentEl = document.createElement("div")),
            (this._listActionsWrapperEl = null),
            (this._listActionsElements = {}),
            (this._actionsSpawns = {}),
            (this._onMouseEnterLeaveEventHandler = null),
            (this._mouseOverWidget = !1),
            (this._width = null),
            (this._wrapEl = e),
            (this._onMouseEnterLeaveEventHandler =
              this._onMouseEnterLeaveEvent.bind(this)),
            this._wrapEl.addEventListener(
              "mouseenter",
              this._onMouseEnterLeaveEventHandler
            ),
            this._wrapEl.addEventListener(
              "mouseleave",
              this._onMouseEnterLeaveEventHandler
            ),
            (this._actions = t),
            (this._globalVisibility = i.globalVisibility.spawn()),
            this._globalVisibility.subscribe(
              this._updatePaneControlsWidgetVisibility.bind(this)
            ),
            (this._visibilityType = i.visibilityType.spawn()),
            this._visibilityType.subscribe(
              this._updatePaneControlsWidgetVisibility.bind(this)
            ),
            (this._doNotSwitchToContextMenuMode =
              i.doNotSwitchToContextMenuMode),
            (this._forceContextMenuMode = i.forceContextMenuMode.spawn()),
            this._forceContextMenuMode.subscribe(
              this._updateWidgetMode.bind(this)
            ),
            (this._themedColor = i.themedColor.spawn()),
            this._themedColor.subscribe(this._updateThemedColor.bind(this));
          for (const [e, t] of Object.entries(this._actions)) {
            const i = e;
            (this._actionsSpawns[i] = {
              visible: t.visible.spawn(),
              title: void 0 === t.title ? null : t.title.spawn(),
            }),
              this._actionsSpawns[i].visible.subscribe(
                this._updateActionVisibilities.bind(this, i)
              );
            const s = this._actionsSpawns[i].title;
            null !== s && s.subscribe(this._updateActionTitle.bind(this, i));
          }
          this._render(),
            this._updatePaneControlsWidgetVisibility(),
            this._updateThemedColor(this._themedColor.value()),
            this._parentEl.classList.toggle(
              _.touchMode,
              h.trackingModeIsAvailable
            ),
            this._parentEl.addEventListener("contextmenu", (e) =>
              e.preventDefault()
            );
        }
        destroy() {
          this._visibilityType.destroy(),
            this._forceContextMenuMode.destroy(),
            this._themedColor.destroy();
          for (const e of Object.keys(this._actionsSpawns)) {
            const t = e;
            this._actionsSpawns[t].visible.destroy();
            const i = this._actionsSpawns[t].title;
            null !== i && i.destroy();
          }
          null !== this._onMouseEnterLeaveEventHandler &&
            (this._wrapEl.removeEventListener(
              "mouseenter",
              this._onMouseEnterLeaveEventHandler
            ),
            this._wrapEl.removeEventListener(
              "mouseleave",
              this._onMouseEnterLeaveEventHandler
            ),
            (this._onMouseEnterLeaveEventHandler = null)),
            (this._parentEl.innerHTML = ""),
            delete this._parentEl;
        }
        getElement() {
          return this._parentEl;
        }
        bottomWithMargin() {
          const e = this._parentEl.classList.contains(_.touchMode)
            ? Number(_.css_value_pane_controls_button_touch_size)
            : Number(_.css_value_pane_controls_button_size);
          return 2 * Number(_.css_value_pane_controls_margin_top) + e;
        }
        updateWidgetModeByWidth(e) {
          (this._width = e), this._updateWidgetMode();
        }
        _updateWidgetMode() {
          if (null === this._width) return;
          const e =
              !this._doNotSwitchToContextMenuMode.value() && this._width < 356,
            t =
              !this._doNotSwitchToContextMenuMode.value() &&
              (this._forceContextMenuMode.value() || this._width < 666.65),
            i = (0, d.ensureNotNull)(this._listActionsWrapperEl),
            s = (0, d.ensureNotNull)(this._listActionsElements.more);
          i.classList.toggle(p.blockHidden, e || t),
            s.classList.toggle(
              p.blockHidden,
              e || !t || !this._actions.more.visible.value()
            );
        }
        _render() {
          this._renderActions(),
            this._parentEl.classList.add(_.paneControls),
            this._wrapEl.append(this._parentEl);
        }
        _renderActions() {
          null === this._listActionsWrapperEl &&
            ((this._listActionsWrapperEl = document.createElement("div")),
            this._listActionsWrapperEl.classList.add(_.buttonsWrapper),
            this._parentEl.append(this._listActionsWrapperEl));
          const e = h.trackingModeIsAvailable ? "large" : "small";
          (this._listActionsElements.up = (0, c.createActionElement)(
            this._actions.up,
            _.button,
            _.buttonIcon,
            p.blockHidden,
            e
          )),
            (this._listActionsElements.down = (0, c.createActionElement)(
              this._actions.down,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e
            )),
            (this._listActionsElements.collapse = (0, c.createActionElement)(
              this._actions.collapse,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e
            )),
            (this._listActionsElements.restore = (0, c.createActionElement)(
              this._actions.restore,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e
            )),
            (this._listActionsElements.close = (0, c.createActionElement)(
              this._actions.close,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e
            )),
            (this._listActionsElements.maximize = (0, c.createActionElement)(
              this._actions.maximize,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e
            )),
            (this._listActionsElements.minimize = (0, c.createActionElement)(
              this._actions.minimize,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e
            )),
            this._listActionsWrapperEl.append(
              this._listActionsElements.up,
              this._listActionsElements.down,
              this._listActionsElements.close,
              this._listActionsElements.collapse,
              this._listActionsElements.restore,
              this._listActionsElements.maximize,
              this._listActionsElements.minimize
            ),
            (this._listActionsElements.more = (0, c.createActionElement)(
              this._actions.more,
              _.button,
              _.buttonIcon,
              p.blockHidden,
              e
            ));
          for (const e of Object.keys(this._listActionsElements))
            (0, d.ensureNotNull)(this._listActionsElements[e]).classList.add(
              _.newButton
            );
          this._parentEl.append(this._listActionsElements.more);
        }
        _updateActionVisibilities(e, t) {
          (0, d.ensureNotNull)(this._listActionsElements[e]).classList.toggle(
            p.blockHidden,
            !t
          );
        }
        _updateActionTitle(e, t) {
          (0, d.ensureNotNull)(this._listActionsElements[e]).setAttribute(
            "title",
            t
          );
        }
        _onMouseEnterLeaveEvent(e) {
          (this._mouseOverWidget = "mouseenter" === e.type),
            "visibleOnMouseOver" === this._visibilityType.value() &&
              this._updatePaneControlsWidgetVisibility();
        }
        _updatePaneControlsWidgetVisibility() {
          let e,
            t = !1;
          switch (this._visibilityType.value()) {
            case "alwaysOff":
              (e = !1), (t = !0);
              break;
            case "alwaysOn":
              e = this._globalVisibility.value();
              break;
            case "visibleOnMouseOver":
              e = this._globalVisibility.value() && this._mouseOverWidget;
          }
          this._parentEl.classList.toggle(_.hidden, !e),
            this._parentEl.classList.toggle(
              _.forceHidden,
              !this._globalVisibility.value() || t
            );
        }
        _updateThemedColor(e) {
          if (e.length > 0) {
            const [t, i, s] = (0, u.parseRgb)(e);
            this._parentEl.style.color = (0, u.rgbaToString)([
              t,
              i,
              s,
              (0, u.normalizeAlphaComponent)(0.8),
            ]);
          } else this._parentEl.style.removeProperty("color");
        }
      }
      var g = i(43986),
        v = i(60223),
        b = i(36016),
        w = i(72899),
        y = i(48344),
        S = i(99539),
        M = i(20465),
        f = i(34763);
      const C = o.t(null, void 0, i(68854)),
        E = C,
        k = (0, n.humanReadableModifiers)(n.Modifiers.Mod) + C;
      var V = i(40549),
        x = i.n(V),
        W = i(8840),
        T = i(61814),
        L = i(72237),
        A = i(81020),
        H = i(3515),
        P = i(79526),
        D = i(82847),
        B = i(7859),
        z = i(70471),
        I = i(71402),
        N = i(42930);
      const O = s.mobiletouch,
        R = o.t(null, void 0, i(83498)),
        F = o.t(null, void 0, i(70343)),
        G = o.t(null, void 0, i(39899)),
        U = o.t(null, void 0, i(19603)),
        j = o.t(null, void 0, i(91029)),
        $ = o.t(null, void 0, i(39589)),
        q = o.t(null, void 0, i(35732)),
        K = o.t(null, void 0, i(68854)),
        Y = (0, T.hotKeySerialize)({ keys: [""], text: K }),
        X = (0, T.hotKeySerialize)({
          keys: [(0, n.humanReadableModifiers)(n.Modifiers.Mod, !1)],
          text: `{0} + ${K}`,
        });
      class Z {
        constructor(e, t, i, s, l) {
          (this._actions = {}),
            (this._moreCMShown = !1),
            (this._themedColor = new (x())("")),
            (this._connectedToBroker = new (x())(!1)),
            (this._isDestroyed = !1),
            (this._model = e),
            (this._paneWidget = t),
            (this._callbacks = s),
            (this._closeButtonVisibility = new (x())(
              this._getCloseButtonVisibility()
            )),
            (this._upButtonVisibility = new (x())(
              this._getUpButtonVisibility()
            )),
            (this._downButtonVisibility = new (x())(
              this._getDownButtonVisibility()
            )),
            (this._maximizeButtonVisibility = new (x())(
              this._getMaximizeButtonVisibility()
            )),
            (this._minimizeButtonVisibility = new (x())(
              this._getMinimizeButtonVisibility()
            )),
            (this._collapseButtonVisibility = new (x())(
              this._getCollapseButtonVisibility()
            )),
            (this._restoreButtonVisibility = new (x())(
              this._getRestoreButtonVisibility()
            )),
            this._createActions(),
            (this._visibilityTypeProperty = (0, a.actualBehavior)()),
            this._visibilityTypeProperty.subscribe(this, (e) => {
              this._visibilityType.setValue(e.value());
            }),
            (this._visibilityType = new (x())(
              this._visibilityTypeProperty.value()
            )),
            (this._isPaneMaximize = new (x())(this._getIsPaneMaximizeValue())),
            (this._isWidgetShow = new (x())(this._getIsWidgetShow())),
            (this._backgroundThemeName = i.backgroundThemeName),
            (this._renderer = new m(l, this._actions, {
              visibilityType: this._visibilityType.readonly(),
              globalVisibility: this._isWidgetShow.readonly(),
              doNotSwitchToContextMenuMode: this._isPaneMaximize.readonly(),
              forceContextMenuMode: this._connectedToBroker.readonly(),
              themedColor: this._themedColor.readonly(),
            }));
        }
        destroy() {
          this._visibilityTypeProperty.unsubscribeAll(this),
            this._renderer.destroy(),
            (this._isDestroyed = !0);
        }
        getElement() {
          return this._renderer.getElement();
        }
        bottomWithMargin() {
          return this._renderer.bottomWithMargin();
        }
        action() {
          return this._actions;
        }
        update() {
          this._updateButtonsVisibility(),
            this._isPaneMaximize.setValue(this._getIsPaneMaximizeValue()),
            this._isWidgetShow.setValue(this._getIsWidgetShow());
        }
        updateWidgetModeByWidth(e) {
          this._renderer.updateWidgetModeByWidth(e);
        }
        updateThemedColors(e) {
          null === e &&
            (e = (0, W.getStdThemedValue)(
              "chartProperties.paneProperties.background",
              this._backgroundThemeName.value()
            )),
            this._themedColor.setValue(e || "");
        }
        async _subscribeOnConnectedToBroker() {
          const e = await waitTradingService();
          this._isDestroyed ||
            (e.onConnectionStatusChange.subscribe(
              this,
              this._updateConnectedToBroker.bind(this)
            ),
            this._updateConnectedToBroker(e.connectStatus()));
        }
        _updateConnectedToBroker(e) {
          this._connectedToBroker.setValue(1 === e);
        }
        _updateButtonsVisibility() {
          this._closeButtonVisibility.setValue(
            this._getCloseButtonVisibility()
          ),
            this._upButtonVisibility.setValue(this._getUpButtonVisibility()),
            this._downButtonVisibility.setValue(
              this._getDownButtonVisibility()
            ),
            this._maximizeButtonVisibility.setValue(
              this._getMaximizeButtonVisibility()
            ),
            this._minimizeButtonVisibility.setValue(
              this._getMinimizeButtonVisibility()
            ),
            this._collapseButtonVisibility.setValue(
              this._getCollapseButtonVisibility()
            ),
            this._restoreButtonVisibility.setValue(
              this._getRestoreButtonVisibility()
            );
        }
        _createActions() {
          (this._actions.up = {
            iconMap: new Map([
              ["large", A],
              ["small", A],
            ]),
            action: this._onUpDownButton.bind(this, "up"),
            visible: this._upButtonVisibility,
            title: new (x())(F),
            className: _.up,
            dataset: { name: "pane-button-up" },
          }),
            (this._actions.down = {
              iconMap: new Map([
                ["large", H],
                ["small", H],
              ]),
              action: this._onUpDownButton.bind(this, "down"),
              visible: this._downButtonVisibility,
              title: new (x())(G),
              className: _.down,
              dataset: { name: "pane-button-down" },
            }),
            (this._actions.close = {
              iconMap: new Map([
                ["large", L],
                ["small", L],
              ]),
              action: this._onCloseButton.bind(this),
              visible: this._closeButtonVisibility,
              title: new (x())(R),
              dataset: { name: "pane-button-close" },
            }),
            (this._actions.maximize = {
              iconMap: new Map([
                ["large", B],
                ["small", P],
              ]),
              action: this._onToggleMaximizeButton.bind(this, "Maximize pane"),
              visible: this._maximizeButtonVisibility,
              title: new (x())(U),
              hotKeyTitle: Y,
              className: _.maximize,
              dataset: { name: "pane-button-maximize" },
            }),
            (this._actions.minimize = {
              iconMap: new Map([
                ["large", B],
                ["small", P],
              ]),
              action: this._onToggleMaximizeButton.bind(this, "Minimize pane"),
              visible: this._minimizeButtonVisibility,
              title: new (x())(j),
              hotKeyTitle: Y,
              className: _.minimize,
              dataset: { name: "pane-button-minimize" },
            }),
            (this._actions.collapse = {
              iconMap: new Map([
                ["large", I],
                ["small", I],
              ]),
              action: this._onToggleCollapseButton.bind(this, "Collapse pane"),
              visible: this._collapseButtonVisibility,
              title: new (x())($),
              hotKeyTitle: X,
              className: _.collapse,
              dataset: { name: "pane-button-collapse" },
            }),
            (this._actions.restore = {
              iconMap: new Map([
                ["large", N],
                ["small", N],
              ]),
              action: this._onToggleCollapseButton.bind(this, "Restore pane"),
              visible: this._restoreButtonVisibility,
              title: new (x())(j),
              hotKeyTitle: X,
              className: _.restore,
              dataset: { name: "pane-button-restore" },
            }),
            (this._actions.more = {
              iconMap: new Map([
                ["large", z],
                ["small", D],
              ]),
              action: this._showButtonsInContextMenu.bind(this),
              visible: new (x())(!O),
              title: new (x())(q),
              dataset: { name: "pane-button-more" },
            });
        }
        _getCloseButtonVisibility() {
          const e = this._paneWidget.state();
          let t = !1;
          return (
            e.containsMainSeries() ||
              e.maximized().value() ||
              O ||
              (t = e.dataSources().some((e) => (0, r.isStudy)(e))),
            t
          );
        }
        _onCloseButton() {
          this._trackEvent("Delete pane");
          const e = this._model
            .model()
            .panes()
            .indexOf(this._paneWidget.state());
          this._model.removePane(e);
        }
        _getUpButtonVisibility() {
          const e = this._paneWidget.state();
          return (
            this._model.model().panes().indexOf(e) > 0 &&
            !e.maximized().value() &&
            !O
          );
        }
        _getDownButtonVisibility() {
          const e = this._paneWidget.state(),
            t = this._model.model().panes();
          return t.indexOf(e) < t.length - 1 && !e.maximized().value() && !O;
        }
        _onUpDownButton(e) {
          this._trackEvent(`Move pane ${e}`);
          const t = this._model
            .model()
            .panes()
            .indexOf(this._paneWidget.state());
          this._model.rearrangePanes(t, e);
        }
        _getMaximizeButtonVisibility() {
          const e = this._paneWidget.state();
          return (
            this._model.model().panes().length > 1 &&
            !e.maximized().value() &&
            !O
          );
        }
        _getMinimizeButtonVisibility() {
          const e = this._paneWidget.state();
          return (
            this._model.model().panes().length > 1 && e.maximized().value()
          );
        }
        _getCollapseButtonVisibility() {
          if (O) return !1;
          const e = this._paneWidget.state();
          return (
            !e.maximized().value() &&
            !e.collapsed().value() &&
            this._model.model().paneCollapsingAvailable().value()
          );
        }
        _getRestoreButtonVisibility() {
          const e = this._paneWidget.state();
          return !e.maximized().value() && e.collapsed().value();
        }
        _onToggleMaximizeButton(e) {
          this._trackEvent(e),
            this._callbacks.toggleMaximizePane(this._paneWidget);
        }
        _onToggleCollapseButton(e) {
          this._trackEvent(e),
            this._callbacks.toggleCollapsedPane(this._paneWidget);
        }
        _showButtonsInContextMenu(e) {
          e.preventDefault(),
            this._moreCMShown ||
              (function (e, t, i) {
                const s = [];
                if (e.maximize.visible.value()) {
                  const t = (0, d.ensure)(e.maximize.title),
                    i = (0, d.ensureNotNull)(e.maximize.action);
                  s.push(
                    new g.Action({
                      actionId: "Chart.PaneControls.MaximizePane",
                      icon: S,
                      label: t.value(),
                      statName: "Maximize Pane",
                      shortcutHint: E,
                      onExecute: () => i(),
                    })
                  );
                } else if (e.minimize.visible.value()) {
                  const t = (0, d.ensure)(e.minimize.title),
                    i = (0, d.ensureNotNull)(e.minimize.action);
                  s.push(
                    new g.Action({
                      actionId: "Chart.PaneControls.MinimizePane",
                      icon: S,
                      label: t.value(),
                      statName: "Minimize Pane",
                      shortcutHint: E,
                      onExecute: () => i(),
                    })
                  );
                }
                if (e.collapse.visible.value()) {
                  const t = (0, d.ensure)(e.collapse.title),
                    i = (0, d.ensureNotNull)(e.collapse.action);
                  s.push(
                    new g.Action({
                      actionId: "Chart.PaneControls.CollapsePane",
                      icon: M,
                      label: t.value(),
                      statName: "Collapse pane",
                      shortcutHint: k,
                      onExecute: () => i(),
                    })
                  );
                }
                if (e.restore.visible.value()) {
                  const t = (0, d.ensure)(e.restore.title),
                    i = (0, d.ensureNotNull)(e.restore.action);
                  s.push(
                    new g.Action({
                      actionId: "Chart.PaneControls.RestorePane",
                      icon: f,
                      label: t.value(),
                      statName: "Restore pane",
                      shortcutHint: k,
                      onExecute: () => i(),
                    })
                  );
                }
                if (e.up.visible.value()) {
                  const t = (0, d.ensure)(e.up.title),
                    i = (0, d.ensureNotNull)(e.up.action);
                  s.push(
                    new g.Action({
                      actionId: "Chart.PaneControls.MovePaneUp",
                      icon: w,
                      label: t.value(),
                      statName: "Move pane up",
                      onExecute: () => i(),
                    })
                  );
                }
                if (e.down.visible.value()) {
                  const t = (0, d.ensure)(e.down.title),
                    i = (0, d.ensureNotNull)(e.down.action);
                  s.push(
                    new g.Action({
                      actionId: "Chart.PaneControls.MovePaneDown",
                      icon: y,
                      label: t.value(),
                      statName: "Move pane down",
                      onExecute: () => i(),
                    })
                  );
                }
                if (e.close.visible.value()) {
                  const t = (0, d.ensure)(e.close.title),
                    i = (0, d.ensureNotNull)(e.close.action);
                  s.push(
                    new g.Action({
                      actionId: "Chart.PaneControls.DeletePane",
                      icon: b,
                      label: t.value(),
                      statName: "Delete pane",
                      onExecute: () => i(),
                    })
                  );
                }
                const l = (0, d.ensureNotNull)(
                  t.target
                ).getBoundingClientRect();
                return v.ContextMenuManager.showMenu(
                  s,
                  {
                    clientX: l.right,
                    clientY: l.top + l.height + 3,
                    attachToXBy: "right",
                  },
                  void 0,
                  void 0,
                  i
                );
              })(this._actions, e, () => {
                this._moreCMShown = !1;
              }).then(() => {
                this._moreCMShown = !0;
              });
        }
        _getIsPaneMaximizeValue() {
          return this._paneWidget.state().maximized().value();
        }
        _getIsWidgetShow() {
          return this._model.model().panes().length > 1;
        }
        _trackEvent(e) {
          (0, l.trackEvent)("GUI", "Pane action", e);
        }
      }
    },
    78029: (e, t, i) => {
      "use strict";
      i.d(t, { createActionElement: () => l });
      var s = i(65665);
      function l(e, t, i, l, o) {
        const n = document.createElement("div");
        (n.className = t),
          n.classList.toggle(l, !e.visible.value()),
          Object.assign(n.dataset, e.dataset),
          void 0 !== e.className && n.classList.add(e.className),
          void 0 !== e.title &&
            (n.classList.add("apply-common-tooltip"),
            n.setAttribute("title", e.title.value()),
            void 0 !== e.hotKeyTitle &&
              (n.dataset.tooltipHotkey = e.hotKeyTitle)),
          n.addEventListener("touchend", e.action),
          n.addEventListener("mousedown", (t) => {
            0 === t.button && e.action(t);
          });
        const a = document.createElement("div");
        a.classList.add(i);
        const r = e.iconMap.get(o) || "";
        return (
          (0, s.isString)(r) ? (a.innerHTML = r) : a.appendChild(r),
          n.appendChild(a),
          n
        );
      }
    },
    76289: (e, t, i) => {
      "use strict";
      i.d(t, { trackingModeIsAvailable: () => s });
      const s = i(49483).CheckMobile.any();
    },
    52506: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15.82 14l5.36-5.36-.82-.82L15 13.18 9.64 7.82l-.82.82L14.18 14l-5.36 5.36.82.82L15 14.82l5.36 5.36.82-.82L15.82 14z"/></svg>';
    },
    88658: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.35 6.35l-10 10-.7-.7 10-10 .7.7z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.65 6.35l10 10 .7-.7-10-10-.7.7z"/></svg>';
    },
    41674: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="30" height="24" fill="none"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="normal-eye"><path d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/><path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></g><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="crossed-eye"><path d="M8.85 16.27c.92.44 1.97.73 3.15.73 2.7 0 4.7-1.49 6-2.91 0 0 2-2.09 2-3.09s-2-3.09-2-3.09l-.39-.4-.7.7.34.38S19 10.5 19 11c0 .5-1.75 2.41-1.75 2.41C16.05 14.74 14.3 16 12 16c-.88 0-1.68-.18-2.4-.48l-.75.75zM7.1 13.78l-.36-.37S5 11.5 5 11c0-.5 1.74-2.41 1.74-2.41C7.94 7.26 9.7 6 12 6c.88 0 1.68.18 2.4.48l.75-.75A7.17 7.17 0 0 0 12 5C9.3 5 7.3 6.49 6 7.91 6 7.91 4 10 4 11s2 3.09 2 3.09l.39.4.7-.7z"/><path d="M11.22 13.9a3 3 0 0 0 3.68-3.68l-.9.9A2 2 0 0 1 12.13 13l-.9.9zm.66-4.9A2 2 0 0 0 10 10.88l-.9.9a3 3 0 0 1 3.68-3.68l-.9.9zM5.65 16.65l12-12 .7.7-12 12-.7-.7z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11a2.5 2.5 0 1 0-2.5 2.5"/></g></svg>';
    },
    3792: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><g class="normal-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"/></g><g class="crossed-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.8503 16.2712C9.76531 16.7135 10.8152 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366C17.8729 7.77954 17.7448 7.64491 17.6105 7.51105L16.9035 8.2181C17.0254 8.33968 17.1425 8.46276 17.2549 8.58634C17.2549 8.58634 19 10.5 19 11C19 11.5 17.2549 13.4137 17.2549 13.4137C16.0532 14.7355 14.3022 16 11.9999 16C11.1218 16 10.324 15.8161 9.60627 15.5153L8.8503 16.2712ZM7.09663 13.7823C6.97455 13.6606 6.85728 13.5374 6.74482 13.4137C6.74482 13.4137 5 11.5 5 11C5 10.5 6.74482 8.58634 6.74482 8.58634C7.94648 7.26451 9.69746 6 11.9999 6C12.8781 6 13.6761 6.18398 14.394 6.48495L15.1499 5.729C14.2348 5.28657 13.1847 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C6.12693 14.2206 6.25516 14.3553 6.38959 14.4893L7.09663 13.7823Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.2231 13.8984C11.4709 13.9647 11.7313 14 12 14C13.6569 14 15 12.6569 15 11C15 10.7313 14.9647 10.4709 14.8984 10.2231L13.9961 11.1254C13.934 12.1301 13.1301 12.934 12.1254 12.9961L11.2231 13.8984ZM11.8751 9.00384C10.87 9.06578 10.0658 9.87001 10.0038 10.8751L9.10166 11.7772C9.03535 11.5294 9 11.2688 9 11C9 9.34315 10.3431 8 12 8C12.2688 8 12.5294 8.03535 12.7772 8.10166L11.8751 9.00384Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.64648 16.6465L17.6465 4.64648L18.3536 5.35359L6.35359 17.3536L5.64648 16.6465Z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5"/></g></svg>';
    },
    45534: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><circle stroke="currentColor" stroke-width="1.15" cx="8.08" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="15" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="21.92" cy="14" r="1.73"/></svg>';
    },
    87258: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4" width="16" height="4" fill="none"><circle stroke="currentColor" cx="2" cy="2" r="1.5"/><circle stroke="currentColor" cx="8" cy="2" r="1.5"/><circle stroke="currentColor" cx="14" cy="2" r="1.5"/></svg>';
    },
    36885: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.54.84a.8.8 0 0 1 .92 0l7.5 5.25a.8.8 0 0 1 0 1.32l-7.5 5.25a.8.8 0 0 1-.92 0L1.04 7.4a.8.8 0 0 1 0-1.32L8.54.84zM2.9 6.75L9 11.02l6.1-4.27L9 2.48 2.9 6.75z"/><path fill="currentColor" d="M.84 10.8a.8.8 0 0 1 1.12-.2L9 15.51l7.04-4.93a.8.8 0 0 1 .92 1.32l-7.5 5.25a.8.8 0 0 1-.92 0l-7.5-5.25a.8.8 0 0 1-.2-1.12z"/></svg>';
    },
    65300: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M7.23 2.58a.5.5 0 0 1 .54 0l5.5 3.5a.5.5 0 0 1 0 .84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1 0-.84l5.5-3.5zM2.93 6.5L7.5 9.4l4.57-2.9L7.5 3.6 2.93 6.5z"/><path fill="currentColor" d="M1.58 9.23a.5.5 0 0 1 .69-.15L7.5 12.4l5.23-3.33a.5.5 0 0 1 .54.84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1-.15-.69z"/></svg>';
    },
    34882: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 6.5A2.5 2.5 0 0 1 8.5 4H10v1H8.5C7.67 5 7 5.67 7 6.5v1.15a3.5 3.5 0 0 1-1.93 3.13l-.45.22.45.22A3.5 3.5 0 0 1 7 14.35v1.15c0 .83.67 1.5 1.5 1.5H10v1H8.5A2.5 2.5 0 0 1 6 15.5v-1.15a2.5 2.5 0 0 0-1.38-2.23l-1.34-.67a.5.5 0 0 1 0-.9l1.34-.67A2.5 2.5 0 0 0 6 7.65V6.5zM15.5 5H14V4h1.5A2.5 2.5 0 0 1 18 6.5v1.15c0 .94.54 1.8 1.38 2.23l1.34.67a.5.5 0 0 1 0 .9l-1.34.67A2.5 2.5 0 0 0 18 14.35v1.15a2.5 2.5 0 0 1-2.5 2.5H14v-1h1.5c.83 0 1.5-.67 1.5-1.5v-1.15a3.5 3.5 0 0 1 1.93-3.13l.45-.22-.45-.22A3.5 3.5 0 0 1 17 7.65V6.5c0-.83-.67-1.5-1.5-1.5z"/></svg>';
    },
    83637: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.63 1.08a2.04 2.04 0 0 1-3.26 0c-.51.14-1 .35-1.45.6l.01.2A2.05 2.05 0 0 1 1.7 3.93a6.1 6.1 0 0 0-.6 1.45 2.04 2.04 0 0 1 0 3.26c.13.51.34 1 .6 1.45l.2-.01a2.05 2.05 0 0 1 2.03 2.24c.45.26.94.47 1.45.6a2.04 2.04 0 0 1 3.26 0c.51-.13 1-.34 1.45-.6l-.01-.2a2.05 2.05 0 0 1 2.24-2.03c.26-.45.47-.94.6-1.45a2.04 2.04 0 0 1 0-3.26 6.1 6.1 0 0 0-.6-1.45 2.05 2.05 0 0 1-2.23-2.23 6.1 6.1 0 0 0-1.45-.6zM7.84.42c.17-.24.43-.47.72-.4.84.18 1.62.5 2.32.96.23.15.26.48.22.76a1.03 1.03 0 0 0 1.16 1.16c.28-.04.6-.01.76.22.45.7.78 1.48.97 2.32.06.29-.17.55-.41.72a1.02 1.02 0 0 0 0 1.68c.24.17.47.43.4.72a7.12 7.12 0 0 1-.96 2.32c-.15.23-.48.26-.76.22a1.03 1.03 0 0 0-1.17 1.01l.01.15c.04.28.01.6-.22.76-.7.45-1.48.78-2.32.97-.29.06-.55-.17-.72-.41a1.02 1.02 0 0 0-1.68 0c-.17.24-.43.47-.72.4a7.12 7.12 0 0 1-2.32-.96c-.23-.15-.26-.48-.22-.76v-.15a1.02 1.02 0 0 0-1.16-1c-.28.03-.6 0-.76-.23A7.12 7.12 0 0 1 0 8.56c-.06-.29.17-.55.41-.72a1.02 1.02 0 0 0 0-1.68c-.24-.17-.47-.43-.4-.72.18-.84.5-1.62.96-2.32.15-.23.48-.26.76-.22h.15a1.02 1.02 0 0 0 1-1.16c-.03-.28 0-.6.23-.76C3.82.53 4.6.2 5.44 0c.29-.06.55.17.72.41a1.02 1.02 0 0 0 1.68 0zM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>';
    },
    72237: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.65 12.35l-9-9 .7-.7 9 9-.7.7z"/><path fill="currentColor" d="M2.65 11.65l9-9 .7.7-9 9-.7-.7z"/></svg>';
    },
    71402: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path stroke="currentColor" d="M11 2 7.5 5 4 2" class="bracket-up"/><path stroke="currentColor" d="M4 13l3.5-3 3.5 3" class="bracket-down"/></svg>';
    },
    36016: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.65 8.35l.7-.7 6.15 6.14 6.15-6.14.7.7-6.14 6.15 6.14 6.15-.7.7-6.15-6.14-6.15 6.14-.7-.7 6.14-6.15-6.14-6.15z"/></svg>';
    },
    20465: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20.53 3.73 14 9.33 7.47 3.73M7.47 24.27l6.53 -5.60 6.53 5.60"/></svg>';
    },
    48344: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 7v12.93l5.18-4.31.64.76-6.32 5.27-6.32-5.27.64-.76L13 19.93V7h1z"/></svg>';
    },
    99539: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 6H8.68A2.68 2.68 0 0 0 6 8.68V11h1V8.68C7 7.75 7.75 7 8.68 7h10.64c.93 0 1.68.75 1.68 1.68V11h1V8.68C22 7.2 20.8 6 19.32 6zM7 19.32c0 .93.75 1.68 1.68 1.68h10.64c.93 0 1.68-.75 1.68-1.68V17h1v2.32C22 20.8 20.8 22 19.32 22H8.68A2.68 2.68 0 0 1 6 19.32V17h1v2.32z"/></svg>';
    },
    34763: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="m7.47 9.33 6.53 -5.60L20.53 9.33M20.53 18.67l-6.53 5.60L7.47 18.67"/></svg>';
    },
    72899: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6.35l6.32 5.27-.64.76L14 8.07V21h-1V8.07l-5.18 4.31-.64-.76 6.32-5.27z"/></svg>';
    },
    70471: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="15" cy="9" r="1.5"/><circle fill="currentColor" cx="9" cy="9" r="1.5"/><circle fill="currentColor" cx="3" cy="9" r="1.5"/></svg>';
    },
    82847: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><circle fill="currentColor" cx="12.75" cy="7.5" r="1.25"/><circle fill="currentColor" cx="7.5" cy="7.5" r="1.25"/><circle fill="currentColor" cx="2.25" cy="7.5" r="1.25"/></svg>';
    },
    3515: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 8.88l-.66-.76L8 10.9V3H7v7.9L3.83 8.12l-.66.76 4.33 3.78 4.33-3.78z"/></svg>';
    },
    7859: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.5 2.8a.7.7 0 0 0-.7.7V6H1.2V3.5a2.3 2.3 0 0 1 2.3-2.3h11a2.3 2.3 0 0 1 2.3 2.3V6h-1.6V3.5a.7.7 0 0 0-.7-.7h-11z" class="bracket-up"/><path fill="currentColor" d="M3.5 15.2a.7.7 0 0 1-.7-.7V12H1.2v2.5a2.3 2.3 0 0 0 2.3 2.3h11a2.3 2.3 0 0 0 2.3-2.3V12h-1.6v2.5a.7.7 0 0 1-.7.7h-11z" class="bracket-down"/></svg>';
    },
    79526: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path fill="currentColor" d="M4.5 12A1.5 1.5 0 0 1 3 10.5V9H2v1.5A2.5 2.5 0 0 0 4.5 13h6a2.5 2.5 0 0 0 2.5-2.5V9h-1v1.5c0 .83-.67 1.5-1.5 1.5h-6z" class="bracket-up"/><path fill="currentColor" d="M4.5 3C3.67 3 3 3.67 3 4.5V6H2V4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6h-1V4.5c0-.83-.67-1.5-1.5-1.5h-6z" class="bracket-down"/></svg>';
    },
    42930: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path stroke="currentColor" d="m4 5 3.5-3L11 5" class="bracket-up"/><path stroke="currentColor" d="M11 10l-3.5 3L4 10" class="bracket-down"/></svg>';
    },
    81020: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 6.12l-.66.76L8 4.1V12H7V4.1L3.83 6.88l-.66-.76L7.5 2.34l4.33 3.78z"/></svg>';
    },
    8767: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 2.5c-1.06 0-1.88.93-1.75 1.98l.63 5.03a1.13 1.13 0 0 0 2.25 0l.62-5.03A1.77 1.77 0 0 0 9 2.5zm0 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>';
    },
    27486: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>';
    },
    4696: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.5 4.5l-9 9M4.5 4.5l9 9"/></svg>';
    },
    79639: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M12.5 5.5l-7 7m0-7l7 7"/></svg>';
    },
    57524: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.57 14.8H5.03V3.36c1.62-.05 2.64-.08 3.06-.08 1.66 0 2.98.49 3.96 1.47a5.23 5.23 0 0 1 1.47 3.88c0 4.11-1.99 6.17-5.95 6.17zm-.5-9.66v7.8c.32.04.67.06 1.05.06 1.03 0 1.83-.38 2.41-1.12.58-.75.88-1.79.88-3.13 0-2.44-1.14-3.67-3.42-3.67-.22 0-.53.02-.93.06z"/></svg>';
    },
    67189: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.84 13.7H5.78V4.4l2.48-.06c1.35 0 2.42.4 3.22 1.2.8.78 1.19 1.83 1.19 3.15 0 3.34-1.61 5.01-4.83 5.01zm-.41-7.85v6.35c.26.02.55.03.86.03.83 0 1.48-.3 1.95-.9.48-.6.72-1.46.72-2.54 0-2-.93-2.99-2.78-2.99-.18 0-.43.02-.75.05z"/></svg>';
    },
    76948: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.65 5.16v2.68h3.78v1.73H7.65V13h5.19v1.8H5.62V3.35h7.3v1.8H7.65z"/></svg>';
    },
    67957: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.9 5.87v2.17h3.07v1.4H7.9v2.8h4.22v1.46H6.25V4.4h5.94v1.47H7.9z"/></svg>';
    },
    21035: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><rect width="10" height="4" fill="currentColor" rx="2" x="4" y="7"/></svg>';
    },
    16030: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="9" cy="9" r="5"/></svg>';
    },
    20983: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><circle fill="currentColor" cx="9" cy="9" r="4"/></svg>';
    },
    34074: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9.3 9l.9-4.53a1.23 1.23 0 1 0-2.4 0L8.7 9l-.9 4.53a1.23 1.23 0 1 0 2.4 0L9.3 9z"/><path fill="currentColor" d="M9.15 9.26l4.38-1.48a1.23 1.23 0 1 0-1.21-2.09L8.85 8.74l-4.38 1.48a1.23 1.23 0 1 0 1.21 2.09l3.47-3.05z"/><path fill="currentColor" d="M9.15 8.74L5.68 5.69a1.23 1.23 0 1 0-1.2 2.09l4.37 1.48 3.47 3.05a1.23 1.23 0 1 0 1.2-2.09L9.16 8.74z"/></svg>';
    },
    20123: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.29 4.8h-.09a4.2 4.2 0 1 0 .09 8.4 6 6 0 1 1 0-8.4z"/></svg>';
    },
    27086: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.57 5.5h-.07a3.5 3.5 0 1 0 .07 7A4.98 4.98 0 0 1 4 9a5 5 0 0 1 8.57-3.5z"/></svg>';
    },
    72074: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.58 12.1A3.86 3.86 0 0 0 9 6.75a3.87 3.87 0 0 0-3.58 5.33 7.74 7.74 0 0 1 7.16 0zM3.64 9.93l-2.3-.62.37-1.38 2.3.62-.37 1.38zM6.1 6.07L5.07 3.92l1.3-.6 1 2.15-1.29.6zM10.62 5.47l1-2.16 1.3.6-1.01 2.16-1.3-.6zM13.99 8.55l2.3-.62.36 1.38-2.3.62L14 8.55z"/></svg>';
    },
    23373: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.22 11.78A3.47 3.47 0 0 0 9 6.98a3.48 3.48 0 0 0-3.22 4.8 6.97 6.97 0 0 1 6.44 0zM4.18 9.83L2.1 9.28l.33-1.24 2.07.55-.33 1.24zM6.38 6.36l-.9-1.94 1.16-.54.9 1.94-1.16.54zM10.46 5.82l.9-1.94 1.16.54-.9 1.94-1.16-.54zM13.49 8.6l2.07-.56.33 1.24-2.07.55-.33-1.24z"/></svg>';
    },
    56201: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14.48 5.1c-.52 2.03-1.46 3.04-2.82 3.04-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.37-1.58 1.13H3.55A4.3 4.3 0 0 1 4.5 6c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.55 2.52.55.8 0 1.32-.37 1.59-1.13h1.29zm0 4.84c-.52 2.02-1.46 3.03-2.82 3.03-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.38-1.58 1.13H3.55a4.3 4.3 0 0 1 .95-2.14c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.56 2.52.56.8 0 1.32-.38 1.59-1.13h1.29z"/></svg>';
    },
    58189: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13.4 5.9c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.45-1.96-.45-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.71.4-.48.86-.72 1.4-.72.56 0 1.31.16 2.27.46.95.3 1.62.45 2.01.45.64 0 1.06-.3 1.27-.9h1.03zm0 3.87c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.46-1.96-.46-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.7.4-.48.86-.72 1.4-.72.56 0 1.31.15 2.27.46.95.3 1.62.44 2.01.44.64 0 1.06-.3 1.27-.9h1.03z"/></svg>';
    },
    62920: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M2.4 5.46a.8.8 0 0 1 1.14-.05L8 9.42l4.46-4.01a.8.8 0 0 1 1.08 1.18L8 11.58 2.47 6.59a.8.8 0 0 1-.06-1.13z"/></svg>';
    },
    47036: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M3.5 5.58c.24-.28.65-.3.92-.07L7.5 8.14l3.08-2.63a.65.65 0 1 1 .84.98L7.5 9.86 3.58 6.49a.65.65 0 0 1-.07-.91z"/></svg>';
    },
    42205: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="7" height="7"><path fill="currentColor" d="M3.5 7L7 4H4V0H3V4H0L3.5 7Z"/></svg>';
    },
    50119: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M.5 3.5L4 0v3h5v1H4v3z"/></svg>';
    },
    47424: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>';
    },
    3106: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g class="corner-left-top"><path fill="currentColor" d="M6 9C6 7.89543 6.89543 7 8 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H8V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V9Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M17 8C17 7.44772 17.4477 7 18 7H20C21.1046 7 22 7.89543 22 9V11C22 11.5523 21.5523 12 21 12C20.4477 12 20 11.5523 20 11V9H18C17.4477 9 17 8.55228 17 8Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M21 16C21.5523 16 22 16.4477 22 17V19C22 20.1046 21.1046 21 20 21H18C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19H20V17C20 16.4477 20.4477 16 21 16Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M7 16C7.55228 16 8 16.4477 8 17V19H10C10.5523 19 11 19.4477 11 20C11 20.5523 10.5523 21 10 21H8C6.89543 21 6 20.1046 6 19V17C6 16.4477 6.44772 16 7 16Z"/></g></svg>';
    },
    78360: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g class="corner-left-top"><path fill="currentColor" d="M10 7C10.5523 7 11 7.44772 11 8V10C11 11.1046 10.1046 12 9 12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10H9V8C9 7.44772 9.44772 7 10 7Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M18 7C18.5523 7 19 7.44772 19 8V10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H19C17.8954 12 17 11.1046 17 10V8C17 7.44772 17.4477 7 18 7Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M17 18C17 16.8954 17.8954 16 19 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V18Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M6 17C6 16.4477 6.44772 16 7 16H9C10.1046 16 11 16.8954 11 18V20C11 20.5523 10.5523 21 10 21C9.44772 21 9 20.5523 9 20V18H7C6.44772 18 6 17.5523 6 17Z"/></g></svg>';
    },
    94881: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 7h10"/></svg>';
    },
    88398: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 2v10M2 7h10"/></svg>';
    },
    15741: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18" width="14" height="18"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M1 10a6 6 0 1 0 6-6H3"/><path d="M5 1L2.5 4 5 7"/></g></svg>';
    },
    62884: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M8.5 3.5L5 0v3H0v1h5v3z"/></svg>';
    },
    45697: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.5 1.5l5 5.5-5 5.5M3 4l2.5 3L3 10"/></svg>';
    },
    70340: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 1.5l5 5.5-5 5.5"/></svg>';
    },
    50662: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="7" height="7"><path fill="currentColor" d="M3.5 0L0 3h3v4h1V3h3L3.5 0z"/></svg>';
    },
  },
]);
