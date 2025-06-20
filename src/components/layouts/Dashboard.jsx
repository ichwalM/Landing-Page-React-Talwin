import React, { useState } from 'react';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('home'); // State untuk menentukan tab aktif

    let content; 

    if (activeTab === 'home') {
        content = <div className="p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Selamat Datang di Beranda!</h2>
            <p>Ini adalah tampilan utama Anda.</p>
        </div>;
    } else if (activeTab === 'profile') {
        content = <div className="p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Profil Pengguna</h2>
            <p>Informasi pribadi Anda ada di sini.</p>
        </div>;
    } else if (activeTab === 'settings') {
        content = <div className="p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Pengaturan Aplikasi</h2>
            <p>Ubah preferensi Anda di sini.</p>
        </div>;
    } else {
        content = <div className="p-4 bg-red-100 text-red-700 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Halaman Tidak Ditemukan</h2>
            <p>Silakan pilih tab yang valid.</p>
        </div>;
    }

    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-center mb-6 space-x-2">
                <button
                    onClick={() => setActiveTab('home')}
                    className={`py-2 px-4 rounded transition duration-200 ${activeTab === 'home' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                    Beranda
                </button>
                <button
                    onClick={() => setActiveTab('profile')}
                    className={`py-2 px-4 rounded transition duration-200 ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                    Profil
                </button>
                <button
                    onClick={() => setActiveTab('settings')}
                    className={`py-2 px-4 rounded transition duration-200 ${activeTab === 'settings' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                    Pengaturan
                </button>
            </div>

            {content} {/* Menampilkan konten yang sudah ditentukan */}
        </div>
    );
}

export default Dashboard;