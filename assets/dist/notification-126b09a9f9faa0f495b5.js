"use strict";(self.webpackChunkcardanopress=self.webpackChunkcardanopress||[]).push([[599],{607:function(i,n,e){e.a(i,(async function(i){var n=e(526),t=i([n]);n=(t.then?await t:t)[0],window.addEventListener("alpine:init",(function(){(window.Alpine||{}).store("toastNotification",{list:[],visible:[],init:function(){var i=this;window.addEventListener("cardanoPress:addNotice",(function(n){return i.add(n.detail)})),window.addEventListener("cardanoPress:removeNotice",(function(n){return i.remove(n.detail)}))},add:function(i){var e=this;null!=i&&i.id||(i.id=n.generateUuid,i.unique=!0),null!=i&&i.unique||this.remove(i.id),this.list.push(i),this.visible.push(i),null!=i&&i.unique&&setTimeout((function(){e.remove(i.id)}),5e3*this.list.length)},remove:function(i){[this.visible,this.list].forEach((function(n){var e=n.find((function(n){return n.id===i})),t=n.indexOf(e);0<=t&&n.splice(t,1)}))}})}))}))}},function(i){i(i.s=607)}]);