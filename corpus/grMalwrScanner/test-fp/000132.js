tinymce.PluginManager.add("image",function(a){function b(a,b){function c(a,c){d.parentNode&&d.parentNode.removeChild(d),b({width:a,height:c})}var d=document.createElement("img");d.onload=function(){c(Math.max(d.width,d.clientWidth),Math.max(d.height,d.clientHeight))},d.onerror=function(){c()};var e=d.style;e.visibility="hidden",e.position="fixed",e.bottom=e.left=0,e.width=e.height="auto",document.body.appendChild(d),d.src=a}function c(a,b,c){function d(a,c){return c=c||[],tinymce.each(a,function(a){var e={text:a.text||a.title};a.menu?e.menu=d(a.menu):(e.value=a.value,b(e)),c.push(e)}),c}return d(a,c||[])}function d(b){return function(){var c=a.settings.image_list;"string"==typeof c?tinymce.util.XHR.send({url:c,success:function(a){b(tinymce.util.JSON.parse(a))}}):"function"==typeof c?c(b):b(c)}}function e(d){function e(){var a,b,c,d;a=m.find("#width")[0],b=m.find("#height")[0],a&&b&&(c=a.value(),d=b.value(),m.find("#constrain")[0].checked()&&p&&q&&c&&d&&(p!=c?(d=Math.round(c/p*d),isNaN(d)||b.value(d)):(c=Math.round(d/q*c),isNaN(c)||a.value(c))),p=c,q=d)}function f(){function b(b){function c(){b.onload=b.onerror=null,a.selection&&(a.selection.select(b),a.nodeChanged())}b.onload=function(){t.width||t.height||!v||(u.setAttribs(b,{width:b.clientWidth,height:b.clientHeight}),a.fire("wpNewImageRefresh",{node:b})),c()},b.onerror=c}var c,d;k(),e(),t=tinymce.extend(t,m.toJSON());var f=t.wpcaption;t.alt||(t.alt=""),t.title||(t.title=""),""===t.width&&(t.width=null),""===t.height&&(t.height=null),t.style||(t.style=null),t={src:t.src,alt:t.alt,title:t.title,width:t.width,height:t.height,style:t.style,caption:t.caption,"class":t["class"]},a.undoManager.transact(function(){function e(b){return a.schema.getTextBlockElements()[b.nodeName]}var g={node:n,data:t,wpcaption:f};if(a.fire("wpImageFormSubmit",{imgData:g}),g.cancel)return void b(g.node);if(!t.src)return void(n&&(u.remove(n),a.focus(),a.nodeChanged()));if(""===t.title&&(t.title=null),n?u.setAttribs(n,t):(t.id="__mcenew",a.focus(),a.selection.setContent(u.createHTML("img",t)),n=u.get("__mcenew"),u.setAttrib(n,"id",null)),a.editorUpload.uploadImagesAuto(),t.caption===!1&&u.is(n.parentNode,"figure.image")&&(c=n.parentNode,u.insertAfter(n,c),u.remove(c)),t.caption!==!0)b(n);else if(!u.is(n.parentNode,"figure.image")){d=n,n=n.cloneNode(!0),c=u.create("figure",{"class":"image"}),c.appendChild(n),c.appendChild(u.create("figcaption",{contentEditable:!0},"Caption")),c.contentEditable=!1;var h=u.getParent(d,e);h?u.split(h,d,c):u.replace(c,d),a.selection.select(c)}})}function g(a){return a&&(a=a.replace(/px$/,"")),a}function h(c){var d,e,f,g=c.meta||{};r&&r.value(a.convertURL(this.value(),"src")),tinymce.each(g,function(a,b){m.find("#"+b).value(a)}),g.width||g.height||(d=a.convertURL(this.value(),"src"),e=a.settings.image_prepend_url,f=new RegExp("^(?:[a-z]+:)?//","i"),e&&!f.test(d)&&d.substring(0,e.length)!==e&&(d=e+d),this.value(d),b(a.documentBaseURI.toAbsolute(this.value()),function(a){a.width&&a.height&&v&&(p=a.width,q=a.height,m.find("#width").value(p),m.find("#height").value(q))}))}function i(a){a.meta=m.toJSON()}function j(a){if(a.margin){var b=a.margin.split(" ");switch(b.length){case 1:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[0],a["margin-bottom"]=a["margin-bottom"]||b[0],a["margin-left"]=a["margin-left"]||b[0];break;case 2:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[1],a["margin-bottom"]=a["margin-bottom"]||b[0],a["margin-left"]=a["margin-left"]||b[1];break;case 3:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[1],a["margin-bottom"]=a["margin-bottom"]||b[2],a["margin-left"]=a["margin-left"]||b[1];break;case 4:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[1],a["margin-bottom"]=a["margin-bottom"]||b[2],a["margin-left"]=a["margin-left"]||b[3]}delete a.margin}return a}function k(){function b(a){return a.length>0&&/^[0-9]+$/.test(a)&&(a+="px"),a}if(a.settings.image_advtab){var c=m.toJSON(),d=u.parseStyle(c.style);d=j(d),c.vspace&&(d["margin-top"]=d["margin-bottom"]=b(c.vspace)),c.hspace&&(d["margin-left"]=d["margin-right"]=b(c.hspace)),c.border&&(d["border-width"]=b(c.border)),m.find("#style").value(u.serializeStyle(u.parseStyle(u.serializeStyle(d))))}}function l(){if(a.settings.image_advtab){var b=m.toJSON(),c=u.parseStyle(b.style);m.find("#vspace").value(""),m.find("#hspace").value(""),c=j(c),(c["margin-top"]&&c["margin-bottom"]||c["margin-right"]&&c["margin-left"])&&(c["margin-top"]===c["margin-bottom"]?m.find("#vspace").value(g(c["margin-top"])):m.find("#vspace").value(""),c["margin-right"]===c["margin-left"]?m.find("#hspace").value(g(c["margin-right"])):m.find("#hspace").value("")),c["border-width"]&&m.find("#border").value(g(c["border-width"])),m.find("#style").value(u.serializeStyle(u.parseStyle(u.serializeStyle(c))))}}var m,n,o,p,q,r,s,t={},u=a.dom,v=a.settings.image_dimensions!==!1;n=a.selection.getNode(),o=u.getParent(n,"figure.image"),o&&(n=u.select("img",o)[0]),n&&("IMG"!=n.nodeName||n.getAttribute("data-mce-object")||n.getAttribute("data-mce-placeholder"))&&(n=null),n&&(p=u.getAttrib(n,"width"),q=u.getAttrib(n,"height"),t={src:u.getAttrib(n,"src"),alt:u.getAttrib(n,"alt"),title:u.getAttrib(n,"title"),"class":u.getAttrib(n,"class"),width:p,height:q,caption:!!o},a.fire("wpLoadImageData",{imgData:{data:t,node:n}})),d&&(r={type:"listbox",label:"Image list",values:c(d,function(b){b.value=a.convertURL(b.value||b.url,"src")},[{text:"None",value:""}]),value:t.src&&a.convertURL(t.src,"src"),onselect:function(a){var b=m.find("#alt");(!b.value()||a.lastControl&&b.value()==a.lastControl.text())&&b.value(a.control.text()),m.find("#src").value(a.control.value()).fire("change")},onPostRender:function(){r=this}}),a.settings.image_class_list&&(s={name:"class",type:"listbox",label:"Class",values:c(a.settings.image_class_list,function(b){b.value&&(b.textStyle=function(){return a.formatter.getCssText({inline:"img",classes:[b.value]})})})});var w=[{name:"src",type:"filepicker",filetype:"image",label:"Source",autofocus:!0,onchange:h,onbeforecall:i},r];a.settings.image_description!==!1&&w.push({name:"alt",type:"textbox",label:"Image description"}),a.settings.image_title&&w.push({name:"title",type:"textbox",label:"Image Title"}),v&&w.push({type:"container",label:"Dimensions",layout:"flex",direction:"row",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:3,onchange:e,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:3,onchange:e,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),w.push(s),a.settings.image_caption&&tinymce.Env.ceFalse&&w.push({name:"caption",type:"checkbox",label:"Caption"}),a.fire("wpLoadImageForm",{data:w}),a.settings.image_advtab?(n&&(n.style.marginLeft&&n.style.marginRight&&n.style.marginLeft===n.style.marginRight&&(t.hspace=g(n.style.marginLeft)),n.style.marginTop&&n.style.marginBottom&&n.style.marginTop===n.style.marginBottom&&(t.vspace=g(n.style.marginTop)),n.style.borderWidth&&(t.border=g(n.style.borderWidth)),t.style=a.dom.serializeStyle(a.dom.parseStyle(a.dom.getAttrib(n,"style")))),m=a.windowManager.open({title:"Insert/edit image",data:t,bodyType:"tabpanel",body:[{title:"General",type:"form",items:w},{title:"Advanced",type:"form",pack:"start",items:[{label:"Style",name:"style",type:"textbox",onchange:l},{type:"form",layout:"grid",packV:"start",columns:2,padding:0,alignH:["left","right"],defaults:{type:"textbox",maxWidth:50,onchange:k},items:[{label:"Vertical space",name:"vspace"},{label:"Horizontal space",name:"hspace"},{label:"Border",name:"border"}]}]}],onSubmit:f})):m=a.windowManager.open({title:"Insert/edit image",data:t,body:w,onSubmit:f})}a.on("preInit",function(){function b(a){var b=a.attr("class");return b&&/\bimage\b/.test(b)}function c(a){return function(c){function d(b){b.attr("contenteditable",a?"true":null)}for(var e,f=c.length;f--;)e=c[f],b(e)&&(e.attr("contenteditable",a?"false":null),tinymce.each(e.getAll("figcaption"),d))}}a.parser.addNodeFilter("figure",c(!0)),a.serializer.addNodeFilter("figure",c(!1))}),a.addButton("image",{icon:"image",tooltip:"Insert/edit image",onclick:d(e),stateSelector:"img:not([data-mce-object],[data-mce-placeholder]),figure.image"}),a.addMenuItem("image",{icon:"image",text:"Image",onclick:d(e),context:"insert",prependToContext:!0}),a.addCommand("mceImage",d(e))});