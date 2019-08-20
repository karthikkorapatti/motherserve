<template>
<div>
	<div class="col-md-6">
		<div class="box_style_2" id="main_menu">
			<h2 class="inner">Menu</h2>
			<template v-for="(menuItem, index) in menuItems">
				<h3 class="nomargin_top" id="starters">{{ index }}</h3>
				<p>
					Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea.
				</p>
				<table class="table table-striped cart-list">
				<thead>
					<tr>
						<th>
							 Item
						</th>
						<th>
							 Price
						</th>
						<th>
							 Order
						</th>
					</tr>
				</thead>
				<tbody>

				<tr v-for="item in menuItem">
					<td>
						<figure class="thumb_menu_list"><img src="img/menu-thumb-1.jpg" alt="thumb"></figure>
						<h5>{{ item.name }}</h5>
						<p>
							{{ item.details }}
						</p>
					</td>
					<td>
						<strong>€ {{ item.price }}</strong>
					</td>
					<td class="options">
					<div class="dropdown dropdown-options" @click.prevent="toggleDropDown" :class="{ open: openDropDown}">
						<a  class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
							<i class="" :class="[ openDropDown ? 'icon_minus_alt2' : 'icon_plus_alt2' ]"></i></a>
						<div class="dropdown-menu">
							<h5>Select an option</h5>
							<label>
							<input type="radio" value="option1" name="options_1" checked>Medium <span>+ $3.30</span>
							</label>
							<label>
							<input type="radio" value="option2" name="options_1" >Large <span>+ $5.30</span>
							</label>
							<label>
							<input type="radio" value="option3" name="options_1" >Extra Large <span>+ $8.30</span>
							</label>
							<h5>Add ingredients</h5>
							<label>
							<input type="checkbox" value="">Extra Tomato <span>+ $4.30</span>
							</label>
							<label>
							<input type="checkbox" value="">Extra Peppers <span>+ $2.50</span>
							</label>
							<a href="#0" class="add_to_basket">Add to cart</a>
						</div>
					</div>
				</td>
				</tr>
				<hr>
				</tbody>
				</table>	
			</template>														
		</div><!-- End box_style_1 -->
	</div><!-- End col-md-6 -->

	<portal	to="topBanner">
		<div id="subheader">
			<div id="sub_content">
				<div id="thumb"><img src="img/thumb_restaurant.jpg" alt=""></div>
				<div class="rating"><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i> (<small><a href="detail_page_2.html">Read 98 reviews</a></small>)</div>
				<h1>Mexican TacoMex</h1>
				<div><em>Mexican / American</em></div>
				<div><i class="icon_pin"></i> 135 Newtownards Road, Belfast, BT4 1AB - <strong>Delivery charge:</strong> $10, free over $15.</div>
			</div>
		</div>
	</portal>

	<portal to="destination">
		<router-link to="/OrderNow" class="btn_full">Order now</router-link>
	</portal>

	<portal	to="sideBarLeft">
		<p><a href="list_page.html" class="btn_side">Back to search</a></p>
		<div class="box_style_1">
			<ul id="cat_nav">
				<li><a href="#starters" class="active">Starters <span>(141)</span></a></li>
				<li><a href="#main_courses">Main Courses <span>(20)</span></a></li>
				<li><a href="#beef">Beef <span>(12)</span></a></li>
				<li><a href="#desserts">Desserts <span>(11)</span></a></li>
				<li><a href="#drinks">Drinks <span>(20)</span></a></li>
			</ul>
		</div><!-- End box_style_1 -->		
	</portal>
</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			openDropDown: false,
			menuItems: {
				starters:[
					{ name:'1. Mexican Enchiladas', details:'Fuisset mentitum deleniti sit ea.',price: 120 },
					{ name:'2. Fajitas', details:'Fuisset mentitum deleniti sit ea.',price: 90 },
					{ name:'3. Royal Fajitas', details:'Fuisset mentitum deleniti sit ea.',price: 170 }
				],
				main_courses:[
					{ name:'1. Cheese Quesadilla', details:'Fuisset mentitum deleniti sit ea.',price: 20 },
					{ name:'2. Chorizo & Cheese', details:'Fuisset mentitum deleniti sit ea.',price: 40 },
					{ name:'3.Taco', details:'Fuisset mentitum deleniti sit ea.',price: 50 }
				],
				desserts:[
					{ name:'1. Chocolate Fudge Cake', details:'Fuisset mentitum deleniti sit ea.',price: 50 },
					{ name:'2. Cheesecake', details:'Fuisset mentitum deleniti sit ea.',price: 80 },
					{ name:'3.Apple Pie & Custard', details:'Fuisset mentitum deleniti sit ea.',price: 120 }
				],
			},
		}
	},

	mounted() {
		this.getRestaurant();
	},

	methods:{
		toggleDropDown(){
			this.openDropDown =! this.openDropDown;
		},

		getRestaurant() {
			axios.post(`${this.$root.urls.api}/showRestaurantDetail`, {
				restaurant_id: '2'
			})
			.then(({ data }) => {
				console.log(data);
			})
			.catch(error => {
				console.log(error);
			});
		}
	}
}
</script>