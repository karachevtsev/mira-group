"use strict";$(document).ready(function(){$(".js-main-slider").slick({dots:!0,infinite:!0,speed:1e3,fade:!0});var e=$(".js-header"),o=e.offset(),s=e.innerHeight(),a=$(".hero");$(window).scroll(function(){$(window).scrollTop()>o.top?(e.addClass("fixed-top"),a.css("padding-top",s)):(e.removeClass("fixed-top"),a.css("padding-top",0))});var i=$("#form"),d=$("#submit"),t=$("#modal");i.validate({rules:{phone:{required:!0,digits:!0}},submitHandler:function(e){d.prop("disabled",!0).addClass("is-loading"),$.ajax({type:e.method,url:e.action,data:$(e).serialize(),success:function(){$(e).trigger("reset"),t.modal("show"),d.prop("disabled",!1).removeClass("is-loading")},error:function(){t.find(".modal-message").html("Ошибочка! Что-то пошло не так!"),t.modal("show"),d.prop("disabled",!1).removeClass("is-loading")}})}}),(navigator.userAgent.match(/MSIE 10/i)||navigator.userAgent.match(/Trident\/7\./)||navigator.userAgent.match(/Edge/))&&$("body").on("mousewheel",function(e){e.preventDefault();var o=e.wheelDelta,s=window.pageYOffset;window.scrollTo(0,s-o)})});