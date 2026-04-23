
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsApp() {
    const phoneNumber = "5493516959527";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] active:scale-90 group"
                aria-label="Contact on WhatsApp"
            >
                <FaWhatsapp size={35} className="group-hover:animate-pulse" />
            </a>
        </div>
    );
}
