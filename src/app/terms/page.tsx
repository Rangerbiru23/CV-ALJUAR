'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, FileText, Shield, AlertTriangle, CheckCircle, Gavel, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
                  <FileText className="w-5 h-5 text-white" />
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
            Syarat dan Ketentuan <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">CV ALJUAR</span>
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
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Pendahuluan</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Selamat datang di <strong>CV ALJUAR</strong>. Syarat dan Ketentuan ini mengatur penggunaan 
                    layanan konstruksi jaringan irigasi dan drainase yang kami sediakan. Dengan menggunakan 
                    layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>CV ALJUAR</strong> bergerak di bidang konstruksi jaringan irigasi dan drainase 
                    dengan dukungan layanan Meta Ads untuk promosi dan marketing digital.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Layanan Kami</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Konstruksi Jaringan Irigasi</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Perencanaan dan desain sistem irigasi teknis</li>
                        <li>Konstruksi saluran irigasi primer, sekunder, dan tersier</li>
                        <li>Instalasi bangunan air (intake, weir, gate)</li>
                        <li>Pemeliharaan dan rehabilitasi jaringan irigasi</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Sistem Drainase</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Perencanaan sistem drainase urban dan rural</li>
                        <li>Konstruksi saluran drainase dan resapan</li>
                        <li>Instalasi sistem pengendalian banjir</li>
                        <li>Pelaksanaan soil conservation dan erosion control</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Layanan Digital Marketing</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Manajemen campaign Meta Ads (Facebook & Instagram)</li>
                        <li>Optimasi iklan untuk target konstruksi dan infrastruktur</li>
                        <li>Analisis performa dan reporting campaign</li>
                        <li>Konsultasi marketing untuk proyek konstruksi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Kewajiban Klien</h2>
                  <div className="space-y-3">
                    <div className="p-4 bg-orange-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Dokumentasi Lengkap</h4>
                      <p className="text-gray-600 text-sm">
                        Menyediakan semua dokumen perizinan, sertifikat tanah, dan legalitas proyek yang diperlukan.
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Informasi Akurat</h4>
                      <p className="text-gray-600 text-sm">
                        Memberikan data teknis dan spesifikasi proyek yang akurat dan lengkap.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Pembayaran Tepat Waktu</h4>
                      <p className="text-gray-600 text-sm">
                        Melakukan pembayaran sesuai dengan termin yang telah disepakati dalam kontrak.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Akses Lokasi</h4>
                      <p className="text-gray-600 text-sm">
                        Memastikan akses menuju lokasi proyek aman dan dapat dijangkau oleh tim kami.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Syarat Pembayaran</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-gray-900">Uang Muka (DP)</h4>
                        <p className="text-gray-600 text-sm">Minimal 30% dari total nilai kontrak</p>
                      </div>
                      <div className="text-purple-600 font-bold">30%</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-gray-900">Pembayaran Progress</h4>
                        <p className="text-gray-600 text-sm">Sesuai milestone yang telah disepakati</p>
                      </div>
                      <div className="text-blue-600 font-bold">40%</div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-cyan-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-gray-900">Penyelesaian Akhir</h4>
                        <p className="text-gray-600 text-sm">Setelah serah terima proyek</p>
                      </div>
                      <div className="text-cyan-600 font-bold">30%</div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <p className="text-yellow-800 text-sm">
                      <strong>Catatan:</strong> Pembayaran dapat disesuaikan berdasarkan skala dan kompleksitas proyek.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warranty and Liability */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Garansi dan Tanggung Jawab</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Masa Garansi</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Struktur konstruksi: 12 bulan selesai penyerahan</li>
                        <li>Sistem irigasi/drainase: 6 bulan selesai penyerahan</li>
                        <li>Material dan instalasi: Sesuai spesifikasi pabrik</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Batas Tanggung Jawab</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li><strong>CV ALJUAR</strong> tidak bertanggung jawab atas force majeure (bencana alam, dll)</li>
                        <li>Kerusakan akibat penggunaan tidak sesuai prosedur di luar tanggung jawab kami</li>
                        <li>Maksimal tanggung jawab sebesar nilai kontrak proyek</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gavel className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Semua desain, metode konstruksi, dan materi promosi yang dibuat oleh <strong>CV ALJUAR</strong> 
                    merupakan hak kekayaan intelektual perusahaan. Klien tidak boleh mereproduksi, mendistribusikan, 
                    atau menggunakan materi tersebut untuk proyek lain tanpa izin tertulis.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">Yang Dilindungi:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Desain teknik dan gambar konstruksi</li>
                      <li>Metode pelaksanaan proyek</li>
                      <li>Konten Meta Ads dan materi marketing</li>
                      <li>Dokumentasi dan foto proyek</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Pemutusan Kontrak</h2>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Pemutusan oleh Klien</h4>
                      <p className="text-gray-600 text-sm">
                        Klien dapat memutuskan kontrak dengan pemberitahuan 30 hari dan pembayaran 
                        semua pekerjaan yang telah dilakukan plus biaya pembatalan 20%.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Pemutusan oleh CV ALJUAR</h4>
                      <p className="text-gray-600 text-sm">
                        <strong>CV ALJUAR</strong> dapat memutuskan kontrak jika: klien melanggar syarat, 
                        tidak melakukan pembayaran, atau menghambat pelaksanaan proyek.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="bg-gradient-to-br from-blue-600 to-cyan-500 border-0 shadow-2xl">
            <CardContent className="p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Penyelesaian Sengketa</h2>
              <p className="mb-6 text-blue-100">
                Semua sengketa yang timbul dari penggunaan layanan <strong>CV ALJUAR</strong> akan 
                diselesaikan secara musyawarah terlebih dahulu. Jika tidak tercapai kesepakatan, 
                sengketa akan diselesaikan melalui:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Mediasi</h4>
                  <p className="text-blue-100 text-sm">Melalui mediator independen di Ketapang</p>
                </div>
                <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <h4 className="font-semibold mb-2">Pengadilan Negeri</h4>
                  <p className="text-blue-100 text-sm">Khusus Pengadilan Negeri Ketapang, Kalimantan Barat</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-sm text-blue-100">
                  <strong>Informasi Kontak:</strong><br />
                  CV ALJUAR | JLN. SUNAN KALIJAGA, Tuan-Tuan, Benua Kayong, Ketapang, Kalimantan Barat<br />
                  Telepon: 085285703497 | Email: info@cvaljuar.id
                </p>
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