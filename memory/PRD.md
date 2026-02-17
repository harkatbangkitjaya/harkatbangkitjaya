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

### Frontend (Mock Data - Phase 1) ✅ COMPLETE v4.0
✅ **All Components:**
- `/app/frontend/src/data/mock.js` - Mock data + marketing copy + visi misi sesuai dokumen
- `/app/frontend/src/components/Navbar.jsx` - Fixed solid navbar
- `/app/frontend/src/components/Hero.jsx` - Hero section
- **`/app/frontend/src/components/ClientsSection.jsx` - NEW: Animated client logos (infinite scroll)**
- `/app/frontend/src/components/Services.jsx` - Circular hero + smooth parallax
- `/app/frontend/src/components/About.jsx` - Visi & Misi sesuai dokumen PDF
- `/app/frontend/src/components/Portfolio.jsx` - 3D grid background
- `/app/frontend/src/components/Testimonials.jsx` - 3D diagonal pattern
- `/app/frontend/src/components/Contact.jsx` - 3D hexagon pattern
- `/app/frontend/src/components/Footer.jsx` - Footer complete

✅ **NEW Features v4.0:**
- **Client Logos Section** dengan infinite scroll animation
- Animation berjalan terus menerus (30s loop)
- Pause on hover untuk better UX
- Gradient fade di kiri-kanan untuk seamless effect
- 8 client cards dengan hover effects

✅ **Visi & Misi Updated:**
- Sesuai dengan dokumen company profile
- Visi: 3 poin komitmen perusahaan
- Misi: Detail tentang pengembangan tim & kualitas

✅ **Design Features:**
- Clean circular hero images tanpa blur
- 3D backgrounds dengan geometric patterns
- Smooth animations tanpa lag
- Infinite scrolling client logos
- Professional construction theme
- Fully responsive

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
