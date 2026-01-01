'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Database, UserRights, Cookie } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  CV ALJUAR
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">CV ALJUAR</span>
          </h1>
          <p className="text-lg text-gray-600">
            Terakhir diperbarui: 1 Januari 2024
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Pendahuluan</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Di <strong>CV ALJUAR</strong>, kami sangat memprioritaskan privasi dan keamanan data Anda. 
                    Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, 
                    dan membagikan informasi saat Anda menggunakan layanan konstruksi jaringan irigasi dan drainase kami.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Informasi yang Kami Kumpulkan</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Nama lengkap dan identitas perusahaan</li>
                        <li>Nomor telepon dan alamat email</li>
                        <li>Alamat lengkap proyek</li>
                        <li>Informasi rekening untuk pembayaran</li>
                        <li>Dokumen perizinan dan legalitas</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Teknis</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Spesifikasi proyek irigasi dan drainase</li>
                        <li>Data topografi dan hidrologi</li>
                        <li>Dokumen desain dan engineering</li>
                        <li>Foto dan video progress proyek</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Digital</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Data penggunaan website</li>
                        <li>Informasi Meta Ads campaign</li>
                        <li>Cookies dan tracking analytics</li>
                        <li>IP address dan device information</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Bagaimana Kami Menggunakan Informasi</h2>
                  <div className="space-y-3">
                    <div className="p-4 bg-purple-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Layanan Konstruksi</h4>
                      <p className="text-gray-600 text-sm">
                        Untuk merencanakan, melaksanakan, dan mengelola proyek irigasi dan drainase Anda dengan efisien.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Komunikasi</h4>
                      <p className="text-gray-600 text-sm">
                        Menghubungi Anda mengenai progress proyek, penawaran, dan informasi layanan CV ALJUAR.
                      </p>
                    </div>
                    <div className="p-4 bg-cyan-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Meta Ads Campaign</h4>
                      <p className="text-gray-600 text-sm">
                        Untuk mengelola campaign iklan dan analisis performa marketing digital.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Legal dan Compliance</h4>
                      <p className="text-gray-600 text-sm">
                        Memenuhi kewajiban hukum dan regulasi konstruksi di Indonesia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>CV ALJUAR</strong> berkomitmen untuk melindungi informasi Anda dengan:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Enkripsi data sensitif dengan standar industri</li>
                    <li>Akses terbatas untuk authorized personnel saja</li>
                    <li>Backup data rutin dan recovery system</li>
                    <li>Security audit berkala</li>
                    <li>Compliance dengan regulasi data protection Indonesia</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    Namun, tidak ada sistem yang 100% aman. Kami tidak dapat menjamin keamanan absolut data Anda.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <UserRights className="w-6 h-6 text-orange-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Hak Anda Sebagai Pengguna</h2>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Akses Data</h4>
                        <p className="text-gray-600 text-sm">Hak untuk mengetahui data apa yang kami simpan tentang Anda</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Koreksi Data</h4>
                        <p className="text-gray-600 text-sm">Hak untuk memperbaiki data yang tidak akurat</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Hapus Data</h4>
                        <p className="text-gray-600 text-sm">Hak untuk meminta penghapusan data pribadi Anda</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Portabilitas Data</h4>
                        <p className="text-gray-600 text-sm">Hak untuk memindahkan data Anda ke layanan lain</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Kebijakan Cookies</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Website CV ALJUAR menggunakan cookies untuk:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Menyimpan preferensi pengguna</li>
                    <li>Menganalisis traffic website dengan Google Analytics</li>
                    <li>Tracking performa Meta Ads campaigns</li>
                    <li>Mempersonalisasi konten dan iklan</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    Anda dapat mengelola preferensi cookies melalui browser settings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-blue-600 to-cyan-500 border-0 shadow-2xl">
            <CardContent className="p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Hubungi Kami untuk Privasi</h2>
              <p className="mb-6 text-blue-100">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi atau ingin melaksanakan hak Anda, 
                silakan hubungi <strong>CV ALJUAR</strong> melalui:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <strong>Email:</strong> privacy@cvaljuar.id
                </div>
                <div>
                  <strong>Telepon:</strong> 085285703497
                </div>
                <div>
                  <strong>Alamat:</strong> JLN. SUNAN KALIJAGA, Tuan-Tuan, Benua Kayong, Ketapang, Kalimantan Barat
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 CV ALJUAR. All rights reserved. Konstruksi Jaringan Irigasi dan Drainase.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}