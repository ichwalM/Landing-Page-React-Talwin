import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle } from 'lucide-react';

const ContactPage = ({isDark, id}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (formData.name && formData.email && formData.subject && formData.message) {
            console.log('Form submitted:', formData);
            setIsSubmitted(true);

            setTimeout(() => {
                setIsSubmitted(false);
                set ({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, 3000);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            value: 'ichwal093@gmail.com',
            link: 'mailto:your.email@example.com',
            color: 'blue'
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Phone',
            value: '+62 822-9394-7428',
            link: 'tel:+6281234567890',
            color: 'green'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Location',
            value: 'Makassar, Sulawesi Selatan',
            link: '#',
            color: 'purple'
        }
    ];

    const socialMedia = [
        {
            icon: <Github className="w-5 h-5" />,
            name: 'GitHub',
            link: 'https://github.com/ichwalM',
            color: 'gray'
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/ichwal/',
            color: 'blue'
        },
        {
            icon: <Instagram className="w-5 h-5" />,
            name: 'Instagram',
            link: 'https://www.instagram.com/ichwal_mr/',
            color: 'pink'
        },
    ];

    const colorVariants = {
        blue: isDark ? 'bg-blue-600' : 'bg-blue-500',
        green: isDark ? 'bg-green-600' : 'bg-green-500',
        purple: isDark ? 'bg-purple-600' : 'bg-purple-500',
        gray: isDark ? 'bg-gray-600' : 'bg-gray-500',
        pink: isDark ? 'bg-pink-600' : 'bg-pink-500',
        cyan: isDark ? 'bg-cyan-600' : 'bg-cyan-500'
    };

    return (
        <section id={id} className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-blue-50'}`}>
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <div data-aos="fade-up">
                        <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Hubungi Saya
                        </h1>
                        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Mari berkolaborasi dan wujudkan project impian Anda
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Contact Info Section */}
                    <div className="space-y-8">
                        <div className="space-y-4" data-aos="fade-up">
                            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Informasi Kontak
                            </h2>
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className={`block p-6 rounded-xl transition-all duration-500 hover:scale-101 hover:shadow-xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                        }`}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-lg ${colorVariants[info.color]} text-white`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className={`font-semibold mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {info.title}
                                            </h3>
                                            <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                {info.value}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300">
                            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Ikuti Saya
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {socialMedia.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                                            }`}
                                    >
                                        <div className={`p-2 rounded-lg ${colorVariants[social.color]} text-white`}>
                                            {social.icon}
                                        </div>
                                        <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {social.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div
                            className={`p-6 rounded-xl ${isDark ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-blue-500 to-purple-500'
                                } text-white`}
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <h3 className="text-xl font-bold mb-2">💡 Fun Fact</h3>
                            <p className="text-blue-100">
                                Biasanya saya merespon email dalam 24 jam. Untuk project urgent, hubungi via WhatsApp!
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div data-aos="fade-up">
                        <div className={`p-8 rounded-xl shadow-xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                            }`}>
                            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Kirim Pesan
                            </h2>

                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center py-12">
                                    <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
                                    <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        Pesan Terkirim!
                                    </h3>
                                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                                        Terima kasih, saya akan segera merespon pesan Anda.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div>
                                        <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                            Nama Lengkap
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 outline-none ${isDark ? 'bg-gray-700 text-white border border-gray-600' : 'bg-gray-50 text-gray-900 border border-gray-300'
                                                }`}
                                            placeholder="Ichwal"
                                        />
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 outline-none ${isDark ? 'bg-gray-700 text-white border border-gray-600' : 'bg-gray-50 text-gray-900 border border-gray-300'
                                                }`}
                                            placeholder="ichwal@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                            Subjek
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 outline-none ${isDark ? 'bg-gray-700 text-white border border-gray-600' : 'bg-gray-50 text-gray-900 border border-gray-300'
                                                }`}
                                            placeholder="Diskusi Project Website"
                                        />
                                    </div>

                                    <div>
                                        <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                            Pesan
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none ${isDark ? 'bg-gray-700 text-white border border-gray-600' : 'bg-gray-50 text-gray-900 border border-gray-300'
                                                }`}
                                            placeholder="Tulis pesan Anda di sini..."
                                        />
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className={`w-full py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                                            }`}
                                    >
                                        <Send className="w-5 h-5" />
                                        Kirim Pesan
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;