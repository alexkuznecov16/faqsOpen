const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => { // ForEach - для каждого вопроса
    faq.addEventListener('click', () => { // добавить для каждого контейнера faq при клике на контейнер событие
        faq.classList.toggle('active'); // toogle = переключатель;
    })
})