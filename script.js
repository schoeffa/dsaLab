"use strict";

$(document).ready(() => {
    // Creates a queue class
    class Queue {
        constructor() {
            this.list = [];
        }

        add(item) {
            this.list.push(item);
        }

        remove() {
            this.list.shift(this.list[this.list.length - 1]);
        }

        first() {
            return this.list[0];
        }

        last() {
            return this.list[(this.list.length - 1)];
        }

        size() {
            return this.list.length;
        }
    };

    // Refreshes display of current bug to be resolved
    const refreshCurrent = () => {
        if (bugList.size() > 0) {
            $("#currentBug").css("display", "flex");
            $(".bugTitle")[0].innerText = bugList.first().name;
            $(".bugDescription")[0].innerText = bugList.first().description;
        }
        else {
            $("#currentBug").css("display", "none");
            $(".bugTitle")[0].innerText = "";
            $(".bugDescription")[0].innerText = "";
        }
    };

    let bugList = new Queue;

    // Adds a bug object when submit button is clicked and updates display
    $(document).on("click", ".addBug", (event) => {
        let bug = {
            name: $("#newBugTitle")[0].value,
            description: $("#newBugDesc")[0].value
        };
        bugList.add(bug);
        $("#newBugTitle")[0].value = "";
        $("#newBugDesc")[0].value = "";
        refreshCurrent();
    });

    // Removes bug from queue when resolve button is clicked and updates display
    $(document).on("click", "#resolve", (event) => {
        bugList.remove();
        refreshCurrent();
    });
})