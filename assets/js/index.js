$(document).ready(function(){
    
    /**
     * Responsive Navigation
     */ 
    document.querySelector('#menu-toggle').addEventListener('click', function(e){

        $('.g-nav').slideToggle(200);

        $(document).one('click', function(){
            $('.g-nav').slideUp(200);
        });

        e.stopPropagation();
    });

    document.querySelector('.g-nav').addEventListener('click', function(e){
        e.stopPropagation();
    });
    
    /*
    *  Header Bar
    */
    if(window.innerWidth > 695) {

        var header = document.querySelector('.g-header');
        var header_h = header.getBoundingClientRect().height;

        var themeColorFlag = /*$('.g-banner').attr('data-theme');*/ 'pink';

        var scFlag = $(document).scrollTop();

        document.addEventListener('scroll', function(){

            var scrollTop = $(this).scrollTop();

            if(scrollTop > header_h) {

                if(scrollTop > 3*header_h) {
                    header.classList.add('headerUp');
                }
                header.setAttribute('style', 'background-color: rgba(255, 255, 255, .98); box-shadow: 0 1px 12px rgba(0, 0, 0, .08)');
                header.classList.add('has-bg'); // ME
                document.querySelector('.g-nav').classList.add('nav-' + themeColorFlag);

            }else{
                header.classList.remove('has-bg'); // ME

                header.classList.remove('headerUp');
                header.setAttribute('style', '');
                document.querySelector('.g-nav').classList.remove('nav-' + themeColorFlag);

            }
            // scroll action
            if(scFlag > scrollTop) {
                header.classList.add('headerDown');
            }else{
                header.classList.remove("headerDown");
            }
            scFlag = scrollTop;
        }, {
            passive: true
        });
    }

    /**
     * Pagination
     */
    function pagination() {
        var total = parseInt(document.querySelector('#total_pages').value),
            current = parseInt(document.querySelector('#current_pages').value),
            //baseUrl = $('#base_url').val(),
            baseUrl = '/',
            limit = 3;

        var link_html = '';

        for(var i = current - limit; i<current; i++) { 
            if(i>0 && i!==1) {
                link_html += '<a href="' + baseUrl + 'page' + i + '" class="page-link page-num">' + i + '</a>';
            }else if(i===1) {
                link_html += '<a href="' + baseUrl + '" class="page-link page-num">' + i + '</a>';
            }
        }

        link_html += '<span class="page-link page-num active">' + current + '</span>';

        for(var j = current + 1; j<=current + limit; j++) { 
            if(j<=total) {
                link_html += '<a href="' + baseUrl + 'page' + j + '" class="page-link page-num">' + j + '</a>';
            }
        }
        
        document.querySelector('#page-link-container').innerHTML = link_html;
    }
    pagination();

    /**
     * Search
     */  
    function Search() {
        var self = this,
            input = $('#search_input'),
            result = $('.search_result');
        
        input.focus(function() {
            $('.icon-search').css('color', '#3199DB');
            result.show();
        });

        input.keyup(debounce(this.autoComplete));

        $(document).click(function(e) {
            if(e.target.id === 'search_input' || e.target.className === 'search_result' || e.target.className === 'search_item') {
                return;
            }
            $('.icon-search').css('color', '#CAD3DC');
            result.hide();
        });
    }

    Search.prototype.autoComplete = function() {
        var keywords = this.value.toLowerCase();
        
        if(keywords.length) {
            $('.icon-search').css('color', '#3199DB');
        }else{
            $('.icon-search').css('color', '#CAD3DC');
        }

        $.getJSON('../../search.json').done(function(data) {
            var html = '';
            for (var i in data) {
                var item = data[i],
                    title = item.title,
                    tags = item.tags,
                    url = item.url;

                var k = title + tags;
                if(keywords !== '' && k.toLowerCase().indexOf(keywords) >= 0) {
                    html += '<a class="search_item" href="' + item.url + '">' + item.title + '</a>';
                }
            }
            $('.search_result').html(html);
        });
    };

    function debounce(fn, delay) {
        var timer;
        delay = delay || 120;

        return function() {
            var ctx = this,
                args = arguments,
                later = function() {
                    fn.apply(ctx, args);
                };
            clearTimeout(timer);
            timer = setTimeout(later, delay);
        };
    }

    new Search();
});