( function() {
    function UserCtrl($cookies, $firebaseAuth, $uibModalInstance, $uibModal) {

        var auth = $firebaseAuth();

        this.validUser = function(userInfo) {
            if (userInfo) {
                auth.$signInWithEmailAndPassword(this.email, this.password).then(
                    function(firebaseUser) {

                        var currentUsername = firebaseUser.displayName;
                        $cookies.put('blocChatCurrentUser', currentUsername);

                        window.location.reload();

                }).catch(function(error) {
                    alert(error);
                });
            }
        };

        this.newAccount = function() {
            var newAccountModal = $uibModal.open({
                templateUrl: '/templates/newAccount.html',
                controller: 'NewAccountCtrl',
                controllerAs: 'new',
                backdrop: 'static',
                size: 'sm'
            });
            newAccountModal.result.then(function(userInfo) {

                var newUser = userInfo.username;
                this.email = userInfo.email;
                this.password = userInfo.password;
                this.confirmPassword = userInfo.confirmPassword;
                if (this.password == this.confirmPassword) {
                    auth.$createUserWithEmailAndPassword(this.email, this.password).then(
                        function(firebaseUser) {
                            firebaseUser.updateProfile({
                                displayName: newUser
                            });
                            $cookies.put('blocChatCurrentUser', newUser);
                            alert("Successfully created account!");
                            $uibModalInstance.close();
                            window.location.reload();
                        }).catch(function(error) {
                        console.log(error);
                    });
                } else {
                    alert("Password does not match. Please try again");
                }
            });
        };
    }

    angular
        .module('bloc-chat')
        .controller('UserCtrl', ['$cookies', '$firebaseAuth', '$uibModalInstance', '$uibModal',  UserCtrl]);
})();
