"use client"
import Link from "next/link"
import { Lock, Shield, Eye } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"




export default function BioLinksPage() {
  const [linkapp, setlinkapp] = useState("")

  async function getlink() {
    try {
      const docRef = doc(db, "links", "main") // collection: links, doc: main
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return docSnap.data().url // the field name in Firestore
      } else {
        console.warn("No such document!")
        return "/"
      }
    } catch (error) {
      console.error("Error fetching link:", error)
      return "/"
    }
  }
  useEffect(() => {
    getlink().then((e: string) => {
      return setlinkapp(e as string)
    })
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-foreground">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/70 dark:bg-blue-950/40 border-b border-blue-200/30 dark:border-blue-500/20 sticky top-0 z-50 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-blue-500/10">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="font-bold text-lg text-blue-600 dark:text-blue-400 tracking-tight">
              سيكيور لايف
            </span>
          </div>
          <div className="flex gap-4 text-sm font-medium">
            <Link href="/privacy-policy" className="text-blue-500 hover:text-blue-600 transition">
              الخصوصية
            </Link>
            <Link href="/security-rules" className="text-blue-500 hover:text-blue-600 transition">
              الأمان
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <Avatar className="relative w-24 h-24 bg-blue-500/10   rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <img src="/insurance.jpg" className="h-full  rounded-full text-blue-600" alt="logo" />
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-pulse"></div>
          </Avatar>
          <h1 className="flex justify-center text-4xl font-extrabold text-blue-600 mb-3 tracking-tight">

            تأمين المركبات
            <img src="/bagge.png" alt="logp" width={40} />
          </h1>
          <p className="text-lg text-muted-foreground mb-2">شريكك الموثوق في التأمين</p>
          <p className="text-sm text-muted-foreground">
            حماية ما يهمك أكثر — مع شفافية وراحة بال تامة
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-12">
          <h3 className="font-semibold text-foreground mb-4 text-center text-lg">
            استكشف خدماتنا
          </h3>

          {[
            { label: "تأمين السيارات", gradient: "from-blue-500 to-indigo-500" },
            { label: "تأمين ضد الغير", gradient: "from-teal-500 to-cyan-500" },
            { label: "التأمين الشامل", gradient: "from-violet-500 to-purple-500" },
            { label: "التأمين الصحي", gradient: "from-pink-500 to-rose-500" },
          ].map((item, i) => (
            <a
              key={i}
              href={linkapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full p-4 bg-gradient-to-l ${item.gradient} text-white rounded-xl shadow-md hover:scale-[1.02] transition-transform text-center font-semibold`}
            >
              {item.label}
            </a>
          ))}

          <a
            href={linkapp}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 border-2 border-blue-500 text-blue-600 rounded-xl hover:bg-blue-50 transition font-semibold text-center"
          >
            احصل على عرض أسعار مجاني
          </a>
        </div>

        {/* About Section */}
        <div className="bg-white/80 dark:bg-blue-950/40 rounded-2xl p-8 mb-8 border border-blue-200/30 dark:border-blue-500/20 shadow-sm backdrop-blur-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">من نحن</h2>
          <p className="text-foreground mb-4 leading-relaxed">
            نحن في <span className="font-semibold">تأمين المركبات</span> نقدم حلول تأمين شاملة منذ أكثر من 25 عامًا، مع التزامنا الدائم
            بخدمة استثنائية وأسعار تنافسية وحماية كاملة لعملائنا.
          </p>
          <p className="text-foreground leading-relaxed">
            يعمل فريقنا من الخبراء لضمان حصولك أنت وعائلتك على الحماية المثلى. نؤمن بالشفافية، النزاهة، والعميل أولاً.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white/80 dark:bg-blue-950/40 rounded-2xl p-8 border border-blue-200/30 dark:border-blue-500/20 shadow-sm backdrop-blur-md">
          <h3 className="text-xl font-bold text-blue-600 mb-4">اتصل بنا</h3>
          <div className="space-y-3 text-foreground">
            <p>
              <span className="font-semibold">📞 الهاتف:</span>{" "}
              <a dir="ltr" href="tel:0550-999899" className="text-blue-500 hover:underline">
                0550-999899
              </a>
            </p>
            <p>
              <span className="font-semibold">📧 البريد الإلكتروني:</span>{" "}
              <a href="mailto:support@securelife.com" className="text-blue-500 hover:underline">
                support@securelife.com
              </a>
            </p>
            <p>
              <span className="font-semibold">🕒 ساعات العمل:</span> الاثنين - الجمعة، 8 صباحًا - 8 مساءً
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-blue-100/50 to-transparent dark:from-blue-950/30 border-t border-blue-200/30 dark:border-blue-500/20 mt-16">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-blue-500 hover:text-blue-600 transition">
                    المطالبات
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-500 hover:text-blue-600 transition">
                    الفواتير
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="font-bold text-foreground mb-4">قانوني</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-blue-500 hover:text-blue-600 transition">
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link href="/security-rules" className="text-blue-500 hover:text-blue-600 transition">
                    قواعد الأمان
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-blue-500 hover:text-blue-600 transition">
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

          <div className="border-t border-blue-200/30 dark:border-blue-500/20 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 تأمين المركبات. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
