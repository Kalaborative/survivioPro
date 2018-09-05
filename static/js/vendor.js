$(document).ready(function() {
	$("#圖層_1").hide();

	$("#startBtn").click(function() {
		$("#submissionForm").submit();
	});

	$("#submissionForm").submit(function (e) {
		e.preventDefault();
		$(".result-list").html("");
		$("#圖層_1").fadeIn('slow');
		var selection = $("input[name=gamemode]:checked").val();
		var payload = {"selection": selection};
		$("#statusText").html("Fetching your results! Please be patient.");
		$.ajax({
			type: "POST",
			url: "/",
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(payload)
		}).done(function (res) {
			$("#圖層_1").fadeOut('fast');
			$("#statusText").html("Results complete!");
			for (let i = 0; i < res.length; i++) {
				$(".result-list").append('<li><b><a href="http://surviv.io/stats/' + res[i][3] + '">'  + res[i][0] + '</a></b> — ' + res[i][1] + 'KDR — <i>last game ' + res[i][2] + ' mins ago</li>');
			}
		}).fail(function () {
			$("#圖層_1").fadeOut('fast');
			$("#statusText").html("Couldn't complete request! Check your connection to surviv.io.")
		});
	});
});