import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, address, postcode } = await req.json();
    if (!email || !address || !postcode) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    const cma = await prisma.cmaRequest.create({
      data: { email, address, postcode },
    });
    return NextResponse.json({ success: true, cma });
  } catch {
    return NextResponse.json({ error: 'Failed to save CMA request.' }, { status: 500 });
  }
}
