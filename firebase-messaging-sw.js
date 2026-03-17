importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// index.html と同じ設定を使う
firebase.initializeApp({
  apiKey: "AIzaSyCG08DwdbJw1cXfZY8Ywj1He1jaWjYzTJs",
  authDomain: "sns-marketing-81243.firebaseapp.com",
  databaseURL: "https://sns-marketing-81243-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sns-marketing-81243",
  storageBucket: "sns-marketing-81243.firebasestorage.app",
  messagingSenderId: "21455239296",
  appId: "1:21455239296:web:af1e6010e29476a0b50e65"
});

const messaging = firebase.messaging();

// バックグラウンド（アプリを閉じているとき）の通知受信
messaging.onBackgroundMessage(payload => {
  const { title = '受講予約', body = '' } = payload.notification || {};
  self.registration.showNotification(title, {
    body,
    icon: '/icon.png',
    badge: '/icon.png',
    tag: 'booking-notification',
    vibrate: [200, 100, 200],
  });
});
