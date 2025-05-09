// src/app/api/property-data/route.ts
import { NextRequest, NextResponse } from 'next/server';

// IMPORTANT: Set your CoreLogic API key in .env.local as CORELOGIC_API_KEY=your_key_here

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const address = searchParams.get('address');
  const postcode = searchParams.get('postcode');
  const apiKey = process.env.CORELOGIC_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'CoreLogic API key not set. Please add CORELOGIC_API_KEY to your .env.local file.' }, { status: 500 });
  }
  if (!address || !postcode) {
    return NextResponse.json({ error: 'Missing address or postcode.' }, { status: 400 });
  }

  // Example CoreLogic endpoint (update as per your contract/documentation)
  const apiUrl = `https://api.corelogic.co.nz/property/v1/properties?address=${encodeURIComponent(address)}&postcode=${encodeURIComponent(postcode)}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch property data from CoreLogic.' }, { status: 500 });
  }
}
