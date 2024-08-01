function tf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function nf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ls = { exports: {} },
  gl = {},
  zs = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lr = Symbol.for("react.element"),
  rf = Symbol.for("react.portal"),
  lf = Symbol.for("react.fragment"),
  of = Symbol.for("react.strict_mode"),
  uf = Symbol.for("react.profiler"),
  sf = Symbol.for("react.provider"),
  af = Symbol.for("react.context"),
  cf = Symbol.for("react.forward_ref"),
  ff = Symbol.for("react.suspense"),
  df = Symbol.for("react.memo"),
  pf = Symbol.for("react.lazy"),
  cu = Symbol.iterator;
function hf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cu && e[cu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Rs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Os = Object.assign,
  Ts = {};
function dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ts),
    (this.updater = n || Rs);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Is() {}
Is.prototype = dn.prototype;
function co(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ts),
    (this.updater = n || Rs);
}
var fo = (co.prototype = new Is());
fo.constructor = co;
Os(fo, dn.prototype);
fo.isPureReactComponent = !0;
var fu = Array.isArray,
  Ms = Object.prototype.hasOwnProperty,
  po = { current: null },
  Fs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ds(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ms.call(t, r) && !Fs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: lr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: po.current,
  };
}
function mf(e, t) {
  return {
    $$typeof: lr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ho(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lr;
}
function vf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var du = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? vf("" + e.key)
    : t.toString(36);
}
function Rr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case lr:
          case rf:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Al(o, 0) : r),
      fu(l)
        ? ((n = ""),
          e != null && (n = e.replace(du, "$&/") + "/"),
          Rr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (ho(l) &&
            (l = mf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(du, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), fu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Al(i, u);
      o += Rr(i, t, n, s, l);
    }
  else if (((s = hf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Al(i, u++)), (o += Rr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function hr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Rr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function gf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Or = { transition: null },
  yf = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Or,
    ReactCurrentOwner: po,
  };
function Us() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = {
  map: hr,
  forEach: function (e, t, n) {
    hr(
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
      hr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      hr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ho(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
O.Component = dn;
O.Fragment = lf;
O.Profiler = uf;
O.PureComponent = co;
O.StrictMode = of;
O.Suspense = ff;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yf;
O.act = Us;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Os({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = po.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ms.call(t, s) &&
        !Fs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: af,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: sf, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Ds;
O.createFactory = function (e) {
  var t = Ds.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: cf, render: e };
};
O.isValidElement = ho;
O.lazy = function (e) {
  return { $$typeof: pf, _payload: { _status: -1, _result: e }, _init: gf };
};
O.memo = function (e, t) {
  return { $$typeof: df, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Or.transition;
  Or.transition = {};
  try {
    e();
  } finally {
    Or.transition = t;
  }
};
O.unstable_act = Us;
O.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
O.useContext = function (e) {
  return ae.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
O.useId = function () {
  return ae.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return ae.current.useRef(e);
};
O.useState = function (e) {
  return ae.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return ae.current.useTransition();
};
O.version = "18.3.1";
zs.exports = O;
var x = zs.exports;
const Qe = nf(x),
  wf = tf({ __proto__: null, default: Qe }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sf = x,
  kf = Symbol.for("react.element"),
  xf = Symbol.for("react.fragment"),
  Ef = Object.prototype.hasOwnProperty,
  Cf = Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _f = { key: !0, ref: !0, __self: !0, __source: !0 };
function $s(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Ef.call(t, r) && !_f.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: kf,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Cf.current,
  };
}
gl.Fragment = xf;
gl.jsx = $s;
gl.jsxs = $s;
Ls.exports = gl;
var S = Ls.exports,
  hi = {},
  Bs = { exports: {} },
  Se = {},
  As = { exports: {} },
  Ws = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, z) {
    var R = P.length;
    P.push(z);
    e: for (; 0 < R; ) {
      var Q = (R - 1) >>> 1,
        J = P[Q];
      if (0 < l(J, z)) (P[Q] = z), (P[R] = J), (R = Q);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var z = P[0],
      R = P.pop();
    if (R !== z) {
      P[0] = R;
      e: for (var Q = 0, J = P.length, dr = J >>> 1; Q < dr; ) {
        var St = 2 * (Q + 1) - 1,
          Bl = P[St],
          kt = St + 1,
          pr = P[kt];
        if (0 > l(Bl, R))
          kt < J && 0 > l(pr, Bl)
            ? ((P[Q] = pr), (P[kt] = R), (Q = kt))
            : ((P[Q] = Bl), (P[St] = R), (Q = St));
        else if (kt < J && 0 > l(pr, R)) (P[Q] = pr), (P[kt] = R), (Q = kt);
        else break e;
      }
    }
    return z;
  }
  function l(P, z) {
    var R = P.sortIndex - z.sortIndex;
    return R !== 0 ? R : P.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    p = null,
    m = 3,
    g = !1,
    y = !1,
    w = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(P) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= P)
        r(a), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(a);
    }
  }
  function v(P) {
    if (((w = !1), d(P), !y))
      if (n(s) !== null) (y = !0), Ul(E);
      else {
        var z = n(a);
        z !== null && $l(v, z.startTime - P);
      }
  }
  function E(P, z) {
    (y = !1), w && ((w = !1), f(L), (L = -1)), (g = !0);
    var R = m;
    try {
      for (
        d(z), p = n(s);
        p !== null && (!(p.expirationTime > z) || (P && !je()));

      ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var J = Q(p.expirationTime <= z);
          (z = e.unstable_now()),
            typeof J == "function" ? (p.callback = J) : p === n(s) && r(s),
            d(z);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var dr = !0;
      else {
        var St = n(a);
        St !== null && $l(v, St.startTime - z), (dr = !1);
      }
      return dr;
    } finally {
      (p = null), (m = R), (g = !1);
    }
  }
  var N = !1,
    j = null,
    L = -1,
    H = 5,
    T = -1;
  function je() {
    return !(e.unstable_now() - T < H);
  }
  function vn() {
    if (j !== null) {
      var P = e.unstable_now();
      T = P;
      var z = !0;
      try {
        z = j(!0, P);
      } finally {
        z ? gn() : ((N = !1), (j = null));
      }
    } else N = !1;
  }
  var gn;
  if (typeof c == "function")
    gn = function () {
      c(vn);
    };
  else if (typeof MessageChannel < "u") {
    var au = new MessageChannel(),
      ef = au.port2;
    (au.port1.onmessage = vn),
      (gn = function () {
        ef.postMessage(null);
      });
  } else
    gn = function () {
      C(vn, 0);
    };
  function Ul(P) {
    (j = P), N || ((N = !0), gn());
  }
  function $l(P, z) {
    L = C(function () {
      P(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Ul(E));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (P) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var R = m;
      m = z;
      try {
        return P();
      } finally {
        m = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, z) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var R = m;
      m = P;
      try {
        return z();
      } finally {
        m = R;
      }
    }),
    (e.unstable_scheduleCallback = function (P, z, R) {
      var Q = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? Q + R : Q))
          : (R = Q),
        P)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = R + J),
        (P = {
          id: h++,
          callback: z,
          priorityLevel: P,
          startTime: R,
          expirationTime: J,
          sortIndex: -1,
        }),
        R > Q
          ? ((P.sortIndex = R),
            t(a, P),
            n(s) === null &&
              P === n(a) &&
              (w ? (f(L), (L = -1)) : (w = !0), $l(v, R - Q)))
          : ((P.sortIndex = J), t(s, P), y || g || ((y = !0), Ul(E))),
        P
      );
    }),
    (e.unstable_shouldYield = je),
    (e.unstable_wrapCallback = function (P) {
      var z = m;
      return function () {
        var R = m;
        m = z;
        try {
          return P.apply(this, arguments);
        } finally {
          m = R;
        }
      };
    });
})(Ws);
As.exports = Ws;
var Pf = As.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nf = x,
  we = Pf;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Vs = new Set(),
  $n = {};
function It(e, t) {
  ln(e, t), ln(e + "Capture", t);
}
function ln(e, t) {
  for ($n[e] = t, e = 0; e < t.length; e++) Vs.add(t[e]);
}
var Ge = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  mi = Object.prototype.hasOwnProperty,
  jf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pu = {},
  hu = {};
function Lf(e) {
  return mi.call(hu, e)
    ? !0
    : mi.call(pu, e)
    ? !1
    : jf.test(e)
    ? (hu[e] = !0)
    : ((pu[e] = !0), !1);
}
function zf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rf(e, t, n, r) {
  if (t === null || typeof t > "u" || zf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mo = /[\-:]([a-z])/g;
function vo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mo, vo);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mo, vo);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(mo, vo);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function go(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rf(t, n, l, r) && (n = null),
    r || l === null
      ? Lf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = Nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mr = Symbol.for("react.element"),
  Bt = Symbol.for("react.portal"),
  At = Symbol.for("react.fragment"),
  yo = Symbol.for("react.strict_mode"),
  vi = Symbol.for("react.profiler"),
  Hs = Symbol.for("react.provider"),
  Qs = Symbol.for("react.context"),
  wo = Symbol.for("react.forward_ref"),
  gi = Symbol.for("react.suspense"),
  yi = Symbol.for("react.suspense_list"),
  So = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  Ks = Symbol.for("react.offscreen"),
  mu = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mu && e[mu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Wl;
function Pn(e) {
  if (Wl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wl = (t && t[1]) || "";
    }
  return (
    `
` +
    Wl +
    e
  );
}
var Vl = !1;
function Hl(e, t) {
  if (!e || Vl) return "";
  Vl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Vl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Pn(e) : "";
}
function Of(e) {
  switch (e.tag) {
    case 5:
      return Pn(e.type);
    case 16:
      return Pn("Lazy");
    case 13:
      return Pn("Suspense");
    case 19:
      return Pn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Hl(e.type, !1)), e;
    case 11:
      return (e = Hl(e.type.render, !1)), e;
    case 1:
      return (e = Hl(e.type, !0)), e;
    default:
      return "";
  }
}
function wi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case At:
      return "Fragment";
    case Bt:
      return "Portal";
    case vi:
      return "Profiler";
    case yo:
      return "StrictMode";
    case gi:
      return "Suspense";
    case yi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Qs:
        return (e.displayName || "Context") + ".Consumer";
      case Hs:
        return (e._context.displayName || "Context") + ".Provider";
      case wo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case So:
        return (
          (t = e.displayName || null), t !== null ? t : wi(e.type) || "Memo"
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return wi(e(t));
        } catch {}
    }
  return null;
}
function Tf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wi(t);
    case 8:
      return t === yo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Gs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function If(e) {
  var t = Gs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function vr(e) {
  e._valueTracker || (e._valueTracker = If(e));
}
function Ys(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Vr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Si(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xs(e, t) {
  (t = t.checked), t != null && go(e, "checked", t, !1);
}
function ki(e, t) {
  Xs(e, t);
  var n = mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? xi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && xi(e, t.type, mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function gu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function xi(e, t, n) {
  (t !== "number" || Vr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nn = Array.isArray;
function qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ei(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function yu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function Zs(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function wu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Js(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ci(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Js(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var gr,
  qs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        gr = gr || document.createElement("div"),
          gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = gr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Mf = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function (e) {
  Mf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zn[t] = zn[e]);
  });
});
function bs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zn.hasOwnProperty(e) && zn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ea(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = bs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Ff = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function _i(e, t) {
  if (t) {
    if (Ff[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Pi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ni = null;
function ko(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ji = null,
  bt = null,
  en = null;
function Su(e) {
  if ((e = ur(e))) {
    if (typeof ji != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = xl(t)), ji(e.stateNode, e.type, t));
  }
}
function ta(e) {
  bt ? (en ? en.push(e) : (en = [e])) : (bt = e);
}
function na() {
  if (bt) {
    var e = bt,
      t = en;
    if (((en = bt = null), Su(e), t)) for (e = 0; e < t.length; e++) Su(t[e]);
  }
}
function ra(e, t) {
  return e(t);
}
function la() {}
var Ql = !1;
function ia(e, t, n) {
  if (Ql) return e(t, n);
  Ql = !0;
  try {
    return ra(e, t, n);
  } finally {
    (Ql = !1), (bt !== null || en !== null) && (la(), na());
  }
}
function An(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Li = !1;
if (Ge)
  try {
    var wn = {};
    Object.defineProperty(wn, "passive", {
      get: function () {
        Li = !0;
      },
    }),
      window.addEventListener("test", wn, wn),
      window.removeEventListener("test", wn, wn);
  } catch {
    Li = !1;
  }
function Df(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var Rn = !1,
  Hr = null,
  Qr = !1,
  zi = null,
  Uf = {
    onError: function (e) {
      (Rn = !0), (Hr = e);
    },
  };
function $f(e, t, n, r, l, i, o, u, s) {
  (Rn = !1), (Hr = null), Df.apply(Uf, arguments);
}
function Bf(e, t, n, r, l, i, o, u, s) {
  if (($f.apply(this, arguments), Rn)) {
    if (Rn) {
      var a = Hr;
      (Rn = !1), (Hr = null);
    } else throw Error(k(198));
    Qr || ((Qr = !0), (zi = a));
  }
}
function Mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function oa(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ku(e) {
  if (Mt(e) !== e) throw Error(k(188));
}
function Af(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ku(l), e;
        if (i === r) return ku(l), t;
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function ua(e) {
  return (e = Af(e)), e !== null ? sa(e) : null;
}
function sa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var aa = we.unstable_scheduleCallback,
  xu = we.unstable_cancelCallback,
  Wf = we.unstable_shouldYield,
  Vf = we.unstable_requestPaint,
  K = we.unstable_now,
  Hf = we.unstable_getCurrentPriorityLevel,
  xo = we.unstable_ImmediatePriority,
  ca = we.unstable_UserBlockingPriority,
  Kr = we.unstable_NormalPriority,
  Qf = we.unstable_LowPriority,
  fa = we.unstable_IdlePriority,
  yl = null,
  $e = null;
function Kf(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Te = Math.clz32 ? Math.clz32 : Xf,
  Gf = Math.log,
  Yf = Math.LN2;
function Xf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Gf(e) / Yf) | 0)) | 0;
}
var yr = 64,
  wr = 4194304;
function jn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = jn(u)) : ((i &= o), i !== 0 && (r = jn(i)));
  } else (o = n & ~l), o !== 0 ? (r = jn(o)) : i !== 0 && (r = jn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Te(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Zf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Jf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Te(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Zf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Ri(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function da() {
  var e = yr;
  return (yr <<= 1), !(yr & 4194240) && (yr = 64), e;
}
function Kl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ir(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Te(t)),
    (e[t] = n);
}
function qf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Te(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Eo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Te(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function pa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ha,
  Co,
  ma,
  va,
  ga,
  Oi = !1,
  Sr = [],
  ot = null,
  ut = null,
  st = null,
  Wn = new Map(),
  Vn = new Map(),
  tt = [],
  bf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Eu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      ut = null;
      break;
    case "mouseover":
    case "mouseout":
      st = null;
      break;
    case "pointerover":
    case "pointerout":
      Wn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vn.delete(t.pointerId);
  }
}
function Sn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = ur(t)), t !== null && Co(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function ed(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ot = Sn(ot, e, t, n, r, l)), !0;
    case "dragenter":
      return (ut = Sn(ut, e, t, n, r, l)), !0;
    case "mouseover":
      return (st = Sn(st, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Wn.set(i, Sn(Wn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Vn.set(i, Sn(Vn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ya(e) {
  var t = Ct(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = oa(n)), t !== null)) {
          (e.blockedOn = t),
            ga(e.priority, function () {
              ma(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Tr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ni = r), n.target.dispatchEvent(r), (Ni = null);
    } else return (t = ur(n)), t !== null && Co(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Cu(e, t, n) {
  Tr(e) && n.delete(t);
}
function td() {
  (Oi = !1),
    ot !== null && Tr(ot) && (ot = null),
    ut !== null && Tr(ut) && (ut = null),
    st !== null && Tr(st) && (st = null),
    Wn.forEach(Cu),
    Vn.forEach(Cu);
}
function kn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Oi ||
      ((Oi = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, td)));
}
function Hn(e) {
  function t(l) {
    return kn(l, e);
  }
  if (0 < Sr.length) {
    kn(Sr[0], e);
    for (var n = 1; n < Sr.length; n++) {
      var r = Sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && kn(ot, e),
      ut !== null && kn(ut, e),
      st !== null && kn(st, e),
      Wn.forEach(t),
      Vn.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    ya(n), n.blockedOn === null && tt.shift();
}
var tn = Je.ReactCurrentBatchConfig,
  Yr = !0;
function nd(e, t, n, r) {
  var l = M,
    i = tn.transition;
  tn.transition = null;
  try {
    (M = 1), _o(e, t, n, r);
  } finally {
    (M = l), (tn.transition = i);
  }
}
function rd(e, t, n, r) {
  var l = M,
    i = tn.transition;
  tn.transition = null;
  try {
    (M = 4), _o(e, t, n, r);
  } finally {
    (M = l), (tn.transition = i);
  }
}
function _o(e, t, n, r) {
  if (Yr) {
    var l = Ti(e, t, n, r);
    if (l === null) ni(e, t, r, Xr, n), Eu(e, r);
    else if (ed(l, e, t, n, r)) r.stopPropagation();
    else if ((Eu(e, r), t & 4 && -1 < bf.indexOf(e))) {
      for (; l !== null; ) {
        var i = ur(l);
        if (
          (i !== null && ha(i),
          (i = Ti(e, t, n, r)),
          i === null && ni(e, t, r, Xr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ni(e, t, r, null, n);
  }
}
var Xr = null;
function Ti(e, t, n, r) {
  if (((Xr = null), (e = ko(r)), (e = Ct(e)), e !== null))
    if (((t = Mt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = oa(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xr = e), null;
}
function wa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Hf()) {
        case xo:
          return 1;
        case ca:
          return 4;
        case Kr:
        case Qf:
          return 16;
        case fa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  Po = null,
  Ir = null;
function Sa() {
  if (Ir) return Ir;
  var e,
    t = Po,
    n = t.length,
    r,
    l = "value" in rt ? rt.value : rt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Ir = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Mr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kr() {
  return !0;
}
function _u() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? kr
        : _u),
      (this.isPropagationStopped = _u),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = kr));
      },
      persist: function () {},
      isPersistent: kr,
    }),
    t
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  No = ke(pn),
  or = W({}, pn, { view: 0, detail: 0 }),
  ld = ke(or),
  Gl,
  Yl,
  xn,
  wl = W({}, or, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: jo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xn &&
            (xn && e.type === "mousemove"
              ? ((Gl = e.screenX - xn.screenX), (Yl = e.screenY - xn.screenY))
              : (Yl = Gl = 0),
            (xn = e)),
          Gl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yl;
    },
  }),
  Pu = ke(wl),
  id = W({}, wl, { dataTransfer: 0 }),
  od = ke(id),
  ud = W({}, or, { relatedTarget: 0 }),
  Xl = ke(ud),
  sd = W({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ad = ke(sd),
  cd = W({}, pn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  fd = ke(cd),
  dd = W({}, pn, { data: 0 }),
  Nu = ke(dd),
  pd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  hd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  md = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function vd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = md[e]) ? !!t[e] : !1;
}
function jo() {
  return vd;
}
var gd = W({}, or, {
    key: function (e) {
      if (e.key) {
        var t = pd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Mr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? hd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jo,
    charCode: function (e) {
      return e.type === "keypress" ? Mr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Mr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  yd = ke(gd),
  wd = W({}, wl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ju = ke(wd),
  Sd = W({}, or, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jo,
  }),
  kd = ke(Sd),
  xd = W({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ed = ke(xd),
  Cd = W({}, wl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _d = ke(Cd),
  Pd = [9, 13, 27, 32],
  Lo = Ge && "CompositionEvent" in window,
  On = null;
Ge && "documentMode" in document && (On = document.documentMode);
var Nd = Ge && "TextEvent" in window && !On,
  ka = Ge && (!Lo || (On && 8 < On && 11 >= On)),
  Lu = " ",
  zu = !1;
function xa(e, t) {
  switch (e) {
    case "keyup":
      return Pd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ea(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wt = !1;
function jd(e, t) {
  switch (e) {
    case "compositionend":
      return Ea(t);
    case "keypress":
      return t.which !== 32 ? null : ((zu = !0), Lu);
    case "textInput":
      return (e = t.data), e === Lu && zu ? null : e;
    default:
      return null;
  }
}
function Ld(e, t) {
  if (Wt)
    return e === "compositionend" || (!Lo && xa(e, t))
      ? ((e = Sa()), (Ir = Po = rt = null), (Wt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ka && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zd[e.type] : t === "textarea";
}
function Ca(e, t, n, r) {
  ta(r),
    (t = Zr(t, "onChange")),
    0 < t.length &&
      ((n = new No("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Tn = null,
  Qn = null;
function Rd(e) {
  Ma(e, 0);
}
function Sl(e) {
  var t = Qt(e);
  if (Ys(t)) return e;
}
function Od(e, t) {
  if (e === "change") return t;
}
var _a = !1;
if (Ge) {
  var Zl;
  if (Ge) {
    var Jl = "oninput" in document;
    if (!Jl) {
      var Ou = document.createElement("div");
      Ou.setAttribute("oninput", "return;"),
        (Jl = typeof Ou.oninput == "function");
    }
    Zl = Jl;
  } else Zl = !1;
  _a = Zl && (!document.documentMode || 9 < document.documentMode);
}
function Tu() {
  Tn && (Tn.detachEvent("onpropertychange", Pa), (Qn = Tn = null));
}
function Pa(e) {
  if (e.propertyName === "value" && Sl(Qn)) {
    var t = [];
    Ca(t, Qn, e, ko(e)), ia(Rd, t);
  }
}
function Td(e, t, n) {
  e === "focusin"
    ? (Tu(), (Tn = t), (Qn = n), Tn.attachEvent("onpropertychange", Pa))
    : e === "focusout" && Tu();
}
function Id(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Sl(Qn);
}
function Md(e, t) {
  if (e === "click") return Sl(t);
}
function Fd(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function Dd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : Dd;
function Kn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!mi.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function Iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mu(e, t) {
  var n = Iu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Iu(n);
  }
}
function Na(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Na(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ja() {
  for (var e = window, t = Vr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vr(e.document);
  }
  return t;
}
function zo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ud(e) {
  var t = ja(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Na(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Mu(n, i));
        var o = Mu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var $d = Ge && "documentMode" in document && 11 >= document.documentMode,
  Vt = null,
  Ii = null,
  In = null,
  Mi = !1;
function Fu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Mi ||
    Vt == null ||
    Vt !== Vr(r) ||
    ((r = Vt),
    "selectionStart" in r && zo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (In && Kn(In, r)) ||
      ((In = r),
      (r = Zr(Ii, "onSelect")),
      0 < r.length &&
        ((t = new No("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vt))));
}
function xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ht = {
    animationend: xr("Animation", "AnimationEnd"),
    animationiteration: xr("Animation", "AnimationIteration"),
    animationstart: xr("Animation", "AnimationStart"),
    transitionend: xr("Transition", "TransitionEnd"),
  },
  ql = {},
  La = {};
Ge &&
  ((La = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ht.animationend.animation,
    delete Ht.animationiteration.animation,
    delete Ht.animationstart.animation),
  "TransitionEvent" in window || delete Ht.transitionend.transition);
function kl(e) {
  if (ql[e]) return ql[e];
  if (!Ht[e]) return e;
  var t = Ht[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in La) return (ql[e] = t[n]);
  return e;
}
var za = kl("animationend"),
  Ra = kl("animationiteration"),
  Oa = kl("animationstart"),
  Ta = kl("transitionend"),
  Ia = new Map(),
  Du =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gt(e, t) {
  Ia.set(e, t), It(t, [e]);
}
for (var bl = 0; bl < Du.length; bl++) {
  var ei = Du[bl],
    Bd = ei.toLowerCase(),
    Ad = ei[0].toUpperCase() + ei.slice(1);
  gt(Bd, "on" + Ad);
}
gt(za, "onAnimationEnd");
gt(Ra, "onAnimationIteration");
gt(Oa, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(Ta, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
It(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
It(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ln =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function Uu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Bf(r, t, void 0, e), (e.currentTarget = null);
}
function Ma(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          Uu(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Uu(l, u, a), (i = s);
        }
    }
  }
  if (Qr) throw ((e = zi), (Qr = !1), (zi = null), e);
}
function D(e, t) {
  var n = t[Bi];
  n === void 0 && (n = t[Bi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Fa(t, e, 2, !1), n.add(r));
}
function ti(e, t, n) {
  var r = 0;
  t && (r |= 4), Fa(n, e, r, t);
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function Gn(e) {
  if (!e[Er]) {
    (e[Er] = !0),
      Vs.forEach(function (n) {
        n !== "selectionchange" && (Wd.has(n) || ti(n, !1, e), ti(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Er] || ((t[Er] = !0), ti("selectionchange", !1, t));
  }
}
function Fa(e, t, n, r) {
  switch (wa(t)) {
    case 1:
      var l = nd;
      break;
    case 4:
      l = rd;
      break;
    default:
      l = _o;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Li ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ni(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Ct(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ia(function () {
    var a = i,
      h = ko(n),
      p = [];
    e: {
      var m = Ia.get(e);
      if (m !== void 0) {
        var g = No,
          y = e;
        switch (e) {
          case "keypress":
            if (Mr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = yd;
            break;
          case "focusin":
            (y = "focus"), (g = Xl);
            break;
          case "focusout":
            (y = "blur"), (g = Xl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Xl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = od;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = kd;
            break;
          case za:
          case Ra:
          case Oa:
            g = ad;
            break;
          case Ta:
            g = Ed;
            break;
          case "scroll":
            g = ld;
            break;
          case "wheel":
            g = _d;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = fd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ju;
        }
        var w = (t & 4) !== 0,
          C = !w && e === "scroll",
          f = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = An(c, f)), v != null && w.push(Yn(c, v, d)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((m = new g(m, y, null, n, h)), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ni &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ct(y) || y[Ye]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = a),
              (y = y ? Ct(y) : null),
              y !== null &&
                ((C = Mt(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = a)),
          g !== y)
        ) {
          if (
            ((w = Pu),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = ju),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (C = g == null ? m : Qt(g)),
            (d = y == null ? m : Qt(y)),
            (m = new w(v, c + "leave", g, n, h)),
            (m.target = C),
            (m.relatedTarget = d),
            (v = null),
            Ct(h) === a &&
              ((w = new w(f, c + "enter", y, n, h)),
              (w.target = d),
              (w.relatedTarget = C),
              (v = w)),
            (C = v),
            g && y)
          )
            t: {
              for (w = g, f = y, c = 0, d = w; d; d = Ut(d)) c++;
              for (d = 0, v = f; v; v = Ut(v)) d++;
              for (; 0 < c - d; ) (w = Ut(w)), c--;
              for (; 0 < d - c; ) (f = Ut(f)), d--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Ut(w)), (f = Ut(f));
              }
              w = null;
            }
          else w = null;
          g !== null && $u(p, m, g, w, !1),
            y !== null && C !== null && $u(p, C, y, w, !0);
        }
      }
      e: {
        if (
          ((m = a ? Qt(a) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === "select" || (g === "input" && m.type === "file"))
        )
          var E = Od;
        else if (Ru(m))
          if (_a) E = Fd;
          else {
            E = Id;
            var N = Td;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = Md);
        if (E && (E = E(e, a))) {
          Ca(p, E, n, h);
          break e;
        }
        N && N(e, m, a),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            xi(m, "number", m.value);
      }
      switch (((N = a ? Qt(a) : window), e)) {
        case "focusin":
          (Ru(N) || N.contentEditable === "true") &&
            ((Vt = N), (Ii = a), (In = null));
          break;
        case "focusout":
          In = Ii = Vt = null;
          break;
        case "mousedown":
          Mi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Mi = !1), Fu(p, n, h);
          break;
        case "selectionchange":
          if ($d) break;
        case "keydown":
        case "keyup":
          Fu(p, n, h);
      }
      var j;
      if (Lo)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Wt
          ? xa(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (ka &&
          n.locale !== "ko" &&
          (Wt || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Wt && (j = Sa())
            : ((rt = h),
              (Po = "value" in rt ? rt.value : rt.textContent),
              (Wt = !0))),
        (N = Zr(a, L)),
        0 < N.length &&
          ((L = new Nu(L, e, null, n, h)),
          p.push({ event: L, listeners: N }),
          j ? (L.data = j) : ((j = Ea(n)), j !== null && (L.data = j)))),
        (j = Nd ? jd(e, n) : Ld(e, n)) &&
          ((a = Zr(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new Nu("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = j)));
    }
    Ma(p, t);
  });
}
function Yn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = An(e, n)),
      i != null && r.unshift(Yn(e, i, l)),
      (i = An(e, t)),
      i != null && r.push(Yn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ut(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function $u(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = An(n, i)), s != null && o.unshift(Yn(n, s, u)))
        : l || ((s = An(n, i)), s != null && o.push(Yn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Vd = /\r\n?/g,
  Hd = /\u0000|\uFFFD/g;
function Bu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vd,
      `
`
    )
    .replace(Hd, "");
}
function Cr(e, t, n) {
  if (((t = Bu(t)), Bu(e) !== t && n)) throw Error(k(425));
}
function Jr() {}
var Fi = null,
  Di = null;
function Ui(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var $i = typeof setTimeout == "function" ? setTimeout : void 0,
  Qd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Au = typeof Promise == "function" ? Promise : void 0,
  Kd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Au < "u"
      ? function (e) {
          return Au.resolve(null).then(e).catch(Gd);
        }
      : $i;
function Gd(e) {
  setTimeout(function () {
    throw e;
  });
}
function ri(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Hn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Hn(t);
}
function at(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Wu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var hn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + hn,
  Xn = "__reactProps$" + hn,
  Ye = "__reactContainer$" + hn,
  Bi = "__reactEvents$" + hn,
  Yd = "__reactListeners$" + hn,
  Xd = "__reactHandles$" + hn;
function Ct(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wu(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Wu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ur(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function xl(e) {
  return e[Xn] || null;
}
var Ai = [],
  Kt = -1;
function yt(e) {
  return { current: e };
}
function U(e) {
  0 > Kt || ((e.current = Ai[Kt]), (Ai[Kt] = null), Kt--);
}
function F(e, t) {
  Kt++, (Ai[Kt] = e.current), (e.current = t);
}
var vt = {},
  oe = yt(vt),
  pe = yt(!1),
  Lt = vt;
function on(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function qr() {
  U(pe), U(oe);
}
function Vu(e, t, n) {
  if (oe.current !== vt) throw Error(k(168));
  F(oe, t), F(pe, n);
}
function Da(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Tf(e) || "Unknown", l));
  return W({}, n, r);
}
function br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vt),
    (Lt = oe.current),
    F(oe, e),
    F(pe, pe.current),
    !0
  );
}
function Hu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Da(e, t, Lt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(pe),
      U(oe),
      F(oe, e))
    : U(pe),
    F(pe, n);
}
var We = null,
  El = !1,
  li = !1;
function Ua(e) {
  We === null ? (We = [e]) : We.push(e);
}
function Zd(e) {
  (El = !0), Ua(e);
}
function wt() {
  if (!li && We !== null) {
    li = !0;
    var e = 0,
      t = M;
    try {
      var n = We;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (We = null), (El = !1);
    } catch (l) {
      throw (We !== null && (We = We.slice(e + 1)), aa(xo, wt), l);
    } finally {
      (M = t), (li = !1);
    }
  }
  return null;
}
var Gt = [],
  Yt = 0,
  el = null,
  tl = 0,
  xe = [],
  Ee = 0,
  zt = null,
  Ve = 1,
  He = "";
function xt(e, t) {
  (Gt[Yt++] = tl), (Gt[Yt++] = el), (el = e), (tl = t);
}
function $a(e, t, n) {
  (xe[Ee++] = Ve), (xe[Ee++] = He), (xe[Ee++] = zt), (zt = e);
  var r = Ve;
  e = He;
  var l = 32 - Te(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Te(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ve = (1 << (32 - Te(t) + l)) | (n << l) | r),
      (He = i + e);
  } else (Ve = (1 << i) | (n << l) | r), (He = e);
}
function Ro(e) {
  e.return !== null && (xt(e, 1), $a(e, 1, 0));
}
function Oo(e) {
  for (; e === el; )
    (el = Gt[--Yt]), (Gt[Yt] = null), (tl = Gt[--Yt]), (Gt[Yt] = null);
  for (; e === zt; )
    (zt = xe[--Ee]),
      (xe[Ee] = null),
      (He = xe[--Ee]),
      (xe[Ee] = null),
      (Ve = xe[--Ee]),
      (xe[Ee] = null);
}
var ye = null,
  ge = null,
  $ = !1,
  Oe = null;
function Ba(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ge = at(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? { id: Ve, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vi(e) {
  if ($) {
    var t = ge;
    if (t) {
      var n = t;
      if (!Qu(e, t)) {
        if (Wi(e)) throw Error(k(418));
        t = at(n.nextSibling);
        var r = ye;
        t && Qu(e, t)
          ? Ba(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e));
      }
    } else {
      if (Wi(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e);
    }
  }
}
function Ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function _r(e) {
  if (e !== ye) return !1;
  if (!$) return Ku(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ui(e.type, e.memoizedProps))),
    t && (t = ge))
  ) {
    if (Wi(e)) throw (Aa(), Error(k(418)));
    for (; t; ) Ba(e, t), (t = at(t.nextSibling));
  }
  if ((Ku(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = at(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = ye ? at(e.stateNode.nextSibling) : null;
  return !0;
}
function Aa() {
  for (var e = ge; e; ) e = at(e.nextSibling);
}
function un() {
  (ge = ye = null), ($ = !1);
}
function To(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Jd = Je.ReactCurrentBatchConfig;
function En(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Gu(e) {
  var t = e._init;
  return t(e._payload);
}
function Wa(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = pt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, v) {
    return c === null || c.tag !== 6
      ? ((c = fi(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, v) {
    var E = d.type;
    return E === At
      ? h(f, c, d.props.children, v, d.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === be &&
            Gu(E) === c.type))
      ? ((v = l(c, d.props)), (v.ref = En(f, c, d)), (v.return = f), v)
      : ((v = Wr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = En(f, c, d)),
        (v.return = f),
        v);
  }
  function a(f, c, d, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = di(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, v, E) {
    return c === null || c.tag !== 7
      ? ((c = jt(d, f.mode, v, E)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function p(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = fi("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case mr:
          return (
            (d = Wr(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = En(f, null, c)),
            (d.return = f),
            d
          );
        case Bt:
          return (c = di(c, f.mode, d)), (c.return = f), c;
        case be:
          var v = c._init;
          return p(f, v(c._payload), d);
      }
      if (Nn(c) || yn(c))
        return (c = jt(c, f.mode, d, null)), (c.return = f), c;
      Pr(f, c);
    }
    return null;
  }
  function m(f, c, d, v) {
    var E = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, c, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case mr:
          return d.key === E ? s(f, c, d, v) : null;
        case Bt:
          return d.key === E ? a(f, c, d, v) : null;
        case be:
          return (E = d._init), m(f, c, E(d._payload), v);
      }
      if (Nn(d) || yn(d)) return E !== null ? null : h(f, c, d, v, null);
      Pr(f, d);
    }
    return null;
  }
  function g(f, c, d, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(c, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case mr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(c, f, v, E);
        case Bt:
          return (f = f.get(v.key === null ? d : v.key) || null), a(c, f, v, E);
        case be:
          var N = v._init;
          return g(f, c, d, N(v._payload), E);
      }
      if (Nn(v) || yn(v)) return (f = f.get(d) || null), h(c, f, v, E, null);
      Pr(c, v);
    }
    return null;
  }
  function y(f, c, d, v) {
    for (
      var E = null, N = null, j = c, L = (c = 0), H = null;
      j !== null && L < d.length;
      L++
    ) {
      j.index > L ? ((H = j), (j = null)) : (H = j.sibling);
      var T = m(f, j, d[L], v);
      if (T === null) {
        j === null && (j = H);
        break;
      }
      e && j && T.alternate === null && t(f, j),
        (c = i(T, c, L)),
        N === null ? (E = T) : (N.sibling = T),
        (N = T),
        (j = H);
    }
    if (L === d.length) return n(f, j), $ && xt(f, L), E;
    if (j === null) {
      for (; L < d.length; L++)
        (j = p(f, d[L], v)),
          j !== null &&
            ((c = i(j, c, L)), N === null ? (E = j) : (N.sibling = j), (N = j));
      return $ && xt(f, L), E;
    }
    for (j = r(f, j); L < d.length; L++)
      (H = g(j, f, L, d[L], v)),
        H !== null &&
          (e && H.alternate !== null && j.delete(H.key === null ? L : H.key),
          (c = i(H, c, L)),
          N === null ? (E = H) : (N.sibling = H),
          (N = H));
    return (
      e &&
        j.forEach(function (je) {
          return t(f, je);
        }),
      $ && xt(f, L),
      E
    );
  }
  function w(f, c, d, v) {
    var E = yn(d);
    if (typeof E != "function") throw Error(k(150));
    if (((d = E.call(d)), d == null)) throw Error(k(151));
    for (
      var N = (E = null), j = c, L = (c = 0), H = null, T = d.next();
      j !== null && !T.done;
      L++, T = d.next()
    ) {
      j.index > L ? ((H = j), (j = null)) : (H = j.sibling);
      var je = m(f, j, T.value, v);
      if (je === null) {
        j === null && (j = H);
        break;
      }
      e && j && je.alternate === null && t(f, j),
        (c = i(je, c, L)),
        N === null ? (E = je) : (N.sibling = je),
        (N = je),
        (j = H);
    }
    if (T.done) return n(f, j), $ && xt(f, L), E;
    if (j === null) {
      for (; !T.done; L++, T = d.next())
        (T = p(f, T.value, v)),
          T !== null &&
            ((c = i(T, c, L)), N === null ? (E = T) : (N.sibling = T), (N = T));
      return $ && xt(f, L), E;
    }
    for (j = r(f, j); !T.done; L++, T = d.next())
      (T = g(j, f, L, T.value, v)),
        T !== null &&
          (e && T.alternate !== null && j.delete(T.key === null ? L : T.key),
          (c = i(T, c, L)),
          N === null ? (E = T) : (N.sibling = T),
          (N = T));
    return (
      e &&
        j.forEach(function (vn) {
          return t(f, vn);
        }),
      $ && xt(f, L),
      E
    );
  }
  function C(f, c, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === At &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case mr:
          e: {
            for (var E = d.key, N = c; N !== null; ) {
              if (N.key === E) {
                if (((E = d.type), E === At)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (c = l(N, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  N.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === be &&
                    Gu(E) === N.type)
                ) {
                  n(f, N.sibling),
                    (c = l(N, d.props)),
                    (c.ref = En(f, N, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === At
              ? ((c = jt(d.props.children, f.mode, v, d.key)),
                (c.return = f),
                (f = c))
              : ((v = Wr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = En(f, c, d)),
                (v.return = f),
                (f = v));
          }
          return o(f);
        case Bt:
          e: {
            for (N = d.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = di(d, f.mode, v)), (c.return = f), (f = c);
          }
          return o(f);
        case be:
          return (N = d._init), C(f, c, N(d._payload), v);
      }
      if (Nn(d)) return y(f, c, d, v);
      if (yn(d)) return w(f, c, d, v);
      Pr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = fi(d, f.mode, v)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return C;
}
var sn = Wa(!0),
  Va = Wa(!1),
  nl = yt(null),
  rl = null,
  Xt = null,
  Io = null;
function Mo() {
  Io = Xt = rl = null;
}
function Fo(e) {
  var t = nl.current;
  U(nl), (e._currentValue = t);
}
function Hi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function nn(e, t) {
  (rl = e),
    (Io = Xt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Pe(e) {
  var t = e._currentValue;
  if (Io !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xt === null)) {
      if (rl === null) throw Error(k(308));
      (Xt = e), (rl.dependencies = { lanes: 0, firstContext: e });
    } else Xt = Xt.next = e;
  return t;
}
var _t = null;
function Do(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function Ha(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Do(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function Uo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qa(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Do(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Fr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eo(e, n);
  }
}
function Yu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ll(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (h = a = s = null), (u = i);
    do {
      var m = u.lane,
        g = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            w = u;
          switch (((m = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                p = y.call(g, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (m = typeof y == "function" ? y.call(g, p, m) : y),
                m == null)
              )
                break e;
              p = W({}, p, m);
              break e;
            case 2:
              et = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = g), (s = p)) : (h = h.next = g),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Ot |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function Xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var sr = {},
  Be = yt(sr),
  Zn = yt(sr),
  Jn = yt(sr);
function Pt(e) {
  if (e === sr) throw Error(k(174));
  return e;
}
function $o(e, t) {
  switch ((F(Jn, t), F(Zn, e), F(Be, sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ci(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ci(t, e));
  }
  U(Be), F(Be, t);
}
function an() {
  U(Be), U(Zn), U(Jn);
}
function Ka(e) {
  Pt(Jn.current);
  var t = Pt(Be.current),
    n = Ci(t, e.type);
  t !== n && (F(Zn, e), F(Be, n));
}
function Bo(e) {
  Zn.current === e && (U(Be), U(Zn));
}
var B = yt(0);
function il(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ii = [];
function Ao() {
  for (var e = 0; e < ii.length; e++)
    ii[e]._workInProgressVersionPrimary = null;
  ii.length = 0;
}
var Dr = Je.ReactCurrentDispatcher,
  oi = Je.ReactCurrentBatchConfig,
  Rt = 0,
  A = null,
  X = null,
  q = null,
  ol = !1,
  Mn = !1,
  qn = 0,
  qd = 0;
function re() {
  throw Error(k(321));
}
function Wo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Vo(e, t, n, r, l, i) {
  if (
    ((Rt = i),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Dr.current = e === null || e.memoizedState === null ? np : rp),
    (e = n(r, l)),
    Mn)
  ) {
    i = 0;
    do {
      if (((Mn = !1), (qn = 0), 25 <= i)) throw Error(k(301));
      (i += 1),
        (q = X = null),
        (t.updateQueue = null),
        (Dr.current = lp),
        (e = n(r, l));
    } while (Mn);
  }
  if (
    ((Dr.current = ul),
    (t = X !== null && X.next !== null),
    (Rt = 0),
    (q = X = A = null),
    (ol = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Ho() {
  var e = qn !== 0;
  return (qn = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (A.memoizedState = q = e) : (q = q.next = e), q;
}
function Ne() {
  if (X === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = q === null ? A.memoizedState : q.next;
  if (t !== null) (q = t), (X = e);
  else {
    if (e === null) throw Error(k(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      q === null ? (A.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function bn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ui(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var h = a.lane;
      if ((Rt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (o = r)) : (s = s.next = p),
          (A.lanes |= h),
          (Ot |= h);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      Me(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (Ot |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function si(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Me(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ga() {}
function Ya(e, t) {
  var n = A,
    r = Ne(),
    l = t(),
    i = !Me(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Qo(Ja.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      er(9, Za.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(k(349));
    Rt & 30 || Xa(n, t, l);
  }
  return l;
}
function Xa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Za(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), qa(t) && ba(e);
}
function Ja(e, t, n) {
  return n(function () {
    qa(t) && ba(e);
  });
}
function qa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function ba(e) {
  var t = Xe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Zu(e) {
  var t = De();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tp.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function er(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ec() {
  return Ne().memoizedState;
}
function Ur(e, t, n, r) {
  var l = De();
  (A.flags |= e),
    (l.memoizedState = er(1 | t, n, void 0, r === void 0 ? null : r));
}
function Cl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && Wo(r, o.deps))) {
      l.memoizedState = er(t, n, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = er(1 | t, n, i, r));
}
function Ju(e, t) {
  return Ur(8390656, 8, e, t);
}
function Qo(e, t) {
  return Cl(2048, 8, e, t);
}
function tc(e, t) {
  return Cl(4, 2, e, t);
}
function nc(e, t) {
  return Cl(4, 4, e, t);
}
function rc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function lc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Cl(4, 4, rc.bind(null, t, e), n)
  );
}
function Ko() {}
function ic(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function oc(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function uc(e, t, n) {
  return Rt & 21
    ? (Me(n, t) || ((n = da()), (A.lanes |= n), (Ot |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function bd(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = oi.transition;
  oi.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (oi.transition = r);
  }
}
function sc() {
  return Ne().memoizedState;
}
function ep(e, t, n) {
  var r = dt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ac(e))
  )
    cc(t, n);
  else if (((n = Ha(e, t, n, r)), n !== null)) {
    var l = se();
    Ie(n, e, r, l), fc(n, t, r);
  }
}
function tp(e, t, n) {
  var r = dt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ac(e)) cc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Do(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ha(e, t, l, r)),
      n !== null && ((l = se()), Ie(n, e, r, l), fc(n, t, r));
  }
}
function ac(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function cc(e, t) {
  Mn = ol = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eo(e, n);
  }
}
var ul = {
    readContext: Pe,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  np = {
    readContext: Pe,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pe,
    useEffect: Ju,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ur(4194308, 4, rc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ur(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ur(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = De();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ep.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = De();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Zu,
    useDebugValue: Ko,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = Zu(!1),
        t = e[0];
      return (e = bd.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = De();
      if ($) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(k(349));
        Rt & 30 || Xa(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Ju(Ja.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        er(9, Za.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = De(),
        t = b.identifierPrefix;
      if ($) {
        var n = He,
          r = Ve;
        (n = (r & ~(1 << (32 - Te(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rp = {
    readContext: Pe,
    useCallback: ic,
    useContext: Pe,
    useEffect: Qo,
    useImperativeHandle: lc,
    useInsertionEffect: tc,
    useLayoutEffect: nc,
    useMemo: oc,
    useReducer: ui,
    useRef: ec,
    useState: function () {
      return ui(bn);
    },
    useDebugValue: Ko,
    useDeferredValue: function (e) {
      var t = Ne();
      return uc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = ui(bn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: Ga,
    useSyncExternalStore: Ya,
    useId: sc,
    unstable_isNewReconciler: !1,
  },
  lp = {
    readContext: Pe,
    useCallback: ic,
    useContext: Pe,
    useEffect: Qo,
    useImperativeHandle: lc,
    useInsertionEffect: tc,
    useLayoutEffect: nc,
    useMemo: oc,
    useReducer: si,
    useRef: ec,
    useState: function () {
      return si(bn);
    },
    useDebugValue: Ko,
    useDeferredValue: function (e) {
      var t = Ne();
      return X === null ? (t.memoizedState = e) : uc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = si(bn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: Ga,
    useSyncExternalStore: Ya,
    useId: sc,
    unstable_isNewReconciler: !1,
  };
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Qi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = dt(e),
      i = Ke(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ct(e, i, l)),
      t !== null && (Ie(t, e, l, r), Fr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = dt(e),
      i = Ke(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ct(e, i, l)),
      t !== null && (Ie(t, e, l, r), Fr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = dt(e),
      l = Ke(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ct(e, l, r)),
      t !== null && (Ie(t, e, r, n), Fr(t, e, r));
  },
};
function qu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Kn(n, r) || !Kn(l, i)
      : !0
  );
}
function dc(e, t, n) {
  var r = !1,
    l = vt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Pe(i))
      : ((l = he(t) ? Lt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? on(e, l) : vt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _l),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function bu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _l.enqueueReplaceState(t, t.state, null);
}
function Ki(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Uo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Pe(i))
    : ((i = he(t) ? Lt : oe.current), (l.context = on(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Qi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && _l.enqueueReplaceState(l, l.state, null),
      ll(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function cn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Of(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ai(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Gi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ip = typeof WeakMap == "function" ? WeakMap : Map;
function pc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      al || ((al = !0), (ro = r)), Gi(e, t);
    }),
    n
  );
}
function hc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Gi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Gi(e, t),
          typeof r != "function" &&
            (ft === null ? (ft = new Set([this])) : ft.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function es(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ip();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = wp.bind(null, e, t, n)), t.then(e, e));
}
function ts(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ns(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ke(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var op = Je.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Va(t, null, n, r) : sn(t, e.child, n, r);
}
function rs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    nn(t, l),
    (r = Vo(e, t, n, r, i, l)),
    (n = Ho()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : ($ && n && Ro(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function ls(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !eu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), mc(e, t, i, r, l))
      : ((e = Wr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Kn), n(o, r) && e.ref === t.ref)
    )
      return Ze(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function mc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Kn(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Ze(e, t, l);
  }
  return Yi(e, t, n, r, l);
}
function vc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Jt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(Jt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        F(Jt, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(Jt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function gc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yi(e, t, n, r, l) {
  var i = he(n) ? Lt : oe.current;
  return (
    (i = on(t, i)),
    nn(t, l),
    (n = Vo(e, t, n, r, i, l)),
    (r = Ho()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ze(e, t, l))
      : ($ && r && Ro(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function is(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    br(t);
  } else i = !1;
  if ((nn(t, l), t.stateNode === null))
    $r(e, t), dc(t, n, r), Ki(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Pe(a))
      : ((a = he(n) ? Lt : oe.current), (a = on(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && bu(t, o, r, a)),
      (et = !1);
    var m = t.memoizedState;
    (o.state = m),
      ll(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || et
        ? (typeof h == "function" && (Qi(t, n, h, r), (s = t.memoizedState)),
          (u = et || qu(t, n, u, r, m, s, a))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Qa(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : ze(t.type, u)),
      (o.props = a),
      (p = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Pe(s))
        : ((s = he(n) ? Lt : oe.current), (s = on(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== p || m !== s) && bu(t, o, r, s)),
      (et = !1),
      (m = t.memoizedState),
      (o.state = m),
      ll(t, r, o, l);
    var y = t.memoizedState;
    u !== p || m !== y || pe.current || et
      ? (typeof g == "function" && (Qi(t, n, g, r), (y = t.memoizedState)),
        (a = et || qu(t, n, a, r, m, y, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xi(e, t, n, r, i, l);
}
function Xi(e, t, n, r, l, i) {
  gc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Hu(t, n, !1), Ze(e, t, i);
  (r = t.stateNode), (op.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = sn(t, e.child, null, i)), (t.child = sn(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && Hu(t, n, !0),
    t.child
  );
}
function yc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Vu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Vu(e, t.context, !1),
    $o(e, t.containerInfo);
}
function os(e, t, n, r, l) {
  return un(), To(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Zi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ji(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wc(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F(B, l & 1),
    e === null)
  )
    return (
      Vi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = jl(o, r, 0, null)),
              (e = jt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ji(n)),
              (t.memoizedState = Zi),
              e)
            : Go(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return up(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = pt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = pt(u, i)) : ((i = jt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ji(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Go(e, t) {
  return (
    (t = jl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nr(e, t, n, r) {
  return (
    r !== null && To(r),
    sn(t, e.child, null, n),
    (e = Go(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function up(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ai(Error(k(422)))), Nr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = jl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = jt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && sn(t, e.child, null, o),
        (t.child.memoizedState = Ji(o)),
        (t.memoizedState = Zi),
        i);
  if (!(t.mode & 1)) return Nr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(k(419))), (r = ai(i, r, void 0)), Nr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), Ie(r, e, l, -1));
    }
    return bo(), (r = ai(Error(k(421)))), Nr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Sp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ge = at(l.nextSibling)),
      (ye = t),
      ($ = !0),
      (Oe = null),
      e !== null &&
        ((xe[Ee++] = Ve),
        (xe[Ee++] = He),
        (xe[Ee++] = zt),
        (Ve = e.id),
        (He = e.overflow),
        (zt = t)),
      (t = Go(t, r.children)),
      (t.flags |= 4096),
      t);
}
function us(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Hi(e.return, t, n);
}
function ci(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Sc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && us(e, n, t);
        else if (e.tag === 19) us(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && il(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ci(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && il(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ci(t, !0, n, null, i);
        break;
      case "together":
        ci(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $r(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ze(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ot |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function sp(e, t, n) {
  switch (t.tag) {
    case 3:
      yc(t), un();
      break;
    case 5:
      Ka(t);
      break;
    case 1:
      he(t.type) && br(t);
      break;
    case 4:
      $o(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      F(nl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? wc(e, t, n)
          : (F(B, B.current & 1),
            (e = Ze(e, t, n)),
            e !== null ? e.sibling : null);
      F(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vc(e, t, n);
  }
  return Ze(e, t, n);
}
var kc, qi, xc, Ec;
kc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
qi = function () {};
xc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Pt(Be.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Si(e, l)), (r = Si(e, r)), (i = []);
        break;
      case "select":
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Ei(e, l)), (r = Ei(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Jr);
    }
    _i(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            ($n.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              ($n.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && D("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Ec = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ap(e, t, n) {
  var r = t.pendingProps;
  switch ((Oo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && qr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        an(),
        U(pe),
        U(oe),
        Ao(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (oo(Oe), (Oe = null)))),
        qi(e, t),
        le(t),
        null
      );
    case 5:
      Bo(t);
      var l = Pt(Jn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        xc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return le(t), null;
        }
        if (((e = Pt(Be.current)), _r(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ue] = t), (r[Xn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) D(Ln[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              vu(r, i), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              yu(r, i), D("invalid", r);
          }
          _i(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : $n.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              vr(r), gu(r, i, !0);
              break;
            case "textarea":
              vr(r), wu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Jr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Js(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Xn] = r),
            kc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Pi(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) D(Ln[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                vu(e, r), (l = Si(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                yu(e, r), (l = Ei(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            _i(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? ea(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && qs(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Bn(e, s)
                    : typeof s == "number" && Bn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    ($n.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && D("scroll", e)
                      : s != null && go(e, i, s, o));
              }
            switch (n) {
              case "input":
                vr(e), gu(e, r, !1);
                break;
              case "textarea":
                vr(e), wu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) Ec(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Pt(Jn.current)), Pt(Be.current), _r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (i = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (U(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ge !== null && t.mode & 1 && !(t.flags & 128))
          Aa(), un(), (t.flags |= 98560), (i = !1);
        else if (((i = _r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[Ue] = t;
          } else
            un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Oe !== null && (oo(Oe), (Oe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? Z === 0 && (Z = 3) : bo())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        an(), qi(e, t), e === null && Gn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Fo(t.type._context), le(t), null;
    case 17:
      return he(t.type) && qr(), le(t), null;
    case 19:
      if ((U(B), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Cn(i, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = il(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Cn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > fn &&
            ((t.flags |= 128), (r = !0), Cn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = il(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Cn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !$)
            )
              return le(t), null;
          } else
            2 * K() - i.renderingStartTime > fn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Cn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = B.current),
          F(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        qo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function cp(e, t) {
  switch ((Oo(t), t.tag)) {
    case 1:
      return (
        he(t.type) && qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        an(),
        U(pe),
        U(oe),
        Ao(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Bo(t), null;
    case 13:
      if ((U(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(B), null;
    case 4:
      return an(), null;
    case 10:
      return Fo(t.type._context), null;
    case 22:
    case 23:
      return qo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jr = !1,
  ie = !1,
  fp = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Zt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function bi(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var ss = !1;
function dp(e, t) {
  if (((Fi = Yr), (e = ja()), zo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = o + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (m = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++a === l && (u = o),
                m === i && ++h === r && (s = o),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Di = { focusedElem: e, selectionRange: n }, Yr = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    C = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ze(t.type, w),
                      C
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (v) {
          V(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (y = ss), (ss = !1), y;
}
function Fn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && bi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function eo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Xn], delete t[Bi], delete t[Yd], delete t[Xd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _c(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function as(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _c(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function to(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Jr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (to(e, t, n), e = e.sibling; e !== null; ) to(e, t, n), (e = e.sibling);
}
function no(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (no(e, t, n), e = e.sibling; e !== null; ) no(e, t, n), (e = e.sibling);
}
var ee = null,
  Re = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) Pc(e, t, n), (n = n.sibling);
}
function Pc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(yl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Zt(n, t);
    case 6:
      var r = ee,
        l = Re;
      (ee = null),
        qe(e, t, n),
        (ee = r),
        (Re = l),
        ee !== null &&
          (Re
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Re
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? ri(e.parentNode, n)
              : e.nodeType === 1 && ri(e, n),
            Hn(e))
          : ri(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = Re),
        (ee = n.stateNode.containerInfo),
        (Re = !0),
        qe(e, t, n),
        (ee = r),
        (Re = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && bi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Zt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(n, t, u);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), qe(e, t, n), (ie = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function cs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new fp()),
      t.forEach(function (r) {
        var l = kp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (Re = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (Re = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (Re = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(k(160));
        Pc(i, o, l), (ee = null), (Re = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        V(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Nc(t, e), (t = t.sibling);
}
function Nc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), Fe(e), r & 4)) {
        try {
          Fn(3, e, e.return), Pl(3, e);
        } catch (w) {
          V(e, e.return, w);
        }
        try {
          Fn(5, e, e.return);
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 1:
      Le(t, e), Fe(e), r & 512 && n !== null && Zt(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        Fe(e),
        r & 512 && n !== null && Zt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Bn(l, "");
        } catch (w) {
          V(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && Xs(l, i),
              Pi(u, o);
            var a = Pi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                p = s[o + 1];
              h === "style"
                ? ea(l, p)
                : h === "dangerouslySetInnerHTML"
                ? qs(l, p)
                : h === "children"
                ? Bn(l, p)
                : go(l, h, p, a);
            }
            switch (u) {
              case "input":
                ki(l, i);
                break;
              case "textarea":
                Zs(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? qt(l, !!i.multiple, g, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qt(l, !!i.multiple, i.defaultValue, !0)
                      : qt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Xn] = i;
          } catch (w) {
            V(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Le(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hn(t.containerInfo);
        } catch (w) {
          V(e, e.return, w);
        }
      break;
    case 4:
      Le(t, e), Fe(e);
      break;
    case 13:
      Le(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Zo = K())),
        r & 4 && cs(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || h), Le(t, e), (ie = a)) : Le(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (_ = e, h = e.child; h !== null; ) {
            for (p = _ = h; _ !== null; ) {
              switch (((m = _), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fn(4, m, m.return);
                  break;
                case 1:
                  Zt(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      V(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Zt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ds(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (_ = g)) : ds(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = bs("display", o)));
              } catch (w) {
                V(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (w) {
                V(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), Fe(e), r & 4 && cs(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_c(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Bn(l, ""), (r.flags &= -33));
          var i = as(e);
          no(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = as(e);
          to(e, u, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pp(e, t, n) {
  (_ = e), jc(e);
}
function jc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || jr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = jr;
        var a = ie;
        if (((jr = o), (ie = s) && !a))
          for (_ = l; _ !== null; )
            (o = _),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ps(l)
                : s !== null
                ? ((s.return = o), (_ = s))
                : ps(l);
        for (; i !== null; ) (_ = i), jc(i), (i = i.sibling);
        (_ = l), (jr = u), (ie = a);
      }
      fs(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (_ = i)) : fs(e);
  }
}
function fs(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Xu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Hn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ie || (t.flags & 512 && eo(t));
      } catch (m) {
        V(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ds(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ps(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pl(4, t);
          } catch (s) {
            V(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(t, l, s);
            }
          }
          var i = t.return;
          try {
            eo(t);
          } catch (s) {
            V(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            eo(t);
          } catch (s) {
            V(t, o, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var hp = Math.ceil,
  sl = Je.ReactCurrentDispatcher,
  Yo = Je.ReactCurrentOwner,
  _e = Je.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  G = null,
  te = 0,
  ve = 0,
  Jt = yt(0),
  Z = 0,
  tr = null,
  Ot = 0,
  Nl = 0,
  Xo = 0,
  Dn = null,
  fe = null,
  Zo = 0,
  fn = 1 / 0,
  Ae = null,
  al = !1,
  ro = null,
  ft = null,
  Lr = !1,
  lt = null,
  cl = 0,
  Un = 0,
  lo = null,
  Br = -1,
  Ar = 0;
function se() {
  return I & 6 ? K() : Br !== -1 ? Br : (Br = K());
}
function dt(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Jd.transition !== null
      ? (Ar === 0 && (Ar = da()), Ar)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wa(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Un) throw ((Un = 0), (lo = null), Error(k(185)));
  ir(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (Nl |= n), Z === 4 && nt(e, te)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((fn = K() + 500), El && wt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Jf(e, t);
  var r = Gr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && xu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && xu(n), t === 1))
      e.tag === 0 ? Zd(hs.bind(null, e)) : Ua(hs.bind(null, e)),
        Kd(function () {
          !(I & 6) && wt();
        }),
        (n = null);
    else {
      switch (pa(r)) {
        case 1:
          n = xo;
          break;
        case 4:
          n = ca;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = fa;
          break;
        default:
          n = Kr;
      }
      n = Fc(n, Lc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Lc(e, t) {
  if (((Br = -1), (Ar = 0), I & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (rn() && e.callbackNode !== n) return null;
  var r = Gr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var i = Rc();
    (b !== e || te !== t) && ((Ae = null), (fn = K() + 500), Nt(e, t));
    do
      try {
        gp();
        break;
      } catch (u) {
        zc(e, u);
      }
    while (!0);
    Mo(),
      (sl.current = i),
      (I = l),
      G !== null ? (t = 0) : ((b = null), (te = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ri(e)), l !== 0 && ((r = l), (t = io(e, l)))), t === 1)
    )
      throw ((n = tr), Nt(e, 0), nt(e, r), me(e, K()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !mp(l) &&
          ((t = fl(e, r)),
          t === 2 && ((i = Ri(e)), i !== 0 && ((r = i), (t = io(e, i)))),
          t === 1))
      )
        throw ((n = tr), Nt(e, 0), nt(e, r), me(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Et(e, fe, Ae);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = Zo + 500 - K()), 10 < t))
          ) {
            if (Gr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = $i(Et.bind(null, e, fe, Ae), t);
            break;
          }
          Et(e, fe, Ae);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Te(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * hp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $i(Et.bind(null, e, fe, Ae), r);
            break;
          }
          Et(e, fe, Ae);
          break;
        case 5:
          Et(e, fe, Ae);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? Lc.bind(null, e) : null;
}
function io(e, t) {
  var n = Dn;
  return (
    e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
    (e = fl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && oo(t)),
    e
  );
}
function oo(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function mp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nt(e, t) {
  for (
    t &= ~Xo,
      t &= ~Nl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Te(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function hs(e) {
  if (I & 6) throw Error(k(327));
  rn();
  var t = Gr(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ri(e);
    r !== 0 && ((t = r), (n = io(e, r)));
  }
  if (n === 1) throw ((n = tr), Nt(e, 0), nt(e, t), me(e, K()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, fe, Ae),
    me(e, K()),
    null
  );
}
function Jo(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((fn = K() + 500), El && wt());
  }
}
function Tt(e) {
  lt !== null && lt.tag === 0 && !(I & 6) && rn();
  var t = I;
  I |= 1;
  var n = _e.transition,
    r = M;
  try {
    if (((_e.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (_e.transition = n), (I = t), !(I & 6) && wt();
  }
}
function qo() {
  (ve = Jt.current), U(Jt);
}
function Nt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qd(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((Oo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qr();
          break;
        case 3:
          an(), U(pe), U(oe), Ao();
          break;
        case 5:
          Bo(r);
          break;
        case 4:
          an();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          Fo(r.type._context);
          break;
        case 22:
        case 23:
          qo();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (G = e = pt(e.current, null)),
    (te = ve = t),
    (Z = 0),
    (tr = null),
    (Xo = Nl = Ot = 0),
    (fe = Dn = null),
    _t !== null)
  ) {
    for (t = 0; t < _t.length; t++)
      if (((n = _t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    _t = null;
  }
  return e;
}
function zc(e, t) {
  do {
    var n = G;
    try {
      if ((Mo(), (Dr.current = ul), ol)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ol = !1;
      }
      if (
        ((Rt = 0),
        (q = X = A = null),
        (Mn = !1),
        (qn = 0),
        (Yo.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (tr = t), (G = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = ts(o);
          if (g !== null) {
            (g.flags &= -257),
              ns(g, o, u, i, t),
              g.mode & 1 && es(i, a, t),
              (t = g),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              es(i, a, t), bo();
              break e;
            }
            s = Error(k(426));
          }
        } else if ($ && u.mode & 1) {
          var C = ts(o);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              ns(C, o, u, i, t),
              To(cn(s, u));
            break e;
          }
        }
        (i = s = cn(s, u)),
          Z !== 4 && (Z = 2),
          Dn === null ? (Dn = [i]) : Dn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = pc(i, s, t);
              Yu(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ft === null || !ft.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = hc(i, u, t);
                Yu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Tc(n);
    } catch (E) {
      (t = E), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rc() {
  var e = sl.current;
  return (sl.current = ul), e === null ? ul : e;
}
function bo() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    b === null || (!(Ot & 268435455) && !(Nl & 268435455)) || nt(b, te);
}
function fl(e, t) {
  var n = I;
  I |= 2;
  var r = Rc();
  (b !== e || te !== t) && ((Ae = null), Nt(e, t));
  do
    try {
      vp();
      break;
    } catch (l) {
      zc(e, l);
    }
  while (!0);
  if ((Mo(), (I = n), (sl.current = r), G !== null)) throw Error(k(261));
  return (b = null), (te = 0), Z;
}
function vp() {
  for (; G !== null; ) Oc(G);
}
function gp() {
  for (; G !== null && !Wf(); ) Oc(G);
}
function Oc(e) {
  var t = Mc(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Tc(e) : (G = t),
    (Yo.current = null);
}
function Tc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cp(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (G = null);
        return;
      }
    } else if (((n = ap(n, t, ve)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Et(e, t, n) {
  var r = M,
    l = _e.transition;
  try {
    (_e.transition = null), (M = 1), yp(e, t, n, r);
  } finally {
    (_e.transition = l), (M = r);
  }
  return null;
}
function yp(e, t, n, r) {
  do rn();
  while (lt !== null);
  if (I & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (qf(e, i),
    e === b && ((G = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Lr ||
      ((Lr = !0),
      Fc(Kr, function () {
        return rn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = M;
    M = 1;
    var u = I;
    (I |= 4),
      (Yo.current = null),
      dp(e, n),
      Nc(n, e),
      Ud(Di),
      (Yr = !!Fi),
      (Di = Fi = null),
      (e.current = n),
      pp(n),
      Vf(),
      (I = u),
      (M = o),
      (_e.transition = i);
  } else e.current = n;
  if (
    (Lr && ((Lr = !1), (lt = e), (cl = l)),
    (i = e.pendingLanes),
    i === 0 && (ft = null),
    Kf(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (al) throw ((al = !1), (e = ro), (ro = null), e);
  return (
    cl & 1 && e.tag !== 0 && rn(),
    (i = e.pendingLanes),
    i & 1 ? (e === lo ? Un++ : ((Un = 0), (lo = e))) : (Un = 0),
    wt(),
    null
  );
}
function rn() {
  if (lt !== null) {
    var e = pa(cl),
      t = _e.transition,
      n = M;
    try {
      if (((_e.transition = null), (M = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (cl = 0), I & 6)) throw Error(k(331));
        var l = I;
        for (I |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            o = i.child;
          if (_.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (_ = a; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fn(8, h, i);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (_ = p);
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var m = h.sibling,
                        g = h.return;
                      if ((Cc(h), h === a)) {
                        _ = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = g), (_ = m);
                        break;
                      }
                      _ = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var C = w.sibling;
                    (w.sibling = null), (w = C);
                  } while (w !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (_ = o);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (_ = f);
                break e;
              }
              _ = i.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          o = _;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (_ = d);
          else
            e: for (o = c; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pl(9, u);
                  }
                } catch (E) {
                  V(u, u.return, E);
                }
              if (u === o) {
                _ = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (_ = v);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((I = l), wt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(yl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (_e.transition = t);
    }
  }
  return !1;
}
function ms(e, t, n) {
  (t = cn(n, t)),
    (t = pc(e, t, 1)),
    (e = ct(e, t, 1)),
    (t = se()),
    e !== null && (ir(e, 1, t), me(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) ms(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ms(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ft === null || !ft.has(r)))
        ) {
          (e = cn(n, e)),
            (e = hc(t, e, 1)),
            (t = ct(t, e, 1)),
            (e = se()),
            t !== null && (ir(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function wp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (Z === 4 || (Z === 3 && (te & 130023424) === te && 500 > K() - Zo)
        ? Nt(e, 0)
        : (Xo |= n)),
    me(e, t);
}
function Ic(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wr), (wr <<= 1), !(wr & 130023424) && (wr = 4194304))
      : (t = 1));
  var n = se();
  (e = Xe(e, t)), e !== null && (ir(e, t, n), me(e, n));
}
function Sp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ic(e, n);
}
function kp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Ic(e, n);
}
var Mc;
Mc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), sp(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), $ && t.flags & 1048576 && $a(t, tl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      $r(e, t), (e = t.pendingProps);
      var l = on(t, oe.current);
      nn(t, n), (l = Vo(null, t, r, e, l, n));
      var i = Ho();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), br(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Uo(t),
            (l.updater = _l),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ki(t, r, e, n),
            (t = Xi(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && Ro(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($r(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ep(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = Yi(null, t, r, e, n);
            break e;
          case 1:
            t = is(null, t, r, e, n);
            break e;
          case 11:
            t = rs(null, t, r, e, n);
            break e;
          case 14:
            t = ls(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Yi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        is(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((yc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Qa(e, t),
          ll(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = cn(Error(k(423)), t)), (t = os(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = cn(Error(k(424)), t)), (t = os(e, t, r, n, l));
            break e;
          } else
            for (
              ge = at(t.stateNode.containerInfo.firstChild),
                ye = t,
                $ = !0,
                Oe = null,
                n = Va(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((un(), r === l)) {
            t = Ze(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ka(t),
        e === null && Vi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ui(r, l) ? (o = null) : i !== null && Ui(r, i) && (t.flags |= 32),
        gc(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Vi(t), null;
    case 13:
      return wc(e, t, n);
    case 4:
      return (
        $o(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sn(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        rs(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          F(nl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Me(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = Ze(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ke(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Hi(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Hi(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        nn(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        ls(e, t, r, l, n)
      );
    case 15:
      return mc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        $r(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), br(t)) : (e = !1),
        nn(t, n),
        dc(t, r, l),
        Ki(t, r, l, n),
        Xi(null, t, r, !0, e, n)
      );
    case 19:
      return Sc(e, t, n);
    case 22:
      return vc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Fc(e, t) {
  return aa(e, t);
}
function xp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new xp(e, t, n, r);
}
function eu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ep(e) {
  if (typeof e == "function") return eu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wo)) return 11;
    if (e === So) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) eu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case At:
        return jt(n.children, l, i, t);
      case yo:
        (o = 8), (l |= 8);
        break;
      case vi:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = vi), (e.lanes = i), e
        );
      case gi:
        return (e = Ce(13, n, t, l)), (e.elementType = gi), (e.lanes = i), e;
      case yi:
        return (e = Ce(19, n, t, l)), (e.elementType = yi), (e.lanes = i), e;
      case Ks:
        return jl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hs:
              o = 10;
              break e;
            case Qs:
              o = 9;
              break e;
            case wo:
              o = 11;
              break e;
            case So:
              o = 14;
              break e;
            case be:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function jt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function jl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Ks),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fi(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function di(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Cp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Kl(0)),
    (this.expirationTimes = Kl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Kl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function tu(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Cp(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ce(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Uo(i),
    e
  );
}
function _p(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Bt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return Da(e, n, t);
  }
  return t;
}
function Uc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = tu(n, r, !0, e, l, i, o, u, s)),
    (e.context = Dc(null)),
    (n = e.current),
    (r = se()),
    (l = dt(n)),
    (i = Ke(r, l)),
    (i.callback = t ?? null),
    ct(n, i, l),
    (e.current.lanes = l),
    ir(e, l, r),
    me(e, r),
    e
  );
}
function Ll(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = dt(l);
  return (
    (n = Dc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ct(l, t, o)),
    e !== null && (Ie(e, l, o, i), Fr(e, l, o)),
    o
  );
}
function dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nu(e, t) {
  vs(e, t), (e = e.alternate) && vs(e, t);
}
function Pp() {
  return null;
}
var $c =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ru(e) {
  this._internalRoot = e;
}
zl.prototype.render = ru.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Ll(e, t, null, null);
};
zl.prototype.unmount = ru.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      Ll(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = va();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && ya(e);
  }
};
function lu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gs() {}
function Np(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = dl(o);
        i.call(a);
      };
    }
    var o = Uc(t, r, e, 0, null, !1, !1, "", gs);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      Gn(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = dl(s);
      u.call(a);
    };
  }
  var s = tu(e, 0, !1, null, null, !1, !1, "", gs);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      Ll(t, s, n, r);
    }),
    s
  );
}
function Ol(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = dl(o);
        u.call(s);
      };
    }
    Ll(t, o, e, l);
  } else o = Np(n, t, e, l, r);
  return dl(o);
}
ha = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jn(t.pendingLanes);
        n !== 0 &&
          (Eo(t, n | 1), me(t, K()), !(I & 6) && ((fn = K() + 500), wt()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }),
        nu(e, 1);
  }
};
Co = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      Ie(t, e, 134217728, n);
    }
    nu(e, 134217728);
  }
};
ma = function (e) {
  if (e.tag === 13) {
    var t = dt(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      Ie(n, e, t, r);
    }
    nu(e, t);
  }
};
va = function () {
  return M;
};
ga = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
ji = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ki(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xl(r);
            if (!l) throw Error(k(90));
            Ys(r), ki(r, l);
          }
        }
      }
      break;
    case "textarea":
      Zs(e, n);
      break;
    case "select":
      (t = n.value), t != null && qt(e, !!n.multiple, t, !1);
  }
};
ra = Jo;
la = Tt;
var jp = { usingClientEntryPoint: !1, Events: [ur, Qt, xl, ta, na, Jo] },
  _n = {
    findFiberByHostInstance: Ct,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Lp = {
    bundleType: _n.bundleType,
    version: _n.version,
    rendererPackageName: _n.rendererPackageName,
    rendererConfig: _n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ua(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: _n.findFiberByHostInstance || Pp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber)
    try {
      (yl = zr.inject(Lp)), ($e = zr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jp;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lu(t)) throw Error(k(200));
  return _p(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!lu(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = $c;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = tu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    new ru(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = ua(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Tt(e);
};
Se.hydrate = function (e, t, n) {
  if (!Rl(t)) throw Error(k(200));
  return Ol(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!lu(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = $c;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Uc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    Gn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new zl(t);
};
Se.render = function (e, t, n) {
  if (!Rl(t)) throw Error(k(200));
  return Ol(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!Rl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Tt(function () {
        Ol(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = Jo;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Rl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ol(e, t, n, !1, r);
};
Se.version = "18.3.1-next-f1338f8080-20240426";
function Bc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bc);
    } catch (e) {
      console.error(e);
    }
}
Bc(), (Bs.exports = Se);
var zp = Bs.exports,
  ys = zp;
(hi.createRoot = ys.createRoot), (hi.hydrateRoot = ys.hydrateRoot);
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nr.apply(this, arguments)
  );
}
var it;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(it || (it = {}));
const ws = "popstate";
function Rp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: u } = r.location;
    return uo(
      "",
      { pathname: i, search: o, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : pl(l);
  }
  return Tp(t, n, null, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ac(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Op() {
  return Math.random().toString(36).substr(2, 8);
}
function Ss(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function uo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    nr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? mn(t) : t,
      { state: n, key: (t && t.key) || r || Op() }
    )
  );
}
function pl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function mn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Tp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = it.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), o.replaceState(nr({}, o.state, { idx: a }), ""));
  function h() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    u = it.Pop;
    let C = h(),
      f = C == null ? null : C - a;
    (a = C), s && s({ action: u, location: w.location, delta: f });
  }
  function m(C, f) {
    u = it.Push;
    let c = uo(w.location, C, f);
    a = h() + 1;
    let d = Ss(c, a),
      v = w.createHref(c);
    try {
      o.pushState(d, "", v);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      l.location.assign(v);
    }
    i && s && s({ action: u, location: w.location, delta: 1 });
  }
  function g(C, f) {
    u = it.Replace;
    let c = uo(w.location, C, f);
    a = h();
    let d = Ss(c, a),
      v = w.createHref(c);
    o.replaceState(d, "", v),
      i && s && s({ action: u, location: w.location, delta: 0 });
  }
  function y(C) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof C == "string" ? C : pl(C);
    return (
      (c = c.replace(/ $/, "%20")),
      Y(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(C) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ws, p),
        (s = C),
        () => {
          l.removeEventListener(ws, p), (s = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: y,
    encodeLocation(C) {
      let f = y(C);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: g,
    go(C) {
      return o.go(C);
    },
  };
  return w;
}
var ks;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ks || (ks = {}));
function Ip(e, t, n) {
  return n === void 0 && (n = "/"), Mp(e, t, n, !1);
}
function Mp(e, t, n, r) {
  let l = typeof t == "string" ? mn(t) : t,
    i = iu(l.pathname || "/", n);
  if (i == null) return null;
  let o = Wc(e);
  Fp(o);
  let u = null;
  for (let s = 0; u == null && s < o.length; ++s) {
    let a = Gp(i);
    u = Qp(o[s], a, r);
  }
  return u;
}
function Wc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (Y(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = ht([r, s.relativePath]),
      h = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (Y(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Wc(i.children, t, h, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: Vp(a, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, o) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) l(i, o);
      else for (let s of Vc(i.path)) l(i, o, s);
    }),
    t
  );
}
function Vc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Vc(r.join("/")),
    u = [];
  return (
    u.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    l && u.push(...o),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Fp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Hp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Dp = /^:[\w-]+$/,
  Up = 3,
  $p = 2,
  Bp = 1,
  Ap = 10,
  Wp = -2,
  xs = (e) => e === "*";
function Vp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(xs) && (r += Wp),
    t && (r += $p),
    n
      .filter((l) => !xs(l))
      .reduce((l, i) => l + (Dp.test(i) ? Up : i === "" ? Bp : Ap), r)
  );
}
function Hp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Qp(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let u = 0; u < r.length; ++u) {
    let s = r[u],
      a = u === r.length - 1,
      h = i === "/" ? t : t.slice(i.length) || "/",
      p = Es(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        h
      ),
      m = s.route;
    if (
      (!p &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (p = Es(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          h
        )),
      !p)
    )
      return null;
    Object.assign(l, p.params),
      o.push({
        params: l,
        pathname: ht([i, p.pathname]),
        pathnameBase: Jp(ht([i, p.pathnameBase])),
        route: m,
      }),
      p.pathnameBase !== "/" && (i = ht([i, p.pathnameBase]));
  }
  return o;
}
function Es(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Kp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, p) => {
      let { paramName: m, isOptional: g } = h;
      if (m === "*") {
        let w = u[p] || "";
        o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const y = u[p];
      return (
        g && !y ? (a[m] = void 0) : (a[m] = (y || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Kp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ac(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Gp(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Ac(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function iu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Yp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? mn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Xp(n, t)) : t,
    search: qp(r),
    hash: bp(l),
  };
}
function Xp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function pi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Zp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Hc(e, t) {
  let n = Zp(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Qc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = mn(e))
    : ((l = nr({}, e)),
      Y(
        !l.pathname || !l.pathname.includes("?"),
        pi("?", "pathname", "search", l)
      ),
      Y(
        !l.pathname || !l.pathname.includes("#"),
        pi("#", "pathname", "hash", l)
      ),
      Y(!l.search || !l.search.includes("#"), pi("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    u;
  if (o == null) u = n;
  else {
    let p = t.length - 1;
    if (!r && o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      l.pathname = m.join("/");
    }
    u = p >= 0 ? t[p] : "/";
  }
  let s = Yp(l, u),
    a = o && o !== "/" && o.endsWith("/"),
    h = (i || o === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
}
const ht = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Jp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  qp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  bp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function eh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Kc = ["post", "put", "patch", "delete"];
new Set(Kc);
const th = ["get", ...Kc];
new Set(th);
/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rr() {
  return (
    (rr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rr.apply(this, arguments)
  );
}
const ou = x.createContext(null),
  nh = x.createContext(null),
  Ft = x.createContext(null),
  Tl = x.createContext(null),
  Dt = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Gc = x.createContext(null);
function rh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ar() || Y(!1);
  let { basename: r, navigator: l } = x.useContext(Ft),
    { hash: i, pathname: o, search: u } = Xc(e, { relative: n }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : ht([r, o])),
    l.createHref({ pathname: s, search: u, hash: i })
  );
}
function ar() {
  return x.useContext(Tl) != null;
}
function Il() {
  return ar() || Y(!1), x.useContext(Tl).location;
}
function Yc(e) {
  x.useContext(Ft).static || x.useLayoutEffect(e);
}
function uu() {
  let { isDataRoute: e } = x.useContext(Dt);
  return e ? vh() : lh();
}
function lh() {
  ar() || Y(!1);
  let e = x.useContext(ou),
    { basename: t, future: n, navigator: r } = x.useContext(Ft),
    { matches: l } = x.useContext(Dt),
    { pathname: i } = Il(),
    o = JSON.stringify(Hc(l, n.v7_relativeSplatPath)),
    u = x.useRef(!1);
  return (
    Yc(() => {
      u.current = !0;
    }),
    x.useCallback(
      function (a, h) {
        if ((h === void 0 && (h = {}), !u.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let p = Qc(a, JSON.parse(o), i, h.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : ht([t, p.pathname])),
          (h.replace ? r.replace : r.push)(p, h.state, h);
      },
      [t, r, o, i, e]
    )
  );
}
function Xc(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = x.useContext(Ft),
    { matches: l } = x.useContext(Dt),
    { pathname: i } = Il(),
    o = JSON.stringify(Hc(l, r.v7_relativeSplatPath));
  return x.useMemo(() => Qc(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function ih(e, t) {
  return oh(e, t);
}
function oh(e, t, n, r) {
  ar() || Y(!1);
  let { navigator: l } = x.useContext(Ft),
    { matches: i } = x.useContext(Dt),
    o = i[i.length - 1],
    u = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Il(),
    h;
  if (t) {
    var p;
    let C = typeof t == "string" ? mn(t) : t;
    s === "/" || ((p = C.pathname) != null && p.startsWith(s)) || Y(!1),
      (h = C);
  } else h = a;
  let m = h.pathname || "/",
    g = m;
  if (s !== "/") {
    let C = s.replace(/^\//, "").split("/");
    g = "/" + m.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let y = Ip(e, { pathname: g }),
    w = fh(
      y &&
        y.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, u, C.params),
            pathname: ht([
              s,
              l.encodeLocation
                ? l.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? s
                : ht([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && w
    ? x.createElement(
        Tl.Provider,
        {
          value: {
            location: rr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: it.Pop,
          },
        },
        w
      )
    : w;
}
function uh() {
  let e = mh(),
    t = eh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: l }, n) : null,
    null
  );
}
const sh = x.createElement(uh, null);
class ah extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          Dt.Provider,
          { value: this.props.routeContext },
          x.createElement(Gc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ch(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = x.useContext(ou);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Dt.Provider, { value: t }, r)
  );
}
function fh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let h = o.findIndex(
      (p) => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
    );
    h >= 0 || Y(!1), (o = o.slice(0, Math.min(o.length, h + 1)));
  }
  let s = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < o.length; h++) {
      let p = o[h];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (a = h),
        p.route.id)
      ) {
        let { loaderData: m, errors: g } = n,
          y =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!g || g[p.route.id] === void 0);
        if (p.route.lazy || y) {
          (s = !0), a >= 0 ? (o = o.slice(0, a + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((h, p, m) => {
    let g,
      y = !1,
      w = null,
      C = null;
    n &&
      ((g = u && p.route.id ? u[p.route.id] : void 0),
      (w = p.route.errorElement || sh),
      s &&
        (a < 0 && m === 0
          ? ((y = !0), (C = null))
          : a === m &&
            ((y = !0), (C = p.route.hydrateFallbackElement || null))));
    let f = t.concat(o.slice(0, m + 1)),
      c = () => {
        let d;
        return (
          g
            ? (d = w)
            : y
            ? (d = C)
            : p.route.Component
            ? (d = x.createElement(p.route.Component, null))
            : p.route.element
            ? (d = p.route.element)
            : (d = h),
          x.createElement(ch, {
            match: p,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? x.createElement(ah, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: c(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Zc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Zc || {}),
  hl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(hl || {});
function dh(e) {
  let t = x.useContext(ou);
  return t || Y(!1), t;
}
function ph(e) {
  let t = x.useContext(nh);
  return t || Y(!1), t;
}
function hh(e) {
  let t = x.useContext(Dt);
  return t || Y(!1), t;
}
function Jc(e) {
  let t = hh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Y(!1), n.route.id;
}
function mh() {
  var e;
  let t = x.useContext(Gc),
    n = ph(hl.UseRouteError),
    r = Jc(hl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function vh() {
  let { router: e } = dh(Zc.UseNavigateStable),
    t = Jc(hl.UseNavigateStable),
    n = x.useRef(!1);
  return (
    Yc(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, rr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function $t(e) {
  Y(!1);
}
function gh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = it.Pop,
    navigator: i,
    static: o = !1,
    future: u,
  } = e;
  ar() && Y(!1);
  let s = t.replace(/^\/*/, "/"),
    a = x.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: o,
        future: rr({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, i, o]
    );
  typeof r == "string" && (r = mn(r));
  let {
      pathname: h = "/",
      search: p = "",
      hash: m = "",
      state: g = null,
      key: y = "default",
    } = r,
    w = x.useMemo(() => {
      let C = iu(h, s);
      return C == null
        ? null
        : {
            location: { pathname: C, search: p, hash: m, state: g, key: y },
            navigationType: l,
          };
    }, [s, h, p, m, g, y, l]);
  return w == null
    ? null
    : x.createElement(
        Ft.Provider,
        { value: a },
        x.createElement(Tl.Provider, { children: n, value: w })
      );
}
function yh(e) {
  let { children: t, location: n } = e;
  return ih(so(t), n);
}
new Promise(() => {});
function so(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, l) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === x.Fragment) {
        n.push.apply(n, so(r.props.children, i));
        return;
      }
      r.type !== $t && Y(!1), !r.props.index || !r.props.children || Y(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = so(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ao() {
  return (
    (ao = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ao.apply(this, arguments)
  );
}
function wh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Sh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function kh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Sh(e);
}
const xh = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Eh = "6";
try {
  window.__reactRouterVersion = Eh;
} catch {}
const Ch = "startTransition",
  Cs = wf[Ch];
function _h(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = x.useRef();
  i.current == null && (i.current = Rp({ window: l, v5Compat: !0 }));
  let o = i.current,
    [u, s] = x.useState({ action: o.action, location: o.location }),
    { v7_startTransition: a } = r || {},
    h = x.useCallback(
      (p) => {
        a && Cs ? Cs(() => s(p)) : s(p);
      },
      [s, a]
    );
  return (
    x.useLayoutEffect(() => o.listen(h), [o, h]),
    x.createElement(gh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
      future: r,
    })
  );
}
const Ph =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Nh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  jh = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: u,
        target: s,
        to: a,
        preventScrollReset: h,
        unstable_viewTransition: p,
      } = t,
      m = wh(t, xh),
      { basename: g } = x.useContext(Ft),
      y,
      w = !1;
    if (typeof a == "string" && Nh.test(a) && ((y = a), Ph))
      try {
        let d = new URL(window.location.href),
          v = a.startsWith("//") ? new URL(d.protocol + a) : new URL(a),
          E = iu(v.pathname, g);
        v.origin === d.origin && E != null
          ? (a = E + v.search + v.hash)
          : (w = !0);
      } catch {}
    let C = rh(a, { relative: l }),
      f = Lh(a, {
        replace: o,
        state: u,
        target: s,
        preventScrollReset: h,
        relative: l,
        unstable_viewTransition: p,
      });
    function c(d) {
      r && r(d), d.defaultPrevented || f(d);
    }
    return x.createElement(
      "a",
      ao({}, m, { href: y || C, onClick: w || i ? r : c, ref: n, target: s })
    );
  });
var _s;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(_s || (_s = {}));
var Ps;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ps || (Ps = {}));
function Lh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    s = uu(),
    a = Il(),
    h = Xc(e, { relative: o });
  return x.useCallback(
    (p) => {
      if (kh(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : pl(a) === pl(h);
        s(e, {
          replace: m,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: u,
        });
      }
    },
    [a, s, h, r, l, n, e, i, o, u]
  );
}
var qc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ns = Qe.createContext && Qe.createContext(qc),
  zh = ["attr", "size", "title"];
function Rh(e, t) {
  if (e == null) return {};
  var n = Oh(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      (r = i[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Oh(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function ml() {
  return (
    (ml = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ml.apply(this, arguments)
  );
}
function js(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function vl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? js(Object(n), !0).forEach(function (r) {
          Th(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : js(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Th(e, t, n) {
  return (
    (t = Ih(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ih(e) {
  var t = Mh(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Mh(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bc(e) {
  return (
    e &&
    e.map((t, n) =>
      Qe.createElement(t.tag, vl({ key: n }, t.attr), bc(t.child))
    )
  );
}
function su(e) {
  return (t) =>
    Qe.createElement(Fh, ml({ attr: vl({}, e.attr) }, t), bc(e.child));
}
function Fh(e) {
  var t = (n) => {
    var { attr: r, size: l, title: i } = e,
      o = Rh(e, zh),
      u = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      Qe.createElement(
        "svg",
        ml(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: s,
            style: vl(vl({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && Qe.createElement("title", null, i),
        e.children
      )
    );
  };
  return Ns !== void 0
    ? Qe.createElement(Ns.Consumer, null, (n) => t(n))
    : t(qc);
}
function Dh(e) {
  return su({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M275.5 96l-96 96h-96v128h96l96 96V96zm51.46 27.668l-4.66 17.387c52.066 13.95 88.2 61.04 88.2 114.945 0 53.904-36.134 100.994-88.2 114.945l4.66 17.387C386.81 372.295 428.5 317.962 428.5 256c0-61.963-41.69-116.295-101.54-132.332zm-12.425 46.365l-4.658 17.387C340.96 195.748 362.5 223.822 362.5 256s-21.54 60.252-52.623 68.58l4.658 17.387C353.402 331.552 380.5 296.237 380.5 256c0-40.238-27.098-75.552-65.965-85.967zm-12.424 46.363l-4.657 17.387C307.55 236.49 314.5 245.547 314.5 256s-6.95 19.51-17.047 22.217l4.658 17.387c17.884-4.792 30.39-21.09 30.39-39.604 0-18.513-12.506-34.812-30.39-39.604z",
        },
        child: [],
      },
    ],
  })(e);
}
function Uh() {
  const [e, t] = x.useState(""),
    n = uu();
  let r = (u) => {
      t(u.target.value);
    },
    l = () => {
      switch (e) {
        case "1":
          n("/gryffindor");
          break;
        case "2":
          n("/hufflepuff");
          break;
        case "3":
          n("/ravenclaw");
          break;
        case "4":
          n("/slytherin");
          break;
        default:
          n("/gryffindor");
          break;
      }
    };
  const i = new Audio("../Harry_Potter_Theme_Song_Hedwigs_Theme.mp3"),
    o = () => {
      i.play()
        .then(() => {
          console.log("Playing Music");
        })
        .catch((u) => {
          console.error("Error playing", u);
        });
    };
  return S.jsx(S.Fragment, {
    children: S.jsxs("div", {
      id: "form",
      children: [
        S.jsx("div", {
          className: "form-floating mb-3",
          children: S.jsx("div", {
            children: S.jsx("input", {
              type: "text",
              className: "form-control",
              id: "floatingInput",
              placeholder: "Name",
            }),
          }),
        }),
        S.jsxs("div", {
          className: "input-group mb-3",
          children: [
            S.jsx("label", {
              className: "form-control",
              htmlFor: "inputGroupSelect01",
              children: "What is most important to you?",
            }),
            S.jsxs("select", {
              className: "form-select",
              id: "inputGroupSelect01",
              onChange: r,
              children: [
                S.jsx("option", { defaultValue: !0, children: "Choose..." }),
                S.jsx("option", { value: "1", children: "Love" }),
                S.jsx("option", { value: "2", children: "Peace" }),
                S.jsx("option", { value: "3", children: "Knowledge" }),
                S.jsx("option", { value: "4", children: "Evil" }),
              ],
            }),
          ],
        }),
        S.jsxs("div", {
          className: "container",
          children: [
            S.jsx("input", {
              className: "btn btn-primary",
              type: "submit",
              value: "Sort Me!",
              onClick: l,
            }),
            S.jsx("span", {
              className: "custom-nav",
              children: S.jsx(jh, {
                className: "custom-link",
                onClick: o,
                to: "/",
                children: S.jsx(Dh, {}),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function $h(e) {
  return su({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z",
        },
        child: [],
      },
    ],
  })(e);
}
function Bh(e) {
  return su({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z",
        },
        child: [],
      },
    ],
  })(e);
}
const cr = ({ data: e }) => {
  const [t, n] = x.useState(0),
    r = () => {
      n(t === e.length - 1 ? 0 : t + 1);
    },
    l = () => {
      n(t === 0 ? e.length - 1 : t - 1);
    };
  return S.jsxs("div", {
    className: "carousel",
    children: [
      S.jsxs("div", {
        className: "frame",
        children: [
          S.jsx($h, { className: "arrow arrow-left", onClick: l }),
          e.map((i, o) =>
            S.jsxs(
              "div",
              {
                className: t === o ? "card slide" : "card slide slide-hidden",
                children: [
                  S.jsx("img", {
                    className: "card-img-top",
                    src: i.image,
                    alt: i.name,
                  }),
                  S.jsxs("div", {
                    className: "card-body",
                    children: [
                      S.jsx("h5", { className: "card-name", children: i.name }),
                      S.jsx("h6", {
                        className: "card-title",
                        children: i.house,
                      }),
                    ],
                  }),
                ],
              },
              o
            )
          ),
          S.jsx(Bh, { className: "arrow arrow-right", onClick: r }),
        ],
      }),
      S.jsx("div", {
        className: "indicatorBar",
        children: S.jsx("span", {
          className: "indicators",
          children: e.map((i, o) =>
            S.jsx(
              "button",
              {
                className:
                  t === o ? "indicator" : "indicator indicator-inactive",
                onClick: null,
              },
              o
            )
          ),
        }),
      }),
    ],
  });
};
async function Ah() {
  return (
    await (await fetch("https://hp-api.onrender.com/api/characters")).json()
  ).filter((r) => r.image !== "");
}
function Wh() {
  const [e, t] = x.useState([]);
  return (
    (async () => {
      let r = await Ah();
      t(r);
    })(),
    S.jsx("div", {
      children: S.jsxs("span", {
        id: "great-hall",
        children: [
          S.jsx("div", { children: S.jsx(Uh, {}) }),
          S.jsx("div", {
            children: S.jsxs("span", {
              id: "carousel",
              children: [
                S.jsx("p", {
                  id: "carousel-note",
                  children: "Who might you meet in the halls of Hogwarts??",
                }),
                S.jsx("div", {
                  id: "carousel-box",
                  children: S.jsx(cr, { data: e }),
                }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
function fr({ name: e }) {
  return S.jsx(S.Fragment, { children: S.jsx("h1", { id: e, children: e }) });
}
function Vh({ name: e, house: t, image: n, handleAddNewFriend: r }) {
  let l = uu();
  return S.jsxs("div", {
    className: "card",
    children: [
      S.jsx("img", { className: "card-img-top", src: n, alt: e }),
      S.jsxs("div", {
        className: "card-body",
        children: [
          S.jsx("h5", { className: "card-name", children: e }),
          S.jsx("h6", { className: "card-title", children: t }),
          S.jsx("button", {
            onClick: r,
            className: "btn btn-primary",
            children: "Look Around",
          }),
          S.jsx("button", {
            onClick: () => l("/"),
            className: "btn btn-warning",
            children: "Sort Again",
          }),
        ],
      }),
    ],
  });
}
function Ml({ houseName: e }) {
  const [t, n] = x.useState([]),
    [r, l] = x.useState([]),
    [i, o] = x.useState([]),
    [u, s] = x.useState([]);
  function a() {
    let h = Math.floor(Math.random() * t.length);
    for (; r.includes(h) && r.length !== t.length; )
      h = Math.floor(Math.random() * t.length);
    r.length !== t.length &&
      (l([...r, h]), o([t[h]]), s([...u, t[h]]), console.log([...u, t[h]]));
  }
  return (
    x.useEffect(() => {
      fetch(
        `https://hp-api.onrender.com/api/characters/house${location.pathname}`
      )
        .then((h) => h.json())
        .then((h) => {
          const p = h.filter((m) => m.image !== "");
          n(p);
        });
    }, []),
    x.useEffect(() => {
      let h = Math.floor(Math.random() * t.length);
      l([h]), t.length && o([t[h]]), t.length && s([t[h]]);
    }, [t]),
    S.jsxs("div", {
      className: e,
      children: [
        S.jsx(fr, { name: location.pathname.substring(1).toUpperCase }),
        i.length
          ? i.map((h, p) =>
              S.jsx(
                Vh,
                {
                  name: h.name,
                  house: h.house,
                  image: h.image,
                  handleAddNewFriend: a,
                },
                p
              )
            )
          : S.jsx("h1", { id: "loading", children: "Loading" }),
      ],
    })
  );
}
function Fl({ house: e }) {
  const [t, n] = x.useState([]);
  return (
    x.useEffect(() => {
      fetch(`https://hp-api.onrender.com/api/characters/house/${e}`)
        .then((r) => r.json())
        .then((r) => {
          const l = r.filter((i) => i.image !== "");
          n(l);
        });
    }, []),
    t
  );
}
function Dl() {
  return S.jsxs("div", {
    id: "note",
    children: [
      S.jsx("p", {
        children: "Congratulations! Welcome to your new Common Room.",
      }),
      S.jsx("p", { children: "Look around to find some new friends." }),
    ],
  });
}
function Hh({ houseName: e }) {
  let t = Fl({ house: "gryffindor" });
  return S.jsxs("div", {
    children: [
      S.jsx(fr, { name: "Gryffindor" }),
      S.jsx(Dl, {}),
      S.jsx(Ml, { houseName: "Gryffindor" }),
      S.jsx(cr, { data: t }),
    ],
  });
}
function Qh({ houseName: e }) {
  let t = Fl({ house: "hufflepuff" });
  return S.jsxs("div", {
    children: [
      S.jsx(fr, { name: "Hufflepuff" }),
      S.jsx(Dl, {}),
      S.jsx(Ml, { houseName: "Hufflepuff" }),
      S.jsx(cr, { data: t }),
    ],
  });
}
function Kh() {
  let e = Fl({ house: "ravenclaw" });
  return S.jsxs("div", {
    children: [
      S.jsx(fr, { name: "Ravenclaw" }),
      S.jsx(Dl, {}),
      S.jsx(Ml, {}),
      S.jsx(cr, { data: e }),
    ],
  });
}
function Gh() {
  let e = Fl({ house: "slytherin" });
  return S.jsxs("div", {
    children: [
      S.jsx(fr, { name: "Slytherin" }),
      S.jsx(Dl, {}),
      S.jsx(Ml, {}),
      S.jsx(cr, { data: e }),
    ],
  });
}
function Yh() {
  return S.jsx(S.Fragment, {
    children: S.jsxs(yh, {
      children: [
        S.jsx($t, { path: "/", element: S.jsx(Wh, {}) }),
        S.jsx($t, { path: "/gryffindor", element: S.jsx(Hh, {}) }),
        S.jsx($t, { path: "/hufflepuff", element: S.jsx(Qh, {}) }),
        S.jsx($t, { path: "/ravenclaw", element: S.jsx(Kh, {}) }),
        S.jsx($t, { path: "/slytherin", element: S.jsx(Gh, {}) }),
      ],
    }),
  });
}
hi.createRoot(document.getElementById("root")).render(
  S.jsx(Qe.StrictMode, { children: S.jsx(_h, { children: S.jsx(Yh, {}) }) })
);
