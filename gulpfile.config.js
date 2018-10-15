module.exports = {
	root:'',
	dest_url:'./_site',
	publish:"./_site",
	concatList:['assets/js/plugins/jquery.fitvids.js','assets/js/plugins/jquery.greedy-navigation.js','assets/js/plugins/jquery.magnific-popup.js','assets/js/plugins/jquery.smooth-scroll.min.js'],
	src: {
		html: ['/_includes/**/*.html', '/_layouts/**/*.html'],
		scripts:'/scripts/**/*.js',
		images:'/images/**/*',
		styles:'/scss/**/*.scss'
	},
	dest: {
		html:'_site/',
		scripts:'_site/assets/js/',
		images:'_site/static/images/',
		styles:'_site/static/css/'
	}
}