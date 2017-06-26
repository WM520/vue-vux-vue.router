<template>
	<div class="withdrawal-wrapper">
		<div class="withdrawal-detail">
			<div class="avatar">
				<img src="../../assets/grain.jpg" class="icon">
			</div>
			<div class="content">
				<span class="title">多吃谷物少吃菜，日常生活中的养生之道。谷肉果蔬，食养尽之，无使过之，伤其正也。</span>
				<span class="time">2017-04-24 18:00-19:00</span>
			</div>
			<div class="price">
				<div class="count">+300</div>
			</div>
		</div>
		<div class="withdrawal-detail">
			<div class="avatar">
				<img src="../../assets/grain.jpg" class="icon">
			</div>
			<div class="content">
				<span class="title">多吃谷物少吃菜，日常生活中的养生之道。谷肉果蔬，食养尽之，无使过之，伤其正也。</span>
				<span class="time">2017-04-24 18:00-19:00</span>
			</div>
			<div class="price">
				<div class="count">+300</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import split from '@/components/split/split';
import { mapState } from 'vuex';
	export default {
		computed: {
	        ...mapState({
	            common_request_base_url: state => state.common.common_request_base_url 
	        })
    	},
		components: {
			split
		},
		beforeRouteEnter (to, from, next) {
			next(vm => {
				let id = localStorage.getItem('dataid');
				let lecturerId = vm.$store.state.UserInfo.lecturerId;
				let url = vm.common_request_base_url + 'api/web/v1/app/findincomeandcoursebyid?id=' + id + '&lecturerId=' + lecturerId;
				vm.$http.get(url)
				.then((res) => {
					console.log(res);
				});
			});
		}
	};
</script>
<style lang="stylus">
.withdrawal-wrapper
	.withdrawal-detail
		margin-top: 10px
		padding: 5px
		display: flex
		border-top:1px solid #eee;
		border-bottom:1px solid #eee;
		.avatar
			flex: 0 0 70px
			margin-right: 12px
			.icon
				border-radius: 10px
				padding: 5px
				width: 60px
				height: 60px
			@media only screen and (max-width: 320px)
				flex: 0 0 60px
				.icon
					border-radius: 5px
					padding: 3px
					width: 50px
					height: 50px
		.content
			position: relative
			flex: 0 0 240px
			.title
				display: inline-block
				font-size: 14px
				line-height: 26px
				color: #333333
				overflow: hidden
				text-overflow: ellipsis
				display: -webkit-box
				-webkit-line-clamp: 2
				-webkit-box-orient: vertical
			.time
				display: inline-block
				font-size: 10px
			@media only screen and (max-width: 375px)
				flex: 0 0 210px
			@media only screen and (max-width: 320px)
				flex: 0 0 160px
				.title
					display: inline-block
					font-size: 13px
					line-height: 20px
					color: #333333
					overflow: hidden
					text-overflow: ellipsis
					display: -webkit-box
					-webkit-line-clamp: 2
					-webkit-box-orient: vertical
				.time
					display: inline-block
					font-size: 10px
		.price
			flex: 1
			.count
				text-align: center
				font-size: 16px
				padding-top: 20px
				// width: 100p
				// height: 70px
				line-height: 100%
				
			
		
</style>
