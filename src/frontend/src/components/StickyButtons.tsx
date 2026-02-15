import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StickyButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919922555866"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 animate-bounce-slow"
      >
        <Button
          size="lg"
          className="btn-whatsapp rounded-full w-16 h-16 p-0 shadow-2xl"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919922555866"
        className="fixed bottom-6 left-6 z-50"
      >
        <Button
          size="lg"
          className="btn-primary rounded-full w-16 h-16 p-0 shadow-2xl"
        >
          <Phone className="w-7 h-7" />
        </Button>
      </a>
    </>
  );
}
