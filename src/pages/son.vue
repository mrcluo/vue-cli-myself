<!-- 父传子 -->

<template>
	<div>
		<div>
			{{msg}}
		</div>
		<div>
			{{math}}
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'demo',
		props:['msg','math']
	}
</script>
<style type="text/css"></style>

<!-- 子传父 
<!--
<template>
	<div>
		<div><button @click="emit">子向父传值</button></div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'demo',
		methods:{
			emit(){
				this.$emit('sonToFather','gogogo')
			}
		}
	}
</script>
<style type="text/css"></style>
-->