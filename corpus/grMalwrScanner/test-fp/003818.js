!function(a,b,c){a.PluginManager.add("wpemoji",function(d){function e(a){a.className="emoji",a.setAttribute("data-mce-resize","false"),a.setAttribute("data-mce-placeholder","1"),a.setAttribute("data-wp-emoji","1")}function f(a){var c={"data-mce-resize":"false","data-mce-placeholder":"1","data-wp-emoji":"1"};b.emoji.parse(a,{imgAttr:c})}function g(a){var b,c;a&&window.twemoji&&window.twemoji.test(a.textContent||a.innerText)&&(i.webkit&&(b=d.selection,c=b.getBookmark()),f(a),i.webkit&&b.moveToBookmark(c))}var h,i=a.Env,j=window.navigator.userAgent,k=j.indexOf("Windows")>-1,l=function(){var a=j.match(/Windows NT 6\.(\d)/);return!!(a&&a[1]>1)}();b&&b.emoji&&!c.supports.everything&&(l?d.on("keyup",function(a){231===a.keyCode&&g(d.selection.getNode())}):k||(d.on("keydown keyup",function(a){h="keydown"===a.type}),d.on("input",function(){h||g(d.selection.getNode())})),d.on("setcontent",function(a){var b=d.selection,c=b.getNode();window.twemoji&&window.twemoji.test(c.textContent||c.innerText)&&(f(c),i.ie&&i.ie<9&&a.load&&c&&"BODY"===c.nodeName&&b.collapse(!0))}),d.on("PastePostProcess",function(b){window.twemoji&&a.each(d.dom.$("img.emoji",b.node),function(a){a.alt&&window.twemoji.test(a.alt)&&e(a)})}),d.on("postprocess",function(a){a.content&&(a.content=a.content.replace(/<img[^>]+data-wp-emoji="[^>]+>/g,function(a){var b=a.match(/alt="([^"]+)"/);return b&&b[1]?b[1]:a}))}),d.on("resolvename",function(a){"IMG"===a.target.nodeName&&d.dom.getAttrib(a.target,"data-wp-emoji")&&a.preventDefault()}))})}(window.tinymce,window.wp,window._wpemojiSettings);