(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"dP+9":function(t,e,n){"use strict";n.r(e),n.d(e,"startStatusTap",function(){return r});var o=n("wEJo"),s=n("1vRN");const r=()=>{const t=window;t.addEventListener("statusTap",()=>{Object(o.h)(()=>{const e=document.elementFromPoint(t.innerWidth/2,t.innerHeight/2);if(!e)return;const n=e.closest("ion-content");n&&new Promise(t=>Object(s.c)(n,t)).then(()=>{Object(o.f)(async()=>{n.style.setProperty("--overflow","hidden"),await n.scrollToTop(300),n.style.removeProperty("--overflow")})})})})}}}]);