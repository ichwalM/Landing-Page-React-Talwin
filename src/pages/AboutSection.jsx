import React from 'react';

function AboutSection({className}) { // Menerima className agar bisa distyling dari Layout
  return (
    <section
      id="about" // ID ini bisa berguna untuk navigasi anchor atau scroll
      className={`container mx-auto px-4 py-16 ${className}`} // Padding dan container dasar
      data-aos="fade-up" // Tambahkan animasi AOS saat halaman about muncul
      data-aos-duration="1000"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-primary-brand mb-8">
        Tentang Kami
      </h1>
      <div className="max-w-3xl mx-auto text-lg text-text-gray-light leading-relaxed text-center">
        <p className="mb-4">
          Kami adalah perusahaan pengembangan perangkat lunak yang berdedikasi untuk menciptakan solusi inovatif dan efektif bagi klien kami. Dengan tim ahli yang berpengalaman dan bersemangat, kami berkomitmen untuk memberikan kualitas terbaik dalam setiap proyek yang kami kerjakan.
        </p>
        <p className="mb-4">
          Berdiri sejak tahun [Tahun Berdiri], kami telah membantu berbagai bisnis dari berbagai industri untuk mencapai tujuan digital mereka melalui pengembangan website, aplikasi mobile, dan sistem kustom yang handal.
        </p>
        <p>
          Visi kami adalah menjadi mitra teknologi terdepan yang mendorong pertumbuhan dan inovasi bagi setiap klien. Misi kami adalah untuk selalu menghadirkan solusi teknologi yang relevan, efisien, dan memberikan nilai tambah nyata.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-dark-text mb-4">Visi Kami</h2>
          <p className="text-text-gray-light">Menjadi penyedia solusi teknologi terkemuka yang inovatif dan terpercaya di tingkat global.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-dark-text mb-4">Misi Kami</h2>
          <ul className="list-disc list-inside text-text-gray-light">
            <li>Memberikan layanan pengembangan berkualitas tinggi.</li>
            <li>Membangun hubungan jangka panjang dengan klien.</li>
            <li>Mendorong inovasi dan pembelajaran berkelanjutan.</li>
          </ul>
        </div>
      </div>

    </section>
  );
}

export default AboutSection;