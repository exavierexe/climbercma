// src/app/api/stats-nz-median-prices/route.ts
import { NextRequest, NextResponse } from 'next/server';

// For demo: Use a static mapping of NZ postcodes to median prices (Stats NZ data)
// In production, you would update this with real data from Stats NZ CSV/API
const POSTCODE_MEDIAN_PRICES: Record<string, number> = {
  '1010': 1200000,
  '1021': 950000,
  '1023': 1050000,
  '0620': 1300000,
  '6011': 900000,
  // ...add more as needed
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const postcode = searchParams.get('postcode');

  if (!postcode) {
    return NextResponse.json({ error: 'Missing postcode.' }, { status: 400 });
  }

  const median = POSTCODE_MEDIAN_PRICES[postcode];
  if (!median) {
    return NextResponse.json({ error: 'No median price found for this postcode.' }, { status: 404 });
  }

  return NextResponse.json({ postcode, median });
}
