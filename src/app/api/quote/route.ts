import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      clientName, 
      companyName, 
      email, 
      phone, 
      projectLocation,
      projectType,
      projectScale,
      budget,
      timeline,
      description 
    } = body

    // Validation
    const requiredFields = [clientName, email, phone, projectLocation, projectType, description]
    if (requiredFields.some(field => !field || field.trim() === '')) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      )
    }

    // Phone validation
    const phoneRegex = /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{7,11}$/
    if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
      return NextResponse.json(
        { error: 'Format nomor telepon tidak valid' },
        { status: 400 }
      )
    }

    // Calculate estimated cost based on project type and scale
    const baseRates = {
      'irigasi-teknis': { 'kecil': 50000000, 'sedang': 150000000, 'besar': 500000000 },
      'irigasi-permukaan': { 'kecil': 30000000, 'sedang': 100000000, 'besar': 300000000 },
      'drainase-urban': { 'kecil': 40000000, 'sedang': 120000000, 'besar': 400000000 },
      'drainase-pertanian': { 'kecil': 25000000, 'sedang': 80000000, 'besar': 250000000 },
      'erosi-control': { 'kecil': 35000000, 'sedang': 100000000, 'besar': 350000000 }
    }

    const rateKey = projectType as keyof typeof baseRates
    const scaleKey = projectScale as keyof typeof baseRates[typeof rateKey]
    const estimatedCost = baseRates[rateKey]?.[scaleKey] || 100000000

    // Calculate estimated timeline
    const timelineDays = {
      'kecil': 30,
      'sedang': 60,
      'besar': 120
    }
    const estimatedDays = timelineDays[scaleKey as keyof typeof timelineDays] || 60

    // Log the quote request
    console.log('Quote Request:', {
      clientName,
      companyName,
      email,
      phone,
      projectLocation,
      projectType,
      projectScale,
      budget,
      timeline,
      description,
      estimatedCost,
      estimatedDays,
      timestamp: new Date().toISOString()
    })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500))

    return NextResponse.json({
      success: true,
      message: 'Permintaan penawaran berhasil diterima! Tim CV ALJUAR akan menghubungi Anda dalam 1x24 jam.',
      data: {
        quoteId: `Q-${Date.now()}`,
        clientName,
        projectName: `${projectType} - ${projectLocation}`,
        estimatedCost,
        estimatedDays,
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
        submittedAt: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Quote API Error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'CV ALJUAR Quote API',
    services: [
      {
        id: 'irigasi-teknis',
        name: 'Irigasi Teknis',
        description: 'Sistem irigasi modern dengan teknologi canggih',
        basePrice: {
          kecil: 50000000,
          sedang: 150000000,
          besar: 500000000
        }
      },
      {
        id: 'irigasi-permukaan',
        name: 'Irigasi Permukaan',
        description: 'Sistem irigasi tradisional yang ditingkatkan',
        basePrice: {
          kecil: 30000000,
          sedang: 100000000,
          besar: 300000000
        }
      },
      {
        id: 'drainase-urban',
        name: 'Drainase Perkotaan',
        description: 'Sistem drainase untuk area urban',
        basePrice: {
          kecil: 40000000,
          sedang: 120000000,
          besar: 400000000
        }
      },
      {
        id: 'drainase-pertanian',
        name: 'Drainase Pertanian',
        description: 'Sistem drainase untuk lahan pertanian',
        basePrice: {
          kecil: 25000000,
          sedang: 80000000,
          besar: 250000000
        }
      },
      {
        id: 'erosi-control',
        name: 'Erosi Control',
        description: 'Pengendalian erosi dan konservasi tanah',
        basePrice: {
          kecil: 35000000,
          sedang: 100000000,
          besar: 350000000
        }
      }
    ]
  })
}