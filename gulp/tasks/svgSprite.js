// 'use strict';
//
// module.exports = function () {
// 	$.gulp.task('svgSprite', function () {
// 		return $.gulp.src($.path.svgSprite.src)
// 			.pipe($.gp.cheerio({
// 				run: function ($) {
// 					$('[fill]').removeAttr('fill');
// 					$('[stroke]').removeAttr('stroke');
// 					$('[style]').removeAttr('style');
// 				},
// 				parserOptions: {xmlMode: true}
// 			}))
// 			.pipe($.gp.replace('&gt;', '>'))
// 			.pipe($.gp.svgSprite({
// 				mode: {
// 					symbol: { // symbol mode to build the SVG
// 						render: {
// 							css: false, // CSS output option for icon sizing
// 							scss: false // SCSS output option for icon sizing
// 						},
// 						dest: 'sprite', // destination folder
// 						prefix: '.svg--%s', // BEM-style prefix if styles rendered
// 						sprite: 'sprite.svg', //generated sprite name
// 						example: true // Build a sample page, please!
// 					}
// 				},
// 				variables: {
// 					mapname: "icons"
// 				}
// 			}))
// 			.pipe($.gulp.dest($.path.svgSprite.dest));
// 	})
// };