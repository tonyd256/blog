!function(n){function s(e){return!n.trim(e)}var e=n(window),a=n("body"),o=(n("#page-wrapper"),n("#banner")),i=n("#header");breakpoints({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:[null,"480px"]}),e.on("load",function(){window.setTimeout(function(){a.removeClass("is-preload")},100)}),browser.mobile?a.addClass("is-mobile"):(breakpoints.on(">medium",function(){a.removeClass("is-mobile")}),breakpoints.on("<=medium",function(){a.addClass("is-mobile")})),n(".scrolly").scrolly({speed:1500,offset:i.outerHeight()}),n("#menu").append('<a href="#menu" class="close"></a>').appendTo(a).panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:"right",target:a,visibleClass:"is-menu-visible"}),0<o.length&&i.hasClass("alt")&&(e.on("resize",function(){e.trigger("scroll")}),o.scrollex({bottom:i.outerHeight()+1,terminate:function(){i.removeClass("alt")},enter:function(){i.addClass("alt")},leave:function(){i.removeClass("alt")}})),n("#contact-form").submit(function(e){e.preventDefault();var a=!0;s(n("#name").val())?(a=!1,n("#name").addClass("error animated shake").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n(this).removeClass("animated shake")})):n("#name").removeClass("error"),s(n("#email").val())?(a=!1,n("#email").addClass("error animated shake").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n(this).removeClass("animated shake")})):n("#email").removeClass("error"),s(n("#message").val())?(a=!1,n("#message").addClass("error animated shake").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){n(this).removeClass("animated shake")})):n("#message").removeClass("error"),a&&(n("#submit").addClass("disabled"),n.post("https://wt-edbc2c30266f4c42a8912ea7d10e7bb3-0.sandbox.auth0-extend.com/contact-form",{name:n("#name").val(),email:n("#email").val(),message:n("#message").val()},function(e){n("#submit").removeClass("disabled"),e&&"ok"===e.msg?(n("#name").val(""),n("#email").val(""),n("#message").val(""),n("#snackbar").text("Contact Submitted! I'll get back to you soon!"),n("#snackbar").addClass("success show"),setTimeout(function(){n("#snackbar").removeClass("success show")},3e3)):(n("#snackbar").text("Oh no! Something went wrong!"),n("#snackbar").addClass("error show"),setTimeout(function(){n("#snackbar").removeClass("error show")},3e3))}))})}(jQuery);