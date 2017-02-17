    $('.export').on('click', function(){
        $('<a />').attr({
            download: 'export.docx',
            href: "data:text/docx," + $('.area').html()
        })[0].click()
    });