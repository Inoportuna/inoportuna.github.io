$(document).ready(function(){ 
		$("#albumPlayer").hide();
		$("#hpqnb").hide();
		$("#luarAlbum").click(function() {
			$("#albumPlayer").fadeIn();
			$('#hpqnb').fadeOut("fast");			
			$('#luar').fadeIn("slow");})
		$("#hpqnbAlbum").click(function() {
			$("#albumPlayer").fadeIn();
			$('#luar').fadeOut("fast");			
			$('#hpqnb').fadeIn("slow");})
});