import Link from "next/link"
import { Lock, Shield, Eye } from "lucide-react"

export const metadata = {
  title: "تأمين حياة آمنة - شريكك الموثوق",
  description: "حلول تأمين احترافية مع شفافية كاملة والأمان",
}

export default function BioLinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Navigation */}
      <nav className="bg-white dark:bg-primary/10 border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-primary">حياة آمنة</span>
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="/ar/privacy-policy" className="text-primary hover:text-primary/80 transition">
              سياسة الخصوصية
            </Link>
            <Link href="/ar/security-rules" className="text-primary hover:text-primary/80 transition">
              قواعد الأمان
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-3">تأمين حياة آمنة</h1>
          <p className="text-lg text-muted-foreground mb-2">شريكك الموثوق في التأمين</p>
          <p className="text-sm text-muted-foreground">حماية ما يهمك أكثر مع الشفافية الكاملة</p>
        </div>

        {/* Bio Section */}
        <div className="bg-white dark:bg-primary/5 rounded-lg p-8 mb-8 border border-border text-right">
          <h2 className="text-2xl font-bold text-primary mb-4">من نحن</h2>
          <p className="text-foreground mb-4 leading-relaxed">
            شركة تأمين حياة آمنة تقدم حلول تأمين شاملة لأكثر من 25 سنة. نحن ملتزمون بتقديم خدمة استثنائية وأسعار تنافسية
            وراحة البال الكاملة لعملائنا الكرام.
          </p>
          <p className="text-foreground leading-relaxed">
            يعمل فريقنا الخبير بجد لضمان حصول أنت وعائلتك على الحماية التي تحتاجها عندما يكون الأمر مهماً. نحن نؤمن
            بالشفافية والنزاهة وجعل العميل هو الأولوية الأولى.
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-3 mb-10">
          <h3 className="font-semibold text-foreground mb-4 text-right">استكشف خدماتنا</h3>

          <a
            href="https://www.example.com/ar/auto-insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 bg-gradient-to-l from-primary/90 to-primary text-primary-foreground rounded-lg hover:shadow-lg transition font-semibold text-center"
          >
            تأمين السيارات
          </a>

          <a
            href="https://www.example.com/ar/home-insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 bg-gradient-to-l from-secondary/90 to-secondary text-secondary-foreground rounded-lg hover:shadow-lg transition font-semibold text-center"
          >
            تأمين المنزل
          </a>

          <a
            href="https://www.example.com/ar/life-insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 bg-gradient-to-l from-accent/90 to-accent text-accent-foreground rounded-lg hover:shadow-lg transition font-semibold text-center"
          >
            تأمين الحياة
          </a>

          <a
            href="https://www.example.com/ar/health-insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 bg-gradient-to-l from-primary/80 to-primary/60 text-primary-foreground rounded-lg hover:shadow-lg transition font-semibold text-center"
          >
            تأمين الصحة
          </a>

          <a
            href="https://www.example.com/ar/quote"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold text-center"
          >
            احصل على عرض أسعار مجاني
          </a>
        </div>

        {/* Contact Section */}
        <div className="bg-white dark:bg-primary/5 rounded-lg p-8 mb-10 border border-border text-right">
          <h3 className="text-xl font-bold text-primary mb-4">تواصل معنا</h3>
          <div className="space-y-3">
            <p className="text-foreground">
              <span className="font-semibold">الهاتف:</span>{" "}
              <a href="tel:+966112345678" className="text-accent hover:underline">
                +966-11-2345-678
              </a>
            </p>
            <p className="text-foreground">
              <span className="font-semibold">البريد الإلكتروني:</span>{" "}
              <a href="mailto:support@securelife.com" className="text-accent hover:underline">
                support@securelife.com
              </a>
            </p>
            <p className="text-foreground">
              <span className="font-semibold">ساعات العمل:</span> الأحد - الخميس 8 صباحاً - 8 مساءً
            </p>
          </div>
        </div>

        {/* Google Ads Placeholder */}
        <div className="mb-10">
          <div className="google-ads-container bg-muted rounded-lg border-2 border-dashed border-border">
            <div className="text-center">
              <p className="text-muted-foreground text-sm">إعلانات Google AdSense</p>
              <p className="text-xs text-muted-foreground">{`<!-- سيتم تحميل إعلانات Google هنا -->`}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Policy Links */}
      <footer className="bg-primary/5 border-t border-border mt-16">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Quick Links */}
            <div className="text-right">
              <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-primary hover:text-primary/80 transition">
                    المطالبات
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:text-primary/80 transition">
                    الفواتير
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:text-primary/80 transition">
                    حسابي
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="text-right">
              <h4 className="font-bold text-foreground mb-4">قانوني</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/ar/privacy-policy" className="text-primary hover:text-primary/80 transition">
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link href="/ar/security-rules" className="text-primary hover:text-primary/80 transition">
                    قواعد الأمان
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:text-primary/80 transition">
                    شروط الخدمة
                  </Link>
                </li>
              </ul>
            </div>

            {/* Security Info */}
            <div className="text-right">
              <h4 className="font-bold text-foreground mb-4">الأمان</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-primary justify-end">
                  <span>مشفر بـ SSL</span>
                  <Lock className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2 text-primary justify-end">
                  <span>متوافق مع GDPR</span>
                  <Shield className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2 text-primary justify-end">
                  <span>الخصوصية محمية</span>
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 تأمين حياة آمنة. جميع الحقوق محفوظة. مرخصة وخاضعة للتنظيم.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
