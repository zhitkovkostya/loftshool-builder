'use strict';

module.exports = function () {
	$.gulp.task('svgSpriteBuild', function () {
		return $.gulp.src('./source/images/**/*.svg')
		// minify svg
			.pipe(svgmin({
				js2svg: {
					pretty: true
				}
			}))
			// remove all fill, style and stroke declarations in out shapes
			.pipe(cheerio({
				run: function ($) {
					$('[fill]').removeAttr('fill');
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: {xmlMode: true}
			}))
			// cheerio plugin create unnecessary string '&gt;', so replace it.
			.pipe(replace('&gt;', '>'))
			// build svg sprite
			.pipe(svgSprite({
				mode: {
					symbol: {
						sprite: "./source/images/sprite.svg",
						render: {
							scss: {
								dest:'./source/style/common/_sprite.scss',
							}
						}
					}
				}
			}))
			.pipe($.gulp.dest($.config.root + '/assets/img'));
	});
};