/**
 * Created by rhx on 2018/10/9.
 */
//给小按钮设置点击事件
$('.i_content').click(function () {
    $('#i-all')
        //首先先清除之前的动画
        .stop()
        .animate({
            height:0
        },function() {
            $('.i_content')
                .hide();
        });
});

//给页面注册scroll事件
$(window).scroll(function () {
    if($(window).scrollTop()>0) {
        //$('#i-all')
        //    //首先先清除之前的动画
        //    .stop()
        //    .animate({
        //        height:0,
        //        //opacity: 0
        //    },function() {
        //        //有问题
        //        $('body,html')
        //            .animate({
        //                scrollTop:0
        //            },0,function() {
        //                $('.i_content')
        //                    .hide();
        //            });
        //    });

        $('#i-all')
            //首先先清除之前的动画
            .stop()
            .animate({
                height:0
            },function() {
                $('.i_content')
                    .hide();
            });
    };
});



