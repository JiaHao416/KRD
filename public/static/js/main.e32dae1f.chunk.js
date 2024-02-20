(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    25: function (t, e, r) {
      t.exports = {
        hrStyle: "abouts_hrStyle__C00n3",
        textStyle: "abouts_textStyle__3u2k-",
        contentStyle: "abouts_contentStyle__20oGY",
        informationView: "abouts_informationView__3FxZz",
        imgView: "abouts_imgView__2Jk3P",
        contentView: "abouts_contentView__3c5Hl",
      };
    },
    33: function (t, e, r) {
      t.exports = {
        hrStyle: "footer_hrStyle__1JSil",
        textStyle: "footer_textStyle__SXX1q",
        contentStyle: "footer_contentStyle__37wuH",
        informationView: "footer_informationView__3pJu7",
        footerStyle: "footer_footerStyle__2QwYC",
      };
    },
    36: function (t, e, r) {
      t.exports = {
        sideMenu: "sidemenu_sideMenu__3uGaa",
        sideMenuTitle: "sidemenu_sideMenuTitle__NlzZg",
        sideMenuItemText: "sidemenu_sideMenuItemText__1WuRx",
      };
    },
    46: function (t, e, r) {
      t.exports = {
        navBarView: "navbar_navBarView__2resb",
        logoView: "navbar_logoView__1eGc6",
        offcanvasView: "navbar_offcanvasView__qzJ4L",
        navLinkText: "navbar_navLinkText__1ct4Z",
      };
    },
    47: function (t, e, r) {
      t.exports = {
        card: "productview_card__QazSr",
        cardImg: "productview_cardImg__2vnk4",
        productContainer: "productview_productContainer__17vdU",
        productTitle: "productview_productTitle__3GWgG",
        cardText: "productview_cardText__2Qqxf",
      };
    },
    73: function (t, e, r) {
      t.exports = {
        text: "homepage_text__3Rhd4",
        logoView: "homepage_logoView__BSjGZ",
        carousel: "homepage_carousel__1vVPJ",
        carouselImg: "homepage_carouselImg__20AhL",
      };
    },
    74: function (t, e, r) {
      t.exports = {
        main: "layout_main__1LdtB",
        productPage: "layout_productPage__6quQM",
      };
    },
    77: function (t, e, r) {
      t.exports = r(97);
    },
    85: function (t, e, r) {},
    87: function (t, e, r) {},
    97: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(0),
        o = r.n(n),
        a = r(75),
        i = r.n(a),
        c = (r(85), r(86), r(87), r(5)),
        u = r(10),
        l = r(4),
        s = r(73),
        f = r.n(s),
        h = r(74),
        p = r.n(h),
        y = r(106),
        v = r(100),
        d = r(107),
        m = r(76),
        g = r(46),
        w = r.n(g),
        b = r(104).a.create({
          baseURL: "https://api.airtable.com",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "Bearer pat0ruS9AklJZMZMA.a33d42da398c69bb9cca2b4ac46ff6072ec0cf6ae43bc734dcdab37f7f09f635",
          },
          timeout: 1e4,
        });
      function E() {
        E = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new T(n || []);
          return o(i, "_invoke", { value: k(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          L = x && x(x(P([])));
        L && L !== r && n.call(L, i) && (b = L);
        var _ = (w.prototype = m.prototype = Object.create(b));
        function j(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function O(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function k(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = N(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function N(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                N(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function G(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function T(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(S, this),
            this.reset(!0);
        }
        function P(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(_, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(_)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          j(O.prototype),
          l(O.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = O),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new O(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          j(_),
          l(_, u, "Generator"),
          l(_, i, function () {
            return this;
          }),
          l(_, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = P),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(G),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), G(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    G(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: P(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      b.interceptors.response.use(
        function (t) {
          return t;
        },
        function (t) {
          var e = t.response;
          return (function (t) {
            var e = t.message,
              r = t.data,
              n = t.status;
            return Promise.reject({ message: e, data: r, status: n });
          })({ data: e.data, status: e.status });
        }
      );
      var x = "appXM676mFCoRKKBF";
      function L(t, e) {
        return _.apply(this, arguments);
      }
      function _() {
        return (_ = Object(u.a)(
          E().mark(function t(e, r) {
            var n, o;
            return E().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (n = "https://api.airtable.com/v0/"
                          .concat(x, "/")
                          .concat(e, "?view=")
                          .concat(encodeURIComponent(r))),
                        (t.next = 4),
                        b.get(n)
                      );
                    case 4:
                      return (o = t.sent), t.abrupt("return", o.data.records);
                    case 8:
                      return (
                        (t.prev = 8),
                        (t.t0 = t.catch(0)),
                        console.error(
                          "Error fetching data from Airtable (".concat(e, "):"),
                          t.t0
                        ),
                        t.abrupt("return", t.t0)
                      );
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 8]]
            );
          })
        )).apply(this, arguments);
      }
      function j() {
        j = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new T(n || []);
          return o(i, "_invoke", { value: k(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(P([])));
        x && x !== r && n.call(x, i) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function O(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function k(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = N(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function N(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                N(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function G(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function T(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(S, this),
            this.reset(!0);
        }
        function P(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          _(O.prototype),
          l(O.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = O),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new O(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          _(L),
          l(L, u, "Generator"),
          l(L, i, function () {
            return this;
          }),
          l(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = P),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(G),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), G(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    G(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: P(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var O = function () {
          var t = Object(c.n)(),
            e = Object(n.useState)([]),
            r = Object(l.a)(e, 2),
            a = r[0],
            i = r[1],
            s = Object(n.useState)(""),
            f = Object(l.a)(s, 2),
            h = f[0],
            p = f[1];
          return (
            Object(n.useEffect)(function () {
              function t() {
                return (t = Object(u.a)(
                  j().mark(function t() {
                    var e;
                    return j().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), L("logo", "data");
                          case 2:
                            (e = t.sent), p(e[0].fields.img);
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )).apply(this, arguments);
              }
              function e() {
                return (e = Object(u.a)(
                  j().mark(function t() {
                    var e;
                    return j().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), L("navigation", "data");
                          case 2:
                            (e = t.sent), i(e);
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                t.apply(this, arguments);
              })(),
                (function () {
                  e.apply(this, arguments);
                })();
            }, []),
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(
                y.a,
                {
                  expand: "xl",
                  className: "".concat(w.a.navBarView, " w-100"),
                  sticky: !0,
                },
                o.a.createElement(
                  v.a,
                  { fluid: !0 },
                  o.a.createElement(
                    y.a.Brand,
                    {
                      onClick: function () {
                        t("/");
                      },
                    },
                    "" !== h &&
                      o.a.createElement(
                        d.a.Link,
                        null,
                        o.a.createElement("img", {
                          src: h,
                          className: "".concat(
                            w.a.logoView,
                            " d-inline-block align-top"
                          ),
                          alt: "logo",
                        })
                      )
                  ),
                  o.a.createElement(y.a.Toggle, {
                    "aria-controls": "offcanvasNavbar-expand",
                  }),
                  o.a.createElement(
                    y.a.Offcanvas,
                    {
                      id: "offcanvasNavbar-expand",
                      "aria-labelledby": "offcanvasNavbarLabel-expand",
                      placement: "start",
                      className: w.a.offcanvasView,
                    },
                    o.a.createElement(
                      m.a.Body,
                      null,
                      o.a.createElement(
                        d.a,
                        { className: "justify-content-start flex-grow-1 pe-3" },
                        a.map(function (e, r) {
                          return o.a.createElement(
                            d.a.Link,
                            {
                              key: r,
                              className: "".concat(
                                w.a.navLinkText,
                                " d-flex justify-content-center"
                              ),
                              onClick: function () {
                                t(e.fields.path);
                              },
                            },
                            e.fields.title
                          );
                        })
                      ),
                      o.a.createElement(
                        d.a,
                        { className: "justify-content-end flex-grow-1 pe-3" },
                        o.a.createElement(
                          d.a.Link,
                          {
                            className: "".concat(
                              w.a.navLinkText,
                              " d-flex justify-content-center"
                            ),
                            onClick: function () {
                              t("/abouts");
                            },
                          },
                          "\u5546\u5e97\u4ecb\u7d39"
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        k = r(33),
        N = r.n(k);
      var S = function () {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "footer",
              {
                className:
                  "mt-auto w-100 d-flex row justify-content-center align-items-center",
              },
              o.a.createElement(
                "div",
                {
                  className: "".concat(
                    N.a.footerStyle,
                    " d-flex row justify-content-center align-items-center"
                  ),
                },
                o.a.createElement("hr", {
                  className: "".concat(N.a.hrStyle, " my-4"),
                }),
                o.a.createElement(
                  "p",
                  { className: "".concat(N.a.textStyle, " text-center") },
                  "\u806f\u7d61\u6211\u5011"
                ),
                o.a.createElement(
                  "div",
                  {
                    className: "".concat(
                      N.a.informationView,
                      " d-flex row justify-content-center align-items-center mt-2 mb-5"
                    ),
                  },
                  o.a.createElement(
                    "div",
                    { className: N.a.contentStyle },
                    "\u5730\u5740 / 411 \u53f0\u4e2d\u5e02\u592a\u5e73\u5340\u6c38\u5e73\u8def320\u4e4b1\u865f"
                  ),
                  o.a.createElement(
                    "div",
                    { className: N.a.contentStyle },
                    "\u96fb\u8a71 / (04) 22798787"
                  ),
                  o.a.createElement(
                    "div",
                    { className: N.a.contentStyle },
                    "\u670d\u52d9\u6642\u9593 / 09:00 AM ~ 17:30 PM (\u4f8b\u3001\u5047\u65e5\u4f11\u606f)"
                  )
                )
              )
            )
          );
        },
        G = r(36),
        T = r.n(G),
        P = r(101);
      function F() {
        F = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new G(n || []);
          return o(i, "_invoke", { value: O(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(T([])));
        x && x !== r && n.call(x, i) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = k(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                k(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function N(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function G(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(N, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          _(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new j(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          _(L),
          l(L, u, "Generator"),
          l(L, i, function () {
            return this;
          }),
          l(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (G.prototype = {
            constructor: G,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var I = function (t) {
        var e = Object(c.n)(),
          r = Object(n.useState)([]),
          a = Object(l.a)(r, 2),
          i = a[0],
          s = a[1];
        return (
          Object(n.useEffect)(function () {
            function t() {
              return (t = Object(u.a)(
                F().mark(function t() {
                  var e;
                  return F().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), L("navigation", "data");
                        case 2:
                          (e = t.sent), s(e);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            !(function () {
              t.apply(this, arguments);
            })();
          }, []),
          o.a.createElement(
            "div",
            { className: "".concat(T.a.sideMenu, " d-lg-block d-none mt-5") },
            o.a.createElement(
              P.a,
              { vertical: !0 },
              o.a.createElement(function () {
                return o.a.createElement(
                  "div",
                  {
                    className: "d-flex col mb-2 ".concat(
                      T.a.sideMenuTitleContainer
                    ),
                  },
                  o.a.createElement(
                    d.a.Link,
                    {
                      className: T.a.sideMenuTitle,
                      onClick: function () {
                        e("/all-products");
                      },
                    },
                    "\u5168\u90e8\u5546\u54c1\xa0"
                  ),
                  o.a.createElement("p", { className: T.a.sideMenuTitle }, "/"),
                  o.a.createElement(
                    d.a.Link,
                    {
                      className: T.a.sideMenuTitle,
                      onClick: function () {
                        window.location.reload();
                      },
                    },
                    "\xa0",
                    t.title
                  )
                );
              }, null),
              o.a.createElement(function () {
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  i.map(function (t, r) {
                    return o.a.createElement(
                      d.a.Link,
                      {
                        key: r,
                        className: "".concat(
                          T.a.sideMenuItemText,
                          " d-flex justify-content-center my-2"
                        ),
                        onClick: function () {
                          e(t.fields.path);
                        },
                      },
                      t.fields.title
                    );
                  })
                );
              }, null)
            )
          )
        );
      };
      var A = function (t) {
          return o.a.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                alignItems: "center",
                minHeight: "100vh",
                width: "100%",
                position: "relative",
              },
            },
            o.a.createElement(O, null),
            o.a.createElement(function () {
              return o.a.createElement(
                o.a.Fragment,
                null,
                t.showSideMenu
                  ? o.a.createElement(
                      "div",
                      {
                        className:
                          "h-100 w-100 d-flex row justify-content-center",
                      },
                      o.a.createElement(
                        "div",
                        { className: "".concat(p.a.main, " h-100 d-flex row") },
                        o.a.createElement(I, { title: t.title }),
                        o.a.createElement(
                          "div",
                          { className: "".concat(p.a.productPage) },
                          t.children
                        )
                      )
                    )
                  : o.a.createElement(o.a.Fragment, null, t.children)
              );
            }, null),
            o.a.createElement(S, null)
          );
        },
        M = r(109);
      function Y() {
        Y = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new G(n || []);
          return o(i, "_invoke", { value: O(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(T([])));
        x && x !== r && n.call(x, i) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = k(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                k(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function N(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function G(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(N, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          _(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new j(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          _(L),
          l(L, u, "Generator"),
          l(L, i, function () {
            return this;
          }),
          l(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (G.prototype = {
            constructor: G,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var C = function () {
          var t = Object(n.useState)([]),
            e = Object(l.a)(t, 2),
            r = e[0],
            a = e[1],
            i = Object(n.useState)([]),
            c = Object(l.a)(i, 2),
            s = c[0],
            h = c[1];
          function p(t) {
            return o.a.createElement(
              M.a,
              {
                controls: !1,
                indicators: !1,
                interval: 3e3,
                className: "h-25 w-100 my-5",
              },
              t.map(function (t, e) {
                return o.a.createElement(
                  M.a.Item,
                  {
                    key: e,
                    className: "".concat(
                      f.a.carouselImg,
                      "d-flex row justify-content-center bg-dark"
                    ),
                  },
                  o.a.createElement(
                    "div",
                    {
                      className:
                        "w-100 d-flex row justify-content-center bg-dark m-0",
                    },
                    o.a.createElement("img", {
                      className: "w-50",
                      src: t.fields.img_url,
                      alt: "",
                    })
                  )
                );
              })
            );
          }
          return (
            Object(n.useEffect)(function () {
              function t() {
                return (t = Object(u.a)(
                  Y().mark(function t() {
                    var e;
                    return Y().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), L("hot-products-1", "data");
                          case 2:
                            (e = t.sent), a(e);
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )).apply(this, arguments);
              }
              function e() {
                return (e = Object(u.a)(
                  Y().mark(function t() {
                    var e;
                    return Y().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), L("hot-products-2", "data");
                          case 2:
                            (e = t.sent), h(e);
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                t.apply(this, arguments);
              })(),
                (function () {
                  e.apply(this, arguments);
                })();
            }, []),
            o.a.createElement(
              A,
              { showSideMenu: !1 },
              o.a.createElement(
                "div",
                {
                  className: "".concat(
                    f.a.carousel,
                    " h-100 d-flex row justify-content-center"
                  ),
                },
                p(r),
                p(s)
              )
            )
          );
        },
        V = r(25),
        B = r.n(V),
        R = r(102),
        J = r(103);
      function z() {
        z = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new G(n || []);
          return o(i, "_invoke", { value: O(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(T([])));
        x && x !== r && n.call(x, i) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = k(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                k(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function N(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function G(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(N, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          _(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new j(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          _(L),
          l(L, u, "Generator"),
          l(L, i, function () {
            return this;
          }),
          l(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (G.prototype = {
            constructor: G,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var H = function () {
          var t = Object(n.useState)([]),
            e = Object(l.a)(t, 2),
            r = e[0],
            a = e[1];
          return (
            Object(n.useEffect)(function () {
              function t() {
                return (t = Object(u.a)(
                  z().mark(function t() {
                    var e;
                    return z().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), L("abouts", "data");
                          case 2:
                            (e = t.sent), a(e);
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                t.apply(this, arguments);
              })();
            }, []),
            o.a.createElement(
              A,
              null,
              o.a.createElement(
                "div",
                {
                  className:
                    "w-100 h-100 row justify-content-center align-items-center",
                },
                o.a.createElement(
                  "div",
                  {
                    className: "".concat(
                      B.a.contentView,
                      " d-flex row justify-content-center align-items-center mt-5 mx-0"
                    ),
                  },
                  o.a.createElement(
                    "p",
                    { className: "".concat(B.a.textStyle, " text-center") },
                    "\u5546\u5e97\u4ecb\u7d39"
                  ),
                  o.a.createElement(
                    "div",
                    { className: "".concat(B.a.contentStyle) },
                    "\u7fbd\u7a0b\u4f01\u696d\u793e"
                  ),
                  o.a.createElement(
                    "div",
                    { className: "".concat(B.a.contentStyle, " mb-5") },
                    "KRD MICGO "
                  ),
                  o.a.createElement(
                    "div",
                    { className: "w-100 m-0" },
                    o.a.createElement(
                      "p",
                      { className: "".concat(B.a.contentStyle) },
                      "\u670d\u52d9\u9805\u76ee"
                    ),
                    o.a.createElement(
                      R.a,
                      { sm: 2, lg: 3 },
                      0 !== r.length &&
                        r.map(function (t, e) {
                          return o.a.createElement(
                            J.a,
                            {
                              key: e,
                              xs: 6,
                              lg: 3,
                              className:
                                "d-flex row justify-content-center align-items-center",
                            },
                            o.a.createElement("img", {
                              src: t.fields.img_url,
                              className: "".concat(
                                B.a.imgView,
                                " d-inline-block align-top"
                              ),
                              alt: "",
                            }),
                            o.a.createElement(
                              "p",
                              {
                                className: "".concat(
                                  B.a.contentStyle,
                                  " text-center"
                                ),
                              },
                              t.fields.icon_name
                            )
                          );
                        })
                    )
                  ),
                  o.a.createElement(
                    "div",
                    { className: "".concat(B.a.contentStyle, " mt-5") },
                    "\u5730\u5740 \uff1a \u53f0\u4e2d\u5e02\u592a\u5e73\u5340\u6c38\u5e73\u8def320\u4e4b1\u865f"
                  ),
                  o.a.createElement(
                    "div",
                    { className: B.a.contentStyle },
                    "\u96fb\u8a71 \uff1a 04-22798787"
                  )
                )
              )
            )
          );
        },
        Z = r(47),
        D = r.n(Z),
        K = r(105),
        q = r(108);
      var Q = function (t) {
          return o.a.createElement(
            q.a,
            Object.assign({}, t, {
              size: "lg",
              centered: !0,
              "aria-labelledby": "contained-modal-title-vcenter",
            }),
            o.a.createElement(
              q.a.Body,
              null,
              o.a.createElement("img", {
                src: t.img,
                width: "100%",
                height: "50%",
                alt: "",
              })
            ),
            o.a.createElement(q.a.Footer, { className: "border-0" })
          );
        },
        U = function (t) {
          var e = t.show,
            r = t.onHide,
            n = t.img;
          return o.a.createElement(Q, { show: e, onHide: r, img: n });
        };
      var X = function (t) {
        var e = Object(n.useState)(!1),
          r = Object(l.a)(e, 2),
          a = r[0],
          i = r[1],
          c = Object(n.useState)(""),
          u = Object(l.a)(c, 2),
          s = u[0],
          f = u[1];
        return (
          Object(n.useEffect)(
            function () {
              "" !== s && i(!0);
            },
            [s]
          ),
          o.a.createElement(
            "div",
            { className: "".concat(D.a.productContainer) },
            o.a.createElement(
              "div",
              { className: "".concat(D.a.productTitle, " mb-5") },
              t.title
            ),
            o.a.createElement(
              R.a,
              { sm: 2, lg: 3 },
              0 !== t.products.length &&
                t.products.map(function (t, e) {
                  return o.a.createElement(
                    J.a,
                    { key: e, xs: 6, md: 4, className: "mb-4" },
                    o.a.createElement(
                      K.a,
                      {
                        className: "".concat(
                          D.a.card,
                          " p-0 border border-5 d-flex row align-items-center text-center mx-2 h-100"
                        ),
                      },
                      o.a.createElement(K.a.Img, {
                        variant: "top",
                        src: t.fields.img_url,
                        className: "".concat(D.a.cardImg, " p-0"),
                        onClick: function () {
                          f(t.fields.img_url);
                        },
                      }),
                      o.a.createElement(
                        K.a.Body,
                        null,
                        o.a.createElement(
                          K.a.Text,
                          { className: "".concat(D.a.cardText) },
                          t.fields.product_name
                        )
                      )
                    )
                  );
                })
            ),
            o.a.createElement(U, {
              show: a,
              onHide: function () {
                return i(!1);
              },
              img: void 0 !== s && s,
            })
          )
        );
      };
      function W() {
        W = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new G(n || []);
          return o(i, "_invoke", { value: O(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(T([])));
        x && x !== r && n.call(x, i) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = k(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                k(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function N(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function G(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(N, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          _(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new j(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          _(L),
          l(L, u, "Generator"),
          l(L, i, function () {
            return this;
          }),
          l(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (G.prototype = {
            constructor: G,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var $ = function () {
        var t = Object(n.useState)([]),
          e = Object(l.a)(t, 2),
          r = e[0],
          a = e[1];
        return (
          Object(n.useEffect)(function () {
            function t() {
              return (t = Object(u.a)(
                W().mark(function t() {
                  var e;
                  return W().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), L("all-product", "data");
                        case 2:
                          (e = t.sent), a(e);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            !(function () {
              t.apply(this, arguments);
            })();
          }, []),
          o.a.createElement(
            A,
            { title: "\u6240\u6709\u5546\u54c1", showSideMenu: !0 },
            o.a.createElement(X, {
              title: "\u6240\u6709\u5546\u54c1",
              products: r,
            })
          )
        );
      };
      function tt() {
        tt = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new G(n || []);
          return o(i, "_invoke", { value: O(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(T([])));
        x && x !== r && n.call(x, i) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = k(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                k(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function N(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function G(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(N, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          _(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new j(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          _(L),
          l(L, u, "Generator"),
          l(L, i, function () {
            return this;
          }),
          l(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (G.prototype = {
            constructor: G,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var et = function () {
        var t = Object(n.useState)([]),
          e = Object(l.a)(t, 2),
          r = e[0],
          a = e[1];
        return (
          Object(n.useEffect)(function () {
            function t() {
              return (t = Object(u.a)(
                tt().mark(function t() {
                  var e;
                  return tt().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), L("new-product", "data");
                        case 2:
                          (e = t.sent), a(e);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            !(function () {
              t.apply(this, arguments);
            })();
          }, []),
          o.a.createElement(
            A,
            { title: "\u6700\u65b0\u5546\u54c1", showSideMenu: !0 },
            o.a.createElement(X, {
              title: "\u6700\u65b0\u5546\u54c1",
              products: r,
            })
          )
        );
      };
      function rt() {
        rt = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new G(n || []);
          return o(i, "_invoke", { value: O(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(T([])));
        x && x !== r && n.call(x, i) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = k(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                k(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function N(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function G(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(N, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          _(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new j(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          _(L),
          l(L, u, "Generator"),
          l(L, i, function () {
            return this;
          }),
          l(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (G.prototype = {
            constructor: G,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var nt = function () {
        var t = Object(n.useState)([]),
          e = Object(l.a)(t, 2),
          r = e[0],
          a = e[1];
        return (
          Object(n.useEffect)(function () {
            function t() {
              return (t = Object(u.a)(
                rt().mark(function t() {
                  var e;
                  return rt().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), L("micgo", "data");
                        case 2:
                          (e = t.sent), a(e);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            !(function () {
              t.apply(this, arguments);
            })();
          }, []),
          o.a.createElement(
            A,
            { title: "MICGO", showSideMenu: !0 },
            o.a.createElement(X, { title: "MICGO", products: r })
          )
        );
      };
      function ot() {
        ot = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new G(n || []);
          return o(i, "_invoke", { value: O(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(T([])));
        x && x !== r && n.call(x, i) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = k(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                k(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function N(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function G(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(N, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          _(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new j(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          _(L),
          l(L, u, "Generator"),
          l(L, i, function () {
            return this;
          }),
          l(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (G.prototype = {
            constructor: G,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var at = function () {
        var t = Object(n.useState)([]),
          e = Object(l.a)(t, 2),
          r = e[0],
          a = e[1];
        return (
          Object(n.useEffect)(function () {
            function t() {
              return (t = Object(u.a)(
                ot().mark(function t() {
                  var e;
                  return ot().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), L("krd", "data");
                        case 2:
                          (e = t.sent), a(e);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            !(function () {
              t.apply(this, arguments);
            })();
          }, []),
          o.a.createElement(
            A,
            { title: "KRD", showSideMenu: !0 },
            o.a.createElement(X, { title: "KRD", products: r })
          )
        );
      };
      function it() {
        it = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new G(n || []);
          return o(i, "_invoke", { value: O(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(T([])));
        x && x !== r && n.call(x, i) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = k(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                k(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function N(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function G(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(N, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          _(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new j(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          _(L),
          l(L, u, "Generator"),
          l(L, i, function () {
            return this;
          }),
          l(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (G.prototype = {
            constructor: G,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var ct = function () {
        var t = Object(n.useState)([]),
          e = Object(l.a)(t, 2),
          r = e[0],
          a = e[1];
        return (
          Object(n.useEffect)(function () {
            function t() {
              return (t = Object(u.a)(
                it().mark(function t() {
                  var e;
                  return it().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), L("wired-micphone", "data");
                        case 2:
                          (e = t.sent), a(e);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            !(function () {
              t.apply(this, arguments);
            })();
          }, []),
          o.a.createElement(
            A,
            { title: "\u6709\u7dda\u9ea5\u514b\u98a8", showSideMenu: !0 },
            o.a.createElement(X, {
              title: "\u6709\u7dda\u9ea5\u514b\u98a8",
              products: r,
            })
          )
        );
      };
      function ut() {
        ut = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new G(n || []);
          return o(i, "_invoke", { value: O(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(T([])));
        x && x !== r && n.call(x, i) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = k(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                k(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function N(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function G(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(N, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          _(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new j(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          _(L),
          l(L, u, "Generator"),
          l(L, i, function () {
            return this;
          }),
          l(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (G.prototype = {
            constructor: G,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var lt = function () {
        var t = Object(n.useState)([]),
          e = Object(l.a)(t, 2),
          r = e[0],
          a = e[1];
        return (
          Object(n.useEffect)(function () {
            function t() {
              return (t = Object(u.a)(
                ut().mark(function t() {
                  var e;
                  return ut().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), L("wireless-micphone", "data");
                        case 2:
                          (e = t.sent), a(e);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            !(function () {
              t.apply(this, arguments);
            })();
          }, []),
          o.a.createElement(
            A,
            { title: "\u7121\u7dda\u9ea5\u514b\u98a8", showSideMenu: !0 },
            o.a.createElement(X, {
              title: "\u7121\u7dda\u9ea5\u514b\u98a8",
              products: r,
            })
          )
        );
      };
      function st() {
        st = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new G(n || []);
          return o(i, "_invoke", { value: O(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(T([])));
        x && x !== r && n.call(x, i) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = k(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                k(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function N(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function G(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(N, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          _(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new j(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          _(L),
          l(L, u, "Generator"),
          l(L, i, function () {
            return this;
          }),
          l(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (G.prototype = {
            constructor: G,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var ft = function () {
        var t = Object(n.useState)([]),
          e = Object(l.a)(t, 2),
          r = e[0],
          a = e[1];
        return (
          Object(n.useEffect)(function () {
            function t() {
              return (t = Object(u.a)(
                st().mark(function t() {
                  var e;
                  return st().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), L("trumpet", "data");
                        case 2:
                          (e = t.sent), a(e);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            !(function () {
              t.apply(this, arguments);
            })();
          }, []),
          o.a.createElement(
            A,
            { title: "\u64f4\u5927\u6a5f / \u5587\u53ed", showSideMenu: !0 },
            o.a.createElement(X, {
              title: "\u64f4\u5927\u6a5f / \u5587\u53ed",
              products: r,
            })
          )
        );
      };
      function ht() {
        ht = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, "");
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var a = e && e.prototype instanceof m ? e : m,
            i = Object.create(a.prototype),
            c = new G(n || []);
          return o(i, "_invoke", { value: O(t, r, c) }), i;
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        e.wrap = s;
        var h = "suspendedStart",
          p = "suspendedYield",
          y = "executing",
          v = "completed",
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        l(b, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(T([])));
        x && x !== r && n.call(x, i) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function _(t) {
          ["next", "throw", "return"].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ("throw" !== u.type) {
              var l = u.arg,
                s = l.value;
              return s && "object" == typeof s && n.call(s, "__await")
                ? e.resolve(s.__await).then(
                    function (t) {
                      r("next", t, i, c);
                    },
                    function (t) {
                      r("throw", t, i, c);
                    }
                  )
                : e.resolve(s).then(
                    function (t) {
                      (l.value = t), i(l);
                    },
                    function (t) {
                      return r("throw", t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(e, r, n) {
          var o = h;
          return function (a, i) {
            if (o === y) throw new Error("Generator is already running");
            if (o === v) {
              if ("throw" === a) throw i;
              return { value: t, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var c = n.delegate;
              if (c) {
                var u = k(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = y;
              var l = f(e, r, n);
              if ("normal" === l.type) {
                if (((o = n.done ? v : p), l.arg === d)) continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((o = v), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((r.method = "return"),
                (r.arg = t),
                k(e, r),
                "throw" === r.method)) ||
                ("return" !== n &&
                  ((r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(o, e.iterator, r.arg);
          if ("throw" === a.type)
            return (
              (r.method = "throw"), (r.arg = a.arg), (r.delegate = null), d
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((r[e.resultName] = i.value),
                (r.next = e.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                (r.delegate = null),
                d)
              : i
            : ((r.method = "throw"),
              (r.arg = new TypeError("iterator result is not an object")),
              (r.delegate = null),
              d);
        }
        function N(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function G(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(N, this),
            this.reset(!0);
        }
        function T(e) {
          if (e || "" === e) {
            var r = e[i];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return (
          (g.prototype = w),
          o(L, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: g, configurable: !0 }),
          (g.displayName = l(w, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), l(t, u, "GeneratorFunction")),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          _(j.prototype),
          l(j.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new j(s(t, r, n, o), a);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          _(L),
          l(L, u, "Generator"),
          l(L, i, function () {
            return this;
          }),
          l(L, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = T),
          (G.prototype = {
            constructor: G,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = "next"), (r.arg = t)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, "catchLoc"),
                    l = n.call(i, "finallyLoc");
                  if (u && l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: r, nextLoc: n }),
                "next" === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var pt = function () {
        var t = Object(n.useState)([]),
          e = Object(l.a)(t, 2),
          r = e[0],
          a = e[1];
        return (
          Object(n.useEffect)(function () {
            function t() {
              return (t = Object(u.a)(
                ht().mark(function t() {
                  var e;
                  return ht().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), L("accessories", "data");
                        case 2:
                          (e = t.sent), a(e);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )).apply(this, arguments);
            }
            !(function () {
              t.apply(this, arguments);
            })();
          }, []),
          o.a.createElement(
            A,
            { title: "\u914d\u4ef6", showSideMenu: !0 },
            o.a.createElement(X, { title: "\u914d\u4ef6", products: r })
          )
        );
      };
      var yt = function () {
          return o.a.createElement(
            c.c,
            null,
            o.a.createElement(c.a, {
              path: "/",
              element: o.a.createElement(C, null),
            }),
            o.a.createElement(c.a, {
              path: "/abouts",
              element: o.a.createElement(H, null),
            }),
            o.a.createElement(c.a, {
              path: "/all-products",
              element: o.a.createElement($, null),
            }),
            o.a.createElement(c.a, {
              path: "/new-products",
              element: o.a.createElement(et, null),
            }),
            o.a.createElement(c.a, {
              path: "/micgo-products",
              element: o.a.createElement(nt, null),
            }),
            o.a.createElement(c.a, {
              path: "/krd-products",
              element: o.a.createElement(at, null),
            }),
            o.a.createElement(c.a, {
              path: "/wired-micphone",
              element: o.a.createElement(ct, null),
            }),
            o.a.createElement(c.a, {
              path: "/wireless-micphone",
              element: o.a.createElement(lt, null),
            }),
            o.a.createElement(c.a, {
              path: "/trumpet",
              element: o.a.createElement(ft, null),
            }),
            o.a.createElement(c.a, {
              path: "/accessories",
              element: o.a.createElement(pt, null),
            })
          );
        },
        vt = function (t) {
          t &&
            t instanceof Function &&
            r
              .e(3)
              .then(r.bind(null, 110))
              .then(function (e) {
                var r = e.getCLS,
                  n = e.getFID,
                  o = e.getFCP,
                  a = e.getLCP,
                  i = e.getTTFB;
                r(t), n(t), o(t), a(t), i(t);
              });
        },
        dt = r(50),
        mt = document.getElementById("root");
      i.a
        .createRoot(mt)
        .render(o.a.createElement(dt.a, null, o.a.createElement(yt, null))),
        vt();
    },
  },
  [[77, 1, 2]],
]);
//# sourceMappingURL=main.e32dae1f.chunk.js.map
