//��׼��������
var banner = document.querySelector('#banner'); // �ֲ���
var list = document.querySelector('#list'); // �����ֲ���ul
var btnLeft = document.querySelector('#btnLeft'); // ��ఴť
var btnRight = document.querySelector('#btnRight'); // �Ҳఴť
var links = document.querySelectorAll('.control a'); // һ��С�㰴ť
var control = document.querySelector('.control');  // һ��С�㰴ť��Ԫ��
var index = 0; // ��ʶ��ǰ��ʾ���Ǹ��ֲ���
// ������1������Ҳఴťʵ���ֲ���
// 1 ���Ҳఴťע�����¼�
btnRight.onclick = function () {
    // 1.0 �ж��Ƿ��Ǵӵ�0�ʼ�ֲ������Ǵӵ�0�ʼ�ֲ������Ȱ�ul��leftֵ����Ϊ0���ٴ�0�˶���-790
    if (index == 0) {
        list.style.left = 0 + 'px';
    }
    // 1.1 �ȰѸ���֮ǰ��a�ָ�Ĭ����ʽȥ��active����
    links[index].className = '';
    // 2 ����index ++
    index++;
    // 3 ����Ŀ��ֵ
    var v = index * -1366;
    // 4 �����˶�ul
    move(list, v);
    // 5.��++֮�����һ��ͻ����ʾ����������active
    // ����ǵ�����һ�������indexΪ0 ����Ϊ������һ��͵�0����һ���ģ�
    if (index == 6) {
        index = 0;
    }
    links[index].className = 'active';
};


// ������2�������ఴťʵ���ֲ���
// 1. ����ఴťע���¼�
btnLeft.onclick = function () {
    // 2. �ѵ�ǰ��ʾ���ֲ����Ӧ��a�ָ�Ĭ����ʽ,ȥ������active
    links[index].className = '';
    // 3. index--
    index--;
    // 4. ����Ƿ�С��0����С��0�������л������һ�����ul��leftֵΪ-5530px�������˶�����6�6 * -790��
    if (index < 0) {
        list.style.left = '-8196';
        index = 5;
    }
    // 5. ����Ŀ��ֵ
    var v = index * -1366;
    // 6. ����ul����Ŀ��ֵ
    move(list, v);

    // 7. ��һ���aҪͻ����ʾ,��������active
    links[index].className = 'active';
};

// ������3�����С�㰴ťʵ���ֲ���
// 1. ��ÿһ��С�㰴ť���һ������num��ʾ������һ��������
for (var i = 0; i < links.length; i++) {
    links[i].num = i;
}
// 2. ������Ϊcontrol��divע���¼�
control.onclick = function (e) {
    // 3. ͨ���¼������target��ȡ���ȴ�����Ԫ��
    var t = e.target;
    // 4. ͨ��nodeName����Ƿ���A
    if (t.nodeName == 'A') {
        // 5. ����A��ʼ�����ֲ�
        // 5.1 ��index�����֮ǰ����ʾ���Ӧ��aȥ������active
        links[index].className = '';
        // 5.2 �ı�indexΪ��ǰ�����aԪ�ص�num����
        index = t.num;
        // 5.3 ����Ŀ��ֵ
        var v = index * -1366;
        // 5.4 �˶�ul����Ŀ��ֵ
        move(list, v);
        // 5.5 �ı�����ʾ���Ӧ��aҪ����active����
        links[index].className = 'active';
    }

};

// ������4���Զ��ֲ���
var flag = setInterval(function () {
    // ÿ���3�����һ���Ҳఴť�ĵ���¼�����
    btnRight.onclick();
}, 1000);


// ������5��������banner��ֹͣ�ֲ���
banner.onmouseenter = function () {
    clearInterval(flag);
};

// ������6������뿪banner�������ֲ���
banner.onmouseleave = function () {
    flag = setInterval(function () {
        // ÿ���3�����һ���Ҳఴť�ĵ���¼�����
        btnRight.onclick();
    }, 1000);

};
