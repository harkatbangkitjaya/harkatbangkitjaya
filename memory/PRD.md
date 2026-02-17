# PRD - Landing Page PT. Harkat Bangkit Jaya

## Original Problem Statement
Buatkan landing page yang modern dan minimalist serta eye catching sesuai company profile yang dikirim oleh user untuk PT. Harkat Bangkit Jaya - perusahaan kontraktor dan perdagangan umum.

## User Requirements
- Warna konstruksi (oranye, kuning, hitam)
- Fitur lengkap: hero, services, about, portfolio, testimonials, contact
- CTA: Email dan WhatsApp
- Bahasa: Indonesia
- Link WhatsApp: https://wa.me/6282289891300?text=Hallo%20PT.%20Harkat%20Bangkit%20Jaya%20%2C%20saya%20mau%20berkonsultasi

## Company Information
- **Nama**: PT. Harkat Bangkit Jaya
- **Bidang**: Kontraktor dan Perdagangan Umum
- **Alamat**: Jl. Bebedahan 1 No.14 Kota Tasikmalaya, Jawa Barat 46111
- **Telepon**: 082289891300
- **Email**: ptharkatbangkitjaya@gmail.com
- **Tahun Berdiri**: 2025

## Core Services
1. Perawatan Bangunan dan Gedung
2. Arsitektur dan Desain Interior
3. Mekanikal - Listrik - Plumbing (MEP)
4. Perdagangan Umum
5. Penyedia Tenaga Kerja Spesialis
6. Teknik Akses Tali
7. Fabrikasi & Pemasangan Struktur
8. Model Skala - Maquete - Diorama

## What's Been Implemented (Desember 17, 2025)

### Frontend (Mock Data - Phase 1)
✅ **Komponen yang Dibuat:**
- `/app/frontend/src/data/mock.js` - Mock data untuk seluruh landing page
- `/app/frontend/src/components/Navbar.jsx` - Navigation bar responsive dengan smooth scroll
- `/app/frontend/src/components/Hero.jsx` - Hero section dengan CTA buttons
- `/app/frontend/src/components/Services.jsx` - 8 service cards dengan icons
- `/app/frontend/src/components/About.jsx` - About section dengan visi, misi, dan nilai perusahaan
- `/app/frontend/src/components/Portfolio.jsx` - Portfolio dengan category filter
- `/app/frontend/src/components/Testimonials.jsx` - 4 testimonial cards
- `/app/frontend/src/components/Contact.jsx` - Contact form dan info cards
- `/app/frontend/src/components/Footer.jsx` - Footer dengan quick links dan social media
- `/app/frontend/src/App.js` - Main app component
- `/app/frontend/src/App.css` - Custom styling dan animations

✅ **Design Features:**
- Modern minimalist design dengan warna konstruksi (orange #ea580c, slate dark)
- Fully responsive untuk mobile, tablet, dan desktop
- Smooth scroll navigation
- Hover effects dan transitions
- Glass-morphism effects pada beberapa elemen
- Professional construction-themed color scheme

✅ **Functional Features:**
- Working navigation dengan smooth scroll ke sections
- Mobile-responsive hamburger menu
- WhatsApp CTA button yang terintegrasi
- Email link yang berfungsi
- Contact form dengan toast notification (mock submission)
- Portfolio category filter yang berfungsi
- Semua interaksi frontend berfungsi dengan baik

## Tech Stack
- **Frontend**: React 19, Tailwind CSS, Shadcn UI
- **Icons**: Lucide React
- **Toast**: Sonner
- **Backend**: FastAPI (belum diimplementasi)
- **Database**: MongoDB (belum diimplementasi)

## Next Tasks (Prioritized Backlog)

### P0 - Backend Development (Optional - Jika diperlukan)
- [ ] Endpoint POST `/api/contact` untuk menerima form submission
- [ ] Email notification system untuk form submissions
- [ ] Database schema untuk menyimpan contact inquiries
- [ ] Admin dashboard untuk melihat inquiries (optional)

### P1 - Enhancements
- [ ] Google Maps integration untuk lokasi kantor
- [ ] Lightbox untuk portfolio images
- [ ] Loading states dan skeleton screens
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Add real client logos di section khusus
- [ ] Performance optimization (lazy loading images)

### P2 - Additional Features
- [ ] Multi-language support (English)
- [ ] Blog section untuk case studies
- [ ] Download company profile PDF
- [ ] Live chat integration
- [ ] Google Analytics tracking

## Status
✅ Frontend dengan mock data - COMPLETE
⏳ Backend API - PENDING (menunggu konfirmasi user)
⏳ Database integration - PENDING

## Notes
- Landing page saat ini menggunakan mock data dan fully functional di frontend
- Form submission menampilkan toast notification tapi belum tersimpan ke database
- Semua CTA buttons (WhatsApp, Email) sudah terintegrasi dengan benar
- Design mengikuti construction theme dengan warna profesional
