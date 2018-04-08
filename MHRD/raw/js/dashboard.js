function deleteFaq(id){
    // show loader
    showProcessingBar();

    // perform validations... implementation pending..

    var formData = {
        'id': id
    };

    // setup ajax for csrf token
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
                // Only send the token to relative URLs i.e. locally.
                xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
            }
        }
    });

    // AJAX Call
    $.ajax({
        type: 'POST',
        url: '/dashboard/delete-faq/',
        data: formData,
        dataType: 'json',
        success: function(result){
            // hide loader
            hideProcessingBar();

            if (result.result) {
                showSuccessNotification("Success", result.message);

                // reload page
                window.location.reload(true);
            } else {
                showErrorNotification("Error", result.message);
            }
        },
        error: function(result){
            // hide loader
            hideProcessingBar();

            showErrorNotification("Error", result.message);
        },
        complete: function(result){
            console.log("AJAX execution complete.");
        }
    });
}