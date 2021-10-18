(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
    get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
  }) : x2)(function(x2) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x2 + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module2, desc) => {
    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
      for (let key of __getOwnPropNames(module2))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module2) => {
    return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
  };

  // node_modules/gun/gun.js
  var require_gun = __commonJS({
    "node_modules/gun/gun.js"(exports2, module2) {
      (function() {
        function USE(arg, req) {
          return req ? __require(arg) : arg.slice ? USE[R(arg)] : function(mod, path) {
            arg(mod = {
              exports: {}
            });
            USE[R(path)] = mod.exports;
          };
          function R(p) {
            return p.split("/").slice(-1).toString().replace(".js", "");
          }
        }
        if (typeof module2 !== "undefined") {
          var MODULE = module2;
        }
        ;
        USE(function(module3) {
          String.random = function(l, c2) {
            var s = "";
            l = l || 24;
            c2 = c2 || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
            while (l-- > 0) {
              s += c2.charAt(Math.floor(Math.random() * c2.length));
            }
            return s;
          };
          String.match = function(t2, o) {
            var tmp, u2;
            if (typeof t2 !== "string") {
              return false;
            }
            if (typeof o == "string") {
              o = {
                "=": o
              };
            }
            o = o || {};
            tmp = o["="] || o["*"] || o[">"] || o["<"];
            if (t2 === tmp) {
              return true;
            }
            if (u2 !== o["="]) {
              return false;
            }
            tmp = o["*"] || o[">"];
            if (t2.slice(0, (tmp || "").length) === tmp) {
              return true;
            }
            if (u2 !== o["*"]) {
              return false;
            }
            if (u2 !== o[">"] && u2 !== o["<"]) {
              return t2 >= o[">"] && t2 <= o["<"] ? true : false;
            }
            if (u2 !== o[">"] && t2 >= o[">"]) {
              return true;
            }
            if (u2 !== o["<"] && t2 <= o["<"]) {
              return true;
            }
            return false;
          };
          String.hash = function(s, c2) {
            if (typeof s !== "string") {
              return;
            }
            c2 = c2 || 0;
            if (!s.length) {
              return c2;
            }
            for (var i = 0, l = s.length, n; i < l; ++i) {
              n = s.charCodeAt(i);
              c2 = (c2 << 5) - c2 + n;
              c2 |= 0;
            }
            return c2;
          };
          var has = Object.prototype.hasOwnProperty;
          Object.plain = function(o) {
            return o ? o instanceof Object && o.constructor === Object || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === "Object" : false;
          };
          Object.empty = function(o, n) {
            for (var k in o) {
              if (has.call(o, k) && (!n || n.indexOf(k) == -1)) {
                return false;
              }
            }
            return true;
          };
          Object.keys = Object.keys || function(o) {
            var l = [];
            for (var k in o) {
              if (has.call(o, k)) {
                l.push(k);
              }
            }
            return l;
          };
          (function() {
            var u2, sT = setTimeout, l = 0, c2 = 0, sI = typeof setImmediate !== "" + u2 && setImmediate || sT;
            sT.poll = sT.poll || function(f) {
              if (1 >= +new Date() - l && c2++ < 3333) {
                f();
                return;
              }
              sI(function() {
                l = +new Date();
                f();
              }, c2 = 0);
            };
          })();
          ;
          (function() {
            var sT = setTimeout, t2 = sT.turn = sT.turn || function(f2) {
              s.push(f2) == 1 && p(T2);
            }, s = t2.s = [], p = sT.poll, i = 0, f, T2 = function() {
              if (f = s[i++]) {
                f();
              }
              if (i == s.length || i == 99) {
                s = t2.s = s.slice(i);
                i = 0;
              }
              if (s.length) {
                p(T2);
              }
            };
          })();
          ;
          (function() {
            var u2, sT = setTimeout, T2 = sT.turn;
            (sT.each = sT.each || function(l, f, e, S2) {
              S2 = S2 || 9;
              (function t2(s, L2, r) {
                if (L2 = (s = (l || []).splice(0, S2)).length) {
                  for (var i = 0; i < L2; i++) {
                    if (u2 !== (r = f(s[i]))) {
                      break;
                    }
                  }
                  if (u2 === r) {
                    T2(t2);
                    return;
                  }
                }
                e && e(r);
              })();
            })();
          })();
        })(USE, "./shim");
        ;
        USE(function(module3) {
          module3.exports = function onto(tag, arg, as) {
            if (!tag) {
              return {
                to: onto
              };
            }
            var u2, f = typeof arg == "function", tag = (this.tag || (this.tag = {}))[tag] || f && (this.tag[tag] = {
              tag,
              to: onto._ = {
                next: function(arg2) {
                  var tmp;
                  if (tmp = this.to) {
                    tmp.next(arg2);
                  }
                }
              }
            });
            if (f) {
              var be = {
                off: onto.off || (onto.off = function() {
                  if (this.next === onto._.next) {
                    return true;
                  }
                  if (this === this.the.last) {
                    this.the.last = this.back;
                  }
                  this.to.back = this.back;
                  this.next = onto._.next;
                  this.back.to = this.to;
                  if (this.the.last === this.the) {
                    delete this.on.tag[this.the.tag];
                  }
                }),
                to: onto._,
                next: arg,
                the: tag,
                on: this,
                as
              };
              (be.back = tag.last || tag).to = be;
              return tag.last = be;
            }
            if ((tag = tag.to) && u2 !== arg) {
              tag.next(arg);
            }
            return tag;
          };
        })(USE, "./onto");
        ;
        USE(function(module3) {
          USE("./shim");
          module3.exports = function(v2) {
            if (v2 === void 0) {
              return false;
            }
            if (v2 === null) {
              return true;
            }
            if (v2 === Infinity) {
              return false;
            }
            if (v2 !== v2) {
              return false;
            }
            if (typeof v2 == "string" || typeof v2 == "boolean" || typeof v2 == "number") {
              return true;
            }
            if (v2 && typeof (v2["#"] || 0) == "string" && Object.empty(v2, ["#"])) {
              return v2["#"];
            }
            return false;
          };
        })(USE, "./valid");
        ;
        USE(function(module3) {
          USE("./shim");
          function State() {
            var t2 = +new Date();
            if (last < t2) {
              return N2 = 0, last = t2 + State.drift;
            }
            return last = t2 + (N2 += 1) / D2 + State.drift;
          }
          State.drift = 0;
          var NI = -Infinity, N2 = 0, D2 = 999, last = NI, u2;
          State.is = function(n, k, o) {
            var tmp = k && n && n._ && n._[">"] || o;
            if (!tmp) {
              return;
            }
            return typeof (tmp = tmp[k]) == "number" ? tmp : NI;
          };
          State.ify = function(n, k, s, v2, soul) {
            (n = n || {})._ = n._ || {};
            if (soul) {
              n._["#"] = soul;
            }
            var tmp = n._[">"] || (n._[">"] = {});
            if (u2 !== k && k !== "_") {
              if (typeof s == "number") {
                tmp[k] = s;
              }
              if (u2 !== v2) {
                n[k] = v2;
              }
            }
            return n;
          };
          module3.exports = State;
        })(USE, "./state");
        ;
        USE(function(module3) {
          USE("./shim");
          function Dup(opt) {
            var dup = {
              s: {}
            }, s = dup.s;
            opt = opt || {
              max: 999,
              age: 1e3 * 9
            };
            dup.check = function(id) {
              if (!s[id]) {
                return false;
              }
              return dt(id);
            };
            var dt = dup.track = function(id) {
              var it = s[id] || (s[id] = {});
              it.was = dup.now = +new Date();
              if (!dup.to) {
                dup.to = setTimeout(dup.drop, opt.age + 9);
              }
              return it;
            };
            dup.drop = function(age) {
              dup.to = null;
              dup.now = +new Date();
              var l = Object.keys(s);
              console.STAT && console.STAT(dup.now, +new Date() - dup.now, "dup drop keys");
              setTimeout.each(l, function(id) {
                var it = s[id];
                if (it && (age || opt.age) > dup.now - it.was) {
                  return;
                }
                delete s[id];
              }, 0, 99);
            };
            return dup;
          }
          module3.exports = Dup;
        })(USE, "./dup");
        ;
        USE(function(module3) {
          USE("./onto");
          module3.exports = function ask(cb, as) {
            if (!this.on) {
              return;
            }
            var lack = (this.opt || {}).lack || 9e3;
            if (!(typeof cb == "function")) {
              if (!cb) {
                return;
              }
              var id = cb["#"] || cb, tmp = (this.tag || "")[id];
              if (!tmp) {
                return;
              }
              if (as) {
                tmp = this.on(id, as);
                clearTimeout(tmp.err);
                tmp.err = setTimeout(function() {
                  tmp.off();
                }, lack);
              }
              return true;
            }
            var id = as && as["#"] || random(9);
            if (!cb) {
              return id;
            }
            var to = this.on(id, cb, as);
            to.err = to.err || setTimeout(function() {
              to.off();
              to.next({
                err: "Error: No ACK yet.",
                lack: true
              });
            }, lack);
            return id;
          };
          var random = String.random || function() {
            return Math.random().toString(36).slice(2);
          };
        })(USE, "./ask");
        ;
        USE(function(module3) {
          function Gun4(o) {
            if (o instanceof Gun4) {
              return (this._ = {
                $: this
              }).$;
            }
            if (!(this instanceof Gun4)) {
              return new Gun4(o);
            }
            return Gun4.create(this._ = {
              $: this,
              opt: o
            });
          }
          Gun4.is = function($) {
            return $ instanceof Gun4 || $ && $._ && $ === $._.$ || false;
          };
          Gun4.version = 0.202;
          Gun4.chain = Gun4.prototype;
          Gun4.chain.toJSON = function() {
          };
          USE("./shim");
          Gun4.valid = USE("./valid");
          Gun4.state = USE("./state");
          Gun4.on = USE("./onto");
          Gun4.dup = USE("./dup");
          Gun4.ask = USE("./ask");
          ;
          (function() {
            Gun4.create = function(at) {
              at.root = at.root || at;
              at.graph = at.graph || {};
              at.on = at.on || Gun4.on;
              at.ask = at.ask || Gun4.ask;
              at.dup = at.dup || Gun4.dup();
              var gun2 = at.$.opt(at.opt);
              if (!at.once) {
                at.on("in", universe, at);
                at.on("out", universe, at);
                at.on("put", map, at);
                Gun4.on("create", at);
                at.on("create", at);
              }
              at.once = 1;
              return gun2;
            };
            function universe(msg) {
              if (!msg) {
                return;
              }
              if (msg.out === universe) {
                this.to.next(msg);
                return;
              }
              var eve = this, as = eve.as, at = as.at || as, gun2 = at.$, dup = at.dup, tmp, DBG = msg.DBG;
              (tmp = msg["#"]) || (tmp = msg["#"] = text_rand(9));
              if (dup.check(tmp)) {
                return;
              }
              dup.track(tmp);
              tmp = msg._;
              msg._ = typeof tmp == "function" ? tmp : function() {
              };
              msg.$ && msg.$ === (msg.$._ || "").$ || (msg.$ = gun2);
              if (msg["@"] && !msg.put) {
                ack(msg);
              }
              if (!at.ask(msg["@"], msg)) {
                DBG && (DBG.u = +new Date());
                if (msg.put) {
                  put(msg);
                  return;
                } else if (msg.get) {
                  Gun4.on.get(msg, gun2);
                }
              }
              DBG && (DBG.uc = +new Date());
              eve.to.next(msg);
              DBG && (DBG.ua = +new Date());
              if (msg.nts || msg.NTS) {
                return;
              }
              msg.out = universe;
              at.on("out", msg);
              DBG && (DBG.ue = +new Date());
            }
            function put(msg) {
              if (!msg) {
                return;
              }
              var ctx = msg._ || "", root = ctx.root = ((ctx.$ = msg.$ || "")._ || "").root;
              if (msg["@"] && ctx.faith && !ctx.miss) {
                msg.out = universe;
                root.on("out", msg);
                return;
              }
              ctx.latch = root.hatch;
              ctx.match = root.hatch = [];
              var put2 = msg.put;
              var DBG = ctx.DBG = msg.DBG, S2 = +new Date();
              if (put2["#"] && put2["."]) {
                return;
              }
              DBG && (DBG.p = S2);
              ctx["#"] = msg["#"];
              ctx.msg = msg;
              ctx.all = 0;
              ctx.stun = 1;
              var nl = Object.keys(put2);
              console.STAT && console.STAT(S2, ((DBG || ctx).pk = +new Date()) - S2, "put sort");
              var ni = 0, nj, kl, soul, node, states, err, tmp;
              (function pop(o) {
                if (nj != ni) {
                  nj = ni;
                  if (!(soul = nl[ni])) {
                    console.STAT && console.STAT(S2, ((DBG || ctx).pd = +new Date()) - S2, "put");
                    fire(ctx);
                    return;
                  }
                  if (!(node = put2[soul])) {
                    err = ERR + cut(soul) + "no node.";
                  } else if (!(tmp = node._)) {
                    err = ERR + cut(soul) + "no meta.";
                  } else if (soul !== tmp["#"]) {
                    err = ERR + cut(soul) + "soul not same.";
                  } else if (!(states = tmp[">"])) {
                    err = ERR + cut(soul) + "no state.";
                  }
                  kl = Object.keys(node || {});
                }
                if (err) {
                  msg.err = ctx.err = err;
                  fire(ctx);
                  return;
                }
                var i = 0, key;
                o = o || 0;
                while (o++ < 9 && (key = kl[i++])) {
                  if (key === "_") {
                    continue;
                  }
                  var val = node[key], state = states[key];
                  if (u2 === state) {
                    err = ERR + cut(key) + "on" + cut(soul) + "no state.";
                    break;
                  }
                  if (!valid(val)) {
                    err = ERR + cut(key) + "on" + cut(soul) + "bad " + typeof val + cut(val);
                    break;
                  }
                  ham(val, key, soul, state, msg);
                }
                if ((kl = kl.slice(i)).length) {
                  turn(pop);
                  return;
                }
                ++ni;
                kl = null;
                pop(o);
              })();
            }
            Gun4.on.put = put;
            function ham(val, key, soul, state, msg) {
              var ctx = msg._ || "", root = ctx.root, graph = root.graph, lot, tmp;
              var vertex = graph[soul] || empty, was = state_is(vertex, key, 1), known = vertex[key];
              var DBG = ctx.DBG;
              if (tmp = console.STAT) {
                if (!graph[soul] || !known) {
                  tmp.has = (tmp.has || 0) + 1;
                }
              }
              var now = State(), u3;
              if (state > now) {
                setTimeout(function() {
                  ham(val, key, soul, state, msg);
                }, (tmp = state - now) > MD ? MD : tmp);
                console.STAT && console.STAT((DBG || ctx).Hf = +new Date(), tmp, "future");
                return;
              }
              if (state < was) {
                if (!ctx.miss) {
                  return;
                }
              }
              if (!ctx.faith) {
                if (state === was && (val === known || L2(val) <= L2(known))) {
                  if (!ctx.miss) {
                    return;
                  }
                }
              }
              ctx.stun++;
              var aid = msg["#"] + ctx.all++, id = {
                toString: function() {
                  return aid;
                },
                _: ctx
              };
              id.toJSON = id.toString;
              DBG && (DBG.ph = DBG.ph || +new Date());
              root.on("put", {
                "#": id,
                "@": msg["@"],
                put: {
                  "#": soul,
                  ".": key,
                  ":": val,
                  ">": state
                },
                _: ctx
              });
            }
            function map(msg) {
              var DBG;
              if (DBG = (msg._ || "").DBG) {
                DBG.pa = +new Date();
                DBG.pm = DBG.pm || +new Date();
              }
              var eve = this, root = eve.as, graph = root.graph, ctx = msg._, put2 = msg.put, soul = put2["#"], key = put2["."], val = put2[":"], state = put2[">"], id = msg["#"], tmp;
              if ((tmp = ctx.msg) && (tmp = tmp.put) && (tmp = tmp[soul])) {
                state_ify(tmp, key, state, val, soul);
              }
              graph[soul] = state_ify(graph[soul], key, state, val, soul);
              if (tmp = (root.next || "")[soul]) {
                tmp.on("in", msg);
              }
              fire(ctx);
              eve.to.next(msg);
            }
            function fire(ctx, msg) {
              var root;
              if (ctx.stop) {
                return;
              }
              if (!ctx.err && 0 < --ctx.stun) {
                return;
              }
              ctx.stop = 1;
              if (!(root = ctx.root)) {
                return;
              }
              var tmp = ctx.match;
              tmp.end = 1;
              if (tmp === root.hatch) {
                if (!(tmp = ctx.latch) || tmp.end) {
                  delete root.hatch;
                } else {
                  root.hatch = tmp;
                }
              }
              ctx.hatch && ctx.hatch();
              setTimeout.each(ctx.match, function(cb) {
                cb && cb();
              });
              if (!(msg = ctx.msg) || ctx.err || msg.err) {
                return;
              }
              msg.out = universe;
              ctx.root.on("out", msg);
            }
            function ack(msg) {
              var id = msg["@"] || "", ctx;
              if (!(ctx = id._)) {
                return;
              }
              ctx.acks = (ctx.acks || 0) + 1;
              if (ctx.err = msg.err) {
                msg["@"] = ctx["#"];
                fire(ctx);
              }
              if (!ctx.stop && !ctx.crack) {
                ctx.crack = ctx.match && ctx.match.push(function() {
                  back(ctx);
                });
              }
              back(ctx);
            }
            function back(ctx) {
              if (!ctx || !ctx.root) {
                return;
              }
              if (ctx.stun || ctx.acks !== ctx.all) {
                return;
              }
              ctx.root.on("in", {
                "@": ctx["#"],
                err: ctx.err,
                ok: ctx.err ? u2 : {
                  "": 1
                }
              });
            }
            var ERR = "Error: Invalid graph!";
            var cut = function(s) {
              return " '" + ("" + s).slice(0, 9) + "...' ";
            };
            var L2 = JSON.stringify, MD = 2147483647, State = Gun4.state;
          })();
          ;
          (function() {
            Gun4.on.get = function(msg, gun2) {
              var root = gun2._, get = msg.get, soul = get["#"], node = root.graph[soul], has = get["."];
              var next = root.next || (root.next = {}), at = next[soul];
              var ctx = msg._ || {}, DBG = ctx.DBG = msg.DBG;
              DBG && (DBG.g = +new Date());
              if (!node) {
                return root.on("get", msg);
              }
              if (has) {
                if (typeof has != "string" || u2 === node[has]) {
                  return root.on("get", msg);
                }
                node = state_ify({}, has, state_is(node, has), node[has], soul);
              }
              node && ack(msg, node);
              root.on("get", msg);
            };
            function ack(msg, node) {
              var S2 = +new Date(), ctx = msg._ || {}, DBG = ctx.DBG = msg.DBG;
              var to = msg["#"], id = text_rand(9), keys = Object.keys(node || "").sort(), soul = ((node || "")._ || "")["#"], kl = keys.length, j = 0, root = msg.$._.root, F2 = node === root.graph[soul];
              console.STAT && console.STAT(S2, ((DBG || ctx).gk = +new Date()) - S2, "got keys");
              node && function go() {
                S2 = +new Date();
                var i = 0, k, put = {}, tmp;
                while (i < 9 && (k = keys[i++])) {
                  state_ify(put, k, state_is(node, k), node[k], soul);
                }
                keys = keys.slice(i);
                (tmp = {})[soul] = put;
                put = tmp;
                var faith;
                if (F2) {
                  faith = function() {
                  };
                  faith.ram = faith.faith = true;
                }
                tmp = keys.length;
                console.STAT && console.STAT(S2, -(S2 - (S2 = +new Date())), "got copied some");
                DBG && (DBG.ga = +new Date());
                root.on("in", {
                  "@": to,
                  "#": id,
                  put,
                  "%": tmp ? id = text_rand(9) : u2,
                  $: root.$,
                  _: faith,
                  DBG
                });
                console.STAT && console.STAT(S2, +new Date() - S2, "got in");
                if (!tmp) {
                  return;
                }
                setTimeout.turn(go);
              }();
              if (!node) {
                root.on("in", {
                  "@": msg["#"]
                });
              }
            }
            Gun4.on.get.ack = ack;
          })();
          ;
          (function() {
            Gun4.chain.opt = function(opt) {
              opt = opt || {};
              var gun2 = this, at = gun2._, tmp = opt.peers || opt;
              if (!Object.plain(opt)) {
                opt = {};
              }
              if (!Object.plain(at.opt)) {
                at.opt = opt;
              }
              if (typeof tmp == "string") {
                tmp = [tmp];
              }
              if (tmp instanceof Array) {
                if (!Object.plain(at.opt.peers)) {
                  at.opt.peers = {};
                }
                tmp.forEach(function(url) {
                  var p = {};
                  p.id = p.url = url;
                  at.opt.peers[url] = at.opt.peers[url] || p;
                });
              }
              at.opt.peers = at.opt.peers || {};
              obj_each(opt, function each(k) {
                var v2 = this[k];
                if (this && this.hasOwnProperty(k) || typeof v2 == "string" || Object.empty(v2)) {
                  this[k] = v2;
                  return;
                }
                if (v2 && v2.constructor !== Object && !(v2 instanceof Array)) {
                  return;
                }
                obj_each(v2, each);
              });
              Gun4.on("opt", at);
              at.opt.uuid = at.opt.uuid || function uuid(l) {
                return Gun4.state().toString(36).replace(".", "") + String.random(l || 12);
              };
              return gun2;
            };
          })();
          var obj_each = function(o, f) {
            Object.keys(o).forEach(f, o);
          }, text_rand = String.random, turn = setTimeout.turn, valid = Gun4.valid, state_is = Gun4.state.is, state_ify = Gun4.state.ify, u2, empty = {}, C2;
          Gun4.log = function() {
            return !Gun4.log.off && C2.log.apply(C2, arguments), [].slice.call(arguments).join(" ");
          };
          Gun4.log.once = function(w, s, o) {
            return (o = Gun4.log.once)[w] = o[w] || 0, o[w]++ || Gun4.log(s);
          };
          if (typeof window !== "undefined") {
            (window.GUN = window.Gun = Gun4).window = window;
          }
          try {
            if (typeof MODULE !== "undefined") {
              MODULE.exports = Gun4;
            }
          } catch (e) {
          }
          module3.exports = Gun4;
          (Gun4.window || {}).console = (Gun4.window || {}).console || {
            log: function() {
            }
          };
          (C2 = console).only = function(i, s) {
            return C2.only.i && i === C2.only.i && C2.only.i++ && (C2.log.apply(C2, arguments) || s);
          };
          ;
          "Please do not remove welcome log unless you are paying for a monthly sponsorship, thanks!";
          Gun4.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!");
        })(USE, "./root");
        ;
        USE(function(module3) {
          var Gun4 = USE("./root");
          Gun4.chain.back = function(n, opt) {
            var tmp;
            n = n || 1;
            if (n === -1 || n === Infinity) {
              return this._.root.$;
            } else if (n === 1) {
              return (this._.back || this._).$;
            }
            var gun2 = this, at = gun2._;
            if (typeof n === "string") {
              n = n.split(".");
            }
            if (n instanceof Array) {
              var i = 0, l = n.length, tmp = at;
              for (i; i < l; i++) {
                tmp = (tmp || empty)[n[i]];
              }
              if (u2 !== tmp) {
                return opt ? gun2 : tmp;
              } else if (tmp = at.back) {
                return tmp.$.back(n, opt);
              }
              return;
            }
            if (typeof n == "function") {
              var yes, tmp = {
                back: at
              };
              while ((tmp = tmp.back) && u2 === (yes = n(tmp, opt))) {
              }
              return yes;
            }
            if (typeof n == "number") {
              return (at.back || at).$.back(n - 1);
            }
            return this;
          };
          var empty = {}, u2;
        })(USE, "./back");
        ;
        USE(function(module3) {
          var Gun4 = USE("./root");
          Gun4.chain.chain = function(sub) {
            var gun2 = this, at = gun2._, chain = new (sub || gun2).constructor(gun2), cat = chain._, root;
            cat.root = root = at.root;
            cat.id = ++root.once;
            cat.back = gun2._;
            cat.on = Gun4.on;
            cat.on("in", Gun4.on.in, cat);
            cat.on("out", Gun4.on.out, cat);
            return chain;
          };
          function output(msg) {
            var put, get, at = this.as, back = at.back, root = at.root, tmp;
            if (!msg.$) {
              msg.$ = at.$;
            }
            this.to.next(msg);
            if (at.err) {
              at.on("in", {
                put: at.put = u2,
                $: at.$
              });
              return;
            }
            if (get = msg.get) {
              if (root.pass) {
                root.pass[at.id] = at;
              }
              if (at.lex) {
                Object.keys(at.lex).forEach(function(k) {
                  tmp[k] = at.lex[k];
                }, tmp = msg.get = msg.get || {});
              }
              if (get["#"] || at.soul) {
                get["#"] = get["#"] || at.soul;
                msg["#"] || (msg["#"] = text_rand(9));
                back = root.$.get(get["#"])._;
                if (!(get = get["."])) {
                  tmp = back.ask && back.ask[""];
                  (back.ask || (back.ask = {}))[""] = back;
                  if (u2 !== back.put) {
                    back.on("in", back);
                    if (tmp) {
                      return;
                    }
                  }
                  msg.$ = back.$;
                } else if (obj_has(back.put, get)) {
                  tmp = back.ask && back.ask[get];
                  (back.ask || (back.ask = {}))[get] = back.$.get(get)._;
                  back.on("in", {
                    get,
                    put: {
                      "#": back.soul,
                      ".": get,
                      ":": back.put[get],
                      ">": state_is(root.graph[back.soul], get)
                    }
                  });
                  if (tmp) {
                    return;
                  }
                }
                root.ask(ack, msg);
                return root.on("in", msg);
              }
              if (get["."]) {
                if (at.get) {
                  msg = {
                    get: {
                      ".": at.get
                    },
                    $: at.$
                  };
                  (back.ask || (back.ask = {}))[at.get] = msg.$._;
                  return back.on("out", msg);
                }
                msg = {
                  get: at.lex ? msg.get : {},
                  $: at.$
                };
                return back.on("out", msg);
              }
              (at.ask || (at.ask = {}))[""] = at;
              if (at.get) {
                get["."] = at.get;
                (back.ask || (back.ask = {}))[at.get] = msg.$._;
                return back.on("out", msg);
              }
            }
            return back.on("out", msg);
          }
          ;
          Gun4.on.out = output;
          function input(msg, cat) {
            cat = cat || this.as;
            var root = cat.root, gun2 = msg.$ || (msg.$ = cat.$), at = (gun2 || "")._ || empty, tmp = msg.put || "", soul = tmp["#"], key = tmp["."], change = u2 !== tmp["="] ? tmp["="] : tmp[":"], state2 = tmp[">"] || -Infinity, sat;
            if (u2 !== msg.put && (u2 === tmp["#"] || u2 === tmp["."] || u2 === tmp[":"] && u2 === tmp["="] || u2 === tmp[">"])) {
              if (!valid(tmp)) {
                if (!(soul = ((tmp || "")._ || "")["#"])) {
                  console.log("chain not yet supported for", tmp, "...", msg, cat);
                  return;
                }
                gun2 = cat.root.$.get(soul);
                return setTimeout.each(Object.keys(tmp).sort(), function(k) {
                  if (k == "_" || u2 === (state2 = state_is(tmp, k))) {
                    return;
                  }
                  cat.on("in", {
                    $: gun2,
                    put: {
                      "#": soul,
                      ".": k,
                      "=": tmp[k],
                      ">": state2
                    },
                    VIA: msg
                  });
                });
              }
              cat.on("in", {
                $: at.back.$,
                put: {
                  "#": soul = at.back.soul,
                  ".": key = at.has || at.get,
                  "=": tmp,
                  ">": state_is(at.back.put, key)
                },
                via: msg
              });
              return;
            }
            if ((msg.seen || "")[cat.id]) {
              return;
            }
            (msg.seen || (msg.seen = function() {
            }))[cat.id] = cat;
            if (cat !== at) {
              Object.keys(msg).forEach(function(k) {
                tmp[k] = msg[k];
              }, tmp = {});
              tmp.get = cat.get || tmp.get;
              if (!cat.soul && !cat.has) {
                tmp.$$$ = tmp.$$$ || cat.$;
              } else if (at.soul) {
                tmp.$ = cat.$;
                tmp.$$ = tmp.$$ || at.$;
              }
              msg = tmp;
            }
            unlink(msg, cat);
            if ((cat.soul || msg.$$) && state2 >= state_is(root.graph[soul], key)) {
              (tmp = root.$.get(soul)._).put = state_ify(tmp.put, key, state2, change, soul);
            }
            if (!at.soul && state2 >= state_is(root.graph[soul], key) && (sat = (root.$.get(soul)._.next || "")[key])) {
              sat.put = change;
              if (typeof (tmp = valid(change)) == "string") {
                sat.put = root.$.get(tmp)._.put || change;
              }
            }
            this.to && this.to.next(msg);
            cat.any && setTimeout.each(Object.keys(cat.any), function(any) {
              (any = cat.any[any]) && any(msg);
            }, 0, 99);
            cat.echo && setTimeout.each(Object.keys(cat.echo), function(lat) {
              (lat = cat.echo[lat]) && lat.on("in", msg);
            }, 0, 99);
            if (((msg.$$ || "")._ || at).soul) {
              if ((sat = cat.next) && (sat = sat[key])) {
                tmp = {};
                Object.keys(msg).forEach(function(k) {
                  tmp[k] = msg[k];
                });
                tmp.$ = (msg.$$ || msg.$).get(tmp.get = key);
                delete tmp.$$;
                delete tmp.$$$;
                sat.on("in", tmp);
              }
            }
            link(msg, cat);
          }
          ;
          Gun4.on.in = input;
          function link(msg, cat) {
            cat = cat || this.as || msg.$._;
            if (msg.$$ && this !== Gun4.on) {
              return;
            }
            if (!msg.put || cat.soul) {
              return;
            }
            var put = msg.put || "", link2 = put["="] || put[":"], tmp;
            var root = cat.root, tat = root.$.get(put["#"]).get(put["."])._;
            if (typeof (link2 = valid(link2)) != "string") {
              if (this === Gun4.on) {
                (tat.echo || (tat.echo = {}))[cat.id] = cat;
              }
              return;
            }
            if ((tat.echo || (tat.echo = {}))[cat.id] && !(root.pass || "")[cat.id]) {
              return;
            }
            if (tmp = root.pass) {
              if (tmp[link2 + cat.id]) {
                return;
              }
              tmp[link2 + cat.id] = 1;
            }
            (tat.echo || (tat.echo = {}))[cat.id] = cat;
            if (cat.has) {
              cat.link = link2;
            }
            var sat = root.$.get(tat.link = link2)._;
            (sat.echo || (sat.echo = {}))[tat.id] = tat;
            var tmp = cat.ask || "";
            if (tmp[""] || cat.lex) {
              sat.on("out", {
                get: {
                  "#": link2
                }
              });
            }
            setTimeout.each(Object.keys(tmp), function(get, sat2) {
              if (!get || !(sat2 = tmp[get])) {
                return;
              }
              sat2.on("out", {
                get: {
                  "#": link2,
                  ".": get
                }
              });
            }, 0, 99);
          }
          ;
          Gun4.on.link = link;
          function unlink(msg, cat) {
            var put = msg.put || "", change = u2 !== put["="] ? put["="] : put[":"], root = cat.root, link2, tmp;
            if (u2 === change) {
              if (cat.soul && u2 !== cat.put) {
                return;
              }
              tmp = (msg.$$ || msg.$ || "")._ || "";
              if (msg["@"] && (u2 !== tmp.put || u2 !== cat.put)) {
                return;
              }
              if (link2 = cat.link || msg.linked) {
                delete (root.$.get(link2)._.echo || "")[cat.id];
              }
              if (cat.has) {
                cat.link = null;
              }
              cat.put = u2;
              setTimeout.each(Object.keys(cat.next || ""), function(get, sat) {
                if (!(sat = cat.next[get])) {
                  return;
                }
                if (link2) {
                  delete (root.$.get(link2).get(get)._.echo || "")[sat.id];
                }
                sat.on("in", {
                  get,
                  put: u2,
                  $: sat.$
                });
              }, 0, 99);
              return;
            }
            if (cat.soul) {
              return;
            }
            if (msg.$$) {
              return;
            }
            link2 = valid(change);
            tmp = msg.$._ || "";
            if (link2 === tmp.link || cat.has && !tmp.link) {
              if ((root.pass || "")[cat.id] && typeof link2 !== "string") {
              } else {
                return;
              }
            }
            delete (tmp.echo || "")[cat.id];
            unlink({
              get: cat.get,
              put: u2,
              $: msg.$,
              linked: msg.linked = msg.linked || tmp.link
            }, cat);
          }
          ;
          Gun4.on.unlink = unlink;
          function ack(msg, ev) {
            var as = this.as, at = as.$._, root = at.root, get = as.get || "", tmp = (msg.put || "")[get["#"]] || "";
            if (!msg.put || typeof get["."] == "string" && u2 === tmp[get["."]]) {
              if (u2 !== at.put) {
                return;
              }
              if (!at.soul && !at.has) {
                return;
              }
              at.ack = (at.ack || 0) + 1;
              at.on("in", {
                get: at.get,
                put: at.put = u2,
                $: at.$,
                "@": msg["@"]
              });
              return;
            }
            (msg._ || {}).miss = 1;
            Gun4.on.put(msg);
            return;
          }
          var empty = {}, u2, text_rand = String.random, valid = Gun4.valid, obj_has = function(o, k) {
            return o && Object.prototype.hasOwnProperty.call(o, k);
          }, state = Gun4.state, state_is = state.is, state_ify = state.ify;
        })(USE, "./chain");
        ;
        USE(function(module3) {
          var Gun4 = USE("./root");
          Gun4.chain.get = function(key, cb, as) {
            var gun2, tmp;
            if (typeof key === "string") {
              if (key.length == 0) {
                (gun2 = this.chain())._.err = {
                  err: Gun4.log("0 length key!", key)
                };
                if (cb) {
                  cb.call(gun2, gun2._.err);
                }
                return gun2;
              }
              var back = this, cat = back._;
              var next = cat.next || empty;
              if (!(gun2 = next[key])) {
                gun2 = key && cache(key, back);
              }
              gun2 = gun2 && gun2.$;
            } else if (typeof key == "function") {
              let any2 = function(msg, eve, f) {
                if (any2.stun) {
                  return;
                }
                if ((tmp2 = root.pass) && !tmp2[id]) {
                  return;
                }
                var at = msg.$._, sat = (msg.$$ || "")._, data = (sat || at).put, odd = !at.has && !at.soul, test = {}, link, tmp2;
                if (odd || u2 === data) {
                  data = u2 === ((tmp2 = msg.put) || "")["="] ? u2 === (tmp2 || "")[":"] ? tmp2 : tmp2[":"] : tmp2["="];
                }
                if (link = typeof (tmp2 = Gun4.valid(data)) == "string") {
                  data = u2 === (tmp2 = root.$.get(tmp2)._.put) ? opt.not ? u2 : data : tmp2;
                }
                if (opt.not && u2 === data) {
                  return;
                }
                if (u2 === opt.stun) {
                  if ((tmp2 = root.stun) && tmp2.on) {
                    cat.$.back(function(a2) {
                      tmp2.on("" + a2.id, test = {});
                      if ((test.run || 0) < any2.id) {
                        return test;
                      }
                    });
                    !test.run && tmp2.on("" + at.id, test = {});
                    !test.run && sat && tmp2.on("" + sat.id, test = {});
                    if (any2.id > test.run) {
                      if (!test.stun || test.stun.end) {
                        test.stun = tmp2.on("stun");
                        test.stun = test.stun && test.stun.last;
                      }
                      if (test.stun && !test.stun.end) {
                        (test.stun.add || (test.stun.add = {}))[id] = function() {
                          any2(msg, eve, 1);
                        };
                        return;
                      }
                    }
                  }
                  if (u2 === data) {
                    f = 0;
                  }
                  if ((tmp2 = root.hatch) && !tmp2.end && u2 === opt.hatch && !f) {
                    if (wait[at.$._.id]) {
                      return;
                    }
                    wait[at.$._.id] = 1;
                    tmp2.push(function() {
                      any2(msg, eve, 1);
                    });
                    return;
                  }
                  ;
                  wait = {};
                }
                if (root.pass) {
                  if (root.pass[id + at.id]) {
                    return;
                  }
                  root.pass[id + at.id] = 1;
                }
                if (opt.on) {
                  opt.ok.call(at.$, data, at.get, msg, eve || any2);
                  return;
                }
                if (opt.v2020) {
                  opt.ok(msg, eve || any2);
                  return;
                }
                Object.keys(msg).forEach(function(k) {
                  tmp2[k] = msg[k];
                }, tmp2 = {});
                msg = tmp2;
                msg.put = data;
                opt.ok.call(opt.as, msg, eve || any2);
              };
              var any = any2;
              if (cb === true) {
                return soul(this, key, cb, as), this;
              }
              gun2 = this;
              var cat = gun2._, opt = cb || {}, root = cat.root, id;
              opt.at = cat;
              opt.ok = key;
              var wait = {};
              ;
              any2.at = cat;
              (cat.any || (cat.any = {}))[id = String.random(7)] = any2;
              any2.off = function() {
                any2.stun = 1;
                if (!cat.any) {
                  return;
                }
                delete cat.any[id];
              };
              any2.rid = rid;
              any2.id = opt.run || ++root.once;
              tmp = root.pass;
              (root.pass = {})[id] = 1;
              opt.out = opt.out || {
                get: {}
              };
              cat.on("out", opt.out);
              root.pass = tmp;
              return gun2;
            } else if (typeof key == "number") {
              return this.get("" + key, cb, as);
            } else if (typeof (tmp = valid(key)) == "string") {
              return this.get(tmp, cb, as);
            } else if (tmp = this.get.next) {
              gun2 = tmp(this, key);
            }
            if (!gun2) {
              (gun2 = this.chain())._.err = {
                err: Gun4.log("Invalid get request!", key)
              };
              if (cb) {
                cb.call(gun2, gun2._.err);
              }
              return gun2;
            }
            if (cb && typeof cb == "function") {
              gun2.get(cb, as);
            }
            return gun2;
          };
          function cache(key, back) {
            var cat = back._, next = cat.next, gun2 = back.chain(), at = gun2._;
            if (!next) {
              next = cat.next = {};
            }
            next[at.get = key] = at;
            if (back === cat.root.$) {
              at.soul = key;
            } else if (cat.soul || cat.has) {
              at.has = key;
            }
            return at;
          }
          function soul(gun2, cb, opt, as) {
            var cat = gun2._, acks = 0, tmp;
            if (tmp = cat.soul || cat.link) {
              return cb(tmp, as, cat);
            }
            if (cat.jam) {
              return cat.jam.push([cb, as]);
            }
            cat.jam = [[cb, as]];
            gun2.get(function go(msg, eve) {
              if (u2 === msg.put && !cat.root.opt.super && (tmp = Object.keys(cat.root.opt.peers).length) && ++acks <= tmp) {
                return;
              }
              eve.rid(msg);
              var at = (at = msg.$) && at._ || {}, i = 0, as2;
              tmp = cat.jam;
              delete cat.jam;
              while (as2 = tmp[i++]) {
                var cb2 = as2[0], id;
                as2 = as2[1];
                cb2 && cb2(id = at.link || at.soul || Gun4.valid(msg.put) || ((msg.put || {})._ || {})["#"], as2, msg, eve);
              }
            }, {
              out: {
                get: {
                  ".": true
                }
              }
            });
            return gun2;
          }
          function rid(at) {
            var cat = this.at || this.on;
            if (!at || cat.soul || cat.has) {
              return this.off();
            }
            if (!(at = (at = (at = at.$ || at)._ || at).id)) {
              return;
            }
            var map = cat.map, tmp, seen;
            if (tmp = (seen = this.seen || (this.seen = {}))[at]) {
              return true;
            }
            seen[at] = true;
            return;
            return;
          }
          var empty = {}, valid = Gun4.valid, u2;
        })(USE, "./get");
        ;
        USE(function(module3) {
          var Gun4 = USE("./root");
          Gun4.chain.put = function(data, cb, as) {
            var gun2 = this, at = gun2._, root = at.root;
            as = as || {};
            as.root = at.root;
            as.run || (as.run = root.once);
            stun(as, at.id);
            as.ack = as.ack || cb;
            as.via = as.via || gun2;
            as.data = as.data || data;
            as.soul || (as.soul = at.soul || typeof cb == "string" && cb);
            var s = as.state = as.state || Gun4.state();
            if (typeof data == "function") {
              data(function(d2) {
                as.data = d2;
                gun2.put(u2, u2, as);
              });
              return gun2;
            }
            if (!as.soul) {
              return get(as), gun2;
            }
            as.$ = root.$.get(as.soul);
            as.todo = [{
              it: as.data,
              ref: as.$
            }];
            as.turn = as.turn || turn;
            as.ran = as.ran || ran;
            (function walk() {
              var to = as.todo, at2 = to.pop(), d2 = at2.it, cid = at2.ref && at2.ref._.id, v2, k, cat, tmp, g;
              stun(as, at2.ref);
              if (tmp = at2.todo) {
                k = tmp.pop();
                d2 = d2[k];
                if (tmp.length) {
                  to.push(at2);
                }
              }
              k && (to.path || (to.path = [])).push(k);
              if (!(v2 = valid(d2)) && !(g = Gun4.is(d2))) {
                if (!Object.plain(d2)) {
                  (as.ack || noop).call(as, as.out = {
                    err: as.err = Gun4.log("Invalid data: " + (d2 && (tmp = d2.constructor) && tmp.name || typeof d2) + " at " + (as.via.back(function(at3) {
                      at3.get && tmp.push(at3.get);
                    }, tmp = []) || tmp.join(".")) + "." + (to.path || []).join("."))
                  });
                  as.ran(as);
                  return;
                }
                var seen = as.seen || (as.seen = []), i = seen.length;
                while (i--) {
                  if (d2 === (tmp = seen[i]).it) {
                    v2 = d2 = tmp.link;
                    break;
                  }
                }
              }
              if (k && v2) {
                at2.node = state_ify(at2.node, k, s, d2);
              } else {
                let resolve2 = function(msg, eve) {
                  var end = cat.link["#"];
                  if (eve) {
                    eve.off();
                    eve.rid(msg);
                  }
                  var soul = end || msg.soul || (tmp = (msg.$$ || msg.$)._ || "").soul || tmp.link || ((tmp = tmp.put || "")._ || "")["#"] || tmp["#"] || ((tmp = msg.put || "") && msg.$$ ? tmp["#"] : (tmp["="] || tmp[":"] || "")["#"]);
                  !end && stun(as, msg.$);
                  if (!soul && !at2.link["#"]) {
                    (at2.wait || (at2.wait = [])).push(function() {
                      resolve2(msg, eve);
                    });
                    return;
                  }
                  if (!soul) {
                    soul = [];
                    (msg.$$ || msg.$).back(function(at3) {
                      if (tmp = at3.soul || at3.link) {
                        return soul.push(tmp);
                      }
                      soul.push(at3.get);
                    });
                    soul = soul.reverse().join("/");
                  }
                  cat.link["#"] = soul;
                  !g && (((as.graph || (as.graph = {}))[soul] = cat.node || (cat.node = {
                    _: {}
                  }))._["#"] = soul);
                  delete as.wait[id];
                  cat.wait && setTimeout.each(cat.wait, function(cb2) {
                    cb2 && cb2();
                  });
                  as.ran(as);
                };
                var resolve = resolve2;
                as.seen.push(cat = {
                  it: d2,
                  link: {},
                  todo: g ? [] : Object.keys(d2).sort().reverse(),
                  path: (to.path || []).slice(),
                  up: at2
                });
                at2.node = state_ify(at2.node, k, s, cat.link);
                !g && cat.todo.length && to.push(cat);
                var id = as.seen.length;
                (as.wait || (as.wait = {}))[id] = "";
                tmp = (cat.ref = g ? d2 : k ? at2.ref.get(k) : at2.ref)._;
                (tmp = d2 && (d2._ || "")["#"] || tmp.soul || tmp.link) ? resolve2({
                  soul: tmp
                }) : cat.ref.get(resolve2, {
                  run: as.run,
                  v2020: 1,
                  out: {
                    get: {
                      ".": " "
                    }
                  }
                });
                ;
              }
              if (!to.length) {
                return as.ran(as);
              }
              as.turn(walk);
            })();
            return gun2;
          };
          function stun(as, id) {
            if (!id) {
              return;
            }
            id = (id._ || "").id || id;
            var run = as.root.stun || (as.root.stun = {
              on: Gun4.on
            }), test = {}, tmp;
            as.stun || (as.stun = run.on("stun", function() {
            }));
            if (tmp = run.on("" + id)) {
              tmp.the.last.next(test);
            }
            if (test.run >= as.run) {
              return;
            }
            run.on("" + id, function(test2) {
              if (as.stun.end) {
                this.off();
                this.to.next(test2);
                return;
              }
              test2.run = test2.run || as.run;
              test2.stun = test2.stun || as.stun;
              return;
              if (this.to.to) {
                this.the.last.next(test2);
                return;
              }
              test2.stun = as.stun;
            });
          }
          function ran(as) {
            if (as.err) {
              ran.end(as.stun, as.root);
              return;
            }
            if (as.todo.length || as.end || !Object.empty(as.wait)) {
              return;
            }
            as.end = 1;
            var cat = as.$.back(-1)._, root = cat.root, ask = cat.ask(function(ack) {
              root.on("ack", ack);
              if (ack.err) {
                Gun4.log(ack);
              }
              if (++acks > (as.acks || 0)) {
                this.off();
              }
              if (!as.ack) {
                return;
              }
              as.ack(ack, this);
            }, as.opt), acks = 0, stun2 = as.stun, tmp;
            (tmp = function() {
              if (!stun2) {
                return;
              }
              ran.end(stun2, root);
              setTimeout.each(Object.keys(stun2 = stun2.add || ""), function(cb) {
                if (cb = stun2[cb]) {
                  cb();
                }
              });
            }).hatch = tmp;
            as.via._.on("out", {
              put: as.out = as.graph,
              opt: as.opt,
              "#": ask,
              _: tmp
            });
          }
          ;
          ran.end = function(stun2, root) {
            stun2.end = noop;
            if (stun2.the.to === stun2 && stun2 === stun2.the.last) {
              delete root.stun;
            }
            stun2.off();
          };
          function get(as) {
            var at = as.via._, tmp;
            as.via = as.via.back(function(at2) {
              if (at2.soul || !at2.get) {
                return at2.$;
              }
              tmp = as.data;
              (as.data = {})[at2.get] = tmp;
            });
            if (!as.via || !as.via._.soul) {
              as.via = at.root.$.get(((as.data || "")._ || "")["#"] || at.$.back("opt.uuid")());
            }
            as.via.put(as.data, as.ack, as);
            return;
            if (at.get && at.back.soul) {
              tmp = as.data;
              as.via = at.back.$;
              (as.data = {})[at.get] = tmp;
              as.via.put(as.data, as.ack, as);
              return;
            }
          }
          var u2, empty = {}, noop = function() {
          }, turn = setTimeout.turn, valid = Gun4.valid, state_ify = Gun4.state.ify;
          var iife = function(fn, as) {
            fn.call(as || empty);
          };
        })(USE, "./put");
        ;
        USE(function(module3) {
          var Gun4 = USE("./root");
          USE("./chain");
          USE("./back");
          USE("./put");
          USE("./get");
          module3.exports = Gun4;
        })(USE, "./index");
        ;
        USE(function(module3) {
          var Gun4 = USE("./index");
          Gun4.chain.on = function(tag, arg, eas, as) {
            var gun2 = this, cat = gun2._, root = cat.root, act, off, id, tmp;
            if (typeof tag === "string") {
              if (!arg) {
                return cat.on(tag);
              }
              act = cat.on(tag, arg, eas || cat, as);
              if (eas && eas.$) {
                (eas.subs || (eas.subs = [])).push(act);
              }
              return gun2;
            }
            var opt = arg;
            (opt = opt === true ? {
              change: true
            } : opt || {}).not = 1;
            opt.on = 1;
            var wait = {};
            gun2.get(tag, opt);
            return gun2;
          };
          Gun4.chain.once = function(cb, opt) {
            opt = opt || {};
            if (!cb) {
              return none(this, opt);
            }
            var gun2 = this, cat = gun2._, root = cat.root, data = cat.put, id = String.random(7), one, tmp;
            gun2.get(function(data2, key, msg, eve) {
              var $ = this, at = $._, one2 = at.one || (at.one = {});
              if (eve.stun) {
                return;
              }
              if (one2[id] === "") {
                return;
              }
              if ((tmp = Gun4.valid(data2)) === true) {
                once();
                return;
              }
              if (typeof tmp == "string") {
                return;
              }
              clearTimeout((cat.one || "")[id]);
              clearTimeout(one2[id]);
              one2[id] = setTimeout(once, opt.wait || 99);
              function once() {
                if (!at.has && !at.soul) {
                  at = {
                    put: data2,
                    get: key
                  };
                }
                if (u2 === (tmp = at.put)) {
                  tmp = ((msg.$$ || "")._ || "").put;
                }
                if (typeof Gun4.valid(tmp) == "string") {
                  tmp = root.$.get(tmp)._.put;
                  if (tmp === u2) {
                    return;
                  }
                }
                if (eve.stun) {
                  return;
                }
                if (one2[id] === "") {
                  return;
                }
                one2[id] = "";
                if (cat.soul || cat.has) {
                  eve.off();
                }
                cb.call($, tmp, at.get);
              }
              ;
            }, {
              on: 1
            });
            return gun2;
          };
          function none(gun2, opt, chain) {
            Gun4.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
            (chain = gun2.chain())._.nix = gun2.once(function(data, key) {
              chain._.on("in", this._);
            });
            chain._.lex = gun2._.lex;
            return chain;
          }
          Gun4.chain.off = function() {
            var gun2 = this, at = gun2._, tmp;
            var cat = at.back;
            if (!cat) {
              return;
            }
            at.ack = 0;
            if (tmp = cat.next) {
              if (tmp[at.get]) {
                delete tmp[at.get];
              } else {
              }
            }
            if (tmp = cat.ask) {
              delete tmp[at.get];
            }
            if (tmp = cat.put) {
              delete tmp[at.get];
            }
            if (tmp = at.soul) {
              delete cat.root.graph[tmp];
            }
            if (tmp = at.map) {
              Object.keys(tmp).forEach(function(i, at2) {
                at2 = tmp[i];
                if (at2.link) {
                  cat.root.$.get(at2.link).off();
                }
              });
            }
            if (tmp = at.next) {
              Object.keys(tmp).forEach(function(i, neat) {
                neat = tmp[i];
                neat.$.off();
              });
            }
            at.on("off", {});
            return gun2;
          };
          var empty = {}, noop = function() {
          }, u2;
        })(USE, "./on");
        ;
        USE(function(module3) {
          var Gun4 = USE("./index"), next = Gun4.chain.get.next;
          Gun4.chain.get.next = function(gun2, lex) {
            var tmp;
            if (!Object.plain(lex)) {
              return (next || noop)(gun2, lex);
            }
            if (tmp = ((tmp = lex["#"]) || "")["="] || tmp) {
              return gun2.get(tmp);
            }
            (tmp = gun2.chain()._).lex = lex;
            gun2.on("in", function(eve) {
              if (String.match(eve.get || (eve.put || "")["."], lex["."] || lex["#"] || lex)) {
                tmp.on("in", eve);
              }
              this.to.next(eve);
            });
            return tmp.$;
          };
          Gun4.chain.map = function(cb, opt, t2) {
            var gun2 = this, cat = gun2._, lex, chain;
            if (Object.plain(cb)) {
              lex = cb["."] ? cb : {
                ".": cb
              };
              cb = u2;
            }
            if (!cb) {
              if (chain = cat.each) {
                return chain;
              }
              (cat.each = chain = gun2.chain())._.lex = lex || chain._.lex || cat.lex;
              chain._.nix = gun2.back("nix");
              gun2.on("in", map, chain._);
              return chain;
            }
            Gun4.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
            chain = gun2.chain();
            gun2.map().on(function(data, key, msg, eve) {
              var next2 = (cb || noop).call(this, data, key, msg, eve);
              if (u2 === next2) {
                return;
              }
              if (data === next2) {
                return chain._.on("in", msg);
              }
              if (Gun4.is(next2)) {
                return chain._.on("in", next2._);
              }
              var tmp = {};
              Object.keys(msg.put).forEach(function(k) {
                tmp[k] = msg.put[k];
              }, tmp);
              tmp["="] = next2;
              chain._.on("in", {
                get: key,
                put: tmp
              });
            });
            return chain;
          };
          function map(msg) {
            this.to.next(msg);
            var cat = this.as, gun2 = msg.$, at = gun2._, put = msg.put, tmp;
            if (!at.soul && !msg.$$) {
              return;
            }
            if ((tmp = cat.lex) && !String.match(msg.get || (put || "")["."], tmp["."] || tmp["#"] || tmp)) {
              return;
            }
            Gun4.on.link(msg, cat);
          }
          var noop = function() {
          }, event = {
            stun: noop,
            off: noop
          }, u2;
        })(USE, "./map");
        ;
        USE(function(module3) {
          var Gun4 = USE("./index");
          Gun4.chain.set = function(item, cb, opt) {
            var gun2 = this, root = gun2.back(-1), soul, tmp;
            cb = cb || function() {
            };
            opt = opt || {};
            opt.item = opt.item || item;
            if (soul = ((item || "")._ || "")["#"]) {
              (item = {})["#"] = soul;
            }
            if (typeof (tmp = Gun4.valid(item)) == "string") {
              return gun2.get(soul = tmp).put(item, cb, opt);
            }
            if (!Gun4.is(item)) {
              if (Object.plain(item)) {
                item = root.get(soul = gun2.back("opt.uuid")()).put(item);
              }
              return gun2.get(soul || root.back("opt.uuid")(7)).put(item, cb, opt);
            }
            gun2.put(function(go) {
              item.get(function(soul2, o, msg) {
                if (!soul2) {
                  return cb.call(gun2, {
                    err: Gun4.log('Only a node can be linked! Not "' + msg.put + '"!')
                  });
                }
                (tmp = {})[soul2] = {
                  "#": soul2
                };
                go(tmp);
              }, true);
            });
            return item;
          };
        })(USE, "./set");
        ;
        USE(function(module3) {
          USE("./shim");
          function Mesh(root) {
            var mesh = function() {
            };
            var opt = root.opt || {};
            opt.log = opt.log || console.log;
            opt.gap = opt.gap || opt.wait || 0;
            opt.max = opt.max || (opt.memory ? opt.memory * 999 * 999 : 3e8) * 0.3;
            opt.pack = opt.pack || opt.max * 0.01 * 0.01;
            opt.puff = opt.puff || 9;
            var puff = setTimeout.turn || setTimeout;
            var parse = JSON.parseAsync || function(t2, cb, r) {
              var u3;
              try {
                cb(u3, JSON.parse(t2, r));
              } catch (e) {
                cb(e);
              }
            };
            var json = JSON.stringifyAsync || function(v2, cb, r, s) {
              var u3;
              try {
                cb(u3, JSON.stringify(v2, r, s));
              } catch (e) {
                cb(e);
              }
            };
            var dup = root.dup, dup_check = dup.check, dup_track = dup.track;
            var ST = +new Date(), LT = ST;
            var hear = mesh.hear = function(raw, peer) {
              if (!raw) {
                return;
              }
              if (opt.max <= raw.length) {
                return mesh.say({
                  dam: "!",
                  err: "Message too big!"
                }, peer);
              }
              if (mesh === this) {
                hear.d += raw.length || 0;
                ++hear.c;
              }
              var S2 = peer.SH = +new Date();
              var tmp = raw[0], msg;
              if (tmp === "[") {
                parse(raw, function(err, msg2) {
                  if (err || !msg2) {
                    return mesh.say({
                      dam: "!",
                      err: "DAM JSON parse error."
                    }, peer);
                  }
                  console.STAT && console.STAT(+new Date(), msg2.length, "# on hear batch");
                  var P2 = opt.puff;
                  (function go() {
                    var S3 = +new Date();
                    var i = 0, m;
                    while (i < P2 && (m = msg2[i++])) {
                      hear(m, peer);
                    }
                    msg2 = msg2.slice(i);
                    console.STAT && console.STAT(S3, +new Date() - S3, "hear loop");
                    flush(peer);
                    if (!msg2.length) {
                      return;
                    }
                    puff(go, 0);
                  })();
                });
                raw = "";
                return;
              }
              if (tmp === "{" || (raw["#"] || Object.plain(raw)) && (msg = raw)) {
                if (msg) {
                  return hear.one(msg, peer, S2);
                }
                parse(raw, function(err, msg2) {
                  if (err || !msg2) {
                    return mesh.say({
                      dam: "!",
                      err: "DAM JSON parse error."
                    }, peer);
                  }
                  hear.one(msg2, peer, S2);
                });
                return;
              }
            };
            hear.one = function(msg, peer, S2) {
              var id, hash, tmp, ash, DBG;
              if (msg.DBG) {
                msg.DBG = DBG = {
                  DBG: msg.DBG
                };
              }
              DBG && (DBG.h = S2);
              DBG && (DBG.hp = +new Date());
              if (!(id = msg["#"])) {
                id = msg["#"] = String.random(9);
              }
              if (tmp = dup_check(id)) {
                return;
              }
              if (!(hash = msg["##"]) && false) {
              }
              if (hash && (tmp = msg["@"] || msg.get && id) && dup.check(ash = tmp + hash)) {
                return;
              }
              (msg._ = function() {
              }).via = mesh.leap = peer;
              if ((tmp = msg["><"]) && typeof tmp == "string") {
                tmp.slice(0, 99).split(",").forEach(function(k) {
                  this[k] = 1;
                }, msg._.yo = {});
              }
              if (tmp = msg.dam) {
                if (tmp = mesh.hear[tmp]) {
                  tmp(msg, peer, root);
                }
                dup_track(id);
                return;
              }
              var S2 = +new Date();
              DBG && (DBG.is = S2);
              peer.SI = id;
              root.on("in", mesh.last = msg);
              DBG && (DBG.hd = +new Date());
              console.STAT && console.STAT(S2, +new Date() - S2, msg.get ? "msg get" : msg.put ? "msg put" : "msg");
              (tmp = dup_track(id)).via = peer;
              if (msg.get) {
                tmp.it = msg;
              }
              if (ash) {
                dup_track(ash);
              }
              mesh.leap = mesh.last = null;
            };
            var tomap = function(k, i, m) {
              m(k, true);
            };
            var noop = function() {
            };
            hear.c = hear.d = 0;
            ;
            (function() {
              var SMIA = 0;
              var loop;
              mesh.hash = function(msg, peer) {
                var h, s, t2;
                var S2 = +new Date();
                json(msg.put, function hash(err, text) {
                  var ss = (s || (s = t2 = text || "")).slice(0, 32768);
                  h = String.hash(ss, h);
                  s = s.slice(32768);
                  if (s) {
                    puff(hash, 0);
                    return;
                  }
                  console.STAT && console.STAT(S2, +new Date() - S2, "say json+hash");
                  msg._.$put = t2;
                  msg["##"] = h;
                  say(msg, peer);
                  delete msg._.$put;
                }, sort);
              };
              function sort(k, v2) {
                var tmp;
                if (!(v2 instanceof Object)) {
                  return v2;
                }
                Object.keys(v2).sort().forEach(sorta, {
                  to: tmp = {},
                  on: v2
                });
                return tmp;
              }
              function sorta(k) {
                this.to[k] = this.on[k];
              }
              var say = mesh.say = function(msg, peer) {
                var tmp;
                if ((tmp = this) && (tmp = tmp.to) && tmp.next) {
                  tmp.next(msg);
                }
                if (!msg) {
                  return false;
                }
                var id, hash, raw, ack = msg["@"];
                var meta = msg._ || (msg._ = function() {
                });
                var DBG = msg.DBG, S2 = +new Date();
                meta.y = meta.y || S2;
                if (!peer) {
                  DBG && (DBG.y = S2);
                }
                if (!(id = msg["#"])) {
                  id = msg["#"] = String.random(9);
                }
                !loop && dup_track(id);
                if (msg.put && (msg.err || (dup.s[id] || "").err)) {
                  return false;
                }
                if (!(hash = msg["##"]) && u2 !== msg.put && !meta.via && ack) {
                  mesh.hash(msg, peer);
                  return;
                }
                if (!peer && ack) {
                  peer = (tmp = dup.s[ack]) && (tmp.via || (tmp = tmp.it) && (tmp = tmp._) && tmp.via) || (tmp = mesh.last) && ack === tmp["#"] && mesh.leap;
                }
                if (!peer && ack) {
                  if (dup.s[ack]) {
                    return;
                  }
                  console.STAT && console.STAT(+new Date(), ++SMIA, "total no peer to ack to");
                  return false;
                }
                if (!peer && mesh.way) {
                  return mesh.way(msg);
                }
                DBG && (DBG.yh = +new Date());
                if (!(raw = meta.raw)) {
                  mesh.raw(msg, peer);
                  return;
                }
                DBG && (DBG.yr = +new Date());
                if (!peer || !peer.id) {
                  if (!Object.plain(peer || opt.peers)) {
                    return false;
                  }
                  var S2 = +new Date();
                  var P2 = opt.puff, ps = opt.peers, pl = Object.keys(peer || opt.peers || {});
                  console.STAT && console.STAT(S2, +new Date() - S2, "peer keys");
                  ;
                  (function go() {
                    var S3 = +new Date();
                    loop = 1;
                    var wr = meta.raw;
                    meta.raw = raw;
                    var i = 0, p;
                    while (i < 9 && (p = (pl || "")[i++])) {
                      if (!(p = ps[p])) {
                        continue;
                      }
                      say(msg, p);
                    }
                    meta.raw = wr;
                    loop = 0;
                    pl = pl.slice(i);
                    console.STAT && console.STAT(S3, +new Date() - S3, "say loop");
                    if (!pl.length) {
                      return;
                    }
                    puff(go, 0);
                    ack && dup_track(ack);
                  })();
                  return;
                }
                if (!peer.wire && mesh.wire) {
                  mesh.wire(peer);
                }
                if (id === peer.last) {
                  return;
                }
                peer.last = id;
                if (peer === meta.via) {
                  return false;
                }
                if ((tmp = meta.yo) && (tmp[peer.url] || tmp[peer.pid] || tmp[peer.id])) {
                  return false;
                }
                console.STAT && console.STAT(S2, ((DBG || meta).yp = +new Date()) - (meta.y || S2), "say prep");
                !loop && ack && dup_track(ack);
                if (peer.batch) {
                  peer.tail = (tmp = peer.tail || 0) + raw.length;
                  if (peer.tail <= opt.pack) {
                    peer.batch += (tmp ? "," : "") + raw;
                    return;
                  }
                  flush(peer);
                }
                peer.batch = "[";
                var ST2 = +new Date();
                setTimeout(function() {
                  console.STAT && console.STAT(ST2, +new Date() - ST2, "0ms TO");
                  flush(peer);
                }, opt.gap);
                send(raw, peer);
                console.STAT && ack === peer.SI && console.STAT(S2, +new Date() - peer.SH, "say ack");
              };
              mesh.say.c = mesh.say.d = 0;
              mesh.raw = function(msg, peer) {
                if (!msg) {
                  return "";
                }
                var meta = msg._ || {}, put, tmp;
                if (tmp = meta.raw) {
                  return tmp;
                }
                if (typeof msg == "string") {
                  return msg;
                }
                var hash = msg["##"], ack = msg["@"];
                if (hash && ack) {
                  if (!meta.via && dup_check(ack + hash)) {
                    return false;
                  }
                  if ((tmp = (dup.s[ack] || "").it) || (tmp = mesh.last) && ack === tmp["#"]) {
                    if (hash === tmp["##"]) {
                      return false;
                    }
                    if (!tmp["##"]) {
                      tmp["##"] = hash;
                    }
                  }
                }
                if (!msg.dam) {
                  var i = 0, to = [];
                  tmp = opt.peers;
                  for (var k in tmp) {
                    var p = tmp[k];
                    to.push(p.url || p.pid || p.id);
                    if (++i > 6) {
                      break;
                    }
                  }
                  if (i > 1) {
                    msg["><"] = to.join();
                  }
                }
                if (put = meta.$put) {
                  tmp = {};
                  Object.keys(msg).forEach(function(k2) {
                    tmp[k2] = msg[k2];
                  });
                  tmp.put = ":])([:";
                  json(tmp, function(err, raw) {
                    if (err) {
                      return;
                    }
                    var S2 = +new Date();
                    tmp = raw.indexOf('"put":":])([:"');
                    res(u2, raw = raw.slice(0, tmp + 6) + put + raw.slice(tmp + 14));
                    console.STAT && console.STAT(S2, +new Date() - S2, "say slice");
                  });
                  return;
                }
                json(msg, res);
                function res(err, raw) {
                  if (err) {
                    return;
                  }
                  meta.raw = raw;
                  say(msg, peer);
                }
              };
            })();
            function flush(peer) {
              var tmp = peer.batch, t2 = typeof tmp == "string", l;
              if (t2) {
                tmp += "]";
              }
              peer.batch = peer.tail = null;
              if (!tmp) {
                return;
              }
              if (t2 ? 3 > tmp.length : !tmp.length) {
                return;
              }
              if (!t2) {
                try {
                  tmp = tmp.length === 1 ? tmp[0] : JSON.stringify(tmp);
                } catch (e) {
                  return opt.log("DAM JSON stringify error", e);
                }
              }
              if (!tmp) {
                return;
              }
              send(tmp, peer);
            }
            function send(raw, peer) {
              try {
                var wire = peer.wire;
                if (peer.say) {
                  peer.say(raw);
                } else if (wire.send) {
                  wire.send(raw);
                }
                mesh.say.d += raw.length || 0;
                ++mesh.say.c;
              } catch (e) {
                (peer.queue = peer.queue || []).push(raw);
              }
            }
            mesh.hi = function(peer) {
              var tmp = peer.wire || {};
              if (peer.id) {
                opt.peers[peer.url || peer.id] = peer;
              } else {
                tmp = peer.id = peer.id || String.random(9);
                mesh.say({
                  dam: "?",
                  pid: root.opt.pid
                }, opt.peers[tmp] = peer);
                delete dup.s[peer.last];
              }
              peer.met = peer.met || +new Date();
              if (!tmp.hied) {
                root.on(tmp.hied = "hi", peer);
              }
              tmp = peer.queue;
              peer.queue = [];
              setTimeout.each(tmp || [], function(msg) {
                send(msg, peer);
              }, 0, 9);
            };
            mesh.bye = function(peer) {
              root.on("bye", peer);
              var tmp = +new Date();
              tmp = tmp - (peer.met || tmp);
              mesh.bye.time = ((mesh.bye.time || tmp) + tmp) / 2;
            };
            mesh.hear["!"] = function(msg, peer) {
              opt.log("Error:", msg.err);
            };
            mesh.hear["?"] = function(msg, peer) {
              if (msg.pid) {
                if (!peer.pid) {
                  peer.pid = msg.pid;
                }
                if (msg["@"]) {
                  return;
                }
              }
              mesh.say({
                dam: "?",
                pid: opt.pid,
                "@": msg["#"]
              }, peer);
              delete dup.s[peer.last];
            };
            root.on("create", function(root2) {
              root2.opt.pid = root2.opt.pid || String.random(9);
              this.to.next(root2);
              root2.on("out", mesh.say);
            });
            root.on("bye", function(peer, tmp) {
              peer = opt.peers[peer.id || peer] || peer;
              this.to.next(peer);
              peer.bye ? peer.bye() : (tmp = peer.wire) && tmp.close && tmp.close();
              delete opt.peers[peer.id];
              peer.wire = null;
            });
            var gets = {};
            root.on("bye", function(peer, tmp) {
              this.to.next(peer);
              if (tmp = console.STAT) {
                tmp.peers = (tmp.peers || 0) - 1;
              }
              if (!(tmp = peer.url)) {
                return;
              }
              gets[tmp] = true;
              setTimeout(function() {
                delete gets[tmp];
              }, opt.lack || 9e3);
            });
            root.on("hi", function(peer, tmp) {
              this.to.next(peer);
              if (tmp = console.STAT) {
                tmp.peers = (tmp.peers || 0) + 1;
              }
              if (!(tmp = peer.url) || !gets[tmp]) {
                return;
              }
              delete gets[tmp];
              if (opt.super) {
                return;
              }
              setTimeout.each(Object.keys(root.next), function(soul) {
                var node = root.next[soul];
                tmp = {};
                tmp[soul] = root.graph[soul];
                tmp = String.hash(tmp);
                mesh.say({
                  "##": tmp,
                  get: {
                    "#": soul
                  }
                }, peer);
              });
            });
            return mesh;
          }
          var empty = {}, ok = true, u2;
          try {
            module3.exports = Mesh;
          } catch (e) {
          }
        })(USE, "./mesh");
        ;
        USE(function(module3) {
          var Gun4 = USE("../index");
          Gun4.Mesh = USE("./mesh");
          Gun4.on("opt", function(root) {
            this.to.next(root);
            if (root.once) {
              return;
            }
            var opt = root.opt;
            if (opt.WebSocket === false) {
              return;
            }
            var env = Gun4.window || {};
            var websocket = opt.WebSocket || env.WebSocket || env.webkitWebSocket || env.mozWebSocket;
            if (!websocket) {
              return;
            }
            opt.WebSocket = websocket;
            var mesh = opt.mesh = opt.mesh || Gun4.Mesh(root);
            var wire = mesh.wire || opt.wire;
            mesh.wire = opt.wire = open;
            function open(peer) {
              try {
                if (!peer || !peer.url) {
                  return wire2 && wire2(peer);
                }
                var url = peer.url.replace(/^http/, "ws");
                var wire2 = peer.wire = new opt.WebSocket(url);
                wire2.onclose = function() {
                  opt.mesh.bye(peer);
                  reconnect(peer);
                };
                wire2.onerror = function(error) {
                  reconnect(peer);
                };
                wire2.onopen = function() {
                  opt.mesh.hi(peer);
                };
                wire2.onmessage = function(msg) {
                  if (!msg) {
                    return;
                  }
                  opt.mesh.hear(msg.data || msg, peer);
                };
                return wire2;
              } catch (e) {
              }
            }
            setTimeout(function() {
              !opt.super && root.on("out", {
                dam: "hi"
              });
            }, 1);
            var wait = 2 * 999;
            function reconnect(peer) {
              clearTimeout(peer.defer);
              if (doc && peer.retry <= 0) {
                return;
              }
              peer.retry = (peer.retry || opt.retry + 1 || 60) - (-peer.tried + (peer.tried = +new Date()) < wait * 4 ? 1 : 0);
              peer.defer = setTimeout(function to() {
                if (doc && doc.hidden) {
                  return setTimeout(to, wait);
                }
                open(peer);
              }, wait);
            }
            var doc = "" + u2 !== typeof document && document;
          });
          var noop = function() {
          }, u2;
        })(USE, "./websocket");
        ;
        USE(function(module3) {
          if (typeof Gun === "undefined") {
            return;
          }
          var noop = function() {
          }, store, u2;
          try {
            store = (Gun.window || noop).localStorage;
          } catch (e) {
          }
          if (!store) {
            Gun.log("Warning: No localStorage exists to persist data to!");
            store = {
              setItem: function(k, v2) {
                this[k] = v2;
              },
              removeItem: function(k) {
                delete this[k];
              },
              getItem: function(k) {
                return this[k];
              }
            };
          }
          Gun.on("create", function lg(root) {
            this.to.next(root);
            var opt = root.opt, graph = root.graph, acks = [], disk, to;
            if (opt.localStorage === false) {
              return;
            }
            opt.prefix = opt.file || "gun/";
            try {
              disk = lg[opt.prefix] = lg[opt.prefix] || JSON.parse(store.getItem(opt.prefix)) || {};
            } catch (e) {
              disk = lg[opt.prefix] = {};
            }
            root.on("get", function(msg) {
              this.to.next(msg);
              var lex = msg.get, soul, data, tmp, u3;
              if (!lex || !(soul = lex["#"])) {
                return;
              }
              data = disk[soul] || u3;
              if (data && (tmp = lex["."]) && !Object.plain(tmp)) {
                data = Gun.state.ify({}, tmp, Gun.state.is(data, tmp), data[tmp], soul);
              }
              Gun.on.get.ack(msg, data);
            });
            root.on("put", function(msg) {
              this.to.next(msg);
              var put = msg.put, soul = put["#"], key = put["."], tmp;
              disk[soul] = Gun.state.ify(disk[soul], key, put[">"], put[":"], soul);
              if (!msg["@"]) {
                acks.push(msg["#"]);
              }
              if (to) {
                return;
              }
              to = setTimeout(flush, opt.wait || 1);
            });
            function flush() {
              var err, ack = acks;
              clearTimeout(to);
              to = false;
              acks = [];
              try {
                store.setItem(opt.prefix, JSON.stringify(disk));
              } catch (e) {
                Gun.log((err = e || "localStorage failure") + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install");
                root.on("localStorage:error", {
                  err,
                  get: opt.prefix,
                  put: disk
                });
              }
              if (!err && !Object.empty(opt.peers)) {
                return;
              }
              setTimeout.each(ack, function(id) {
                root.on("in", {
                  "@": id,
                  err,
                  ok: 0
                });
              });
            }
          });
        })(USE, "./localStorage");
      })();
      (function() {
        var u2;
        if ("" + u2 == typeof Gun) {
          return;
        }
        var DEP = function(n) {
          console.log("Warning! Deprecated internal utility will break in next version:", n);
        };
        var Type = Gun;
        Type.fn = Type.fn || {
          is: function(fn2) {
            DEP("fn");
            return !!fn2 && typeof fn2 == "function";
          }
        };
        Type.bi = Type.bi || {
          is: function(b2) {
            DEP("bi");
            return b2 instanceof Boolean || typeof b2 == "boolean";
          }
        };
        Type.num = Type.num || {
          is: function(n) {
            DEP("num");
            return !list_is(n) && (n - parseFloat(n) + 1 >= 0 || n === Infinity || n === -Infinity);
          }
        };
        Type.text = Type.text || {
          is: function(t2) {
            DEP("text");
            return typeof t2 == "string";
          }
        };
        Type.text.ify = Type.text.ify || function(t2) {
          DEP("text.ify");
          if (Type.text.is(t2)) {
            return t2;
          }
          if (typeof JSON !== "undefined") {
            return JSON.stringify(t2);
          }
          return t2 && t2.toString ? t2.toString() : t2;
        };
        Type.text.random = Type.text.random || function(l, c2) {
          DEP("text.random");
          var s = "";
          l = l || 24;
          c2 = c2 || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
          while (l > 0) {
            s += c2.charAt(Math.floor(Math.random() * c2.length));
            l--;
          }
          return s;
        };
        Type.text.match = Type.text.match || function(t2, o) {
          var tmp, u3;
          DEP("text.match");
          if (typeof t2 !== "string") {
            return false;
          }
          if (typeof o == "string") {
            o = {
              "=": o
            };
          }
          o = o || {};
          tmp = o["="] || o["*"] || o[">"] || o["<"];
          if (t2 === tmp) {
            return true;
          }
          if (u3 !== o["="]) {
            return false;
          }
          tmp = o["*"] || o[">"] || o["<"];
          if (t2.slice(0, (tmp || "").length) === tmp) {
            return true;
          }
          if (u3 !== o["*"]) {
            return false;
          }
          if (u3 !== o[">"] && u3 !== o["<"]) {
            return t2 >= o[">"] && t2 <= o["<"] ? true : false;
          }
          if (u3 !== o[">"] && t2 >= o[">"]) {
            return true;
          }
          if (u3 !== o["<"] && t2 <= o["<"]) {
            return true;
          }
          return false;
        };
        Type.text.hash = Type.text.hash || function(s, c2) {
          DEP("text.hash");
          if (typeof s !== "string") {
            return;
          }
          c2 = c2 || 0;
          if (!s.length) {
            return c2;
          }
          for (var i = 0, l = s.length, n; i < l; ++i) {
            n = s.charCodeAt(i);
            c2 = (c2 << 5) - c2 + n;
            c2 |= 0;
          }
          return c2;
        };
        Type.list = Type.list || {
          is: function(l) {
            DEP("list");
            return l instanceof Array;
          }
        };
        Type.list.slit = Type.list.slit || Array.prototype.slice;
        Type.list.sort = Type.list.sort || function(k) {
          DEP("list.sort");
          return function(A, B) {
            if (!A || !B) {
              return 0;
            }
            A = A[k];
            B = B[k];
            if (A < B) {
              return -1;
            } else if (A > B) {
              return 1;
            } else {
              return 0;
            }
          };
        };
        Type.list.map = Type.list.map || function(l, c2, _) {
          DEP("list.map");
          return obj_map(l, c2, _);
        };
        Type.list.index = 1;
        Type.obj = Type.boj || {
          is: function(o) {
            DEP("obj");
            return o ? o instanceof Object && o.constructor === Object || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === "Object" : false;
          }
        };
        Type.obj.put = Type.obj.put || function(o, k, v2) {
          DEP("obj.put");
          return (o || {})[k] = v2, o;
        };
        Type.obj.has = Type.obj.has || function(o, k) {
          DEP("obj.has");
          return o && Object.prototype.hasOwnProperty.call(o, k);
        };
        Type.obj.del = Type.obj.del || function(o, k) {
          DEP("obj.del");
          if (!o) {
            return;
          }
          o[k] = null;
          delete o[k];
          return o;
        };
        Type.obj.as = Type.obj.as || function(o, k, v2, u3) {
          DEP("obj.as");
          return o[k] = o[k] || (u3 === v2 ? {} : v2);
        };
        Type.obj.ify = Type.obj.ify || function(o) {
          DEP("obj.ify");
          if (obj_is(o)) {
            return o;
          }
          try {
            o = JSON.parse(o);
          } catch (e) {
            o = {};
          }
          ;
          return o;
        };
        (function() {
          var u3;
          function map(v2, k) {
            if (obj_has(this, k) && u3 !== this[k]) {
              return;
            }
            this[k] = v2;
          }
          Type.obj.to = Type.obj.to || function(from, to) {
            DEP("obj.to");
            to = to || {};
            obj_map(from, map, to);
            return to;
          };
        })();
        Type.obj.copy = Type.obj.copy || function(o) {
          DEP("obj.copy");
          return !o ? o : JSON.parse(JSON.stringify(o));
        };
        (function() {
          function empty(v2, i) {
            var n = this.n, u3;
            if (n && (i === n || obj_is(n) && obj_has(n, i))) {
              return;
            }
            if (u3 !== i) {
              return true;
            }
          }
          Type.obj.empty = Type.obj.empty || function(o, n) {
            DEP("obj.empty");
            if (!o) {
              return true;
            }
            return obj_map(o, empty, {
              n
            }) ? false : true;
          };
        })();
        ;
        (function() {
          function t2(k, v2) {
            if (arguments.length === 2) {
              t2.r = t2.r || {};
              t2.r[k] = v2;
              return;
            }
            t2.r = t2.r || [];
            t2.r.push(k);
          }
          ;
          var keys = Object.keys, map, u3;
          Object.keys = Object.keys || function(o) {
            return map(o, function(v2, k, t3) {
              t3(k);
            });
          };
          Type.obj.map = map = Type.obj.map || function(l, c2, _) {
            DEP("obj.map");
            var u4, i = 0, x2, r, ll, lle, f = typeof c2 == "function";
            t2.r = u4;
            if (keys && obj_is(l)) {
              ll = keys(l);
              lle = true;
            }
            _ = _ || {};
            if (list_is(l) || ll) {
              x2 = (ll || l).length;
              for (; i < x2; i++) {
                var ii = i + Type.list.index;
                if (f) {
                  r = lle ? c2.call(_, l[ll[i]], ll[i], t2) : c2.call(_, l[i], ii, t2);
                  if (r !== u4) {
                    return r;
                  }
                } else {
                  if (c2 === l[lle ? ll[i] : i]) {
                    return ll ? ll[i] : ii;
                  }
                }
              }
            } else {
              for (i in l) {
                if (f) {
                  if (obj_has(l, i)) {
                    r = _ ? c2.call(_, l[i], i, t2) : c2(l[i], i, t2);
                    if (r !== u4) {
                      return r;
                    }
                  }
                } else {
                  if (c2 === l[i]) {
                    return i;
                  }
                }
              }
            }
            return f ? t2.r : Type.list.index ? 0 : -1;
          };
        })();
        Type.time = Type.time || {};
        Type.time.is = Type.time.is || function(t2) {
          DEP("time");
          return t2 ? t2 instanceof Date : +new Date().getTime();
        };
        var fn_is = Type.fn.is;
        var list_is = Type.list.is;
        var obj = Type.obj, obj_is = obj.is, obj_has = obj.has, obj_map = obj.map;
        var Val = {};
        Val.is = function(v2) {
          DEP("val.is");
          if (v2 === u2) {
            return false;
          }
          if (v2 === null) {
            return true;
          }
          if (v2 === Infinity) {
            return false;
          }
          if (text_is(v2) || bi_is(v2) || num_is(v2)) {
            return true;
          }
          return Val.link.is(v2) || false;
        };
        Val.link = Val.rel = {
          _: "#"
        };
        ;
        (function() {
          Val.link.is = function(v2) {
            DEP("val.link.is");
            if (v2 && v2[rel_] && !v2._ && obj_is(v2)) {
              var o = {};
              obj_map(v2, map, o);
              if (o.id) {
                return o.id;
              }
            }
            return false;
          };
          function map(s, k) {
            var o = this;
            if (o.id) {
              return o.id = false;
            }
            if (k == rel_ && text_is(s)) {
              o.id = s;
            } else {
              return o.id = false;
            }
          }
        })();
        Val.link.ify = function(t2) {
          DEP("val.link.ify");
          return obj_put({}, rel_, t2);
        };
        Type.obj.has._ = ".";
        var rel_ = Val.link._, u2;
        var bi_is = Type.bi.is;
        var num_is = Type.num.is;
        var text_is = Type.text.is;
        var obj = Type.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map;
        Type.val = Type.val || Val;
        var Node = {
          _: "_"
        };
        Node.soul = function(n, o) {
          DEP("node.soul");
          return n && n._ && n._[o || soul_];
        };
        Node.soul.ify = function(n, o) {
          DEP("node.soul.ify");
          o = typeof o === "string" ? {
            soul: o
          } : o || {};
          n = n || {};
          n._ = n._ || {};
          n._[soul_] = o.soul || n._[soul_] || text_random();
          return n;
        };
        Node.soul._ = Val.link._;
        ;
        (function() {
          Node.is = function(n, cb, as) {
            DEP("node.is");
            var s;
            if (!obj_is(n)) {
              return false;
            }
            if (s = Node.soul(n)) {
              return !obj_map(n, map, {
                as,
                cb,
                s,
                n
              });
            }
            return false;
          };
          function map(v2, k) {
            if (k === Node._) {
              return;
            }
            if (!Val.is(v2)) {
              return true;
            }
            if (this.cb) {
              this.cb.call(this.as, v2, k, this.n, this.s);
            }
          }
        })();
        ;
        (function() {
          Node.ify = function(obj2, o, as) {
            DEP("node.ify");
            if (!o) {
              o = {};
            } else if (typeof o === "string") {
              o = {
                soul: o
              };
            } else if (typeof o == "function") {
              o = {
                map: o
              };
            }
            if (o.map) {
              o.node = o.map.call(as, obj2, u2, o.node || {});
            }
            if (o.node = Node.soul.ify(o.node || {}, o)) {
              obj_map(obj2, map, {
                o,
                as
              });
            }
            return o.node;
          };
          function map(v2, k) {
            var o = this.o, tmp, u3;
            if (o.map) {
              tmp = o.map.call(this.as, v2, "" + k, o.node);
              if (u3 === tmp) {
                obj_del(o.node, k);
              } else if (o.node) {
                o.node[k] = tmp;
              }
              return;
            }
            if (Val.is(v2)) {
              o.node[k] = v2;
            }
          }
        })();
        var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_map = obj.map;
        var text = Type.text, text_random = text.random;
        var soul_ = Node.soul._;
        var u2;
        Type.node = Type.node || Node;
        var State = Type.state;
        State.lex = function() {
          DEP("state.lex");
          return State().toString(36).replace(".", "");
        };
        State.to = function(from, k, to) {
          DEP("state.to");
          var val = (from || {})[k];
          if (obj_is(val)) {
            val = obj_copy(val);
          }
          return State.ify(to, k, State.is(from, k), val, Node.soul(from));
        };
        (function() {
          State.map = function(cb, s, as) {
            DEP("state.map");
            var u3;
            var o = obj_is(o = cb || s) ? o : null;
            cb = fn_is(cb = cb || s) ? cb : null;
            if (o && !cb) {
              s = num_is(s) ? s : State();
              o[N_] = o[N_] || {};
              obj_map(o, map, {
                o,
                s
              });
              return o;
            }
            as = as || obj_is(s) ? s : u3;
            s = num_is(s) ? s : State();
            return function(v2, k, o2, opt) {
              if (!cb) {
                map.call({
                  o: o2,
                  s
                }, v2, k);
                return v2;
              }
              cb.call(as || this || {}, v2, k, o2, opt);
              if (obj_has(o2, k) && u3 === o2[k]) {
                return;
              }
              map.call({
                o: o2,
                s
              }, v2, k);
            };
          };
          function map(v2, k) {
            if (N_ === k) {
              return;
            }
            State.ify(this.o, k, this.s);
          }
        })();
        var obj = Type.obj, obj_as = obj.as, obj_has = obj.has, obj_is = obj.is, obj_map = obj.map, obj_copy = obj.copy;
        var num = Type.num, num_is = num.is;
        var fn = Type.fn, fn_is = fn.is;
        var N_ = Node._, u2;
        var Graph = {};
        ;
        (function() {
          Graph.is = function(g, cb, fn2, as) {
            DEP("graph.is");
            if (!g || !obj_is(g) || obj_empty(g)) {
              return false;
            }
            return !obj_map(g, map, {
              cb,
              fn: fn2,
              as
            });
          };
          function map(n, s) {
            if (!n || s !== Node.soul(n) || !Node.is(n, this.fn, this.as)) {
              return true;
            }
            if (!this.cb) {
              return;
            }
            nf.n = n;
            nf.as = this.as;
            this.cb.call(nf.as, n, s, nf);
          }
          function nf(fn2) {
            if (fn2) {
              Node.is(nf.n, fn2, nf.as);
            }
          }
        })();
        ;
        (function() {
          Graph.ify = function(obj2, env, as) {
            DEP("graph.ify");
            var at = {
              path: [],
              obj: obj2
            };
            if (!env) {
              env = {};
            } else if (typeof env === "string") {
              env = {
                soul: env
              };
            } else if (typeof env == "function") {
              env.map = env;
            }
            if (typeof as === "string") {
              env.soul = env.soul || as;
              as = u2;
            }
            if (env.soul) {
              at.link = Val.link.ify(env.soul);
            }
            env.shell = (as || {}).shell;
            env.graph = env.graph || {};
            env.seen = env.seen || [];
            env.as = env.as || as;
            node(env, at);
            env.root = at.node;
            return env.graph;
          };
          function node(env, at) {
            var tmp;
            if (tmp = seen(env, at)) {
              return tmp;
            }
            at.env = env;
            at.soul = soul;
            if (Node.ify(at.obj, map, at)) {
              at.link = at.link || Val.link.ify(Node.soul(at.node));
              if (at.obj !== env.shell) {
                env.graph[Val.link.is(at.link)] = at.node;
              }
            }
            return at;
          }
          function map(v2, k, n) {
            var at = this, env = at.env, is, tmp;
            if (Node._ === k && obj_has(v2, Val.link._)) {
              return n._;
            }
            if (!(is = valid(v2, k, n, at, env))) {
              return;
            }
            if (!k) {
              at.node = at.node || n || {};
              if (obj_has(v2, Node._) && Node.soul(v2)) {
                at.node._ = obj_copy(v2._);
              }
              at.node = Node.soul.ify(at.node, Val.link.is(at.link));
              at.link = at.link || Val.link.ify(Node.soul(at.node));
            }
            if (tmp = env.map) {
              tmp.call(env.as || {}, v2, k, n, at);
              if (obj_has(n, k)) {
                v2 = n[k];
                if (u2 === v2) {
                  obj_del(n, k);
                  return;
                }
                if (!(is = valid(v2, k, n, at, env))) {
                  return;
                }
              }
            }
            if (!k) {
              return at.node;
            }
            if (is === true) {
              return v2;
            }
            tmp = node(env, {
              obj: v2,
              path: at.path.concat(k)
            });
            if (!tmp.node) {
              return;
            }
            return tmp.link;
          }
          function soul(id) {
            var at = this;
            var prev = Val.link.is(at.link), graph = at.env.graph;
            at.link = at.link || Val.link.ify(id);
            at.link[Val.link._] = id;
            if (at.node && at.node[Node._]) {
              at.node[Node._][Val.link._] = id;
            }
            if (obj_has(graph, prev)) {
              graph[id] = graph[prev];
              obj_del(graph, prev);
            }
          }
          function valid(v2, k, n, at, env) {
            var tmp;
            if (Val.is(v2)) {
              return true;
            }
            if (obj_is(v2)) {
              return 1;
            }
            if (tmp = env.invalid) {
              v2 = tmp.call(env.as || {}, v2, k, n);
              return valid(v2, k, n, at, env);
            }
            env.err = "Invalid value at '" + at.path.concat(k).join(".") + "'!";
            if (Type.list.is(v2)) {
              env.err += " Use `.set(item)` instead of an Array.";
            }
          }
          function seen(env, at) {
            var arr = env.seen, i = arr.length, has;
            while (i--) {
              has = arr[i];
              if (at.obj === has.obj) {
                return has;
              }
            }
            arr.push(at);
          }
        })();
        Graph.node = function(node) {
          DEP("graph.node");
          var soul = Node.soul(node);
          if (!soul) {
            return;
          }
          return obj_put({}, soul, node);
        };
        (function() {
          Graph.to = function(graph, root, opt) {
            DEP("graph.to");
            if (!graph) {
              return;
            }
            var obj2 = {};
            opt = opt || {
              seen: {}
            };
            obj_map(graph[root], map, {
              obj: obj2,
              graph,
              opt
            });
            return obj2;
          };
          function map(v2, k) {
            var tmp, obj2;
            if (Node._ === k) {
              if (obj_empty(v2, Val.link._)) {
                return;
              }
              this.obj[k] = obj_copy(v2);
              return;
            }
            if (!(tmp = Val.link.is(v2))) {
              this.obj[k] = v2;
              return;
            }
            if (obj2 = this.opt.seen[tmp]) {
              this.obj[k] = obj2;
              return;
            }
            this.obj[k] = this.opt.seen[tmp] = Graph.to(this.graph, tmp, this.opt);
          }
        })();
        var fn_is = Type.fn.is;
        var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_has = obj.has, obj_empty = obj.empty, obj_put = obj.put, obj_map = obj.map, obj_copy = obj.copy;
        var u2;
        Type.graph = Type.graph || Graph;
      })();
    }
  });

  // node_modules/gun/browser.js
  var require_browser = __commonJS({
    "node_modules/gun/browser.js"(exports2, module2) {
      module2.exports = require_gun();
    }
  });

  // node_modules/flexsearch/dist/flexsearch.bundle.js
  var require_flexsearch_bundle = __commonJS({
    "node_modules/flexsearch/dist/flexsearch.bundle.js"(exports, module) {
      (function _f(self) {
        "use strict";
        try {
          if (module)
            self = module;
        } catch (e) {
        }
        self._factory = _f;
        var t;
        function u(a2) {
          return typeof a2 !== "undefined" ? a2 : true;
        }
        function aa(a2) {
          const b2 = Array(a2);
          for (let c2 = 0; c2 < a2; c2++)
            b2[c2] = v();
          return b2;
        }
        function v() {
          return Object.create(null);
        }
        function ba(a2, b2) {
          return b2.length - a2.length;
        }
        function x(a2) {
          return typeof a2 === "string";
        }
        function C(a2) {
          return typeof a2 === "object";
        }
        function D(a2) {
          return typeof a2 === "function";
        }
        ;
        function ca(a2, b2) {
          var c2 = da;
          if (a2 && (b2 && (a2 = E(a2, b2)), this.H && (a2 = E(a2, this.H)), this.J && 1 < a2.length && (a2 = E(a2, this.J)), c2 || c2 === "")) {
            a2 = a2.split(c2);
            if (this.filter) {
              b2 = this.filter;
              c2 = a2.length;
              const d2 = [];
              for (let e = 0, f = 0; e < c2; e++) {
                const g = a2[e];
                g && !b2[g] && (d2[f++] = g);
              }
              a2 = d2;
            }
            return a2;
          }
          return a2;
        }
        const da = /[\p{Z}\p{S}\p{P}\p{C}]+/u, ea = /[\u0300-\u036f]/g;
        function fa(a2, b2) {
          const c2 = Object.keys(a2), d2 = c2.length, e = [];
          let f = "", g = 0;
          for (let h = 0, k, m; h < d2; h++)
            k = c2[h], (m = a2[k]) ? (e[g++] = F(b2 ? "(?!\\b)" + k + "(\\b|_)" : k), e[g++] = m) : f += (f ? "|" : "") + k;
          f && (e[g++] = F(b2 ? "(?!\\b)(" + f + ")(\\b|_)" : "(" + f + ")"), e[g] = "");
          return e;
        }
        function E(a2, b2) {
          for (let c2 = 0, d2 = b2.length; c2 < d2 && (a2 = a2.replace(b2[c2], b2[c2 + 1]), a2); c2 += 2)
            ;
          return a2;
        }
        function F(a2) {
          return new RegExp(a2, "g");
        }
        function ha(a2) {
          let b2 = "", c2 = "";
          for (let d2 = 0, e = a2.length, f; d2 < e; d2++)
            (f = a2[d2]) !== c2 && (b2 += c2 = f);
          return b2;
        }
        ;
        var ja = {
          encode: ia,
          F: false,
          G: ""
        };
        function ia(a2) {
          return ca.call(this, ("" + a2).toLowerCase(), false);
        }
        ;
        const ka = {}, G = {};
        function la(a2) {
          I(a2, "add");
          I(a2, "append");
          I(a2, "search");
          I(a2, "update");
          I(a2, "remove");
        }
        function I(a2, b2) {
          a2[b2 + "Async"] = function() {
            const c2 = this, d2 = arguments;
            var e = d2[d2.length - 1];
            let f;
            D(e) && (f = e, delete d2[d2.length - 1]);
            e = new Promise(function(g) {
              setTimeout(function() {
                c2.async = true;
                const h = c2[b2].apply(c2, d2);
                c2.async = false;
                g(h);
              });
            });
            return f ? (e.then(f), this) : e;
          };
        }
        ;
        function ma(a2, b2, c2, d2) {
          const e = a2.length;
          let f = [], g, h, k = 0;
          d2 && (d2 = []);
          for (let m = e - 1; 0 <= m; m--) {
            const n = a2[m], w = n.length, q = v();
            let r = !g;
            for (let l = 0; l < w; l++) {
              const p = n[l], z = p.length;
              if (z)
                for (let B = 0, A, y; B < z; B++)
                  if (y = p[B], g) {
                    if (g[y]) {
                      if (!m) {
                        if (c2)
                          c2--;
                        else if (f[k++] = y, k === b2)
                          return f;
                      }
                      if (m || d2)
                        q[y] = 1;
                      r = true;
                    }
                    if (d2 && (h[y] = (A = h[y]) ? ++A : A = 1, A < e)) {
                      const H = d2[A - 2] || (d2[A - 2] = []);
                      H[H.length] = y;
                    }
                  } else
                    q[y] = 1;
            }
            if (d2)
              g || (h = q);
            else if (!r)
              return [];
            g = q;
          }
          if (d2)
            for (let m = d2.length - 1, n, w; 0 <= m; m--) {
              n = d2[m];
              w = n.length;
              for (let q = 0, r; q < w; q++)
                if (r = n[q], !g[r]) {
                  if (c2)
                    c2--;
                  else if (f[k++] = r, k === b2)
                    return f;
                  g[r] = 1;
                }
            }
          return f;
        }
        function na(a2, b2) {
          const c2 = v(), d2 = v(), e = [];
          for (let f = 0; f < a2.length; f++)
            c2[a2[f]] = 1;
          for (let f = 0, g; f < b2.length; f++) {
            g = b2[f];
            for (let h = 0, k; h < g.length; h++)
              k = g[h], c2[k] && !d2[k] && (d2[k] = 1, e[e.length] = k);
          }
          return e;
        }
        ;
        function J(a2) {
          this.l = a2 !== true && a2;
          this.cache = v();
          this.h = [];
        }
        function oa(a2, b2, c2) {
          C(a2) && (a2 = a2.query);
          let d2 = this.cache.get(a2);
          d2 || (d2 = this.search(a2, b2, c2), this.cache.set(a2, d2));
          return d2;
        }
        J.prototype.set = function(a2, b2) {
          if (!this.cache[a2]) {
            var c2 = this.h.length;
            c2 === this.l ? delete this.cache[this.h[c2 - 1]] : c2++;
            for (--c2; 0 < c2; c2--)
              this.h[c2] = this.h[c2 - 1];
            this.h[0] = a2;
          }
          this.cache[a2] = b2;
        };
        J.prototype.get = function(a2) {
          const b2 = this.cache[a2];
          if (this.l && b2 && (a2 = this.h.indexOf(a2))) {
            const c2 = this.h[a2 - 1];
            this.h[a2 - 1] = this.h[a2];
            this.h[a2] = c2;
          }
          return b2;
        };
        const qa = {
          memory: {
            charset: "latin:extra",
            D: 3,
            B: 4,
            m: false
          },
          performance: {
            D: 3,
            B: 3,
            s: false,
            context: {
              depth: 2,
              D: 1
            }
          },
          match: {
            charset: "latin:extra",
            G: "reverse"
          },
          score: {
            charset: "latin:advanced",
            D: 20,
            B: 3,
            context: {
              depth: 3,
              D: 9
            }
          },
          "default": {}
        };
        function ra(a2, b2, c2, d2, e, f) {
          setTimeout(function() {
            const g = a2(c2, JSON.stringify(f));
            g && g.then ? g.then(function() {
              b2.export(a2, b2, c2, d2, e + 1);
            }) : b2.export(a2, b2, c2, d2, e + 1);
          });
        }
        ;
        function K(a2, b2) {
          if (!(this instanceof K))
            return new K(a2);
          var c2;
          if (a2) {
            x(a2) ? a2 = qa[a2] : (c2 = a2.preset) && (a2 = Object.assign({}, c2[c2], a2));
            c2 = a2.charset;
            var d2 = a2.lang;
            x(c2) && (c2.indexOf(":") === -1 && (c2 += ":default"), c2 = G[c2]);
            x(d2) && (d2 = ka[d2]);
          } else
            a2 = {};
          let e, f, g = a2.context || {};
          this.encode = a2.encode || c2 && c2.encode || ia;
          this.register = b2 || v();
          this.D = e = a2.resolution || 9;
          this.G = b2 = c2 && c2.G || a2.tokenize || "strict";
          this.depth = b2 === "strict" && g.depth;
          this.l = u(g.bidirectional);
          this.s = f = u(a2.optimize);
          this.m = u(a2.fastupdate);
          this.B = a2.minlength || 1;
          this.C = a2.boost;
          this.map = f ? aa(e) : v();
          this.A = e = g.resolution || 1;
          this.h = f ? aa(e) : v();
          this.F = c2 && c2.F || a2.rtl;
          this.H = (b2 = a2.matcher || d2 && d2.H) && fa(b2, false);
          this.J = (b2 = a2.stemmer || d2 && d2.J) && fa(b2, true);
          if (c2 = b2 = a2.filter || d2 && d2.filter) {
            c2 = b2;
            d2 = v();
            for (let h = 0, k = c2.length; h < k; h++)
              d2[c2[h]] = 1;
            c2 = d2;
          }
          this.filter = c2;
          this.cache = (b2 = a2.cache) && new J(b2);
        }
        t = K.prototype;
        t.append = function(a2, b2) {
          return this.add(a2, b2, true);
        };
        t.add = function(a2, b2, c2, d2) {
          if (b2 && (a2 || a2 === 0)) {
            if (!d2 && !c2 && this.register[a2])
              return this.update(a2, b2);
            b2 = this.encode(b2);
            if (d2 = b2.length) {
              const m = v(), n = v(), w = this.depth, q = this.D;
              for (let r = 0; r < d2; r++) {
                let l = b2[this.F ? d2 - 1 - r : r];
                var e = l.length;
                if (l && e >= this.B && (w || !n[l])) {
                  var f = L(q, d2, r), g = "";
                  switch (this.G) {
                    case "full":
                      if (3 < e) {
                        for (f = 0; f < e; f++)
                          for (var h = e; h > f; h--)
                            if (h - f >= this.B) {
                              var k = L(q, d2, r, e, f);
                              g = l.substring(f, h);
                              M(this, n, g, k, a2, c2);
                            }
                        break;
                      }
                    case "reverse":
                      if (2 < e) {
                        for (h = e - 1; 0 < h; h--)
                          g = l[h] + g, g.length >= this.B && M(this, n, g, L(q, d2, r, e, h), a2, c2);
                        g = "";
                      }
                    case "forward":
                      if (1 < e) {
                        for (h = 0; h < e; h++)
                          g += l[h], g.length >= this.B && M(this, n, g, f, a2, c2);
                        break;
                      }
                    default:
                      if (this.C && (f = Math.min(f / this.C(b2, l, r) | 0, q - 1)), M(this, n, l, f, a2, c2), w && 1 < d2 && r < d2 - 1) {
                        for (e = v(), g = this.A, f = l, h = Math.min(w + 1, d2 - r), e[f] = 1, k = 1; k < h; k++)
                          if ((l = b2[this.F ? d2 - 1 - r - k : r + k]) && l.length >= this.B && !e[l]) {
                            e[l] = 1;
                            const p = this.l && l > f;
                            M(this, m, p ? f : l, L(g + (d2 / 2 > g ? 0 : 1), d2, r, h - 1, k - 1), a2, c2, p ? l : f);
                          }
                      }
                  }
                }
              }
              this.m || (this.register[a2] = 1);
            }
          }
          return this;
        };
        function L(a2, b2, c2, d2, e) {
          return c2 && 1 < a2 ? b2 + (d2 || 0) <= a2 ? c2 + (e || 0) : (a2 - 1) / (b2 + (d2 || 0)) * (c2 + (e || 0)) + 1 | 0 : 0;
        }
        function M(a2, b2, c2, d2, e, f, g) {
          let h = g ? a2.h : a2.map;
          if (!b2[c2] || g && !b2[c2][g])
            a2.s && (h = h[d2]), g ? (b2 = b2[c2] || (b2[c2] = v()), b2[g] = 1, h = h[g] || (h[g] = v())) : b2[c2] = 1, h = h[c2] || (h[c2] = []), a2.s || (h = h[d2] || (h[d2] = [])), f && h.indexOf(e) !== -1 || (h[h.length] = e, a2.m && (a2 = a2.register[e] || (a2.register[e] = []), a2[a2.length] = h));
        }
        t.search = function(a2, b2, c2) {
          c2 || (!b2 && C(a2) ? (c2 = a2, a2 = c2.query) : C(b2) && (c2 = b2));
          let d2 = [], e;
          let f, g = 0;
          if (c2) {
            b2 = c2.limit;
            g = c2.offset || 0;
            var h = c2.context;
            f = c2.suggest;
          }
          if (a2 && (a2 = this.encode(a2), e = a2.length, 1 < e)) {
            c2 = v();
            var k = [];
            for (let n = 0, w = 0, q; n < e; n++)
              if ((q = a2[n]) && q.length >= this.B && !c2[q])
                if (this.s || f || this.map[q])
                  k[w++] = q, c2[q] = 1;
                else
                  return d2;
            a2 = k;
            e = a2.length;
          }
          if (!e)
            return d2;
          b2 || (b2 = 100);
          h = this.depth && 1 < e && h !== false;
          c2 = 0;
          let m;
          h ? (m = a2[0], c2 = 1) : 1 < e && a2.sort(ba);
          for (let n, w; c2 < e; c2++) {
            w = a2[c2];
            h ? (n = sa(this, d2, f, b2, g, e === 2, w, m), f && n === false && d2.length || (m = w)) : n = sa(this, d2, f, b2, g, e === 1, w);
            if (n)
              return n;
            if (f && c2 === e - 1) {
              k = d2.length;
              if (!k) {
                if (h) {
                  h = 0;
                  c2 = -1;
                  continue;
                }
                return d2;
              }
              if (k === 1)
                return ta(d2[0], b2, g);
            }
          }
          return ma(d2, b2, g, f);
        };
        function sa(a2, b2, c2, d2, e, f, g, h) {
          let k = [], m = h ? a2.h : a2.map;
          a2.s || (m = ua(m, g, h, a2.l));
          if (m) {
            let n = 0;
            const w = Math.min(m.length, h ? a2.A : a2.D);
            for (let q = 0, r = 0, l, p; q < w; q++)
              if (l = m[q]) {
                if (a2.s && (l = ua(l, g, h, a2.l)), e && l && f && (p = l.length, p <= e ? (e -= p, l = null) : (l = l.slice(e), e = 0)), l && (k[n++] = l, f && (r += l.length, r >= d2)))
                  break;
              }
            if (n) {
              if (f)
                return ta(k, d2, 0);
              b2[b2.length] = k;
              return;
            }
          }
          return !c2 && k;
        }
        function ta(a2, b2, c2) {
          a2 = a2.length === 1 ? a2[0] : [].concat.apply([], a2);
          return c2 || a2.length > b2 ? a2.slice(c2, c2 + b2) : a2;
        }
        function ua(a2, b2, c2, d2) {
          c2 ? (d2 = d2 && b2 > c2, a2 = (a2 = a2[d2 ? b2 : c2]) && a2[d2 ? c2 : b2]) : a2 = a2[b2];
          return a2;
        }
        t.contain = function(a2) {
          return !!this.register[a2];
        };
        t.update = function(a2, b2) {
          return this.remove(a2).add(a2, b2);
        };
        t.remove = function(a2, b2) {
          const c2 = this.register[a2];
          if (c2) {
            if (this.m)
              for (let d2 = 0, e; d2 < c2.length; d2++)
                e = c2[d2], e.splice(e.indexOf(a2), 1);
            else
              N(this.map, a2, this.D, this.s), this.depth && N(this.h, a2, this.A, this.s);
            b2 || delete this.register[a2];
            if (this.cache) {
              b2 = this.cache;
              for (let d2 = 0, e, f; d2 < b2.h.length; d2++)
                f = b2.h[d2], e = b2.cache[f], e.indexOf(a2) !== -1 && (b2.h.splice(d2--, 1), delete b2.cache[f]);
            }
          }
          return this;
        };
        function N(a2, b2, c2, d2, e) {
          let f = 0;
          if (a2.constructor === Array) {
            if (e)
              b2 = a2.indexOf(b2), b2 !== -1 ? 1 < a2.length && (a2.splice(b2, 1), f++) : f++;
            else {
              e = Math.min(a2.length, c2);
              for (let g = 0, h; g < e; g++)
                if (h = a2[g])
                  f = N(h, b2, c2, d2, e), d2 || f || delete a2[g];
            }
          } else
            for (let g in a2)
              (f = N(a2[g], b2, c2, d2, e)) || delete a2[g];
          return f;
        }
        t.searchCache = oa;
        t.export = function(a2, b2, c2, d2, e) {
          let f, g;
          switch (e || (e = 0)) {
            case 0:
              f = "reg";
              if (this.m) {
                g = v();
                for (let h in this.register)
                  g[h] = 1;
              } else
                g = this.register;
              break;
            case 1:
              f = "cfg";
              g = {
                doc: 0,
                opt: this.s ? 1 : 0
              };
              break;
            case 2:
              f = "map";
              g = this.map;
              break;
            case 3:
              f = "ctx";
              g = this.h;
              break;
            default:
              return;
          }
          ra(a2, b2 || this, c2 ? c2 + "." + f : f, d2, e, g);
          return true;
        };
        t.import = function(a2, b2) {
          if (b2)
            switch (x(b2) && (b2 = JSON.parse(b2)), a2) {
              case "cfg":
                this.s = !!b2.opt;
                break;
              case "reg":
                this.m = false;
                this.register = b2;
                break;
              case "map":
                this.map = b2;
                break;
              case "ctx":
                this.h = b2;
            }
        };
        la(K.prototype);
        function va(a2) {
          a2 = a2.data;
          var b2 = self._index;
          const c2 = a2.args;
          var d2 = a2.task;
          switch (d2) {
            case "init":
              d2 = a2.options || {};
              a2 = a2.factory;
              b2 = d2.encode;
              d2.cache = false;
              b2 && b2.indexOf("function") === 0 && (d2.encode = Function("return " + b2)());
              a2 ? (Function("return " + a2)()(self), self._index = new self.FlexSearch.Index(d2), delete self.FlexSearch) : self._index = new K(d2);
              break;
            default:
              a2 = a2.id, b2 = b2[d2].apply(b2, c2), postMessage(d2 === "search" ? {
                id: a2,
                msg: b2
              } : {
                id: a2
              });
          }
        }
        ;
        let wa = 0;
        function O(a2) {
          if (!(this instanceof O))
            return new O(a2);
          var b2;
          a2 ? D(b2 = a2.encode) && (a2.encode = b2.toString()) : a2 = {};
          (b2 = (self || window)._factory) && (b2 = b2.toString());
          const c2 = self.exports, d2 = this;
          this.o = xa(b2, c2, a2.worker);
          this.h = v();
          if (this.o) {
            if (c2)
              this.o.on("message", function(e) {
                d2.h[e.id](e.msg);
                delete d2.h[e.id];
              });
            else
              this.o.onmessage = function(e) {
                e = e.data;
                d2.h[e.id](e.msg);
                delete d2.h[e.id];
              };
            this.o.postMessage({
              task: "init",
              factory: b2,
              options: a2
            });
          }
        }
        P("add");
        P("append");
        P("search");
        P("update");
        P("remove");
        function P(a2) {
          O.prototype[a2] = O.prototype[a2 + "Async"] = function() {
            const b2 = this, c2 = [].slice.call(arguments);
            var d2 = c2[c2.length - 1];
            let e;
            D(d2) && (e = d2, c2.splice(c2.length - 1, 1));
            d2 = new Promise(function(f) {
              setTimeout(function() {
                b2.h[++wa] = f;
                b2.o.postMessage({
                  task: a2,
                  id: wa,
                  args: c2
                });
              });
            });
            return e ? (d2.then(e), this) : d2;
          };
        }
        function xa(a, b, c) {
          let d;
          try {
            d = b ? eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")') : a ? new Worker(URL.createObjectURL(new Blob(["onmessage=" + va.toString()], {
              type: "text/javascript"
            }))) : new Worker(x(c) ? c : "worker/worker.js", {
              type: "module"
            });
          } catch (e) {
          }
          return d;
        }
        ;
        function Q(a2) {
          if (!(this instanceof Q))
            return new Q(a2);
          var b2 = a2.document || a2.doc || a2, c2;
          this.K = [];
          this.h = [];
          this.A = [];
          this.register = v();
          this.key = (c2 = b2.key || b2.id) && S(c2, this.A) || "id";
          this.m = u(a2.fastupdate);
          this.C = (c2 = b2.store) && c2 !== true && [];
          this.store = c2 && v();
          this.I = (c2 = b2.tag) && S(c2, this.A);
          this.l = c2 && v();
          this.cache = (c2 = a2.cache) && new J(c2);
          a2.cache = false;
          this.o = a2.worker;
          this.async = false;
          c2 = v();
          let d2 = b2.index || b2.field || b2;
          x(d2) && (d2 = [d2]);
          for (let e = 0, f, g; e < d2.length; e++)
            f = d2[e], x(f) || (g = f, f = f.field), g = C(g) ? Object.assign({}, a2, g) : a2, this.o && (c2[f] = new O(g), c2[f].o || (this.o = false)), this.o || (c2[f] = new K(g, this.register)), this.K[e] = S(f, this.A), this.h[e] = f;
          if (this.C)
            for (a2 = b2.store, x(a2) && (a2 = [a2]), b2 = 0; b2 < a2.length; b2++)
              this.C[b2] = S(a2[b2], this.A);
          this.index = c2;
        }
        function S(a2, b2) {
          const c2 = a2.split(":");
          let d2 = 0;
          for (let e = 0; e < c2.length; e++)
            a2 = c2[e], 0 <= a2.indexOf("[]") && (a2 = a2.substring(0, a2.length - 2)) && (b2[d2] = true), a2 && (c2[d2++] = a2);
          d2 < c2.length && (c2.length = d2);
          return 1 < d2 ? c2 : c2[0];
        }
        function T(a2, b2) {
          if (x(b2))
            a2 = a2[b2];
          else
            for (let c2 = 0; a2 && c2 < b2.length; c2++)
              a2 = a2[b2[c2]];
          return a2;
        }
        function U(a2, b2, c2, d2, e) {
          a2 = a2[e];
          if (d2 === c2.length - 1)
            b2[e] = a2;
          else if (a2)
            if (a2.constructor === Array)
              for (b2 = b2[e] = Array(a2.length), e = 0; e < a2.length; e++)
                U(a2, b2, c2, d2, e);
            else
              b2 = b2[e] || (b2[e] = v()), e = c2[++d2], U(a2, b2, c2, d2, e);
        }
        function V(a2, b2, c2, d2, e, f, g, h) {
          if (a2 = a2[g])
            if (d2 === b2.length - 1) {
              if (a2.constructor === Array) {
                if (c2[d2]) {
                  for (b2 = 0; b2 < a2.length; b2++)
                    e.add(f, a2[b2], true, true);
                  return;
                }
                a2 = a2.join(" ");
              }
              e.add(f, a2, h, true);
            } else if (a2.constructor === Array)
              for (g = 0; g < a2.length; g++)
                V(a2, b2, c2, d2, e, f, g, h);
            else
              g = b2[++d2], V(a2, b2, c2, d2, e, f, g, h);
        }
        t = Q.prototype;
        t.add = function(a2, b2, c2) {
          C(a2) && (b2 = a2, a2 = T(b2, this.key));
          if (b2 && (a2 || a2 === 0)) {
            if (!c2 && this.register[a2])
              return this.update(a2, b2);
            for (let d2 = 0, e, f; d2 < this.h.length; d2++)
              f = this.h[d2], e = this.K[d2], x(e) && (e = [e]), V(b2, e, this.A, 0, this.index[f], a2, e[0], c2);
            if (this.I) {
              let d2 = T(b2, this.I), e = v();
              x(d2) && (d2 = [d2]);
              for (let f = 0, g, h; f < d2.length; f++)
                if (g = d2[f], !e[g] && (e[g] = 1, h = this.l[g] || (this.l[g] = []), !c2 || h.indexOf(a2) === -1)) {
                  if (h[h.length] = a2, this.m) {
                    const k = this.register[a2] || (this.register[a2] = []);
                    k[k.length] = h;
                  }
                }
            }
            if (this.store && (!c2 || !this.store[a2])) {
              let d2;
              if (this.C) {
                d2 = v();
                for (let e = 0, f; e < this.C.length; e++)
                  f = this.C[e], x(f) ? d2[f] = b2[f] : U(b2, d2, f, 0, f[0]);
              }
              this.store[a2] = d2 || b2;
            }
          }
          return this;
        };
        t.append = function(a2, b2) {
          return this.add(a2, b2, true);
        };
        t.update = function(a2, b2) {
          return this.remove(a2).add(a2, b2);
        };
        t.remove = function(a2) {
          C(a2) && (a2 = T(a2, this.key));
          if (this.register[a2]) {
            for (var b2 = 0; b2 < this.h.length && (this.index[this.h[b2]].remove(a2, !this.o), !this.m); b2++)
              ;
            if (this.I && !this.m)
              for (let c2 in this.l) {
                b2 = this.l[c2];
                const d2 = b2.indexOf(a2);
                d2 !== -1 && (1 < b2.length ? b2.splice(d2, 1) : delete this.l[c2]);
              }
            this.store && delete this.store[a2];
            delete this.register[a2];
          }
          return this;
        };
        t.search = function(a2, b2, c2, d2) {
          c2 || (!b2 && C(a2) ? (c2 = a2, a2 = c2.query) : C(b2) && (c2 = b2, b2 = 0));
          let e = [], f = [], g, h, k, m, n, w, q = 0;
          if (c2)
            if (c2.constructor === Array)
              k = c2, c2 = null;
            else {
              k = (g = c2.pluck) || c2.index || c2.field;
              m = c2.tag;
              h = this.store && c2.enrich;
              n = c2.bool === "and";
              b2 = c2.limit || 100;
              w = c2.offset || 0;
              if (m && (x(m) && (m = [m]), !a2)) {
                for (let l = 0, p; l < m.length; l++)
                  if (p = ya.call(this, m[l], b2, w, h))
                    e[e.length] = p, q++;
                return q ? e : [];
              }
              x(k) && (k = [k]);
            }
          k || (k = this.h);
          n = n && (1 < k.length || m && 1 < m.length);
          const r = !d2 && (this.o || this.async) && [];
          for (let l = 0, p, z, B; l < k.length; l++) {
            let A;
            z = k[l];
            x(z) || (A = z, z = z.field);
            if (r)
              r[l] = this.index[z].searchAsync(a2, b2, A || c2);
            else {
              d2 ? p = d2[l] : p = this.index[z].search(a2, b2, A || c2);
              B = p && p.length;
              if (m && B) {
                const y = [];
                let H = 0;
                n && (y[0] = [p]);
                for (let X = 0, pa, R; X < m.length; X++)
                  if (pa = m[X], B = (R = this.l[pa]) && R.length)
                    H++, y[y.length] = n ? [R] : R;
                H && (p = n ? ma(y, b2 || 100, w || 0) : na(p, y), B = p.length);
              }
              if (B)
                f[q] = z, e[q++] = p;
              else if (n)
                return [];
            }
          }
          if (r) {
            const l = this;
            return new Promise(function(p) {
              Promise.all(r).then(function(z) {
                p(l.search(a2, b2, c2, z));
              });
            });
          }
          if (!q)
            return [];
          if (g && (!h || !this.store))
            return e[0];
          for (let l = 0, p; l < f.length; l++) {
            p = e[l];
            p.length && h && (p = za.call(this, p));
            if (g)
              return p;
            e[l] = {
              field: f[l],
              result: p
            };
          }
          return e;
        };
        function ya(a2, b2, c2, d2) {
          let e = this.l[a2], f = e && e.length - c2;
          if (f && 0 < f) {
            if (f > b2 || c2)
              e = e.slice(c2, c2 + b2);
            d2 && (e = za.call(this, e));
            return {
              tag: a2,
              result: e
            };
          }
        }
        function za(a2) {
          const b2 = Array(a2.length);
          for (let c2 = 0, d2; c2 < a2.length; c2++)
            d2 = a2[c2], b2[c2] = {
              id: d2,
              doc: this.store[d2]
            };
          return b2;
        }
        t.contain = function(a2) {
          return !!this.register[a2];
        };
        t.get = function(a2) {
          return this.store[a2];
        };
        t.set = function(a2, b2) {
          this.store[a2] = b2;
          return this;
        };
        t.searchCache = oa;
        t.export = function(a2, b2, c2, d2, e) {
          e || (e = 0);
          d2 || (d2 = 0);
          if (d2 < this.h.length) {
            const f = this.h[d2], g = this.index[f];
            b2 = this;
            setTimeout(function() {
              g.export(a2, b2, e ? f.replace(":", "-") : "", d2, e++) || (d2++, e = 1, b2.export(a2, b2, f, d2, e));
            });
          } else {
            let f;
            switch (e) {
              case 1:
                c2 = "tag";
                f = this.l;
                break;
              case 2:
                c2 = "store";
                f = this.store;
                break;
              default:
                return;
            }
            ra(a2, this, c2, d2, e, f);
          }
        };
        t.import = function(a2, b2) {
          if (b2)
            switch (x(b2) && (b2 = JSON.parse(b2)), a2) {
              case "tag":
                this.l = b2;
                break;
              case "reg":
                this.m = false;
                this.register = b2;
                for (let d2 = 0, e; d2 < this.h.length; d2++)
                  e = this.index[this.h[d2]], e.register = b2, e.m = false;
                break;
              case "store":
                this.store = b2;
                break;
              default:
                a2 = a2.split(".");
                const c2 = a2[0];
                a2 = a2[1];
                c2 && a2 && this.index[c2].import(a2, b2);
            }
        };
        la(Q.prototype);
        var Ba = {
          encode: Aa,
          F: false,
          G: ""
        };
        const Ca = [F("[\xE0\xE1\xE2\xE3\xE4\xE5]"), "a", F("[\xE8\xE9\xEA\xEB]"), "e", F("[\xEC\xED\xEE\xEF]"), "i", F("[\xF2\xF3\xF4\xF5\xF6\u0151]"), "o", F("[\xF9\xFA\xFB\xFC\u0171]"), "u", F("[\xFD\u0177\xFF]"), "y", F("\xF1"), "n", F("[\xE7c]"), "k", F("\xDF"), "s", F(" & "), " and "];
        function Aa(a2) {
          var b2 = a2;
          b2.normalize && (b2 = b2.normalize("NFD").replace(ea, ""));
          return ca.call(this, b2.toLowerCase(), !a2.normalize && Ca);
        }
        ;
        var Ea = {
          encode: Da,
          F: false,
          G: "strict"
        };
        const Fa = /[^a-z0-9]+/, Ga = {
          b: "p",
          v: "f",
          w: "f",
          z: "s",
          x: "s",
          "\xDF": "s",
          d: "t",
          n: "m",
          c: "k",
          g: "k",
          j: "k",
          q: "k",
          i: "e",
          y: "e",
          u: "o"
        };
        function Da(a2) {
          a2 = Aa.call(this, a2).join(" ");
          const b2 = [];
          if (a2) {
            const c2 = a2.split(Fa), d2 = c2.length;
            for (let e = 0, f, g = 0; e < d2; e++)
              if ((a2 = c2[e]) && (!this.filter || !this.filter[a2])) {
                f = a2[0];
                let h = Ga[f] || f, k = h;
                for (let m = 1; m < a2.length; m++) {
                  f = a2[m];
                  const n = Ga[f] || f;
                  n && n !== k && (h += n, k = n);
                }
                b2[g++] = h;
              }
          }
          return b2;
        }
        ;
        var Ia = {
          encode: Ha,
          F: false,
          G: ""
        };
        const Ja = [F("ae"), "a", F("oe"), "o", F("sh"), "s", F("th"), "t", F("ph"), "f", F("pf"), "f", F("(?![aeo])h(?![aeo])"), "", F("(?!^[aeo])h(?!^[aeo])"), ""];
        function Ha(a2, b2) {
          a2 && (a2 = Da.call(this, a2).join(" "), 2 < a2.length && (a2 = E(a2, Ja)), b2 || (1 < a2.length && (a2 = ha(a2)), a2 && (a2 = a2.split(" "))));
          return a2;
        }
        ;
        var La = {
          encode: Ka,
          F: false,
          G: ""
        };
        const Ma = F("(?!\\b)[aeo]");
        function Ka(a2) {
          a2 && (a2 = Ha.call(this, a2, true), 1 < a2.length && (a2 = a2.replace(Ma, "")), 1 < a2.length && (a2 = ha(a2)), a2 && (a2 = a2.split(" ")));
          return a2;
        }
        ;
        G["latin:default"] = ja;
        G["latin:simple"] = Ba;
        G["latin:balance"] = Ea;
        G["latin:advanced"] = Ia;
        G["latin:extra"] = La;
        const W = self;
        let Y;
        const Z = {
          Index: K,
          Document: Q,
          Worker: O,
          registerCharset: function(a2, b2) {
            G[a2] = b2;
          },
          registerLanguage: function(a2, b2) {
            ka[a2] = b2;
          }
        };
        (Y = W.define) && Y.amd ? Y([], function() {
          return Z;
        }) : W.exports ? W.exports = Z : W.FlexSearch = Z;
      })(exports);
    }
  });

  // node_modules/gun/lib/radix.js
  var require_radix = __commonJS({
    "node_modules/gun/lib/radix.js"(exports2, module2) {
      (function() {
        function Radix() {
          var radix = function(key, val, t2) {
            radix.unit = 0;
            if (!t2 && u2 !== val) {
              radix.last = "" + key < radix.last ? radix.last : "" + key;
              delete (radix.$ || {})[_];
            }
            t2 = t2 || radix.$ || (radix.$ = {});
            if (!key && Object.keys(t2).length) {
              return t2;
            }
            key = "" + key;
            var i = 0, l = key.length - 1, k = key[i], at, tmp;
            while (!(at = t2[k]) && i < l) {
              k += key[++i];
            }
            if (!at) {
              if (!each(t2, function(r, s) {
                var ii = 0, kk = "";
                if ((s || "").length) {
                  while (s[ii] == key[ii]) {
                    kk += s[ii++];
                  }
                }
                if (kk) {
                  if (u2 === val) {
                    if (ii <= l) {
                      return;
                    }
                    (tmp || (tmp = {}))[s.slice(ii)] = r;
                    return r;
                  }
                  var __ = {};
                  __[s.slice(ii)] = r;
                  ii = key.slice(ii);
                  ii === "" ? __[""] = val : (__[ii] = {})[""] = val;
                  t2[kk] = __;
                  if (Radix.debug && "" + kk === "undefined") {
                    console.log(0, kk);
                    debugger;
                  }
                  delete t2[s];
                  return true;
                }
              })) {
                if (u2 === val) {
                  return;
                }
                (t2[k] || (t2[k] = {}))[""] = val;
                if (Radix.debug && "" + k === "undefined") {
                  console.log(1, k);
                  debugger;
                }
              }
              if (u2 === val) {
                return tmp;
              }
            } else if (i == l) {
              if (u2 === val) {
                return u2 === (tmp = at[""]) ? at : (radix.unit = 1) && tmp;
              }
              at[""] = val;
            } else {
              if (u2 !== val) {
                delete at[_];
              }
              return radix(key.slice(++i), val, at || (at = {}));
            }
          };
          return radix;
        }
        ;
        Radix.map = function rap(radix, cb, opt, pre) {
          pre = pre || [];
          var t2 = typeof radix == "function" ? radix.$ || {} : radix;
          if (!t2) {
            return;
          }
          if (typeof t2 == "string") {
            if (Radix.debug) {
              throw ["BUG:", radix, cb, opt, pre];
            }
            return;
          }
          var keys = (t2[_] || no).sort || (t2[_] = function $() {
            $.sort = Object.keys(t2).sort();
            return $;
          }()).sort, rev;
          opt = opt === true ? {
            branch: true
          } : opt || {};
          if (rev = opt.reverse) {
            keys = keys.slice(0).reverse();
          }
          var start = opt.start, end = opt.end, END = "\uFFFF";
          var i = 0, l = keys.length;
          for (; i < l; i++) {
            var key = keys[i], tree = t2[key], tmp, p, pt;
            if (!tree || key === "" || _ === key) {
              continue;
            }
            p = pre.slice(0);
            p.push(key);
            pt = p.join("");
            if (u2 !== start && pt < (start || "").slice(0, pt.length)) {
              continue;
            }
            if (u2 !== end && (end || END) < pt) {
              continue;
            }
            if (rev) {
              tmp = rap(tree, cb, opt, p);
              if (u2 !== tmp) {
                return tmp;
              }
            }
            if (u2 !== (tmp = tree[""])) {
              var yes = 1;
              if (u2 !== start && pt < (start || "")) {
                yes = 0;
              }
              if (u2 !== end && pt > (end || END)) {
                yes = 0;
              }
              if (yes) {
                tmp = cb(tmp, pt, key, pre);
                if (u2 !== tmp) {
                  return tmp;
                }
              }
            } else if (opt.branch) {
              tmp = cb(u2, pt, key, pre);
              if (u2 !== tmp) {
                return tmp;
              }
            }
            pre = p;
            if (!rev) {
              tmp = rap(tree, cb, opt, pre);
              if (u2 !== tmp) {
                return tmp;
              }
            }
            pre.pop();
          }
        };
        if (typeof window !== "undefined") {
          window.Radix = Radix;
        } else {
          try {
            module2.exports = Radix;
          } catch (e) {
          }
        }
        var each = Radix.object = function(o, f, r) {
          for (var k in o) {
            if (!o.hasOwnProperty(k)) {
              continue;
            }
            if ((r = f(o[k], k)) !== u2) {
              return r;
            }
          }
        }, no = {}, u2;
        var _ = String.fromCharCode(24);
      })();
    }
  });

  // node_modules/gun/lib/yson.js
  var require_yson = __commonJS({
    "node_modules/gun/lib/yson.js"(exports2, module2) {
      (function() {
        var yson = {}, u2, sI = setTimeout.turn || typeof setImmediate != "" + u2 && setImmediate || setTimeout;
        yson.parseAsync = function(text, done, revive, M2) {
          if (typeof text != "string") {
            try {
              done(u2, JSON.parse(text));
            } catch (e) {
              done(e);
            }
            return;
          }
          var ctx = {
            i: 0,
            text,
            done,
            l: text.length,
            up: []
          };
          M2 = M2 || 1024 * 32;
          parse();
          function parse() {
            var s = ctx.text;
            var i = ctx.i, l = ctx.l, j = 0;
            var w = ctx.w, b2, tmp;
            while (j++ < M2) {
              var c2 = s[i++];
              if (i > l) {
                ctx.end = true;
                break;
              }
              if (w) {
                i = s.indexOf('"', i - 1);
                c2 = s[i];
                tmp = s[i - 1] == "\\";
                b2 = b2 || tmp;
                if (c2 == '"' && !tmp) {
                  w = u2;
                  tmp = ctx.s;
                  if (ctx.a) {
                    tmp = s.slice(ctx.sl, i);
                    if (b2 || 1 + tmp.indexOf("\\u")) {
                      tmp = JSON.parse('"' + tmp + '"');
                    }
                    if (ctx.at instanceof Array) {
                      ctx.at.push(ctx.s = tmp);
                    } else {
                      if (!ctx.at) {
                        ctx.end = j = M2;
                        tmp = u2;
                      }
                      (ctx.at || {})[ctx.s] = ctx.s = tmp;
                    }
                  } else {
                    ctx.s = s.slice(ctx.sl, i);
                    if (b2 || 1 + ctx.s.indexOf("\\u")) {
                      ctx.s = JSON.parse('"' + ctx.s + '"');
                    }
                  }
                  ctx.a = b2 = u2;
                }
                ++i;
              } else {
                switch (c2) {
                  case '"':
                    ctx.sl = i;
                    w = true;
                    break;
                  case ":":
                    ctx.ai = i;
                    ctx.a = true;
                    break;
                  case ",":
                    if (ctx.a || ctx.at instanceof Array) {
                      if (tmp = s.slice(ctx.ai, i - 1)) {
                        if (u2 !== (tmp = value(tmp))) {
                          if (ctx.at instanceof Array) {
                            ctx.at.push(tmp);
                          } else {
                            ctx.at[ctx.s] = tmp;
                          }
                        }
                      }
                    }
                    ctx.a = u2;
                    if (ctx.at instanceof Array) {
                      ctx.a = true;
                      ctx.ai = i;
                    }
                    break;
                  case "{":
                    ctx.up.push(ctx.at || (ctx.at = {}));
                    if (ctx.at instanceof Array) {
                      ctx.at.push(ctx.at = {});
                    } else if (u2 !== (tmp = ctx.s)) {
                      ctx.at[tmp] = ctx.at = {};
                    }
                    ctx.a = u2;
                    break;
                  case "}":
                    if (ctx.a) {
                      if (tmp = s.slice(ctx.ai, i - 1)) {
                        if (u2 !== (tmp = value(tmp))) {
                          if (ctx.at instanceof Array) {
                            ctx.at.push(tmp);
                          } else {
                            if (!ctx.at) {
                              ctx.end = j = M2;
                              tmp = u2;
                            }
                            (ctx.at || {})[ctx.s] = tmp;
                          }
                        }
                      }
                    }
                    ctx.a = u2;
                    ctx.at = ctx.up.pop();
                    break;
                  case "[":
                    if (u2 !== (tmp = ctx.s)) {
                      ctx.up.push(ctx.at);
                      ctx.at[tmp] = ctx.at = [];
                    } else if (!ctx.at) {
                      ctx.up.push(ctx.at = []);
                    }
                    ctx.a = true;
                    ctx.ai = i;
                    break;
                  case "]":
                    if (ctx.a) {
                      if (tmp = s.slice(ctx.ai, i - 1)) {
                        if (u2 !== (tmp = value(tmp))) {
                          if (ctx.at instanceof Array) {
                            ctx.at.push(tmp);
                          } else {
                            ctx.at[ctx.s] = tmp;
                          }
                        }
                      }
                    }
                    ctx.a = u2;
                    ctx.at = ctx.up.pop();
                    break;
                }
              }
            }
            ctx.s = u2;
            ctx.i = i;
            ctx.w = w;
            if (ctx.end) {
              tmp = ctx.at;
              if (u2 === tmp) {
                try {
                  tmp = JSON.parse(text);
                } catch (e) {
                  return ctx.done(e);
                }
              }
              ctx.done(u2, tmp);
            } else {
              sI(parse);
            }
          }
        };
        function value(s) {
          var n = parseFloat(s);
          if (!isNaN(n)) {
            return n;
          }
          s = s.trim();
          if (s == "true") {
            return true;
          }
          if (s == "false") {
            return false;
          }
          if (s == "null") {
            return null;
          }
        }
        yson.stringifyAsync = function(data, done, replacer, space, ctx) {
          ctx = ctx || {};
          ctx.text = ctx.text || "";
          ctx.up = [ctx.at = {
            d: data
          }];
          ctx.done = done;
          ctx.i = 0;
          var j = 0;
          ify();
          function ify() {
            var at = ctx.at, data2 = at.d, add = "", tmp;
            if (at.i && at.i - at.j > 0) {
              add += ",";
            }
            if (u2 !== (tmp = at.k)) {
              add += JSON.stringify(tmp) + ":";
            }
            switch (typeof data2) {
              case "boolean":
                add += "" + data2;
                break;
              case "string":
                add += JSON.stringify(data2);
                break;
              case "number":
                add += data2;
                break;
              case "object":
                if (!data2) {
                  add += "null";
                  break;
                }
                if (data2 instanceof Array) {
                  add += "[";
                  at = {
                    i: -1,
                    as: data2,
                    up: at,
                    j: 0
                  };
                  at.l = data2.length;
                  ctx.up.push(ctx.at = at);
                  break;
                }
                if (typeof (data2 || "").toJSON != "function") {
                  add += "{";
                  at = {
                    i: -1,
                    ok: Object.keys(data2).sort(),
                    as: data2,
                    up: at,
                    j: 0
                  };
                  at.l = at.ok.length;
                  ctx.up.push(ctx.at = at);
                  break;
                }
                if (tmp = data2.toJSON()) {
                  add += tmp;
                  break;
                }
              case "function":
                if (at.as instanceof Array) {
                  add += "null";
                  break;
                }
              default:
                add = "";
                at.j++;
            }
            ctx.text += add;
            while (1 + at.i >= at.l) {
              ctx.text += at.ok ? "}" : "]";
              at = ctx.at = at.up;
            }
            if (++at.i < at.l) {
              if (tmp = at.ok) {
                at.d = at.as[at.k = tmp[at.i]];
              } else {
                at.d = at.as[at.i];
              }
              if (++j < 9) {
                return ify();
              } else {
                j = 0;
              }
              sI(ify);
              return;
            }
            ctx.done(u2, ctx.text);
          }
        };
        if (typeof window != "" + u2) {
          window.YSON = yson;
        }
        try {
          if (typeof module2 != "" + u2) {
            module2.exports = yson;
          }
        } catch (e) {
        }
        if (typeof JSON != "" + u2) {
          JSON.parseAsync = yson.parseAsync;
          JSON.stringifyAsync = yson.stringifyAsync;
        }
      })();
    }
  });

  // node_modules/gun/lib/radmigtmp.js
  var require_radmigtmp = __commonJS({
    "node_modules/gun/lib/radmigtmp.js"(exports2, module2) {
      module2.exports = function(r) {
        var Radix = require_radix();
        r.find("a", function() {
          var l = [];
          Radix.map(r.list, function(v3, f2) {
            if (!(f2.indexOf("%1B") + 1)) {
              return;
            }
            if (!v3) {
              return;
            }
            l.push([f2, v3]);
          });
          if (l.length) {
            console.log("\n! ! ! WARNING ! ! !\nRAD v0.2020.x has detected OLD v0.2019.x data & automatically migrating. Automatic migration will be turned OFF in future versions! If you are just developing/testing, we recommend you reset your data. Please contact us if you have any concerns.\nThis message should only log once.");
          }
          var f, v2;
          l.forEach(function(a2) {
            f = a2[0];
            v2 = a2[1];
            r.list(decodeURIComponent(f), v2);
            r.list(f, 0);
          });
          if (!f) {
            return;
          }
          r.find.bad(f);
        });
      };
    }
  });

  // node_modules/gun/lib/radisk.js
  var require_radisk = __commonJS({
    "node_modules/gun/lib/radisk.js"(exports2, module2) {
      (function() {
        function Radisk(opt) {
          opt = opt || {};
          opt.log = opt.log || console.log;
          opt.file = String(opt.file || "radata");
          var has = (Radisk.has || (Radisk.has = {}))[opt.file];
          if (has) {
            return has;
          }
          opt.max = opt.max || (opt.memory ? opt.memory * 999 * 999 : 3e8) * 0.3;
          opt.until = opt.until || opt.wait || 250;
          opt.batch = opt.batch || 10 * 1e3;
          opt.chunk = opt.chunk || 1024 * 1024 * 1;
          opt.code = opt.code || {};
          opt.code.from = opt.code.from || "!";
          opt.jsonify = true;
          function ename(t2) {
            return encodeURIComponent(t2).replace(/\*/g, "%2A");
          }
          function atomic(v2) {
            return u2 !== v2 && (!v2 || typeof v2 != "object");
          }
          var timediate = "" + u2 === typeof setImmediate ? setTimeout : setImmediate;
          var puff = setTimeout.turn || timediate, u2;
          var map = Radix.object;
          var ST = 0;
          if (!opt.store) {
            return opt.log("ERROR: Radisk needs `opt.store` interface with `{get: fn, put: fn (, list: fn)}`!");
          }
          if (!opt.store.put) {
            return opt.log("ERROR: Radisk needs `store.put` interface with `(file, data, cb)`!");
          }
          if (!opt.store.get) {
            return opt.log("ERROR: Radisk needs `store.get` interface with `(file, cb)`!");
          }
          if (!opt.store.list) {
          }
          if ("" + u2 != typeof __require) {
            require_yson();
          }
          var parse = JSON.parseAsync || function(t2, cb, r2) {
            var u3;
            try {
              cb(u3, JSON.parse(t2, r2));
            } catch (e) {
              cb(e);
            }
          };
          var json = JSON.stringifyAsync || function(v2, cb, r2, s) {
            var u3;
            try {
              cb(u3, JSON.stringify(v2, r2, s));
            } catch (e) {
              cb(e);
            }
          };
          var r = function(key, data, cb, tag, DBG) {
            if (typeof data === "function") {
              var o = cb || {};
              cb = data;
              r.read(key, cb, o, DBG || tag);
              return;
            }
            r.save(key, data, cb, tag, DBG);
          };
          r.save = function(key, data, cb, tag, DBG) {
            var s = {
              key
            }, tags, f, d2, q;
            s.find = function(file) {
              var tmp;
              s.file = file || (file = opt.code.from);
              DBG && (DBG = DBG[file] = DBG[file] || {});
              DBG && (DBG.sf = DBG.sf || +new Date());
              if (tmp = r.disk[file]) {
                s.mix(u2, tmp);
                return;
              }
              r.parse(file, s.mix, u2, DBG);
            };
            s.mix = function(err, disk) {
              DBG && (DBG.sml = +new Date());
              DBG && (DBG.sm = DBG.sm || +new Date());
              if (s.err = err || s.err) {
                cb(err);
                return;
              }
              var file = s.file = (disk || "").file || s.file, tmp;
              if (!disk && file !== opt.code.from) {
                r.find.bad(file);
                r.save(key, data, cb, tag);
                return;
              }
              (disk = r.disk[file] || (r.disk[file] = disk || Radix())).file || (disk.file = file);
              if (opt.compare) {
                data = opt.compare(disk(key), data, key, file);
                if (u2 === data) {
                  cb(err, -1);
                  return;
                }
              }
              (s.disk = disk)(key, data);
              if (tag) {
                (tmp = (tmp = disk.tags || (disk.tags = {}))[tag] || (tmp[tag] = r.tags[tag] || (r.tags[tag] = {})))[file] || (tmp[file] = r.one[tag] || (r.one[tag] = cb));
                cb = null;
              }
              DBG && (DBG.st = DBG.st || +new Date());
              if (disk.Q) {
                cb && disk.Q.push(cb);
                return;
              }
              disk.Q = cb ? [cb] : [];
              disk.to = setTimeout(s.write, opt.until);
            };
            s.write = function() {
              DBG && (DBG.sto = DBG.sto || +new Date());
              var file = f = s.file, disk = d2 = s.disk;
              q = s.q = disk.Q;
              tags = s.tags = disk.tags;
              delete disk.Q;
              delete r.disk[file];
              delete disk.tags;
              r.write(file, disk, s.ack, u2, DBG);
            };
            s.ack = function(err, ok) {
              DBG && (DBG.sa = DBG.sa || +new Date());
              DBG && (DBG.sal = q.length);
              var ack, tmp;
              for (var id in r.tags) {
                if (!r.tags.hasOwnProperty(id)) {
                  continue;
                }
                var tag2 = r.tags[id];
                if ((tmp = r.disk[f]) && (tmp = tmp.tags) && tmp[tag2]) {
                  continue;
                }
                ack = tag2[f];
                delete tag2[f];
                var ne;
                for (var k in tag2) {
                  if (tag2.hasOwnProperty(k)) {
                    ne = true;
                    break;
                  }
                }
                if (ne) {
                  continue;
                }
                delete r.tags[tag2];
                ack && ack(err, ok);
              }
              !q && (q = "");
              var l = q.length, i = 0;
              var S2 = +new Date();
              for (; i < l; i++) {
                (ack = q[i]) && ack(err, ok);
              }
              console.STAT && console.STAT(S2, +new Date() - S2, "rad acks", ename(s.file));
              console.STAT && console.STAT(S2, q.length, "rad acks #", ename(s.file));
            };
            cb || (cb = function(err, ok) {
              if (!err) {
                return;
              }
            });
            r.find(key, s.find);
          };
          r.disk = {};
          r.one = {};
          r.tags = {};
          var RWC = 0;
          r.write = function(file, rad, cb, o, DBG) {
            if (!rad) {
              cb("No radix!");
              return;
            }
            o = typeof o == "object" ? o : {
              force: o
            };
            var f = function Fractal() {
            }, a2, b2;
            f.text = "";
            f.file = file = rad.file || (rad.file = file);
            if (!file) {
              cb("What file?");
              return;
            }
            f.write = function() {
              var text = rad.raw = f.text;
              r.disk[file = rad.file || f.file || file] = rad;
              var S2 = +new Date();
              DBG && (DBG.wd = S2);
              r.find.add(file, function add(err) {
                DBG && (DBG.wa = +new Date());
                if (err) {
                  cb(err);
                  return;
                }
                opt.store.put(ename(file), text, function safe(err2, ok) {
                  DBG && (DBG.wp = +new Date());
                  console.STAT && console.STAT(S2, ST = +new Date() - S2, "wrote disk", JSON.stringify(file), ++RWC, "total all writes.");
                  cb(err2, ok || 1);
                  if (!rad.Q) {
                    delete r.disk[file];
                  }
                });
              });
            };
            f.split = function() {
              var S2 = +new Date();
              DBG && (DBG.wf = S2);
              f.text = "";
              if (!f.count) {
                f.count = 0;
                Radix.map(rad, function count() {
                  f.count++;
                });
              }
              DBG && (DBG.wfc = f.count);
              f.limit = Math.ceil(f.count / 2);
              var SC = f.count;
              f.count = 0;
              DBG && (DBG.wf1 = +new Date());
              f.sub = Radix();
              Radix.map(rad, f.slice, {
                reverse: 1
              });
              DBG && (DBG.wf2 = +new Date());
              r.write(f.end, f.sub, f.both, o);
              DBG && (DBG.wf3 = +new Date());
              f.hub = Radix();
              Radix.map(rad, f.stop);
              DBG && (DBG.wf4 = +new Date());
              r.write(rad.file, f.hub, f.both, o);
              DBG && (DBG.wf5 = +new Date());
              console.STAT && console.STAT(S2, +new Date() - S2, "rad split", ename(rad.file), SC);
              return true;
            };
            f.slice = function(val, key) {
              f.sub(f.end = key, val);
              if (f.limit <= ++f.count) {
                return true;
              }
            };
            f.stop = function(val, key) {
              if (key >= f.end) {
                return true;
              }
              f.hub(key, val);
            };
            f.both = function(err, ok) {
              DBG && (DBG.wfd = +new Date());
              if (b2) {
                cb(err || b2);
                return;
              }
              if (a2) {
                cb(err, ok);
                return;
              }
              a2 = true;
              b2 = err;
            };
            f.each = function(val, key, k, pre) {
              if (u2 !== val) {
                f.count++;
              }
              if (opt.max <= (val || "").length) {
                return cb("Data too big!"), true;
              }
              var enc = Radisk.encode(pre.length) + "#" + Radisk.encode(k) + (u2 === val ? "" : ":" + Radisk.encode(val)) + "\n";
              if (opt.chunk < f.text.length + enc.length && 1 < f.count && !o.force) {
                return f.split();
              }
              f.text += enc;
            };
            if (opt.jsonify) {
              r.write.jsonify(f, rad, cb, o, DBG);
              return;
            }
            if (!Radix.map(rad, f.each, true)) {
              f.write();
            }
          };
          r.write.jsonify = function(f, rad, cb, o, DBG) {
            var raw;
            var S2 = +new Date();
            DBG && (DBG.w = S2);
            try {
              raw = JSON.stringify(rad.$);
            } catch (e) {
              cb("Cannot radisk!");
              return;
            }
            DBG && (DBG.ws = +new Date());
            console.STAT && console.STAT(S2, +new Date() - S2, "rad stringified JSON");
            if (opt.chunk < raw.length && !o.force) {
              var c2 = 0;
              Radix.map(rad, function() {
                if (c2++) {
                  return true;
                }
              });
              if (c2 > 1) {
                return f.split();
              }
            }
            f.text = raw;
            f.write();
          };
          r.range = function(tree, o) {
            if (!tree || !o) {
              return;
            }
            if (u2 === o.start && u2 === o.end) {
              return tree;
            }
            if (atomic(tree)) {
              return tree;
            }
            var sub = Radix();
            Radix.map(tree, function(v2, k) {
              sub(k, v2);
            }, o);
            return sub("");
          };
          (function() {
            r.read = function(key, cb, o, DBG) {
              o = o || {};
              var g = {
                key
              };
              g.find = function(file) {
                var tmp;
                g.file = file || (file = opt.code.from);
                DBG && (DBG = DBG[file] = DBG[file] || {});
                DBG && (DBG.rf = DBG.rf || +new Date());
                if (tmp = r.disk[g.file = file]) {
                  g.check(u2, tmp);
                  return;
                }
                r.parse(file, g.check, u2, DBG);
              };
              g.get = function(err, disk, info) {
                DBG && (DBG.rgl = +new Date());
                DBG && (DBG.rg = DBG.rg || +new Date());
                if (g.err = err || g.err) {
                  cb(err);
                  return;
                }
                var file = g.file = (disk || "").file || g.file;
                if (!disk && file !== opt.code.from) {
                  r.find.bad(file);
                  r.read(key, cb, o);
                  return;
                }
                disk = r.disk[file] || (r.disk[file] = disk);
                if (!disk) {
                  cb(file === opt.code.from ? u2 : "No file!");
                  return;
                }
                disk.file || (disk.file = file);
                var data = r.range(disk(key), o);
                DBG && (DBG.rr = +new Date());
                o.unit = disk.unit;
                o.chunks = (o.chunks || 0) + 1;
                o.parsed = (o.parsed || 0) + ((info || "").parsed || o.chunks * opt.chunk);
                o.more = 1;
                o.next = u2;
                Radix.map(r.list, function next2(v2, f) {
                  if (!v2 || file === f) {
                    return;
                  }
                  o.next = f;
                  return 1;
                }, o.reverse ? {
                  reverse: 1,
                  end: file
                } : {
                  start: file
                });
                DBG && (DBG.rl = +new Date());
                if (!o.next) {
                  o.more = 0;
                }
                if (o.next) {
                  if (!o.reverse && (key < o.next && o.next.indexOf(key) != 0 || u2 !== o.end && (o.end || "\uFFFF") < o.next)) {
                    o.more = 0;
                  }
                  if (o.reverse && (key > o.next && key.indexOf(o.next) != 0 || u2 !== o.start && (o.start || "") > o.next && file <= o.start)) {
                    o.more = 0;
                  }
                }
                if (!o.more) {
                  cb(g.err, data, o);
                  return;
                }
                if (data) {
                  cb(g.err, data, o);
                }
                if (o.parsed >= o.limit) {
                  return;
                }
                var S2 = +new Date();
                DBG && (DBG.rm = S2);
                var next = o.next;
                timediate(function() {
                  console.STAT && console.STAT(S2, +new Date() - S2, "rad more");
                  r.parse(next, g.check);
                }, 0);
              };
              g.check = function(err, disk, info) {
                g.get(err, disk, info);
                if (!disk || disk.check) {
                  return;
                }
                disk.check = 1;
                var S2 = +new Date();
                (info || (info = {})).file || (info.file = g.file);
                Radix.map(disk, function(val, key2) {
                  r.find(key2, function(file) {
                    if ((file || (file = opt.code.from)) === info.file) {
                      return;
                    }
                    var id = ("" + Math.random()).slice(-3);
                    puff(function() {
                      r.save(key2, val, function ack(err2, ok) {
                        if (err2) {
                          r.save(key2, val, ack);
                          return;
                        }
                        console.STAT && console.STAT("MISLOCATED DATA CORRECTED", id, ename(key2), ename(info.file), ename(file));
                      });
                    }, 0);
                  });
                });
                console.STAT && console.STAT(S2, +new Date() - S2, "rad check");
              };
              r.find(key || (o.reverse ? o.end || "" : o.start || ""), g.find);
            };
            function rev(a2, b2) {
              return b2;
            }
            var revo = {
              reverse: true
            };
          })();
          ;
          (function() {
            var RPC = 0;
            var Q2 = {}, s = String.fromCharCode(31);
            r.parse = function(file, cb, raw, DBG) {
              var q;
              if (!file) {
                return cb();
              }
              if (q = Q2[file]) {
                q.push(cb);
                return;
              }
              q = Q2[file] = [cb];
              var p = function Parse() {
              }, info = {
                file
              };
              (p.disk = Radix()).file = file;
              p.read = function(err, data) {
                var tmp;
                DBG && (DBG.rpg = +new Date());
                console.STAT && console.STAT(S2, +new Date() - S2, "read disk", JSON.stringify(file), ++RPC, "total all parses.");
                if ((p.err = err) || (p.not = !data)) {
                  delete Q2[file];
                  p.map(q, p.ack);
                  return;
                }
                if (typeof data !== "string") {
                  try {
                    if (opt.max <= data.length) {
                      p.err = "Chunk too big!";
                    } else {
                      data = data.toString();
                    }
                  } catch (e) {
                    p.err = e;
                  }
                  if (p.err) {
                    delete Q2[file];
                    p.map(q, p.ack);
                    return;
                  }
                }
                info.parsed = data.length;
                DBG && (DBG.rpl = info.parsed);
                DBG && (DBG.rpa = q.length);
                S2 = +new Date();
                if (!(opt.jsonify || data[0] === "{")) {
                  p.radec(err, data);
                  return;
                }
                parse(data, function(err2, tree) {
                  if (!err2) {
                    delete Q2[file];
                    p.disk.$ = tree;
                    console.STAT && (ST = +new Date() - S2) > 9 && console.STAT(S2, ST, "rad parsed JSON");
                    DBG && (DBG.rpd = +new Date());
                    p.map(q, p.ack);
                    return;
                  }
                  if (data[0] === "{") {
                    delete Q2[file];
                    p.err = tmp || "JSON error!";
                    p.map(q, p.ack);
                    return;
                  }
                  p.radec(err2, data);
                });
              };
              p.map = function() {
                if (!q || !q.length) {
                  return;
                }
                var S3 = +new Date();
                var err = p.err, data = p.not ? u2 : p.disk;
                var i = 0, ack;
                while (i < 9 && (ack = q[i++])) {
                  ack(err, data, info);
                }
                console.STAT && console.STAT(S3, +new Date() - S3, "rad packs", ename(file));
                console.STAT && console.STAT(S3, i, "rad packs #", ename(file));
                if (!(q = q.slice(i)).length) {
                  return;
                }
                puff(p.map, 0);
              };
              p.ack = function(cb2) {
                if (!cb2) {
                  return;
                }
                if (p.err || p.not) {
                  cb2(p.err, u2, info);
                  return;
                }
                cb2(u2, p.disk, info);
              };
              p.radec = function(err, data) {
                delete Q2[file];
                S2 = +new Date();
                var tmp = p.split(data), pre = [], i, k, v2;
                if (!tmp || tmp[1] !== 0) {
                  p.err = "File '" + file + "' does not have root radix! ";
                  p.map(q, p.ack);
                  return;
                }
                while (tmp) {
                  k = v2 = u2;
                  i = tmp[1];
                  tmp = p.split(tmp[2]) || "";
                  if (tmp[0] == "#") {
                    k = tmp[1];
                    pre = pre.slice(0, i);
                    if (i <= pre.length) {
                      pre.push(k);
                    }
                  }
                  tmp = p.split(tmp[2]) || "";
                  if (tmp[0] == "\n") {
                    continue;
                  }
                  if (tmp[0] == "=" || tmp[0] == ":") {
                    v2 = tmp[1];
                  }
                  if (u2 !== k && u2 !== v2) {
                    p.disk(pre.join(""), v2);
                  }
                  tmp = p.split(tmp[2]);
                }
                console.STAT && console.STAT(S2, +new Date() - S2, "parsed RAD");
                p.map(q, p.ack);
              };
              p.split = function(t2) {
                if (!t2) {
                  return;
                }
                var l = [], o = {}, i = -1, a2 = "", b2, c2;
                i = t2.indexOf(s);
                if (!t2[i]) {
                  return;
                }
                a2 = t2.slice(0, i);
                l[0] = a2;
                l[1] = b2 = Radisk.decode(t2.slice(i), o);
                l[2] = t2.slice(i + o.i);
                return l;
              };
              if (r.disk) {
                raw || (raw = (r.disk[file] || "").raw);
              }
              var S2 = +new Date(), SM, SL;
              DBG && (DBG.rp = S2);
              if (raw) {
                return puff(function() {
                  p.read(u2, raw);
                }, 0);
              }
              opt.store.get(ename(file), p.read);
            };
          })();
          ;
          (function() {
            var dir, f = String.fromCharCode(28), Q2;
            r.find = function(key, cb) {
              if (!dir) {
                if (Q2) {
                  Q2.push([key, cb]);
                  return;
                }
                Q2 = [[key, cb]];
                r.parse(f, init);
                return;
              }
              Radix.map(r.list = dir, function(val, key2) {
                if (!val) {
                  return;
                }
                return cb(key2) || true;
              }, {
                reverse: 1,
                end: key
              }) || cb(opt.code.from);
            };
            r.find.add = function(file, cb) {
              var has2 = dir(file);
              if (has2 || file === f) {
                cb(u2, 1);
                return;
              }
              dir(file, 1);
              cb.found = (cb.found || 0) + 1;
              r.write(f, dir, function(err, ok) {
                if (err) {
                  cb(err);
                  return;
                }
                cb.found = (cb.found || 0) - 1;
                if (cb.found !== 0) {
                  return;
                }
                cb(u2, 1);
              }, true);
            };
            r.find.bad = function(file, cb) {
              dir(file, 0);
              r.write(f, dir, cb || noop);
            };
            function init(err, disk) {
              if (err) {
                opt.log("list", err);
                setTimeout(function() {
                  r.parse(f, init);
                }, 1e3);
                return;
              }
              if (disk) {
                drain(disk);
                return;
              }
              dir = dir || disk || Radix();
              if (!opt.store.list) {
                drain(dir);
                return;
              }
              opt.store.list(function(file) {
                if (!file) {
                  drain(dir);
                  return;
                }
                r.find.add(file, noop);
              });
            }
            function drain(rad, tmp) {
              dir = dir || rad;
              dir.file = f;
              tmp = Q2;
              Q2 = null;
              map(tmp, function(arg) {
                r.find(arg[0], arg[1]);
              });
            }
          })();
          try {
            !Gun4.window && require_radmigtmp()(r);
          } catch (e) {
          }
          var noop = function() {
          }, RAD, u2;
          Radisk.has[opt.file] = r;
          return r;
        }
        ;
        (function() {
          var _ = String.fromCharCode(31), u2;
          Radisk.encode = function(d2, o, s) {
            s = s || _;
            var t2 = s, tmp;
            if (typeof d2 == "string") {
              var i = d2.indexOf(s);
              while (i != -1) {
                t2 += s;
                i = d2.indexOf(s, i + 1);
              }
              return t2 + '"' + d2 + s;
            } else if (d2 && d2["#"] && Object.keys(d2).length == 1) {
              return t2 + "#" + tmp + t2;
            } else if (typeof d2 == "number") {
              return t2 + "+" + (d2 || 0) + t2;
            } else if (d2 === null) {
              return t2 + " " + t2;
            } else if (d2 === true) {
              return t2 + "+" + t2;
            } else if (d2 === false) {
              return t2 + "-" + t2;
            }
          };
          Radisk.decode = function(t2, o, s) {
            s = s || _;
            var d2 = "", i = -1, n = 0, c2, p;
            if (s !== t2[0]) {
              return;
            }
            while (s === t2[++i]) {
              ++n;
            }
            p = t2[c2 = n] || true;
            while (--n >= 0) {
              i = t2.indexOf(s, i + 1);
            }
            if (i == -1) {
              i = t2.length;
            }
            d2 = t2.slice(c2 + 1, i);
            if (o) {
              o.i = i + 1;
            }
            if (p === '"') {
              return d2;
            } else if (p === "#") {
              return {
                "#": d2
              };
            } else if (p === "+") {
              if (d2.length === 0) {
                return true;
              }
              return parseFloat(d2);
            } else if (p === " ") {
              return null;
            } else if (p === "-") {
              return false;
            }
          };
        })();
        if (typeof window !== "undefined") {
          var Gun4 = window.Gun;
          var Radix = window.Radix;
          window.Radisk = Radisk;
        } else {
          var Gun4 = require_gun();
          var Radix = require_radix();
          try {
            module2.exports = Radisk;
          } catch (e) {
          }
        }
        Radisk.Radix = Radix;
      })();
    }
  });

  // node_modules/gun/lib/rindexed.js
  var require_rindexed = __commonJS({
    "node_modules/gun/lib/rindexed.js"(exports2, module2) {
      (function() {
        function Store(opt) {
          opt = opt || {};
          opt.file = String(opt.file || "radata");
          var store = Store[opt.file], db = null, u2;
          if (store) {
            console.log("Warning: reusing same IndexedDB store and options as 1st.");
            return Store[opt.file];
          }
          store = Store[opt.file] = function() {
          };
          try {
            opt.indexedDB = opt.indexedDB || Store.indexedDB || indexedDB;
          } catch (e) {
          }
          try {
            if (!opt.indexedDB || location.protocol == "file:") {
              var s = store.d || (store.d = {});
              store.put = function(f, d2, cb) {
                s[f] = d2;
                setTimeout(function() {
                  cb(null, 1);
                }, 250);
              };
              store.get = function(f, cb) {
                setTimeout(function() {
                  cb(null, s[f] || u2);
                }, 5);
              };
              console.log("Warning: No indexedDB exists to persist data to!");
              return store;
            }
          } catch (e) {
          }
          store.start = function() {
            var o = indexedDB.open(opt.file, 1);
            o.onupgradeneeded = function(eve) {
              eve.target.result.createObjectStore(opt.file);
            };
            o.onsuccess = function() {
              db = o.result;
            };
            o.onerror = function(eve) {
              console.log(eve || 1);
            };
          };
          store.start();
          store.put = function(key, data, cb) {
            if (!db) {
              setTimeout(function() {
                store.put(key, data, cb);
              }, 1);
              return;
            }
            var tx = db.transaction([opt.file], "readwrite");
            var obj = tx.objectStore(opt.file);
            var req = obj.put(data, "" + key);
            req.onsuccess = obj.onsuccess = tx.onsuccess = function() {
              cb(null, 1);
            };
            req.onabort = obj.onabort = tx.onabort = function(eve) {
              cb(eve || "put.tx.abort");
            };
            req.onerror = obj.onerror = tx.onerror = function(eve) {
              cb(eve || "put.tx.error");
            };
          };
          store.get = function(key, cb) {
            if (!db) {
              setTimeout(function() {
                store.get(key, cb);
              }, 9);
              return;
            }
            var tx = db.transaction([opt.file], "readonly");
            var obj = tx.objectStore(opt.file);
            var req = obj.get("" + key);
            req.onsuccess = function() {
              cb(null, req.result);
            };
            req.onabort = function(eve) {
              cb(eve || 4);
            };
            req.onerror = function(eve) {
              cb(eve || 5);
            };
          };
          setInterval(function() {
            db && db.close();
            db = null;
            store.start();
          }, 1e3 * 15);
          return store;
        }
        if (typeof window !== "undefined") {
          (Store.window = window).RindexedDB = Store;
          Store.indexedDB = window.indexedDB;
        } else {
          try {
            module2.exports = Store;
          } catch (e) {
          }
        }
        try {
          var Gun4 = Store.window.Gun || require_gun();
          Gun4.on("create", function(root) {
            this.to.next(root);
            root.opt.store = root.opt.store || Store(root.opt);
          });
        } catch (e) {
        }
      })();
    }
  });

  // client.js
  var import_gun = __toModule(require_browser());
  var import_flexsearch = __toModule(require_flexsearch_bundle());
  var import_radix = __toModule(require_radix());
  var import_radisk = __toModule(require_radisk());

  // node_modules/gun/lib/store.js
  var Gun2 = typeof window !== "undefined" ? window.Gun : require_gun();
  Gun2.on("create", function(root) {
    if (Gun2.TESTING) {
      root.opt.file = "radatatest";
    }
    this.to.next(root);
    var opt = root.opt, empty = {}, u2;
    if (opt.rad === false || opt.radisk === false) {
      return;
    }
    if (u2 + "" != typeof process && "" + (process.env || "").RAD === "false") {
      return;
    }
    var Radisk = Gun2.window && Gun2.window.Radisk || require_radisk();
    var Radix = Radisk.Radix;
    var dare = Radisk(opt), esc = String.fromCharCode(27);
    var ST = 0;
    root.on("put", function(msg) {
      this.to.next(msg);
      if ((msg._ || "").rad) {
        return;
      }
      var id = msg["#"], put = msg.put, soul = put["#"], key = put["."], val = put[":"], state = put[">"], tmp;
      var DBG = (msg._ || "").DBG;
      DBG && (DBG.sp = DBG.sp || +new Date());
      var S2 = (msg._ || "").RPS || ((msg._ || "").RPS = +new Date());
      dare(soul + esc + key, {
        ":": val,
        ">": state
      }, function(err, ok) {
        DBG && (DBG.spd = DBG.spd || +new Date());
        console.STAT && console.STAT(S2, +new Date() - S2, "put");
        if (err) {
          root.on("in", {
            "@": id,
            err,
            DBG
          });
          return;
        }
        root.on("in", {
          "@": id,
          ok,
          DBG
        });
      }, false, DBG && (DBG.r = DBG.r || {}));
      DBG && (DBG.sps = DBG.sps || +new Date());
    });
    var count = {}, obj_empty = Object.empty;
    root.on("get", function(msg) {
      this.to.next(msg);
      var ctx = msg._ || "", DBG = ctx.DBG = msg.DBG;
      DBG && (DBG.sg = +new Date());
      var id = msg["#"], get = msg.get, soul = msg.get["#"], has = msg.get["."] || "", o = {}, graph, lex, key, tmp, force;
      if (typeof soul == "string") {
        key = soul;
      } else if (soul) {
        if (u2 !== (tmp = soul["*"])) {
          o.limit = force = 1;
        }
        if (u2 !== soul[">"]) {
          o.start = soul[">"];
        }
        if (u2 !== soul["<"]) {
          o.end = soul["<"];
        }
        key = force ? "" + tmp : tmp || soul["="];
        force = null;
      }
      if (key && !o.limit) {
        if (typeof has == "string") {
          key = key + esc + (o.atom = has);
        } else if (has) {
          if (u2 !== has[">"]) {
            o.start = has[">"];
            o.limit = 1;
          }
          if (u2 !== has["<"]) {
            o.end = has["<"];
            o.limit = 1;
          }
          if (u2 !== (tmp = has["*"])) {
            o.limit = force = 1;
          }
          if (key) {
            key = key + esc + (force ? "" + (tmp || "") : tmp || (o.atom = has["="] || ""));
          }
        }
      }
      if ((tmp = get["%"]) || o.limit) {
        o.limit = tmp <= (o.pack || 1e3 * 100) ? tmp : 1;
      }
      if (has["-"] || (soul || {})["-"] || get["-"]) {
        o.reverse = true;
      }
      if ((tmp = (root.next || "")[soul]) && tmp.put) {
        if (o.atom) {
          tmp = (tmp.next || "")[o.atom];
          if (tmp && tmp.rad) {
            return;
          }
        } else if (tmp && tmp.rad) {
          return;
        }
      }
      var now = Gun2.state();
      var S2 = +new Date(), C2 = 0, SPT = 0;
      DBG && (DBG.sgm = S2);
      dare(key || "", function(err, data, info) {
        DBG && (DBG.sgr = +new Date());
        DBG && (DBG.sgi = info);
        try {
          opt.store.stats.get.time[statg % 50] = +new Date() - S2;
          ++statg;
          opt.store.stats.get.count++;
          if (err) {
            opt.store.stats.get.err = err;
          }
        } catch (e) {
        }
        console.STAT && console.STAT(S2, +new Date() - S2, "got", JSON.stringify(key));
        S2 = +new Date();
        info = info || "";
        var va2, ve;
        if (info.unit && data && u2 !== (va2 = data[":"]) && u2 !== (ve = data[">"])) {
          var tmp2 = key.split(esc), so = tmp2[0], ha2 = tmp2[1];
          (graph = graph || {})[so] = Gun2.state.ify(graph[so], ha2, ve, va2, so);
          root.$.get(so).get(ha2)._.rad = now;
        } else if (data) {
          if (typeof data !== "string") {
            if (o.atom) {
              data = u2;
            } else {
              Radix.map(data, each, o);
            }
          }
          if (!graph && data) {
            each(data, "");
          }
          if (!o.atom && !has & typeof soul == "string" && !o.limit && !o.more) {
            root.$.get(soul)._.rad = now;
          }
        }
        DBG && (DBG.sgp = +new Date());
        if (console.STAT && (ST = +new Date() - S2) > 9) {
          console.STAT(S2, ST, "got prep time");
          console.STAT(S2, C2, "got prep #");
        }
        SPT += ST;
        C2 = 0;
        S2 = +new Date();
        var faith = function() {
        };
        faith.faith = true;
        faith.rad = get;
        root.on("in", {
          "@": id,
          put: graph,
          "%": info.more ? 1 : u2,
          err: err ? err : u2,
          _: faith,
          DBG
        });
        console.STAT && (ST = +new Date() - S2) > 9 && console.STAT(S2, ST, "got emit", Object.keys(graph || {}).length);
        graph = u2;
      }, o, DBG && (DBG.r = DBG.r || {}));
      DBG && (DBG.sgd = +new Date());
      console.STAT && (ST = +new Date() - S2) > 9 && console.STAT(S2, ST, "get call");
      function each(val, has2, a2, b2) {
        C2++;
        if (!val) {
          return;
        }
        has2 = (key + has2).split(esc);
        var soul2 = has2.slice(0, 1)[0];
        has2 = has2.slice(-1)[0];
        if (o.limit && o.limit <= o.count) {
          return true;
        }
        var va2, ve, so = soul2, ha2 = has2;
        if (typeof val != "string") {
          va2 = val[":"];
          ve = val[">"];
          (graph = graph || {})[so] = Gun2.state.ify(graph[so], ha2, ve, va2, so);
          o.count = (o.count || 0) + ((va2 || "").length || 9);
          return;
        }
        o.count = (o.count || 0) + val.length;
        var tmp2 = val.lastIndexOf(">");
        var state = Radisk.decode(val.slice(tmp2 + 1), null, esc);
        val = Radisk.decode(val.slice(0, tmp2), null, esc);
        (graph = graph || {})[soul2] = Gun2.state.ify(graph[soul2], has2, state, val, soul2);
      }
    });
    var val_is = Gun2.valid;
    (opt.store || {}).stats = {
      get: {
        time: {},
        count: 0
      },
      put: {
        time: {},
        count: 0
      }
    };
    var statg = 0, statp = 0;
  });

  // client.js
  var import_rindexed = __toModule(require_rindexed());

  // component.js
  var listeners = new WeakMap();
  function setListeners(props) {
    listeners.get(props.el)?.forEach(({
      trigger,
      listener
    }) => {
      props.el.removeEventListener(trigger, listener);
      listeners.get(props.el).delete(listener);
    });
    Object.entries(props).filter(([k]) => k.startsWith("on_")).forEach(([name, action]) => {
      const trigger = name.slice(3);
      const listener = (event) => action.call(props, props, event);
      props.el.addEventListener(trigger, listener);
      listeners.set(props.el, listeners.get(props.el) ?? new Map());
      listeners.get(props.el).set(action, {
        trigger,
        listener
      });
    });
  }
  function assignRender(props) {
    props.render = props.render ?? ((passedProps = {}) => {
      const inheritedProps = passedProps.parent ? Object.fromEntries(Object.entries(passedProps.parent).filter(([key]) => key.startsWith("_"))) : {};
      const newProps = {
        ...props,
        ...inheritedProps,
        ...passedProps
      };
      if (!passedProps.parent && props.parent?.children?.[props.key]) {
        const inheritedPropsUpdated = Object.fromEntries(Object.entries(passedProps).filter(([key]) => key.startsWith("_")));
        return props.parent.render({
          ...inheritedPropsUpdated,
          children: {
            ...props.parent.children,
            [props.key]: {
              ...props,
              render: (passedProps2 = {}) => render({
                ...newProps,
                ...passedProps2
              }, props)
            }
          }
        }).children[props.key];
      }
      return render(newProps, props);
    });
  }
  function assignElement(props) {
    if (!props.el) {
      const tag = props.tag ?? (props.text ? "span" : "div");
      if (props.parent?.el && props.parent.el.childNodes[props.index]?.tagName?.toLowerCase() === tag) {
        props.el = props.parent.el.childNodes[props.index];
      } else {
        props.el = document.createElement(tag);
      }
    }
  }
  function render(passedProps = {}, prevProps = {}) {
    const props = {
      ...passedProps,
      ...passedProps.init?.({
        ...passedProps
      }, prevProps) ?? {}
    };
    assignRender(props);
    assignElement(props);
    const {
      el,
      text,
      children,
      style,
      onChange,
      atts,
      value,
      parent,
      className
    } = props;
    if (children) {
      props.children = Object.fromEntries(Object.values(children).map((it, index2) => [index2, it.render({
        parent: props,
        key: it.key ?? index2,
        index: index2
      })]));
      if (el) {
        for (let childEl of el.childNodes) {
          if (!Object.values(props.children).some((ch) => ch.el === childEl)) {
            childEl.parentElement.removeChild(childEl);
          }
        }
      }
    }
    if (el) {
      if (atts) {
        Object.entries(atts).forEach(([key, val]) => el.setAttribute(key, val));
      }
      if (value != null)
        el.value = value;
      if (text != null)
        el.textContent = text;
      if (className != null)
        el.className = className;
      if (style)
        Object.entries(style).forEach(([key, val]) => el.style[key] = val);
      setListeners(props);
      if (parent?.el?.parentElement && !parent?.el.contains(el)) {
        parent.el.appendChild(el);
      }
    }
    if (onChange) {
      onChange(props, prevProps);
    }
    return props;
  }
  var Component = (initial) => {
    const props = typeof initial === "function" ? {
      init: initial
    } : initial;
    return {
      render: (passedProps = {}) => render({
        ...props,
        ...passedProps
      }, props),
      reset: (passedProps = {}) => Component({
        ...props,
        ...passedProps
      }),
      ...props
    };
  };

  // ui.js
  var Row = (args) => {
    const props = Array.isArray(args) ? {
      children: args
    } : args;
    return Component({
      style: {
        display: "flex",
        ...props.style ?? {}
      },
      ...props
    });
  };
  var Column = (args) => {
    const props = Array.isArray(args) ? {
      children: args
    } : args;
    return Component({
      ...props,
      style: {
        display: "flex",
        flexDirection: "column",
        ...props.style ?? {}
      }
    });
  };
  var Text = (args) => {
    const props = typeof args === "string" || typeof args === "number" ? {
      text: String(args)
    } : args;
    return Component(props);
  };
  var Input = (args) => {
    const props = typeof args === "string" || typeof args === "number" ? {
      value: String(args)
    } : args;
    return Component({
      tag: "input",
      atts: {
        type: "text",
        autocapitalize: "none"
      },
      ...props
    });
  };
  var Button = (args) => {
    const props = typeof args === "string" || typeof args === "number" ? {
      text: String(args)
    } : args;
    return Component({
      tag: "button",
      ...props
    });
  };

  // client.js
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("/serviceWorker.js").then((res) => console.info("service worker registered")).catch((err) => console.error("service worker not registered", err));
    });
  }
  var gun = (0, import_gun.default)({
    peers: ["http://localhost:3000/gun", "https://santicgunrelay.herokuapp.com/gun"]
  });
  window.gun = gun;
  var terms = {};
  var onInput = async ({
    render: render2
  }, e) => {
    const query = e.target.value;
    const queryTerms = {};
    if (!query) {
      view(Object.values(terms).reverse());
    } else {
      const results = await index.search(query, {
        pluck: "text"
      });
      results.forEach((result) => gun.get(result).once((data) => {
        queryTerms[result] = data;
        view(Object.values(queryTerms));
      }));
    }
    render2({
      _inputVal: e.target.value
    });
  };
  var Searchbar = Row([Input({
    init: ({
      _inputVal
    }) => ({
      value: _inputVal
    }),
    className: "p-1",
    atts: {
      autocomplete: "on",
      inputmode: "search",
      placeholder: "\u{1F50E}\uFE0E search"
    },
    style: {
      flex: 1
    },
    on_input: onInput
  }), Button({
    className: "p-1",
    text: "add term",
    on_click: ({
      _inputVal,
      render: render2
    }) => {
      gun.get("terms").get(_inputVal).put({
        text: _inputVal,
        lang: "eng"
      });
      render2({
        _inputVal: ""
      });
      view(Object.values(terms));
    }
  })]);
  var AddTerm = Row([Input({
    className: "p-1",
    init: ({
      _inputVal
    }) => ({
      value: _inputVal
    }),
    on_input: ({
      render: render2
    }, e) => render2({
      _inputVal: e.target.value
    })
  }), Button({
    className: "p-1",
    text: "add term",
    on_click: ({
      _inputVal,
      render: render2
    }) => {
      gun.get("terms").get(_inputVal).put({
        text: _inputVal,
        lang: "eng"
      });
      render2({
        _inputVal: ""
      });
    }
  })]);
  var TermsList = (terms2 = []) => Column({
    tag: "ul",
    className: "p-1",
    _inputVal: "",
    children: terms2.map((term) => Text({
      tag: "li",
      text: term.text,
      on_dblclick: () => {
        gun.get("terms/" + term.text).put({
          deleted: true
        });
      }
    }))
  });
  function view(terms2) {
    return Column([Searchbar, TermsList(terms2)]).render({
      el: document.querySelector("#root")
    });
  }
  var index = new import_flexsearch.Document({
    tokenize: "full",
    worker: true,
    document: {
      id: "id",
      index: ["text"]
    }
  });
  gun.get("terms").map().on((term) => {
    if (term.deleted) {
      index.remove(term["_"]["#"]);
      delete terms[term["_"]["#"]];
    } else {
      index.add({
        id: term["_"]["#"],
        text: term.text
      });
      terms[term["_"]["#"]] = term;
    }
    view(Object.values(terms).reverse());
  });
  setTimeout(() => console.log("indexed " + Object.keys(terms).length + " terms"), 2e3);
})();
//!opt && console.log("WHAT IS T?", JSON.stringify(t).length);
