document.getElementById('lang-toggle').addEventListener('click', function() {
    const root = document.getElementById('page-root');
    const currentLang = root.getAttribute('lang');
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    const newDir = currentLang === 'ar' ? 'ltr' : 'rtl';
    
    // 1. تغيير السمات الأساسية للموقع (اللغة والاتجاه)
    root.setAttribute('lang', newLang);
    root.setAttribute('dir', newDir);
    
    // 2. تحديث نص زر التبديل وعنوان الموقع
    this.textContent = currentLang === 'ar' ? 'العربية' : 'English';
    document.getElementById('site-title').textContent = newLang === 'ar' ? 'الموقع الشخصي | ريناد القحطاني' : 'Personal Portfolio | Renad Alqahtani';

    // 3. تبديل اللوجو كحالة خاصة
    const logo = document.querySelector('.logo');
    logo.textContent = newLang === 'ar' ? 'ريناد القحطاني' : 'Renad Alqahtani';

    // 4. المرور على كل العناصر التي تحتوي على ترجمة وتبديل نصوصها
    const translatableElements = document.querySelectorAll('[data-ar]');
    translatableElements.forEach(elem => {
        if (newLang === 'en') {
            elem.textContent = elem.getAttribute('data-en');
        } else {
            elem.textContent = elem.getAttribute('data-ar');
        }
    });
});