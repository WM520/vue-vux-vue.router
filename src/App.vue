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
		name: 'app',
		counted() {
			this.$store.commit('updateUserInfoOpenID', '12321312');
		}
	};
</script>

<style lang="stylus">


</style>
