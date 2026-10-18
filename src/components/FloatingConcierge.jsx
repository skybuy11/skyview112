import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingConcierge() {
  return (
    <div className="floating-concierge no-print">
      <a
        href="https://wa.me/447725355355?text=Hello%20Skyview%20Consultants,%20I%20would%20like%20free%20guidance%20on%20studying%20in%20the%20UK."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat on WhatsApp with Skyview Consultants"
      >
        <MessageCircle size={22} />
        <span className="wa-label">WhatsApp Advisor</span>
      </a>

      <style>{`
        .floating-concierge {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 990;
        }

        .whatsapp-float-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #10B981;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 0.85rem 1.35rem;
          border-radius: 99px;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.38);
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }

        .whatsapp-float-btn:hover {
          background: #059669;
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(16, 185, 129, 0.48);
        }

        @media (max-width: 640px) {
          .floating-concierge {
            bottom: 1rem;
            right: 1rem;
          }
          .whatsapp-float-btn {
            padding: 0.8rem 1.15rem;
            font-size: 0.88rem;
          }
        }
      `}</style>
    </div>
  );
}
