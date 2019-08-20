<template>
	<div>
		<header  @scroll="handleSCroll" class="header-bar">
		    <div class="container-fluid">
		        <div class="row">
		            <div class="col--md-4 col-sm-4 col-xs-4">
		                <a href="#" id="logo">
		                <!-- <img src="img/logo.png" width="190" height="23" alt="" data-retina="true" class="hidden-xs">
		                <img src="img/logo_mobile.png" width="59" height="23" alt="" data-retina="true" class="hidden-lg hidden-md hidden-sm"> -->
		                <span>Mother's Serve</span>
		                </a>
		            </div>
		            <nav class="col--md-8 col-sm-8 col-xs-8">
		            <a class="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="javascript:void(0);"><span>Menu mobile</span></a>
		            <div class="main-menu">
		                <div id="header_menu">
		                    <img src="img/logo.png" width="190" height="23" alt="" data-retina="true">
		                </div>
		                <a href="#" class="open_close" id="close_in"><i class="icon_close"></i></a>
		                 <ul>
		                    <li>		                    	
		                    	<router-link to="/" class="">Home</router-link>
		                    </li>		                    		                    
		                    <li>
		                    	<a href="#0" data-toggle="modal" data-target="#login_2">Login</a>
		                    </li>
		                </ul>
		            </div><!-- End main-menu -->
		            </nav>
		        </div><!-- End row -->
		    </div><!-- End container -->
		</header>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				
			}
		},
		methods:{

		},
	}
</script>