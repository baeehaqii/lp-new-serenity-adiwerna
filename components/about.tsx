"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Tambahkan import ini
import { X } from "lucide-react" // Tambahkan import ini

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dx8w9qwl6/image/upload/w_600,h_450,c_fill,f_auto,q_auto/v1761071337/type_90_qpwdco.avif"
                alt="Sapphire Serenity Adiwerna"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Sapphire Town House Slawi</h2>
              <p className="about-description">
                Berada di Jl. Raya Singkil Kaliwadas, Kaliwadas, Kec. Adiwerna, Sapphire Serenity Adiwerna menghadirkan perumahan Adiwerna yang modern, estetik, dan fungsional. Dirancang dengan konsep The Art of Serene Living, hunian ini menyatukan kenyamanan dan tata ruang optimal, sekaligus memudahkan akses ke Tegal, Slawi, tol, sekolah, dan pusat aktivitas kota. Sapphire Serenity Adiwerna menjadi pilihan tepat bagi keluarga muda maupun profesional yang mencari hunian prestisius, bergaya modern, dan bernilai investasi tinggi di jantung Adiwerna.
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Projects Completed */}
            <div className="about-stat-card">
              <div className="about-stat-value">1</div>
              <div className="about-stat-label">Perumahan Terbaik di Tegal</div>
            </div>

            {/* Statistik - Awards */}
            <div className="about-stat-card">
              <div className="about-stat-value">10000+</div>
              <div className="about-stat-label">Keluarga Sapphire</div>
            </div>

            {/* Statistik - Satisfied Clients */}
            <div className="about-stat-card">
              <div className="about-stat-value">5+</div>
              <div className="about-stat-label">CCTV Kawasan</div>
            </div>

            {/* Statistik - Years of Experience */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Sapphire Town House Slawi</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dqobwse9q/image/upload/w_700,h_400,c_fill,f_auto,q_auto:eco/v1754637078/WhatsApp_Image_2025-06-19_at_11.00.07_bvpgud.jpg"
                  alt="Sapphire Serenity Adiwerna"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Berada di Jl. Raya Singkil Kaliwadas, Kaliwadas, Kec. Adiwerna, Sapphire Serenity Adiwerna menghadirkan perumahan Adiwerna yang modern, estetik, dan fungsional. Dirancang dengan konsep The Art of Serene Living, hunian ini menyatukan kenyamanan dan tata ruang optimal, sekaligus memudahkan akses ke Tegal, Slawi, tol, sekolah, dan pusat aktivitas kota.
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>3 menit ke fasilitas kesehatan</li>
                  <li>1 menit ke fasilitas pendidikan</li>
                  <li>3 menit ke fasilitas perbelanjaan</li>
                  <li>Berada di jalur utama Slawi – Tegal</li>
                  <li>Lingkungan berkembang dengan akses mudah ke kawasan komersial dan fasilitas umum</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan petugas sekuriti, CCTV, one gate system, dan akses gerbang menggunakan kartu (card access) untuk keamanan ekstra</li>
                  <li>Ruang terbuka hijau yang luas</li>
                  <li>Area bermain aman dan menyenangkan bagi anak-anak</li>
                  <li>Fasilitas umum seperti area olahraga, masjid, dan jalan lingkungan yang rapi untuk kenyamanan seluruh penghuni</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
