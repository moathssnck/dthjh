import Link from "next/link"
import { Shield, Lock, AlertCircle, CheckCircle, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "قواعد الأمان - سيكيور لايف للتأمين",
  description: "التزاماتنا الأمنية وإرشادات حماية معلوماتك",
}

export default function SecurityRules() {
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
            <Lock className="w-5 h-5 text-primary" />
            <h1 className="text-xl font-bold text-primary">قواعد الأمان</h1>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">قواعد وإرشادات الأمان</h2>
          <p className="text-muted-foreground mb-4">
            <strong>آخر تحديث:</strong> يناير 2025
          </p>
          <p className="text-foreground leading-relaxed">
            تحافظ سيكيور لايف للتأمين على تدابير أمنية شاملة لحماية معلوماتك وضمان الامتثال لمعايير ولوائح الصناعة.
          </p>
        </div>

        {/* Security Standards */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-primary mb-6">معاييرنا الأمنية</h3>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">تشفير SSL/TLS</h4>
                  <p className="text-muted-foreground">
                    يتم تشفير جميع البيانات المنقولة بين جهازك وخوادمنا باستخدام بروتوكولات SSL/TLS المعيارية في الصناعة
                    (تشفير 256 بت).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">حماية جدار الحماية</h4>
                  <p className="text-muted-foreground">
                    نحافظ على جدران حماية على مستوى المؤسسات وأنظمة كشف التسلل لمنع الوصول غير المصرح به إلى شبكاتنا.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">تشفير البيانات المخزنة</h4>
                  <p className="text-muted-foreground">
                    يتم تشفير جميع المعلومات الشخصية المخزنة باستخدام تشفير AES-256 للحماية من الوصول غير المصرح به.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">المصادقة متعددة العوامل</h4>
                  <p className="text-muted-foreground">
                    نقدم مصادقة متعددة العوامل اختيارية (MFA) للوصول إلى الحساب لإضافة طبقة إضافية من الأمان.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">عمليات التدقيق الأمني المنتظمة</h4>
                  <p className="text-muted-foreground">
                    نجري عمليات تدقيق أمني ربع سنوية وتقييمات للثغرات الأمنية لتحديد ومعالجة التهديدات المحتملة.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">تدريب الموظفين</h4>
                  <p className="text-muted-foreground">
                    يخضع جميع الموظفين لتدريب أمني إلزامي ويوقعون اتفاقيات سرية لضمان حماية البيانات.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">خطة الاستجابة للحوادث</h4>
                  <p className="text-muted-foreground">
                    نحافظ على خطة شاملة للاستجابة للحوادث لمعالجة أي خروقات أمنية بسرعة وإخطار الأطراف المتأثرة.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">معايير الامتثال</h4>
                  <p className="text-muted-foreground">
                    نحن نمتثل للائحة العامة لحماية البيانات (GDPR) وقانون خصوصية المستهلك في كاليفورنيا (CCPA) وقانون
                    نقل التأمين الصحي والمساءلة (HIPAA) ولوائح حماية البيانات الأخرى المعمول بها.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-primary mb-6">مسؤولياتك الأمنية</h3>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">حافظ على أمان كلمة المرور الخاصة بك</h4>
                  <p className="text-muted-foreground">
                    لا تشارك كلمة المرور الخاصة بك أبدًا وقم بتغييرها بانتظام. استخدم كلمات مرور قوية تحتوي على مزيج من
                    الأحرف الكبيرة والصغيرة والأرقام والرموز.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">احمِ أجهزتك</h4>
                  <p className="text-muted-foreground">
                    حافظ على تحديث جهاز الكمبيوتر والهاتف والأجهزة اللوحية بأحدث تصحيحات الأمان وبرامج مكافحة الفيروسات.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">استخدم اتصالات آمنة</h4>
                  <p className="text-muted-foreground">
                    قم دائمًا بالوصول إلى موقعنا باستخدام اتصال إنترنت آمن وموثوق. تجنب شبكة Wi-Fi العامة عند الوصول إلى
                    المعلومات الحساسة.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">أبلغ عن النشاط المشبوه</h4>
                  <p className="text-muted-foreground">
                    أبلغ فورًا عن أي نشاط مشبوه أو وصول غير مصرح به إلى حسابك لفريق الأمان لدينا.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">تحقق من الاتصالات</h4>
                  <p className="text-muted-foreground">
                    كن حذرًا من رسائل البريد الإلكتروني أو المكالمات الهاتفية غير المرغوب فيها التي تطلب معلومات شخصية.
                    لن نطلب أبدًا كلمة المرور الخاصة بك عبر البريد الإلكتروني.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Certifications */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-primary mb-6">الامتثال والشهادات</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">ISO 27001</h4>
              <p className="text-sm text-muted-foreground">إدارة أمن المعلومات</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Lock className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">متوافق مع GDPR</h4>
              <p className="text-sm text-muted-foreground">لائحة حماية البيانات في الاتحاد الأوروبي</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">HIPAA</h4>
              <p className="text-sm text-muted-foreground">قابلية نقل التأمين الصحي</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">SOC 2 Type II</h4>
              <p className="text-sm text-muted-foreground">مراقبة منظمة الخدمة</p>
            </div>
          </div>
        </section>

        {/* Incident Reporting */}
        <section className="bg-destructive/10 border border-destructive/20 rounded-lg p-8">
          <h3 className="text-xl font-bold text-primary mb-3">الإبلاغ عن حادث أمني</h3>
          <p className="text-foreground mb-4">إذا اكتشفت ثغرة أمنية أو تشك في حدوث خرق، يرجى الإبلاغ عنها فورًا:</p>
          <div className="space-y-2 text-foreground">
            <p>
              <strong>البريد الإلكتروني:</strong> security@securelife.com
            </p>
            <p>
              <strong>الهاتف:</strong>0550-999899 (خط الأمان الساخن)
            </p>
            <p>
              <strong>وقت الاستجابة:</strong> خلال 24 ساعة
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
