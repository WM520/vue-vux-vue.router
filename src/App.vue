<template>
  <div id="app">
  	<!-- <transition name="fade"> -->
	  	<keep-alive>
		    <router-view></router-view>
		</keep-alive>
	<!-- </transition> -->
  </div>
</template>

<script>
	export default {
		name: 'app'
		// mounted() {
		// 	this.$http.get('api/web/v1/app/logins')
		// 	.then((res) => {
		// 		alert.log(res);
		// 		console.log(res);
		// 	}, (err) => {
		// 		alert(err);
		// 		console.log(err);
		// 	});
		// }
	};
</script>

<style lang="stylus">


</style>
