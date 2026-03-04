/**
 * Etinngrill — Script
 * Handles: mobile menu, smooth scroll, scroll animations, carousel, lightbox, i18n
 */

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       i18n — Translation System
       ========================================= */
    const translations = {
        tr: {
            'nav.features': 'Etinngrill',
            'nav.sis': 'Şiş Aparatı',
            'nav.gallery': 'Galeri',
            'nav.contact': 'İletişim',
            'hero.title': 'Etinngrill Hareketli Mangal: Mangal Keyfinde Yeni Nesil Dönem!',
            'hero.p1': 'Açık hava etkinliklerinize sınıf atlatacak, devrim niteliğindeki <strong>Etinngrill Hareketli Mangal</strong> ile tanışın. Yenilikçi tasarımıyla hem kullanım kolaylığı hem de eşsiz bir lezzet deneyimi sunan Etinngrill, her mangal tutkununun yeni favorisi olacak!',
            'hero.h2': 'Çift Fonksiyonlu Tasarım: İster Izgara, İster Şiş Kebap!',
            'hero.p2': 'Geleneksel mangalları bir kenara bırakın. Yeni nesil üretimlerimizde çok yönlülüğü standart hale getirdik:',
            'hero.li1': '<strong>Standart Izgara Keyfi:</strong> Klasik ızgara teliyle en lezzetli etleri, tavukları ve sebzeleri mühürleyin.',
            'hero.li2': '<strong>Yeni Şiş Aparatı Sistemi:</strong> Özel olarak tasarlanan şiş aparatımız sayesinde mangalınızı saniyeler içinde şiş kebap moduna dönüştürebilirsiniz.',
            'hero.li3': '<strong>Esnek Kullanım:</strong> Dileyen kullanıcılarımız için yalnızca standart ızgara sistemiyle, dileyenler için ise şiş ve şiş takma aparatı dahil tam set olarak gönderim yapıyoruz.',
            'hero.p3': 'Tek bir mangal, iki farklı kullanım! Artık hem klasik ızgaranızı yapabilir hem de profesyonel bir kebap ustası gibi şişlerinizi hazırlayabilirsiniz.',
            'hero.cta': 'WhatsApp üzerinden ya da aşağıdaki e-ticaret linklerinden hemen sipariş verebilirsiniz.',
            'features.title': 'Standart Model (Etinngrill Mangal)',
            'features.f1': '<strong>Kalite.</strong> 1,5mm kalınlığında Paslanmaz Çelik (AISI 430 – EN 1.4016) malzemeden imal edilmiştir!',
            'features.f2': '<strong>Konsept.</strong> Tek hareket ile tel ızgarayı otomatik döndürebilir; etleri teker teker çevirme zahmetinden kurtulursunuz!',
            'features.f3': '<strong>Dizayn.</strong> Ateşin konulduğu tava kısmı yukarı aşağı hareket ettirilebilir; ateş ayarı yaparak istediğiniz kıvamda etlerinizi pişirebilirsiniz!',
            'features.f4': '<strong>Rahatlık.</strong> Tava kısmı çekmecelidir ve kolayca yerinden çıkarılabilir; kül dökme ve temizlik işlemlerini rahatlıkla yapabilirsiniz!',
            'features.f5': '<strong>Kolaylık.</strong> Tel ızgarayı kolayca yerinden çıkarabilir; etleri direk ızgara üzerinden masaya servis yapabilirsiniz!',
            'features.f6': '<strong>Güvenli.</strong> Hareketli kolu basılı bırakarak ızgarayı dik konumda tutabilir; ani ateş parlamasından etleri korur ve köze direk yukarıdan kolayca müdahale edebilirsiniz!',
            'features.f7': '<strong>Standart.</strong> Izgara teli ölçüleri standart ölçü olan 40×30cm ebadındadır. Izgara teli yıprandığında piyasadan rahatlıkla alabileceğiniz yeni ızgara telini kullanabilirsiniz!',
            'sis.title': 'Şiş Aparatlı Model',
            'sis.s1': 'Özel şiş aparatımız ile artık <strong>şiş kebap</strong> yaparkende ateş ayarı ve döndürme kolaylığından faydalanın.',
            'sis.s2': 'Tek seferde <strong>7 adet</strong> şiş takılabilir.',
            'sis.s3': 'Şiş kebabın heryeri <strong>eşit şekilde</strong> ateş görecek yapıdadır.',
            'sis.s4': 'Şiş ve aparatın özel yapısından dolayı fazla yağlar <strong>kanallardan süzülür.</strong>',
            'sis.s5': '<strong>Kilitli şiş ve aparat</strong> sayesinde dönüş esnasında şişler yerkerinden çıkmaz.',
            'sis.s6': 'Şişlerimiz <strong>304 Kalite</strong> gıdaya uygun paslanmaz çeliktir.',
            'sis.s7': 'Şişler <strong>2mm kalınlığında</strong> ve <strong>20mm genişliğindedir.</strong>',
            'gallery.title': 'Galeri',
            'contact.whatsapp': '<strong>WhatsApp:</strong>',
            'contact.address': '<strong>Adres:</strong>',
            'contact.address1': 'Dudullu OSB, 3. Cadde, And San. Sitesi',
            'contact.address2': 'Ümraniye / İstanbul / Türkiye',
            'footer.copyright': '© 2024 <strong>Etinngrill.</strong> Tüm hakları saklıdır.'
        },
        en: {
            'nav.features': 'Etinngrill',
            'nav.sis': 'Skewer Attachment',
            'nav.gallery': 'Gallery',
            'nav.contact': 'Contact',
            'hero.title': 'Etinngrill Dynamic Grill: A New Generation Era in Grilling Pleasure!',
            'hero.p1': 'Meet the revolutionary <strong>Etinngrill Dynamic Grill</strong> that will upgrade your outdoor activities. Offering both ease of use and a unique flavor experience with its innovative design, Etinngrill will be the new favorite of every grill enthusiast!',
            'hero.h2': 'Dual-Function Design: Whether Grill or Shish Kebab!',
            'hero.p2': 'Leave traditional grills aside. We have made versatility standard in our new generation products:',
            'hero.li1': '<strong>Standard Grill Pleasure:</strong> Sear the most delicious meats, chickens, and vegetables with the classic grill wire.',
            'hero.li2': '<strong>New Skewer Attachment System:</strong> Thanks to our specially designed skewer attachment, you can transform your grill into shish kebab mode in seconds.',
            'hero.li3': '<strong>Flexible Use:</strong> We ship it as a standard grill system for users who wish, or as a full set including skewers and attachment for those who want more.',
            'hero.p3': 'One grill, two different uses! Now you can both enjoy classic grilling and prepare your skewers like a professional kebab master.',
            'hero.cta': 'You can order now via WhatsApp or through the e-commerce links below.',
            'features.title': 'Standard Model (Etinngrill Grill)',
            'features.f1': '<strong>Quality.</strong> Manufactured from 1.5mm thick Stainless Steel (AISI 430 – EN 1.4016)!',
            'features.f2': '<strong>Concept.</strong> Automatically flip the grill grate with a single motion; no more hassle of turning each piece of meat one by one!',
            'features.f3': '<strong>Design.</strong> The fire tray can be moved up and down; adjust the heat and cook your meat to perfection!',
            'features.f4': '<strong>Comfort.</strong> The tray slides out and is easily removable; ash disposal and cleaning made effortless!',
            'features.f5': '<strong>Convenience.</strong> Easily remove the grill grate; serve meat directly from the grate to the table!',
            'features.f6': '<strong>Safety.</strong> Hold the movable handle to keep the grate upright; protect the meat from sudden flare-ups and easily access the coals from above!',
            'features.f7': '<strong>Standard.</strong> Grill grate dimensions are the standard 40×30cm. When the grate wears out, you can easily buy a replacement from the market!',
            'sis.title': 'Skewer Attachment Model',
            'sis.s1': 'Enjoy the convenience of heat adjustment and easy turning when making <strong>shish kebab</strong> with our special skewer attachment.',
            'sis.s2': '<strong>7 skewers</strong> can be loaded at once.',
            'sis.s3': 'The shish kebab is exposed to heat <strong>evenly</strong> from all sides.',
            'sis.s4': 'Thanks to the special design, excess fat <strong>drains through the channels.</strong>',
            'sis.s5': 'With the <strong>locking skewer and attachment</strong>, skewers don\'t come loose during rotation.',
            'sis.s6': 'Our skewers are made of <strong>304 Quality</strong> food-grade stainless steel.',
            'sis.s7': 'Skewers are <strong>2mm thick</strong> and <strong>20mm wide.</strong>',
            'gallery.title': 'Gallery',
            'contact.whatsapp': '<strong>WhatsApp:</strong>',
            'contact.address': '<strong>Address:</strong>',
            'contact.address1': 'Dudullu OSB, 3rd Street, And Industrial Complex',
            'contact.address2': 'Ümraniye / Istanbul / Turkey',
            'footer.copyright': '© 2024 <strong>Etinngrill.</strong> All rights reserved.'
        },
        ar: {
            'nav.features': 'إتينجريل',
            'nav.sis': 'ملحق الأسياخ',
            'nav.gallery': 'المعرض',
            'nav.contact': 'اتصل بنا',
            'hero.title': 'شواية إتينجريل المتحركة: عصر جديد من متعة الشواء!',
            'hero.p1': 'تعرفوا على <strong>شواية إتينجريل المتحركة</strong> الثورية التي سترتقي بأنشطتكم الخارجية. بفضل تصميمها المبتكر الذي يوفر سهولة الاستخدام وتجربة مذاق فريدة، ستصبح إتينجريل الخيار المفضل الجديد لكل عشاق الشواء!',
            'hero.h2': 'تصميم مزدوج الوظائف: سواء للشواء التقليدي أو لكباب الأسياخ!',
            'hero.p2': 'اتركوا الشوايات التقليدية جانباً. لقد جعلنا تعدد الاستخدامات معياراً في إنتاجاتنا من الجيل الجديد:',
            'hero.li1': '<strong>متعة الشواء القياسية:</strong> اشوِ أشهى اللحوم والدجاج والخضروات باستخدام شبكة الشواء الكلاسيكية.',
            'hero.li2': '<strong>نظام ملحق الأسياخ الجديد:</strong> بفضل ملحق الأسياخ المصمم خصيصاً، يمكنك تحويل شوايتك إلى وضع كباب الأسياخ في ثوانٍ.',
            'hero.li3': '<strong>استخدام مرن:</strong> نقوم بالشحن بنظام الشواء القياسي فقط لمن يرغب، أو كمجموعة كاملة تشمل الأسياخ وملحقها لمن يريد.',
            'hero.p3': 'شواية واحدة، استخدامان مختلفان! الآن يمكنك الاستمتاع بالشواء الكلاسيكي وتحضير أسياخك مثل معلم كباب محترف.',
            'hero.cta': 'يمكنكم الطلب الآن عبر واتساب أو عبر روابط التجارة الإلكترونية أدناه.',
            'features.title': 'الموديل القياسي (شواية إتينجريل)',
            'features.f1': '<strong>الجودة.</strong> مصنوعة من الفولاذ المقاوم للصدأ بسماكة 1.5 مم (AISI 430 – EN 1.4016)!',
            'features.f2': '<strong>المفهوم.</strong> يمكنك تدوير شبكة الشواء تلقائياً بحركة واحدة؛ تخلّص من عناء قلب اللحوم واحدة تلو الأخرى!',
            'features.f3': '<strong>التصميم.</strong> يمكن تحريك صينية النار لأعلى ولأسفل؛ اضبط النار واطهِ اللحوم حسب رغبتك!',
            'features.f4': '<strong>الراحة.</strong> الصينية قابلة للسحب ويمكن إزالتها بسهولة؛ تنظيف الرماد بكل سهولة!',
            'features.f5': '<strong>السهولة.</strong> يمكنك إزالة شبكة الشواء بسهولة وتقديم اللحوم مباشرة من الشبكة إلى المائدة!',
            'features.f6': '<strong>الأمان.</strong> بالضغط على الذراع المتحرك يمكنك تثبيت الشبكة عمودياً؛ لحماية اللحوم من اشتعال النار المفاجئ!',
            'features.f7': '<strong>القياسي.</strong> أبعاد شبكة الشواء بالمقاس القياسي 40×30 سم. يمكنك استبدالها بسهولة من السوق!',
            'sis.title': 'موديل ملحق الأسياخ',
            'sis.s1': 'استفيدوا من سهولة ضبط النار والتدوير عند تحضير <strong>كباب الأسياخ</strong> بفضل ملحق الأسياخ الخاص.',
            'sis.s2': 'يمكن تركيب <strong>7 أسياخ</strong> في المرة الواحدة.',
            'sis.s3': 'يتعرض كباب الأسياخ للنار <strong>بشكل متساوٍ</strong> من جميع الجوانب.',
            'sis.s4': 'بفضل التصميم الخاص، <strong>تُصفّى الدهون الزائدة عبر القنوات.</strong>',
            'sis.s5': 'بفضل <strong>نظام القفل</strong>، لا تنزلق الأسياخ أثناء الدوران.',
            'sis.s6': 'أسياخنا مصنوعة من الفولاذ المقاوم للصدأ <strong>بجودة 304</strong> والآمن للغذاء.',
            'sis.s7': 'الأسياخ بسمك <strong>2 مم</strong> وعرض <strong>20 مم.</strong>',
            'gallery.title': 'المعرض',
            'contact.whatsapp': '<strong>واتساب:</strong>',
            'contact.address': '<strong>العنوان:</strong>',
            'contact.address1': 'دودولو المنطقة الصناعية، الشارع 3، مجمع أند الصناعي',
            'contact.address2': 'أومرانية / إسطنبول / تركيا',
            'footer.copyright': '© 2024 <strong>Etinngrill.</strong> جميع الحقوق محفوظة.'
        }
    };

    let currentLang = localStorage.getItem('etinngrill-lang') || 'tr';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('etinngrill-lang', lang);

        // Update dir for RTL
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;

        // Translate all [data-i18n] elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update lang toggle button text
        const langText = document.getElementById('current-lang-text');
        if (langText) langText.textContent = lang.toUpperCase();

        // Update active states — desktop dropdown
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update active states — mobile buttons
        document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Close dropdown
        document.getElementById('lang-selector')?.classList.remove('open');
    }

    // Desktop language dropdown
    const langToggle = document.getElementById('lang-toggle');
    const langSelector = document.getElementById('lang-selector');

    langToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('open');
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Mobile language buttons
    document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!langSelector?.contains(e.target)) {
            langSelector?.classList.remove('open');
        }
    });

    // Apply saved language on load
    if (currentLang !== 'tr') {
        setLanguage(currentLang);
    }


    /* ---- Mobile Menu ---- */
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');

    const ICON_OPEN = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>';
    const ICON_CLOSE = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

    toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('hidden');
        toggle.innerHTML = open ? ICON_OPEN : ICON_CLOSE;
    });

    menu.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => {
            menu.classList.add('hidden');
            toggle.innerHTML = ICON_OPEN;
        })
    );


    /* ---- Smooth Scroll ---- */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            e.preventDefault();

            if (id === '#' || id === '#top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const el = document.querySelector(id);
            if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });


    /* ---- Scroll Reveal ---- */
    const observer = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));


    /* ---- Carousel ---- */
    const carousel = document.getElementById('carousel');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const step = 340;

    prevBtn?.addEventListener('click', () => carousel.scrollBy({ left: -step, behavior: 'smooth' }));
    nextBtn?.addEventListener('click', () => carousel.scrollBy({ left: step, behavior: 'smooth' }));


    /* ---- Lightbox ---- */
    const images = [...document.querySelectorAll('.carousel-slide img')];
    const sources = images.map(img => img.src);
    let current = 0;

    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `
        <button class="lightbox-close" aria-label="Kapat">✕</button>
        <button class="lightbox-nav lightbox-prev" aria-label="Önceki">‹</button>
        <img src="" alt="Galeri">
        <button class="lightbox-nav lightbox-next" aria-label="Sonraki">›</button>
    `;
    document.body.appendChild(lb);

    const lbImg = lb.querySelector('img');
    const show = i => { current = i; lbImg.src = sources[i]; };
    const open = i => { show(i); lb.classList.add('active'); document.body.style.overflow = 'hidden'; };
    const close = () => { lb.classList.remove('active'); document.body.style.overflow = ''; };
    const prev = () => show((current - 1 + sources.length) % sources.length);
    const next = () => show((current + 1) % sources.length);

    images.forEach((img, i) => img.addEventListener('click', () => open(i)));

    lb.querySelector('.lightbox-close').addEventListener('click', close);
    lb.querySelector('.lightbox-prev').addEventListener('click', prev);
    lb.querySelector('.lightbox-next').addEventListener('click', next);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });

    document.addEventListener('keydown', e => {
        if (!lb.classList.contains('active')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    });

    /* ---- Hero Video Click Control ---- */
    const heroVideo = document.getElementById('hero-video');
    heroVideo?.addEventListener('click', () => {
        if (heroVideo.paused) {
            heroVideo.play();
        } else {
            heroVideo.pause();
        }
    });

});
