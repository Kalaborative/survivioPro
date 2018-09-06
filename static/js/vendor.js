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
				var region = result[i][4].toUpperCase();
				var regionHTML;
				if (region == "NA") {
					regionHTML = '<span style="color: blue;">NA</span>';
				} else if (region == "EU") {
					regionHTML = '<span style="color: green;">EU</span>';
				} else {
					regionHTML = '<span style="color: red;">AS</span>';
				}
				$(".result-list").append('<li><b><a href="http://surviv.io/stats/' + result[i][3] + '" target="_blank">'  + result[i][0] + '</a></b>(' + regionHTML + ') — ' + result[i][1] + 'KDR — <i>last game ' + result[i][2] + ' mins ago</li>');
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
				percTotal = percTotal + 5;
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
				percTotal = percTotal + 5;
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
				percTotal = percTotal + 5;
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
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});
			$.ajax({
				type: "POST",
				url: "/loadset5"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});
			$.ajax({
				type: "POST",
				url: "/loadset6"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});
			$.ajax({
				type: "POST",
				url: "/loadset7"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset8"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset9"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset10"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset11"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset12"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset13"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset14"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset15"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset16"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset17"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset18"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset19"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
				$("#progressBarStatus").attr("aria-valuenow", percTotal.toString());
				$("#progressBarStatus").attr("style", "width:" + percTotal.toString() + "%");
				$("#progressStatusText").html(percTotal.toString() + "% Complete");
				if (percTotal == 100) {
					$("#statusText").html("All results loaded.");
				}
			});

			$.ajax({
				type: "POST",
				url: "/loadset20"
			}).done(function (res) {
				updateList(res);
				percTotal = percTotal + 5;
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