# Privacy Policy - Picture in Picture

Last Updated: October 24, 2026


### 0. Rule 0: Disclaimer on Modified Builds, External Packages & Unofficial Forks:

- **Original Source Integrity:** This privacy policy, safety guarantees, and security features apply strictly and exclusively to the official, unmodified extension binaries and source code distributed directly through this official repository ([hamzabellouch/picture-in-picture-ex](https://github.com/hamzabellouch/picture-in-picture-ex)) and its verified official releases.
- **Zero Liability for Modified / External Builds:** We (the publisher and maintainer) assume **no responsibility or liability whatsoever** for any modified extensions, third-party forks, repackaged `.crx` / `.xpi` / `.zip` archives, unofficial distribution channels, or altered projects not originating directly from this official repository. Any installation or use of modified, tampered, or third-party builds is entirely at your own risk, and the publisher assumes no responsibility for any consequences, damages, security compromises, or data breaches that may occur.


### 1. Executive Summary & Overview:

Picture in Picture is a lightweight browser extension designed to allow users to watch any video in a floating Picture-in-Picture (PiP) window directly from any webpage—featuring one-click toolbar activation, keyboard shortcut support (`Alt+P`), automatic video selection with Shadow DOM traversal, restriction override, dynamic video tracking via ResizeObserver, and an optional Automatic Picture-in-Picture mode.

#### Core Privacy Commitment:
Picture in Picture operates **100% locally on your device**. We do **not** collect, store, transmit, share, or sell any personal data, video streams, audio content, browsing history, device identifiers, or URLs to external servers, analytics providers, or third parties.


### 2. Information Processed On-Device:

To deliver its core video discovery and Picture-in-Picture functionality, Picture in Picture processes operations **strictly locally within your browser**:

- **On-Demand Video Discovery & Shadow DOM Traversal:** When you trigger the extension, it queries the local DOM to identify HTML5 `<video>` elements, including those embedded inside open Shadow DOM trees. This query runs purely in memory on the client side.
- **Playback State & Geometry Inspection:** The extension inspects local video properties (such as `readyState`, `paused`, `ended`, `currentTime`, and bounding box coordinates) solely to determine which video is actively playing and largest in viewport area.
- **Standard W3C Picture-in-Picture API Invocations:** The extension invokes native browser APIs (`HTMLVideoElement.requestPictureInPicture()` and `Document.exitPictureInPicture()`). It does not record, intercept, proxy, transcode, or download video streams.
- **Local Preference Storage:** Only your preference for Automatic Picture-in-Picture (`autoPip: boolean`) is persisted locally via `chrome.storage.local`. No viewing history, timestamps, or webpage URLs are ever saved to storage or disk.
- **MediaSession Event Registration:** When Automatic PiP is enabled, the extension registers a handler for the `enterpictureinpicture` action using the browser's native `navigator.mediaSession` API to detect when the browser allows automated background PiP.
- **Zero Cloud Processing & Immediate Garbage Collection:** All script executions occur in local browser memory. No cached payloads or video metadata remain after the script completes.
- **No Browsing Tracking:** The extension never monitors, records, logs, or analyzes your browsing activity, viewing habits, or the web pages you visit.


### 3. Permissions Used & Their Purposes:

Picture in Picture adheres to the principle of least privilege and requests only the minimal permissions required for operation:

**A. Context Menus (`contextMenus`)**
- **Purpose:** Adds an optional settings toggle ("Automatic picture-in-picture (BETA)") to the extension's right-click context menu on the toolbar icon.

**B. Scripting (`scripting`)**
- **Purpose:** Injects the PiP toggle script (`script.js`) into the active tab on demand when clicked, and dynamically registers the background listener (`autoPip.js`) when Automatic PiP mode is enabled.

**C. Storage (`storage`)**
- **Purpose:** Saves your preferred Automatic PiP setting locally on your device so your preference is preserved across browser sessions.

**D. Host Permissions (`<all_urls>`)**
- **Purpose:** Enables the extension to discover video elements and trigger Picture-in-Picture across any website hosting HTML5 video content.

**E. Browser Specific Settings (Firefox Gecko ID: `picture-in-picture@tkno`)**
- **Purpose:** Required by Mozilla Firefox for extension identification and Manifest V3 compatibility (Firefox 109+).


### 4. Safety & Content Handling Policy:

Picture in Picture complies strictly with modern browser security standards:

- **Strict Local Isolation:** The extension executes exclusively within the local browser runtime. No remote scripts (`eval`, remote script injection, or external CDN dependencies) are ever loaded or executed.
- **Native Browser PiP Controls:** PiP playback is handled directly by the browser's native windowing subsystem. The extension has no access to decrypt, duplicate, or inspect protected media content.
- **Safe Restriction Override:** If a website attempts to block PiP using the `disablePictureInPicture` property, the extension safely resets this attribute to `false` locally on the video element without altering any other site behavior.
- **Zero Data Exfiltration:** The extension possesses no background API endpoints, telemetry servers, or outbound network channels.


### 5. Data Sharing, Analytics & Advertising:

- **No Data Sharing:** Zero user data, video streams, audio, or browsing information leaves your browser.
- **No Third-Party Analytics / Telemetry:** Picture in Picture contains no tracking SDKs, Google Analytics, telemetry beacons, or behavioral monitoring tools.
- **No Advertisements:** Picture in Picture does not inject, display, or monetize advertisements of any kind.


### 6. Data Retention & Lifecycle:

- **Zero Data Retention:** Because Picture in Picture does not collect or log personal data, video history, or user activity, there is no user data retained on any external server or database.
- **Immediate In-Memory Cleanup:** Video element references and ResizeObserver instances are immediately released from memory when Picture-in-Picture mode is closed.
- **Complete Removal:** Uninstalling or disabling Picture in Picture instantly ceases all script execution and removes all extension files and local settings.


### 7. Managing Permissions & User Rights:

You maintain full control over Picture in Picture. You may disable or remove the extension at any time via your browser settings:

- **Chromium Browsers (Chrome, Edge, Brave, Opera, Vivaldi):** Navigate to `chrome://extensions/` (or `edge://extensions/`), locate **Picture in Picture**, and toggle it off or click **Remove**.
- **Mozilla Firefox:** Navigate to `about:addons` > **Extensions**, locate **Picture in Picture**, and choose **Disable** or **Remove**.


### 8. Contact & Support:

If you have any questions, suggestions, or concerns regarding this Privacy Policy or the security of Picture in Picture, please contact:  
**Email:** hamzabellouchcontact@gmail.com  
**GitHub:** [https://github.com/hamzabellouch/picture-in-picture-ex](https://github.com/hamzabellouch/picture-in-picture-ex)


-------------------------------------------



# سياسة الخصوصية - Picture in Picture

آخر تحديث: ٢٤ أكتوبر ٢٠٢٦


### ٠. القاعدة رقم ٠: إخلاء المسؤولية عن الإضافات المعدلة والحزم الخارجية والمشاريع المشتقة:

* **سلامة المصدر الأصلي:** تنطبق سياسة الخصوصية، وضمانات الأمان، والميزات المذكورة في هذه الوثيقة حصرياً وصراحةً على الإصدارات الرسمية غير المعدلة من الإضافة والشفرة المصدرية المنشورة مباشرة عبر هذا المستودع الأصلي المعتمد ([hamzabellouch/picture-in-picture-ex](https://github.com/hamzabellouch/picture-in-picture-ex)) وصفحة إصداراته الرسمية فقط.
* **عدم تحمل المسؤولية عن النسخ المعدلة أو الخارجية:** نحن (الناشر والمطور) **لا نتحمل أي مسؤولية قانونية أو أمنية أو تقنية** عن تثبيت أو استخدام أي إضافات معدلة، أو حزم خارجية (`.crx` / `.xpi` / `.zip`)، أو نسخ مُعاد تجميعها، أو مشاريع مشتقة ومعدلة لا تنتمي لهذا المستودع الأصلي. كل ما ينتج عن استخدام أو تثبيت نسخ خارجية أو معدلة (من فقدان بيانات، أو ثغرات أمنية، أو برمجيات خبيثة، أو أي أضرار ناجمة) يقع بالكامل على عاتق المستخدم وحده دون أدنى مسؤولية على الناشر.


### ١. الملخص التنفيذي والنظرة العامة:

إضافة Picture in Picture هي إضافة متصفح خفيفة وسريعة، صُممت لتمكين المستخدمين من تشغيل أي مقطع فيديو داخل نافذة صورة داخل صورة (Picture-in-Picture) عائمة ومستقلة على أي صفحة ويب—مع ميزة التفعيل بنقرة واحدة من شريط الأدوات، ودعم اختصار لوحة المفاتيح (`Alt+P`)، والاكتشاف الذكي لأكبر مقطع فيديو نشط مع فحص عناصر Shadow DOM، وتجاوز قيود المواقع، ومراقبة تغيير حجم الفيديو تلقائياً عبر ResizeObserver، بالإضافة إلى وضع التشغيل التلقائي الاختياري (Auto-PiP).

#### الالتزام الأساسي بالخصوصية:
تعمل إضافة Picture in Picture **بنسبة ١٠٠٪ محلياً داخل متصفحك**. نحن **لا نجمع**، ولا نخزن، ولا ننقل، ولا نشارك، ولا نبيع أي بيانات شخصية، أو تدفقات فيديو، أو محتوى صوتي، أو سجل تصفح، أو معرفات أجهزة، أو عناوين مواقع (URLs) إلى أي خوادم تحليلات خارجية أو أطراف ثالثة.


### ٢. المعلومات والعمليات التي تتم معالجتها محلياً:

لأداء وظيفتها الأساسية المتمثلة في اكتشاف الفيديو وتشغيل وضع صورة داخل صورة، تقوم إضافة Picture in Picture بالعمليات التالية **محلياً وحصرياً داخل متصفحك**:

* **اكتشاف الفيديو وفحص Shadow DOM عند الطلب:** عند النقر على أيقونة الإضافة، يتم البحث محلياً داخل شجرة الـ DOM عن عناصر `<video>` في الصفحة، بما في ذلك العناصر المدمجة داخل أشجار الـ Shadow DOM المفتوحة. تتم هذه العملية بالكامل داخل الذاكرة المحلية للجهاز.
* **فحص حالة التشغيل والأبعاد:** تقوم الإضافة بفحص الخصائص المدمجة للفيديو محلياً (مثل `readyState` و `paused` و `ended` و `currentTime` وأبعاد المستطيل المحيط بالفيديو) فقط لتحديد الفيديو النشط والأكبر حجماً لعرضه.
* **استدعاء واجهات Picture-in-Picture القياسية:** تستخدم الإضافة الواجهات البرمجية الرسمية المدمجة في المتصفح (`HTMLVideoElement.requestPictureInPicture()` و `Document.exitPictureInPicture()`). لا تقوم الإضافة بتسجيل أو اعتراض أو تنزيل تدفقات الفيديو أو الصوت.
* **تخزين محلي لتفضيلات الوضع التلقائي فقط:** تحتفظ الإضافة فقط باختيارك لتفعيل وضع صورة داخل صورة التلقائي (`autoPip: boolean`) في التخزين المحلي `chrome.storage.local`. لا يتم حفظ أي روابط أو معلومات عن مقاطع الفيديو المشاهدة في التخزين الدائم.
* **تسجيل معالج أحداث MediaSession:** عند تفعيل وضع الـ Auto-PiP، تسجل الإضافة معالجاً لحدث `enterpictureinpicture` عبر واجهة `navigator.mediaSession` القياسية بالمتصفح لاكتشاف إمكانية الانتقال التلقائي للنافذة العائمة عند التنقل بين التبويبات.
* **انعدام المعالجة السحابية والتفريغ الفوري:** تجري كافة العمليات البرمجية داخل الذاكرة المؤقتة (RAM) للجهاز، ولا تبقى أي مراجع أو بيانات بعد انتهاء تشغيل السكربت.
* **عدم تتبع نشاط التصفح:** الإضافة لا ترصد، ولا تسجل، ولا تحلل المواقع التي تزورها أو مقاطع الفيديو التي تشاهدها.


### ٣. الأذونات المستخدمة وأغراضها:

تلتزم Picture in Picture بمبدأ الحد الأدنى من الصلاحيات ولا تطلب إلا الأذونات الضرورية لعملها:

**أ. القوائم السياقية (`contextMenus`)**
* **الغرض:** إضافة خيار تبديل اختياري ("Automatic picture-in-picture (BETA)") في القائمة السياقية عند النقر بزر الفأرة الأيمن على أيقونة الإضافة في شريط الأدوات.

**ب. السكربتات البرمجية (`scripting`)**
* **الغرض:** حقن سكربت التحكم بالفيديو (`script.js`) داخل التبويب النشط عند النقر، وتسجيل سكربت المحتوى الديناميكي (`autoPip.js`) عند تفعيل وضع صورة داخل صورة التلقائي.

**ج. التخزين المحلي (`storage`)**
* **الغرض:** حفظ اختيارك لتفعيل أو تعطيل ميزة Auto-PiP محلياً على جهازك لضمان ثبات تفضيلك عبر جلسات التصفح.

**د. أذونات النطاقات المضيفة (`<all_urls>`)**
* **الغرض:** تمكين الإضافة من اكتشاف مشغلات الفيديو وتفعيل ميزة صورة داخل صورة على أي موقع ويب يحتوي على مقاطع فيديو.

**هـ. إعدادات فايرفوكس الخاصة (Gecko ID: `picture-in-picture@tkno`)**
* **الغرض:** مطلوب من قبل متصفح Mozilla Firefox لتعريف الإضافة وضمان توافقيتها مع مواصفات Manifest V3 (إصدار 109 فما فوق).


### ٤. سياسة الأمان والتعامل مع المحتوى:

تلتزم إضافة Picture in Picture بالمعايير الصارمة لأمان المتصفحات:

* **العزل المحلي التام:** تعمل الإضافة حصرياً داخل بيئة المتصفح المحلية. لا يتم تنزيل أو تنفيذ أي سكربتات أو أكواد برمجية خارجية (`eval` أو روابط CDN خارجية).
* **الاعتماد على مشغل المتصفح الأصلي:** يتم إدارة عرض نافذة الـ PiP بواسطة النظام الداخلي للمتصفح مباشرة، ولا تملك الإضافة أي وصول لفك تشفير المحتوى المحمي أو نسخه.
* **تجاوز القيود بأمان:** إذا كان الموقع يضع علامة `disablePictureInPicture` لتعطيل الميزة برمجياً، تقوم الإضافة بإعادة تعيين هذه الخاصية محلياً إلى `false` على عنصر الفيديو المحدد دون التأثير على عمل الموقع.
* **انعدام تسريب البيانات:** لا تحتوي الإضافة على أي خوادم أو قنوات اتصال خارجية، ولا تقوم بأي طلبات HTTP/HTTPS لخوادم طرف ثالث.


### ٥. مشاركة البيانات والتحليلات والإعلانات:

* **عدم مشاركة البيانات:** لا تغادر أي معلومات فيديو، أو بيانات صوتية، أو سجلات تصفح جهازك على الإطلاق.
* **عدم وجود تحليلات أو تتبع من جهات خارجية:** لا تحتوي إضافة Picture in Picture على أي مكتبات تتبع، أو Google Analytics، أو خدمات Telemetry، أو أدوات تقارير خارجية.
* **خالية تماماً من الإعلانات:** لا تعرض الإضافة أو تحقن أو تروّج لأي نوع من الإعلانات التجارية أو السلوكية.


### ٦. الاحتفاظ بالبيانات ودورة حياتها:

* **عدم الاحتفاظ بالبيانات:** نظراً لأن إضافة Picture in Picture لا تجمع ولا تسجل أي بيانات شخصية أو سجلات مشاهدة، فإنه لا توجد أي بيانات للمستخدم يتم الاحتفاظ بها على أي خوادم أو مساحات تخزين دائمة.
* **مسح فوري من الذاكرة:** يتم إفراغ مراجع عناصر الفيديو ومراقبات الحجم (ResizeObserver) من الذاكرة المؤقتة (RAM) فور إغلاق نافذة الـ PiP أو انتهاء المعالجة.
* **الحذف الكامل:** يؤدي تعطيل أو إلغاء تثبيت إضافة Picture in Picture إلى إزالة كافة ملفات الإضافة وتفضيلاتها فوراً وبشكل دائم.


### ٧. إدارة الأذونات وحقوق المستخدم:

تحتفظ بالتحكم الكامل في إضافة Picture in Picture، ويمكنك تعطيلها أو إزالتها في أي وقت من خلال إعدادات المتصفح:

* **متصفحات كروميوم (Chrome، Edge، Brave، Opera، Vivaldi):** توجه إلى `chrome://extensions/` (أو `edge://extensions/`)، ثم ابحث عن **Picture in Picture** وقم بإيقاف تفعيلها أو الضغط على **إزالة (Remove)**.
* **متصفح موزيلا فايرفوكس (Firefox):** توجه إلى `about:addons` ثم قسم **الملحقات (Extensions)**، وابحث عن **Picture in Picture** واختر **تعطيل (Disable)** أو **إزالة (Remove)**.


### ٨. التواصل والدعم:

إذا كانت لديك أي أسئلة أو استفسارات أو ملاحظات بخصوص سياسة الخصوصية هذه أو أمان إضافة Picture in Picture، يُرجى التواصل معنا عبر:  
**البريد الإلكتروني:** hamzabellouchcontact@gmail.com  
**مستودع GitHub:** [https://github.com/hamzabellouch/picture-in-picture-ex](https://github.com/hamzabellouch/picture-in-picture-ex)
