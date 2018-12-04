
/**
 * Created by rhx on 2018/10/10.
 */

$('.nav .nav_right .nav_list li .special').mouseover(function() {
    $(this).css({
        'color':'red'
    });
    console.log(111);
});
$('.nav .nav_right .nav_list li .special ').mouseout(function() {
    $(this).css({
        'color':'',
    });
    console.log(111);
});
