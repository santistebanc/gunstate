(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/gun/gun.js
  var require_gun = __commonJS({
    "node_modules/gun/gun.js"(exports, module) {
      (function() {
        function USE(arg, req) {
          return req ? __require(arg) : arg.slice ? USE[R(arg)] : function(mod, path) {
            arg(mod = { exports: {} });
            USE[R(path)] = mod.exports;
          };
          function R(p) {
            return p.split("/").slice(-1).toString().replace(".js", "");
          }
        }
        if (typeof module !== "undefined") {
          var MODULE = module;
        }
        ;
        USE(function(module2) {
          String.random = function(l, c) {
            var s = "";
            l = l || 24;
            c = c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
            while (l-- > 0) {
              s += c.charAt(Math.floor(Math.random() * c.length));
            }
            return s;
          };
          String.match = function(t, o) {
            var tmp, u;
            if (typeof t !== "string") {
              return false;
            }
            if (typeof o == "string") {
              o = { "=": o };
            }
            o = o || {};
            tmp = o["="] || o["*"] || o[">"] || o["<"];
            if (t === tmp) {
              return true;
            }
            if (u !== o["="]) {
              return false;
            }
            tmp = o["*"] || o[">"];
            if (t.slice(0, (tmp || "").length) === tmp) {
              return true;
            }
            if (u !== o["*"]) {
              return false;
            }
            if (u !== o[">"] && u !== o["<"]) {
              return t >= o[">"] && t <= o["<"] ? true : false;
            }
            if (u !== o[">"] && t >= o[">"]) {
              return true;
            }
            if (u !== o["<"] && t <= o["<"]) {
              return true;
            }
            return false;
          };
          String.hash = function(s, c) {
            if (typeof s !== "string") {
              return;
            }
            c = c || 0;
            if (!s.length) {
              return c;
            }
            for (var i = 0, l = s.length, n; i < l; ++i) {
              n = s.charCodeAt(i);
              c = (c << 5) - c + n;
              c |= 0;
            }
            return c;
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
            var u, sT = setTimeout, l = 0, c = 0, sI = typeof setImmediate !== "" + u && setImmediate || sT;
            sT.poll = sT.poll || function(f) {
              if (1 >= +new Date() - l && c++ < 3333) {
                f();
                return;
              }
              sI(function() {
                l = +new Date();
                f();
              }, c = 0);
            };
          })();
          ;
          (function() {
            var sT = setTimeout, t = sT.turn = sT.turn || function(f2) {
              s.push(f2) == 1 && p(T);
            }, s = t.s = [], p = sT.poll, i = 0, f, T = function() {
              if (f = s[i++]) {
                f();
              }
              if (i == s.length || i == 99) {
                s = t.s = s.slice(i);
                i = 0;
              }
              if (s.length) {
                p(T);
              }
            };
          })();
          ;
          (function() {
            var u, sT = setTimeout, T = sT.turn;
            (sT.each = sT.each || function(l, f, e, S) {
              S = S || 9;
              (function t(s, L, r) {
                if (L = (s = (l || []).splice(0, S)).length) {
                  for (var i = 0; i < L; i++) {
                    if (u !== (r = f(s[i]))) {
                      break;
                    }
                  }
                  if (u === r) {
                    T(t);
                    return;
                  }
                }
                e && e(r);
              })();
            })();
          })();
        })(USE, "./shim");
        ;
        USE(function(module2) {
          module2.exports = function onto(tag, arg, as) {
            if (!tag) {
              return { to: onto };
            }
            var u, f = typeof arg == "function", tag = (this.tag || (this.tag = {}))[tag] || f && (this.tag[tag] = { tag, to: onto._ = { next: function(arg2) {
              var tmp;
              if (tmp = this.to) {
                tmp.next(arg2);
              }
            } } });
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
            if ((tag = tag.to) && u !== arg) {
              tag.next(arg);
            }
            return tag;
          };
        })(USE, "./onto");
        ;
        USE(function(module2) {
          USE("./shim");
          module2.exports = function(v) {
            if (v === void 0) {
              return false;
            }
            if (v === null) {
              return true;
            }
            if (v === Infinity) {
              return false;
            }
            if (v !== v) {
              return false;
            }
            if (typeof v == "string" || typeof v == "boolean" || typeof v == "number") {
              return true;
            }
            if (v && typeof (v["#"] || 0) == "string" && Object.empty(v, ["#"])) {
              return v["#"];
            }
            return false;
          };
        })(USE, "./valid");
        ;
        USE(function(module2) {
          USE("./shim");
          function State() {
            var t = +new Date();
            if (last < t) {
              return N = 0, last = t + State.drift;
            }
            return last = t + (N += 1) / D + State.drift;
          }
          State.drift = 0;
          var NI = -Infinity, N = 0, D = 999, last = NI, u;
          State.is = function(n, k, o) {
            var tmp = k && n && n._ && n._[">"] || o;
            if (!tmp) {
              return;
            }
            return typeof (tmp = tmp[k]) == "number" ? tmp : NI;
          };
          State.ify = function(n, k, s, v, soul) {
            (n = n || {})._ = n._ || {};
            if (soul) {
              n._["#"] = soul;
            }
            var tmp = n._[">"] || (n._[">"] = {});
            if (u !== k && k !== "_") {
              if (typeof s == "number") {
                tmp[k] = s;
              }
              if (u !== v) {
                n[k] = v;
              }
            }
            return n;
          };
          module2.exports = State;
        })(USE, "./state");
        ;
        USE(function(module2) {
          USE("./shim");
          function Dup(opt) {
            var dup = { s: {} }, s = dup.s;
            opt = opt || { max: 999, age: 1e3 * 9 };
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
          module2.exports = Dup;
        })(USE, "./dup");
        ;
        USE(function(module2) {
          USE("./onto");
          module2.exports = function ask(cb, as) {
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
              to.next({ err: "Error: No ACK yet.", lack: true });
            }, lack);
            return id;
          };
          var random = String.random || function() {
            return Math.random().toString(36).slice(2);
          };
        })(USE, "./ask");
        ;
        USE(function(module2) {
          function Gun4(o) {
            if (o instanceof Gun4) {
              return (this._ = { $: this }).$;
            }
            if (!(this instanceof Gun4)) {
              return new Gun4(o);
            }
            return Gun4.create(this._ = { $: this, opt: o });
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
              var DBG = ctx.DBG = msg.DBG, S = +new Date();
              if (put2["#"] && put2["."]) {
                return;
              }
              DBG && (DBG.p = S);
              ctx["#"] = msg["#"];
              ctx.msg = msg;
              ctx.all = 0;
              ctx.stun = 1;
              var nl = Object.keys(put2);
              console.STAT && console.STAT(S, ((DBG || ctx).pk = +new Date()) - S, "put sort");
              var ni = 0, nj, kl, soul, node, states, err, tmp;
              (function pop(o) {
                if (nj != ni) {
                  nj = ni;
                  if (!(soul = nl[ni])) {
                    console.STAT && console.STAT(S, ((DBG || ctx).pd = +new Date()) - S, "put");
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
                  if (u === state) {
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
              var now = State(), u2;
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
                if (state === was && (val === known || L(val) <= L(known))) {
                  if (!ctx.miss) {
                    return;
                  }
                }
              }
              ctx.stun++;
              var aid = msg["#"] + ctx.all++, id = { toString: function() {
                return aid;
              }, _: ctx };
              id.toJSON = id.toString;
              DBG && (DBG.ph = DBG.ph || +new Date());
              root.on("put", { "#": id, "@": msg["@"], put: { "#": soul, ".": key, ":": val, ">": state }, _: ctx });
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
              ctx.root.on("in", { "@": ctx["#"], err: ctx.err, ok: ctx.err ? u : { "": 1 } });
            }
            var ERR = "Error: Invalid graph!";
            var cut = function(s) {
              return " '" + ("" + s).slice(0, 9) + "...' ";
            };
            var L = JSON.stringify, MD = 2147483647, State = Gun4.state;
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
                if (typeof has != "string" || u === node[has]) {
                  return root.on("get", msg);
                }
                node = state_ify({}, has, state_is(node, has), node[has], soul);
              }
              node && ack(msg, node);
              root.on("get", msg);
            };
            function ack(msg, node) {
              var S = +new Date(), ctx = msg._ || {}, DBG = ctx.DBG = msg.DBG;
              var to = msg["#"], id = text_rand(9), keys = Object.keys(node || "").sort(), soul = ((node || "")._ || "")["#"], kl = keys.length, j = 0, root = msg.$._.root, F = node === root.graph[soul];
              console.STAT && console.STAT(S, ((DBG || ctx).gk = +new Date()) - S, "got keys");
              node && function go() {
                S = +new Date();
                var i = 0, k, put = {}, tmp;
                while (i < 9 && (k = keys[i++])) {
                  state_ify(put, k, state_is(node, k), node[k], soul);
                }
                keys = keys.slice(i);
                (tmp = {})[soul] = put;
                put = tmp;
                var faith;
                if (F) {
                  faith = function() {
                  };
                  faith.ram = faith.faith = true;
                }
                tmp = keys.length;
                console.STAT && console.STAT(S, -(S - (S = +new Date())), "got copied some");
                DBG && (DBG.ga = +new Date());
                root.on("in", { "@": to, "#": id, put, "%": tmp ? id = text_rand(9) : u, $: root.$, _: faith, DBG });
                console.STAT && console.STAT(S, +new Date() - S, "got in");
                if (!tmp) {
                  return;
                }
                setTimeout.turn(go);
              }();
              if (!node) {
                root.on("in", { "@": msg["#"] });
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
                var v = this[k];
                if (this && this.hasOwnProperty(k) || typeof v == "string" || Object.empty(v)) {
                  this[k] = v;
                  return;
                }
                if (v && v.constructor !== Object && !(v instanceof Array)) {
                  return;
                }
                obj_each(v, each);
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
          }, text_rand = String.random, turn = setTimeout.turn, valid = Gun4.valid, state_is = Gun4.state.is, state_ify = Gun4.state.ify, u, empty = {}, C;
          Gun4.log = function() {
            return !Gun4.log.off && C.log.apply(C, arguments), [].slice.call(arguments).join(" ");
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
          module2.exports = Gun4;
          (Gun4.window || {}).console = (Gun4.window || {}).console || { log: function() {
          } };
          (C = console).only = function(i, s) {
            return C.only.i && i === C.only.i && C.only.i++ && (C.log.apply(C, arguments) || s);
          };
          ;
          "Please do not remove welcome log unless you are paying for a monthly sponsorship, thanks!";
          Gun4.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!");
        })(USE, "./root");
        ;
        USE(function(module2) {
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
              if (u !== tmp) {
                return opt ? gun2 : tmp;
              } else if (tmp = at.back) {
                return tmp.$.back(n, opt);
              }
              return;
            }
            if (typeof n == "function") {
              var yes, tmp = { back: at };
              while ((tmp = tmp.back) && u === (yes = n(tmp, opt))) {
              }
              return yes;
            }
            if (typeof n == "number") {
              return (at.back || at).$.back(n - 1);
            }
            return this;
          };
          var empty = {}, u;
        })(USE, "./back");
        ;
        USE(function(module2) {
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
              at.on("in", { put: at.put = u, $: at.$ });
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
                  if (u !== back.put) {
                    back.on("in", back);
                    if (tmp) {
                      return;
                    }
                  }
                  msg.$ = back.$;
                } else if (obj_has(back.put, get)) {
                  tmp = back.ask && back.ask[get];
                  (back.ask || (back.ask = {}))[get] = back.$.get(get)._;
                  back.on("in", { get, put: { "#": back.soul, ".": get, ":": back.put[get], ">": state_is(root.graph[back.soul], get) } });
                  if (tmp) {
                    return;
                  }
                }
                root.ask(ack, msg);
                return root.on("in", msg);
              }
              if (get["."]) {
                if (at.get) {
                  msg = { get: { ".": at.get }, $: at.$ };
                  (back.ask || (back.ask = {}))[at.get] = msg.$._;
                  return back.on("out", msg);
                }
                msg = { get: at.lex ? msg.get : {}, $: at.$ };
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
            var root = cat.root, gun2 = msg.$ || (msg.$ = cat.$), at = (gun2 || "")._ || empty, tmp = msg.put || "", soul = tmp["#"], key = tmp["."], change = u !== tmp["="] ? tmp["="] : tmp[":"], state2 = tmp[">"] || -Infinity, sat;
            if (u !== msg.put && (u === tmp["#"] || u === tmp["."] || u === tmp[":"] && u === tmp["="] || u === tmp[">"])) {
              if (!valid(tmp)) {
                if (!(soul = ((tmp || "")._ || "")["#"])) {
                  console.log("chain not yet supported for", tmp, "...", msg, cat);
                  return;
                }
                gun2 = cat.root.$.get(soul);
                return setTimeout.each(Object.keys(tmp).sort(), function(k) {
                  if (k == "_" || u === (state2 = state_is(tmp, k))) {
                    return;
                  }
                  cat.on("in", { $: gun2, put: { "#": soul, ".": k, "=": tmp[k], ">": state2 }, VIA: msg });
                });
              }
              cat.on("in", { $: at.back.$, put: { "#": soul = at.back.soul, ".": key = at.has || at.get, "=": tmp, ">": state_is(at.back.put, key) }, via: msg });
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
              sat.on("out", { get: { "#": link2 } });
            }
            setTimeout.each(Object.keys(tmp), function(get, sat2) {
              if (!get || !(sat2 = tmp[get])) {
                return;
              }
              sat2.on("out", { get: { "#": link2, ".": get } });
            }, 0, 99);
          }
          ;
          Gun4.on.link = link;
          function unlink(msg, cat) {
            var put = msg.put || "", change = u !== put["="] ? put["="] : put[":"], root = cat.root, link2, tmp;
            if (u === change) {
              if (cat.soul && u !== cat.put) {
                return;
              }
              tmp = (msg.$$ || msg.$ || "")._ || "";
              if (msg["@"] && (u !== tmp.put || u !== cat.put)) {
                return;
              }
              if (link2 = cat.link || msg.linked) {
                delete (root.$.get(link2)._.echo || "")[cat.id];
              }
              if (cat.has) {
                cat.link = null;
              }
              cat.put = u;
              setTimeout.each(Object.keys(cat.next || ""), function(get, sat) {
                if (!(sat = cat.next[get])) {
                  return;
                }
                if (link2) {
                  delete (root.$.get(link2).get(get)._.echo || "")[sat.id];
                }
                sat.on("in", { get, put: u, $: sat.$ });
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
            unlink({ get: cat.get, put: u, $: msg.$, linked: msg.linked = msg.linked || tmp.link }, cat);
          }
          ;
          Gun4.on.unlink = unlink;
          function ack(msg, ev) {
            var as = this.as, at = as.$._, root = at.root, get = as.get || "", tmp = (msg.put || "")[get["#"]] || "";
            if (!msg.put || typeof get["."] == "string" && u === tmp[get["."]]) {
              if (u !== at.put) {
                return;
              }
              if (!at.soul && !at.has) {
                return;
              }
              at.ack = (at.ack || 0) + 1;
              at.on("in", {
                get: at.get,
                put: at.put = u,
                $: at.$,
                "@": msg["@"]
              });
              return;
            }
            (msg._ || {}).miss = 1;
            Gun4.on.put(msg);
            return;
          }
          var empty = {}, u, text_rand = String.random, valid = Gun4.valid, obj_has = function(o, k) {
            return o && Object.prototype.hasOwnProperty.call(o, k);
          }, state = Gun4.state, state_is = state.is, state_ify = state.ify;
        })(USE, "./chain");
        ;
        USE(function(module2) {
          var Gun4 = USE("./root");
          Gun4.chain.get = function(key, cb, as) {
            var gun2, tmp;
            if (typeof key === "string") {
              if (key.length == 0) {
                (gun2 = this.chain())._.err = { err: Gun4.log("0 length key!", key) };
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
                if (odd || u === data) {
                  data = u === ((tmp2 = msg.put) || "")["="] ? u === (tmp2 || "")[":"] ? tmp2 : tmp2[":"] : tmp2["="];
                }
                if (link = typeof (tmp2 = Gun4.valid(data)) == "string") {
                  data = u === (tmp2 = root.$.get(tmp2)._.put) ? opt.not ? u : data : tmp2;
                }
                if (opt.not && u === data) {
                  return;
                }
                if (u === opt.stun) {
                  if ((tmp2 = root.stun) && tmp2.on) {
                    cat.$.back(function(a) {
                      tmp2.on("" + a.id, test = {});
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
                  if (u === data) {
                    f = 0;
                  }
                  if ((tmp2 = root.hatch) && !tmp2.end && u === opt.hatch && !f) {
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
              opt.out = opt.out || { get: {} };
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
              (gun2 = this.chain())._.err = { err: Gun4.log("Invalid get request!", key) };
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
              if (u === msg.put && !cat.root.opt.super && (tmp = Object.keys(cat.root.opt.peers).length) && ++acks <= tmp) {
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
            }, { out: { get: { ".": true } } });
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
          var empty = {}, valid = Gun4.valid, u;
        })(USE, "./get");
        ;
        USE(function(module2) {
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
              data(function(d) {
                as.data = d;
                gun2.put(u, u, as);
              });
              return gun2;
            }
            if (!as.soul) {
              return get(as), gun2;
            }
            as.$ = root.$.get(as.soul);
            as.todo = [{ it: as.data, ref: as.$ }];
            as.turn = as.turn || turn;
            as.ran = as.ran || ran;
            (function walk() {
              var to = as.todo, at2 = to.pop(), d = at2.it, cid = at2.ref && at2.ref._.id, v, k, cat, tmp, g;
              stun(as, at2.ref);
              if (tmp = at2.todo) {
                k = tmp.pop();
                d = d[k];
                if (tmp.length) {
                  to.push(at2);
                }
              }
              k && (to.path || (to.path = [])).push(k);
              if (!(v = valid(d)) && !(g = Gun4.is(d))) {
                if (!Object.plain(d)) {
                  (as.ack || noop).call(as, as.out = { err: as.err = Gun4.log("Invalid data: " + (d && (tmp = d.constructor) && tmp.name || typeof d) + " at " + (as.via.back(function(at3) {
                    at3.get && tmp.push(at3.get);
                  }, tmp = []) || tmp.join(".")) + "." + (to.path || []).join(".")) });
                  as.ran(as);
                  return;
                }
                var seen = as.seen || (as.seen = []), i = seen.length;
                while (i--) {
                  if (d === (tmp = seen[i]).it) {
                    v = d = tmp.link;
                    break;
                  }
                }
              }
              if (k && v) {
                at2.node = state_ify(at2.node, k, s, d);
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
                  !g && (((as.graph || (as.graph = {}))[soul] = cat.node || (cat.node = { _: {} }))._["#"] = soul);
                  delete as.wait[id];
                  cat.wait && setTimeout.each(cat.wait, function(cb2) {
                    cb2 && cb2();
                  });
                  as.ran(as);
                };
                var resolve = resolve2;
                as.seen.push(cat = { it: d, link: {}, todo: g ? [] : Object.keys(d).sort().reverse(), path: (to.path || []).slice(), up: at2 });
                at2.node = state_ify(at2.node, k, s, cat.link);
                !g && cat.todo.length && to.push(cat);
                var id = as.seen.length;
                (as.wait || (as.wait = {}))[id] = "";
                tmp = (cat.ref = g ? d : k ? at2.ref.get(k) : at2.ref)._;
                (tmp = d && (d._ || "")["#"] || tmp.soul || tmp.link) ? resolve2({ soul: tmp }) : cat.ref.get(resolve2, { run: as.run, v2020: 1, out: { get: { ".": " " } } });
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
            var run = as.root.stun || (as.root.stun = { on: Gun4.on }), test = {}, tmp;
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
            as.via._.on("out", { put: as.out = as.graph, opt: as.opt, "#": ask, _: tmp });
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
          var u, empty = {}, noop = function() {
          }, turn = setTimeout.turn, valid = Gun4.valid, state_ify = Gun4.state.ify;
          var iife = function(fn, as) {
            fn.call(as || empty);
          };
        })(USE, "./put");
        ;
        USE(function(module2) {
          var Gun4 = USE("./root");
          USE("./chain");
          USE("./back");
          USE("./put");
          USE("./get");
          module2.exports = Gun4;
        })(USE, "./index");
        ;
        USE(function(module2) {
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
            (opt = opt === true ? { change: true } : opt || {}).not = 1;
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
                  at = { put: data2, get: key };
                }
                if (u === (tmp = at.put)) {
                  tmp = ((msg.$$ || "")._ || "").put;
                }
                if (typeof Gun4.valid(tmp) == "string") {
                  tmp = root.$.get(tmp)._.put;
                  if (tmp === u) {
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
            }, { on: 1 });
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
          }, u;
        })(USE, "./on");
        ;
        USE(function(module2) {
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
          Gun4.chain.map = function(cb, opt, t) {
            var gun2 = this, cat = gun2._, lex, chain;
            if (Object.plain(cb)) {
              lex = cb["."] ? cb : { ".": cb };
              cb = u;
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
              if (u === next2) {
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
              chain._.on("in", { get: key, put: tmp });
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
          }, event = { stun: noop, off: noop }, u;
        })(USE, "./map");
        ;
        USE(function(module2) {
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
                  return cb.call(gun2, { err: Gun4.log('Only a node can be linked! Not "' + msg.put + '"!') });
                }
                (tmp = {})[soul2] = { "#": soul2 };
                go(tmp);
              }, true);
            });
            return item;
          };
        })(USE, "./set");
        ;
        USE(function(module2) {
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
            var parse = JSON.parseAsync || function(t, cb, r) {
              var u2;
              try {
                cb(u2, JSON.parse(t, r));
              } catch (e) {
                cb(e);
              }
            };
            var json = JSON.stringifyAsync || function(v, cb, r, s) {
              var u2;
              try {
                cb(u2, JSON.stringify(v, r, s));
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
                return mesh.say({ dam: "!", err: "Message too big!" }, peer);
              }
              if (mesh === this) {
                hear.d += raw.length || 0;
                ++hear.c;
              }
              var S = peer.SH = +new Date();
              var tmp = raw[0], msg;
              if (tmp === "[") {
                parse(raw, function(err, msg2) {
                  if (err || !msg2) {
                    return mesh.say({ dam: "!", err: "DAM JSON parse error." }, peer);
                  }
                  console.STAT && console.STAT(+new Date(), msg2.length, "# on hear batch");
                  var P = opt.puff;
                  (function go() {
                    var S2 = +new Date();
                    var i = 0, m;
                    while (i < P && (m = msg2[i++])) {
                      hear(m, peer);
                    }
                    msg2 = msg2.slice(i);
                    console.STAT && console.STAT(S2, +new Date() - S2, "hear loop");
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
                  return hear.one(msg, peer, S);
                }
                parse(raw, function(err, msg2) {
                  if (err || !msg2) {
                    return mesh.say({ dam: "!", err: "DAM JSON parse error." }, peer);
                  }
                  hear.one(msg2, peer, S);
                });
                return;
              }
            };
            hear.one = function(msg, peer, S) {
              var id, hash, tmp, ash, DBG;
              if (msg.DBG) {
                msg.DBG = DBG = { DBG: msg.DBG };
              }
              DBG && (DBG.h = S);
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
              var S = +new Date();
              DBG && (DBG.is = S);
              peer.SI = id;
              root.on("in", mesh.last = msg);
              DBG && (DBG.hd = +new Date());
              console.STAT && console.STAT(S, +new Date() - S, msg.get ? "msg get" : msg.put ? "msg put" : "msg");
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
                var h, s, t;
                var S = +new Date();
                json(msg.put, function hash(err, text) {
                  var ss = (s || (s = t = text || "")).slice(0, 32768);
                  h = String.hash(ss, h);
                  s = s.slice(32768);
                  if (s) {
                    puff(hash, 0);
                    return;
                  }
                  console.STAT && console.STAT(S, +new Date() - S, "say json+hash");
                  msg._.$put = t;
                  msg["##"] = h;
                  say(msg, peer);
                  delete msg._.$put;
                }, sort);
              };
              function sort(k, v) {
                var tmp;
                if (!(v instanceof Object)) {
                  return v;
                }
                Object.keys(v).sort().forEach(sorta, { to: tmp = {}, on: v });
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
                var DBG = msg.DBG, S = +new Date();
                meta.y = meta.y || S;
                if (!peer) {
                  DBG && (DBG.y = S);
                }
                if (!(id = msg["#"])) {
                  id = msg["#"] = String.random(9);
                }
                !loop && dup_track(id);
                if (msg.put && (msg.err || (dup.s[id] || "").err)) {
                  return false;
                }
                if (!(hash = msg["##"]) && u !== msg.put && !meta.via && ack) {
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
                  var S = +new Date();
                  var P = opt.puff, ps = opt.peers, pl = Object.keys(peer || opt.peers || {});
                  console.STAT && console.STAT(S, +new Date() - S, "peer keys");
                  ;
                  (function go() {
                    var S2 = +new Date();
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
                    console.STAT && console.STAT(S2, +new Date() - S2, "say loop");
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
                console.STAT && console.STAT(S, ((DBG || meta).yp = +new Date()) - (meta.y || S), "say prep");
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
                console.STAT && ack === peer.SI && console.STAT(S, +new Date() - peer.SH, "say ack");
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
                    var S = +new Date();
                    tmp = raw.indexOf('"put":":])([:"');
                    res(u, raw = raw.slice(0, tmp + 6) + put + raw.slice(tmp + 14));
                    console.STAT && console.STAT(S, +new Date() - S, "say slice");
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
              var tmp = peer.batch, t = typeof tmp == "string", l;
              if (t) {
                tmp += "]";
              }
              peer.batch = peer.tail = null;
              if (!tmp) {
                return;
              }
              if (t ? 3 > tmp.length : !tmp.length) {
                return;
              }
              if (!t) {
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
                mesh.say({ dam: "?", pid: root.opt.pid }, opt.peers[tmp] = peer);
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
              mesh.say({ dam: "?", pid: opt.pid, "@": msg["#"] }, peer);
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
                mesh.say({ "##": tmp, get: { "#": soul } }, peer);
              });
            });
            return mesh;
          }
          var empty = {}, ok = true, u;
          try {
            module2.exports = Mesh;
          } catch (e) {
          }
        })(USE, "./mesh");
        ;
        USE(function(module2) {
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
              !opt.super && root.on("out", { dam: "hi" });
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
            var doc = "" + u !== typeof document && document;
          });
          var noop = function() {
          }, u;
        })(USE, "./websocket");
        ;
        USE(function(module2) {
          if (typeof Gun === "undefined") {
            return;
          }
          var noop = function() {
          }, store, u;
          try {
            store = (Gun.window || noop).localStorage;
          } catch (e) {
          }
          if (!store) {
            Gun.log("Warning: No localStorage exists to persist data to!");
            store = { setItem: function(k, v) {
              this[k] = v;
            }, removeItem: function(k) {
              delete this[k];
            }, getItem: function(k) {
              return this[k];
            } };
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
              var lex = msg.get, soul, data, tmp, u2;
              if (!lex || !(soul = lex["#"])) {
                return;
              }
              data = disk[soul] || u2;
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
                root.on("localStorage:error", { err, get: opt.prefix, put: disk });
              }
              if (!err && !Object.empty(opt.peers)) {
                return;
              }
              setTimeout.each(ack, function(id) {
                root.on("in", { "@": id, err, ok: 0 });
              });
            }
          });
        })(USE, "./localStorage");
      })();
      (function() {
        var u;
        if ("" + u == typeof Gun) {
          return;
        }
        var DEP = function(n) {
          console.log("Warning! Deprecated internal utility will break in next version:", n);
        };
        var Type = Gun;
        Type.fn = Type.fn || { is: function(fn2) {
          DEP("fn");
          return !!fn2 && typeof fn2 == "function";
        } };
        Type.bi = Type.bi || { is: function(b) {
          DEP("bi");
          return b instanceof Boolean || typeof b == "boolean";
        } };
        Type.num = Type.num || { is: function(n) {
          DEP("num");
          return !list_is(n) && (n - parseFloat(n) + 1 >= 0 || n === Infinity || n === -Infinity);
        } };
        Type.text = Type.text || { is: function(t) {
          DEP("text");
          return typeof t == "string";
        } };
        Type.text.ify = Type.text.ify || function(t) {
          DEP("text.ify");
          if (Type.text.is(t)) {
            return t;
          }
          if (typeof JSON !== "undefined") {
            return JSON.stringify(t);
          }
          return t && t.toString ? t.toString() : t;
        };
        Type.text.random = Type.text.random || function(l, c) {
          DEP("text.random");
          var s = "";
          l = l || 24;
          c = c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";
          while (l > 0) {
            s += c.charAt(Math.floor(Math.random() * c.length));
            l--;
          }
          return s;
        };
        Type.text.match = Type.text.match || function(t, o) {
          var tmp, u2;
          DEP("text.match");
          if (typeof t !== "string") {
            return false;
          }
          if (typeof o == "string") {
            o = { "=": o };
          }
          o = o || {};
          tmp = o["="] || o["*"] || o[">"] || o["<"];
          if (t === tmp) {
            return true;
          }
          if (u2 !== o["="]) {
            return false;
          }
          tmp = o["*"] || o[">"] || o["<"];
          if (t.slice(0, (tmp || "").length) === tmp) {
            return true;
          }
          if (u2 !== o["*"]) {
            return false;
          }
          if (u2 !== o[">"] && u2 !== o["<"]) {
            return t >= o[">"] && t <= o["<"] ? true : false;
          }
          if (u2 !== o[">"] && t >= o[">"]) {
            return true;
          }
          if (u2 !== o["<"] && t <= o["<"]) {
            return true;
          }
          return false;
        };
        Type.text.hash = Type.text.hash || function(s, c) {
          DEP("text.hash");
          if (typeof s !== "string") {
            return;
          }
          c = c || 0;
          if (!s.length) {
            return c;
          }
          for (var i = 0, l = s.length, n; i < l; ++i) {
            n = s.charCodeAt(i);
            c = (c << 5) - c + n;
            c |= 0;
          }
          return c;
        };
        Type.list = Type.list || { is: function(l) {
          DEP("list");
          return l instanceof Array;
        } };
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
        Type.list.map = Type.list.map || function(l, c, _) {
          DEP("list.map");
          return obj_map(l, c, _);
        };
        Type.list.index = 1;
        Type.obj = Type.boj || { is: function(o) {
          DEP("obj");
          return o ? o instanceof Object && o.constructor === Object || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === "Object" : false;
        } };
        Type.obj.put = Type.obj.put || function(o, k, v) {
          DEP("obj.put");
          return (o || {})[k] = v, o;
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
        Type.obj.as = Type.obj.as || function(o, k, v, u2) {
          DEP("obj.as");
          return o[k] = o[k] || (u2 === v ? {} : v);
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
          var u2;
          function map(v, k) {
            if (obj_has(this, k) && u2 !== this[k]) {
              return;
            }
            this[k] = v;
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
          function empty(v, i) {
            var n = this.n, u2;
            if (n && (i === n || obj_is(n) && obj_has(n, i))) {
              return;
            }
            if (u2 !== i) {
              return true;
            }
          }
          Type.obj.empty = Type.obj.empty || function(o, n) {
            DEP("obj.empty");
            if (!o) {
              return true;
            }
            return obj_map(o, empty, { n }) ? false : true;
          };
        })();
        ;
        (function() {
          function t(k, v) {
            if (arguments.length === 2) {
              t.r = t.r || {};
              t.r[k] = v;
              return;
            }
            t.r = t.r || [];
            t.r.push(k);
          }
          ;
          var keys = Object.keys, map, u2;
          Object.keys = Object.keys || function(o) {
            return map(o, function(v, k, t2) {
              t2(k);
            });
          };
          Type.obj.map = map = Type.obj.map || function(l, c, _) {
            DEP("obj.map");
            var u3, i = 0, x, r, ll, lle, f = typeof c == "function";
            t.r = u3;
            if (keys && obj_is(l)) {
              ll = keys(l);
              lle = true;
            }
            _ = _ || {};
            if (list_is(l) || ll) {
              x = (ll || l).length;
              for (; i < x; i++) {
                var ii = i + Type.list.index;
                if (f) {
                  r = lle ? c.call(_, l[ll[i]], ll[i], t) : c.call(_, l[i], ii, t);
                  if (r !== u3) {
                    return r;
                  }
                } else {
                  if (c === l[lle ? ll[i] : i]) {
                    return ll ? ll[i] : ii;
                  }
                }
              }
            } else {
              for (i in l) {
                if (f) {
                  if (obj_has(l, i)) {
                    r = _ ? c.call(_, l[i], i, t) : c(l[i], i, t);
                    if (r !== u3) {
                      return r;
                    }
                  }
                } else {
                  if (c === l[i]) {
                    return i;
                  }
                }
              }
            }
            return f ? t.r : Type.list.index ? 0 : -1;
          };
        })();
        Type.time = Type.time || {};
        Type.time.is = Type.time.is || function(t) {
          DEP("time");
          return t ? t instanceof Date : +new Date().getTime();
        };
        var fn_is = Type.fn.is;
        var list_is = Type.list.is;
        var obj = Type.obj, obj_is = obj.is, obj_has = obj.has, obj_map = obj.map;
        var Val = {};
        Val.is = function(v) {
          DEP("val.is");
          if (v === u) {
            return false;
          }
          if (v === null) {
            return true;
          }
          if (v === Infinity) {
            return false;
          }
          if (text_is(v) || bi_is(v) || num_is(v)) {
            return true;
          }
          return Val.link.is(v) || false;
        };
        Val.link = Val.rel = { _: "#" };
        ;
        (function() {
          Val.link.is = function(v) {
            DEP("val.link.is");
            if (v && v[rel_] && !v._ && obj_is(v)) {
              var o = {};
              obj_map(v, map, o);
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
        Val.link.ify = function(t) {
          DEP("val.link.ify");
          return obj_put({}, rel_, t);
        };
        Type.obj.has._ = ".";
        var rel_ = Val.link._, u;
        var bi_is = Type.bi.is;
        var num_is = Type.num.is;
        var text_is = Type.text.is;
        var obj = Type.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map;
        Type.val = Type.val || Val;
        var Node = { _: "_" };
        Node.soul = function(n, o) {
          DEP("node.soul");
          return n && n._ && n._[o || soul_];
        };
        Node.soul.ify = function(n, o) {
          DEP("node.soul.ify");
          o = typeof o === "string" ? { soul: o } : o || {};
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
              return !obj_map(n, map, { as, cb, s, n });
            }
            return false;
          };
          function map(v, k) {
            if (k === Node._) {
              return;
            }
            if (!Val.is(v)) {
              return true;
            }
            if (this.cb) {
              this.cb.call(this.as, v, k, this.n, this.s);
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
              o = { soul: o };
            } else if (typeof o == "function") {
              o = { map: o };
            }
            if (o.map) {
              o.node = o.map.call(as, obj2, u, o.node || {});
            }
            if (o.node = Node.soul.ify(o.node || {}, o)) {
              obj_map(obj2, map, { o, as });
            }
            return o.node;
          };
          function map(v, k) {
            var o = this.o, tmp, u2;
            if (o.map) {
              tmp = o.map.call(this.as, v, "" + k, o.node);
              if (u2 === tmp) {
                obj_del(o.node, k);
              } else if (o.node) {
                o.node[k] = tmp;
              }
              return;
            }
            if (Val.is(v)) {
              o.node[k] = v;
            }
          }
        })();
        var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_map = obj.map;
        var text = Type.text, text_random = text.random;
        var soul_ = Node.soul._;
        var u;
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
            var u2;
            var o = obj_is(o = cb || s) ? o : null;
            cb = fn_is(cb = cb || s) ? cb : null;
            if (o && !cb) {
              s = num_is(s) ? s : State();
              o[N_] = o[N_] || {};
              obj_map(o, map, { o, s });
              return o;
            }
            as = as || obj_is(s) ? s : u2;
            s = num_is(s) ? s : State();
            return function(v, k, o2, opt) {
              if (!cb) {
                map.call({ o: o2, s }, v, k);
                return v;
              }
              cb.call(as || this || {}, v, k, o2, opt);
              if (obj_has(o2, k) && u2 === o2[k]) {
                return;
              }
              map.call({ o: o2, s }, v, k);
            };
          };
          function map(v, k) {
            if (N_ === k) {
              return;
            }
            State.ify(this.o, k, this.s);
          }
        })();
        var obj = Type.obj, obj_as = obj.as, obj_has = obj.has, obj_is = obj.is, obj_map = obj.map, obj_copy = obj.copy;
        var num = Type.num, num_is = num.is;
        var fn = Type.fn, fn_is = fn.is;
        var N_ = Node._, u;
        var Graph = {};
        ;
        (function() {
          Graph.is = function(g, cb, fn2, as) {
            DEP("graph.is");
            if (!g || !obj_is(g) || obj_empty(g)) {
              return false;
            }
            return !obj_map(g, map, { cb, fn: fn2, as });
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
            var at = { path: [], obj: obj2 };
            if (!env) {
              env = {};
            } else if (typeof env === "string") {
              env = { soul: env };
            } else if (typeof env == "function") {
              env.map = env;
            }
            if (typeof as === "string") {
              env.soul = env.soul || as;
              as = u;
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
          function map(v, k, n) {
            var at = this, env = at.env, is, tmp;
            if (Node._ === k && obj_has(v, Val.link._)) {
              return n._;
            }
            if (!(is = valid(v, k, n, at, env))) {
              return;
            }
            if (!k) {
              at.node = at.node || n || {};
              if (obj_has(v, Node._) && Node.soul(v)) {
                at.node._ = obj_copy(v._);
              }
              at.node = Node.soul.ify(at.node, Val.link.is(at.link));
              at.link = at.link || Val.link.ify(Node.soul(at.node));
            }
            if (tmp = env.map) {
              tmp.call(env.as || {}, v, k, n, at);
              if (obj_has(n, k)) {
                v = n[k];
                if (u === v) {
                  obj_del(n, k);
                  return;
                }
                if (!(is = valid(v, k, n, at, env))) {
                  return;
                }
              }
            }
            if (!k) {
              return at.node;
            }
            if (is === true) {
              return v;
            }
            tmp = node(env, { obj: v, path: at.path.concat(k) });
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
          function valid(v, k, n, at, env) {
            var tmp;
            if (Val.is(v)) {
              return true;
            }
            if (obj_is(v)) {
              return 1;
            }
            if (tmp = env.invalid) {
              v = tmp.call(env.as || {}, v, k, n);
              return valid(v, k, n, at, env);
            }
            env.err = "Invalid value at '" + at.path.concat(k).join(".") + "'!";
            if (Type.list.is(v)) {
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
            opt = opt || { seen: {} };
            obj_map(graph[root], map, { obj: obj2, graph, opt });
            return obj2;
          };
          function map(v, k) {
            var tmp, obj2;
            if (Node._ === k) {
              if (obj_empty(v, Val.link._)) {
                return;
              }
              this.obj[k] = obj_copy(v);
              return;
            }
            if (!(tmp = Val.link.is(v))) {
              this.obj[k] = v;
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
        var u;
        Type.graph = Type.graph || Graph;
      })();
    }
  });

  // node_modules/gun/browser.js
  var require_browser = __commonJS({
    "node_modules/gun/browser.js"(exports, module) {
      module.exports = require_gun();
    }
  });

  // client.js
  var import_gun = __toModule(require_browser());

  // node_modules/gun/lib/open.js
  var Gun2 = typeof window !== "undefined" ? window.Gun : require_gun();
  Gun2.chain.open = function(cb, opt, at) {
    opt = opt || {};
    opt.doc = opt.doc || {};
    opt.ids = opt.ids || {};
    opt.any = opt.any || cb;
    opt.meta = opt.meta || false;
    opt.ev = opt.ev || { off: function() {
      Gun2.obj.map(opt.ev.s, function(e) {
        if (e) {
          e.off();
        }
      });
      opt.ev.s = {};
    }, s: {} };
    return this.on(function(data, key, ctx, ev) {
      if (opt.meta !== true) {
        delete ((data = Gun2.obj.copy(data)) || {})._;
      }
      clearTimeout(opt.to);
      opt.to = setTimeout(function() {
        if (!opt.any) {
          return;
        }
        opt.any.call(opt.at.$, opt.doc, opt.key, opt, opt.ev);
        if (opt.off) {
          opt.ev.off();
          opt.any = null;
        }
      }, opt.wait || 1);
      opt.at = opt.at || ctx;
      opt.key = opt.key || key;
      opt.ev.s[this._.id] = ev;
      if (Gun2.val.is(data)) {
        if (!at) {
          opt.doc = data;
        } else {
          at[key] = data;
        }
        return;
      }
      var tmp = this, id;
      Gun2.obj.map(data, function(val, key2) {
        var doc = at || opt.doc;
        if (!doc) {
          return;
        }
        if (!(id = Gun2.val.link.is(val))) {
          doc[key2] = val;
          return;
        }
        if (opt.ids[id]) {
          doc[key2] = opt.ids[id];
          return;
        }
        tmp.get(key2).open(opt.any, opt, opt.ids[id] = doc[key2] = {});
      });
    });
  };

  // component.js
  var listeners = new WeakMap();
  function setListeners(props) {
    listeners.get(props.el)?.forEach(({ trigger, listener }) => {
      props.el.removeEventListener(trigger, listener);
      listeners.get(props.el).delete(listener);
    });
    Object.entries(props).filter(([k]) => k.startsWith("on_")).forEach(([name, action]) => {
      const trigger = name.slice(3);
      const listener = (event) => action.call(props, props, event);
      props.el.addEventListener(trigger, listener);
      listeners.set(props.el, listeners.get(props.el) ?? new Map());
      listeners.get(props.el).set(action, { trigger, listener });
    });
  }
  function render(passedProps = {}, prevProps = {}) {
    const props = {
      ...passedProps,
      ...passedProps.init?.({ ...passedProps }, prevProps) ?? {}
    };
    props.render = (passedProps2 = {}) => {
      const inheritedProps = passedProps2.parent ? Object.fromEntries(Object.entries(passedProps2.parent).filter(([key]) => key.startsWith("_"))) : {};
      const newProps = { ...props, ...inheritedProps, ...passedProps2 };
      if (!passedProps2.parent && props.parent?.children?.[props.key]) {
        const inheritedPropsUpdated = Object.fromEntries(Object.entries(passedProps2).filter(([key]) => key.startsWith("_")));
        return props.parent.render({
          ...inheritedPropsUpdated,
          children: {
            ...props.parent.children,
            [props.key]: {
              ...props,
              render: (passedProps3 = {}) => render({ ...newProps, ...passedProps3 }, props)
            }
          }
        }).children[props.key];
      }
      return render(newProps, props);
    };
    props.tag = props.tag ?? (props.text ? "span" : "div");
    if (!props.el) {
      if (props.parent?.el && props.parent.el.childNodes[props.index]?.tagName?.toLowerCase() === props.tag) {
        props.el = props.parent.el.childNodes[props.index];
      } else {
        props.el = document.createElement(props.tag);
      }
    }
    const { el, text, children, style, onChange, atts, value, parent } = props;
    if (children) {
      props.children = Object.fromEntries(Object.values(children).map((it, index2) => [
        index2,
        it.render({ parent: props, key: it.key ?? index2, index: index2 })
      ]));
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
    const props = typeof initial === "function" ? { init: initial } : initial;
    return {
      render: (passedProps = {}) => render({ ...props, ...passedProps }, props),
      reset: (passedProps = {}) => Component({ ...props, ...passedProps }),
      ...props
    };
  };

  // ui.js
  var Row = (args) => {
    const props = Array.isArray(args) ? { children: args } : args;
    return Component({ style: { display: "flex" }, ...props });
  };
  var Column = (args) => {
    const props = Array.isArray(args) ? { children: args } : args;
    return Component({
      style: { display: "flex", flexDirection: "column" },
      ...props
    });
  };
  var Text = (args) => {
    const props = typeof args === "string" || typeof args === "number" ? { text: String(args) } : args;
    return Component(props);
  };
  var Input = (args) => {
    const props = typeof args === "string" || typeof args === "number" ? { value: String(args) } : args;
    return Component({
      tag: "input",
      atts: { type: "text" },
      ...props
    });
  };
  var Button = (args) => {
    const props = typeof args === "string" || typeof args === "number" ? { text: String(args) } : args;
    return Component({ tag: "button", ...props });
  };

  // client.js
  window.Gun = import_gun.default;
  var gun = (0, import_gun.default)({
    peers: [
      "http://localhost:3000/gun",
      "https://santistebanc.github.io/gunstate"
    ]
  });
  window.gun = gun;
  gun.get("views").get("termsList").put({ row: { 0: gun.get("terms") } });
  var index = new FlexSearch.Worker("performance");
  gun.get("terms").map().once((term) => {
    console.log("indexing ", term["_"]["#"]);
    index.add(term["_"]["#"], term.text);
  });
  var view = (terms = {}) => {
    Column({
      _inputVal: "",
      children: [
        Row([
          Text("search:"),
          Input({
            on_input: async (_, e) => console.log(e.target.value, await index.search(e.target.value))
          })
        ]),
        Column(Object.values(terms).filter((term) => !term.deleted).map((term) => Text({
          text: term.text,
          on_dblclick: () => gun.get("terms/" + term.text).put({ deleted: true })
        }))),
        Input({
          init: ({ _inputVal }) => ({ value: _inputVal }),
          on_input: ({ render: render2 }, e) => render2({ _inputVal: e.target.value })
        }),
        Button({
          text: "add term",
          on_click: ({ _inputVal, render: render2 }) => {
            gun.get("terms").get(_inputVal).put({ text: _inputVal, lang: "eng", deleted: false });
            render2({ _inputVal: "" });
          }
        })
      ]
    }).render({
      el: document.querySelector("#root")
    });
  };
  gun.get("terms").open((terms) => view(terms));
})();
