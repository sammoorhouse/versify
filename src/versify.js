(function ($) {
    $.fn.versify = function (options) {

        var opts = $.extend({}, $.fn.versify.defaults, options);
        var self = this;

        var verses = $(opts.verseSelector).map(function (idx, verse) {
            return {
                from: parseFloat($(verse).attr(opts.fromClassname)),
                to: parseFloat($(verse).attr(opts.toClassname)),
                element: verse
            }
        })

        this.bind("timeupdate", function () {
            var time = self[0].currentTime
            $(verses).each(function (idx, verse) {
                if ((verse.from <= time) && (verse.to > time)) {
                    $(verse.element).toggleClass(opts.activeClassname, true)
                } else {
                    $(verse.element).toggleClass(opts.activeClassname, false)
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
