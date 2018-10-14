module.exports = {
	root:'',
	public:'./_site',
	main:'main.js',
	src: {
		html: ['/_includes/**/*.html', '/_layouts/**/*.html'],
		scripts:'/scripts/**/*.js',
		images:'/images/**/*',
		styles:'/scss/**/*.scss'
	},
	dest: {
		html:'_site/',
		scripts:'_site/static/scripts/',
		images:'_site/static/images/',
		styles:'_site/static/css/'
	}
}