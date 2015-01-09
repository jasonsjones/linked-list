(function () {
    'use strict';

    function Iterator(theList) {
        this.list = theList;
        this.currentNode = this.list.getHeadNode();
    }

    Iterator.prototype = {

        next: function() {
            var current = this.currentNode;
            this.currentNode = this.currentNode.next;

            return current;
        },

        hasNext: function() {
            return this.currentNode !== null;
        },

        reset: function() {
            this.currentNode = this.list.getHeadNode();
        },

        first: function() {
            this.reset();
            return this.next();
        },

        each: function(callback) {
            this.reset();
            var el;
            while (this.hasNext()) {
                el = this.next();
                callback(el);
            }
        }
    };

    module.exports = Iterator;

})();