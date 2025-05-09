// src/app/api/linz-address/route.ts
import { NextRequest, NextResponse } from 'next/server';

// LINZ Street Address Layer: https://data.linz.govt.nz/layer/105533-nz-street-address/
const LINZ_ADDRESS_LAYER = 105533;
const LINZ_API_URL = 'https://data.linz.govt.nz/services/query/v1/vector.json';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query'); // free text for autocomplete
  const postcode = searchParams.get('postcode');

  if (!query) {
    return NextResponse.json({ error: 'Missing query.' }, { status: 400 });
  }

  // LINZ API: free text search (autocomplete)
  let url = `${LINZ_API_URL}?layer=${LINZ_ADDRESS_LAYER}&text=${encodeURIComponent(query)}`;
  if (postcode) {
    url += `&attribute=postcode&value=${encodeURIComponent(postcode)}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch address data from LINZ.' }, { status: 500 });
  }
}
