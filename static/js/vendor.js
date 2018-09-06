$(document).ready(function() {
	$("#圖層_1").hide();
	$("#progressBar").hide();

	$("#startBtn").click(function() {
		$("#submissionForm").submit();
	});
	var percTotal;
	var updateList = function (result) {
		if (result.length > 0) {
			for (let i = 0; i < result.length; i++) {
				$(".result-list").append('<li><b><a href="http://surviv.io/stats/' + result[i][3] + '" target="_blank">'  + result[i][0] + '</a></b> — ' + result[i][1] + 'KDR — <i>last game ' + result[i][2] + ' mins ago</li>');
			}			
		}
	}

	$("#submissionForm").submit(function (e) {
		e.preventDefault();
		percTotal = 0;
		$(".result-list").html("");
		$("#圖層_1").fadeIn('slow');
		$("#progressBar").fadeIn('slow');
		$("#progressBarStatus").attr("aria-valuenow", "0");
		$("#progressBarStatus").attr("style", "width:0%");
		$("#progressStatusText").html("0% Complete");
		var selection = $("input[name=gamemode]:checked").val();
		var payload = {"selection": selection};
		$("#statusText").html("Fetching your results! Please be patient.");
		$.ajax({
			type: "POST",
			url: "/",
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(payload),
		}).done(function () {
			$("#圖層_1").fadeOut('fast');
			$("#statusText").html("Displaying results...");
			$.ajax({
				type: "POST",
				url: "/loadset1"
			}).done(function (res) {	
				updateList(res);
				percTotal = percTotal + 25;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});
			$.ajax({
				type: "POST",
				url: "/loadset2"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 25;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});
			$.ajax({
				type: "POST",
				url: "/loadset3"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 25;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});
			$.ajax({
				type: "POST",
				url: "/loadset4"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 25;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});
		}).fail(function (err) {
			$("#圖層_1").fadeOut('fast');
			$("#statusText").html("Couldn't complete request!", err.responseText);
		});
	});
});