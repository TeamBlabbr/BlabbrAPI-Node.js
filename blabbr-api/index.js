// Copyright (c) Team Blabbr
// Please read License.txt Before use

const fetch = require('node-fetch');


exports.sendmessage = function(username, room, content){
	var url = "https://blabbr.xyz/api/send?username="+username+"&room="+room+"&msg="+content;
	fetch(url, { method: "Get" })
}