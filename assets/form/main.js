//Передача инфо о кнопке в модальное окно
$(function() {
    $('.header-right-btn').click(function() {
        var parent = $(this).attr('data-parent');
        var modal = $(this).attr('data-target')
        $(modal).find('input[name=target]').val(parent);
    })
});
