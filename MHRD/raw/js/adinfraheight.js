function disableFormElements(formId){
    var formId = "#" + formId;
    var form = document.querySelector(formId);
    var elements = form.elements;

    for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].disabled = true;
    }
}

function enableFormElements(formId){
    var formId = "#" + formId;
    var form = document.querySelector(formId);
    var elements = form.elements;

    for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].disabled = false;
    }
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function showProcessingBar(){
    document.getElementById('processing').style.visibility="visible";
    $('#processing-loader').addClass('line-scale');
}

function hideProcessingBar(){
    document.getElementById('processing').style.visibility="hidden";
    $('#processing-loader').removeClass('line-scale');
}

function showSuccessNotification(label, text){
    iziToast.success({
        title: label,
        message: text,
        position: 'center',
    });
}

function showErrorNotification(label, text){
    iziToast.error({
        title: label,
        message: text,
        position: 'center',
    });
}