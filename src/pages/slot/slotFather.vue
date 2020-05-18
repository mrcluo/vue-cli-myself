<!-- 父传子 -->

<template>
	<div class="center" style="text-align: center;">
        <h1>slot区域</h1>
		<h2>吾性自足，不假外求</h2>
		<h1>以上是父组件</h1>
		<h1>以下是子组件</h1>
		<h2>
			<!-- <demo :msg="msgData" :math = 'mathData' > -->
				<!-- 匿名插槽 -->
				<!-- <div>有我就没slot</div> -->
				<!-- 具名插槽 -->
				<!-- <template #header>
					<div>有我就没slot</div>
				</template> -->
			<!-- </demo> -->


			<!-- 作用域 -->
			<!-- 此处val是随便取的 data是自组件传过来 -->
			<demo>
				<template  slot-scope="val" >
					<div @click="view(val.data)">{{ val.data.name }}</div>
				</template>
			</demo>


<!-- 作用域常用案例 -->
<!-- a是父组件 b是子组件 此方法比$emit优雅多了 -->
<!-- a给b传值，b定义循环体，通过slot作用域,b的点击事件提升到a处 -->
<!-- <el-row :gutter="20">
        <el-col :span="12" v-for="(column, index) in columnList" :key="index">
            <el-card class="box-card card-column">
                <div slot="header" class="clearfix">
                    <span>{{column.columnName}}</span>
                </div>
                <commodity-list :commodities="column.commodityList">
                    <template slot-scope="scope">
                        <commodity :modityData="scope.row" @clickCommodity="onCommodityClick(scope.row)"></commodity>
                    </template>
                </commodity-list>
            </el-card>
        </el-col>
</el-row> -->

		</h2>
	</div>
</template>
<script type="text/javascript">
	import demo from './slotSon.vue'
	export default{
		data(){
			return {
				msgData : '从父组件传来的msgData',
				mathData: '从父组件传来的mathData'
			}
		},
		methods:{
			view(data){
				console.log(data)
			}
		},
		components:{
			demo
		}
	}

</script>
<style type="text/css"></style>