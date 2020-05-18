<!-- 父传子 -->

<template>
	<div>
		<div>
			{{msg}}
		</div>
		<div>
			{{math}}
		</div>

		<!-- 匿名插槽 -->
		<!-- <slot>
			插槽默认内容
		</slot> -->
		<!-- 具名插槽 -->
		<!-- <slot name="header">
			插槽默认内容
		</slot> -->

		<!-- 作用域插槽 -->
		<slot v-for='item in datas' :data="item"></slot>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'demo',
		props:['msg','math'],
		data(){
			return {
				datas:[
					{
						id:1,
						name:'测村上春树'
					},
					{
						id:2,
						name:'长沙市城市'
					},
					{
						id:3,
						name:'呜呜呜'
					}
				]
			}
		},
	}
</script>
<style type="text/css"></style>
