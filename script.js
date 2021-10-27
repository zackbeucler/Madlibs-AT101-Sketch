// script.js


const nounArr = ["Mickey Mouse", "Joe Biden", "dog", "cat", "Spongebob", "Patrick Star", "Prof. Kit Son Lee"];
const verbArr = ["swimming", "jumping", "texting", "sitting", "drinking", "running", "reading", "writting"];
const adjArr = ["blue", "yellow", "large", "small", "smelly", "good", "bad", "so-so", "old", "new"];



$(document).ready(function() {


    $(".btn").click(function(e) {
        e.preventDefault();
        $("span.noun").each(function() {
            var randomIndex = Math.floor(Math.random() * nounArr.length);
            $(this).text(nounArr[randomIndex]);
        });
        $("span.verb").each(function() {
            var randomIndex_v = Math.floor(Math.random() * verbArr.length);
            $(this).text(verbArr[randomIndex_v]);
        });
        $("span.adj").each(function() {
            var randomIndex_a = Math.floor(Math.random() * adjArr.length);
            $(this).text(adjArr[randomIndex_a]);
        });
        
    });


    $(".real-news").hover(() => {
        $('.frame').css("display", "block")
    }, () => {
        $('.frame').css("display", "none")
    });

    $('body').css('background-color', 'lightgreen');

});