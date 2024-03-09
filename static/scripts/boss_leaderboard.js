
function importData()
{
	$.ajax(
	{
		url: '/get_data',
		type: 'GET',
		dataType: 'json',
		success: function(res)
		{
			setData(res);
		}
	});
}

function setData(res)
{
	var v1 = ["", "0"];
	var v2 = ["", "0"];
	var v3 = ["", "0"];
	var v4 = ["", "0"];

	for (var key in res)
	{
		if (res[key] > parseInt(v1[1]))
		{
			console.log("Adding " + key + " to first");

			v4 = [v3[0], v3[1]];
			v3 = [v2[0], v2[1]];
			v2 = [v1[0], v1[1]];

			v1[0] = key;
			v1[1] = res[key];
		}
		else if (res[key] > parseInt(v2[1]))
		{
			console.log("Adding " + key + " to second");

			v4 = [v3[0], v3[1]];
			v3 = [v2[0], v2[1]];

			v2[0] = key;
			v2[1] = res[key];
		}
		else if (res[key] > parseInt(v3[1]))
		{
			console.log("Adding " + key + " to third");

			v4 = [v3[0], v3[1]];

			v3[0] = key;
			v3[1] = res[key];
		}
		else if (res[key] > parseInt(v4[1]))
		{
			console.log("Adding " + key + " to fourth");

			v4[0] = key;
			v4[1] = res[key];
		}
	}
	document.getElementById("img1").src = "static/bosses/" + v1[0] + ".png";
	document.getElementById("name1").innerHTML = "#1 - " + v1[0] + ", Average difficulty: " + v1[1];

	document.getElementById("img2").src = "static/bosses/" + v2[0] + ".png";
	document.getElementById("name2").innerHTML = "#2 - " + v2[0] + ", Average difficulty: " + v2[1];

	document.getElementById("img3").src = "static/bosses/" + v3[0] + ".png";
	document.getElementById("name3").innerHTML = "#3 - " + v3[0] + ", Average difficulty: " + v3[1];

	document.getElementById("img4").src = "static/bosses/" + v4[0] + ".png";
	document.getElementById("name4").innerHTML = "#4 - " + v4[0] + ", Average difficulty: " + v4[1];
}