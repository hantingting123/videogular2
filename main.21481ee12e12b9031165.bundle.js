webpackJsonp([2],{0:function(l,n,u){l.exports=u("cDNt")},cDNt:function(l,n,u){"use strict";function e(l){return _._18(0,[(l()(),_._4(0,null,null,6,"li",[],null,null,null,null,null)),(l()(),_._17(null,["\n        "])),(l()(),_._4(0,null,null,3,"a",[["class","hero-button hero-button__dark hero-button__arrow"]],null,[[null,"click"]],function(l,n,u){var e=!0,o=l.component;if("click"===n){e=!1!==o.updateDemo(l.context.$implicit)&&e}return e},null,null)),_._2(278528,null,0,d.c,[_.t,_.u,_.k,_.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),_._15({"hero-button__selected":0}),(l()(),_._17(null,["",""])),(l()(),_._17(null,["\n    "]))],function(l,n){var u=n.component;l(n,3,0,"hero-button hero-button__dark hero-button__arrow",l(n,4,0,n.context.$implicit===u.selectedDemo))},function(l,n){l(n,5,0,n.context.$implicit.label)})}function o(l){return _._18(0,[(l()(),_._4(0,null,null,13,"section",[["class","intro-description"]],null,null,null,null,null)),(l()(),_._17(null,["\n    "])),(l()(),_._4(0,null,null,1,"h2",[["class","section-title"]],null,null,null,null,null)),(l()(),_._17(null,["Incredibly powerful video apps"])),(l()(),_._17(null,["\n    "])),(l()(),_._4(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),_._17(null,["Videogular is designed as as a declarative framework, so you can compose Videogular elements with HTML5\n        standard markup."])),(l()(),_._17(null,["\n    "])),(l()(),_._4(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),_._17(null,["Build your media player with tags and attributes. No need to learn complex APIs or\n        config files to skin your video player, just plain CSS."])),(l()(),_._17(null,["\n\n    "])),(l()(),_._4(0,null,null,1,"a",[["class","hero-button hero-button__dark"],["href","https://videogular.github.io/videogular2/docs"],["target","_blank"]],null,null,null,null,null)),(l()(),_._17(null,["Get Started"])),(l()(),_._17(null,["\n"])),(l()(),_._17(null,["\n\n"])),(l()(),_._4(0,null,null,19,"section",[["class","demo"]],null,null,null,null,null)),_._2(278528,null,0,d.c,[_.t,_.u,_.k,_.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),_._15({"demo--enabled":0}),(l()(),_._17(null,["\n    "])),(l()(),_._4(0,null,null,1,"iframe",[["allowfullscreen","true"],["scrolling","no"]],[[8,"src",5]],null,null,null,null)),(l()(),_._17(null,["\n    "])),(l()(),_._17(null,["\n\n    "])),(l()(),_._4(0,null,null,11,"div",[["class","see-demo"]],null,null,null,null,null)),(l()(),_._17(null,["\n        "])),(l()(),_._4(0,null,null,1,"span",[["class","see-demo-label"]],null,null,null,null,null)),(l()(),_._17(null,["Live Demo"])),(l()(),_._17(null,["\n        "])),(l()(),_._4(0,null,null,5,"div",[["class","on-off-switch"]],null,null,null,null,null)),(l()(),_._17(null,["\n            "])),(l()(),_._4(0,null,null,0,"input",[["class","on-off-switch-checkbox"],["id","my-on-off-switch"],["type","checkbox"]],null,[[null,"change"]],function(l,n,u){var e=!0,o=l.component;if("change"===n){e=!1!=(o.isDemoEnabled=!o.isDemoEnabled)&&e}return e},null,null)),(l()(),_._17(null,["\n            "])),(l()(),_._4(0,null,null,0,"label",[["class","on-off-switch-label"],["for","my-on-off-switch"]],null,null,null,null,null)),(l()(),_._17(null,["\n        "])),(l()(),_._17(null,["\n    "])),(l()(),_._17(null,["\n\n"])),(l()(),_._17(null,["\n\n"])),(l()(),_._4(0,null,null,6,"ul",[["class","demo-buttons"]],null,null,null,null,null)),_._2(278528,null,0,d.c,[_.t,_.u,_.k,_.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),_._15({show:0}),(l()(),_._17(null,["\n    "])),(l()(),_.Y(16777216,null,null,1,null,e)),_._2(802816,null,0,d.d,[_.N,_.K,_.t],{ngForOf:[0,"ngForOf"]},null),(l()(),_._17(null,["\n"])),(l()(),_._17(null,["\n"]))],function(l,n){var u=n.component;l(n,16,0,"demo",l(n,17,0,u.isDemoEnabled));l(n,37,0,"demo-buttons",l(n,38,0,u.isDemoEnabled)),l(n,41,0,u.demos)},function(l,n){l(n,19,0,n.component.currentDemo)})}function t(l){return _._18(0,[(l()(),_._4(0,null,null,1,"app-root",[],null,null,null,o,m)),_._2(114688,null,0,a,[b.b],null,null)],function(l,n){l(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var s={production:!0},i=function(){function l(){}return l}(),r=u("fc+i"),a=function(){function l(l){this.sanitizer=l,this.isDemoEnabled=!1,this.demos=[{label:"Picture-in-Picture",src:"https://videogular.github.io/videogular2-showroom/#/master-player?standalone=true"},{label:"Cue points",src:"https://videogular.github.io/videogular2-showroom/#/cue-points-player?standalone=true"},{label:"Play Anything",src:"https://videogular.github.io/videogular2-showroom/#/custom-media?standalone=true"},{label:"Advertisement",src:"https://videogular.github.io/videogular2-showroom/#/google-ima-player?standalone=true"}]}return l.prototype.ngOnInit=function(){this.updateDemo(this.demos[0])},l.prototype.updateDemo=function(l){this.currentDemo=this.sanitizer.bypassSecurityTrustResourceUrl(l.src),this.selectedDemo=l},l.ctorParameters=function(){return[{type:r.b}]},l}(),c=[""],_=u("/oeL"),d=u("qbdv"),b=u("fc+i"),f=[c],m=_._1({encapsulation:2,styles:f,data:{}}),p=_.Z("app-root",a,t,{},{},[]),h=u("/oeL"),g=u("qbdv"),v=u("fc+i"),y=h._0(i,[a],function(l){return h._13([h._14(512,h.i,h.W,[[8,[p]],[3,h.i],h.x]),h._14(5120,h.v,h._12,[[3,h.v]]),h._14(4608,g.f,g.e,[h.v]),h._14(4608,h.h,h.h,[]),h._14(5120,h.a,h._5,[]),h._14(5120,h.t,h._10,[]),h._14(5120,h.u,h._11,[]),h._14(4608,v.b,v.s,[g.b]),h._14(6144,h.H,null,[v.b]),h._14(4608,v.e,v.f,[]),h._14(5120,v.c,function(l,n,u,e){return[new v.k(l),new v.o(n),new v.n(u,e)]},[g.b,g.b,g.b,v.e]),h._14(4608,v.d,v.d,[v.c,h.z]),h._14(135680,v.m,v.m,[g.b]),h._14(4608,v.l,v.l,[v.d,v.m]),h._14(6144,h.F,null,[v.l]),h._14(6144,v.p,null,[v.m]),h._14(4608,h.L,h.L,[h.z]),h._14(4608,v.g,v.g,[g.b]),h._14(4608,v.i,v.i,[g.b]),h._14(512,g.a,g.a,[]),h._14(1024,h.l,v.q,[]),h._14(1024,h.b,function(l,n){return[v.r(l,n)]},[[2,v.h],[2,h.y]]),h._14(512,h.c,h.c,[[2,h.b]]),h._14(131584,h._3,h._3,[h.z,h.X,h.r,h.l,h.i,h.c]),h._14(2048,h.e,null,[h._3]),h._14(512,h.d,h.d,[h.e]),h._14(512,v.a,v.a,[[3,v.a]]),h._14(512,i,i,[])])}),k=u("/oeL"),w=u("fc+i");s.production&&Object(k.R)(),Object(w.j)().bootstrapModuleFactory(y)},gFIY:function(l,n){function u(l){return new Promise(function(n,u){u(new Error("Cannot find module '"+l+"'."))})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="gFIY"}},[0]);