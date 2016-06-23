'use strict';

var svg_config = {
	shape : {
		id : {
			generator : "icon-%s"
		}
	},
	mode : {
		symbol : {
			prefix : "%s",
			sprite : "sprite.svg",
			render : { scss : true },
			example : true
		}
	}
};

module.exports = function() {
	$.gulp.task('svgSprite', function() {
		return $.gulp.src($.path.svgSprite.src)
			.pipe($.gp.cheerio({
				run: function ($) {
					$('[fill]').removeAttr('fill');
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: { xmlMode: true }
			}))
			.pipe($.gp.replace('&gt;', '>'))
			.pipe($.gp.svgSprite(svg_config))
			.pipe($.gulp.dest($.path.svgSprite.dest));
	});
};