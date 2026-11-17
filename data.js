/* ============================================================
   إعدادات الصيدلية — عدّل هنا فقط
   ============================================================ */
window.STORE = {
  name: "صيدليات وليد حمدي",
  // رقم الواتساب بالصيغة الدولية بدون + أو أصفار في الأول (مصر = 20)
  whatsapp: "201063529309",
  currency: "ج.م",
  deliveryFee: 15,          // رسوم التوصيل (0 = مجاني)
  freeDeliveryFrom: 300,    // توصيل مجاني فوق المبلغ ده (0 = إلغاء)
  minOrder: 50,             // أقل طلب
  workingHours: "يوميًا من 9 صباحًا حتى 2 بعد منتصف الليل",
  address: "1 شارع العريش، بجوار مترو ماركت — الهرم، الجيزة",
  // لينك الموقع على الخريطة (لما الصيدلية تتضاف على جوجل مابس حط لينكها هنا)
  mapUrl: "https://www.google.com/maps/search/?api=1&query=29.9957,31.1589",
  areas: ["شارع العريش", "الطالبية", "الهرم", "فيصل", "أخرى"], // مناطق التوصيل
  logo: "" // رابط صورة اللوجو (اختياري) — لو فاضي هيظهر علامة صيدلية
};

/* الأقسام: id ثابت، name الاسم، icon إيموجي، bg لون الخلفية */
window.CATEGORIES = [
  { id: "meds",    name: "الأدوية",              icon: "💊", bg: "#E6F4F1" },
  { id: "first",   name: "الإسعافات الأولية",    icon: "🩹", bg: "#FDECEC" },
  { id: "skin",    name: "العناية بالبشرة",      icon: "🧴", bg: "#FFF4E0" },
  { id: "vit",     name: "فيتامينات ومكملات",    icon: "🍊", bg: "#FFF0E6" },
  { id: "fitness", name: "اللياقة والتغذية",     icon: "💪", bg: "#EEF0F7" },
  { id: "devices", name: "الأجهزة الطبية",       icon: "🌡️", bg: "#E8F1FB" },
  { id: "beauty",  name: "مستحضرات التجميل",     icon: "💄", bg: "#FCEAF2" },
  { id: "baby",    name: "الطفل والأم",          icon: "🍼", bg: "#EAF6FB" },
  { id: "personal",name: "العناية الشخصية",      icon: "🪥", bg: "#EEF7EA" },
  { id: "eye",     name: "نظر",                  icon: "👓", bg: "#F1F1F1" },
  { id: "women",   name: "العناية بالمرأة",      icon: "🌸", bg: "#FBEFF5" },
  { id: "family",  name: "تنظيم الأسرة",         icon: "❤️", bg: "#FDEDED" }
];

/* المنتجات: الأسعار مأخوذة من أسعار صيدلية قريبة في الهرم على طلبات (نوفمبر 2026)
   — راجعها مع الصيدلية قبل النشر.
   img: رابط صورة (اختياري) — لو فاضي هيظهر الإيموجي
   best: true = يظهر في "الأكثر طلبًا" */
window.PRODUCTS = [
  { id: 1,  cat: "meds",    name: "بانادول أدفانس 500 مجم — 48 قرص",      price: 92,   icon: "💊", best: true },
  { id: 2,  cat: "meds",    name: "بانادول إكسترا — 48 قرص",              price: 116,  icon: "💊" },
  { id: 3,  cat: "meds",    name: "بانادول كولد آند فلو — 24 قرص",        price: 76,   icon: "💊" },
  { id: 4,  cat: "meds",    name: "كونجستال — 20 قرص",                    price: 50,   icon: "💊", best: true },
  { id: 5,  cat: "meds",    name: "سيتال 500 مجم — 20 قرص",               price: 24,   icon: "💊" },
  { id: 6,  cat: "meds",    name: "أنتينال 200 مجم — 24 كبسولة",          price: 52,   icon: "💊", best: true },
  { id: 7,  cat: "meds",    name: "أوتريفين نقط أنف للكبار 10 مل",        price: 24,   icon: "👃" },
  { id: 8,  cat: "meds",    name: "جافيسكون دبل أكشن شراب 150 مل",       price: 144,  icon: "🧴" },
  { id: 9,  cat: "meds",    name: "كونترولوك 20 مجم — 14 قرص",            price: 100,  icon: "💊" },
  { id: 10, cat: "meds",    name: "برونشيكم شراب للكحة 100 مل",           price: 99,   icon: "🍯" },
  { id: 11, cat: "first",   name: "بيتادين محلول مطهر 120 مل",            price: 95,   icon: "🧪" },
  { id: 12, cat: "first",   name: "ميبو مرهم للحروق 15 جم",               price: 109,  icon: "🩹" },
  { id: 13, cat: "first",   name: "ريباريل جل للكدمات 40 جم",             price: 58,   icon: "🩹" },
  { id: 14, cat: "skin",    name: "غسول نيتروجينا ديب كلين 200 مل",       price: 283.5,icon: "🧴" },
  { id: 15, cat: "skin",    name: "غسول ستارفيل للبشرة الدهنية 200 مل",   price: 140,  icon: "🧴" },
  { id: 16, cat: "skin",    name: "واقي شمس فاكيشن SPF50+ — 60 مل",       price: 350,  icon: "☀️", best: true },
  { id: 17, cat: "skin",    name: "إيفا صن آند سي واقي للوجه SPF50 — 40 مل", price: 180, icon: "☀️" },
  { id: 18, cat: "vit",     name: "فيتاسيد سي 1 جم فوار — 12 قرص",        price: 54,   icon: "🍊", best: true },
  { id: 19, cat: "vit",     name: "أوسوفورتين د3 5000 وحدة — 30 قرص",     price: 130,  icon: "🌞" },
  { id: 20, cat: "vit",     name: "سنتروم للكبار — 30 قرص",               price: 275,  icon: "💊" },
  { id: 21, cat: "vit",     name: "ليمتلس باور ماكس — 30 قرص",            price: 310,  icon: "⚡" },
  { id: 22, cat: "devices", name: "ترمومتر ديجيتال Planet Health",        price: 200,  icon: "🌡️" },
  { id: 23, cat: "devices", name: "جهاز ضغط Planet Health PH 330",        price: 1200, icon: "🩺" },
  { id: 24, cat: "devices", name: "شرائط أكيو تشيك أكتيف — 50 شريط",     price: 605,  icon: "🩸" },
  { id: 25, cat: "baby",    name: "بامبرز بيبي دراي مقاس 4 — 58 حفاضة",   price: 479,  icon: "👶", best: true },
  { id: 26, cat: "baby",    name: "مولفكس مقاس 4 جامبو — 58 حفاضة",      price: 470,  icon: "👶" },
  { id: 27, cat: "baby",    name: "بامبرز نيو بورن مقاس 1 — 60 حفاضة",   price: 369,  icon: "🍼" },
  { id: 28, cat: "personal",name: "معجون سيجنال تبييض 100 مل",            price: 80,   icon: "🪥" },
  { id: 29, cat: "personal",name: "فرشاة سيجنال تريبل كلين — 2 قطعة",     price: 60,   icon: "🪥" },
  { id: 30, cat: "personal",name: "ليسترين جرين تي غسول فم 250 مل",       price: 150,  icon: "🫧" },
  { id: 31, cat: "eye",     name: "بريزولين قطرة عين وأنف 15 مل",         price: 23,   icon: "👁️" },
  { id: 32, cat: "women",   name: "مولبد ألترا ثين طويل — 16 فوطة",       price: 105,  icon: "🌸" },
  { id: 33, cat: "women",   name: "كيرفري فوط يومية — 20 قطعة",           price: 100,  icon: "🌸" },
  { id: 34, cat: "women",   name: "فوليك أسيد 5 مجم — 30 قرص",            price: 36,   icon: "💊" },
  { id: 35, cat: "family",  name: "اختبار حمل فالافاست",                  price: 130,  icon: "❤️" },
  { id: 36, cat: "fitness", name: "إل كارنيتين 300 مجم شراب 30 مل",       price: 70,   icon: "💪" },
  { id: 37, cat: "beauty",  name: "إيفا غسول ومزيل مكياج 150 مل",         price: 70,   icon: "💄" }
];
