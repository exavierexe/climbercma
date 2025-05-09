// src/app/api/stats-nz-median-prices/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const postcode = searchParams.get('postcode');

  if (!postcode) {
    return NextResponse.json({ error: 'Missing postcode.' }, { status: 400 });
  }

  const result = await prisma.postcodeMedianPrice.findUnique({
    where: { postcode },
  });
  if (!result) {
    return NextResponse.json({ error: 'No median price found for this postcode.' }, { status: 404 });
  }

  return NextResponse.json({ postcode, median: result.median });
}
