import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, message } = body

    // Validation
    if (!name || !email || !phone || !message) {
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

    // Phone validation (Indonesia format)
    const phoneRegex = /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{7,11}$/
    if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
      return NextResponse.json(
        { error: 'Format nomor telepon tidak valid' },
        { status: 400 }
      )
    }

    // Log the contact request (in production, save to database)
    console.log('Contact Request:', {
      name,
      email,
      phone,
      projectType,
      message,
      timestamp: new Date().toISOString()
    })

    // Here you would typically:
    // 1. Save to database using Prisma
    // 2. Send email notification
    // 3. Send confirmation to customer
    // 4. Create lead in CRM system

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: 'Terima kasih! Tim CV ALJUAR akan menghubungi Anda segera.',
      data: {
        name,
        email,
        phone,
        projectType,
        submittedAt: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'CV ALJUAR Contact API',
    company: {
      name: 'CV ALJUAR',
      business: 'Konstruksi Jaringan Irigasi dan Drainase',
      address: 'JLN. SUNAN KALIJAGA, Tuan-Tuan, Benua Kayong, Ketapang, Kalimantan Barat',
      phone: '085285703497',
      email: 'info@cvaljuar.id'
    }
  })
}