jQuery(function(a){a(".wc-credit-card-form-card-number").payment("formatCardNumber"),a(".wc-credit-card-form-card-expiry").payment("formatCardExpiry"),a(".wc-credit-card-form-card-cvc").payment("formatCardCVC"),a(document.body).on("updated_checkout wc-credit-card-form-init",function(){a(".wc-credit-card-form-card-number").payment("formatCardNumber"),a(".wc-credit-card-form-card-expiry").payment("formatCardExpiry"),a(".wc-credit-card-form-card-cvc").payment("formatCardCVC")}).trigger("wc-credit-card-form-init")});