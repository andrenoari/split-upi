const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

const replacements = [
  { search: "btnStartOver: 'Start over',", replace: "btnStartOver: 'Start over', navHome: 'Home', navHistory: 'History', historyTitle: 'Payment History', historySub: 'Your locally saved split payments.', historyEmpty: 'No past payments yet.', historySplit: 'Split in'," },
  { search: "btnStartOver: 'शुरू से शुरू करें',", replace: "btnStartOver: 'शुरू से शुरू करें', navHome: 'होम', navHistory: 'इतिहास', historyTitle: 'भुगतान इतिहास', historySub: 'आपके सहेजे गए भुगतान।', historyEmpty: 'अभी तक कोई भुगतान नहीं।', historySplit: 'हिस्से:'," },
  { search: "btnStartOver: 'শুরু থেকে শুরু করুন',", replace: "btnStartOver: 'শুরু থেকে শুরু করুন', navHome: 'হোম', navHistory: 'ইতিহাস', historyTitle: 'পেমেন্ট ইতিহাস', historySub: 'আপনার সংরক্ষিত পেমেন্ট।', historyEmpty: 'এখনও কোনো পেমেন্ট নেই।', historySplit: 'ভাগ:'," },
  { search: "btnStartOver: 'మొదటి నుండి ప్రారంభించండి',", replace: "btnStartOver: 'మొదటి నుండి ప్రారంభించండి', navHome: 'హోమ్', navHistory: 'చరిత్ర', historyTitle: 'చెల్లింపు చరిత్ర', historySub: 'మీ సేవ్ చేసిన చెల్లింపులు.', historyEmpty: 'ఇంకా చెల్లింపులు లేవు.', historySplit: 'భాగాలు:'," },
  { search: "btnStartOver: 'सुरुवातीपासून सुरू करा',", replace: "btnStartOver: 'सुरुवातीपासून सुरू करा', navHome: 'होम', navHistory: 'इतिहास', historyTitle: 'पेमेंट इतिहास', historySub: 'तुमचे जतन केलेले पेमेंट.', historyEmpty: 'अद्याप कोणतेही पेमेंट नाही.', historySplit: 'भाग:'," },
  { search: "btnStartOver: 'முதலிலிருந்து தொடங்கு',", replace: "btnStartOver: 'முதலிலிருந்து தொடங்கு', navHome: 'முகப்பு', navHistory: 'வரலாறு', historyTitle: 'பணம் செலுத்திய வரலாறு', historySub: 'உங்கள் சேமிக்கப்பட்ட பேமெண்ட்கள்.', historyEmpty: 'இதுவரை பேமெண்ட்கள் இல்லை.', historySplit: 'பகுதிகள்:'," },
  { search: "btnStartOver: 'શરૂઆતથી શરૂ કરો',", replace: "btnStartOver: 'શરૂઆતથી શરૂ કરો', navHome: 'હોમ', navHistory: 'ઇતિહાસ', historyTitle: 'પેમેન્ટ ઇતિહાસ', historySub: 'તમારા સાચવેલા પેમેન્ટ્સ.', historyEmpty: 'હજી સુધી કોઈ પેમેન્ટ નથી.', historySplit: 'ભાગ:'," },
];

let changed = false;
replacements.forEach(({search, replace}) => {
  if (js.includes(search) && !js.includes(replace)) {
    js = js.replace(search, replace);
    changed = true;
  }
});

if (changed) {
  fs.writeFileSync('app.js', js);
  console.log("Translations added.");
} else {
  console.log("No changes made.");
}
