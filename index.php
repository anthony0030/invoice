<!DOCTYPE html>
<html><head>
		<meta charset="utf-8">
		<title>Invoice</title>

		<!-- start of CSS -->
			<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.css" >
			<link rel="stylesheet" href="assets/css/style.css">
			<link rel="stylesheet" href="assets/css/lang.css">
			<link rel="stylesheet" href="assets/css/custom.css">
			<style type="text/css"></style>
		<!-- end of CSS -->

		<!-- start of cpanel js -->
			<script src="assets/js/cpanel/lang.js"></script>
			<script src="assets/js/cpanel/logo.js"></script>
			<script src="assets/js/cpanel/euro.js"></script>
			<script src="assets/js/cpanel/num.js"></script>
		<!-- end of cpanel js -->
		
		<!-- start of favicon -->
			<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon/favicon-32x32.png">
			<link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon/favicon-96x96.png">
			<link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon-16x16.png">
			<link rel="manifest" href="assets/img/favicon/manifest.json">
			<meta name="msapplication-TileColor" content="#ffffff">
			<meta name="msapplication-TileImage" content="assets/img/favicon/ms-icon-144x144.png">
			<meta name="theme-color" content="#ffffff">
		<!-- end of favicon -->

		<!-- start of function js -->
      <script src="new_file.js"></script>
			<script src="assets/js/file.js"></script>
			<script src="assets/js/script.js"></script>
			<script src="assets/js/logosize.js"></script>
			<script src="assets/js/date.js"></script>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
			<script src="assets/bootstrap/js/bootstrap.min.js"></script>
		<!-- end of function js -->







		<link rel="license" href="http://www.opensource.org/licenses/mit-license/">
	
	</head>






<div class="bootstrap">
    <!-- Fixed navbar -->
    <nav class="navbar navbar-inverse navbar-fixed-top">
    <a href="#" class="pull-left"><img src="assets/img/stamp.png" style="margin-left:5px; height:50px;"></a>
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand">Invoice</a>
        </div>
        
        <div id="navbar" class="navbar-collapse collapse">
          
        	<ul class="nav navbar-nav">
            	<li class="dropdown">
              		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">File<span class="caret"></span></a>
              		<ul class="dropdown-menu">
                		<li id="new">
                			<a onClick="new_file();">
                				<span class="glyphicon glyphicon-plus"> New</span>
                			</a>
                		</li>
                		<li id="import" class="">
							<a onClick="import_file();">
                				<span class="glyphicon glyphicon-open-file"> Open</span>
                			</a>
                		</li>
                		<li id="export">
                			<a onClick="export_file();">
                				<span class="glyphicon glyphicon-save-file"> Save</span>
                			</a>
                		</li>
                		<li id="new_serial">
                			<a onClick="serial_file();">
                				<span class="glyphicon glyphicon-barcode">  Serialize</span>
                			</a>
                		</li>
              		</ul>
            	</li>
        	</ul>


          
        	<ul class="nav navbar-nav">
            	<li class="dropdown">
              		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Language<span class="caret"></span></a>
              		<ul class="dropdown-menu">
                		<li id="en" class="active"><a onClick="changelangen();">
                			<img src="assets/img/flags/en.png"> English</a></li>
                		<li id="gr" class=""><a onClick="changelanggr();">
                			<img src="assets/img/flags/gr.png"> Greek</a></li>
              		</ul>
            	</li>
        	</ul>

        	<ul class="nav navbar-nav">
            	<li class="dropdown">
              		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Invoice Number<span class="caret"></span></a>
              		<ul class="dropdown-menu">
                		<li id="numon" class="active"><a onClick="changenumon();">
                			<img src="assets/img/num/on.png"> ON</a></li>
                		<li id="numoff" class=""><a onClick="changenumoff();">
                			<img src="assets/img/num/off.png"> OFF</a></li>
              		</ul>
            	</li>
        	</ul>

        	<ul class="nav navbar-nav">
            	<li class="dropdown">
              		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Display Total<span class="caret"></span></a>
              		<ul class="dropdown-menu">
                		<li id="euroon" class="active"><a onClick="changeeuroon();">
                			<img src="assets/img/euro/on.png"> ON</a></li>
                		<li id="eurooff" class=""><a onClick="changeeurooff();">
                			<img src="assets/img/euro/off.png"> OFF</a></li>
              		</ul>
            	</li>
        	</ul>


        	<ul class="nav navbar-nav">
            	<li class="dropdown">
              		<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Logo<span class="caret"></span></a>
              		<ul class="dropdown-menu">

              			<!-- change color -->
                		<li id="coloron" class="active"><a onClick="changecoloron();">
                			<img src="assets/img/color/on.png"> ON</a></li>

                		<li id="coloroff" class=""><a onClick="changecoloroff();">
                			<img src="assets/img/color/off.png"> OFF</a></li>



						<li role="separator" class="divider"></li>


						<!-- change language -->
                		<li id="logoen" class="active"><a onClick="changelogolangen();">
                			<img src="assets/img/flags/en.png"> English</a></li>

                		<li id="logogr" class=""><a onClick="changelogolanggr();">
                			<img src="assets/img/flags/gr.png"> Greek</a></li>


						<li role="separator" class="divider"></li>

						<!-- change legal logo -->
                		<li id="legalon" class="active"><a onClick="changelogolegalon();">
                			<img src="assets/img/legal/on.png"> Legal</a></li>

                		<li id="legaloff" class=""><a onClick="changelogolegaloff();">
                			<img src="assets/img/legal/off.png"> Normal</a></li>
              		
						<li role="separator" class="divider"></li>

						<li id="resetlogo" class=""><a onClick="resetlogosize(360);">Reset</a></li>


              		</ul>
            	</li>
        	</ul>

        	<ul class="nav navbar-nav">
						<li>
							  <input type="range" id="sliderBar" min="0" max="720" value="360" step="1" value="0" onChange="logosize(this.value);" style="margin-top:15px;"/>
						</li>
        	</ul>

       		<ul class="nav navbar-nav navbar-right">
				<li>
					<a onClick="window.print()">
						<img src="assets/img/print.png">
						 Print / Save 
						 <img src="assets/img/save.png">
					</a>
				</li>
       		</ul>

        </div><!--/.nav-collapse -->
      </div>
    </nav>
</div>

<div id="file"></div>



	

</html>
