import Link from "next/link"
import { ArrowLeft, CheckCircle, AlertCircle, Lock } from "lucide-react"

export const metadata = {
  title: "قواعد الأمان - تأمين حياة آمنة",
  description: "قواعد الأمان والحماية الشاملة لشركة تأمين حياة آمنة",
}

export default function SecurityRules() {
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
        <h1 className="text-4xl font-bold text-primary mb-8 text-right">قواعس الأمان</h1>
        <p className="text-muted-foreground mb-8 text-right">آخر تحديث: نوفمبر 2025</p>

        <div className="space-y-8">
          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <div className="flex items-start gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-bold text-primary">معايير الأمان الدولية</h2>
            </div>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>ISO 27001 - معايير إدارة أمن المعلومات</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>GDPR - اللائحة العامة لحماية البيانات</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>HIPAA - قانون الخصوصية والأمان الطبي</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>SOC 2 Type II - معايير الخدمات الموثوقة</span>
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">تدابير الأمان التقنية</h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>تشفير SSL/TLS 256-bit لجميع الاتصالات</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>المصادقة متعددة العوامل (MFA)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>جدران الحماية ونظم الكشف عن الاختراقات</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>النسخ الاحتياطية المتكررة وخطط الاسترجاع</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>المراقبة والتدقيق المستمر للأنظمة</span>
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">مسؤوليات المستخدم</h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>إنشاء كلمات مرور قوية وفريدة للحساب</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>عدم مشاركة بيانات الدخول مع أي شخص</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>تحديث برامج الأمان على أجهزتك بانتظام</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>الحذر من رسائل الخدعة والروابط المشبوهة</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>الإبلاغ فوراً عن أي نشاط مريب</span>
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">بروتوكول معالجة الحوادث</h2>
            <p className="text-foreground mb-4">في حالة خرق الأمان أو انتهاك البيانات:</p>
            <ol className="list-decimal list-inside space-y-2 text-foreground">
              <li>سيتم إبلاغك فوراً خلال 24 ساعة</li>
              <li>سنوفر معلومات كاملة عن طبيعة الحادثة</li>
              <li>سيتم تقديم خطة حماية شاملة</li>
              <li>سنتعاون مع السلطات المختصة</li>
              <li>سيتم تحسين الأنظمة منع تكرار الحادثة</li>
            </ol>
          </section>

          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">الإبلاغ عن الثغرات الأمنية</h2>
            <p className="text-foreground mb-4">إذا اكتشفت أي ثغرة أمنية، يرجى الإبلاغ عنها فوراً:</p>
            <div className="bg-accent/10 rounded p-4 text-right border border-accent/20">
              <p className="text-foreground font-semibold">security@securelife.com</p>
              <p className="text-sm text-muted-foreground mt-2">يرجى عدم نشر التفاصيل علناً قبل معالجتها من قبلنا</p>
            </div>
          </section>

          <section className="bg-white dark:bg-primary/5 rounded-lg p-8 border border-border text-right">
            <h2 className="text-2xl font-bold text-primary mb-4">السياسات المرتبطة</h2>
            <ul className="space-y-2 text-foreground">
              <li>• سياسة قبول المخاطر والامتثال</li>
              <li>• خطة استمرارية الأعمال والطوارئ</li>
              <li>• سياسة إدارة الوصول والمصادقة</li>
              <li>• معايير التشفير وحماية البيانات</li>
              <li>• بروتوكول التدريب الأمني الدوري</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}
