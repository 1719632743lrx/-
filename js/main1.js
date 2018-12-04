//标题部分的js

$('.tit').mouseover(function() {
    $(this).animate({
        top:-10
    })
});
$('.tit').mouseout(function() {
    $(this).animate({
        top:0
    })
});

//方块的js

$('.part').mouseenter(function() {
    $(this)
        .stop()
        .find('.zzdh')
        .stop()
        .slideDown(100);
});

$('.part').mouseleave(function() {
    $(this)
        .stop()
        .find('.zzdh')
        .stop()
        .slideUp(1);
});
