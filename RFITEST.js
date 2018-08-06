/*!
 * Adapter Version: 08da0993146451f8773aca0e119dada8 
 */
/*!
 * 
 * Copyright (c) 2018 Loop Commerce Inc. (www.loopcommerce.com).  All rights reserved.
 * Version: 2.13.191-9260-4
 * Generated: Tue Jul 31 2018 23:55:34 GMT+0000
 * 
 */
!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=58)}({0:function(e,t,r){e.exports=r(1)(1)},1:function(e,t){e.exports=loop_global_lib},10:function(e,t,r){(function(e){
/*!
 * Copyright (c) 2018 Loop Commerce Inc. (www.loopcommerce.com).  All rights reserved.
 */
r(3),e.storeAdapter.setPlatform({getStoreUrl:function(e){switch(e){case"exchange":return this.getApiUrl("goToGiftExchange");case"payment":return this.paymentPageUrl;case"paymentReturn":return this.storeFrontUrl+"/loop/secure";case"exchangeStartPage":case"closeCheckoutWindow":case"closeClaimWindow":return this.homePageUrl;default:throw new Error("type is wrong:"+e)}}})}).call(t,r(0))},13:function(e,t,r){(function(e){r(3),r(10),e.storeAdapter.giftMall=!0,e.storeAdapter.isAlwaysCoverGift=e.storeAdapter.customParameters&&"true"===e.storeAdapter.customParameters["global.COVER_ADDITIONAL_PAYMENT"],e.storeAdapter.supportEmail="support@loopgift.com",e.storeAdapter.emitFacebookEvents=!0,e.storeAdapter.shouldFilterExpensiveProducts=!1,e.storeAdapter.hasCustomSupportPage=!0,e.storeAdapter.showMultipleSendMethods=!1,e.storeAdapter.reincentivizePromo=!1,e.storeAdapter.showFulfillingStoreInfo=!0,e.storeAdapter.getSubtotal=function(e,t){return t||e},e.storeAdapter.getGAId=function(){return"UA-35976953-7"},e.storeAdapter.faqs={faqs:{"how-is-it-received":{label:e.lang.t("send.faq.howIsGiftRecievedTitle"),content:"Your gift recipient receives an email notifying them of the gift. They follow a link from the email to our store's website, where a gift box opens to reveal the gift. They can then accept the gift (adjusting size/color) exchange across the extensive Loop network of stores and brands, all before it ships.",track:"how-is-it-received"},"can-exchange":{label:"Can the recipient exchange the gift?",content:"Yes, when the recipient receives your gift, they can easily exchange it for something else, before it ships. They'll just open the gift online & select the exchange option. They'll get to choose a gift card from the extensive Loop network of stores and brands, which they can use toward a similar item, or something else they like.<br/><br/>If the gift selected by the recipient is less expensive than the gift value, they will receive gift credit for the difference, which they can use toward a future purchase. If the gift selected is more expensive, the gift recipient will have the option to cover the difference or choose an alternate gift.",track:"can-exchange"},"can-return":{label:"Can the gift that has been shipped & received be returned?",content:"Yes, gifts can be returned to the store that shipped the gift. Store credit from will be given for returned items and can be used within the fulfillment store. Please refer to the fulfillment store's return & exchange policy for more information.",track:"can-return"},sale:{label:e.lang.t("faq.question.itemOnSale"),content:"The price & availability of the originally selected gift is subject to change. If the gift goes on sale & the price is lower at the time the recipient accepts it, they will receive the price difference in the form of gift credit.",track:"sale"},unavailable:{label:e.lang.t("faq.question.itemUnavailable"),content:"If the item is not available at the time the recipient redeems the gift, we show your chosen gift as a suggestion. They will receive gift credit for the full amount you paid, including the shipping & tax, which they can use to choose a similar item, or something else they like across the extensive Loop network of stores and brands.<br/><br/>Please note that the price & availability of the originally selected gift is subject to change.",track:"unavailable"},"price-increase":{label:e.lang.t("faq.question.priceIncrease"),content:"We believe the recipient should receive a gift without having to add money. Therefore, if the price of the gift increases by the time the recipient accepts it, we show them your chosen gift as a suggestion. They will receive gift credit for the full amount you paid, including the shipping & tax, which they can use to choose a similar item, or something else they like across the extensive Loop network of stores and brands.",track:"price-increase"}}}}).call(t,r(0))},2:function(e,t,r){e.exports=r(1)(0)},3:function(e,t,r){(function(e,t,o,n){var i=r(6);window.Loop=e,e.storeAdapter=t.extend(!0,i,{storeFrontUrl:"-- store storeFrontUrl --",homePageUrl:"-- store homePageUrl --",storeApiEndpointUrl:"-- store apiUrl --",loopApiRecipientUrl:"-- InternalRecipientApi --",loopApiSenderUrl:"-- InternalSenderApi --",staticUrl:"-- static resources base Url --",paymentPageUrl:"-- loop PaymentPage URL --",customParameters:"-- store custom parameters --",exchangeForGiftCardMode:!0,themeDeviceStyle:"hands",currency:"USD",text:{termsOfUse:"Privacy Policy and Terms",previewText:"View full screen preview",sendHeroHeaders:{header:"Last minute gifting &ndash; solved!",subheading1:"Surprise them with this gift instantly via email, text or link.",subheading2:"They choose their size &amp; color, or easily exchange &ndash; before it ships!"}},deferreds:{},getStoreUrl:function(e){switch(e){case"exchange":return this.getApiUrl("goToGiftExchange");case"payment":return this.paymentPageUrl;case"paymentReturn":return this.storeFrontUrl+"/loop/secure";case"exchangeStartPage":case"closeCheckoutWindow":case"closeClaimWindow":return this.homePageUrl;default:throw new Error("type is wrong:"+e)}},getApiUrl:function(e,t){return(t?this.loopApiRecipientUrl+"/"+e:this.loopApiSenderUrl+"/"+e).replace(/^https?\:/,"")},apiEndpoint:function(){return this.loopApiSenderUrl.replace(/\/sender$/,"")},getProduct:function(r,o){"function"==typeof e.storeAdapter.fixProductIds&&(r=e.storeAdapter.fixProductIds(r)[0]);var n=this.getApiUrl("getProduct/")+encodeURIComponent(r)+"?productPage="+encodeURIComponent(o);return t.ajax({url:n,type:"post",dataType:"json",contentType:"application/json",timeout:6e4,data:"{}"}).pipe(function(t){var r=t&&t.product||t;return r.products&&r.products.length||(r.products=[{sku:r.sku,productId:r.upc,isAvailable:r.isAvailable,disabled:r.disabled,priceCurrency:r.currency,price:r.price}]),"function"==typeof e.storeAdapter.formatProductData&&(r=e.storeAdapter.formatProductData(r)),r})},getProducts:function(e){return this.getProduct(e[0])},getAvailableProducts:function(t){return o.filter(t,function(t){return e.storeAdapter.getProductAvailability(t)})},getProductAvailability:function(e){return e.isAvailable&&!e.disabled},getSKUAvailability:function(r){"function"==typeof e.storeAdapter.fixProductIds&&(productId=e.storeAdapter.fixProductIds(productId)[0]);var o=this.getApiUrl("getProductAvailability",!0);return t.ajax({url:o,type:"post",dataType:"json",contentType:"application/json",data:JSON.stringify({productId:r.productId,sku:r.sku,attributeSelection:r.attributeSelection||{},quantity:r.quantity||1})})},iframeHeroPosterUrl:function(){return"https://static.loopassets.net/store/"+e.storeAdapter.storeName.replace(/\s/gi,"").toLowerCase()+"/hero-video/nfs-video-poster.jpg"},iframeHeroVideoUrl:function(){return"https://static.loopassets.net/store/"+e.storeAdapter.storeName.replace(/\s/gi,"").toLowerCase()+"/hero-video/top-hero-video.mp4"},isStoreProxyDirectPost:function(){return e.storeAdapter.storeProxyDirectPost},isBraintreePayPalSupported:function(){return e.storeAdapter.supportsBraintreePaypal},isUK:function(){return"GBP"==this.currency},getCountry:function(){return this.isUK()?"GB":"US"},getProductsToSubmitToCartTotals:function(e){return e},isPreorderProduct:function(e){return e&&e.preOrder||!1},isBackorderProduct:function(e){return e&&e.backOrder||!1},hasDisallowedProduct:function(e){return!1},getFaqsList:function(e){var t=[];return this.faqs&&this.faqs.screens[e]&&this.faqs.screens[e].forEach(function(e){var r=this.faqs.faqs[e];r&&t.push(r)},this),t},faqs:{screens:{},faqs:{}},getSupportEmail:function(){return this.supportEmail||this.shortName+"-support@loopgift.com"},getMailToLink:function(){return"mailto:"+this.getSupportEmail()+("?subject="+encodeURIComponent(e.lang.t("contact.emailSubject")))},getMailToAnchor:function(){return'<a class="support-link" href="'+this.getMailToLink()+'">'+this.getSupportEmail()+"</a>"},hasActiveCampaign:function(){return!(!e.storeAdapter.campaigns||!e.storeAdapter.campaigns.length)},supportsCoupons:function(){return this.customParameters&&"true"===this.customParameters["global.COUPONS"]},getWarningMessage:function(t){for(var r=!1,o="",n=0;n<t.length;n++)switch(t[n]){case"auto_replenish":o+="Auto-replenish is not available when gifting.<br/>Items in your order will be delivered one time only.";break;case"monogram":o+=e.lang.t("common.monogramWarning");break;case"personalization":o+=e.lang.t("common.personalizationWarning");break;case"quantity":r=!0;break;default:console.log("Unknown warning message of type "+key)}return r&&(o.length?o+="<br/>Additionally, sending more than one item as a gift is not currently supported. Only one item will be sent.":o+="Sending more than one item as a gift is not currently supported. Only one item will be sent."),o},getFaviconUrl:function(e){return(e=e||this.faviconDomain||null)?"http://www.google.com/s2/favicons?domain="+e:"https://static.loopassets.net/store/shop/images/giftmall.ico"},setFavicon:function(){var e=this.getFaviconUrl();if(e){var t=document.createElement("link");t.type="image/x-icon",t.rel="shortcut icon",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)}},getSupportFaq:function(){if(e.storeAdapter.deferreds.getSupportFaq)return e.storeAdapter.deferreds.getSupportFaq;var r=e.storeAdapter.appUrl+"/internal/content/support-faqs.js";return n.hasSendOptions()&&(r=e.storeAdapter.appUrl+"/internal/content/support-faqs-alt-ways.js"),e.storeAdapter.hasCustomSupportPage&&(r=e.storeAdapter.storeSpecificAppUrl+"/internal/content/support-faqs.js"),n.hasSendOptions()&&e.storeAdapter.hasCustomAltWaysSupportPage&&(r=e.storeAdapter.storeSpecificAppUrl+"/internal/content/support-faqs-alt-ways.js"),e.flow.isEGiftCardFlow()&&(r=e.storeAdapter.appUrl+"/internal/content/support-faqs-egiftcard.js"),e.storeAdapter.deferreds.getSupportFaq=t.getScript(r).then(function(){return e.storeAdapter.supportFaq}).fail(function(){console.log("failed getting stores support faq:",arguments)}),e.storeAdapter.deferreds.getSupportFaq},afterStoreLoaded:function(){e.lang.option("isGiftNow")&&t("body").addClass("is-gift-now")},appOrigin:function(){var t=location.origin;return"development"===e.environment&&(t+="/loop-bee"),t},getActiveTheme:function(){return o.first(this.themes)},getStoreAppVersion:function(){var e=this.storeAppVersion;return e||(e=this.appUrl.split("/").pop()),e},supportsApplePay:function(){return void 0!==this.customParameters.APPLE_PAY_ENABLED},registerForReminders:function(r){var o=this.apiEndpoint()+"/subscribe-to-reminders";if(r.reminderDate){var n=e.Moment(r.reminderDate);r.reminderDate=n.toISOString()}return t.ajax({url:o,type:"post",dataType:"json",contentType:"application/json",data:JSON.stringify(r)})},isStoreMode:function(){return e.utils.parseSearchParams().storeMode||t.cookie(this.getStoreModeCookieName())},getStoreModeCookieName:function(){return this.shortName+"-LoopKiosk"},estimateCartTotalData:function(){},getCriteoConfig:function(){var t=this.customParameters["global.CRITEO_CONFIG"];return e.utils.parseJSON(t)},getEnabledCriteoIds:function(){var e=this.getCriteoConfig();return e?e.filter(function(e){return e.enabled}).map(function(e){return e.id}):[]},getGiftCardConfig:function(){if(this._giftCardConfig)return this._giftCardConfig;var t=this.customParameters["global.GIFT_CARD_CONFIG"];return t?(this._giftCardConfig=e.utils.parseJSON(t),this._giftCardConfig):null},getCancelReasons:function(){var t=e.storeAdapter.cancelReasons;return e.flow.isEGiftCardFlow()&&(t=e.storeAdapter.cancelReasonsVgc),t},parseCustomParameter:function(t){var r=this.customParameters["global."+t];return r?e.utils.parseJSON(r):null},getSurveyConfig:function(){return this.parseCustomParameter("CONFIRMATION_SURVEY")},getMarketingPageConfig:function(){return this.parseCustomParameter("MARKETING_PAGE_CONFIG")}});var a=r(7);a&&(e.storeAdapter.extend(a),e.storeAdapter.customParameters&&"PRODUCT"===e.storeAdapter.customParameters["global.EXCHANGE_MODE"]&&(e.storeAdapter.exchangeForGiftCardMode=!1))}).call(t,r(0),r(2),r(4),r(5))},4:function(e,t,r){e.exports=r(1)(3)},5:function(e,t,r){e.exports=r(1)(2)},58:function(e,t,r){e.exports=r(13)},6:function(e,t,r){(function(t,r){e.exports={ui:{},text:{},init:function(){},extend:function(e,r){return r?t.extend(!0,this,e):t.extend(this,e)},setPlatform:function(e){this.base=t.extend({},this),this.platform=t.extend({},this,e),this.extend(e)},getLoopHome:function(){return this.loopHomeUrl},getSupportUrl:function(){var e="#support";return r.flow&&r.flow.isEGiftCardFlow()&&(e="#egiftcard-support"),this.getLoopHome()+e},shouldSampleEvent:function(e){var t=this.eventSampleRates;return!(t&&void 0!==t[e]&&!r.utils.sample(t[e]))},getLogLevel:function(){var e="info";return this.customParameters&&this.customParameters["global.RTUM_LOG_LEVEL"]&&(e=this.customParameters["global.RTUM_LOG_LEVEL"].toLowerCase()),e},getAboutUrl:function(){return this.appUrl+"/internal/intro.html?configUrl="+encodeURIComponent(this.configUrl)}}}).call(t,r(2),r(0))},7:function(e,t,r){r(0).environment='production',e.exports={
   "storeFrontUrl": "https://www.loopgift.com",
   "appUrl": "https://www.loopgift.com/app/2.13.191-9260-4",
   "configUrl": "https://www.loopassets.net/app/shop/501-1533082207000/config.js",
   "storeSpecificAppUrl": "https://www.loopgift.com/app/store/shop/app/08da0993146451f8773aca0e119dada8",
   "homePageUrl": "https://www.loopgift.com",
   "shortName": "shop",
   "storeName": "Loop",
   "showContactLink": true,
   "storeApiEndpointUrl": "https://www.loopgift.com",
   "loopApiRecipientUrl": "https://www.loopgift.com/store/shop/recipient",
   "loopApiSenderUrl": "https://www.loopgift.com/store/shop/sender",
   "staticUrl": "https://www.loopgift.com/app/2.13.191-9260-4",
   "privacyPolicyUrl": "https://www.loopgift.com/app/2.13.191-9260-4/internal/privacy.html",
   "termsOfServiceUrl": "https://www.loopgift.com/app/store/shop/app/08da0993146451f8773aca0e119dada8/internal/terms-of-use.html",
   "storeContactUsUrl": "",
   "senderContinueShoppingUrl": "https://www.loopgift.com/#products",
   "loopHomeUrl": "https://www.loopgift.com",
   "paymentPageUrl": null,
   "skin":    {
      "additionalCss": ".skin-boxtop {\r\n  background: url(https://static.loopassets.net/store/shop/images/lid_tile.png) !important;\r\n  background-size: cover !important;\r\n}\r\n.box-ribbon-skin {\r\n    fill: #FFFFFF;\r\n}\r\n.gift-box .tissue-paper {\r\n    background: url(https://static.loopassets.net/store/shop/images/loopstore-tissue.png) !important;\r\n  \tbackground-size:cover !important;\r\n}\r\n\r\n.greeting-view .gift-box-container .cover img,\r\n.learn-more-view .gift-box-container .cover img {\r\n\tmax-width: 50%;\r\n}\r\n\r\n#gift-display .greeting .greeting-message{\r\n  margin-bottom: 21px;\r\n}\r\n\r\n.delivery-info .image-container img {\r\n  max-width: 70%;\r\n}\r\n.page-support .powered-by-loop { \r\n  display: none; \r\n}\r\n.review-order #paypal-container .paypal-button-content {\r\n    padding: 4px 7px !important;\r\n}\r\n.review-order #paypal-container .paypal-button-content img {\r\n    width: 63px !important;\r\n}\r\ndiv.promo-logo.paypal {\r\n\tdisplay:none;\r\n}\r\ndiv.promo-logo-mobile.mobile-paypal { \r\n\tdisplay:none; \r\n} ",
      "boxLogoUrl": "https://static.loopassets.net/store/shop/images/loopstore-logo.png",
      "cardLogoUrl": "https://static.loopassets.net/store/shop/images/loopstore-greeting-logo.png",
      "logoUrl": "https://static.loopassets.net/store/shop/images/loopstore-logo.png",
      "mainActionCss": "background: #CB2128!important;  color: #FFF;  border: 1px solid #CC0000;  border-radius: 2px;  font-family: Helvetica,Arial;  font-weight: bold;  font-size:12px;",
      "pageLogoUrl": "https://static.loopassets.net/store/shop/images/loopstore-logo.png"
   },
   "themes":    [
            {
         "id": 147,
         "version": 3,
         "displayName": "Shop - Standard",
         "thumbnailUrl": "https://static.loopassets.net/store/shop/themes/standard/thumbnail.png",
         "accessibilityLabel": "Shop - Standard design",
         "content":          {
            "box": {"images":             {
               "3d": "https://static.loopassets.net/store/shop/themes/standard/3d-box.gif",
               "cover": "https://static.loopassets.net/store/shop/themes/standard/cover.jpg"
            }},
            "preroll":             {
               "keep": true,
               "video":                {
                  "desktop":                   {
                     "poster": "https://video.loopassets.net/v/store/shop/standard/backdrop-720p.jpg",
                     "source": {"mp4": "https://video.loopassets.net/v/store/shop/standard/backdrop-720p.mp4"}
                  },
                  "duration": 1200,
                  "loop": true,
                  "mobile":                   {
                     "poster": "https://video.loopassets.net/v/store/shop/standard/backdrop-480p.jpg",
                     "source": {"mp4": "https://video.loopassets.net/v/store/shop/standard/backdrop-480p.mp4"}
                  }
               }
            }
         }
      },
            {
         "id": 148,
         "version": 3,
         "displayName": "Shop - Happy Birthday",
         "thumbnailUrl": "https://static.loopassets.net/store/saksfifthavenue/themes/happy-birthday/thumb-black.jpg",
         "accessibilityLabel": "Shop - Happy Birthday design",
         "content":          {
            "box": {"images":             {
               "3d": "https://static.loopassets.net/store/shop/themes/standard/3d-box.gif",
               "cover": "https://static.loopassets.net/store/shop/themes/standard/cover.jpg"
            }},
            "preroll":             {
               "keep": true,
               "text":                {
                  "data": "HAPPY BIRTHDAY",
                  "src": "https://static.loopassets.net/store/shop/themes/happy-birthday/text.png"
               },
               "video":                {
                  "desktop": {"source": {"mp4": "https://video.loopassets.net/v/store/shop/happy-birthday/gray-confetti-720p.mp4"}},
                  "duration": 3000,
                  "loop": true,
                  "mobile": {"source": {"mp4": "https://video.loopassets.net/v/store/shop/happy-birthday/gray-confetti-480p.mp4"}},
                  "poster": "https://video.loopassets.net/v/store/shop/happy-birthday/gray-confetti-720p.jpg"
               }
            }
         }
      }
   ],
   "giftMallConfig": {},
   "learnMoreVideoUrl": "",
   "customParameters":    {
      "global.COUPONS": "true",
      "global.RTUM_STREAM": "true",
      "global.MINIMUM_ALLOWED_GIFT_AMOUNT": null,
      "BRAINTREE_BILLING_INFO": "ZIP_ONLY",
      "global.PRODUCT_ID_EXCLUSIONS": null,
      "BRAINTREE_SCRIPT_URL": "https://js.braintreegateway.com/v2/braintree.js",
      "global.MARKETING_SUBSCRIPTION_MESSAGE_OVERRIDE": null,
      "global.CONFIRMATION_SURVEY": null,
      "global.MAXIMUM_ALLOWED_GIFT_AMOUNT": null,
      "global.EXPERIMENTATION": null,
      "global.RTUM_LOG_LEVEL": "INFO",
      "FORTER_SITE_ID": "1ba115a49b36",
      "global.COVER_ADDITIONAL_PAYMENT": "true",
      "global.GIFT_CARD_CONFIG": "{\"barcodeFormat\":\"NONE\",\"denominations\":{\"maximum\":null,\"type\":\"variable\",\"minimum\":null},\"cardNumberLabel\":\"Card number\",\"cardSecurityCodeLabel\":\"Security code\"}",
      "global.MIXPANEL": "true",
      "global.MARKETING_SUBSCRIPTION_MODE": "HIDDEN_OPTED_IN",
      "global.FLOW_CONFIG": "{\r\n    \"send\": {\r\n        \"desktop\": \"THEMES_FULLPAGE\",\r\n        \"tablet\": \"THEMES_FULLPAGE\",\r\n        \"mobile\": \"THEMES_FULLPAGE\"\r\n    },\r\n    \"accept\": {\r\n        \"desktop\": \"THEMES_FULLPAGE\",\r\n        \"tablet\": \"THEMES_FULLPAGE\",\r\n        \"mobile\": \"THEMES_FULLPAGE\"\r\n    }\r\n}",
      "global.EXCHANGE_MODE": "GIFTCARD",
      "global.MARKETING_PAGE_CONFIG": null,
      "global.CRITEO_CONFIG": null
   },
   "shippingMethodBlacklist": null,
   "storeHostsPaymentUI": false,
   "environment": "production",
   "monitoringUrl": "https://rtum-gateway.loopassets.net/prod",
   "storeProxyDirectPost": false,
   "supportsBraintreePaypal": true,
   "giftBoxImageUrl": "https://static.loopassets.net/store/shop/images/loopstore-3D-box-texture.png",
   "giftCardImageUrl": "https://www.loopgift.com/app/2.13.191-9260-4/shared/assets/img/gift-card.png",
   "shoppingBagImageUrl": "https://www.loopgift.com/app/2.13.191-9260-4/shared/assets/img/shopping-bag.png",
   "genericErrorMessage": "Oops... We're experiencing a technical problem.\n\nWe're hoping it's just a temporary glitch, please press \"OK\" to try again. If this issue persists, please contact Customer Support.",
   "hasRiskified": true,
   "hasForter": true,
   "hasPriceGuarantee": false,
   "giftMallApiUrl": "https://www.loopgift.com/store/shop/giftmall",
   "validateUrl": "https://www.loopgift.com/validate",
   "useExchangeNetworkFlow": true,
   "nraid": "1753123",
   "campaigns": [],
   "cancelReasons":    [
            {
         "reason": "Selected the wrong gift",
         "message": "Gifts sent with GiftNow can be easily exchanged for something similar, or anything else they like. The gift credit does not expire."
      },
            {
         "reason": "Recipient does not want the gift",
         "message": "Gifts sent with GiftNow can be easily exchanged for something similar, or anything else they like. The gift credit does not expire."
      },
            {
         "reason": "Gift would not arrive on time",
         "message": "Gifts sent with GiftNow are delivered instantly via email. Your recipient can easily accept/exchange the gift online, before it ships."
      },
            {
         "reason": "Shipping cost too high",
         "message": "The tax/shipping cost is estimated to cover shipping to the address your recipient provides. We donâ€™t keep any of the money you paid for your recipientâ€™s gift, and you wonâ€™t be charged any amount above the original gift purchase."
      },
            {
         "reason": "Gift price too high",
         "message": "The price of the gift includes tax/shipping coverage to the address your recipient provides. We donâ€™t keep any of the money you paid for your recipientâ€™s gift, and you wonâ€™t be charged any amount above the original gift purchase."
      },
            {
         "reason": "Gift is no longer available",
         "message": "Gifts sent with GiftNow can be easily exchanged for something similar, or anything else they like. The gift credit does not expire."
      },
            {
         "reason": "Price of the gift has decreased",
         "message": "Depending on the recipientâ€™s gift selection, any price difference will be given to the recipient or refunded back to you. We donâ€™t keep the money you paid for your recipientâ€™s gift, and you wonâ€™t be charged any amount above the original gift purchase."
      },
            {
         "reason": "Recipient didnâ€™t receive the gift notification",
         "message": "If your recipient did not receive the gift email, we suggest they check their Inbox or Spam folder. You can also <a href=\"#getMailToLink#\">contact us<\/a>, and we are happy to resend the gift email."
      },
            {
         "reason": "Gift has not been shipped/delivered",
         "message": "The gift will be shipped to the address provided by your recipient after they accept/exchange the gift online."
      },
            {
         "reason": "Other",
         "message": "Weâ€™re sorry you would like to cancel your GiftNow order. Please <a href=\"#getMailToLink#\">share with us<\/a> any feedback you may have."
      }
   ],
   "cancelReasonsVgc":    [
            {
         "reason": "Recipient does not want the gift",
         "message": ""
      },
            {
         "reason": "Gift would not arrive on time",
         "message": ""
      },
            {
         "reason": "Recipient didnâ€™t receive the gift notification",
         "message": "If your recipient did not receive the gift email, we suggest they check their Inbox or Spam folder. You can also <a href=\"#getMailToLink#\">contact us<\/a>, and we are happy to resend the gift email."
      },
            {
         "reason": "E-gift card has not been sent to the recipient",
         "message": "If your recipient did not receive the e&#8209;gift card, we suggest they check their Inbox or Spam folder. You can also <a href=\"#getMailToLink#\">contact us<\/a>, and we are happy to resend the e&#8209;gift card."
      },
            {
         "reason": "Other",
         "message": "Weâ€™re sorry you would like to cancel your e&#8209;gift card order. Please <a href=\"#getMailToLink#\">share with us<\/a> any feedback you may have."
      }
   ],
   "messages":    {
      "accept.availabilityMessage": "With GiftNow, you can accept or exchange your gift, before it ships to you. This extra flexibility to choose your specific gift or its options, like size and color, means that the final availability is determined when you redeem your gift.",
      "accept.faq.howDoesItWorkAnswer": "Your gift sender used GiftNow, powered by Loop, to send you this gift. With GiftNow, you get to select your size/color & enter your shipping address to have the gift delivered directly to you! You can also choose to exchange the item before it ships.",
      "accept.faq.howDoesItWorkAnswer.NON_EXCHANGEABLE": "Your gift sender used GiftNow, powered by Loop, to send you this gift. With GiftNow, you get to select your size/color & enter your shipping address to have the gift delivered directly to you!",
      "accept.faq.howDoISendAnswer": "Simply visit our site & look for the \"GiftNow\" button. GiftNow is a flexible way to send items from our site as a thoughtful gift.",
      "accept.faq.whenWillGiftShipAnswer": "Your gift order will be processed after you accept the gift. You will receive a shipping confirmation email when your order is on its way. All GiftNow orders will ship via Standard Shipping, please allow 3-5 business days for delivery.",
      "accept.fuzzy.decisionHeader": "<%- data.senderName %> sent you a gift using GiftNow",
      "accept.fuzzy.fuzzyDescription": "The specific item <%- data.senderName %> thought you might like is unavailable at this time.",
      "accept.fuzzy.initialMessage": "<%- data.senderName %> selected this item for you, but with GiftNow, you choose exactly what you want",
      "accept.howItWorks": "GiftNow is a new and thoughtful way to give gifts. GiftNow allows gift givers to buy and send a gift online and for the recipient to specify their preferences of size/color, shipping address, etc... Alternatively, gift recipients can exchange the gift, before it ships.<br /> <br />This extra flexibility for the gift recipient means that the final availability is determined when the recipient makes their decision and redeems the gift.<br /><br />In rare cases when the original gift suggested is no longer available at the time of redemption, we give the recipient the option to wait for the item to become available or get gift credit for the gift (including any shipping/tax costs covered by the sender), which they can apply towards a similar product or anything else they might like.",
      "accept.whatsAnEgift": "How does GiftNow work?",
      "common.giftAction": "<%= data.STORE_NAME %> GiftNow",
      "common.giftVerb": "GiftNow",
      "common.loopBrandAction": "Loop GiftNowâ„¢",
      "common.loopBrandAction.VGC": "Loop E-Gift Cards",
      "common.monogramWarning": "The monogram option is not yet available when sending gifts with GiftNow. Items in your order will be sent without the option to add a monogram.",
      "common.pageTitle": "GiftNow - the new and easy way to send gifts online",
      "common.panel.howGiftsAreSentHeader": "How gifts are sent with GiftNow",
      "common.panel.whenIsGiftSentHeader": "When is the online gift sent with GiftNow?",
      "common.personalizationWarning": "The personalization option is not yet available when sending gifts with GiftNow. Items in your order will be sent without the option to add personalization.",
      "common.poweredBy": "GiftNow powered by Loop",
      "common.replenishWarning": "The replenishment service is not yet available when sending gifts with GiftNow. Items in your order will be delivered one time only.",
      "common.supportCenterName": "GiftNow support center",
      "common.supportCenterName.VGC": "e-gift card support center",
      "contact.emailSubject": "Feedback/Support for <%- data.STORE_NAME %> GiftNow",
      "exitSurvey.reason.dontUnderstand": "I don't understand how GiftNow works",
      "exitSurvey.reason.notInterested": "I understand how GiftNow works, but not interested",
      "faq.acceptErrorAnswer": "Please contact the GiftNow Experience team at <%= data.supportEmail %>, and provide a description or screenshots of the error.",
      "faq.acceptingHeader": "Accepting & Exchanging Gifts",
      "faq.answer.additionalFees.VGC": "There are no additional fees associated with the e-gift card. You will only be charged the value of the e-gift card, and we will not impose any other fees.",
      "faq.answer.availableDevices.VGC": "Yes, you can send e-gift cards on desktop, tablet, and mobile devices.",
      "faq.answer.cancelAfterNotification": "You can cancel your order as long as the recipient has not redeemed the gift. If you'd like to cancel, please contact <%= data.CUSTOMER_SUPPORT %>.",
      "faq.answer.canIExchangeEGiftCard": "Sorry, but the e-gift card can only be used to purchase merchandise and cannot be exchanged for cash.",
      "faq.answer.canISendOnDate.VGC": "Definitely! You can choose the date that the e-gift card email is sent to the recipient. While filling in the recipient's personal info, choose a date up to 12 months in the future.",
      "faq.answer.canISendOnDatePrefund": "If you choose to send your gift by email, you can choose the date that the gift email is sent to the recipient. If you choose to send through text message, messenger or to print and hand deliver, you will not be able to schedule the date that the gift notification is sent from GiftNow. However, you will get a link/printout shortly after you purchase the gift and will be able to send or give it to your recipient anytime you like.",
      "faq.answer.canIUseCouponCode": "Discounts and coupon codes cannot be used at this time.",
      "faq.answer.chargesIDontUnderstand": "We will investigate this for you. Please contact <%= data.CONTACT_US %> with your e-gift card order number.",
      "faq.answer.deletedCreditBalanceResend": "We are happy to resend the credit balance email. Please contact the GiftNow Experience team at <%= data.supportEmail %>.",
      "faq.answer.deletedEmail.VGC": "If you deleted your e-gift card email, please double-check your Trash folder to see if it's still there. If you cannot find your e-gift card email, please contact <%= data.CONTACT_US %>.",
      "faq.answer.deletedGiftCreditResend": "We are happy to resend the gift credit email. Please contact the GiftNow Experience team at <%= data.supportEmail %>.",
      "faq.answer.doesEGiftCardExpire": "No. The gift credit in the e-gift card does not expire.",
      "faq.answer.dontLoseEmail.VGC": "Our emails are designed with industry-standard best practices for successful email delivery. We also test the deliverability of our emails on a regular basis, across various email service providers and applications. If an e-gift card recipient's email bounces or is blocked by their email server, we contact the sender for an alternate email address. If a recipient misses the gift notification, we will send gift reminders.",
      "faq.answer.eGiftCardRedeemLocation": "The e-gift card can be redeemed either online or in stores.",
      "faq.answer.eGiftCardRedeemLocation.ONLINE": "The e-gift card can be redeemed online only.",
      "faq.answer.eGiftCardRedeemLocation.STORE": "The e-gift card can be redeemed in stores only.",
      "faq.answer.exchangePriceDifference": "If your order total is less expensive than the gift value, the balance will remain as gift credit, which you can use toward a future purchase. If your order total is more expensive, you will have the option to cover the difference or choose an alternate gift. The gift sender will not know about your specific gift choice.",
      "faq.answer.exchangePriceDifferencePrefund": "If your recipient's order total is less expensive than the amount you originally paid, the difference is refunded back to your original form of payment. If their order total is more expensive, they receive your gift as a suggestion, along with a gift credit for the gift. They can use it to choose a similar item, or anything else they like.<br/><br/>Gift credit is only available in fixed denominations, so the recipient will receive credit in the closest amount possible to the full gift purchase price. The remainder will be refunded to your original form of payment.",
      "faq.answer.exemptions.VGC": "E-gift cards cannot be used to purchase other gift cards.",
      "faq.answer.howDoesRecipientReceive.VGC": "If you choose to send your e-gift card by email, your recipient receives an email notifying them about your gift.  If you choose to send by text message, messenger or link, youâ€™ll get a gift link that you will send directly to your recipient.  If you choose to print and hand-deliver, youâ€™ll print out a card you can give to your recipient. Your recipient will follow the instructions on the card to open their gift online and get their e-gift card.",
      "faq.answer.howDoICancel.VGC": "You can cancel your order as long as the recipient has not opened your gift. If you'd like to cancel, please contact <%= data.CONTACT_US %>.",
      "faq.answer.howDoIPurchase.VGC": "To buy an e-gift card, visit our <%= data.EGIFT_PAGE %>. You will choose an amount, select a design, write a gift message and then pay for the e-gift card.",
      "faq.answer.howDoIRedeem.VGC": "To accept a gift, simply click on the link in the e-gift card email you received. Apply the code from the e-gift card in any online or physical store to redeem it.",
      "faq.answer.howIsGiftReceived": "Your recipient receives an email notifying them about your gift. They follow a link from the email to our website, where a gift box opens to reveal their gift. They can then accept the gift (adjust size/color) or easily exchange it online, all before it ships to the address of their choice.",
      "faq.answer.internationalPurchase.VGC": "<%- data.STORE_NAME %> e-gift cards can only be purchased and used in the United States at this time.",
      "faq.answer.internationalPurchaseAccept.VGC": "<%- data.STORE_NAME %> e-gift cards can only be purchased and used in the United States at this time.",
      "faq.answer.internationalPurchaseSend.VGC": "<%- data.STORE_NAME %> e-gift cards can only be purchased and used in the United States at this time.",
      "faq.answer.isItemSavedPrefund": "The price and availability of the originally selected gift is subject to change. If the item is not available at the time you accept the gift, you'll get gift credit for the gift. You can use it to choose a similar item, or anything else you like.<br/><br/>Gift credit is only available in fixed denominations, so you will receive credit in the closest amount possible to the full gift purchase price. The remainder will be refunded to the sender's original form of payment.",
      "faq.answer.isOrderSecure": "Your financial and personal information entered in the e-gift card checkout is transmitted securely. The order process is also fully PCI compliant, and all personally identifiable information is encrypted on our servers.",
      "faq.answer.itemUnavailableNoPriceGuarantee": "If a certain size or color you suggested is unavailable, your recipient can still choose from other available options and accept your gift. They can also exchange the gift, before it ships.<br/><br/>If all of the gift's options are not available at the time the recipient redeems the gift, we show your chosen gift as a suggestion & provide them with gift credit for the full amount you paid, including the shipping & tax. The recipient can use the gift credit to choose a similar item, or something else they like.<br/><br/>Please note that the price & availability of the originally selected gift is subject to change.",
      "faq.answer.itemUnavailablePrefund": "If a certain size or color you suggested is unavailable, your recipient can still choose from other available options and accept your gift. They can also exchange the gift, before it ships.<\/br><\/br>If all of the gift's options are not available at the time the recipient redeems the gift, we show your chosen gift as a suggestion & provide them with gift credit. The recipient can use the gift credit to choose a similar item, or something else they like. Gift credit is only available in fixed denominations, so the recipient will receive credit in the closest amount possible to the full gift purchase price. The remainder will be refunded to your original form of payment.<br/><br/>Please note that the price & availability of the originally selected gift is subject to change.",
      "faq.answer.orderNotProcessed.VGC": "This may happen if we cannot verify some of the billing information for the order. We suggest placing the e-gift card order again with a different credit card or updated billing information.",
      "faq.answer.orderNotProcessedCharge": "An authorization hold was placed on your card when you placed the gift order. Depending on your bank or credit card company, you should see the hold removed from your payment account within 2-4 business days.",
      "faq.answer.preventAccess": "Every e-gift card order is protected by a secret sender and recipient key. The keys are unique and encrypted on our server. The only way to access your e-gift card would be from the link in e-gift card emails. If you suspect that someone has unauthorized access to the e-gift card emails, please contact <%= data.CONTACT_US %> immediately. If the e-gift card has not been redeemed, we can update the secret keys and resend the e-gift card email to a secure email address.",
      "faq.answer.priceIncreaseNoPriceGuarantee": "We believe the recipient should receive a gift without having to add money. Therefore, if the price of the gift increases by the time the recipient accepts it, we show them your chosen gift as a suggestion & provide them with gift credit for the full amount. They can use the credit to choose a similar item, or something else they like.<br/><br/>Please note that the price & availability of the originally selected gift is subject to change. The price is determined at the time the recipient redeems their gift.",
      "faq.answer.priceIncreasePrefund": "The recipient can still accept their gift at no extra charge, even if the price is higher at the time they accept it.",
      "faq.answer.recipientDidntReceiveEmail": "If your recipient did not receive their gift email, you can ask them to check their Inbox or Spam folder. If that doesn't work, we'll be happy to assist in resending the gift email. Please contact <%= data.CUSTOMER_SUPPORT %>.",
      "faq.answer.recipientDidntReceiveEmail.VGC": "If your recipient did not receive their e-gift card email, you can ask them to check their Inbox or Spam folder. If that doesn't work, we'll be happy to assist in resending the e-gift card email. Please contact <%= data.CONTACT_US %>.",
      "faq.answer.redeemDevices.VGC": "Yes, you can redeem e-gift cards on desktop, tablet, and mobile devices.",
      "faq.answer.redeemError.VGC": "Please contact <%= data.CONTACT_US %> and provide a description or screenshots of the error.",
      "faq.answer.redeemInStore.VGC": "Yes, you can redeem your e-gift card in-store. Just present your e-gift card numbers at checkout.",
      "faq.answer.remainingCredit.VGC": "If you have a remaining credit after using your e-gift card, you can apply the remaining credit to another order.",
      "faq.answer.sendMoreThanOne": "Currently, you can only send one item as a gift at a time.",
      "faq.answer.shippingTaxDifferencePrefund": "If your recipient's order total is less expensive than the amount you originally paid, the difference is refunded back to your original form of payment. If their order total is more expensive, they receive your gift as a suggestion, along with a gift credit for the gift. They can use it to choose a similar item, or anything else they like.<br/><br/>Gift credit is only available in fixed denominations, so the recipient will receive credit in the closest amount possible to the full gift purchase price. The remainder will be refunded to your original form of payment.",
      "faq.answer.whenDoesRecipientReceive.VGC": "If you choose to send your e-gift card by email, your recipient receives the gift email shortly after your purchase or on the future date you chose - we'll let you know once it's sent.  If you chose to send your gift by text message, messenger, link or print and hand-deliver, your recipient receives their gift after you deliver it to them.",
      "faq.answer.whenWillGiftShip": "Once your gift is accepted, we will ship the selected items. The time it takes to ship the items may vary. Please refer to our shipping & delivery policy for more information about ship times.  Please note: Currently, items sent using GiftNow are shipped via Standard shipping only.",
      "faq.answer.whoIsLoop": "We have partnered with <%= data.LOOP_LINK %> to power our GiftNow service.",
      "faq.answer.whoIsLoop.VGC": "We have partnered with Loop Commerce to power our e-gift card service.",
      "faq.answer.whyWasOrderNotProcessed": "This may happen if our GiftNow Experience Team cannot verify some of the billing information for the order. We suggest placing the gift order again with a different credit card or updated billing information.",
      "faq.answer.wrongDate.VGC": "Yes, you can update the scheduled date on your gift's status page. Click the \"View and Manage\" button in your confirmation email to go to the gift status page, where you can change the date your gift notification will be sent.",
      "faq.answer.wrongName.VGC": "Yes, we are happy to edit the name. Please contact <%= data.CONTACT_US %> with the correct spelling.",
      "faq.benefitsTitle": "What are some of the benefits of using GiftNow to send gifts?",
      "faq.cancelRefundAnswer": "If the gift has not been accepted or exchanged, we can cancel your order and process a refund. If the gift has already been accepted or exchanged, we cannot process a refund. Please contact the GiftNow Experience team at <%= data.supportEmail %> with your order number.",
      "faq.checkStatusAnswer": "We will send you email updates as the status of your gift changes (when your gift is sent, when your recipient opens your gift, or if your gift order couldnâ€™t be processed, etc.).  You may also check the status of your gift by clicking the \"View or Manage Order\" button in your order confirmation emails.",
      "faq.deletedGiftResendAnswer": "We are happy to resend the gift email. Please contact the GiftNow Experience team at <%= data.supportEmail %>.",
      "faq.dontSeeGiftAnswer": "Check that javascript is enabled in your browser settings or open the link in another browser. If that doesnâ€™t work, we are happy to assist. Please contact the GiftNow Experience team at <%= data.supportEmail %>.",
      "faq.expeditedShippingAnswer": "At this time, gifts are shipped via Standard Shipping. Please allow 3-5 business days for delivery after your order has been processed.",
      "faq.header.statusAndOrderChanges": "Gift status & order changes",
      "faq.mainHeader": "<%= data.storeName %> GiftNow Support Center",
      "faq.mainHeader.VGC": "<%= data.STORE_NAME %> E-gift Card Support Center",
      "faq.notReceivedResendAnswer": "If your recipient did not receive the gift email, we suggest they check their Inbox or Spam folder. We are also happy to resend the gift email. Please contact the GiftNow Experience team at <%- data.supportEmail %>.",
      "faq.preventAccessAnswer": "Every gift order is protected by a secret sender and recipient key. The keys are unique and encrypted on our server. The only way to access your gift would be from the link in gift emails. If you suspect that someone has unauthorized access to the gift emails, please contact our GiftNow Experience team at <%= data.supportEmail %> immediately. If the gift has not been redeemed, we can update the secret keys and resend the gift email to a secure email address.",
      "faq.question.additionalFees.VGC": "Are there any additional fees associated with the e-gift card?",
      "faq.question.availableDevices.VGC": "Can I send e-gift cards on desktop, tablet, or mobile?",
      "faq.question.cancelAfterNotification": "Can I cancel my order after the gift notification has been sent or given to my recipient?",
      "faq.question.canIExchangeEGiftCard": "Can I exchange my e-gift card for cash?",
      "faq.question.canISendOnDate": "Can I schedule my gift to be sent on a specific date?",
      "faq.question.canISendOnDate.VGC": "Can I schedule my e-gift card to be sent on a specific date?",
      "faq.question.canIUseCouponCode": "Can I use a discount or coupon code when I send a gift with GiftNow?",
      "faq.question.chargesIDontUnderstand": "There are charges for the order that I don't understand. What can I do?",
      "faq.question.deletedEmail.VGC": "I accidentally deleted my e-gift card email. Is there a way to use my e-gift card without the email?",
      "faq.question.doesEGiftCardExpire": "Does my e-gift card expire?",
      "faq.question.dontLoseEmail.VGC": "How can I be sure that e-gift card emails don't get lost?",
      "faq.question.eGiftCardRedeemLocation": "Where can the e-gift card be redeemed?",
      "faq.question.exchangePriceDifference": "What happens if the items I chose after exchanging my gift are more or less expensive than the original gift?",
      "faq.question.exemptions.VGC": "Are there any exemptions for the e-gift card?",
      "faq.question.howDoesRecipientReceive.VGC": "How does the recipient receive an e-gift card?",
      "faq.question.howDoICancel.VGC": "How do I cancel the purchase of a e-gift card?",
      "faq.question.howDoIPurchase.VGC": "How do I purchase e-gift cards?",
      "faq.question.howDoIRedeem.VGC": "How do I redeem my e-gift card?",
      "faq.question.internationalPurchase.VGC": "Can e-gift cards be purchased or redeemed outside the United States?",
      "faq.question.internationalPurchaseAccept.VGC": "Can e-gift cards be redeemed if I live outside the United States?",
      "faq.question.internationalPurchaseSend.VGC": "Can e-gift cards be purchased if I live outside the United States?",
      "faq.question.isItemSaved": "Is the gift item saved for me until I decide to accept it?",
      "faq.question.isOrderSecure": "Is the order information secure?",
      "faq.question.itemOnSale": "What happens if the item goes on sale?",
      "faq.question.itemUnavailable": "What happens if the item I selected becomes unavailable?",
      "faq.question.orderNotProcessed.VGC": "Why was the e-gift card order not processed? What can I do?",
      "faq.question.orderNotProcessedCharge": "The order was not processed. Why do I still see a charge?",
      "faq.question.preventAccess": "How can I prevent unauthorized access to the e-gift card?",
      "faq.question.priceIncrease": "What happens if the price of the gift increases?",
      "faq.question.recipientDidntReceiveEmail.VGC": "My recipient didn't receive the e-gift card email. Can I resend it?",
      "faq.question.redeemDevices.VGC": "Can I redeem e-gift cards on desktop, tablet, or mobile?",
      "faq.question.redeemError.VGC": "When I try to redeem the e-gift card, there is an error. What can I do?",
      "faq.question.redeemInStore.VGC": "Can I use the e-gift card in-store?",
      "faq.question.remainingCredit.VGC": "What if I have remaining credit after using my e-gift card?",
      "faq.question.shippingTaxDifference": "What happens if my recipient's actual shipping and tax ends up being more or less expensive?",
      "faq.question.whenDoesRecipientReceive.VGC": "When does the recipient receive the e-gift card?",
      "faq.question.whoIsLoop": "Who is Loop?",
      "faq.question.wrongDate.VGC": "I scheduled the e-gift card for the wrong date. Can it be updated?",
      "faq.question.wrongEmail": "I accidentally entered the wrong email address for the recipient. How can I update it?",
      "faq.question.wrongName.VGC": "I made a mistake in the recipient's name. Can it be updated?",
      "faq.refundTimingAnswer": "Refunds are processed within 24-48 hours. Depending on your bank or credit card company, you should see the refund credited back to your payment account within 4-6 business days. If you have additional questions about a refund, please contact the GiftNow Experience team at <%= data.supportEmail %>.",
      "faq.secureInfoAnswer": "Your financial and personal information entered in the GiftNow checkout is transmitted securely. The order process is also fully PCI compliant, and all personally identifiable information is encrypted on our servers.",
      "faq.sendingHeader": "Sending a gift",
      "faq.unknownChargesAnswer": "We will investigate this for you. Please contact the GiftNow Experience team at <%= data.supportEmail %> with your gift order number.",
      "faq.whatIsItAnswer": "GiftNow is the new way to send gifts! Our products can now be given as personal gifts via email. Gift recipients receive their gift online and can easily adjust its size/color or exchange it for something else before it ships. We have partnered with Loop Commerce to provide this exciting new service",
      "faq.whatIsItHeader": "What's GiftNow?",
      "faq.whenDoesRecipientReceiveAnswer": "The recipient usually receives the gift notification within a few hours, or on the future date you selected.",
      "faq.wrongDateUpdateAnswer": "Yes, if the gift has not been sent, we are happy to edit the date. Please contact the GiftNow Experience team at <%= data.supportEmail %> with an alternate scheduled date.",
      "faq.wrongEmailUpdateAnswer": "Yes, we are happy to edit the email address. Please contact the GiftNow Experience team at <%= data.supportEmail %> with an alternate email address.",
      "faq.wrongNameUpdateAnswer": "Yes, we are happy to edit the name. Please contact the GiftNow Experience team at <%= data.supportEmail %> with the correct spelling.",
      "home.123Header": "GiftNow is as easy as 1 - 2 - 3!",
      "home.faqHeader": "GiftNow FAQ",
      "home.heroHeader": "GiftNow<span class=\"tm\">&reg;<\/span> is the new &amp; easy way to send gifts online",
      "home.productListHeader": "Send any item on our site via GiftNow. Here are a few ideas.",
      "home.videoHeader": "See how GiftNow works",
      "index.pageTitle.VGC": "<%= data.STORE_NAME %> E-gift Card Support Center",
      "loop.general.eGiftCardLabel": "e-gift card",
      "loop.general.giftCreditLabel": "gift card",
      "nps.feedbackAlreadySent": "Thank you, we have already received your feedback.<br/><br/>If you need help, please visit our <%= data.supportLink %>.",
      "nps.pageTitle": "<%= data.storeName %> GiftNow",
      "send.confirm.questionsAboutOrder": "For questions about your order visit the <%= data.supportLink %>.",
      "send.faq.howIsGiftRecievedTitle": "How is the gift received with GiftNow?",
      "send.firstScreenChooseExchange": "They get to choose their size &amp; color, or instantly exchange for their perfect gift &ndash; before it ships!",
      "send.pageTitle": "<%= data.STORE_NAME %> GiftNow Checkout",
      "send.pageTitle.VGC": "<%= data.STORE_NAME %> E-gift Card Checkout",
      "send.previewLink": "Preview your gift",
      "statusTracker.cancelSuccess": "Your cancellation request is being processed. This may take up to 48hrs, and weâ€™ll email you when the GiftNow order is canceled.",
      "statusTracker.cancelSuccess.VGC": "Your cancellation request is being processed. This may take up to 48hrs, and weâ€™ll email you when the e-gift card order is canceled.",
      "statusTracker.cancelText": "Weâ€™re sorry you canceled the GiftNow order. We will process a credit refund back to the payment account.<br/><br/>Refunds are processed within 24-48 hours, but depending on your bank or credit card company, you should see the refund in your payment account within 4-6 business days.",
      "statusTracker.cancelText.VGC": "Weâ€™re sorry you canceled the e-gift card order. We will process a credit refund back to the payment account.<br/><br/>Refunds are processed within 24-48 hours, but depending on your bank or credit card company, you should see the refund in your payment account within 4-6 business days.",
      "statusTracker.deliveryDateChangeInstructions": "Please provide a new date to send your GiftNow notification",
      "statusTracker.deliveryDateChangeInstructions.VGC": "Please provide a new date to send your gift notification.",
      "statusTracker.deliveryDateChangeSuccess": "You have successfully updated the scheduled date for your GiftNow notification. We will send the GiftNow notification on the date below.",
      "statusTracker.deliveryDateChangeSuccess.VGC": "You have successfully updated the scheduled date for your gift notification. We will send the gift notification on the date below.",
      "statusTracker.emailChangeScheduledSuccess": "You have successfully updated your recipientâ€™s email address. We will send the GiftNow notification to the email address below on the scheduled date.",
      "statusTracker.emailChangeScheduledSuccess.VGC": "You have successfully updated your recipient's email address. We will send the gift notification to the email address below on the scheduled date.",
      "statusTracker.emailChangeSuccess": "You have successfully updated your recipient's email address. We will send the GiftNow notification to the email address below.",
      "statusTracker.emailChangeSuccess.VGC": "You have successfully updated your recipient's email address. We will send the gift notification to the email address below.",
      "statusTracker.giftCreated": "GiftNow order created",
      "statusTracker.giftCreated.VGC": "E-gift card order created",
      "statusTracker.giftOpened": "GiftNow gift opened",
      "statusTracker.giftOpened.VGC": "Gift opened",
      "statusTracker.giftSent": "GiftNow notification sent",
      "statusTracker.giftSent.VGC": "Gift notification sent",
      "statusTracker.openedDetails": "Your recipient opened the gift. They'll now accept or exchange it online, and provide their shipping address. As a courtesy to the gift recipient, we don't disclose their decision.",
      "statusTracker.openedDetails.VGC": "Your recipient opened the gift. They'll now use the e-gift card to get something from our store.",
      "statusTracker.pageTitle": "<%= data.storeName %> GiftNow order status",
      "statusTracker.pageTitle.VGC": "<%= data.storeName %> e-gift card order status",
      "statusTracker.pendingDelivery": "Your gift notification will be sent on the scheduled date",
      "statusTracker.pendingState": "Your GiftNow order is processing. This usually takes a few hours, and we'll update you when the gift notification is sent to your recipient.",
      "statusTracker.pendingState.VGC": "Your e-gift card order is processing. This usually takes a few hours, and we'll update you when the gift notification is sent to your recipient.",
      "statusTracker.pendingStateLink.VGC": "Your e-gift card order is processing. This usually takes a few hours, and we'll update you when the gift link is ready for you to send to your recipient.",
      "statusTracker.pendingStatePrint.VGC": "Your e-gift card order is processing. This usually takes a few hours, and we'll update you when the gift is ready for you to print and hand deliver to your recipient.",
      "statusTracker.repurchase": "You could try to purchase the gift again with a different payment method or billing information.",
      "statusTracker.resendEmailSuccess": "The GiftNow notification has been resent to your recipient.",
      "accept.fuzzy.decisionHeader.GIFTMALL": "Your e-gift from <%- data.senderName %>",
      "accept.fuzzy.fuzzyDescription.GIFTMALL": "This exact gift suggestion is unavailable at this time. With e-gifting, you can always choose a similar item or something else you like.",
      "accept.fuzzy.whatsAnEgift": "What's GiftNow?",
      "accept.fuzzy.whatsAnEgift.GIFTMALL": "What's GiftNow?",
      "accept.howItWorks.GiftMallOrMessenger": "GiftNow is a new and thoughtful way to give gifts. GiftNow allows gift givers to buy and send a gift online and for the recipient to specify their preferences of size/color, shipping address, etc... Alternatively, gift recipients can exchange the gift, before it ships.<br /> <br />This extra flexibility for the gift recipient means that the final availability is determined when the recipient makes their decision and redeems the gift.<br /> <br />In rare cases when the original gift suggested is no longer available at the time of redemption, we give the recipient the option to wait for the item to become available or get gift credit from one of the many popular stores and brands in our network, which they can apply towards a similar product or anything else they might like.",
      "faq.answer.canSelectMultipleGifts": "Yes you can! To select more than one gift, select the exchange option. You'll get gift credit that you can use toward any number of products.",
      "faq.answer.doesSenderKnowIfExchange": "No - whether you choose to keep the original gift or to exchange it for something else - in both cases, the sender is only notified that you've accepted the gift.",
      "faq.answer.exchangeForCash": "Sorry, but gift credit can only be used to purchase merchandise and cannot be exchanged for cash.",
      "faq.answer.howDoesExchangingWork": "When you receive your gift, you can easily exchange it for something else...before it ships! To request an exchange, open your gift online and select the exchange option. You'll get gift credit to use toward a similar item or anything else you like.",
      "faq.answer.howEstimateShipping": "Your gift covers shipping and tax costs for the recipient so that they don't have to pay anything out of their own pocket. Initially, our estimation covers shipping and tax to anywhere in the US. <br/>If you know the state you are shipping to, you can choose to get a state-specific estimate by clicking the link in the order review page.",
      "faq.answer.howIsGiftReceivedAltWays": "If you choose to send your gift by email, weâ€™ll send your recipient an email notifying them about your gift. If you choose to send by text message, messenger or link, youâ€™ll get a gift link that you will send directly to your recipient. If you choose to print and hand-deliver the gift, youâ€™ll print a design with your gift that you will give to your recipient. After your recipient is notified of their gift, they will go to our website, where a gift box opens to reveal their gift. They can then accept the gift (adjust size/color) or easily exchange it online, all before it ships to the address of their choice.",
      "faq.answer.howToAcceptGiftAltWays": "If you received a gift via email, text, messenger or a gift link that someone sent you, simply click on the link in the gift notification you received. If you received a printed card with your gift, follow the instructions on the card. You will go to the website URL on the card and enter your code. Once you open your gift online, choose your preferred item attributes and provide your address. Your gift will be shipped directly to you. It's that easy!",
      "faq.answer.isGiftWrapAvailable": "Gift wrap is not available at this time.",
      "faq.answer.isItemSaved": "The price and availability of the originally selected gift is subject to change. If the item is not available at the time you accept the gift, you'll get gift credit for the full gift amount. You can use it to choose a similar item, or anything else you like.",
      "faq.answer.itemOnSale": "The price and availability of the originally selected gift is subject to change. If the gift goes on sale and the price is lower at the time the recipient accepts it, they will receive the price difference in the form of gift credit.",
      "faq.answer.itemUnavailable": "If a certain size or color you suggested is unavailable, your recipient can still choose from other available options and accept your gift. They can also exchange the gift, before it ships.<br/><br/>If all of the gift's options are not available at the time the recipient redeems the gift, we show your chosen gift as a suggestion & provide them with gift credit for the full amount you paid, including the shipping & tax. The recipient can use the gift credit to choose a similar item, or something else they like.<br/><br/>Please note that the price & availability of the originally selected gift is subject to change.",
      "faq.answer.priceIncrease": "The recipient can still accept their gift at no extra charge, even if the price is higher at the time they accept it.",
      "faq.answer.shippingTaxDifference": "If your recipient's order total is less expensive than the amount you originally paid, the difference is given to the recipient as gift credit and can be applied to a future purchase. If their order total is more expensive, the recipient has an option to add more funds to cover the difference or choose an alternate gift.",
      "faq.answer.whyHaveRemainingCredit": "If you have a remaining credit after accepting your gift, it means the actual cost of your gift was less than your original gift amount. You can use the remaining credit toward the purchase of other products in our store.",
      "faq.answer.wrongEmail": "Please contact <%= data.CONTACT_US %> and provide your order number and an updated email address",
      "faq.question.canICancel": "Can I cancel my order after it has been sent?",
      "faq.question.canSelectMultipleGifts": "Can I select multiple gifts?",
      "faq.question.doesSenderKnowIfExchange": "Does the gift sender know if I exchange my gift?",
      "faq.question.exchangeForCash": "Can I exchange my gift credit for cash?",
      "faq.question.howDoesExchangingWork": "How does exchanging a gift work?",
      "faq.question.howDoesRecipientReceive": "How does the recipient receive my gift?",
      "faq.question.howEstimateShipping": "How do you estimate the tax and shipping costs?",
      "faq.question.howToAcceptGift": "How do I accept a gift?",
      "faq.question.isGiftWrapAvailable": "Can I add gift wrap to my gift, when it ships?",
      "faq.question.recipientDidntReceiveEmail": "My recipient didn't receive the gift email. Can I resend it?",
      "faq.question.sendMoreThanOne": "Can I send more than one gift at a time?",
      "faq.question.whenDoesRecipientReceive": "When does the recipient receive the gift notification?",
      "faq.question.whenWillGiftShip": "When will my gift be shipped and when will it arrive?",
      "faq.question.whyHaveRemainingCredit": "Why do I have a remaining credit after accepting my gift?",
      "faq.whatIsItAnswerAltWays": "GiftNow is the new way to send gifts! Our products can now be given as personal gifts via email, text message, messenger or a print out you can print and hand-deliver.",
      "index.pageTitle": "GiftNow - the new and easy way to send gifts online",
      "option.isGiftNow": "true",
      "send.faq.howDoISendAnswerMessenger": "To get started, open a conversation with a friend and tap the blue â€˜+â€™ sign to open GiftNow. Shop for gifts across top brands and send your gift directly on Messenger.",
      "statusTracker.pendingStateLink": "Your GiftNow order is processing. This usually takes a few hours, and we'll update you when the gift link is ready for you to send to your recipient.",
      "statusTracker.pendingStatePrint": "Your GiftNow order is processing. This usually takes a few hours, and we'll update you when the gift is ready for you to print and hand deliver to your recipient."
   },
   "internalSkin":    {
      "config":       {
         "faviconUrl": "",
         "3dBoxUrl": "https://static.loopassets.net/store/shop/images/loopstore-3D-box-texture.png",
         "themeLoaderLogoUrl": "",
         "learnMoreVideoUrl": "",
         "logoUrl": "https://static.loopassets.net/store/shop/images/loopstore-page-logo-white.png"
      },
      "internalCss": ".skin-boxtop{background:#ab1d26 url(https://static.loopassets.net/store/shop/images/lid_tile.png) repeat !important}.box-ribbon-skin{fill:#ffffff}.gift-box .tissue-paper{background:url(https://static.loopassets.net/store/shop/images/loopstore-tissue.png) !important;background-size:cover !important}.edit-tax-shipping .shipping-option.shipping-option-any .title{background-image:url(https://static.loopassets.net/store/macys/images/shipping-us-icon-grey.png)}.page-header{background:#282828;border-bottom:1px solid #000}.page-header .store-logo{text-align:left}.onepage-giftbox.gift-box-container .cover .gift-box-logo{background-image:url(https://static.loopassets.net/store/shop/images/loopstore-logo.png);background-size:38%}.selector-container .selector:before,.selector img,.selector.css-thumb .thumb,.selector.text .text-label{border-radius:0}.page-header .store-logo img{width:110px;margin-left:5px}.selector:before,.selector img,.selector.css-thumb .thumb,.selector.text .text-label{border-radius:0px}.selector img,.selector.css-thumb .thumb{width:40px}.selector img,.selector.css-thumb .thumb,.selector.text .text-label{border-color:#797979;min-width:50px !important;height:50px !important}.selector.text .text-label{background-color:#d6d6d6;padding:14px 8px}.selector-group .selector{height:auto;border-radius:0px;border-width:5px;margin-right:0px}.selector-group .caption{text-transform:initial}.selector:before,.selector.selected img,.selector.selected.css-thumb .thumb{border:0}.selector.selected{border-color:#a9a9a9;background-color:#a9a9a9}.selector-group .selector:last-child{margin-right:20px}.page-footer .powered-by-link{background-image:url(\"https://static.loopassets.net/store/macys/images/macys-footer-logo-mobile.png\")}.page-footer{display:none}.laptop-screen-skin{background-image:url(https://static.loopassets.net/store/shop/images/loopstore-3D-box-texture.png)}.onepage-giftbox.gift-box-container .tissue-paper{background:url(https://static.loopassets.net/store/shop/images/loopstore-tissue.png) !important;background-size:cover !important}.selector-group .caption{text-transform:initial}h2.icon-gift{padding-left:31px}h2.icon-cart{padding-left:30px}.checkbox-radio input+label .title:before{background-color:#B8121A}.checkbox-switches input[type=\"radio\"]:not(:checked)+label{color:#CB2128;border-color:#CB2128}:checked+label .radio-state-indicator,.checkbox-switches label{background-color:#CB2128}.paypal-button-content{border-radius:0 !important;padding:10px 20px !important}.paypal-button-content img{width:78px !important}button.paypal-button.paypal-style-checkout.paypal-size-small{max-width:190px !important}.btn-main,a.btn-main,select.select-skin,select.select-skin:focus{background-color:#CB2128 !important;color:#FFF;text-transform:uppercase;border-radius:0;font-weight:300;font-size:16px;border:1px solid #CB2128}.btn-secondary,a.btn-secondary{text-transform:uppercase;border-color:#cb2128;color:#cb2128;font-size:16px;border-radius:0}\n",
      "marketingCss": null
   },
   "storeAppVersion": "2.13.191-9260-4"
}}});