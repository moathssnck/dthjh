import Link from "next/link"
import { Lock, Shield, Eye } from "lucide-react"

export const metadata = {
  title: " - شريكك الموثوق",
  description: "حلول تأمينية احترافية مع شفافية وأمان كاملين",
}
const link="#"
export default function BioLinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500/5 to-background">
      {/* Navigation */}
      <nav className="bg-white dark:bg-blue-500/10 border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-lg text-blue-500">سيكيور لايف</span>
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="#privacy" className="text-blue-500 hover:text-blue-500/80 transition">
              الخصوصية
            </Link>
            <Link href="#security" className="text-blue-500 hover:text-blue-500/80 transition">
              الأمان
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-blue-500 mb-3">تأميني</h1>
          <p className="text-lg text-muted-foreground mb-2">شريكك الموثوق في التأمين</p>
          <p className="text-sm text-muted-foreground">حماية ما يهمك أكثر مع شفافية كاملة</p>
        </div>

     

        {/* Links Section */}
        <div className="space-y-3 mb-10">
          <h3 className="font-semibold text-foreground mb-4">استكشف خدماتنا</h3>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 bg-gradient-to-l from-blue-500/90 to-blue-500 text-blue-500-foreground rounded-lg hover:shadow-lg transition font-semibold text-center"
          >
            تأمين السيارات
          </a>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 bg-gradient-to-l from-secondary/90 to-secondary text-secondary-foreground rounded-lg hover:shadow-lg transition font-semibold text-center"
          >
            تأمين ضد الغير
          </a>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 bg-gradient-to-l from-accent/90 to-accent text-accent-foreground rounded-lg hover:shadow-lg transition font-semibold text-center"
          >
            التأمين الشامل 
          </a>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 bg-gradient-to-l from-blue-500/80 to-blue-500/60 text-blue-500-foreground rounded-lg hover:shadow-lg transition font-semibold text-center"
          >
            التأمين الصحي
          </a>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500/5 transition font-semibold text-center"
          >
            احصل على عرض أسعار مجاني
          </a>
        </div>
        {/* Bio Section */}
           <div className="bg-white dark:bg-blue-500/5 rounded-lg p-8 mb-8 border border-border">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">من نحن</h2>
          <p className="text-foreground mb-4 leading-relaxed">
            تأميني تقدم حلول تأمينية شاملة منذ أكثر من 25 عامًا. نحن ملتزمون بتقديم خدمة استثنائية وأسعار
            تنافسية وراحة بال كاملة لعملائنا الكرام.
          </p>
          <p className="text-foreground leading-relaxed">
            يعمل فريقنا من الخبراء بلا كلل لضمان حصولك أنت وعائلتك على الحماية التي تحتاجها عندما يكون الأمر أكثر أهمية.
            نؤمن بالشفافية والنزاهة وجعل عملائنا في المقام الأول.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white dark:bg-blue-500/5 rounded-lg p-8 mb-10 border border-border">
          <h3 className="text-xl font-bold text-blue-500 mb-4">اتصل بنا</h3>
          <div className="space-y-3">
            <p className="text-foreground">
              <span className="font-semibold">الهاتف:</span>{" "}
              <a dir="ltr" href="tel:0550-999899" className="text-blue-400 hover:underline">
                0550-999899
              </a>
            </p>
            <p className="text-foreground">
              <span className="font-semibold">البريد الإلكتروني:</span>{" "}
              <a href="mailto:support@securelife.com" className="text-blue-400 hover:underline">
                support@securelife.com
              </a>
            </p>
            <p className="text-foreground">
              <span className="font-semibold">ساعات العمل:</span> الاثنين-الجمعة 8 صباحًا - 8 مساءً بتوقيت مكة المكرمة
            </p>
          </div>
        </div>

     
      </main>

      {/* Footer with Policy Links */}
      <footer className="bg-blue-500/5 border-t border-border mt-16">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-blue-500 hover:text-blue-500/80 transition">
                    المطالبات
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-500 hover:text-blue-500/80 transition">
                    الفواتير
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-500 hover:text-blue-500/80 transition">
                    حسابي
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="font-bold text-foreground mb-4">قانوني</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-blue-500 hover:text-blue-500/80 transition">
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link href="/security-rules" className="text-blue-500 hover:text-blue-500/80 transition">
                    قواعد الأمان
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-500 hover:text-blue-500/80 transition">
                    شروط الخدمة
                  </Link>
                </li>
              </ul>
            </div>

            {/* Security Info */}
            <div>
              <h4 className="font-bold text-foreground mb-4">الأمان</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-blue-500">
                  <Lock className="w-4 h-4" />
                  <span>مشفر بـ SSL</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500">
                  <Shield className="w-4 h-4" />
                  <span>متوافق مع GDPR</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500">
                  <Eye className="w-4 h-4" />
                  <span>خصوصية محمية</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 تأميني. جميع الحقوق محفوظة. مرخص ومنظم.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
