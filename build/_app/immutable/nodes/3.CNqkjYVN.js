import{s as oe,c as U,n as L}from"../chunks/scheduler.Cewbzyqj.js";import{S as ie,i as se,k,s as V,e as A,t as M,l as ce,d as _,f as y,c as F,a as S,b as O,m as N,h as $,g as v,n as B,o as te,j as ne,p as q,q as z,r as re,u as fe,v as ue,w as he,x as _e}from"../chunks/index.B6kawvaO.js";import{e as E,B as me,g as pe}from"../chunks/Breadcrumb.CwtbnqsA.js";import{p as de}from"../chunks/stores.Ln8Sekco.js";function G(o,t,l){const e=o.slice();return e[4]=t[l],e}function J(o,t,l){const e=o.slice();return e[4]=t[l],e}function K(o,t,l){const e=o.slice();return e[9]=t[l],e}function Q(o,t,l){const e=o.slice();return e[4]=t[l],e}function W(o){return document.title=o[4].title+" Files",{c:L,l:L,m:L,d:L}}function X(o){let t,l=o[4].url==o[2]&&W(o);return{c(){l&&l.c(),t=k()},l(e){l&&l.l(e),t=k()},m(e,n){l&&l.m(e,n),v(e,t,n)},p(e,n){e[4].url==e[2]?l||(l=W(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(e){e&&_(t),l&&l.d(e)}}}function Y(o){let t,l=E(o[4].files),e=[];for(let n=0;n<l.length;n+=1)e[n]=Z(K(o,l,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=k()},l(n){for(let i=0;i<e.length;i+=1)e[i].l(n);t=k()},m(n,i){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(n,i);v(n,t,i)},p(n,i){if(i&2){l=E(n[4].files);let s;for(s=0;s<l.length;s+=1){const c=K(n,l,s);e[s]?e[s].p(c,i):(e[s]=Z(c),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=l.length}},d(n){n&&_(t),z(e,n)}}}function Z(o){let t,l,e=o[9].title+"",n,i,s;return{c(){t=A("li"),l=A("a"),n=M(e),s=V(),this.h()},l(c){t=F(c,"LI",{class:!0});var h=S(t);l=F(h,"A",{class:!0,href:!0});var d=S(l);n=O(d,e),d.forEach(_),s=y(h),h.forEach(_),this.h()},h(){N(l,"class","text-c-blue hover:text-c-yellow transition-colors underline whitespace-nowrap flex items-center h-full"),N(l,"href",i=`${o[4].url}${o[9].url}`),N(t,"class","h-full items-center not-last-child:after:content-c not-last-child:after:ml-6 not-last-child:after:text-white flex")},m(c,h){v(c,t,h),$(t,l),$(l,n),$(t,s)},p(c,h){h&2&&e!==(e=c[9].title+"")&&ne(n,e),h&2&&i!==(i=`${c[4].url}${c[9].url}`)&&N(l,"href",i)},d(c){c&&_(t)}}}function x(o){let t,l=o[4].url==o[2]&&Y(o);return{c(){l&&l.c(),t=k()},l(e){l&&l.l(e),t=k()},m(e,n){l&&l.m(e,n),v(e,t,n)},p(e,n){e[4].url==e[2]?l?l.p(e,n):(l=Y(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(e){e&&_(t),l&&l.d(e)}}}function ee(o){let t,l;return t=new me({props:{game:o[4]}}),{c(){fe(t.$$.fragment)},l(e){ue(t.$$.fragment,e)},m(e,n){he(t,e,n),l=!0},p(e,n){const i={};n&2&&(i.game=e[4]),t.$set(i)},i(e){l||(B(t.$$.fragment,e),l=!0)},o(e){q(t.$$.fragment,e),l=!1},d(e){_e(t,e)}}}function le(o){let t,l,e=o[4].url==o[2]&&ee(o);return{c(){e&&e.c(),t=k()},l(n){e&&e.l(n),t=k()},m(n,i){e&&e.m(n,i),v(n,t,i),l=!0},p(n,i){n[4].url==n[2]?e?(e.p(n,i),i&2&&B(e,1)):(e=ee(n),e.c(),B(e,1),e.m(t.parentNode,t)):e&&(re(),q(e,1,1,()=>{e=null}),te())},i(n){l||(B(e),l=!0)},o(n){q(e),l=!1},d(n){n&&_(t),e&&e.d(n)}}}function ge(o){let t,l,e,n,i,s,c,h,d,C,D,j,I=E(o[1]),m=[];for(let a=0;a<I.length;a+=1)m[a]=X(Q(o,I,a));let T=E(o[1]),p=[];for(let a=0;a<T.length;a+=1)p[a]=x(J(o,T,a));let w=E(o[1]),u=[];for(let a=0;a<w.length;a+=1)u[a]=le(G(o,w,a));const ae=a=>q(u[a],1,1,()=>{u[a]=null});return{c(){for(let a=0;a<m.length;a+=1)m[a].c();t=k(),l=V(),e=A("header"),n=A("nav"),i=A("ul");for(let a=0;a<p.length;a+=1)p[a].c();s=V();for(let a=0;a<u.length;a+=1)u[a].c();c=V(),h=A("main"),d=A("div"),C=M("Number of Files Translated => "),D=M(o[0]),this.h()},l(a){const f=ce("svelte-isilkx",document.head);for(let b=0;b<m.length;b+=1)m[b].l(f);t=k(),f.forEach(_),l=y(a),e=F(a,"HEADER",{class:!0});var r=S(e);n=F(r,"NAV",{});var g=S(n);i=F(g,"UL",{class:!0});var P=S(i);for(let b=0;b<p.length;b+=1)p[b].l(P);P.forEach(_),g.forEach(_),r.forEach(_),s=y(a);for(let b=0;b<u.length;b+=1)u[b].l(a);c=y(a),h=F(a,"MAIN",{class:!0});var R=S(h);d=F(R,"DIV",{class:!0});var H=S(d);C=O(H,"Number of Files Translated => "),D=O(H,o[0]),H.forEach(_),R.forEach(_),this.h()},h(){N(i,"class","flex items-center flex-nowrap overflow-auto gap-6 px-6 h-16"),N(e,"class","fixed top-0 inset-x-0 bg-black z-10"),N(d,"class","text-c-gray-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"),N(h,"class","max-w-c mx-auto")},m(a,f){for(let r=0;r<m.length;r+=1)m[r]&&m[r].m(document.head,null);$(document.head,t),v(a,l,f),v(a,e,f),$(e,n),$(n,i);for(let r=0;r<p.length;r+=1)p[r]&&p[r].m(i,null);v(a,s,f);for(let r=0;r<u.length;r+=1)u[r]&&u[r].m(a,f);v(a,c,f),v(a,h,f),$(h,d),$(d,C),$(d,D),j=!0},p(a,[f]){if(f&6){I=E(a[1]);let r;for(r=0;r<I.length;r+=1){const g=Q(a,I,r);m[r]?m[r].p(g,f):(m[r]=X(g),m[r].c(),m[r].m(t.parentNode,t))}for(;r<m.length;r+=1)m[r].d(1);m.length=I.length}if(f&6){T=E(a[1]);let r;for(r=0;r<T.length;r+=1){const g=J(a,T,r);p[r]?p[r].p(g,f):(p[r]=x(g),p[r].c(),p[r].m(i,null))}for(;r<p.length;r+=1)p[r].d(1);p.length=T.length}if(f&6){w=E(a[1]);let r;for(r=0;r<w.length;r+=1){const g=G(a,w,r);u[r]?(u[r].p(g,f),B(u[r],1)):(u[r]=le(g),u[r].c(),B(u[r],1),u[r].m(c.parentNode,c))}for(re(),r=w.length;r<u.length;r+=1)ae(r);te()}(!j||f&1)&&ne(D,a[0])},i(a){if(!j){for(let f=0;f<w.length;f+=1)B(u[f]);j=!0}},o(a){u=u.filter(Boolean);for(let f=0;f<u.length;f+=1)q(u[f]);j=!1},d(a){a&&(_(l),_(e),_(s),_(c),_(h)),z(m,a),_(t),z(p,a),z(u,a)}}}function be(o,t,l){let e,n;U(o,pe,c=>l(1,e=c)),U(o,de,c=>l(3,n=c));const i=n.url.pathname;let s=0;for(let c=0;c<e.length;c++){const h=e[c];if(h.url==i)for(let d=0;d<h.files.length;d++)s++}return[s,e,i]}class Ne extends ie{constructor(t){super(),se(this,t,be,ge,oe,{})}}export{Ne as component};
