!function(a){a.color={},a.color.make=function(b,c,d,e){var f={};return f.r=b||0,f.g=c||0,f.b=d||0,f.a=null!=e?e:1,f.add=function(a,b){for(var c=0;c<a.length;++c)f[a.charAt(c)]+=b;return f.normalize()},f.scale=function(a,b){for(var c=0;c<a.length;++c)f[a.charAt(c)]*=b;return f.normalize()},f.toString=function(){return f.a>=1?"rgb("+[f.r,f.g,f.b].join(",")+")":"rgba("+[f.r,f.g,f.b,f.a].join(",")+")"},f.normalize=function(){function a(a,b,c){return b<a?a:b>c?c:b}return f.r=a(0,parseInt(f.r),255),f.g=a(0,parseInt(f.g),255),f.b=a(0,parseInt(f.b),255),f.a=a(0,f.a,1),f},f.clone=function(){return a.color.make(f.r,f.b,f.g,f.a)},f.normalize()},a.color.extract=function(b,c){var d;do{if(d=b.css(c).toLowerCase(),""!=d&&"transparent"!=d)break;b=b.parent()}while(!a.nodeName(b.get(0),"body"));return"rgba(0, 0, 0, 0)"==d&&(d="transparent"),a.color.parse(d)},a.color.parse=function(c){var d,e=a.color.make;if(d=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return e(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10));if(d=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c))return e(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),parseFloat(d[4]));if(d=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return e(2.55*parseFloat(d[1]),2.55*parseFloat(d[2]),2.55*parseFloat(d[3]));if(d=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c))return e(2.55*parseFloat(d[1]),2.55*parseFloat(d[2]),2.55*parseFloat(d[3]),parseFloat(d[4]));if(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return e(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16));if(d=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return e(parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16));var f=a.trim(c).toLowerCase();return"transparent"==f?e(255,255,255,0):(d=b[f]||[0,0,0],e(d[0],d[1],d[2]))};var b={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}}(jQuery),function(a){function b(b,c){var d=c.children("."+b)[0];if(null==d&&(d=document.createElement("canvas"),d.className=b,a(d).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(c),!d.getContext)){if(!window.G_vmlCanvasManager)throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");d=window.G_vmlCanvasManager.initElement(d)}this.element=d;var e=this.context=d.getContext("2d"),f=window.devicePixelRatio||1,g=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;this.pixelRatio=f/g,this.resize(c.width(),c.height()),this.textContainer=null,this.text={},this._textCache={}}function c(c,e,f,g){function h(a,b){b=[qa].concat(b);for(var c=0;c<a.length;++c)a[c].apply(this,b)}function i(){for(var c={Canvas:b},d=0;d<g.length;++d){var e=g[d];e.init(qa,c),e.options&&a.extend(!0,ea,e.options)}}function j(b){a.extend(!0,ea,b),b&&b.colors&&(ea.colors=b.colors),null==ea.xaxis.color&&(ea.xaxis.color=a.color.parse(ea.grid.color).scale("a",.22).toString()),null==ea.yaxis.color&&(ea.yaxis.color=a.color.parse(ea.grid.color).scale("a",.22).toString()),null==ea.xaxis.tickColor&&(ea.xaxis.tickColor=ea.grid.tickColor||ea.xaxis.color),null==ea.yaxis.tickColor&&(ea.yaxis.tickColor=ea.grid.tickColor||ea.yaxis.color),null==ea.grid.borderColor&&(ea.grid.borderColor=ea.grid.color),null==ea.grid.tickColor&&(ea.grid.tickColor=a.color.parse(ea.grid.color).scale("a",.22).toString());var d,e,f,g={style:c.css("font-style"),size:Math.round(.8*(+c.css("font-size").replace("px","")||13)),variant:c.css("font-variant"),weight:c.css("font-weight"),family:c.css("font-family")};for(g.lineHeight=1.15*g.size,f=ea.xaxes.length||1,d=0;d<f;++d)e=ea.xaxes[d],e&&!e.tickColor&&(e.tickColor=e.color),e=a.extend(!0,{},ea.xaxis,e),ea.xaxes[d]=e,e.font&&(e.font=a.extend({},g,e.font),e.font.color||(e.font.color=e.color));for(f=ea.yaxes.length||1,d=0;d<f;++d)e=ea.yaxes[d],e&&!e.tickColor&&(e.tickColor=e.color),e=a.extend(!0,{},ea.yaxis,e),ea.yaxes[d]=e,e.font&&(e.font=a.extend({},g,e.font),e.font.color||(e.font.color=e.color));for(ea.xaxis.noTicks&&null==ea.xaxis.ticks&&(ea.xaxis.ticks=ea.xaxis.noTicks),ea.yaxis.noTicks&&null==ea.yaxis.ticks&&(ea.yaxis.ticks=ea.yaxis.noTicks),ea.x2axis&&(ea.xaxes[1]=a.extend(!0,{},ea.xaxis,ea.x2axis),ea.xaxes[1].position="top"),ea.y2axis&&(ea.yaxes[1]=a.extend(!0,{},ea.yaxis,ea.y2axis),ea.yaxes[1].position="right"),ea.grid.coloredAreas&&(ea.grid.markings=ea.grid.coloredAreas),ea.grid.coloredAreasColor&&(ea.grid.markingsColor=ea.grid.coloredAreasColor),ea.lines&&a.extend(!0,ea.series.lines,ea.lines),ea.points&&a.extend(!0,ea.series.points,ea.points),ea.bars&&a.extend(!0,ea.series.bars,ea.bars),null!=ea.shadowSize&&(ea.series.shadowSize=ea.shadowSize),null!=ea.highlightColor&&(ea.series.highlightColor=ea.highlightColor),d=0;d<ea.xaxes.length;++d)q(ka,d+1).options=ea.xaxes[d];for(d=0;d<ea.yaxes.length;++d)q(la,d+1).options=ea.yaxes[d];for(var i in pa)ea.hooks[i]&&ea.hooks[i].length&&(pa[i]=pa[i].concat(ea.hooks[i]));h(pa.processOptions,[ea])}function k(a){da=l(a),r(),s()}function l(b){for(var c=[],d=0;d<b.length;++d){var e=a.extend(!0,{},ea.series);null!=b[d].data?(e.data=b[d].data,delete b[d].data,a.extend(!0,e,b[d]),b[d].data=e.data):e.data=b[d],c.push(e)}return c}function m(a,b){var c=a[b+"axis"];return"object"==typeof c&&(c=c.n),"number"!=typeof c&&(c=1),c}function n(){return a.grep(ka.concat(la),function(a){return a})}function o(a){var b,c,d={};for(b=0;b<ka.length;++b)c=ka[b],c&&c.used&&(d["x"+c.n]=c.c2p(a.left));for(b=0;b<la.length;++b)c=la[b],c&&c.used&&(d["y"+c.n]=c.c2p(a.top));return void 0!==d.x1&&(d.x=d.x1),void 0!==d.y1&&(d.y=d.y1),d}function p(a){var b,c,d,e={};for(b=0;b<ka.length;++b)if(c=ka[b],c&&c.used&&(d="x"+c.n,null==a[d]&&1==c.n&&(d="x"),null!=a[d])){e.left=c.p2c(a[d]);break}for(b=0;b<la.length;++b)if(c=la[b],c&&c.used&&(d="y"+c.n,null==a[d]&&1==c.n&&(d="y"),null!=a[d])){e.top=c.p2c(a[d]);break}return e}function q(b,c){return b[c-1]||(b[c-1]={n:c,direction:b==ka?"x":"y",options:a.extend(!0,{},b==ka?ea.xaxis:ea.yaxis)}),b[c-1]}function r(){var b,c=da.length,d=-1;for(b=0;b<da.length;++b){var e=da[b].color;null!=e&&(c--,"number"==typeof e&&e>d&&(d=e))}c<=d&&(c=d+1);var f,g=[],h=ea.colors,i=h.length,j=0;for(b=0;b<c;b++)f=a.color.parse(h[b%i]||"#666"),b%i==0&&b&&(j=j>=0?j<.5?-j-.2:0:-j),g[b]=f.scale("rgb",1+j);var k,l=0;for(b=0;b<da.length;++b){if(k=da[b],null==k.color?(k.color=g[l].toString(),++l):"number"==typeof k.color&&(k.color=g[k.color].toString()),null==k.lines.show){var n,o=!0;for(n in k)if(k[n]&&k[n].show){o=!1;break}o&&(k.lines.show=!0)}null==k.lines.zero&&(k.lines.zero=!!k.lines.fill),k.xaxis=q(ka,m(k,"x")),k.yaxis=q(la,m(k,"y"))}}function s(){function b(a,b,c){b<a.datamin&&b!=-s&&(a.datamin=b),c>a.datamax&&c!=s&&(a.datamax=c)}var c,d,e,f,g,i,j,k,l,m,o,p,q=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,s=Number.MAX_VALUE;for(a.each(n(),function(a,b){b.datamin=q,b.datamax=r,b.used=!1}),c=0;c<da.length;++c)g=da[c],g.datapoints={points:[]},h(pa.processRawData,[g,g.data,g.datapoints]);for(c=0;c<da.length;++c){if(g=da[c],o=g.data,p=g.datapoints.format,!p){if(p=[],p.push({x:!0,number:!0,required:!0}),p.push({y:!0,number:!0,required:!0}),g.bars.show||g.lines.show&&g.lines.fill){var t=!!(g.bars.show&&g.bars.zero||g.lines.show&&g.lines.zero);p.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:t}),g.bars.horizontal&&(delete p[p.length-1].y,p[p.length-1].x=!0)}g.datapoints.format=p}if(null==g.datapoints.pointsize){g.datapoints.pointsize=p.length,j=g.datapoints.pointsize,i=g.datapoints.points;var u=g.lines.show&&g.lines.steps;for(g.xaxis.used=g.yaxis.used=!0,d=e=0;d<o.length;++d,e+=j){m=o[d];var v=null==m;if(!v)for(f=0;f<j;++f)k=m[f],l=p[f],l&&(l.number&&null!=k&&(k=+k,isNaN(k)?k=null:k==1/0?k=s:k==-(1/0)&&(k=-s)),null==k&&(l.required&&(v=!0),null!=l.defaultValue&&(k=l.defaultValue))),i[e+f]=k;if(v)for(f=0;f<j;++f)k=i[e+f],null!=k&&(l=p[f],l.autoscale&&(l.x&&b(g.xaxis,k,k),l.y&&b(g.yaxis,k,k))),i[e+f]=null;else if(u&&e>0&&null!=i[e-j]&&i[e-j]!=i[e]&&i[e-j+1]!=i[e+1]){for(f=0;f<j;++f)i[e+j+f]=i[e+f];i[e+1]=i[e-j+1],e+=j}}}}for(c=0;c<da.length;++c)g=da[c],h(pa.processDatapoints,[g,g.datapoints]);for(c=0;c<da.length;++c){g=da[c],i=g.datapoints.points,j=g.datapoints.pointsize,p=g.datapoints.format;var w=q,x=q,y=r,z=r;for(d=0;d<i.length;d+=j)if(null!=i[d])for(f=0;f<j;++f)k=i[d+f],l=p[f],l&&l.autoscale!==!1&&k!=s&&k!=-s&&(l.x&&(k<w&&(w=k),k>y&&(y=k)),l.y&&(k<x&&(x=k),k>z&&(z=k)));if(g.bars.show){var A;switch(g.bars.align){case"left":A=0;break;case"right":A=-g.bars.barWidth;break;case"center":A=-g.bars.barWidth/2;break;default:throw new Error("Invalid bar alignment: "+g.bars.align)}g.bars.horizontal?(x+=A,z+=A+g.bars.barWidth):(w+=A,y+=A+g.bars.barWidth)}b(g.xaxis,w,y),b(g.yaxis,x,z)}a.each(n(),function(a,b){b.datamin==q&&(b.datamin=null),b.datamax==r&&(b.datamax=null)})}function t(){c.css("padding",0).children(":not(.flot-base,.flot-overlay)").remove(),"static"==c.css("position")&&c.css("position","relative"),fa=new b("flot-base",c),ga=new b("flot-overlay",c),ia=fa.context,ja=ga.context,ha=a(ga.element).unbind();var d=c.data("plot");d&&(d.shutdown(),ga.clear()),c.data("plot",qa)}function u(){ea.grid.hoverable&&(ha.mousemove(T),ha.bind("mouseleave",U)),ea.grid.clickable&&ha.click(V),h(pa.bindEvents,[ha])}function v(){sa&&clearTimeout(sa),ha.unbind("mousemove",T),ha.unbind("mouseleave",U),ha.unbind("click",V),h(pa.shutdown,[ha])}function w(a){function b(a){return a}var c,d,e=a.options.transform||b,f=a.options.inverseTransform;"x"==a.direction?(c=a.scale=na/Math.abs(e(a.max)-e(a.min)),d=Math.min(e(a.max),e(a.min))):(c=a.scale=oa/Math.abs(e(a.max)-e(a.min)),c=-c,d=Math.max(e(a.max),e(a.min))),e==b?a.p2c=function(a){return(a-d)*c}:a.p2c=function(a){return(e(a)-d)*c},f?a.c2p=function(a){return f(d+a/c)}:a.c2p=function(a){return d+a/c}}function x(a){var b=a.options,c=a.ticks||[],d=b.labelWidth||0,e=b.labelHeight||0,f=d||"x"==a.direction?Math.floor(fa.width/(c.length||1)):null;legacyStyles=a.direction+"Axis "+a.direction+a.n+"Axis",layer="flot-"+a.direction+"-axis flot-"+a.direction+a.n+"-axis "+legacyStyles,font=b.font||"flot-tick-label tickLabel";for(var g=0;g<c.length;++g){var h=c[g];if(h.label){var i=fa.getTextInfo(layer,h.label,font,null,f);d=Math.max(d,i.width),e=Math.max(e,i.height)}}a.labelWidth=b.labelWidth||d,a.labelHeight=b.labelHeight||e}function y(b){var c,d=b.labelWidth,e=b.labelHeight,f=b.options.position,g=b.options.tickLength,h=ea.grid.axisMargin,i=ea.grid.labelMargin,j="x"==b.direction?ka:la,k=a.grep(j,function(a){return a&&a.options.position==f&&a.reserveSpace});if(a.inArray(b,k)==k.length-1&&(h=0),null==g){var l=a.grep(j,function(a){return a&&a.reserveSpace});c=0==a.inArray(b,l),g=c?"full":5}isNaN(+g)||(i+=+g),"x"==b.direction?(e+=i,"bottom"==f?(ma.bottom+=e+h,b.box={top:fa.height-ma.bottom,height:e}):(b.box={top:ma.top+h,height:e},ma.top+=e+h)):(d+=i,"left"==f?(b.box={left:ma.left+h,width:d},ma.left+=d+h):(ma.right+=d+h,b.box={left:fa.width-ma.right,width:d})),b.position=f,b.tickLength=g,b.box.padding=i,b.innermost=c}function z(a){"x"==a.direction?(a.box.left=ma.left-a.labelWidth/2,a.box.width=fa.width-ma.left-ma.right+a.labelWidth):(a.box.top=ma.top-a.labelHeight/2,a.box.height=fa.height-ma.bottom-ma.top+a.labelHeight)}function A(){var b,c=ea.grid.minBorderMargin,d={x:0,y:0};if(null==c)for(c=0,b=0;b<da.length;++b)c=Math.max(c,2*(da[b].points.radius+da[b].points.lineWidth/2));d.x=d.y=Math.ceil(c),a.each(n(),function(a,b){var c=b.direction;b.reserveSpace&&(d[c]=Math.ceil(Math.max(d[c],("x"==c?b.labelWidth:b.labelHeight)/2)))}),ma.left=Math.max(d.x,ma.left),ma.right=Math.max(d.x,ma.right),ma.top=Math.max(d.y,ma.top),ma.bottom=Math.max(d.y,ma.bottom)}function B(){var b,c=n(),d=ea.grid.show;for(var e in ma){var f=ea.grid.margin||0;ma[e]="number"==typeof f?f:f[e]||0}h(pa.processOffset,[ma]);for(var e in ma)"object"==typeof ea.grid.borderWidth?ma[e]+=d?ea.grid.borderWidth[e]:0:ma[e]+=d?ea.grid.borderWidth:0;if(a.each(c,function(a,b){b.show=b.options.show,null==b.show&&(b.show=b.used),b.reserveSpace=b.show||b.options.reserveSpace,C(b)}),d){var g=a.grep(c,function(a){return a.reserveSpace});for(a.each(g,function(a,b){D(b),E(b),F(b,b.ticks),x(b)}),b=g.length-1;b>=0;--b)y(g[b]);A(),a.each(g,function(a,b){z(b)})}na=fa.width-ma.left-ma.right,oa=fa.height-ma.bottom-ma.top,a.each(c,function(a,b){w(b)}),d&&K(),R()}function C(a){var b=a.options,c=+(null!=b.min?b.min:a.datamin),d=+(null!=b.max?b.max:a.datamax),e=d-c;if(0==e){var f=0==d?1:.01;null==b.min&&(c-=f),null!=b.max&&null==b.min||(d+=f)}else{var g=b.autoscaleMargin;null!=g&&(null==b.min&&(c-=e*g,c<0&&null!=a.datamin&&a.datamin>=0&&(c=0)),null==b.max&&(d+=e*g,d>0&&null!=a.datamax&&a.datamax<=0&&(d=0)))}a.min=c,a.max=d}function D(b){var c,e=b.options;c="number"==typeof e.ticks&&e.ticks>0?e.ticks:.3*Math.sqrt("x"==b.direction?fa.width:fa.height);var f=(b.max-b.min)/c,g=-Math.floor(Math.log(f)/Math.LN10),h=e.tickDecimals;null!=h&&g>h&&(g=h);var i,j=Math.pow(10,-g),k=f/j;if(k<1.5?i=1:k<3?(i=2,k>2.25&&(null==h||g+1<=h)&&(i=2.5,++g)):i=k<7.5?5:10,i*=j,null!=e.minTickSize&&i<e.minTickSize&&(i=e.minTickSize),b.delta=f,b.tickDecimals=Math.max(0,null!=h?h:g),b.tickSize=e.tickSize||i,"time"==e.mode&&!b.tickGenerator)throw new Error("Time mode requires the flot.time plugin.");if(b.tickGenerator||(b.tickGenerator=function(a){var b,c=[],e=d(a.min,a.tickSize),f=0,g=Number.NaN;do b=g,g=e+f*a.tickSize,c.push(g),++f;while(g<a.max&&g!=b);return c},b.tickFormatter=function(a,b){var c=b.tickDecimals?Math.pow(10,b.tickDecimals):1,d=""+Math.round(a*c)/c;if(null!=b.tickDecimals){var e=d.indexOf("."),f=e==-1?0:d.length-e-1;if(f<b.tickDecimals)return(f?d:d+".")+(""+c).substr(1,b.tickDecimals-f)}return d}),a.isFunction(e.tickFormatter)&&(b.tickFormatter=function(a,b){return""+e.tickFormatter(a,b)}),null!=e.alignTicksWithAxis){var l=("x"==b.direction?ka:la)[e.alignTicksWithAxis-1];if(l&&l.used&&l!=b){var m=b.tickGenerator(b);if(m.length>0&&(null==e.min&&(b.min=Math.min(b.min,m[0])),null==e.max&&m.length>1&&(b.max=Math.max(b.max,m[m.length-1]))),b.tickGenerator=function(a){var b,c,d=[];for(c=0;c<l.ticks.length;++c)b=(l.ticks[c].v-l.min)/(l.max-l.min),b=a.min+b*(a.max-a.min),d.push(b);return d},!b.mode&&null==e.tickDecimals){var n=Math.max(0,-Math.floor(Math.log(b.delta)/Math.LN10)+1),o=b.tickGenerator(b);o.length>1&&/\..*0$/.test((o[1]-o[0]).toFixed(n))||(b.tickDecimals=n)}}}}function E(b){var c=b.options.ticks,d=[];null==c||"number"==typeof c&&c>0?d=b.tickGenerator(b):c&&(d=a.isFunction(c)?c(b):c);var e,f;for(b.ticks=[],e=0;e<d.length;++e){var g=null,h=d[e];"object"==typeof h?(f=+h[0],h.length>1&&(g=h[1])):f=+h,null==g&&(g=b.tickFormatter(f,b)),isNaN(f)||b.ticks.push({v:f,label:g})}}function F(a,b){a.options.autoscaleMargin&&b.length>0&&(null==a.options.min&&(a.min=Math.min(a.min,b[0].v)),null==a.options.max&&b.length>1&&(a.max=Math.max(a.max,b[b.length-1].v)))}function G(){fa.clear(),h(pa.drawBackground,[ia]);var a=ea.grid;a.show&&a.backgroundColor&&I(),a.show&&!a.aboveData&&J();for(var b=0;b<da.length;++b)h(pa.drawSeries,[ia,da[b]]),L(da[b]);h(pa.draw,[ia]),a.show&&a.aboveData&&J(),fa.render(),X()}function H(a,b){for(var c,d,e,f,g=n(),h=0;h<g.length;++h)if(c=g[h],c.direction==b&&(f=b+c.n+"axis",a[f]||1!=c.n||(f=b+"axis"),a[f])){d=a[f].from,e=a[f].to;break}if(a[f]||(c="x"==b?ka[0]:la[0],d=a[b+"1"],e=a[b+"2"]),null!=d&&null!=e&&d>e){var i=d;d=e,e=i}return{from:d,to:e,axis:c}}function I(){ia.save(),ia.translate(ma.left,ma.top),ia.fillStyle=ca(ea.grid.backgroundColor,oa,0,"rgba(255, 255, 255, 0)"),ia.fillRect(0,0,na,oa),ia.restore()}function J(){var b,c,d,e;ia.save(),ia.translate(ma.left,ma.top);var f=ea.grid.markings;if(f)for(a.isFunction(f)&&(c=qa.getAxes(),c.xmin=c.xaxis.min,c.xmax=c.xaxis.max,c.ymin=c.yaxis.min,c.ymax=c.yaxis.max,f=f(c)),b=0;b<f.length;++b){var g=f[b],h=H(g,"x"),i=H(g,"y");null==h.from&&(h.from=h.axis.min),null==h.to&&(h.to=h.axis.max),null==i.from&&(i.from=i.axis.min),null==i.to&&(i.to=i.axis.max),h.to<h.axis.min||h.from>h.axis.max||i.to<i.axis.min||i.from>i.axis.max||(h.from=Math.max(h.from,h.axis.min),h.to=Math.min(h.to,h.axis.max),i.from=Math.max(i.from,i.axis.min),i.to=Math.min(i.to,i.axis.max),h.from==h.to&&i.from==i.to||(h.from=h.axis.p2c(h.from),h.to=h.axis.p2c(h.to),i.from=i.axis.p2c(i.from),i.to=i.axis.p2c(i.to),h.from==h.to||i.from==i.to?(ia.beginPath(),ia.strokeStyle=g.color||ea.grid.markingsColor,ia.lineWidth=g.lineWidth||ea.grid.markingsLineWidth,ia.moveTo(h.from,i.from),ia.lineTo(h.to,i.to),ia.stroke()):(ia.fillStyle=g.color||ea.grid.markingsColor,ia.fillRect(h.from,i.to,h.to-h.from,i.from-i.to))))}c=n(),d=ea.grid.borderWidth;for(var j=0;j<c.length;++j){var k,l,m,o,p=c[j],q=p.box,r=p.tickLength;if(p.show&&0!=p.ticks.length){for(ia.lineWidth=1,"x"==p.direction?(k=0,l="full"==r?"top"==p.position?0:oa:q.top-ma.top+("top"==p.position?q.height:0)):(l=0,k="full"==r?"left"==p.position?0:na:q.left-ma.left+("left"==p.position?q.width:0)),p.innermost||(ia.strokeStyle=p.options.color,ia.beginPath(),m=o=0,"x"==p.direction?m=na+1:o=oa+1,1==ia.lineWidth&&("x"==p.direction?l=Math.floor(l)+.5:k=Math.floor(k)+.5),ia.moveTo(k,l),ia.lineTo(k+m,l+o),ia.stroke()),ia.strokeStyle=p.options.tickColor,ia.beginPath(),b=0;b<p.ticks.length;++b){var s=p.ticks[b].v;m=o=0,isNaN(s)||s<p.min||s>p.max||"full"==r&&("object"==typeof d&&d[p.position]>0||d>0)&&(s==p.min||s==p.max)||("x"==p.direction?(k=p.p2c(s),o="full"==r?-oa:r,"top"==p.position&&(o=-o)):(l=p.p2c(s),m="full"==r?-na:r,"left"==p.position&&(m=-m)),1==ia.lineWidth&&("x"==p.direction?k=Math.floor(k)+.5:l=Math.floor(l)+.5),ia.moveTo(k,l),ia.lineTo(k+m,l+o))}ia.stroke()}}d&&(e=ea.grid.borderColor,"object"==typeof d||"object"==typeof e?("object"!=typeof d&&(d={top:d,right:d,bottom:d,left:d}),"object"!=typeof e&&(e={top:e,right:e,bottom:e,left:e}),d.top>0&&(ia.strokeStyle=e.top,ia.lineWidth=d.top,ia.beginPath(),ia.moveTo(0-d.left,0-d.top/2),ia.lineTo(na,0-d.top/2),ia.stroke()),d.right>0&&(ia.strokeStyle=e.right,ia.lineWidth=d.right,ia.beginPath(),ia.moveTo(na+d.right/2,0-d.top),ia.lineTo(na+d.right/2,oa),ia.stroke()),d.bottom>0&&(ia.strokeStyle=e.bottom,ia.lineWidth=d.bottom,ia.beginPath(),ia.moveTo(na+d.right,oa+d.bottom/2),ia.lineTo(0,oa+d.bottom/2),ia.stroke()),d.left>0&&(ia.strokeStyle=e.left,ia.lineWidth=d.left,ia.beginPath(),ia.moveTo(0-d.left/2,oa+d.bottom),ia.lineTo(0-d.left/2,0),ia.stroke())):(ia.lineWidth=d,ia.strokeStyle=ea.grid.borderColor,ia.strokeRect(-d/2,-d/2,na+d,oa+d))),ia.restore()}function K(){a.each(n(),function(a,b){if(b.show&&0!=b.ticks.length){var c,d,e,f,g,h=b.box,i=b.direction+"Axis "+b.direction+b.n+"Axis",j="flot-"+b.direction+"-axis flot-"+b.direction+b.n+"-axis "+i,k=b.options.font||"flot-tick-label tickLabel";fa.removeText(j);for(var l=0;l<b.ticks.length;++l)c=b.ticks[l],!c.label||c.v<b.min||c.v>b.max||("x"==b.direction?(f="center",d=ma.left+b.p2c(c.v),"bottom"==b.position?e=h.top+h.padding:(e=h.top+h.height-h.padding,g="bottom")):(g="middle",e=ma.top+b.p2c(c.v),"left"==b.position?(d=h.left+h.width-h.padding,f="right"):d=h.left+h.padding),fa.addText(j,d,e,c.label,k,null,null,f,g))}})}function L(a){a.lines.show&&M(a),a.bars.show&&P(a),a.points.show&&N(a)}function M(a){function b(a,b,c,d,e){var f=a.points,g=a.pointsize,h=null,i=null;ia.beginPath();for(var j=g;j<f.length;j+=g){var k=f[j-g],l=f[j-g+1],m=f[j],n=f[j+1];if(null!=k&&null!=m){if(l<=n&&l<e.min){if(n<e.min)continue;k=(e.min-l)/(n-l)*(m-k)+k,l=e.min}else if(n<=l&&n<e.min){if(l<e.min)continue;m=(e.min-l)/(n-l)*(m-k)+k,n=e.min}if(l>=n&&l>e.max){if(n>e.max)continue;k=(e.max-l)/(n-l)*(m-k)+k,l=e.max}else if(n>=l&&n>e.max){if(l>e.max)continue;m=(e.max-l)/(n-l)*(m-k)+k,n=e.max}if(k<=m&&k<d.min){if(m<d.min)continue;l=(d.min-k)/(m-k)*(n-l)+l,k=d.min}else if(m<=k&&m<d.min){if(k<d.min)continue;n=(d.min-k)/(m-k)*(n-l)+l,m=d.min}if(k>=m&&k>d.max){if(m>d.max)continue;l=(d.max-k)/(m-k)*(n-l)+l,k=d.max}else if(m>=k&&m>d.max){if(k>d.max)continue;n=(d.max-k)/(m-k)*(n-l)+l,m=d.max}k==h&&l==i||ia.moveTo(d.p2c(k)+b,e.p2c(l)+c),h=m,i=n,ia.lineTo(d.p2c(m)+b,e.p2c(n)+c)}}ia.stroke()}function c(a,b,c){for(var d=a.points,e=a.pointsize,f=Math.min(Math.max(0,c.min),c.max),g=0,h=!1,i=1,j=0,k=0;;){if(e>0&&g>d.length+e)break;g+=e;var l=d[g-e],m=d[g-e+i],n=d[g],o=d[g+i];if(h){if(e>0&&null!=l&&null==n){k=g,e=-e,i=2;continue}if(e<0&&g==j+e){ia.fill(),h=!1,e=-e,i=1,g=j=k+e;continue}}if(null!=l&&null!=n){if(l<=n&&l<b.min){if(n<b.min)continue;m=(b.min-l)/(n-l)*(o-m)+m,l=b.min}else if(n<=l&&n<b.min){if(l<b.min)continue;o=(b.min-l)/(n-l)*(o-m)+m,n=b.min}if(l>=n&&l>b.max){if(n>b.max)continue;m=(b.max-l)/(n-l)*(o-m)+m,l=b.max}else if(n>=l&&n>b.max){if(l>b.max)continue;o=(b.max-l)/(n-l)*(o-m)+m,n=b.max}if(h||(ia.beginPath(),ia.moveTo(b.p2c(l),c.p2c(f)),h=!0),m>=c.max&&o>=c.max)ia.lineTo(b.p2c(l),c.p2c(c.max)),ia.lineTo(b.p2c(n),c.p2c(c.max));else if(m<=c.min&&o<=c.min)ia.lineTo(b.p2c(l),c.p2c(c.min)),ia.lineTo(b.p2c(n),c.p2c(c.min));else{var p=l,q=n;m<=o&&m<c.min&&o>=c.min?(l=(c.min-m)/(o-m)*(n-l)+l,m=c.min):o<=m&&o<c.min&&m>=c.min&&(n=(c.min-m)/(o-m)*(n-l)+l,o=c.min),m>=o&&m>c.max&&o<=c.max?(l=(c.max-m)/(o-m)*(n-l)+l,m=c.max):o>=m&&o>c.max&&m<=c.max&&(n=(c.max-m)/(o-m)*(n-l)+l,o=c.max),l!=p&&ia.lineTo(b.p2c(p),c.p2c(m)),ia.lineTo(b.p2c(l),c.p2c(m)),ia.lineTo(b.p2c(n),c.p2c(o)),n!=q&&(ia.lineTo(b.p2c(n),c.p2c(o)),ia.lineTo(b.p2c(q),c.p2c(o)))}}}}ia.save(),ia.translate(ma.left,ma.top),ia.lineJoin="round";var d=a.lines.lineWidth,e=a.shadowSize;if(d>0&&e>0){ia.lineWidth=e,ia.strokeStyle="rgba(0,0,0,0.1)";var f=Math.PI/18;b(a.datapoints,Math.sin(f)*(d/2+e/2),Math.cos(f)*(d/2+e/2),a.xaxis,a.yaxis),ia.lineWidth=e/2,b(a.datapoints,Math.sin(f)*(d/2+e/4),Math.cos(f)*(d/2+e/4),a.xaxis,a.yaxis)}ia.lineWidth=d,ia.strokeStyle=a.color;var g=Q(a.lines,a.color,0,oa);g&&(ia.fillStyle=g,c(a.datapoints,a.xaxis,a.yaxis)),d>0&&b(a.datapoints,0,0,a.xaxis,a.yaxis),ia.restore()}function N(a){function b(a,b,c,d,e,f,g,h){for(var i=a.points,j=a.pointsize,k=0;k<i.length;k+=j){var l=i[k],m=i[k+1];null==l||l<f.min||l>f.max||m<g.min||m>g.max||(ia.beginPath(),l=f.p2c(l),m=g.p2c(m)+d,"circle"==h?ia.arc(l,m,b,0,e?Math.PI:2*Math.PI,!1):h(ia,l,m,b,e),ia.closePath(),c&&(ia.fillStyle=c,ia.fill()),ia.stroke())}}ia.save(),ia.translate(ma.left,ma.top);var c=a.points.lineWidth,d=a.shadowSize,e=a.points.radius,f=a.points.symbol;if(0==c&&(c=1e-4),c>0&&d>0){var g=d/2;ia.lineWidth=g,ia.strokeStyle="rgba(0,0,0,0.1)",b(a.datapoints,e,null,g+g/2,!0,a.xaxis,a.yaxis,f),ia.strokeStyle="rgba(0,0,0,0.2)",b(a.datapoints,e,null,g/2,!0,a.xaxis,a.yaxis,f)}ia.lineWidth=c,ia.strokeStyle=a.color,b(a.datapoints,e,Q(a.points,a.color),0,!1,a.xaxis,a.yaxis,f),ia.restore()}function O(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u;k?(t=r=s=!0,q=!1,m=c,n=a,p=b+d,o=b+e,n<m&&(u=n,n=m,m=u,q=!0,r=!1)):(q=r=s=!0,t=!1,m=a+d,n=a+e,o=c,p=b,p<o&&(u=p,p=o,o=u,t=!0,s=!1)),n<h.min||m>h.max||p<i.min||o>i.max||(m<h.min&&(m=h.min,q=!1),n>h.max&&(n=h.max,r=!1),o<i.min&&(o=i.min,t=!1),p>i.max&&(p=i.max,s=!1),m=h.p2c(m),o=i.p2c(o),n=h.p2c(n),p=i.p2c(p),g&&(j.beginPath(),j.moveTo(m,o),j.lineTo(m,p),j.lineTo(n,p),j.lineTo(n,o),j.fillStyle=g(o,p),j.fill()),l>0&&(q||r||s||t)&&(j.beginPath(),j.moveTo(m,o+f),q?j.lineTo(m,p+f):j.moveTo(m,p+f),s?j.lineTo(n,p+f):j.moveTo(n,p+f),r?j.lineTo(n,o+f):j.moveTo(n,o+f),t?j.lineTo(m,o+f):j.moveTo(m,o+f),j.stroke()))}function P(a){function b(b,c,d,e,f,g,h){for(var i=b.points,j=b.pointsize,k=0;k<i.length;k+=j)null!=i[k]&&O(i[k],i[k+1],i[k+2],c,d,e,f,g,h,ia,a.bars.horizontal,a.bars.lineWidth)}ia.save(),ia.translate(ma.left,ma.top),ia.lineWidth=a.bars.lineWidth,ia.strokeStyle=a.color;var c;switch(a.bars.align){case"left":c=0;break;case"right":c=-a.bars.barWidth;break;case"center":c=-a.bars.barWidth/2;break;default:throw new Error("Invalid bar alignment: "+a.bars.align)}var d=a.bars.fill?function(b,c){return Q(a.bars,a.color,b,c)}:null;b(a.datapoints,c,c+a.bars.barWidth,0,d,a.xaxis,a.yaxis),ia.restore()}function Q(b,c,d,e){var f=b.fill;if(!f)return null;if(b.fillColor)return ca(b.fillColor,d,e,c);var g=a.color.parse(c);return g.a="number"==typeof f?f:.4,g.normalize(),g.toString()}function R(){if(c.find(".legend").remove(),ea.legend.show){for(var b,d,e=[],f=[],g=!1,h=ea.legend.labelFormatter,i=0;i<da.length;++i)b=da[i],b.label&&(d=h?h(b.label,b):b.label,d&&f.push({label:d,color:b.color}));if(ea.legend.sorted)if(a.isFunction(ea.legend.sorted))f.sort(ea.legend.sorted);else if("reverse"==ea.legend.sorted)f.reverse();else{var j="descending"!=ea.legend.sorted;f.sort(function(a,b){return a.label==b.label?0:a.label<b.label!=j?1:-1})}for(var i=0;i<f.length;++i){var k=f[i];i%ea.legend.noColumns==0&&(g&&e.push("</tr>"),e.push("<tr>"),g=!0),e.push('<td class="legendColorBox"><div style="border:1px solid '+ea.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+k.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+k.label+"</td>")}if(g&&e.push("</tr>"),0!=e.length){var l='<table style="font-size:smaller;color:'+ea.grid.color+'">'+e.join("")+"</table>";if(null!=ea.legend.container)a(ea.legend.container).html(l);else{var m="",n=ea.legend.position,o=ea.legend.margin;null==o[0]&&(o=[o,o]),"n"==n.charAt(0)?m+="top:"+(o[1]+ma.top)+"px;":"s"==n.charAt(0)&&(m+="bottom:"+(o[1]+ma.bottom)+"px;"),"e"==n.charAt(1)?m+="right:"+(o[0]+ma.right)+"px;":"w"==n.charAt(1)&&(m+="left:"+(o[0]+ma.left)+"px;");var p=a('<div class="legend">'+l.replace('style="','style="position:absolute;'+m+";")+"</div>").appendTo(c);if(0!=ea.legend.backgroundOpacity){var q=ea.legend.backgroundColor;null==q&&(q=ea.grid.backgroundColor,q=q&&"string"==typeof q?a.color.parse(q):a.color.extract(p,"background-color"),q.a=1,q=q.toString());var r=p.children();a('<div style="position:absolute;width:'+r.width()+"px;height:"+r.height()+"px;"+m+"background-color:"+q+';"> </div>').prependTo(p).css("opacity",ea.legend.backgroundOpacity)}}}}}function S(a,b,c){var d,e,f,g=ea.grid.mouseActiveRadius,h=g*g+1,i=null;for(d=da.length-1;d>=0;--d)if(c(da[d])){var j=da[d],k=j.xaxis,l=j.yaxis,m=j.datapoints.points,n=k.c2p(a),o=l.c2p(b),p=g/k.scale,q=g/l.scale;if(f=j.datapoints.pointsize,k.options.inverseTransform&&(p=Number.MAX_VALUE),l.options.inverseTransform&&(q=Number.MAX_VALUE),j.lines.show||j.points.show)for(e=0;e<m.length;e+=f){var r=m[e],s=m[e+1];if(null!=r&&!(r-n>p||r-n<-p||s-o>q||s-o<-q)){var t=Math.abs(k.p2c(r)-a),u=Math.abs(l.p2c(s)-b),v=t*t+u*u;v<h&&(h=v,i=[d,e/f])}}if(j.bars.show&&!i){var w="left"==j.bars.align?0:-j.bars.barWidth/2,x=w+j.bars.barWidth;for(e=0;e<m.length;e+=f){var r=m[e],s=m[e+1],y=m[e+2];null!=r&&(da[d].bars.horizontal?n<=Math.max(y,r)&&n>=Math.min(y,r)&&o>=s+w&&o<=s+x:n>=r+w&&n<=r+x&&o>=Math.min(y,s)&&o<=Math.max(y,s))&&(i=[d,e/f])}}}return i?(d=i[0],e=i[1],f=da[d].datapoints.pointsize,{datapoint:da[d].datapoints.points.slice(e*f,(e+1)*f),dataIndex:e,series:da[d],seriesIndex:d}):null}function T(a){ea.grid.hoverable&&W("plothover",a,function(a){return 0!=a.hoverable})}function U(a){ea.grid.hoverable&&W("plothover",a,function(a){return!1})}function V(a){W("plotclick",a,function(a){return 0!=a.clickable})}function W(a,b,d){var e=ha.offset(),f=b.pageX-e.left-ma.left,g=b.pageY-e.top-ma.top,h=o({left:f,top:g});h.pageX=b.pageX,h.pageY=b.pageY;var i=S(f,g,d);if(i&&(i.pageX=parseInt(i.series.xaxis.p2c(i.datapoint[0])+e.left+ma.left,10),i.pageY=parseInt(i.series.yaxis.p2c(i.datapoint[1])+e.top+ma.top,10)),ea.grid.autoHighlight){for(var j=0;j<ra.length;++j){var k=ra[j];k.auto!=a||i&&k.series==i.series&&k.point[0]==i.datapoint[0]&&k.point[1]==i.datapoint[1]||$(k.series,k.point)}i&&Z(i.series,i.datapoint,a)}c.trigger(a,[h,i])}function X(){var a=ea.interaction.redrawOverlayInterval;return a==-1?void Y():void(sa||(sa=setTimeout(Y,a)))}function Y(){sa=null,ja.save(),ga.clear(),ja.translate(ma.left,ma.top);var a,b;for(a=0;a<ra.length;++a)b=ra[a],b.series.bars.show?ba(b.series,b.point):aa(b.series,b.point);ja.restore(),h(pa.drawOverlay,[ja])}function Z(a,b,c){if("number"==typeof a&&(a=da[a]),"number"==typeof b){var d=a.datapoints.pointsize;b=a.datapoints.points.slice(d*b,d*(b+1))}var e=_(a,b);e==-1?(ra.push({series:a,point:b,auto:c}),X()):c||(ra[e].auto=!1)}function $(a,b){if(null==a&&null==b)return ra=[],void X();if("number"==typeof a&&(a=da[a]),"number"==typeof b){var c=a.datapoints.pointsize;b=a.datapoints.points.slice(c*b,c*(b+1))}var d=_(a,b);d!=-1&&(ra.splice(d,1),X())}function _(a,b){for(var c=0;c<ra.length;++c){var d=ra[c];if(d.series==a&&d.point[0]==b[0]&&d.point[1]==b[1])return c}return-1}function aa(b,c){var d=c[0],e=c[1],f=b.xaxis,g=b.yaxis,h="string"==typeof b.highlightColor?b.highlightColor:a.color.parse(b.color).scale("a",.5).toString();if(!(d<f.min||d>f.max||e<g.min||e>g.max)){var i=b.points.radius+b.points.lineWidth/2;ja.lineWidth=i,ja.strokeStyle=h;var j=1.5*i;d=f.p2c(d),e=g.p2c(e),ja.beginPath(),"circle"==b.points.symbol?ja.arc(d,e,j,0,2*Math.PI,!1):b.points.symbol(ja,d,e,j,!1),ja.closePath(),ja.stroke()}}function ba(b,c){var d="string"==typeof b.highlightColor?b.highlightColor:a.color.parse(b.color).scale("a",.5).toString(),e=d,f="left"==b.bars.align?0:-b.bars.barWidth/2;ja.lineWidth=b.bars.lineWidth,ja.strokeStyle=d,O(c[0],c[1],c[2]||0,f,f+b.bars.barWidth,0,function(){return e},b.xaxis,b.yaxis,ja,b.bars.horizontal,b.bars.lineWidth)}function ca(b,c,d,e){if("string"==typeof b)return b;for(var f=ia.createLinearGradient(0,d,0,c),g=0,h=b.colors.length;g<h;++g){var i=b.colors[g];if("string"!=typeof i){var j=a.color.parse(e);null!=i.brightness&&(j=j.scale("rgb",i.brightness)),null!=i.opacity&&(j.a*=i.opacity),i=j.toString()}f.addColorStop(g/(h-1),i)}return f}var da=[],ea={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:!0,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:!1,fillColor:null,steps:!1},bars:{show:!1,lineWidth:2,barWidth:1,fill:!0,fillColor:null,align:"left",horizontal:!1,zero:!0},shadowSize:3,highlightColor:null},grid:{show:!0,aboveData:!1,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:!1,hoverable:!1,autoHighlight:!0,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1e3/60},hooks:{}},fa=null,ga=null,ha=null,ia=null,ja=null,ka=[],la=[],ma={left:0,right:0,top:0,bottom:0},na=0,oa=0,pa={processOptions:[],processRawData:[],
processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},qa=this;qa.setData=k,qa.setupGrid=B,qa.draw=G,qa.getPlaceholder=function(){return c},qa.getCanvas=function(){return fa.element},qa.getPlotOffset=function(){return ma},qa.width=function(){return na},qa.height=function(){return oa},qa.offset=function(){var a=ha.offset();return a.left+=ma.left,a.top+=ma.top,a},qa.getData=function(){return da},qa.getAxes=function(){var b={};return a.each(ka.concat(la),function(a,c){c&&(b[c.direction+(1!=c.n?c.n:"")+"axis"]=c)}),b},qa.getXAxes=function(){return ka},qa.getYAxes=function(){return la},qa.c2p=o,qa.p2c=p,qa.getOptions=function(){return ea},qa.highlight=Z,qa.unhighlight=$,qa.triggerRedrawOverlay=X,qa.pointOffset=function(a){return{left:parseInt(ka[m(a,"x")-1].p2c(+a.x)+ma.left,10),top:parseInt(la[m(a,"y")-1].p2c(+a.y)+ma.top,10)}},qa.shutdown=v,qa.resize=function(){var a=c.width(),b=c.height();fa.resize(a,b),ga.resize(a,b)},qa.hooks=pa,i(qa),j(f),t(),k(e),B(),G(),u();var ra=[],sa=null}function d(a,b){return b*Math.floor(a/b)}var e=Object.prototype.hasOwnProperty;b.prototype.resize=function(a,b){if(a<=0||b<=0)throw new Error("Invalid dimensions for plot, width = "+a+", height = "+b);var c=this.element,d=this.context,e=this.pixelRatio;this.width!=a&&(c.width=a*e,c.style.width=a+"px",this.width=a),this.height!=b&&(c.height=b*e,c.style.height=b+"px",this.height=b),d.restore(),d.save(),d.scale(e,e)},b.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},b.prototype.render=function(){var a=this._textCache;for(var b in a)if(e.call(a,b)){var c=this.getTextLayer(b),d=a[b];c.hide();for(var f in d)if(e.call(d,f)){var g=d[f];for(var h in g)if(e.call(g,h)){for(var i,j=g[h].positions,k=0;i=j[k];k++)i.active?i.rendered||(c.append(i.element),i.rendered=!0):(j.splice(k--,1),i.rendered&&i.element.detach());0==j.length&&delete g[h]}}c.show()}},b.prototype.getTextLayer=function(b){var c=this.text[b];return null==c&&(null==this.textContainer&&(this.textContainer=a("<div class='flot-text'></div>").css({position:"absolute",top:0,left:0,bottom:0,right:0,"font-size":"smaller",color:"#545454"}).insertAfter(this.element)),c=this.text[b]=a("<div></div>").addClass(b).css({position:"absolute",top:0,left:0,bottom:0,right:0}).appendTo(this.textContainer)),c},b.prototype.getTextInfo=function(b,c,d,e,f){var g,h,i,j;if(c=""+c,g="object"==typeof d?d.style+" "+d.variant+" "+d.weight+" "+d.size+"px/"+d.lineHeight+"px "+d.family:d,h=this._textCache[b],null==h&&(h=this._textCache[b]={}),i=h[g],null==i&&(i=h[g]={}),j=i[c],null==j){var k=a("<div></div>").html(c).css({position:"absolute","max-width":f,top:-9999}).appendTo(this.getTextLayer(b));"object"==typeof d?k.css({font:g,color:d.color}):"string"==typeof d&&k.addClass(d),j=i[c]={width:k.outerWidth(!0),height:k.outerHeight(!0),element:k,positions:[]},k.detach()}return j},b.prototype.addText=function(a,b,c,d,e,f,g,h,i){var j=this.getTextInfo(a,d,e,f,g),k=j.positions;"center"==h?b-=j.width/2:"right"==h&&(b-=j.width),"middle"==i?c-=j.height/2:"bottom"==i&&(c-=j.height);for(var l,m=0;l=k[m];m++)if(l.x==b&&l.y==c)return void(l.active=!0);l={active:!0,rendered:!1,element:k.length?j.element.clone():j.element,x:b,y:c},k.push(l),l.element.css({top:Math.round(c),left:Math.round(b),"text-align":h})},b.prototype.removeText=function(a,b,c,d,f,g){if(null==d){var h=this._textCache[a];if(null!=h)for(var i in h)if(e.call(h,i)){var j=h[i];for(var k in j)if(e.call(j,k))for(var l,m=j[k].positions,n=0;l=m[n];n++)l.active=!1}}else for(var l,m=this.getTextInfo(a,d,f,g).positions,n=0;l=m[n];n++)l.x==b&&l.y==c&&(l.active=!1)},a.plot=function(b,d,e){var f=new c(a(b),d,e,a.plot.plugins);return f},a.plot.version="0.8.1",a.plot.plugins=[],a.fn.plot=function(b,c){return this.each(function(){a.plot(this,b,c)})}}(jQuery);