!function(a,b){function c(a,b){function c(d){d||(a.expanded.unbind(c),b.focus())}a.focus(),a.expanded.bind(c)}function d(a){var b,c={number:null,id_base:null};return b=a.match(/^(.+)-(\d+)$/),b?(c.id_base=b[1],c.number=parseInt(b[2],10)):c.id_base=a,c}function e(a){var b,c=d(a);return b="widget_"+c.id_base,c.number&&(b+="["+c.number+"]"),b}if(a&&a.customize){var f,g=a.customize;g.Widgets=g.Widgets||{},g.Widgets.savedWidgetIds={},g.Widgets.data=_wpCustomizeWidgetsSettings||{},f=g.Widgets.data.l10n,delete g.Widgets.data.l10n,g.Widgets.WidgetModel=Backbone.Model.extend({id:null,temp_id:null,classname:null,control_tpl:null,description:null,is_disabled:null,is_multi:null,multi_number:null,name:null,id_base:null,transport:null,params:[],width:null,height:null,search_matched:!0}),g.Widgets.WidgetCollection=Backbone.Collection.extend({model:g.Widgets.WidgetModel,doSearch:function(a){this.terms!==a&&(this.terms=a,this.terms.length>0&&this.search(this.terms),""===this.terms&&this.each(function(a){a.set("search_matched",!0)}))},search:function(a){var b,c;a=a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),a=a.replace(/ /g,")(?=.*"),b=new RegExp("^(?=.*"+a+").+","i"),this.each(function(a){c=[a.get("name"),a.get("id"),a.get("description")].join(" "),a.set("search_matched",b.test(c))})}}),g.Widgets.availableWidgets=new g.Widgets.WidgetCollection(g.Widgets.data.availableWidgets),g.Widgets.SidebarModel=Backbone.Model.extend({after_title:null,after_widget:null,before_title:null,before_widget:null,"class":null,description:null,id:null,name:null,is_rendered:!1}),g.Widgets.SidebarCollection=Backbone.Collection.extend({model:g.Widgets.SidebarModel}),g.Widgets.registeredSidebars=new g.Widgets.SidebarCollection(g.Widgets.data.registeredSidebars),g.Widgets.AvailableWidgetsPanelView=a.Backbone.View.extend({el:"#available-widgets",events:{"input #widgets-search":"search","keyup #widgets-search":"search","focus .widget-tpl":"focus","click .widget-tpl":"_submit","keypress .widget-tpl":"_submit",keydown:"keyboardAccessible"},selected:null,currentSidebarControl:null,$search:null,$clearResults:null,searchMatchesCount:null,initialize:function(){var a=this;this.$search=b("#widgets-search"),this.$clearResults=this.$el.find(".clear-results"),_.bindAll(this,"close"),this.listenTo(this.collection,"change",this.updateList),this.updateList(),this.searchMatchesCount=this.collection.length,b("#customize-controls, #available-widgets .customize-section-title").on("click keydown",function(c){var d=b(c.target).is(".add-new-widget, .add-new-widget *");b("body").hasClass("adding-widget")&&!d&&a.close()}),this.$clearResults.on("click",function(){a.$search.val("").focus().trigger("keyup")}),g.previewer.bind("url",this.close)},search:function(a){var b;this.collection.doSearch(a.target.value),this.updateSearchMatchesCount(),this.announceSearchMatches(),this.selected&&!this.selected.is(":visible")&&(this.selected.removeClass("selected"),this.selected=null),this.selected&&!a.target.value&&(this.selected.removeClass("selected"),this.selected=null),!this.selected&&a.target.value&&(b=this.$el.find("> .widget-tpl:visible:first"),b.length&&this.select(b)),""!==a.target.value?this.$clearResults.addClass("is-visible"):""===a.target.value&&this.$clearResults.removeClass("is-visible"),this.searchMatchesCount?this.$el.removeClass("no-widgets-found"):this.$el.addClass("no-widgets-found")},updateSearchMatchesCount:function(){this.searchMatchesCount=this.collection.where({search_matched:!0}).length},announceSearchMatches:_.debounce(function(){var b=f.widgetsFound.replace("%d",this.searchMatchesCount);this.searchMatchesCount||(b=f.noWidgetsFound),a.a11y.speak(b)},500),updateList:function(){this.collection.each(function(a){var c=b("#widget-tpl-"+a.id);c.toggle(a.get("search_matched")&&!a.get("is_disabled")),a.get("is_disabled")&&c.is(this.selected)&&(this.selected=null)})},select:function(a){this.selected=b(a),this.selected.siblings(".widget-tpl").removeClass("selected"),this.selected.addClass("selected")},focus:function(a){this.select(b(a.currentTarget))},_submit:function(a){"keypress"===a.type&&13!==a.which&&32!==a.which||this.submit(b(a.currentTarget))},submit:function(a){var c,d,e;a||(a=this.selected),a&&this.currentSidebarControl&&(this.select(a),c=b(this.selected).data("widget-id"),d=this.collection.findWhere({id:c}),d&&(e=this.currentSidebarControl.addWidget(d.get("id_base")),e&&e.focus(),this.close()))},open:function(a){this.currentSidebarControl=a,_(this.currentSidebarControl.getWidgetFormControls()).each(function(a){a.params.is_wide&&a.collapseForm()}),b("body").addClass("adding-widget"),this.$el.find(".selected").removeClass("selected"),this.collection.doSearch(""),g.settings.browser.mobile||this.$search.focus()},close:function(a){a=a||{},a.returnFocus&&this.currentSidebarControl&&this.currentSidebarControl.container.find(".add-new-widget").focus(),this.currentSidebarControl=null,this.selected=null,b("body").removeClass("adding-widget"),this.$search.val("")},keyboardAccessible:function(a){var c=13===a.which,d=27===a.which,e=40===a.which,f=38===a.which,g=9===a.which,h=a.shiftKey,i=null,j=this.$el.find("> .widget-tpl:visible:first"),k=this.$el.find("> .widget-tpl:visible:last"),l=b(a.target).is(this.$search),m=b(a.target).is(".widget-tpl:visible:last");return e||f?(e?l?i=j:this.selected&&0!==this.selected.nextAll(".widget-tpl:visible").length&&(i=this.selected.nextAll(".widget-tpl:visible:first")):f&&(l?i=k:this.selected&&0!==this.selected.prevAll(".widget-tpl:visible").length&&(i=this.selected.prevAll(".widget-tpl:visible:first"))),this.select(i),void(i?i.focus():this.$search.focus())):void(c&&!this.$search.val()||(c?this.submit():d&&this.close({returnFocus:!0}),this.currentSidebarControl&&g&&(h&&l||!h&&m)&&(this.currentSidebarControl.container.find(".add-new-widget").focus(),a.preventDefault())))}}),g.Widgets.formSyncHandlers={rss:function(a,c,d){var e=c.find(".widget-error:first"),f=b("<div>"+d+"</div>").find(".widget-error:first");e.length&&f.length?e.replaceWith(f):e.length?e.remove():f.length&&c.find(".widget-content:first").prepend(f)}},g.Widgets.WidgetControl=g.Control.extend({defaultExpandedArguments:{duration:"fast",completeCallback:b.noop},initialize:function(a,c){var d=this;d.widgetControlEmbedded=!1,d.widgetContentEmbedded=!1,d.expanded=new g.Value(!1),d.expandedArgumentsQueue=[],d.expanded.bind(function(a){var c=d.expandedArgumentsQueue.shift();c=b.extend({},d.defaultExpandedArguments,c),d.onChangeExpanded(a,c)}),d.altNotice=!0,g.Control.prototype.initialize.call(d,a,c)},ready:function(){var a=this;a.section()?g.section(a.section(),function(b){var c=function(d){d&&(a.embedWidgetControl(),b.expanded.unbind(c))};b.expanded()?c(!0):b.expanded.bind(c)}):a.embedWidgetControl()},embedWidgetControl:function(){var a,c=this;c.widgetControlEmbedded||(c.widgetControlEmbedded=!0,a=b(c.params.widget_control),c.container.append(a),c._setupModel(),c._setupWideWidget(),c._setupControlToggle(),c._setupWidgetTitle(),c._setupReorderUI(),c._setupHighlightEffects(),c._setupUpdateUI(),c._setupRemoveUI())},embedWidgetContent:function(){var a,c=this;c.embedWidgetControl(),c.widgetContentEmbedded||(c.widgetContentEmbedded=!0,a=b(c.params.widget_content),c.container.find(".widget-content:first").append(a),b(document).trigger("widget-added",[c.container.find(".widget:first")]))},_setupModel:function(){var a,b=this;a=function(){g.Widgets.savedWidgetIds[b.params.widget_id]=!0},g.bind("ready",a),g.bind("saved",a),this._updateCount=0,this.isWidgetUpdating=!1,this.liveUpdateMode=!0,this.setting.bind(function(a,c){_(c).isEqual(a)||b.isWidgetUpdating||b.updateWidget({instance:a})})},_setupWideWidget:function(){var a,c,d,e,f,h=this;this.params.is_wide&&(a=this.container.find(".widget-inside"),c=a.find("> .form"),d=b(".wp-full-overlay-sidebar-content:first"),this.container.addClass("wide-widget-control"),this.container.find(".widget-content:first").css({"max-width":this.params.width,"min-height":this.params.height}),f=function(){var d,e=h.container.offset().top,f=b(window).height(),g=c.outerHeight();a.css("max-height",f),d=Math.max(0,Math.min(Math.max(e,0),f-g)),a.css("top",d)},e=b("#customize-theme-controls"),this.container.on("expand",function(){f(),d.on("scroll",f),b(window).on("resize",f),e.on("expanded collapsed",f)}),this.container.on("collapsed",function(){d.off("scroll",f),b(window).off("resize",f),e.off("expanded collapsed",f)}),g.each(function(a){0===a.id.indexOf("sidebars_widgets[")&&a.bind(function(){h.container.hasClass("expanded")&&f()})}))},_setupControlToggle:function(){var a,b=this;this.container.find(".widget-top").on("click",function(a){a.preventDefault();var c=b.getSidebarWidgetsControl();c.isReordering||b.expanded(!b.expanded())}),a=this.container.find(".widget-control-close"),a.on("click",function(a){a.preventDefault(),b.collapse(),b.container.find(".widget-top .widget-action:first").focus()})},_setupWidgetTitle:function(){var a,b=this;a=function(){var a=b.setting().title,c=b.container.find(".in-widget-title");a?c.text(": "+a):c.text("")},this.setting.bind(a),a()},_setupReorderUI:function(){var c,d,e,h,i,j=this;c=function(a){a.siblings(".selected").removeClass("selected"),a.addClass("selected");var b=a.data("id")===j.params.sidebar_id;j.container.find(".move-widget-btn").prop("disabled",b)},this.container.find(".widget-title-action").after(b(g.Widgets.data.tpl.widgetReorderNav)),i=_.template(g.Widgets.data.tpl.moveWidgetArea),d=b(i({sidebars:_(g.Widgets.registeredSidebars.toArray()).pluck("attributes")})),this.container.find(".widget-top").after(d),h=function(){var a,e=d.find("li"),f=0;a=e.filter(function(){return b(this).data("id")===j.params.sidebar_id}),e.each(function(){var d,e,h,i=b(this);d=i.data("id"),e=g.Widgets.registeredSidebars.get(d),h=e.get("is_rendered"),i.toggle(h),h&&(f+=1),i.hasClass("selected")&&!h&&c(a)}),f>1?j.container.find(".move-widget").show():j.container.find(".move-widget").hide()},h(),g.Widgets.registeredSidebars.on("change:is_rendered",h),e=this.container.find(".widget-reorder-nav"),e.find(".move-widget, .move-widget-down, .move-widget-up").each(function(){b(this).prepend(j.container.find(".widget-title").text()+": ")}).on("click keypress",function(c){if("keypress"!==c.type||13===c.which||32===c.which)if(b(this).focus(),b(this).is(".move-widget"))j.toggleWidgetMoveArea();else{var d=b(this).is(".move-widget-down"),e=b(this).is(".move-widget-up"),g=j.getWidgetSidebarPosition();if(e&&0===g||d&&g===j.getSidebarWidgetsControl().setting().length-1)return;e?(j.moveUp(),a.a11y.speak(f.widgetMovedUp)):(j.moveDown(),a.a11y.speak(f.widgetMovedDown)),b(this).focus()}}),this.container.find(".widget-area-select").on("click keypress","li",function(a){"keypress"===a.type&&13!==a.which&&32!==a.which||(a.preventDefault(),c(b(this)))}),this.container.find(".move-widget-btn").click(function(){j.getSidebarWidgetsControl().toggleReordering(!1);var a,b,c,d,e,f=j.params.sidebar_id,h=j.container.find(".widget-area-select li.selected").data("id");a=g("sidebars_widgets["+f+"]"),b=g("sidebars_widgets["+h+"]"),c=Array.prototype.slice.call(a()),d=Array.prototype.slice.call(b()),e=j.getWidgetSidebarPosition(),c.splice(e,1),d.push(j.params.widget_id),a(c),b(d),j.focus()})},_setupHighlightEffects:function(){var a=this;this.container.on("mouseenter click",function(){a.setting.previewer.send("highlight-widget",a.params.widget_id)}),this.setting.bind(function(){a.setting.previewer.send("highlight-widget",a.params.widget_id)})},_setupUpdateUI:function(){var a,c,d,e,h,i=this;a=this.container.find(".widget:first"),c=a.find(".widget-content:first"),d=this.container.find(".widget-control-save"),d.val(f.saveBtnLabel),d.attr("title",f.saveBtnTooltip),d.removeClass("button-primary"),d.on("click",function(a){a.preventDefault(),i.updateWidget({disable_form:!0})}),e=_.debounce(function(){i.updateWidget()},250),c.on("keydown","input",function(a){13===a.which&&(a.preventDefault(),i.updateWidget({ignoreActiveElement:!0}))}),c.on("change input propertychange",":input",function(a){i.liveUpdateMode&&("change"===a.type||this.checkValidity&&this.checkValidity())&&e()}),this.setting.previewer.channel.bind("synced",function(){i.container.removeClass("previewer-loading")}),g.previewer.bind("widget-updated",function(a){a===i.params.widget_id&&i.container.removeClass("previewer-loading")}),h=g.Widgets.formSyncHandlers[this.params.widget_id_base],h&&b(document).on("widget-synced",function(b,c){a.is(c)&&h.apply(document,arguments)})},onChangeActive:function(a,b){this.container.toggleClass("widget-rendered",a),b.completeCallback&&b.completeCallback()},_setupRemoveUI:function(){var a,b,c=this;a=this.container.find("a.widget-control-remove"),a.on("click",function(a){a.preventDefault();var b;b=c.container.next().is(".customize-control-widget_form")?c.container.next().find(".widget-action:first"):c.container.prev().is(".customize-control-widget_form")?c.container.prev().find(".widget-action:first"):c.container.next(".customize-control-sidebar_widgets").find(".add-new-widget:first"),c.container.slideUp(function(){var a,d,e=g.Widgets.getSidebarWidgetControlContainingWidget(c.params.widget_id);e&&(a=e.setting().slice(),d=_.indexOf(a,c.params.widget_id),-1!==d&&(a.splice(d,1),e.setting(a),b.focus()))})}),b=function(){a.text(f.removeBtnLabel),a.attr("title",f.removeBtnTooltip)},this.params.is_new?g.bind("saved",b):b()},_getInputs:function(a){return b(a).find(":input[name]")},_getInputsSignature:function(a){var c=_(a).map(function(a){var c,d=b(a);return c=d.is(":checkbox, :radio")?[d.attr("id"),d.attr("name"),d.prop("value")]:[d.attr("id"),d.attr("name")],c.join(",")});return c.join(";")},_getInputState:function(a){return a=b(a),a.is(":radio, :checkbox")?a.prop("checked"):a.is("select[multiple]")?a.find("option:selected").map(function(){return b(this).val()}).get():a.val()},_setInputState:function(a,c){a=b(a),a.is(":radio, :checkbox")?a.prop("checked",c):a.is("select[multiple]")?(c=b.isArray(c)?_.map(c,function(a){return String(a)}):[],a.find("option").each(function(){b(this).prop("selected",-1!==_.indexOf(c,String(this.value)))})):a.val(c)},getSidebarWidgetsControl:function(){var a,b;if(a="sidebars_widgets["+this.params.sidebar_id+"]",b=g.control(a))return b},updateWidget:function(c){var d,e,h,i,j,k,l,m,n,o,p,q=this;q.embedWidgetContent(),c=b.extend({instance:null,complete:null,ignoreActiveElement:!1},c),d=c.instance,e=c.complete,this._updateCount+=1,j=this._updateCount,h=this.container.find(".widget:first"),i=h.find(".widget-content:first"),i.find(".widget-error").remove(),this.container.addClass("widget-form-loading"),this.container.addClass("previewer-loading"),n=g.state("processing"),n(n()+1),this.liveUpdateMode||this.container.addClass("widget-form-disabled"),k={},k.action="update-widget",k.wp_customize="on",k.nonce=g.settings.nonce["update-widget"],k.customize_theme=g.settings.theme.stylesheet,k.customized=a.customize.previewer.query().customized,l=b.param(k),m=this._getInputs(i),m.each(function(){b(this).data("state"+j,q._getInputState(this))}),l+=d?"&"+b.param({sanitized_widget_setting:JSON.stringify(d)}):"&"+m.serialize(),l+="&"+i.find("~ :input").serialize(),this._previousUpdateRequest&&this._previousUpdateRequest.abort(),o=b.post(a.ajax.settings.url,l),this._previousUpdateRequest=o,o.done(function(a){var d,k,l,n,o=!1;return"0"===a?(g.previewer.preview.iframe.hide(),void g.previewer.login().done(function(){q.updateWidget(c),g.previewer.preview.iframe.show()})):"-1"===a?void g.previewer.cheatin():void(a.success?(k=b("<div>"+a.data.form+"</div>"),l=q._getInputs(k),n=q._getInputsSignature(m)===q._getInputsSignature(l),n&&!q.liveUpdateMode&&(q.liveUpdateMode=!0,q.container.removeClass("widget-form-disabled"),q.container.find('input[name="savewidget"]').hide()),n&&q.liveUpdateMode?(m.each(function(a){var d,e,f,g=b(this),h=b(l[a]);d=g.data("state"+j),e=q._getInputState(h),g.data("sanitized",e),f=!_.isEqual(d,e)&&(c.ignoreActiveElement||!g.is(document.activeElement)),f&&q._setInputState(g,e)}),b(document).trigger("widget-synced",[h,a.data.form])):q.liveUpdateMode?(q.liveUpdateMode=!1,q.container.find('input[name="savewidget"]').show(),o=!0):(i.html(a.data.form),q.container.removeClass("widget-form-disabled"),b(document).trigger("widget-updated",[h])),p=!o&&!_(q.setting()).isEqual(a.data.instance),p?(q.isWidgetUpdating=!0,q.setting(a.data.instance),q.isWidgetUpdating=!1):q.container.removeClass("previewer-loading"),e&&e.call(q,null,{noChange:!p,ajaxFinished:!0})):(d=f.error,a.data&&a.data.message&&(d=a.data.message),e?e.call(q,d):i.prepend('<p class="widget-error"><strong>'+d+"</strong></p>")))}),o.fail(function(a,b){e&&e.call(q,b)}),o.always(function(){q.container.removeClass("widget-form-loading"),m.each(function(){b(this).removeData("state"+j)}),n(n()-1)})},expandControlSection:function(){g.Control.prototype.expand.call(this)},_toggleExpanded:g.Section.prototype._toggleExpanded,expand:g.Section.prototype.expand,expandForm:function(){this.expand()},collapse:g.Section.prototype.collapse,collapseForm:function(){this.collapse()},toggleForm:function(a){"undefined"==typeof a&&(a=!this.expanded()),this.expanded(a)},onChangeExpanded:function(a,b){var c,d,e,f,h,i=this;return i.embedWidgetControl(),a&&i.embedWidgetContent(),b.unchanged?void(a&&g.Control.prototype.expand.call(i,{completeCallback:b.completeCallback})):(c=this.container.find("div.widget:first"),d=c.find(".widget-inside:first"),h=function(){g.control.each(function(a){i.params.type===a.params.type&&i!==a&&a.collapse()}),e=function(){i.container.removeClass("expanding"),i.container.addClass("expanded"),i.container.trigger("expanded")},b.completeCallback&&(f=e,e=function(){f(),b.completeCallback()}),i.params.is_wide?d.fadeIn(b.duration,e):d.slideDown(b.duration,e),i.container.trigger("expand"),i.container.addClass("expanding")},void(a?g.section.has(i.section())?g.section(i.section()).expand({completeCallback:h}):h():(e=function(){i.container.removeClass("collapsing"),i.container.removeClass("expanded"),i.container.trigger("collapsed")},b.completeCallback&&(f=e,e=function(){f(),b.completeCallback()}),i.container.trigger("collapse"),i.container.addClass("collapsing"),i.params.is_wide?d.fadeOut(b.duration,e):d.slideUp(b.duration,function(){c.css({width:"",margin:""}),e()}))))},getWidgetSidebarPosition:function(){var a,b;if(a=this.getSidebarWidgetsControl().setting(),b=_.indexOf(a,this.params.widget_id),b!==-1)return b},moveUp:function(){this._moveWidgetByOne(-1)},moveDown:function(){this._moveWidgetByOne(1)},_moveWidgetByOne:function(a){var b,c,d,e;b=this.getWidgetSidebarPosition(),c=this.getSidebarWidgetsControl().setting,d=Array.prototype.slice.call(c()),e=d[b+a],d[b+a]=this.params.widget_id,d[b]=e,c(d)},toggleWidgetMoveArea:function(a){var c,d=this;c=this.container.find(".move-widget-area"),"undefined"==typeof a&&(a=!c.hasClass("active")),a&&(c.find(".selected").removeClass("selected"),c.find("li").filter(function(){return b(this).data("id")===d.params.sidebar_id}).addClass("selected"),this.container.find(".move-widget-btn").prop("disabled",!0)),c.toggleClass("active",a)},highlightSectionAndControl:function(){var a;a=this.container.is(":hidden")?this.container.closest(".control-section"):this.container,b(".highlighted").removeClass("highlighted"),a.addClass("highlighted"),setTimeout(function(){a.removeClass("highlighted")},500)}}),g.Widgets.WidgetsPanel=g.Panel.extend({ready:function(){var a=this;g.Panel.prototype.ready.call(a),a.deferred.embedded.done(function(){var c,d,e;c=a.container.find(".panel-meta"),d=b("<div></div>",{"class":"no-widget-areas-rendered-notice"}),d.append(b("<em></em>",{text:f.noAreasRendered})),c.append(d),e=function(){return 0===_.filter(a.sections(),function(a){return a.active()}).length},d.toggle(e()),g.previewer.deferred.active.done(function(){d.toggle(e())}),g.bind("pane-contents-reflowed",function(){var a="resolved"===g.previewer.deferred.active.state()?"fast":0;e()?d.slideDown(a):d.slideUp(a)})})},isContextuallyActive:function(){var a=this;return a.active()}}),g.Widgets.SidebarSection=g.Section.extend({ready:function(){var a,b=this;g.Section.prototype.ready.call(this),a=g.Widgets.registeredSidebars.get(b.params.sidebarId),b.active.bind(function(b){a.set("is_rendered",b)}),a.set("is_rendered",b.active())}}),g.Widgets.SidebarControl=g.Control.extend({ready:function(){this.$controlSection=this.container.closest(".control-section"),this.$sectionContent=this.container.closest(".accordion-section-content"),this._setupModel(),this._setupSortable(),this._setupAddition(),this._applyCardinalOrderClassNames()},_setupModel:function(){var a=this;this.setting.bind(function(c,e){var f,h,i;h=_(e).difference(c),c=_(c).filter(function(a){var b=d(a);return!!g.Widgets.availableWidgets.findWhere({id_base:b.id_base})}),f=_(c).map(function(b){var c=g.Widgets.getWidgetFormControlForWidget(b);return c||(c=a.addWidget(b)),c}),f.sort(function(a,b){var d=_.indexOf(c,a.params.widget_id),e=_.indexOf(c,b.params.widget_id);return d-e}),i=0,_(f).each(function(b){b.priority(i),b.section(a.section()),i+=1}),a.priority(i),a._applyCardinalOrderClassNames(),_(f).each(function(b){b.params.sidebar_id=a.params.sidebar_id}),_(h).each(function(c){setTimeout(function(){var e,f,h,i,j,k=!1;g.each(function(b){if(b.id!==a.setting.id&&0===b.id.indexOf("sidebars_widgets[")&&"sidebars_widgets[wp_inactive_widgets]"!==b.id){var d,e=b();d=_.indexOf(e,c),-1!==d&&(k=!0)}}),k||(e=g.Widgets.getWidgetFormControlForWidget(c),f=e&&b.contains(document,e.container[0])&&!b.contains(a.$sectionContent[0],e.container[0]),e&&!f&&(g.control.remove(e.id),e.container.remove()),g.Widgets.savedWidgetIds[c]&&(h=g.value("sidebars_widgets[wp_inactive_widgets]")().slice(),h.push(c),g.value("sidebars_widgets[wp_inactive_widgets]")(_(h).unique())),i=d(c).id_base,j=g.Widgets.availableWidgets.findWhere({id_base:i}),j&&!j.get("is_multi")&&j.set("is_disabled",!1))})})})},_setupSortable:function(){var a=this;this.isReordering=!1,this.$sectionContent.sortable({items:"> .customize-control-widget_form",handle:".widget-top",axis:"y",tolerance:"pointer",connectWith:".accordion-section-content:has(.customize-control-sidebar_widgets)",update:function(){var c,d=a.$sectionContent.sortable("toArray");c=b.map(d,function(a){return b("#"+a).find(":input[name=widget-id]").val()}),a.setting(c)}}),this.$controlSection.find(".accordion-section-title").droppable({accept:".customize-control-widget_form",over:function(){var b=g.section(a.section.get());b.expand({allowMultiple:!0,completeCallback:function(){g.section.each(function(a){a.container.find(".customize-control-sidebar_widgets").length&&a.container.find(".accordion-section-content:first").sortable("refreshPositions")})}})}}),this.container.find(".reorder-toggle").on("click",function(){a.toggleReordering(!a.isReordering)})},_setupAddition:function(){var a=this;this.container.find(".add-new-widget").on("click",function(){var c=b(this);a.$sectionContent.hasClass("reordering")||(b("body").hasClass("adding-widget")?(c.attr("aria-expanded","false"),g.Widgets.availableWidgetsPanel.close()):(c.attr("aria-expanded","true"),g.Widgets.availableWidgetsPanel.open(a)))})},_applyCardinalOrderClassNames:function(){var a=[];return _.each(this.setting(),function(b){var c=g.Widgets.getWidgetFormControlForWidget(b);c&&a.push(c)}),0===a.length||1===g.Widgets.registeredSidebars.length&&a.length<=1?void this.container.find(".reorder-toggle").hide():(this.container.find(".reorder-toggle").show(),b(a).each(function(){b(this.container).removeClass("first-widget").removeClass("last-widget").find(".move-widget-down, .move-widget-up").prop("tabIndex",0)}),_.first(a).container.addClass("first-widget").find(".move-widget-up").prop("tabIndex",-1),void _.last(a).container.addClass("last-widget").find(".move-widget-down").prop("tabIndex",-1))},toggleReordering:function(b){var c=this.$sectionContent.find(".add-new-widget"),d=this.container.find(".reorder-toggle"),e=this.$sectionContent.find(".widget-title");b=Boolean(b),b!==this.$sectionContent.hasClass("reordering")&&(this.isReordering=b,this.$sectionContent.toggleClass("reordering",b),b?(_(this.getWidgetFormControls()).each(function(a){a.collapse()}),c.attr({tabindex:"-1","aria-hidden":"true"}),d.attr("aria-label",f.reorderLabelOff),a.a11y.speak(f.reorderModeOn),e.attr("aria-hidden","true")):(c.removeAttr("tabindex aria-hidden"),d.attr("aria-label",f.reorderLabelOn),a.a11y.speak(f.reorderModeOff),e.attr("aria-hidden","false")))},getWidgetFormControls:function(){var a=[];return _(this.setting()).each(function(b){var c=e(b),d=g.control(c);d&&a.push(d)}),a},addWidget:function(a){var c,e,f,h,i,j,k,l,m,n,o=this,p="widget_form",q=d(a),r=q.number,s=q.id_base,t=g.Widgets.availableWidgets.findWhere({id_base:s});return!!t&&(!(r&&!t.get("is_multi"))&&(t.get("is_multi")&&!r&&(t.set("multi_number",t.get("multi_number")+1),r=t.get("multi_number")),c=b.trim(b("#widget-tpl-"+t.get("id")).html()),t.get("is_multi")?c=c.replace(/<[^<>]+>/g,function(a){return a.replace(/__i__|%i%/g,r)}):t.set("is_disabled",!0),e=b(c),f=b("<li/>").addClass("customize-control").addClass("customize-control-"+p).append(e),f.find("> .widget-icon").remove(),t.get("is_multi")&&(f.find('input[name="widget_number"]').val(r),f.find('input[name="multi_number"]').val(r)),a=f.find('[name="widget-id"]').val(),f.hide(),i="widget_"+t.get("id_base"),t.get("is_multi")&&(i+="["+r+"]"),f.attr("id","customize-control-"+i.replace(/\]/g,"").replace(/\[/g,"-")),j=g.has(i),j||(m={transport:g.Widgets.data.selectiveRefreshableWidgets[t.get("id_base")]?"postMessage":"refresh",previewer:this.setting.previewer},n=g.create(i,i,"",m),n.set({})),h=g.controlConstructor[p],k=new h(i,{params:{settings:{"default":i},content:f,sidebar_id:o.params.sidebar_id,widget_id:a,widget_id_base:t.get("id_base"),type:p,is_new:!j,width:t.get("width"),height:t.get("height"),is_wide:t.get("is_wide"),active:!0},previewer:o.setting.previewer}),g.control.add(i,k),g.each(function(b){if(b.id!==o.setting.id&&0===b.id.indexOf("sidebars_widgets[")){var c=b().slice(),d=_.indexOf(c,a);-1!==d&&(c.splice(d),b(c))}}),l=this.setting().slice(),-1===_.indexOf(l,a)&&(l.push(a),this.setting(l)),f.slideDown(function(){j&&k.updateWidget({instance:k.setting()})}),k))}}),b.extend(g.panelConstructor,{widgets:g.Widgets.WidgetsPanel}),b.extend(g.sectionConstructor,{sidebar:g.Widgets.SidebarSection}),b.extend(g.controlConstructor,{widget_form:g.Widgets.WidgetControl,sidebar_widgets:g.Widgets.SidebarControl}),g.bind("ready",function(){g.Widgets.availableWidgetsPanel=new g.Widgets.AvailableWidgetsPanelView({collection:g.Widgets.availableWidgets}),g.previewer.bind("highlight-widget-control",g.Widgets.highlightWidgetFormControl),g.previewer.bind("focus-widget-control",g.Widgets.focusWidgetFormControl)}),g.Widgets.highlightWidgetFormControl=function(a){var b=g.Widgets.getWidgetFormControlForWidget(a);b&&b.highlightSectionAndControl()},g.Widgets.focusWidgetFormControl=function(a){var b=g.Widgets.getWidgetFormControlForWidget(a);b&&b.focus()},g.Widgets.getSidebarWidgetControlContainingWidget=function(a){var b=null;return g.control.each(function(c){"sidebar_widgets"===c.params.type&&-1!==_.indexOf(c.setting(),a)&&(b=c)}),b},g.Widgets.getWidgetFormControlForWidget=function(a){var b=null;return g.control.each(function(c){"widget_form"===c.params.type&&c.params.widget_id===a&&(b=c)}),b},b(document).on("widget-added",function(a,b){var e,f,h,i;e=d(b.find("> .widget-inside > .form > .widget-id").val()),"nav_menu"===e.id_base&&(f=g.control("widget_nav_menu["+String(e.number)+"]"),f&&(h=b.find('select[name*="nav_menu"]'),i=b.find(".edit-selected-nav-menu > button"),0!==h.length&&0!==i.length&&(h.on("change",function(){g.section.has("nav_menu["+h.val()+"]")?i.parent().show():i.parent().hide()}),i.on("click",function(){var a=g.section("nav_menu["+h.val()+"]");a&&c(a,f)}))))})}}(window.wp,jQuery);