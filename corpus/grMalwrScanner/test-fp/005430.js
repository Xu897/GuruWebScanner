!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";!function(a){function b(){if(void 0!==window.wpseoConsoleNotifications&&"undefined"!=typeof console)for(var a=0;a<wpseoConsoleNotifications.length;a++)console.warn(wpseoConsoleNotifications[a])}function c(a){jQuery.post(ajaxurl,{action:"wpseo_dismiss_tagline_notice",_wpnonce:a})}function d(a,b,c){jQuery.post(ajaxurl,{action:"wpseo_set_ignore",option:a,_wpnonce:c},function(c){c&&(jQuery("#"+b).hide(),jQuery("#hidden_ignore_"+a).val("ignore"))})}function e(a){return jQuery('<a href="'+a+'" type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></a>')}function f(){a("#wp-admin-bar-root-default > li").off("hover.yoastalertpopup"),a(".yoast-issue-added").fadeOut(200)}function g(){a(".yoast-issue-added").on("hover",function(a){a.stopPropagation(),f()}).fadeIn(),a("#wp-admin-bar-root-default > li").on("hover.yoastalertpopup",f),setTimeout(f,3e3)}function h(b,c){if(a(".yoast-alert-holder").off("click",".restore").off("click",".dismiss"),void 0!==c.html){c.html&&(b.closest(".yoast-container").html(c.html),i());var d=a("#wp-admin-bar-wpseo-menu"),e=d.find(".yoast-issue-counter");e.length||(d.find("> a:first-child").append('<div class="yoast-issue-counter"/>'),e=d.find(".yoast-issue-counter")),e.html(c.total),0===c.total?e.hide():e.show(),a("#toplevel_page_wpseo_dashboard .update-plugins").removeClass().addClass("update-plugins count-"+c.total),a("#toplevel_page_wpseo_dashboard .plugin-count").html(c.total)}}function i(){var b=a(".yoast-alert-holder");b.on("click",".dismiss",function(){var b=a(this),c=b.closest(".yoast-alert-holder");b.closest(".yoast-container").append('<div class="yoast-container-disabled"/>'),b.find("span").removeClass("dashicons-no-alt").addClass("dashicons-randomize"),a.post(ajaxurl,{action:"yoast_dismiss_alert",notification:c.attr("id"),nonce:c.data("nonce"),data:c.data("json")},h.bind(this,c),"json")}),b.on("click",".restore",function(){var b=a(this),c=b.closest(".yoast-alert-holder");b.closest(".yoast-container").append('<div class="yoast-container-disabled"/>'),b.find("span").removeClass("dashicons-arrow-up").addClass("dashicons-randomize"),a.post(ajaxurl,{action:"yoast_restore_alert",notification:c.attr("id"),nonce:c.data("nonce"),data:c.data("json")},h.bind(this,c),"json")})}function j(){var a=jQuery(".wpseo-js-premium-indicator"),b=a.find("svg");if(a.hasClass("wpseo-premium-indicator--no")){var c=b.find("path"),d=a.css("backgroundColor");c.css("fill",d)}b.css("display","block"),a.css({backgroundColor:"transparent",width:"20px",height:"20px"})}function k(a){a.is(":hidden")||(a.outerWidth()>a.parent().outerWidth()?(a.data("scrollHint").addClass("yoast-has-scroll"),a.data("scrollContainer").addClass("yoast-has-scroll")):(a.data("scrollHint").removeClass("yoast-has-scroll"),a.data("scrollContainer").removeClass("yoast-has-scroll")))}function l(b){b.each(function(){k(a(this))})}function m(){window.wpseoScrollableTables=a(".yoast-table-scrollable"),window.wpseoScrollableTables.length&&window.wpseoScrollableTables.each(function(){var b=a(this),c=a("<div />",{class:"yoast-table-scrollable__hintwrapper",html:"<span class='yoast-table-scrollable__hint' aria-hidden='true' />"}).insertBefore(b),d=a("<div />",{class:"yoast-table-scrollable__container",html:"<div class='yoast-table-scrollable__inner' />"}).insertBefore(b);c.find(".yoast-table-scrollable__hint").text(wpseoAdminGlobalL10n.scrollable_table_hint),b.data("scrollContainer",d),b.data("scrollHint",c),b.appendTo(d.find(".yoast-table-scrollable__inner")),k(b)})}function n(a){var b=a.find(".wpseo-tab-video__data");0!==b.length&&b.append('<iframe width="560" height="315" src="'+b.data("url")+'" title="'+wpseoAdminGlobalL10n.help_video_iframe_title+'" frameborder="0" allowfullscreen></iframe>')}function o(){a("#wpbody-content").find(".wpseo-tab-video__data").children().remove()}function p(a,b){a.find(".yoast-help-center-tabs-wrap div").removeClass("active"),b.addClass("active"),o(),n(b),l(b.find(".yoast-table-scrollable"))}function q(b){b.find(".toggle__arrow").removeClass("dashicons-arrow-down").addClass("dashicons-arrow-up"),b.find(".wpseo-tab-video-container__handle").attr("aria-expanded","true"),b.find(".wpseo-tab-video-slideout").removeClass("hidden");var c=b.find(".wpseo-help-center-item.active > a");if(a("#wpcontent").addClass("yoast-help-center-open"),c.length>0){var d=c.attr("aria-controls"),e=a("#"+d);n(e),l(e.find(".yoast-table-scrollable")),b.on("click",".wpseo-help-center-item > a",function(c){var d=a(this),e=d.attr("aria-controls");b.find(".wpseo-help-center-item").removeClass("active"),d.parent().addClass("active"),p(b,a("#"+e)),c.preventDefault()})}else n(b);a("#sidebar-container").hide()}function r(){var b=a("#wpbody-content").find(".wpseo-tab-video-container");b.find(".wpseo-tab-video-slideout").addClass("hidden"),o(),b.find(".toggle__arrow").removeClass("dashicons-arrow-up").addClass("dashicons-arrow-down"),b.find(".wpseo-tab-video-container__handle").attr("aria-expanded","false"),a("#wpcontent").removeClass("yoast-help-center-open"),a("#sidebar-container").show()}jQuery(document).ready(b),jQuery(document).ready(function(){jQuery(".yoast-dismissible").on("click",".yoast-notice-dismiss",function(){var a=jQuery(this).parent();return jQuery.post(ajaxurl,{action:a.attr("id").replace(/-/g,"_"),_wpnonce:a.data("nonce"),data:a.data("json")}),jQuery.post(ajaxurl,{action:"yoast_dismiss_notification",notification:a.attr("id"),nonce:a.data("nonce"),data:a.data("json")}),a.fadeTo(100,0,function(){a.slideUp(100,function(){a.remove()})}),!1}),jQuery(".yoast-help-button").on("click",function(){var a=jQuery(this),b=jQuery("#"+a.attr("aria-controls")),c=b.is(":visible");jQuery(b).slideToggle(200,function(){a.attr("aria-expanded",!c)})})}),window.wpseoDismissTaglineNotice=c,window.wpseoSetIgnore=d,window.wpseoDismissLink=e,a(window).on("wp-window-resized orientationchange",function(){window.wpseoScrollableTables.length&&l(window.wpseoScrollableTables)}),a(document).ready(function(){g(),i(),j(),m()}),a(".nav-tab").click(function(){r()}),a(".wpseo-tab-video-container").on("click",".wpseo-tab-video-container__handle",function(b){var c=a(b.delegateTarget);c.find(".wpseo-tab-video-slideout").hasClass("hidden")?q(c):r()})}(jQuery)},{}]},{},[1]);