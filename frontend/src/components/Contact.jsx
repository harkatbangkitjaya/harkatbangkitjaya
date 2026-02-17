import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { companyInfo, companyImages } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock submission
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success('Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <img
          src={companyImages.worker}
          alt="Contact Background"
          className="w-full h-full object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/97 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full mb-4">
            <span className="text-orange-400 font-semibold text-sm">Hubungi Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mari Wujudkan <span className="text-orange-500">Proyek Anda</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Alamat</h3>
                    <p className="text-gray-400 leading-relaxed">{companyInfo.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Telepon / WhatsApp</h3>
                    <a 
                      href={companyInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="bg-slate-800 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Email</h3>
                    <a 
                      href={`mailto:${companyInfo.email}`}
                      className="text-gray-400 hover:text-orange-500 transition-colors break-all"
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
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-900 border-slate-700 text-white focus:border-orange-500"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-900 border-slate-700 text-white focus:border-orange-500"
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">No. Telepon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-slate-900 border-slate-700 text-white focus:border-orange-500"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300">Subjek *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-slate-900 border-slate-700 text-white focus:border-orange-500"
                        placeholder="Perihal pesan Anda"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Pesan *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-slate-900 border-slate-700 text-white focus:border-orange-500 resize-none"
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
