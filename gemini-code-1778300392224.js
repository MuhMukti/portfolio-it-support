export default function PortfolioWebsite() {
  const projects = [
    {
      title: 'Dukungan IT & Troubleshooting Sistem ERP',
      image: '/erp-support.png', // Pastikan nama file sesuai di folder public
      description:
        'Menyediakan layanan remote IT support dan troubleshooting sistem ERP untuk berbagai klien bisnis guna memastikan operasional berjalan stabil dan minim downtime.',
      responsibilities: [
        'Troubleshooting sistem ERP dan database',
        'Remote support menggunakan AnyDesk, TeamViewer, UltraViewer, dan RDC',
        'Konfigurasi printer dan perangkat jaringan',
        'Perbaikan dan optimasi query SQL',
        'Menjaga response time dan resolution time secara optimal',
      ],
      tools: ['SQL Database', 'AnyDesk', 'TeamViewer', 'UltraViewer', 'RDC'],
      result:
        'Menangani lebih dari 5.665 kasus support dan mendukung 388+ klien dengan penyelesaian masalah yang cepat dan efektif.',
    },
    {
      title: 'POS System & Network Setup',
      image: '/pos-system.png', // Pastikan nama file sesuai di folder public
      description:
        'Melakukan instalasi, konfigurasi, dan dukungan teknis untuk sistem POS serta infrastruktur jaringan pada lingkungan restoran dan retail.',
      responsibilities: [
        'Setup NCR Aloha POS',
        'Konfigurasi router, access point, dan WiFi',
        'Troubleshooting jaringan dan konektivitas sistem',
        'Support onsite dan remote kepada klien',
        'Konfigurasi printer dan maintenance perangkat operasional',
      ],
      tools: ['NCR Aloha POS', 'Windows', 'Ubuntu Linux', 'AnyDesk', 'TeamViewer'],
      result:
        'Membantu menjaga stabilitas operasional sistem POS dan jaringan bisnis klien dengan downtime minimal.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Muhammad Mukti Munasir Putra</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            IT Support Specialist dengan pengalaman lebih dari 7 tahun dalam ERP support, 
            POS system, troubleshooting jaringan, SQL database, dan remote support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-center">
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <h3 className="font-bold text-2xl text-blue-600">5.665+</h3>
              <p className="text-gray-600 text-sm">Support Cases Handled</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <h3 className="font-bold text-2xl text-blue-600">388+</h3>
              <p className="text-gray-600 text-sm">Clients Supported</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <h3 className="font-bold text-2xl text-blue-600">7+ Years</h3>
              <p className="text-gray-600 text-sm">Professional Experience</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-gray-800">Portfolio Projects</h2>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-96 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{project.title}</h3>
                <p className="text-gray-700 mb-6 italic">{project.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-blue-900">Tanggung Jawab</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {project.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-blue-900">Tools & Teknologi</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-600 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-2">📌 Hasil Akhir</h4>
                  <p className="opacity-90">{project.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}