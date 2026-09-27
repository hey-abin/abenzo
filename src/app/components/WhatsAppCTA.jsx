'use client';
import { MessageCircle } from 'lucide-react';
import { CONTACT, getWhatsAppUrl } from '../lib/constants';
import { track } from '../lib/analytics';

/**
 * Reusable WhatsApp CTA button.
 *
 * @param {object}  props
 * @param {string}  [props.label]       Button text
 * @param {string}  [props.source]      Tracking source identifier
 * @param {string}  [props.message]     Custom pre-filled WhatsApp message
 * @param {'primary'|'outline'|'ghost'} [props.variant]
 * @param {string}  [props.className]   Extra Tailwind classes
 */
export default function WhatsAppCTA({
  label = 'Start a Project on WhatsApp',
  source = 'unknown',
  message,
  variant = 'primary',
  className = '',
}) {
  const href = message ? getWhatsAppUrl(message) : CONTACT.whatsappFull;

  const base =
    'inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#008278] focus-visible:outline-offset-2';

  const variants = {
    primary:
      'bg-[#008278] text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base hover:bg-[#00a396] hover:shadow-[0_0_30px_rgba(0,130,120,0.4)] active:scale-95',
    outline:
      'border border-[#008278] text-[#008278] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base hover:bg-[#008278] hover:text-white active:scale-95',
    ghost:
      'text-[#008278] px-4 py-2 text-sm hover:underline underline-offset-4',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track.whatsappClick(source)}
      className={`${base} ${variants[variant]} ${className}`}
      aria-label={`${label} — opens WhatsApp`}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {label}
    </a>
  );
}
