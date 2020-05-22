var result = [];

for (var i = 1; i <= 200; i++) {
    var el = '<div class="page-el">'+ i +'</div>';
    result.push(el);
}

$('#content').pagenavjs({
    navContainer: '#pagination',
    pageSize: 5,
    dataSource: result
});
