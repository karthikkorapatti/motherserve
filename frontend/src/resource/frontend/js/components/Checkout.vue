<template>
	<div>
		<div class="col-md-6">
			<div class="box_style_2">
				<h2 class="inner">Payment methods</h2>
				<div class="payment_select">
					<label><input type="radio" value="" checked name="payment_method" class="icheck">Credit card</label>
					<i class="icon_creditcard"></i>
				</div>
				<div class="form-group">
					<label>Name on card</label>
					<input type="text" class="form-control" id="name_card_order" name="name_card_order" placeholder="First and last name">
				</div>
				<div class="form-group">
					<label>Card number</label>
					<input type="text" id="card_number" name="card_number" class="form-control" placeholder="Card number">
				</div>
				<div class="row">
					<div class="col-md-6">
						<label>Expiration date</label>
						<div class="row">
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<input type="text" id="expire_month" name="expire_month" class="form-control" placeholder="mm">
								</div>
							</div>
							<div class="col-md-6 col-sm-6">
								<div class="form-group">
									<input type="text" id="expire_year" name="expire_year" class="form-control" placeholder="yyyy">
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-sm-12">
						<div class="form-group">
							<label>Security code</label>
							<div class="row">
								<div class="col-md-4 col-sm-6">
									<div class="form-group">
										<input type="text" id="ccv" name="ccv" class="form-control" placeholder="CCV">
									</div>
								</div>
								<div class="col-md-8 col-sm-6">
									<img src="img/icon_ccv.gif" width="50" height="29" alt="ccv"><small>Last 3 digits</small>
								</div>
							</div>
						</div>
					</div>
				</div><!--End row -->
				<div class="payment_select" id="paypal">
					<label><input type="radio" value="" name="payment_method" class="icheck">Pay with paypal</label>
				</div>
				<div class="payment_select nomargin">
					<label><input type="radio" value="" name="payment_method" class="icheck">Pay with cash</label>
					<i class="icon_wallet"></i>
				</div>
			</div><!-- End box_style_1 -->
		</div><!-- End col-md-6 -->
		

		<portal to="topBanner">
			<div id="subheader">
				<div id="sub_content">
				 	<h1>Place your order</h1>
			        <div class="bs-wizard">
			            <div class="col-xs-4 bs-wizard-step complete">
			              <div class="text-center bs-wizard-stepnum"><strong>1.</strong> Your details</div>
			              <div class="progress"><div class="progress-bar"></div></div>
			              <a href="cart.html" class="bs-wizard-dot"></a>
			            </div>
			                           
			            <div class="col-xs-4 bs-wizard-step active">
			              <div class="text-center bs-wizard-stepnum"><strong>2.</strong> Payment</div>
			              <div class="progress"><div class="progress-bar"></div></div>
			              <a href="#0" class="bs-wizard-dot"></a>
			            </div>
			        
			          <div class="col-xs-4 bs-wizard-step disabled">
			              <div class="text-center bs-wizard-stepnum"><strong>3.</strong> Finish!</div>
			              <div class="progress"><div class="progress-bar"></div></div>
			              <a href="cart_3.html" class="bs-wizard-dot"></a>
			            </div>  
					</div><!-- End bs-wizard --> 
			    </div><!-- End sub_content -->
			</div><!-- End subheader -->
		</portal>

		<portal to="destination">
  			<router-link to="/ConfirmOrder" class="btn_full">Confirm your order</router-link>
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