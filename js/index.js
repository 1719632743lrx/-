/**
 * Created by ����ϼ on 2018/10/9.
 */

//tow_title ��ʼ
$('.tow_title').mouseover(function (){
    $('.tow_title').stop().animate({
        top :-10
    },500);
});
$('.tow_title').mouseout(function (){
    $('.tow_title').stop().animate({
        top :0
    },100);
})

//�������ò�Ʒ������Ч��ȥ��
$('.sixpp').on('mouseover','a',function(){
    //ͼƬ�Ŵ�Ч��
    $(this).find('img').stop().animate({
        width :400
    },1000);
    $(this).find('.sxp').stop().animate({
        height :0
    },1000);
    $(this).find('.sxp1').stop().animate({
        height :0
    },1000);
});
//����뿪�ò�Ʒ������Ч���ָ�
$('.sixpp').on('mouseout',function(){
    $(this).find('img').stop().animate({
        width :380
    });
    $(this).find('.sxp').stop().animate({
        height :130
    },1);
    $(this).find('.sxp1').stop().animate({
        height :130
    },1);
});
//tab��������
$(function(){
    $('#myGallery').galleryView();

});



//�ͷ���ϵ����
$('.mini-btn-info').click( function () {
    console.log(111);
    $('.content_left').show();
});
$('.content_left').mouseleave( function () {
    $(this).hide();
});
 var time=new Date();
$('.crrent_time').text(time.toLocaleTimeString());



//��Ʒ��Ϣ����
//$('.brand_box li')
var num1=$('.brand_info').offset().top;
$(window).scroll(function () {


    var num=$(window).scrollTop()+num1;
    if(num>=num1){
        $('.brand_box img').stop().animate({
            top :90
        },6000).show();
    }

    var num3 = $(window).scrollTop();
    if (num3 > 0) {
        //��subnav��ʾ
        $('#backs').show();
    } else {
        //��subnav����
        $('#backs').hide();
    }
    console.log(num3)

});

//�Ŵ󾵲���
$('.main_sed .part').mouseenter(function (){
    $(this).find('.part_btn').css('opacity','1');
    $(this).find('.leftTop').stop().animate({
        left : 10,
        top :10
    },1000);
    $(this).find('.rightTop').stop().animate({
        right : 10,
        top :10
    },1000);
    $(this).find('.rightBot').stop().animate({
        right : 10,
        bottom :80
    },1000);
    $(this).find('.leftBot').stop().animate({
        left : 10,
        bottom :80
    },1000)
});

$('.main_sed .part').mouseleave(function (){
    $(this).find('.part_btn').css('opacity','0');
});




$('#backs').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 200);
    console.log(111);
});
