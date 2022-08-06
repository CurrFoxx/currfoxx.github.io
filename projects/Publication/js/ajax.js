$(document).ready(function () {
    $('#btn_addNews').click(
        function () {
            if (($('#news_title').val() && $('#news_content').val() && $('#news_img').val())) {
                sendAjaxForm('form_newsAdd', 'json_addNews.php');
                return false;
            } else {
                alert("Не все поля были заполнены / не выбрано изображение!");
            }
        }
    );
});

function sendAjaxForm(ajax_form, url) {
    var file_data = $('#news_img').prop('files')[0];
    var form_data = new FormData($('#form_newsAdd')[0]);
    form_data.append('file', file_data);

    $.ajax({
        url: url,
        dataType: 'text',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        type: 'post',
        success: function () {
            $('#' + ajax_form).trigger('reset');
            location.reload();
        }
    });
}