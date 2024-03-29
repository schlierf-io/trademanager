"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [507],
  {
    98930: (t, e, i) => {
      i.d(e, { PolygonRenderer: () => u });
      var s = i(34026),
        r = i(4652),
        n = i(9933),
        a = i(85113),
        o = i(14888),
        l = i(38031),
        h = i(86216),
        d = i(55014),
        c = i(9740);
      class u extends h.MediaCoordinatesPaneRenderer {
        constructor(t) {
          super(),
            (this._data = null),
            (this._backHittest = new o.HitTestResult(
              o.HitTestResult.MOVEPOINT_BACKGROUND
            )),
            (this._points = []),
            (this._hittest =
              null != t ? t : new o.HitTestResult(o.HitTestResult.MOVEPOINT));
        }
        setData(t) {
          (this._data = t), (this._points = t.points);
        }
        hitTest(t) {
          if (
            null === this._data ||
            (void 0 !== this._data.mouseTouchable && !this._data.mouseTouchable)
          )
            return null;
          const e = Math.max(
              (0, d.interactionTolerance)().line,
              Math.ceil(this._data.linewidth / 2)
            ),
            i = this._points.length;
          if (1 === i) {
            return (0, s.pointInCircle)(t, this._points[0], e)
              ? this._hittest
              : null;
          }
          for (let s = 1; s < i; s++) {
            const i = this._points[s - 1],
              n = this._points[s];
            if ((0, r.distanceToSegment)(i, n, t).distance <= e)
              return this._hittest;
          }
          if (this._data.filled && this._data.fillBackground && i > 0) {
            const s = this._points[0],
              n = this._points[i - 1];
            if ((0, r.distanceToSegment)(s, n, t).distance <= e)
              return this._hittest;
          }
          return this._data.filled &&
            this._data.fillBackground &&
            (0, s.pointInPolygon)(t, this._data.points)
            ? this._backHittest
            : null;
        }
        _drawImpl(t) {
          var e, i;
          const s = t.context,
            r = this._points.length;
          if (null === this._data || 0 === r) return;
          if (1 === r)
            return void this._drawPoint(
              s,
              this._points[0],
              this._data.linewidth / 2,
              this._data.color
            );
          s.beginPath();
          const o =
            null !== (e = this._data.linecap) && void 0 !== e ? e : "butt";
          (s.lineCap = o),
            (s.strokeStyle = this._data.color),
            (s.lineWidth = this._data.linewidth),
            (s.lineJoin =
              null !== (i = this._data.linejoin) && void 0 !== i ? i : "miter"),
            (0, c.setLineStyle)(s, this._data.linestyle);
          const h = this._points[0];
          s.moveTo(h.x, h.y);
          for (const t of this._points) s.lineTo(t.x, t.y);
          if (
            (this._data.filled &&
              this._data.fillBackground &&
              ((s.fillStyle = (0, l.generateColor)(
                this._data.backcolor,
                this._data.transparency
              )),
              s.fill()),
            this._data.filled && !this._data.skipClosePath && s.closePath(),
            this._data.linewidth > 0 && s.stroke(),
            r > 1)
          ) {
            if (
              ("butt" !== o && (s.lineCap = "butt"),
              this._data.leftend === a.LineEnd.Arrow)
            ) {
              const t = this._correctArrowPoints(
                this._points[1],
                this._points[0],
                s.lineWidth,
                o
              );
              (0, n.drawArrow)(t[0], t[1], s, s.lineWidth, 1);
            }
            if (this._data.rightend === a.LineEnd.Arrow) {
              const t = this._correctArrowPoints(
                this._points[r - 2],
                this._points[r - 1],
                s.lineWidth,
                o
              );
              (0, n.drawArrow)(t[0], t[1], s, s.lineWidth, 1);
            }
          }
        }
        _drawPoint(t, e, i, s) {
          0 !== i &&
            (t.beginPath(),
            (t.fillStyle = s),
            t.arc(e.x, e.y, i, 0, 2 * Math.PI, !0),
            t.fill(),
            t.closePath());
        }
        _correctArrowPoints(t, e, i, s) {
          const r = e.subtract(t),
            n = r.length();
          if ("butt" === s || n < 1) return [t, e];
          const a = n + i / 2;
          return [t, r.scaled(a / n).add(t)];
        }
      }
    },
    13770: (t, e, i) => {
      i.r(e), i.d(e, { BackgroundPaneView: () => l });
      var s = i(50151),
        r = i(29639),
        n = i(83499),
        a = i(38031);
      class o {
        constructor(t) {
          this._data = t;
        }
        hitTest(t) {
          return null;
        }
        draw(t, e) {}
        drawBackground(t, e) {
          const i = this._data,
            s = (0, a.generateColor)(this._data.color, this._data.transparency),
            r = e.pixelRatio,
            o = Math.round(i.x1 * r),
            l = Math.round(i.x2 * r);
          (0, n.fillRect)(t, o, 0, l - o, e.physicalHeight, s);
        }
      }
      class l {
        constructor(t, e, i) {
          (this._data = []),
            (this._invalidated = !0),
            (this._provider = t),
            (this._model = e),
            (this._data = []);
        }
        update() {
          this._invalidated = !0;
        }
        renderer() {
          this._invalidated &&
            (this._updateViewInternal(), (this._invalidated = !1));
          const t = new r.CompositeRenderer();
          for (const e of this._data) t.append(new o(e));
          return t;
        }
        _updateViewInternal() {
          this._data = [];
          const t = this._provider.priceScale(),
            e = this._model.timeScale();
          if (!t || t.isEmpty() || e.isEmpty()) return;
          const i = this._provider.graphics().backgrounds();
          if (0 === i.size) return;
          const r = this._model.timeScale().visibleBarsStrictRange();
          if (null === r) return;
          const n = r.firstBar(),
            a = r.lastBar();
          i.forEach((t, i) => {
            const r = this._provider.properties().graphics.backgrounds[i];
            if (!r.visible.value()) return;
            let o, l;
            t.forEach((t) => {
              const i =
                  null !== t.start
                    ? t.start
                    : (0, s.ensureNotNull)(e.points().range().value())
                        .firstIndex,
                h = t.stop;
              if (h < n || a < i) return;
              let d = e.indexToCoordinate(i) - 0.5 * e.barSpacing();
              const c = e.indexToCoordinate(h) + 0.5 * e.barSpacing();
              l === i - 1 && (d = o || d),
                (o = c),
                (l = h),
                (d < 0 && c < 0) ||
                  (d > e.width() && c > e.width()) ||
                  this._data.push({
                    x1: d,
                    x2: c,
                    color: r.color.value(),
                    transparency: r.transparency.value(),
                  });
            });
          });
        }
      }
    },
    58222: (t, e, i) => {
      i.r(e), i.d(e, { HHistPaneView: () => w });
      var s = i(24377),
        r = i(50151),
        n = i(14888),
        a = i(9822),
        o = i(29639),
        l = i(44381),
        h = i(86441),
        d = i(83499),
        c = i(48566),
        u = i(17364);
      function p(t, e) {
        return { min: Math.min(t, e), max: Math.max(t, e) };
      }
      function _(t) {
        return t.max - t.min;
      }
      class f {
        constructor(t) {
          this._data = t;
        }
        hitTest(t, e) {
          const i = this._data;
          for (const s of i.histograms) {
            if (s.yRange.min >= t.y || t.y >= s.yRange.max) continue;
            let r = null;
            const o = _(s.xRange);
            for (const l of s.bars) {
              const h = i.styles[l.styleId];
              if (!h.visible) continue;
              if (
                h.location === a.HHistLocation.Absolute &&
                (s.xRange.min >= t.x || t.x >= s.xRange.max)
              )
                continue;
              null === r &&
                ((r = 0),
                s.bars.forEach((t) => {
                  const e = t.subBarValues.reduce((t, e) => t + e);
                  r = Math.max(r, e);
                }));
              const d = v(s.xRange, h, e.cssWidth),
                { xBasePoint: c, sign: u } = d,
                p = Math.max(
                  (h.percentWidth * o) / 100 - l.subBarValues.length,
                  0
                );
              let _ = c;
              for (let e = 0; e < l.subBarValues.length; e++) {
                const i = l.y,
                  s = l.y + l.height,
                  a = _,
                  o = a + u * ((p * l.subBarValues[e]) / r);
                if (
                  ((_ = o),
                  ((t.x >= a && t.x <= o) || (t.x >= o && t.x <= a)) &&
                    t.y >= i &&
                    t.y <= s)
                )
                  return new n.HitTestResult(n.HitTestResult.REGULAR);
              }
            }
          }
          return null;
        }
        draw(t, e) {
          const i = this._data,
            r = e.pixelRatio;
          t.save(),
            i.histograms.forEach((n) => {
              if (i.histBoxBgColor) {
                t.beginPath(), (t.fillStyle = i.histBoxBgColor);
                const e = Math.round(n.xRange.min * r),
                  s = Math.round(n.yRange.min * r),
                  a = Math.round(n.xRange.max * r) - e,
                  o = Math.round(n.yRange.max * r) - s;
                t.rect(e, s, a, o), t.fill();
              }
              const a = [];
              let o = 0,
                l = 0;
              n.bars.forEach((t) => {
                const e = t.subBarValues.reduce((t, e) => t + e);
                (o = Math.max(o, e)), (l += t.height);
              });
              const h = l / n.bars.length,
                d = (function (t, e) {
                  return Math.floor(t * e) >= 1 * e ? Math.floor(e) : 0;
                })(h, r),
                c = _(n.xRange),
                u = [];
              if (
                (n.bars.forEach((s) => {
                  const l = i.styles[s.styleId];
                  if (!l.visible) return;
                  if (l.showValues && l.addToTotalValue)
                    for (let t = 0; t < s.subBarValues.length; t++)
                      a[t] = (a[t] || 0) + s.subBarValues[t];
                  const h = v(n.xRange, l, e.cssWidth),
                    { xBasePoint: p, sign: _ } = h;
                  if (s.y > e.cssHeight || s.y + s.height < 0) return;
                  const f = Math.max(
                    (l.percentWidth * c) / 100 - s.subBarValues.length,
                    0
                  );
                  let x = p;
                  for (let e = 0; e < s.subBarValues.length; e++) {
                    const i = s.y,
                      n = s.y + s.height,
                      a = x,
                      h = a + _ * ((f * s.subBarValues[e]) / o);
                    if (Math.abs(h - a) < 0.5) continue;
                    (x = h), t.beginPath(), (t.fillStyle = l.colors[e]);
                    const c = Math.round(a * r),
                      u = Math.round(i * r),
                      p = Math.round(h * r) - c,
                      v = Math.max(Math.round(n * r) - u - d, 1);
                    t.rect(c, u, p, v), t.fill();
                  }
                  if (!l.showValues) return;
                  const y = g(s.displayedValues, l.direction),
                    w = m(c, s.y, s.height, h, l, y);
                  u.push(w);
                }),
                a.length > 0)
              ) {
                const t = i.styles[n.bars[0].styleId],
                  r = v(n.xRange, t, e.cssWidth),
                  o = g(a, t.direction),
                  l = n.bars[n.bars.length - 1],
                  d = m(c, l.y + l.height, h, r, t, o);
                (d.color = (0, s.shiftColor)(d.color, 1.5)), u.push(d);
              }
              const p = Math.min(...u.map((t) => t.fontSize));
              if (p >= 7.5) for (const i of u) (i.fontSize = p), x(t, e, i);
            }),
            t.restore();
        }
      }
      function v(t, e, i) {
        const s = e.location === a.HHistLocation.Absolute,
          r = e.location === a.HHistLocation.Relative,
          n = e.direction === a.HHistDirection.LeftToRight,
          o = e.direction === a.HHistDirection.RightToLeft;
        let l, h;
        if (s && n) (l = t.min), (h = 1);
        else if (s && o) (l = t.max), (h = -1);
        else if (r && n) (l = 0), (h = 1);
        else {
          if (!r || !o)
            throw new Error(
              `Unknown location/direction values: ${e.location}/${e.direction}`
            );
          (l = i), (h = -1);
        }
        return { xBasePoint: l, sign: h };
      }
      function g(t, e) {
        e === a.HHistDirection.RightToLeft && (t = t.slice()).reverse();
        const i = new c.VolumeFormatter();
        return t.map((t) => i.format(t)).join("x");
      }
      function m(t, e, i, s, r, n) {
        const o = Math.min(
            Math.round((1.7 * t) / n.length),
            Math.round(0.6 * i)
          ),
          l = r.direction === a.HHistDirection.LeftToRight ? "left" : "right",
          { xBasePoint: d, sign: c } = s,
          u = d + 3 * c,
          p = e + 0.7 * i;
        return {
          text: n,
          color: r.valuesColor,
          fontSize: o,
          align: l,
          point: new h.Point(u, p),
        };
      }
      function x(t, e, i) {
        const { text: s, color: r, fontSize: n, align: a, point: o } = i;
        (t.font = `${n}px ${u.CHART_FONT_FAMILY}`),
          (t.fillStyle = r),
          (t.textAlign = a),
          (0, d.drawScaled)(t, e.pixelRatio, () => t.fillText(s, o.x, o.y));
      }
      var y = i(38031);
      class w {
        constructor(t, e, i, s, r = !1) {
          (this._invalidated = !0),
            (this._histBoxBgStyle = null),
            (this._provider = t),
            (this._model = e),
            (this._histBoxBgStyle = null != s ? s : null),
            (this._extendToBarsEndings = r),
            (this._rendererData = { histograms: [], styles: {} }),
            (this._textData = []),
            (this._hhistRenderer = new f(this._rendererData));
        }
        update() {
          this._invalidated = !0;
        }
        renderer() {
          this._invalidated &&
            (this._updateViewInternal(), (this._invalidated = !1));
          const t = new o.CompositeRenderer();
          t.append(this._hhistRenderer);
          for (const e of this._textData)
            t.append(
              new l.TextRenderer(
                e,
                new n.HitTestResult(n.HitTestResult.REGULAR)
              )
            );
          return t;
        }
        _resetRenderersData() {
          (this._rendererData.histograms = []),
            (this._rendererData.styles = {}),
            (this._rendererData.histBoxBgColor = void 0),
            (this._textData = []);
        }
        _prepareStyles() {
          const t = (0, r.ensureDefined)(this._provider.graphicsInfo().hhists),
            e = Object.keys(t),
            i = this._provider.properties().graphics.hhists,
            s =
              this._provider
                .properties()
                .child("inputs")
                .child("volume")
                .value() === a.HHistVolumeMode.Delta;
          for (const n of e) {
            const e = (0, r.ensureDefined)(i.child(n)),
              a = (0, r.ensureDefined)(t[n]);
            if (s)
              (this._rendererData.styles[n + "UpDominate"] = {
                colors: R(e.colors[0].value(), e.transparencies[0].value()),
                visible: e.visible.value(),
                percentWidth: e.percentWidth.value(),
                location: a.location,
                direction: e.direction.value(),
                showValues: e.showValues.value(),
                addToTotalValue: !1,
                valuesColor: e.valuesColor.value(),
              }),
                (this._rendererData.styles[n + "DownDominate"] = {
                  colors: R(e.colors[1].value(), e.transparencies[1].value()),
                  visible: e.visible.value(),
                  percentWidth: e.percentWidth.value(),
                  location: a.location,
                  direction: e.direction.value(),
                  showValues: e.showValues.value(),
                  addToTotalValue: !1,
                  valuesColor: e.valuesColor.value(),
                });
            else {
              const t = (0, y.generateColor)(
                  e.colors[0].value(),
                  e.transparencies[0].value()
                ),
                i = e.colors[1]
                  ? (0, y.generateColor)(
                      e.colors[1].value(),
                      e.transparencies[1].value()
                    )
                  : t;
              this._rendererData.styles[n] = {
                colors: [t, i],
                visible: e.visible.value(),
                percentWidth: e.percentWidth.value(),
                location: a.location,
                direction: e.direction.value(),
                showValues: e.showValues.value(),
                addToTotalValue: !0,
                valuesColor: e.valuesColor.value(),
              };
            }
          }
          if (this._histBoxBgStyle) {
            const t = this._histBoxBgStyle.childs();
            this._rendererData.histBoxBgColor = (0, y.generateColor)(
              t.color.value(),
              t.transparency.value()
            );
          }
        }
        _updateViewInternal() {
          this._resetRenderersData();
          const t = this._provider.priceScale(),
            e = this._model.timeScale();
          if (!t || t.isEmpty() || e.isEmpty()) return;
          if (null === this._provider.firstValue()) return;
          const i = this._provider.graphics().hhistsByTimePointIndex();
          if (0 === i.size) return;
          const s = e.visibleBarsStrictRange();
          if (null === s) return;
          const n = s.firstBar(),
            a = s.lastBar();
          this._prepareStyles(),
            (0, r.ensureDefined)(i).forEach((i, s) => {
              let r = 1 / 0,
                o = -1 / 0;
              i.forEach((t) => {
                (r = Math.min(r, t.firstBarTime)),
                  (o = Math.max(o, t.lastBarTime));
              }),
                o < n || r > a || this._updateDataForRenderers(i, t, e);
            });
        }
        _updateDataForRenderers(t, e, i) {
          if (t.size <= 0) return;
          let s = null;
          if (
            (t.forEach((t) => {
              s = s || t;
            }),
            null === s)
          )
            return;
          let n = s;
          t.forEach((t) => {
            t.priceLow < n.priceLow && (n = t);
          });
          const o =
              this._provider
                .properties()
                .child("inputs")
                .child("volume")
                .value() === a.HHistVolumeMode.Delta,
            l = (function (t, e, i) {
              const s = i ? e.barSpacing() / 2 : 0;
              return p(
                e.indexToCoordinate(t.firstBarTime) - s,
                e.indexToCoordinate(t.lastBarTime) + s
              );
            })(s, i, this._extendToBarsEndings),
            h = (0, r.ensureNotNull)(this._provider.firstValue()),
            d = [];
          t.forEach((t) => {
            null == t.rate[t.rate.length - 1] && t.rate.splice(-1, 1);
            let i = [],
              s = [],
              r = t.styleId;
            if (o) {
              const [e, n, a] =
                t.rate[0] > t.rate[1]
                  ? [t.rate[1], t.rate[0], "UpDominate"]
                  : [t.rate[0], t.rate[1], "DownDominate"];
              (i = [n - e, e, e]), (s = [n - e]), (r += a);
            } else (i = t.rate), (s = t.rate);
            const n = (function (t, e, i) {
              return p(
                e.priceToCoordinate(t.priceHigh, i),
                e.priceToCoordinate(t.priceLow, i)
              );
            })(t, e, h);
            d.push({
              height: n.max - n.min,
              y: n.min,
              subBarValues: i,
              displayedValues: s,
              styleId: r,
            });
          }),
            d.sort((t, e) => t.y - e.y),
            this._rendererData.histograms.push({
              xRange: l,
              yRange: p(d[0].y, d[d.length - 1].y + d[d.length - 1].height),
              bars: d,
            });
        }
      }
      function R(t, e) {
        let i;
        if ((0, y.isHexColor)(t)) i = 100 - e;
        else {
          const r = (0, s.tryParseRgba)(t);
          i = 100 - (null !== r ? (0, y.alphaToTransparency)(r[3]) : e);
        }
        return [
          (0, y.generateColor)(t, 100 - i, !0),
          (0, y.generateColor)(t, 100 - i / 2, !0),
          (0, y.generateColor)(t, 100 - i / 4, !0),
        ];
      }
    },
    94993: (t, e, i) => {
      i.r(e), i.d(e, { HorizLinePaneView: () => o });
      var s = i(50151),
        r = i(14888),
        n = i(29639),
        a = i(2945);
      class o {
        constructor(t, e, i, s = !1) {
          (this._data = []),
            (this._invalidated = !0),
            (this._provider = t),
            (this._model = e),
            (this._extendToBarsEndings = s),
            (this._hitTestResult =
              void 0 !== i
                ? new r.HitTestResult(r.HitTestResult.CUSTOM, i)
                : new r.HitTestResult(r.HitTestResult.REGULAR));
        }
        update() {
          this._invalidated = !0;
        }
        renderer() {
          this._invalidated &&
            (this._updateViewInternal(), (this._invalidated = !1));
          const t = new n.CompositeRenderer();
          for (const e of this._data) {
            const i = new a.HorizontalLineRenderer();
            i.setData(e), i.setHitTest(this._hitTestResult), t.append(i);
          }
          return t;
        }
        _updateViewInternal() {
          this._data = [];
          const t = this._provider.priceScale(),
            e = this._model.timeScale();
          if (!t || t.isEmpty() || e.isEmpty()) return;
          const i = this._provider.graphics().horizlines();
          if (0 === i.size) return;
          const r = this._model.timeScale().visibleBarsStrictRange();
          if (null === r) return;
          const n = this._provider.firstValue();
          if (null === n) return;
          const a = r.firstBar(),
            o = r.lastBar(),
            l = this._extendToBarsEndings ? e.barSpacing() / 2 : 0;
          i.forEach((i, r) => {
            const h = this._provider.properties().graphics.horizlines[r];
            h.visible.value() &&
              i.forEach((i) => {
                const r = i.startIndex,
                  d = i.endIndex;
                (!i.extendRight && Math.max(r, d) < a) ||
                  (!i.extendLeft && Math.min(r, d) > o) ||
                  this._data.push({
                    y: t.priceToCoordinate((0, s.ensureDefined)(i.level), n),
                    left: i.extendLeft ? void 0 : e.indexToCoordinate(r) - l,
                    right: i.extendRight ? void 0 : e.indexToCoordinate(d) + l,
                    color: h.color.value(),
                    linewidth: h.width.value(),
                    linestyle: h.style.value(),
                  });
              });
          });
        }
      }
    },
    55493: (t, e, i) => {
      i.r(e), i.d(e, { PolygonPaneView: () => h });
      var s = i(50151),
        r = i(86441),
        n = i(14888),
        a = i(29639),
        o = i(53479),
        l = i(98930);
      class h {
        constructor(t, e, i) {
          (this._data = []),
            (this._invalidated = !0),
            (this._provider = t),
            (this._model = e),
            (this._hitTestResult =
              void 0 !== i
                ? new n.HitTestResult(n.HitTestResult.CUSTOM, i)
                : new n.HitTestResult(n.HitTestResult.REGULAR));
        }
        update() {
          this._invalidated = !0;
        }
        renderer() {
          this._invalidated &&
            (this._updateViewInternal(), (this._invalidated = !1));
          const t = new a.CompositeRenderer();
          for (const e of this._data) {
            const i = new l.PolygonRenderer(this._hitTestResult);
            i.setData(e), t.append(i);
          }
          return t;
        }
        _updateViewInternal() {
          this._data = [];
          const t = this._provider.priceScale(),
            e = this._model.timeScale();
          if (!t || t.isEmpty() || e.isEmpty()) return;
          const i = this._provider.graphics().polygons();
          if (0 === i.size) return;
          const n = this._model.timeScale().visibleBarsStrictRange();
          if (null === n) return;
          const a = this._provider.firstValue();
          if (null === a) return;
          const l = n.firstBar(),
            h = n.lastBar(),
            d = this._provider.properties().graphics.polygons,
            c = (0, s.ensureDefined)(
              this._provider.metaInfo().graphics.polygons
            );
          i.forEach((i, n) => {
            const u = d[n];
            100 !== u.transparency.value() &&
              i.forEach((i) => {
                let d = 1 / 0,
                  p = -1 / 0;
                for (const t of i.points) {
                  const e = t.index + (t.offset || 0);
                  (d = Math.min(d, e)), (p = Math.max(p, e));
                }
                if (p < l || h < d) return;
                const _ = i.points.map((i) => {
                  const n = e.indexToCoordinate(i.index + (i.offset || 0)),
                    o = t.priceToCoordinate((0, s.ensureDefined)(i.level), a);
                  return new r.Point(n, o);
                });
                this._data.push({
                  points: _,
                  color: u.color.value(),
                  backcolor: u.color.value(),
                  linewidth:
                    void 0 !== u.showBorder && u.showBorder.value() ? 1 : 0,
                  linestyle: o.LINESTYLE_SOLID,
                  filled: !0,
                  fillBackground: !0,
                  transparency: u.transparency.value(),
                  mouseTouchable: (0, s.ensureDefined)(c[n]).mouseTouchable,
                });
              });
          });
        }
      }
    },
    66794: (t, e, i) => {
      i.r(e), i.d(e, { VertLinePaneView: () => l });
      var s = i(50151),
        r = i(14888),
        n = i(89),
        a = i(29639),
        o = i(6612);
      class l {
        constructor(t, e, i) {
          (this._data = []),
            (this._invalidated = !0),
            (this._provider = t),
            (this._model = e),
            (this._hitTestResult =
              void 0 !== i
                ? new r.HitTestResult(r.HitTestResult.CUSTOM, i)
                : new r.HitTestResult(r.HitTestResult.REGULAR));
        }
        update() {
          this._invalidated = !0;
        }
        renderer() {
          this._invalidated &&
            (this._updateViewInternal(), (this._invalidated = !1));
          const t = new a.CompositeRenderer();
          for (const e of this._data) {
            const i = new o.VerticalLineRenderer();
            i.setData(e), i.setHitTest(this._hitTestResult), t.append(i);
          }
          return t;
        }
        _updateViewInternal() {
          this._data = [];
          const t = this._provider.priceScale(),
            e = this._model.timeScale();
          if (!t || t.isEmpty() || e.isEmpty()) return;
          const i = this._provider.graphicsInfo().vertlines,
            r = this._provider.graphics().vertlines();
          if (0 === r.size || void 0 === i) return;
          const a = this._model.timeScale().visibleBarsStrictRange();
          if (null === a) return;
          const o = this._provider.firstValue();
          if (null === o) return;
          const l = a.firstBar(),
            h = a.lastBar();
          r.forEach((r, a) => {
            const d = this._provider.properties().graphics.vertlines[a];
            if (!d.visible.value()) return;
            let c = 0;
            switch ((0, s.ensureDefined)(i[a]).halign) {
              case n.HAlign.Left:
                c = -e.barSpacing() / 2;
                break;
              case n.HAlign.Right:
                c = e.barSpacing() / 2;
            }
            r.forEach((i) => {
              const r = i.index;
              r < l ||
                h < r ||
                this._data.push({
                  x: e.indexToCoordinate(r) + c,
                  top: i.extendTop
                    ? void 0
                    : t.priceToCoordinate((0, s.ensureDefined)(i.endPrice), o),
                  bottom: i.extendBottom
                    ? void 0
                    : t.priceToCoordinate(
                        (0, s.ensureDefined)(i.startPrice),
                        o
                      ),
                  color: d.color.value(),
                  linewidth: d.width.value(),
                  linestyle: d.style.value(),
                });
            });
          });
        }
      }
    },
  },
]);
