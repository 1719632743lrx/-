/**
 * Created by rhx on 2018/10/9.
 */
//��С��ť���õ���¼�
$('.i_content').click(function () {
    $('#i-all')
        //���������֮ǰ�Ķ���
        .stop()
        .animate({
            height:0
        },function() {
            $('.i_content')
                .hide();
        });
});

//��ҳ��ע��scroll�¼�
$(window).scroll(function () {
    if($(window).scrollTop()>0) {
        //$('#i-all')
        //    //���������֮ǰ�Ķ���
        //    .stop()
        //    .animate({
        //        height:0,
        //        //opacity: 0
        //    },function() {
        //        //������
        //        $('body,html')
        //            .animate({
        //                scrollTop:0
        //            },0,function() {
        //                $('.i_content')
        //                    .hide();
        //            });
        //    });

        $('#i-all')
            //���������֮ǰ�Ķ���
            .stop()
            .animate({
                height:0
            },function() {
                $('.i_content')
                    .hide();
            });
    };
});



