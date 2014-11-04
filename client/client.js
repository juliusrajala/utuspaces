/*
*Messages
*/

Template.messages.messages = function(){
	return Messages.find({}, {sort: {time: -1}});
}

Template.rooms.rooms = function(){
	return Rooms.find({}, {sort: {popularity: 1}});
}
/* TODO: Finish creation of rooms and create message log to fetch per room.

Template.roomAdd.events = {
	var room = document.getElementById("room");

	if(room.value != '' && room.value != ' '){
		Rooms.insert({
			name: name,
			log: Messages.find({id:''} {sort: {time: -1}});
		})
	}
}*/

Template.input.events = {
	'keydown input#message' : function(event){
		if(event.which==13){
			if(Meteor.user()){
				var name = Meteor.user().profile.name;
			}else{
				var name = 'Nyymi';
			}
			var message = document.getElementById('message');

			if(message.value != '' && message.value != ' '){
				Messages.insert({
					name: name,
					message: message.value,
					time: Date.now(),
					// room: roomId;
				});

				document.getElementById('message').value = '';
				message.value='';
			}
		}
	}
}

Template.user_loggedout.events({
	'click #login': function(e, tmpl){
		Meteor.loginWithGithub({
			requestPermissions: ['user', 'public_repo']
		}, function (err){
			if (err){
				//Err handling
			}else{
				//Show an alert
			}
		});
	}
});

Template.user_loggedin.events({
	'click #logout': function(e, tmpl){
		Meteor.logout(function(err){
			if(err){
				//err handling
			}else{
				//Show an alert
			}
		});
	}
});