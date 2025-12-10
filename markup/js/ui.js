$(document).ready(function() {

    var _fin = $('.wrapper > .container > .right table tbody tr.fin').length
    var _del = $('.wrapper > .container > .right table tbody tr.del').length
    var _total = $('.wrapper > .container > .right table tbody td.btn a').length
    var _total_page = _total /2 - _del

    $('.projectTit .counter .fin').text(_fin)
    $('.projectTit .counter .total').text(_total_page)

    var ing_percent = _fin / _total_page *100
    var _percent =  Math.round(ing_percent);

    $('.projectTit .counter .percent').text(_percent);

    $('table p.target').each(function () {
        var $this = $(this);
        var url = $this.children('span').text().trim();

        var $thisBtnPc = $this.parent().next().children('.btnPc');
        var $thisBtnMo = $this.parent().next().children('.btnMo');

        // ✅ 언어별 경로 분기
        var basePath = $this.hasClass('en')
          ? 'views/user-en/'
          : 'views/user/';

        var $pcUrl = basePath + url;
        var $moUrl = 'javascript:PopWin("' + $pcUrl + '","400","740","no");';

        $thisBtnPc.on('click', function() {
            $(this).attr('href', $pcUrl);
            $('table tbody td.btn a').not($(this)).removeClass('is-active');
            $(this).addClass('is-active');
        });
        $thisBtnMo.on('click', function() {
            $(this).attr('href', $moUrl);
            $('table tbody td.btn a').not($(this)).removeClass('is-active');
            $(this).addClass('is-active');
        });
    });




    $('.openDevLog').on('click', function() {
        $(this).toggleClass('is-active')
        $('.wrapper > .container').toggleClass('is-active')
    });

});
function PopWin(url, w, h, sb) {
    var newWin;
    var setting = "width="+w+", height="+h+", top=50, left=50, scrollbars="+sb;
    newWin = window.open (url, "", setting);
    newWin.focus();
}