import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://www.facebook.com" className="fa fa-facebook" aria-label="facebook link"></a>
        <a href="https://www.linkedin.com" className="fa fa-linkedin" aria-label="linkedin link"></a>
        <a href="https://www.instagram.com" className="fa fa-instagram" aria-label="instagram link"></a>
      </div>
      <div className="footer-info">
        <p><a href="/privacy_policy.html">Privacy Policy</a></p>
        <p><a href="/faq.html">FAQ</a></p>
        <p><a href="/terms_conditions.html">Terms and Conditions</a></p>
      </div>
      <p>© 2024 RX. All rights reserved | CA 92602, California, USA | Phone: 1-800-123-4444 | Email:contact@RX.com</p>
      <div className="footer-app">
        <a href="https://www.apple.com/app-store/" className="app-store-link">
          <img src="/ecom-img/AppStore.png" alt="Download on the App Store" />
        </a>
        <a href="https://play.google.com/store/games?hl=en_US&gl=US" className="google-play-link">
          <img src="/ecom-img/GoogPlay.png" alt="Get it on Google Play" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;