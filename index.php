<!DOCTYPE html>
<html>
<head>
	<title>Map</title>
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
	<link rel="shortcut icon" href="ico/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="css/map-icons.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<!-- <script language="JavaScript" type="text/javascript" src="js/modernizr.custom.js"></script> -->
    <!-- <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&libraries=places"></script> -->
</head>
<body>
	<div id="loading"></div>
	<div id="content">
		<div id="search">
			<input id="search-input" type="search" results="5" name="search" placeholder="Search..." />
		</div>
		<div id="map"></div>
	</div>
	<div id="sidebar"></div>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script type="text/javascript" src="js/jquery.1.9.1.min.js"><\/script>')</script>
	<script language="JavaScript" type="text/javascript" src="js/mousetrap.min.js"></script>
	<script language="JavaScript" type="text/javascript" src="js/functions.js"></script>
</body>
</html>