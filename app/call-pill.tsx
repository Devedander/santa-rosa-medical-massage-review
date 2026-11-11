'use client';

import { Phone } from 'lucide-react';
import { businessInfo } from './business-info';
import { trackEvent } from './analytics';

export default function CallPill() {
  return <a
    className="n-call-pill"
    href={businessInfo.phoneHref}
    aria-label={`Call Santa Rosa Medical Massage at ${businessInfo.phoneDisplay}`}
    onClick={() => trackEvent('phone_click', { placement: 'navigation' })}
  >
    <Phone size={19} aria-hidden="true" />
    <span className="n-call-label">Call</span><span className="n-call-number">{businessInfo.phoneDisplay}</span>
  </a>;
}
