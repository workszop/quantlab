// Quantica Lab – Interactive Effects

// Accordion
(function(){
    document.querySelectorAll('.accordion-trigger').forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            trigger.closest('.accordion-item').classList.toggle('open');
        });
    });
})();

// Theme toggle (light/dark)
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
