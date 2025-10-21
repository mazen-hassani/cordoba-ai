'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-700 p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-gray-300 text-sm">
            We use cookies to enhance your experience. By continuing to browse this site, you agree to our use of cookies.
            <a href="#privacy" className="text-blue-400 hover:text-blue-300 ml-1">
              Learn more
            </a>
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-gray-300 hover:text-white border border-slate-600 rounded-lg transition text-sm"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-semibold"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
