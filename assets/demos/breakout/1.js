(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(t,r,e){"use strict";e.r(r);var n=e(3),u=e(2);e.d(r,"main_js",(function(){return u.d})),e.d(r,"new_pong",(function(){return u.f})),e.d(r,"new_mut_pong",(function(){return u.e})),e.d(r,"MutState",(function(){return u.a})),e.d(r,"State",(function(){return u.b})),e.d(r,"__wbindgen_throw",(function(){return u.c})),n.e()},function(t,r,e){"use strict";(function(t){e.d(r,"d",(function(){return c})),e.d(r,"f",(function(){return p})),e.d(r,"e",(function(){return d})),e.d(r,"a",(function(){return l})),e.d(r,"b",(function(){return w})),e.d(r,"c",(function(){return b}));var n=e(3);let u=new("undefined"==typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});u.decode();let i=null;function o(t,r){return u.decode((null!==i&&i.buffer===n.g.buffer||(i=new Uint8Array(n.g.buffer)),i).subarray(t,t+r))}function c(){n.f()}let s=null;function f(){return null!==s&&s.buffer===n.g.buffer||(s=new Int32Array(n.g.buffer)),s}let a=null;function _(t,r){return(null!==a&&a.buffer===n.g.buffer||(a=new BigInt64Array(n.g.buffer)),a).subarray(t/8,t/8+r)}function p(){var t=n.p();return w.__wrap(t)}function d(){var t=n.o();return l.__wrap(t)}class l{static __wrap(t){const r=Object.create(l.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();n.a(t)}static new_pong(){var t=n.m();return l.__wrap(t)}step(t){n.n(this.ptr,t)}get_last_triad(){try{const u=n.c(-16);n.h(u,this.ptr);var t=f()[u/4+0],r=f()[u/4+1],e=_(t,r).slice();return n.d(t,8*r),e}finally{n.c(16)}}get_x(){return n.j(this.ptr)}get_y(){return n.k(this.ptr)}get_t(){return n.i(this.ptr)}is_ended(){return 0!==n.l(this.ptr)}}class w{static __wrap(t){const r=Object.create(w.prototype);return r.ptr=t,r}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();n.b(t)}static new_pong(){var t=n.q();return w.__wrap(t)}step(t){var r=n.r(this.ptr,t);return w.__wrap(r)}get_last_triad(){try{const u=n.c(-16);n.h(u,this.ptr);var t=f()[u/4+0],r=f()[u/4+1],e=_(t,r).slice();return n.d(t,8*r),e}finally{n.c(16)}}get_x(){return n.j(this.ptr)}get_y(){return n.k(this.ptr)}get_t(){return n.i(this.ptr)}is_ended(){return 0!==n.l(this.ptr)}}function b(t,r){throw new Error(o(t,r))}}).call(this,e(4)(t))},function(t,r,e){"use strict";var n=e.w[t.i];t.exports=n;e(2);n.s()},function(t,r){t.exports=function(t){if(!t.webpackPolyfill){var r=Object.create(t);r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),Object.defineProperty(r,"exports",{enumerable:!0}),r.webpackPolyfill=1}return r}}]]);