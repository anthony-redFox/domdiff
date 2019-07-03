var domdiff=function(){"use strict";/*! (c) Andrea Giammarchi - ISC */
var r={};try{r.Map=Map}catch(Map){r.Map=function(){function r(r){return-1<(n=e.indexOf(r))}var n=0,e=[],t=[];return{"delete":function(o){var f=r(o);return f&&(e.splice(n,1),t.splice(n,1)),f},get:function(e){return r(e)?t[n]:void 0},has:function(n){return r(n)},set:function(o,f){return t[r(o)?n:e.push(o)-1]=f,this}}}}var n=r.Map,e=function(r,n,e,t,o,f){for(;t<o;)n.insertBefore(r(e[t++],1),f)},t=function(r,n){return r==n},o=function(r){return r},f=function(r,n,e,t,o,f,i){var u=f-o;if(u<1)return-1;for(;e-n>=u;){for(var a=n,c=o;a<e&&c<f&&i(r[a],t[c]);)a++,c++;if(c===f)return n;n=a+1}return-1},i=function(r,n,e,t,o,f){for(;t<o&&f(e[t],r[n-1]);)t++,n--;return 0===n},u=function(r,n,e,t,o){return e<t?r(n[e],0):0<e?r(n[e-1],-0).nextSibling:o},a=function(r,n,e,t,o){if(o-t<2)n.removeChild(r(e[t],-1));else{var f=n.ownerDocument.createRange();f.setStartBefore(r(e[t],-1)),f.setEndAfter(r(e[o-1],-1)),f.deleteContents()}},c=function(r,e,t,o,f,i,u,a){var c=0,v=o<a?o:a,s=Array(v++),d=Array(v);d[0]=-1;for(var h=1;h<v;h++)d[h]=u;for(var p=new n,g=i;g<u;g++)p.set(f[g],g);for(var b=e;b<t;b++){var w=p.get(r[b]);null!=w&&-1<(c=l(d,v,w))&&(d[c]=w,s[c]={newi:b,oldi:w,prev:s[c-1]})}for(c=--v,--u;d[c]>u;)--c;v=a+o-c;var k=Array(v),y=s[c];for(--t;y;){for(var A=y,M=A.newi,m=A.oldi;t>M;)k[--v]=1,--t;for(;u>m;)k[--v]=-1,--u;k[--v]=0,--t,--u,y=y.prev}for(;t>=e;)k[--v]=1,--t;for(;u>=i;)k[--v]=-1,--u;return k},v=function(r,n,e,t,o,f,i){var u=e+f,a=[],c=void 0,v=void 0,s=void 0,l=void 0,d=void 0,h=void 0,p=void 0;r:for(c=0;c<=u;c++){if(c>50)return null;for(p=c-1,d=c?a[c-1]:[0,0],h=a[c]=[],v=-c;v<=c;v+=2){for(l=v===-c||v!==c&&d[p+v-1]<d[p+v+1]?d[p+v+1]:d[p+v-1]+1,s=l-v;l<f&&s<e&&i(t[o+l],r[n+s]);)l++,s++;if(l===f&&s===e)break r;h[c+v]=l}}var g=Array(c/2+u/2),b=g.length-1;for(c=a.length-1;c>=0;c--){for(;l>0&&s>0&&i(t[o+l-1],r[n+s-1]);)g[b--]=0,l--,s--;if(!c)break;p=c-1,d=c?a[c-1]:[0,0],v=l-s,v===-c||v!==c&&d[p+v-1]<d[p+v+1]?(s--,g[b--]=1):(l--,g[b--]=-1)}return g},s=function(r,t,o,f,i,u,c,v,s){for(var l=new n,d=r.length,h=c,p=0;p<d;)switch(r[p++]){case 0:i++,h++;break;case 1:l.set(f[i],1),e(t,o,f,i++,i,h<v?t(u[h],0):s);break;case-1:h++}for(p=0;p<d;)switch(r[p++]){case 0:c++;break;case-1:l.has(u[c])?c++:a(t,o,u,c++,c)}},l=function(r,n,e){for(var t=1,o=n;t<o;){var f=(t+o)/2>>>0;e<r[f]?o=f:t=f+1}return t},d=function(r,n,e,t,o,f,i,u,a,l,d,h,p){s(v(e,t,f,i,u,l,h)||c(e,t,o,f,i,u,a,l),r,n,e,t,i,u,d,p)};return function(r,n,c,v){v||(v={});for(var s=v.compare||t,l=v.node||o,h=null==v.before?null:l(v.before,0),p=n.length,g=p,b=0,w=c.length,k=0;b<g&&k<w&&s(n[b],c[k]);)b++,k++;for(;b<g&&k<w&&s(n[g-1],c[w-1]);)g--,w--;var y=b===g,A=k===w;if(y&&A)return c;if(y&&k<w)return e(l,r,c,k,w,u(l,n,b,p,h)),c;if(A&&b<g)return a(l,r,n,b,g),c;var M=g-b,m=w-k,x=-1;if(M<m){if(-1<(x=f(c,k,w,n,b,g,s)))return e(l,r,c,k,x,l(n[b],0)),e(l,r,c,x+M,w,u(l,n,g,p,h)),c}else if(m<M&&-1<(x=f(n,b,g,c,k,w,s)))return a(l,r,n,b,x),a(l,r,n,x+m,g),c;return M<2||m<2?(e(l,r,c,k,w,l(n[b],0)),a(l,r,n,b,g),c):M===m&&i(c,w,n,b,g,s)?(e(l,r,c,k,w,u(l,n,g,p,h)),c):(d(l,r,c,k,w,m,n,b,g,M,p,s,h),c)}}();