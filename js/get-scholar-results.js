function get_information()
{
    var obj = document.createElement('object');
    obj.data = https://scholar.google.nl/citations?user=IEINW94AAAAJ&hl=en;
    document.getElementsByTagName('body')[0].appendChild(obj)
    var some_id = document.getElementById('gsc_bdy');
    if (! some_id) {
        alert("some_id == NULL");
        return "";
    }
    return some_id.innerHTML;
}