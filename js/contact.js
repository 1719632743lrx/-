/**
 * Created by 李瑞霞 on 2018/10/4.
 */
//给发送按钮设置点击事件
$('.btn1').click( function() {
    var $box=$('<div></div>');
    $box.addClass('oneself');
    var $image=$('<img>');
    $image.attr({
        src:'./img/timg.jpg',
        width :40+'px',
        height :40+'px',

    });
    var  div = document.createElement('div');
    div.className='sayword';
    var word=document.querySelector('.word');

    div.innerText=word.value;
    $image.addClass('active');
    $box.append($image);
    $box.append(div);
    $box.show();
    $('.main_box').append($box)
    word.value='';
    $('.main_box').scrollTop( $('.main_box')[0].scrollHeight );
});

$('.btn2').click( function (){
    var word=document.querySelector('.word');
    word.value='';
});