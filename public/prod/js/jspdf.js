var jsPDF=function(){"use strict";function n(r,i,s,o){if(typeof r==="undefined"){r="p"}else{r=r.toString().toLowerCase()}if(typeof i==="undefined"){i="mm"}if(typeof s==="undefined"){s="a4"}if(typeof o==="undefined"&&typeof zpipe==="undefined"){o=false}var u=s.toString().toLowerCase(),a="0.9.0rc2",f=[],l=0,c=o,h="1.3",p={a3:[841.89,1190.55],a4:[595.28,841.89],a5:[420.94,595.28],letter:[612,792],legal:[612,1008]},d="0 g",v="0 G",m=0,g=[],y=2,b=false,w=[],E={},S={},x=16,T,N=.200025,C,k,L,A={title:"",subject:"",author:"",keywords:"",creator:""},O=0,M=0,_={},D=new t(_),P,H,B=function(e){return e.toFixed(2)},j=function(e){return e.toFixed(3)},F=function(e){var t=e.toFixed(0);if(e<10){return"0"+t}else{return t}},I=function(e){var t=e.toFixed(0);if(t.length<10){return(new Array(11-t.length)).join("0")+t}else{return t}},q=function(e){if(b){g[m].push(e)}else{f.push(e);l+=e.length+1}},R=function(){y++;w[y]=l;q(y+" 0 obj");return y},U=function(e){q("stream");q(e);q("endstream")},z,W,X,V,$=function(){z=k*L;W=C*L;var e,t,n,r,i,s,o;for(e=1;e<=m;e++){R();q("<</Type /Page");q("/Parent 1 0 R");q("/Resources 2 0 R");q("/Contents "+(y+1)+" 0 R>>");q("endobj");t=g[e].join("\n");R();if(c){n=[];for(i=0;i<t.length;++i){n[i]=t.charCodeAt(i)}o=adler32cs.from(t);s=new Deflater(6);s.append(new Uint8Array(n));t=s.flush();n=[new Uint8Array([120,156]),new Uint8Array(t),new Uint8Array([o&255,o>>8&255,o>>16&255,o>>24&255])];t="";for(i in n){if(n.hasOwnProperty(i)){t+=String.fromCharCode.apply(null,n[i])}}q("<</Length "+t.length+" /Filter [/FlateDecode]>>")}else{q("<</Length "+t.length+">>")}U(t);q("endobj")}w[1]=l;q("1 0 obj");q("<</Type /Pages");X="/Kids [";for(i=0;i<m;i++){X+=3+2*i+" 0 R "}q(X+"]");q("/Count "+m);q("/MediaBox [0 0 "+B(z)+" "+B(W)+"]");q(">>");q("endobj")},J=function(e){e.objectNumber=R();q("<</BaseFont/"+e.PostScriptName+"/Type/Font");if(typeof e.encoding==="string"){q("/Encoding/"+e.encoding)}q("/Subtype/Type1>>");q("endobj")},K=function(){var e;for(e in E){if(E.hasOwnProperty(e)){J(E[e])}}},Q=function(){D.publish("putXobjectDict")},G=function(){q("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]");q("/Font <<");var e;for(e in E){if(E.hasOwnProperty(e)){q("/"+e+" "+E[e].objectNumber+" 0 R")}}q(">>");q("/XObject <<");Q();q(">>")},Y=function(){K();D.publish("putResources");w[2]=l;q("2 0 obj");q("<<");G();q(">>");q("endobj");D.publish("postPutResources")},Z=function(e,t,n){var r;if(S[t]===r){S[t]={}}S[t][n]=e},et={},tt=function(t,n,r,i){var s="F"+(e(E)+1).toString(10),o=E[s]={id:s,PostScriptName:t,fontName:n,fontStyle:r,encoding:i,metadata:{}};Z(s,n,r);D.publish("addFont",o);return s},nt=function(){var e="helvetica",t="times",n="courier",r="normal",i="bold",s="italic",o="bolditalic",u="StandardEncoding",a=[["Helvetica",e,r],["Helvetica-Bold",e,i],["Helvetica-Oblique",e,s],["Helvetica-BoldOblique",e,o],["Courier",n,r],["Courier-Bold",n,i],["Courier-Oblique",n,s],["Courier-BoldOblique",n,o],["Times-Roman",t,r],["Times-Bold",t,i],["Times-Italic",t,s],["Times-BoldItalic",t,o]],f,l,c,h;for(f=0,l=a.length;f<l;f++){c=tt(a[f][0],a[f][1],a[f][2],u);h=a[f][0].split("-");Z(c,h[0],h[1]||"")}D.publish("addFonts",{fonts:E,dictionary:S})},rt=function(e,t){var n,r,i,s,o,u,a,f,l,c;if(t===i){t={}}s=t.sourceEncoding?s:"Unicode";u=t.outputEncoding;if((t.autoencode||u)&&E[T].metadata&&E[T].metadata[s]&&E[T].metadata[s].encoding){o=E[T].metadata[s].encoding;if(!u&&E[T].encoding){u=E[T].encoding}if(!u&&o.codePages){u=o.codePages[0]}if(typeof u==="string"){u=o[u]}if(u){f=false;a=[];for(n=0,r=e.length;n<r;n++){l=u[e.charCodeAt(n)];if(l){a.push(String.fromCharCode(l))}else{a.push(e[n])}if(a[n].charCodeAt(0)>>8){f=true}}e=a.join("")}}n=e.length;while(f===i&&n!==0){if(e.charCodeAt(n-1)>>8){f=true}n--}if(!f){return e}else{a=t.noBOM?[]:[254,255];for(n=0,r=e.length;n<r;n++){l=e.charCodeAt(n);c=l>>8;if(c>>8){throw new Error("Character at position "+n.toString(10)+" of string '"+e+"' exceeds 16bits. Cannot be encoded into UCS-2 BE")}a.push(c);a.push(l-(c<<8))}return String.fromCharCode.apply(i,a)}},it=function(e,t){return rt(e,t).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},st=function(){q("/Producer (jsPDF "+a+")");if(A.title){q("/Title ("+it(A.title)+")")}if(A.subject){q("/Subject ("+it(A.subject)+")")}if(A.author){q("/Author ("+it(A.author)+")")}if(A.keywords){q("/Keywords ("+it(A.keywords)+")")}if(A.creator){q("/Creator ("+it(A.creator)+")")}var e=new Date;q("/CreationDate (D:"+[e.getFullYear(),F(e.getMonth()+1),F(e.getDate()),F(e.getHours()),F(e.getMinutes()),F(e.getSeconds())].join("")+")")},ot=function(){q("/Type /Catalog");q("/Pages 1 0 R");q("/OpenAction [3 0 R /FitH null]");q("/PageLayout /OneColumn");D.publish("putCatalog")},ut=function(){q("/Size "+(y+1));q("/Root "+y+" 0 R");q("/Info "+(y-1)+" 0 R")},at=function(){m++;b=true;g[m]=[]},ft=function(){at();q(B(N*L)+" w");q(v);if(O!==0){q(O.toString(10)+" J")}if(M!==0){q(M.toString(10)+" j")}D.publish("addPage",{pageNumber:m})},lt=function(e,t){var n,r;if(e===r){e=E[T].fontName}if(t===r){t=E[T].fontStyle}try{n=S[e][t]}catch(i){n=r}if(!n){throw new Error("Unable to look up font label for font '"+e+"', '"+t+"'. Refer to getFontList() for available fonts.")}return n},ct=function(){b=false;f=[];w=[];q("%PDF-"+h);$();Y();R();q("<<");st();q(">>");q("endobj");R();q("<<");ot();q(">>");q("endobj");var e=l,t;q("xref");q("0 "+(y+1));q("0000000000 65535 f ");for(t=1;t<=y;t++){q(I(w[t])+" 00000 n ")}q("trailer");q("<<");ut();q(">>");q("startxref");q(e);q("%%EOF");b=true;return f.join("\n")},ht=function(e){var t="S";if(e==="F"){t="f"}else if(e==="FD"||e==="DF"){t="B"}return t},pt=function(e,t){var n,r,i,s,o,u;switch(e){case n:return ct();case"save":if(navigator.getUserMedia){if(window.URL===undefined){return _.output("dataurlnewwindow")}else if(window.URL.createObjectURL===undefined){return _.output("dataurlnewwindow")}}r=ct();i=r.length;s=new Uint8Array(new ArrayBuffer(i));for(o=0;o<i;o++){s[o]=r.charCodeAt(o)}u=new Blob([s],{type:"application/pdf"});saveAs(u,t);break;case"datauristring":case"dataurlstring":return"data:application/pdf;base64,"+btoa(ct());case"datauri":case"dataurl":document.location.href="data:application/pdf;base64,"+btoa(ct());break;case"dataurlnewwindow":window.open("data:application/pdf;base64,"+btoa(ct()));break;default:throw new Error('Output type "'+e+'" is not supported.')}};if(i==="pt"){L=1}else if(i==="mm"){L=72/25.4}else if(i==="cm"){L=72/2.54}else if(i==="in"){L=72}else{throw"Invalid unit: "+i}if(p.hasOwnProperty(u)){C=p[u][1]/L;k=p[u][0]/L}else{try{C=s[1];k=s[0]}catch(dt){throw"Invalid format: "+s}}if(r==="p"||r==="portrait"){r="p";if(k>C){P=k;k=C;C=P}}else if(r==="l"||r==="landscape"){r="l";if(C>k){P=k;k=C;C=P}}else{throw"Invalid orientation: "+r}_.internal={pdfEscape:it,getStyle:ht,getFont:function(){return E[lt.apply(_,arguments)]},getFontSize:function(){return x},btoa:btoa,write:function(e,t,n,r){q(arguments.length===1?e:Array.prototype.join.call(arguments," "))},getCoordinateString:function(e){return B(e*L)},getVerticalCoordinateString:function(e){return B((C-e)*L)},collections:{},newObject:R,putStream:U,events:D,scaleFactor:L,pageSize:{width:k,height:C},output:function(e,t){return pt(e,t)}};_.addPage=function(){ft();return this};_.text=function(e,t,n,r){var i,s,o,u,a,f,l;if(typeof e==="number"){s=n;o=e;u=t;e=s;t=o;n=u}if(typeof e==="string"&&e.match(/[\n\r]/)){e=e.split(/\r\n|\r|\n/g)}if(typeof r==="undefined"){r={noBOM:true,autoencode:true}}else{if(r.noBOM===i){r.noBOM=true}if(r.autoencode===i){r.autoencode=true}}if(typeof e==="string"){f=it(e,r)}else if(e instanceof Array){a=e.concat();for(l=a.length-1;l!==-1;l--){a[l]=it(a[l],r)}f=a.join(") Tj\nT* (")}else{throw new Error('Type of text must be string or Array. "'+e+'" is not recognized.')}q("BT\n/"+T+" "+x+" Tf\n"+x+" TL\n"+d+"\n"+B(t*L)+" "+B((C-n)*L)+" Td\n("+f+") Tj\nET");return this};_.line=function(e,t,n,r){q(B(e*L)+" "+B((C-t)*L)+" m "+B(n*L)+" "+B((C-r)*L)+" l S");return this};_.lines=function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,v,m,g,y,b;if(typeof e==="number"){o=n;u=e;a=t;e=o;t=u;n=a}i=ht(i);r=r===s?[1,1]:r;q(j(t*L)+" "+j((C-n)*L)+" m ");f=r[0];l=r[1];h=e.length;y=t;b=n;for(c=0;c<h;c++){p=e[c];if(p.length===2){y=p[0]*f+y;b=p[1]*l+b;q(j(y*L)+" "+j((C-b)*L)+" l")}else{d=p[0]*f+y;v=p[1]*l+b;m=p[2]*f+y;g=p[3]*l+b;y=p[4]*f+y;b=p[5]*l+b;q(j(d*L)+" "+j((C-v)*L)+" "+j(m*L)+" "+j((C-g)*L)+" "+j(y*L)+" "+j((C-b)*L)+" c")}}q(i);return this};_.rect=function(e,t,n,r,i){var s=ht(i);q([B(e*L),B((C-t)*L),B(n*L),B(-r*L),"re",s].join(" "));return this};_.triangle=function(e,t,n,r,i,s,o){this.lines([[n-e,r-t],[i-n,s-r],[e-i,t-s]],e,t,[1,1],o);return this};_.roundedRect=function(e,t,n,r,i,s,o){var u=4/3*(Math.SQRT2-1);this.lines([[n-2*i,0],[i*u,0,i,s-s*u,i,s],[0,r-2*s],[0,s*u,-(i*u),s,-i,s],[-n+2*i,0],[-(i*u),0,-i,-(s*u),-i,-s],[0,-r+2*s],[0,-(s*u),i*u,-s,i,-s]],e+i,t,[1,1],o);return this};_.ellipse=function(e,t,n,r,i){var s=ht(i),o=4/3*(Math.SQRT2-1)*n,u=4/3*(Math.SQRT2-1)*r;q([B((e+n)*L),B((C-t)*L),"m",B((e+n)*L),B((C-(t-u))*L),B((e+o)*L),B((C-(t-r))*L),B(e*L),B((C-(t-r))*L),"c"].join(" "));q([B((e-o)*L),B((C-(t-r))*L),B((e-n)*L),B((C-(t-u))*L),B((e-n)*L),B((C-t)*L),"c"].join(" "));q([B((e-n)*L),B((C-(t+u))*L),B((e-o)*L),B((C-(t+r))*L),B(e*L),B((C-(t+r))*L),"c"].join(" "));q([B((e+o)*L),B((C-(t+r))*L),B((e+n)*L),B((C-(t+u))*L),B((e+n)*L),B((C-t)*L),"c",s].join(" "));return this};_.circle=function(e,t,n,r){return this.ellipse(e,t,n,n,r)};_.setProperties=function(e){var t;for(t in A){if(A.hasOwnProperty(t)&&e[t]){A[t]=e[t]}}return this};_.setFontSize=function(e){x=e;return this};_.setFont=function(e,t){T=lt(e,t);return this};_.setFontStyle=_.setFontType=function(e){var t;T=lt(t,e);return this};_.getFontList=function(){var e={},t,n,r;for(t in S){if(S.hasOwnProperty(t)){e[t]=r=[];for(n in S[t]){if(S[t].hasOwnProperty(n)){r.push(n)}}}}return e};_.setLineWidth=function(e){q((e*L).toFixed(2)+" w");return this};_.setDrawColor=function(e,t,n,r){var i;if(t===undefined||r===undefined&&e===t===n){if(typeof e==="string"){i=e+" G"}else{i=B(e/255)+" G"}}else if(r===undefined){if(typeof e==="string"){i=[e,t,n,"RG"].join(" ")}else{i=[B(e/255),B(t/255),B(n/255),"RG"].join(" ")}}else{if(typeof e==="string"){i=[e,t,n,r,"K"].join(" ")}else{i=[B(e),B(t),B(n),B(r),"K"].join(" ")}}q(i);return this};_.setFillColor=function(e,t,n,r){var i;if(t===undefined||r===undefined&&e===t===n){if(typeof e==="string"){i=e+" g"}else{i=B(e/255)+" g"}}else if(r===undefined){if(typeof e==="string"){i=[e,t,n,"rg"].join(" ")}else{i=[B(e/255),B(t/255),B(n/255),"rg"].join(" ")}}else{if(typeof e==="string"){i=[e,t,n,r,"k"].join(" ")}else{i=[B(e),B(t),B(n),B(r),"k"].join(" ")}}q(i);return this};_.setTextColor=function(e,t,n){if(e===0&&t===0&&n===0||typeof t==="undefined"){d=j(e/255)+" g"}else{d=[j(e/255),j(t/255),j(n/255),"rg"].join(" ")}return this};_.CapJoinStyles={0:0,butt:0,but:0,bevel:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,milter:2};_.setLineCap=function(e){var t=this.CapJoinStyles[e];if(t===undefined){throw new Error("Line cap style of '"+e+"' is not recognized. See or extend .CapJoinStyles property for valid styles")}O=t;q(t.toString(10)+" J");return this};_.setLineJoin=function(e){var t=this.CapJoinStyles[e];if(t===undefined){throw new Error("Line join style of '"+e+"' is not recognized. See or extend .CapJoinStyles property for valid styles")}M=t;q(t.toString(10)+" j");return this};_.output=pt;_.save=function(e){_.output("save",e)};for(H in n.API){if(n.API.hasOwnProperty(H)){if(H==="events"&&n.API.events.length){(function(e,t){var n,r,i;for(i=t.length-1;i!==-1;i--){n=t[i][0];r=t[i][1];e.subscribe.apply(e,[n].concat(typeof r==="function"?[r]:r))}})(D,n.API.events)}else{_[H]=n.API[H]}}}nt();T="F1";ft();D.publish("initialized");return _}if(typeof btoa==="undefined"){window.btoa=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=t.split(""),r,i,s,o,u,a,f,l,c=0,h=0,p="",d=[],v;do{r=e.charCodeAt(c++);i=e.charCodeAt(c++);s=e.charCodeAt(c++);l=r<<16|i<<8|s;o=l>>18&63;u=l>>12&63;a=l>>6&63;f=l&63;d[h++]=n[o]+n[u]+n[a]+n[f]}while(c<e.length);p=d.join("");v=e.length%3;return(v?p.slice(0,v-3):p)+"===".slice(v||3)}}if(typeof atob==="undefined"){window.atob=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n,r,i,s,o,u,a,f,l=0,c=0,h="",p=[];if(!e){return e}e+="";do{s=t.indexOf(e.charAt(l++));o=t.indexOf(e.charAt(l++));u=t.indexOf(e.charAt(l++));a=t.indexOf(e.charAt(l++));f=s<<18|o<<12|u<<6|a;n=f>>16&255;r=f>>8&255;i=f&255;if(u===64){p[c++]=String.fromCharCode(n)}else if(a===64){p[c++]=String.fromCharCode(n,r)}else{p[c++]=String.fromCharCode(n,r,i)}}while(l<e.length);h=p.join("");return h}}var e=typeof Object.keys==="function"?function(e){return Object.keys(e).length}:function(e){var t=0,n;for(n in e){if(e.hasOwnProperty(n)){t++}}return t},t=function(e){this.topics={};this.context=e;this.publish=function(e,t){if(this.topics[e]){var n=this.topics[e],r=[],i,s,o,u,a=function(){};t=Array.prototype.slice.call(arguments,1);for(s=0,o=n.length;s<o;s++){u=n[s];i=u[0];if(u[1]){u[0]=a;r.push(s)}i.apply(this.context,t)}for(s=0,o=r.length;s<o;s++){n.splice(r[s],1)}}};this.subscribe=function(e,t,n){if(!this.topics[e]){this.topics[e]=[[t,n]]}else{this.topics[e].push([t,n])}return{topic:e,callback:t}};this.unsubscribe=function(e){if(this.topics[e.topic]){var t=this.topics[e.topic],n,r;for(n=0,r=t.length;n<r;n++){if(t[n][0]===e.callback){t.splice(n,1)}}}}};n.API={events:[]};return n}()