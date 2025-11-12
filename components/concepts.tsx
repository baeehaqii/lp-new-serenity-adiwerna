"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Concept {
  id: number
  title: string
  subtitle: string
  image: string
  alt: string
}

export default function Concepts() {
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null)

  const concepts: Concept[] = [
    {
      id: 1,
      title: "Konsep Fasad",
      subtitle: "",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762957655/Konsep_Fasad_adiwerna_1_w1m6rw.avif",
      alt: "Konsep Fasad",
    },
    {
      id: 2,
      title: "Konsep Fasad",
      subtitle: "",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762957654/Konsep_Fasad_adiwerna_2_tcy3qs.avif",
      alt: "Konsep Fasad",
    },
    {
      id: 3,
      title: "Konsep Design Responsive Iklim",
      subtitle: "Bentuk Atap",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762957654/Konsep_design_responsif_adiwerna_2_hbtj5h.avif",
      alt: "Konsep Pencahayaan Alami",
    },
    {
      id: 4,
      title: "Konsep Desain Responsif Iklim",
      subtitle: "Orientasi Bangunan",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762957655/Konsep_design_responsif_adiwerna_1_rclzin.avif",
      alt: "Konsep Sistem Pelindung Matahari",
    },
    {
      id: 5,
      title: "Konsep Desain Responsif Iklim",
      subtitle: "Sistem Pelindung Matahari",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762957655/Konsep_design_responsif_adiwerna_3_nu6yxx.avif",
      alt: "Konsep Pelindung Matahari",
    },
    {
      id: 6,
      title: "Konsep Fasad",
      subtitle: "Material Bangunan",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/q_10/v1761066025/konsep-fasad-material_sr5883.png",
      alt: "Konsep Fasad - Material Bangunan",
    },
    {
      id: 7,
      title: "Konsep Pencahayaan Alami",
      subtitle: "",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762957655/Konsep_Pencahayaan_adiwerna_zhpbjs.avif",
      alt: "Konsep Pencahayaan Alami",
    },
    {
      id: 8,
      title: "Konsep Ventilasi Udara",
      subtitle: "",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762957656/Konsep_ventilasi_udara_adiwerna_tyhpbh.avif",
      alt: "Konsep Ventilasi Udara",
    },
    {
      id: 9,
      title: "Konsep Ruang Terbuka",
      subtitle: "Open Plan",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762957657/Konsep_raung_terbuka_adiwerna_uojazi.avif",
      alt: "Konsep Ventilasi Udara",
    },
  ]

  const openModal = (concept: Concept) => {
    setSelectedConcept(concept)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedConcept(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="konsep" className="concepts-section">
      <div className="container">
        <h2 className="section-title">Konsep Desain Sapphire Serenity</h2>
        <p className="section-subtitle">
          Rumah yang dirancang dengan konsep responsif iklim tropis, memadukan estetika modern dengan kenyamanan
          maksimal
        </p>

        <div className="concepts-grid">
          {concepts.map((concept) => (
            <div key={concept.id} className="concept-card" onClick={() => openModal(concept)}>
              <div className="concept-image-wrapper">
                <Image
                  src={concept.image || "/placeholder.svg"}
                  alt={concept.alt}
                  width={400}
                  height={300}
                  className="concept-image"
                />
                <div className="concept-overlay">
                  <div className="concept-overlay-content">
                    <h3 className="concept-overlay-title">{concept.title}</h3>
                    <p className="concept-overlay-subtitle">{concept.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedConcept && (
        <div className="concept-modal-overlay" onClick={closeModal}>
          <div className="concept-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="concept-modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="concept-modal-content">
              <Image
                src={selectedConcept.image || "/placeholder.svg"}
                alt={selectedConcept.alt}
                width={1200}
                height={900}
                className="concept-modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
