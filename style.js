$('.slider__khach-noi-gi').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
{
  breakpoint: 600,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}
]
});
$(function() {
$('.slider__our-team').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: true,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    dots: true,
    responsive: [
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
        }
    },    
    {
            breakpoint: 900,
            settings: 'unslick'
    }
    ]
});
$(window).on('resize', function() {
    $('.slider__our-team').slick('resize');
});
});
$('#btn-show-tabs').on('click', function(){
    if($('#tab-list').is(".hide")){
        $('#tab-list').removeClass( "hide" ).addClass( "show" );
    }else if($('#tab-list').is(".show")){
        $('#tab-list').removeClass( "show" ).addClass( "hide" );
    }
});
$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    var valTab = $(this).text();

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');

    $('#tab-list').removeClass( "show" ).addClass( "hide" );
    $("#btn-show-tabs span").text(valTab)
});