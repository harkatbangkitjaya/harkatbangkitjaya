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

### Frontend (Mock Data - Phase 1) ✅ FINAL v3.0
✅ **Komponen yang Dibuat & Disempurnakan:**
- `/app/frontend/src/data/mock.js` - Mock data + company images + marketing copy
- `/app/frontend/src/components/Navbar.jsx` - Fixed solid navbar
- `/app/frontend/src/components/Hero.jsx` - Hero section
- `/app/frontend/src/components/Services.jsx` - **CLEAN: Circular hero tanpa blur + smooth parallax**
- `/app/frontend/src/components/About.jsx` - **CLEAN: Circular hero tanpa blur**
- `/app/frontend/src/components/Portfolio.jsx` - **3D: Grid pattern + gradient orbs**
- `/app/frontend/src/components/Testimonials.jsx` - **3D: Diagonal lines pattern**
- `/app/frontend/src/components/Contact.jsx` - **3D: Hexagon pattern**
- `/app/frontend/src/components/Footer.jsx` - Footer lengkap

✅ **Design Features FINAL:**
- **REMOVED: Blur circles** di belakang circular images (lebih clean)
- **ADDED: 3D backgrounds** dengan geometric patterns:
  - Portfolio: Grid pattern + gradient orbs untuk depth
  - Testimonials: Diagonal lines pattern + gradient orbs
  - Contact: Hexagon pattern + gradient orbs
- Smooth parallax tanpa lag (requestAnimationFrame)
- Professional construction-themed design
- Clean circular hero images dengan shadow only
- Marketing taglines yang compelling
- Fully responsive

✅ **3D Background Elements:**
- Geometric patterns (grids, diagonal lines, hexagons)
- Subtle gradient orbs untuk depth (opacity 5%)
- Layered effects tanpa mengganggu konten
- Background patterns dengan opacity 1.5-2%
- Professional & tidak terlalu ramai

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
