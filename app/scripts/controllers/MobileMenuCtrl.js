( function() {
    function MobileMenuCtrl($uibModal, Room, $uibModalInstance, $cookies) {
      var menu = this;
      menu.addRoom = function() {
        $uibModal.open({
          templateUrl:'/templates/createRoom.html',
          size:'sm',
          controller:'CreateRoomCtrl as modal',
          controllerAs: 'new'
        });
      }

      menu.closeWindow = function(){
        $uibModalInstance.close();
      }

        menu.Logout = function() {
          $cookies.remove('blocChatCurrentUser');
          $uibModalInstance.close();
          window.location.reload();
        };
    }

    angular
        .module('bloc-chat')
        .controller('MobileMenuCtrl',['Room', '$uibModal', '$uibModalInstance', '$cookies', MobileMenuCtrl]);
})();
