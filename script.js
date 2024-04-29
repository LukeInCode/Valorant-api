fetch("https://api.henrikdev.xyz/valorant/v2/mmr/<REGION>/<NAME>/<TAG>")
.then(response => response.json())
.then(data => console.log(data));
