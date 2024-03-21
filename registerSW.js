if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/CheckOutCheck/sw.js', { scope: '/CheckOutCheck/' })})}
