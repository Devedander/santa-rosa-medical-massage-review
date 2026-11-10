"use client";

import { useEffect } from "react";
import { initializeAnalytics } from "./analytics";

export default function GoogleAnalytics() {
  useEffect(() => { initializeAnalytics(); }, []);
  return null;
}
