(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
      this.scrollBottom = function () {
            var element = document.getElementById("chatwin");
            var height = element.scrollHeight;
            element.scrollTop = height - element.clientHeight;
        };

      var home = this;
      this.rooms = Room.all;
      home.currentRoom = null;
      home.currentUser = $cookies.get('blocChatCurrentUser');

      home.addRoom = function() {
        $uibModal.open({
          templateUrl:'/templates/createRoom.html',
          size:'sm',
          controller:'CreateRoomCtrl as modal'
        });
      }

      home.setCurrentRoom = function (room) {
             home.currentRoom = room;
             home.messages = Message.getByRoomId(home.currentRoom.$id);
         }

      home.sendMessage = function (){
        home.newMessage.roomId = home.currentRoom.$id;
        home.newMessage.username = home.currentUser;
        Message.send(home.newMessage);
        home.newMessage.content = null;
        }

      home.Logout = function (){
        $cookies.remove('blocChatCurrentUser');
        window.location.reload();
      }
    }

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal','$cookies', HomeCtrl]);
})();
