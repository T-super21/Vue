<template>
	<div class="container-fluid">
		<div class="navbar navbar-inverse">
			<!--<a href="/" class="navbar-brand">商店商品</a>-->
			<router-link to="/">
        <span class="iconfont add">
          &#xe60d;
        </span>
      </router-link>
      <div class="search">
        <span class="iconfont center">&#xe639;</span>
        <input type="text" placeholder="Search products!">

      </div>
				<div class="navbar-right">
					<div class="navbar-text">
						<b>Your cart:Numbers: {{ sum }}&nbsp&nbsp&nbsp $:{{ money }}</b>

					</div>
					<!--<a href="/cart" class="btn btn-default navbar-btn">购物车</a>-->
					<router-link to="/cart" >
            <span class="iconfont add">
              &#xe611;
            </span>
          </router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },

  computed:{
  	//计算商品总数的属性
  	sum(){
  		return this.$store.getters.sum;
  	},

  	money(){
  		return this.$store.getters.money;
  	}
  }
}
</script>

<style type="text/css">
.navbar-right{
	float: right !important;
	margin-right: 5px;
}
.navbar-text{
	margin-right: 10px;
}
.search{
	margin: -43px auto ;
	text-align: center ;
	width: 280px;
	height: 35px ;
	background:#222;

}
.add{
	font-size: 60px ;
	line-height: 50px ;
  margin-left:3px ;
}
.sp{
	font-size: 38px ;
	margin-left:10px ;
	line-height: 50px ;
}
.center{
	font-size: 23px ;
	color: lightblue ;
}
input{
	border-radius: 20px ;
}
</style>
