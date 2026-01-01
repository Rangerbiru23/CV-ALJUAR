'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, ChevronRight, Shield, Droplets, Building2, Target, BarChart3, Users, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'irigasi',
    message: ''
  })
  const [quoteForm, setQuoteForm] = useState({
    clientName: '',
    companyName: '',
    email: '',
    phone: '',
    projectLocation: '',
    projectType: 'irigasi-teknis',
    projectScale: 'sedang',
    budget: '',
    timeline: '',
    description: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState<{type: 'success' | 'error', message: string} | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setNotification({ type: 'success', message: data.message })
        setContactForm({ name: '', email: '', phone: '', projectType: 'irigasi', message: '' })
        setShowContactModal(false)
      } else {
        setNotification({ type: 'error', message: data.error })
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'Terjadi kesalahan. Silakan coba lagi.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteForm),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setNotification({ type: 'success', message: data.message })
        setQuoteForm({
          clientName: '', companyName: '', email: '', phone: '',
          projectLocation: '', projectType: 'irigasi-teknis', projectScale: 'sedang',
          budget: '', timeline: '', description: ''
        })
        setShowQuoteModal(false)
      } else {
        setNotification({ type: 'error', message: data.error })
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'Terjadi kesalahan. Silakan coba lagi.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                CV ALJUAR
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#beranda" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="#layanan" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link href="#tentang" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</Link>
              <Link href="#kontak" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</Link>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600" onClick={() => setShowContactModal(true)}>
              Hubungi Kami
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Konstruksi Irigasi & Drainase Profesional
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    CV ALJUAR
                  </span>
                  <br />
                  Solusi Infrastruktur Air Terpercaya
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Spesialis konstruksi jaringan irigasi dan drainase dengan teknologi modern, 
                  mendukung ketahanan pangan dan pengelolaan sumber daya air di Kalimantan Barat.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg" onClick={() => setShowQuoteModal(true)}>
                  Konsultasi Proyek
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                  Lihat Portfolio
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600">Kepuasan Klien</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-3xl transform rotate-6 opacity-20"></div>
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <Building2 className="w-32 h-32 text-white opacity-50" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Meta Ads Integration</h3>
                      <p className="text-gray-600">Digital Marketing untuk Proyek Anda</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Unggulan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi komprehensif untuk kebutuhan infrastruktur air dan irigasi Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Jaringan Irigasi</h3>
                <p className="text-gray-600 mb-6">
                  Konstruksi dan pengembangan sistem irigasi modern untuk mendukung produktivitas pertanian dan ketahanan pangan.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-blue-500" />Irigasi Teknis</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-blue-500" />Irigasi Permukaan</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-blue-500" />Sistem Pompa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistem Drainase</h3>
                <p className="text-gray-600 mb-6">
                  Perencanaan dan konstruksi sistem drainase urban dan rural untuk mencegah banjir dan mengelola air permukaan.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-cyan-500" />Drainase Kota</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-cyan-500" />Drainase Pertanian</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-cyan-500" />Erosi Control</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Promosi proyek dan layanan melalui Meta Ads untuk reach yang lebih luas dan klien potensial.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-purple-500" />Facebook Ads</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-purple-500" />Instagram Ads</li>
                  <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-purple-500" />Campaign Management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Portfolio <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Proyek</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hasil karya terbaik <strong>CV ALJUAR</strong> dalam mengembangkan infrastruktur air di Kalimantan Barat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
                <Droplets className="w-16 h-16 text-white opacity-50" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Irigasi Desa Mekar</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Selesai</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Sistem irigasi teknis seluas 50 Ha untuk mendukung produktivitas pertanian padi di Ketapang.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>📍 Ketapang, Kalbar</span>
                  <span>📅 2023</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cyan-400 to-blue-300 flex items-center justify-center">
                <Shield className="w-16 h-16 text-white opacity-50" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Drainase Urban Kota</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Selesai</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Sistem drainase modern untuk mengatasi banjir di area perkotaan seluas 25 Ha.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>📍 Ketapang, Kalbar</span>
                  <span>📅 2023</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-300 flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-white opacity-50" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Meta Ads Campaign</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Aktif</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Campaign digital marketing untuk promosi jasa konstruksi dengan reach 500K+ audience.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>📱 Facebook & Instagram</span>
                  <span>📅 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-300 flex items-center justify-center">
                <Building2 className="w-16 h-16 text-white opacity-50" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Erosi Control Sungai</h3>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Progres</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Proyek konservasi sungai dan pengendalian erosi sepanjang 5 km di DAS Ketapang.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>📍 Ketapang, Kalbar</span>
                  <span>📅 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-300 flex items-center justify-center">
                <Target className="w-16 h-16 text-white opacity-50" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Irigasi Pertanian</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Selesai</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Pengembangan irigasi permukaan untuk 100 Ha lahan pertanian komoditas kelapa sawit.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>📍 Ketapang, Kalbar</span>
                  <span>📅 2022</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-300 flex items-center justify-center">
                <Users className="w-16 h-16 text-white opacity-50" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Konsultasi Infrastruktur</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Selesai</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Jasa konsultasi perencanaan infrastruktur air untuk 5 proyek pemerintah daerah.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>📍 Multi Lokasi</span>
                  <span>📅 2023</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600" onClick={() => setShowQuoteModal(true)}>
              Lihat Semua Proyek
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Mengapa Memilih <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">CV ALJUAR</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  CV ALJUAR adalah perusahaan konstruksi yang berdedikasi dalam pengembangan infrastruktur air 
                  di Kalimantan Barat. Dengan pengalaman lebih dari 10 tahun, kami telah menyelesaikan puluhan 
                  proyek irigasi dan drainase yang mendukung pembangunan berkelanjutan.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Target Tepat</h4>
                    <p className="text-gray-600 text-sm">Solusi presisi untuk setiap kebutuhan infrastruktur air</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Tim Profesional</h4>
                    <p className="text-gray-600 text-sm">Ahli berpengalaman di bidang konstruksi irigasi</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Perusahaan</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Building2 className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">CV ALJUAR</h4>
                      <p className="text-gray-600">Konstruksi Jaringan Irigasi dan Drainase</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Alamat</h4>
                      <p className="text-gray-600">
                        JLN. SUNAN KALIJAGA, Desa/Kelurahan Tuan-Tuan, Kec. Benua Kayong, 
                        Kab. Ketapang, Provinsi Kalimantan Barat
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telepon</h4>
                      <p className="text-gray-600">085285703497</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@cvaljuar.id</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">CV ALJUAR</span>
            </h2>
            <p className="text-xl text-gray-600">
              Siap mewujudkan proyek infrastruktur air Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-600 to-cyan-500 border-0 shadow-2xl">
              <CardContent className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Konsultasi Gratis</h3>
                <p className="mb-8 text-blue-100">
                  Dapatkan penawaran terbaik untuk proyek irigasi dan drainase Anda. 
                  Tim kami siap memberikan solusi yang tepat untuk kebutuhan infrastruktur air Anda.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>085285703497</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span>info@cvaljuar.id</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1" />
                    <span className="text-sm">
                      JLN. SUNAN KALIJAGA, Tuan-Tuan, Benua Kayong, Ketapang, Kalimantan Barat
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Meta Ads Integration</h3>
                <p className="text-gray-600 mb-6">
                  Kami juga menyediakan layanan digital marketing melalui Meta Ads untuk 
                  mempromosikan proyek dan layanan konstruksi Anda kepada audiens yang tepat.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">2M+</div>
                    <div className="text-gray-600 text-sm">Potential Reach</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-xl">
                    <div className="text-2xl font-bold text-pink-600">500+</div>
                    <div className="text-gray-600 text-sm">Successful Campaigns</div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                  Mulai Campaign Meta Ads
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notification */}
      {notification && (
        <div className={`fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white max-w-sm`}>
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hubungi CV ALJUAR</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telepon</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Proyek</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contactForm.projectType}
                    onChange={(e) => setContactForm({...contactForm, projectType: e.target.value})}
                  >
                    <option value="irigasi">Irigasi</option>
                    <option value="drainase">Drainase</option>
                    <option value="konsultasi">Konsultasi</option>
                    <option value="meta-ads">Meta Ads</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  />
                </div>
                <div className="flex gap-3">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                  >
                    {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowContactModal(false)}
                    className="flex-1"
                  >
                    Batal
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Permintaan Penawaran Proyek</h3>
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap*</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={quoteForm.clientName}
                      onChange={(e) => setQuoteForm({...quoteForm, clientName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Perusahaan</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={quoteForm.companyName}
                      onChange={(e) => setQuoteForm({...quoteForm, companyName: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telepon*</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lokasi Proyek*</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={quoteForm.projectLocation}
                    onChange={(e) => setQuoteForm({...quoteForm, projectLocation: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Proyek*</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={quoteForm.projectType}
                      onChange={(e) => setQuoteForm({...quoteForm, projectType: e.target.value})}
                    >
                      <option value="irigasi-teknis">Irigasi Teknis</option>
                      <option value="irigasi-permukaan">Irigasi Permukaan</option>
                      <option value="drainase-urban">Drainase Urban</option>
                      <option value="drainase-pertanian">Drainase Pertanian</option>
                      <option value="erosi-control">Erosi Control</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Skala Proyek*</label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={quoteForm.projectScale}
                      onChange={(e) => setQuoteForm({...quoteForm, projectScale: e.target.value})}
                    >
                      <option value="kecil">Kecil (&lt; 1 Ha)</option>
                      <option value="sedang">Sedang (1-10 Ha)</option>
                      <option value="besar">Besar (&gt; 10 Ha)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Budget Estimasi</label>
                    <input
                      type="text"
                      placeholder="Contoh: 100.000.000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={quoteForm.budget}
                      onChange={(e) => setQuoteForm({...quoteForm, budget: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Timeline Target</label>
                    <input
                      type="text"
                      placeholder="Contoh: 3 bulan"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={quoteForm.timeline}
                      onChange={(e) => setQuoteForm({...quoteForm, timeline: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Proyek*</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={quoteForm.description}
                    onChange={(e) => setQuoteForm({...quoteForm, description: e.target.value})}
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                  >
                    {isLoading ? 'Mengirim...' : 'Kirim Penawaran'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowQuoteModal(false)}
                    className="flex-1"
                  >
                    Batal
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">CV ALJUAR</span>
              </div>
              <p className="text-gray-400 mb-4">
                Spesialis konstruksi jaringan irigasi dan drainase dengan teknologi modern 
                dan integrasi Meta Ads untuk promosi yang efektif.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 cursor-pointer">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center hover:bg-cyan-700 cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Jaringan Irigasi</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Sistem Drainase</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Meta Ads</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Konsultasi</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV ALJUAR. All rights reserved. Konstruksi Jaringan Irigasi dan Drainase.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}