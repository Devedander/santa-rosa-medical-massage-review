"use client";

import { useMemo, useState } from "react";
import { allPhotoOptions } from "../page";

type PhotoOption = [string, string];

function photoFilename(src: string) {
  return src.split("/").pop() || src;
}

function photoPath(src: string) {
  if (typeof window === "undefined") return src;
  const routeMarker = "/gallery-selection";
  const routeIndex = window.location.pathname.indexOf(routeMarker);
  const basePath = routeIndex >= 0 ? window.location.pathname.slice(0, routeIndex) : "";
  return `${basePath}${src}`;
}

export default function GallerySelectionPage() {
  const photos = allPhotoOptions as PhotoOption[];
  const [selected, setSelected] = useState<Set<string>>(() => new Set());
  const [copyStatus, setCopyStatus] = useState("");

  const selectedPhotos = useMemo(
    () => photos.filter(([src]) => selected.has(src)),
    [photos, selected],
  );

  const togglePhoto = (src: string) => {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(src)) next.delete(src);
      else next.add(src);
      return next;
    });
    setCopyStatus("");
  };

  const copyPhotoNames = async () => {
    const names = selectedPhotos.map(([src]) => photoFilename(src)).join("\n");
    if (!names) {
      setCopyStatus("Select at least one photo first.");
      return;
    }

    try {
      await navigator.clipboard.writeText(names);
      setCopyStatus(`Copied ${selectedPhotos.length} photo name${selectedPhotos.length === 1 ? "" : "s"}.`);
    } catch {
      setCopyStatus("Copy was blocked by the browser. Please select the names below manually.");
    }
  };

  const selectAll = () => {
    setSelected(new Set(photos.map(([src]) => src)));
    setCopyStatus("");
  };

  const clearAll = () => {
    setSelected(new Set());
    setCopyStatus("");
  };

  const selectedNames = selectedPhotos.map(([src]) => photoFilename(src)).join("\n");

  return (
    <main className="gallery-selection-page">
      <header className="gallery-selection-header">
        <p className="gallery-selection-kicker">Santa Rosa Medical Massage</p>
        <h1>Choose the gallery photos</h1>
        <p>
          Check every photo Stacy wants included in the Visit &amp; gallery section.
          This private selection page does not change the live site or any other
          images in the review.
        </p>
        <div className="gallery-selection-actions">
          <button type="button" onClick={copyPhotoNames}>
            Copy names for gallery ({selectedPhotos.length})
          </button>
          <button type="button" className="gallery-selection-secondary" onClick={selectAll}>
            Select all
          </button>
          <button type="button" className="gallery-selection-secondary" onClick={clearAll}>
            Clear all
          </button>
        </div>
        {copyStatus && <p className="gallery-selection-status" role="status">{copyStatus}</p>}
        {selectedNames && (
          <textarea
            className="gallery-selection-output"
            aria-label="Selected photo names"
            readOnly
            value={selectedNames}
            rows={Math.min(8, selectedPhotos.length)}
          />
        )}
      </header>

      <section className="gallery-selection-grid" aria-label="Available photos">
        {photos.map(([src, label]) => (
          <label className={`gallery-selection-card${selected.has(src) ? " is-selected" : ""}`} key={src}>
            <img src={photoPath(src)} alt={label} loading="lazy" />
            <span className="gallery-selection-card-footer">
              <input
                type="checkbox"
                checked={selected.has(src)}
                onChange={() => togglePhoto(src)}
              />
              <span>{photoFilename(src)}</span>
            </span>
          </label>
        ))}
      </section>
    </main>
  );
}
