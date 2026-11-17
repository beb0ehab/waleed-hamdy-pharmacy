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
  areas: ["المنطقة 1", "المنطقة 2", "المنطقة 3", "أخرى"], // مناطق التوصيل
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

/* المنتجات: الأسعار هنا أمثلة — غيّرها بأسعار الصيدلية
   img: رابط صورة (اختياري) — لو فاضي هيظهر الإيموجي
   best: true = يظهر في "الأكثر طلبًا" */
window.PRODUCTS = [
  { id: 1,  cat: "meds",    name: "بانادول أدفانس 24 قرص",          price: 66,  icon: "💊", best: true },
  { id: 2,  cat: "meds",    name: "كونجستال 20 قرص",                 price: 54,  icon: "💊", best: true },
  { id: 3,  cat: "meds",    name: "أوجمنتين 1 جم 14 قرص",           price: 186, icon: "💊" },
  { id: 4,  cat: "meds",    name: "أنتينال 24 كبسولة",              price: 48,  icon: "💊" },
  { id: 5,  cat: "meds",    name: "فولتارين 50 مجم 20 قرص",         price: 72,  icon: "💊" },
  { id: 6,  cat: "first",   name: "بلاستر جروح 20 قطعة",            price: 25,  icon: "🩹" },
  { id: 7,  cat: "first",   name: "بيتادين محلول 120 مل",           price: 45,  icon: "🧪" },
  { id: 8,  cat: "first",   name: "شاش معقم 10 قطع",                 price: 20,  icon: "🩹" },
  { id: 9,  cat: "skin",    name: "سيرافي غسول مرطب 236 مل",        price: 720, icon: "🧴", best: true },
  { id: 10, cat: "skin",    name: "واقي شمس SPF50",                  price: 450, icon: "☀️" },
  { id: 11, cat: "vit",     name: "فيتامين سي 1000 فوار",           price: 85,  icon: "🍊", best: true },
  { id: 12, cat: "vit",     name: "فيتامين د 50000 وحدة",           price: 60,  icon: "🌞" },
  { id: 13, cat: "vit",     name: "أوميجا 3 — 30 كبسولة",           price: 210, icon: "🐟" },
  { id: 14, cat: "fitness", name: "واي بروتين 2 كجم",                price: 3200,icon: "🥤" },
  { id: 15, cat: "devices", name: "ترمومتر ديجيتال",                 price: 120, icon: "🌡️" },
  { id: 16, cat: "devices", name: "جهاز قياس ضغط ديجيتال",          price: 1350,icon: "🩺" },
  { id: 17, cat: "devices", name: "جهاز قياس سكر + 25 شريط",        price: 650, icon: "🩸" },
  { id: 18, cat: "beauty",  name: "مرطب شفايف",                      price: 65,  icon: "💄" },
  { id: 19, cat: "baby",    name: "بامبرز مقاس 4 — 44 حفاضة",       price: 390, icon: "👶", best: true },
  { id: 20, cat: "baby",    name: "كريم حفاض 100 جم",               price: 95,  icon: "🍼" },
  { id: 21, cat: "personal",name: "معجون أسنان 100 مل",             price: 55,  icon: "🪥" },
  { id: 22, cat: "personal",name: "مزيل عرق رول",                    price: 110, icon: "🧴" },
  { id: 23, cat: "eye",     name: "قطرة مرطبة للعين 10 مل",         price: 70,  icon: "👁️" },
  { id: 24, cat: "women",   name: "فوط صحية 16 قطعة",               price: 60,  icon: "🌸" },
  { id: 25, cat: "family",  name: "اختبار حمل",                      price: 35,  icon: "❤️" }
];
