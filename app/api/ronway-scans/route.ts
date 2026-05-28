import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.RONWAY_ADMIN_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  try {
    const resp = await fetch("https://ronway-api.bpxai.com/api/scans?limit=1000", {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    if (!resp.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${resp.status}` },
        { status: resp.status },
      );
    }

    const data = await resp.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch scans" }, { status: 500 });
  }
}
