"use client";

import * as React from "react";

import type { ScanEntry } from "@/types/ronway";

interface RonwayScansState {
  scans: ScanEntry[];
  loading: boolean;
  error: string | null;
}

/**
 * Fetches the full Ronway scan log from the same-origin API route once on
 * mount. The route proxies the Rust engine and keeps the admin token
 * server-side, so no secret is exposed to the client.
 *
 * Both the directory and per-domain detail pages consume this, filtering the
 * shared result client-side rather than issuing per-view requests.
 *
 * @returns The scan list plus loading/error status.
 */
export function useRonwayScans(): RonwayScansState {
  const [scans, setScans] = React.useState<ScanEntry[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let active = true;

    fetch("/api/ronway-scans")
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data: ScanEntry[]) => {
        if (!active) return;
        setScans(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (!active) return;
        setError(err instanceof Error ? err.message : "Failed to load scans");
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { scans, loading, error };
}
