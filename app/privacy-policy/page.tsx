import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "سياسة الخصوصية - سيكيور لايف للتأمين",
  description: "التزامنا بحماية معلوماتك الشخصية",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white dark:bg-primary/10 border-b border-border sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-4 h-4 rotate-180" />
            <span>العودة للرئيسية</span>
          </Link>
          <div className="flex-1 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <h1 className="text-xl font-bold text-primary">سياسة الخصوصية</h1>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">سياسة الخصوصية</h2>
            <p className="text-muted-foreground mb-4">
              <strong>آخر تحديث:</strong> يناير 2025
            </p>
            <p className="text-foreground leading-relaxed">
              سيكيور لايف للتأمين ("نحن" أو "لنا" أو "الشركة") ملتزمة بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع
              واستخدام والكشف عن معلوماتك وحمايتها عند زيارة موقعنا الإلكتروني واستخدام خدماتنا.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">1. المعلومات التي نجمعها</h3>
            <div className="bg-card border border-border rounded-lg p-6 mb-4">
              <h4 className="font-semibold text-foreground mb-2">المعلومات الشخصية</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>الاسم والعنوان ورقم الهاتف والبريد الإلكتروني</li>
                <li>رقم الضمان الاجتماعي (لعروض الأسعار والطلبات التأمينية)</li>
                <li>رخصة القيادة ومعلومات المركبة</li>
                <li>المعلومات الصحية (للتأمين على الحياة والصحة)</li>
                <li>معلومات الدفع والفواتير</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-2">المعلومات المجمعة تلقائيًا</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>عنوان IP ونوع المتصفح</li>
                <li>الصفحات التي تمت زيارتها والوقت المستغرق على موقعنا</li>
                <li>موقع الإحالة ومصطلحات البحث</li>
                <li>معرفات الجهاز وملفات تعريف الارتباط</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">2. كيف نستخدم معلوماتك</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>معالجة طلبات التأمين وإدارة الوثائق</li>
              <li>تقديم خدمة العملاء والرد على الاستفسارات</li>
              <li>إرسال تحديثات الوثائق والتجديدات والإشعارات المهمة</li>
              <li>تحسين موقعنا وخدماتنا</li>
              <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
              <li>منع الاحتيال وضمان الأمان</li>
              <li>إرسال مواد ترويجية (بموافقتك)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">3. حماية البيانات</h3>
            <p className="text-foreground leading-relaxed mb-4">
              نطبق تدابير أمنية معيارية في الصناعة لحماية معلوماتك الشخصية، بما في ذلك:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>تشفير SSL لجميع عمليات نقل البيانات</li>
              <li>جدران حماية آمنة وأنظمة كشف التسلل</li>
              <li>عمليات تدقيق وتقييم أمنية منتظمة</li>
              <li>وصول محدود إلى المعلومات الشخصية</li>
              <li>تخزين بيانات آمن مع التشفير</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">4. مشاركة المعلومات</h3>
            <p className="text-foreground leading-relaxed">قد نشارك معلوماتك مع:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>وكلاء ووسطاء التأمين</li>
              <li>شركات التأمين لأغراض الاكتتاب</li>
              <li>مقدمي الخدمات الخارجيين (معدلي المطالبات، مقدمي الخدمات الطبية)</li>
              <li>جهات إنفاذ القانون والوكالات الحكومية (عند الطلب بموجب القانون)</li>
              <li>المستشارين المهنيين (المحامين، المحاسبين)</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4">
              نحن لا نبيع معلوماتك الشخصية لأطراف ثالثة لأغراض تسويقية.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">5. حقوقك</h3>
            <p className="text-foreground leading-relaxed mb-4">لديك الحق في:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>الوصول إلى معلوماتك الشخصية</li>
              <li>طلب تصحيح المعلومات غير الدقيقة</li>
              <li>إلغاء الاشتراك في الاتصالات التسويقية</li>
              <li>طلب حذف معلوماتك (حيثما يكون ذلك مسموحًا قانونيًا)</li>
              <li>تقديم شكوى إلى مفوض التأمين في ولايتك</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">6. ملفات تعريف الارتباط والتتبع</h3>
            <p className="text-foreground leading-relaxed">
              يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال
              تفضيلات المتصفح. نستخدم ملفات تعريف الارتباط لتذكر تفضيلاتك وتتبع استخدام الموقع وتحسين خدماتنا.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">
              7. اللائحة العامة لحماية البيانات والمستخدمون الدوليون
            </h3>
            <p className="text-foreground leading-relaxed">
              إذا كنت موجودًا في الاتحاد الأوروبي أو مناطق أخرى ذات قوانين حماية البيانات، فلديك حقوق إضافية بموجب
              اللائحة العامة لحماية البيانات. نحن نمتثل لجميع لوائح حماية البيانات المعمول بها ويتم معالجة معلوماتك بشكل
              قانوني وعادل.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">8. خصوصية الأطفال</h3>
            <p className="text-foreground leading-relaxed">
              خدماتنا غير موجهة للأطفال دون سن 13 عامًا. نحن لا نجمع عن قصد معلومات شخصية من الأطفال. إذا علمنا أننا
              جمعنا معلومات من طفل، فسنتخذ خطوات لحذف هذه المعلومات.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-3">9. تحديثات هذه السياسة</h3>
            <p className="text-foreground leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية هذه بشكل دوري لتعكس التغييرات في ممارساتنا أو القوانين المعمول بها. نشجعك
              على مراجعة هذه السياسة بانتظام لأي تحديثات.
            </p>
          </section>

          <section className="bg-accent/10 border border-accent rounded-lg p-6">
            <h3 className="text-xl font-bold text-primary mb-3">اتصل بنا</h3>
            <p className="text-foreground mb-3">
              إذا كانت لديك أسئلة حول سياسة الخصوصية هذه أو ممارسات الخصوصية لدينا، يرجى الاتصال بنا:
            </p>
            <div className="space-y-2 text-foreground">
              <p>
                <strong>البريد الإلكتروني:</strong> privacy@securelife.com
              </p>
              <p>
                <strong>الهاتف:</strong> 1234-555-800-1
              </p>
              <p>
                <strong>البريد:</strong> سيكيور لايف للتأمين، قسم الخصوصية، 123 شارع التأمين، المدينة، الولاية 12345
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
