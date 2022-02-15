$(function () {
    AOS.init();

    $(".main-visual").vegas({
        timer: false,
        // ぼかし
        transition: 'blur',
        transitionDuration: 2000,
        delay: 10000,
        // サイズ大⇒小 動かす
        animation: 'kenburns',
        animationDuration: 10000,
    slides: [
        { src: "./img/photo01.jpg" },
        { src: "./img/photo011.jpg" },
        { src: "./img/photo012.jpg" },
        ]
    });

    $(document).ready(function() {
        $('.drawer').drawer();
    });
})