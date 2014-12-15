exports.action = function(data, callback, config){
// Recuperation de la config
	config = config.modules.harmony;
	switch(data.type){
		case "activity":
			var type = " start_activity "+data.id
		break;
		case "device":
			var type = " issue_device_command "+data.id+' '+data.command
		break;
		case "actuel":
			var type = " get_current_activity_id "
		break;
		}
  command = config.user_logitech+' '+config.password_logitech+' '+config.ip_hub+type
  execprocess(command);
  callback({'tts': config.tts});
}
function execprocess(command){
	var exec = require('child_process').exec;
	var process=__dirname+'\\bin\\harmony.exe '+command;
	console.log(process);
	var child = exec(process,
	function (error, stdout, stderr) {
})};