!(function (e, s) {
  "object" == typeof exports && "undefined" != typeof module
    ? s(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], s)
    : s(
        ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Datafeeds =
          {})
      );
})(this, function (e) {
  "use strict";
  function s(e) {
    return void 0 === e ? "" : "string" == typeof e ? e : e.message;
  }
  class t {
    constructor(e, s, t) {
      (this._datafeedUrl = e),
        (this._requester = s),
        (this._limitedServerResponse = t);
    }
    getBars(e, t, r) {
      const i = {
        symbol: e.ticker || "",
        resolution: t,
        from: r.from,
        to: r.to,
      };
      return (
        void 0 !== r.countBack && (i.countback = r.countBack),
        void 0 !== e.currency_code && (i.currencyCode = e.currency_code),
        void 0 !== e.unit_id && (i.unitId = e.unit_id),
        new Promise(async (e, t) => {
          try {
            const s = await this._requester.sendRequest(
                this._datafeedUrl,
                "history",
                i
              ),
              t = this._processHistoryResponse(s);
            this._limitedServerResponse &&
              (await this._processTruncatedResponse(t, i)),
              e(t);
          } catch (e) {
            if (e instanceof Error || "string" == typeof e) {
              const r = s(e);
              console.warn(`HistoryProvider: getBars() failed, error=${r}`),
                t(r);
            }
          }
        })
      );
    }
    async _processTruncatedResponse(e, t) {
      let r = e.bars.length;
      try {
        for (
          ;
          this._limitedServerResponse &&
          this._limitedServerResponse.maxResponseLength > 0 &&
          this._limitedServerResponse.maxResponseLength === r &&
          t.from < t.to;

        ) {
          t.countback && (t.countback = t.countback - r),
            "earliestFirst" === this._limitedServerResponse.expectedOrder
              ? (t.from = Math.round(e.bars[e.bars.length - 1].time / 1e3))
              : (t.to = Math.round(e.bars[0].time / 1e3));
          const s = await this._requester.sendRequest(
              this._datafeedUrl,
              "history",
              t
            ),
            i = this._processHistoryResponse(s);
          (r = i.bars.length),
            "earliestFirst" === this._limitedServerResponse.expectedOrder
              ? e.bars.push(...i.bars)
              : e.bars.unshift(...i.bars);
        }
      } catch (e) {
        if (e instanceof Error || "string" == typeof e) {
          const t = s(e);
          console.warn(
            `HistoryProvider: getBars() warning during followup request, error=${t}`
          );
        }
      }
    }
    _processHistoryResponse(e) {
      if ("ok" !== e.s && "no_data" !== e.s) throw new Error(e.errmsg);
      const s = [],
        t = { noData: !1 };
      if ("no_data" === e.s) (t.noData = !0), (t.nextTime = e.nextTime);
      else {
        const t = void 0 !== e.v,
          r = void 0 !== e.o;
        for (let i = 0; i < e.t.length; ++i) {
          const o = {
            time: 1e3 * e.t[i],
            close: parseFloat(e.c[i]),
            open: parseFloat(e.c[i]),
            high: parseFloat(e.c[i]),
            low: parseFloat(e.c[i]),
          };
          r &&
            ((o.open = parseFloat(e.o[i])),
            (o.high = parseFloat(e.h[i])),
            (o.low = parseFloat(e.l[i]))),
            t && (o.volume = parseFloat(e.v[i])),
            s.push(o);
        }
      }
      return { bars: s, meta: t };
    }
  }
  class r {
    constructor(e, s) {
      (this._subscribers = {}),
        (this._requestsPending = 0),
        (this._historyProvider = e),
        setInterval(this._updateData.bind(this), s);
    }
    subscribeBars(e, s, t, r) {
      this._subscribers.hasOwnProperty(r) ||
        ((this._subscribers[r] = {
          lastBarTime: null,
          listener: t,
          resolution: s,
          symbolInfo: e,
        }),
        e.name);
    }
    unsubscribeBars(e) {
      delete this._subscribers[e];
    }
    _updateData() {
      if (!(this._requestsPending > 0)) {
        this._requestsPending = 0;
        for (const e in this._subscribers)
          (this._requestsPending += 1),
            this._updateDataForSubscriber(e)
              .then(() => {
                (this._requestsPending -= 1), this._requestsPending;
              })
              .catch((e) => {
                (this._requestsPending -= 1), s(e), this._requestsPending;
              });
      }
    }
    _updateDataForSubscriber(e) {
      const s = this._subscribers[e],
        t = parseInt((Date.now() / 1e3).toString()),
        r =
          t -
          (function (e, s) {
            let t = 0;
            t =
              "D" === e || "1D" === e
                ? s
                : "M" === e || "1M" === e
                ? 31 * s
                : "W" === e || "1W" === e
                ? 7 * s
                : (s * parseInt(e)) / 1440;
            return 24 * t * 60 * 60;
          })(s.resolution, 10);
      return this._historyProvider
        .getBars(s.symbolInfo, s.resolution, {
          from: r,
          to: t,
          countBack: 2,
          firstDataRequest: !1,
        })
        .then((s) => {
          this._onSubscriberDataReceived(e, s);
        });
    }
    _onSubscriberDataReceived(e, s) {
      if (!this._subscribers.hasOwnProperty(e)) return;
      const t = s.bars;
      if (0 === t.length) return;
      const r = t[t.length - 1],
        i = this._subscribers[e];
      if (null !== i.lastBarTime && r.time < i.lastBarTime) return;
      if (null !== i.lastBarTime && r.time > i.lastBarTime) {
        if (t.length < 2)
          throw new Error(
            "Not enough bars in history for proper pulse update. Need at least 2."
          );
        const e = t[t.length - 2];
        i.listener(e);
      }
      (i.lastBarTime = r.time), i.listener(r);
    }
  }
  class i {
    constructor(e) {
      (this._subscribers = {}),
        (this._requestsPending = 0),
        (this._timers = null),
        (this._quotesProvider = e);
    }
    subscribeQuotes(e, s, t, r) {
      (this._subscribers[r] = { symbols: e, fastSymbols: s, listener: t }),
        this._createTimersIfRequired();
    }
    unsubscribeQuotes(e) {
      delete this._subscribers[e],
        0 === Object.keys(this._subscribers).length && this._destroyTimers();
    }
    _createTimersIfRequired() {
      if (null === this._timers) {
        const e = setInterval(this._updateQuotes.bind(this, 1), 1e4),
          s = setInterval(this._updateQuotes.bind(this, 0), 6e4);
        this._timers = { fastTimer: e, generalTimer: s };
      }
    }
    _destroyTimers() {
      null !== this._timers &&
        (clearInterval(this._timers.fastTimer),
        clearInterval(this._timers.generalTimer),
        (this._timers = null));
    }
    _updateQuotes(e) {
      if (!(this._requestsPending > 0))
        for (const t in this._subscribers) {
          this._requestsPending++;
          const r = this._subscribers[t];
          this._quotesProvider
            .getQuotes(1 === e ? r.fastSymbols : r.symbols)
            .then((e) => {
              this._requestsPending--,
                this._subscribers.hasOwnProperty(t) &&
                  (r.listener(e), this._requestsPending);
            })
            .catch((e) => {
              this._requestsPending--, s(e), this._requestsPending;
            });
        }
    }
  }
  function o(e, s, t, r) {
    const i = e[s];
    return !Array.isArray(i) || (r && !Array.isArray(i[0])) ? i : i[t];
  }
  function n(e, s, t) {
    return (
      e +
      (void 0 !== s ? "_%|#|%_" + s : "") +
      (void 0 !== t ? "_%|#|%_" + t : "")
    );
  }
  class a {
    constructor(e, s, t) {
      (this._exchangesList = ["NYSE", "FOREX", "AMEX"]),
        (this._symbolsInfo = {}),
        (this._symbolsList = []),
        (this._datafeedUrl = e),
        (this._datafeedSupportedResolutions = s),
        (this._requester = t),
        (this._readyPromise = this._init()),
        this._readyPromise.catch((e) => {
          console.error(`SymbolsStorage: Cannot init, error=${e.toString()}`);
        });
    }
    resolveSymbol(e, s, t) {
      return this._readyPromise.then(() => {
        const r = this._symbolsInfo[n(e, s, t)];
        return void 0 === r
          ? Promise.reject("invalid symbol")
          : Promise.resolve(r);
      });
    }
    searchSymbols(e, s, t, r) {
      return this._readyPromise.then(() => {
        const i = [],
          o = 0 === e.length;
        e = e.toUpperCase();
        for (const r of this._symbolsList) {
          const n = this._symbolsInfo[r];
          if (void 0 === n) continue;
          if (t.length > 0 && n.type !== t) continue;
          if (s && s.length > 0 && n.exchange !== s) continue;
          const a = n.name.toUpperCase().indexOf(e),
            l = n.description.toUpperCase().indexOf(e);
          if (o || a >= 0 || l >= 0) {
            if (!i.some((e) => e.symbolInfo === n)) {
              const e = a >= 0 ? a : 8e3 + l;
              i.push({ symbolInfo: n, weight: e });
            }
          }
        }
        const n = i
          .sort((e, s) => e.weight - s.weight)
          .slice(0, r)
          .map((e) => {
            const s = e.symbolInfo;
            return {
              symbol: s.name,
              full_name: s.full_name,
              description: s.description,
              exchange: s.exchange,
              params: [],
              type: s.type,
              ticker: s.name,
            };
          });
        return Promise.resolve(n);
      });
    }
    _init() {
      const e = [],
        s = {};
      for (const t of this._exchangesList)
        s[t] || ((s[t] = !0), e.push(this._requestExchangeData(t)));
      return Promise.all(e).then(() => {
        this._symbolsList.sort();
      });
    }
    _requestExchangeData(e) {
      return new Promise((t, r) => {
        this._requester
          .sendRequest(this._datafeedUrl, "symbol_info", { group: e })
          .then((s) => {
            try {
              this._onExchangeDataReceived(e, s);
            } catch (e) {
              return void r(
                e instanceof Error
                  ? e
                  : new Error(`SymbolsStorage: Unexpected exception ${e}`)
              );
            }
            t();
          })
          .catch((e) => {
            s(e), t();
          });
      });
    }
    _onExchangeDataReceived(e, s) {
      let t = 0;
      try {
        const e = s.symbol.length,
          r = void 0 !== s.ticker;
        for (; t < e; ++t) {
          const e = s.symbol[t],
            i = o(s, "exchange-listed", t),
            a = o(s, "exchange-traded", t),
            u = a + ":" + e,
            c = o(s, "currency-code", t),
            h = o(s, "unit-id", t),
            d = r ? o(s, "ticker", t) : e,
            _ = {
              ticker: d,
              name: e,
              base_name: [i + ":" + e],
              full_name: u,
              listed_exchange: i,
              exchange: a,
              currency_code: c,
              original_currency_code: o(s, "original-currency-code", t),
              unit_id: h,
              original_unit_id: o(s, "original-unit-id", t),
              unit_conversion_types: o(s, "unit-conversion-types", t, !0),
              description: o(s, "description", t),
              has_intraday: l(o(s, "has-intraday", t), !1),
              has_no_volume: l(o(s, "has-no-volume", t), void 0),
              visible_plots_set: l(o(s, "visible-plots-set", t), void 0),
              minmov: o(s, "minmovement", t) || o(s, "minmov", t) || 0,
              minmove2: o(s, "minmove2", t) || o(s, "minmov2", t),
              fractional: o(s, "fractional", t),
              pricescale: o(s, "pricescale", t),
              type: o(s, "type", t),
              session: o(s, "session-regular", t),
              session_holidays: o(s, "session-holidays", t),
              corrections: o(s, "corrections", t),
              timezone: o(s, "timezone", t),
              supported_resolutions: l(
                o(s, "supported-resolutions", t, !0),
                this._datafeedSupportedResolutions
              ),
              has_daily: l(o(s, "has-daily", t), !0),
              intraday_multipliers: l(o(s, "intraday-multipliers", t, !0), [
                "1",
                "5",
                "15",
                "30",
                "60",
              ]),
              has_weekly_and_monthly: o(s, "has-weekly-and-monthly", t),
              has_empty_bars: o(s, "has-empty-bars", t),
              volume_precision: l(o(s, "volume-precision", t), 0),
              format: "price",
            };
          (this._symbolsInfo[d] = _),
            (this._symbolsInfo[e] = _),
            (this._symbolsInfo[u] = _),
            (void 0 === c && void 0 === h) ||
              ((this._symbolsInfo[n(d, c, h)] = _),
              (this._symbolsInfo[n(e, c, h)] = _),
              (this._symbolsInfo[n(u, c, h)] = _)),
            this._symbolsList.push(e);
        }
      } catch (r) {
        throw new Error(
          `SymbolsStorage: API error when processing exchange ${e} symbol #${t} (${
            s.symbol[t]
          }): ${Object(r).message}`
        );
      }
    }
  }
  function l(e, s) {
    return void 0 !== e ? e : s;
  }
  function u(e, s, t) {
    const r = e[s];
    return Array.isArray(r) ? r[t] : r;
  }
  class c {
    constructor(e, s, o, n = 1e4, a) {
      (this._configuration = {
        supports_search: !1,
        supports_group_request: !0,
        supported_resolutions: ["1", "5", "15", "30", "60", "1D", "1W", "1M"],
        supports_marks: !1,
        supports_timescale_marks: !1,
      }),
        (this._symbolsStorage = null),
        (this._datafeedURL = e),
        (this._requester = o),
        (this._historyProvider = new t(e, this._requester, a)),
        (this._quotesProvider = s),
        (this._dataPulseProvider = new r(this._historyProvider, n)),
        (this._quotesPulseProvider = new i(this._quotesProvider)),
        (this._configurationReadyPromise = this._requestConfiguration().then(
          (e) => {
            null === e &&
              (e = {
                supports_search: !1,
                supports_group_request: !0,
                supported_resolutions: [
                  "1",
                  "5",
                  "15",
                  "30",
                  "60",
                  "1D",
                  "1W",
                  "1M",
                ],
                supports_marks: !1,
                supports_timescale_marks: !1,
              }),
              this._setupWithConfiguration(e);
          }
        ));
    }
    onReady(e) {
      this._configurationReadyPromise.then(() => {
        e(this._configuration);
      });
    }
    getQuotes(e, s, t) {
      this._quotesProvider.getQuotes(e).then(s).catch(t);
    }
    subscribeQuotes(e, s, t, r) {
      this._quotesPulseProvider.subscribeQuotes(e, s, t, r);
    }
    unsubscribeQuotes(e) {
      this._quotesPulseProvider.unsubscribeQuotes(e);
    }
    getMarks(e, t, r, i, o) {
      if (!this._configuration.supports_marks) return;
      const n = { symbol: e.ticker || "", from: t, to: r, resolution: o };
      this._send("marks", n)
        .then((e) => {
          if (!Array.isArray(e)) {
            const s = [];
            for (let t = 0; t < e.id.length; ++t)
              s.push({
                id: u(e, "id", t),
                time: u(e, "time", t),
                color: u(e, "color", t),
                text: u(e, "text", t),
                label: u(e, "label", t),
                labelFontColor: u(e, "labelFontColor", t),
                minSize: u(e, "minSize", t),
              });
            e = s;
          }
          i(e);
        })
        .catch((e) => {
          s(e), i([]);
        });
    }
    getTimescaleMarks(e, t, r, i, o) {
      if (!this._configuration.supports_timescale_marks) return;
      const n = { symbol: e.ticker || "", from: t, to: r, resolution: o };
      this._send("timescale_marks", n)
        .then((e) => {
          if (!Array.isArray(e)) {
            const s = [];
            for (let t = 0; t < e.id.length; ++t)
              s.push({
                id: u(e, "id", t),
                time: u(e, "time", t),
                color: u(e, "color", t),
                label: u(e, "label", t),
                tooltip: u(e, "tooltip", t),
              });
            e = s;
          }
          i(e);
        })
        .catch((e) => {
          s(e), i([]);
        });
    }
    getServerTime(e) {
      this._configuration.supports_time &&
        this._send("time")
          .then((s) => {
            const t = parseInt(s);
            isNaN(t) || e(t);
          })
          .catch((e) => {
            s(e);
          });
    }
    searchSymbols(e, t, r, i) {
      if (this._configuration.supports_search) {
        const o = { limit: 30, query: e.toUpperCase(), type: r, exchange: t };
        this._send("search", o)
          .then((e) => {
            if (void 0 !== e.s) return e.errmsg, void i([]);
            i(e);
          })
          .catch((e) => {
            s(e), i([]);
          });
      } else {
        if (null === this._symbolsStorage)
          throw new Error(
            "UdfCompatibleDatafeed: inconsistent configuration (symbols storage)"
          );
        this._symbolsStorage
          .searchSymbols(e, t, r, 30)
          .then(i)
          .catch(i.bind(null, []));
      }
    }
    resolveSymbol(e, t, r, i) {
      const o = i && i.currencyCode,
        n = i && i.unitId;
      function a(e) {
        t(e);
      }
      if (this._configuration.supports_group_request) {
        if (null === this._symbolsStorage)
          throw new Error(
            "UdfCompatibleDatafeed: inconsistent configuration (symbols storage)"
          );
        this._symbolsStorage.resolveSymbol(e, o, n).then(a).catch(r);
      } else {
        const t = { symbol: e };
        void 0 !== o && (t.currencyCode = o),
          void 0 !== n && (t.unitId = n),
          this._send("symbols", t)
            .then((e) => {
              var s,
                t,
                i,
                o,
                n,
                l,
                u,
                c,
                h,
                d,
                _,
                m,
                p,
                y,
                b,
                f,
                g,
                v,
                P,
                q,
                w,
                S,
                x,
                R,
                k,
                I,
                D,
                T,
                B;
              if (void 0 !== e.s) r("unknown_symbol");
              else {
                const r = e.name,
                  U =
                    null !== (s = e.listed_exchange) && void 0 !== s
                      ? s
                      : e["exchange-listed"],
                  C =
                    null !== (t = e.exchange) && void 0 !== t
                      ? t
                      : e["exchange-traded"],
                  E =
                    null !== (i = e.full_name) && void 0 !== i
                      ? i
                      : `${C}:${r}`;
                a({
                  ...e,
                  name: r,
                  base_name: [U + ":" + r],
                  full_name: E,
                  listed_exchange: U,
                  exchange: C,
                  currency_code:
                    null !== (o = e.currency_code) && void 0 !== o
                      ? o
                      : e["currency-code"],
                  original_currency_code:
                    null !== (n = e.original_currency_code) && void 0 !== n
                      ? n
                      : e["original-currency-code"],
                  unit_id:
                    null !== (l = e.unit_id) && void 0 !== l ? l : e["unit-id"],
                  original_unit_id:
                    null !== (u = e.original_unit_id) && void 0 !== u
                      ? u
                      : e["original-unit-id"],
                  unit_conversion_types:
                    null !== (c = e.unit_conversion_types) && void 0 !== c
                      ? c
                      : e["unit-conversion-types"],
                  has_intraday:
                    null !==
                      (d =
                        null !== (h = e.has_intraday) && void 0 !== h
                          ? h
                          : e["has-intraday"]) &&
                    void 0 !== d &&
                    d,
                  has_no_volume:
                    null !== (_ = e.has_no_volume) && void 0 !== _
                      ? _
                      : e["has-no-volume"],
                  visible_plots_set:
                    null !== (m = e.visible_plots_set) && void 0 !== m
                      ? m
                      : e["visible-plots-set"],
                  minmov:
                    null !==
                      (y =
                        null !== (p = e.minmovement) && void 0 !== p
                          ? p
                          : e.minmov) && void 0 !== y
                      ? y
                      : 0,
                  minmove2:
                    null !==
                      (f =
                        null !== (b = e.minmovement2) && void 0 !== b
                          ? b
                          : e.minmove2) && void 0 !== f
                      ? f
                      : e.minmov2,
                  session:
                    null !== (g = e.session) && void 0 !== g
                      ? g
                      : e["session-regular"],
                  session_holidays:
                    null !== (v = e.session_holidays) && void 0 !== v
                      ? v
                      : e["session-holidays"],
                  supported_resolutions:
                    null !==
                      (w =
                        null !==
                          (q =
                            null !== (P = e.supported_resolutions) &&
                            void 0 !== P
                              ? P
                              : e["supported-resolutions"]) && void 0 !== q
                          ? q
                          : this._configuration.supported_resolutions) &&
                    void 0 !== w
                      ? w
                      : [],
                  has_daily:
                    null ===
                      (x =
                        null !== (S = e.has_daily) && void 0 !== S
                          ? S
                          : e["has-daily"]) ||
                    void 0 === x ||
                    x,
                  intraday_multipliers:
                    null !==
                      (k =
                        null !== (R = e.intraday_multipliers) && void 0 !== R
                          ? R
                          : e["intraday-multipliers"]) && void 0 !== k
                      ? k
                      : ["1", "5", "15", "30", "60"],
                  has_weekly_and_monthly:
                    null !== (I = e.has_weekly_and_monthly) && void 0 !== I
                      ? I
                      : e["has-weekly-and-monthly"],
                  has_empty_bars:
                    null !== (D = e.has_empty_bars) && void 0 !== D
                      ? D
                      : e["has-empty-bars"],
                  volume_precision:
                    null !== (T = e.volume_precision) && void 0 !== T
                      ? T
                      : e["volume-precision"],
                  format: null !== (B = e.format) && void 0 !== B ? B : "price",
                });
              }
            })
            .catch((e) => {
              s(e), r("unknown_symbol");
            });
      }
    }
    getBars(e, s, t, r, i) {
      this._historyProvider
        .getBars(e, s, t)
        .then((e) => {
          r(e.bars, e.meta);
        })
        .catch(i);
    }
    subscribeBars(e, s, t, r, i) {
      this._dataPulseProvider.subscribeBars(e, s, t, r);
    }
    unsubscribeBars(e) {
      this._dataPulseProvider.unsubscribeBars(e);
    }
    _requestConfiguration() {
      return this._send("config").catch((e) => (s(e), null));
    }
    _send(e, s) {
      return this._requester.sendRequest(this._datafeedURL, e, s);
    }
    _setupWithConfiguration(e) {
      if (
        ((this._configuration = e),
        void 0 === e.exchanges && (e.exchanges = []),
        !e.supports_search && !e.supports_group_request)
      )
        throw new Error(
          "Unsupported datafeed configuration. Must either support search, or support group request"
        );
      (!e.supports_group_request && e.supports_search) ||
        (this._symbolsStorage = new a(
          this._datafeedURL,
          e.supported_resolutions || [],
          this._requester
        )),
        JSON.stringify(e);
    }
  }
  class h {
    constructor(e, s) {
      (this._datafeedUrl = e), (this._requester = s);
    }
    getQuotes(e) {
      return new Promise((t, r) => {
        this._requester
          .sendRequest(this._datafeedUrl, "quotes", { symbols: e })
          .then((e) => {
            "ok" === e.s ? t(e.d) : r(e.errmsg);
          })
          .catch((e) => {
            const t = s(e);
            r(`network error: ${t}`);
          });
      });
    }
  }
  class d {
    constructor(e) {
      e && (this._headers = e);
    }
    sendRequest(e, s, t) {
      if (void 0 !== t) {
        const e = Object.keys(t);
        0 !== e.length && (s += "?"),
          (s += e
            .map(
              (e) =>
                `${encodeURIComponent(e)}=${encodeURIComponent(
                  t[e].toString()
                )}`
            )
            .join("&"));
      }
      const r = { credentials: "same-origin" };
      return (
        void 0 !== this._headers && (r.headers = this._headers),
        fetch(`${e}/${s}`, r)
          .then((e) => e.text())
          .then((e) => JSON.parse(e))
      );
    }
  }
  (e.UDFCompatibleDatafeed = class extends c {
    constructor(e, s = 1e4, t) {
      const r = new d();
      super(e, new h(e, r), r, s, t);
    }
  }),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
