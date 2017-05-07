(function() {
    function HomeCtrl(Room, Message, $uibModal) {
      var home = this;
      this.rooms = Room.all;
      home.currentRoom = null;

      home.addRoom = function() {
        $uibModal.open({
          templateUrl:'/templates/modal.html',
          size:'sm',
          controller:'ModalCtrl as modal'
        });
      }

      home.setCurrentRoom = function (room) {
             home.currentRoom = room;
             home.messages = Message.getByRoomId(home.currentRoom.$id);
             console.log(home.messages)
         }
    }

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
