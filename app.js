// Quantica Lab – Theme Toggle

(function(){
    var saved = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', saved);

    var btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', function() {
            var current = document.body.getAttribute('data-theme');
            var next = current === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }
})();
