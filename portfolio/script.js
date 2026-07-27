// 1 // مستمع الحدث لزر تبديل اللغة والاتجاه
document.getElementById('lang-toggle').addEventListener('click', function() {
    const root = document.documentElement;
    const currentLang = root.getAttribute('lang');
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    const newDir = currentLang === 'ar' ? 'ltr' : 'rtl';

    root.setAttribute('lang', newLang);
    root.setAttribute('dir', newDir);

    // 2 // تحديث نص زر التبديل وعنوان الموقع
    this.textContent = currentLang === 'ar' ? 'العربية' : 'English';
    document.getElementById('site-title').textContent = newLang === 'ar' ? 'ريناد القحطاني' : 'Renad Alqahtani';

    // 3 // تبديل اللوجو كحالة خاصة
    const logo = document.querySelector('.logo');
    logo.textContent = newLang === 'ar' ? 'ريناد القحطاني' : 'Renad Alqahtani';

    // 4 // المرور على كل العناصر التي تحتوي على ترجمة وتبديل نصوصها
    const translatableElements = document.querySelectorAll('[data-ar]');
    translatableElements.forEach(elem => {
        if (newLang === 'en') {
            elem.textContent = elem.getAttribute('data-en');
        } else {
            elem.textContent = elem.getAttribute('data-ar');
        }
    });
}); // <--- هذا القوس يغلق دالة تبديل اللغة بشكل صحيح ومستقل هنا

// 5 // تأثير الظهور الانسيابي المتسلسل لنص (من أنا) عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animated-text');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.2 });

    const aboutText = document.querySelector(".about-text-animated");
    if (aboutText) observer.observe(aboutText);
});
