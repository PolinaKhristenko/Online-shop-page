
$(document).ready(function() {
    
    $('#tags__toggle').on('click', function (e) {
    const btnLabel = $('.tags-hidden')
        .toggle()
        .is(':visible')
        ? 'Свернуть' : 'Показать еще';
    $(e.target).text(btnLabel);
    });

    $('.main__item-arrow').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });

    $(function(){
        $('#slider').slider({
            range: true,
            min: 0,
            max: 50000,
            values: ['0', '100000'],
            slide: function(event, ui) {
                $('#min').val(ui.values[0]);
                $('#max').val(ui.values[1]);
            }
        });
    });

    if(window.matchMedia('(max-width: 768px)').matches){
        // do functionality on screens smaller than 768px
    }

 
})



