var chatOpen = (function() {

    // tests to see if local storage is available
    function localStorageTest(){
        var test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch(e) {
            return false;
        }
    }

    return {
        // get the status of the chat window
        getStatus: function() {
            if (localStorageTest()) {
                status = localStorage.getItem('chatOpen');
                /**
                 * localStorage handles strings. Type return values as booleans and allow for booleans to be stored in
                 *  future browsers.
                 */
                if (status === 'null' || (status === null && typeof(status) === 'object')) {
                    // initial load
                    chatOpen.setStatus(false);
                    return false;
                }
                else if (status === 'false') {
                    // window is shut
                    return false;
                }
                else if (status === 'true') {
                    // window is open
                    return true;
                }
                // return boolean if that is what has been stored
                return status;
            }
        },
        // set the status of the chat window
        setStatus: function(status) {
            if (localStorageTest()) {
                localStorage.setItem('chatOpen', status);
            }
        },
        // toggle the status
        toggleStatus: function() {
            var status = chatOpen.getStatus();
            chatOpen.setStatus(!status);
        }
    }

})();

