( function() {
    function CreateRoomCtrl(Room, $uibModalInstance) {
      var modal = this;
        modal.createRoom = function(name) {
            Room.add(modal.newRoom);
            $uibModalInstance.close();
        };

        modal.cancel = function() {
            $uibModalInstance.close();
        };
    }

    angular
        .module('bloc-chat')
        .controller('CreateRoomCtrl',['Room', '$uibModalInstance', CreateRoomCtrl]);
})();
