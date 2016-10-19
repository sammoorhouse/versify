(function ($) {
    $.fn.versify = function (options) {
        var opts = $.extend({}, $.fn.versify.defaults, options);
        var self = this;
        this.bind("timeupdate", function () {
            $(opts.verseSelector).each(function () {
                var from = parseFloat($(this).attr(opts.fromClassname))
                var to = parseFloat($(this).attr(opts.toClassname))
                var time = self[0].currentTime
                if ((from <= time) && (to > time)) {
                    $(this).toggleClass(opts.activeClassname, true)
                } else {
                    $(this).toggleClass(opts.activeClassname, false)
                }
            })
        })
        this.bind("canplay", function () {
            $(opts.verseSelector).each(function () {
                var from = parseFloat($(this).attr(opts.fromClassname))
                $(this).bind("click", function () {
                    self[0].currentTime = from;
                })
            })
        })

        return this;
    }

    $.fn.versify.defaults = {
        verseSelector: ".verse",
        activeClassname: "voice-active",
        fromClassname: "from",
        toClassname: "to"
    }
}(jQuery));