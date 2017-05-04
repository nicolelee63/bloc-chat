(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;

    }

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
