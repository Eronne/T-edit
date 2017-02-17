/* Actions .tool-1 */
$('#bold').on('click', function() {
    document.execCommand('bold', false, null);
});

$('#italic').on('click', function() {
    document.execCommand('italic', false, null);
});

$('#underline').on('click', function() {
    document.execCommand('underline', false, null);
});



/* Actions .tool-2 */
$('#fonts').on('change', function() {
    var font = $(this).val();
    document.execCommand('fontName', false, font);
});

$('#size').on('change', function() {
    var size = $(this).val();
    $('.area').css('font-size', size + 'px');
});



/* Actions .tool-3 */
$('#align-left').on('click', function () {
    document.execCommand('justifyLeft', false, null);
});

$('#align-center').on('click', function () {
    document.execCommand('justifyCenter', false, null);
});

$('#align-right').on('click', function () {
    document.execCommand('justifyRight', false, null);
});



/* Actions .tool-4 */
$('#list-ul').on('click', function () {
    document.execCommand('insertUnorderedList', false, null);
});

$('#list-ol').on('click', function () {
    document.execCommand('insertOrderedList', false, null);
});