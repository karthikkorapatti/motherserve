<template>
	<div>
		<div class="col-md-6">
			<div class="box_style_2" id="order_process">
				<h2 class="inner">Your order details</h2>
				<div class="form-group">
					<label>First name</label>
					<input type="text" class="form-control" id="firstname_order" name="firstname_order" placeholder="First name">
				</div>
				<div class="form-group">
					<label>Last name</label>
					<input type="text" class="form-control" id="lastname_order" name="lastname_order" placeholder="Last name">
				</div>
				<div class="form-group">
					<label>Telephone/mobile</label>
					<input type="text" id="tel_order" name="tel_order" class="form-control" placeholder="Telephone/mobile">
				</div>
				<div class="form-group">
					<label>Email</label>
					<input type="email" id="email_booking_2" name="email_order" class="form-control" placeholder="Your email">
				</div>
				<div class="form-group">
					<label>Your full address</label>
					<input type="text" id="address_order" name="address_order" class="form-control" placeholder=" Your full address">
				</div>
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<div class="form-group">
							<label>City</label>
							<input type="text" id="city_order" name="city_order" class="form-control" placeholder="Your city">
						</div>
					</div>
					<div class="col-md-6 col-sm-6">
						<div class="form-group">
							<label>Postal code</label>
							<input type="text" id="pcode_oder" name="pcode_oder" class="form-control" placeholder=" Your postal code">
						</div>
					</div>
				</div>
				<hr>
				<div class="row">
					<div class="col-md-6 col-sm-6">
						<div class="form-group">
							<label>Delivery Day</label>
							<select class="form-control" name="delivery_schedule_day" id="delivery_schedule_day">
								<option value="" selected>Select day</option>
								<option value="Today">Today</option>
								<option value="Tomorrow">Tomorrow</option>
							</select>
						</div>
					</div>
					<div class="col-md-6 col-sm-6">
						<div class="form-group">
							<label>Delivery time</label>
							<select class="form-control" name="delivery_schedule_time" id="delivery_schedule_time">
								<option value="" selected>Select time</option>
								<option value="11.30am">11.30am</option>
								<option value="11.45am">11.45am</option>
								<option value="12.15am">12.15am</option>
								<option value="12.30am">12.30am</option>
								<option value="12.45am">12.45am</option>
								<option value="01.00pm">01.00pm</option>
								<option value="01.15pm">01.15pm</option>
								<option value="01.30pm">01.30pm</option>
								<option value="01.45pm">01.45pm</option>
								<option value="02.00pm">02.00pm</option>
								<option value="07.00pm">07.00pm</option>
								<option value="07.15pm">07.15pm</option>
								<option value="07.30pm">07.30pm</option>
								<option value="07.45pm">07.45pm</option>
								<option value="08.00pm">08.00pm</option>
								<option value="08.15pm">08.15pm</option>
								<option value="08.30pm">08.30pm</option>
								<option value="08.45pm">08.45pm</option>
							</select>
						</div>
					</div>
				</div>
				<hr>
				<div class="row">
					<div class="col-md-12">
			
							<label>Notes for the restaurant</label>
							<textarea class="form-control" style="height:150px" placeholder="Ex. Allergies, cash change..." name="notes" id="notes"></textarea>
			
					</div>
				</div><hr>
			</div><!-- End box_style_1 -->
		</div><!-- End col-md-6 -->

		<portal	to="topBanner">
			<div id="subheader">
				<div id="sub_content">
					<h1>Place your order</h1>
					<div class="bs-wizard">
						<div class="col-xs-4 bs-wizard-step active">
						  <div class="text-center bs-wizard-stepnum"><strong>1.</strong> Your details</div>
						  <div class="progress"><div class="progress-bar"></div></div>
						  <a href="#0" class="bs-wizard-dot"></a>
						</div>
									   
						<div class="col-xs-4 bs-wizard-step disabled">
						  <div class="text-center bs-wizard-stepnum"><strong>2.</strong> Payment</div>
						  <div class="progress"><div class="progress-bar"></div></div>		                  
						  <router-link to="/Checkout" class="bs-wizard-dot"></router-link>
						</div>
					
						<div class="col-xs-4 bs-wizard-step disabled">
							<div class="text-center bs-wizard-stepnum"><strong>3.</strong> Finish!</div>
							<div class="progress"><div class="progress-bar"></div></div>		                  
							<router-link to="/ConfirmOrder" class="bs-wizard-dot"></router-link>
						</div>  
					</div><!-- End bs-wizard --> 
				</div><!-- End sub_content -->
			</div><!-- End subheader -->
		</portal>

		<portal to="destination">
			<router-link to="/Checkout" class="btn_full">GO TO CHECKOUT</router-link>
			<router-link to="/" class="btn_full"><i class="icon-right"></i>&nbsp;ADD OTHER ITEM</router-link>
		</portal>

		<portal	to="sideBarLeft">
			<div class="box_style_2 hidden-xs info">
				<h4 class="nomargin_top">Delivery time <i class="icon_clock_alt pull-right"></i></h4>
				<p>
					Lorem ipsum dolor sit amet, in pri partem essent. Qui debitis meliore ex, tollit debitis conclusionemque te eos.
				</p>
				<hr>
				<h4>Secure payment <i class="icon_creditcard pull-right"></i></h4>
				<p>
					Lorem ipsum dolor sit amet, in pri partem essent. Qui debitis meliore ex, tollit debitis conclusionemque te eos.
				</p>
			</div><!-- End box_style_2 -->
		</portal>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		methods:{

		}
	}
</script>