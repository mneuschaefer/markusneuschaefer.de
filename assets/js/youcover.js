"use strict";
!function(a) {
    function e(a) {
        var e = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
          , t = a.match(e);
        return !(!t || 11 != t[7].length) && t[7]
    }
    var t = function(t, r) {
        var o = (window.matchMedia("(max-width: 767px)").matches,
        /Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent))
          , c = a(t)
          , n = c.data()
          , i = "https://img.youtube.com/vi/%yid%/maxresdefault.jpg"
          , s = a("<a href='javascript:void(0);'></a>")
          , d = a("<iframe />")
          , l = a("<img />");
        r = a.extend({}, r, n),
        s.addClass(r.wrapperclass),
        delete r.wrapperclass,
        delete r.youcover,
        delete r.fancybox,
        delete r.rel,
        n.id && (n.src = "https://www.youtube.com/embed/" + n.id + "?rel=0&amp;autoplay=1",
        r.src = n.src);
        var u = n.id || e(r.src)
          , f = i.replace("%yid%", u)
          , p = r.src.indexOf("autoplay");
        if (p && !o && (-1 == p ? r.src += "&amp;autoplay=1" : r.src = r.src.replace("autoplay=0", "autoplay=1")),
        void 0 != n.fancybox && a.fn.fancybox)
            return s.attr("data-fancybox", n.rel || !1).attr("href", r.src).attr("rel", n.rel),
            l.attr("src", f),
            s.append(l),
            c.replaceWith(s),
            s.addClass("loaded"),
            s;
        if (a(r).each(function(a, e) {
            for (var t in e)
                d.attr(t, e[t])
        }),
        o) {
            var y = r.src.replace("autoplay=1", "autoplay=0");
            return d.attr("src", y),
            s.addClass("active-iframe").addClass("loaded"),
            s.append(d),
            c.replaceWith(s),
            s
        }
        return l.attr("src", f),
        s.append(l),
        c.replaceWith(s),
        s.addClass("loaded"),
        s.click(function() {
            a(this).addClass("active-iframe"),
            a(this).append(d)
        }),
        s
    };
    if (a.fn.youCover = function(e) {
        return e = a.extend({}, a.fn.youCover.attributes, e),
        a(this).each(function() {
            return a(this).hasClass("loaded") ? this : new t(this,e)
        })
    }
    ,
    a.fn.youCover.attributes = {
        wrapperclass: "youCover"
    },
    a("[data-youcover]").youCover(),
    a.fn.fancybox) {
        var r = a("[data-fancybox][rel]");
        r.fancybox({
            beforeShow: function() {
                r.removeClass("fancybox-active")
            },
            afterShow: function(e, t) {
                var r = a.fancybox.getInstance().current.opts.$orig;
                a(r).addClass("fancybox-active")
            },
            afterClose: function() {
                r.removeClass("fancybox-active")
            }
        })
    }
}(jQuery);
