# PRD - Landing Page PT. Harkat Bangkit Jaya

## Original Problem Statement
Buatkan landing page yang modern dan minimalist serta eye catching sesuai company profile yang dikirim oleh user untuk PT. Harkat Bangkit Jaya - perusahaan kontraktor dan perdagangan umum.

## User Requirements
- Warna konstruksi (oranye, kuning, hitam)
- Fitur lengkap: hero, services, about, portfolio, testimonials, contact
- CTA: Email dan WhatsApp
- Bahasa: Indonesia
- Link WhatsApp: https://wa.me/6282289891300?text=Hallo%20PT.%20Harkat%20Bangkit%20Jaya%20%2C%20saya%20mau%20berkonsultasi

## Latest Update (17 Februari 2026)
### ✅ COMPLETED - Klien Kami Section (P0)
- Fixed client logos using Lucide React icons instead of broken Clearbit API
- Each client now displays with colored icon + company name
- Infinite scroll animation working
- Grayscale to color hover effect working
- Scale animation on hover working

### ✅ ENHANCEMENT - Brand Logo Images (17 Feb 2026)
- Replaced icon-based logos with actual brand logo images
- Using Simple Icons CDN for clean SVG logos
- Logos: Nike, Adidas, Google, AWS, Google Cloud, Microsoft, Apple, Samsung
- Easy to replace with actual client logos later

### ✅ ENHANCEMENT - Counter Animation (17 Feb 2026)  
- Added counting animation for statistics (100+, 50+, 100%)
- Animation triggers when stats section becomes visible (Intersection Observer)
- Smooth easing animation with staggered delays
- Numbers animate from 0 to final value

### ✅ VERIFIED - Testimonials Section (P1)  
- Section already implemented and functioning
- 4 testimonials with quote icons, ratings, and client info
- Modern card design with hover effects

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

### Frontend (Mock Data - Phase 1) ✅ FINAL COMPLETE v5.0
✅ **All Components - Final Version:**
- `/app/frontend/src/components/Hero.jsx` - **UPDATED: Clean gradient design tanpa full image**
- `/app/frontend/src/components/ClientsSection.jsx` - Animated logos dengan 3D background
- `/app/frontend/src/components/Services.jsx` - Circular hero + smooth parallax
- `/app/frontend/src/components/About.jsx` - Visi & Misi + circular hero
- `/app/frontend/src/components/Portfolio.jsx` - 3D grid background
- `/app/frontend/src/components/Testimonials.jsx` - 3D diagonal pattern
- `/app/frontend/src/components/Contact.jsx` - 3D hexagon pattern
- `/app/frontend/src/components/Footer.jsx` - Complete footer

✅ **Final Design v5.0:**
- **Hero Section**: Clean gradient background dengan 3D geometric shapes
  - No full background image - lebih modern & cepat loading
  - 3D grid pattern subtle
  - Gradient orbs untuk depth
  - Center aligned content
  - Clear CTAs & stats

- **All Sections Verified**:
  - ✅ Hero: Clean 3D gradient background
  - ✅ Clients: Animated infinite scroll + 3D orbs
  - ✅ Services: Circular hero + smooth parallax
  - ✅ About: Visi/Misi + circular hero
  - ✅ Portfolio: 3D grid pattern background
  - ✅ Testimonials: 3D diagonal pattern
  - ✅ Contact: 3D hexagon pattern
  - ✅ Footer: Complete

✅ **3D Backgrounds Strategy:**
- Hero: Grid pattern + gradient orbs
- Clients: Gradient orbs
- Portfolio: Grid pattern + gradient orbs
- Testimonials: Diagonal SVG pattern + orbs
- Contact: Hexagon SVG pattern + orbs
- All dengan opacity sangat rendah (1.5-5%)

✅ **Performance:**
- Hero loading lebih cepat (no large image)
- Smooth animations
- 3D effects tanpa impact performance
- Responsive di semua devices

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
✅ Klien Kami Section dengan logo icons - COMPLETE (17 Feb 2026)
✅ Testimonials Section - COMPLETE (verified)
⏳ Backend API - PENDING (menunggu konfirmasi user)
⏳ Database integration - PENDING

## Notes
- Landing page saat ini menggunakan mock data dan fully functional di frontend
- Form submission menampilkan toast notification tapi belum tersimpan ke database
- Semua CTA buttons (WhatsApp, Email) sudah terintegrasi dengan benar
- Design mengikuti construction theme dengan warna profesional
- Client logos menggunakan Simple Icons CDN (Nike, Adidas, Google, AWS, Microsoft, Apple, Samsung, Google Cloud)
- Counter animation menggunakan Intersection Observer + requestAnimationFrame
