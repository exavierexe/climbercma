import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    const submission = await prisma.contactSubmission.create({
      data: { name, email, phone, message },
    });
    return NextResponse.json({ success: true, submission });
  } catch {
    return NextResponse.json({ error: 'Failed to save submission.' }, { status: 500 });
  }
}
