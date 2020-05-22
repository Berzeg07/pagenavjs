# Pagenavjs
My simple pagination jQuery plugin

## View
![Иллюстрация к проекту](https://github.com/berzeg07/pagenavjs/raw/master/img/view.jpg)

## Usage

```
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

```

## Example

https://berzeg07.github.io/pagenavjs/


***
