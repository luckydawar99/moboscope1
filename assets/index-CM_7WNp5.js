function vy(i, o) {
  for (var r = 0; r < o.length; r++) {
    const c = o[r];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const f in c)
        if (f !== "default" && !(f in i)) {
          const d = Object.getOwnPropertyDescriptor(c, f);
          d &&
            Object.defineProperty(
              i,
              f,
              d.get
                ? d
                : {
                    enumerable: !0,
                    get: () => c[f],
                  },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(i, Symbol.toStringTag, {
      value: "Module",
    }),
  );
}
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f);
  new MutationObserver((f) => {
    for (const d of f)
      if (d.type === "childList")
        for (const y of d.addedNodes)
          y.tagName === "LINK" && y.rel === "modulepreload" && c(y);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function r(f) {
    const d = {};
    return (
      f.integrity && (d.integrity = f.integrity),
      f.referrerPolicy && (d.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function c(f) {
    if (f.ep) return;
    f.ep = !0;
    const d = r(f);
    fetch(f.href, d);
  }
})();
function eg(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var Ur = {
    exports: {},
  },
  Ri = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dh;
function xy() {
  if (dh) return Ri;
  dh = 1;
  var i = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.fragment");
  function r(c, f, d) {
    var y = null;
    if (
      (d !== void 0 && (y = "" + d),
      f.key !== void 0 && (y = "" + f.key),
      "key" in f)
    ) {
      d = {};
      for (var S in f) S !== "key" && (d[S] = f[S]);
    } else d = f;
    return (
      (f = d.ref),
      {
        $$typeof: i,
        type: c,
        key: y,
        ref: f !== void 0 ? f : null,
        props: d,
      }
    );
  }
  return ((Ri.Fragment = o), (Ri.jsx = r), (Ri.jsxs = r), Ri);
}
var mh;
function by() {
  return (mh || ((mh = 1), (Ur.exports = xy())), Ur.exports);
}
var g = by(),
  Br = {
    exports: {},
  },
  Di = {},
  Lr = {
    exports: {},
  },
  Yr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hh;
function Sy() {
  return (
    hh ||
      ((hh = 1),
      (function (i) {
        function o(N, L) {
          var _ = N.length;
          N.push(L);
          t: for (; 0 < _; ) {
            var it = (_ - 1) >>> 1,
              ct = N[it];
            if (0 < f(ct, L)) ((N[it] = L), (N[_] = ct), (_ = it));
            else break t;
          }
        }
        function r(N) {
          return N.length === 0 ? null : N[0];
        }
        function c(N) {
          if (N.length === 0) return null;
          var L = N[0],
            _ = N.pop();
          if (_ !== L) {
            N[0] = _;
            t: for (var it = 0, ct = N.length, E = ct >>> 1; it < E; ) {
              var B = 2 * (it + 1) - 1,
                U = N[B],
                X = B + 1,
                W = N[X];
              if (0 > f(U, _))
                X < ct && 0 > f(W, U)
                  ? ((N[it] = W), (N[X] = _), (it = X))
                  : ((N[it] = U), (N[B] = _), (it = B));
              else if (X < ct && 0 > f(W, _))
                ((N[it] = W), (N[X] = _), (it = X));
              else break t;
            }
          }
          return L;
        }
        function f(N, L) {
          var _ = N.sortIndex - L.sortIndex;
          return _ !== 0 ? _ : N.id - L.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          i.unstable_now = function () {
            return d.now();
          };
        } else {
          var y = Date,
            S = y.now();
          i.unstable_now = function () {
            return y.now() - S;
          };
        }
        var v = [],
          p = [],
          x = 1,
          m = null,
          T = 3,
          C = !1,
          M = !1,
          q = !1,
          V = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          P = typeof clearTimeout == "function" ? clearTimeout : null,
          J = typeof setImmediate < "u" ? setImmediate : null;
        function $(N) {
          for (var L = r(p); L !== null; ) {
            if (L.callback === null) c(p);
            else if (L.startTime <= N)
              (c(p), (L.sortIndex = L.expirationTime), o(v, L));
            else break;
            L = r(p);
          }
        }
        function I(N) {
          if (((q = !1), $(N), !M))
            if (r(v) !== null) ((M = !0), lt || ((lt = !0), gt()));
            else {
              var L = r(p);
              L !== null && bt(I, L.startTime - N);
            }
        }
        var lt = !1,
          Q = -1,
          Z = 5,
          mt = -1;
        function St() {
          return V ? !0 : !(i.unstable_now() - mt < Z);
        }
        function Ht() {
          if (((V = !1), lt)) {
            var N = i.unstable_now();
            mt = N;
            var L = !0;
            try {
              t: {
                ((M = !1), q && ((q = !1), P(Q), (Q = -1)), (C = !0));
                var _ = T;
                try {
                  e: {
                    for (
                      $(N), m = r(v);
                      m !== null && !(m.expirationTime > N && St());
                    ) {
                      var it = m.callback;
                      if (typeof it == "function") {
                        ((m.callback = null), (T = m.priorityLevel));
                        var ct = it(m.expirationTime <= N);
                        if (((N = i.unstable_now()), typeof ct == "function")) {
                          ((m.callback = ct), $(N), (L = !0));
                          break e;
                        }
                        (m === r(v) && c(v), $(N));
                      } else c(v);
                      m = r(v);
                    }
                    if (m !== null) L = !0;
                    else {
                      var E = r(p);
                      (E !== null && bt(I, E.startTime - N), (L = !1));
                    }
                  }
                  break t;
                } finally {
                  ((m = null), (T = _), (C = !1));
                }
                L = void 0;
              }
            } finally {
              L ? gt() : (lt = !1);
            }
          }
        }
        var gt;
        if (typeof J == "function")
          gt = function () {
            J(Ht);
          };
        else if (typeof MessageChannel < "u") {
          var pt = new MessageChannel(),
            vt = pt.port2;
          ((pt.port1.onmessage = Ht),
            (gt = function () {
              vt.postMessage(null);
            }));
        } else
          gt = function () {
            k(Ht, 0);
          };
        function bt(N, L) {
          Q = k(function () {
            N(i.unstable_now());
          }, L);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (i.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Z = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (i.unstable_next = function (N) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var L = 3;
                break;
              default:
                L = T;
            }
            var _ = T;
            T = L;
            try {
              return N();
            } finally {
              T = _;
            }
          }),
          (i.unstable_requestPaint = function () {
            V = !0;
          }),
          (i.unstable_runWithPriority = function (N, L) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var _ = T;
            T = N;
            try {
              return L();
            } finally {
              T = _;
            }
          }),
          (i.unstable_scheduleCallback = function (N, L, _) {
            var it = i.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay),
                  (_ = typeof _ == "number" && 0 < _ ? it + _ : it))
                : (_ = it),
              N)
            ) {
              case 1:
                var ct = -1;
                break;
              case 2:
                ct = 250;
                break;
              case 5:
                ct = 1073741823;
                break;
              case 4:
                ct = 1e4;
                break;
              default:
                ct = 5e3;
            }
            return (
              (ct = _ + ct),
              (N = {
                id: x++,
                callback: L,
                priorityLevel: N,
                startTime: _,
                expirationTime: ct,
                sortIndex: -1,
              }),
              _ > it
                ? ((N.sortIndex = _),
                  o(p, N),
                  r(v) === null &&
                    N === r(p) &&
                    (q ? (P(Q), (Q = -1)) : (q = !0), bt(I, _ - it)))
                : ((N.sortIndex = ct),
                  o(v, N),
                  M || C || ((M = !0), lt || ((lt = !0), gt()))),
              N
            );
          }),
          (i.unstable_shouldYield = St),
          (i.unstable_wrapCallback = function (N) {
            var L = T;
            return function () {
              var _ = T;
              T = L;
              try {
                return N.apply(this, arguments);
              } finally {
                T = _;
              }
            };
          }));
      })(Yr)),
    Yr
  );
}
var gh;
function Ey() {
  return (gh || ((gh = 1), (Lr.exports = Sy())), Lr.exports);
}
var qr = {
    exports: {},
  },
  dt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ph;
function wy() {
  if (ph) return dt;
  ph = 1;
  var i = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    y = Symbol.for("react.context"),
    S = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    m = Symbol.for("react.activity"),
    T = Symbol.iterator;
  function C(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (T && E[T]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    q = Object.assign,
    V = {};
  function k(E, B, U) {
    ((this.props = E),
      (this.context = B),
      (this.refs = V),
      (this.updater = U || M));
  }
  ((k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (E, B) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, B, "setState");
    }),
    (k.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function P() {}
  P.prototype = k.prototype;
  function J(E, B, U) {
    ((this.props = E),
      (this.context = B),
      (this.refs = V),
      (this.updater = U || M));
  }
  var $ = (J.prototype = new P());
  (($.constructor = J), q($, k.prototype), ($.isPureReactComponent = !0));
  var I = Array.isArray;
  function lt() {}
  var Q = {
      H: null,
      A: null,
      T: null,
      S: null,
    },
    Z = Object.prototype.hasOwnProperty;
  function mt(E, B, U) {
    var X = U.ref;
    return {
      $$typeof: i,
      type: E,
      key: B,
      ref: X !== void 0 ? X : null,
      props: U,
    };
  }
  function St(E, B) {
    return mt(E.type, B, E.props);
  }
  function Ht(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function gt(E) {
    var B = {
      "=": "=0",
      ":": "=2",
    };
    return (
      "$" +
      E.replace(/[=:]/g, function (U) {
        return B[U];
      })
    );
  }
  var pt = /\/+/g;
  function vt(E, B) {
    return typeof E == "object" && E !== null && E.key != null
      ? gt("" + E.key)
      : B.toString(36);
  }
  function bt(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(lt, lt)
            : ((E.status = "pending"),
              E.then(
                function (B) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = B));
                },
                function (B) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = B));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function N(E, B, U, X, W) {
    var st = typeof E;
    (st === "undefined" || st === "boolean") && (E = null);
    var at = !1;
    if (E === null) at = !0;
    else
      switch (st) {
        case "bigint":
        case "string":
        case "number":
          at = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case o:
              at = !0;
              break;
            case x:
              return ((at = E._init), N(at(E._payload), B, U, X, W));
          }
      }
    if (at)
      return (
        (W = W(E)),
        (at = X === "" ? "." + vt(E, 0) : X),
        I(W)
          ? ((U = ""),
            at != null && (U = at.replace(pt, "$&/") + "/"),
            N(W, B, U, "", function (ae) {
              return ae;
            }))
          : W != null &&
            (Ht(W) &&
              (W = St(
                W,
                U +
                  (W.key == null || (E && E.key === W.key)
                    ? ""
                    : ("" + W.key).replace(pt, "$&/") + "/") +
                  at,
              )),
            B.push(W)),
        1
      );
    at = 0;
    var ut = X === "" ? "." : X + ":";
    if (I(E))
      for (var Tt = 0; Tt < E.length; Tt++)
        ((X = E[Tt]), (st = ut + vt(X, Tt)), (at += N(X, B, U, st, W)));
    else if (((Tt = C(E)), typeof Tt == "function"))
      for (E = Tt.call(E), Tt = 0; !(X = E.next()).done; )
        ((X = X.value), (st = ut + vt(X, Tt++)), (at += N(X, B, U, st, W)));
    else if (st === "object") {
      if (typeof E.then == "function") return N(bt(E), B, U, X, W);
      throw (
        (B = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return at;
  }
  function L(E, B, U) {
    if (E == null) return E;
    var X = [],
      W = 0;
    return (
      N(E, X, "", "", function (st) {
        return B.call(U, st, W++);
      }),
      X
    );
  }
  function _(E) {
    if (E._status === -1) {
      var B = E._result;
      ((B = B()),
        B.then(
          function (U) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = U));
          },
          function (U) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = U));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = B)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var it =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var B = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" &&
                  E !== null &&
                  typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(B)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    ct = {
      map: L,
      forEach: function (E, B, U) {
        L(
          E,
          function () {
            B.apply(this, arguments);
          },
          U,
        );
      },
      count: function (E) {
        var B = 0;
        return (
          L(E, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (E) {
        return (
          L(E, function (B) {
            return B;
          }) || []
        );
      },
      only: function (E) {
        if (!Ht(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    };
  return (
    (dt.Activity = m),
    (dt.Children = ct),
    (dt.Component = k),
    (dt.Fragment = r),
    (dt.Profiler = f),
    (dt.PureComponent = J),
    (dt.StrictMode = c),
    (dt.Suspense = v),
    (dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q),
    (dt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return Q.H.useMemoCache(E);
      },
    }),
    (dt.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (dt.cacheSignal = function () {
      return null;
    }),
    (dt.cloneElement = function (E, B, U) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + ".",
        );
      var X = q({}, E.props),
        W = E.key;
      if (B != null)
        for (st in (B.key !== void 0 && (W = "" + B.key), B))
          !Z.call(B, st) ||
            st === "key" ||
            st === "__self" ||
            st === "__source" ||
            (st === "ref" && B.ref === void 0) ||
            (X[st] = B[st]);
      var st = arguments.length - 2;
      if (st === 1) X.children = U;
      else if (1 < st) {
        for (var at = Array(st), ut = 0; ut < st; ut++)
          at[ut] = arguments[ut + 2];
        X.children = at;
      }
      return mt(E.type, W, X);
    }),
    (dt.createContext = function (E) {
      return (
        (E = {
          $$typeof: y,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = {
          $$typeof: d,
          _context: E,
        }),
        E
      );
    }),
    (dt.createElement = function (E, B, U) {
      var X,
        W = {},
        st = null;
      if (B != null)
        for (X in (B.key !== void 0 && (st = "" + B.key), B))
          Z.call(B, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (W[X] = B[X]);
      var at = arguments.length - 2;
      if (at === 1) W.children = U;
      else if (1 < at) {
        for (var ut = Array(at), Tt = 0; Tt < at; Tt++)
          ut[Tt] = arguments[Tt + 2];
        W.children = ut;
      }
      if (E && E.defaultProps)
        for (X in ((at = E.defaultProps), at))
          W[X] === void 0 && (W[X] = at[X]);
      return mt(E, st, W);
    }),
    (dt.createRef = function () {
      return {
        current: null,
      };
    }),
    (dt.forwardRef = function (E) {
      return {
        $$typeof: S,
        render: E,
      };
    }),
    (dt.isValidElement = Ht),
    (dt.lazy = function (E) {
      return {
        $$typeof: x,
        _payload: {
          _status: -1,
          _result: E,
        },
        _init: _,
      };
    }),
    (dt.memo = function (E, B) {
      return {
        $$typeof: p,
        type: E,
        compare: B === void 0 ? null : B,
      };
    }),
    (dt.startTransition = function (E) {
      var B = Q.T,
        U = {};
      Q.T = U;
      try {
        var X = E(),
          W = Q.S;
        (W !== null && W(U, X),
          typeof X == "object" &&
            X !== null &&
            typeof X.then == "function" &&
            X.then(lt, it));
      } catch (st) {
        it(st);
      } finally {
        (B !== null && U.types !== null && (B.types = U.types), (Q.T = B));
      }
    }),
    (dt.unstable_useCacheRefresh = function () {
      return Q.H.useCacheRefresh();
    }),
    (dt.use = function (E) {
      return Q.H.use(E);
    }),
    (dt.useActionState = function (E, B, U) {
      return Q.H.useActionState(E, B, U);
    }),
    (dt.useCallback = function (E, B) {
      return Q.H.useCallback(E, B);
    }),
    (dt.useContext = function (E) {
      return Q.H.useContext(E);
    }),
    (dt.useDebugValue = function () {}),
    (dt.useDeferredValue = function (E, B) {
      return Q.H.useDeferredValue(E, B);
    }),
    (dt.useEffect = function (E, B) {
      return Q.H.useEffect(E, B);
    }),
    (dt.useEffectEvent = function (E) {
      return Q.H.useEffectEvent(E);
    }),
    (dt.useId = function () {
      return Q.H.useId();
    }),
    (dt.useImperativeHandle = function (E, B, U) {
      return Q.H.useImperativeHandle(E, B, U);
    }),
    (dt.useInsertionEffect = function (E, B) {
      return Q.H.useInsertionEffect(E, B);
    }),
    (dt.useLayoutEffect = function (E, B) {
      return Q.H.useLayoutEffect(E, B);
    }),
    (dt.useMemo = function (E, B) {
      return Q.H.useMemo(E, B);
    }),
    (dt.useOptimistic = function (E, B) {
      return Q.H.useOptimistic(E, B);
    }),
    (dt.useReducer = function (E, B, U) {
      return Q.H.useReducer(E, B, U);
    }),
    (dt.useRef = function (E) {
      return Q.H.useRef(E);
    }),
    (dt.useState = function (E) {
      return Q.H.useState(E);
    }),
    (dt.useSyncExternalStore = function (E, B, U) {
      return Q.H.useSyncExternalStore(E, B, U);
    }),
    (dt.useTransition = function () {
      return Q.H.useTransition();
    }),
    (dt.version = "19.2.1"),
    dt
  );
}
var yh;
function go() {
  return (yh || ((yh = 1), (qr.exports = wy())), qr.exports);
}
var Gr = {
    exports: {},
  },
  fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vh;
// function Ny() {
//   if (vh) return fe;
//   vh = 1;
//   var i = go();
//   function o(v) {
//     var p = "https://react.dev/errors/" + v;
//     if (1 < arguments.length) {
//       p += "?args[]=" + encodeURIComponent(arguments[1]);
//       for (var x = 2; x < arguments.length; x++)
//         p += "&args[]=" + encodeURIComponent(arguments[x]);
//     }
//     return (
//       "Minified React error #" +
//       v +
//       "; visit " +
//       p +
//       " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
//     );
//   }
//   function r() {}
//   var c = {
//       d: {
//         f: r,
//         r: function () {
//           throw Error(o(522));
//         },
//         D: r,
//         C: r,
//         L: r,
//         m: r,
//         X: r,
//         S: r,
//         M: r,
//       },
//       p: 0,
//       findDOMNode: null,
//     },
//     f = Symbol.for("react.portal");
//   function d(v, p, x) {
//     var m =
//       3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
//     return {
//       $$typeof: f,
//       key: m == null ? null : "" + m,
//       children: v,
//       containerInfo: p,
//       implementation: x,
//     };
//   }
//   var y = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
//   function S(v, p) {
//     if (v === "font") return "";
//     if (typeof p == "string") return p === "use-credentials" ? p : "";
//   }
//   return (
//     (fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
//     (fe.createPortal = function (v, p) {
//       var x =
//         2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
//       if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
//         throw Error(o(299));
//       return d(v, p, null, x);
//     }),
//     (fe.flushSync = function (v) {
//       var p = y.T,
//         x = c.p;
//       try {
//         if (((y.T = null), (c.p = 2), v)) return v();
//       } finally {
//         ((y.T = p), (c.p = x), c.d.f());
//       }
//     }),
//     (fe.preconnect = function (v, p) {
//       typeof v == "string" &&
//         (p
//           ? ((p = p.crossOrigin),
//             (p =
//               typeof p == "string"
//                 ? p === "use-credentials"
//                   ? p
//                   : ""
//                 : void 0))
//           : (p = null),
//         c.d.C(v, p));
//     }),
//     (fe.prefetchDNS = function (v) {
//       typeof v == "string" && c.d.D(v);
//     }),
//     (fe.preinit = function (v, p) {
//       if (typeof v == "string" && p && typeof p.as == "string") {
//         var x = p.as,
//           m = S(x, p.crossOrigin),
//           T = typeof p.integrity == "string" ? p.integrity : void 0,
//           C = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
//         x === "style"
//           ? c.d.S(v, typeof p.precedence == "string" ? p.precedence : void 0, {
//               crossOrigin: m,
//               integrity: T,
//               fetchPriority: C,
//             })
//           : x === "script" &&
//             c.d.X(v, {
//               crossOrigin: m,
//               integrity: T,
//               fetchPriority: C,
//               nonce: typeof p.nonce == "string" ? p.nonce : void 0,
//             });
//       }
//     }),
//     (fe.preinitModule = function (v, p) {
//       if (typeof v == "string")
//         if (typeof p == "object" && p !== null) {
//           if (p.as == null || p.as === "script") {
//             var x = S(p.as, p.crossOrigin);
//             c.d.M(v, {
//               crossOrigin: x,
//               integrity: typeof p.integrity == "string" ? p.integrity : void 0,
//               nonce: typeof p.nonce == "string" ? p.nonce : void 0,
//             });
//           }
//         } else p == null && c.d.M(v);
//     }),
//     (fe.preload = function (v, p) {
//       if (
//         typeof v == "string" &&
//         typeof p == "object" &&
//         p !== null &&
//         typeof p.as == "string"
//       ) {
//         var x = p.as,
//           m = S(x, p.crossOrigin);
//         c.d.L(v, x, {
//           crossOrigin: m,
//           integrity: typeof p.integrity == "string" ? p.integrity : void 0,
//           nonce: typeof p.nonce == "string" ? p.nonce : void 0,
//           type: typeof p.type == "string" ? p.type : void 0,
//           fetchPriority:
//             typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
//           referrerPolicy:
//             typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
//           imageSrcSet:
//             typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
//           imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
//           media: typeof p.media == "string" ? p.media : void 0,
//         });
//       }
//     }),
//     (fe.preloadModule = function (v, p) {
//       if (typeof v == "string")
//         if (p) {
//           var x = S(p.as, p.crossOrigin);
//           c.d.m(v, {
//             as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
//             crossOrigin: x,
//             integrity: typeof p.integrity == "string" ? p.integrity : void 0,
//           });
//         } else c.d.m(v);
//     }),
//     (fe.requestFormReset = function (v) {
//       c.d.r(v);
//     }),
//     (fe.unstable_batchedUpdates = function (v, p) {
//       return v(p);
//     }),
//     (fe.useFormState = function (v, p, x) {
//       return y.H.useFormState(v, p, x);
//     }),
//     (fe.useFormStatus = function () {
//       return y.H.useHostTransitionStatus();
//     }),
//     (fe.version = "19.2.1"),
//     fe
//   );
// }
var xh;
function ag() {
  if (xh) return Gr.exports;
  xh = 1;
  // function i() {
  //   if (
  //     !(
  //       typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
  //       typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
  //     )
  //   )
  //     try {
  //       __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
  //     } catch (o) {
  //       console.error(o);
  //     }
  // }
  return (i(), (Gr.exports = Ny()), Gr.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bh;
// function Ay() {
//   if (bh) return Di;
//   bh = 1;
//   var i = Ey(),
//     o = go(),
//     r = ag();
//   function c(t) {
//     var e = "https://react.dev/errors/" + t;
//     if (1 < arguments.length) {
//       e += "?args[]=" + encodeURIComponent(arguments[1]);
//       for (var a = 2; a < arguments.length; a++)
//         e += "&args[]=" + encodeURIComponent(arguments[a]);
//     }
//     return (
//       "Minified React error #" +
//       t +
//       "; visit " +
//       e +
//       " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
//     );
//   }
//   function f(t) {
//     return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
//   }
//   function d(t) {
//     var e = t,
//       a = t;
//     if (t.alternate) for (; e.return; ) e = e.return;
//     else {
//       t = e;
//       do ((e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return));
//       while (t);
//     }
//     return e.tag === 3 ? a : null;
//   }
//   function y(t) {
//     if (t.tag === 13) {
//       var e = t.memoizedState;
//       if (
//         (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
//         e !== null)
//       )
//         return e.dehydrated;
//     }
//     return null;
//   }
//   function S(t) {
//     if (t.tag === 31) {
//       var e = t.memoizedState;
//       if (
//         (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
//         e !== null)
//       )
//         return e.dehydrated;
//     }
//     return null;
//   }
//   function v(t) {
//     if (d(t) !== t) throw Error(c(188));
//   }
//   function p(t) {
//     var e = t.alternate;
//     if (!e) {
//       if (((e = d(t)), e === null)) throw Error(c(188));
//       return e !== t ? null : t;
//     }
//     for (var a = t, n = e; ; ) {
//       var l = a.return;
//       if (l === null) break;
//       var s = l.alternate;
//       if (s === null) {
//         if (((n = l.return), n !== null)) {
//           a = n;
//           continue;
//         }
//         break;
//       }
//       if (l.child === s.child) {
//         for (s = l.child; s; ) {
//           if (s === a) return (v(l), t);
//           if (s === n) return (v(l), e);
//           s = s.sibling;
//         }
//         throw Error(c(188));
//       }
//       if (a.return !== n.return) ((a = l), (n = s));
//       else {
//         for (var u = !1, h = l.child; h; ) {
//           if (h === a) {
//             ((u = !0), (a = l), (n = s));
//             break;
//           }
//           if (h === n) {
//             ((u = !0), (n = l), (a = s));
//             break;
//           }
//           h = h.sibling;
//         }
//         if (!u) {
//           for (h = s.child; h; ) {
//             if (h === a) {
//               ((u = !0), (a = s), (n = l));
//               break;
//             }
//             if (h === n) {
//               ((u = !0), (n = s), (a = l));
//               break;
//             }
//             h = h.sibling;
//           }
//           if (!u) throw Error(c(189));
//         }
//       }
//       if (a.alternate !== n) throw Error(c(190));
//     }
//     if (a.tag !== 3) throw Error(c(188));
//     return a.stateNode.current === a ? t : e;
//   }
//   function x(t) {
//     var e = t.tag;
//     if (e === 5 || e === 26 || e === 27 || e === 6) return t;
//     for (t = t.child; t !== null; ) {
//       if (((e = x(t)), e !== null)) return e;
//       t = t.sibling;
//     }
//     return null;
//   }
//   var m = Object.assign,
//     T = Symbol.for("react.element"),
//     C = Symbol.for("react.transitional.element"),
//     M = Symbol.for("react.portal"),
//     q = Symbol.for("react.fragment"),
//     V = Symbol.for("react.strict_mode"),
//     k = Symbol.for("react.profiler"),
//     P = Symbol.for("react.consumer"),
//     J = Symbol.for("react.context"),
//     $ = Symbol.for("react.forward_ref"),
//     I = Symbol.for("react.suspense"),
//     lt = Symbol.for("react.suspense_list"),
//     Q = Symbol.for("react.memo"),
//     Z = Symbol.for("react.lazy"),
//     mt = Symbol.for("react.activity"),
//     St = Symbol.for("react.memo_cache_sentinel"),
//     Ht = Symbol.iterator;
//   function gt(t) {
//     return t === null || typeof t != "object"
//       ? null
//       : ((t = (Ht && t[Ht]) || t["@@iterator"]),
//         typeof t == "function" ? t : null);
//   }
//   var pt = Symbol.for("react.client.reference");
//   function vt(t) {
//     if (t == null) return null;
//     if (typeof t == "function")
//       return t.$$typeof === pt ? null : t.displayName || t.name || null;
//     if (typeof t == "string") return t;
//     switch (t) {
//       case q:
//         return "Fragment";
//       case k:
//         return "Profiler";
//       case V:
//         return "StrictMode";
//       case I:
//         return "Suspense";
//       case lt:
//         return "SuspenseList";
//       case mt:
//         return "Activity";
//     }
//     if (typeof t == "object")
//       switch (t.$$typeof) {
//         case M:
//           return "Portal";
//         case J:
//           return t.displayName || "Context";
//         case P:
//           return (t._context.displayName || "Context") + ".Consumer";
//         case $:
//           var e = t.render;
//           return (
//             (t = t.displayName),
//             t ||
//               ((t = e.displayName || e.name || ""),
//               (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
//             t
//           );
//         case Q:
//           return (
//             (e = t.displayName || null),
//             e !== null ? e : vt(t.type) || "Memo"
//           );
//         case Z:
//           ((e = t._payload), (t = t._init));
//           try {
//             return vt(t(e));
//           } catch {}
//       }
//     return null;
//   }
//   var bt = Array.isArray,
//     N = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
//     L = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
//     _ = {
//       pending: !1,
//       data: null,
//       method: null,
//       action: null,
//     },
//     it = [],
//     ct = -1;
//   function E(t) {
//     return {
//       current: t,
//     };
//   }
//   function B(t) {
//     0 > ct || ((t.current = it[ct]), (it[ct] = null), ct--);
//   }
//   function U(t, e) {
//     (ct++, (it[ct] = t.current), (t.current = e));
//   }
//   var X = E(null),
//     W = E(null),
//     st = E(null),
//     at = E(null);
//   function ut(t, e) {
//     switch ((U(st, e), U(W, t), U(X, null), e.nodeType)) {
//       case 9:
//       case 11:
//         t = (t = e.documentElement) && (t = t.namespaceURI) ? Dm(t) : 0;
//         break;
//       default:
//         if (((t = e.tagName), (e = e.namespaceURI)))
//           ((e = Dm(e)), (t = Um(e, t)));
//         else
//           switch (t) {
//             case "svg":
//               t = 1;
//               break;
//             case "math":
//               t = 2;
//               break;
//             default:
//               t = 0;
//           }
//     }
//     (B(X), U(X, t));
//   }
//   function Tt() {
//     (B(X), B(W), B(st));
//   }
//   function ae(t) {
//     t.memoizedState !== null && U(at, t);
//     var e = X.current,
//       a = Um(e, t.type);
//     e !== a && (U(W, t), U(X, a));
//   }
//   function de(t) {
//     (W.current === t && (B(X), B(W)),
//       at.current === t && (B(at), (ji._currentValue = _)));
//   }
//   var ne, ha;
//   function We(t) {
//     if (ne === void 0)
//       try {
//         throw Error();
//       } catch (a) {
//         var e = a.stack.trim().match(/\n( *(at )?)/);
//         ((ne = (e && e[1]) || ""),
//           (ha =
//             -1 <
//             a.stack.indexOf(`
//     at`)
//               ? " (<anonymous>)"
//               : -1 < a.stack.indexOf("@")
//                 ? "@unknown:0:0"
//                 : ""));
//       }
//     return (
//       `
// ` +
//       ne +
//       t +
//       ha
//     );
//   }
//   var Yl = !1;
//   function kn(t, e) {
//     if (!t || Yl) return "";
//     Yl = !0;
//     var a = Error.prepareStackTrace;
//     Error.prepareStackTrace = void 0;
//     try {
//       var n = {
//         DetermineComponentFrameRoot: function () {
//           try {
//             if (e) {
//               var G = function () {
//                 throw Error();
//               };
//               if (
//                 (Object.defineProperty(G.prototype, "props", {
//                   set: function () {
//                     throw Error();
//                   },
//                 }),
//                 typeof Reflect == "object" && Reflect.construct)
//               ) {
//                 try {
//                   Reflect.construct(G, []);
//                 } catch (R) {
//                   var j = R;
//                 }
//                 Reflect.construct(t, [], G);
//               } else {
//                 try {
//                   G.call();
//                 } catch (R) {
//                   j = R;
//                 }
//                 t.call(G.prototype);
//               }
//             } else {
//               try {
//                 throw Error();
//               } catch (R) {
//                 j = R;
//               }
//               (G = t()) &&
//                 typeof G.catch == "function" &&
//                 G.catch(function () {});
//             }
//           } catch (R) {
//             if (R && j && typeof R.stack == "string") return [R.stack, j.stack];
//           }
//           return [null, null];
//         },
//       };
//       n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
//       var l = Object.getOwnPropertyDescriptor(
//         n.DetermineComponentFrameRoot,
//         "name",
//       );
//       l &&
//         l.configurable &&
//         Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
//           value: "DetermineComponentFrameRoot",
//         });
//       var s = n.DetermineComponentFrameRoot(),
//         u = s[0],
//         h = s[1];
//       if (u && h) {
//         var b = u.split(`
// `),
//           H = h.split(`
// `);
//         for (
//           l = n = 0;
//           n < b.length && !b[n].includes("DetermineComponentFrameRoot");
//         )
//           n++;
//         for (; l < H.length && !H[l].includes("DetermineComponentFrameRoot"); )
//           l++;
//         if (n === b.length || l === H.length)
//           for (
//             n = b.length - 1, l = H.length - 1;
//             1 <= n && 0 <= l && b[n] !== H[l];
//           )
//             l--;
//         for (; 1 <= n && 0 <= l; n--, l--)
//           if (b[n] !== H[l]) {
//             if (n !== 1 || l !== 1)
//               do
//                 if ((n--, l--, 0 > l || b[n] !== H[l])) {
//                   var D =
//                     `
// ` + b[n].replace(" at new ", " at ");
//                   return (
//                     t.displayName &&
//                       D.includes("<anonymous>") &&
//                       (D = D.replace("<anonymous>", t.displayName)),
//                     D
//                   );
//                 }
//               while (1 <= n && 0 <= l);
//             break;
//           }
//       }
//     } finally {
//       ((Yl = !1), (Error.prepareStackTrace = a));
//     }
//     return (a = t ? t.displayName || t.name : "") ? We(a) : "";
//   }
//   function gn(t, e) {
//     switch (t.tag) {
//       case 26:
//       case 27:
//       case 5:
//         return We(t.type);
//       case 16:
//         return We("Lazy");
//       case 13:
//         return t.child !== e && e !== null
//           ? We("Suspense Fallback")
//           : We("Suspense");
//       case 19:
//         return We("SuspenseList");
//       case 0:
//       case 15:
//         return kn(t.type, !1);
//       case 11:
//         return kn(t.type.render, !1);
//       case 1:
//         return kn(t.type, !0);
//       case 31:
//         return We("Activity");
//       default:
//         return "";
//     }
//   }
//   function ql(t) {
//     try {
//       var e = "",
//         a = null;
//       do ((e += gn(t, a)), (a = t), (t = t.return));
//       while (t);
//       return e;
//     } catch (n) {
//       return (
//         `
// Error generating stack: ` +
//         n.message +
//         `
// ` +
//         n.stack
//       );
//     }
//   }
//   var Oe = Object.prototype.hasOwnProperty,
//     Gl = i.unstable_scheduleCallback,
//     kl = i.unstable_cancelCallback,
//     me = i.unstable_shouldYield,
//     La = i.unstable_requestPaint,
//     he = i.unstable_now,
//     No = i.unstable_getCurrentPriorityLevel,
//     pn = i.unstable_ImmediatePriority,
//     Vi = i.unstable_UserBlockingPriority,
//     yn = i.unstable_NormalPriority,
//     Vl = i.unstable_LowPriority,
//     ga = i.unstable_IdlePriority,
//     Xi = i.log,
//     Ya = i.unstable_setDisableYieldValue,
//     vn = null,
//     ge = null;
//   function $e(t) {
//     if (
//       (typeof Xi == "function" && Ya(t),
//       ge && typeof ge.setStrictMode == "function")
//     )
//       try {
//         ge.setStrictMode(vn, t);
//       } catch {}
//   }
//   var re = Math.clz32 ? Math.clz32 : na,
//     Ao = Math.log,
//     Xl = Math.LN2;
//   function na(t) {
//     return ((t >>>= 0), t === 0 ? 32 : (31 - ((Ao(t) / Xl) | 0)) | 0);
//   }
//   var Vn = 256,
//     Xn = 262144,
//     xn = 4194304;
//   function la(t) {
//     var e = t & 42;
//     if (e !== 0) return e;
//     switch (t & -t) {
//       case 1:
//         return 1;
//       case 2:
//         return 2;
//       case 4:
//         return 4;
//       case 8:
//         return 8;
//       case 16:
//         return 16;
//       case 32:
//         return 32;
//       case 64:
//         return 64;
//       case 128:
//         return 128;
//       case 256:
//       case 512:
//       case 1024:
//       case 2048:
//       case 4096:
//       case 8192:
//       case 16384:
//       case 32768:
//       case 65536:
//       case 131072:
//         return t & 261888;
//       case 262144:
//       case 524288:
//       case 1048576:
//       case 2097152:
//         return t & 3932160;
//       case 4194304:
//       case 8388608:
//       case 16777216:
//       case 33554432:
//         return t & 62914560;
//       case 67108864:
//         return 67108864;
//       case 134217728:
//         return 134217728;
//       case 268435456:
//         return 268435456;
//       case 536870912:
//         return 536870912;
//       case 1073741824:
//         return 0;
//       default:
//         return t;
//     }
//   }
//   function ft(t, e, a) {
//     var n = t.pendingLanes;
//     if (n === 0) return 0;
//     var l = 0,
//       s = t.suspendedLanes,
//       u = t.pingedLanes;
//     t = t.warmLanes;
//     var h = n & 134217727;
//     return (
//       h !== 0
//         ? ((n = h & ~s),
//           n !== 0
//             ? (l = la(n))
//             : ((u &= h),
//               u !== 0
//                 ? (l = la(u))
//                 : a || ((a = h & ~t), a !== 0 && (l = la(a)))))
//         : ((h = n & ~s),
//           h !== 0
//             ? (l = la(h))
//             : u !== 0
//               ? (l = la(u))
//               : a || ((a = n & ~t), a !== 0 && (l = la(a)))),
//       l === 0
//         ? 0
//         : e !== 0 &&
//             e !== l &&
//             (e & s) === 0 &&
//             ((s = l & -l),
//             (a = e & -e),
//             s >= a || (s === 32 && (a & 4194048) !== 0))
//           ? e
//           : l
//     );
//   }
//   function qt(t, e) {
//     return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
//   }
//   function It(t, e) {
//     switch (t) {
//       case 1:
//       case 2:
//       case 4:
//       case 8:
//       case 64:
//         return e + 250;
//       case 16:
//       case 32:
//       case 128:
//       case 256:
//       case 512:
//       case 1024:
//       case 2048:
//       case 4096:
//       case 8192:
//       case 16384:
//       case 32768:
//       case 65536:
//       case 131072:
//       case 262144:
//       case 524288:
//       case 1048576:
//       case 2097152:
//         return e + 5e3;
//       case 4194304:
//       case 8388608:
//       case 16777216:
//       case 33554432:
//         return -1;
//       case 67108864:
//       case 134217728:
//       case 268435456:
//       case 536870912:
//       case 1073741824:
//         return -1;
//       default:
//         return -1;
//     }
//   }
//   function ue() {
//     var t = xn;
//     return ((xn <<= 1), (xn & 62914560) === 0 && (xn = 4194304), t);
//   }
//   function qa(t) {
//     for (var e = [], a = 0; 31 > a; a++) e.push(t);
//     return e;
//   }
//   function kt(t, e) {
//     ((t.pendingLanes |= e),
//       e !== 268435456 &&
//         ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
//   }
//   function ye(t, e, a, n, l, s) {
//     var u = t.pendingLanes;
//     ((t.pendingLanes = a),
//       (t.suspendedLanes = 0),
//       (t.pingedLanes = 0),
//       (t.warmLanes = 0),
//       (t.expiredLanes &= a),
//       (t.entangledLanes &= a),
//       (t.errorRecoveryDisabledLanes &= a),
//       (t.shellSuspendCounter = 0));
//     var h = t.entanglements,
//       b = t.expirationTimes,
//       H = t.hiddenUpdates;
//     for (a = u & ~a; 0 < a; ) {
//       var D = 31 - re(a),
//         G = 1 << D;
//       ((h[D] = 0), (b[D] = -1));
//       var j = H[D];
//       if (j !== null)
//         for (H[D] = null, D = 0; D < j.length; D++) {
//           var R = j[D];
//           R !== null && (R.lane &= -536870913);
//         }
//       a &= ~G;
//     }
//     (n !== 0 && bn(t, n, 0),
//       s !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(u & ~e)));
//   }
//   function bn(t, e, a) {
//     ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
//     var n = 31 - re(e);
//     ((t.entangledLanes |= e),
//       (t.entanglements[n] = t.entanglements[n] | 1073741824 | (a & 261930)));
//   }
//   function ve(t, e) {
//     var a = (t.entangledLanes |= e);
//     for (t = t.entanglements; a; ) {
//       var n = 31 - re(a),
//         l = 1 << n;
//       ((l & e) | (t[n] & e) && (t[n] |= e), (a &= ~l));
//     }
//   }
//   function xe(t, e) {
//     var a = e & -e;
//     return (
//       (a = (a & 42) !== 0 ? 1 : Qn(a)),
//       (a & (t.suspendedLanes | e)) !== 0 ? 0 : a
//     );
//   }
//   function Qn(t) {
//     switch (t) {
//       case 2:
//         t = 1;
//         break;
//       case 8:
//         t = 4;
//         break;
//       case 32:
//         t = 16;
//         break;
//       case 256:
//       case 512:
//       case 1024:
//       case 2048:
//       case 4096:
//       case 8192:
//       case 16384:
//       case 32768:
//       case 65536:
//       case 131072:
//       case 262144:
//       case 524288:
//       case 1048576:
//       case 2097152:
//       case 4194304:
//       case 8388608:
//       case 16777216:
//       case 33554432:
//         t = 128;
//         break;
//       case 268435456:
//         t = 134217728;
//         break;
//       default:
//         t = 0;
//     }
//     return t;
//   }
//   function Fe(t) {
//     return (
//       (t &= -t),
//       2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
//     );
//   }
//   function To() {
//     var t = L.p;
//     return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : ih(t.type));
//   }
//   function bu(t, e) {
//     var a = L.p;
//     try {
//       return ((L.p = t), e());
//     } finally {
//       L.p = a;
//     }
//   }
//   var Ga = Math.random().toString(36).slice(2),
//     le = "__reactFiber$" + Ga,
//     be = "__reactProps$" + Ga,
//     Zn = "__reactContainer$" + Ga,
//     zo = "__reactEvents$" + Ga,
//     op = "__reactListeners$" + Ga,
//     cp = "__reactHandles$" + Ga,
//     Su = "__reactResources$" + Ga,
//     Ql = "__reactMarker$" + Ga;
//   function Ho(t) {
//     (delete t[le], delete t[be], delete t[zo], delete t[op], delete t[cp]);
//   }
//   function Kn(t) {
//     var e = t[le];
//     if (e) return e;
//     for (var a = t.parentNode; a; ) {
//       if ((e = a[Zn] || a[le])) {
//         if (
//           ((a = e.alternate),
//           e.child !== null || (a !== null && a.child !== null))
//         )
//           for (t = Vm(t); t !== null; ) {
//             if ((a = t[le])) return a;
//             t = Vm(t);
//           }
//         return e;
//       }
//       ((t = a), (a = t.parentNode));
//     }
//     return null;
//   }
//   function Jn(t) {
//     if ((t = t[le] || t[Zn])) {
//       var e = t.tag;
//       if (
//         e === 5 ||
//         e === 6 ||
//         e === 13 ||
//         e === 31 ||
//         e === 26 ||
//         e === 27 ||
//         e === 3
//       )
//         return t;
//     }
//     return null;
//   }
//   function Zl(t) {
//     var e = t.tag;
//     if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
//     throw Error(c(33));
//   }
//   function Wn(t) {
//     var e = t[Su];
//     return (
//       e ||
//         (e = t[Su] =
//           {
//             hoistableStyles: new Map(),
//             hoistableScripts: new Map(),
//           }),
//       e
//     );
//   }
//   function te(t) {
//     t[Ql] = !0;
//   }
//   var Eu = new Set(),
//     wu = {};
//   function Sn(t, e) {
//     ($n(t, e), $n(t + "Capture", e));
//   }
//   function $n(t, e) {
//     for (wu[t] = e, t = 0; t < e.length; t++) Eu.add(e[t]);
//   }
//   var rp = RegExp(
//       "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
//     ),
//     Nu = {},
//     Au = {};
//   function up(t) {
//     return Oe.call(Au, t)
//       ? !0
//       : Oe.call(Nu, t)
//         ? !1
//         : rp.test(t)
//           ? (Au[t] = !0)
//           : ((Nu[t] = !0), !1);
//   }
//   function Qi(t, e, a) {
//     if (up(e))
//       if (a === null) t.removeAttribute(e);
//       else {
//         switch (typeof a) {
//           case "undefined":
//           case "function":
//           case "symbol":
//             t.removeAttribute(e);
//             return;
//           case "boolean":
//             var n = e.toLowerCase().slice(0, 5);
//             if (n !== "data-" && n !== "aria-") {
//               t.removeAttribute(e);
//               return;
//             }
//         }
//         t.setAttribute(e, "" + a);
//       }
//   }
//   function Zi(t, e, a) {
//     if (a === null) t.removeAttribute(e);
//     else {
//       switch (typeof a) {
//         case "undefined":
//         case "function":
//         case "symbol":
//         case "boolean":
//           t.removeAttribute(e);
//           return;
//       }
//       t.setAttribute(e, "" + a);
//     }
//   }
//   function pa(t, e, a, n) {
//     if (n === null) t.removeAttribute(a);
//     else {
//       switch (typeof n) {
//         case "undefined":
//         case "function":
//         case "symbol":
//         case "boolean":
//           t.removeAttribute(a);
//           return;
//       }
//       t.setAttributeNS(e, a, "" + n);
//     }
//   }
//   function Ye(t) {
//     switch (typeof t) {
//       case "bigint":
//       case "boolean":
//       case "number":
//       case "string":
//       case "undefined":
//         return t;
//       case "object":
//         return t;
//       default:
//         return "";
//     }
//   }
//   function Tu(t) {
//     var e = t.type;
//     return (
//       (t = t.nodeName) &&
//       t.toLowerCase() === "input" &&
//       (e === "checkbox" || e === "radio")
//     );
//   }
//   function fp(t, e, a) {
//     var n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
//     if (
//       !t.hasOwnProperty(e) &&
//       typeof n < "u" &&
//       typeof n.get == "function" &&
//       typeof n.set == "function"
//     ) {
//       var l = n.get,
//         s = n.set;
//       return (
//         Object.defineProperty(t, e, {
//           configurable: !0,
//           get: function () {
//             return l.call(this);
//           },
//           set: function (u) {
//             ((a = "" + u), s.call(this, u));
//           },
//         }),
//         Object.defineProperty(t, e, {
//           enumerable: n.enumerable,
//         }),
//         {
//           getValue: function () {
//             return a;
//           },
//           setValue: function (u) {
//             a = "" + u;
//           },
//           stopTracking: function () {
//             ((t._valueTracker = null), delete t[e]);
//           },
//         }
//       );
//     }
//   }
//   function Oo(t) {
//     if (!t._valueTracker) {
//       var e = Tu(t) ? "checked" : "value";
//       t._valueTracker = fp(t, e, "" + t[e]);
//     }
//   }
//   function zu(t) {
//     if (!t) return !1;
//     var e = t._valueTracker;
//     if (!e) return !0;
//     var a = e.getValue(),
//       n = "";
//     return (
//       t && (n = Tu(t) ? (t.checked ? "true" : "false") : t.value),
//       (t = n),
//       t !== a ? (e.setValue(t), !0) : !1
//     );
//   }
//   function Ki(t) {
//     if (
//       ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
//     )
//       return null;
//     try {
//       return t.activeElement || t.body;
//     } catch {
//       return t.body;
//     }
//   }
//   var dp = /[\n"\\]/g;
//   function qe(t) {
//     return t.replace(dp, function (e) {
//       return "\\" + e.charCodeAt(0).toString(16) + " ";
//     });
//   }
//   function jo(t, e, a, n, l, s, u, h) {
//     ((t.name = ""),
//       u != null &&
//       typeof u != "function" &&
//       typeof u != "symbol" &&
//       typeof u != "boolean"
//         ? (t.type = u)
//         : t.removeAttribute("type"),
//       e != null
//         ? u === "number"
//           ? ((e === 0 && t.value === "") || t.value != e) &&
//             (t.value = "" + Ye(e))
//           : t.value !== "" + Ye(e) && (t.value = "" + Ye(e))
//         : (u !== "submit" && u !== "reset") || t.removeAttribute("value"),
//       e != null
//         ? Co(t, u, Ye(e))
//         : a != null
//           ? Co(t, u, Ye(a))
//           : n != null && t.removeAttribute("value"),
//       l == null && s != null && (t.defaultChecked = !!s),
//       l != null &&
//         (t.checked = l && typeof l != "function" && typeof l != "symbol"),
//       h != null &&
//       typeof h != "function" &&
//       typeof h != "symbol" &&
//       typeof h != "boolean"
//         ? (t.name = "" + Ye(h))
//         : t.removeAttribute("name"));
//   }
//   function Hu(t, e, a, n, l, s, u, h) {
//     if (
//       (s != null &&
//         typeof s != "function" &&
//         typeof s != "symbol" &&
//         typeof s != "boolean" &&
//         (t.type = s),
//       e != null || a != null)
//     ) {
//       if (!((s !== "submit" && s !== "reset") || e != null)) {
//         Oo(t);
//         return;
//       }
//       ((a = a != null ? "" + Ye(a) : ""),
//         (e = e != null ? "" + Ye(e) : a),
//         h || e === t.value || (t.value = e),
//         (t.defaultValue = e));
//     }
//     ((n = n ?? l),
//       (n = typeof n != "function" && typeof n != "symbol" && !!n),
//       (t.checked = h ? t.checked : !!n),
//       (t.defaultChecked = !!n),
//       u != null &&
//         typeof u != "function" &&
//         typeof u != "symbol" &&
//         typeof u != "boolean" &&
//         (t.name = u),
//       Oo(t));
//   }
//   function Co(t, e, a) {
//     (e === "number" && Ki(t.ownerDocument) === t) ||
//       t.defaultValue === "" + a ||
//       (t.defaultValue = "" + a);
//   }
//   function Fn(t, e, a, n) {
//     if (((t = t.options), e)) {
//       e = {};
//       for (var l = 0; l < a.length; l++) e["$" + a[l]] = !0;
//       for (a = 0; a < t.length; a++)
//         ((l = e.hasOwnProperty("$" + t[a].value)),
//           t[a].selected !== l && (t[a].selected = l),
//           l && n && (t[a].defaultSelected = !0));
//     } else {
//       for (a = "" + Ye(a), e = null, l = 0; l < t.length; l++) {
//         if (t[l].value === a) {
//           ((t[l].selected = !0), n && (t[l].defaultSelected = !0));
//           return;
//         }
//         e !== null || t[l].disabled || (e = t[l]);
//       }
//       e !== null && (e.selected = !0);
//     }
//   }
//   function Ou(t, e, a) {
//     if (
//       e != null &&
//       ((e = "" + Ye(e)), e !== t.value && (t.value = e), a == null)
//     ) {
//       t.defaultValue !== e && (t.defaultValue = e);
//       return;
//     }
//     t.defaultValue = a != null ? "" + Ye(a) : "";
//   }
//   function ju(t, e, a, n) {
//     if (e == null) {
//       if (n != null) {
//         if (a != null) throw Error(c(92));
//         if (bt(n)) {
//           if (1 < n.length) throw Error(c(93));
//           n = n[0];
//         }
//         a = n;
//       }
//       (a == null && (a = ""), (e = a));
//     }
//     ((a = Ye(e)),
//       (t.defaultValue = a),
//       (n = t.textContent),
//       n === a && n !== "" && n !== null && (t.value = n),
//       Oo(t));
//   }
//   function Pn(t, e) {
//     if (e) {
//       var a = t.firstChild;
//       if (a && a === t.lastChild && a.nodeType === 3) {
//         a.nodeValue = e;
//         return;
//       }
//     }
//     t.textContent = e;
//   }
//   var mp = new Set(
//     "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
//       " ",
//     ),
//   );
//   function Cu(t, e, a) {
//     var n = e.indexOf("--") === 0;
//     a == null || typeof a == "boolean" || a === ""
//       ? n
//         ? t.setProperty(e, "")
//         : e === "float"
//           ? (t.cssFloat = "")
//           : (t[e] = "")
//       : n
//         ? t.setProperty(e, a)
//         : typeof a != "number" || a === 0 || mp.has(e)
//           ? e === "float"
//             ? (t.cssFloat = a)
//             : (t[e] = ("" + a).trim())
//           : (t[e] = a + "px");
//   }
//   function Mu(t, e, a) {
//     if (e != null && typeof e != "object") throw Error(c(62));
//     if (((t = t.style), a != null)) {
//       for (var n in a)
//         !a.hasOwnProperty(n) ||
//           (e != null && e.hasOwnProperty(n)) ||
//           (n.indexOf("--") === 0
//             ? t.setProperty(n, "")
//             : n === "float"
//               ? (t.cssFloat = "")
//               : (t[n] = ""));
//       for (var l in e)
//         ((n = e[l]), e.hasOwnProperty(l) && a[l] !== n && Cu(t, l, n));
//     } else for (var s in e) e.hasOwnProperty(s) && Cu(t, s, e[s]);
//   }
//   function Mo(t) {
//     if (t.indexOf("-") === -1) return !1;
//     switch (t) {
//       case "annotation-xml":
//       case "color-profile":
//       case "font-face":
//       case "font-face-src":
//       case "font-face-uri":
//       case "font-face-format":
//       case "font-face-name":
//       case "missing-glyph":
//         return !1;
//       default:
//         return !0;
//     }
//   }
//   var hp = new Map([
//       ["acceptCharset", "accept-charset"],
//       ["htmlFor", "for"],
//       ["httpEquiv", "http-equiv"],
//       ["crossOrigin", "crossorigin"],
//       ["accentHeight", "accent-height"],
//       ["alignmentBaseline", "alignment-baseline"],
//       ["arabicForm", "arabic-form"],
//       ["baselineShift", "baseline-shift"],
//       ["capHeight", "cap-height"],
//       ["clipPath", "clip-path"],
//       ["clipRule", "clip-rule"],
//       ["colorInterpolation", "color-interpolation"],
//       ["colorInterpolationFilters", "color-interpolation-filters"],
//       ["colorProfile", "color-profile"],
//       ["colorRendering", "color-rendering"],
//       ["dominantBaseline", "dominant-baseline"],
//       ["enableBackground", "enable-background"],
//       ["fillOpacity", "fill-opacity"],
//       ["fillRule", "fill-rule"],
//       ["floodColor", "flood-color"],
//       ["floodOpacity", "flood-opacity"],
//       ["fontFamily", "font-family"],
//       ["fontSize", "font-size"],
//       ["fontSizeAdjust", "font-size-adjust"],
//       ["fontStretch", "font-stretch"],
//       ["fontStyle", "font-style"],
//       ["fontVariant", "font-variant"],
//       ["fontWeight", "font-weight"],
//       ["glyphName", "glyph-name"],
//       ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
//       ["glyphOrientationVertical", "glyph-orientation-vertical"],
//       ["horizAdvX", "horiz-adv-x"],
//       ["horizOriginX", "horiz-origin-x"],
//       ["imageRendering", "image-rendering"],
//       ["letterSpacing", "letter-spacing"],
//       ["lightingColor", "lighting-color"],
//       ["markerEnd", "marker-end"],
//       ["markerMid", "marker-mid"],
//       ["markerStart", "marker-start"],
//       ["overlinePosition", "overline-position"],
//       ["overlineThickness", "overline-thickness"],
//       ["paintOrder", "paint-order"],
//       ["panose-1", "panose-1"],
//       ["pointerEvents", "pointer-events"],
//       ["renderingIntent", "rendering-intent"],
//       ["shapeRendering", "shape-rendering"],
//       ["stopColor", "stop-color"],
//       ["stopOpacity", "stop-opacity"],
//       ["strikethroughPosition", "strikethrough-position"],
//       ["strikethroughThickness", "strikethrough-thickness"],
//       ["strokeDasharray", "stroke-dasharray"],
//       ["strokeDashoffset", "stroke-dashoffset"],
//       ["strokeLinecap", "stroke-linecap"],
//       ["strokeLinejoin", "stroke-linejoin"],
//       ["strokeMiterlimit", "stroke-miterlimit"],
//       ["strokeOpacity", "stroke-opacity"],
//       ["strokeWidth", "stroke-width"],
//       ["textAnchor", "text-anchor"],
//       ["textDecoration", "text-decoration"],
//       ["textRendering", "text-rendering"],
//       ["transformOrigin", "transform-origin"],
//       ["underlinePosition", "underline-position"],
//       ["underlineThickness", "underline-thickness"],
//       ["unicodeBidi", "unicode-bidi"],
//       ["unicodeRange", "unicode-range"],
//       ["unitsPerEm", "units-per-em"],
//       ["vAlphabetic", "v-alphabetic"],
//       ["vHanging", "v-hanging"],
//       ["vIdeographic", "v-ideographic"],
//       ["vMathematical", "v-mathematical"],
//       ["vectorEffect", "vector-effect"],
//       ["vertAdvY", "vert-adv-y"],
//       ["vertOriginX", "vert-origin-x"],
//       ["vertOriginY", "vert-origin-y"],
//       ["wordSpacing", "word-spacing"],
//       ["writingMode", "writing-mode"],
//       ["xmlnsXlink", "xmlns:xlink"],
//       ["xHeight", "x-height"],
//     ]),
//     gp =
//       /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
//   function Ji(t) {
//     return gp.test("" + t)
//       ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
//       : t;
//   }
//   function ya() {}
//   var _o = null;
//   function Ro(t) {
//     return (
//       (t = t.target || t.srcElement || window),
//       t.correspondingUseElement && (t = t.correspondingUseElement),
//       t.nodeType === 3 ? t.parentNode : t
//     );
//   }
//   var In = null,
//     tl = null;
//   function _u(t) {
//     var e = Jn(t);
//     if (e && (t = e.stateNode)) {
//       var a = t[be] || null;
//       t: switch (((t = e.stateNode), e.type)) {
//         case "input":
//           if (
//             (jo(
//               t,
//               a.value,
//               a.defaultValue,
//               a.defaultValue,
//               a.checked,
//               a.defaultChecked,
//               a.type,
//               a.name,
//             ),
//             (e = a.name),
//             a.type === "radio" && e != null)
//           ) {
//             for (a = t; a.parentNode; ) a = a.parentNode;
//             for (
//               a = a.querySelectorAll(
//                 'input[name="' + qe("" + e) + '"][type="radio"]',
//               ),
//                 e = 0;
//               e < a.length;
//               e++
//             ) {
//               var n = a[e];
//               if (n !== t && n.form === t.form) {
//                 var l = n[be] || null;
//                 if (!l) throw Error(c(90));
//                 jo(
//                   n,
//                   l.value,
//                   l.defaultValue,
//                   l.defaultValue,
//                   l.checked,
//                   l.defaultChecked,
//                   l.type,
//                   l.name,
//                 );
//               }
//             }
//             for (e = 0; e < a.length; e++)
//               ((n = a[e]), n.form === t.form && zu(n));
//           }
//           break t;
//         case "textarea":
//           Ou(t, a.value, a.defaultValue);
//           break t;
//         case "select":
//           ((e = a.value), e != null && Fn(t, !!a.multiple, e, !1));
//       }
//     }
//   }
//   var Do = !1;
//   function Ru(t, e, a) {
//     if (Do) return t(e, a);
//     Do = !0;
//     try {
//       var n = t(e);
//       return n;
//     } finally {
//       if (
//         ((Do = !1),
//         (In !== null || tl !== null) &&
//           (Ds(), In && ((e = In), (t = tl), (tl = In = null), _u(e), t)))
//       )
//         for (e = 0; e < t.length; e++) _u(t[e]);
//     }
//   }
//   function Kl(t, e) {
//     var a = t.stateNode;
//     if (a === null) return null;
//     var n = a[be] || null;
//     if (n === null) return null;
//     a = n[e];
//     t: switch (e) {
//       case "onClick":
//       case "onClickCapture":
//       case "onDoubleClick":
//       case "onDoubleClickCapture":
//       case "onMouseDown":
//       case "onMouseDownCapture":
//       case "onMouseMove":
//       case "onMouseMoveCapture":
//       case "onMouseUp":
//       case "onMouseUpCapture":
//       case "onMouseEnter":
//         ((n = !n.disabled) ||
//           ((t = t.type),
//           (n = !(
//             t === "button" ||
//             t === "input" ||
//             t === "select" ||
//             t === "textarea"
//           ))),
//           (t = !n));
//         break t;
//       default:
//         t = !1;
//     }
//     if (t) return null;
//     if (a && typeof a != "function") throw Error(c(231, e, typeof a));
//     return a;
//   }
//   var va = !(
//       typeof window > "u" ||
//       typeof window.document > "u" ||
//       typeof window.document.createElement > "u"
//     ),
//     Uo = !1;
//   if (va)
//     try {
//       var Jl = {};
//       (Object.defineProperty(Jl, "passive", {
//         get: function () {
//           Uo = !0;
//         },
//       }),
//         window.addEventListener("test", Jl, Jl),
//         window.removeEventListener("test", Jl, Jl));
//     } catch {
//       Uo = !1;
//     }
//   var ka = null,
//     Bo = null,
//     Wi = null;
//   function Du() {
//     if (Wi) return Wi;
//     var t,
//       e = Bo,
//       a = e.length,
//       n,
//       l = "value" in ka ? ka.value : ka.textContent,
//       s = l.length;
//     for (t = 0; t < a && e[t] === l[t]; t++);
//     var u = a - t;
//     for (n = 1; n <= u && e[a - n] === l[s - n]; n++);
//     return (Wi = l.slice(t, 1 < n ? 1 - n : void 0));
//   }
//   function $i(t) {
//     var e = t.keyCode;
//     return (
//       "charCode" in t
//         ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
//         : (t = e),
//       t === 10 && (t = 13),
//       32 <= t || t === 13 ? t : 0
//     );
//   }
//   function Fi() {
//     return !0;
//   }
//   function Uu() {
//     return !1;
//   }
//   function Se(t) {
//     function e(a, n, l, s, u) {
//       ((this._reactName = a),
//         (this._targetInst = l),
//         (this.type = n),
//         (this.nativeEvent = s),
//         (this.target = u),
//         (this.currentTarget = null));
//       for (var h in t)
//         t.hasOwnProperty(h) && ((a = t[h]), (this[h] = a ? a(s) : s[h]));
//       return (
//         (this.isDefaultPrevented = (
//           s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
//         )
//           ? Fi
//           : Uu),
//         (this.isPropagationStopped = Uu),
//         this
//       );
//     }
//     return (
//       m(e.prototype, {
//         preventDefault: function () {
//           this.defaultPrevented = !0;
//           var a = this.nativeEvent;
//           a &&
//             (a.preventDefault
//               ? a.preventDefault()
//               : typeof a.returnValue != "unknown" && (a.returnValue = !1),
//             (this.isDefaultPrevented = Fi));
//         },
//         stopPropagation: function () {
//           var a = this.nativeEvent;
//           a &&
//             (a.stopPropagation
//               ? a.stopPropagation()
//               : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
//             (this.isPropagationStopped = Fi));
//         },
//         persist: function () {},
//         isPersistent: Fi,
//       }),
//       e
//     );
//   }
//   var En = {
//       eventPhase: 0,
//       bubbles: 0,
//       cancelable: 0,
//       timeStamp: function (t) {
//         return t.timeStamp || Date.now();
//       },
//       defaultPrevented: 0,
//       isTrusted: 0,
//     },
//     Pi = Se(En),
//     Wl = m({}, En, {
//       view: 0,
//       detail: 0,
//     }),
//     pp = Se(Wl),
//     Lo,
//     Yo,
//     $l,
//     Ii = m({}, Wl, {
//       screenX: 0,
//       screenY: 0,
//       clientX: 0,
//       clientY: 0,
//       pageX: 0,
//       pageY: 0,
//       ctrlKey: 0,
//       shiftKey: 0,
//       altKey: 0,
//       metaKey: 0,
//       getModifierState: Go,
//       button: 0,
//       buttons: 0,
//       relatedTarget: function (t) {
//         return t.relatedTarget === void 0
//           ? t.fromElement === t.srcElement
//             ? t.toElement
//             : t.fromElement
//           : t.relatedTarget;
//       },
//       movementX: function (t) {
//         return "movementX" in t
//           ? t.movementX
//           : (t !== $l &&
//               ($l && t.type === "mousemove"
//                 ? ((Lo = t.screenX - $l.screenX), (Yo = t.screenY - $l.screenY))
//                 : (Yo = Lo = 0),
//               ($l = t)),
//             Lo);
//       },
//       movementY: function (t) {
//         return "movementY" in t ? t.movementY : Yo;
//       },
//     }),
//     Bu = Se(Ii),
//     yp = m({}, Ii, {
//       dataTransfer: 0,
//     }),
//     vp = Se(yp),
//     xp = m({}, Wl, {
//       relatedTarget: 0,
//     }),
//     qo = Se(xp),
//     bp = m({}, En, {
//       animationName: 0,
//       elapsedTime: 0,
//       pseudoElement: 0,
//     }),
//     Sp = Se(bp),
//     Ep = m({}, En, {
//       clipboardData: function (t) {
//         return "clipboardData" in t ? t.clipboardData : window.clipboardData;
//       },
//     }),
//     wp = Se(Ep),
//     Np = m({}, En, {
//       data: 0,
//     }),
//     Lu = Se(Np),
//     Ap = {
//       Esc: "Escape",
//       Spacebar: " ",
//       Left: "ArrowLeft",
//       Up: "ArrowUp",
//       Right: "ArrowRight",
//       Down: "ArrowDown",
//       Del: "Delete",
//       Win: "OS",
//       Menu: "ContextMenu",
//       Apps: "ContextMenu",
//       Scroll: "ScrollLock",
//       MozPrintableKey: "Unidentified",
//     },
//     Tp = {
//       8: "Backspace",
//       9: "Tab",
//       12: "Clear",
//       13: "Enter",
//       16: "Shift",
//       17: "Control",
//       18: "Alt",
//       19: "Pause",
//       20: "CapsLock",
//       27: "Escape",
//       32: " ",
//       33: "PageUp",
//       34: "PageDown",
//       35: "End",
//       36: "Home",
//       37: "ArrowLeft",
//       38: "ArrowUp",
//       39: "ArrowRight",
//       40: "ArrowDown",
//       45: "Insert",
//       46: "Delete",
//       112: "F1",
//       113: "F2",
//       114: "F3",
//       115: "F4",
//       116: "F5",
//       117: "F6",
//       118: "F7",
//       119: "F8",
//       120: "F9",
//       121: "F10",
//       122: "F11",
//       123: "F12",
//       144: "NumLock",
//       145: "ScrollLock",
//       224: "Meta",
//     },
//     zp = {
//       Alt: "altKey",
//       Control: "ctrlKey",
//       Meta: "metaKey",
//       Shift: "shiftKey",
//     };
//   function Hp(t) {
//     var e = this.nativeEvent;
//     return e.getModifierState
//       ? e.getModifierState(t)
//       : (t = zp[t])
//         ? !!e[t]
//         : !1;
//   }
//   function Go() {
//     return Hp;
//   }
//   var Op = m({}, Wl, {
//       key: function (t) {
//         if (t.key) {
//           var e = Ap[t.key] || t.key;
//           if (e !== "Unidentified") return e;
//         }
//         return t.type === "keypress"
//           ? ((t = $i(t)), t === 13 ? "Enter" : String.fromCharCode(t))
//           : t.type === "keydown" || t.type === "keyup"
//             ? Tp[t.keyCode] || "Unidentified"
//             : "";
//       },
//       code: 0,
//       location: 0,
//       ctrlKey: 0,
//       shiftKey: 0,
//       altKey: 0,
//       metaKey: 0,
//       repeat: 0,
//       locale: 0,
//       getModifierState: Go,
//       charCode: function (t) {
//         return t.type === "keypress" ? $i(t) : 0;
//       },
//       keyCode: function (t) {
//         return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
//       },
//       which: function (t) {
//         return t.type === "keypress"
//           ? $i(t)
//           : t.type === "keydown" || t.type === "keyup"
//             ? t.keyCode
//             : 0;
//       },
//     }),
//     jp = Se(Op),
//     Cp = m({}, Ii, {
//       pointerId: 0,
//       width: 0,
//       height: 0,
//       pressure: 0,
//       tangentialPressure: 0,
//       tiltX: 0,
//       tiltY: 0,
//       twist: 0,
//       pointerType: 0,
//       isPrimary: 0,
//     }),
//     Yu = Se(Cp),
//     Mp = m({}, Wl, {
//       touches: 0,
//       targetTouches: 0,
//       changedTouches: 0,
//       altKey: 0,
//       metaKey: 0,
//       ctrlKey: 0,
//       shiftKey: 0,
//       getModifierState: Go,
//     }),
//     _p = Se(Mp),
//     Rp = m({}, En, {
//       propertyName: 0,
//       elapsedTime: 0,
//       pseudoElement: 0,
//     }),
//     Dp = Se(Rp),
//     Up = m({}, Ii, {
//       deltaX: function (t) {
//         return "deltaX" in t
//           ? t.deltaX
//           : "wheelDeltaX" in t
//             ? -t.wheelDeltaX
//             : 0;
//       },
//       deltaY: function (t) {
//         return "deltaY" in t
//           ? t.deltaY
//           : "wheelDeltaY" in t
//             ? -t.wheelDeltaY
//             : "wheelDelta" in t
//               ? -t.wheelDelta
//               : 0;
//       },
//       deltaZ: 0,
//       deltaMode: 0,
//     }),
//     Bp = Se(Up),
//     Lp = m({}, En, {
//       newState: 0,
//       oldState: 0,
//     }),
//     Yp = Se(Lp),
//     qp = [9, 13, 27, 32],
//     ko = va && "CompositionEvent" in window,
//     Fl = null;
//   va && "documentMode" in document && (Fl = document.documentMode);
//   var Gp = va && "TextEvent" in window && !Fl,
//     qu = va && (!ko || (Fl && 8 < Fl && 11 >= Fl)),
//     Gu = " ",
//     ku = !1;
//   function Vu(t, e) {
//     switch (t) {
//       case "keyup":
//         return qp.indexOf(e.keyCode) !== -1;
//       case "keydown":
//         return e.keyCode !== 229;
//       case "keypress":
//       case "mousedown":
//       case "focusout":
//         return !0;
//       default:
//         return !1;
//     }
//   }
//   function Xu(t) {
//     return (
//       (t = t.detail),
//       typeof t == "object" && "data" in t ? t.data : null
//     );
//   }
//   var el = !1;
//   function kp(t, e) {
//     switch (t) {
//       case "compositionend":
//         return Xu(e);
//       case "keypress":
//         return e.which !== 32 ? null : ((ku = !0), Gu);
//       case "textInput":
//         return ((t = e.data), t === Gu && ku ? null : t);
//       default:
//         return null;
//     }
//   }
//   function Vp(t, e) {
//     if (el)
//       return t === "compositionend" || (!ko && Vu(t, e))
//         ? ((t = Du()), (Wi = Bo = ka = null), (el = !1), t)
//         : null;
//     switch (t) {
//       case "paste":
//         return null;
//       case "keypress":
//         if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
//           if (e.char && 1 < e.char.length) return e.char;
//           if (e.which) return String.fromCharCode(e.which);
//         }
//         return null;
//       case "compositionend":
//         return qu && e.locale !== "ko" ? null : e.data;
//       default:
//         return null;
//     }
//   }
//   var Xp = {
//     color: !0,
//     date: !0,
//     datetime: !0,
//     "datetime-local": !0,
//     email: !0,
//     month: !0,
//     number: !0,
//     password: !0,
//     range: !0,
//     search: !0,
//     tel: !0,
//     text: !0,
//     time: !0,
//     url: !0,
//     week: !0,
//   };
//   function Qu(t) {
//     var e = t && t.nodeName && t.nodeName.toLowerCase();
//     return e === "input" ? !!Xp[t.type] : e === "textarea";
//   }
//   function Zu(t, e, a, n) {
//     (In ? (tl ? tl.push(n) : (tl = [n])) : (In = n),
//       (e = ks(e, "onChange")),
//       0 < e.length &&
//         ((a = new Pi("onChange", "change", null, a, n)),
//         t.push({
//           event: a,
//           listeners: e,
//         })));
//   }
//   var Pl = null,
//     Il = null;
//   function Qp(t) {
//     Om(t, 0);
//   }
//   function ts(t) {
//     var e = Zl(t);
//     if (zu(e)) return t;
//   }
//   function Ku(t, e) {
//     if (t === "change") return e;
//   }
//   var Ju = !1;
//   if (va) {
//     var Vo;
//     if (va) {
//       var Xo = "oninput" in document;
//       if (!Xo) {
//         var Wu = document.createElement("div");
//         (Wu.setAttribute("oninput", "return;"),
//           (Xo = typeof Wu.oninput == "function"));
//       }
//       Vo = Xo;
//     } else Vo = !1;
//     Ju = Vo && (!document.documentMode || 9 < document.documentMode);
//   }
//   function $u() {
//     Pl && (Pl.detachEvent("onpropertychange", Fu), (Il = Pl = null));
//   }
//   function Fu(t) {
//     if (t.propertyName === "value" && ts(Il)) {
//       var e = [];
//       (Zu(e, Il, t, Ro(t)), Ru(Qp, e));
//     }
//   }
//   function Zp(t, e, a) {
//     t === "focusin"
//       ? ($u(), (Pl = e), (Il = a), Pl.attachEvent("onpropertychange", Fu))
//       : t === "focusout" && $u();
//   }
//   function Kp(t) {
//     if (t === "selectionchange" || t === "keyup" || t === "keydown")
//       return ts(Il);
//   }
//   function Jp(t, e) {
//     if (t === "click") return ts(e);
//   }
//   function Wp(t, e) {
//     if (t === "input" || t === "change") return ts(e);
//   }
//   function $p(t, e) {
//     return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
//   }
//   var je = typeof Object.is == "function" ? Object.is : $p;
//   function ti(t, e) {
//     if (je(t, e)) return !0;
//     if (
//       typeof t != "object" ||
//       t === null ||
//       typeof e != "object" ||
//       e === null
//     )
//       return !1;
//     var a = Object.keys(t),
//       n = Object.keys(e);
//     if (a.length !== n.length) return !1;
//     for (n = 0; n < a.length; n++) {
//       var l = a[n];
//       if (!Oe.call(e, l) || !je(t[l], e[l])) return !1;
//     }
//     return !0;
//   }
//   function Pu(t) {
//     for (; t && t.firstChild; ) t = t.firstChild;
//     return t;
//   }
//   function Iu(t, e) {
//     var a = Pu(t);
//     t = 0;
//     for (var n; a; ) {
//       if (a.nodeType === 3) {
//         if (((n = t + a.textContent.length), t <= e && n >= e))
//           return {
//             node: a,
//             offset: e - t,
//           };
//         t = n;
//       }
//       t: {
//         for (; a; ) {
//           if (a.nextSibling) {
//             a = a.nextSibling;
//             break t;
//           }
//           a = a.parentNode;
//         }
//         a = void 0;
//       }
//       a = Pu(a);
//     }
//   }
//   function tf(t, e) {
//     return t && e
//       ? t === e
//         ? !0
//         : t && t.nodeType === 3
//           ? !1
//           : e && e.nodeType === 3
//             ? tf(t, e.parentNode)
//             : "contains" in t
//               ? t.contains(e)
//               : t.compareDocumentPosition
//                 ? !!(t.compareDocumentPosition(e) & 16)
//                 : !1
//       : !1;
//   }
//   function ef(t) {
//     t =
//       t != null &&
//       t.ownerDocument != null &&
//       t.ownerDocument.defaultView != null
//         ? t.ownerDocument.defaultView
//         : window;
//     for (var e = Ki(t.document); e instanceof t.HTMLIFrameElement; ) {
//       try {
//         var a = typeof e.contentWindow.location.href == "string";
//       } catch {
//         a = !1;
//       }
//       if (a) t = e.contentWindow;
//       else break;
//       e = Ki(t.document);
//     }
//     return e;
//   }
//   function Qo(t) {
//     var e = t && t.nodeName && t.nodeName.toLowerCase();
//     return (
//       e &&
//       ((e === "input" &&
//         (t.type === "text" ||
//           t.type === "search" ||
//           t.type === "tel" ||
//           t.type === "url" ||
//           t.type === "password")) ||
//         e === "textarea" ||
//         t.contentEditable === "true")
//     );
//   }
//   var Fp = va && "documentMode" in document && 11 >= document.documentMode,
//     al = null,
//     Zo = null,
//     ei = null,
//     Ko = !1;
//   function af(t, e, a) {
//     var n =
//       a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
//     Ko ||
//       al == null ||
//       al !== Ki(n) ||
//       ((n = al),
//       "selectionStart" in n && Qo(n)
//         ? (n = {
//             start: n.selectionStart,
//             end: n.selectionEnd,
//           })
//         : ((n = (
//             (n.ownerDocument && n.ownerDocument.defaultView) ||
//             window
//           ).getSelection()),
//           (n = {
//             anchorNode: n.anchorNode,
//             anchorOffset: n.anchorOffset,
//             focusNode: n.focusNode,
//             focusOffset: n.focusOffset,
//           })),
//       (ei && ti(ei, n)) ||
//         ((ei = n),
//         (n = ks(Zo, "onSelect")),
//         0 < n.length &&
//           ((e = new Pi("onSelect", "select", null, e, a)),
//           t.push({
//             event: e,
//             listeners: n,
//           }),
//           (e.target = al))));
//   }
//   function wn(t, e) {
//     var a = {};
//     return (
//       (a[t.toLowerCase()] = e.toLowerCase()),
//       (a["Webkit" + t] = "webkit" + e),
//       (a["Moz" + t] = "moz" + e),
//       a
//     );
//   }
//   var nl = {
//       animationend: wn("Animation", "AnimationEnd"),
//       animationiteration: wn("Animation", "AnimationIteration"),
//       animationstart: wn("Animation", "AnimationStart"),
//       transitionrun: wn("Transition", "TransitionRun"),
//       transitionstart: wn("Transition", "TransitionStart"),
//       transitioncancel: wn("Transition", "TransitionCancel"),
//       transitionend: wn("Transition", "TransitionEnd"),
//     },
//     Jo = {},
//     nf = {};
//   va &&
//     ((nf = document.createElement("div").style),
//     "AnimationEvent" in window ||
//       (delete nl.animationend.animation,
//       delete nl.animationiteration.animation,
//       delete nl.animationstart.animation),
//     "TransitionEvent" in window || delete nl.transitionend.transition);
//   function Nn(t) {
//     if (Jo[t]) return Jo[t];
//     if (!nl[t]) return t;
//     var e = nl[t],
//       a;
//     for (a in e) if (e.hasOwnProperty(a) && a in nf) return (Jo[t] = e[a]);
//     return t;
//   }
//   var lf = Nn("animationend"),
//     sf = Nn("animationiteration"),
//     of = Nn("animationstart"),
//     Pp = Nn("transitionrun"),
//     Ip = Nn("transitionstart"),
//     t0 = Nn("transitioncancel"),
//     cf = Nn("transitionend"),
//     rf = new Map(),
//     Wo =
//       "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
//         " ",
//       );
//   Wo.push("scrollEnd");
//   function Pe(t, e) {
//     (rf.set(t, e), Sn(e, [t]));
//   }
//   var es =
//       typeof reportError == "function"
//         ? reportError
//         : function (t) {
//             if (
//               typeof window == "object" &&
//               typeof window.ErrorEvent == "function"
//             ) {
//               var e = new window.ErrorEvent("error", {
//                 bubbles: !0,
//                 cancelable: !0,
//                 message:
//                   typeof t == "object" &&
//                   t !== null &&
//                   typeof t.message == "string"
//                     ? String(t.message)
//                     : String(t),
//                 error: t,
//               });
//               if (!window.dispatchEvent(e)) return;
//             } else if (
//               typeof process == "object" &&
//               typeof process.emit == "function"
//             ) {
//               process.emit("uncaughtException", t);
//               return;
//             }
//             console.error(t);
//           },
//     Ge = [],
//     ll = 0,
//     $o = 0;
//   function as() {
//     for (var t = ll, e = ($o = ll = 0); e < t; ) {
//       var a = Ge[e];
//       Ge[e++] = null;
//       var n = Ge[e];
//       Ge[e++] = null;
//       var l = Ge[e];
//       Ge[e++] = null;
//       var s = Ge[e];
//       if (((Ge[e++] = null), n !== null && l !== null)) {
//         var u = n.pending;
//         (u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
//           (n.pending = l));
//       }
//       s !== 0 && uf(a, l, s);
//     }
//   }
//   function ns(t, e, a, n) {
//     ((Ge[ll++] = t),
//       (Ge[ll++] = e),
//       (Ge[ll++] = a),
//       (Ge[ll++] = n),
//       ($o |= n),
//       (t.lanes |= n),
//       (t = t.alternate),
//       t !== null && (t.lanes |= n));
//   }
//   function Fo(t, e, a, n) {
//     return (ns(t, e, a, n), ls(t));
//   }
//   function An(t, e) {
//     return (ns(t, null, null, e), ls(t));
//   }
//   function uf(t, e, a) {
//     t.lanes |= a;
//     var n = t.alternate;
//     n !== null && (n.lanes |= a);
//     for (var l = !1, s = t.return; s !== null; )
//       ((s.childLanes |= a),
//         (n = s.alternate),
//         n !== null && (n.childLanes |= a),
//         s.tag === 22 &&
//           ((t = s.stateNode), t === null || t._visibility & 1 || (l = !0)),
//         (t = s),
//         (s = s.return));
//     return t.tag === 3
//       ? ((s = t.stateNode),
//         l &&
//           e !== null &&
//           ((l = 31 - re(a)),
//           (t = s.hiddenUpdates),
//           (n = t[l]),
//           n === null ? (t[l] = [e]) : n.push(e),
//           (e.lane = a | 536870912)),
//         s)
//       : null;
//   }
//   function ls(t) {
//     if (50 < wi) throw ((wi = 0), (sr = null), Error(c(185)));
//     for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
//     return t.tag === 3 ? t.stateNode : null;
//   }
//   var il = {};
//   function e0(t, e, a, n) {
//     ((this.tag = t),
//       (this.key = a),
//       (this.sibling =
//         this.child =
//         this.return =
//         this.stateNode =
//         this.type =
//         this.elementType =
//           null),
//       (this.index = 0),
//       (this.refCleanup = this.ref = null),
//       (this.pendingProps = e),
//       (this.dependencies =
//         this.memoizedState =
//         this.updateQueue =
//         this.memoizedProps =
//           null),
//       (this.mode = n),
//       (this.subtreeFlags = this.flags = 0),
//       (this.deletions = null),
//       (this.childLanes = this.lanes = 0),
//       (this.alternate = null));
//   }
//   function Ce(t, e, a, n) {
//     return new e0(t, e, a, n);
//   }
//   function Po(t) {
//     return ((t = t.prototype), !(!t || !t.isReactComponent));
//   }
//   function xa(t, e) {
//     var a = t.alternate;
//     return (
//       a === null
//         ? ((a = Ce(t.tag, e, t.key, t.mode)),
//           (a.elementType = t.elementType),
//           (a.type = t.type),
//           (a.stateNode = t.stateNode),
//           (a.alternate = t),
//           (t.alternate = a))
//         : ((a.pendingProps = e),
//           (a.type = t.type),
//           (a.flags = 0),
//           (a.subtreeFlags = 0),
//           (a.deletions = null)),
//       (a.flags = t.flags & 65011712),
//       (a.childLanes = t.childLanes),
//       (a.lanes = t.lanes),
//       (a.child = t.child),
//       (a.memoizedProps = t.memoizedProps),
//       (a.memoizedState = t.memoizedState),
//       (a.updateQueue = t.updateQueue),
//       (e = t.dependencies),
//       (a.dependencies =
//         e === null
//           ? null
//           : {
//               lanes: e.lanes,
//               firstContext: e.firstContext,
//             }),
//       (a.sibling = t.sibling),
//       (a.index = t.index),
//       (a.ref = t.ref),
//       (a.refCleanup = t.refCleanup),
//       a
//     );
//   }
//   function ff(t, e) {
//     t.flags &= 65011714;
//     var a = t.alternate;
//     return (
//       a === null
//         ? ((t.childLanes = 0),
//           (t.lanes = e),
//           (t.child = null),
//           (t.subtreeFlags = 0),
//           (t.memoizedProps = null),
//           (t.memoizedState = null),
//           (t.updateQueue = null),
//           (t.dependencies = null),
//           (t.stateNode = null))
//         : ((t.childLanes = a.childLanes),
//           (t.lanes = a.lanes),
//           (t.child = a.child),
//           (t.subtreeFlags = 0),
//           (t.deletions = null),
//           (t.memoizedProps = a.memoizedProps),
//           (t.memoizedState = a.memoizedState),
//           (t.updateQueue = a.updateQueue),
//           (t.type = a.type),
//           (e = a.dependencies),
//           (t.dependencies =
//             e === null
//               ? null
//               : {
//                   lanes: e.lanes,
//                   firstContext: e.firstContext,
//                 })),
//       t
//     );
//   }
//   function is(t, e, a, n, l, s) {
//     var u = 0;
//     if (((n = t), typeof t == "function")) Po(t) && (u = 1);
//     else if (typeof t == "string")
//       u = sy(t, a, X.current)
//         ? 26
//         : t === "html" || t === "head" || t === "body"
//           ? 27
//           : 5;
//     else
//       t: switch (t) {
//         case mt:
//           return (
//             (t = Ce(31, a, e, l)),
//             (t.elementType = mt),
//             (t.lanes = s),
//             t
//           );
//         case q:
//           return Tn(a.children, l, s, e);
//         case V:
//           ((u = 8), (l |= 24));
//           break;
//         case k:
//           return (
//             (t = Ce(12, a, e, l | 2)),
//             (t.elementType = k),
//             (t.lanes = s),
//             t
//           );
//         case I:
//           return ((t = Ce(13, a, e, l)), (t.elementType = I), (t.lanes = s), t);
//         case lt:
//           return (
//             (t = Ce(19, a, e, l)),
//             (t.elementType = lt),
//             (t.lanes = s),
//             t
//           );
//         default:
//           if (typeof t == "object" && t !== null)
//             switch (t.$$typeof) {
//               case J:
//                 u = 10;
//                 break t;
//               case P:
//                 u = 9;
//                 break t;
//               case $:
//                 u = 11;
//                 break t;
//               case Q:
//                 u = 14;
//                 break t;
//               case Z:
//                 ((u = 16), (n = null));
//                 break t;
//             }
//           ((u = 29),
//             (a = Error(c(130, t === null ? "null" : typeof t, ""))),
//             (n = null));
//       }
//     return (
//       (e = Ce(u, a, e, l)),
//       (e.elementType = t),
//       (e.type = n),
//       (e.lanes = s),
//       e
//     );
//   }
//   function Tn(t, e, a, n) {
//     return ((t = Ce(7, t, n, e)), (t.lanes = a), t);
//   }
//   function Io(t, e, a) {
//     return ((t = Ce(6, t, null, e)), (t.lanes = a), t);
//   }
//   function df(t) {
//     var e = Ce(18, null, null, 0);
//     return ((e.stateNode = t), e);
//   }
//   function tc(t, e, a) {
//     return (
//       (e = Ce(4, t.children !== null ? t.children : [], t.key, e)),
//       (e.lanes = a),
//       (e.stateNode = {
//         containerInfo: t.containerInfo,
//         pendingChildren: null,
//         implementation: t.implementation,
//       }),
//       e
//     );
//   }
//   var mf = new WeakMap();
//   function ke(t, e) {
//     if (typeof t == "object" && t !== null) {
//       var a = mf.get(t);
//       return a !== void 0
//         ? a
//         : ((e = {
//             value: t,
//             source: e,
//             stack: ql(e),
//           }),
//           mf.set(t, e),
//           e);
//     }
//     return {
//       value: t,
//       source: e,
//       stack: ql(e),
//     };
//   }
//   var sl = [],
//     ol = 0,
//     ss = null,
//     ai = 0,
//     Ve = [],
//     Xe = 0,
//     Va = null,
//     ia = 1,
//     sa = "";
//   function ba(t, e) {
//     ((sl[ol++] = ai), (sl[ol++] = ss), (ss = t), (ai = e));
//   }
//   function hf(t, e, a) {
//     ((Ve[Xe++] = ia), (Ve[Xe++] = sa), (Ve[Xe++] = Va), (Va = t));
//     var n = ia;
//     t = sa;
//     var l = 32 - re(n) - 1;
//     ((n &= ~(1 << l)), (a += 1));
//     var s = 32 - re(e) + l;
//     if (30 < s) {
//       var u = l - (l % 5);
//       ((s = (n & ((1 << u) - 1)).toString(32)),
//         (n >>= u),
//         (l -= u),
//         (ia = (1 << (32 - re(e) + l)) | (a << l) | n),
//         (sa = s + t));
//     } else ((ia = (1 << s) | (a << l) | n), (sa = t));
//   }
//   function ec(t) {
//     t.return !== null && (ba(t, 1), hf(t, 1, 0));
//   }
//   function ac(t) {
//     for (; t === ss; )
//       ((ss = sl[--ol]), (sl[ol] = null), (ai = sl[--ol]), (sl[ol] = null));
//     for (; t === Va; )
//       ((Va = Ve[--Xe]),
//         (Ve[Xe] = null),
//         (sa = Ve[--Xe]),
//         (Ve[Xe] = null),
//         (ia = Ve[--Xe]),
//         (Ve[Xe] = null));
//   }
//   function gf(t, e) {
//     ((Ve[Xe++] = ia),
//       (Ve[Xe++] = sa),
//       (Ve[Xe++] = Va),
//       (ia = e.id),
//       (sa = e.overflow),
//       (Va = t));
//   }
//   var ie = null,
//     Lt = null,
//     zt = !1,
//     Xa = null,
//     Qe = !1,
//     nc = Error(c(519));
//   function Qa(t) {
//     var e = Error(
//       c(
//         418,
//         1 < arguments.length && arguments[1] !== void 0 && arguments[1]
//           ? "text"
//           : "HTML",
//         "",
//       ),
//     );
//     throw (ni(ke(e, t)), nc);
//   }
//   function pf(t) {
//     var e = t.stateNode,
//       a = t.type,
//       n = t.memoizedProps;
//     switch (((e[le] = t), (e[be] = n), a)) {
//       case "dialog":
//         (wt("cancel", e), wt("close", e));
//         break;
//       case "iframe":
//       case "object":
//       case "embed":
//         wt("load", e);
//         break;
//       case "video":
//       case "audio":
//         for (a = 0; a < Ai.length; a++) wt(Ai[a], e);
//         break;
//       case "source":
//         wt("error", e);
//         break;
//       case "img":
//       case "image":
//       case "link":
//         (wt("error", e), wt("load", e));
//         break;
//       case "details":
//         wt("toggle", e);
//         break;
//       case "input":
//         (wt("invalid", e),
//           Hu(
//             e,
//             n.value,
//             n.defaultValue,
//             n.checked,
//             n.defaultChecked,
//             n.type,
//             n.name,
//             !0,
//           ));
//         break;
//       case "select":
//         wt("invalid", e);
//         break;
//       case "textarea":
//         (wt("invalid", e), ju(e, n.value, n.defaultValue, n.children));
//     }
//     ((a = n.children),
//       (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
//       e.textContent === "" + a ||
//       n.suppressHydrationWarning === !0 ||
//       _m(e.textContent, a)
//         ? (n.popover != null && (wt("beforetoggle", e), wt("toggle", e)),
//           n.onScroll != null && wt("scroll", e),
//           n.onScrollEnd != null && wt("scrollend", e),
//           n.onClick != null && (e.onclick = ya),
//           (e = !0))
//         : (e = !1),
//       e || Qa(t, !0));
//   }
//   function yf(t) {
//     for (ie = t.return; ie; )
//       switch (ie.tag) {
//         case 5:
//         case 31:
//         case 13:
//           Qe = !1;
//           return;
//         case 27:
//         case 3:
//           Qe = !0;
//           return;
//         default:
//           ie = ie.return;
//       }
//   }
//   function cl(t) {
//     if (t !== ie) return !1;
//     if (!zt) return (yf(t), (zt = !0), !1);
//     var e = t.tag,
//       a;
//     if (
//       ((a = e !== 3 && e !== 27) &&
//         ((a = e === 5) &&
//           ((a = t.type),
//           (a =
//             !(a !== "form" && a !== "button") || Sr(t.type, t.memoizedProps))),
//         (a = !a)),
//       a && Lt && Qa(t),
//       yf(t),
//       e === 13)
//     ) {
//       if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
//         throw Error(c(317));
//       Lt = km(t);
//     } else if (e === 31) {
//       if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
//         throw Error(c(317));
//       Lt = km(t);
//     } else
//       e === 27
//         ? ((e = Lt), sn(t.type) ? ((t = Tr), (Tr = null), (Lt = t)) : (Lt = e))
//         : (Lt = ie ? Ke(t.stateNode.nextSibling) : null);
//     return !0;
//   }
//   function zn() {
//     ((Lt = ie = null), (zt = !1));
//   }
//   function lc() {
//     var t = Xa;
//     return (
//       t !== null &&
//         (Ae === null ? (Ae = t) : Ae.push.apply(Ae, t), (Xa = null)),
//       t
//     );
//   }
//   function ni(t) {
//     Xa === null ? (Xa = [t]) : Xa.push(t);
//   }
//   var ic = E(null),
//     Hn = null,
//     Sa = null;
//   function Za(t, e, a) {
//     (U(ic, e._currentValue), (e._currentValue = a));
//   }
//   function Ea(t) {
//     ((t._currentValue = ic.current), B(ic));
//   }
//   function sc(t, e, a) {
//     for (; t !== null; ) {
//       var n = t.alternate;
//       if (
//         ((t.childLanes & e) !== e
//           ? ((t.childLanes |= e), n !== null && (n.childLanes |= e))
//           : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
//         t === a)
//       )
//         break;
//       t = t.return;
//     }
//   }
//   function oc(t, e, a, n) {
//     var l = t.child;
//     for (l !== null && (l.return = t); l !== null; ) {
//       var s = l.dependencies;
//       if (s !== null) {
//         var u = l.child;
//         s = s.firstContext;
//         t: for (; s !== null; ) {
//           var h = s;
//           s = l;
//           for (var b = 0; b < e.length; b++)
//             if (h.context === e[b]) {
//               ((s.lanes |= a),
//                 (h = s.alternate),
//                 h !== null && (h.lanes |= a),
//                 sc(s.return, a, t),
//                 n || (u = null));
//               break t;
//             }
//           s = h.next;
//         }
//       } else if (l.tag === 18) {
//         if (((u = l.return), u === null)) throw Error(c(341));
//         ((u.lanes |= a),
//           (s = u.alternate),
//           s !== null && (s.lanes |= a),
//           sc(u, a, t),
//           (u = null));
//       } else u = l.child;
//       if (u !== null) u.return = l;
//       else
//         for (u = l; u !== null; ) {
//           if (u === t) {
//             u = null;
//             break;
//           }
//           if (((l = u.sibling), l !== null)) {
//             ((l.return = u.return), (u = l));
//             break;
//           }
//           u = u.return;
//         }
//       l = u;
//     }
//   }
//   function rl(t, e, a, n) {
//     t = null;
//     for (var l = e, s = !1; l !== null; ) {
//       if (!s) {
//         if ((l.flags & 524288) !== 0) s = !0;
//         else if ((l.flags & 262144) !== 0) break;
//       }
//       if (l.tag === 10) {
//         var u = l.alternate;
//         if (u === null) throw Error(c(387));
//         if (((u = u.memoizedProps), u !== null)) {
//           var h = l.type;
//           je(l.pendingProps.value, u.value) ||
//             (t !== null ? t.push(h) : (t = [h]));
//         }
//       } else if (l === at.current) {
//         if (((u = l.alternate), u === null)) throw Error(c(387));
//         u.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
//           (t !== null ? t.push(ji) : (t = [ji]));
//       }
//       l = l.return;
//     }
//     (t !== null && oc(e, t, a, n), (e.flags |= 262144));
//   }
//   function os(t) {
//     for (t = t.firstContext; t !== null; ) {
//       if (!je(t.context._currentValue, t.memoizedValue)) return !0;
//       t = t.next;
//     }
//     return !1;
//   }
//   function On(t) {
//     ((Hn = t),
//       (Sa = null),
//       (t = t.dependencies),
//       t !== null && (t.firstContext = null));
//   }
//   function se(t) {
//     return vf(Hn, t);
//   }
//   function cs(t, e) {
//     return (Hn === null && On(t), vf(t, e));
//   }
//   function vf(t, e) {
//     var a = e._currentValue;
//     if (
//       ((e = {
//         context: e,
//         memoizedValue: a,
//         next: null,
//       }),
//       Sa === null)
//     ) {
//       if (t === null) throw Error(c(308));
//       ((Sa = e),
//         (t.dependencies = {
//           lanes: 0,
//           firstContext: e,
//         }),
//         (t.flags |= 524288));
//     } else Sa = Sa.next = e;
//     return a;
//   }
//   var a0 =
//       typeof AbortController < "u"
//         ? AbortController
//         : function () {
//             var t = [],
//               e = (this.signal = {
//                 aborted: !1,
//                 addEventListener: function (a, n) {
//                   t.push(n);
//                 },
//               });
//             this.abort = function () {
//               ((e.aborted = !0),
//                 t.forEach(function (a) {
//                   return a();
//                 }));
//             };
//           },
//     n0 = i.unstable_scheduleCallback,
//     l0 = i.unstable_NormalPriority,
//     Kt = {
//       $$typeof: J,
//       Consumer: null,
//       Provider: null,
//       _currentValue: null,
//       _currentValue2: null,
//       _threadCount: 0,
//     };
//   function cc() {
//     return {
//       controller: new a0(),
//       data: new Map(),
//       refCount: 0,
//     };
//   }
//   function li(t) {
//     (t.refCount--,
//       t.refCount === 0 &&
//         n0(l0, function () {
//           t.controller.abort();
//         }));
//   }
//   var ii = null,
//     rc = 0,
//     ul = 0,
//     fl = null;
//   function i0(t, e) {
//     if (ii === null) {
//       var a = (ii = []);
//       ((rc = 0),
//         (ul = dr()),
//         (fl = {
//           status: "pending",
//           value: void 0,
//           then: function (n) {
//             a.push(n);
//           },
//         }));
//     }
//     return (rc++, e.then(xf, xf), e);
//   }
//   function xf() {
//     if (--rc === 0 && ii !== null) {
//       fl !== null && (fl.status = "fulfilled");
//       var t = ii;
//       ((ii = null), (ul = 0), (fl = null));
//       for (var e = 0; e < t.length; e++) (0, t[e])();
//     }
//   }
//   function s0(t, e) {
//     var a = [],
//       n = {
//         status: "pending",
//         value: null,
//         reason: null,
//         then: function (l) {
//           a.push(l);
//         },
//       };
//     return (
//       t.then(
//         function () {
//           ((n.status = "fulfilled"), (n.value = e));
//           for (var l = 0; l < a.length; l++) (0, a[l])(e);
//         },
//         function (l) {
//           for (n.status = "rejected", n.reason = l, l = 0; l < a.length; l++)
//             (0, a[l])(void 0);
//         },
//       ),
//       n
//     );
//   }
//   var bf = N.S;
//   N.S = function (t, e) {
//     ((nm = he()),
//       typeof e == "object" &&
//         e !== null &&
//         typeof e.then == "function" &&
//         i0(t, e),
//       bf !== null && bf(t, e));
//   };
//   var jn = E(null);
//   function uc() {
//     var t = jn.current;
//     return t !== null ? t : Bt.pooledCache;
//   }
//   function rs(t, e) {
//     e === null ? U(jn, jn.current) : U(jn, e.pool);
//   }
//   function Sf() {
//     var t = uc();
//     return t === null
//       ? null
//       : {
//           parent: Kt._currentValue,
//           pool: t,
//         };
//   }
//   var dl = Error(c(460)),
//     fc = Error(c(474)),
//     us = Error(c(542)),
//     fs = {
//       then: function () {},
//     };
//   function Ef(t) {
//     return ((t = t.status), t === "fulfilled" || t === "rejected");
//   }
//   function wf(t, e, a) {
//     switch (
//       ((a = t[a]),
//       a === void 0 ? t.push(e) : a !== e && (e.then(ya, ya), (e = a)),
//       e.status)
//     ) {
//       case "fulfilled":
//         return e.value;
//       case "rejected":
//         throw ((t = e.reason), Af(t), t);
//       default:
//         if (typeof e.status == "string") e.then(ya, ya);
//         else {
//           if (((t = Bt), t !== null && 100 < t.shellSuspendCounter))
//             throw Error(c(482));
//           ((t = e),
//             (t.status = "pending"),
//             t.then(
//               function (n) {
//                 if (e.status === "pending") {
//                   var l = e;
//                   ((l.status = "fulfilled"), (l.value = n));
//                 }
//               },
//               function (n) {
//                 if (e.status === "pending") {
//                   var l = e;
//                   ((l.status = "rejected"), (l.reason = n));
//                 }
//               },
//             ));
//         }
//         switch (e.status) {
//           case "fulfilled":
//             return e.value;
//           case "rejected":
//             throw ((t = e.reason), Af(t), t);
//         }
//         throw ((Mn = e), dl);
//     }
//   }
//   function Cn(t) {
//     try {
//       var e = t._init;
//       return e(t._payload);
//     } catch (a) {
//       throw a !== null && typeof a == "object" && typeof a.then == "function"
//         ? ((Mn = a), dl)
//         : a;
//     }
//   }
//   var Mn = null;
//   function Nf() {
//     if (Mn === null) throw Error(c(459));
//     var t = Mn;
//     return ((Mn = null), t);
//   }
//   function Af(t) {
//     if (t === dl || t === us) throw Error(c(483));
//   }
//   var ml = null,
//     si = 0;
//   function ds(t) {
//     var e = si;
//     return ((si += 1), ml === null && (ml = []), wf(ml, t, e));
//   }
//   function oi(t, e) {
//     ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
//   }
//   function ms(t, e) {
//     throw e.$$typeof === T
//       ? Error(c(525))
//       : ((t = Object.prototype.toString.call(e)),
//         Error(
//           c(
//             31,
//             t === "[object Object]"
//               ? "object with keys {" + Object.keys(e).join(", ") + "}"
//               : t,
//           ),
//         ));
//   }
//   function Tf(t) {
//     function e(A, w) {
//       if (t) {
//         var z = A.deletions;
//         z === null ? ((A.deletions = [w]), (A.flags |= 16)) : z.push(w);
//       }
//     }
//     function a(A, w) {
//       if (!t) return null;
//       for (; w !== null; ) (e(A, w), (w = w.sibling));
//       return null;
//     }
//     function n(A) {
//       for (var w = new Map(); A !== null; )
//         (A.key !== null ? w.set(A.key, A) : w.set(A.index, A), (A = A.sibling));
//       return w;
//     }
//     function l(A, w) {
//       return ((A = xa(A, w)), (A.index = 0), (A.sibling = null), A);
//     }
//     function s(A, w, z) {
//       return (
//         (A.index = z),
//         t
//           ? ((z = A.alternate),
//             z !== null
//               ? ((z = z.index), z < w ? ((A.flags |= 67108866), w) : z)
//               : ((A.flags |= 67108866), w))
//           : ((A.flags |= 1048576), w)
//       );
//     }
//     function u(A) {
//       return (t && A.alternate === null && (A.flags |= 67108866), A);
//     }
//     function h(A, w, z, Y) {
//       return w === null || w.tag !== 6
//         ? ((w = Io(z, A.mode, Y)), (w.return = A), w)
//         : ((w = l(w, z)), (w.return = A), w);
//     }
//     function b(A, w, z, Y) {
//       var ot = z.type;
//       return ot === q
//         ? D(A, w, z.props.children, Y, z.key)
//         : w !== null &&
//             (w.elementType === ot ||
//               (typeof ot == "object" &&
//                 ot !== null &&
//                 ot.$$typeof === Z &&
//                 Cn(ot) === w.type))
//           ? ((w = l(w, z.props)), oi(w, z), (w.return = A), w)
//           : ((w = is(z.type, z.key, z.props, null, A.mode, Y)),
//             oi(w, z),
//             (w.return = A),
//             w);
//     }
//     function H(A, w, z, Y) {
//       return w === null ||
//         w.tag !== 4 ||
//         w.stateNode.containerInfo !== z.containerInfo ||
//         w.stateNode.implementation !== z.implementation
//         ? ((w = tc(z, A.mode, Y)), (w.return = A), w)
//         : ((w = l(w, z.children || [])), (w.return = A), w);
//     }
//     function D(A, w, z, Y, ot) {
//       return w === null || w.tag !== 7
//         ? ((w = Tn(z, A.mode, Y, ot)), (w.return = A), w)
//         : ((w = l(w, z)), (w.return = A), w);
//     }
//     function G(A, w, z) {
//       if (
//         (typeof w == "string" && w !== "") ||
//         typeof w == "number" ||
//         typeof w == "bigint"
//       )
//         return ((w = Io("" + w, A.mode, z)), (w.return = A), w);
//       if (typeof w == "object" && w !== null) {
//         switch (w.$$typeof) {
//           case C:
//             return (
//               (z = is(w.type, w.key, w.props, null, A.mode, z)),
//               oi(z, w),
//               (z.return = A),
//               z
//             );
//           case M:
//             return ((w = tc(w, A.mode, z)), (w.return = A), w);
//           case Z:
//             return ((w = Cn(w)), G(A, w, z));
//         }
//         if (bt(w) || gt(w))
//           return ((w = Tn(w, A.mode, z, null)), (w.return = A), w);
//         if (typeof w.then == "function") return G(A, ds(w), z);
//         if (w.$$typeof === J) return G(A, cs(A, w), z);
//         ms(A, w);
//       }
//       return null;
//     }
//     function j(A, w, z, Y) {
//       var ot = w !== null ? w.key : null;
//       if (
//         (typeof z == "string" && z !== "") ||
//         typeof z == "number" ||
//         typeof z == "bigint"
//       )
//         return ot !== null ? null : h(A, w, "" + z, Y);
//       if (typeof z == "object" && z !== null) {
//         switch (z.$$typeof) {
//           case C:
//             return z.key === ot ? b(A, w, z, Y) : null;
//           case M:
//             return z.key === ot ? H(A, w, z, Y) : null;
//           case Z:
//             return ((z = Cn(z)), j(A, w, z, Y));
//         }
//         if (bt(z) || gt(z)) return ot !== null ? null : D(A, w, z, Y, null);
//         if (typeof z.then == "function") return j(A, w, ds(z), Y);
//         if (z.$$typeof === J) return j(A, w, cs(A, z), Y);
//         ms(A, z);
//       }
//       return null;
//     }
//     function R(A, w, z, Y, ot) {
//       if (
//         (typeof Y == "string" && Y !== "") ||
//         typeof Y == "number" ||
//         typeof Y == "bigint"
//       )
//         return ((A = A.get(z) || null), h(w, A, "" + Y, ot));
//       if (typeof Y == "object" && Y !== null) {
//         switch (Y.$$typeof) {
//           case C:
//             return (
//               (A = A.get(Y.key === null ? z : Y.key) || null),
//               b(w, A, Y, ot)
//             );
//           case M:
//             return (
//               (A = A.get(Y.key === null ? z : Y.key) || null),
//               H(w, A, Y, ot)
//             );
//           case Z:
//             return ((Y = Cn(Y)), R(A, w, z, Y, ot));
//         }
//         if (bt(Y) || gt(Y))
//           return ((A = A.get(z) || null), D(w, A, Y, ot, null));
//         if (typeof Y.then == "function") return R(A, w, z, ds(Y), ot);
//         if (Y.$$typeof === J) return R(A, w, z, cs(w, Y), ot);
//         ms(w, Y);
//       }
//       return null;
//     }
//     function F(A, w, z, Y) {
//       for (
//         var ot = null, Ot = null, nt = w, yt = (w = 0), At = null;
//         nt !== null && yt < z.length;
//         yt++
//       ) {
//         nt.index > yt ? ((At = nt), (nt = null)) : (At = nt.sibling);
//         var jt = j(A, nt, z[yt], Y);
//         if (jt === null) {
//           nt === null && (nt = At);
//           break;
//         }
//         (t && nt && jt.alternate === null && e(A, nt),
//           (w = s(jt, w, yt)),
//           Ot === null ? (ot = jt) : (Ot.sibling = jt),
//           (Ot = jt),
//           (nt = At));
//       }
//       if (yt === z.length) return (a(A, nt), zt && ba(A, yt), ot);
//       if (nt === null) {
//         for (; yt < z.length; yt++)
//           ((nt = G(A, z[yt], Y)),
//             nt !== null &&
//               ((w = s(nt, w, yt)),
//               Ot === null ? (ot = nt) : (Ot.sibling = nt),
//               (Ot = nt)));
//         return (zt && ba(A, yt), ot);
//       }
//       for (nt = n(nt); yt < z.length; yt++)
//         ((At = R(nt, A, yt, z[yt], Y)),
//           At !== null &&
//             (t &&
//               At.alternate !== null &&
//               nt.delete(At.key === null ? yt : At.key),
//             (w = s(At, w, yt)),
//             Ot === null ? (ot = At) : (Ot.sibling = At),
//             (Ot = At)));
//       return (
//         t &&
//           nt.forEach(function (fn) {
//             return e(A, fn);
//           }),
//         zt && ba(A, yt),
//         ot
//       );
//     }
//     function rt(A, w, z, Y) {
//       if (z == null) throw Error(c(151));
//       for (
//         var ot = null,
//           Ot = null,
//           nt = w,
//           yt = (w = 0),
//           At = null,
//           jt = z.next();
//         nt !== null && !jt.done;
//         yt++, jt = z.next()
//       ) {
//         nt.index > yt ? ((At = nt), (nt = null)) : (At = nt.sibling);
//         var fn = j(A, nt, jt.value, Y);
//         if (fn === null) {
//           nt === null && (nt = At);
//           break;
//         }
//         (t && nt && fn.alternate === null && e(A, nt),
//           (w = s(fn, w, yt)),
//           Ot === null ? (ot = fn) : (Ot.sibling = fn),
//           (Ot = fn),
//           (nt = At));
//       }
//       if (jt.done) return (a(A, nt), zt && ba(A, yt), ot);
//       if (nt === null) {
//         for (; !jt.done; yt++, jt = z.next())
//           ((jt = G(A, jt.value, Y)),
//             jt !== null &&
//               ((w = s(jt, w, yt)),
//               Ot === null ? (ot = jt) : (Ot.sibling = jt),
//               (Ot = jt)));
//         return (zt && ba(A, yt), ot);
//       }
//       for (nt = n(nt); !jt.done; yt++, jt = z.next())
//         ((jt = R(nt, A, yt, jt.value, Y)),
//           jt !== null &&
//             (t &&
//               jt.alternate !== null &&
//               nt.delete(jt.key === null ? yt : jt.key),
//             (w = s(jt, w, yt)),
//             Ot === null ? (ot = jt) : (Ot.sibling = jt),
//             (Ot = jt)));
//       return (
//         t &&
//           nt.forEach(function (yy) {
//             return e(A, yy);
//           }),
//         zt && ba(A, yt),
//         ot
//       );
//     }
//     function Ut(A, w, z, Y) {
//       if (
//         (typeof z == "object" &&
//           z !== null &&
//           z.type === q &&
//           z.key === null &&
//           (z = z.props.children),
//         typeof z == "object" && z !== null)
//       ) {
//         switch (z.$$typeof) {
//           case C:
//             t: {
//               for (var ot = z.key; w !== null; ) {
//                 if (w.key === ot) {
//                   if (((ot = z.type), ot === q)) {
//                     if (w.tag === 7) {
//                       (a(A, w.sibling),
//                         (Y = l(w, z.props.children)),
//                         (Y.return = A),
//                         (A = Y));
//                       break t;
//                     }
//                   } else if (
//                     w.elementType === ot ||
//                     (typeof ot == "object" &&
//                       ot !== null &&
//                       ot.$$typeof === Z &&
//                       Cn(ot) === w.type)
//                   ) {
//                     (a(A, w.sibling),
//                       (Y = l(w, z.props)),
//                       oi(Y, z),
//                       (Y.return = A),
//                       (A = Y));
//                     break t;
//                   }
//                   a(A, w);
//                   break;
//                 } else e(A, w);
//                 w = w.sibling;
//               }
//               z.type === q
//                 ? ((Y = Tn(z.props.children, A.mode, Y, z.key)),
//                   (Y.return = A),
//                   (A = Y))
//                 : ((Y = is(z.type, z.key, z.props, null, A.mode, Y)),
//                   oi(Y, z),
//                   (Y.return = A),
//                   (A = Y));
//             }
//             return u(A);
//           case M:
//             t: {
//               for (ot = z.key; w !== null; ) {
//                 if (w.key === ot)
//                   if (
//                     w.tag === 4 &&
//                     w.stateNode.containerInfo === z.containerInfo &&
//                     w.stateNode.implementation === z.implementation
//                   ) {
//                     (a(A, w.sibling),
//                       (Y = l(w, z.children || [])),
//                       (Y.return = A),
//                       (A = Y));
//                     break t;
//                   } else {
//                     a(A, w);
//                     break;
//                   }
//                 else e(A, w);
//                 w = w.sibling;
//               }
//               ((Y = tc(z, A.mode, Y)), (Y.return = A), (A = Y));
//             }
//             return u(A);
//           case Z:
//             return ((z = Cn(z)), Ut(A, w, z, Y));
//         }
//         if (bt(z)) return F(A, w, z, Y);
//         if (gt(z)) {
//           if (((ot = gt(z)), typeof ot != "function")) throw Error(c(150));
//           return ((z = ot.call(z)), rt(A, w, z, Y));
//         }
//         if (typeof z.then == "function") return Ut(A, w, ds(z), Y);
//         if (z.$$typeof === J) return Ut(A, w, cs(A, z), Y);
//         ms(A, z);
//       }
//       return (typeof z == "string" && z !== "") ||
//         typeof z == "number" ||
//         typeof z == "bigint"
//         ? ((z = "" + z),
//           w !== null && w.tag === 6
//             ? (a(A, w.sibling), (Y = l(w, z)), (Y.return = A), (A = Y))
//             : (a(A, w), (Y = Io(z, A.mode, Y)), (Y.return = A), (A = Y)),
//           u(A))
//         : a(A, w);
//     }
//     return function (A, w, z, Y) {
//       try {
//         si = 0;
//         var ot = Ut(A, w, z, Y);
//         return ((ml = null), ot);
//       } catch (nt) {
//         if (nt === dl || nt === us) throw nt;
//         var Ot = Ce(29, nt, null, A.mode);
//         return ((Ot.lanes = Y), (Ot.return = A), Ot);
//       } finally {
//       }
//     };
//   }
//   var _n = Tf(!0),
//     zf = Tf(!1),
//     Ka = !1;
//   function dc(t) {
//     t.updateQueue = {
//       baseState: t.memoizedState,
//       firstBaseUpdate: null,
//       lastBaseUpdate: null,
//       shared: {
//         pending: null,
//         lanes: 0,
//         hiddenCallbacks: null,
//       },
//       callbacks: null,
//     };
//   }
//   function mc(t, e) {
//     ((t = t.updateQueue),
//       e.updateQueue === t &&
//         (e.updateQueue = {
//           baseState: t.baseState,
//           firstBaseUpdate: t.firstBaseUpdate,
//           lastBaseUpdate: t.lastBaseUpdate,
//           shared: t.shared,
//           callbacks: null,
//         }));
//   }
//   function Ja(t) {
//     return {
//       lane: t,
//       tag: 0,
//       payload: null,
//       callback: null,
//       next: null,
//     };
//   }
//   function Wa(t, e, a) {
//     var n = t.updateQueue;
//     if (n === null) return null;
//     if (((n = n.shared), (Ct & 2) !== 0)) {
//       var l = n.pending;
//       return (
//         l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
//         (n.pending = e),
//         (e = ls(t)),
//         uf(t, null, a),
//         e
//       );
//     }
//     return (ns(t, n, e, a), ls(t));
//   }
//   function ci(t, e, a) {
//     if (
//       ((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))
//     ) {
//       var n = e.lanes;
//       ((n &= t.pendingLanes), (a |= n), (e.lanes = a), ve(t, a));
//     }
//   }
//   function hc(t, e) {
//     var a = t.updateQueue,
//       n = t.alternate;
//     if (n !== null && ((n = n.updateQueue), a === n)) {
//       var l = null,
//         s = null;
//       if (((a = a.firstBaseUpdate), a !== null)) {
//         do {
//           var u = {
//             lane: a.lane,
//             tag: a.tag,
//             payload: a.payload,
//             callback: null,
//             next: null,
//           };
//           (s === null ? (l = s = u) : (s = s.next = u), (a = a.next));
//         } while (a !== null);
//         s === null ? (l = s = e) : (s = s.next = e);
//       } else l = s = e;
//       ((a = {
//         baseState: n.baseState,
//         firstBaseUpdate: l,
//         lastBaseUpdate: s,
//         shared: n.shared,
//         callbacks: n.callbacks,
//       }),
//         (t.updateQueue = a));
//       return;
//     }
//     ((t = a.lastBaseUpdate),
//       t === null ? (a.firstBaseUpdate = e) : (t.next = e),
//       (a.lastBaseUpdate = e));
//   }
//   var gc = !1;
//   function ri() {
//     if (gc) {
//       var t = fl;
//       if (t !== null) throw t;
//     }
//   }
//   function ui(t, e, a, n) {
//     gc = !1;
//     var l = t.updateQueue;
//     Ka = !1;
//     var s = l.firstBaseUpdate,
//       u = l.lastBaseUpdate,
//       h = l.shared.pending;
//     if (h !== null) {
//       l.shared.pending = null;
//       var b = h,
//         H = b.next;
//       ((b.next = null), u === null ? (s = H) : (u.next = H), (u = b));
//       var D = t.alternate;
//       D !== null &&
//         ((D = D.updateQueue),
//         (h = D.lastBaseUpdate),
//         h !== u &&
//           (h === null ? (D.firstBaseUpdate = H) : (h.next = H),
//           (D.lastBaseUpdate = b)));
//     }
//     if (s !== null) {
//       var G = l.baseState;
//       ((u = 0), (D = H = b = null), (h = s));
//       do {
//         var j = h.lane & -536870913,
//           R = j !== h.lane;
//         if (R ? (Nt & j) === j : (n & j) === j) {
//           (j !== 0 && j === ul && (gc = !0),
//             D !== null &&
//               (D = D.next =
//                 {
//                   lane: 0,
//                   tag: h.tag,
//                   payload: h.payload,
//                   callback: null,
//                   next: null,
//                 }));
//           t: {
//             var F = t,
//               rt = h;
//             j = e;
//             var Ut = a;
//             switch (rt.tag) {
//               case 1:
//                 if (((F = rt.payload), typeof F == "function")) {
//                   G = F.call(Ut, G, j);
//                   break t;
//                 }
//                 G = F;
//                 break t;
//               case 3:
//                 F.flags = (F.flags & -65537) | 128;
//               case 0:
//                 if (
//                   ((F = rt.payload),
//                   (j = typeof F == "function" ? F.call(Ut, G, j) : F),
//                   j == null)
//                 )
//                   break t;
//                 G = m({}, G, j);
//                 break t;
//               case 2:
//                 Ka = !0;
//             }
//           }
//           ((j = h.callback),
//             j !== null &&
//               ((t.flags |= 64),
//               R && (t.flags |= 8192),
//               (R = l.callbacks),
//               R === null ? (l.callbacks = [j]) : R.push(j)));
//         } else
//           ((R = {
//             lane: j,
//             tag: h.tag,
//             payload: h.payload,
//             callback: h.callback,
//             next: null,
//           }),
//             D === null ? ((H = D = R), (b = G)) : (D = D.next = R),
//             (u |= j));
//         if (((h = h.next), h === null)) {
//           if (((h = l.shared.pending), h === null)) break;
//           ((R = h),
//             (h = R.next),
//             (R.next = null),
//             (l.lastBaseUpdate = R),
//             (l.shared.pending = null));
//         }
//       } while (!0);
//       (D === null && (b = G),
//         (l.baseState = b),
//         (l.firstBaseUpdate = H),
//         (l.lastBaseUpdate = D),
//         s === null && (l.shared.lanes = 0),
//         (tn |= u),
//         (t.lanes = u),
//         (t.memoizedState = G));
//     }
//   }
//   function Hf(t, e) {
//     if (typeof t != "function") throw Error(c(191, t));
//     t.call(e);
//   }
//   function Of(t, e) {
//     var a = t.callbacks;
//     if (a !== null)
//       for (t.callbacks = null, t = 0; t < a.length; t++) Hf(a[t], e);
//   }
//   var hl = E(null),
//     hs = E(0);
//   function jf(t, e) {
//     ((t = Ca), U(hs, t), U(hl, e), (Ca = t | e.baseLanes));
//   }
//   function pc() {
//     (U(hs, Ca), U(hl, hl.current));
//   }
//   function yc() {
//     ((Ca = hs.current), B(hl), B(hs));
//   }
//   var Me = E(null),
//     Ze = null;
//   function $a(t) {
//     var e = t.alternate;
//     (U(Qt, Qt.current & 1),
//       U(Me, t),
//       Ze === null &&
//         (e === null || hl.current !== null || e.memoizedState !== null) &&
//         (Ze = t));
//   }
//   function vc(t) {
//     (U(Qt, Qt.current), U(Me, t), Ze === null && (Ze = t));
//   }
//   function Cf(t) {
//     t.tag === 22
//       ? (U(Qt, Qt.current), U(Me, t), Ze === null && (Ze = t))
//       : Fa();
//   }
//   function Fa() {
//     (U(Qt, Qt.current), U(Me, Me.current));
//   }
//   function _e(t) {
//     (B(Me), Ze === t && (Ze = null), B(Qt));
//   }
//   var Qt = E(0);
//   function gs(t) {
//     for (var e = t; e !== null; ) {
//       if (e.tag === 13) {
//         var a = e.memoizedState;
//         if (a !== null && ((a = a.dehydrated), a === null || Nr(a) || Ar(a)))
//           return e;
//       } else if (
//         e.tag === 19 &&
//         (e.memoizedProps.revealOrder === "forwards" ||
//           e.memoizedProps.revealOrder === "backwards" ||
//           e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
//           e.memoizedProps.revealOrder === "together")
//       ) {
//         if ((e.flags & 128) !== 0) return e;
//       } else if (e.child !== null) {
//         ((e.child.return = e), (e = e.child));
//         continue;
//       }
//       if (e === t) break;
//       for (; e.sibling === null; ) {
//         if (e.return === null || e.return === t) return null;
//         e = e.return;
//       }
//       ((e.sibling.return = e.return), (e = e.sibling));
//     }
//     return null;
//   }
//   var wa = 0,
//     ht = null,
//     Rt = null,
//     Jt = null,
//     ps = !1,
//     gl = !1,
//     Rn = !1,
//     ys = 0,
//     fi = 0,
//     pl = null,
//     o0 = 0;
//   function Vt() {
//     throw Error(c(321));
//   }
//   function xc(t, e) {
//     if (e === null) return !1;
//     for (var a = 0; a < e.length && a < t.length; a++)
//       if (!je(t[a], e[a])) return !1;
//     return !0;
//   }
//   function bc(t, e, a, n, l, s) {
//     return (
//       (wa = s),
//       (ht = e),
//       (e.memoizedState = null),
//       (e.updateQueue = null),
//       (e.lanes = 0),
//       (N.H = t === null || t.memoizedState === null ? hd : Dc),
//       (Rn = !1),
//       (s = a(n, l)),
//       (Rn = !1),
//       gl && (s = _f(e, a, n, l)),
//       Mf(t),
//       s
//     );
//   }
//   function Mf(t) {
//     N.H = hi;
//     var e = Rt !== null && Rt.next !== null;
//     if (((wa = 0), (Jt = Rt = ht = null), (ps = !1), (fi = 0), (pl = null), e))
//       throw Error(c(300));
//     t === null ||
//       Wt ||
//       ((t = t.dependencies), t !== null && os(t) && (Wt = !0));
//   }
//   function _f(t, e, a, n) {
//     ht = t;
//     var l = 0;
//     do {
//       if ((gl && (pl = null), (fi = 0), (gl = !1), 25 <= l))
//         throw Error(c(301));
//       if (((l += 1), (Jt = Rt = null), t.updateQueue != null)) {
//         var s = t.updateQueue;
//         ((s.lastEffect = null),
//           (s.events = null),
//           (s.stores = null),
//           s.memoCache != null && (s.memoCache.index = 0));
//       }
//       ((N.H = gd), (s = e(a, n)));
//     } while (gl);
//     return s;
//   }
//   function c0() {
//     var t = N.H,
//       e = t.useState()[0];
//     return (
//       (e = typeof e.then == "function" ? di(e) : e),
//       (t = t.useState()[0]),
//       (Rt !== null ? Rt.memoizedState : null) !== t && (ht.flags |= 1024),
//       e
//     );
//   }
//   function Sc() {
//     var t = ys !== 0;
//     return ((ys = 0), t);
//   }
//   function Ec(t, e, a) {
//     ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a));
//   }
//   function wc(t) {
//     if (ps) {
//       for (t = t.memoizedState; t !== null; ) {
//         var e = t.queue;
//         (e !== null && (e.pending = null), (t = t.next));
//       }
//       ps = !1;
//     }
//     ((wa = 0), (Jt = Rt = ht = null), (gl = !1), (fi = ys = 0), (pl = null));
//   }
//   function pe() {
//     var t = {
//       memoizedState: null,
//       baseState: null,
//       baseQueue: null,
//       queue: null,
//       next: null,
//     };
//     return (Jt === null ? (ht.memoizedState = Jt = t) : (Jt = Jt.next = t), Jt);
//   }
//   function Zt() {
//     if (Rt === null) {
//       var t = ht.alternate;
//       t = t !== null ? t.memoizedState : null;
//     } else t = Rt.next;
//     var e = Jt === null ? ht.memoizedState : Jt.next;
//     if (e !== null) ((Jt = e), (Rt = t));
//     else {
//       if (t === null)
//         throw ht.alternate === null ? Error(c(467)) : Error(c(310));
//       ((Rt = t),
//         (t = {
//           memoizedState: Rt.memoizedState,
//           baseState: Rt.baseState,
//           baseQueue: Rt.baseQueue,
//           queue: Rt.queue,
//           next: null,
//         }),
//         Jt === null ? (ht.memoizedState = Jt = t) : (Jt = Jt.next = t));
//     }
//     return Jt;
//   }
//   function vs() {
//     return {
//       lastEffect: null,
//       events: null,
//       stores: null,
//       memoCache: null,
//     };
//   }
//   function di(t) {
//     var e = fi;
//     return (
//       (fi += 1),
//       pl === null && (pl = []),
//       (t = wf(pl, t, e)),
//       (e = ht),
//       (Jt === null ? e.memoizedState : Jt.next) === null &&
//         ((e = e.alternate),
//         (N.H = e === null || e.memoizedState === null ? hd : Dc)),
//       t
//     );
//   }
//   function xs(t) {
//     if (t !== null && typeof t == "object") {
//       if (typeof t.then == "function") return di(t);
//       if (t.$$typeof === J) return se(t);
//     }
//     throw Error(c(438, String(t)));
//   }
//   function Nc(t) {
//     var e = null,
//       a = ht.updateQueue;
//     if ((a !== null && (e = a.memoCache), e == null)) {
//       var n = ht.alternate;
//       n !== null &&
//         ((n = n.updateQueue),
//         n !== null &&
//           ((n = n.memoCache),
//           n != null &&
//             (e = {
//               data: n.data.map(function (l) {
//                 return l.slice();
//               }),
//               index: 0,
//             })));
//     }
//     if (
//       (e == null &&
//         (e = {
//           data: [],
//           index: 0,
//         }),
//       a === null && ((a = vs()), (ht.updateQueue = a)),
//       (a.memoCache = e),
//       (a = e.data[e.index]),
//       a === void 0)
//     )
//       for (a = e.data[e.index] = Array(t), n = 0; n < t; n++) a[n] = St;
//     return (e.index++, a);
//   }
//   function Na(t, e) {
//     return typeof e == "function" ? e(t) : e;
//   }
//   function bs(t) {
//     var e = Zt();
//     return Ac(e, Rt, t);
//   }
//   function Ac(t, e, a) {
//     var n = t.queue;
//     if (n === null) throw Error(c(311));
//     n.lastRenderedReducer = a;
//     var l = t.baseQueue,
//       s = n.pending;
//     if (s !== null) {
//       if (l !== null) {
//         var u = l.next;
//         ((l.next = s.next), (s.next = u));
//       }
//       ((e.baseQueue = l = s), (n.pending = null));
//     }
//     if (((s = t.baseState), l === null)) t.memoizedState = s;
//     else {
//       e = l.next;
//       var h = (u = null),
//         b = null,
//         H = e,
//         D = !1;
//       do {
//         var G = H.lane & -536870913;
//         if (G !== H.lane ? (Nt & G) === G : (wa & G) === G) {
//           var j = H.revertLane;
//           if (j === 0)
//             (b !== null &&
//               (b = b.next =
//                 {
//                   lane: 0,
//                   revertLane: 0,
//                   gesture: null,
//                   action: H.action,
//                   hasEagerState: H.hasEagerState,
//                   eagerState: H.eagerState,
//                   next: null,
//                 }),
//               G === ul && (D = !0));
//           else if ((wa & j) === j) {
//             ((H = H.next), j === ul && (D = !0));
//             continue;
//           } else
//             ((G = {
//               lane: 0,
//               revertLane: H.revertLane,
//               gesture: null,
//               action: H.action,
//               hasEagerState: H.hasEagerState,
//               eagerState: H.eagerState,
//               next: null,
//             }),
//               b === null ? ((h = b = G), (u = s)) : (b = b.next = G),
//               (ht.lanes |= j),
//               (tn |= j));
//           ((G = H.action),
//             Rn && a(s, G),
//             (s = H.hasEagerState ? H.eagerState : a(s, G)));
//         } else
//           ((j = {
//             lane: G,
//             revertLane: H.revertLane,
//             gesture: H.gesture,
//             action: H.action,
//             hasEagerState: H.hasEagerState,
//             eagerState: H.eagerState,
//             next: null,
//           }),
//             b === null ? ((h = b = j), (u = s)) : (b = b.next = j),
//             (ht.lanes |= G),
//             (tn |= G));
//         H = H.next;
//       } while (H !== null && H !== e);
//       if (
//         (b === null ? (u = s) : (b.next = h),
//         !je(s, t.memoizedState) && ((Wt = !0), D && ((a = fl), a !== null)))
//       )
//         throw a;
//       ((t.memoizedState = s),
//         (t.baseState = u),
//         (t.baseQueue = b),
//         (n.lastRenderedState = s));
//     }
//     return (l === null && (n.lanes = 0), [t.memoizedState, n.dispatch]);
//   }
//   function Tc(t) {
//     var e = Zt(),
//       a = e.queue;
//     if (a === null) throw Error(c(311));
//     a.lastRenderedReducer = t;
//     var n = a.dispatch,
//       l = a.pending,
//       s = e.memoizedState;
//     if (l !== null) {
//       a.pending = null;
//       var u = (l = l.next);
//       do ((s = t(s, u.action)), (u = u.next));
//       while (u !== l);
//       (je(s, e.memoizedState) || (Wt = !0),
//         (e.memoizedState = s),
//         e.baseQueue === null && (e.baseState = s),
//         (a.lastRenderedState = s));
//     }
//     return [s, n];
//   }
//   function Rf(t, e, a) {
//     var n = ht,
//       l = Zt(),
//       s = zt;
//     if (s) {
//       if (a === void 0) throw Error(c(407));
//       a = a();
//     } else a = e();
//     var u = !je((Rt || l).memoizedState, a);
//     if (
//       (u && ((l.memoizedState = a), (Wt = !0)),
//       (l = l.queue),
//       Oc(Bf.bind(null, n, l, t), [t]),
//       l.getSnapshot !== e || u || (Jt !== null && Jt.memoizedState.tag & 1))
//     ) {
//       if (
//         ((n.flags |= 2048),
//         yl(
//           9,
//           {
//             destroy: void 0,
//           },
//           Uf.bind(null, n, l, a, e),
//           null,
//         ),
//         Bt === null)
//       )
//         throw Error(c(349));
//       s || (wa & 127) !== 0 || Df(n, e, a);
//     }
//     return a;
//   }
//   function Df(t, e, a) {
//     ((t.flags |= 16384),
//       (t = {
//         getSnapshot: e,
//         value: a,
//       }),
//       (e = ht.updateQueue),
//       e === null
//         ? ((e = vs()), (ht.updateQueue = e), (e.stores = [t]))
//         : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t)));
//   }
//   function Uf(t, e, a, n) {
//     ((e.value = a), (e.getSnapshot = n), Lf(e) && Yf(t));
//   }
//   function Bf(t, e, a) {
//     return a(function () {
//       Lf(e) && Yf(t);
//     });
//   }
//   function Lf(t) {
//     var e = t.getSnapshot;
//     t = t.value;
//     try {
//       var a = e();
//       return !je(t, a);
//     } catch {
//       return !0;
//     }
//   }
//   function Yf(t) {
//     var e = An(t, 2);
//     e !== null && Te(e, t, 2);
//   }
//   function zc(t) {
//     var e = pe();
//     if (typeof t == "function") {
//       var a = t;
//       if (((t = a()), Rn)) {
//         $e(!0);
//         try {
//           a();
//         } finally {
//           $e(!1);
//         }
//       }
//     }
//     return (
//       (e.memoizedState = e.baseState = t),
//       (e.queue = {
//         pending: null,
//         lanes: 0,
//         dispatch: null,
//         lastRenderedReducer: Na,
//         lastRenderedState: t,
//       }),
//       e
//     );
//   }
//   function qf(t, e, a, n) {
//     return ((t.baseState = a), Ac(t, Rt, typeof n == "function" ? n : Na));
//   }
//   function r0(t, e, a, n, l) {
//     if (ws(t)) throw Error(c(485));
//     if (((t = e.action), t !== null)) {
//       var s = {
//         payload: l,
//         action: t,
//         next: null,
//         isTransition: !0,
//         status: "pending",
//         value: null,
//         reason: null,
//         listeners: [],
//         then: function (u) {
//           s.listeners.push(u);
//         },
//       };
//       (N.T !== null ? a(!0) : (s.isTransition = !1),
//         n(s),
//         (a = e.pending),
//         a === null
//           ? ((s.next = e.pending = s), Gf(e, s))
//           : ((s.next = a.next), (e.pending = a.next = s)));
//     }
//   }
//   function Gf(t, e) {
//     var a = e.action,
//       n = e.payload,
//       l = t.state;
//     if (e.isTransition) {
//       var s = N.T,
//         u = {};
//       N.T = u;
//       try {
//         var h = a(l, n),
//           b = N.S;
//         (b !== null && b(u, h), kf(t, e, h));
//       } catch (H) {
//         Hc(t, e, H);
//       } finally {
//         (s !== null && u.types !== null && (s.types = u.types), (N.T = s));
//       }
//     } else
//       try {
//         ((s = a(l, n)), kf(t, e, s));
//       } catch (H) {
//         Hc(t, e, H);
//       }
//   }
//   function kf(t, e, a) {
//     a !== null && typeof a == "object" && typeof a.then == "function"
//       ? a.then(
//           function (n) {
//             Vf(t, e, n);
//           },
//           function (n) {
//             return Hc(t, e, n);
//           },
//         )
//       : Vf(t, e, a);
//   }
//   function Vf(t, e, a) {
//     ((e.status = "fulfilled"),
//       (e.value = a),
//       Xf(e),
//       (t.state = a),
//       (e = t.pending),
//       e !== null &&
//         ((a = e.next),
//         a === e ? (t.pending = null) : ((a = a.next), (e.next = a), Gf(t, a))));
//   }
//   function Hc(t, e, a) {
//     var n = t.pending;
//     if (((t.pending = null), n !== null)) {
//       n = n.next;
//       do ((e.status = "rejected"), (e.reason = a), Xf(e), (e = e.next));
//       while (e !== n);
//     }
//     t.action = null;
//   }
//   function Xf(t) {
//     t = t.listeners;
//     for (var e = 0; e < t.length; e++) (0, t[e])();
//   }
//   function Qf(t, e) {
//     return e;
//   }
//   function Zf(t, e) {
//     if (zt) {
//       var a = Bt.formState;
//       if (a !== null) {
//         t: {
//           var n = ht;
//           if (zt) {
//             if (Lt) {
//               e: {
//                 for (var l = Lt, s = Qe; l.nodeType !== 8; ) {
//                   if (!s) {
//                     l = null;
//                     break e;
//                   }
//                   if (((l = Ke(l.nextSibling)), l === null)) {
//                     l = null;
//                     break e;
//                   }
//                 }
//                 ((s = l.data), (l = s === "F!" || s === "F" ? l : null));
//               }
//               if (l) {
//                 ((Lt = Ke(l.nextSibling)), (n = l.data === "F!"));
//                 break t;
//               }
//             }
//             Qa(n);
//           }
//           n = !1;
//         }
//         n && (e = a[0]);
//       }
//     }
//     return (
//       (a = pe()),
//       (a.memoizedState = a.baseState = e),
//       (n = {
//         pending: null,
//         lanes: 0,
//         dispatch: null,
//         lastRenderedReducer: Qf,
//         lastRenderedState: e,
//       }),
//       (a.queue = n),
//       (a = fd.bind(null, ht, n)),
//       (n.dispatch = a),
//       (n = zc(!1)),
//       (s = Rc.bind(null, ht, !1, n.queue)),
//       (n = pe()),
//       (l = {
//         state: e,
//         dispatch: null,
//         action: t,
//         pending: null,
//       }),
//       (n.queue = l),
//       (a = r0.bind(null, ht, l, s, a)),
//       (l.dispatch = a),
//       (n.memoizedState = t),
//       [e, a, !1]
//     );
//   }
//   function Kf(t) {
//     var e = Zt();
//     return Jf(e, Rt, t);
//   }
//   function Jf(t, e, a) {
//     if (
//       ((e = Ac(t, e, Qf)[0]),
//       (t = bs(Na)[0]),
//       typeof e == "object" && e !== null && typeof e.then == "function")
//     )
//       try {
//         var n = di(e);
//       } catch (u) {
//         throw u === dl ? us : u;
//       }
//     else n = e;
//     e = Zt();
//     var l = e.queue,
//       s = l.dispatch;
//     return (
//       a !== e.memoizedState &&
//         ((ht.flags |= 2048),
//         yl(
//           9,
//           {
//             destroy: void 0,
//           },
//           u0.bind(null, l, a),
//           null,
//         )),
//       [n, s, t]
//     );
//   }
//   function u0(t, e) {
//     t.action = e;
//   }
//   function Wf(t) {
//     var e = Zt(),
//       a = Rt;
//     if (a !== null) return Jf(e, a, t);
//     (Zt(), (e = e.memoizedState), (a = Zt()));
//     var n = a.queue.dispatch;
//     return ((a.memoizedState = t), [e, n, !1]);
//   }
//   function yl(t, e, a, n) {
//     return (
//       (t = {
//         tag: t,
//         create: a,
//         deps: n,
//         inst: e,
//         next: null,
//       }),
//       (e = ht.updateQueue),
//       e === null && ((e = vs()), (ht.updateQueue = e)),
//       (a = e.lastEffect),
//       a === null
//         ? (e.lastEffect = t.next = t)
//         : ((n = a.next), (a.next = t), (t.next = n), (e.lastEffect = t)),
//       t
//     );
//   }
//   function $f() {
//     return Zt().memoizedState;
//   }
//   function Ss(t, e, a, n) {
//     var l = pe();
//     ((ht.flags |= t),
//       (l.memoizedState = yl(
//         1 | e,
//         {
//           destroy: void 0,
//         },
//         a,
//         n === void 0 ? null : n,
//       )));
//   }
//   function Es(t, e, a, n) {
//     var l = Zt();
//     n = n === void 0 ? null : n;
//     var s = l.memoizedState.inst;
//     Rt !== null && n !== null && xc(n, Rt.memoizedState.deps)
//       ? (l.memoizedState = yl(e, s, a, n))
//       : ((ht.flags |= t), (l.memoizedState = yl(1 | e, s, a, n)));
//   }
//   function Ff(t, e) {
//     Ss(8390656, 8, t, e);
//   }
//   function Oc(t, e) {
//     Es(2048, 8, t, e);
//   }
//   function f0(t) {
//     ht.flags |= 4;
//     var e = ht.updateQueue;
//     if (e === null) ((e = vs()), (ht.updateQueue = e), (e.events = [t]));
//     else {
//       var a = e.events;
//       a === null ? (e.events = [t]) : a.push(t);
//     }
//   }
//   function Pf(t) {
//     var e = Zt().memoizedState;
//     return (
//       f0({
//         ref: e,
//         nextImpl: t,
//       }),
//       function () {
//         if ((Ct & 2) !== 0) throw Error(c(440));
//         return e.impl.apply(void 0, arguments);
//       }
//     );
//   }
//   function If(t, e) {
//     return Es(4, 2, t, e);
//   }
//   function td(t, e) {
//     return Es(4, 4, t, e);
//   }
//   function ed(t, e) {
//     if (typeof e == "function") {
//       t = t();
//       var a = e(t);
//       return function () {
//         typeof a == "function" ? a() : e(null);
//       };
//     }
//     if (e != null)
//       return (
//         (t = t()),
//         (e.current = t),
//         function () {
//           e.current = null;
//         }
//       );
//   }
//   function ad(t, e, a) {
//     ((a = a != null ? a.concat([t]) : null), Es(4, 4, ed.bind(null, e, t), a));
//   }
//   function jc() {}
//   function nd(t, e) {
//     var a = Zt();
//     e = e === void 0 ? null : e;
//     var n = a.memoizedState;
//     return e !== null && xc(e, n[1]) ? n[0] : ((a.memoizedState = [t, e]), t);
//   }
//   function ld(t, e) {
//     var a = Zt();
//     e = e === void 0 ? null : e;
//     var n = a.memoizedState;
//     if (e !== null && xc(e, n[1])) return n[0];
//     if (((n = t()), Rn)) {
//       $e(!0);
//       try {
//         t();
//       } finally {
//         $e(!1);
//       }
//     }
//     return ((a.memoizedState = [n, e]), n);
//   }
//   function Cc(t, e, a) {
//     return a === void 0 || ((wa & 1073741824) !== 0 && (Nt & 261930) === 0)
//       ? (t.memoizedState = e)
//       : ((t.memoizedState = a), (t = im()), (ht.lanes |= t), (tn |= t), a);
//   }
//   function id(t, e, a, n) {
//     return je(a, e)
//       ? a
//       : hl.current !== null
//         ? ((t = Cc(t, a, n)), je(t, e) || (Wt = !0), t)
//         : (wa & 42) === 0 || ((wa & 1073741824) !== 0 && (Nt & 261930) === 0)
//           ? ((Wt = !0), (t.memoizedState = a))
//           : ((t = im()), (ht.lanes |= t), (tn |= t), e);
//   }
//   function sd(t, e, a, n, l) {
//     var s = L.p;
//     L.p = s !== 0 && 8 > s ? s : 8;
//     var u = N.T,
//       h = {};
//     ((N.T = h), Rc(t, !1, e, a));
//     try {
//       var b = l(),
//         H = N.S;
//       if (
//         (H !== null && H(h, b),
//         b !== null && typeof b == "object" && typeof b.then == "function")
//       ) {
//         var D = s0(b, n);
//         mi(t, e, D, Ue(t));
//       } else mi(t, e, n, Ue(t));
//     } catch (G) {
//       mi(
//         t,
//         e,
//         {
//           then: function () {},
//           status: "rejected",
//           reason: G,
//         },
//         Ue(),
//       );
//     } finally {
//       ((L.p = s),
//         u !== null && h.types !== null && (u.types = h.types),
//         (N.T = u));
//     }
//   }
//   function d0() {}
//   function Mc(t, e, a, n) {
//     if (t.tag !== 5) throw Error(c(476));
//     var l = od(t).queue;
//     sd(
//       t,
//       l,
//       e,
//       _,
//       a === null
//         ? d0
//         : function () {
//             return (cd(t), a(n));
//           },
//     );
//   }
//   function od(t) {
//     var e = t.memoizedState;
//     if (e !== null) return e;
//     e = {
//       memoizedState: _,
//       baseState: _,
//       baseQueue: null,
//       queue: {
//         pending: null,
//         lanes: 0,
//         dispatch: null,
//         lastRenderedReducer: Na,
//         lastRenderedState: _,
//       },
//       next: null,
//     };
//     var a = {};
//     return (
//       (e.next = {
//         memoizedState: a,
//         baseState: a,
//         baseQueue: null,
//         queue: {
//           pending: null,
//           lanes: 0,
//           dispatch: null,
//           lastRenderedReducer: Na,
//           lastRenderedState: a,
//         },
//         next: null,
//       }),
//       (t.memoizedState = e),
//       (t = t.alternate),
//       t !== null && (t.memoizedState = e),
//       e
//     );
//   }
//   function cd(t) {
//     var e = od(t);
//     (e.next === null && (e = t.alternate.memoizedState),
//       mi(t, e.next.queue, {}, Ue()));
//   }
//   function _c() {
//     return se(ji);
//   }
//   function rd() {
//     return Zt().memoizedState;
//   }
//   function ud() {
//     return Zt().memoizedState;
//   }
//   function m0(t) {
//     for (var e = t.return; e !== null; ) {
//       switch (e.tag) {
//         case 24:
//         case 3:
//           var a = Ue();
//           t = Ja(a);
//           var n = Wa(e, t, a);
//           (n !== null && (Te(n, e, a), ci(n, e, a)),
//             (e = {
//               cache: cc(),
//             }),
//             (t.payload = e));
//           return;
//       }
//       e = e.return;
//     }
//   }
//   function h0(t, e, a) {
//     var n = Ue();
//     ((a = {
//       lane: n,
//       revertLane: 0,
//       gesture: null,
//       action: a,
//       hasEagerState: !1,
//       eagerState: null,
//       next: null,
//     }),
//       ws(t)
//         ? dd(e, a)
//         : ((a = Fo(t, e, a, n)), a !== null && (Te(a, t, n), md(a, e, n))));
//   }
//   function fd(t, e, a) {
//     var n = Ue();
//     mi(t, e, a, n);
//   }
//   function mi(t, e, a, n) {
//     var l = {
//       lane: n,
//       revertLane: 0,
//       gesture: null,
//       action: a,
//       hasEagerState: !1,
//       eagerState: null,
//       next: null,
//     };
//     if (ws(t)) dd(e, l);
//     else {
//       var s = t.alternate;
//       if (
//         t.lanes === 0 &&
//         (s === null || s.lanes === 0) &&
//         ((s = e.lastRenderedReducer), s !== null)
//       )
//         try {
//           var u = e.lastRenderedState,
//             h = s(u, a);
//           if (((l.hasEagerState = !0), (l.eagerState = h), je(h, u)))
//             return (ns(t, e, l, 0), Bt === null && as(), !1);
//         } catch {
//         } finally {
//         }
//       if (((a = Fo(t, e, l, n)), a !== null))
//         return (Te(a, t, n), md(a, e, n), !0);
//     }
//     return !1;
//   }
//   function Rc(t, e, a, n) {
//     if (
//       ((n = {
//         lane: 2,
//         revertLane: dr(),
//         gesture: null,
//         action: n,
//         hasEagerState: !1,
//         eagerState: null,
//         next: null,
//       }),
//       ws(t))
//     ) {
//       if (e) throw Error(c(479));
//     } else ((e = Fo(t, a, n, 2)), e !== null && Te(e, t, 2));
//   }
//   function ws(t) {
//     var e = t.alternate;
//     return t === ht || (e !== null && e === ht);
//   }
//   function dd(t, e) {
//     gl = ps = !0;
//     var a = t.pending;
//     (a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
//       (t.pending = e));
//   }
//   function md(t, e, a) {
//     if ((a & 4194048) !== 0) {
//       var n = e.lanes;
//       ((n &= t.pendingLanes), (a |= n), (e.lanes = a), ve(t, a));
//     }
//   }
//   var hi = {
//     readContext: se,
//     use: xs,
//     useCallback: Vt,
//     useContext: Vt,
//     useEffect: Vt,
//     useImperativeHandle: Vt,
//     useLayoutEffect: Vt,
//     useInsertionEffect: Vt,
//     useMemo: Vt,
//     useReducer: Vt,
//     useRef: Vt,
//     useState: Vt,
//     useDebugValue: Vt,
//     useDeferredValue: Vt,
//     useTransition: Vt,
//     useSyncExternalStore: Vt,
//     useId: Vt,
//     useHostTransitionStatus: Vt,
//     useFormState: Vt,
//     useActionState: Vt,
//     useOptimistic: Vt,
//     useMemoCache: Vt,
//     useCacheRefresh: Vt,
//   };
//   hi.useEffectEvent = Vt;
//   var hd = {
//       readContext: se,
//       use: xs,
//       useCallback: function (t, e) {
//         return ((pe().memoizedState = [t, e === void 0 ? null : e]), t);
//       },
//       useContext: se,
//       useEffect: Ff,
//       useImperativeHandle: function (t, e, a) {
//         ((a = a != null ? a.concat([t]) : null),
//           Ss(4194308, 4, ed.bind(null, e, t), a));
//       },
//       useLayoutEffect: function (t, e) {
//         return Ss(4194308, 4, t, e);
//       },
//       useInsertionEffect: function (t, e) {
//         Ss(4, 2, t, e);
//       },
//       useMemo: function (t, e) {
//         var a = pe();
//         e = e === void 0 ? null : e;
//         var n = t();
//         if (Rn) {
//           $e(!0);
//           try {
//             t();
//           } finally {
//             $e(!1);
//           }
//         }
//         return ((a.memoizedState = [n, e]), n);
//       },
//       useReducer: function (t, e, a) {
//         var n = pe();
//         if (a !== void 0) {
//           var l = a(e);
//           if (Rn) {
//             $e(!0);
//             try {
//               a(e);
//             } finally {
//               $e(!1);
//             }
//           }
//         } else l = e;
//         return (
//           (n.memoizedState = n.baseState = l),
//           (t = {
//             pending: null,
//             lanes: 0,
//             dispatch: null,
//             lastRenderedReducer: t,
//             lastRenderedState: l,
//           }),
//           (n.queue = t),
//           (t = t.dispatch = h0.bind(null, ht, t)),
//           [n.memoizedState, t]
//         );
//       },
//       useRef: function (t) {
//         var e = pe();
//         return (
//           (t = {
//             current: t,
//           }),
//           (e.memoizedState = t)
//         );
//       },
//       useState: function (t) {
//         t = zc(t);
//         var e = t.queue,
//           a = fd.bind(null, ht, e);
//         return ((e.dispatch = a), [t.memoizedState, a]);
//       },
//       useDebugValue: jc,
//       useDeferredValue: function (t, e) {
//         var a = pe();
//         return Cc(a, t, e);
//       },
//       useTransition: function () {
//         var t = zc(!1);
//         return (
//           (t = sd.bind(null, ht, t.queue, !0, !1)),
//           (pe().memoizedState = t),
//           [!1, t]
//         );
//       },
//       useSyncExternalStore: function (t, e, a) {
//         var n = ht,
//           l = pe();
//         if (zt) {
//           if (a === void 0) throw Error(c(407));
//           a = a();
//         } else {
//           if (((a = e()), Bt === null)) throw Error(c(349));
//           (Nt & 127) !== 0 || Df(n, e, a);
//         }
//         l.memoizedState = a;
//         var s = {
//           value: a,
//           getSnapshot: e,
//         };
//         return (
//           (l.queue = s),
//           Ff(Bf.bind(null, n, s, t), [t]),
//           (n.flags |= 2048),
//           yl(
//             9,
//             {
//               destroy: void 0,
//             },
//             Uf.bind(null, n, s, a, e),
//             null,
//           ),
//           a
//         );
//       },
//       useId: function () {
//         var t = pe(),
//           e = Bt.identifierPrefix;
//         if (zt) {
//           var a = sa,
//             n = ia;
//           ((a = (n & ~(1 << (32 - re(n) - 1))).toString(32) + a),
//             (e = "_" + e + "R_" + a),
//             (a = ys++),
//             0 < a && (e += "H" + a.toString(32)),
//             (e += "_"));
//         } else ((a = o0++), (e = "_" + e + "r_" + a.toString(32) + "_"));
//         return (t.memoizedState = e);
//       },
//       useHostTransitionStatus: _c,
//       useFormState: Zf,
//       useActionState: Zf,
//       useOptimistic: function (t) {
//         var e = pe();
//         e.memoizedState = e.baseState = t;
//         var a = {
//           pending: null,
//           lanes: 0,
//           dispatch: null,
//           lastRenderedReducer: null,
//           lastRenderedState: null,
//         };
//         return (
//           (e.queue = a),
//           (e = Rc.bind(null, ht, !0, a)),
//           (a.dispatch = e),
//           [t, e]
//         );
//       },
//       useMemoCache: Nc,
//       useCacheRefresh: function () {
//         return (pe().memoizedState = m0.bind(null, ht));
//       },
//       useEffectEvent: function (t) {
//         var e = pe(),
//           a = {
//             impl: t,
//           };
//         return (
//           (e.memoizedState = a),
//           function () {
//             if ((Ct & 2) !== 0) throw Error(c(440));
//             return a.impl.apply(void 0, arguments);
//           }
//         );
//       },
//     },
//     Dc = {
//       readContext: se,
//       use: xs,
//       useCallback: nd,
//       useContext: se,
//       useEffect: Oc,
//       useImperativeHandle: ad,
//       useInsertionEffect: If,
//       useLayoutEffect: td,
//       useMemo: ld,
//       useReducer: bs,
//       useRef: $f,
//       useState: function () {
//         return bs(Na);
//       },
//       useDebugValue: jc,
//       useDeferredValue: function (t, e) {
//         var a = Zt();
//         return id(a, Rt.memoizedState, t, e);
//       },
//       useTransition: function () {
//         var t = bs(Na)[0],
//           e = Zt().memoizedState;
//         return [typeof t == "boolean" ? t : di(t), e];
//       },
//       useSyncExternalStore: Rf,
//       useId: rd,
//       useHostTransitionStatus: _c,
//       useFormState: Kf,
//       useActionState: Kf,
//       useOptimistic: function (t, e) {
//         var a = Zt();
//         return qf(a, Rt, t, e);
//       },
//       useMemoCache: Nc,
//       useCacheRefresh: ud,
//     };
//   Dc.useEffectEvent = Pf;
//   var gd = {
//     readContext: se,
//     use: xs,
//     useCallback: nd,
//     useContext: se,
//     useEffect: Oc,
//     useImperativeHandle: ad,
//     useInsertionEffect: If,
//     useLayoutEffect: td,
//     useMemo: ld,
//     useReducer: Tc,
//     useRef: $f,
//     useState: function () {
//       return Tc(Na);
//     },
//     useDebugValue: jc,
//     useDeferredValue: function (t, e) {
//       var a = Zt();
//       return Rt === null ? Cc(a, t, e) : id(a, Rt.memoizedState, t, e);
//     },
//     useTransition: function () {
//       var t = Tc(Na)[0],
//         e = Zt().memoizedState;
//       return [typeof t == "boolean" ? t : di(t), e];
//     },
//     useSyncExternalStore: Rf,
//     useId: rd,
//     useHostTransitionStatus: _c,
//     useFormState: Wf,
//     useActionState: Wf,
//     useOptimistic: function (t, e) {
//       var a = Zt();
//       return Rt !== null
//         ? qf(a, Rt, t, e)
//         : ((a.baseState = t), [t, a.queue.dispatch]);
//     },
//     useMemoCache: Nc,
//     useCacheRefresh: ud,
//   };
//   gd.useEffectEvent = Pf;
//   function Uc(t, e, a, n) {
//     ((e = t.memoizedState),
//       (a = a(n, e)),
//       (a = a == null ? e : m({}, e, a)),
//       (t.memoizedState = a),
//       t.lanes === 0 && (t.updateQueue.baseState = a));
//   }
//   var Bc = {
//     enqueueSetState: function (t, e, a) {
//       t = t._reactInternals;
//       var n = Ue(),
//         l = Ja(n);
//       ((l.payload = e),
//         a != null && (l.callback = a),
//         (e = Wa(t, l, n)),
//         e !== null && (Te(e, t, n), ci(e, t, n)));
//     },
//     enqueueReplaceState: function (t, e, a) {
//       t = t._reactInternals;
//       var n = Ue(),
//         l = Ja(n);
//       ((l.tag = 1),
//         (l.payload = e),
//         a != null && (l.callback = a),
//         (e = Wa(t, l, n)),
//         e !== null && (Te(e, t, n), ci(e, t, n)));
//     },
//     enqueueForceUpdate: function (t, e) {
//       t = t._reactInternals;
//       var a = Ue(),
//         n = Ja(a);
//       ((n.tag = 2),
//         e != null && (n.callback = e),
//         (e = Wa(t, n, a)),
//         e !== null && (Te(e, t, a), ci(e, t, a)));
//     },
//   };
//   function pd(t, e, a, n, l, s, u) {
//     return (
//       (t = t.stateNode),
//       typeof t.shouldComponentUpdate == "function"
//         ? t.shouldComponentUpdate(n, s, u)
//         : e.prototype && e.prototype.isPureReactComponent
//           ? !ti(a, n) || !ti(l, s)
//           : !0
//     );
//   }
//   function yd(t, e, a, n) {
//     ((t = e.state),
//       typeof e.componentWillReceiveProps == "function" &&
//         e.componentWillReceiveProps(a, n),
//       typeof e.UNSAFE_componentWillReceiveProps == "function" &&
//         e.UNSAFE_componentWillReceiveProps(a, n),
//       e.state !== t && Bc.enqueueReplaceState(e, e.state, null));
//   }
//   function Dn(t, e) {
//     var a = e;
//     if ("ref" in e) {
//       a = {};
//       for (var n in e) n !== "ref" && (a[n] = e[n]);
//     }
//     if ((t = t.defaultProps)) {
//       a === e && (a = m({}, a));
//       for (var l in t) a[l] === void 0 && (a[l] = t[l]);
//     }
//     return a;
//   }
//   function vd(t) {
//     es(t);
//   }
//   function xd(t) {
//     console.error(t);
//   }
//   function bd(t) {
//     es(t);
//   }
//   function Ns(t, e) {
//     try {
//       var a = t.onUncaughtError;
//       a(e.value, {
//         componentStack: e.stack,
//       });
//     } catch (n) {
//       setTimeout(function () {
//         throw n;
//       });
//     }
//   }
//   function Sd(t, e, a) {
//     try {
//       var n = t.onCaughtError;
//       n(a.value, {
//         componentStack: a.stack,
//         errorBoundary: e.tag === 1 ? e.stateNode : null,
//       });
//     } catch (l) {
//       setTimeout(function () {
//         throw l;
//       });
//     }
//   }
//   function Lc(t, e, a) {
//     return (
//       (a = Ja(a)),
//       (a.tag = 3),
//       (a.payload = {
//         element: null,
//       }),
//       (a.callback = function () {
//         Ns(t, e);
//       }),
//       a
//     );
//   }
//   function Ed(t) {
//     return ((t = Ja(t)), (t.tag = 3), t);
//   }
//   function wd(t, e, a, n) {
//     var l = a.type.getDerivedStateFromError;
//     if (typeof l == "function") {
//       var s = n.value;
//       ((t.payload = function () {
//         return l(s);
//       }),
//         (t.callback = function () {
//           Sd(e, a, n);
//         }));
//     }
//     var u = a.stateNode;
//     u !== null &&
//       typeof u.componentDidCatch == "function" &&
//       (t.callback = function () {
//         (Sd(e, a, n),
//           typeof l != "function" &&
//             (en === null ? (en = new Set([this])) : en.add(this)));
//         var h = n.stack;
//         this.componentDidCatch(n.value, {
//           componentStack: h !== null ? h : "",
//         });
//       });
//   }
//   function g0(t, e, a, n, l) {
//     if (
//       ((a.flags |= 32768),
//       n !== null && typeof n == "object" && typeof n.then == "function")
//     ) {
//       if (
//         ((e = a.alternate),
//         e !== null && rl(e, a, l, !0),
//         (a = Me.current),
//         a !== null)
//       ) {
//         switch (a.tag) {
//           case 31:
//           case 13:
//             return (
//               Ze === null ? Us() : a.alternate === null && Xt === 0 && (Xt = 3),
//               (a.flags &= -257),
//               (a.flags |= 65536),
//               (a.lanes = l),
//               n === fs
//                 ? (a.flags |= 16384)
//                 : ((e = a.updateQueue),
//                   e === null ? (a.updateQueue = new Set([n])) : e.add(n),
//                   rr(t, n, l)),
//               !1
//             );
//           case 22:
//             return (
//               (a.flags |= 65536),
//               n === fs
//                 ? (a.flags |= 16384)
//                 : ((e = a.updateQueue),
//                   e === null
//                     ? ((e = {
//                         transitions: null,
//                         markerInstances: null,
//                         retryQueue: new Set([n]),
//                       }),
//                       (a.updateQueue = e))
//                     : ((a = e.retryQueue),
//                       a === null ? (e.retryQueue = new Set([n])) : a.add(n)),
//                   rr(t, n, l)),
//               !1
//             );
//         }
//         throw Error(c(435, a.tag));
//       }
//       return (rr(t, n, l), Us(), !1);
//     }
//     if (zt)
//       return (
//         (e = Me.current),
//         e !== null
//           ? ((e.flags & 65536) === 0 && (e.flags |= 256),
//             (e.flags |= 65536),
//             (e.lanes = l),
//             n !== nc &&
//               ((t = Error(c(422), {
//                 cause: n,
//               })),
//               ni(ke(t, a))))
//           : (n !== nc &&
//               ((e = Error(c(423), {
//                 cause: n,
//               })),
//               ni(ke(e, a))),
//             (t = t.current.alternate),
//             (t.flags |= 65536),
//             (l &= -l),
//             (t.lanes |= l),
//             (n = ke(n, a)),
//             (l = Lc(t.stateNode, n, l)),
//             hc(t, l),
//             Xt !== 4 && (Xt = 2)),
//         !1
//       );
//     var s = Error(c(520), {
//       cause: n,
//     });
//     if (
//       ((s = ke(s, a)),
//       Ei === null ? (Ei = [s]) : Ei.push(s),
//       Xt !== 4 && (Xt = 2),
//       e === null)
//     )
//       return !0;
//     ((n = ke(n, a)), (a = e));
//     do {
//       switch (a.tag) {
//         case 3:
//           return (
//             (a.flags |= 65536),
//             (t = l & -l),
//             (a.lanes |= t),
//             (t = Lc(a.stateNode, n, t)),
//             hc(a, t),
//             !1
//           );
//         case 1:
//           if (
//             ((e = a.type),
//             (s = a.stateNode),
//             (a.flags & 128) === 0 &&
//               (typeof e.getDerivedStateFromError == "function" ||
//                 (s !== null &&
//                   typeof s.componentDidCatch == "function" &&
//                   (en === null || !en.has(s)))))
//           )
//             return (
//               (a.flags |= 65536),
//               (l &= -l),
//               (a.lanes |= l),
//               (l = Ed(l)),
//               wd(l, t, a, n),
//               hc(a, l),
//               !1
//             );
//       }
//       a = a.return;
//     } while (a !== null);
//     return !1;
//   }
//   var Yc = Error(c(461)),
//     Wt = !1;
//   function oe(t, e, a, n) {
//     e.child = t === null ? zf(e, null, a, n) : _n(e, t.child, a, n);
//   }
//   function Nd(t, e, a, n, l) {
//     a = a.render;
//     var s = e.ref;
//     if ("ref" in n) {
//       var u = {};
//       for (var h in n) h !== "ref" && (u[h] = n[h]);
//     } else u = n;
//     return (
//       On(e),
//       (n = bc(t, e, a, u, s, l)),
//       (h = Sc()),
//       t !== null && !Wt
//         ? (Ec(t, e, l), Aa(t, e, l))
//         : (zt && h && ec(e), (e.flags |= 1), oe(t, e, n, l), e.child)
//     );
//   }
//   function Ad(t, e, a, n, l) {
//     if (t === null) {
//       var s = a.type;
//       return typeof s == "function" &&
//         !Po(s) &&
//         s.defaultProps === void 0 &&
//         a.compare === null
//         ? ((e.tag = 15), (e.type = s), Td(t, e, s, n, l))
//         : ((t = is(a.type, null, n, e, e.mode, l)),
//           (t.ref = e.ref),
//           (t.return = e),
//           (e.child = t));
//     }
//     if (((s = t.child), !Kc(t, l))) {
//       var u = s.memoizedProps;
//       if (
//         ((a = a.compare), (a = a !== null ? a : ti), a(u, n) && t.ref === e.ref)
//       )
//         return Aa(t, e, l);
//     }
//     return (
//       (e.flags |= 1),
//       (t = xa(s, n)),
//       (t.ref = e.ref),
//       (t.return = e),
//       (e.child = t)
//     );
//   }
//   function Td(t, e, a, n, l) {
//     if (t !== null) {
//       var s = t.memoizedProps;
//       if (ti(s, n) && t.ref === e.ref)
//         if (((Wt = !1), (e.pendingProps = n = s), Kc(t, l)))
//           (t.flags & 131072) !== 0 && (Wt = !0);
//         else return ((e.lanes = t.lanes), Aa(t, e, l));
//     }
//     return qc(t, e, a, n, l);
//   }
//   function zd(t, e, a, n) {
//     var l = n.children,
//       s = t !== null ? t.memoizedState : null;
//     if (
//       (t === null &&
//         e.stateNode === null &&
//         (e.stateNode = {
//           _visibility: 1,
//           _pendingMarkers: null,
//           _retryCache: null,
//           _transitions: null,
//         }),
//       n.mode === "hidden")
//     ) {
//       if ((e.flags & 128) !== 0) {
//         if (((s = s !== null ? s.baseLanes | a : a), t !== null)) {
//           for (n = e.child = t.child, l = 0; n !== null; )
//             ((l = l | n.lanes | n.childLanes), (n = n.sibling));
//           n = l & ~s;
//         } else ((n = 0), (e.child = null));
//         return Hd(t, e, s, a, n);
//       }
//       if ((a & 536870912) !== 0)
//         ((e.memoizedState = {
//           baseLanes: 0,
//           cachePool: null,
//         }),
//           t !== null && rs(e, s !== null ? s.cachePool : null),
//           s !== null ? jf(e, s) : pc(),
//           Cf(e));
//       else
//         return (
//           (n = e.lanes = 536870912),
//           Hd(t, e, s !== null ? s.baseLanes | a : a, a, n)
//         );
//     } else
//       s !== null
//         ? (rs(e, s.cachePool), jf(e, s), Fa(), (e.memoizedState = null))
//         : (t !== null && rs(e, null), pc(), Fa());
//     return (oe(t, e, l, a), e.child);
//   }
//   function gi(t, e) {
//     return (
//       (t !== null && t.tag === 22) ||
//         e.stateNode !== null ||
//         (e.stateNode = {
//           _visibility: 1,
//           _pendingMarkers: null,
//           _retryCache: null,
//           _transitions: null,
//         }),
//       e.sibling
//     );
//   }
//   function Hd(t, e, a, n, l) {
//     var s = uc();
//     return (
//       (s =
//         s === null
//           ? null
//           : {
//               parent: Kt._currentValue,
//               pool: s,
//             }),
//       (e.memoizedState = {
//         baseLanes: a,
//         cachePool: s,
//       }),
//       t !== null && rs(e, null),
//       pc(),
//       Cf(e),
//       t !== null && rl(t, e, n, !0),
//       (e.childLanes = l),
//       null
//     );
//   }
//   function As(t, e) {
//     return (
//       (e = zs(
//         {
//           mode: e.mode,
//           children: e.children,
//         },
//         t.mode,
//       )),
//       (e.ref = t.ref),
//       (t.child = e),
//       (e.return = t),
//       e
//     );
//   }
//   function Od(t, e, a) {
//     return (
//       _n(e, t.child, null, a),
//       (t = As(e, e.pendingProps)),
//       (t.flags |= 2),
//       _e(e),
//       (e.memoizedState = null),
//       t
//     );
//   }
//   function p0(t, e, a) {
//     var n = e.pendingProps,
//       l = (e.flags & 128) !== 0;
//     if (((e.flags &= -129), t === null)) {
//       if (zt) {
//         if (n.mode === "hidden")
//           return ((t = As(e, n)), (e.lanes = 536870912), gi(null, t));
//         if (
//           (vc(e),
//           (t = Lt)
//             ? ((t = Gm(t, Qe)),
//               (t = t !== null && t.data === "&" ? t : null),
//               t !== null &&
//                 ((e.memoizedState = {
//                   dehydrated: t,
//                   treeContext:
//                     Va !== null
//                       ? {
//                           id: ia,
//                           overflow: sa,
//                         }
//                       : null,
//                   retryLane: 536870912,
//                   hydrationErrors: null,
//                 }),
//                 (a = df(t)),
//                 (a.return = e),
//                 (e.child = a),
//                 (ie = e),
//                 (Lt = null)))
//             : (t = null),
//           t === null)
//         )
//           throw Qa(e);
//         return ((e.lanes = 536870912), null);
//       }
//       return As(e, n);
//     }
//     var s = t.memoizedState;
//     if (s !== null) {
//       var u = s.dehydrated;
//       if ((vc(e), l))
//         if (e.flags & 256) ((e.flags &= -257), (e = Od(t, e, a)));
//         else if (e.memoizedState !== null)
//           ((e.child = t.child), (e.flags |= 128), (e = null));
//         else throw Error(c(558));
//       else if (
//         (Wt || rl(t, e, a, !1), (l = (a & t.childLanes) !== 0), Wt || l)
//       ) {
//         if (
//           ((n = Bt),
//           n !== null && ((u = xe(n, a)), u !== 0 && u !== s.retryLane))
//         )
//           throw ((s.retryLane = u), An(t, u), Te(n, t, u), Yc);
//         (Us(), (e = Od(t, e, a)));
//       } else
//         ((t = s.treeContext),
//           (Lt = Ke(u.nextSibling)),
//           (ie = e),
//           (zt = !0),
//           (Xa = null),
//           (Qe = !1),
//           t !== null && gf(e, t),
//           (e = As(e, n)),
//           (e.flags |= 4096));
//       return e;
//     }
//     return (
//       (t = xa(t.child, {
//         mode: n.mode,
//         children: n.children,
//       })),
//       (t.ref = e.ref),
//       (e.child = t),
//       (t.return = e),
//       t
//     );
//   }
//   function Ts(t, e) {
//     var a = e.ref;
//     if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
//     else {
//       if (typeof a != "function" && typeof a != "object") throw Error(c(284));
//       (t === null || t.ref !== a) && (e.flags |= 4194816);
//     }
//   }
//   function qc(t, e, a, n, l) {
//     return (
//       On(e),
//       (a = bc(t, e, a, n, void 0, l)),
//       (n = Sc()),
//       t !== null && !Wt
//         ? (Ec(t, e, l), Aa(t, e, l))
//         : (zt && n && ec(e), (e.flags |= 1), oe(t, e, a, l), e.child)
//     );
//   }
//   function jd(t, e, a, n, l, s) {
//     return (
//       On(e),
//       (e.updateQueue = null),
//       (a = _f(e, n, a, l)),
//       Mf(t),
//       (n = Sc()),
//       t !== null && !Wt
//         ? (Ec(t, e, s), Aa(t, e, s))
//         : (zt && n && ec(e), (e.flags |= 1), oe(t, e, a, s), e.child)
//     );
//   }
//   function Cd(t, e, a, n, l) {
//     if ((On(e), e.stateNode === null)) {
//       var s = il,
//         u = a.contextType;
//       (typeof u == "object" && u !== null && (s = se(u)),
//         (s = new a(n, s)),
//         (e.memoizedState =
//           s.state !== null && s.state !== void 0 ? s.state : null),
//         (s.updater = Bc),
//         (e.stateNode = s),
//         (s._reactInternals = e),
//         (s = e.stateNode),
//         (s.props = n),
//         (s.state = e.memoizedState),
//         (s.refs = {}),
//         dc(e),
//         (u = a.contextType),
//         (s.context = typeof u == "object" && u !== null ? se(u) : il),
//         (s.state = e.memoizedState),
//         (u = a.getDerivedStateFromProps),
//         typeof u == "function" && (Uc(e, a, u, n), (s.state = e.memoizedState)),
//         typeof a.getDerivedStateFromProps == "function" ||
//           typeof s.getSnapshotBeforeUpdate == "function" ||
//           (typeof s.UNSAFE_componentWillMount != "function" &&
//             typeof s.componentWillMount != "function") ||
//           ((u = s.state),
//           typeof s.componentWillMount == "function" && s.componentWillMount(),
//           typeof s.UNSAFE_componentWillMount == "function" &&
//             s.UNSAFE_componentWillMount(),
//           u !== s.state && Bc.enqueueReplaceState(s, s.state, null),
//           ui(e, n, s, l),
//           ri(),
//           (s.state = e.memoizedState)),
//         typeof s.componentDidMount == "function" && (e.flags |= 4194308),
//         (n = !0));
//     } else if (t === null) {
//       s = e.stateNode;
//       var h = e.memoizedProps,
//         b = Dn(a, h);
//       s.props = b;
//       var H = s.context,
//         D = a.contextType;
//       ((u = il), typeof D == "object" && D !== null && (u = se(D)));
//       var G = a.getDerivedStateFromProps;
//       ((D =
//         typeof G == "function" ||
//         typeof s.getSnapshotBeforeUpdate == "function"),
//         (h = e.pendingProps !== h),
//         D ||
//           (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
//             typeof s.componentWillReceiveProps != "function") ||
//           ((h || H !== u) && yd(e, s, n, u)),
//         (Ka = !1));
//       var j = e.memoizedState;
//       ((s.state = j),
//         ui(e, n, s, l),
//         ri(),
//         (H = e.memoizedState),
//         h || j !== H || Ka
//           ? (typeof G == "function" && (Uc(e, a, G, n), (H = e.memoizedState)),
//             (b = Ka || pd(e, a, b, n, j, H, u))
//               ? (D ||
//                   (typeof s.UNSAFE_componentWillMount != "function" &&
//                     typeof s.componentWillMount != "function") ||
//                   (typeof s.componentWillMount == "function" &&
//                     s.componentWillMount(),
//                   typeof s.UNSAFE_componentWillMount == "function" &&
//                     s.UNSAFE_componentWillMount()),
//                 typeof s.componentDidMount == "function" &&
//                   (e.flags |= 4194308))
//               : (typeof s.componentDidMount == "function" &&
//                   (e.flags |= 4194308),
//                 (e.memoizedProps = n),
//                 (e.memoizedState = H)),
//             (s.props = n),
//             (s.state = H),
//             (s.context = u),
//             (n = b))
//           : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
//             (n = !1)));
//     } else {
//       ((s = e.stateNode),
//         mc(t, e),
//         (u = e.memoizedProps),
//         (D = Dn(a, u)),
//         (s.props = D),
//         (G = e.pendingProps),
//         (j = s.context),
//         (H = a.contextType),
//         (b = il),
//         typeof H == "object" && H !== null && (b = se(H)),
//         (h = a.getDerivedStateFromProps),
//         (H =
//           typeof h == "function" ||
//           typeof s.getSnapshotBeforeUpdate == "function") ||
//           (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
//             typeof s.componentWillReceiveProps != "function") ||
//           ((u !== G || j !== b) && yd(e, s, n, b)),
//         (Ka = !1),
//         (j = e.memoizedState),
//         (s.state = j),
//         ui(e, n, s, l),
//         ri());
//       var R = e.memoizedState;
//       u !== G ||
//       j !== R ||
//       Ka ||
//       (t !== null && t.dependencies !== null && os(t.dependencies))
//         ? (typeof h == "function" && (Uc(e, a, h, n), (R = e.memoizedState)),
//           (D =
//             Ka ||
//             pd(e, a, D, n, j, R, b) ||
//             (t !== null && t.dependencies !== null && os(t.dependencies)))
//             ? (H ||
//                 (typeof s.UNSAFE_componentWillUpdate != "function" &&
//                   typeof s.componentWillUpdate != "function") ||
//                 (typeof s.componentWillUpdate == "function" &&
//                   s.componentWillUpdate(n, R, b),
//                 typeof s.UNSAFE_componentWillUpdate == "function" &&
//                   s.UNSAFE_componentWillUpdate(n, R, b)),
//               typeof s.componentDidUpdate == "function" && (e.flags |= 4),
//               typeof s.getSnapshotBeforeUpdate == "function" &&
//                 (e.flags |= 1024))
//             : (typeof s.componentDidUpdate != "function" ||
//                 (u === t.memoizedProps && j === t.memoizedState) ||
//                 (e.flags |= 4),
//               typeof s.getSnapshotBeforeUpdate != "function" ||
//                 (u === t.memoizedProps && j === t.memoizedState) ||
//                 (e.flags |= 1024),
//               (e.memoizedProps = n),
//               (e.memoizedState = R)),
//           (s.props = n),
//           (s.state = R),
//           (s.context = b),
//           (n = D))
//         : (typeof s.componentDidUpdate != "function" ||
//             (u === t.memoizedProps && j === t.memoizedState) ||
//             (e.flags |= 4),
//           typeof s.getSnapshotBeforeUpdate != "function" ||
//             (u === t.memoizedProps && j === t.memoizedState) ||
//             (e.flags |= 1024),
//           (n = !1));
//     }
//     return (
//       (s = n),
//       Ts(t, e),
//       (n = (e.flags & 128) !== 0),
//       s || n
//         ? ((s = e.stateNode),
//           (a =
//             n && typeof a.getDerivedStateFromError != "function"
//               ? null
//               : s.render()),
//           (e.flags |= 1),
//           t !== null && n
//             ? ((e.child = _n(e, t.child, null, l)),
//               (e.child = _n(e, null, a, l)))
//             : oe(t, e, a, l),
//           (e.memoizedState = s.state),
//           (t = e.child))
//         : (t = Aa(t, e, l)),
//       t
//     );
//   }
//   function Md(t, e, a, n) {
//     return (zn(), (e.flags |= 256), oe(t, e, a, n), e.child);
//   }
//   var Gc = {
//     dehydrated: null,
//     treeContext: null,
//     retryLane: 0,
//     hydrationErrors: null,
//   };
//   function kc(t) {
//     return {
//       baseLanes: t,
//       cachePool: Sf(),
//     };
//   }
//   function Vc(t, e, a) {
//     return ((t = t !== null ? t.childLanes & ~a : 0), e && (t |= De), t);
//   }
//   function _d(t, e, a) {
//     var n = e.pendingProps,
//       l = !1,
//       s = (e.flags & 128) !== 0,
//       u;
//     if (
//       ((u = s) ||
//         (u =
//           t !== null && t.memoizedState === null ? !1 : (Qt.current & 2) !== 0),
//       u && ((l = !0), (e.flags &= -129)),
//       (u = (e.flags & 32) !== 0),
//       (e.flags &= -33),
//       t === null)
//     ) {
//       if (zt) {
//         if (
//           (l ? $a(e) : Fa(),
//           (t = Lt)
//             ? ((t = Gm(t, Qe)),
//               (t = t !== null && t.data !== "&" ? t : null),
//               t !== null &&
//                 ((e.memoizedState = {
//                   dehydrated: t,
//                   treeContext:
//                     Va !== null
//                       ? {
//                           id: ia,
//                           overflow: sa,
//                         }
//                       : null,
//                   retryLane: 536870912,
//                   hydrationErrors: null,
//                 }),
//                 (a = df(t)),
//                 (a.return = e),
//                 (e.child = a),
//                 (ie = e),
//                 (Lt = null)))
//             : (t = null),
//           t === null)
//         )
//           throw Qa(e);
//         return (Ar(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
//       }
//       var h = n.children;
//       return (
//         (n = n.fallback),
//         l
//           ? (Fa(),
//             (l = e.mode),
//             (h = zs(
//               {
//                 mode: "hidden",
//                 children: h,
//               },
//               l,
//             )),
//             (n = Tn(n, l, a, null)),
//             (h.return = e),
//             (n.return = e),
//             (h.sibling = n),
//             (e.child = h),
//             (n = e.child),
//             (n.memoizedState = kc(a)),
//             (n.childLanes = Vc(t, u, a)),
//             (e.memoizedState = Gc),
//             gi(null, n))
//           : ($a(e), Xc(e, h))
//       );
//     }
//     var b = t.memoizedState;
//     if (b !== null && ((h = b.dehydrated), h !== null)) {
//       if (s)
//         e.flags & 256
//           ? ($a(e), (e.flags &= -257), (e = Qc(t, e, a)))
//           : e.memoizedState !== null
//             ? (Fa(), (e.child = t.child), (e.flags |= 128), (e = null))
//             : (Fa(),
//               (h = n.fallback),
//               (l = e.mode),
//               (n = zs(
//                 {
//                   mode: "visible",
//                   children: n.children,
//                 },
//                 l,
//               )),
//               (h = Tn(h, l, a, null)),
//               (h.flags |= 2),
//               (n.return = e),
//               (h.return = e),
//               (n.sibling = h),
//               (e.child = n),
//               _n(e, t.child, null, a),
//               (n = e.child),
//               (n.memoizedState = kc(a)),
//               (n.childLanes = Vc(t, u, a)),
//               (e.memoizedState = Gc),
//               (e = gi(null, n)));
//       else if (($a(e), Ar(h))) {
//         if (((u = h.nextSibling && h.nextSibling.dataset), u)) var H = u.dgst;
//         ((u = H),
//           (n = Error(c(419))),
//           (n.stack = ""),
//           (n.digest = u),
//           ni({
//             value: n,
//             source: null,
//             stack: null,
//           }),
//           (e = Qc(t, e, a)));
//       } else if (
//         (Wt || rl(t, e, a, !1), (u = (a & t.childLanes) !== 0), Wt || u)
//       ) {
//         if (
//           ((u = Bt),
//           u !== null && ((n = xe(u, a)), n !== 0 && n !== b.retryLane))
//         )
//           throw ((b.retryLane = n), An(t, n), Te(u, t, n), Yc);
//         (Nr(h) || Us(), (e = Qc(t, e, a)));
//       } else
//         Nr(h)
//           ? ((e.flags |= 192), (e.child = t.child), (e = null))
//           : ((t = b.treeContext),
//             (Lt = Ke(h.nextSibling)),
//             (ie = e),
//             (zt = !0),
//             (Xa = null),
//             (Qe = !1),
//             t !== null && gf(e, t),
//             (e = Xc(e, n.children)),
//             (e.flags |= 4096));
//       return e;
//     }
//     return l
//       ? (Fa(),
//         (h = n.fallback),
//         (l = e.mode),
//         (b = t.child),
//         (H = b.sibling),
//         (n = xa(b, {
//           mode: "hidden",
//           children: n.children,
//         })),
//         (n.subtreeFlags = b.subtreeFlags & 65011712),
//         H !== null ? (h = xa(H, h)) : ((h = Tn(h, l, a, null)), (h.flags |= 2)),
//         (h.return = e),
//         (n.return = e),
//         (n.sibling = h),
//         (e.child = n),
//         gi(null, n),
//         (n = e.child),
//         (h = t.child.memoizedState),
//         h === null
//           ? (h = kc(a))
//           : ((l = h.cachePool),
//             l !== null
//               ? ((b = Kt._currentValue),
//                 (l =
//                   l.parent !== b
//                     ? {
//                         parent: b,
//                         pool: b,
//                       }
//                     : l))
//               : (l = Sf()),
//             (h = {
//               baseLanes: h.baseLanes | a,
//               cachePool: l,
//             })),
//         (n.memoizedState = h),
//         (n.childLanes = Vc(t, u, a)),
//         (e.memoizedState = Gc),
//         gi(t.child, n))
//       : ($a(e),
//         (a = t.child),
//         (t = a.sibling),
//         (a = xa(a, {
//           mode: "visible",
//           children: n.children,
//         })),
//         (a.return = e),
//         (a.sibling = null),
//         t !== null &&
//           ((u = e.deletions),
//           u === null ? ((e.deletions = [t]), (e.flags |= 16)) : u.push(t)),
//         (e.child = a),
//         (e.memoizedState = null),
//         a);
//   }
//   function Xc(t, e) {
//     return (
//       (e = zs(
//         {
//           mode: "visible",
//           children: e,
//         },
//         t.mode,
//       )),
//       (e.return = t),
//       (t.child = e)
//     );
//   }
//   function zs(t, e) {
//     return ((t = Ce(22, t, null, e)), (t.lanes = 0), t);
//   }
//   function Qc(t, e, a) {
//     return (
//       _n(e, t.child, null, a),
//       (t = Xc(e, e.pendingProps.children)),
//       (t.flags |= 2),
//       (e.memoizedState = null),
//       t
//     );
//   }
//   function Rd(t, e, a) {
//     t.lanes |= e;
//     var n = t.alternate;
//     (n !== null && (n.lanes |= e), sc(t.return, e, a));
//   }
//   function Zc(t, e, a, n, l, s) {
//     var u = t.memoizedState;
//     u === null
//       ? (t.memoizedState = {
//           isBackwards: e,
//           rendering: null,
//           renderingStartTime: 0,
//           last: n,
//           tail: a,
//           tailMode: l,
//           treeForkCount: s,
//         })
//       : ((u.isBackwards = e),
//         (u.rendering = null),
//         (u.renderingStartTime = 0),
//         (u.last = n),
//         (u.tail = a),
//         (u.tailMode = l),
//         (u.treeForkCount = s));
//   }
//   function Dd(t, e, a) {
//     var n = e.pendingProps,
//       l = n.revealOrder,
//       s = n.tail;
//     n = n.children;
//     var u = Qt.current,
//       h = (u & 2) !== 0;
//     if (
//       (h ? ((u = (u & 1) | 2), (e.flags |= 128)) : (u &= 1),
//       U(Qt, u),
//       oe(t, e, n, a),
//       (n = zt ? ai : 0),
//       !h && t !== null && (t.flags & 128) !== 0)
//     )
//       t: for (t = e.child; t !== null; ) {
//         if (t.tag === 13) t.memoizedState !== null && Rd(t, a, e);
//         else if (t.tag === 19) Rd(t, a, e);
//         else if (t.child !== null) {
//           ((t.child.return = t), (t = t.child));
//           continue;
//         }
//         if (t === e) break t;
//         for (; t.sibling === null; ) {
//           if (t.return === null || t.return === e) break t;
//           t = t.return;
//         }
//         ((t.sibling.return = t.return), (t = t.sibling));
//       }
//     switch (l) {
//       case "forwards":
//         for (a = e.child, l = null; a !== null; )
//           ((t = a.alternate),
//             t !== null && gs(t) === null && (l = a),
//             (a = a.sibling));
//         ((a = l),
//           a === null
//             ? ((l = e.child), (e.child = null))
//             : ((l = a.sibling), (a.sibling = null)),
//           Zc(e, !1, l, a, s, n));
//         break;
//       case "backwards":
//       case "unstable_legacy-backwards":
//         for (a = null, l = e.child, e.child = null; l !== null; ) {
//           if (((t = l.alternate), t !== null && gs(t) === null)) {
//             e.child = l;
//             break;
//           }
//           ((t = l.sibling), (l.sibling = a), (a = l), (l = t));
//         }
//         Zc(e, !0, a, null, s, n);
//         break;
//       case "together":
//         Zc(e, !1, null, null, void 0, n);
//         break;
//       default:
//         e.memoizedState = null;
//     }
//     return e.child;
//   }
//   function Aa(t, e, a) {
//     if (
//       (t !== null && (e.dependencies = t.dependencies),
//       (tn |= e.lanes),
//       (a & e.childLanes) === 0)
//     )
//       if (t !== null) {
//         if ((rl(t, e, a, !1), (a & e.childLanes) === 0)) return null;
//       } else return null;
//     if (t !== null && e.child !== t.child) throw Error(c(153));
//     if (e.child !== null) {
//       for (
//         t = e.child, a = xa(t, t.pendingProps), e.child = a, a.return = e;
//         t.sibling !== null;
//       )
//         ((t = t.sibling),
//           (a = a.sibling = xa(t, t.pendingProps)),
//           (a.return = e));
//       a.sibling = null;
//     }
//     return e.child;
//   }
//   function Kc(t, e) {
//     return (t.lanes & e) !== 0
//       ? !0
//       : ((t = t.dependencies), !!(t !== null && os(t)));
//   }
//   function y0(t, e, a) {
//     switch (e.tag) {
//       case 3:
//         (ut(e, e.stateNode.containerInfo),
//           Za(e, Kt, t.memoizedState.cache),
//           zn());
//         break;
//       case 27:
//       case 5:
//         ae(e);
//         break;
//       case 4:
//         ut(e, e.stateNode.containerInfo);
//         break;
//       case 10:
//         Za(e, e.type, e.memoizedProps.value);
//         break;
//       case 31:
//         if (e.memoizedState !== null) return ((e.flags |= 128), vc(e), null);
//         break;
//       case 13:
//         var n = e.memoizedState;
//         if (n !== null)
//           return n.dehydrated !== null
//             ? ($a(e), (e.flags |= 128), null)
//             : (a & e.child.childLanes) !== 0
//               ? _d(t, e, a)
//               : ($a(e), (t = Aa(t, e, a)), t !== null ? t.sibling : null);
//         $a(e);
//         break;
//       case 19:
//         var l = (t.flags & 128) !== 0;
//         if (
//           ((n = (a & e.childLanes) !== 0),
//           n || (rl(t, e, a, !1), (n = (a & e.childLanes) !== 0)),
//           l)
//         ) {
//           if (n) return Dd(t, e, a);
//           e.flags |= 128;
//         }
//         if (
//           ((l = e.memoizedState),
//           l !== null &&
//             ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
//           U(Qt, Qt.current),
//           n)
//         )
//           break;
//         return null;
//       case 22:
//         return ((e.lanes = 0), zd(t, e, a, e.pendingProps));
//       case 24:
//         Za(e, Kt, t.memoizedState.cache);
//     }
//     return Aa(t, e, a);
//   }
//   function Ud(t, e, a) {
//     if (t !== null)
//       if (t.memoizedProps !== e.pendingProps) Wt = !0;
//       else {
//         if (!Kc(t, a) && (e.flags & 128) === 0) return ((Wt = !1), y0(t, e, a));
//         Wt = (t.flags & 131072) !== 0;
//       }
//     else ((Wt = !1), zt && (e.flags & 1048576) !== 0 && hf(e, ai, e.index));
//     switch (((e.lanes = 0), e.tag)) {
//       case 16:
//         t: {
//           var n = e.pendingProps;
//           if (((t = Cn(e.elementType)), (e.type = t), typeof t == "function"))
//             Po(t)
//               ? ((n = Dn(t, n)), (e.tag = 1), (e = Cd(null, e, t, n, a)))
//               : ((e.tag = 0), (e = qc(null, e, t, n, a)));
//           else {
//             if (t != null) {
//               var l = t.$$typeof;
//               if (l === $) {
//                 ((e.tag = 11), (e = Nd(null, e, t, n, a)));
//                 break t;
//               } else if (l === Q) {
//                 ((e.tag = 14), (e = Ad(null, e, t, n, a)));
//                 break t;
//               }
//             }
//             throw ((e = vt(t) || t), Error(c(306, e, "")));
//           }
//         }
//         return e;
//       case 0:
//         return qc(t, e, e.type, e.pendingProps, a);
//       case 1:
//         return ((n = e.type), (l = Dn(n, e.pendingProps)), Cd(t, e, n, l, a));
//       case 3:
//         t: {
//           if ((ut(e, e.stateNode.containerInfo), t === null))
//             throw Error(c(387));
//           n = e.pendingProps;
//           var s = e.memoizedState;
//           ((l = s.element), mc(t, e), ui(e, n, null, a));
//           var u = e.memoizedState;
//           if (
//             ((n = u.cache),
//             Za(e, Kt, n),
//             n !== s.cache && oc(e, [Kt], a, !0),
//             ri(),
//             (n = u.element),
//             s.isDehydrated)
//           )
//             if (
//               ((s = {
//                 element: n,
//                 isDehydrated: !1,
//                 cache: u.cache,
//               }),
//               (e.updateQueue.baseState = s),
//               (e.memoizedState = s),
//               e.flags & 256)
//             ) {
//               e = Md(t, e, n, a);
//               break t;
//             } else if (n !== l) {
//               ((l = ke(Error(c(424)), e)), ni(l), (e = Md(t, e, n, a)));
//               break t;
//             } else {
//               switch (((t = e.stateNode.containerInfo), t.nodeType)) {
//                 case 9:
//                   t = t.body;
//                   break;
//                 default:
//                   t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
//               }
//               for (
//                 Lt = Ke(t.firstChild),
//                   ie = e,
//                   zt = !0,
//                   Xa = null,
//                   Qe = !0,
//                   a = zf(e, null, n, a),
//                   e.child = a;
//                 a;
//               )
//                 ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
//             }
//           else {
//             if ((zn(), n === l)) {
//               e = Aa(t, e, a);
//               break t;
//             }
//             oe(t, e, n, a);
//           }
//           e = e.child;
//         }
//         return e;
//       case 26:
//         return (
//           Ts(t, e),
//           t === null
//             ? (a = Km(e.type, null, e.pendingProps, null))
//               ? (e.memoizedState = a)
//               : zt ||
//                 ((a = e.type),
//                 (t = e.pendingProps),
//                 (n = Vs(st.current).createElement(a)),
//                 (n[le] = e),
//                 (n[be] = t),
//                 ce(n, a, t),
//                 te(n),
//                 (e.stateNode = n))
//             : (e.memoizedState = Km(
//                 e.type,
//                 t.memoizedProps,
//                 e.pendingProps,
//                 t.memoizedState,
//               )),
//           null
//         );
//       case 27:
//         return (
//           ae(e),
//           t === null &&
//             zt &&
//             ((n = e.stateNode = Xm(e.type, e.pendingProps, st.current)),
//             (ie = e),
//             (Qe = !0),
//             (l = Lt),
//             sn(e.type) ? ((Tr = l), (Lt = Ke(n.firstChild))) : (Lt = l)),
//           oe(t, e, e.pendingProps.children, a),
//           Ts(t, e),
//           t === null && (e.flags |= 4194304),
//           e.child
//         );
//       case 5:
//         return (
//           t === null &&
//             zt &&
//             ((l = n = Lt) &&
//               ((n = K0(n, e.type, e.pendingProps, Qe)),
//               n !== null
//                 ? ((e.stateNode = n),
//                   (ie = e),
//                   (Lt = Ke(n.firstChild)),
//                   (Qe = !1),
//                   (l = !0))
//                 : (l = !1)),
//             l || Qa(e)),
//           ae(e),
//           (l = e.type),
//           (s = e.pendingProps),
//           (u = t !== null ? t.memoizedProps : null),
//           (n = s.children),
//           Sr(l, s) ? (n = null) : u !== null && Sr(l, u) && (e.flags |= 32),
//           e.memoizedState !== null &&
//             ((l = bc(t, e, c0, null, null, a)), (ji._currentValue = l)),
//           Ts(t, e),
//           oe(t, e, n, a),
//           e.child
//         );
//       case 6:
//         return (
//           t === null &&
//             zt &&
//             ((t = a = Lt) &&
//               ((a = J0(a, e.pendingProps, Qe)),
//               a !== null
//                 ? ((e.stateNode = a), (ie = e), (Lt = null), (t = !0))
//                 : (t = !1)),
//             t || Qa(e)),
//           null
//         );
//       case 13:
//         return _d(t, e, a);
//       case 4:
//         return (
//           ut(e, e.stateNode.containerInfo),
//           (n = e.pendingProps),
//           t === null ? (e.child = _n(e, null, n, a)) : oe(t, e, n, a),
//           e.child
//         );
//       case 11:
//         return Nd(t, e, e.type, e.pendingProps, a);
//       case 7:
//         return (oe(t, e, e.pendingProps, a), e.child);
//       case 8:
//         return (oe(t, e, e.pendingProps.children, a), e.child);
//       case 12:
//         return (oe(t, e, e.pendingProps.children, a), e.child);
//       case 10:
//         return (
//           (n = e.pendingProps),
//           Za(e, e.type, n.value),
//           oe(t, e, n.children, a),
//           e.child
//         );
//       case 9:
//         return (
//           (l = e.type._context),
//           (n = e.pendingProps.children),
//           On(e),
//           (l = se(l)),
//           (n = n(l)),
//           (e.flags |= 1),
//           oe(t, e, n, a),
//           e.child
//         );
//       case 14:
//         return Ad(t, e, e.type, e.pendingProps, a);
//       case 15:
//         return Td(t, e, e.type, e.pendingProps, a);
//       case 19:
//         return Dd(t, e, a);
//       case 31:
//         return p0(t, e, a);
//       case 22:
//         return zd(t, e, a, e.pendingProps);
//       case 24:
//         return (
//           On(e),
//           (n = se(Kt)),
//           t === null
//             ? ((l = uc()),
//               l === null &&
//                 ((l = Bt),
//                 (s = cc()),
//                 (l.pooledCache = s),
//                 s.refCount++,
//                 s !== null && (l.pooledCacheLanes |= a),
//                 (l = s)),
//               (e.memoizedState = {
//                 parent: n,
//                 cache: l,
//               }),
//               dc(e),
//               Za(e, Kt, l))
//             : ((t.lanes & a) !== 0 && (mc(t, e), ui(e, null, null, a), ri()),
//               (l = t.memoizedState),
//               (s = e.memoizedState),
//               l.parent !== n
//                 ? ((l = {
//                     parent: n,
//                     cache: n,
//                   }),
//                   (e.memoizedState = l),
//                   e.lanes === 0 &&
//                     (e.memoizedState = e.updateQueue.baseState = l),
//                   Za(e, Kt, n))
//                 : ((n = s.cache),
//                   Za(e, Kt, n),
//                   n !== l.cache && oc(e, [Kt], a, !0))),
//           oe(t, e, e.pendingProps.children, a),
//           e.child
//         );
//       case 29:
//         throw e.pendingProps;
//     }
//     throw Error(c(156, e.tag));
//   }
//   function Ta(t) {
//     t.flags |= 4;
//   }
//   function Jc(t, e, a, n, l) {
//     if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
//       if (((t.flags |= 16777216), (l & 335544128) === l))
//         if (t.stateNode.complete) t.flags |= 8192;
//         else if (rm()) t.flags |= 8192;
//         else throw ((Mn = fs), fc);
//     } else t.flags &= -16777217;
//   }
//   function Bd(t, e) {
//     if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
//       t.flags &= -16777217;
//     else if (((t.flags |= 16777216), !Pm(e)))
//       if (rm()) t.flags |= 8192;
//       else throw ((Mn = fs), fc);
//   }
//   function Hs(t, e) {
//     (e !== null && (t.flags |= 4),
//       t.flags & 16384 &&
//         ((e = t.tag !== 22 ? ue() : 536870912), (t.lanes |= e), (Sl |= e)));
//   }
//   function pi(t, e) {
//     if (!zt)
//       switch (t.tailMode) {
//         case "hidden":
//           e = t.tail;
//           for (var a = null; e !== null; )
//             (e.alternate !== null && (a = e), (e = e.sibling));
//           a === null ? (t.tail = null) : (a.sibling = null);
//           break;
//         case "collapsed":
//           a = t.tail;
//           for (var n = null; a !== null; )
//             (a.alternate !== null && (n = a), (a = a.sibling));
//           n === null
//             ? e || t.tail === null
//               ? (t.tail = null)
//               : (t.tail.sibling = null)
//             : (n.sibling = null);
//       }
//   }
//   function Yt(t) {
//     var e = t.alternate !== null && t.alternate.child === t.child,
//       a = 0,
//       n = 0;
//     if (e)
//       for (var l = t.child; l !== null; )
//         ((a |= l.lanes | l.childLanes),
//           (n |= l.subtreeFlags & 65011712),
//           (n |= l.flags & 65011712),
//           (l.return = t),
//           (l = l.sibling));
//     else
//       for (l = t.child; l !== null; )
//         ((a |= l.lanes | l.childLanes),
//           (n |= l.subtreeFlags),
//           (n |= l.flags),
//           (l.return = t),
//           (l = l.sibling));
//     return ((t.subtreeFlags |= n), (t.childLanes = a), e);
//   }
//   function v0(t, e, a) {
//     var n = e.pendingProps;
//     switch ((ac(e), e.tag)) {
//       case 16:
//       case 15:
//       case 0:
//       case 11:
//       case 7:
//       case 8:
//       case 12:
//       case 9:
//       case 14:
//         return (Yt(e), null);
//       case 1:
//         return (Yt(e), null);
//       case 3:
//         return (
//           (a = e.stateNode),
//           (n = null),
//           t !== null && (n = t.memoizedState.cache),
//           e.memoizedState.cache !== n && (e.flags |= 2048),
//           Ea(Kt),
//           Tt(),
//           a.pendingContext &&
//             ((a.context = a.pendingContext), (a.pendingContext = null)),
//           (t === null || t.child === null) &&
//             (cl(e)
//               ? Ta(e)
//               : t === null ||
//                 (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
//                 ((e.flags |= 1024), lc())),
//           Yt(e),
//           null
//         );
//       case 26:
//         var l = e.type,
//           s = e.memoizedState;
//         return (
//           t === null
//             ? (Ta(e),
//               s !== null ? (Yt(e), Bd(e, s)) : (Yt(e), Jc(e, l, null, n, a)))
//             : s
//               ? s !== t.memoizedState
//                 ? (Ta(e), Yt(e), Bd(e, s))
//                 : (Yt(e), (e.flags &= -16777217))
//               : ((t = t.memoizedProps),
//                 t !== n && Ta(e),
//                 Yt(e),
//                 Jc(e, l, t, n, a)),
//           null
//         );
//       case 27:
//         if (
//           (de(e),
//           (a = st.current),
//           (l = e.type),
//           t !== null && e.stateNode != null)
//         )
//           t.memoizedProps !== n && Ta(e);
//         else {
//           if (!n) {
//             if (e.stateNode === null) throw Error(c(166));
//             return (Yt(e), null);
//           }
//           ((t = X.current),
//             cl(e) ? pf(e) : ((t = Xm(l, n, a)), (e.stateNode = t), Ta(e)));
//         }
//         return (Yt(e), null);
//       case 5:
//         if ((de(e), (l = e.type), t !== null && e.stateNode != null))
//           t.memoizedProps !== n && Ta(e);
//         else {
//           if (!n) {
//             if (e.stateNode === null) throw Error(c(166));
//             return (Yt(e), null);
//           }
//           if (((s = X.current), cl(e))) pf(e);
//           else {
//             var u = Vs(st.current);
//             switch (s) {
//               case 1:
//                 s = u.createElementNS("http://www.w3.org/2000/svg", l);
//                 break;
//               case 2:
//                 s = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
//                 break;
//               default:
//                 switch (l) {
//                   case "svg":
//                     s = u.createElementNS("http://www.w3.org/2000/svg", l);
//                     break;
//                   case "math":
//                     s = u.createElementNS(
//                       "http://www.w3.org/1998/Math/MathML",
//                       l,
//                     );
//                     break;
//                   case "script":
//                     ((s = u.createElement("div")),
//                       (s.innerHTML = "<script><\/script>"),
//                       (s = s.removeChild(s.firstChild)));
//                     break;
//                   case "select":
//                     ((s =
//                       typeof n.is == "string"
//                         ? u.createElement("select", {
//                             is: n.is,
//                           })
//                         : u.createElement("select")),
//                       n.multiple
//                         ? (s.multiple = !0)
//                         : n.size && (s.size = n.size));
//                     break;
//                   default:
//                     s =
//                       typeof n.is == "string"
//                         ? u.createElement(l, {
//                             is: n.is,
//                           })
//                         : u.createElement(l);
//                 }
//             }
//             ((s[le] = e), (s[be] = n));
//             t: for (u = e.child; u !== null; ) {
//               if (u.tag === 5 || u.tag === 6) s.appendChild(u.stateNode);
//               else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
//                 ((u.child.return = u), (u = u.child));
//                 continue;
//               }
//               if (u === e) break t;
//               for (; u.sibling === null; ) {
//                 if (u.return === null || u.return === e) break t;
//                 u = u.return;
//               }
//               ((u.sibling.return = u.return), (u = u.sibling));
//             }
//             e.stateNode = s;
//             t: switch ((ce(s, l, n), l)) {
//               case "button":
//               case "input":
//               case "select":
//               case "textarea":
//                 n = !!n.autoFocus;
//                 break t;
//               case "img":
//                 n = !0;
//                 break t;
//               default:
//                 n = !1;
//             }
//             n && Ta(e);
//           }
//         }
//         return (
//           Yt(e),
//           Jc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a),
//           null
//         );
//       case 6:
//         if (t && e.stateNode != null) t.memoizedProps !== n && Ta(e);
//         else {
//           if (typeof n != "string" && e.stateNode === null) throw Error(c(166));
//           if (((t = st.current), cl(e))) {
//             if (
//               ((t = e.stateNode),
//               (a = e.memoizedProps),
//               (n = null),
//               (l = ie),
//               l !== null)
//             )
//               switch (l.tag) {
//                 case 27:
//                 case 5:
//                   n = l.memoizedProps;
//               }
//             ((t[le] = e),
//               (t = !!(
//                 t.nodeValue === a ||
//                 (n !== null && n.suppressHydrationWarning === !0) ||
//                 _m(t.nodeValue, a)
//               )),
//               t || Qa(e, !0));
//           } else
//             ((t = Vs(t).createTextNode(n)), (t[le] = e), (e.stateNode = t));
//         }
//         return (Yt(e), null);
//       case 31:
//         if (((a = e.memoizedState), t === null || t.memoizedState !== null)) {
//           if (((n = cl(e)), a !== null)) {
//             if (t === null) {
//               if (!n) throw Error(c(318));
//               if (
//                 ((t = e.memoizedState),
//                 (t = t !== null ? t.dehydrated : null),
//                 !t)
//               )
//                 throw Error(c(557));
//               t[le] = e;
//             } else
//               (zn(),
//                 (e.flags & 128) === 0 && (e.memoizedState = null),
//                 (e.flags |= 4));
//             (Yt(e), (t = !1));
//           } else
//             ((a = lc()),
//               t !== null &&
//                 t.memoizedState !== null &&
//                 (t.memoizedState.hydrationErrors = a),
//               (t = !0));
//           if (!t) return e.flags & 256 ? (_e(e), e) : (_e(e), null);
//           if ((e.flags & 128) !== 0) throw Error(c(558));
//         }
//         return (Yt(e), null);
//       case 13:
//         if (
//           ((n = e.memoizedState),
//           t === null ||
//             (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
//         ) {
//           if (((l = cl(e)), n !== null && n.dehydrated !== null)) {
//             if (t === null) {
//               if (!l) throw Error(c(318));
//               if (
//                 ((l = e.memoizedState),
//                 (l = l !== null ? l.dehydrated : null),
//                 !l)
//               )
//                 throw Error(c(317));
//               l[le] = e;
//             } else
//               (zn(),
//                 (e.flags & 128) === 0 && (e.memoizedState = null),
//                 (e.flags |= 4));
//             (Yt(e), (l = !1));
//           } else
//             ((l = lc()),
//               t !== null &&
//                 t.memoizedState !== null &&
//                 (t.memoizedState.hydrationErrors = l),
//               (l = !0));
//           if (!l) return e.flags & 256 ? (_e(e), e) : (_e(e), null);
//         }
//         return (
//           _e(e),
//           (e.flags & 128) !== 0
//             ? ((e.lanes = a), e)
//             : ((a = n !== null),
//               (t = t !== null && t.memoizedState !== null),
//               a &&
//                 ((n = e.child),
//                 (l = null),
//                 n.alternate !== null &&
//                   n.alternate.memoizedState !== null &&
//                   n.alternate.memoizedState.cachePool !== null &&
//                   (l = n.alternate.memoizedState.cachePool.pool),
//                 (s = null),
//                 n.memoizedState !== null &&
//                   n.memoizedState.cachePool !== null &&
//                   (s = n.memoizedState.cachePool.pool),
//                 s !== l && (n.flags |= 2048)),
//               a !== t && a && (e.child.flags |= 8192),
//               Hs(e, e.updateQueue),
//               Yt(e),
//               null)
//         );
//       case 4:
//         return (Tt(), t === null && pr(e.stateNode.containerInfo), Yt(e), null);
//       case 10:
//         return (Ea(e.type), Yt(e), null);
//       case 19:
//         if ((B(Qt), (n = e.memoizedState), n === null)) return (Yt(e), null);
//         if (((l = (e.flags & 128) !== 0), (s = n.rendering), s === null))
//           if (l) pi(n, !1);
//           else {
//             if (Xt !== 0 || (t !== null && (t.flags & 128) !== 0))
//               for (t = e.child; t !== null; ) {
//                 if (((s = gs(t)), s !== null)) {
//                   for (
//                     e.flags |= 128,
//                       pi(n, !1),
//                       t = s.updateQueue,
//                       e.updateQueue = t,
//                       Hs(e, t),
//                       e.subtreeFlags = 0,
//                       t = a,
//                       a = e.child;
//                     a !== null;
//                   )
//                     (ff(a, t), (a = a.sibling));
//                   return (
//                     U(Qt, (Qt.current & 1) | 2),
//                     zt && ba(e, n.treeForkCount),
//                     e.child
//                   );
//                 }
//                 t = t.sibling;
//               }
//             n.tail !== null &&
//               he() > _s &&
//               ((e.flags |= 128), (l = !0), pi(n, !1), (e.lanes = 4194304));
//           }
//         else {
//           if (!l)
//             if (((t = gs(s)), t !== null)) {
//               if (
//                 ((e.flags |= 128),
//                 (l = !0),
//                 (t = t.updateQueue),
//                 (e.updateQueue = t),
//                 Hs(e, t),
//                 pi(n, !0),
//                 n.tail === null &&
//                   n.tailMode === "hidden" &&
//                   !s.alternate &&
//                   !zt)
//               )
//                 return (Yt(e), null);
//             } else
//               2 * he() - n.renderingStartTime > _s &&
//                 a !== 536870912 &&
//                 ((e.flags |= 128), (l = !0), pi(n, !1), (e.lanes = 4194304));
//           n.isBackwards
//             ? ((s.sibling = e.child), (e.child = s))
//             : ((t = n.last),
//               t !== null ? (t.sibling = s) : (e.child = s),
//               (n.last = s));
//         }
//         return n.tail !== null
//           ? ((t = n.tail),
//             (n.rendering = t),
//             (n.tail = t.sibling),
//             (n.renderingStartTime = he()),
//             (t.sibling = null),
//             (a = Qt.current),
//             U(Qt, l ? (a & 1) | 2 : a & 1),
//             zt && ba(e, n.treeForkCount),
//             t)
//           : (Yt(e), null);
//       case 22:
//       case 23:
//         return (
//           _e(e),
//           yc(),
//           (n = e.memoizedState !== null),
//           t !== null
//             ? (t.memoizedState !== null) !== n && (e.flags |= 8192)
//             : n && (e.flags |= 8192),
//           n
//             ? (a & 536870912) !== 0 &&
//               (e.flags & 128) === 0 &&
//               (Yt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
//             : Yt(e),
//           (a = e.updateQueue),
//           a !== null && Hs(e, a.retryQueue),
//           (a = null),
//           t !== null &&
//             t.memoizedState !== null &&
//             t.memoizedState.cachePool !== null &&
//             (a = t.memoizedState.cachePool.pool),
//           (n = null),
//           e.memoizedState !== null &&
//             e.memoizedState.cachePool !== null &&
//             (n = e.memoizedState.cachePool.pool),
//           n !== a && (e.flags |= 2048),
//           t !== null && B(jn),
//           null
//         );
//       case 24:
//         return (
//           (a = null),
//           t !== null && (a = t.memoizedState.cache),
//           e.memoizedState.cache !== a && (e.flags |= 2048),
//           Ea(Kt),
//           Yt(e),
//           null
//         );
//       case 25:
//         return null;
//       case 30:
//         return null;
//     }
//     throw Error(c(156, e.tag));
//   }
//   function x0(t, e) {
//     switch ((ac(e), e.tag)) {
//       case 1:
//         return (
//           (t = e.flags),
//           t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
//         );
//       case 3:
//         return (
//           Ea(Kt),
//           Tt(),
//           (t = e.flags),
//           (t & 65536) !== 0 && (t & 128) === 0
//             ? ((e.flags = (t & -65537) | 128), e)
//             : null
//         );
//       case 26:
//       case 27:
//       case 5:
//         return (de(e), null);
//       case 31:
//         if (e.memoizedState !== null) {
//           if ((_e(e), e.alternate === null)) throw Error(c(340));
//           zn();
//         }
//         return (
//           (t = e.flags),
//           t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
//         );
//       case 13:
//         if (
//           (_e(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
//         ) {
//           if (e.alternate === null) throw Error(c(340));
//           zn();
//         }
//         return (
//           (t = e.flags),
//           t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
//         );
//       case 19:
//         return (B(Qt), null);
//       case 4:
//         return (Tt(), null);
//       case 10:
//         return (Ea(e.type), null);
//       case 22:
//       case 23:
//         return (
//           _e(e),
//           yc(),
//           t !== null && B(jn),
//           (t = e.flags),
//           t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
//         );
//       case 24:
//         return (Ea(Kt), null);
//       case 25:
//         return null;
//       default:
//         return null;
//     }
//   }
//   function Ld(t, e) {
//     switch ((ac(e), e.tag)) {
//       case 3:
//         (Ea(Kt), Tt());
//         break;
//       case 26:
//       case 27:
//       case 5:
//         de(e);
//         break;
//       case 4:
//         Tt();
//         break;
//       case 31:
//         e.memoizedState !== null && _e(e);
//         break;
//       case 13:
//         _e(e);
//         break;
//       case 19:
//         B(Qt);
//         break;
//       case 10:
//         Ea(e.type);
//         break;
//       case 22:
//       case 23:
//         (_e(e), yc(), t !== null && B(jn));
//         break;
//       case 24:
//         Ea(Kt);
//     }
//   }
//   function yi(t, e) {
//     try {
//       var a = e.updateQueue,
//         n = a !== null ? a.lastEffect : null;
//       if (n !== null) {
//         var l = n.next;
//         a = l;
//         do {
//           if ((a.tag & t) === t) {
//             n = void 0;
//             var s = a.create,
//               u = a.inst;
//             ((n = s()), (u.destroy = n));
//           }
//           a = a.next;
//         } while (a !== l);
//       }
//     } catch (h) {
//       _t(e, e.return, h);
//     }
//   }
//   function Pa(t, e, a) {
//     try {
//       var n = e.updateQueue,
//         l = n !== null ? n.lastEffect : null;
//       if (l !== null) {
//         var s = l.next;
//         n = s;
//         do {
//           if ((n.tag & t) === t) {
//             var u = n.inst,
//               h = u.destroy;
//             if (h !== void 0) {
//               ((u.destroy = void 0), (l = e));
//               var b = a,
//                 H = h;
//               try {
//                 H();
//               } catch (D) {
//                 _t(l, b, D);
//               }
//             }
//           }
//           n = n.next;
//         } while (n !== s);
//       }
//     } catch (D) {
//       _t(e, e.return, D);
//     }
//   }
//   function Yd(t) {
//     var e = t.updateQueue;
//     if (e !== null) {
//       var a = t.stateNode;
//       try {
//         Of(e, a);
//       } catch (n) {
//         _t(t, t.return, n);
//       }
//     }
//   }
//   function qd(t, e, a) {
//     ((a.props = Dn(t.type, t.memoizedProps)), (a.state = t.memoizedState));
//     try {
//       a.componentWillUnmount();
//     } catch (n) {
//       _t(t, e, n);
//     }
//   }
//   function vi(t, e) {
//     try {
//       var a = t.ref;
//       if (a !== null) {
//         switch (t.tag) {
//           case 26:
//           case 27:
//           case 5:
//             var n = t.stateNode;
//             break;
//           case 30:
//             n = t.stateNode;
//             break;
//           default:
//             n = t.stateNode;
//         }
//         typeof a == "function" ? (t.refCleanup = a(n)) : (a.current = n);
//       }
//     } catch (l) {
//       _t(t, e, l);
//     }
//   }
//   function oa(t, e) {
//     var a = t.ref,
//       n = t.refCleanup;
//     if (a !== null)
//       if (typeof n == "function")
//         try {
//           n();
//         } catch (l) {
//           _t(t, e, l);
//         } finally {
//           ((t.refCleanup = null),
//             (t = t.alternate),
//             t != null && (t.refCleanup = null));
//         }
//       else if (typeof a == "function")
//         try {
//           a(null);
//         } catch (l) {
//           _t(t, e, l);
//         }
//       else a.current = null;
//   }
//   function Gd(t) {
//     var e = t.type,
//       a = t.memoizedProps,
//       n = t.stateNode;
//     try {
//       t: switch (e) {
//         case "button":
//         case "input":
//         case "select":
//         case "textarea":
//           a.autoFocus && n.focus();
//           break t;
//         case "img":
//           a.src ? (n.src = a.src) : a.srcSet && (n.srcset = a.srcSet);
//       }
//     } catch (l) {
//       _t(t, t.return, l);
//     }
//   }
//   function Wc(t, e, a) {
//     try {
//       var n = t.stateNode;
//       (G0(n, t.type, a, e), (n[be] = e));
//     } catch (l) {
//       _t(t, t.return, l);
//     }
//   }
//   function kd(t) {
//     return (
//       t.tag === 5 ||
//       t.tag === 3 ||
//       t.tag === 26 ||
//       (t.tag === 27 && sn(t.type)) ||
//       t.tag === 4
//     );
//   }
//   function $c(t) {
//     t: for (;;) {
//       for (; t.sibling === null; ) {
//         if (t.return === null || kd(t.return)) return null;
//         t = t.return;
//       }
//       for (
//         t.sibling.return = t.return, t = t.sibling;
//         t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
//       ) {
//         if (
//           (t.tag === 27 && sn(t.type)) ||
//           t.flags & 2 ||
//           t.child === null ||
//           t.tag === 4
//         )
//           continue t;
//         ((t.child.return = t), (t = t.child));
//       }
//       if (!(t.flags & 2)) return t.stateNode;
//     }
//   }
//   function Fc(t, e, a) {
//     var n = t.tag;
//     if (n === 5 || n === 6)
//       ((t = t.stateNode),
//         e
//           ? (a.nodeType === 9
//               ? a.body
//               : a.nodeName === "HTML"
//                 ? a.ownerDocument.body
//                 : a
//             ).insertBefore(t, e)
//           : ((e =
//               a.nodeType === 9
//                 ? a.body
//                 : a.nodeName === "HTML"
//                   ? a.ownerDocument.body
//                   : a),
//             e.appendChild(t),
//             (a = a._reactRootContainer),
//             a != null || e.onclick !== null || (e.onclick = ya)));
//     else if (
//       n !== 4 &&
//       (n === 27 && sn(t.type) && ((a = t.stateNode), (e = null)),
//       (t = t.child),
//       t !== null)
//     )
//       for (Fc(t, e, a), t = t.sibling; t !== null; )
//         (Fc(t, e, a), (t = t.sibling));
//   }
//   function Os(t, e, a) {
//     var n = t.tag;
//     if (n === 5 || n === 6)
//       ((t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t));
//     else if (
//       n !== 4 &&
//       (n === 27 && sn(t.type) && (a = t.stateNode), (t = t.child), t !== null)
//     )
//       for (Os(t, e, a), t = t.sibling; t !== null; )
//         (Os(t, e, a), (t = t.sibling));
//   }
//   function Vd(t) {
//     var e = t.stateNode,
//       a = t.memoizedProps;
//     try {
//       for (var n = t.type, l = e.attributes; l.length; )
//         e.removeAttributeNode(l[0]);
//       (ce(e, n, a), (e[le] = t), (e[be] = a));
//     } catch (s) {
//       _t(t, t.return, s);
//     }
//   }
//   var za = !1,
//     $t = !1,
//     Pc = !1,
//     Xd = typeof WeakSet == "function" ? WeakSet : Set,
//     ee = null;
//   function b0(t, e) {
//     if (((t = t.containerInfo), (xr = $s), (t = ef(t)), Qo(t))) {
//       if ("selectionStart" in t)
//         var a = {
//           start: t.selectionStart,
//           end: t.selectionEnd,
//         };
//       else
//         t: {
//           a = ((a = t.ownerDocument) && a.defaultView) || window;
//           var n = a.getSelection && a.getSelection();
//           if (n && n.rangeCount !== 0) {
//             a = n.anchorNode;
//             var l = n.anchorOffset,
//               s = n.focusNode;
//             n = n.focusOffset;
//             try {
//               (a.nodeType, s.nodeType);
//             } catch {
//               a = null;
//               break t;
//             }
//             var u = 0,
//               h = -1,
//               b = -1,
//               H = 0,
//               D = 0,
//               G = t,
//               j = null;
//             e: for (;;) {
//               for (
//                 var R;
//                 G !== a || (l !== 0 && G.nodeType !== 3) || (h = u + l),
//                   G !== s || (n !== 0 && G.nodeType !== 3) || (b = u + n),
//                   G.nodeType === 3 && (u += G.nodeValue.length),
//                   (R = G.firstChild) !== null;
//               )
//                 ((j = G), (G = R));
//               for (;;) {
//                 if (G === t) break e;
//                 if (
//                   (j === a && ++H === l && (h = u),
//                   j === s && ++D === n && (b = u),
//                   (R = G.nextSibling) !== null)
//                 )
//                   break;
//                 ((G = j), (j = G.parentNode));
//               }
//               G = R;
//             }
//             a =
//               h === -1 || b === -1
//                 ? null
//                 : {
//                     start: h,
//                     end: b,
//                   };
//           } else a = null;
//         }
//       a = a || {
//         start: 0,
//         end: 0,
//       };
//     } else a = null;
//     for (
//       br = {
//         focusedElem: t,
//         selectionRange: a,
//       },
//         $s = !1,
//         ee = e;
//       ee !== null;
//     )
//       if (
//         ((e = ee), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
//       )
//         ((t.return = e), (ee = t));
//       else
//         for (; ee !== null; ) {
//           switch (((e = ee), (s = e.alternate), (t = e.flags), e.tag)) {
//             case 0:
//               if (
//                 (t & 4) !== 0 &&
//                 ((t = e.updateQueue),
//                 (t = t !== null ? t.events : null),
//                 t !== null)
//               )
//                 for (a = 0; a < t.length; a++)
//                   ((l = t[a]), (l.ref.impl = l.nextImpl));
//               break;
//             case 11:
//             case 15:
//               break;
//             case 1:
//               if ((t & 1024) !== 0 && s !== null) {
//                 ((t = void 0),
//                   (a = e),
//                   (l = s.memoizedProps),
//                   (s = s.memoizedState),
//                   (n = a.stateNode));
//                 try {
//                   var F = Dn(a.type, l);
//                   ((t = n.getSnapshotBeforeUpdate(F, s)),
//                     (n.__reactInternalSnapshotBeforeUpdate = t));
//                 } catch (rt) {
//                   _t(a, a.return, rt);
//                 }
//               }
//               break;
//             case 3:
//               if ((t & 1024) !== 0) {
//                 if (
//                   ((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)
//                 )
//                   wr(t);
//                 else if (a === 1)
//                   switch (t.nodeName) {
//                     case "HEAD":
//                     case "HTML":
//                     case "BODY":
//                       wr(t);
//                       break;
//                     default:
//                       t.textContent = "";
//                   }
//               }
//               break;
//             case 5:
//             case 26:
//             case 27:
//             case 6:
//             case 4:
//             case 17:
//               break;
//             default:
//               if ((t & 1024) !== 0) throw Error(c(163));
//           }
//           if (((t = e.sibling), t !== null)) {
//             ((t.return = e.return), (ee = t));
//             break;
//           }
//           ee = e.return;
//         }
//   }
//   function Qd(t, e, a) {
//     var n = a.flags;
//     switch (a.tag) {
//       case 0:
//       case 11:
//       case 15:
//         (Oa(t, a), n & 4 && yi(5, a));
//         break;
//       case 1:
//         if ((Oa(t, a), n & 4))
//           if (((t = a.stateNode), e === null))
//             try {
//               t.componentDidMount();
//             } catch (u) {
//               _t(a, a.return, u);
//             }
//           else {
//             var l = Dn(a.type, e.memoizedProps);
//             e = e.memoizedState;
//             try {
//               t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate);
//             } catch (u) {
//               _t(a, a.return, u);
//             }
//           }
//         (n & 64 && Yd(a), n & 512 && vi(a, a.return));
//         break;
//       case 3:
//         if ((Oa(t, a), n & 64 && ((t = a.updateQueue), t !== null))) {
//           if (((e = null), a.child !== null))
//             switch (a.child.tag) {
//               case 27:
//               case 5:
//                 e = a.child.stateNode;
//                 break;
//               case 1:
//                 e = a.child.stateNode;
//             }
//           try {
//             Of(t, e);
//           } catch (u) {
//             _t(a, a.return, u);
//           }
//         }
//         break;
//       case 27:
//         e === null && n & 4 && Vd(a);
//       case 26:
//       case 5:
//         (Oa(t, a), e === null && n & 4 && Gd(a), n & 512 && vi(a, a.return));
//         break;
//       case 12:
//         Oa(t, a);
//         break;
//       case 31:
//         (Oa(t, a), n & 4 && Jd(t, a));
//         break;
//       case 13:
//         (Oa(t, a),
//           n & 4 && Wd(t, a),
//           n & 64 &&
//             ((t = a.memoizedState),
//             t !== null &&
//               ((t = t.dehydrated),
//               t !== null && ((a = O0.bind(null, a)), W0(t, a)))));
//         break;
//       case 22:
//         if (((n = a.memoizedState !== null || za), !n)) {
//           ((e = (e !== null && e.memoizedState !== null) || $t), (l = za));
//           var s = $t;
//           ((za = n),
//             ($t = e) && !s ? ja(t, a, (a.subtreeFlags & 8772) !== 0) : Oa(t, a),
//             (za = l),
//             ($t = s));
//         }
//         break;
//       case 30:
//         break;
//       default:
//         Oa(t, a);
//     }
//   }
//   function Zd(t) {
//     var e = t.alternate;
//     (e !== null && ((t.alternate = null), Zd(e)),
//       (t.child = null),
//       (t.deletions = null),
//       (t.sibling = null),
//       t.tag === 5 && ((e = t.stateNode), e !== null && Ho(e)),
//       (t.stateNode = null),
//       (t.return = null),
//       (t.dependencies = null),
//       (t.memoizedProps = null),
//       (t.memoizedState = null),
//       (t.pendingProps = null),
//       (t.stateNode = null),
//       (t.updateQueue = null));
//   }
//   var Gt = null,
//     Ee = !1;
//   function Ha(t, e, a) {
//     for (a = a.child; a !== null; ) (Kd(t, e, a), (a = a.sibling));
//   }
//   function Kd(t, e, a) {
//     if (ge && typeof ge.onCommitFiberUnmount == "function")
//       try {
//         ge.onCommitFiberUnmount(vn, a);
//       } catch {}
//     switch (a.tag) {
//       case 26:
//         ($t || oa(a, e),
//           Ha(t, e, a),
//           a.memoizedState
//             ? a.memoizedState.count--
//             : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
//         break;
//       case 27:
//         $t || oa(a, e);
//         var n = Gt,
//           l = Ee;
//         (sn(a.type) && ((Gt = a.stateNode), (Ee = !1)),
//           Ha(t, e, a),
//           zi(a.stateNode),
//           (Gt = n),
//           (Ee = l));
//         break;
//       case 5:
//         $t || oa(a, e);
//       case 6:
//         if (
//           ((n = Gt),
//           (l = Ee),
//           (Gt = null),
//           Ha(t, e, a),
//           (Gt = n),
//           (Ee = l),
//           Gt !== null)
//         )
//           if (Ee)
//             try {
//               (Gt.nodeType === 9
//                 ? Gt.body
//                 : Gt.nodeName === "HTML"
//                   ? Gt.ownerDocument.body
//                   : Gt
//               ).removeChild(a.stateNode);
//             } catch (s) {
//               _t(a, e, s);
//             }
//           else
//             try {
//               Gt.removeChild(a.stateNode);
//             } catch (s) {
//               _t(a, e, s);
//             }
//         break;
//       case 18:
//         Gt !== null &&
//           (Ee
//             ? ((t = Gt),
//               Ym(
//                 t.nodeType === 9
//                   ? t.body
//                   : t.nodeName === "HTML"
//                     ? t.ownerDocument.body
//                     : t,
//                 a.stateNode,
//               ),
//               Ol(t))
//             : Ym(Gt, a.stateNode));
//         break;
//       case 4:
//         ((n = Gt),
//           (l = Ee),
//           (Gt = a.stateNode.containerInfo),
//           (Ee = !0),
//           Ha(t, e, a),
//           (Gt = n),
//           (Ee = l));
//         break;
//       case 0:
//       case 11:
//       case 14:
//       case 15:
//         (Pa(2, a, e), $t || Pa(4, a, e), Ha(t, e, a));
//         break;
//       case 1:
//         ($t ||
//           (oa(a, e),
//           (n = a.stateNode),
//           typeof n.componentWillUnmount == "function" && qd(a, e, n)),
//           Ha(t, e, a));
//         break;
//       case 21:
//         Ha(t, e, a);
//         break;
//       case 22:
//         (($t = (n = $t) || a.memoizedState !== null), Ha(t, e, a), ($t = n));
//         break;
//       default:
//         Ha(t, e, a);
//     }
//   }
//   function Jd(t, e) {
//     if (
//       e.memoizedState === null &&
//       ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
//     ) {
//       t = t.dehydrated;
//       try {
//         Ol(t);
//       } catch (a) {
//         _t(e, e.return, a);
//       }
//     }
//   }
//   function Wd(t, e) {
//     if (
//       e.memoizedState === null &&
//       ((t = e.alternate),
//       t !== null &&
//         ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
//     )
//       try {
//         Ol(t);
//       } catch (a) {
//         _t(e, e.return, a);
//       }
//   }
//   function S0(t) {
//     switch (t.tag) {
//       case 31:
//       case 13:
//       case 19:
//         var e = t.stateNode;
//         return (e === null && (e = t.stateNode = new Xd()), e);
//       case 22:
//         return (
//           (t = t.stateNode),
//           (e = t._retryCache),
//           e === null && (e = t._retryCache = new Xd()),
//           e
//         );
//       default:
//         throw Error(c(435, t.tag));
//     }
//   }
//   function js(t, e) {
//     var a = S0(t);
//     e.forEach(function (n) {
//       if (!a.has(n)) {
//         a.add(n);
//         var l = j0.bind(null, t, n);
//         n.then(l, l);
//       }
//     });
//   }
//   function we(t, e) {
//     var a = e.deletions;
//     if (a !== null)
//       for (var n = 0; n < a.length; n++) {
//         var l = a[n],
//           s = t,
//           u = e,
//           h = u;
//         t: for (; h !== null; ) {
//           switch (h.tag) {
//             case 27:
//               if (sn(h.type)) {
//                 ((Gt = h.stateNode), (Ee = !1));
//                 break t;
//               }
//               break;
//             case 5:
//               ((Gt = h.stateNode), (Ee = !1));
//               break t;
//             case 3:
//             case 4:
//               ((Gt = h.stateNode.containerInfo), (Ee = !0));
//               break t;
//           }
//           h = h.return;
//         }
//         if (Gt === null) throw Error(c(160));
//         (Kd(s, u, l),
//           (Gt = null),
//           (Ee = !1),
//           (s = l.alternate),
//           s !== null && (s.return = null),
//           (l.return = null));
//       }
//     if (e.subtreeFlags & 13886)
//       for (e = e.child; e !== null; ) ($d(e, t), (e = e.sibling));
//   }
//   var Ie = null;
//   function $d(t, e) {
//     var a = t.alternate,
//       n = t.flags;
//     switch (t.tag) {
//       case 0:
//       case 11:
//       case 14:
//       case 15:
//         (we(e, t),
//           Ne(t),
//           n & 4 && (Pa(3, t, t.return), yi(3, t), Pa(5, t, t.return)));
//         break;
//       case 1:
//         (we(e, t),
//           Ne(t),
//           n & 512 && ($t || a === null || oa(a, a.return)),
//           n & 64 &&
//             za &&
//             ((t = t.updateQueue),
//             t !== null &&
//               ((n = t.callbacks),
//               n !== null &&
//                 ((a = t.shared.hiddenCallbacks),
//                 (t.shared.hiddenCallbacks = a === null ? n : a.concat(n))))));
//         break;
//       case 26:
//         var l = Ie;
//         if (
//           (we(e, t),
//           Ne(t),
//           n & 512 && ($t || a === null || oa(a, a.return)),
//           n & 4)
//         ) {
//           var s = a !== null ? a.memoizedState : null;
//           if (((n = t.memoizedState), a === null))
//             if (n === null)
//               if (t.stateNode === null) {
//                 t: {
//                   ((n = t.type),
//                     (a = t.memoizedProps),
//                     (l = l.ownerDocument || l));
//                   e: switch (n) {
//                     case "title":
//                       ((s = l.getElementsByTagName("title")[0]),
//                         (!s ||
//                           s[Ql] ||
//                           s[le] ||
//                           s.namespaceURI === "http://www.w3.org/2000/svg" ||
//                           s.hasAttribute("itemprop")) &&
//                           ((s = l.createElement(n)),
//                           l.head.insertBefore(
//                             s,
//                             l.querySelector("head > title"),
//                           )),
//                         ce(s, n, a),
//                         (s[le] = t),
//                         te(s),
//                         (n = s));
//                       break t;
//                     case "link":
//                       var u = $m("link", "href", l).get(n + (a.href || ""));
//                       if (u) {
//                         for (var h = 0; h < u.length; h++)
//                           if (
//                             ((s = u[h]),
//                             s.getAttribute("href") ===
//                               (a.href == null || a.href === ""
//                                 ? null
//                                 : a.href) &&
//                               s.getAttribute("rel") ===
//                                 (a.rel == null ? null : a.rel) &&
//                               s.getAttribute("title") ===
//                                 (a.title == null ? null : a.title) &&
//                               s.getAttribute("crossorigin") ===
//                                 (a.crossOrigin == null ? null : a.crossOrigin))
//                           ) {
//                             u.splice(h, 1);
//                             break e;
//                           }
//                       }
//                       ((s = l.createElement(n)),
//                         ce(s, n, a),
//                         l.head.appendChild(s));
//                       break;
//                     case "meta":
//                       if (
//                         (u = $m("meta", "content", l).get(
//                           n + (a.content || ""),
//                         ))
//                       ) {
//                         for (h = 0; h < u.length; h++)
//                           if (
//                             ((s = u[h]),
//                             s.getAttribute("content") ===
//                               (a.content == null ? null : "" + a.content) &&
//                               s.getAttribute("name") ===
//                                 (a.name == null ? null : a.name) &&
//                               s.getAttribute("property") ===
//                                 (a.property == null ? null : a.property) &&
//                               s.getAttribute("http-equiv") ===
//                                 (a.httpEquiv == null ? null : a.httpEquiv) &&
//                               s.getAttribute("charset") ===
//                                 (a.charSet == null ? null : a.charSet))
//                           ) {
//                             u.splice(h, 1);
//                             break e;
//                           }
//                       }
//                       ((s = l.createElement(n)),
//                         ce(s, n, a),
//                         l.head.appendChild(s));
//                       break;
//                     default:
//                       throw Error(c(468, n));
//                   }
//                   ((s[le] = t), te(s), (n = s));
//                 }
//                 t.stateNode = n;
//               } else Fm(l, t.type, t.stateNode);
//             else t.stateNode = Wm(l, n, t.memoizedProps);
//           else
//             s !== n
//               ? (s === null
//                   ? a.stateNode !== null &&
//                     ((a = a.stateNode), a.parentNode.removeChild(a))
//                   : s.count--,
//                 n === null
//                   ? Fm(l, t.type, t.stateNode)
//                   : Wm(l, n, t.memoizedProps))
//               : n === null &&
//                 t.stateNode !== null &&
//                 Wc(t, t.memoizedProps, a.memoizedProps);
//         }
//         break;
//       case 27:
//         (we(e, t),
//           Ne(t),
//           n & 512 && ($t || a === null || oa(a, a.return)),
//           a !== null && n & 4 && Wc(t, t.memoizedProps, a.memoizedProps));
//         break;
//       case 5:
//         if (
//           (we(e, t),
//           Ne(t),
//           n & 512 && ($t || a === null || oa(a, a.return)),
//           t.flags & 32)
//         ) {
//           l = t.stateNode;
//           try {
//             Pn(l, "");
//           } catch (F) {
//             _t(t, t.return, F);
//           }
//         }
//         (n & 4 &&
//           t.stateNode != null &&
//           ((l = t.memoizedProps), Wc(t, l, a !== null ? a.memoizedProps : l)),
//           n & 1024 && (Pc = !0));
//         break;
//       case 6:
//         if ((we(e, t), Ne(t), n & 4)) {
//           if (t.stateNode === null) throw Error(c(162));
//           ((n = t.memoizedProps), (a = t.stateNode));
//           try {
//             a.nodeValue = n;
//           } catch (F) {
//             _t(t, t.return, F);
//           }
//         }
//         break;
//       case 3:
//         if (
//           ((Zs = null),
//           (l = Ie),
//           (Ie = Xs(e.containerInfo)),
//           we(e, t),
//           (Ie = l),
//           Ne(t),
//           n & 4 && a !== null && a.memoizedState.isDehydrated)
//         )
//           try {
//             Ol(e.containerInfo);
//           } catch (F) {
//             _t(t, t.return, F);
//           }
//         Pc && ((Pc = !1), Fd(t));
//         break;
//       case 4:
//         ((n = Ie),
//           (Ie = Xs(t.stateNode.containerInfo)),
//           we(e, t),
//           Ne(t),
//           (Ie = n));
//         break;
//       case 12:
//         (we(e, t), Ne(t));
//         break;
//       case 31:
//         (we(e, t),
//           Ne(t),
//           n & 4 &&
//             ((n = t.updateQueue),
//             n !== null && ((t.updateQueue = null), js(t, n))));
//         break;
//       case 13:
//         (we(e, t),
//           Ne(t),
//           t.child.flags & 8192 &&
//             (t.memoizedState !== null) !=
//               (a !== null && a.memoizedState !== null) &&
//             (Ms = he()),
//           n & 4 &&
//             ((n = t.updateQueue),
//             n !== null && ((t.updateQueue = null), js(t, n))));
//         break;
//       case 22:
//         l = t.memoizedState !== null;
//         var b = a !== null && a.memoizedState !== null,
//           H = za,
//           D = $t;
//         if (
//           ((za = H || l),
//           ($t = D || b),
//           we(e, t),
//           ($t = D),
//           (za = H),
//           Ne(t),
//           n & 8192)
//         )
//           t: for (
//             e = t.stateNode,
//               e._visibility = l ? e._visibility & -2 : e._visibility | 1,
//               l && (a === null || b || za || $t || Un(t)),
//               a = null,
//               e = t;
//             ;
//           ) {
//             if (e.tag === 5 || e.tag === 26) {
//               if (a === null) {
//                 b = a = e;
//                 try {
//                   if (((s = b.stateNode), l))
//                     ((u = s.style),
//                       typeof u.setProperty == "function"
//                         ? u.setProperty("display", "none", "important")
//                         : (u.display = "none"));
//                   else {
//                     h = b.stateNode;
//                     var G = b.memoizedProps.style,
//                       j =
//                         G != null && G.hasOwnProperty("display")
//                           ? G.display
//                           : null;
//                     h.style.display =
//                       j == null || typeof j == "boolean" ? "" : ("" + j).trim();
//                   }
//                 } catch (F) {
//                   _t(b, b.return, F);
//                 }
//               }
//             } else if (e.tag === 6) {
//               if (a === null) {
//                 b = e;
//                 try {
//                   b.stateNode.nodeValue = l ? "" : b.memoizedProps;
//                 } catch (F) {
//                   _t(b, b.return, F);
//                 }
//               }
//             } else if (e.tag === 18) {
//               if (a === null) {
//                 b = e;
//                 try {
//                   var R = b.stateNode;
//                   l ? qm(R, !0) : qm(b.stateNode, !1);
//                 } catch (F) {
//                   _t(b, b.return, F);
//                 }
//               }
//             } else if (
//               ((e.tag !== 22 && e.tag !== 23) ||
//                 e.memoizedState === null ||
//                 e === t) &&
//               e.child !== null
//             ) {
//               ((e.child.return = e), (e = e.child));
//               continue;
//             }
//             if (e === t) break t;
//             for (; e.sibling === null; ) {
//               if (e.return === null || e.return === t) break t;
//               (a === e && (a = null), (e = e.return));
//             }
//             (a === e && (a = null),
//               (e.sibling.return = e.return),
//               (e = e.sibling));
//           }
//         n & 4 &&
//           ((n = t.updateQueue),
//           n !== null &&
//             ((a = n.retryQueue),
//             a !== null && ((n.retryQueue = null), js(t, a))));
//         break;
//       case 19:
//         (we(e, t),
//           Ne(t),
//           n & 4 &&
//             ((n = t.updateQueue),
//             n !== null && ((t.updateQueue = null), js(t, n))));
//         break;
//       case 30:
//         break;
//       case 21:
//         break;
//       default:
//         (we(e, t), Ne(t));
//     }
//   }
//   function Ne(t) {
//     var e = t.flags;
//     if (e & 2) {
//       try {
//         for (var a, n = t.return; n !== null; ) {
//           if (kd(n)) {
//             a = n;
//             break;
//           }
//           n = n.return;
//         }
//         if (a == null) throw Error(c(160));
//         switch (a.tag) {
//           case 27:
//             var l = a.stateNode,
//               s = $c(t);
//             Os(t, s, l);
//             break;
//           case 5:
//             var u = a.stateNode;
//             a.flags & 32 && (Pn(u, ""), (a.flags &= -33));
//             var h = $c(t);
//             Os(t, h, u);
//             break;
//           case 3:
//           case 4:
//             var b = a.stateNode.containerInfo,
//               H = $c(t);
//             Fc(t, H, b);
//             break;
//           default:
//             throw Error(c(161));
//         }
//       } catch (D) {
//         _t(t, t.return, D);
//       }
//       t.flags &= -3;
//     }
//     e & 4096 && (t.flags &= -4097);
//   }
//   function Fd(t) {
//     if (t.subtreeFlags & 1024)
//       for (t = t.child; t !== null; ) {
//         var e = t;
//         (Fd(e),
//           e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
//           (t = t.sibling));
//       }
//   }
//   function Oa(t, e) {
//     if (e.subtreeFlags & 8772)
//       for (e = e.child; e !== null; ) (Qd(t, e.alternate, e), (e = e.sibling));
//   }
//   function Un(t) {
//     for (t = t.child; t !== null; ) {
//       var e = t;
//       switch (e.tag) {
//         case 0:
//         case 11:
//         case 14:
//         case 15:
//           (Pa(4, e, e.return), Un(e));
//           break;
//         case 1:
//           oa(e, e.return);
//           var a = e.stateNode;
//           (typeof a.componentWillUnmount == "function" && qd(e, e.return, a),
//             Un(e));
//           break;
//         case 27:
//           zi(e.stateNode);
//         case 26:
//         case 5:
//           (oa(e, e.return), Un(e));
//           break;
//         case 22:
//           e.memoizedState === null && Un(e);
//           break;
//         case 30:
//           Un(e);
//           break;
//         default:
//           Un(e);
//       }
//       t = t.sibling;
//     }
//   }
//   function ja(t, e, a) {
//     for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
//       var n = e.alternate,
//         l = t,
//         s = e,
//         u = s.flags;
//       switch (s.tag) {
//         case 0:
//         case 11:
//         case 15:
//           (ja(l, s, a), yi(4, s));
//           break;
//         case 1:
//           if (
//             (ja(l, s, a),
//             (n = s),
//             (l = n.stateNode),
//             typeof l.componentDidMount == "function")
//           )
//             try {
//               l.componentDidMount();
//             } catch (H) {
//               _t(n, n.return, H);
//             }
//           if (((n = s), (l = n.updateQueue), l !== null)) {
//             var h = n.stateNode;
//             try {
//               var b = l.shared.hiddenCallbacks;
//               if (b !== null)
//                 for (l.shared.hiddenCallbacks = null, l = 0; l < b.length; l++)
//                   Hf(b[l], h);
//             } catch (H) {
//               _t(n, n.return, H);
//             }
//           }
//           (a && u & 64 && Yd(s), vi(s, s.return));
//           break;
//         case 27:
//           Vd(s);
//         case 26:
//         case 5:
//           (ja(l, s, a), a && n === null && u & 4 && Gd(s), vi(s, s.return));
//           break;
//         case 12:
//           ja(l, s, a);
//           break;
//         case 31:
//           (ja(l, s, a), a && u & 4 && Jd(l, s));
//           break;
//         case 13:
//           (ja(l, s, a), a && u & 4 && Wd(l, s));
//           break;
//         case 22:
//           (s.memoizedState === null && ja(l, s, a), vi(s, s.return));
//           break;
//         case 30:
//           break;
//         default:
//           ja(l, s, a);
//       }
//       e = e.sibling;
//     }
//   }
//   function Ic(t, e) {
//     var a = null;
//     (t !== null &&
//       t.memoizedState !== null &&
//       t.memoizedState.cachePool !== null &&
//       (a = t.memoizedState.cachePool.pool),
//       (t = null),
//       e.memoizedState !== null &&
//         e.memoizedState.cachePool !== null &&
//         (t = e.memoizedState.cachePool.pool),
//       t !== a && (t != null && t.refCount++, a != null && li(a)));
//   }
//   function tr(t, e) {
//     ((t = null),
//       e.alternate !== null && (t = e.alternate.memoizedState.cache),
//       (e = e.memoizedState.cache),
//       e !== t && (e.refCount++, t != null && li(t)));
//   }
//   function ta(t, e, a, n) {
//     if (e.subtreeFlags & 10256)
//       for (e = e.child; e !== null; ) (Pd(t, e, a, n), (e = e.sibling));
//   }
//   function Pd(t, e, a, n) {
//     var l = e.flags;
//     switch (e.tag) {
//       case 0:
//       case 11:
//       case 15:
//         (ta(t, e, a, n), l & 2048 && yi(9, e));
//         break;
//       case 1:
//         ta(t, e, a, n);
//         break;
//       case 3:
//         (ta(t, e, a, n),
//           l & 2048 &&
//             ((t = null),
//             e.alternate !== null && (t = e.alternate.memoizedState.cache),
//             (e = e.memoizedState.cache),
//             e !== t && (e.refCount++, t != null && li(t))));
//         break;
//       case 12:
//         if (l & 2048) {
//           (ta(t, e, a, n), (t = e.stateNode));
//           try {
//             var s = e.memoizedProps,
//               u = s.id,
//               h = s.onPostCommit;
//             typeof h == "function" &&
//               h(
//                 u,
//                 e.alternate === null ? "mount" : "update",
//                 t.passiveEffectDuration,
//                 -0,
//               );
//           } catch (b) {
//             _t(e, e.return, b);
//           }
//         } else ta(t, e, a, n);
//         break;
//       case 31:
//         ta(t, e, a, n);
//         break;
//       case 13:
//         ta(t, e, a, n);
//         break;
//       case 23:
//         break;
//       case 22:
//         ((s = e.stateNode),
//           (u = e.alternate),
//           e.memoizedState !== null
//             ? s._visibility & 2
//               ? ta(t, e, a, n)
//               : xi(t, e)
//             : s._visibility & 2
//               ? ta(t, e, a, n)
//               : ((s._visibility |= 2),
//                 vl(t, e, a, n, (e.subtreeFlags & 10256) !== 0 || !1)),
//           l & 2048 && Ic(u, e));
//         break;
//       case 24:
//         (ta(t, e, a, n), l & 2048 && tr(e.alternate, e));
//         break;
//       default:
//         ta(t, e, a, n);
//     }
//   }
//   function vl(t, e, a, n, l) {
//     for (
//       l = l && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
//       e !== null;
//     ) {
//       var s = t,
//         u = e,
//         h = a,
//         b = n,
//         H = u.flags;
//       switch (u.tag) {
//         case 0:
//         case 11:
//         case 15:
//           (vl(s, u, h, b, l), yi(8, u));
//           break;
//         case 23:
//           break;
//         case 22:
//           var D = u.stateNode;
//           (u.memoizedState !== null
//             ? D._visibility & 2
//               ? vl(s, u, h, b, l)
//               : xi(s, u)
//             : ((D._visibility |= 2), vl(s, u, h, b, l)),
//             l && H & 2048 && Ic(u.alternate, u));
//           break;
//         case 24:
//           (vl(s, u, h, b, l), l && H & 2048 && tr(u.alternate, u));
//           break;
//         default:
//           vl(s, u, h, b, l);
//       }
//       e = e.sibling;
//     }
//   }
//   function xi(t, e) {
//     if (e.subtreeFlags & 10256)
//       for (e = e.child; e !== null; ) {
//         var a = t,
//           n = e,
//           l = n.flags;
//         switch (n.tag) {
//           case 22:
//             (xi(a, n), l & 2048 && Ic(n.alternate, n));
//             break;
//           case 24:
//             (xi(a, n), l & 2048 && tr(n.alternate, n));
//             break;
//           default:
//             xi(a, n);
//         }
//         e = e.sibling;
//       }
//   }
//   var bi = 8192;
//   function xl(t, e, a) {
//     if (t.subtreeFlags & bi)
//       for (t = t.child; t !== null; ) (Id(t, e, a), (t = t.sibling));
//   }
//   function Id(t, e, a) {
//     switch (t.tag) {
//       case 26:
//         (xl(t, e, a),
//           t.flags & bi &&
//             t.memoizedState !== null &&
//             oy(a, Ie, t.memoizedState, t.memoizedProps));
//         break;
//       case 5:
//         xl(t, e, a);
//         break;
//       case 3:
//       case 4:
//         var n = Ie;
//         ((Ie = Xs(t.stateNode.containerInfo)), xl(t, e, a), (Ie = n));
//         break;
//       case 22:
//         t.memoizedState === null &&
//           ((n = t.alternate),
//           n !== null && n.memoizedState !== null
//             ? ((n = bi), (bi = 16777216), xl(t, e, a), (bi = n))
//             : xl(t, e, a));
//         break;
//       default:
//         xl(t, e, a);
//     }
//   }
//   function tm(t) {
//     var e = t.alternate;
//     if (e !== null && ((t = e.child), t !== null)) {
//       e.child = null;
//       do ((e = t.sibling), (t.sibling = null), (t = e));
//       while (t !== null);
//     }
//   }
//   function Si(t) {
//     var e = t.deletions;
//     if ((t.flags & 16) !== 0) {
//       if (e !== null)
//         for (var a = 0; a < e.length; a++) {
//           var n = e[a];
//           ((ee = n), am(n, t));
//         }
//       tm(t);
//     }
//     if (t.subtreeFlags & 10256)
//       for (t = t.child; t !== null; ) (em(t), (t = t.sibling));
//   }
//   function em(t) {
//     switch (t.tag) {
//       case 0:
//       case 11:
//       case 15:
//         (Si(t), t.flags & 2048 && Pa(9, t, t.return));
//         break;
//       case 3:
//         Si(t);
//         break;
//       case 12:
//         Si(t);
//         break;
//       case 22:
//         var e = t.stateNode;
//         t.memoizedState !== null &&
//         e._visibility & 2 &&
//         (t.return === null || t.return.tag !== 13)
//           ? ((e._visibility &= -3), Cs(t))
//           : Si(t);
//         break;
//       default:
//         Si(t);
//     }
//   }
//   function Cs(t) {
//     var e = t.deletions;
//     if ((t.flags & 16) !== 0) {
//       if (e !== null)
//         for (var a = 0; a < e.length; a++) {
//           var n = e[a];
//           ((ee = n), am(n, t));
//         }
//       tm(t);
//     }
//     for (t = t.child; t !== null; ) {
//       switch (((e = t), e.tag)) {
//         case 0:
//         case 11:
//         case 15:
//           (Pa(8, e, e.return), Cs(e));
//           break;
//         case 22:
//           ((a = e.stateNode),
//             a._visibility & 2 && ((a._visibility &= -3), Cs(e)));
//           break;
//         default:
//           Cs(e);
//       }
//       t = t.sibling;
//     }
//   }
//   function am(t, e) {
//     for (; ee !== null; ) {
//       var a = ee;
//       switch (a.tag) {
//         case 0:
//         case 11:
//         case 15:
//           Pa(8, a, e);
//           break;
//         case 23:
//         case 22:
//           if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
//             var n = a.memoizedState.cachePool.pool;
//             n != null && n.refCount++;
//           }
//           break;
//         case 24:
//           li(a.memoizedState.cache);
//       }
//       if (((n = a.child), n !== null)) ((n.return = a), (ee = n));
//       else
//         t: for (a = t; ee !== null; ) {
//           n = ee;
//           var l = n.sibling,
//             s = n.return;
//           if ((Zd(n), n === a)) {
//             ee = null;
//             break t;
//           }
//           if (l !== null) {
//             ((l.return = s), (ee = l));
//             break t;
//           }
//           ee = s;
//         }
//     }
//   }
//   var E0 = {
//       getCacheForType: function (t) {
//         var e = se(Kt),
//           a = e.data.get(t);
//         return (a === void 0 && ((a = t()), e.data.set(t, a)), a);
//       },
//       cacheSignal: function () {
//         return se(Kt).controller.signal;
//       },
//     },
//     w0 = typeof WeakMap == "function" ? WeakMap : Map,
//     Ct = 0,
//     Bt = null,
//     Et = null,
//     Nt = 0,
//     Mt = 0,
//     Re = null,
//     Ia = !1,
//     bl = !1,
//     er = !1,
//     Ca = 0,
//     Xt = 0,
//     tn = 0,
//     Bn = 0,
//     ar = 0,
//     De = 0,
//     Sl = 0,
//     Ei = null,
//     Ae = null,
//     nr = !1,
//     Ms = 0,
//     nm = 0,
//     _s = 1 / 0,
//     Rs = null,
//     en = null,
//     Ft = 0,
//     an = null,
//     El = null,
//     Ma = 0,
//     lr = 0,
//     ir = null,
//     lm = null,
//     wi = 0,
//     sr = null;
//   function Ue() {
//     return (Ct & 2) !== 0 && Nt !== 0 ? Nt & -Nt : N.T !== null ? dr() : To();
//   }
//   function im() {
//     if (De === 0)
//       if ((Nt & 536870912) === 0 || zt) {
//         var t = Xn;
//         ((Xn <<= 1), (Xn & 3932160) === 0 && (Xn = 262144), (De = t));
//       } else De = 536870912;
//     return ((t = Me.current), t !== null && (t.flags |= 32), De);
//   }
//   function Te(t, e, a) {
//     (((t === Bt && (Mt === 2 || Mt === 9)) || t.cancelPendingCommit !== null) &&
//       (wl(t, 0), nn(t, Nt, De, !1)),
//       kt(t, a),
//       ((Ct & 2) === 0 || t !== Bt) &&
//         (t === Bt &&
//           ((Ct & 2) === 0 && (Bn |= a), Xt === 4 && nn(t, Nt, De, !1)),
//         ca(t)));
//   }
//   function sm(t, e, a) {
//     if ((Ct & 6) !== 0) throw Error(c(327));
//     var n = (!a && (e & 127) === 0 && (e & t.expiredLanes) === 0) || qt(t, e),
//       l = n ? T0(t, e) : cr(t, e, !0),
//       s = n;
//     do {
//       if (l === 0) {
//         bl && !n && nn(t, e, 0, !1);
//         break;
//       } else {
//         if (((a = t.current.alternate), s && !N0(a))) {
//           ((l = cr(t, e, !1)), (s = !1));
//           continue;
//         }
//         if (l === 2) {
//           if (((s = e), t.errorRecoveryDisabledLanes & s)) var u = 0;
//           else
//             ((u = t.pendingLanes & -536870913),
//               (u = u !== 0 ? u : u & 536870912 ? 536870912 : 0));
//           if (u !== 0) {
//             e = u;
//             t: {
//               var h = t;
//               l = Ei;
//               var b = h.current.memoizedState.isDehydrated;
//               if ((b && (wl(h, u).flags |= 256), (u = cr(h, u, !1)), u !== 2)) {
//                 if (er && !b) {
//                   ((h.errorRecoveryDisabledLanes |= s), (Bn |= s), (l = 4));
//                   break t;
//                 }
//                 ((s = Ae),
//                   (Ae = l),
//                   s !== null &&
//                     (Ae === null ? (Ae = s) : Ae.push.apply(Ae, s)));
//               }
//               l = u;
//             }
//             if (((s = !1), l !== 2)) continue;
//           }
//         }
//         if (l === 1) {
//           (wl(t, 0), nn(t, e, 0, !0));
//           break;
//         }
//         t: {
//           switch (((n = t), (s = l), s)) {
//             case 0:
//             case 1:
//               throw Error(c(345));
//             case 4:
//               if ((e & 4194048) !== e) break;
//             case 6:
//               nn(n, e, De, !Ia);
//               break t;
//             case 2:
//               Ae = null;
//               break;
//             case 3:
//             case 5:
//               break;
//             default:
//               throw Error(c(329));
//           }
//           if ((e & 62914560) === e && ((l = Ms + 300 - he()), 10 < l)) {
//             if ((nn(n, e, De, !Ia), ft(n, 0, !0) !== 0)) break t;
//             ((Ma = e),
//               (n.timeoutHandle = Bm(
//                 om.bind(
//                   null,
//                   n,
//                   a,
//                   Ae,
//                   Rs,
//                   nr,
//                   e,
//                   De,
//                   Bn,
//                   Sl,
//                   Ia,
//                   s,
//                   "Throttled",
//                   -0,
//                   0,
//                 ),
//                 l,
//               )));
//             break t;
//           }
//           om(n, a, Ae, Rs, nr, e, De, Bn, Sl, Ia, s, null, -0, 0);
//         }
//       }
//       break;
//     } while (!0);
//     ca(t);
//   }
//   function om(t, e, a, n, l, s, u, h, b, H, D, G, j, R) {
//     if (
//       ((t.timeoutHandle = -1),
//       (G = e.subtreeFlags),
//       G & 8192 || (G & 16785408) === 16785408)
//     ) {
//       ((G = {
//         stylesheets: null,
//         count: 0,
//         imgCount: 0,
//         imgBytes: 0,
//         suspenseyImages: [],
//         waitingForImages: !0,
//         waitingForViewTransition: !1,
//         unsuspend: ya,
//       }),
//         Id(e, s, G));
//       var F =
//         (s & 62914560) === s ? Ms - he() : (s & 4194048) === s ? nm - he() : 0;
//       if (((F = cy(G, F)), F !== null)) {
//         ((Ma = s),
//           (t.cancelPendingCommit = F(
//             gm.bind(null, t, e, s, a, n, l, u, h, b, D, G, null, j, R),
//           )),
//           nn(t, s, u, !H));
//         return;
//       }
//     }
//     gm(t, e, s, a, n, l, u, h, b);
//   }
//   function N0(t) {
//     for (var e = t; ; ) {
//       var a = e.tag;
//       if (
//         (a === 0 || a === 11 || a === 15) &&
//         e.flags & 16384 &&
//         ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
//       )
//         for (var n = 0; n < a.length; n++) {
//           var l = a[n],
//             s = l.getSnapshot;
//           l = l.value;
//           try {
//             if (!je(s(), l)) return !1;
//           } catch {
//             return !1;
//           }
//         }
//       if (((a = e.child), e.subtreeFlags & 16384 && a !== null))
//         ((a.return = e), (e = a));
//       else {
//         if (e === t) break;
//         for (; e.sibling === null; ) {
//           if (e.return === null || e.return === t) return !0;
//           e = e.return;
//         }
//         ((e.sibling.return = e.return), (e = e.sibling));
//       }
//     }
//     return !0;
//   }
//   function nn(t, e, a, n) {
//     ((e &= ~ar),
//       (e &= ~Bn),
//       (t.suspendedLanes |= e),
//       (t.pingedLanes &= ~e),
//       n && (t.warmLanes |= e),
//       (n = t.expirationTimes));
//     for (var l = e; 0 < l; ) {
//       var s = 31 - re(l),
//         u = 1 << s;
//       ((n[s] = -1), (l &= ~u));
//     }
//     a !== 0 && bn(t, a, e);
//   }
//   function Ds() {
//     return (Ct & 6) === 0 ? (Ni(0), !1) : !0;
//   }
//   function or() {
//     if (Et !== null) {
//       if (Mt === 0) var t = Et.return;
//       else ((t = Et), (Sa = Hn = null), wc(t), (ml = null), (si = 0), (t = Et));
//       for (; t !== null; ) (Ld(t.alternate, t), (t = t.return));
//       Et = null;
//     }
//   }
//   function wl(t, e) {
//     var a = t.timeoutHandle;
//     (a !== -1 && ((t.timeoutHandle = -1), X0(a)),
//       (a = t.cancelPendingCommit),
//       a !== null && ((t.cancelPendingCommit = null), a()),
//       (Ma = 0),
//       or(),
//       (Bt = t),
//       (Et = a = xa(t.current, null)),
//       (Nt = e),
//       (Mt = 0),
//       (Re = null),
//       (Ia = !1),
//       (bl = qt(t, e)),
//       (er = !1),
//       (Sl = De = ar = Bn = tn = Xt = 0),
//       (Ae = Ei = null),
//       (nr = !1),
//       (e & 8) !== 0 && (e |= e & 32));
//     var n = t.entangledLanes;
//     if (n !== 0)
//       for (t = t.entanglements, n &= e; 0 < n; ) {
//         var l = 31 - re(n),
//           s = 1 << l;
//         ((e |= t[l]), (n &= ~s));
//       }
//     return ((Ca = e), as(), a);
//   }
//   function cm(t, e) {
//     ((ht = null),
//       (N.H = hi),
//       e === dl || e === us
//         ? ((e = Nf()), (Mt = 3))
//         : e === fc
//           ? ((e = Nf()), (Mt = 4))
//           : (Mt =
//               e === Yc
//                 ? 8
//                 : e !== null &&
//                     typeof e == "object" &&
//                     typeof e.then == "function"
//                   ? 6
//                   : 1),
//       (Re = e),
//       Et === null && ((Xt = 1), Ns(t, ke(e, t.current))));
//   }
//   function rm() {
//     var t = Me.current;
//     return t === null
//       ? !0
//       : (Nt & 4194048) === Nt
//         ? Ze === null
//         : (Nt & 62914560) === Nt || (Nt & 536870912) !== 0
//           ? t === Ze
//           : !1;
//   }
//   function um() {
//     var t = N.H;
//     return ((N.H = hi), t === null ? hi : t);
//   }
//   function fm() {
//     var t = N.A;
//     return ((N.A = E0), t);
//   }
//   function Us() {
//     ((Xt = 4),
//       Ia || ((Nt & 4194048) !== Nt && Me.current !== null) || (bl = !0),
//       ((tn & 134217727) === 0 && (Bn & 134217727) === 0) ||
//         Bt === null ||
//         nn(Bt, Nt, De, !1));
//   }
//   function cr(t, e, a) {
//     var n = Ct;
//     Ct |= 2;
//     var l = um(),
//       s = fm();
//     ((Bt !== t || Nt !== e) && ((Rs = null), wl(t, e)), (e = !1));
//     var u = Xt;
//     t: do
//       try {
//         if (Mt !== 0 && Et !== null) {
//           var h = Et,
//             b = Re;
//           switch (Mt) {
//             case 8:
//               (or(), (u = 6));
//               break t;
//             case 3:
//             case 2:
//             case 9:
//             case 6:
//               Me.current === null && (e = !0);
//               var H = Mt;
//               if (((Mt = 0), (Re = null), Nl(t, h, b, H), a && bl)) {
//                 u = 0;
//                 break t;
//               }
//               break;
//             default:
//               ((H = Mt), (Mt = 0), (Re = null), Nl(t, h, b, H));
//           }
//         }
//         (A0(), (u = Xt));
//         break;
//       } catch (D) {
//         cm(t, D);
//       }
//     while (!0);
//     return (
//       e && t.shellSuspendCounter++,
//       (Sa = Hn = null),
//       (Ct = n),
//       (N.H = l),
//       (N.A = s),
//       Et === null && ((Bt = null), (Nt = 0), as()),
//       u
//     );
//   }
//   function A0() {
//     for (; Et !== null; ) dm(Et);
//   }
//   function T0(t, e) {
//     var a = Ct;
//     Ct |= 2;
//     var n = um(),
//       l = fm();
//     Bt !== t || Nt !== e
//       ? ((Rs = null), (_s = he() + 500), wl(t, e))
//       : (bl = qt(t, e));
//     t: do
//       try {
//         if (Mt !== 0 && Et !== null) {
//           e = Et;
//           var s = Re;
//           e: switch (Mt) {
//             case 1:
//               ((Mt = 0), (Re = null), Nl(t, e, s, 1));
//               break;
//             case 2:
//             case 9:
//               if (Ef(s)) {
//                 ((Mt = 0), (Re = null), mm(e));
//                 break;
//               }
//               ((e = function () {
//                 ((Mt !== 2 && Mt !== 9) || Bt !== t || (Mt = 7), ca(t));
//               }),
//                 s.then(e, e));
//               break t;
//             case 3:
//               Mt = 7;
//               break t;
//             case 4:
//               Mt = 5;
//               break t;
//             case 7:
//               Ef(s)
//                 ? ((Mt = 0), (Re = null), mm(e))
//                 : ((Mt = 0), (Re = null), Nl(t, e, s, 7));
//               break;
//             case 5:
//               var u = null;
//               switch (Et.tag) {
//                 case 26:
//                   u = Et.memoizedState;
//                 case 5:
//                 case 27:
//                   var h = Et;
//                   if (u ? Pm(u) : h.stateNode.complete) {
//                     ((Mt = 0), (Re = null));
//                     var b = h.sibling;
//                     if (b !== null) Et = b;
//                     else {
//                       var H = h.return;
//                       H !== null ? ((Et = H), Bs(H)) : (Et = null);
//                     }
//                     break e;
//                   }
//               }
//               ((Mt = 0), (Re = null), Nl(t, e, s, 5));
//               break;
//             case 6:
//               ((Mt = 0), (Re = null), Nl(t, e, s, 6));
//               break;
//             case 8:
//               (or(), (Xt = 6));
//               break t;
//             default:
//               throw Error(c(462));
//           }
//         }
//         z0();
//         break;
//       } catch (D) {
//         cm(t, D);
//       }
//     while (!0);
//     return (
//       (Sa = Hn = null),
//       (N.H = n),
//       (N.A = l),
//       (Ct = a),
//       Et !== null ? 0 : ((Bt = null), (Nt = 0), as(), Xt)
//     );
//   }
//   function z0() {
//     for (; Et !== null && !me(); ) dm(Et);
//   }
//   function dm(t) {
//     var e = Ud(t.alternate, t, Ca);
//     ((t.memoizedProps = t.pendingProps), e === null ? Bs(t) : (Et = e));
//   }
//   function mm(t) {
//     var e = t,
//       a = e.alternate;
//     switch (e.tag) {
//       case 15:
//       case 0:
//         e = jd(a, e, e.pendingProps, e.type, void 0, Nt);
//         break;
//       case 11:
//         e = jd(a, e, e.pendingProps, e.type.render, e.ref, Nt);
//         break;
//       case 5:
//         wc(e);
//       default:
//         (Ld(a, e), (e = Et = ff(e, Ca)), (e = Ud(a, e, Ca)));
//     }
//     ((t.memoizedProps = t.pendingProps), e === null ? Bs(t) : (Et = e));
//   }
//   function Nl(t, e, a, n) {
//     ((Sa = Hn = null), wc(e), (ml = null), (si = 0));
//     var l = e.return;
//     try {
//       if (g0(t, l, e, a, Nt)) {
//         ((Xt = 1), Ns(t, ke(a, t.current)), (Et = null));
//         return;
//       }
//     } catch (s) {
//       if (l !== null) throw ((Et = l), s);
//       ((Xt = 1), Ns(t, ke(a, t.current)), (Et = null));
//       return;
//     }
//     e.flags & 32768
//       ? (zt || n === 1
//           ? (t = !0)
//           : bl || (Nt & 536870912) !== 0
//             ? (t = !1)
//             : ((Ia = t = !0),
//               (n === 2 || n === 9 || n === 3 || n === 6) &&
//                 ((n = Me.current),
//                 n !== null && n.tag === 13 && (n.flags |= 16384))),
//         hm(e, t))
//       : Bs(e);
//   }
//   function Bs(t) {
//     var e = t;
//     do {
//       if ((e.flags & 32768) !== 0) {
//         hm(e, Ia);
//         return;
//       }
//       t = e.return;
//       var a = v0(e.alternate, e, Ca);
//       if (a !== null) {
//         Et = a;
//         return;
//       }
//       if (((e = e.sibling), e !== null)) {
//         Et = e;
//         return;
//       }
//       Et = e = t;
//     } while (e !== null);
//     Xt === 0 && (Xt = 5);
//   }
//   function hm(t, e) {
//     do {
//       var a = x0(t.alternate, t);
//       if (a !== null) {
//         ((a.flags &= 32767), (Et = a));
//         return;
//       }
//       if (
//         ((a = t.return),
//         a !== null &&
//           ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
//         !e && ((t = t.sibling), t !== null))
//       ) {
//         Et = t;
//         return;
//       }
//       Et = t = a;
//     } while (t !== null);
//     ((Xt = 6), (Et = null));
//   }
//   function gm(t, e, a, n, l, s, u, h, b) {
//     t.cancelPendingCommit = null;
//     do Ls();
//     while (Ft !== 0);
//     if ((Ct & 6) !== 0) throw Error(c(327));
//     if (e !== null) {
//       if (e === t.current) throw Error(c(177));
//       if (
//         ((s = e.lanes | e.childLanes),
//         (s |= $o),
//         ye(t, a, s, u, h, b),
//         t === Bt && ((Et = Bt = null), (Nt = 0)),
//         (El = e),
//         (an = t),
//         (Ma = a),
//         (lr = s),
//         (ir = l),
//         (lm = n),
//         (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
//           ? ((t.callbackNode = null),
//             (t.callbackPriority = 0),
//             C0(yn, function () {
//               return (bm(), null);
//             }))
//           : ((t.callbackNode = null), (t.callbackPriority = 0)),
//         (n = (e.flags & 13878) !== 0),
//         (e.subtreeFlags & 13878) !== 0 || n)
//       ) {
//         ((n = N.T), (N.T = null), (l = L.p), (L.p = 2), (u = Ct), (Ct |= 4));
//         try {
//           b0(t, e, a);
//         } finally {
//           ((Ct = u), (L.p = l), (N.T = n));
//         }
//       }
//       ((Ft = 1), pm(), ym(), vm());
//     }
//   }
//   function pm() {
//     if (Ft === 1) {
//       Ft = 0;
//       var t = an,
//         e = El,
//         a = (e.flags & 13878) !== 0;
//       if ((e.subtreeFlags & 13878) !== 0 || a) {
//         ((a = N.T), (N.T = null));
//         var n = L.p;
//         L.p = 2;
//         var l = Ct;
//         Ct |= 4;
//         try {
//           $d(e, t);
//           var s = br,
//             u = ef(t.containerInfo),
//             h = s.focusedElem,
//             b = s.selectionRange;
//           if (
//             u !== h &&
//             h &&
//             h.ownerDocument &&
//             tf(h.ownerDocument.documentElement, h)
//           ) {
//             if (b !== null && Qo(h)) {
//               var H = b.start,
//                 D = b.end;
//               if ((D === void 0 && (D = H), "selectionStart" in h))
//                 ((h.selectionStart = H),
//                   (h.selectionEnd = Math.min(D, h.value.length)));
//               else {
//                 var G = h.ownerDocument || document,
//                   j = (G && G.defaultView) || window;
//                 if (j.getSelection) {
//                   var R = j.getSelection(),
//                     F = h.textContent.length,
//                     rt = Math.min(b.start, F),
//                     Ut = b.end === void 0 ? rt : Math.min(b.end, F);
//                   !R.extend && rt > Ut && ((u = Ut), (Ut = rt), (rt = u));
//                   var A = Iu(h, rt),
//                     w = Iu(h, Ut);
//                   if (
//                     A &&
//                     w &&
//                     (R.rangeCount !== 1 ||
//                       R.anchorNode !== A.node ||
//                       R.anchorOffset !== A.offset ||
//                       R.focusNode !== w.node ||
//                       R.focusOffset !== w.offset)
//                   ) {
//                     var z = G.createRange();
//                     (z.setStart(A.node, A.offset),
//                       R.removeAllRanges(),
//                       rt > Ut
//                         ? (R.addRange(z), R.extend(w.node, w.offset))
//                         : (z.setEnd(w.node, w.offset), R.addRange(z)));
//                   }
//                 }
//               }
//             }
//             for (G = [], R = h; (R = R.parentNode); )
//               R.nodeType === 1 &&
//                 G.push({
//                   element: R,
//                   left: R.scrollLeft,
//                   top: R.scrollTop,
//                 });
//             for (
//               typeof h.focus == "function" && h.focus(), h = 0;
//               h < G.length;
//               h++
//             ) {
//               var Y = G[h];
//               ((Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top));
//             }
//           }
//           (($s = !!xr), (br = xr = null));
//         } finally {
//           ((Ct = l), (L.p = n), (N.T = a));
//         }
//       }
//       ((t.current = e), (Ft = 2));
//     }
//   }
//   function ym() {
//     if (Ft === 2) {
//       Ft = 0;
//       var t = an,
//         e = El,
//         a = (e.flags & 8772) !== 0;
//       if ((e.subtreeFlags & 8772) !== 0 || a) {
//         ((a = N.T), (N.T = null));
//         var n = L.p;
//         L.p = 2;
//         var l = Ct;
//         Ct |= 4;
//         try {
//           Qd(t, e.alternate, e);
//         } finally {
//           ((Ct = l), (L.p = n), (N.T = a));
//         }
//       }
//       Ft = 3;
//     }
//   }
//   function vm() {
//     if (Ft === 4 || Ft === 3) {
//       ((Ft = 0), La());
//       var t = an,
//         e = El,
//         a = Ma,
//         n = lm;
//       (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
//         ? (Ft = 5)
//         : ((Ft = 0), (El = an = null), xm(t, t.pendingLanes));
//       var l = t.pendingLanes;
//       if (
//         (l === 0 && (en = null),
//         Fe(a),
//         (e = e.stateNode),
//         ge && typeof ge.onCommitFiberRoot == "function")
//       )
//         try {
//           ge.onCommitFiberRoot(vn, e, void 0, (e.current.flags & 128) === 128);
//         } catch {}
//       if (n !== null) {
//         ((e = N.T), (l = L.p), (L.p = 2), (N.T = null));
//         try {
//           for (var s = t.onRecoverableError, u = 0; u < n.length; u++) {
//             var h = n[u];
//             s(h.value, {
//               componentStack: h.stack,
//             });
//           }
//         } finally {
//           ((N.T = e), (L.p = l));
//         }
//       }
//       ((Ma & 3) !== 0 && Ls(),
//         ca(t),
//         (l = t.pendingLanes),
//         (a & 261930) !== 0 && (l & 42) !== 0
//           ? t === sr
//             ? wi++
//             : ((wi = 0), (sr = t))
//           : (wi = 0),
//         Ni(0));
//     }
//   }
//   function xm(t, e) {
//     (t.pooledCacheLanes &= e) === 0 &&
//       ((e = t.pooledCache), e != null && ((t.pooledCache = null), li(e)));
//   }
//   function Ls() {
//     return (pm(), ym(), vm(), bm());
//   }
//   function bm() {
//     if (Ft !== 5) return !1;
//     var t = an,
//       e = lr;
//     lr = 0;
//     var a = Fe(Ma),
//       n = N.T,
//       l = L.p;
//     try {
//       ((L.p = 32 > a ? 32 : a), (N.T = null), (a = ir), (ir = null));
//       var s = an,
//         u = Ma;
//       if (((Ft = 0), (El = an = null), (Ma = 0), (Ct & 6) !== 0))
//         throw Error(c(331));
//       var h = Ct;
//       if (
//         ((Ct |= 4),
//         em(s.current),
//         Pd(s, s.current, u, a),
//         (Ct = h),
//         Ni(0, !1),
//         ge && typeof ge.onPostCommitFiberRoot == "function")
//       )
//         try {
//           ge.onPostCommitFiberRoot(vn, s);
//         } catch {}
//       return !0;
//     } finally {
//       ((L.p = l), (N.T = n), xm(t, e));
//     }
//   }
//   function Sm(t, e, a) {
//     ((e = ke(a, e)),
//       (e = Lc(t.stateNode, e, 2)),
//       (t = Wa(t, e, 2)),
//       t !== null && (kt(t, 2), ca(t)));
//   }
//   function _t(t, e, a) {
//     if (t.tag === 3) Sm(t, t, a);
//     else
//       for (; e !== null; ) {
//         if (e.tag === 3) {
//           Sm(e, t, a);
//           break;
//         } else if (e.tag === 1) {
//           var n = e.stateNode;
//           if (
//             typeof e.type.getDerivedStateFromError == "function" ||
//             (typeof n.componentDidCatch == "function" &&
//               (en === null || !en.has(n)))
//           ) {
//             ((t = ke(a, t)),
//               (a = Ed(2)),
//               (n = Wa(e, a, 2)),
//               n !== null && (wd(a, n, e, t), kt(n, 2), ca(n)));
//             break;
//           }
//         }
//         e = e.return;
//       }
//   }
//   function rr(t, e, a) {
//     var n = t.pingCache;
//     if (n === null) {
//       n = t.pingCache = new w0();
//       var l = new Set();
//       n.set(e, l);
//     } else ((l = n.get(e)), l === void 0 && ((l = new Set()), n.set(e, l)));
//     l.has(a) ||
//       ((er = !0), l.add(a), (t = H0.bind(null, t, e, a)), e.then(t, t));
//   }
//   function H0(t, e, a) {
//     var n = t.pingCache;
//     (n !== null && n.delete(e),
//       (t.pingedLanes |= t.suspendedLanes & a),
//       (t.warmLanes &= ~a),
//       Bt === t &&
//         (Nt & a) === a &&
//         (Xt === 4 || (Xt === 3 && (Nt & 62914560) === Nt && 300 > he() - Ms)
//           ? (Ct & 2) === 0 && wl(t, 0)
//           : (ar |= a),
//         Sl === Nt && (Sl = 0)),
//       ca(t));
//   }
//   function Em(t, e) {
//     (e === 0 && (e = ue()), (t = An(t, e)), t !== null && (kt(t, e), ca(t)));
//   }
//   function O0(t) {
//     var e = t.memoizedState,
//       a = 0;
//     (e !== null && (a = e.retryLane), Em(t, a));
//   }
//   function j0(t, e) {
//     var a = 0;
//     switch (t.tag) {
//       case 31:
//       case 13:
//         var n = t.stateNode,
//           l = t.memoizedState;
//         l !== null && (a = l.retryLane);
//         break;
//       case 19:
//         n = t.stateNode;
//         break;
//       case 22:
//         n = t.stateNode._retryCache;
//         break;
//       default:
//         throw Error(c(314));
//     }
//     (n !== null && n.delete(e), Em(t, a));
//   }
//   function C0(t, e) {
//     return Gl(t, e);
//   }
//   var Ys = null,
//     Al = null,
//     ur = !1,
//     qs = !1,
//     fr = !1,
//     ln = 0;
//   function ca(t) {
//     (t !== Al &&
//       t.next === null &&
//       (Al === null ? (Ys = Al = t) : (Al = Al.next = t)),
//       (qs = !0),
//       ur || ((ur = !0), _0()));
//   }
//   function Ni(t, e) {
//     if (!fr && qs) {
//       fr = !0;
//       do
//         for (var a = !1, n = Ys; n !== null; ) {
//           if (t !== 0) {
//             var l = n.pendingLanes;
//             if (l === 0) var s = 0;
//             else {
//               var u = n.suspendedLanes,
//                 h = n.pingedLanes;
//               ((s = (1 << (31 - re(42 | t) + 1)) - 1),
//                 (s &= l & ~(u & ~h)),
//                 (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0));
//             }
//             s !== 0 && ((a = !0), Tm(n, s));
//           } else
//             ((s = Nt),
//               (s = ft(
//                 n,
//                 n === Bt ? s : 0,
//                 n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
//               )),
//               (s & 3) === 0 || qt(n, s) || ((a = !0), Tm(n, s)));
//           n = n.next;
//         }
//       while (a);
//       fr = !1;
//     }
//   }
//   function M0() {
//     wm();
//   }
//   function wm() {
//     qs = ur = !1;
//     var t = 0;
//     ln !== 0 && V0() && (t = ln);
//     for (var e = he(), a = null, n = Ys; n !== null; ) {
//       var l = n.next,
//         s = Nm(n, e);
//       (s === 0
//         ? ((n.next = null),
//           a === null ? (Ys = l) : (a.next = l),
//           l === null && (Al = a))
//         : ((a = n), (t !== 0 || (s & 3) !== 0) && (qs = !0)),
//         (n = l));
//     }
//     ((Ft !== 0 && Ft !== 5) || Ni(t), ln !== 0 && (ln = 0));
//   }
//   function Nm(t, e) {
//     for (
//       var a = t.suspendedLanes,
//         n = t.pingedLanes,
//         l = t.expirationTimes,
//         s = t.pendingLanes & -62914561;
//       0 < s;
//     ) {
//       var u = 31 - re(s),
//         h = 1 << u,
//         b = l[u];
//       (b === -1
//         ? ((h & a) === 0 || (h & n) !== 0) && (l[u] = It(h, e))
//         : b <= e && (t.expiredLanes |= h),
//         (s &= ~h));
//     }
//     if (
//       ((e = Bt),
//       (a = Nt),
//       (a = ft(
//         t,
//         t === e ? a : 0,
//         t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
//       )),
//       (n = t.callbackNode),
//       a === 0 ||
//         (t === e && (Mt === 2 || Mt === 9)) ||
//         t.cancelPendingCommit !== null)
//     )
//       return (
//         n !== null && n !== null && kl(n),
//         (t.callbackNode = null),
//         (t.callbackPriority = 0)
//       );
//     if ((a & 3) === 0 || qt(t, a)) {
//       if (((e = a & -a), e === t.callbackPriority)) return e;
//       switch ((n !== null && kl(n), Fe(a))) {
//         case 2:
//         case 8:
//           a = Vi;
//           break;
//         case 32:
//           a = yn;
//           break;
//         case 268435456:
//           a = ga;
//           break;
//         default:
//           a = yn;
//       }
//       return (
//         (n = Am.bind(null, t)),
//         (a = Gl(a, n)),
//         (t.callbackPriority = e),
//         (t.callbackNode = a),
//         e
//       );
//     }
//     return (
//       n !== null && n !== null && kl(n),
//       (t.callbackPriority = 2),
//       (t.callbackNode = null),
//       2
//     );
//   }
//   function Am(t, e) {
//     if (Ft !== 0 && Ft !== 5)
//       return ((t.callbackNode = null), (t.callbackPriority = 0), null);
//     var a = t.callbackNode;
//     if (Ls() && t.callbackNode !== a) return null;
//     var n = Nt;
//     return (
//       (n = ft(
//         t,
//         t === Bt ? n : 0,
//         t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
//       )),
//       n === 0
//         ? null
//         : (sm(t, n, e),
//           Nm(t, he()),
//           t.callbackNode != null && t.callbackNode === a
//             ? Am.bind(null, t)
//             : null)
//     );
//   }
//   function Tm(t, e) {
//     if (Ls()) return null;
//     sm(t, e, !0);
//   }
//   function _0() {
//     Q0(function () {
//       (Ct & 6) !== 0 ? Gl(pn, M0) : wm();
//     });
//   }
//   function dr() {
//     if (ln === 0) {
//       var t = ul;
//       (t === 0 && ((t = Vn), (Vn <<= 1), (Vn & 261888) === 0 && (Vn = 256)),
//         (ln = t));
//     }
//     return ln;
//   }
//   function zm(t) {
//     return t == null || typeof t == "symbol" || typeof t == "boolean"
//       ? null
//       : typeof t == "function"
//         ? t
//         : Ji("" + t);
//   }
//   function Hm(t, e) {
//     var a = e.ownerDocument.createElement("input");
//     return (
//       (a.name = e.name),
//       (a.value = e.value),
//       t.id && a.setAttribute("form", t.id),
//       e.parentNode.insertBefore(a, e),
//       (t = new FormData(t)),
//       a.parentNode.removeChild(a),
//       t
//     );
//   }
//   function R0(t, e, a, n, l) {
//     if (e === "submit" && a && a.stateNode === l) {
//       var s = zm((l[be] || null).action),
//         u = n.submitter;
//       u &&
//         ((e = (e = u[be] || null)
//           ? zm(e.formAction)
//           : u.getAttribute("formAction")),
//         e !== null && ((s = e), (u = null)));
//       var h = new Pi("action", "action", null, n, l);
//       t.push({
//         event: h,
//         listeners: [
//           {
//             instance: null,
//             listener: function () {
//               if (n.defaultPrevented) {
//                 if (ln !== 0) {
//                   var b = u ? Hm(l, u) : new FormData(l);
//                   Mc(
//                     a,
//                     {
//                       pending: !0,
//                       data: b,
//                       method: l.method,
//                       action: s,
//                     },
//                     null,
//                     b,
//                   );
//                 }
//               } else
//                 typeof s == "function" &&
//                   (h.preventDefault(),
//                   (b = u ? Hm(l, u) : new FormData(l)),
//                   Mc(
//                     a,
//                     {
//                       pending: !0,
//                       data: b,
//                       method: l.method,
//                       action: s,
//                     },
//                     s,
//                     b,
//                   ));
//             },
//             currentTarget: l,
//           },
//         ],
//       });
//     }
//   }
//   for (var mr = 0; mr < Wo.length; mr++) {
//     var hr = Wo[mr],
//       D0 = hr.toLowerCase(),
//       U0 = hr[0].toUpperCase() + hr.slice(1);
//     Pe(D0, "on" + U0);
//   }
//   (Pe(lf, "onAnimationEnd"),
//     Pe(sf, "onAnimationIteration"),
//     Pe(of, "onAnimationStart"),
//     Pe("dblclick", "onDoubleClick"),
//     Pe("focusin", "onFocus"),
//     Pe("focusout", "onBlur"),
//     Pe(Pp, "onTransitionRun"),
//     Pe(Ip, "onTransitionStart"),
//     Pe(t0, "onTransitionCancel"),
//     Pe(cf, "onTransitionEnd"),
//     $n("onMouseEnter", ["mouseout", "mouseover"]),
//     $n("onMouseLeave", ["mouseout", "mouseover"]),
//     $n("onPointerEnter", ["pointerout", "pointerover"]),
//     $n("onPointerLeave", ["pointerout", "pointerover"]),
//     Sn(
//       "onChange",
//       "change click focusin focusout input keydown keyup selectionchange".split(
//         " ",
//       ),
//     ),
//     Sn(
//       "onSelect",
//       "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
//         " ",
//       ),
//     ),
//     Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
//     Sn(
//       "onCompositionEnd",
//       "compositionend focusout keydown keypress keyup mousedown".split(" "),
//     ),
//     Sn(
//       "onCompositionStart",
//       "compositionstart focusout keydown keypress keyup mousedown".split(" "),
//     ),
//     Sn(
//       "onCompositionUpdate",
//       "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
//     ));
//   var Ai =
//       "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
//         " ",
//       ),
//     B0 = new Set(
//       "beforetoggle cancel close invalid load scroll scrollend toggle"
//         .split(" ")
//         .concat(Ai),
//     );
//   function Om(t, e) {
//     e = (e & 4) !== 0;
//     for (var a = 0; a < t.length; a++) {
//       var n = t[a],
//         l = n.event;
//       n = n.listeners;
//       t: {
//         var s = void 0;
//         if (e)
//           for (var u = n.length - 1; 0 <= u; u--) {
//             var h = n[u],
//               b = h.instance,
//               H = h.currentTarget;
//             if (((h = h.listener), b !== s && l.isPropagationStopped()))
//               break t;
//             ((s = h), (l.currentTarget = H));
//             try {
//               s(l);
//             } catch (D) {
//               es(D);
//             }
//             ((l.currentTarget = null), (s = b));
//           }
//         else
//           for (u = 0; u < n.length; u++) {
//             if (
//               ((h = n[u]),
//               (b = h.instance),
//               (H = h.currentTarget),
//               (h = h.listener),
//               b !== s && l.isPropagationStopped())
//             )
//               break t;
//             ((s = h), (l.currentTarget = H));
//             try {
//               s(l);
//             } catch (D) {
//               es(D);
//             }
//             ((l.currentTarget = null), (s = b));
//           }
//       }
//     }
//   }
//   function wt(t, e) {
//     var a = e[zo];
//     a === void 0 && (a = e[zo] = new Set());
//     var n = t + "__bubble";
//     a.has(n) || (jm(e, t, 2, !1), a.add(n));
//   }
//   function gr(t, e, a) {
//     var n = 0;
//     (e && (n |= 4), jm(a, t, n, e));
//   }
//   var Gs = "_reactListening" + Math.random().toString(36).slice(2);
//   function pr(t) {
//     if (!t[Gs]) {
//       ((t[Gs] = !0),
//         Eu.forEach(function (a) {
//           a !== "selectionchange" && (B0.has(a) || gr(a, !1, t), gr(a, !0, t));
//         }));
//       var e = t.nodeType === 9 ? t : t.ownerDocument;
//       e === null || e[Gs] || ((e[Gs] = !0), gr("selectionchange", !1, e));
//     }
//   }
//   function jm(t, e, a, n) {
//     switch (ih(e)) {
//       case 2:
//         var l = fy;
//         break;
//       case 8:
//         l = dy;
//         break;
//       default:
//         l = Cr;
//     }
//     ((a = l.bind(null, e, a, t)),
//       (l = void 0),
//       !Uo ||
//         (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
//         (l = !0),
//       n
//         ? l !== void 0
//           ? t.addEventListener(e, a, {
//               capture: !0,
//               passive: l,
//             })
//           : t.addEventListener(e, a, !0)
//         : l !== void 0
//           ? t.addEventListener(e, a, {
//               passive: l,
//             })
//           : t.addEventListener(e, a, !1));
//   }
//   function yr(t, e, a, n, l) {
//     var s = n;
//     if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
//       t: for (;;) {
//         if (n === null) return;
//         var u = n.tag;
//         if (u === 3 || u === 4) {
//           var h = n.stateNode.containerInfo;
//           if (h === l) break;
//           if (u === 4)
//             for (u = n.return; u !== null; ) {
//               var b = u.tag;
//               if ((b === 3 || b === 4) && u.stateNode.containerInfo === l)
//                 return;
//               u = u.return;
//             }
//           for (; h !== null; ) {
//             if (((u = Kn(h)), u === null)) return;
//             if (((b = u.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
//               n = s = u;
//               continue t;
//             }
//             h = h.parentNode;
//           }
//         }
//         n = n.return;
//       }
//     Ru(function () {
//       var H = s,
//         D = Ro(a),
//         G = [];
//       t: {
//         var j = rf.get(t);
//         if (j !== void 0) {
//           var R = Pi,
//             F = t;
//           switch (t) {
//             case "keypress":
//               if ($i(a) === 0) break t;
//             case "keydown":
//             case "keyup":
//               R = jp;
//               break;
//             case "focusin":
//               ((F = "focus"), (R = qo));
//               break;
//             case "focusout":
//               ((F = "blur"), (R = qo));
//               break;
//             case "beforeblur":
//             case "afterblur":
//               R = qo;
//               break;
//             case "click":
//               if (a.button === 2) break t;
//             case "auxclick":
//             case "dblclick":
//             case "mousedown":
//             case "mousemove":
//             case "mouseup":
//             case "mouseout":
//             case "mouseover":
//             case "contextmenu":
//               R = Bu;
//               break;
//             case "drag":
//             case "dragend":
//             case "dragenter":
//             case "dragexit":
//             case "dragleave":
//             case "dragover":
//             case "dragstart":
//             case "drop":
//               R = vp;
//               break;
//             case "touchcancel":
//             case "touchend":
//             case "touchmove":
//             case "touchstart":
//               R = _p;
//               break;
//             case lf:
//             case sf:
//             case of:
//               R = Sp;
//               break;
//             case cf:
//               R = Dp;
//               break;
//             case "scroll":
//             case "scrollend":
//               R = pp;
//               break;
//             case "wheel":
//               R = Bp;
//               break;
//             case "copy":
//             case "cut":
//             case "paste":
//               R = wp;
//               break;
//             case "gotpointercapture":
//             case "lostpointercapture":
//             case "pointercancel":
//             case "pointerdown":
//             case "pointermove":
//             case "pointerout":
//             case "pointerover":
//             case "pointerup":
//               R = Yu;
//               break;
//             case "toggle":
//             case "beforetoggle":
//               R = Yp;
//           }
//           var rt = (e & 4) !== 0,
//             Ut = !rt && (t === "scroll" || t === "scrollend"),
//             A = rt ? (j !== null ? j + "Capture" : null) : j;
//           rt = [];
//           for (var w = H, z; w !== null; ) {
//             var Y = w;
//             if (
//               ((z = Y.stateNode),
//               (Y = Y.tag),
//               (Y !== 5 && Y !== 26 && Y !== 27) ||
//                 z === null ||
//                 A === null ||
//                 ((Y = Kl(w, A)), Y != null && rt.push(Ti(w, Y, z))),
//               Ut)
//             )
//               break;
//             w = w.return;
//           }
//           0 < rt.length &&
//             ((j = new R(j, F, null, a, D)),
//             G.push({
//               event: j,
//               listeners: rt,
//             }));
//         }
//       }
//       if ((e & 7) === 0) {
//         t: {
//           if (
//             ((j = t === "mouseover" || t === "pointerover"),
//             (R = t === "mouseout" || t === "pointerout"),
//             j &&
//               a !== _o &&
//               (F = a.relatedTarget || a.fromElement) &&
//               (Kn(F) || F[Zn]))
//           )
//             break t;
//           if (
//             (R || j) &&
//             ((j =
//               D.window === D
//                 ? D
//                 : (j = D.ownerDocument)
//                   ? j.defaultView || j.parentWindow
//                   : window),
//             R
//               ? ((F = a.relatedTarget || a.toElement),
//                 (R = H),
//                 (F = F ? Kn(F) : null),
//                 F !== null &&
//                   ((Ut = d(F)),
//                   (rt = F.tag),
//                   F !== Ut || (rt !== 5 && rt !== 27 && rt !== 6)) &&
//                   (F = null))
//               : ((R = null), (F = H)),
//             R !== F)
//           ) {
//             if (
//               ((rt = Bu),
//               (Y = "onMouseLeave"),
//               (A = "onMouseEnter"),
//               (w = "mouse"),
//               (t === "pointerout" || t === "pointerover") &&
//                 ((rt = Yu),
//                 (Y = "onPointerLeave"),
//                 (A = "onPointerEnter"),
//                 (w = "pointer")),
//               (Ut = R == null ? j : Zl(R)),
//               (z = F == null ? j : Zl(F)),
//               (j = new rt(Y, w + "leave", R, a, D)),
//               (j.target = Ut),
//               (j.relatedTarget = z),
//               (Y = null),
//               Kn(D) === H &&
//                 ((rt = new rt(A, w + "enter", F, a, D)),
//                 (rt.target = z),
//                 (rt.relatedTarget = Ut),
//                 (Y = rt)),
//               (Ut = Y),
//               R && F)
//             )
//               e: {
//                 for (rt = L0, A = R, w = F, z = 0, Y = A; Y; Y = rt(Y)) z++;
//                 Y = 0;
//                 for (var ot = w; ot; ot = rt(ot)) Y++;
//                 for (; 0 < z - Y; ) ((A = rt(A)), z--);
//                 for (; 0 < Y - z; ) ((w = rt(w)), Y--);
//                 for (; z--; ) {
//                   if (A === w || (w !== null && A === w.alternate)) {
//                     rt = A;
//                     break e;
//                   }
//                   ((A = rt(A)), (w = rt(w)));
//                 }
//                 rt = null;
//               }
//             else rt = null;
//             (R !== null && Cm(G, j, R, rt, !1),
//               F !== null && Ut !== null && Cm(G, Ut, F, rt, !0));
//           }
//         }
//         t: {
//           if (
//             ((j = H ? Zl(H) : window),
//             (R = j.nodeName && j.nodeName.toLowerCase()),
//             R === "select" || (R === "input" && j.type === "file"))
//           )
//             var Ot = Ku;
//           else if (Qu(j))
//             if (Ju) Ot = Wp;
//             else {
//               Ot = Kp;
//               var nt = Zp;
//             }
//           else
//             ((R = j.nodeName),
//               !R ||
//               R.toLowerCase() !== "input" ||
//               (j.type !== "checkbox" && j.type !== "radio")
//                 ? H && Mo(H.elementType) && (Ot = Ku)
//                 : (Ot = Jp));
//           if (Ot && (Ot = Ot(t, H))) {
//             Zu(G, Ot, a, D);
//             break t;
//           }
//           (nt && nt(t, j, H),
//             t === "focusout" &&
//               H &&
//               j.type === "number" &&
//               H.memoizedProps.value != null &&
//               Co(j, "number", j.value));
//         }
//         switch (((nt = H ? Zl(H) : window), t)) {
//           case "focusin":
//             (Qu(nt) || nt.contentEditable === "true") &&
//               ((al = nt), (Zo = H), (ei = null));
//             break;
//           case "focusout":
//             ei = Zo = al = null;
//             break;
//           case "mousedown":
//             Ko = !0;
//             break;
//           case "contextmenu":
//           case "mouseup":
//           case "dragend":
//             ((Ko = !1), af(G, a, D));
//             break;
//           case "selectionchange":
//             if (Fp) break;
//           case "keydown":
//           case "keyup":
//             af(G, a, D);
//         }
//         var yt;
//         if (ko)
//           t: {
//             switch (t) {
//               case "compositionstart":
//                 var At = "onCompositionStart";
//                 break t;
//               case "compositionend":
//                 At = "onCompositionEnd";
//                 break t;
//               case "compositionupdate":
//                 At = "onCompositionUpdate";
//                 break t;
//             }
//             At = void 0;
//           }
//         else
//           el
//             ? Vu(t, a) && (At = "onCompositionEnd")
//             : t === "keydown" &&
//               a.keyCode === 229 &&
//               (At = "onCompositionStart");
//         (At &&
//           (qu &&
//             a.locale !== "ko" &&
//             (el || At !== "onCompositionStart"
//               ? At === "onCompositionEnd" && el && (yt = Du())
//               : ((ka = D),
//                 (Bo = "value" in ka ? ka.value : ka.textContent),
//                 (el = !0))),
//           (nt = ks(H, At)),
//           0 < nt.length &&
//             ((At = new Lu(At, t, null, a, D)),
//             G.push({
//               event: At,
//               listeners: nt,
//             }),
//             yt
//               ? (At.data = yt)
//               : ((yt = Xu(a)), yt !== null && (At.data = yt)))),
//           (yt = Gp ? kp(t, a) : Vp(t, a)) &&
//             ((At = ks(H, "onBeforeInput")),
//             0 < At.length &&
//               ((nt = new Lu("onBeforeInput", "beforeinput", null, a, D)),
//               G.push({
//                 event: nt,
//                 listeners: At,
//               }),
//               (nt.data = yt))),
//           R0(G, t, H, a, D));
//       }
//       Om(G, e);
//     });
//   }
//   function Ti(t, e, a) {
//     return {
//       instance: t,
//       listener: e,
//       currentTarget: a,
//     };
//   }
//   function ks(t, e) {
//     for (var a = e + "Capture", n = []; t !== null; ) {
//       var l = t,
//         s = l.stateNode;
//       if (
//         ((l = l.tag),
//         (l !== 5 && l !== 26 && l !== 27) ||
//           s === null ||
//           ((l = Kl(t, a)),
//           l != null && n.unshift(Ti(t, l, s)),
//           (l = Kl(t, e)),
//           l != null && n.push(Ti(t, l, s))),
//         t.tag === 3)
//       )
//         return n;
//       t = t.return;
//     }
//     return [];
//   }
//   function L0(t) {
//     if (t === null) return null;
//     do t = t.return;
//     while (t && t.tag !== 5 && t.tag !== 27);
//     return t || null;
//   }
//   function Cm(t, e, a, n, l) {
//     for (var s = e._reactName, u = []; a !== null && a !== n; ) {
//       var h = a,
//         b = h.alternate,
//         H = h.stateNode;
//       if (((h = h.tag), b !== null && b === n)) break;
//       ((h !== 5 && h !== 26 && h !== 27) ||
//         H === null ||
//         ((b = H),
//         l
//           ? ((H = Kl(a, s)), H != null && u.unshift(Ti(a, H, b)))
//           : l || ((H = Kl(a, s)), H != null && u.push(Ti(a, H, b)))),
//         (a = a.return));
//     }
//     u.length !== 0 &&
//       t.push({
//         event: e,
//         listeners: u,
//       });
//   }
//   var Y0 = /\r\n?/g,
//     q0 = /\u0000|\uFFFD/g;
//   function Mm(t) {
//     return (typeof t == "string" ? t : "" + t)
//       .replace(
//         Y0,
//         `
// `,
//       )
//       .replace(q0, "");
//   }
//   function _m(t, e) {
//     return ((e = Mm(e)), Mm(t) === e);
//   }
//   function Dt(t, e, a, n, l, s) {
//     switch (a) {
//       case "children":
//         typeof n == "string"
//           ? e === "body" || (e === "textarea" && n === "") || Pn(t, n)
//           : (typeof n == "number" || typeof n == "bigint") &&
//             e !== "body" &&
//             Pn(t, "" + n);
//         break;
//       case "className":
//         Zi(t, "class", n);
//         break;
//       case "tabIndex":
//         Zi(t, "tabindex", n);
//         break;
//       case "dir":
//       case "role":
//       case "viewBox":
//       case "width":
//       case "height":
//         Zi(t, a, n);
//         break;
//       case "style":
//         Mu(t, n, s);
//         break;
//       case "data":
//         if (e !== "object") {
//           Zi(t, "data", n);
//           break;
//         }
//       case "src":
//       case "href":
//         if (n === "" && (e !== "a" || a !== "href")) {
//           t.removeAttribute(a);
//           break;
//         }
//         if (
//           n == null ||
//           typeof n == "function" ||
//           typeof n == "symbol" ||
//           typeof n == "boolean"
//         ) {
//           t.removeAttribute(a);
//           break;
//         }
//         ((n = Ji("" + n)), t.setAttribute(a, n));
//         break;
//       case "action":
//       case "formAction":
//         if (typeof n == "function") {
//           t.setAttribute(
//             a,
//             "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
//           );
//           break;
//         } else
//           typeof s == "function" &&
//             (a === "formAction"
//               ? (e !== "input" && Dt(t, e, "name", l.name, l, null),
//                 Dt(t, e, "formEncType", l.formEncType, l, null),
//                 Dt(t, e, "formMethod", l.formMethod, l, null),
//                 Dt(t, e, "formTarget", l.formTarget, l, null))
//               : (Dt(t, e, "encType", l.encType, l, null),
//                 Dt(t, e, "method", l.method, l, null),
//                 Dt(t, e, "target", l.target, l, null)));
//         if (n == null || typeof n == "symbol" || typeof n == "boolean") {
//           t.removeAttribute(a);
//           break;
//         }
//         ((n = Ji("" + n)), t.setAttribute(a, n));
//         break;
//       case "onClick":
//         n != null && (t.onclick = ya);
//         break;
//       case "onScroll":
//         n != null && wt("scroll", t);
//         break;
//       case "onScrollEnd":
//         n != null && wt("scrollend", t);
//         break;
//       case "dangerouslySetInnerHTML":
//         if (n != null) {
//           if (typeof n != "object" || !("__html" in n)) throw Error(c(61));
//           if (((a = n.__html), a != null)) {
//             if (l.children != null) throw Error(c(60));
//             t.innerHTML = a;
//           }
//         }
//         break;
//       case "multiple":
//         t.multiple = n && typeof n != "function" && typeof n != "symbol";
//         break;
//       case "muted":
//         t.muted = n && typeof n != "function" && typeof n != "symbol";
//         break;
//       case "suppressContentEditableWarning":
//       case "suppressHydrationWarning":
//       case "defaultValue":
//       case "defaultChecked":
//       case "innerHTML":
//       case "ref":
//         break;
//       case "autoFocus":
//         break;
//       case "xlinkHref":
//         if (
//           n == null ||
//           typeof n == "function" ||
//           typeof n == "boolean" ||
//           typeof n == "symbol"
//         ) {
//           t.removeAttribute("xlink:href");
//           break;
//         }
//         ((a = Ji("" + n)),
//           t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
//         break;
//       case "contentEditable":
//       case "spellCheck":
//       case "draggable":
//       case "value":
//       case "autoReverse":
//       case "externalResourcesRequired":
//       case "focusable":
//       case "preserveAlpha":
//         n != null && typeof n != "function" && typeof n != "symbol"
//           ? t.setAttribute(a, "" + n)
//           : t.removeAttribute(a);
//         break;
//       case "inert":
//       case "allowFullScreen":
//       case "async":
//       case "autoPlay":
//       case "controls":
//       case "default":
//       case "defer":
//       case "disabled":
//       case "disablePictureInPicture":
//       case "disableRemotePlayback":
//       case "formNoValidate":
//       case "hidden":
//       case "loop":
//       case "noModule":
//       case "noValidate":
//       case "open":
//       case "playsInline":
//       case "readOnly":
//       case "required":
//       case "reversed":
//       case "scoped":
//       case "seamless":
//       case "itemScope":
//         n && typeof n != "function" && typeof n != "symbol"
//           ? t.setAttribute(a, "")
//           : t.removeAttribute(a);
//         break;
//       case "capture":
//       case "download":
//         n === !0
//           ? t.setAttribute(a, "")
//           : n !== !1 &&
//               n != null &&
//               typeof n != "function" &&
//               typeof n != "symbol"
//             ? t.setAttribute(a, n)
//             : t.removeAttribute(a);
//         break;
//       case "cols":
//       case "rows":
//       case "size":
//       case "span":
//         n != null &&
//         typeof n != "function" &&
//         typeof n != "symbol" &&
//         !isNaN(n) &&
//         1 <= n
//           ? t.setAttribute(a, n)
//           : t.removeAttribute(a);
//         break;
//       case "rowSpan":
//       case "start":
//         n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
//           ? t.removeAttribute(a)
//           : t.setAttribute(a, n);
//         break;
//       case "popover":
//         (wt("beforetoggle", t), wt("toggle", t), Qi(t, "popover", n));
//         break;
//       case "xlinkActuate":
//         pa(t, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
//         break;
//       case "xlinkArcrole":
//         pa(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
//         break;
//       case "xlinkRole":
//         pa(t, "http://www.w3.org/1999/xlink", "xlink:role", n);
//         break;
//       case "xlinkShow":
//         pa(t, "http://www.w3.org/1999/xlink", "xlink:show", n);
//         break;
//       case "xlinkTitle":
//         pa(t, "http://www.w3.org/1999/xlink", "xlink:title", n);
//         break;
//       case "xlinkType":
//         pa(t, "http://www.w3.org/1999/xlink", "xlink:type", n);
//         break;
//       case "xmlBase":
//         pa(t, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
//         break;
//       case "xmlLang":
//         pa(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
//         break;
//       case "xmlSpace":
//         pa(t, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
//         break;
//       case "is":
//         Qi(t, "is", n);
//         break;
//       case "innerText":
//       case "textContent":
//         break;
//       default:
//         (!(2 < a.length) ||
//           (a[0] !== "o" && a[0] !== "O") ||
//           (a[1] !== "n" && a[1] !== "N")) &&
//           ((a = hp.get(a) || a), Qi(t, a, n));
//     }
//   }
//   function vr(t, e, a, n, l, s) {
//     switch (a) {
//       case "style":
//         Mu(t, n, s);
//         break;
//       case "dangerouslySetInnerHTML":
//         if (n != null) {
//           if (typeof n != "object" || !("__html" in n)) throw Error(c(61));
//           if (((a = n.__html), a != null)) {
//             if (l.children != null) throw Error(c(60));
//             t.innerHTML = a;
//           }
//         }
//         break;
//       case "children":
//         typeof n == "string"
//           ? Pn(t, n)
//           : (typeof n == "number" || typeof n == "bigint") && Pn(t, "" + n);
//         break;
//       case "onScroll":
//         n != null && wt("scroll", t);
//         break;
//       case "onScrollEnd":
//         n != null && wt("scrollend", t);
//         break;
//       case "onClick":
//         n != null && (t.onclick = ya);
//         break;
//       case "suppressContentEditableWarning":
//       case "suppressHydrationWarning":
//       case "innerHTML":
//       case "ref":
//         break;
//       case "innerText":
//       case "textContent":
//         break;
//       default:
//         if (!wu.hasOwnProperty(a))
//           t: {
//             if (
//               a[0] === "o" &&
//               a[1] === "n" &&
//               ((l = a.endsWith("Capture")),
//               (e = a.slice(2, l ? a.length - 7 : void 0)),
//               (s = t[be] || null),
//               (s = s != null ? s[a] : null),
//               typeof s == "function" && t.removeEventListener(e, s, l),
//               typeof n == "function")
//             ) {
//               (typeof s != "function" &&
//                 s !== null &&
//                 (a in t
//                   ? (t[a] = null)
//                   : t.hasAttribute(a) && t.removeAttribute(a)),
//                 t.addEventListener(e, n, l));
//               break t;
//             }
//             a in t
//               ? (t[a] = n)
//               : n === !0
//                 ? t.setAttribute(a, "")
//                 : Qi(t, a, n);
//           }
//     }
//   }
//   function ce(t, e, a) {
//     switch (e) {
//       case "div":
//       case "span":
//       case "svg":
//       case "path":
//       case "a":
//       case "g":
//       case "p":
//       case "li":
//         break;
//       case "img":
//         (wt("error", t), wt("load", t));
//         var n = !1,
//           l = !1,
//           s;
//         for (s in a)
//           if (a.hasOwnProperty(s)) {
//             var u = a[s];
//             if (u != null)
//               switch (s) {
//                 case "src":
//                   n = !0;
//                   break;
//                 case "srcSet":
//                   l = !0;
//                   break;
//                 case "children":
//                 case "dangerouslySetInnerHTML":
//                   throw Error(c(137, e));
//                 default:
//                   Dt(t, e, s, u, a, null);
//               }
//           }
//         (l && Dt(t, e, "srcSet", a.srcSet, a, null),
//           n && Dt(t, e, "src", a.src, a, null));
//         return;
//       case "input":
//         wt("invalid", t);
//         var h = (s = u = l = null),
//           b = null,
//           H = null;
//         for (n in a)
//           if (a.hasOwnProperty(n)) {
//             var D = a[n];
//             if (D != null)
//               switch (n) {
//                 case "name":
//                   l = D;
//                   break;
//                 case "type":
//                   u = D;
//                   break;
//                 case "checked":
//                   b = D;
//                   break;
//                 case "defaultChecked":
//                   H = D;
//                   break;
//                 case "value":
//                   s = D;
//                   break;
//                 case "defaultValue":
//                   h = D;
//                   break;
//                 case "children":
//                 case "dangerouslySetInnerHTML":
//                   if (D != null) throw Error(c(137, e));
//                   break;
//                 default:
//                   Dt(t, e, n, D, a, null);
//               }
//           }
//         Hu(t, s, h, b, H, u, l, !1);
//         return;
//       case "select":
//         (wt("invalid", t), (n = u = s = null));
//         for (l in a)
//           if (a.hasOwnProperty(l) && ((h = a[l]), h != null))
//             switch (l) {
//               case "value":
//                 s = h;
//                 break;
//               case "defaultValue":
//                 u = h;
//                 break;
//               case "multiple":
//                 n = h;
//               default:
//                 Dt(t, e, l, h, a, null);
//             }
//         ((e = s),
//           (a = u),
//           (t.multiple = !!n),
//           e != null ? Fn(t, !!n, e, !1) : a != null && Fn(t, !!n, a, !0));
//         return;
//       case "textarea":
//         (wt("invalid", t), (s = l = n = null));
//         for (u in a)
//           if (a.hasOwnProperty(u) && ((h = a[u]), h != null))
//             switch (u) {
//               case "value":
//                 n = h;
//                 break;
//               case "defaultValue":
//                 l = h;
//                 break;
//               case "children":
//                 s = h;
//                 break;
//               case "dangerouslySetInnerHTML":
//                 if (h != null) throw Error(c(91));
//                 break;
//               default:
//                 Dt(t, e, u, h, a, null);
//             }
//         ju(t, n, l, s);
//         return;
//       case "option":
//         for (b in a)
//           if (a.hasOwnProperty(b) && ((n = a[b]), n != null))
//             switch (b) {
//               case "selected":
//                 t.selected =
//                   n && typeof n != "function" && typeof n != "symbol";
//                 break;
//               default:
//                 Dt(t, e, b, n, a, null);
//             }
//         return;
//       case "dialog":
//         (wt("beforetoggle", t),
//           wt("toggle", t),
//           wt("cancel", t),
//           wt("close", t));
//         break;
//       case "iframe":
//       case "object":
//         wt("load", t);
//         break;
//       case "video":
//       case "audio":
//         for (n = 0; n < Ai.length; n++) wt(Ai[n], t);
//         break;
//       case "image":
//         (wt("error", t), wt("load", t));
//         break;
//       case "details":
//         wt("toggle", t);
//         break;
//       case "embed":
//       case "source":
//       case "link":
//         (wt("error", t), wt("load", t));
//       case "area":
//       case "base":
//       case "br":
//       case "col":
//       case "hr":
//       case "keygen":
//       case "meta":
//       case "param":
//       case "track":
//       case "wbr":
//       case "menuitem":
//         for (H in a)
//           if (a.hasOwnProperty(H) && ((n = a[H]), n != null))
//             switch (H) {
//               case "children":
//               case "dangerouslySetInnerHTML":
//                 throw Error(c(137, e));
//               default:
//                 Dt(t, e, H, n, a, null);
//             }
//         return;
//       default:
//         if (Mo(e)) {
//           for (D in a)
//             a.hasOwnProperty(D) &&
//               ((n = a[D]), n !== void 0 && vr(t, e, D, n, a, void 0));
//           return;
//         }
//     }
//     for (h in a)
//       a.hasOwnProperty(h) && ((n = a[h]), n != null && Dt(t, e, h, n, a, null));
//   }
//   function G0(t, e, a, n) {
//     switch (e) {
//       case "div":
//       case "span":
//       case "svg":
//       case "path":
//       case "a":
//       case "g":
//       case "p":
//       case "li":
//         break;
//       case "input":
//         var l = null,
//           s = null,
//           u = null,
//           h = null,
//           b = null,
//           H = null,
//           D = null;
//         for (R in a) {
//           var G = a[R];
//           if (a.hasOwnProperty(R) && G != null)
//             switch (R) {
//               case "checked":
//                 break;
//               case "value":
//                 break;
//               case "defaultValue":
//                 b = G;
//               default:
//                 n.hasOwnProperty(R) || Dt(t, e, R, null, n, G);
//             }
//         }
//         for (var j in n) {
//           var R = n[j];
//           if (((G = a[j]), n.hasOwnProperty(j) && (R != null || G != null)))
//             switch (j) {
//               case "type":
//                 s = R;
//                 break;
//               case "name":
//                 l = R;
//                 break;
//               case "checked":
//                 H = R;
//                 break;
//               case "defaultChecked":
//                 D = R;
//                 break;
//               case "value":
//                 u = R;
//                 break;
//               case "defaultValue":
//                 h = R;
//                 break;
//               case "children":
//               case "dangerouslySetInnerHTML":
//                 if (R != null) throw Error(c(137, e));
//                 break;
//               default:
//                 R !== G && Dt(t, e, j, R, n, G);
//             }
//         }
//         jo(t, u, h, b, H, D, s, l);
//         return;
//       case "select":
//         R = u = h = j = null;
//         for (s in a)
//           if (((b = a[s]), a.hasOwnProperty(s) && b != null))
//             switch (s) {
//               case "value":
//                 break;
//               case "multiple":
//                 R = b;
//               default:
//                 n.hasOwnProperty(s) || Dt(t, e, s, null, n, b);
//             }
//         for (l in n)
//           if (
//             ((s = n[l]),
//             (b = a[l]),
//             n.hasOwnProperty(l) && (s != null || b != null))
//           )
//             switch (l) {
//               case "value":
//                 j = s;
//                 break;
//               case "defaultValue":
//                 h = s;
//                 break;
//               case "multiple":
//                 u = s;
//               default:
//                 s !== b && Dt(t, e, l, s, n, b);
//             }
//         ((e = h),
//           (a = u),
//           (n = R),
//           j != null
//             ? Fn(t, !!a, j, !1)
//             : !!n != !!a &&
//               (e != null ? Fn(t, !!a, e, !0) : Fn(t, !!a, a ? [] : "", !1)));
//         return;
//       case "textarea":
//         R = j = null;
//         for (h in a)
//           if (
//             ((l = a[h]),
//             a.hasOwnProperty(h) && l != null && !n.hasOwnProperty(h))
//           )
//             switch (h) {
//               case "value":
//                 break;
//               case "children":
//                 break;
//               default:
//                 Dt(t, e, h, null, n, l);
//             }
//         for (u in n)
//           if (
//             ((l = n[u]),
//             (s = a[u]),
//             n.hasOwnProperty(u) && (l != null || s != null))
//           )
//             switch (u) {
//               case "value":
//                 j = l;
//                 break;
//               case "defaultValue":
//                 R = l;
//                 break;
//               case "children":
//                 break;
//               case "dangerouslySetInnerHTML":
//                 if (l != null) throw Error(c(91));
//                 break;
//               default:
//                 l !== s && Dt(t, e, u, l, n, s);
//             }
//         Ou(t, j, R);
//         return;
//       case "option":
//         for (var F in a)
//           if (
//             ((j = a[F]),
//             a.hasOwnProperty(F) && j != null && !n.hasOwnProperty(F))
//           )
//             switch (F) {
//               case "selected":
//                 t.selected = !1;
//                 break;
//               default:
//                 Dt(t, e, F, null, n, j);
//             }
//         for (b in n)
//           if (
//             ((j = n[b]),
//             (R = a[b]),
//             n.hasOwnProperty(b) && j !== R && (j != null || R != null))
//           )
//             switch (b) {
//               case "selected":
//                 t.selected =
//                   j && typeof j != "function" && typeof j != "symbol";
//                 break;
//               default:
//                 Dt(t, e, b, j, n, R);
//             }
//         return;
//       case "img":
//       case "link":
//       case "area":
//       case "base":
//       case "br":
//       case "col":
//       case "embed":
//       case "hr":
//       case "keygen":
//       case "meta":
//       case "param":
//       case "source":
//       case "track":
//       case "wbr":
//       case "menuitem":
//         for (var rt in a)
//           ((j = a[rt]),
//             a.hasOwnProperty(rt) &&
//               j != null &&
//               !n.hasOwnProperty(rt) &&
//               Dt(t, e, rt, null, n, j));
//         for (H in n)
//           if (
//             ((j = n[H]),
//             (R = a[H]),
//             n.hasOwnProperty(H) && j !== R && (j != null || R != null))
//           )
//             switch (H) {
//               case "children":
//               case "dangerouslySetInnerHTML":
//                 if (j != null) throw Error(c(137, e));
//                 break;
//               default:
//                 Dt(t, e, H, j, n, R);
//             }
//         return;
//       default:
//         if (Mo(e)) {
//           for (var Ut in a)
//             ((j = a[Ut]),
//               a.hasOwnProperty(Ut) &&
//                 j !== void 0 &&
//                 !n.hasOwnProperty(Ut) &&
//                 vr(t, e, Ut, void 0, n, j));
//           for (D in n)
//             ((j = n[D]),
//               (R = a[D]),
//               !n.hasOwnProperty(D) ||
//                 j === R ||
//                 (j === void 0 && R === void 0) ||
//                 vr(t, e, D, j, n, R));
//           return;
//         }
//     }
//     for (var A in a)
//       ((j = a[A]),
//         a.hasOwnProperty(A) &&
//           j != null &&
//           !n.hasOwnProperty(A) &&
//           Dt(t, e, A, null, n, j));
//     for (G in n)
//       ((j = n[G]),
//         (R = a[G]),
//         !n.hasOwnProperty(G) ||
//           j === R ||
//           (j == null && R == null) ||
//           Dt(t, e, G, j, n, R));
//   }
//   function Rm(t) {
//     switch (t) {
//       case "css":
//       case "script":
//       case "font":
//       case "img":
//       case "image":
//       case "input":
//       case "link":
//         return !0;
//       default:
//         return !1;
//     }
//   }
//   function k0() {
//     if (typeof performance.getEntriesByType == "function") {
//       for (
//         var t = 0, e = 0, a = performance.getEntriesByType("resource"), n = 0;
//         n < a.length;
//         n++
//       ) {
//         var l = a[n],
//           s = l.transferSize,
//           u = l.initiatorType,
//           h = l.duration;
//         if (s && h && Rm(u)) {
//           for (u = 0, h = l.responseEnd, n += 1; n < a.length; n++) {
//             var b = a[n],
//               H = b.startTime;
//             if (H > h) break;
//             var D = b.transferSize,
//               G = b.initiatorType;
//             D &&
//               Rm(G) &&
//               ((b = b.responseEnd), (u += D * (b < h ? 1 : (h - H) / (b - H))));
//           }
//           if ((--n, (e += (8 * (s + u)) / (l.duration / 1e3)), t++, 10 < t))
//             break;
//         }
//       }
//       if (0 < t) return e / t / 1e6;
//     }
//     return navigator.connection &&
//       ((t = navigator.connection.downlink), typeof t == "number")
//       ? t
//       : 5;
//   }
//   var xr = null,
//     br = null;
//   function Vs(t) {
//     return t.nodeType === 9 ? t : t.ownerDocument;
//   }
//   function Dm(t) {
//     switch (t) {
//       case "http://www.w3.org/2000/svg":
//         return 1;
//       case "http://www.w3.org/1998/Math/MathML":
//         return 2;
//       default:
//         return 0;
//     }
//   }
//   function Um(t, e) {
//     if (t === 0)
//       switch (e) {
//         case "svg":
//           return 1;
//         case "math":
//           return 2;
//         default:
//           return 0;
//       }
//     return t === 1 && e === "foreignObject" ? 0 : t;
//   }
//   function Sr(t, e) {
//     return (
//       t === "textarea" ||
//       t === "noscript" ||
//       typeof e.children == "string" ||
//       typeof e.children == "number" ||
//       typeof e.children == "bigint" ||
//       (typeof e.dangerouslySetInnerHTML == "object" &&
//         e.dangerouslySetInnerHTML !== null &&
//         e.dangerouslySetInnerHTML.__html != null)
//     );
//   }
//   var Er = null;
//   function V0() {
//     var t = window.event;
//     return t && t.type === "popstate"
//       ? t === Er
//         ? !1
//         : ((Er = t), !0)
//       : ((Er = null), !1);
//   }
//   var Bm = typeof setTimeout == "function" ? setTimeout : void 0,
//     X0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
//     Lm = typeof Promise == "function" ? Promise : void 0,
//     Q0 =
//       typeof queueMicrotask == "function"
//         ? queueMicrotask
//         : typeof Lm < "u"
//           ? function (t) {
//               return Lm.resolve(null).then(t).catch(Z0);
//             }
//           : Bm;
//   function Z0(t) {
//     setTimeout(function () {
//       throw t;
//     });
//   }
//   function sn(t) {
//     return t === "head";
//   }
//   function Ym(t, e) {
//     var a = e,
//       n = 0;
//     do {
//       var l = a.nextSibling;
//       if ((t.removeChild(a), l && l.nodeType === 8))
//         if (((a = l.data), a === "/$" || a === "/&")) {
//           if (n === 0) {
//             (t.removeChild(l), Ol(e));
//             return;
//           }
//           n--;
//         } else if (
//           a === "$" ||
//           a === "$?" ||
//           a === "$~" ||
//           a === "$!" ||
//           a === "&"
//         )
//           n++;
//         else if (a === "html") zi(t.ownerDocument.documentElement);
//         else if (a === "head") {
//           ((a = t.ownerDocument.head), zi(a));
//           for (var s = a.firstChild; s; ) {
//             var u = s.nextSibling,
//               h = s.nodeName;
//             (s[Ql] ||
//               h === "SCRIPT" ||
//               h === "STYLE" ||
//               (h === "LINK" && s.rel.toLowerCase() === "stylesheet") ||
//               a.removeChild(s),
//               (s = u));
//           }
//         } else a === "body" && zi(t.ownerDocument.body);
//       a = l;
//     } while (a);
//     Ol(e);
//   }
//   function qm(t, e) {
//     var a = t;
//     t = 0;
//     do {
//       var n = a.nextSibling;
//       if (
//         (a.nodeType === 1
//           ? e
//             ? ((a._stashedDisplay = a.style.display),
//               (a.style.display = "none"))
//             : ((a.style.display = a._stashedDisplay || ""),
//               a.getAttribute("style") === "" && a.removeAttribute("style"))
//           : a.nodeType === 3 &&
//             (e
//               ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
//               : (a.nodeValue = a._stashedText || "")),
//         n && n.nodeType === 8)
//       )
//         if (((a = n.data), a === "/$")) {
//           if (t === 0) break;
//           t--;
//         } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || t++;
//       a = n;
//     } while (a);
//   }
//   function wr(t) {
//     var e = t.firstChild;
//     for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
//       var a = e;
//       switch (((e = e.nextSibling), a.nodeName)) {
//         case "HTML":
//         case "HEAD":
//         case "BODY":
//           (wr(a), Ho(a));
//           continue;
//         case "SCRIPT":
//         case "STYLE":
//           continue;
//         case "LINK":
//           if (a.rel.toLowerCase() === "stylesheet") continue;
//       }
//       t.removeChild(a);
//     }
//   }
//   function K0(t, e, a, n) {
//     for (; t.nodeType === 1; ) {
//       var l = a;
//       if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
//         if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
//       } else if (n) {
//         if (!t[Ql])
//           switch (e) {
//             case "meta":
//               if (!t.hasAttribute("itemprop")) break;
//               return t;
//             case "link":
//               if (
//                 ((s = t.getAttribute("rel")),
//                 s === "stylesheet" && t.hasAttribute("data-precedence"))
//               )
//                 break;
//               if (
//                 s !== l.rel ||
//                 t.getAttribute("href") !==
//                   (l.href == null || l.href === "" ? null : l.href) ||
//                 t.getAttribute("crossorigin") !==
//                   (l.crossOrigin == null ? null : l.crossOrigin) ||
//                 t.getAttribute("title") !== (l.title == null ? null : l.title)
//               )
//                 break;
//               return t;
//             case "style":
//               if (t.hasAttribute("data-precedence")) break;
//               return t;
//             case "script":
//               if (
//                 ((s = t.getAttribute("src")),
//                 (s !== (l.src == null ? null : l.src) ||
//                   t.getAttribute("type") !== (l.type == null ? null : l.type) ||
//                   t.getAttribute("crossorigin") !==
//                     (l.crossOrigin == null ? null : l.crossOrigin)) &&
//                   s &&
//                   t.hasAttribute("async") &&
//                   !t.hasAttribute("itemprop"))
//               )
//                 break;
//               return t;
//             default:
//               return t;
//           }
//       } else if (e === "input" && t.type === "hidden") {
//         var s = l.name == null ? null : "" + l.name;
//         if (l.type === "hidden" && t.getAttribute("name") === s) return t;
//       } else return t;
//       if (((t = Ke(t.nextSibling)), t === null)) break;
//     }
//     return null;
//   }
//   function J0(t, e, a) {
//     if (e === "") return null;
//     for (; t.nodeType !== 3; )
//       if (
//         ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
//           !a) ||
//         ((t = Ke(t.nextSibling)), t === null)
//       )
//         return null;
//     return t;
//   }
//   function Gm(t, e) {
//     for (; t.nodeType !== 8; )
//       if (
//         ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
//           !e) ||
//         ((t = Ke(t.nextSibling)), t === null)
//       )
//         return null;
//     return t;
//   }
//   function Nr(t) {
//     return t.data === "$?" || t.data === "$~";
//   }
//   function Ar(t) {
//     return (
//       t.data === "$!" ||
//       (t.data === "$?" && t.ownerDocument.readyState !== "loading")
//     );
//   }
//   function W0(t, e) {
//     var a = t.ownerDocument;
//     if (t.data === "$~") t._reactRetry = e;
//     else if (t.data !== "$?" || a.readyState !== "loading") e();
//     else {
//       var n = function () {
//         (e(), a.removeEventListener("DOMContentLoaded", n));
//       };
//       (a.addEventListener("DOMContentLoaded", n), (t._reactRetry = n));
//     }
//   }
//   function Ke(t) {
//     for (; t != null; t = t.nextSibling) {
//       var e = t.nodeType;
//       if (e === 1 || e === 3) break;
//       if (e === 8) {
//         if (
//           ((e = t.data),
//           e === "$" ||
//             e === "$!" ||
//             e === "$?" ||
//             e === "$~" ||
//             e === "&" ||
//             e === "F!" ||
//             e === "F")
//         )
//           break;
//         if (e === "/$" || e === "/&") return null;
//       }
//     }
//     return t;
//   }
//   var Tr = null;
//   function km(t) {
//     t = t.nextSibling;
//     for (var e = 0; t; ) {
//       if (t.nodeType === 8) {
//         var a = t.data;
//         if (a === "/$" || a === "/&") {
//           if (e === 0) return Ke(t.nextSibling);
//           e--;
//         } else
//           (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
//             e++;
//       }
//       t = t.nextSibling;
//     }
//     return null;
//   }
//   function Vm(t) {
//     t = t.previousSibling;
//     for (var e = 0; t; ) {
//       if (t.nodeType === 8) {
//         var a = t.data;
//         if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
//           if (e === 0) return t;
//           e--;
//         } else (a !== "/$" && a !== "/&") || e++;
//       }
//       t = t.previousSibling;
//     }
//     return null;
//   }
//   function Xm(t, e, a) {
//     switch (((e = Vs(a)), t)) {
//       case "html":
//         if (((t = e.documentElement), !t)) throw Error(c(452));
//         return t;
//       case "head":
//         if (((t = e.head), !t)) throw Error(c(453));
//         return t;
//       case "body":
//         if (((t = e.body), !t)) throw Error(c(454));
//         return t;
//       default:
//         throw Error(c(451));
//     }
//   }
//   function zi(t) {
//     for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
//     Ho(t);
//   }
//   var Je = new Map(),
//     Qm = new Set();
//   function Xs(t) {
//     return typeof t.getRootNode == "function"
//       ? t.getRootNode()
//       : t.nodeType === 9
//         ? t
//         : t.ownerDocument;
//   }
//   var _a = L.d;
//   L.d = {
//     f: $0,
//     r: F0,
//     D: P0,
//     C: I0,
//     L: ty,
//     m: ey,
//     X: ny,
//     S: ay,
//     M: ly,
//   };
//   function $0() {
//     var t = _a.f(),
//       e = Ds();
//     return t || e;
//   }
//   function F0(t) {
//     var e = Jn(t);
//     e !== null && e.tag === 5 && e.type === "form" ? cd(e) : _a.r(t);
//   }
//   var Tl = typeof document > "u" ? null : document;
//   function Zm(t, e, a) {
//     var n = Tl;
//     if (n && typeof e == "string" && e) {
//       var l = qe(e);
//       ((l = 'link[rel="' + t + '"][href="' + l + '"]'),
//         typeof a == "string" && (l += '[crossorigin="' + a + '"]'),
//         Qm.has(l) ||
//           (Qm.add(l),
//           (t = {
//             rel: t,
//             crossOrigin: a,
//             href: e,
//           }),
//           n.querySelector(l) === null &&
//             ((e = n.createElement("link")),
//             ce(e, "link", t),
//             te(e),
//             n.head.appendChild(e))));
//     }
//   }
//   function P0(t) {
//     (_a.D(t), Zm("dns-prefetch", t, null));
//   }
//   function I0(t, e) {
//     (_a.C(t, e), Zm("preconnect", t, e));
//   }
//   function ty(t, e, a) {
//     _a.L(t, e, a);
//     var n = Tl;
//     if (n && t && e) {
//       var l = 'link[rel="preload"][as="' + qe(e) + '"]';
//       e === "image" && a && a.imageSrcSet
//         ? ((l += '[imagesrcset="' + qe(a.imageSrcSet) + '"]'),
//           typeof a.imageSizes == "string" &&
//             (l += '[imagesizes="' + qe(a.imageSizes) + '"]'))
//         : (l += '[href="' + qe(t) + '"]');
//       var s = l;
//       switch (e) {
//         case "style":
//           s = zl(t);
//           break;
//         case "script":
//           s = Hl(t);
//       }
//       Je.has(s) ||
//         ((t = m(
//           {
//             rel: "preload",
//             href: e === "image" && a && a.imageSrcSet ? void 0 : t,
//             as: e,
//           },
//           a,
//         )),
//         Je.set(s, t),
//         n.querySelector(l) !== null ||
//           (e === "style" && n.querySelector(Hi(s))) ||
//           (e === "script" && n.querySelector(Oi(s))) ||
//           ((e = n.createElement("link")),
//           ce(e, "link", t),
//           te(e),
//           n.head.appendChild(e)));
//     }
//   }
//   function ey(t, e) {
//     _a.m(t, e);
//     var a = Tl;
//     if (a && t) {
//       var n = e && typeof e.as == "string" ? e.as : "script",
//         l =
//           'link[rel="modulepreload"][as="' + qe(n) + '"][href="' + qe(t) + '"]',
//         s = l;
//       switch (n) {
//         case "audioworklet":
//         case "paintworklet":
//         case "serviceworker":
//         case "sharedworker":
//         case "worker":
//         case "script":
//           s = Hl(t);
//       }
//       if (
//         !Je.has(s) &&
//         ((t = m(
//           {
//             rel: "modulepreload",
//             href: t,
//           },
//           e,
//         )),
//         Je.set(s, t),
//         a.querySelector(l) === null)
//       ) {
//         switch (n) {
//           case "audioworklet":
//           case "paintworklet":
//           case "serviceworker":
//           case "sharedworker":
//           case "worker":
//           case "script":
//             if (a.querySelector(Oi(s))) return;
//         }
//         ((n = a.createElement("link")),
//           ce(n, "link", t),
//           te(n),
//           a.head.appendChild(n));
//       }
//     }
//   }
//   function ay(t, e, a) {
//     _a.S(t, e, a);
//     var n = Tl;
//     if (n && t) {
//       var l = Wn(n).hoistableStyles,
//         s = zl(t);
//       e = e || "default";
//       var u = l.get(s);
//       if (!u) {
//         var h = {
//           loading: 0,
//           preload: null,
//         };
//         if ((u = n.querySelector(Hi(s)))) h.loading = 5;
//         else {
//           ((t = m(
//             {
//               rel: "stylesheet",
//               href: t,
//               "data-precedence": e,
//             },
//             a,
//           )),
//             (a = Je.get(s)) && zr(t, a));
//           var b = (u = n.createElement("link"));
//           (te(b),
//             ce(b, "link", t),
//             (b._p = new Promise(function (H, D) {
//               ((b.onload = H), (b.onerror = D));
//             })),
//             b.addEventListener("load", function () {
//               h.loading |= 1;
//             }),
//             b.addEventListener("error", function () {
//               h.loading |= 2;
//             }),
//             (h.loading |= 4),
//             Qs(u, e, n));
//         }
//         ((u = {
//           type: "stylesheet",
//           instance: u,
//           count: 1,
//           state: h,
//         }),
//           l.set(s, u));
//       }
//     }
//   }
//   function ny(t, e) {
//     _a.X(t, e);
//     var a = Tl;
//     if (a && t) {
//       var n = Wn(a).hoistableScripts,
//         l = Hl(t),
//         s = n.get(l);
//       s ||
//         ((s = a.querySelector(Oi(l))),
//         s ||
//           ((t = m(
//             {
//               src: t,
//               async: !0,
//             },
//             e,
//           )),
//           (e = Je.get(l)) && Hr(t, e),
//           (s = a.createElement("script")),
//           te(s),
//           ce(s, "link", t),
//           a.head.appendChild(s)),
//         (s = {
//           type: "script",
//           instance: s,
//           count: 1,
//           state: null,
//         }),
//         n.set(l, s));
//     }
//   }
//   function ly(t, e) {
//     _a.M(t, e);
//     var a = Tl;
//     if (a && t) {
//       var n = Wn(a).hoistableScripts,
//         l = Hl(t),
//         s = n.get(l);
//       s ||
//         ((s = a.querySelector(Oi(l))),
//         s ||
//           ((t = m(
//             {
//               src: t,
//               async: !0,
//               type: "module",
//             },
//             e,
//           )),
//           (e = Je.get(l)) && Hr(t, e),
//           (s = a.createElement("script")),
//           te(s),
//           ce(s, "link", t),
//           a.head.appendChild(s)),
//         (s = {
//           type: "script",
//           instance: s,
//           count: 1,
//           state: null,
//         }),
//         n.set(l, s));
//     }
//   }
//   function Km(t, e, a, n) {
//     var l = (l = st.current) ? Xs(l) : null;
//     if (!l) throw Error(c(446));
//     switch (t) {
//       case "meta":
//       case "title":
//         return null;
//       case "style":
//         return typeof a.precedence == "string" && typeof a.href == "string"
//           ? ((e = zl(a.href)),
//             (a = Wn(l).hoistableStyles),
//             (n = a.get(e)),
//             n ||
//               ((n = {
//                 type: "style",
//                 instance: null,
//                 count: 0,
//                 state: null,
//               }),
//               a.set(e, n)),
//             n)
//           : {
//               type: "void",
//               instance: null,
//               count: 0,
//               state: null,
//             };
//       case "link":
//         if (
//           a.rel === "stylesheet" &&
//           typeof a.href == "string" &&
//           typeof a.precedence == "string"
//         ) {
//           t = zl(a.href);
//           var s = Wn(l).hoistableStyles,
//             u = s.get(t);
//           if (
//             (u ||
//               ((l = l.ownerDocument || l),
//               (u = {
//                 type: "stylesheet",
//                 instance: null,
//                 count: 0,
//                 state: {
//                   loading: 0,
//                   preload: null,
//                 },
//               }),
//               s.set(t, u),
//               (s = l.querySelector(Hi(t))) &&
//                 !s._p &&
//                 ((u.instance = s), (u.state.loading = 5)),
//               Je.has(t) ||
//                 ((a = {
//                   rel: "preload",
//                   as: "style",
//                   href: a.href,
//                   crossOrigin: a.crossOrigin,
//                   integrity: a.integrity,
//                   media: a.media,
//                   hrefLang: a.hrefLang,
//                   referrerPolicy: a.referrerPolicy,
//                 }),
//                 Je.set(t, a),
//                 s || iy(l, t, a, u.state))),
//             e && n === null)
//           )
//             throw Error(c(528, ""));
//           return u;
//         }
//         if (e && n !== null) throw Error(c(529, ""));
//         return null;
//       case "script":
//         return (
//           (e = a.async),
//           (a = a.src),
//           typeof a == "string" &&
//           e &&
//           typeof e != "function" &&
//           typeof e != "symbol"
//             ? ((e = Hl(a)),
//               (a = Wn(l).hoistableScripts),
//               (n = a.get(e)),
//               n ||
//                 ((n = {
//                   type: "script",
//                   instance: null,
//                   count: 0,
//                   state: null,
//                 }),
//                 a.set(e, n)),
//               n)
//             : {
//                 type: "void",
//                 instance: null,
//                 count: 0,
//                 state: null,
//               }
//         );
//       default:
//         throw Error(c(444, t));
//     }
//   }
//   function zl(t) {
//     return 'href="' + qe(t) + '"';
//   }
//   function Hi(t) {
//     return 'link[rel="stylesheet"][' + t + "]";
//   }
//   function Jm(t) {
//     return m({}, t, {
//       "data-precedence": t.precedence,
//       precedence: null,
//     });
//   }
//   function iy(t, e, a, n) {
//     t.querySelector('link[rel="preload"][as="style"][' + e + "]")
//       ? (n.loading = 1)
//       : ((e = t.createElement("link")),
//         (n.preload = e),
//         e.addEventListener("load", function () {
//           return (n.loading |= 1);
//         }),
//         e.addEventListener("error", function () {
//           return (n.loading |= 2);
//         }),
//         ce(e, "link", a),
//         te(e),
//         t.head.appendChild(e));
//   }
//   function Hl(t) {
//     return '[src="' + qe(t) + '"]';
//   }
//   function Oi(t) {
//     return "script[async]" + t;
//   }
//   function Wm(t, e, a) {
//     if ((e.count++, e.instance === null))
//       switch (e.type) {
//         case "style":
//           var n = t.querySelector('style[data-href~="' + qe(a.href) + '"]');
//           if (n) return ((e.instance = n), te(n), n);
//           var l = m({}, a, {
//             "data-href": a.href,
//             "data-precedence": a.precedence,
//             href: null,
//             precedence: null,
//           });
//           return (
//             (n = (t.ownerDocument || t).createElement("style")),
//             te(n),
//             ce(n, "style", l),
//             Qs(n, a.precedence, t),
//             (e.instance = n)
//           );
//         case "stylesheet":
//           l = zl(a.href);
//           var s = t.querySelector(Hi(l));
//           if (s) return ((e.state.loading |= 4), (e.instance = s), te(s), s);
//           ((n = Jm(a)),
//             (l = Je.get(l)) && zr(n, l),
//             (s = (t.ownerDocument || t).createElement("link")),
//             te(s));
//           var u = s;
//           return (
//             (u._p = new Promise(function (h, b) {
//               ((u.onload = h), (u.onerror = b));
//             })),
//             ce(s, "link", n),
//             (e.state.loading |= 4),
//             Qs(s, a.precedence, t),
//             (e.instance = s)
//           );
//         case "script":
//           return (
//             (s = Hl(a.src)),
//             (l = t.querySelector(Oi(s)))
//               ? ((e.instance = l), te(l), l)
//               : ((n = a),
//                 (l = Je.get(s)) && ((n = m({}, a)), Hr(n, l)),
//                 (t = t.ownerDocument || t),
//                 (l = t.createElement("script")),
//                 te(l),
//                 ce(l, "link", n),
//                 t.head.appendChild(l),
//                 (e.instance = l))
//           );
//         case "void":
//           return null;
//         default:
//           throw Error(c(443, e.type));
//       }
//     else
//       e.type === "stylesheet" &&
//         (e.state.loading & 4) === 0 &&
//         ((n = e.instance), (e.state.loading |= 4), Qs(n, a.precedence, t));
//     return e.instance;
//   }
//   function Qs(t, e, a) {
//     for (
//       var n = a.querySelectorAll(
//           'link[rel="stylesheet"][data-precedence],style[data-precedence]',
//         ),
//         l = n.length ? n[n.length - 1] : null,
//         s = l,
//         u = 0;
//       u < n.length;
//       u++
//     ) {
//       var h = n[u];
//       if (h.dataset.precedence === e) s = h;
//       else if (s !== l) break;
//     }
//     s
//       ? s.parentNode.insertBefore(t, s.nextSibling)
//       : ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(t, e.firstChild));
//   }
//   function zr(t, e) {
//     (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
//       t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
//       t.title == null && (t.title = e.title));
//   }
//   function Hr(t, e) {
//     (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
//       t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
//       t.integrity == null && (t.integrity = e.integrity));
//   }
//   var Zs = null;
//   function $m(t, e, a) {
//     if (Zs === null) {
//       var n = new Map(),
//         l = (Zs = new Map());
//       l.set(a, n);
//     } else ((l = Zs), (n = l.get(a)), n || ((n = new Map()), l.set(a, n)));
//     if (n.has(t)) return n;
//     for (
//       n.set(t, null), a = a.getElementsByTagName(t), l = 0;
//       l < a.length;
//       l++
//     ) {
//       var s = a[l];
//       if (
//         !(
//           s[Ql] ||
//           s[le] ||
//           (t === "link" && s.getAttribute("rel") === "stylesheet")
//         ) &&
//         s.namespaceURI !== "http://www.w3.org/2000/svg"
//       ) {
//         var u = s.getAttribute(e) || "";
//         u = t + u;
//         var h = n.get(u);
//         h ? h.push(s) : n.set(u, [s]);
//       }
//     }
//     return n;
//   }
//   function Fm(t, e, a) {
//     ((t = t.ownerDocument || t),
//       t.head.insertBefore(
//         a,
//         e === "title" ? t.querySelector("head > title") : null,
//       ));
//   }
//   function sy(t, e, a) {
//     if (a === 1 || e.itemProp != null) return !1;
//     switch (t) {
//       case "meta":
//       case "title":
//         return !0;
//       case "style":
//         if (
//           typeof e.precedence != "string" ||
//           typeof e.href != "string" ||
//           e.href === ""
//         )
//           break;
//         return !0;
//       case "link":
//         if (
//           typeof e.rel != "string" ||
//           typeof e.href != "string" ||
//           e.href === "" ||
//           e.onLoad ||
//           e.onError
//         )
//           break;
//         switch (e.rel) {
//           case "stylesheet":
//             return (
//               (t = e.disabled),
//               typeof e.precedence == "string" && t == null
//             );
//           default:
//             return !0;
//         }
//       case "script":
//         if (
//           e.async &&
//           typeof e.async != "function" &&
//           typeof e.async != "symbol" &&
//           !e.onLoad &&
//           !e.onError &&
//           e.src &&
//           typeof e.src == "string"
//         )
//           return !0;
//     }
//     return !1;
//   }
//   function Pm(t) {
//     return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
//   }
//   function oy(t, e, a, n) {
//     if (
//       a.type === "stylesheet" &&
//       (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
//       (a.state.loading & 4) === 0
//     ) {
//       if (a.instance === null) {
//         var l = zl(n.href),
//           s = e.querySelector(Hi(l));
//         if (s) {
//           ((e = s._p),
//             e !== null &&
//               typeof e == "object" &&
//               typeof e.then == "function" &&
//               (t.count++, (t = Ks.bind(t)), e.then(t, t)),
//             (a.state.loading |= 4),
//             (a.instance = s),
//             te(s));
//           return;
//         }
//         ((s = e.ownerDocument || e),
//           (n = Jm(n)),
//           (l = Je.get(l)) && zr(n, l),
//           (s = s.createElement("link")),
//           te(s));
//         var u = s;
//         ((u._p = new Promise(function (h, b) {
//           ((u.onload = h), (u.onerror = b));
//         })),
//           ce(s, "link", n),
//           (a.instance = s));
//       }
//       (t.stylesheets === null && (t.stylesheets = new Map()),
//         t.stylesheets.set(a, e),
//         (e = a.state.preload) &&
//           (a.state.loading & 3) === 0 &&
//           (t.count++,
//           (a = Ks.bind(t)),
//           e.addEventListener("load", a),
//           e.addEventListener("error", a)));
//     }
//   }
//   var Or = 0;
//   function cy(t, e) {
//     return (
//       t.stylesheets && t.count === 0 && Ws(t, t.stylesheets),
//       0 < t.count || 0 < t.imgCount
//         ? function (a) {
//             var n = setTimeout(function () {
//               if ((t.stylesheets && Ws(t, t.stylesheets), t.unsuspend)) {
//                 var s = t.unsuspend;
//                 ((t.unsuspend = null), s());
//               }
//             }, 6e4 + e);
//             0 < t.imgBytes && Or === 0 && (Or = 62500 * k0());
//             var l = setTimeout(
//               function () {
//                 if (
//                   ((t.waitingForImages = !1),
//                   t.count === 0 &&
//                     (t.stylesheets && Ws(t, t.stylesheets), t.unsuspend))
//                 ) {
//                   var s = t.unsuspend;
//                   ((t.unsuspend = null), s());
//                 }
//               },
//               (t.imgBytes > Or ? 50 : 800) + e,
//             );
//             return (
//               (t.unsuspend = a),
//               function () {
//                 ((t.unsuspend = null), clearTimeout(n), clearTimeout(l));
//               }
//             );
//           }
//         : null
//     );
//   }
//   function Ks() {
//     if (
//       (this.count--,
//       this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
//     ) {
//       if (this.stylesheets) Ws(this, this.stylesheets);
//       else if (this.unsuspend) {
//         var t = this.unsuspend;
//         ((this.unsuspend = null), t());
//       }
//     }
//   }
//   var Js = null;
//   function Ws(t, e) {
//     ((t.stylesheets = null),
//       t.unsuspend !== null &&
//         (t.count++,
//         (Js = new Map()),
//         e.forEach(ry, t),
//         (Js = null),
//         Ks.call(t)));
//   }
//   function ry(t, e) {
//     if (!(e.state.loading & 4)) {
//       var a = Js.get(t);
//       if (a) var n = a.get(null);
//       else {
//         ((a = new Map()), Js.set(t, a));
//         for (
//           var l = t.querySelectorAll(
//               "link[data-precedence],style[data-precedence]",
//             ),
//             s = 0;
//           s < l.length;
//           s++
//         ) {
//           var u = l[s];
//           (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") &&
//             (a.set(u.dataset.precedence, u), (n = u));
//         }
//         n && a.set(null, n);
//       }
//       ((l = e.instance),
//         (u = l.getAttribute("data-precedence")),
//         (s = a.get(u) || n),
//         s === n && a.set(null, l),
//         a.set(u, l),
//         this.count++,
//         (n = Ks.bind(this)),
//         l.addEventListener("load", n),
//         l.addEventListener("error", n),
//         s
//           ? s.parentNode.insertBefore(l, s.nextSibling)
//           : ((t = t.nodeType === 9 ? t.head : t),
//             t.insertBefore(l, t.firstChild)),
//         (e.state.loading |= 4));
//     }
//   }
//   var ji = {
//     $$typeof: J,
//     Provider: null,
//     Consumer: null,
//     _currentValue: _,
//     _currentValue2: _,
//     _threadCount: 0,
//   };
//   function uy(t, e, a, n, l, s, u, h, b) {
//     ((this.tag = 1),
//       (this.containerInfo = t),
//       (this.pingCache = this.current = this.pendingChildren = null),
//       (this.timeoutHandle = -1),
//       (this.callbackNode =
//         this.next =
//         this.pendingContext =
//         this.context =
//         this.cancelPendingCommit =
//           null),
//       (this.callbackPriority = 0),
//       (this.expirationTimes = qa(-1)),
//       (this.entangledLanes =
//         this.shellSuspendCounter =
//         this.errorRecoveryDisabledLanes =
//         this.expiredLanes =
//         this.warmLanes =
//         this.pingedLanes =
//         this.suspendedLanes =
//         this.pendingLanes =
//           0),
//       (this.entanglements = qa(0)),
//       (this.hiddenUpdates = qa(null)),
//       (this.identifierPrefix = n),
//       (this.onUncaughtError = l),
//       (this.onCaughtError = s),
//       (this.onRecoverableError = u),
//       (this.pooledCache = null),
//       (this.pooledCacheLanes = 0),
//       (this.formState = b),
//       (this.incompleteTransitions = new Map()));
//   }
//   function Im(t, e, a, n, l, s, u, h, b, H, D, G) {
//     return (
//       (t = new uy(t, e, a, u, b, H, D, G, h)),
//       (e = 1),
//       s === !0 && (e |= 24),
//       (s = Ce(3, null, null, e)),
//       (t.current = s),
//       (s.stateNode = t),
//       (e = cc()),
//       e.refCount++,
//       (t.pooledCache = e),
//       e.refCount++,
//       (s.memoizedState = {
//         element: n,
//         isDehydrated: a,
//         cache: e,
//       }),
//       dc(s),
//       t
//     );
//   }
//   function th(t) {
//     return t ? ((t = il), t) : il;
//   }
//   function eh(t, e, a, n, l, s) {
//     ((l = th(l)),
//       n.context === null ? (n.context = l) : (n.pendingContext = l),
//       (n = Ja(e)),
//       (n.payload = {
//         element: a,
//       }),
//       (s = s === void 0 ? null : s),
//       s !== null && (n.callback = s),
//       (a = Wa(t, n, e)),
//       a !== null && (Te(a, t, e), ci(a, t, e)));
//   }
//   function ah(t, e) {
//     if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
//       var a = t.retryLane;
//       t.retryLane = a !== 0 && a < e ? a : e;
//     }
//   }
//   function jr(t, e) {
//     (ah(t, e), (t = t.alternate) && ah(t, e));
//   }
//   function nh(t) {
//     if (t.tag === 13 || t.tag === 31) {
//       var e = An(t, 67108864);
//       (e !== null && Te(e, t, 67108864), jr(t, 67108864));
//     }
//   }
//   function lh(t) {
//     if (t.tag === 13 || t.tag === 31) {
//       var e = Ue();
//       e = Qn(e);
//       var a = An(t, e);
//       (a !== null && Te(a, t, e), jr(t, e));
//     }
//   }
//   var $s = !0;
//   function fy(t, e, a, n) {
//     var l = N.T;
//     N.T = null;
//     var s = L.p;
//     try {
//       ((L.p = 2), Cr(t, e, a, n));
//     } finally {
//       ((L.p = s), (N.T = l));
//     }
//   }
//   function dy(t, e, a, n) {
//     var l = N.T;
//     N.T = null;
//     var s = L.p;
//     try {
//       ((L.p = 8), Cr(t, e, a, n));
//     } finally {
//       ((L.p = s), (N.T = l));
//     }
//   }
//   function Cr(t, e, a, n) {
//     if ($s) {
//       var l = Mr(n);
//       if (l === null) (yr(t, e, n, Fs, a), sh(t, n));
//       else if (hy(l, t, e, a, n)) n.stopPropagation();
//       else if ((sh(t, n), e & 4 && -1 < my.indexOf(t))) {
//         for (; l !== null; ) {
//           var s = Jn(l);
//           if (s !== null)
//             switch (s.tag) {
//               case 3:
//                 if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
//                   var u = la(s.pendingLanes);
//                   if (u !== 0) {
//                     var h = s;
//                     for (h.pendingLanes |= 2, h.entangledLanes |= 2; u; ) {
//                       var b = 1 << (31 - re(u));
//                       ((h.entanglements[1] |= b), (u &= ~b));
//                     }
//                     (ca(s), (Ct & 6) === 0 && ((_s = he() + 500), Ni(0)));
//                   }
//                 }
//                 break;
//               case 31:
//               case 13:
//                 ((h = An(s, 2)), h !== null && Te(h, s, 2), Ds(), jr(s, 2));
//             }
//           if (((s = Mr(n)), s === null && yr(t, e, n, Fs, a), s === l)) break;
//           l = s;
//         }
//         l !== null && n.stopPropagation();
//       } else yr(t, e, n, null, a);
//     }
//   }
//   function Mr(t) {
//     return ((t = Ro(t)), _r(t));
//   }
//   var Fs = null;
//   function _r(t) {
//     if (((Fs = null), (t = Kn(t)), t !== null)) {
//       var e = d(t);
//       if (e === null) t = null;
//       else {
//         var a = e.tag;
//         if (a === 13) {
//           if (((t = y(e)), t !== null)) return t;
//           t = null;
//         } else if (a === 31) {
//           if (((t = S(e)), t !== null)) return t;
//           t = null;
//         } else if (a === 3) {
//           if (e.stateNode.current.memoizedState.isDehydrated)
//             return e.tag === 3 ? e.stateNode.containerInfo : null;
//           t = null;
//         } else e !== t && (t = null);
//       }
//     }
//     return ((Fs = t), null);
//   }
//   function ih(t) {
//     switch (t) {
//       case "beforetoggle":
//       case "cancel":
//       case "click":
//       case "close":
//       case "contextmenu":
//       case "copy":
//       case "cut":
//       case "auxclick":
//       case "dblclick":
//       case "dragend":
//       case "dragstart":
//       case "drop":
//       case "focusin":
//       case "focusout":
//       case "input":
//       case "invalid":
//       case "keydown":
//       case "keypress":
//       case "keyup":
//       case "mousedown":
//       case "mouseup":
//       case "paste":
//       case "pause":
//       case "play":
//       case "pointercancel":
//       case "pointerdown":
//       case "pointerup":
//       case "ratechange":
//       case "reset":
//       case "resize":
//       case "seeked":
//       case "submit":
//       case "toggle":
//       case "touchcancel":
//       case "touchend":
//       case "touchstart":
//       case "volumechange":
//       case "change":
//       case "selectionchange":
//       case "textInput":
//       case "compositionstart":
//       case "compositionend":
//       case "compositionupdate":
//       case "beforeblur":
//       case "afterblur":
//       case "beforeinput":
//       case "blur":
//       case "fullscreenchange":
//       case "focus":
//       case "hashchange":
//       case "popstate":
//       case "select":
//       case "selectstart":
//         return 2;
//       case "drag":
//       case "dragenter":
//       case "dragexit":
//       case "dragleave":
//       case "dragover":
//       case "mousemove":
//       case "mouseout":
//       case "mouseover":
//       case "pointermove":
//       case "pointerout":
//       case "pointerover":
//       case "scroll":
//       case "touchmove":
//       case "wheel":
//       case "mouseenter":
//       case "mouseleave":
//       case "pointerenter":
//       case "pointerleave":
//         return 8;
//       case "message":
//         switch (No()) {
//           case pn:
//             return 2;
//           case Vi:
//             return 8;
//           case yn:
//           case Vl:
//             return 32;
//           case ga:
//             return 268435456;
//           default:
//             return 32;
//         }
//       default:
//         return 32;
//     }
//   }
//   var Rr = !1,
//     on = null,
//     cn = null,
//     rn = null,
//     Ci = new Map(),
//     Mi = new Map(),
//     un = [],
//     my =
//       "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
//         " ",
//       );
//   function sh(t, e) {
//     switch (t) {
//       case "focusin":
//       case "focusout":
//         on = null;
//         break;
//       case "dragenter":
//       case "dragleave":
//         cn = null;
//         break;
//       case "mouseover":
//       case "mouseout":
//         rn = null;
//         break;
//       case "pointerover":
//       case "pointerout":
//         Ci.delete(e.pointerId);
//         break;
//       case "gotpointercapture":
//       case "lostpointercapture":
//         Mi.delete(e.pointerId);
//     }
//   }
//   function _i(t, e, a, n, l, s) {
//     return t === null || t.nativeEvent !== s
//       ? ((t = {
//           blockedOn: e,
//           domEventName: a,
//           eventSystemFlags: n,
//           nativeEvent: s,
//           targetContainers: [l],
//         }),
//         e !== null && ((e = Jn(e)), e !== null && nh(e)),
//         t)
//       : ((t.eventSystemFlags |= n),
//         (e = t.targetContainers),
//         l !== null && e.indexOf(l) === -1 && e.push(l),
//         t);
//   }
//   function hy(t, e, a, n, l) {
//     switch (e) {
//       case "focusin":
//         return ((on = _i(on, t, e, a, n, l)), !0);
//       case "dragenter":
//         return ((cn = _i(cn, t, e, a, n, l)), !0);
//       case "mouseover":
//         return ((rn = _i(rn, t, e, a, n, l)), !0);
//       case "pointerover":
//         var s = l.pointerId;
//         return (Ci.set(s, _i(Ci.get(s) || null, t, e, a, n, l)), !0);
//       case "gotpointercapture":
//         return (
//           (s = l.pointerId),
//           Mi.set(s, _i(Mi.get(s) || null, t, e, a, n, l)),
//           !0
//         );
//     }
//     return !1;
//   }
//   function oh(t) {
//     var e = Kn(t.target);
//     if (e !== null) {
//       var a = d(e);
//       if (a !== null) {
//         if (((e = a.tag), e === 13)) {
//           if (((e = y(a)), e !== null)) {
//             ((t.blockedOn = e),
//               bu(t.priority, function () {
//                 lh(a);
//               }));
//             return;
//           }
//         } else if (e === 31) {
//           if (((e = S(a)), e !== null)) {
//             ((t.blockedOn = e),
//               bu(t.priority, function () {
//                 lh(a);
//               }));
//             return;
//           }
//         } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
//           t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
//           return;
//         }
//       }
//     }
//     t.blockedOn = null;
//   }
//   function Ps(t) {
//     if (t.blockedOn !== null) return !1;
//     for (var e = t.targetContainers; 0 < e.length; ) {
//       var a = Mr(t.nativeEvent);
//       if (a === null) {
//         a = t.nativeEvent;
//         var n = new a.constructor(a.type, a);
//         ((_o = n), a.target.dispatchEvent(n), (_o = null));
//       } else return ((e = Jn(a)), e !== null && nh(e), (t.blockedOn = a), !1);
//       e.shift();
//     }
//     return !0;
//   }
//   function ch(t, e, a) {
//     Ps(t) && a.delete(e);
//   }
//   function gy() {
//     ((Rr = !1),
//       on !== null && Ps(on) && (on = null),
//       cn !== null && Ps(cn) && (cn = null),
//       rn !== null && Ps(rn) && (rn = null),
//       Ci.forEach(ch),
//       Mi.forEach(ch));
//   }
//   function Is(t, e) {
//     t.blockedOn === e &&
//       ((t.blockedOn = null),
//       Rr ||
//         ((Rr = !0),
//         i.unstable_scheduleCallback(i.unstable_NormalPriority, gy)));
//   }
//   var to = null;
//   function rh(t) {
//     to !== t &&
//       ((to = t),
//       i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
//         to === t && (to = null);
//         for (var e = 0; e < t.length; e += 3) {
//           var a = t[e],
//             n = t[e + 1],
//             l = t[e + 2];
//           if (typeof n != "function") {
//             if (_r(n || a) === null) continue;
//             break;
//           }
//           var s = Jn(a);
//           s !== null &&
//             (t.splice(e, 3),
//             (e -= 3),
//             Mc(
//               s,
//               {
//                 pending: !0,
//                 data: l,
//                 method: a.method,
//                 action: n,
//               },
//               n,
//               l,
//             ));
//         }
//       }));
//   }
//   function Ol(t) {
//     function e(b) {
//       return Is(b, t);
//     }
//     (on !== null && Is(on, t),
//       cn !== null && Is(cn, t),
//       rn !== null && Is(rn, t),
//       Ci.forEach(e),
//       Mi.forEach(e));
//     for (var a = 0; a < un.length; a++) {
//       var n = un[a];
//       n.blockedOn === t && (n.blockedOn = null);
//     }
//     for (; 0 < un.length && ((a = un[0]), a.blockedOn === null); )
//       (oh(a), a.blockedOn === null && un.shift());
//     if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
//       for (n = 0; n < a.length; n += 3) {
//         var l = a[n],
//           s = a[n + 1],
//           u = l[be] || null;
//         if (typeof s == "function") u || rh(a);
//         else if (u) {
//           var h = null;
//           if (s && s.hasAttribute("formAction")) {
//             if (((l = s), (u = s[be] || null))) h = u.formAction;
//             else if (_r(l) !== null) continue;
//           } else h = u.action;
//           (typeof h == "function" ? (a[n + 1] = h) : (a.splice(n, 3), (n -= 3)),
//             rh(a));
//         }
//       }
//   }
//   function uh() {
//     function t(s) {
//       s.canIntercept &&
//         s.info === "react-transition" &&
//         s.intercept({
//           handler: function () {
//             return new Promise(function (u) {
//               return (l = u);
//             });
//           },
//           focusReset: "manual",
//           scroll: "manual",
//         });
//     }
//     function e() {
//       (l !== null && (l(), (l = null)), n || setTimeout(a, 20));
//     }
//     function a() {
//       if (!n && !navigation.transition) {
//         var s = navigation.currentEntry;
//         s &&
//           s.url != null &&
//           navigation.navigate(s.url, {
//             state: s.getState(),
//             info: "react-transition",
//             history: "replace",
//           });
//       }
//     }
//     if (typeof navigation == "object") {
//       var n = !1,
//         l = null;
//       return (
//         navigation.addEventListener("navigate", t),
//         navigation.addEventListener("navigatesuccess", e),
//         navigation.addEventListener("navigateerror", e),
//         setTimeout(a, 100),
//         function () {
//           ((n = !0),
//             navigation.removeEventListener("navigate", t),
//             navigation.removeEventListener("navigatesuccess", e),
//             navigation.removeEventListener("navigateerror", e),
//             l !== null && (l(), (l = null)));
//         }
//       );
//     }
//   }
//   function Dr(t) {
//     this._internalRoot = t;
//   }
//   ((eo.prototype.render = Dr.prototype.render =
//     function (t) {
//       var e = this._internalRoot;
//       if (e === null) throw Error(c(409));
//       var a = e.current,
//         n = Ue();
//       eh(a, n, t, e, null, null);
//     }),
//     (eo.prototype.unmount = Dr.prototype.unmount =
//       function () {
//         var t = this._internalRoot;
//         if (t !== null) {
//           this._internalRoot = null;
//           var e = t.containerInfo;
//           (eh(t.current, 2, null, t, null, null), Ds(), (e[Zn] = null));
//         }
//       }));
//   function eo(t) {
//     this._internalRoot = t;
//   }
//   eo.prototype.unstable_scheduleHydration = function (t) {
//     if (t) {
//       var e = To();
//       t = {
//         blockedOn: null,
//         target: t,
//         priority: e,
//       };
//       for (var a = 0; a < un.length && e !== 0 && e < un[a].priority; a++);
//       (un.splice(a, 0, t), a === 0 && oh(t));
//     }
//   };
//   var fh = o.version;
//   if (fh !== "19.2.1") throw Error(c(527, fh, "19.2.1"));
//   L.findDOMNode = function (t) {
//     var e = t._reactInternals;
//     if (e === void 0)
//       throw typeof t.render == "function"
//         ? Error(c(188))
//         : ((t = Object.keys(t).join(",")), Error(c(268, t)));
//     return (
//       (t = p(e)),
//       (t = t !== null ? x(t) : null),
//       (t = t === null ? null : t.stateNode),
//       t
//     );
//   };
//   var py = {
//     bundleType: 0,
//     version: "19.2.1",
//     rendererPackageName: "react-dom",
//     currentDispatcherRef: N,
//     reconcilerVersion: "19.2.1",
//   };
//   if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
//     var ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
//     if (!ao.isDisabled && ao.supportsFiber)
//       try {
//         ((vn = ao.inject(py)), (ge = ao));
//       } catch {}
//   }
//   return (
//     (Di.createRoot = function (t, e) {
//       if (!f(t)) throw Error(c(299));
//       var a = !1,
//         n = "",
//         l = vd,
//         s = xd,
//         u = bd;
//       return (
//         e != null &&
//           (e.unstable_strictMode === !0 && (a = !0),
//           e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
//           e.onUncaughtError !== void 0 && (l = e.onUncaughtError),
//           e.onCaughtError !== void 0 && (s = e.onCaughtError),
//           e.onRecoverableError !== void 0 && (u = e.onRecoverableError)),
//         (e = Im(t, 1, !1, null, null, a, n, null, l, s, u, uh)),
//         (t[Zn] = e.current),
//         pr(t),
//         new Dr(e)
//       );
//     }),
//     (Di.hydrateRoot = function (t, e, a) {
//       if (!f(t)) throw Error(c(299));
//       var n = !1,
//         l = "",
//         s = vd,
//         u = xd,
//         h = bd,
//         b = null;
//       return (
//         a != null &&
//           (a.unstable_strictMode === !0 && (n = !0),
//           a.identifierPrefix !== void 0 && (l = a.identifierPrefix),
//           a.onUncaughtError !== void 0 && (s = a.onUncaughtError),
//           a.onCaughtError !== void 0 && (u = a.onCaughtError),
//           a.onRecoverableError !== void 0 && (h = a.onRecoverableError),
//           a.formState !== void 0 && (b = a.formState)),
//         (e = Im(t, 1, !0, e, a ?? null, n, l, b, s, u, h, uh)),
//         (e.context = th(null)),
//         (a = e.current),
//         (n = Ue()),
//         (n = Qn(n)),
//         (l = Ja(n)),
//         (l.callback = null),
//         Wa(a, l, n),
//         (a = n),
//         (e.current.lanes = a),
//         kt(e, a),
//         ca(e),
//         (t[Zn] = e.current),
//         pr(t),
//         new eo(e)
//       );
//     }),
//     (Di.version = "19.2.1"),
//     Di
//   );
// }
var Sh;
function Ty() {
  if (Sh) return Br.exports;
  Sh = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return (i(), (Br.exports = Ay()), Br.exports);
}
var zy = Ty(),
  O = go();
const K = eg(O),
  Hy = vy(
    {
      __proto__: null,
      default: K,
    },
    [O],
  );
// var Oy = (i, o, r, c, f, d, y, S) => {
//     let v = document.documentElement,
//       p = ["light", "dark"];
//     function x(C) {
//       ((Array.isArray(i) ? i : [i]).forEach((M) => {
//         let q = M === "class",
//           V = q && d ? f.map((k) => d[k] || k) : f;
//         q
//           ? (v.classList.remove(...V), v.classList.add(d && d[C] ? d[C] : C))
//           : v.setAttribute(M, C);
//       }),
//         m(C));
//     }
//     function m(C) {
//       S && p.includes(C) && (v.style.colorScheme = C);
//     }
//     function T() {
//       return window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light";
//     }
//     if (c) x(c);
//     else
//       try {
//         let C = localStorage.getItem(o) || r,
//           M = y && C === "system" ? T() : C;
//         x(M);
//       } catch {}
//   },
  jy = O.createContext(void 0),
  Cy = {
    setTheme: (i) => {},
    themes: [],
  },
  My = () => {
    var i;
    return (i = O.useContext(jy)) != null ? i : Cy;
  };
O.memo(
  ({
    forcedTheme: i,
    storageKey: o,
    attribute: r,
    enableSystem: c,
    enableColorScheme: f,
    defaultTheme: d,
    value: y,
    themes: S,
    nonce: v,
    scriptProps: p,
  }) => {
    let x = JSON.stringify([r, o, d, i, S, y, c, f]).slice(1, -1);
    return O.createElement("script", {
      ...p,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? v : "",
      dangerouslySetInnerHTML: {
        __html: `(${Oy.toString()})(${x})`,
      },
    });
  },
);
var cu = ag();
const _y = eg(cu);
function Ry(i) {
  if (typeof document > "u") return;
  let o = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    o.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = i)
      : r.appendChild(document.createTextNode(i)));
}
const Dy = (i) => {
    switch (i) {
      case "success":
        return Ly;
      case "info":
        return qy;
      case "warning":
        return Yy;
      case "error":
        return Gy;
      default:
        return null;
    }
  },
  Uy = Array(12).fill(0),
  By = ({ visible: i, className: o }) =>
    K.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", o].filter(Boolean).join(" "),
        "data-visible": i,
      },
      K.createElement(
        "div",
        {
          className: "sonner-spinner",
        },
        Uy.map((r, c) =>
          K.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${c}`,
          }),
        ),
      ),
    ),
  Ly = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    K.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  Yy = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    K.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  qy = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    K.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  Gy = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    K.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  ky = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    K.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18",
    }),
    K.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18",
    }),
  ),
  Vy = () => {
    const [i, o] = K.useState(document.hidden);
    return (
      K.useEffect(() => {
        const r = () => {
          o(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", r),
          () => window.removeEventListener("visibilitychange", r)
        );
      }, []),
      i
    );
  };
let Fr = 1;
class Xy {
  constructor() {
    ((this.subscribe = (o) => (
      this.subscribers.push(o),
      () => {
        const r = this.subscribers.indexOf(o);
        this.subscribers.splice(r, 1);
      }
    )),
      (this.publish = (o) => {
        this.subscribers.forEach((r) => r(o));
      }),
      (this.addToast = (o) => {
        (this.publish(o), (this.toasts = [...this.toasts, o]));
      }),
      (this.create = (o) => {
        var r;
        const { message: c, ...f } = o,
          d =
            typeof o?.id == "number" ||
            ((r = o.id) == null ? void 0 : r.length) > 0
              ? o.id
              : Fr++,
          y = this.toasts.find((v) => v.id === d),
          S = o.dismissible === void 0 ? !0 : o.dismissible;
        return (
          this.dismissedToasts.has(d) && this.dismissedToasts.delete(d),
          y
            ? (this.toasts = this.toasts.map((v) =>
                v.id === d
                  ? (this.publish({
                      ...v,
                      ...o,
                      id: d,
                      title: c,
                    }),
                    {
                      ...v,
                      ...o,
                      id: d,
                      dismissible: S,
                      title: c,
                    })
                  : v,
              ))
            : this.addToast({
                title: c,
                ...f,
                dismissible: S,
                id: d,
              }),
          d
        );
      }),
      (this.dismiss = (o) => (
        o
          ? (this.dismissedToasts.add(o),
            requestAnimationFrame(() =>
              this.subscribers.forEach((r) =>
                r({
                  id: o,
                  dismiss: !0,
                }),
              ),
            ))
          : this.toasts.forEach((r) => {
              this.subscribers.forEach((c) =>
                c({
                  id: r.id,
                  dismiss: !0,
                }),
              );
            }),
        o
      )),
      (this.message = (o, r) =>
        this.create({
          ...r,
          message: o,
        })),
      (this.error = (o, r) =>
        this.create({
          ...r,
          message: o,
          type: "error",
        })),
      (this.success = (o, r) =>
        this.create({
          ...r,
          type: "success",
          message: o,
        })),
      (this.info = (o, r) =>
        this.create({
          ...r,
          type: "info",
          message: o,
        })),
      (this.warning = (o, r) =>
        this.create({
          ...r,
          type: "warning",
          message: o,
        })),
      (this.loading = (o, r) =>
        this.create({
          ...r,
          type: "loading",
          message: o,
        })),
      (this.promise = (o, r) => {
        if (!r) return;
        let c;
        r.loading !== void 0 &&
          (c = this.create({
            ...r,
            promise: o,
            type: "loading",
            message: r.loading,
            description:
              typeof r.description != "function" ? r.description : void 0,
          }));
        const f = Promise.resolve(o instanceof Function ? o() : o);
        let d = c !== void 0,
          y;
        const S = f
            .then(async (p) => {
              if (((y = ["resolve", p]), K.isValidElement(p)))
                ((d = !1),
                  this.create({
                    id: c,
                    type: "default",
                    message: p,
                  }));
              else if (Zy(p) && !p.ok) {
                d = !1;
                const m =
                    typeof r.error == "function"
                      ? await r.error(`HTTP error! status: ${p.status}`)
                      : r.error,
                  T =
                    typeof r.description == "function"
                      ? await r.description(`HTTP error! status: ${p.status}`)
                      : r.description,
                  M =
                    typeof m == "object" && !K.isValidElement(m)
                      ? m
                      : {
                          message: m,
                        };
                this.create({
                  id: c,
                  type: "error",
                  description: T,
                  ...M,
                });
              } else if (p instanceof Error) {
                d = !1;
                const m =
                    typeof r.error == "function" ? await r.error(p) : r.error,
                  T =
                    typeof r.description == "function"
                      ? await r.description(p)
                      : r.description,
                  M =
                    typeof m == "object" && !K.isValidElement(m)
                      ? m
                      : {
                          message: m,
                        };
                this.create({
                  id: c,
                  type: "error",
                  description: T,
                  ...M,
                });
              } else if (r.success !== void 0) {
                d = !1;
                const m =
                    typeof r.success == "function"
                      ? await r.success(p)
                      : r.success,
                  T =
                    typeof r.description == "function"
                      ? await r.description(p)
                      : r.description,
                  M =
                    typeof m == "object" && !K.isValidElement(m)
                      ? m
                      : {
                          message: m,
                        };
                this.create({
                  id: c,
                  type: "success",
                  description: T,
                  ...M,
                });
              }
            })
            .catch(async (p) => {
              if (((y = ["reject", p]), r.error !== void 0)) {
                d = !1;
                const x =
                    typeof r.error == "function" ? await r.error(p) : r.error,
                  m =
                    typeof r.description == "function"
                      ? await r.description(p)
                      : r.description,
                  C =
                    typeof x == "object" && !K.isValidElement(x)
                      ? x
                      : {
                          message: x,
                        };
                this.create({
                  id: c,
                  type: "error",
                  description: m,
                  ...C,
                });
              }
            })
            .finally(() => {
              (d && (this.dismiss(c), (c = void 0)),
                r.finally == null || r.finally.call(r));
            }),
          v = () =>
            new Promise((p, x) =>
              S.then(() => (y[0] === "reject" ? x(y[1]) : p(y[1]))).catch(x),
            );
        return typeof c != "string" && typeof c != "number"
          ? {
              unwrap: v,
            }
          : Object.assign(c, {
              unwrap: v,
            });
      }),
      (this.custom = (o, r) => {
        const c = r?.id || Fr++;
        return (
          this.create({
            jsx: o(c),
            id: c,
            ...r,
          }),
          c
        );
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((o) => !this.dismissedToasts.has(o.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()));
  }
}
const ze = new Xy(),
  Qy = (i, o) => {
    const r = o?.id || Fr++;
    return (
      ze.addToast({
        title: i,
        ...o,
        id: r,
      }),
      r
    );
  },
  Zy = (i) =>
    i &&
    typeof i == "object" &&
    "ok" in i &&
    typeof i.ok == "boolean" &&
    "status" in i &&
    typeof i.status == "number",
  Ky = Qy,
  Jy = () => ze.toasts,
  Wy = () => ze.getActiveToasts();
Object.assign(
  Ky,
  {
    success: ze.success,
    info: ze.info,
    warning: ze.warning,
    error: ze.error,
    custom: ze.custom,
    message: ze.message,
    promise: ze.promise,
    dismiss: ze.dismiss,
    loading: ze.loading,
  },
  {
    getHistory: Jy,
    getToasts: Wy,
  },
);
Ry(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
function no(i) {
  return i.label !== void 0;
}
const $y = 3,
  Fy = "24px",
  Py = "16px",
  Eh = 4e3,
  Iy = 356,
  tv = 14,
  ev = 45,
  av = 200;
function ra(...i) {
  return i.filter(Boolean).join(" ");
}
function nv(i) {
  const [o, r] = i.split("-"),
    c = [];
  return (o && c.push(o), r && c.push(r), c);
}
const lv = (i) => {
  var o, r, c, f, d, y, S, v, p;
  const {
      invert: x,
      toast: m,
      unstyled: T,
      interacting: C,
      setHeights: M,
      visibleToasts: q,
      heights: V,
      index: k,
      toasts: P,
      expanded: J,
      removeToast: $,
      defaultRichColors: I,
      closeButton: lt,
      style: Q,
      cancelButtonStyle: Z,
      actionButtonStyle: mt,
      className: St = "",
      descriptionClassName: Ht = "",
      duration: gt,
      position: pt,
      gap: vt,
      expandByDefault: bt,
      classNames: N,
      icons: L,
      closeButtonAriaLabel: _ = "Close toast",
    } = i,
    [it, ct] = K.useState(null),
    [E, B] = K.useState(null),
    [U, X] = K.useState(!1),
    [W, st] = K.useState(!1),
    [at, ut] = K.useState(!1),
    [Tt, ae] = K.useState(!1),
    [de, ne] = K.useState(!1),
    [ha, We] = K.useState(0),
    [Yl, kn] = K.useState(0),
    gn = K.useRef(m.duration || gt || Eh),
    ql = K.useRef(null),
    Oe = K.useRef(null),
    Gl = k === 0,
    kl = k + 1 <= q,
    me = m.type,
    La = m.dismissible !== !1,
    he = m.className || "",
    No = m.descriptionClassName || "",
    pn = K.useMemo(
      () => V.findIndex((ft) => ft.toastId === m.id) || 0,
      [V, m.id],
    ),
    Vi = K.useMemo(() => {
      var ft;
      return (ft = m.closeButton) != null ? ft : lt;
    }, [m.closeButton, lt]),
    yn = K.useMemo(() => m.duration || gt || Eh, [m.duration, gt]),
    Vl = K.useRef(0),
    ga = K.useRef(0),
    Xi = K.useRef(0),
    Ya = K.useRef(null),
    [vn, ge] = pt.split("-"),
    $e = K.useMemo(
      () => V.reduce((ft, qt, It) => (It >= pn ? ft : ft + qt.height), 0),
      [V, pn],
    ),
    re = Vy(),
    Ao = m.invert || x,
    Xl = me === "loading";
  ((ga.current = K.useMemo(() => pn * vt + $e, [pn, $e])),
    K.useEffect(() => {
      gn.current = yn;
    }, [yn]),
    K.useEffect(() => {
      X(!0);
    }, []),
    K.useEffect(() => {
      const ft = Oe.current;
      if (ft) {
        const qt = ft.getBoundingClientRect().height;
        return (
          kn(qt),
          M((It) => [
            {
              toastId: m.id,
              height: qt,
              position: m.position,
            },
            ...It,
          ]),
          () => M((It) => It.filter((ue) => ue.toastId !== m.id))
        );
      }
    }, [M, m.id]),
    K.useLayoutEffect(() => {
      if (!U) return;
      const ft = Oe.current,
        qt = ft.style.height;
      ft.style.height = "auto";
      const It = ft.getBoundingClientRect().height;
      ((ft.style.height = qt),
        kn(It),
        M((ue) =>
          ue.find((kt) => kt.toastId === m.id)
            ? ue.map((kt) =>
                kt.toastId === m.id
                  ? {
                      ...kt,
                      height: It,
                    }
                  : kt,
              )
            : [
                {
                  toastId: m.id,
                  height: It,
                  position: m.position,
                },
                ...ue,
              ],
        ));
    }, [U, m.title, m.description, M, m.id, m.jsx, m.action, m.cancel]));
  const na = K.useCallback(() => {
    (st(!0),
      We(ga.current),
      M((ft) => ft.filter((qt) => qt.toastId !== m.id)),
      setTimeout(() => {
        $(m);
      }, av));
  }, [m, $, M, ga]);
  (K.useEffect(() => {
    if (
      (m.promise && me === "loading") ||
      m.duration === 1 / 0 ||
      m.type === "loading"
    )
      return;
    let ft;
    return (
      J || C || re
        ? (() => {
            if (Xi.current < Vl.current) {
              const ue = new Date().getTime() - Vl.current;
              gn.current = gn.current - ue;
            }
            Xi.current = new Date().getTime();
          })()
        : (() => {
            gn.current !== 1 / 0 &&
              ((Vl.current = new Date().getTime()),
              (ft = setTimeout(() => {
                (m.onAutoClose == null || m.onAutoClose.call(m, m), na());
              }, gn.current)));
          })(),
      () => clearTimeout(ft)
    );
  }, [J, C, m, me, re, na]),
    K.useEffect(() => {
      m.delete && (na(), m.onDismiss == null || m.onDismiss.call(m, m));
    }, [na, m.delete]));
  function Vn() {
    var ft;
    if (L?.loading) {
      var qt;
      return K.createElement(
        "div",
        {
          className: ra(
            N?.loader,
            m == null || (qt = m.classNames) == null ? void 0 : qt.loader,
            "sonner-loader",
          ),
          "data-visible": me === "loading",
        },
        L.loading,
      );
    }
    return K.createElement(By, {
      className: ra(
        N?.loader,
        m == null || (ft = m.classNames) == null ? void 0 : ft.loader,
      ),
      visible: me === "loading",
    });
  }
  const Xn = m.icon || L?.[me] || Dy(me);
  var xn, la;
  return K.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Oe,
      className: ra(
        St,
        he,
        N?.toast,
        m == null || (o = m.classNames) == null ? void 0 : o.toast,
        N?.default,
        N?.[me],
        m == null || (r = m.classNames) == null ? void 0 : r[me],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (xn = m.richColors) != null ? xn : I,
      "data-styled": !(m.jsx || m.unstyled || T),
      "data-mounted": U,
      "data-promise": !!m.promise,
      "data-swiped": de,
      "data-removed": W,
      "data-visible": kl,
      "data-y-position": vn,
      "data-x-position": ge,
      "data-index": k,
      "data-front": Gl,
      "data-swiping": at,
      "data-dismissible": La,
      "data-type": me,
      "data-invert": Ao,
      "data-swipe-out": Tt,
      "data-swipe-direction": E,
      "data-expanded": !!(J || (bt && U)),
      "data-testid": m.testId,
      style: {
        "--index": k,
        "--toasts-before": k,
        "--z-index": P.length - k,
        "--offset": `${W ? ha : ga.current}px`,
        "--initial-height": bt ? "auto" : `${Yl}px`,
        ...Q,
        ...m.style,
      },
      onDragEnd: () => {
        (ut(!1), ct(null), (Ya.current = null));
      },
      onPointerDown: (ft) => {
        ft.button !== 2 &&
          (Xl ||
            !La ||
            ((ql.current = new Date()),
            We(ga.current),
            ft.target.setPointerCapture(ft.pointerId),
            ft.target.tagName !== "BUTTON" &&
              (ut(!0),
              (Ya.current = {
                x: ft.clientX,
                y: ft.clientY,
              }))));
      },
      onPointerUp: () => {
        var ft, qt, It;
        if (Tt || !La) return;
        Ya.current = null;
        const ue = Number(
            ((ft = Oe.current) == null
              ? void 0
              : ft.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          qa = Number(
            ((qt = Oe.current) == null
              ? void 0
              : qt.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          kt =
            new Date().getTime() -
            ((It = ql.current) == null ? void 0 : It.getTime()),
          ye = it === "x" ? ue : qa,
          bn = Math.abs(ye) / kt;
        if (Math.abs(ye) >= ev || bn > 0.11) {
          (We(ga.current),
            m.onDismiss == null || m.onDismiss.call(m, m),
            B(
              it === "x" ? (ue > 0 ? "right" : "left") : qa > 0 ? "down" : "up",
            ),
            na(),
            ae(!0));
          return;
        } else {
          var ve, xe;
          ((ve = Oe.current) == null ||
            ve.style.setProperty("--swipe-amount-x", "0px"),
            (xe = Oe.current) == null ||
              xe.style.setProperty("--swipe-amount-y", "0px"));
        }
        (ne(!1), ut(!1), ct(null));
      },
      onPointerMove: (ft) => {
        var qt, It, ue;
        if (
          !Ya.current ||
          !La ||
          ((qt = window.getSelection()) == null
            ? void 0
            : qt.toString().length) > 0
        )
          return;
        const kt = ft.clientY - Ya.current.y,
          ye = ft.clientX - Ya.current.x;
        var bn;
        const ve = (bn = i.swipeDirections) != null ? bn : nv(pt);
        !it &&
          (Math.abs(ye) > 1 || Math.abs(kt) > 1) &&
          ct(Math.abs(ye) > Math.abs(kt) ? "x" : "y");
        let xe = {
          x: 0,
          y: 0,
        };
        const Qn = (Fe) => 1 / (1.5 + Math.abs(Fe) / 20);
        if (it === "y") {
          if (ve.includes("top") || ve.includes("bottom"))
            if (
              (ve.includes("top") && kt < 0) ||
              (ve.includes("bottom") && kt > 0)
            )
              xe.y = kt;
            else {
              const Fe = kt * Qn(kt);
              xe.y = Math.abs(Fe) < Math.abs(kt) ? Fe : kt;
            }
        } else if (it === "x" && (ve.includes("left") || ve.includes("right")))
          if (
            (ve.includes("left") && ye < 0) ||
            (ve.includes("right") && ye > 0)
          )
            xe.x = ye;
          else {
            const Fe = ye * Qn(ye);
            xe.x = Math.abs(Fe) < Math.abs(ye) ? Fe : ye;
          }
        ((Math.abs(xe.x) > 0 || Math.abs(xe.y) > 0) && ne(!0),
          (It = Oe.current) == null ||
            It.style.setProperty("--swipe-amount-x", `${xe.x}px`),
          (ue = Oe.current) == null ||
            ue.style.setProperty("--swipe-amount-y", `${xe.y}px`));
      },
    },
    Vi && !m.jsx && me !== "loading"
      ? K.createElement(
          "button",
          {
            "aria-label": _,
            "data-disabled": Xl,
            "data-close-button": !0,
            onClick:
              Xl || !La
                ? () => {}
                : () => {
                    (na(), m.onDismiss == null || m.onDismiss.call(m, m));
                  },
            className: ra(
              N?.closeButton,
              m == null || (c = m.classNames) == null ? void 0 : c.closeButton,
            ),
          },
          (la = L?.close) != null ? la : ky,
        )
      : null,
    (me || m.icon || m.promise) &&
      m.icon !== null &&
      (L?.[me] !== null || m.icon)
      ? K.createElement(
          "div",
          {
            "data-icon": "",
            className: ra(
              N?.icon,
              m == null || (f = m.classNames) == null ? void 0 : f.icon,
            ),
          },
          m.promise || (m.type === "loading" && !m.icon)
            ? m.icon || Vn()
            : null,
          m.type !== "loading" ? Xn : null,
        )
      : null,
    K.createElement(
      "div",
      {
        "data-content": "",
        className: ra(
          N?.content,
          m == null || (d = m.classNames) == null ? void 0 : d.content,
        ),
      },
      K.createElement(
        "div",
        {
          "data-title": "",
          className: ra(
            N?.title,
            m == null || (y = m.classNames) == null ? void 0 : y.title,
          ),
        },
        m.jsx ? m.jsx : typeof m.title == "function" ? m.title() : m.title,
      ),
      m.description
        ? K.createElement(
            "div",
            {
              "data-description": "",
              className: ra(
                Ht,
                No,
                N?.description,
                m == null || (S = m.classNames) == null
                  ? void 0
                  : S.description,
              ),
            },
            typeof m.description == "function"
              ? m.description()
              : m.description,
          )
        : null,
    ),
    K.isValidElement(m.cancel)
      ? m.cancel
      : m.cancel && no(m.cancel)
        ? K.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: m.cancelButtonStyle || Z,
              onClick: (ft) => {
                no(m.cancel) &&
                  La &&
                  (m.cancel.onClick == null ||
                    m.cancel.onClick.call(m.cancel, ft),
                  na());
              },
              className: ra(
                N?.cancelButton,
                m == null || (v = m.classNames) == null
                  ? void 0
                  : v.cancelButton,
              ),
            },
            m.cancel.label,
          )
        : null,
    K.isValidElement(m.action)
      ? m.action
      : m.action && no(m.action)
        ? K.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: m.actionButtonStyle || mt,
              onClick: (ft) => {
                no(m.action) &&
                  (m.action.onClick == null ||
                    m.action.onClick.call(m.action, ft),
                  !ft.defaultPrevented && na());
              },
              className: ra(
                N?.actionButton,
                m == null || (p = m.classNames) == null
                  ? void 0
                  : p.actionButton,
              ),
            },
            m.action.label,
          )
        : null,
  );
};
function wh() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const i = document.documentElement.getAttribute("dir");
  return i === "auto" || !i
    ? window.getComputedStyle(document.documentElement).direction
    : i;
}
function iv(i, o) {
  const r = {};
  return (
    [i, o].forEach((c, f) => {
      const d = f === 1,
        y = d ? "--mobile-offset" : "--offset",
        S = d ? Py : Fy;
      function v(p) {
        ["top", "right", "bottom", "left"].forEach((x) => {
          r[`${y}-${x}`] = typeof p == "number" ? `${p}px` : p;
        });
      }
      typeof c == "number" || typeof c == "string"
        ? v(c)
        : typeof c == "object"
          ? ["top", "right", "bottom", "left"].forEach((p) => {
              c[p] === void 0
                ? (r[`${y}-${p}`] = S)
                : (r[`${y}-${p}`] =
                    typeof c[p] == "number" ? `${c[p]}px` : c[p]);
            })
          : v(S);
    }),
    r
  );
}
const sv = K.forwardRef(function (o, r) {
    const {
        id: c,
        invert: f,
        position: d = "bottom-right",
        hotkey: y = ["altKey", "KeyT"],
        expand: S,
        closeButton: v,
        className: p,
        offset: x,
        mobileOffset: m,
        theme: T = "light",
        richColors: C,
        duration: M,
        style: q,
        visibleToasts: V = $y,
        toastOptions: k,
        dir: P = wh(),
        gap: J = tv,
        icons: $,
        containerAriaLabel: I = "Notifications",
      } = o,
      [lt, Q] = K.useState([]),
      Z = K.useMemo(
        () =>
          c
            ? lt.filter((U) => U.toasterId === c)
            : lt.filter((U) => !U.toasterId),
        [lt, c],
      ),
      mt = K.useMemo(
        () =>
          Array.from(
            new Set(
              [d].concat(Z.filter((U) => U.position).map((U) => U.position)),
            ),
          ),
        [Z, d],
      ),
      [St, Ht] = K.useState([]),
      [gt, pt] = K.useState(!1),
      [vt, bt] = K.useState(!1),
      [N, L] = K.useState(
        T !== "system"
          ? T
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
      ),
      _ = K.useRef(null),
      it = y.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      ct = K.useRef(null),
      E = K.useRef(!1),
      B = K.useCallback((U) => {
        Q((X) => {
          var W;
          return (
            ((W = X.find((st) => st.id === U.id)) != null && W.delete) ||
              ze.dismiss(U.id),
            X.filter(({ id: st }) => st !== U.id)
          );
        });
      }, []);
    return (
      K.useEffect(
        () =>
          ze.subscribe((U) => {
            if (U.dismiss) {
              requestAnimationFrame(() => {
                Q((X) =>
                  X.map((W) =>
                    W.id === U.id
                      ? {
                          ...W,
                          delete: !0,
                        }
                      : W,
                  ),
                );
              });
              return;
            }
            setTimeout(() => {
              _y.flushSync(() => {
                Q((X) => {
                  const W = X.findIndex((st) => st.id === U.id);
                  return W !== -1
                    ? [
                        ...X.slice(0, W),
                        {
                          ...X[W],
                          ...U,
                        },
                        ...X.slice(W + 1),
                      ]
                    : [U, ...X];
                });
              });
            });
          }),
        [lt],
      ),
      K.useEffect(() => {
        if (T !== "system") {
          L(T);
          return;
        }
        if (
          (T === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? L("dark")
              : L("light")),
          typeof window > "u")
        )
          return;
        const U = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          U.addEventListener("change", ({ matches: X }) => {
            L(X ? "dark" : "light");
          });
        } catch {
          U.addListener(({ matches: W }) => {
            try {
              L(W ? "dark" : "light");
            } catch (st) {
              console.error(st);
            }
          });
        }
      }, [T]),
      K.useEffect(() => {
        lt.length <= 1 && pt(!1);
      }, [lt]),
      K.useEffect(() => {
        const U = (X) => {
          var W;
          if (y.every((ut) => X[ut] || X.code === ut)) {
            var at;
            (pt(!0), (at = _.current) == null || at.focus());
          }
          X.code === "Escape" &&
            (document.activeElement === _.current ||
              ((W = _.current) != null &&
                W.contains(document.activeElement))) &&
            pt(!1);
        };
        return (
          document.addEventListener("keydown", U),
          () => document.removeEventListener("keydown", U)
        );
      }, [y]),
      K.useEffect(() => {
        if (_.current)
          return () => {
            ct.current &&
              (ct.current.focus({
                preventScroll: !0,
              }),
              (ct.current = null),
              (E.current = !1));
          };
      }, [_.current]),
      K.createElement(
        "section",
        {
          ref: r,
          "aria-label": `${I} ${it}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        mt.map((U, X) => {
          var W;
          const [st, at] = U.split("-");
          return Z.length
            ? K.createElement(
                "ol",
                {
                  key: U,
                  dir: P === "auto" ? wh() : P,
                  tabIndex: -1,
                  ref: _,
                  className: p,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": N,
                  "data-y-position": st,
                  "data-x-position": at,
                  style: {
                    "--front-toast-height": `${((W = St[0]) == null ? void 0 : W.height) || 0}px`,
                    "--width": `${Iy}px`,
                    "--gap": `${J}px`,
                    ...q,
                    ...iv(x, m),
                  },
                  onBlur: (ut) => {
                    E.current &&
                      !ut.currentTarget.contains(ut.relatedTarget) &&
                      ((E.current = !1),
                      ct.current &&
                        (ct.current.focus({
                          preventScroll: !0,
                        }),
                        (ct.current = null)));
                  },
                  onFocus: (ut) => {
                    (ut.target instanceof HTMLElement &&
                      ut.target.dataset.dismissible === "false") ||
                      E.current ||
                      ((E.current = !0), (ct.current = ut.relatedTarget));
                  },
                  onMouseEnter: () => pt(!0),
                  onMouseMove: () => pt(!0),
                  onMouseLeave: () => {
                    vt || pt(!1);
                  },
                  onDragEnd: () => pt(!1),
                  onPointerDown: (ut) => {
                    (ut.target instanceof HTMLElement &&
                      ut.target.dataset.dismissible === "false") ||
                      bt(!0);
                  },
                  onPointerUp: () => bt(!1),
                },
                Z.filter(
                  (ut) => (!ut.position && X === 0) || ut.position === U,
                ).map((ut, Tt) => {
                  var ae, de;
                  return K.createElement(lv, {
                    key: ut.id,
                    icons: $,
                    index: Tt,
                    toast: ut,
                    defaultRichColors: C,
                    duration: (ae = k?.duration) != null ? ae : M,
                    className: k?.className,
                    descriptionClassName: k?.descriptionClassName,
                    invert: f,
                    visibleToasts: V,
                    closeButton: (de = k?.closeButton) != null ? de : v,
                    interacting: vt,
                    position: U,
                    style: k?.style,
                    unstyled: k?.unstyled,
                    classNames: k?.classNames,
                    cancelButtonStyle: k?.cancelButtonStyle,
                    actionButtonStyle: k?.actionButtonStyle,
                    closeButtonAriaLabel: k?.closeButtonAriaLabel,
                    removeToast: B,
                    toasts: Z.filter((ne) => ne.position == ut.position),
                    heights: St.filter((ne) => ne.position == ut.position),
                    setHeights: Ht,
                    expandByDefault: S,
                    gap: J,
                    expanded: gt,
                    swipeDirections: o.swipeDirections,
                  });
                }),
              )
            : null;
        }),
      )
    );
  }),
  ov = ({ ...i }) => {
    const { theme: o = "system" } = My();
    return g.jsx(sv, {
      "data-loc": "client/src/components/ui/sonner.tsx:8",
      theme: o,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      },
      ...i,
    });
  };
function Da(i, o, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (f) {
    if ((i?.(f), r === !1 || !f.defaultPrevented)) return o?.(f);
  };
}
function Nh(i, o) {
  if (typeof i == "function") return i(o);
  i != null && (i.current = o);
}
function ng(...i) {
  return (o) => {
    let r = !1;
    const c = i.map((f) => {
      const d = Nh(f, o);
      return (!r && typeof d == "function" && (r = !0), d);
    });
    if (r)
      return () => {
        for (let f = 0; f < c.length; f++) {
          const d = c[f];
          typeof d == "function" ? d() : Nh(i[f], null);
        }
      };
  };
}
function qn(...i) {
  return O.useCallback(ng(...i), i);
}
function lg(i, o = []) {
  let r = [];
  function c(d, y) {
    const S = O.createContext(y),
      v = r.length;
    r = [...r, y];
    const p = (m) => {
      const { scope: T, children: C, ...M } = m,
        q = T?.[i]?.[v] || S,
        V = O.useMemo(() => M, Object.values(M));
      return g.jsx(q.Provider, {
        value: V,
        children: C,
      });
    };
    p.displayName = d + "Provider";
    function x(m, T) {
      const C = T?.[i]?.[v] || S,
        M = O.useContext(C);
      if (M) return M;
      if (y !== void 0) return y;
      throw new Error(`\`${m}\` must be used within \`${d}\``);
    }
    return [p, x];
  }
  const f = () => {
    const d = r.map((y) => O.createContext(y));
    return function (S) {
      const v = S?.[i] || d;
      return O.useMemo(
        () => ({
          [`__scope${i}`]: {
            ...S,
            [i]: v,
          },
        }),
        [S, v],
      );
    };
  };
  return ((f.scopeName = i), [c, cv(f, ...o)]);
}
function cv(...i) {
  const o = i[0];
  if (i.length === 1) return o;
  const r = () => {
    const c = i.map((f) => ({
      useScope: f(),
      scopeName: f.scopeName,
    }));
    return function (d) {
      const y = c.reduce((S, { useScope: v, scopeName: p }) => {
        const m = v(d)[`__scope${p}`];
        return {
          ...S,
          ...m,
        };
      }, {});
      return O.useMemo(
        () => ({
          [`__scope${o.scopeName}`]: y,
        }),
        [y],
      );
    };
  };
  return ((r.scopeName = o.scopeName), r);
}
function ig(i) {
  const o = uv(i),
    r = O.forwardRef((c, f) => {
      const { children: d, ...y } = c,
        S = O.Children.toArray(d),
        v = S.find(dv);
      if (v) {
        const p = v.props.children,
          x = S.map((m) =>
            m === v
              ? O.Children.count(p) > 1
                ? O.Children.only(null)
                : O.isValidElement(p)
                  ? p.props.children
                  : null
              : m,
          );
        return g.jsx(o, {
          ...y,
          ref: f,
          children: O.isValidElement(p) ? O.cloneElement(p, void 0, x) : null,
        });
      }
      return g.jsx(o, {
        ...y,
        ref: f,
        children: d,
      });
    });
  return ((r.displayName = `${i}.Slot`), r);
}
var rv = ig("Slot");
function uv(i) {
  const o = O.forwardRef((r, c) => {
    const { children: f, ...d } = r;
    if (O.isValidElement(f)) {
      const y = hv(f),
        S = mv(d, f.props);
      return (
        f.type !== O.Fragment && (S.ref = c ? ng(c, y) : y),
        O.cloneElement(f, S)
      );
    }
    return O.Children.count(f) > 1 ? O.Children.only(null) : null;
  });
  return ((o.displayName = `${i}.SlotClone`), o);
}
var sg = Symbol("radix.slottable");
function fv(i) {
  const o = ({ children: r }) =>
    g.jsx(g.Fragment, {
      children: r,
    });
  return ((o.displayName = `${i}.Slottable`), (o.__radixId = sg), o);
}
function dv(i) {
  return (
    O.isValidElement(i) &&
    typeof i.type == "function" &&
    "__radixId" in i.type &&
    i.type.__radixId === sg
  );
}
function mv(i, o) {
  const r = {
    ...o,
  };
  for (const c in o) {
    const f = i[c],
      d = o[c];
    /^on[A-Z]/.test(c)
      ? f && d
        ? (r[c] = (...S) => {
            const v = d(...S);
            return (f(...S), v);
          })
        : f && (r[c] = f)
      : c === "style"
        ? (r[c] = {
            ...f,
            ...d,
          })
        : c === "className" && (r[c] = [f, d].filter(Boolean).join(" "));
  }
  return {
    ...i,
    ...r,
  };
}
function hv(i) {
  let o = Object.getOwnPropertyDescriptor(i.props, "ref")?.get,
    r = o && "isReactWarning" in o && o.isReactWarning;
  return r
    ? i.ref
    : ((o = Object.getOwnPropertyDescriptor(i, "ref")?.get),
      (r = o && "isReactWarning" in o && o.isReactWarning),
      r ? i.props.ref : i.props.ref || i.ref);
}
var gv = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Gn = gv.reduce((i, o) => {
    const r = ig(`Primitive.${o}`),
      c = O.forwardRef((f, d) => {
        const { asChild: y, ...S } = f,
          v = y ? r : o;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          g.jsx(v, {
            ...S,
            ref: d,
          })
        );
      });
    return (
      (c.displayName = `Primitive.${o}`),
      {
        ...i,
        [o]: c,
      }
    );
  }, {});
function pv(i, o) {
  i && cu.flushSync(() => i.dispatchEvent(o));
}
function po(i) {
  const o = O.useRef(i);
  return (
    O.useEffect(() => {
      o.current = i;
    }),
    O.useMemo(
      () =>
        (...r) =>
          o.current?.(...r),
      [],
    )
  );
}
function yv(i, o = globalThis?.document) {
  const r = po(i);
  O.useEffect(() => {
    const c = (f) => {
      f.key === "Escape" && r(f);
    };
    return (
      o.addEventListener("keydown", c, {
        capture: !0,
      }),
      () =>
        o.removeEventListener("keydown", c, {
          capture: !0,
        })
    );
  }, [r, o]);
}
var vv = "DismissableLayer",
  Pr = "dismissableLayer.update",
  xv = "dismissableLayer.pointerDownOutside",
  bv = "dismissableLayer.focusOutside",
  Ah,
  og = O.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  cg = O.forwardRef((i, o) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: d,
        onInteractOutside: y,
        onDismiss: S,
        ...v
      } = i,
      p = O.useContext(og),
      [x, m] = O.useState(null),
      T = x?.ownerDocument ?? globalThis?.document,
      [, C] = O.useState({}),
      M = qn(o, (Q) => m(Q)),
      q = Array.from(p.layers),
      [V] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      k = q.indexOf(V),
      P = x ? q.indexOf(x) : -1,
      J = p.layersWithOutsidePointerEventsDisabled.size > 0,
      $ = P >= k,
      I = wv((Q) => {
        const Z = Q.target,
          mt = [...p.branches].some((St) => St.contains(Z));
        !$ || mt || (f?.(Q), y?.(Q), Q.defaultPrevented || S?.());
      }, T),
      lt = Nv((Q) => {
        const Z = Q.target;
        [...p.branches].some((St) => St.contains(Z)) ||
          (d?.(Q), y?.(Q), Q.defaultPrevented || S?.());
      }, T);
    return (
      yv((Q) => {
        P === p.layers.size - 1 &&
          (c?.(Q), !Q.defaultPrevented && S && (Q.preventDefault(), S()));
      }, T),
      O.useEffect(() => {
        if (x)
          return (
            r &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ah = T.body.style.pointerEvents),
                (T.body.style.pointerEvents = "none")),
              p.layersWithOutsidePointerEventsDisabled.add(x)),
            p.layers.add(x),
            Th(),
            () => {
              r &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (T.body.style.pointerEvents = Ah);
            }
          );
      }, [x, T, r, p]),
      O.useEffect(
        () => () => {
          x &&
            (p.layers.delete(x),
            p.layersWithOutsidePointerEventsDisabled.delete(x),
            Th());
        },
        [x, p],
      ),
      O.useEffect(() => {
        const Q = () => C({});
        return (
          document.addEventListener(Pr, Q),
          () => document.removeEventListener(Pr, Q)
        );
      }, []),
      g.jsx(Gn.div, {
        ...v,
        ref: M,
        style: {
          pointerEvents: J ? ($ ? "auto" : "none") : void 0,
          ...i.style,
        },
        onFocusCapture: Da(i.onFocusCapture, lt.onFocusCapture),
        onBlurCapture: Da(i.onBlurCapture, lt.onBlurCapture),
        onPointerDownCapture: Da(
          i.onPointerDownCapture,
          I.onPointerDownCapture,
        ),
      })
    );
  });
cg.displayName = vv;
var Sv = "DismissableLayerBranch",
  Ev = O.forwardRef((i, o) => {
    const r = O.useContext(og),
      c = O.useRef(null),
      f = qn(o, c);
    return (
      O.useEffect(() => {
        const d = c.current;
        if (d)
          return (
            r.branches.add(d),
            () => {
              r.branches.delete(d);
            }
          );
      }, [r.branches]),
      g.jsx(Gn.div, {
        ...i,
        ref: f,
      })
    );
  });
Ev.displayName = Sv;
function wv(i, o = globalThis?.document) {
  const r = po(i),
    c = O.useRef(!1),
    f = O.useRef(() => {});
  return (
    O.useEffect(() => {
      const d = (S) => {
          if (S.target && !c.current) {
            let v = function () {
              rg(xv, r, p, {
                discrete: !0,
              });
            };
            const p = {
              originalEvent: S,
            };
            S.pointerType === "touch"
              ? (o.removeEventListener("click", f.current),
                (f.current = v),
                o.addEventListener("click", f.current, {
                  once: !0,
                }))
              : v();
          } else o.removeEventListener("click", f.current);
          c.current = !1;
        },
        y = window.setTimeout(() => {
          o.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        (window.clearTimeout(y),
          o.removeEventListener("pointerdown", d),
          o.removeEventListener("click", f.current));
      };
    }, [o, r]),
    {
      onPointerDownCapture: () => (c.current = !0),
    }
  );
}
function Nv(i, o = globalThis?.document) {
  const r = po(i),
    c = O.useRef(!1);
  return (
    O.useEffect(() => {
      const f = (d) => {
        d.target &&
          !c.current &&
          rg(
            bv,
            r,
            {
              originalEvent: d,
            },
            {
              discrete: !1,
            },
          );
      };
      return (
        o.addEventListener("focusin", f),
        () => o.removeEventListener("focusin", f)
      );
    }, [o, r]),
    {
      onFocusCapture: () => (c.current = !0),
      onBlurCapture: () => (c.current = !1),
    }
  );
}
function Th() {
  const i = new CustomEvent(Pr);
  document.dispatchEvent(i);
}
function rg(i, o, r, { discrete: c }) {
  const f = r.originalEvent.target,
    d = new CustomEvent(i, {
      bubbles: !1,
      cancelable: !0,
      detail: r,
    });
  (o &&
    f.addEventListener(i, o, {
      once: !0,
    }),
    c ? pv(f, d) : f.dispatchEvent(d));
}
var Bi = globalThis?.document ? O.useLayoutEffect : () => {};
const Av = ["top", "right", "bottom", "left"],
  mn = Math.min,
  Be = Math.max,
  uo = Math.round,
  lo = Math.floor,
  fa = (i) => ({
    x: i,
    y: i,
  }),
  Tv = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom",
  },
  zv = {
    start: "end",
    end: "start",
  };
function Ir(i, o, r) {
  return Be(i, mn(o, r));
}
function Ua(i, o) {
  return typeof i == "function" ? i(o) : i;
}
function Ba(i) {
  return i.split("-")[0];
}
function Dl(i) {
  return i.split("-")[1];
}
function ru(i) {
  return i === "x" ? "y" : "x";
}
function uu(i) {
  return i === "y" ? "height" : "width";
}
const Hv = new Set(["top", "bottom"]);
function ua(i) {
  return Hv.has(Ba(i)) ? "y" : "x";
}
function fu(i) {
  return ru(ua(i));
}
function Ov(i, o, r) {
  r === void 0 && (r = !1);
  const c = Dl(i),
    f = fu(i),
    d = uu(f);
  let y =
    f === "x"
      ? c === (r ? "end" : "start")
        ? "right"
        : "left"
      : c === "start"
        ? "bottom"
        : "top";
  return (o.reference[d] > o.floating[d] && (y = fo(y)), [y, fo(y)]);
}
function jv(i) {
  const o = fo(i);
  return [tu(i), o, tu(o)];
}
function tu(i) {
  return i.replace(/start|end/g, (o) => zv[o]);
}
const zh = ["left", "right"],
  Hh = ["right", "left"],
  Cv = ["top", "bottom"],
  Mv = ["bottom", "top"];
function _v(i, o, r) {
  switch (i) {
    case "top":
    case "bottom":
      return r ? (o ? Hh : zh) : o ? zh : Hh;
    case "left":
    case "right":
      return o ? Cv : Mv;
    default:
      return [];
  }
}
function Rv(i, o, r, c) {
  const f = Dl(i);
  let d = _v(Ba(i), r === "start", c);
  return (
    f && ((d = d.map((y) => y + "-" + f)), o && (d = d.concat(d.map(tu)))),
    d
  );
}
function fo(i) {
  return i.replace(/left|right|bottom|top/g, (o) => Tv[o]);
}
function Dv(i) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...i,
  };
}
function ug(i) {
  return typeof i != "number"
    ? Dv(i)
    : {
        top: i,
        right: i,
        bottom: i,
        left: i,
      };
}
function mo(i) {
  const { x: o, y: r, width: c, height: f } = i;
  return {
    width: c,
    height: f,
    top: r,
    left: o,
    right: o + c,
    bottom: r + f,
    x: o,
    y: r,
  };
}
function Oh(i, o, r) {
  let { reference: c, floating: f } = i;
  const d = ua(o),
    y = fu(o),
    S = uu(y),
    v = Ba(o),
    p = d === "y",
    x = c.x + c.width / 2 - f.width / 2,
    m = c.y + c.height / 2 - f.height / 2,
    T = c[S] / 2 - f[S] / 2;
  let C;
  switch (v) {
    case "top":
      C = {
        x,
        y: c.y - f.height,
      };
      break;
    case "bottom":
      C = {
        x,
        y: c.y + c.height,
      };
      break;
    case "right":
      C = {
        x: c.x + c.width,
        y: m,
      };
      break;
    case "left":
      C = {
        x: c.x - f.width,
        y: m,
      };
      break;
    default:
      C = {
        x: c.x,
        y: c.y,
      };
  }
  switch (Dl(o)) {
    case "start":
      C[y] -= T * (r && p ? -1 : 1);
      break;
    case "end":
      C[y] += T * (r && p ? -1 : 1);
      break;
  }
  return C;
}
const Uv = async (i, o, r) => {
  const {
      placement: c = "bottom",
      strategy: f = "absolute",
      middleware: d = [],
      platform: y,
    } = r,
    S = d.filter(Boolean),
    v = await (y.isRTL == null ? void 0 : y.isRTL(o));
  let p = await y.getElementRects({
      reference: i,
      floating: o,
      strategy: f,
    }),
    { x, y: m } = Oh(p, c, v),
    T = c,
    C = {},
    M = 0;
  for (let q = 0; q < S.length; q++) {
    const { name: V, fn: k } = S[q],
      {
        x: P,
        y: J,
        data: $,
        reset: I,
      } = await k({
        x,
        y: m,
        initialPlacement: c,
        placement: T,
        strategy: f,
        middlewareData: C,
        rects: p,
        platform: y,
        elements: {
          reference: i,
          floating: o,
        },
      });
    ((x = P ?? x),
      (m = J ?? m),
      (C = {
        ...C,
        [V]: {
          ...C[V],
          ...$,
        },
      }),
      I &&
        M <= 50 &&
        (M++,
        typeof I == "object" &&
          (I.placement && (T = I.placement),
          I.rects &&
            (p =
              I.rects === !0
                ? await y.getElementRects({
                    reference: i,
                    floating: o,
                    strategy: f,
                  })
                : I.rects),
          ({ x, y: m } = Oh(p, T, v))),
        (q = -1)));
  }
  return {
    x,
    y: m,
    placement: T,
    strategy: f,
    middlewareData: C,
  };
};
async function Li(i, o) {
  var r;
  o === void 0 && (o = {});
  const { x: c, y: f, platform: d, rects: y, elements: S, strategy: v } = i,
    {
      boundary: p = "clippingAncestors",
      rootBoundary: x = "viewport",
      elementContext: m = "floating",
      altBoundary: T = !1,
      padding: C = 0,
    } = Ua(o, i),
    M = ug(C),
    V = S[T ? (m === "floating" ? "reference" : "floating") : m],
    k = mo(
      await d.getClippingRect({
        element:
          (r = await (d.isElement == null ? void 0 : d.isElement(V))) == null ||
          r
            ? V
            : V.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(S.floating))),
        boundary: p,
        rootBoundary: x,
        strategy: v,
      }),
    ),
    P =
      m === "floating"
        ? {
            x: c,
            y: f,
            width: y.floating.width,
            height: y.floating.height,
          }
        : y.reference,
    J = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(S.floating)),
    $ = (await (d.isElement == null ? void 0 : d.isElement(J)))
      ? (await (d.getScale == null ? void 0 : d.getScale(J))) || {
          x: 1,
          y: 1,
        }
      : {
          x: 1,
          y: 1,
        },
    I = mo(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: S,
            rect: P,
            offsetParent: J,
            strategy: v,
          })
        : P,
    );
  return {
    top: (k.top - I.top + M.top) / $.y,
    bottom: (I.bottom - k.bottom + M.bottom) / $.y,
    left: (k.left - I.left + M.left) / $.x,
    right: (I.right - k.right + M.right) / $.x,
  };
}
const Bv = (i) => ({
    name: "arrow",
    options: i,
    async fn(o) {
      const {
          x: r,
          y: c,
          placement: f,
          rects: d,
          platform: y,
          elements: S,
          middlewareData: v,
        } = o,
        { element: p, padding: x = 0 } = Ua(i, o) || {};
      if (p == null) return {};
      const m = ug(x),
        T = {
          x: r,
          y: c,
        },
        C = fu(f),
        M = uu(C),
        q = await y.getDimensions(p),
        V = C === "y",
        k = V ? "top" : "left",
        P = V ? "bottom" : "right",
        J = V ? "clientHeight" : "clientWidth",
        $ = d.reference[M] + d.reference[C] - T[C] - d.floating[M],
        I = T[C] - d.reference[C],
        lt = await (y.getOffsetParent == null ? void 0 : y.getOffsetParent(p));
      let Q = lt ? lt[J] : 0;
      (!Q || !(await (y.isElement == null ? void 0 : y.isElement(lt)))) &&
        (Q = S.floating[J] || d.floating[M]);
      const Z = $ / 2 - I / 2,
        mt = Q / 2 - q[M] / 2 - 1,
        St = mn(m[k], mt),
        Ht = mn(m[P], mt),
        gt = St,
        pt = Q - q[M] - Ht,
        vt = Q / 2 - q[M] / 2 + Z,
        bt = Ir(gt, vt, pt),
        N =
          !v.arrow &&
          Dl(f) != null &&
          vt !== bt &&
          d.reference[M] / 2 - (vt < gt ? St : Ht) - q[M] / 2 < 0,
        L = N ? (vt < gt ? vt - gt : vt - pt) : 0;
      return {
        [C]: T[C] + L,
        data: {
          [C]: bt,
          centerOffset: vt - bt - L,
          ...(N && {
            alignmentOffset: L,
          }),
        },
        reset: N,
      };
    },
  }),
  Lv = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        name: "flip",
        options: i,
        async fn(o) {
          var r, c;
          const {
              placement: f,
              middlewareData: d,
              rects: y,
              initialPlacement: S,
              platform: v,
              elements: p,
            } = o,
            {
              mainAxis: x = !0,
              crossAxis: m = !0,
              fallbackPlacements: T,
              fallbackStrategy: C = "bestFit",
              fallbackAxisSideDirection: M = "none",
              flipAlignment: q = !0,
              ...V
            } = Ua(i, o);
          if ((r = d.arrow) != null && r.alignmentOffset) return {};
          const k = Ba(f),
            P = ua(S),
            J = Ba(S) === S,
            $ = await (v.isRTL == null ? void 0 : v.isRTL(p.floating)),
            I = T || (J || !q ? [fo(S)] : jv(S)),
            lt = M !== "none";
          !T && lt && I.push(...Rv(S, q, M, $));
          const Q = [S, ...I],
            Z = await Li(o, V),
            mt = [];
          let St = ((c = d.flip) == null ? void 0 : c.overflows) || [];
          if ((x && mt.push(Z[k]), m)) {
            const vt = Ov(f, y, $);
            mt.push(Z[vt[0]], Z[vt[1]]);
          }
          if (
            ((St = [
              ...St,
              {
                placement: f,
                overflows: mt,
              },
            ]),
            !mt.every((vt) => vt <= 0))
          ) {
            var Ht, gt;
            const vt = (((Ht = d.flip) == null ? void 0 : Ht.index) || 0) + 1,
              bt = Q[vt];
            if (
              bt &&
              (!(m === "alignment" ? P !== ua(bt) : !1) ||
                St.every((_) =>
                  ua(_.placement) === P ? _.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: {
                  index: vt,
                  overflows: St,
                },
                reset: {
                  placement: bt,
                },
              };
            let N =
              (gt = St.filter((L) => L.overflows[0] <= 0).sort(
                (L, _) => L.overflows[1] - _.overflows[1],
              )[0]) == null
                ? void 0
                : gt.placement;
            if (!N)
              switch (C) {
                case "bestFit": {
                  var pt;
                  const L =
                    (pt = St.filter((_) => {
                      if (lt) {
                        const it = ua(_.placement);
                        return it === P || it === "y";
                      }
                      return !0;
                    })
                      .map((_) => [
                        _.placement,
                        _.overflows
                          .filter((it) => it > 0)
                          .reduce((it, ct) => it + ct, 0),
                      ])
                      .sort((_, it) => _[1] - it[1])[0]) == null
                      ? void 0
                      : pt[0];
                  L && (N = L);
                  break;
                }
                case "initialPlacement":
                  N = S;
                  break;
              }
            if (f !== N)
              return {
                reset: {
                  placement: N,
                },
              };
          }
          return {};
        },
      }
    );
  };
function jh(i, o) {
  return {
    top: i.top - o.height,
    right: i.right - o.width,
    bottom: i.bottom - o.height,
    left: i.left - o.width,
  };
}
function Ch(i) {
  return Av.some((o) => i[o] >= 0);
}
const Yv = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        name: "hide",
        options: i,
        async fn(o) {
          const { rects: r } = o,
            { strategy: c = "referenceHidden", ...f } = Ua(i, o);
          switch (c) {
            case "referenceHidden": {
              const d = await Li(o, {
                  ...f,
                  elementContext: "reference",
                }),
                y = jh(d, r.reference);
              return {
                data: {
                  referenceHiddenOffsets: y,
                  referenceHidden: Ch(y),
                },
              };
            }
            case "escaped": {
              const d = await Li(o, {
                  ...f,
                  altBoundary: !0,
                }),
                y = jh(d, r.floating);
              return {
                data: {
                  escapedOffsets: y,
                  escaped: Ch(y),
                },
              };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  fg = new Set(["left", "top"]);
async function qv(i, o) {
  const { placement: r, platform: c, elements: f } = i,
    d = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)),
    y = Ba(r),
    S = Dl(r),
    v = ua(r) === "y",
    p = fg.has(y) ? -1 : 1,
    x = d && v ? -1 : 1,
    m = Ua(o, i);
  let {
    mainAxis: T,
    crossAxis: C,
    alignmentAxis: M,
  } = typeof m == "number"
    ? {
        mainAxis: m,
        crossAxis: 0,
        alignmentAxis: null,
      }
    : {
        mainAxis: m.mainAxis || 0,
        crossAxis: m.crossAxis || 0,
        alignmentAxis: m.alignmentAxis,
      };
  return (
    S && typeof M == "number" && (C = S === "end" ? M * -1 : M),
    v
      ? {
          x: C * x,
          y: T * p,
        }
      : {
          x: T * p,
          y: C * x,
        }
  );
}
const Gv = function (i) {
    return (
      i === void 0 && (i = 0),
      {
        name: "offset",
        options: i,
        async fn(o) {
          var r, c;
          const { x: f, y: d, placement: y, middlewareData: S } = o,
            v = await qv(o, i);
          return y === ((r = S.offset) == null ? void 0 : r.placement) &&
            (c = S.arrow) != null &&
            c.alignmentOffset
            ? {}
            : {
                x: f + v.x,
                y: d + v.y,
                data: {
                  ...v,
                  placement: y,
                },
              };
        },
      }
    );
  },
  kv = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        name: "shift",
        options: i,
        async fn(o) {
          const { x: r, y: c, placement: f } = o,
            {
              mainAxis: d = !0,
              crossAxis: y = !1,
              limiter: S = {
                fn: (V) => {
                  let { x: k, y: P } = V;
                  return {
                    x: k,
                    y: P,
                  };
                },
              },
              ...v
            } = Ua(i, o),
            p = {
              x: r,
              y: c,
            },
            x = await Li(o, v),
            m = ua(Ba(f)),
            T = ru(m);
          let C = p[T],
            M = p[m];
          if (d) {
            const V = T === "y" ? "top" : "left",
              k = T === "y" ? "bottom" : "right",
              P = C + x[V],
              J = C - x[k];
            C = Ir(P, C, J);
          }
          if (y) {
            const V = m === "y" ? "top" : "left",
              k = m === "y" ? "bottom" : "right",
              P = M + x[V],
              J = M - x[k];
            M = Ir(P, M, J);
          }
          const q = S.fn({
            ...o,
            [T]: C,
            [m]: M,
          });
          return {
            ...q,
            data: {
              x: q.x - r,
              y: q.y - c,
              enabled: {
                [T]: d,
                [m]: y,
              },
            },
          };
        },
      }
    );
  },
  Vv = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        options: i,
        fn(o) {
          const { x: r, y: c, placement: f, rects: d, middlewareData: y } = o,
            { offset: S = 0, mainAxis: v = !0, crossAxis: p = !0 } = Ua(i, o),
            x = {
              x: r,
              y: c,
            },
            m = ua(f),
            T = ru(m);
          let C = x[T],
            M = x[m];
          const q = Ua(S, o),
            V =
              typeof q == "number"
                ? {
                    mainAxis: q,
                    crossAxis: 0,
                  }
                : {
                    mainAxis: 0,
                    crossAxis: 0,
                    ...q,
                  };
          if (v) {
            const J = T === "y" ? "height" : "width",
              $ = d.reference[T] - d.floating[J] + V.mainAxis,
              I = d.reference[T] + d.reference[J] - V.mainAxis;
            C < $ ? (C = $) : C > I && (C = I);
          }
          if (p) {
            var k, P;
            const J = T === "y" ? "width" : "height",
              $ = fg.has(Ba(f)),
              I =
                d.reference[m] -
                d.floating[J] +
                (($ && ((k = y.offset) == null ? void 0 : k[m])) || 0) +
                ($ ? 0 : V.crossAxis),
              lt =
                d.reference[m] +
                d.reference[J] +
                ($ ? 0 : ((P = y.offset) == null ? void 0 : P[m]) || 0) -
                ($ ? V.crossAxis : 0);
            M < I ? (M = I) : M > lt && (M = lt);
          }
          return {
            [T]: C,
            [m]: M,
          };
        },
      }
    );
  },
  Xv = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        name: "size",
        options: i,
        async fn(o) {
          var r, c;
          const { placement: f, rects: d, platform: y, elements: S } = o,
            { apply: v = () => {}, ...p } = Ua(i, o),
            x = await Li(o, p),
            m = Ba(f),
            T = Dl(f),
            C = ua(f) === "y",
            { width: M, height: q } = d.floating;
          let V, k;
          m === "top" || m === "bottom"
            ? ((V = m),
              (k =
                T ===
                ((await (y.isRTL == null ? void 0 : y.isRTL(S.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((k = m), (V = T === "end" ? "top" : "bottom"));
          const P = q - x.top - x.bottom,
            J = M - x.left - x.right,
            $ = mn(q - x[V], P),
            I = mn(M - x[k], J),
            lt = !o.middlewareData.shift;
          let Q = $,
            Z = I;
          if (
            ((r = o.middlewareData.shift) != null && r.enabled.x && (Z = J),
            (c = o.middlewareData.shift) != null && c.enabled.y && (Q = P),
            lt && !T)
          ) {
            const St = Be(x.left, 0),
              Ht = Be(x.right, 0),
              gt = Be(x.top, 0),
              pt = Be(x.bottom, 0);
            C
              ? (Z =
                  M -
                  2 * (St !== 0 || Ht !== 0 ? St + Ht : Be(x.left, x.right)))
              : (Q =
                  q -
                  2 * (gt !== 0 || pt !== 0 ? gt + pt : Be(x.top, x.bottom)));
          }
          await v({
            ...o,
            availableWidth: Z,
            availableHeight: Q,
          });
          const mt = await y.getDimensions(S.floating);
          return M !== mt.width || q !== mt.height
            ? {
                reset: {
                  rects: !0,
                },
              }
            : {};
        },
      }
    );
  };
function yo() {
  return typeof window < "u";
}
function Ul(i) {
  return dg(i) ? (i.nodeName || "").toLowerCase() : "#document";
}
function Le(i) {
  var o;
  return (
    (i == null || (o = i.ownerDocument) == null ? void 0 : o.defaultView) ||
    window
  );
}
function ma(i) {
  var o;
  return (o = (dg(i) ? i.ownerDocument : i.document) || window.document) == null
    ? void 0
    : o.documentElement;
}
function dg(i) {
  return yo() ? i instanceof Node || i instanceof Le(i).Node : !1;
}
function ea(i) {
  return yo() ? i instanceof Element || i instanceof Le(i).Element : !1;
}
function da(i) {
  return yo() ? i instanceof HTMLElement || i instanceof Le(i).HTMLElement : !1;
}
function Mh(i) {
  return !yo() || typeof ShadowRoot > "u"
    ? !1
    : i instanceof ShadowRoot || i instanceof Le(i).ShadowRoot;
}
const Qv = new Set(["inline", "contents"]);
function qi(i) {
  const { overflow: o, overflowX: r, overflowY: c, display: f } = aa(i);
  return /auto|scroll|overlay|hidden|clip/.test(o + c + r) && !Qv.has(f);
}
const Zv = new Set(["table", "td", "th"]);
function Kv(i) {
  return Zv.has(Ul(i));
}
const Jv = [":popover-open", ":modal"];
function vo(i) {
  return Jv.some((o) => {
    try {
      return i.matches(o);
    } catch {
      return !1;
    }
  });
}
const Wv = ["transform", "translate", "scale", "rotate", "perspective"],
  $v = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Fv = ["paint", "layout", "strict", "content"];
function du(i) {
  const o = mu(),
    r = ea(i) ? aa(i) : i;
  return (
    Wv.some((c) => (r[c] ? r[c] !== "none" : !1)) ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!o && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!o && (r.filter ? r.filter !== "none" : !1)) ||
    $v.some((c) => (r.willChange || "").includes(c)) ||
    Fv.some((c) => (r.contain || "").includes(c))
  );
}
function Pv(i) {
  let o = hn(i);
  for (; da(o) && !_l(o); ) {
    if (du(o)) return o;
    if (vo(o)) return null;
    o = hn(o);
  }
  return null;
}
function mu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Iv = new Set(["html", "body", "#document"]);
function _l(i) {
  return Iv.has(Ul(i));
}
function aa(i) {
  return Le(i).getComputedStyle(i);
}
function xo(i) {
  return ea(i)
    ? {
        scrollLeft: i.scrollLeft,
        scrollTop: i.scrollTop,
      }
    : {
        scrollLeft: i.scrollX,
        scrollTop: i.scrollY,
      };
}
function hn(i) {
  if (Ul(i) === "html") return i;
  const o = i.assignedSlot || i.parentNode || (Mh(i) && i.host) || ma(i);
  return Mh(o) ? o.host : o;
}
function mg(i) {
  const o = hn(i);
  return _l(o)
    ? i.ownerDocument
      ? i.ownerDocument.body
      : i.body
    : da(o) && qi(o)
      ? o
      : mg(o);
}
function Yi(i, o, r) {
  var c;
  (o === void 0 && (o = []), r === void 0 && (r = !0));
  const f = mg(i),
    d = f === ((c = i.ownerDocument) == null ? void 0 : c.body),
    y = Le(f);
  if (d) {
    const S = eu(y);
    return o.concat(
      y,
      y.visualViewport || [],
      qi(f) ? f : [],
      S && r ? Yi(S) : [],
    );
  }
  return o.concat(f, Yi(f, [], r));
}
function eu(i) {
  return i.parent && Object.getPrototypeOf(i.parent) ? i.frameElement : null;
}
function hg(i) {
  const o = aa(i);
  let r = parseFloat(o.width) || 0,
    c = parseFloat(o.height) || 0;
  const f = da(i),
    d = f ? i.offsetWidth : r,
    y = f ? i.offsetHeight : c,
    S = uo(r) !== d || uo(c) !== y;
  return (
    S && ((r = d), (c = y)),
    {
      width: r,
      height: c,
      $: S,
    }
  );
}
function hu(i) {
  return ea(i) ? i : i.contextElement;
}
function Ml(i) {
  const o = hu(i);
  if (!da(o)) return fa(1);
  const r = o.getBoundingClientRect(),
    { width: c, height: f, $: d } = hg(o);
  let y = (d ? uo(r.width) : r.width) / c,
    S = (d ? uo(r.height) : r.height) / f;
  return (
    (!y || !Number.isFinite(y)) && (y = 1),
    (!S || !Number.isFinite(S)) && (S = 1),
    {
      x: y,
      y: S,
    }
  );
}
const tx = fa(0);
function gg(i) {
  const o = Le(i);
  return !mu() || !o.visualViewport
    ? tx
    : {
        x: o.visualViewport.offsetLeft,
        y: o.visualViewport.offsetTop,
      };
}
function ex(i, o, r) {
  return (o === void 0 && (o = !1), !r || (o && r !== Le(i)) ? !1 : o);
}
function Yn(i, o, r, c) {
  (o === void 0 && (o = !1), r === void 0 && (r = !1));
  const f = i.getBoundingClientRect(),
    d = hu(i);
  let y = fa(1);
  o && (c ? ea(c) && (y = Ml(c)) : (y = Ml(i)));
  const S = ex(d, r, c) ? gg(d) : fa(0);
  let v = (f.left + S.x) / y.x,
    p = (f.top + S.y) / y.y,
    x = f.width / y.x,
    m = f.height / y.y;
  if (d) {
    const T = Le(d),
      C = c && ea(c) ? Le(c) : c;
    let M = T,
      q = eu(M);
    for (; q && c && C !== M; ) {
      const V = Ml(q),
        k = q.getBoundingClientRect(),
        P = aa(q),
        J = k.left + (q.clientLeft + parseFloat(P.paddingLeft)) * V.x,
        $ = k.top + (q.clientTop + parseFloat(P.paddingTop)) * V.y;
      ((v *= V.x),
        (p *= V.y),
        (x *= V.x),
        (m *= V.y),
        (v += J),
        (p += $),
        (M = Le(q)),
        (q = eu(M)));
    }
  }
  return mo({
    width: x,
    height: m,
    x: v,
    y: p,
  });
}
function bo(i, o) {
  const r = xo(i).scrollLeft;
  return o ? o.left + r : Yn(ma(i)).left + r;
}
function pg(i, o) {
  const r = i.getBoundingClientRect(),
    c = r.left + o.scrollLeft - bo(i, r),
    f = r.top + o.scrollTop;
  return {
    x: c,
    y: f,
  };
}
function ax(i) {
  let { elements: o, rect: r, offsetParent: c, strategy: f } = i;
  const d = f === "fixed",
    y = ma(c),
    S = o ? vo(o.floating) : !1;
  if (c === y || (S && d)) return r;
  let v = {
      scrollLeft: 0,
      scrollTop: 0,
    },
    p = fa(1);
  const x = fa(0),
    m = da(c);
  if (
    (m || (!m && !d)) &&
    ((Ul(c) !== "body" || qi(y)) && (v = xo(c)), da(c))
  ) {
    const C = Yn(c);
    ((p = Ml(c)), (x.x = C.x + c.clientLeft), (x.y = C.y + c.clientTop));
  }
  const T = y && !m && !d ? pg(y, v) : fa(0);
  return {
    width: r.width * p.x,
    height: r.height * p.y,
    x: r.x * p.x - v.scrollLeft * p.x + x.x + T.x,
    y: r.y * p.y - v.scrollTop * p.y + x.y + T.y,
  };
}
function nx(i) {
  return Array.from(i.getClientRects());
}
function lx(i) {
  const o = ma(i),
    r = xo(i),
    c = i.ownerDocument.body,
    f = Be(o.scrollWidth, o.clientWidth, c.scrollWidth, c.clientWidth),
    d = Be(o.scrollHeight, o.clientHeight, c.scrollHeight, c.clientHeight);
  let y = -r.scrollLeft + bo(i);
  const S = -r.scrollTop;
  return (
    aa(c).direction === "rtl" && (y += Be(o.clientWidth, c.clientWidth) - f),
    {
      width: f,
      height: d,
      x: y,
      y: S,
    }
  );
}
const _h = 25;
function ix(i, o) {
  const r = Le(i),
    c = ma(i),
    f = r.visualViewport;
  let d = c.clientWidth,
    y = c.clientHeight,
    S = 0,
    v = 0;
  if (f) {
    ((d = f.width), (y = f.height));
    const x = mu();
    (!x || (x && o === "fixed")) && ((S = f.offsetLeft), (v = f.offsetTop));
  }
  const p = bo(c);
  if (p <= 0) {
    const x = c.ownerDocument,
      m = x.body,
      T = getComputedStyle(m),
      C =
        (x.compatMode === "CSS1Compat" &&
          parseFloat(T.marginLeft) + parseFloat(T.marginRight)) ||
        0,
      M = Math.abs(c.clientWidth - m.clientWidth - C);
    M <= _h && (d -= M);
  } else p <= _h && (d += p);
  return {
    width: d,
    height: y,
    x: S,
    y: v,
  };
}
const sx = new Set(["absolute", "fixed"]);
function ox(i, o) {
  const r = Yn(i, !0, o === "fixed"),
    c = r.top + i.clientTop,
    f = r.left + i.clientLeft,
    d = da(i) ? Ml(i) : fa(1),
    y = i.clientWidth * d.x,
    S = i.clientHeight * d.y,
    v = f * d.x,
    p = c * d.y;
  return {
    width: y,
    height: S,
    x: v,
    y: p,
  };
}
function Rh(i, o, r) {
  let c;
  if (o === "viewport") c = ix(i, r);
  else if (o === "document") c = lx(ma(i));
  else if (ea(o)) c = ox(o, r);
  else {
    const f = gg(i);
    c = {
      x: o.x - f.x,
      y: o.y - f.y,
      width: o.width,
      height: o.height,
    };
  }
  return mo(c);
}
function yg(i, o) {
  const r = hn(i);
  return r === o || !ea(r) || _l(r)
    ? !1
    : aa(r).position === "fixed" || yg(r, o);
}
function cx(i, o) {
  const r = o.get(i);
  if (r) return r;
  let c = Yi(i, [], !1).filter((S) => ea(S) && Ul(S) !== "body"),
    f = null;
  const d = aa(i).position === "fixed";
  let y = d ? hn(i) : i;
  for (; ea(y) && !_l(y); ) {
    const S = aa(y),
      v = du(y);
    (!v && S.position === "fixed" && (f = null),
      (
        d
          ? !v && !f
          : (!v && S.position === "static" && !!f && sx.has(f.position)) ||
            (qi(y) && !v && yg(i, y))
      )
        ? (c = c.filter((x) => x !== y))
        : (f = S),
      (y = hn(y)));
  }
  return (o.set(i, c), c);
}
function rx(i) {
  let { element: o, boundary: r, rootBoundary: c, strategy: f } = i;
  const y = [
      ...(r === "clippingAncestors"
        ? vo(o)
          ? []
          : cx(o, this._c)
        : [].concat(r)),
      c,
    ],
    S = y[0],
    v = y.reduce(
      (p, x) => {
        const m = Rh(o, x, f);
        return (
          (p.top = Be(m.top, p.top)),
          (p.right = mn(m.right, p.right)),
          (p.bottom = mn(m.bottom, p.bottom)),
          (p.left = Be(m.left, p.left)),
          p
        );
      },
      Rh(o, S, f),
    );
  return {
    width: v.right - v.left,
    height: v.bottom - v.top,
    x: v.left,
    y: v.top,
  };
}
function ux(i) {
  const { width: o, height: r } = hg(i);
  return {
    width: o,
    height: r,
  };
}
function fx(i, o, r) {
  const c = da(o),
    f = ma(o),
    d = r === "fixed",
    y = Yn(i, !0, d, o);
  let S = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  const v = fa(0);
  function p() {
    v.x = bo(f);
  }
  if (c || (!c && !d))
    if (((Ul(o) !== "body" || qi(f)) && (S = xo(o)), c)) {
      const C = Yn(o, !0, d, o);
      ((v.x = C.x + o.clientLeft), (v.y = C.y + o.clientTop));
    } else f && p();
  d && !c && f && p();
  const x = f && !c && !d ? pg(f, S) : fa(0),
    m = y.left + S.scrollLeft - v.x - x.x,
    T = y.top + S.scrollTop - v.y - x.y;
  return {
    x: m,
    y: T,
    width: y.width,
    height: y.height,
  };
}
function kr(i) {
  return aa(i).position === "static";
}
function Dh(i, o) {
  if (!da(i) || aa(i).position === "fixed") return null;
  if (o) return o(i);
  let r = i.offsetParent;
  return (ma(i) === r && (r = r.ownerDocument.body), r);
}
function vg(i, o) {
  const r = Le(i);
  if (vo(i)) return r;
  if (!da(i)) {
    let f = hn(i);
    for (; f && !_l(f); ) {
      if (ea(f) && !kr(f)) return f;
      f = hn(f);
    }
    return r;
  }
  let c = Dh(i, o);
  for (; c && Kv(c) && kr(c); ) c = Dh(c, o);
  return c && _l(c) && kr(c) && !du(c) ? r : c || Pv(i) || r;
}
const dx = async function (i) {
  const o = this.getOffsetParent || vg,
    r = this.getDimensions,
    c = await r(i.floating);
  return {
    reference: fx(i.reference, await o(i.floating), i.strategy),
    floating: {
      x: 0,
      y: 0,
      width: c.width,
      height: c.height,
    },
  };
};
function mx(i) {
  return aa(i).direction === "rtl";
}
const hx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ax,
  getDocumentElement: ma,
  getClippingRect: rx,
  getOffsetParent: vg,
  getElementRects: dx,
  getClientRects: nx,
  getDimensions: ux,
  getScale: Ml,
  isElement: ea,
  isRTL: mx,
};
function xg(i, o) {
  return (
    i.x === o.x && i.y === o.y && i.width === o.width && i.height === o.height
  );
}
function gx(i, o) {
  let r = null,
    c;
  const f = ma(i);
  function d() {
    var S;
    (clearTimeout(c), (S = r) == null || S.disconnect(), (r = null));
  }
  function y(S, v) {
    (S === void 0 && (S = !1), v === void 0 && (v = 1), d());
    const p = i.getBoundingClientRect(),
      { left: x, top: m, width: T, height: C } = p;
    if ((S || o(), !T || !C)) return;
    const M = lo(m),
      q = lo(f.clientWidth - (x + T)),
      V = lo(f.clientHeight - (m + C)),
      k = lo(x),
      J = {
        rootMargin: -M + "px " + -q + "px " + -V + "px " + -k + "px",
        threshold: Be(0, mn(1, v)) || 1,
      };
    let $ = !0;
    function I(lt) {
      const Q = lt[0].intersectionRatio;
      if (Q !== v) {
        if (!$) return y();
        Q
          ? y(!1, Q)
          : (c = setTimeout(() => {
              y(!1, 1e-7);
            }, 1e3));
      }
      (Q === 1 && !xg(p, i.getBoundingClientRect()) && y(), ($ = !1));
    }
    try {
      r = new IntersectionObserver(I, {
        ...J,
        root: f.ownerDocument,
      });
    } catch {
      r = new IntersectionObserver(I, J);
    }
    r.observe(i);
  }
  return (y(!0), d);
}
function px(i, o, r, c) {
  c === void 0 && (c = {});
  const {
      ancestorScroll: f = !0,
      ancestorResize: d = !0,
      elementResize: y = typeof ResizeObserver == "function",
      layoutShift: S = typeof IntersectionObserver == "function",
      animationFrame: v = !1,
    } = c,
    p = hu(i),
    x = f || d ? [...(p ? Yi(p) : []), ...Yi(o)] : [];
  x.forEach((k) => {
    (f &&
      k.addEventListener("scroll", r, {
        passive: !0,
      }),
      d && k.addEventListener("resize", r));
  });
  const m = p && S ? gx(p, r) : null;
  let T = -1,
    C = null;
  y &&
    ((C = new ResizeObserver((k) => {
      let [P] = k;
      (P &&
        P.target === p &&
        C &&
        (C.unobserve(o),
        cancelAnimationFrame(T),
        (T = requestAnimationFrame(() => {
          var J;
          (J = C) == null || J.observe(o);
        }))),
        r());
    })),
    p && !v && C.observe(p),
    C.observe(o));
  let M,
    q = v ? Yn(i) : null;
  v && V();
  function V() {
    const k = Yn(i);
    (q && !xg(q, k) && r(), (q = k), (M = requestAnimationFrame(V)));
  }
  return (
    r(),
    () => {
      var k;
      (x.forEach((P) => {
        (f && P.removeEventListener("scroll", r),
          d && P.removeEventListener("resize", r));
      }),
        m?.(),
        (k = C) == null || k.disconnect(),
        (C = null),
        v && cancelAnimationFrame(M));
    }
  );
}
const yx = Gv,
  vx = kv,
  xx = Lv,
  bx = Xv,
  Sx = Yv,
  Uh = Bv,
  Ex = Vv,
  wx = (i, o, r) => {
    const c = new Map(),
      f = {
        platform: hx,
        ...r,
      },
      d = {
        ...f.platform,
        _c: c,
      };
    return Uv(i, o, {
      ...f,
      platform: d,
    });
  };
var Nx = typeof document < "u",
  Ax = function () {},
  ro = Nx ? O.useLayoutEffect : Ax;
function ho(i, o) {
  if (i === o) return !0;
  if (typeof i != typeof o) return !1;
  if (typeof i == "function" && i.toString() === o.toString()) return !0;
  let r, c, f;
  if (i && o && typeof i == "object") {
    if (Array.isArray(i)) {
      if (((r = i.length), r !== o.length)) return !1;
      for (c = r; c-- !== 0; ) if (!ho(i[c], o[c])) return !1;
      return !0;
    }
    if (((f = Object.keys(i)), (r = f.length), r !== Object.keys(o).length))
      return !1;
    for (c = r; c-- !== 0; ) if (!{}.hasOwnProperty.call(o, f[c])) return !1;
    for (c = r; c-- !== 0; ) {
      const d = f[c];
      if (!(d === "_owner" && i.$$typeof) && !ho(i[d], o[d])) return !1;
    }
    return !0;
  }
  return i !== i && o !== o;
}
function bg(i) {
  return typeof window > "u"
    ? 1
    : (i.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Bh(i, o) {
  const r = bg(i);
  return Math.round(o * r) / r;
}
function Vr(i) {
  const o = O.useRef(i);
  return (
    ro(() => {
      o.current = i;
    }),
    o
  );
}
function Tx(i) {
  i === void 0 && (i = {});
  const {
      placement: o = "bottom",
      strategy: r = "absolute",
      middleware: c = [],
      platform: f,
      elements: { reference: d, floating: y } = {},
      transform: S = !0,
      whileElementsMounted: v,
      open: p,
    } = i,
    [x, m] = O.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: o,
      middlewareData: {},
      isPositioned: !1,
    }),
    [T, C] = O.useState(c);
  ho(T, c) || C(c);
  const [M, q] = O.useState(null),
    [V, k] = O.useState(null),
    P = O.useCallback((_) => {
      _ !== lt.current && ((lt.current = _), q(_));
    }, []),
    J = O.useCallback((_) => {
      _ !== Q.current && ((Q.current = _), k(_));
    }, []),
    $ = d || M,
    I = y || V,
    lt = O.useRef(null),
    Q = O.useRef(null),
    Z = O.useRef(x),
    mt = v != null,
    St = Vr(v),
    Ht = Vr(f),
    gt = Vr(p),
    pt = O.useCallback(() => {
      if (!lt.current || !Q.current) return;
      const _ = {
        placement: o,
        strategy: r,
        middleware: T,
      };
      (Ht.current && (_.platform = Ht.current),
        wx(lt.current, Q.current, _).then((it) => {
          const ct = {
            ...it,
            isPositioned: gt.current !== !1,
          };
          vt.current &&
            !ho(Z.current, ct) &&
            ((Z.current = ct),
            cu.flushSync(() => {
              m(ct);
            }));
        }));
    }, [T, o, r, Ht, gt]);
  ro(() => {
    p === !1 &&
      Z.current.isPositioned &&
      ((Z.current.isPositioned = !1),
      m((_) => ({
        ..._,
        isPositioned: !1,
      })));
  }, [p]);
  const vt = O.useRef(!1);
  (ro(
    () => (
      (vt.current = !0),
      () => {
        vt.current = !1;
      }
    ),
    [],
  ),
    ro(() => {
      if (($ && (lt.current = $), I && (Q.current = I), $ && I)) {
        if (St.current) return St.current($, I, pt);
        pt();
      }
    }, [$, I, pt, St, mt]));
  const bt = O.useMemo(
      () => ({
        reference: lt,
        floating: Q,
        setReference: P,
        setFloating: J,
      }),
      [P, J],
    ),
    N = O.useMemo(
      () => ({
        reference: $,
        floating: I,
      }),
      [$, I],
    ),
    L = O.useMemo(() => {
      const _ = {
        position: r,
        left: 0,
        top: 0,
      };
      if (!N.floating) return _;
      const it = Bh(N.floating, x.x),
        ct = Bh(N.floating, x.y);
      return S
        ? {
            ..._,
            transform: "translate(" + it + "px, " + ct + "px)",
            ...(bg(N.floating) >= 1.5 && {
              willChange: "transform",
            }),
          }
        : {
            position: r,
            left: it,
            top: ct,
          };
    }, [r, S, N.floating, x.x, x.y]);
  return O.useMemo(
    () => ({
      ...x,
      update: pt,
      refs: bt,
      elements: N,
      floatingStyles: L,
    }),
    [x, pt, bt, N, L],
  );
}
const zx = (i) => {
    function o(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: i,
      fn(r) {
        const { element: c, padding: f } = typeof i == "function" ? i(r) : i;
        return c && o(c)
          ? c.current != null
            ? Uh({
                element: c.current,
                padding: f,
              }).fn(r)
            : {}
          : c
            ? Uh({
                element: c,
                padding: f,
              }).fn(r)
            : {};
      },
    };
  },
  Hx = (i, o) => ({
    ...yx(i),
    options: [i, o],
  }),
  Ox = (i, o) => ({
    ...vx(i),
    options: [i, o],
  }),
  jx = (i, o) => ({
    ...Ex(i),
    options: [i, o],
  }),
  Cx = (i, o) => ({
    ...xx(i),
    options: [i, o],
  }),
  Mx = (i, o) => ({
    ...bx(i),
    options: [i, o],
  }),
  _x = (i, o) => ({
    ...Sx(i),
    options: [i, o],
  }),
  Rx = (i, o) => ({
    ...zx(i),
    options: [i, o],
  });
var Dx = "Arrow",
  Sg = O.forwardRef((i, o) => {
    const { children: r, width: c = 10, height: f = 5, ...d } = i;
    return g.jsx(Gn.svg, {
      ...d,
      ref: o,
      width: c,
      height: f,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: i.asChild
        ? r
        : g.jsx("polygon", {
            points: "0,0 30,0 15,10",
          }),
    });
  });
Sg.displayName = Dx;
var Ux = Sg;
function Bx(i) {
  const [o, r] = O.useState(void 0);
  return (
    Bi(() => {
      if (i) {
        r({
          width: i.offsetWidth,
          height: i.offsetHeight,
        });
        const c = new ResizeObserver((f) => {
          if (!Array.isArray(f) || !f.length) return;
          const d = f[0];
          let y, S;
          if ("borderBoxSize" in d) {
            const v = d.borderBoxSize,
              p = Array.isArray(v) ? v[0] : v;
            ((y = p.inlineSize), (S = p.blockSize));
          } else ((y = i.offsetWidth), (S = i.offsetHeight));
          r({
            width: y,
            height: S,
          });
        });
        return (
          c.observe(i, {
            box: "border-box",
          }),
          () => c.unobserve(i)
        );
      } else r(void 0);
    }, [i]),
    o
  );
}
var Eg = "Popper",
  [wg, Ng] = lg(Eg),
  [K1, Ag] = wg(Eg),
  Tg = "PopperAnchor",
  zg = O.forwardRef((i, o) => {
    const { __scopePopper: r, virtualRef: c, ...f } = i,
      d = Ag(Tg, r),
      y = O.useRef(null),
      S = qn(o, y),
      v = O.useRef(null);
    return (
      O.useEffect(() => {
        const p = v.current;
        ((v.current = c?.current || y.current),
          p !== v.current && d.onAnchorChange(v.current));
      }),
      c
        ? null
        : g.jsx(Gn.div, {
            ...f,
            ref: S,
          })
    );
  });
zg.displayName = Tg;
var gu = "PopperContent",
  [Lx, Yx] = wg(gu),
  Hg = O.forwardRef((i, o) => {
    const {
        __scopePopper: r,
        side: c = "bottom",
        sideOffset: f = 0,
        align: d = "center",
        alignOffset: y = 0,
        arrowPadding: S = 0,
        avoidCollisions: v = !0,
        collisionBoundary: p = [],
        collisionPadding: x = 0,
        sticky: m = "partial",
        hideWhenDetached: T = !1,
        updatePositionStrategy: C = "optimized",
        onPlaced: M,
        ...q
      } = i,
      V = Ag(gu, r),
      [k, P] = O.useState(null),
      J = qn(o, (at) => P(at)),
      [$, I] = O.useState(null),
      lt = Bx($),
      Q = lt?.width ?? 0,
      Z = lt?.height ?? 0,
      mt = c + (d !== "center" ? "-" + d : ""),
      St =
        typeof x == "number"
          ? x
          : {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              ...x,
            },
      Ht = Array.isArray(p) ? p : [p],
      gt = Ht.length > 0,
      pt = {
        padding: St,
        boundary: Ht.filter(Gx),
        altBoundary: gt,
      },
      {
        refs: vt,
        floatingStyles: bt,
        placement: N,
        isPositioned: L,
        middlewareData: _,
      } = Tx({
        strategy: "fixed",
        placement: mt,
        whileElementsMounted: (...at) =>
          px(...at, {
            animationFrame: C === "always",
          }),
        elements: {
          reference: V.anchor,
        },
        middleware: [
          Hx({
            mainAxis: f + Z,
            alignmentAxis: y,
          }),
          v &&
            Ox({
              mainAxis: !0,
              crossAxis: !1,
              limiter: m === "partial" ? jx() : void 0,
              ...pt,
            }),
          v &&
            Cx({
              ...pt,
            }),
          Mx({
            ...pt,
            apply: ({
              elements: at,
              rects: ut,
              availableWidth: Tt,
              availableHeight: ae,
            }) => {
              const { width: de, height: ne } = ut.reference,
                ha = at.floating.style;
              (ha.setProperty("--radix-popper-available-width", `${Tt}px`),
                ha.setProperty("--radix-popper-available-height", `${ae}px`),
                ha.setProperty("--radix-popper-anchor-width", `${de}px`),
                ha.setProperty("--radix-popper-anchor-height", `${ne}px`));
            },
          }),
          $ &&
            Rx({
              element: $,
              padding: S,
            }),
          kx({
            arrowWidth: Q,
            arrowHeight: Z,
          }),
          T &&
            _x({
              strategy: "referenceHidden",
              ...pt,
            }),
        ],
      }),
      [it, ct] = Cg(N),
      E = po(M);
    Bi(() => {
      L && E?.();
    }, [L, E]);
    const B = _.arrow?.x,
      U = _.arrow?.y,
      X = _.arrow?.centerOffset !== 0,
      [W, st] = O.useState();
    return (
      Bi(() => {
        k && st(window.getComputedStyle(k).zIndex);
      }, [k]),
      g.jsx("div", {
        ref: vt.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...bt,
          transform: L ? bt.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: W,
          "--radix-popper-transform-origin": [
            _.transformOrigin?.x,
            _.transformOrigin?.y,
          ].join(" "),
          ...(_.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: i.dir,
        children: g.jsx(Lx, {
          scope: r,
          placedSide: it,
          onArrowChange: I,
          arrowX: B,
          arrowY: U,
          shouldHideArrow: X,
          children: g.jsx(Gn.div, {
            "data-side": it,
            "data-align": ct,
            ...q,
            ref: J,
            style: {
              ...q.style,
              animation: L ? void 0 : "none",
            },
          }),
        }),
      })
    );
  });
Hg.displayName = gu;
var Og = "PopperArrow",
  qx = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  },
  jg = O.forwardRef(function (o, r) {
    const { __scopePopper: c, ...f } = o,
      d = Yx(Og, c),
      y = qx[d.placedSide];
    return g.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [y]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: g.jsx(Ux, {
        ...f,
        ref: r,
        style: {
          ...f.style,
          display: "block",
        },
      }),
    });
  });
jg.displayName = Og;
function Gx(i) {
  return i !== null;
}
var kx = (i) => ({
  name: "transformOrigin",
  options: i,
  fn(o) {
    const { placement: r, rects: c, middlewareData: f } = o,
      y = f.arrow?.centerOffset !== 0,
      S = y ? 0 : i.arrowWidth,
      v = y ? 0 : i.arrowHeight,
      [p, x] = Cg(r),
      m = {
        start: "0%",
        center: "50%",
        end: "100%",
      }[x],
      T = (f.arrow?.x ?? 0) + S / 2,
      C = (f.arrow?.y ?? 0) + v / 2;
    let M = "",
      q = "";
    return (
      p === "bottom"
        ? ((M = y ? m : `${T}px`), (q = `${-v}px`))
        : p === "top"
          ? ((M = y ? m : `${T}px`), (q = `${c.floating.height + v}px`))
          : p === "right"
            ? ((M = `${-v}px`), (q = y ? m : `${C}px`))
            : p === "left" &&
              ((M = `${c.floating.width + v}px`), (q = y ? m : `${C}px`)),
      {
        data: {
          x: M,
          y: q,
        },
      }
    );
  },
});
function Cg(i) {
  const [o, r = "center"] = i.split("-");
  return [o, r];
}
var Vx = zg,
  Xx = Hg,
  Qx = jg;
function Zx(i, o) {
  return O.useReducer((r, c) => o[r][c] ?? r, i);
}
var Mg = (i) => {
  const { present: o, children: r } = i,
    c = Kx(o),
    f =
      typeof r == "function"
        ? r({
            present: c.isPresent,
          })
        : O.Children.only(r),
    d = qn(c.ref, Jx(f));
  return typeof r == "function" || c.isPresent
    ? O.cloneElement(f, {
        ref: d,
      })
    : null;
};
Mg.displayName = "Presence";
function Kx(i) {
  const [o, r] = O.useState(),
    c = O.useRef(null),
    f = O.useRef(i),
    d = O.useRef("none"),
    y = i ? "mounted" : "unmounted",
    [S, v] = Zx(y, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended",
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted",
      },
      unmounted: {
        MOUNT: "mounted",
      },
    });
  return (
    O.useEffect(() => {
      const p = io(c.current);
      d.current = S === "mounted" ? p : "none";
    }, [S]),
    Bi(() => {
      const p = c.current,
        x = f.current;
      if (x !== i) {
        const T = d.current,
          C = io(p);
        (i
          ? v("MOUNT")
          : C === "none" || p?.display === "none"
            ? v("UNMOUNT")
            : v(x && T !== C ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = i));
      }
    }, [i, v]),
    Bi(() => {
      if (o) {
        let p;
        const x = o.ownerDocument.defaultView ?? window,
          m = (C) => {
            const q = io(c.current).includes(CSS.escape(C.animationName));
            if (C.target === o && q && (v("ANIMATION_END"), !f.current)) {
              const V = o.style.animationFillMode;
              ((o.style.animationFillMode = "forwards"),
                (p = x.setTimeout(() => {
                  o.style.animationFillMode === "forwards" &&
                    (o.style.animationFillMode = V);
                })));
            }
          },
          T = (C) => {
            C.target === o && (d.current = io(c.current));
          };
        return (
          o.addEventListener("animationstart", T),
          o.addEventListener("animationcancel", m),
          o.addEventListener("animationend", m),
          () => {
            (x.clearTimeout(p),
              o.removeEventListener("animationstart", T),
              o.removeEventListener("animationcancel", m),
              o.removeEventListener("animationend", m));
          }
        );
      } else v("ANIMATION_END");
    }, [o, v]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(S),
      ref: O.useCallback((p) => {
        ((c.current = p ? getComputedStyle(p) : null), r(p));
      }, []),
    }
  );
}
function io(i) {
  return i?.animationName || "none";
}
function Jx(i) {
  let o = Object.getOwnPropertyDescriptor(i.props, "ref")?.get,
    r = o && "isReactWarning" in o && o.isReactWarning;
  return r
    ? i.ref
    : ((o = Object.getOwnPropertyDescriptor(i, "ref")?.get),
      (r = o && "isReactWarning" in o && o.isReactWarning),
      r ? i.props.ref : i.props.ref || i.ref);
}
var Wx = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  $x = "VisuallyHidden",
  _g = O.forwardRef((i, o) =>
    g.jsx(Gn.span, {
      ...i,
      ref: o,
      style: {
        ...Wx,
        ...i.style,
      },
    }),
  );
_g.displayName = $x;
var Fx = _g,
  [So] = lg("Tooltip", [Ng]),
  pu = Ng(),
  Rg = "TooltipProvider",
  Px = 700,
  Lh = "tooltip.open",
  [Ix, Dg] = So(Rg),
  Ug = (i) => {
    const {
        __scopeTooltip: o,
        delayDuration: r = Px,
        skipDelayDuration: c = 300,
        disableHoverableContent: f = !1,
        children: d,
      } = i,
      y = O.useRef(!0),
      S = O.useRef(!1),
      v = O.useRef(0);
    return (
      O.useEffect(() => {
        const p = v.current;
        return () => window.clearTimeout(p);
      }, []),
      g.jsx(Ix, {
        scope: o,
        isOpenDelayedRef: y,
        delayDuration: r,
        onOpen: O.useCallback(() => {
          (window.clearTimeout(v.current), (y.current = !1));
        }, []),
        onClose: O.useCallback(() => {
          (window.clearTimeout(v.current),
            (v.current = window.setTimeout(() => (y.current = !0), c)));
        }, [c]),
        isPointerInTransitRef: S,
        onPointerInTransitChange: O.useCallback((p) => {
          S.current = p;
        }, []),
        disableHoverableContent: f,
        children: d,
      })
    );
  };
Ug.displayName = Rg;
var Bg = "Tooltip",
  [J1, Eo] = So(Bg),
  au = "TooltipTrigger",
  tb = O.forwardRef((i, o) => {
    const { __scopeTooltip: r, ...c } = i,
      f = Eo(au, r),
      d = Dg(au, r),
      y = pu(r),
      S = O.useRef(null),
      v = qn(o, S, f.onTriggerChange),
      p = O.useRef(!1),
      x = O.useRef(!1),
      m = O.useCallback(() => (p.current = !1), []);
    return (
      O.useEffect(
        () => () => document.removeEventListener("pointerup", m),
        [m],
      ),
      g.jsx(Vx, {
        asChild: !0,
        ...y,
        children: g.jsx(Gn.button, {
          "aria-describedby": f.open ? f.contentId : void 0,
          "data-state": f.stateAttribute,
          ...c,
          ref: v,
          onPointerMove: Da(i.onPointerMove, (T) => {
            T.pointerType !== "touch" &&
              !x.current &&
              !d.isPointerInTransitRef.current &&
              (f.onTriggerEnter(), (x.current = !0));
          }),
          onPointerLeave: Da(i.onPointerLeave, () => {
            (f.onTriggerLeave(), (x.current = !1));
          }),
          onPointerDown: Da(i.onPointerDown, () => {
            (f.open && f.onClose(),
              (p.current = !0),
              document.addEventListener("pointerup", m, {
                once: !0,
              }));
          }),
          onFocus: Da(i.onFocus, () => {
            p.current || f.onOpen();
          }),
          onBlur: Da(i.onBlur, f.onClose),
          onClick: Da(i.onClick, f.onClose),
        }),
      })
    );
  });
tb.displayName = au;
var eb = "TooltipPortal",
  [W1, ab] = So(eb, {
    forceMount: void 0,
  }),
  Rl = "TooltipContent",
  nb = O.forwardRef((i, o) => {
    const r = ab(Rl, i.__scopeTooltip),
      { forceMount: c = r.forceMount, side: f = "top", ...d } = i,
      y = Eo(Rl, i.__scopeTooltip);
    return g.jsx(Mg, {
      present: c || y.open,
      children: y.disableHoverableContent
        ? g.jsx(Lg, {
            side: f,
            ...d,
            ref: o,
          })
        : g.jsx(lb, {
            side: f,
            ...d,
            ref: o,
          }),
    });
  }),
  lb = O.forwardRef((i, o) => {
    const r = Eo(Rl, i.__scopeTooltip),
      c = Dg(Rl, i.__scopeTooltip),
      f = O.useRef(null),
      d = qn(o, f),
      [y, S] = O.useState(null),
      { trigger: v, onClose: p } = r,
      x = f.current,
      { onPointerInTransitChange: m } = c,
      T = O.useCallback(() => {
        (S(null), m(!1));
      }, [m]),
      C = O.useCallback(
        (M, q) => {
          const V = M.currentTarget,
            k = {
              x: M.clientX,
              y: M.clientY,
            },
            P = rb(k, V.getBoundingClientRect()),
            J = ub(k, P),
            $ = fb(q.getBoundingClientRect()),
            I = mb([...J, ...$]);
          (S(I), m(!0));
        },
        [m],
      );
    return (
      O.useEffect(() => () => T(), [T]),
      O.useEffect(() => {
        if (v && x) {
          const M = (V) => C(V, x),
            q = (V) => C(V, v);
          return (
            v.addEventListener("pointerleave", M),
            x.addEventListener("pointerleave", q),
            () => {
              (v.removeEventListener("pointerleave", M),
                x.removeEventListener("pointerleave", q));
            }
          );
        }
      }, [v, x, C, T]),
      O.useEffect(() => {
        if (y) {
          const M = (q) => {
            const V = q.target,
              k = {
                x: q.clientX,
                y: q.clientY,
              },
              P = v?.contains(V) || x?.contains(V),
              J = !db(k, y);
            P ? T() : J && (T(), p());
          };
          return (
            document.addEventListener("pointermove", M),
            () => document.removeEventListener("pointermove", M)
          );
        }
      }, [v, x, y, p, T]),
      g.jsx(Lg, {
        ...i,
        ref: d,
      })
    );
  }),
  [ib, sb] = So(Bg, {
    isInside: !1,
  }),
  ob = fv("TooltipContent"),
  Lg = O.forwardRef((i, o) => {
    const {
        __scopeTooltip: r,
        children: c,
        "aria-label": f,
        onEscapeKeyDown: d,
        onPointerDownOutside: y,
        ...S
      } = i,
      v = Eo(Rl, r),
      p = pu(r),
      { onClose: x } = v;
    return (
      O.useEffect(
        () => (
          document.addEventListener(Lh, x),
          () => document.removeEventListener(Lh, x)
        ),
        [x],
      ),
      O.useEffect(() => {
        if (v.trigger) {
          const m = (T) => {
            T.target?.contains(v.trigger) && x();
          };
          return (
            window.addEventListener("scroll", m, {
              capture: !0,
            }),
            () =>
              window.removeEventListener("scroll", m, {
                capture: !0,
              })
          );
        }
      }, [v.trigger, x]),
      g.jsx(cg, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: d,
        onPointerDownOutside: y,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: x,
        children: g.jsxs(Xx, {
          "data-state": v.stateAttribute,
          ...p,
          ...S,
          ref: o,
          style: {
            ...S.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            g.jsx(ob, {
              children: c,
            }),
            g.jsx(ib, {
              scope: r,
              isInside: !0,
              children: g.jsx(Fx, {
                id: v.contentId,
                role: "tooltip",
                children: f || c,
              }),
            }),
          ],
        }),
      })
    );
  });
nb.displayName = Rl;
var Yg = "TooltipArrow",
  cb = O.forwardRef((i, o) => {
    const { __scopeTooltip: r, ...c } = i,
      f = pu(r);
    return sb(Yg, r).isInside
      ? null
      : g.jsx(Qx, {
          ...f,
          ...c,
          ref: o,
        });
  });
cb.displayName = Yg;
function rb(i, o) {
  const r = Math.abs(o.top - i.y),
    c = Math.abs(o.bottom - i.y),
    f = Math.abs(o.right - i.x),
    d = Math.abs(o.left - i.x);
  switch (Math.min(r, c, f, d)) {
    case d:
      return "left";
    case f:
      return "right";
    case r:
      return "top";
    case c:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ub(i, o, r = 5) {
  const c = [];
  switch (o) {
    case "top":
      c.push(
        {
          x: i.x - r,
          y: i.y + r,
        },
        {
          x: i.x + r,
          y: i.y + r,
        },
      );
      break;
    case "bottom":
      c.push(
        {
          x: i.x - r,
          y: i.y - r,
        },
        {
          x: i.x + r,
          y: i.y - r,
        },
      );
      break;
    case "left":
      c.push(
        {
          x: i.x + r,
          y: i.y - r,
        },
        {
          x: i.x + r,
          y: i.y + r,
        },
      );
      break;
    case "right":
      c.push(
        {
          x: i.x - r,
          y: i.y - r,
        },
        {
          x: i.x - r,
          y: i.y + r,
        },
      );
      break;
  }
  return c;
}
function fb(i) {
  const { top: o, right: r, bottom: c, left: f } = i;
  return [
    {
      x: f,
      y: o,
    },
    {
      x: r,
      y: o,
    },
    {
      x: r,
      y: c,
    },
    {
      x: f,
      y: c,
    },
  ];
}
function db(i, o) {
  const { x: r, y: c } = i;
  let f = !1;
  for (let d = 0, y = o.length - 1; d < o.length; y = d++) {
    const S = o[d],
      v = o[y],
      p = S.x,
      x = S.y,
      m = v.x,
      T = v.y;
    x > c != T > c && r < ((m - p) * (c - x)) / (T - x) + p && (f = !f);
  }
  return f;
}
function mb(i) {
  const o = i.slice();
  return (
    o.sort((r, c) =>
      r.x < c.x ? -1 : r.x > c.x ? 1 : r.y < c.y ? -1 : r.y > c.y ? 1 : 0,
    ),
    hb(o)
  );
}
function hb(i) {
  if (i.length <= 1) return i.slice();
  const o = [];
  for (let c = 0; c < i.length; c++) {
    const f = i[c];
    for (; o.length >= 2; ) {
      const d = o[o.length - 1],
        y = o[o.length - 2];
      if ((d.x - y.x) * (f.y - y.y) >= (d.y - y.y) * (f.x - y.x)) o.pop();
      else break;
    }
    o.push(f);
  }
  o.pop();
  const r = [];
  for (let c = i.length - 1; c >= 0; c--) {
    const f = i[c];
    for (; r.length >= 2; ) {
      const d = r[r.length - 1],
        y = r[r.length - 2];
      if ((d.x - y.x) * (f.y - y.y) >= (d.y - y.y) * (f.x - y.x)) r.pop();
      else break;
    }
    r.push(f);
  }
  return (
    r.pop(),
    o.length === 1 && r.length === 1 && o[0].x === r[0].x && o[0].y === r[0].y
      ? o
      : o.concat(r)
  );
}
var gb = Ug;
function qg(i) {
  var o,
    r,
    c = "";
  if (typeof i == "string" || typeof i == "number") c += i;
  else if (typeof i == "object")
    if (Array.isArray(i)) {
      var f = i.length;
      for (o = 0; o < f; o++)
        i[o] && (r = qg(i[o])) && (c && (c += " "), (c += r));
    } else for (r in i) i[r] && (c && (c += " "), (c += r));
  return c;
}
function Gg() {
  for (var i, o, r = 0, c = "", f = arguments.length; r < f; r++)
    (i = arguments[r]) && (o = qg(i)) && (c && (c += " "), (c += o));
  return c;
}
const yu = "-",
  pb = (i) => {
    const o = vb(i),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: c } = i;
    return {
      getClassGroupId: (y) => {
        const S = y.split(yu);
        return (S[0] === "" && S.length !== 1 && S.shift(), kg(S, o) || yb(y));
      },
      getConflictingClassGroupIds: (y, S) => {
        const v = r[y] || [];
        return S && c[y] ? [...v, ...c[y]] : v;
      },
    };
  },
  kg = (i, o) => {
    if (i.length === 0) return o.classGroupId;
    const r = i[0],
      c = o.nextPart.get(r),
      f = c ? kg(i.slice(1), c) : void 0;
    if (f) return f;
    if (o.validators.length === 0) return;
    const d = i.join(yu);
    return o.validators.find(({ validator: y }) => y(d))?.classGroupId;
  },
  Yh = /^\[(.+)\]$/,
  yb = (i) => {
    if (Yh.test(i)) {
      const o = Yh.exec(i)[1],
        r = o?.substring(0, o.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  vb = (i) => {
    const { theme: o, classGroups: r } = i,
      c = {
        nextPart: new Map(),
        validators: [],
      };
    for (const f in r) nu(r[f], c, f, o);
    return c;
  },
  nu = (i, o, r, c) => {
    i.forEach((f) => {
      if (typeof f == "string") {
        const d = f === "" ? o : qh(o, f);
        d.classGroupId = r;
        return;
      }
      if (typeof f == "function") {
        if (xb(f)) {
          nu(f(c), o, r, c);
          return;
        }
        o.validators.push({
          validator: f,
          classGroupId: r,
        });
        return;
      }
      Object.entries(f).forEach(([d, y]) => {
        nu(y, qh(o, d), r, c);
      });
    });
  },
  qh = (i, o) => {
    let r = i;
    return (
      o.split(yu).forEach((c) => {
        (r.nextPart.has(c) ||
          r.nextPart.set(c, {
            nextPart: new Map(),
            validators: [],
          }),
          (r = r.nextPart.get(c)));
      }),
      r
    );
  },
  xb = (i) => i.isThemeGetter,
  bb = (i) => {
    if (i < 1)
      return {
        get: () => {},
        set: () => {},
      };
    let o = 0,
      r = new Map(),
      c = new Map();
    const f = (d, y) => {
      (r.set(d, y), o++, o > i && ((o = 0), (c = r), (r = new Map())));
    };
    return {
      get(d) {
        let y = r.get(d);
        if (y !== void 0) return y;
        if ((y = c.get(d)) !== void 0) return (f(d, y), y);
      },
      set(d, y) {
        r.has(d) ? r.set(d, y) : f(d, y);
      },
    };
  },
  lu = "!",
  iu = ":",
  Sb = iu.length,
  Eb = (i) => {
    const { prefix: o, experimentalParseClassName: r } = i;
    let c = (f) => {
      const d = [];
      let y = 0,
        S = 0,
        v = 0,
        p;
      for (let M = 0; M < f.length; M++) {
        let q = f[M];
        if (y === 0 && S === 0) {
          if (q === iu) {
            (d.push(f.slice(v, M)), (v = M + Sb));
            continue;
          }
          if (q === "/") {
            p = M;
            continue;
          }
        }
        q === "[" ? y++ : q === "]" ? y-- : q === "(" ? S++ : q === ")" && S--;
      }
      const x = d.length === 0 ? f : f.substring(v),
        m = wb(x),
        T = m !== x,
        C = p && p > v ? p - v : void 0;
      return {
        modifiers: d,
        hasImportantModifier: T,
        baseClassName: m,
        maybePostfixModifierPosition: C,
      };
    };
    if (o) {
      const f = o + iu,
        d = c;
      c = (y) =>
        y.startsWith(f)
          ? d(y.substring(f.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: y,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (r) {
      const f = c;
      c = (d) =>
        r({
          className: d,
          parseClassName: f,
        });
    }
    return c;
  },
  wb = (i) =>
    i.endsWith(lu)
      ? i.substring(0, i.length - 1)
      : i.startsWith(lu)
        ? i.substring(1)
        : i,
  Nb = (i) => {
    const o = Object.fromEntries(i.orderSensitiveModifiers.map((c) => [c, !0]));
    return (c) => {
      if (c.length <= 1) return c;
      const f = [];
      let d = [];
      return (
        c.forEach((y) => {
          y[0] === "[" || o[y] ? (f.push(...d.sort(), y), (d = [])) : d.push(y);
        }),
        f.push(...d.sort()),
        f
      );
    };
  },
  Ab = (i) => ({
    cache: bb(i.cacheSize),
    parseClassName: Eb(i),
    sortModifiers: Nb(i),
    ...pb(i),
  }),
  Tb = /\s+/,
  zb = (i, o) => {
    const {
        parseClassName: r,
        getClassGroupId: c,
        getConflictingClassGroupIds: f,
        sortModifiers: d,
      } = o,
      y = [],
      S = i.trim().split(Tb);
    let v = "";
    for (let p = S.length - 1; p >= 0; p -= 1) {
      const x = S[p],
        {
          isExternal: m,
          modifiers: T,
          hasImportantModifier: C,
          baseClassName: M,
          maybePostfixModifierPosition: q,
        } = r(x);
      if (m) {
        v = x + (v.length > 0 ? " " + v : v);
        continue;
      }
      let V = !!q,
        k = c(V ? M.substring(0, q) : M);
      if (!k) {
        if (!V) {
          v = x + (v.length > 0 ? " " + v : v);
          continue;
        }
        if (((k = c(M)), !k)) {
          v = x + (v.length > 0 ? " " + v : v);
          continue;
        }
        V = !1;
      }
      const P = d(T).join(":"),
        J = C ? P + lu : P,
        $ = J + k;
      if (y.includes($)) continue;
      y.push($);
      const I = f(k, V);
      for (let lt = 0; lt < I.length; ++lt) {
        const Q = I[lt];
        y.push(J + Q);
      }
      v = x + (v.length > 0 ? " " + v : v);
    }
    return v;
  };
function Hb() {
  let i = 0,
    o,
    r,
    c = "";
  for (; i < arguments.length; )
    (o = arguments[i++]) && (r = Vg(o)) && (c && (c += " "), (c += r));
  return c;
}
const Vg = (i) => {
  if (typeof i == "string") return i;
  let o,
    r = "";
  for (let c = 0; c < i.length; c++)
    i[c] && (o = Vg(i[c])) && (r && (r += " "), (r += o));
  return r;
};
function Ob(i, ...o) {
  let r,
    c,
    f,
    d = y;
  function y(v) {
    const p = o.reduce((x, m) => m(x), i());
    return ((r = Ab(p)), (c = r.cache.get), (f = r.cache.set), (d = S), S(v));
  }
  function S(v) {
    const p = c(v);
    if (p) return p;
    const x = zb(v, r);
    return (f(v, x), x);
  }
  return function () {
    return d(Hb.apply(null, arguments));
  };
}
const Pt = (i) => {
    const o = (r) => r[i] || [];
    return ((o.isThemeGetter = !0), o);
  },
  Xg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Qg = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  jb = /^\d+\/\d+$/,
  Cb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Mb =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  _b = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Rb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Db =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  jl = (i) => jb.test(i),
  xt = (i) => !!i && !Number.isNaN(Number(i)),
  dn = (i) => !!i && Number.isInteger(Number(i)),
  Xr = (i) => i.endsWith("%") && xt(i.slice(0, -1)),
  Ra = (i) => Cb.test(i),
  Ub = () => !0,
  Bb = (i) => Mb.test(i) && !_b.test(i),
  Zg = () => !1,
  Lb = (i) => Rb.test(i),
  Yb = (i) => Db.test(i),
  qb = (i) => !tt(i) && !et(i),
  Gb = (i) => Bl(i, Wg, Zg),
  tt = (i) => Xg.test(i),
  Ln = (i) => Bl(i, $g, Bb),
  Qr = (i) => Bl(i, Zb, xt),
  Gh = (i) => Bl(i, Kg, Zg),
  kb = (i) => Bl(i, Jg, Yb),
  so = (i) => Bl(i, Fg, Lb),
  et = (i) => Qg.test(i),
  Ui = (i) => Ll(i, $g),
  Vb = (i) => Ll(i, Kb),
  kh = (i) => Ll(i, Kg),
  Xb = (i) => Ll(i, Wg),
  Qb = (i) => Ll(i, Jg),
  oo = (i) => Ll(i, Fg, !0),
  Bl = (i, o, r) => {
    const c = Xg.exec(i);
    return c ? (c[1] ? o(c[1]) : r(c[2])) : !1;
  },
  Ll = (i, o, r = !1) => {
    const c = Qg.exec(i);
    return c ? (c[1] ? o(c[1]) : r) : !1;
  },
  Kg = (i) => i === "position" || i === "percentage",
  Jg = (i) => i === "image" || i === "url",
  Wg = (i) => i === "length" || i === "size" || i === "bg-size",
  $g = (i) => i === "length",
  Zb = (i) => i === "number",
  Kb = (i) => i === "family-name",
  Fg = (i) => i === "shadow",
  Jb = () => {
    const i = Pt("color"),
      o = Pt("font"),
      r = Pt("text"),
      c = Pt("font-weight"),
      f = Pt("tracking"),
      d = Pt("leading"),
      y = Pt("breakpoint"),
      S = Pt("container"),
      v = Pt("spacing"),
      p = Pt("radius"),
      x = Pt("shadow"),
      m = Pt("inset-shadow"),
      T = Pt("text-shadow"),
      C = Pt("drop-shadow"),
      M = Pt("blur"),
      q = Pt("perspective"),
      V = Pt("aspect"),
      k = Pt("ease"),
      P = Pt("animate"),
      J = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      I = () => [...$(), et, tt],
      lt = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Q = () => ["auto", "contain", "none"],
      Z = () => [et, tt, v],
      mt = () => [jl, "full", "auto", ...Z()],
      St = () => [dn, "none", "subgrid", et, tt],
      Ht = () => [
        "auto",
        {
          span: ["full", dn, et, tt],
        },
        dn,
        et,
        tt,
      ],
      gt = () => [dn, "auto", et, tt],
      pt = () => ["auto", "min", "max", "fr", et, tt],
      vt = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      bt = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      N = () => ["auto", ...Z()],
      L = () => [
        jl,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...Z(),
      ],
      _ = () => [i, et, tt],
      it = () => [
        ...$(),
        kh,
        Gh,
        {
          position: [et, tt],
        },
      ],
      ct = () => [
        "no-repeat",
        {
          repeat: ["", "x", "y", "space", "round"],
        },
      ],
      E = () => [
        "auto",
        "cover",
        "contain",
        Xb,
        Gb,
        {
          size: [et, tt],
        },
      ],
      B = () => [Xr, Ui, Ln],
      U = () => ["", "none", "full", p, et, tt],
      X = () => ["", xt, Ui, Ln],
      W = () => ["solid", "dashed", "dotted", "double"],
      st = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      at = () => [xt, Xr, kh, Gh],
      ut = () => ["", "none", M, et, tt],
      Tt = () => ["none", xt, et, tt],
      ae = () => ["none", xt, et, tt],
      de = () => [xt, et, tt],
      ne = () => [jl, "full", ...Z()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Ra],
        breakpoint: [Ra],
        color: [Ub],
        container: [Ra],
        "drop-shadow": [Ra],
        ease: ["in", "out", "in-out"],
        font: [qb],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Ra],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Ra],
        shadow: [Ra],
        spacing: ["px", xt],
        text: [Ra],
        "text-shadow": [Ra],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [
          {
            aspect: ["auto", "square", jl, tt, et, V],
          },
        ],
        container: ["container"],
        columns: [
          {
            columns: [xt, tt, et, S],
          },
        ],
        "break-after": [
          {
            "break-after": J(),
          },
        ],
        "break-before": [
          {
            "break-before": J(),
          },
        ],
        "break-inside": [
          {
            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
          },
        ],
        "box-decoration": [
          {
            "box-decoration": ["slice", "clone"],
          },
        ],
        box: [
          {
            box: ["border", "content"],
          },
        ],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [
          {
            float: ["right", "left", "none", "start", "end"],
          },
        ],
        clear: [
          {
            clear: ["left", "right", "both", "none", "start", "end"],
          },
        ],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          {
            object: ["contain", "cover", "fill", "none", "scale-down"],
          },
        ],
        "object-position": [
          {
            object: I(),
          },
        ],
        overflow: [
          {
            overflow: lt(),
          },
        ],
        "overflow-x": [
          {
            "overflow-x": lt(),
          },
        ],
        "overflow-y": [
          {
            "overflow-y": lt(),
          },
        ],
        overscroll: [
          {
            overscroll: Q(),
          },
        ],
        "overscroll-x": [
          {
            "overscroll-x": Q(),
          },
        ],
        "overscroll-y": [
          {
            "overscroll-y": Q(),
          },
        ],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [
          {
            inset: mt(),
          },
        ],
        "inset-x": [
          {
            "inset-x": mt(),
          },
        ],
        "inset-y": [
          {
            "inset-y": mt(),
          },
        ],
        start: [
          {
            start: mt(),
          },
        ],
        end: [
          {
            end: mt(),
          },
        ],
        top: [
          {
            top: mt(),
          },
        ],
        right: [
          {
            right: mt(),
          },
        ],
        bottom: [
          {
            bottom: mt(),
          },
        ],
        left: [
          {
            left: mt(),
          },
        ],
        visibility: ["visible", "invisible", "collapse"],
        z: [
          {
            z: [dn, "auto", et, tt],
          },
        ],
        basis: [
          {
            basis: [jl, "full", "auto", S, ...Z()],
          },
        ],
        "flex-direction": [
          {
            flex: ["row", "row-reverse", "col", "col-reverse"],
          },
        ],
        "flex-wrap": [
          {
            flex: ["nowrap", "wrap", "wrap-reverse"],
          },
        ],
        flex: [
          {
            flex: [xt, jl, "auto", "initial", "none", tt],
          },
        ],
        grow: [
          {
            grow: ["", xt, et, tt],
          },
        ],
        shrink: [
          {
            shrink: ["", xt, et, tt],
          },
        ],
        order: [
          {
            order: [dn, "first", "last", "none", et, tt],
          },
        ],
        "grid-cols": [
          {
            "grid-cols": St(),
          },
        ],
        "col-start-end": [
          {
            col: Ht(),
          },
        ],
        "col-start": [
          {
            "col-start": gt(),
          },
        ],
        "col-end": [
          {
            "col-end": gt(),
          },
        ],
        "grid-rows": [
          {
            "grid-rows": St(),
          },
        ],
        "row-start-end": [
          {
            row: Ht(),
          },
        ],
        "row-start": [
          {
            "row-start": gt(),
          },
        ],
        "row-end": [
          {
            "row-end": gt(),
          },
        ],
        "grid-flow": [
          {
            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
          },
        ],
        "auto-cols": [
          {
            "auto-cols": pt(),
          },
        ],
        "auto-rows": [
          {
            "auto-rows": pt(),
          },
        ],
        gap: [
          {
            gap: Z(),
          },
        ],
        "gap-x": [
          {
            "gap-x": Z(),
          },
        ],
        "gap-y": [
          {
            "gap-y": Z(),
          },
        ],
        "justify-content": [
          {
            justify: [...vt(), "normal"],
          },
        ],
        "justify-items": [
          {
            "justify-items": [...bt(), "normal"],
          },
        ],
        "justify-self": [
          {
            "justify-self": ["auto", ...bt()],
          },
        ],
        "align-content": [
          {
            content: ["normal", ...vt()],
          },
        ],
        "align-items": [
          {
            items: [
              ...bt(),
              {
                baseline: ["", "last"],
              },
            ],
          },
        ],
        "align-self": [
          {
            self: [
              "auto",
              ...bt(),
              {
                baseline: ["", "last"],
              },
            ],
          },
        ],
        "place-content": [
          {
            "place-content": vt(),
          },
        ],
        "place-items": [
          {
            "place-items": [...bt(), "baseline"],
          },
        ],
        "place-self": [
          {
            "place-self": ["auto", ...bt()],
          },
        ],
        p: [
          {
            p: Z(),
          },
        ],
        px: [
          {
            px: Z(),
          },
        ],
        py: [
          {
            py: Z(),
          },
        ],
        ps: [
          {
            ps: Z(),
          },
        ],
        pe: [
          {
            pe: Z(),
          },
        ],
        pt: [
          {
            pt: Z(),
          },
        ],
        pr: [
          {
            pr: Z(),
          },
        ],
        pb: [
          {
            pb: Z(),
          },
        ],
        pl: [
          {
            pl: Z(),
          },
        ],
        m: [
          {
            m: N(),
          },
        ],
        mx: [
          {
            mx: N(),
          },
        ],
        my: [
          {
            my: N(),
          },
        ],
        ms: [
          {
            ms: N(),
          },
        ],
        me: [
          {
            me: N(),
          },
        ],
        mt: [
          {
            mt: N(),
          },
        ],
        mr: [
          {
            mr: N(),
          },
        ],
        mb: [
          {
            mb: N(),
          },
        ],
        ml: [
          {
            ml: N(),
          },
        ],
        "space-x": [
          {
            "space-x": Z(),
          },
        ],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [
          {
            "space-y": Z(),
          },
        ],
        "space-y-reverse": ["space-y-reverse"],
        size: [
          {
            size: L(),
          },
        ],
        w: [
          {
            w: [S, "screen", ...L()],
          },
        ],
        "min-w": [
          {
            "min-w": [S, "screen", "none", ...L()],
          },
        ],
        "max-w": [
          {
            "max-w": [
              S,
              "screen",
              "none",
              "prose",
              {
                screen: [y],
              },
              ...L(),
            ],
          },
        ],
        h: [
          {
            h: ["screen", "lh", ...L()],
          },
        ],
        "min-h": [
          {
            "min-h": ["screen", "lh", "none", ...L()],
          },
        ],
        "max-h": [
          {
            "max-h": ["screen", "lh", ...L()],
          },
        ],
        "font-size": [
          {
            text: ["base", r, Ui, Ln],
          },
        ],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [c, et, Qr],
          },
        ],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Xr,
              tt,
            ],
          },
        ],
        "font-family": [
          {
            font: [Vb, tt, o],
          },
        ],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [f, et, tt],
          },
        ],
        "line-clamp": [
          {
            "line-clamp": [xt, "none", et, Qr],
          },
        ],
        leading: [
          {
            leading: [d, ...Z()],
          },
        ],
        "list-image": [
          {
            "list-image": ["none", et, tt],
          },
        ],
        "list-style-position": [
          {
            list: ["inside", "outside"],
          },
        ],
        "list-style-type": [
          {
            list: ["disc", "decimal", "none", et, tt],
          },
        ],
        "text-alignment": [
          {
            text: ["left", "center", "right", "justify", "start", "end"],
          },
        ],
        "placeholder-color": [
          {
            placeholder: _(),
          },
        ],
        "text-color": [
          {
            text: _(),
          },
        ],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [
          {
            decoration: [...W(), "wavy"],
          },
        ],
        "text-decoration-thickness": [
          {
            decoration: [xt, "from-font", "auto", et, Ln],
          },
        ],
        "text-decoration-color": [
          {
            decoration: _(),
          },
        ],
        "underline-offset": [
          {
            "underline-offset": [xt, "auto", et, tt],
          },
        ],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [
          {
            text: ["wrap", "nowrap", "balance", "pretty"],
          },
        ],
        indent: [
          {
            indent: Z(),
          },
        ],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              et,
              tt,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [
          {
            break: ["normal", "words", "all", "keep"],
          },
        ],
        wrap: [
          {
            wrap: ["break-word", "anywhere", "normal"],
          },
        ],
        hyphens: [
          {
            hyphens: ["none", "manual", "auto"],
          },
        ],
        content: [
          {
            content: ["none", et, tt],
          },
        ],
        "bg-attachment": [
          {
            bg: ["fixed", "local", "scroll"],
          },
        ],
        "bg-clip": [
          {
            "bg-clip": ["border", "padding", "content", "text"],
          },
        ],
        "bg-origin": [
          {
            "bg-origin": ["border", "padding", "content"],
          },
        ],
        "bg-position": [
          {
            bg: it(),
          },
        ],
        "bg-repeat": [
          {
            bg: ct(),
          },
        ],
        "bg-size": [
          {
            bg: E(),
          },
        ],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  {
                    to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  dn,
                  et,
                  tt,
                ],
                radial: ["", et, tt],
                conic: [dn, et, tt],
              },
              Qb,
              kb,
            ],
          },
        ],
        "bg-color": [
          {
            bg: _(),
          },
        ],
        "gradient-from-pos": [
          {
            from: B(),
          },
        ],
        "gradient-via-pos": [
          {
            via: B(),
          },
        ],
        "gradient-to-pos": [
          {
            to: B(),
          },
        ],
        "gradient-from": [
          {
            from: _(),
          },
        ],
        "gradient-via": [
          {
            via: _(),
          },
        ],
        "gradient-to": [
          {
            to: _(),
          },
        ],
        rounded: [
          {
            rounded: U(),
          },
        ],
        "rounded-s": [
          {
            "rounded-s": U(),
          },
        ],
        "rounded-e": [
          {
            "rounded-e": U(),
          },
        ],
        "rounded-t": [
          {
            "rounded-t": U(),
          },
        ],
        "rounded-r": [
          {
            "rounded-r": U(),
          },
        ],
        "rounded-b": [
          {
            "rounded-b": U(),
          },
        ],
        "rounded-l": [
          {
            "rounded-l": U(),
          },
        ],
        "rounded-ss": [
          {
            "rounded-ss": U(),
          },
        ],
        "rounded-se": [
          {
            "rounded-se": U(),
          },
        ],
        "rounded-ee": [
          {
            "rounded-ee": U(),
          },
        ],
        "rounded-es": [
          {
            "rounded-es": U(),
          },
        ],
        "rounded-tl": [
          {
            "rounded-tl": U(),
          },
        ],
        "rounded-tr": [
          {
            "rounded-tr": U(),
          },
        ],
        "rounded-br": [
          {
            "rounded-br": U(),
          },
        ],
        "rounded-bl": [
          {
            "rounded-bl": U(),
          },
        ],
        "border-w": [
          {
            border: X(),
          },
        ],
        "border-w-x": [
          {
            "border-x": X(),
          },
        ],
        "border-w-y": [
          {
            "border-y": X(),
          },
        ],
        "border-w-s": [
          {
            "border-s": X(),
          },
        ],
        "border-w-e": [
          {
            "border-e": X(),
          },
        ],
        "border-w-t": [
          {
            "border-t": X(),
          },
        ],
        "border-w-r": [
          {
            "border-r": X(),
          },
        ],
        "border-w-b": [
          {
            "border-b": X(),
          },
        ],
        "border-w-l": [
          {
            "border-l": X(),
          },
        ],
        "divide-x": [
          {
            "divide-x": X(),
          },
        ],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [
          {
            "divide-y": X(),
          },
        ],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [
          {
            border: [...W(), "hidden", "none"],
          },
        ],
        "divide-style": [
          {
            divide: [...W(), "hidden", "none"],
          },
        ],
        "border-color": [
          {
            border: _(),
          },
        ],
        "border-color-x": [
          {
            "border-x": _(),
          },
        ],
        "border-color-y": [
          {
            "border-y": _(),
          },
        ],
        "border-color-s": [
          {
            "border-s": _(),
          },
        ],
        "border-color-e": [
          {
            "border-e": _(),
          },
        ],
        "border-color-t": [
          {
            "border-t": _(),
          },
        ],
        "border-color-r": [
          {
            "border-r": _(),
          },
        ],
        "border-color-b": [
          {
            "border-b": _(),
          },
        ],
        "border-color-l": [
          {
            "border-l": _(),
          },
        ],
        "divide-color": [
          {
            divide: _(),
          },
        ],
        "outline-style": [
          {
            outline: [...W(), "none", "hidden"],
          },
        ],
        "outline-offset": [
          {
            "outline-offset": [xt, et, tt],
          },
        ],
        "outline-w": [
          {
            outline: ["", xt, Ui, Ln],
          },
        ],
        "outline-color": [
          {
            outline: _(),
          },
        ],
        shadow: [
          {
            shadow: ["", "none", x, oo, so],
          },
        ],
        "shadow-color": [
          {
            shadow: _(),
          },
        ],
        "inset-shadow": [
          {
            "inset-shadow": ["none", m, oo, so],
          },
        ],
        "inset-shadow-color": [
          {
            "inset-shadow": _(),
          },
        ],
        "ring-w": [
          {
            ring: X(),
          },
        ],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [
          {
            ring: _(),
          },
        ],
        "ring-offset-w": [
          {
            "ring-offset": [xt, Ln],
          },
        ],
        "ring-offset-color": [
          {
            "ring-offset": _(),
          },
        ],
        "inset-ring-w": [
          {
            "inset-ring": X(),
          },
        ],
        "inset-ring-color": [
          {
            "inset-ring": _(),
          },
        ],
        "text-shadow": [
          {
            "text-shadow": ["none", T, oo, so],
          },
        ],
        "text-shadow-color": [
          {
            "text-shadow": _(),
          },
        ],
        opacity: [
          {
            opacity: [xt, et, tt],
          },
        ],
        "mix-blend": [
          {
            "mix-blend": [...st(), "plus-darker", "plus-lighter"],
          },
        ],
        "bg-blend": [
          {
            "bg-blend": st(),
          },
        ],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          {
            mask: ["add", "subtract", "intersect", "exclude"],
          },
        ],
        "mask-image-linear-pos": [
          {
            "mask-linear": [xt],
          },
        ],
        "mask-image-linear-from-pos": [
          {
            "mask-linear-from": at(),
          },
        ],
        "mask-image-linear-to-pos": [
          {
            "mask-linear-to": at(),
          },
        ],
        "mask-image-linear-from-color": [
          {
            "mask-linear-from": _(),
          },
        ],
        "mask-image-linear-to-color": [
          {
            "mask-linear-to": _(),
          },
        ],
        "mask-image-t-from-pos": [
          {
            "mask-t-from": at(),
          },
        ],
        "mask-image-t-to-pos": [
          {
            "mask-t-to": at(),
          },
        ],
        "mask-image-t-from-color": [
          {
            "mask-t-from": _(),
          },
        ],
        "mask-image-t-to-color": [
          {
            "mask-t-to": _(),
          },
        ],
        "mask-image-r-from-pos": [
          {
            "mask-r-from": at(),
          },
        ],
        "mask-image-r-to-pos": [
          {
            "mask-r-to": at(),
          },
        ],
        "mask-image-r-from-color": [
          {
            "mask-r-from": _(),
          },
        ],
        "mask-image-r-to-color": [
          {
            "mask-r-to": _(),
          },
        ],
        "mask-image-b-from-pos": [
          {
            "mask-b-from": at(),
          },
        ],
        "mask-image-b-to-pos": [
          {
            "mask-b-to": at(),
          },
        ],
        "mask-image-b-from-color": [
          {
            "mask-b-from": _(),
          },
        ],
        "mask-image-b-to-color": [
          {
            "mask-b-to": _(),
          },
        ],
        "mask-image-l-from-pos": [
          {
            "mask-l-from": at(),
          },
        ],
        "mask-image-l-to-pos": [
          {
            "mask-l-to": at(),
          },
        ],
        "mask-image-l-from-color": [
          {
            "mask-l-from": _(),
          },
        ],
        "mask-image-l-to-color": [
          {
            "mask-l-to": _(),
          },
        ],
        "mask-image-x-from-pos": [
          {
            "mask-x-from": at(),
          },
        ],
        "mask-image-x-to-pos": [
          {
            "mask-x-to": at(),
          },
        ],
        "mask-image-x-from-color": [
          {
            "mask-x-from": _(),
          },
        ],
        "mask-image-x-to-color": [
          {
            "mask-x-to": _(),
          },
        ],
        "mask-image-y-from-pos": [
          {
            "mask-y-from": at(),
          },
        ],
        "mask-image-y-to-pos": [
          {
            "mask-y-to": at(),
          },
        ],
        "mask-image-y-from-color": [
          {
            "mask-y-from": _(),
          },
        ],
        "mask-image-y-to-color": [
          {
            "mask-y-to": _(),
          },
        ],
        "mask-image-radial": [
          {
            "mask-radial": [et, tt],
          },
        ],
        "mask-image-radial-from-pos": [
          {
            "mask-radial-from": at(),
          },
        ],
        "mask-image-radial-to-pos": [
          {
            "mask-radial-to": at(),
          },
        ],
        "mask-image-radial-from-color": [
          {
            "mask-radial-from": _(),
          },
        ],
        "mask-image-radial-to-color": [
          {
            "mask-radial-to": _(),
          },
        ],
        "mask-image-radial-shape": [
          {
            "mask-radial": ["circle", "ellipse"],
          },
        ],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              {
                closest: ["side", "corner"],
                farthest: ["side", "corner"],
              },
            ],
          },
        ],
        "mask-image-radial-pos": [
          {
            "mask-radial-at": $(),
          },
        ],
        "mask-image-conic-pos": [
          {
            "mask-conic": [xt],
          },
        ],
        "mask-image-conic-from-pos": [
          {
            "mask-conic-from": at(),
          },
        ],
        "mask-image-conic-to-pos": [
          {
            "mask-conic-to": at(),
          },
        ],
        "mask-image-conic-from-color": [
          {
            "mask-conic-from": _(),
          },
        ],
        "mask-image-conic-to-color": [
          {
            "mask-conic-to": _(),
          },
        ],
        "mask-mode": [
          {
            mask: ["alpha", "luminance", "match"],
          },
        ],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [
          {
            mask: it(),
          },
        ],
        "mask-repeat": [
          {
            mask: ct(),
          },
        ],
        "mask-size": [
          {
            mask: E(),
          },
        ],
        "mask-type": [
          {
            "mask-type": ["alpha", "luminance"],
          },
        ],
        "mask-image": [
          {
            mask: ["none", et, tt],
          },
        ],
        filter: [
          {
            filter: ["", "none", et, tt],
          },
        ],
        blur: [
          {
            blur: ut(),
          },
        ],
        brightness: [
          {
            brightness: [xt, et, tt],
          },
        ],
        contrast: [
          {
            contrast: [xt, et, tt],
          },
        ],
        "drop-shadow": [
          {
            "drop-shadow": ["", "none", C, oo, so],
          },
        ],
        "drop-shadow-color": [
          {
            "drop-shadow": _(),
          },
        ],
        grayscale: [
          {
            grayscale: ["", xt, et, tt],
          },
        ],
        "hue-rotate": [
          {
            "hue-rotate": [xt, et, tt],
          },
        ],
        invert: [
          {
            invert: ["", xt, et, tt],
          },
        ],
        saturate: [
          {
            saturate: [xt, et, tt],
          },
        ],
        sepia: [
          {
            sepia: ["", xt, et, tt],
          },
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": ["", "none", et, tt],
          },
        ],
        "backdrop-blur": [
          {
            "backdrop-blur": ut(),
          },
        ],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [xt, et, tt],
          },
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [xt, et, tt],
          },
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": ["", xt, et, tt],
          },
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [xt, et, tt],
          },
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": ["", xt, et, tt],
          },
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [xt, et, tt],
          },
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [xt, et, tt],
          },
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": ["", xt, et, tt],
          },
        ],
        "border-collapse": [
          {
            border: ["collapse", "separate"],
          },
        ],
        "border-spacing": [
          {
            "border-spacing": Z(),
          },
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": Z(),
          },
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": Z(),
          },
        ],
        "table-layout": [
          {
            table: ["auto", "fixed"],
          },
        ],
        caption: [
          {
            caption: ["top", "bottom"],
          },
        ],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              et,
              tt,
            ],
          },
        ],
        "transition-behavior": [
          {
            transition: ["normal", "discrete"],
          },
        ],
        duration: [
          {
            duration: [xt, "initial", et, tt],
          },
        ],
        ease: [
          {
            ease: ["linear", "initial", k, et, tt],
          },
        ],
        delay: [
          {
            delay: [xt, et, tt],
          },
        ],
        animate: [
          {
            animate: ["none", P, et, tt],
          },
        ],
        backface: [
          {
            backface: ["hidden", "visible"],
          },
        ],
        perspective: [
          {
            perspective: [q, et, tt],
          },
        ],
        "perspective-origin": [
          {
            "perspective-origin": I(),
          },
        ],
        rotate: [
          {
            rotate: Tt(),
          },
        ],
        "rotate-x": [
          {
            "rotate-x": Tt(),
          },
        ],
        "rotate-y": [
          {
            "rotate-y": Tt(),
          },
        ],
        "rotate-z": [
          {
            "rotate-z": Tt(),
          },
        ],
        scale: [
          {
            scale: ae(),
          },
        ],
        "scale-x": [
          {
            "scale-x": ae(),
          },
        ],
        "scale-y": [
          {
            "scale-y": ae(),
          },
        ],
        "scale-z": [
          {
            "scale-z": ae(),
          },
        ],
        "scale-3d": ["scale-3d"],
        skew: [
          {
            skew: de(),
          },
        ],
        "skew-x": [
          {
            "skew-x": de(),
          },
        ],
        "skew-y": [
          {
            "skew-y": de(),
          },
        ],
        transform: [
          {
            transform: [et, tt, "", "none", "gpu", "cpu"],
          },
        ],
        "transform-origin": [
          {
            origin: I(),
          },
        ],
        "transform-style": [
          {
            transform: ["3d", "flat"],
          },
        ],
        translate: [
          {
            translate: ne(),
          },
        ],
        "translate-x": [
          {
            "translate-x": ne(),
          },
        ],
        "translate-y": [
          {
            "translate-y": ne(),
          },
        ],
        "translate-z": [
          {
            "translate-z": ne(),
          },
        ],
        "translate-none": ["translate-none"],
        accent: [
          {
            accent: _(),
          },
        ],
        appearance: [
          {
            appearance: ["none", "auto"],
          },
        ],
        "caret-color": [
          {
            caret: _(),
          },
        ],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              et,
              tt,
            ],
          },
        ],
        "field-sizing": [
          {
            "field-sizing": ["fixed", "content"],
          },
        ],
        "pointer-events": [
          {
            "pointer-events": ["auto", "none"],
          },
        ],
        resize: [
          {
            resize: ["none", "", "y", "x"],
          },
        ],
        "scroll-behavior": [
          {
            scroll: ["auto", "smooth"],
          },
        ],
        "scroll-m": [
          {
            "scroll-m": Z(),
          },
        ],
        "scroll-mx": [
          {
            "scroll-mx": Z(),
          },
        ],
        "scroll-my": [
          {
            "scroll-my": Z(),
          },
        ],
        "scroll-ms": [
          {
            "scroll-ms": Z(),
          },
        ],
        "scroll-me": [
          {
            "scroll-me": Z(),
          },
        ],
        "scroll-mt": [
          {
            "scroll-mt": Z(),
          },
        ],
        "scroll-mr": [
          {
            "scroll-mr": Z(),
          },
        ],
        "scroll-mb": [
          {
            "scroll-mb": Z(),
          },
        ],
        "scroll-ml": [
          {
            "scroll-ml": Z(),
          },
        ],
        "scroll-p": [
          {
            "scroll-p": Z(),
          },
        ],
        "scroll-px": [
          {
            "scroll-px": Z(),
          },
        ],
        "scroll-py": [
          {
            "scroll-py": Z(),
          },
        ],
        "scroll-ps": [
          {
            "scroll-ps": Z(),
          },
        ],
        "scroll-pe": [
          {
            "scroll-pe": Z(),
          },
        ],
        "scroll-pt": [
          {
            "scroll-pt": Z(),
          },
        ],
        "scroll-pr": [
          {
            "scroll-pr": Z(),
          },
        ],
        "scroll-pb": [
          {
            "scroll-pb": Z(),
          },
        ],
        "scroll-pl": [
          {
            "scroll-pl": Z(),
          },
        ],
        "snap-align": [
          {
            snap: ["start", "end", "center", "align-none"],
          },
        ],
        "snap-stop": [
          {
            snap: ["normal", "always"],
          },
        ],
        "snap-type": [
          {
            snap: ["none", "x", "y", "both"],
          },
        ],
        "snap-strictness": [
          {
            snap: ["mandatory", "proximity"],
          },
        ],
        touch: [
          {
            touch: ["auto", "none", "manipulation"],
          },
        ],
        "touch-x": [
          {
            "touch-pan": ["x", "left", "right"],
          },
        ],
        "touch-y": [
          {
            "touch-pan": ["y", "up", "down"],
          },
        ],
        "touch-pz": ["touch-pinch-zoom"],
        select: [
          {
            select: ["none", "text", "all", "auto"],
          },
        ],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", et, tt],
          },
        ],
        fill: [
          {
            fill: ["none", ..._()],
          },
        ],
        "stroke-w": [
          {
            stroke: [xt, Ui, Ln, Qr],
          },
        ],
        stroke: [
          {
            stroke: ["none", ..._()],
          },
        ],
        "forced-color-adjust": [
          {
            "forced-color-adjust": ["auto", "none"],
          },
        ],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"],
      },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  Wb = Ob(Jb);
function Gi(...i) {
  return Wb(Gg(i));
}
function $b({ delayDuration: i = 0, ...o }) {
  return g.jsx(gb, {
    "data-loc": "client/src/components/ui/tooltip.tsx:11",
    "data-slot": "tooltip-provider",
    delayDuration: i,
    ...o,
  });
}
const Vh = (i) => (typeof i == "boolean" ? `${i}` : i === 0 ? "0" : i),
  Xh = Gg,
  Fb = (i, o) => (r) => {
    var c;
    if (o?.variants == null) return Xh(i, r?.class, r?.className);
    const { variants: f, defaultVariants: d } = o,
      y = Object.keys(f).map((p) => {
        const x = r?.[p],
          m = d?.[p];
        if (x === null) return null;
        const T = Vh(x) || Vh(m);
        return f[p][T];
      }),
      S =
        r &&
        Object.entries(r).reduce((p, x) => {
          let [m, T] = x;
          return (T === void 0 || (p[m] = T), p);
        }, {}),
      v =
        o == null || (c = o.compoundVariants) === null || c === void 0
          ? void 0
          : c.reduce((p, x) => {
              let { class: m, className: T, ...C } = x;
              return Object.entries(C).every((M) => {
                let [q, V] = M;
                return Array.isArray(V)
                  ? V.includes(
                      {
                        ...d,
                        ...S,
                      }[q],
                    )
                  : {
                      ...d,
                      ...S,
                    }[q] === V;
              })
                ? [...p, m, T]
                : p;
            }, []);
    return Xh(i, y, v, r?.class, r?.className);
  },
  Pb = Fb(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
          outline:
            "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent dark:hover:bg-accent/50",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9",
          "icon-sm": "size-8",
          "icon-lg": "size-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    },
  );
function Cl({ className: i, variant: o, size: r, asChild: c = !1, ...f }) {
  const d = c ? rv : "button";
  return g.jsx(d, {
    "data-loc": "client/src/components/ui/button.tsx:52",
    "data-slot": "button",
    className: Gi(
      Pb({
        variant: o,
        size: r,
        className: i,
      }),
    ),
    ...f,
  });
}
function su({ className: i, ...o }) {
  return g.jsx("div", {
    "data-loc": "client/src/components/ui/card.tsx:7",
    "data-slot": "card",
    className: Gi(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      i,
    ),
    ...o,
  });
}
function Ib({ className: i, ...o }) {
  return g.jsx("div", {
    "data-loc": "client/src/components/ui/card.tsx:66",
    "data-slot": "card-content",
    className: Gi("px-6", i),
    ...o,
  });
}
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t1 = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Pg = (...i) => i.filter((o, r, c) => !!o && c.indexOf(o) === r).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var e1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a1 = O.forwardRef(
  (
    {
      color: i = "currentColor",
      size: o = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: c,
      className: f = "",
      children: d,
      iconNode: y,
      ...S
    },
    v,
  ) =>
    O.createElement(
      "svg",
      {
        ref: v,
        ...e1,
        width: o,
        height: o,
        stroke: i,
        strokeWidth: c ? (Number(r) * 24) / Number(o) : r,
        className: Pg("lucide", f),
        ...S,
      },
      [
        ...y.map(([p, x]) => O.createElement(p, x)),
        ...(Array.isArray(d) ? d : [d]),
      ],
    ),
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = (i, o) => {
  const r = O.forwardRef(({ className: c, ...f }, d) =>
    O.createElement(a1, {
      ref: d,
      iconNode: o,
      className: Pg(`lucide-${t1(i)}`, c),
      ...f,
    }),
  );
  return ((r.displayName = `${i}`), r);
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n1 = He("ArrowRight", [
  [
    "path",
    {
      d: "M5 12h14",
      key: "1ays0h",
    },
  ],
  [
    "path",
    {
      d: "m12 5 7 7-7 7",
      key: "xquz4c",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = He("Calendar", [
  [
    "path",
    {
      d: "M8 2v4",
      key: "1cmpym",
    },
  ],
  [
    "path",
    {
      d: "M16 2v4",
      key: "4m81vk",
    },
  ],
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
      key: "1hopcy",
    },
  ],
  [
    "path",
    {
      d: "M3 10h18",
      key: "8toen8",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1 = He("CircleAlert", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "line",
    {
      x1: "12",
      x2: "12",
      y1: "8",
      y2: "12",
      key: "1pkeuh",
    },
  ],
  [
    "line",
    {
      x1: "12",
      x2: "12.01",
      y1: "16",
      y2: "16",
      key: "4dfq90",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = He("CircleCheck", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "m9 12 2 2 4-4",
      key: "dzmm74",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o1 = He("House", [
  [
    "path",
    {
      d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
      key: "5wwlr5",
    },
  ],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = He("RotateCcw", [
  [
    "path",
    {
      d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
      key: "1357e3",
    },
  ],
  [
    "path",
    {
      d: "M3 3v5h5",
      key: "1xhq8a",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qh = He("ShoppingCart", [
  [
    "circle",
    {
      cx: "8",
      cy: "21",
      r: "1",
      key: "jimo8o",
    },
  ],
  [
    "circle",
    {
      cx: "19",
      cy: "21",
      r: "1",
      key: "13723u",
    },
  ],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = He("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  [
    "path",
    {
      d: "M12 18h.01",
      key: "mhygvu",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zh = He("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  [
    "path",
    {
      d: "M20 3v4",
      key: "1olli1",
    },
  ],
  [
    "path",
    {
      d: "M22 5h-4",
      key: "1gvqau",
    },
  ],
  [
    "path",
    {
      d: "M4 17v2",
      key: "vumght",
    },
  ],
  [
    "path",
    {
      d: "M5 18H3",
      key: "zchphs",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r1 = He("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = He("TrendingUp", [
  [
    "polyline",
    {
      points: "22 7 13.5 15.5 8.5 10.5 2 17",
      key: "126l90",
    },
  ],
  [
    "polyline",
    {
      points: "16 7 22 7 22 13",
      key: "kwv8wd",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = He("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  [
    "path",
    {
      d: "M12 9v4",
      key: "juzpu7",
    },
  ],
  [
    "path",
    {
      d: "M12 17h.01",
      key: "p32p05",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = He("Users", [
  [
    "path",
    {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq",
    },
  ],
  [
    "circle",
    {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8",
    },
  ],
  [
    "path",
    {
      d: "M22 21v-2a4 4 0 0 0-3-3.87",
      key: "kshegd",
    },
  ],
  [
    "path",
    {
      d: "M16 3.13a4 4 0 0 1 0 7.75",
      key: "1da9ce",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = He("Zap", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db",
    },
  ],
]);
function m1(i, o) {
  if (i instanceof RegExp)
    return {
      keys: !1,
      pattern: i,
    };
  var r,
    c,
    f,
    d,
    y = [],
    S = "",
    v = i.split("/");
  for (v[0] || v.shift(); (f = v.shift()); )
    ((r = f[0]),
      r === "*"
        ? (y.push(r), (S += f[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : r === ":"
          ? ((c = f.indexOf("?", 1)),
            (d = f.indexOf(".", 1)),
            y.push(f.substring(1, ~c ? c : ~d ? d : f.length)),
            (S += ~c && !~d ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~d && (S += (~c ? "?" : "") + "\\" + f.substring(d)))
          : (S += "/" + f));
  return {
    keys: y,
    pattern: new RegExp("^" + S + (o ? "(?=$|/)" : "/?$"), "i"),
  };
}
var Jr = {
    exports: {},
  },
  Wr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kh;
function h1() {
  if (Kh) return Wr;
  Kh = 1;
  var i = go();
  function o(m, T) {
    return (m === T && (m !== 0 || 1 / m === 1 / T)) || (m !== m && T !== T);
  }
  var r = typeof Object.is == "function" ? Object.is : o,
    c = i.useState,
    f = i.useEffect,
    d = i.useLayoutEffect,
    y = i.useDebugValue;
  function S(m, T) {
    var C = T(),
      M = c({
        inst: {
          value: C,
          getSnapshot: T,
        },
      }),
      q = M[0].inst,
      V = M[1];
    return (
      d(
        function () {
          ((q.value = C),
            (q.getSnapshot = T),
            v(q) &&
              V({
                inst: q,
              }));
        },
        [m, C, T],
      ),
      f(
        function () {
          return (
            v(q) &&
              V({
                inst: q,
              }),
            m(function () {
              v(q) &&
                V({
                  inst: q,
                });
            })
          );
        },
        [m],
      ),
      y(C),
      C
    );
  }
  function v(m) {
    var T = m.getSnapshot;
    m = m.value;
    try {
      var C = T();
      return !r(m, C);
    } catch {
      return !0;
    }
  }
  function p(m, T) {
    return T();
  }
  var x =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? p
      : S;
  return (
    (Wr.useSyncExternalStore =
      i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : x),
    Wr
  );
}
var Jh;
function g1() {
  return (Jh || ((Jh = 1), (Jr.exports = h1())), Jr.exports);
}
var p1 = g1();
const y1 = Hy.useInsertionEffect,
  v1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  x1 = v1 ? O.useLayoutEffect : O.useEffect,
  b1 = y1 || x1,
  Ig = (i) => {
    const o = O.useRef([i, (...r) => o[0](...r)]).current;
    return (
      b1(() => {
        o[0] = i;
      }),
      o[1]
    );
  },
  S1 = "popstate",
  vu = "pushState",
  xu = "replaceState",
  E1 = "hashchange",
  Wh = [S1, vu, xu, E1],
  w1 = (i) => {
    for (const o of Wh) addEventListener(o, i);
    return () => {
      for (const o of Wh) removeEventListener(o, i);
    };
  },
  tp = (i, o) => p1.useSyncExternalStore(w1, i, o),
  N1 = () => location.search,
  A1 = ({ ssrSearch: i = "" } = {}) => tp(N1, () => i),
  $h = () => location.pathname,
  T1 = ({ ssrPath: i } = {}) => tp($h, i ? () => i : $h),
  z1 = (i, { replace: o = !1, state: r = null } = {}) =>
    history[o ? xu : vu](r, "", i),
  H1 = (i = {}) => [T1(i), z1],
  Fh = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Fh] > "u") {
  for (const i of [vu, xu]) {
    const o = history[i];
    history[i] = function () {
      const r = o.apply(this, arguments),
        c = new Event(i);
      return ((c.arguments = arguments), dispatchEvent(c), r);
    };
  }
  Object.defineProperty(window, Fh, {
    value: !0,
  });
}
const O1 = (i, o) =>
    o.toLowerCase().indexOf(i.toLowerCase())
      ? "~" + o
      : o.slice(i.length) || "/",
  ep = (i = "") => (i === "/" ? "" : i),
  j1 = (i, o) => (i[0] === "~" ? i.slice(1) : ep(o) + i),
  C1 = (i = "", o) => O1(Ph(ep(i)), Ph(o)),
  Ph = (i) => {
    try {
      return decodeURI(i);
    } catch {
      return i;
    }
  },
  ap = {
    hook: H1,
    searchHook: A1,
    parser: m1,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (i) => i,
  },
  np = O.createContext(ap),
  ki = () => O.useContext(np),
  lp = {},
  ip = O.createContext(lp),
  M1 = () => O.useContext(ip),
  wo = (i) => {
    const [o, r] = i.hook(i);
    return [C1(i.base, o), Ig((c, f) => r(j1(c, i.base), f))];
  },
  _1 = () => wo(ki()),
  sp = (i, o, r, c) => {
    const { pattern: f, keys: d } =
        o instanceof RegExp
          ? {
              keys: !1,
              pattern: o,
            }
          : i(o || "*", c),
      y = f.exec(r) || [],
      [S, ...v] = y;
    return S !== void 0
      ? [
          !0,
          (() => {
            const p =
              d !== !1
                ? Object.fromEntries(d.map((m, T) => [m, v[T]]))
                : y.groups;
            let x = {
              ...v,
            };
            return (p && Object.assign(x, p), x);
          })(),
          ...(c ? [S] : []),
        ]
      : [!1, null];
  },
  R1 = ({ children: i, ...o }) => {
    const r = ki(),
      c = o.hook ? ap : r;
    let f = c;
    const [d, y] = o.ssrPath?.split("?") ?? [];
    (y && ((o.ssrSearch = y), (o.ssrPath = d)),
      (o.hrefs = o.hrefs ?? o.hook?.hrefs));
    let S = O.useRef({}),
      v = S.current,
      p = v;
    for (let x in c) {
      const m = x === "base" ? c[x] + (o[x] || "") : o[x] || c[x];
      (v === p &&
        m !== p[x] &&
        (S.current = p =
          {
            ...p,
          }),
        (p[x] = m),
        (m !== c[x] || m !== f[x]) && (f = p));
    }
    return O.createElement(np.Provider, {
      value: f,
      children: i,
    });
  },
  Ih = ({ children: i, component: o }, r) =>
    o
      ? O.createElement(o, {
          params: r,
        })
      : typeof i == "function"
        ? i(r)
        : i,
  D1 = (i) => {
    let o = O.useRef(lp);
    const r = o.current;
    return (o.current =
      Object.keys(i).length !== Object.keys(r).length ||
      Object.entries(i).some(([c, f]) => f !== r[c])
        ? i
        : r);
  },
  $r = ({ path: i, nest: o, match: r, ...c }) => {
    const f = ki(),
      [d] = wo(f),
      [y, S, v] = r ?? sp(f.parser, i, d, o),
      p = D1({
        ...M1(),
        ...S,
      });
    if (!y) return null;
    const x = v
      ? O.createElement(
          R1,
          {
            base: v,
          },
          Ih(c, p),
        )
      : Ih(c, p);
    return O.createElement(ip.Provider, {
      value: p,
      children: x,
    });
  };
O.forwardRef((i, o) => {
  const r = ki(),
    [c, f] = wo(r),
    {
      to: d = "",
      href: y = d,
      onClick: S,
      asChild: v,
      children: p,
      className: x,
      replace: m,
      state: T,
      ...C
    } = i,
    M = Ig((V) => {
      V.ctrlKey ||
        V.metaKey ||
        V.altKey ||
        V.shiftKey ||
        V.button !== 0 ||
        (S?.(V), V.defaultPrevented || (V.preventDefault(), f(y, i)));
    }),
    q = r.hrefs(y[0] === "~" ? y.slice(1) : r.base + y, r);
  return v && O.isValidElement(p)
    ? O.cloneElement(p, {
        onClick: M,
        href: q,
      })
    : O.createElement("a", {
        ...C,
        onClick: M,
        href: q,
        className: x?.call ? x(c === y) : x,
        children: p,
        ref: o,
      });
});
const ou = (i) =>
    Array.isArray(i)
      ? i.flatMap((o) => ou(o && o.type === O.Fragment ? o.props.children : o))
      : [i],
  U1 = ({ children: i, location: o }) => {
    const r = ki(),
      [c] = wo(r);
    typeof window < "u" &&
      (window.__WOUTER_ROUTES__ || (window.__WOUTER_ROUTES__ = []),
      ou(i).forEach((d) => {
        if (O.isValidElement(d) && d.props.path) {
          const y = d.props.path;
          window.__WOUTER_ROUTES__.includes(y) ||
            window.__WOUTER_ROUTES__.push(y);
        }
      }));
    for (const f of ou(i)) {
      let d = 0;
      if (
        O.isValidElement(f) &&
        (d = sp(r.parser, f.props.path, o || c, f.props.nest))[0]
      )
        return O.cloneElement(f, {
          match: d,
        });
    }
    return null;
  };
function tg() {
  const [, i] = _1(),
    o = () => {
      i("/");
    };
  return g.jsx("div", {
    "data-loc": "client/src/pages/NotFound.tsx:14",
    className:
      "min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",
    children: g.jsx(su, {
      "data-loc": "client/src/pages/NotFound.tsx:15",
      className:
        "w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",
      children: g.jsxs(Ib, {
        "data-loc": "client/src/pages/NotFound.tsx:16",
        className: "pt-8 pb-8 text-center",
        children: [
          g.jsx("div", {
            "data-loc": "client/src/pages/NotFound.tsx:17",
            className: "flex justify-center mb-6",
            children: g.jsxs("div", {
              "data-loc": "client/src/pages/NotFound.tsx:18",
              className: "relative",
              children: [
                g.jsx("div", {
                  "data-loc": "client/src/pages/NotFound.tsx:19",
                  className:
                    "absolute inset-0 bg-red-100 rounded-full animate-pulse",
                }),
                g.jsx(i1, {
                  "data-loc": "client/src/pages/NotFound.tsx:20",
                  className: "relative h-16 w-16 text-red-500",
                }),
              ],
            }),
          }),
          g.jsx("h1", {
            "data-loc": "client/src/pages/NotFound.tsx:24",
            className: "text-4xl font-bold text-slate-900 mb-2",
            children: "404",
          }),
          g.jsx("h2", {
            "data-loc": "client/src/pages/NotFound.tsx:26",
            className: "text-xl font-semibold text-slate-700 mb-4",
            children: "Page Not Found",
          }),
          g.jsxs("p", {
            "data-loc": "client/src/pages/NotFound.tsx:30",
            className: "text-slate-600 mb-8 leading-relaxed",
            children: [
              "Sorry, the page you are looking for doesn't exist.",
              g.jsx("br", {
                "data-loc": "client/src/pages/NotFound.tsx:32",
              }),
              "It may have been moved or deleted.",
            ],
          }),
          g.jsx("div", {
            "data-loc": "client/src/pages/NotFound.tsx:36",
            className: "flex flex-col sm:flex-row gap-3 justify-center",
            children: g.jsxs(Cl, {
              "data-loc": "client/src/pages/NotFound.tsx:37",
              onClick: o,
              className:
                "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",
              children: [
                g.jsx(o1, {
                  "data-loc": "client/src/pages/NotFound.tsx:41",
                  className: "w-4 h-4 mr-2",
                }),
                "Go Home",
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
class B1 extends O.Component {
  constructor(o) {
    (super(o),
      (this.state = {
        hasError: !1,
        error: null,
      }));
  }
  static getDerivedStateFromError(o) {
    return {
      hasError: !0,
      error: o,
    };
  }
  render() {
    return this.state.hasError
      ? g.jsx("div", {
          "data-loc": "client/src/components/ErrorBoundary.tsx:27",
          className:
            "flex items-center justify-center min-h-screen p-8 bg-background",
          children: g.jsxs("div", {
            "data-loc": "client/src/components/ErrorBoundary.tsx:28",
            className: "flex flex-col items-center w-full max-w-2xl p-8",
            children: [
              g.jsx(u1, {
                "data-loc": "client/src/components/ErrorBoundary.tsx:29",
                size: 48,
                className: "text-destructive mb-6 flex-shrink-0",
              }),
              g.jsx("h2", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:34",
                className: "text-xl mb-4",
                children: "An unexpected error occurred.",
              }),
              g.jsx("div", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:36",
                className: "p-4 w-full rounded bg-muted overflow-auto mb-6",
                children: g.jsx("pre", {
                  "data-loc": "client/src/components/ErrorBoundary.tsx:37",
                  className:
                    "text-sm text-muted-foreground whitespace-break-spaces",
                  children: this.state.error?.stack,
                }),
              }),
              g.jsxs("button", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:42",
                onClick: () => window.location.reload(),
                className: Gi(
                  "flex items-center gap-2 px-4 py-2 rounded-lg",
                  "bg-primary text-primary-foreground",
                  "hover:opacity-90 cursor-pointer",
                ),
                children: [
                  g.jsx(c1, {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:50",
                    size: 16,
                  }),
                  "Reload Page",
                ],
              }),
            ],
          }),
        })
      : this.props.children;
  }
}
const L1 = O.createContext(void 0);
function Y1({ children: i, defaultTheme: o = "light", switchable: r = !1 }) {
  const [c, f] = O.useState(() => (r && localStorage.getItem("theme")) || o);
  O.useEffect(() => {
    const y = document.documentElement;
    (c === "dark" ? y.classList.add("dark") : y.classList.remove("dark"),
      r && localStorage.setItem("theme", c));
  }, [c, r]);
  const d = r
    ? () => {
        f((y) => (y === "light" ? "dark" : "light"));
      }
    : void 0;
  return g.jsx(L1.Provider, {
    "data-loc": "client/src/contexts/ThemeContext.tsx:52",
    value: {
      theme: c,
      toggleTheme: d,
      switchable: r,
    },
    children: i,
  });
}
const q1 = O.createContext({
    isComposing: () => !1,
    setComposing: () => {},
    justEndedComposing: () => !1,
    markCompositionEnd: () => {},
  }),
  G1 = () => O.useContext(q1);
function co(i) {
  const o = O.useRef(i);
  o.current = i;
  const r = O.useRef(null);
  return (
    r.current ||
      (r.current = function (...c) {
        return o.current.apply(this, c);
      }),
    r.current
  );
}
function k1(i = {}) {
  const { onKeyDown: o, onCompositionStart: r, onCompositionEnd: c } = i,
    f = O.useRef(!1),
    d = O.useRef(null),
    y = O.useRef(null),
    S = co((m) => {
      (d.current && (clearTimeout(d.current), (d.current = null)),
        y.current && (clearTimeout(y.current), (y.current = null)),
        (f.current = !0),
        r?.(m));
    }),
    v = co((m) => {
      ((d.current = setTimeout(() => {
        y.current = setTimeout(() => {
          f.current = !1;
        });
      })),
        c?.(m));
    }),
    p = co((m) => {
      if (
        f.current &&
        (m.key === "Escape" || (m.key === "Enter" && !m.shiftKey))
      ) {
        m.stopPropagation();
        return;
      }
      o?.(m);
    }),
    x = co(() => f.current);
  return {
    onCompositionStart: S,
    onCompositionEnd: v,
    onKeyDown: p,
    isComposing: x,
  };
}
function V1({
  className: i,
  type: o,
  onKeyDown: r,
  onCompositionStart: c,
  onCompositionEnd: f,
  ...d
}) {
  const y = G1(),
    {
      onCompositionStart: S,
      onCompositionEnd: v,
      onKeyDown: p,
    } = k1({
      onKeyDown: (x) => {
        const m = x.nativeEvent.isComposing || y.justEndedComposing();
        (x.key === "Enter" && m) || r?.(x);
      },
      onCompositionStart: (x) => {
        (y.setComposing(!0), c?.(x));
      },
      onCompositionEnd: (x) => {
        (y.markCompositionEnd(),
          setTimeout(() => {
            y.setComposing(!1);
          }, 100),
          f?.(x));
      },
    });
  return g.jsx("input", {
    "data-loc": "client/src/components/ui/input.tsx:53",
    type: o,
    "data-slot": "input",
    className: Gi(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      i,
    ),
    onCompositionStart: S,
    onCompositionEnd: v,
    onKeyDown: p,
    ...d,
  });
}
function X1() {
  const [i, o] = O.useState(""),
    [r, c] = O.useState(!1),
    f = () => {
      i.length === 10 && c(!0);
    };
  return g.jsxs("div", {
    "data-loc": "client/src/pages/Home.tsx:25",
    className: "min-h-screen bg-background",
    children: [
      g.jsx("nav", {
        "data-loc": "client/src/pages/Home.tsx:27",
        className:
          "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border",
        children: g.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:28",
          className: "container flex items-center justify-between py-4",
          children: [
            g.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:29",
              className: "flex items-center gap-2",
              children: [
                g.jsx(Zr, {
                  "data-loc": "client/src/pages/Home.tsx:30",
                  className: "w-8 h-8 text-primary",
                }),
                g.jsx("span", {
                  "data-loc": "client/src/pages/Home.tsx:31",
                  className: "text-2xl font-bold gradient-text",
                  children: "Moboscope",
                }),
              ],
            }),
            g.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:33",
              className: "hidden md:flex items-center gap-8",
              children: [
                g.jsx("a", {
                  "data-loc": "client/src/pages/Home.tsx:34",
                  href: "#features",
                  className:
                    "text-foreground/70 hover:text-foreground transition-colors",
                  children: "Features",
                }),
                g.jsx("a", {
                  "data-loc": "client/src/pages/Home.tsx:35",
                  href: "#how-it-works",
                  className:
                    "text-foreground/70 hover:text-foreground transition-colors",
                  children: "How It Works",
                }),
                g.jsx("a", {
                  "data-loc": "client/src/pages/Home.tsx:36",
                  href: "#marketplace",
                  className:
                    "text-foreground/70 hover:text-foreground transition-colors",
                  children: "Marketplace",
                }),
              ],
            }),
            g.jsx(Cl, {
              "data-loc": "client/src/pages/Home.tsx:38",
              className: "bg-primary hover:bg-primary/90 text-white",
              children: "Get Started",
            }),
          ],
        }),
      }),
      g.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:43",
        className: "relative overflow-hidden py-20 md:py-32",
        children: [
          g.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:45",
            className: "absolute inset-0 z-0",
            style: {
              backgroundImage:
                "url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028997286/kdUJyfwazZhRHCgG89JZbo/hero-pattern-analysis-Pu8pGXkS5mpTtHMpE6vB8B.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.15,
            },
          }),
          g.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:55",
            className: "container relative z-10",
            children: g.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:56",
              className: "max-w-3xl mx-auto text-center fade-in-up",
              children: [
                g.jsx("h1", {
                  "data-loc": "client/src/pages/Home.tsx:57",
                  className:
                    "text-4xl md:text-6xl font-bold mb-6 text-foreground",
                  children: "Unlock the Hidden Value of Your Mobile Number",
                }),
                g.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:60",
                  className: "text-lg md:text-xl text-foreground/70 mb-8",
                  children:
                    "Analyze patterns, discover rarity, calculate numerology, and estimate the real market value of your 10-digit number.",
                }),
                g.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:65",
                  className:
                    "flex flex-col sm:flex-row gap-4 justify-center mb-12",
                  children: [
                    g.jsxs(Cl, {
                      "data-loc": "client/src/pages/Home.tsx:66",
                      size: "lg",
                      className:
                        "bg-primary hover:bg-primary/90 text-white gap-2",
                      children: [
                        g.jsx(Zh, {
                          "data-loc": "client/src/pages/Home.tsx:67",
                          className: "w-5 h-5",
                        }),
                        "Analyze My Number",
                      ],
                    }),
                    g.jsxs(Cl, {
                      "data-loc": "client/src/pages/Home.tsx:70",
                      size: "lg",
                      variant: "outline",
                      className: "gap-2",
                      children: [
                        g.jsx(Kr, {
                          "data-loc": "client/src/pages/Home.tsx:71",
                          className: "w-5 h-5",
                        }),
                        "Check Market Value",
                      ],
                    }),
                  ],
                }),
                g.jsxs("p", {
                  "data-loc": "client/src/pages/Home.tsx:77",
                  className:
                    "text-sm text-foreground/60 flex items-center justify-center gap-2",
                  children: [
                    g.jsx(s1, {
                      "data-loc": "client/src/pages/Home.tsx:78",
                      className: "w-4 h-4 text-accent",
                    }),
                    "Powered by advanced pattern recognition & numerology intelligence",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      g.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:86",
        className:
          "py-16 md:py-24 bg-gradient-to-b from-transparent to-secondary/20",
        children: g.jsx("div", {
          "data-loc": "client/src/pages/Home.tsx:87",
          className: "container",
          children: g.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:88",
            className: "max-w-2xl mx-auto",
            children: [
              g.jsx("h2", {
                "data-loc": "client/src/pages/Home.tsx:89",
                className: "text-3xl md:text-4xl font-bold text-center mb-8",
                children: "Try Moboscope Now",
              }),
              g.jsx(su, {
                "data-loc": "client/src/pages/Home.tsx:91",
                className: "floating-card p-8",
                children: g.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:92",
                  className: "space-y-4",
                  children: [
                    g.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:93",
                      children: [
                        g.jsx("label", {
                          "data-loc": "client/src/pages/Home.tsx:94",
                          className:
                            "block text-sm font-semibold text-foreground mb-2",
                          children: "Enter Your 10-Digit Mobile Number",
                        }),
                        g.jsxs("div", {
                          "data-loc": "client/src/pages/Home.tsx:97",
                          className: "flex gap-2",
                          children: [
                            g.jsx(V1, {
                              "data-loc": "client/src/pages/Home.tsx:98",
                              type: "tel",
                              placeholder: "9876543210",
                              maxLength: 10,
                              value: i,
                              onChange: (d) =>
                                o(d.target.value.replace(/\D/g, "")),
                              className: "flex-1 text-lg",
                            }),
                            g.jsxs(Cl, {
                              "data-loc": "client/src/pages/Home.tsx:106",
                              onClick: f,
                              disabled: i.length !== 10,
                              className:
                                "bg-accent hover:bg-accent/90 text-white gap-2",
                              children: [
                                g.jsx(d1, {
                                  "data-loc": "client/src/pages/Home.tsx:111",
                                  className: "w-5 h-5",
                                }),
                                "Analyze",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    r &&
                      g.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:118",
                        className:
                          "mt-6 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-accent/20 fade-in-scale",
                        children: g.jsxs("div", {
                          "data-loc": "client/src/pages/Home.tsx:119",
                          className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                          children: [
                            g.jsxs("div", {
                              "data-loc": "client/src/pages/Home.tsx:120",
                              className: "text-center",
                              children: [
                                g.jsx("div", {
                                  "data-loc": "client/src/pages/Home.tsx:121",
                                  className:
                                    "text-3xl font-bold gradient-text mb-1",
                                  children: "8.9",
                                }),
                                g.jsx("div", {
                                  "data-loc": "client/src/pages/Home.tsx:122",
                                  className: "text-xs text-foreground/60",
                                  children: "Rarity Score",
                                }),
                              ],
                            }),
                            g.jsxs("div", {
                              "data-loc": "client/src/pages/Home.tsx:124",
                              className: "text-center",
                              children: [
                                g.jsx("div", {
                                  "data-loc": "client/src/pages/Home.tsx:125",
                                  className:
                                    "text-3xl font-bold text-accent mb-1",
                                  children: "7",
                                }),
                                g.jsx("div", {
                                  "data-loc": "client/src/pages/Home.tsx:126",
                                  className: "text-xs text-foreground/60",
                                  children: "Numerology",
                                }),
                              ],
                            }),
                            g.jsxs("div", {
                              "data-loc": "client/src/pages/Home.tsx:128",
                              className: "text-center",
                              children: [
                                g.jsx("div", {
                                  "data-loc": "client/src/pages/Home.tsx:129",
                                  className:
                                    "text-3xl font-bold gradient-text mb-1",
                                  children: "₹75K",
                                }),
                                g.jsx("div", {
                                  "data-loc": "client/src/pages/Home.tsx:130",
                                  className: "text-xs text-foreground/60",
                                  children: "Min Value",
                                }),
                              ],
                            }),
                            g.jsxs("div", {
                              "data-loc": "client/src/pages/Home.tsx:132",
                              className: "text-center",
                              children: [
                                g.jsx("div", {
                                  "data-loc": "client/src/pages/Home.tsx:133",
                                  className:
                                    "text-3xl font-bold text-accent mb-1",
                                  children: "₹2L",
                                }),
                                g.jsx("div", {
                                  "data-loc": "client/src/pages/Home.tsx:134",
                                  className: "text-xs text-foreground/60",
                                  children: "Max Value",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      g.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:146",
        className: "py-20 md:py-28 bg-white",
        children: g.jsx("div", {
          "data-loc": "client/src/pages/Home.tsx:147",
          className: "container",
          children: g.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:148",
            className: "max-w-4xl mx-auto",
            children: [
              g.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:149",
                className: "text-center mb-12",
                children: [
                  g.jsx("h2", {
                    "data-loc": "client/src/pages/Home.tsx:150",
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: "What is Moboscope?",
                  }),
                  g.jsx("div", {
                    "data-loc": "client/src/pages/Home.tsx:151",
                    className: "accent-line w-16 h-1 mx-auto mb-6",
                  }),
                  g.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:152",
                    className: "text-lg text-foreground/70",
                    children: g.jsx("span", {
                      "data-loc": "client/src/pages/Home.tsx:153",
                      className: "font-semibold",
                      children: "Moboscope = Mobile + Microscope + Horoscope",
                    }),
                  }),
                ],
              }),
              g.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:157",
                className:
                  "prose prose-lg max-w-none text-foreground/80 space-y-4",
                children: [
                  g.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:158",
                    children:
                      "Moboscope is a first-of-its-kind platform that deeply analyzes your mobile number to uncover hidden mathematical patterns, rare combinations, and numerological significance.",
                  }),
                  g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:162",
                    className: "grid md:grid-cols-2 gap-6 my-8",
                    children: [
                      g.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:163",
                        className: "floating-card",
                        children: [
                          g.jsx("h4", {
                            "data-loc": "client/src/pages/Home.tsx:164",
                            className: "font-semibold text-primary mb-3",
                            children: "Pattern Recognition",
                          }),
                          g.jsxs("ul", {
                            "data-loc": "client/src/pages/Home.tsx:165",
                            className: "space-y-2 text-sm",
                            children: [
                              g.jsxs("li", {
                                "data-loc": "client/src/pages/Home.tsx:166",
                                className: "flex gap-2",
                                children: [
                                  g.jsx("span", {
                                    "data-loc": "client/src/pages/Home.tsx:167",
                                    className: "text-accent",
                                    children: "✓",
                                  }),
                                  g.jsx("span", {
                                    "data-loc": "client/src/pages/Home.tsx:168",
                                    children: "Birth date patterns",
                                  }),
                                ],
                              }),
                              g.jsxs("li", {
                                "data-loc": "client/src/pages/Home.tsx:170",
                                className: "flex gap-2",
                                children: [
                                  g.jsx("span", {
                                    "data-loc": "client/src/pages/Home.tsx:171",
                                    className: "text-accent",
                                    children: "✓",
                                  }),
                                  g.jsx("span", {
                                    "data-loc": "client/src/pages/Home.tsx:172",
                                    children: "Repeating digits (9999, 777)",
                                  }),
                                ],
                              }),
                              g.jsxs("li", {
                                "data-loc": "client/src/pages/Home.tsx:174",
                                className: "flex gap-2",
                                children: [
                                  g.jsx("span", {
                                    "data-loc": "client/src/pages/Home.tsx:175",
                                    className: "text-accent",
                                    children: "✓",
                                  }),
                                  g.jsx("span", {
                                    "data-loc": "client/src/pages/Home.tsx:176",
                                    children:
                                      "Sequential combinations (1234, 6789)",
                                  }),
                                ],
                              }),
                              g.jsxs("li", {
                                "data-loc": "client/src/pages/Home.tsx:178",
                                className: "flex gap-2",
                                children: [
                                  g.jsx("span", {
                                    "data-loc": "client/src/pages/Home.tsx:179",
                                    className: "text-accent",
                                    children: "✓",
                                  }),
                                  g.jsx("span", {
                                    "data-loc": "client/src/pages/Home.tsx:180",
                                    children: "Symmetry & mirror structures",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      g.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:185",
                        className: "floating-card",
                        children: [
                          g.jsx("h4", {
                            "data-loc": "client/src/pages/Home.tsx:186",
                            className: "font-semibold text-primary mb-3",
                            children: "Moboscope Identifies",
                          }),
                          g.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:187",
                            className: "text-sm text-foreground/70",
                            children:
                              "Real-world desirability and indicative market value for every unique number combination.",
                          }),
                          g.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:190",
                            className: "text-sm font-semibold text-accent mt-4",
                            children:
                              "Premium Moboscope numbers have genuine market demand",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      g.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:201",
        id: "features",
        className:
          "py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-transparent",
        children: g.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:202",
          className: "container",
          children: [
            g.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:203",
              className: "text-center mb-16",
              children: [
                g.jsx("h2", {
                  "data-loc": "client/src/pages/Home.tsx:204",
                  className: "text-3xl md:text-4xl font-bold mb-4",
                  children: "Key Features",
                }),
                g.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:205",
                  className: "accent-line w-16 h-1 mx-auto",
                }),
              ],
            }),
            g.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:208",
              className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto",
              children: [
                g.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:210",
                  className: "floating-card group",
                  children: g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:211",
                    className: "flex items-start gap-4",
                    children: [
                      g.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:212",
                        className:
                          "p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:from-primary/20 group-hover:to-accent/20 transition-colors",
                        children: g.jsx(Zh, {
                          "data-loc": "client/src/pages/Home.tsx:213",
                          className: "w-6 h-6 text-primary",
                        }),
                      }),
                      g.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:215",
                        children: [
                          g.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:216",
                            className: "text-xl font-bold mb-2",
                            children: "Pattern Intelligence Engine",
                          }),
                          g.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:217",
                            className: "text-foreground/70 text-sm",
                            children:
                              "Detects rare combinations like repetitions (AAAA, ABAB), sequences (1234, 4321), and palindromes (1221).",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                g.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:225",
                  className: "floating-card group",
                  children: g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:226",
                    className: "flex items-start gap-4",
                    children: [
                      g.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:227",
                        className:
                          "p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:from-primary/20 group-hover:to-accent/20 transition-colors",
                        children: g.jsx(r1, {
                          "data-loc": "client/src/pages/Home.tsx:228",
                          className: "w-6 h-6 text-accent",
                        }),
                      }),
                      g.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:230",
                        children: [
                          g.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:231",
                            className: "text-xl font-bold mb-2",
                            children: "Rarity Score & Valuation",
                          }),
                          g.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:232",
                            className: "text-foreground/70 text-sm",
                            children:
                              "Each number is scored based on uniqueness, memorability, and cultural demand. Generates estimated price range.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                g.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:240",
                  className: "floating-card group",
                  children: g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:241",
                    className: "flex items-start gap-4",
                    children: [
                      g.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:242",
                        className:
                          "p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:from-primary/20 group-hover:to-accent/20 transition-colors",
                        children: g.jsx(Zr, {
                          "data-loc": "client/src/pages/Home.tsx:243",
                          className: "w-6 h-6 text-primary",
                        }),
                      }),
                      g.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:245",
                        children: [
                          g.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:246",
                            className: "text-xl font-bold mb-2",
                            children: "Numerology Analysis",
                          }),
                          g.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:247",
                            className: "text-foreground/70 text-sm",
                            children:
                              "Calculates core number (1–9), aligns with personality & life path, suggests compatibility with DOB.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                g.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:255",
                  className: "floating-card group",
                  children: g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:256",
                    className: "flex items-start gap-4",
                    children: [
                      g.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:257",
                        className:
                          "p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:from-primary/20 group-hover:to-accent/20 transition-colors",
                        children: g.jsx(l1, {
                          "data-loc": "client/src/pages/Home.tsx:258",
                          className: "w-6 h-6 text-accent",
                        }),
                      }),
                      g.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:260",
                        children: [
                          g.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:261",
                            className: "text-xl font-bold mb-2",
                            children: "Date Pattern Detection",
                          }),
                          g.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:262",
                            className: "text-foreground/70 text-sm",
                            children:
                              "Identifies embedded dates like birthdays (15081990), anniversaries, and lucky dates. Significantly increases value.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                g.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:270",
                  className: "floating-card group",
                  children: g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:271",
                    className: "flex items-start gap-4",
                    children: [
                      g.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:272",
                        className:
                          "p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:from-primary/20 group-hover:to-accent/20 transition-colors",
                        children: g.jsx(Qh, {
                          "data-loc": "client/src/pages/Home.tsx:273",
                          className: "w-6 h-6 text-primary",
                        }),
                      }),
                      g.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:275",
                        children: [
                          g.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:276",
                            className: "text-xl font-bold mb-2",
                            children: "Marketplace Integration",
                          }),
                          g.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:277",
                            className: "text-foreground/70 text-sm",
                            children:
                              "List your number for sale, set your own price, and receive direct buyer inquiries.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                g.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:285",
                  className: "floating-card group",
                  children: g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:286",
                    className: "flex items-start gap-4",
                    children: [
                      g.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:287",
                        className:
                          "p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg group-hover:from-primary/20 group-hover:to-accent/20 transition-colors",
                        children: g.jsx(Kr, {
                          "data-loc": "client/src/pages/Home.tsx:288",
                          className: "w-6 h-6 text-accent",
                        }),
                      }),
                      g.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:290",
                        children: [
                          g.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:291",
                            className: "text-xl font-bold mb-2",
                            children: "Market Value Estimation",
                          }),
                          g.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:292",
                            className: "text-foreground/70 text-sm",
                            children:
                              "Get real-time market insights based on rarity, demand, and comparable Moboscope numbers.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      g.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:303",
        className: "py-20 md:py-28 bg-white",
        children: g.jsx("div", {
          "data-loc": "client/src/pages/Home.tsx:304",
          className: "container",
          children: g.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:305",
            className: "max-w-3xl mx-auto",
            children: [
              g.jsx("h2", {
                "data-loc": "client/src/pages/Home.tsx:306",
                className: "text-3xl md:text-4xl font-bold mb-4 text-center",
                children: "Why Mobile Numbers Have Value",
              }),
              g.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:307",
                className: "accent-line w-16 h-1 mx-auto mb-12",
              }),
              g.jsx("p", {
                "data-loc": "client/src/pages/Home.tsx:309",
                className: "text-lg text-foreground/70 mb-8 text-center",
                children:
                  "In today's digital world, a mobile number is not just contact information—it's a personal brand asset.",
              }),
              g.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:313",
                className: "grid md:grid-cols-2 gap-6 mb-12",
                children: [
                  g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:314",
                    className:
                      "p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-accent/20",
                    children: [
                      g.jsx("h4", {
                        "data-loc": "client/src/pages/Home.tsx:315",
                        className: "font-semibold text-primary mb-3",
                        children: "People Pay Premium For",
                      }),
                      g.jsxs("ul", {
                        "data-loc": "client/src/pages/Home.tsx:316",
                        className: "space-y-3",
                        children: [
                          g.jsxs("li", {
                            "data-loc": "client/src/pages/Home.tsx:317",
                            className: "flex gap-3",
                            children: [
                              g.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:318",
                                className: "text-accent font-bold",
                                children: "•",
                              }),
                              g.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:319",
                                className: "text-foreground/80",
                                children: "Easy to remember",
                              }),
                            ],
                          }),
                          g.jsxs("li", {
                            "data-loc": "client/src/pages/Home.tsx:321",
                            className: "flex gap-3",
                            children: [
                              g.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:322",
                                className: "text-accent font-bold",
                                children: "•",
                              }),
                              g.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:323",
                                className: "text-foreground/80",
                                children: "Lucky or meaningful",
                              }),
                            ],
                          }),
                          g.jsxs("li", {
                            "data-loc": "client/src/pages/Home.tsx:325",
                            className: "flex gap-3",
                            children: [
                              g.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:326",
                                className: "text-accent font-bold",
                                children: "•",
                              }),
                              g.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:327",
                                className: "text-foreground/80",
                                children: "Status symbols",
                              }),
                            ],
                          }),
                          g.jsxs("li", {
                            "data-loc": "client/src/pages/Home.tsx:329",
                            className: "flex gap-3",
                            children: [
                              g.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:330",
                                className: "text-accent font-bold",
                                children: "•",
                              }),
                              g.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:331",
                                className: "text-foreground/80",
                                children: "Business-friendly",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:336",
                    className:
                      "p-6 bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg border border-primary/20",
                    children: [
                      g.jsx("h4", {
                        "data-loc": "client/src/pages/Home.tsx:337",
                        className: "font-semibold text-accent mb-3",
                        children: "Just Like Premium Domains",
                      }),
                      g.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:338",
                        className: "text-foreground/70 mb-4",
                        children:
                          "Moboscope numbers have real market demand, similar to premium domain names.",
                      }),
                      g.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:341",
                        className: "text-sm text-foreground/60",
                        children:
                          "A great mobile number can become a valuable asset worth thousands of rupees.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      g.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:351",
        id: "how-it-works",
        className:
          "py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-transparent",
        children: g.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:352",
          className: "container",
          children: [
            g.jsx("h2", {
              "data-loc": "client/src/pages/Home.tsx:353",
              className: "text-3xl md:text-4xl font-bold mb-4 text-center",
              children: "How It Works",
            }),
            g.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:354",
              className: "accent-line w-16 h-1 mx-auto mb-16",
            }),
            g.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:356",
              className: "max-w-4xl mx-auto",
              children: g.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:357",
                className: "grid md:grid-cols-4 gap-4 md:gap-2",
                children: [
                  g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:359",
                    className: "relative",
                    children: [
                      g.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:360",
                        className: "floating-card text-center",
                        children: [
                          g.jsx("div", {
                            "data-loc": "client/src/pages/Home.tsx:361",
                            className:
                              "w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold",
                            children: "1",
                          }),
                          g.jsx("h4", {
                            "data-loc": "client/src/pages/Home.tsx:364",
                            className: "font-semibold mb-2",
                            children: "Enter Number",
                          }),
                          g.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:365",
                            className: "text-sm text-foreground/60",
                            children: "Enter your 10-digit mobile number",
                          }),
                        ],
                      }),
                      g.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:367",
                        className:
                          "hidden md:block absolute top-1/2 -right-2 w-4 h-1 bg-accent/30 transform -translate-y-1/2",
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:371",
                    className: "relative",
                    children: [
                      g.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:372",
                        className: "floating-card text-center",
                        children: [
                          g.jsx("div", {
                            "data-loc": "client/src/pages/Home.tsx:373",
                            className:
                              "w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold",
                            children: "2",
                          }),
                          g.jsx("h4", {
                            "data-loc": "client/src/pages/Home.tsx:376",
                            className: "font-semibold mb-2",
                            children: "Analyze",
                          }),
                          g.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:377",
                            className: "text-sm text-foreground/60",
                            children:
                              "Moboscope analyzes patterns & numerology",
                          }),
                        ],
                      }),
                      g.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:379",
                        className:
                          "hidden md:block absolute top-1/2 -right-2 w-4 h-1 bg-accent/30 transform -translate-y-1/2",
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:383",
                    className: "relative",
                    children: [
                      g.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:384",
                        className: "floating-card text-center",
                        children: [
                          g.jsx("div", {
                            "data-loc": "client/src/pages/Home.tsx:385",
                            className:
                              "w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold",
                            children: "3",
                          }),
                          g.jsx("h4", {
                            "data-loc": "client/src/pages/Home.tsx:388",
                            className: "font-semibold mb-2",
                            children: "Get Insights",
                          }),
                          g.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:389",
                            className: "text-sm text-foreground/60",
                            children: "Rarity score, numerology, market value",
                          }),
                        ],
                      }),
                      g.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:391",
                        className:
                          "hidden md:block absolute top-1/2 -right-2 w-4 h-1 bg-accent/30 transform -translate-y-1/2",
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:395",
                    className: "floating-card text-center",
                    children: [
                      g.jsx("div", {
                        "data-loc": "client/src/pages/Home.tsx:396",
                        className:
                          "w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold",
                        children: "4",
                      }),
                      g.jsx("h4", {
                        "data-loc": "client/src/pages/Home.tsx:399",
                        className: "font-semibold mb-2",
                        children: "List & Sell",
                      }),
                      g.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:400",
                        className: "text-sm text-foreground/60",
                        children: "Optional: List for sale and get offers",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      g.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:408",
        className: "py-20 md:py-28 bg-white",
        children: g.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:409",
          className: "container",
          children: [
            g.jsx("h2", {
              "data-loc": "client/src/pages/Home.tsx:410",
              className: "text-3xl md:text-4xl font-bold mb-4 text-center",
              children: "Sample Insights",
            }),
            g.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:411",
              className: "accent-line w-16 h-1 mx-auto mb-12",
            }),
            g.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:413",
              className: "max-w-2xl mx-auto",
              children: g.jsx(su, {
                "data-loc": "client/src/pages/Home.tsx:414",
                className: "floating-card p-8 md:p-12",
                children: g.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:415",
                  className: "space-y-6",
                  children: [
                    g.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:416",
                      className:
                        "flex items-center justify-between pb-4 border-b border-border",
                      children: [
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:417",
                          className: "text-foreground/70",
                          children: "Pattern",
                        }),
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:418",
                          className: "font-semibold",
                          children: "Triple repetition (777)",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:420",
                      className:
                        "flex items-center justify-between pb-4 border-b border-border",
                      children: [
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:421",
                          className: "text-foreground/70",
                          children: "Structure",
                        }),
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:422",
                          className: "font-semibold",
                          children: "Semi-palindrome",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:424",
                      className:
                        "flex items-center justify-between pb-4 border-b border-border",
                      children: [
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:425",
                          className: "text-foreground/70",
                          children: "Numerology Number",
                        }),
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:426",
                          className: "font-semibold text-accent",
                          children: "7 (Spiritual, Analytical)",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:428",
                      className:
                        "flex items-center justify-between pb-4 border-b border-border",
                      children: [
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:429",
                          className: "text-foreground/70",
                          children: "Embedded Date",
                        }),
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:430",
                          className: "font-semibold",
                          children: "07/07",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:432",
                      className:
                        "flex items-center justify-between pb-4 border-b border-border",
                      children: [
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:433",
                          className: "text-foreground/70",
                          children: "Rarity Score",
                        }),
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:434",
                          className: "font-semibold text-primary",
                          children: "8.9/10",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:436",
                      className: "flex items-center justify-between",
                      children: [
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:437",
                          className: "text-foreground/70",
                          children: "Estimated Value",
                        }),
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:438",
                          className: "font-bold text-lg gradient-text",
                          children: "₹75,000 – ₹2,00,000",
                        }),
                      ],
                    }),
                    g.jsx("div", {
                      "data-loc": "client/src/pages/Home.tsx:441",
                      className:
                        "mt-8 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-accent/20",
                      children: g.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:442",
                        className: "text-center font-semibold text-primary",
                        children: "✓ Highly desirable Moboscope number",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
      g.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:453",
        id: "marketplace",
        className: "relative overflow-hidden py-20 md:py-28",
        children: [
          g.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:454",
            className: "absolute inset-0 z-0",
            style: {
              backgroundImage:
                "url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028997286/kdUJyfwazZhRHCgG89JZbo/marketplace-section-bg-GoNqZakVUj5WjySpWSq4JW.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.1,
            },
          }),
          g.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:464",
            className: "container relative z-10",
            children: g.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:465",
              className: "max-w-3xl mx-auto text-center",
              children: [
                g.jsx("h2", {
                  "data-loc": "client/src/pages/Home.tsx:466",
                  className:
                    "text-3xl md:text-4xl font-bold mb-4 text-foreground",
                  children: "Join Our Marketplace",
                }),
                g.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:467",
                  className: "accent-line w-16 h-1 mx-auto mb-8",
                }),
                g.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:469",
                  className: "text-lg text-foreground/70 mb-8",
                  children:
                    "Connect buyers and sellers of premium Moboscope numbers. List your valuable number, set your price, and start receiving offers from interested buyers.",
                }),
                g.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:473",
                  className: "grid md:grid-cols-3 gap-6 mb-12",
                  children: [
                    g.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:474",
                      className: "floating-card",
                      children: [
                        g.jsx(f1, {
                          "data-loc": "client/src/pages/Home.tsx:475",
                          className: "w-8 h-8 text-primary mx-auto mb-4",
                        }),
                        g.jsx("h4", {
                          "data-loc": "client/src/pages/Home.tsx:476",
                          className: "font-semibold mb-2",
                          children: "Verified Buyers",
                        }),
                        g.jsx("p", {
                          "data-loc": "client/src/pages/Home.tsx:477",
                          className: "text-sm text-foreground/70",
                          children:
                            "Connect with serious buyers looking for premium numbers",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:479",
                      className: "floating-card",
                      children: [
                        g.jsx(Qh, {
                          "data-loc": "client/src/pages/Home.tsx:480",
                          className: "w-8 h-8 text-accent mx-auto mb-4",
                        }),
                        g.jsx("h4", {
                          "data-loc": "client/src/pages/Home.tsx:481",
                          className: "font-semibold mb-2",
                          children: "Easy Listing",
                        }),
                        g.jsx("p", {
                          "data-loc": "client/src/pages/Home.tsx:482",
                          className: "text-sm text-foreground/70",
                          children:
                            "List your number in seconds with our simple process",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:484",
                      className: "floating-card",
                      children: [
                        g.jsx(Kr, {
                          "data-loc": "client/src/pages/Home.tsx:485",
                          className: "w-8 h-8 text-primary mx-auto mb-4",
                        }),
                        g.jsx("h4", {
                          "data-loc": "client/src/pages/Home.tsx:486",
                          className: "font-semibold mb-2",
                          children: "Fair Pricing",
                        }),
                        g.jsx("p", {
                          "data-loc": "client/src/pages/Home.tsx:487",
                          className: "text-sm text-foreground/70",
                          children:
                            "Set your own price based on market insights",
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsxs(Cl, {
                  "data-loc": "client/src/pages/Home.tsx:491",
                  size: "lg",
                  className: "bg-primary hover:bg-primary/90 text-white gap-2",
                  children: [
                    "List Your Number Now",
                    g.jsx(n1, {
                      "data-loc": "client/src/pages/Home.tsx:493",
                      className: "w-5 h-5",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      g.jsx("footer", {
        "data-loc": "client/src/pages/Home.tsx:500",
        className: "bg-foreground text-white py-12",
        children: g.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:501",
          className: "container",
          children: [
            g.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:502",
              className: "grid md:grid-cols-4 gap-8 mb-8",
              children: [
                g.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:503",
                  children: [
                    g.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:504",
                      className: "flex items-center gap-2 mb-4",
                      children: [
                        g.jsx(Zr, {
                          "data-loc": "client/src/pages/Home.tsx:505",
                          className: "w-6 h-6",
                        }),
                        g.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:506",
                          className: "text-lg font-bold",
                          children: "Moboscope",
                        }),
                      ],
                    }),
                    g.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:508",
                      className: "text-white/70 text-sm",
                      children:
                        "Discover the hidden value in your mobile number",
                    }),
                  ],
                }),
                g.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:510",
                  children: [
                    g.jsx("h4", {
                      "data-loc": "client/src/pages/Home.tsx:511",
                      className: "font-semibold mb-4",
                      children: "Product",
                    }),
                    g.jsxs("ul", {
                      "data-loc": "client/src/pages/Home.tsx:512",
                      className: "space-y-2 text-sm text-white/70",
                      children: [
                        g.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:513",
                          children: g.jsx("a", {
                            "data-loc": "client/src/pages/Home.tsx:513",
                            href: "#",
                            className: "hover:text-white transition-colors",
                            children: "Analyze Number",
                          }),
                        }),
                        g.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:514",
                          children: g.jsx("a", {
                            "data-loc": "client/src/pages/Home.tsx:514",
                            href: "#",
                            className: "hover:text-white transition-colors",
                            children: "Marketplace",
                          }),
                        }),
                        g.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:515",
                          children: g.jsx("a", {
                            "data-loc": "client/src/pages/Home.tsx:515",
                            href: "#",
                            className: "hover:text-white transition-colors",
                            children: "Pricing",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:518",
                  children: [
                    g.jsx("h4", {
                      "data-loc": "client/src/pages/Home.tsx:519",
                      className: "font-semibold mb-4",
                      children: "Company",
                    }),
                    g.jsxs("ul", {
                      "data-loc": "client/src/pages/Home.tsx:520",
                      className: "space-y-2 text-sm text-white/70",
                      children: [
                        g.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:521",
                          children: g.jsx("a", {
                            "data-loc": "client/src/pages/Home.tsx:521",
                            href: "#",
                            className: "hover:text-white transition-colors",
                            children: "About",
                          }),
                        }),
                        g.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:522",
                          children: g.jsx("a", {
                            "data-loc": "client/src/pages/Home.tsx:522",
                            href: "#",
                            className: "hover:text-white transition-colors",
                            children: "Blog",
                          }),
                        }),
                        g.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:523",
                          children: g.jsx("a", {
                            "data-loc": "client/src/pages/Home.tsx:523",
                            href: "#",
                            className: "hover:text-white transition-colors",
                            children: "Contact",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:526",
                  children: [
                    g.jsx("h4", {
                      "data-loc": "client/src/pages/Home.tsx:527",
                      className: "font-semibold mb-4",
                      children: "Legal",
                    }),
                    g.jsxs("ul", {
                      "data-loc": "client/src/pages/Home.tsx:528",
                      className: "space-y-2 text-sm text-white/70",
                      children: [
                        g.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:529",
                          children: g.jsx("a", {
                            "data-loc": "client/src/pages/Home.tsx:529",
                            href: "#",
                            className: "hover:text-white transition-colors",
                            children: "Privacy",
                          }),
                        }),
                        g.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:530",
                          children: g.jsx("a", {
                            "data-loc": "client/src/pages/Home.tsx:530",
                            href: "#",
                            className: "hover:text-white transition-colors",
                            children: "Terms",
                          }),
                        }),
                        g.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:531",
                          children: g.jsx("a", {
                            "data-loc": "client/src/pages/Home.tsx:531",
                            href: "#",
                            className: "hover:text-white transition-colors",
                            children: "Disclaimer",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            g.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:536",
              className:
                "border-t border-white/10 pt-8 text-center text-sm text-white/60",
              children: g.jsx("p", {
                "data-loc": "client/src/pages/Home.tsx:537",
                children:
                  "© 2024 Moboscope. All rights reserved. | Discover the value in your mobile number.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Q1() {
  return g.jsxs(U1, {
    "data-loc": "client/src/App.tsx:12",
    children: [
      g.jsx($r, {
        "data-loc": "client/src/App.tsx:13",
        path: "/",
        component: X1,
      }),
      g.jsx($r, {
        "data-loc": "client/src/App.tsx:14",
        path: "/404",
        component: tg,
      }),
      g.jsx($r, {
        "data-loc": "client/src/App.tsx:16",
        component: tg,
      }),
    ],
  });
}
function Z1() {
  return g.jsx(B1, {
    "data-loc": "client/src/App.tsx:28",
    children: g.jsx(Y1, {
      "data-loc": "client/src/App.tsx:29",
      defaultTheme: "light",
      children: g.jsxs($b, {
        "data-loc": "client/src/App.tsx:33",
        children: [
          g.jsx(ov, {
            "data-loc": "client/src/App.tsx:34",
          }),
          g.jsx(Q1, {
            "data-loc": "client/src/App.tsx:35",
          }),
        ],
      }),
    }),
  });
}
zy.createRoot(document.getElementById("root")).render(
  g.jsx(Z1, {
    "data-loc": "client/src/main.tsx:5",
  }),
);
