jQuery(function(a){var b={init:function(){a(document.body).on("click","a.help_tip, a.woocommerce-help-tip",this.preventTipTipClick).on("click","a.debug-report",this.generateReport).on("copy","#copy-for-support",this.copyReport).on("aftercopy","#copy-for-support",this.afterCopyReport)},preventTipTipClick:function(){return!1},generateReport:function(){var b="";a(".wc_status_table thead, .wc_status_table tbody").each(function(){if(a(this).is("thead")){var c=a(this).find("th:eq(0)").data("export-label")||a(this).text();b=b+"\n### "+a.trim(c)+" ###\n\n"}else a("tr",a(this)).each(function(){var c=a(this).find("td:eq(0)").data("export-label")||a(this).find("td:eq(0)").text(),d=a.trim(c).replace(/(<([^>]+)>)/gi,""),e=a(this).find("td:eq(2)").clone();e.find(".private").remove(),e.find(".dashicons-yes").replaceWith("&#10004;"),e.find(".dashicons-no-alt, .dashicons-warning").replaceWith("&#10060;");var f=a.trim(e.text()),g=f.split(", ");if(g.length>1){var h="";a.each(g,function(a,b){h=h+b+"\n"}),f=h}b=b+""+d+": "+f+"\n"})});try{return a("#debug-report").slideDown(),a("#debug-report").find("textarea").val("`"+b+"`").focus().select(),a(this).fadeOut(),!1}catch(a){console.log(a)}return!1},copyReport:function(b){b.clipboardData.clearData(),b.clipboardData.setData("text/plain",a("#debug-report").find("textarea").val()),b.preventDefault()},afterCopyReport:function(b){!0===b.success["text/plain"]?a("#copy-for-support").tipTip({attribute:"data-tip",activation:"focus",fadeIn:50,fadeOut:50,delay:0}).focus():(a(".copy-error").removeClass("hidden"),a("#debug-report").find("textarea").focus().select())}};b.init()});