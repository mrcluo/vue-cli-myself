<!-- 父传子 -->

<template>
	<div class="center" style="text-align: center;">
		<router-link to="/slot">slot页面</router-link>
		<h2>吾性自足，不假外求</h2>
		<h1>以上是父组件</h1>
		<h1>以下是子组件</h1>
		<h2><demo :msg="msgData" :math = 'mathData' ></demo></h2>
	</div>
</template>
<script type="text/javascript">
	import demo from './son.vue'
	export default{
		data(){
			return {
				msgData : '从父组件传来的msgData',
				mathData: '从父组件传来的mathData'
			}
		},
		components:{
			demo
		}
	}

</script>
<style type="text/css"></style>


<!--子传父
<!--
<template>
	<div class="center" style="text-align: center;">
		<h1>TwoTwoTwoTwoTwoTwoTwo</h1>
        <h2>{{datas.SonToFather}}</h2>
		<demo @sonToFather="sonToFather"></demo>
	</div>
</template>
<script type="text/javascript">
	import demo from './son.vue'
	export default{
		data(){
			return {
                datas:{}
            }
		},
		methods:{
			sonToFather(e){
                console.log(e)
                // this.datas.SonToFather = e
                this.$set(this.datas,'SonToFather',e)
			}
		},
		components:{
			demo
		}
	}

</script>
<style type="text/css"></style>
-->