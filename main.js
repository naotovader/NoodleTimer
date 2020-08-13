var clickTime;
$(".card").click(function() {
    $(this).toggleClass('rotate');
    clickTime = moment().format('LLLL LTS');
    console.log(clickTime);
});
