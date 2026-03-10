import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { companyInfo } from '../data/mock';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading('Mengirim pesan...');

    try {
      // Web3Forms API endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          from_name: 'PT. Harkat Bangkit Jaya - Website Contact Form',
          replyto: formData.email, // Reply to customer email
          //ccemail: `maulanamalikjb147@gmail.com,${formData.email}`, // CC to admin and customer
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Show success message
        toast.success('Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.', {
          id: loadingToast,
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Gagal mengirim pesan');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Gagal mengirim pesan. Silakan coba lagi atau hubungi kami via WhatsApp.', {
        id: loadingToast,
      });
    }
  };

  return (
    <section id="contact" className={`relative py-24 ${isDark ? 'bg-slate-900' : 'bg-white'} overflow-hidden`}>
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes for 3D depth */}
        <div className={`absolute top-20 right-1/4 w-72 h-72 ${isDark ? 'bg-orange-600/5' : 'bg-orange-600/10'} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-20 left-1/4 w-80 h-80 ${isDark ? 'bg-orange-500/5' : 'bg-orange-500/10'} rounded-full blur-3xl`}></div>
        <div className={`absolute top-1/2 left-10 w-64 h-64 ${isDark ? 'bg-orange-700/5' : 'bg-orange-700/10'} rounded-full blur-3xl`}></div>

        {/* Hexagon pattern for depth */}
        <div className={`absolute inset-0 ${isDark ? 'opacity-[0.015]' : 'opacity-[0.03]'}`}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" patternUnits="userSpaceOnUse" width="100" height="100">
                <path d="M25,0 L75,0 L100,43.3 L75,86.6 L25,86.6 L0,43.3 Z" fill="none" stroke="#ea580c" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 ${isDark ? 'bg-orange-600/20' : 'bg-orange-100'} border ${isDark ? 'border-orange-500/30' : 'border-orange-300'} rounded-full mb-4`}>
            <span className={`${isDark ? 'text-orange-400' : 'text-orange-600'} font-semibold text-sm`}>Hubungi Kami</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-4`}>
            Mari Wujudkan <span className="text-orange-500">Proyek Anda</span>
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-slate-600'} max-w-3xl mx-auto`}>
            Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            <Card className={`${isDark ? 'bg-slate-800/90 border-slate-700' : 'bg-white border-gray-200 shadow-lg'} backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} font-bold mb-2`}>Alamat</h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>{companyInfo.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className={`${isDark ? 'bg-slate-800/90 border-slate-700' : 'bg-white border-gray-200 shadow-lg'} backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} font-bold mb-2`}>Telepon / WhatsApp</h3>
                    <a
                      href={companyInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDark ? 'text-gray-400' : 'text-slate-600'} hover:text-orange-500 transition-colors`}
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className={`${isDark ? 'bg-slate-800/90 border-slate-700' : 'bg-white border-gray-200 shadow-lg'} backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} font-bold mb-2`}>Email</h3>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className={`${isDark ? 'text-gray-400' : 'text-slate-600'} hover:text-orange-500 transition-colors break-all`}
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick CTA */}
            <Card className="bg-gradient-to-br from-orange-600 to-orange-700 border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-white font-bold text-xl mb-2">Butuh Konsultasi Cepat?</h3>
                <p className="text-orange-100 mb-4">Chat langsung dengan tim kami</p>
                <Button
                  onClick={() => window.open(companyInfo.whatsapp, '_blank')}
                  className="w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold"
                >
                  <Phone className="mr-2" size={18} />
                  Chat WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className={`${isDark ? 'bg-slate-800/90 border-slate-700' : 'bg-white border-gray-200 shadow-lg'} backdrop-blur-sm`}>
              <CardHeader>
                <CardTitle className={`text-2xl ${isDark ? 'text-white' : 'text-slate-900'}`}>Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={`${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-gray-50 border-gray-300 text-slate-900'} focus:border-orange-500`}
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={`${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-gray-50 border-gray-300 text-slate-900'} focus:border-orange-500`}
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className={`${isDark ? 'text-gray-300' : 'text-slate-700'}`}>No. Telepon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={`${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-gray-50 border-gray-300 text-slate-900'} focus:border-orange-500`}
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className={`${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Subjek *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-gray-50 border-gray-300 text-slate-900'} focus:border-orange-500`}
                        placeholder="Perihal pesan Anda"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className={`${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Pesan *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-gray-50 border-gray-300 text-slate-900'} focus:border-orange-500 resize-none`}
                      placeholder="Tuliskan pesan atau pertanyaan Anda..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg font-semibold group transition-all duration-300 hover:scale-105"
                  >
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
