<template>
	<div class="container-fluid Background">

		<h2>Your cart</h2>
		<div class="alert alert-warning"
			v-show="sum == 0">The cart is Null!
		<router-link to ="/" class="alert-link">Return</router-link>
		</div>
		<div v-show="sum != 0">
			<table class="table open">
				<thead>
					<tr>
						<th>数量</th>
						<th>商品名称</th>
						<th class="text-right">单价</th>
						<th class="small_count">小计</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in products">
						<td class="text-center store-number">
							<div class="input-group">
								<div class="input-group-btn">
									<button type="button" class="btn btn-default"
									@click="down(item)">-</button>
								</div>
								<input type="number" v-model="item.count" min="1"
									class="form-control mynumber" />
									<div class="input-group-btn">
										<button type="button" class="btn btn-default"
											@click="add(item)">+</button>
								</div>
							</div>
						</td>
						<td class="text-left">
							{{ item.name }}
						</td>
						<td class="text-right">￥{{ item.price }}</td>
						<td class="text-right">{{item.count * item.price }}</td>
						<button class="btn btn-sm btn-warning" @click="del(item)">Delete</button>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		methods : {
			//增加的方法
			add(item){
				this.$store.commit("ADD", item);
			},
			//减少的方法
			down(item){
				this.$store.commit("DOWN", item);
			},
			//删除的方法
			del(item){
				this.$store.commit("DEL", item);
			}
		},
		//计算属性
		computed: {
			sum(){
				//使用vuex中的计算属性sum
				return this.$store.getters.sum;
			},
			products(){
				return this.$store.getters.products;
			}
		}
	}
</script>

<style type="text/css">
	.store-number{
		width: 20%;
	}
	.small_count{
		text-align: right;
	}
	.mynumber{
		text-align: center;
	}
  .Background{
    background:url(../img/02.jpg) no-repeat ;
    background-size: 100% ;
  }
</style>
