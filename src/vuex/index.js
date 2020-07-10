import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Mode 数据  状态state
const state = {
	//用于【存储货物产品的数组】即【购物车数组】
	//刚开始的时候，因为购物车是空的，所以products数组也应该是空的
	products:[
	
	]
}
//同步操作
const mutations = {
	//添加到购物车功能
	ADD_STORE(state,item){
		//建立product模型
		var product = {
			name: item.name,
			price: item.price,
			id: item.id,
			count:1
		}
		//先拿到products数组
		var products = state.products;
		// 如果products数组的长度为0
		if(products.length === 0){
			//则将product货物压栈到products数组中
			products.push(product);
			return;
		}
		//遍历products数组
		for (var i = 0; i < products.length; i++) {
			//如果数组中已经有一个元素与想添加的物品的id相同
			//则将对应的产品的count++即可(说明该商品已经存在，不需要往数组中添加了)
			if(products[i].id == product.id){
				products[i].count++;
				return;
			}
		}
	// 默认是往products数组中添加产品
	products.push(product);
	},
	//数目的增加功能
	ADD(state,item){
		var products = state.products;
		for(var i = 0; i < products.length; i++) {
			if(products[i].id == item.id) {
				
				products[i].count++;
			}
		}
	},
	//数目的减少功能
	DOWN(state,item){
		var products = state.products;
		for(var i = 0; i < products.length; i++) {
			if(products[i].id == item.id) {
				
				products[i].count--;
			}
		}
	},
	//删除功能
	DEL(state,item){
		var products = state.products;
		for(var i = 0; i < products.length; i++) {
			if(products[i].id == item.id) {
				
				products.splice(i, 1);
			}
		}
	},
}
//异步操作
const actions = {}
//vuex中的计算属性
const getters = {
	//计算商品总数的属性
	sum(state){
		// result代表商品总数
		var result = 0;
		//购物车中的商品数组
		var products = state.products
		//遍历商品数组
		for (var i =0; i < products.length; i++){
			//计算商品总数
			result += Number(products[i].count)
		}
		return result;
	},
	
	money(state){
		//total代表商品金额
		var total = 0;
		//购物车的商品数组
		var products = state.products
		//遍历商品数组
		for (var i =0; i < products.length; i++){
			//计算商品金额
			total += products[i].price*products[i].count;
			
		}
		return total;
	},
	products(){
		return state.products;
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
