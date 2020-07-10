<template>
	<div class="container-fluid">
		<div class="panel panel-default row">
			<div class="col-xs-3">
				<a href="###" class ="btn btn-default btn-lg btn-block Color"
					@click="changeCategory('all')"
					>All the products</a>
				<a href="###" class="btn btn-block btn-default btn-lg Color"
					v-for="(item,index) in categorys"
					@click="changeCategory(item)"
					v-bind:class="{ active: item == selectedCategory }">{{ item }}</a>
			</div>

				<div class="col-xs-9">
					<div class="well" v-for="(item, index) in nowProducts">
					<h3>
						<strong>{{ item.name }}</strong>
						<span class="pull-right label label-primary">${{ item.price }}.00</span>
					</h3>
					<div class="description">
            <!-- 商品名称 -->
						<a href="item.Src">
              <span class="lead">{{ item.description }}</span>
            </a>
						<button class="btn btn-success pull-right"
							@click="addStore(item)">添加到购物车</button>
					</div>
					</div>
					<!--===========-->
					<div class="pull-right btn-group">
						<a class="btn btn-default"
						v-for="(item, index) in pageNum"
						v-bind:class="{ 'btn-primary': item == activePage }"
						@click="changePage(item)">{{ item }}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	//每页显示多少个商品(暂定三个)
	var pageSize = 3;
export default{
	data(){
		return{
		//商品数组
		products: [],
		//用于保存[选择的分类]
		selectedCategory:null,
		//表示当前页
		activePage: 1
		}
	},
	created(){
		this.$http.get("/products").then(jsonData => {
			this.products = jsonData.body;
			console.log(this.products)
		})
	},
	methods:{
		// 改变商品【类别】 其中参数category是表示类别的值
		changeCategory(category){
			// 默认传入的参数all，即没有分类
			if(category == 'all'){
				this.selectedCategory = null;
			}else{
				this.selectedCategory = category;
				console.log(this.selectedCategory)
			}
			//每次切换类型的时候，需要将activePage初始化为1
			this.activePage = 1
		},
		//改变【页码数】
		changePage(newPage){
		this.activePage = newPage;
	},
	//添加item到[购物车数组]中去
	addStore(item){
		//触发vuex数据管理中心中的ADD_STORE函数
		//mutations中的函数必须使用commit来触发
		this.$store.commit("ADD_STORE", item)
		}
	},
	computed:{
		//显示类别的属性
		categorys(){
			var results = []
			var keys = {}
			for (var i = 0; i < this.products.length; i++) {
				var category = this.products[i]["category"];
				// 如果keys对象中没有当前category所代表的商品类型
				if(!keys.hasOwnProperty(category)){
					//那么就位keys新增这个当前[category]所代表的商品类型作为
					//keys对象的属性。赋什么值不重要。
					keys[category] = true;
					//既然没有这种类型，那么就将类型值压线到results数组中
					results.push(category);
				}
			}
			//返回一个商品的类型的数组
			return results;
		},
		//用于返回根类分类选择的商品列表
		productList(){
			//如果没有进行特别的选择
			if(this.selectedCategory == null){
				//返回products数组(含全部商品)
				return this.products;
			}else{
				return this.products.filter(item => this.selectedCategory == item.category)
			}
		},
		// 返回【当前的商品列表]
		nowProducts(){
			var startProduct = (this.activePage - 1) * pageSize
			//返回值是前闭后开的  6-------8
			return this.productList.slice(startProduct, startProduct + pageSize)
		},
		//计算页码数 10 / 3 = 3.x
		pageNum(){
			return Math.ceil(this.productList.length / pageSize);
		}
	}
}
</script>

<style type="text/css">
	.Color{
		transition:2s ;
	}
	.Color:hover{
		transition: 2s ;
		width:80% ;
		background-color: lightblue ;
	}
</style>
