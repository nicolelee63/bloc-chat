(function() {
  function ModalCtrl(Room, $uibModalInstance) {
    var modal = this;
    modal.cancel = function () {
      $uibModalInstance.dismiss();
    };

    modal.createRoom = function () {
      Room.add(this.newRoom);
      $uibModalInstance.close();
    };
  }

  angular
    .module('bloc-chat')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
