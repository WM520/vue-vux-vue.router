<template>
  <div class="singlelive">
  	<ul>
  		<li v-for="item in courses">
					<img src="item.pic">
					<h1>{{ item.subject }}</h1>
					<h1>{{ item.subject }}</h1>
					<img src="../../resource/homeimg/time@2x.png">
					<span>汪淼</span>
					<img src="../../resource/homeimg/time@2x.png">
					<span>2000次</span>
					<span>100$</span>
					<split></split>
		</li>
  	</ul>
  </div>
</template>
<script type="text/javascript">
export default {
	// props: {
	// 	courses: {
	// 		type: Array,
	// 		default () {
	// 			return [];
	// 		}
	// 	}
	// }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
