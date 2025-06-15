tinymce.init({
    selector: 'textarea#default',
    width: 1300,
    height: 500,
    toolbar: 'undo redo | styles | bold italic underline | ' + 'forecolor backcolor emoticons',
    menu: {
        favs: {title: 'Menu', items: 'code visualaid | searchreplace | emoticons'}
    },
    content_style: 'body{font-family:Helvetica,Arial,sans-serif; font-size:16px}'
});