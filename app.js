$app = __({
	el : 'app'
});


AppRoute = new GarudaRoute()
.to($app)
.default('home')
.nothing('page/404')
.before(`<div class="text-center">
			<i class="fa fa-spinner fa-spin" style="font-size:24px"></i>
		</div>`)
.register([
	{
		route 	 : '/home',
		response : 'page/home'
	},
	{
		route    : '/profile',
		response : 'page/profile'
	},
	{
		route    : '/about',
		response : 'page/about'
	}
]);

function __GarudaRoute(){
	return AppRoute;
}