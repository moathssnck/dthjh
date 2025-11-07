import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "سياسة الخصوصية - تأمين حياة آمنة",
  description: "سياسة الخصوصية الشاملة لشركة تأمين حياة آمنة",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <nav className="bg-white dark:bg-primary/10 border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <Link href="/ar" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-4 h-4" />
            العودة إلى الرئيسية
          </Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 text-right">سياسة الخصوصية</h1>
        <p className="text-muted-foreground mb-8 text-right">آخر تحديث: نوفمبر 2025</p>

        <div className="space-y-8">
          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">1. مقدمة</h2>
            <p className="text-foreground leading-relaxed">
              نحن في شركة تأمين حياة آمنة نلتزم بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام ومعالجة
              بيانتك الشخصية.
            </p>
          </section>

          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">2. جمع البيانات</h2>
            <p className="text-foreground leading-relaxed mb-4">نقوم بجمع المعلومات التالية:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>معلومات شخصية (الاسم والبريد الإلكتروني ورقم الهاتف)</li>
              <li>معلومات التأمين (الحالة الصحية والمخاطر)</li>
              <li>معلومات الدفع والمعاملات</li>
              <li>بيانات الموقع والجهاز</li>
              <li>سجلات الاتصالات والتفاعلات</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">3. استخدام البيانات</h2>
            <p className="text-foreground leading-relaxed mb-4">نستخدم بيانتك لـ:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>تقديم خدمات التأمين</li>
              <li>معالجة المطالبات والدفع</li>
              <li>تحسين خدماتنا</li>
              <li>الامتثال للقوانين واللوائح</li>
              <li>الاتصالات التسويقية (مع موافقتك)</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">4. مشاركة البيانات</h2>
            <p className="text-foreground leading-relaxed">
              نحن لا نبيع أو نشارك بيانتك الشخصية مع أطراف ثالثة دون موافقتك، باستثناء الحالات المطلوبة قانوناً أو
              شركائنا الموثوقين الذين يساعدون في تقديم الخدمات.
            </p>
          </section>

          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">5. حقوقك</h2>
            <p className="text-foreground leading-relaxed mb-4">لديك الحق في:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>الوصول إلى بيانتك الشخصية</li>
              <li>تصحيح البيانات غير الدقيقة</li>
              <li>حذف بيانتك في ظروف معينة</li>
              <li>الاعتراض على معالجة البيانات</li>
              <li>نقل البيانات إلى خدمة أخرى</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">6. الأمان</h2>
            <p className="text-foreground leading-relaxed">
              نستخدم تقنيات التشفير المتقدمة وتدابير الأمان لحماية بيانتك من الوصول غير المصرح والفقدان والتعديل.
            </p>
          </section>

          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">7. الامتثال</h2>
            <p className="text-foreground leading-relaxed">
              نحن متوافقون مع GDPR و القوانين المحلية والدولية المتعلقة بحماية البيانات وسياسات التأمين.
            </p>
          </section>

          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">8. التواصل</h2>
            <p className="text-foreground leading-relaxed">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا:
            </p>
            <div className="mt-4 space-y-2 text-foreground">
              <p>
                <span className="font-semibold">البريد الإلكتروني:</span> privacy@securelife.com
              </p>
              <p>
                <span className="font-semibold">الهاتف:</span> +966-11-2345-678
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
