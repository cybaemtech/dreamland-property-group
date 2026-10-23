import { Link } from "@tanstack/react-router";
import type { LandParcelRecord, PropertyRecord } from "@/content/types";

export function PropertyCard({
  property,
  index,
}: {
  property: PropertyRecord;
  index?: number;
}) {
  return (
    <article className="property-card">
      <Link
        to="/properties/$slug"
        params={{ slug: property.slug }}
        aria-label={`View property details for ${property.name}`}
      >
        <div className="property-photo">
          <img
            src={property.heroImage.src}
            alt={property.heroImage.alt}
            loading="lazy"
            width={1024}
            height={1280}
          />
          <span className="property-type">{property.category}</span>
          {index !== undefined && <span className="property-num">{String(index + 1).padStart(2, "0")}</span>}
        </div>
        <div className="property-meta">
          <span>{property.cardMeta[1]}</span>
          <span>{property.cardMeta[0]}</span>
        </div>
        <h3>{property.name}</h3>
        <p>{property.summary}</p>
        <span className="text-link">View Property Details</span>
      </Link>
    </article>
  );
}

export function ParcelCard({ parcel }: { parcel: LandParcelRecord }) {
  return (
    <article className="property-card">
      <Link
        to="/land-industrial/$slug"
        params={{ slug: parcel.slug }}
        aria-label={`View parcel details for ${parcel.name}`}
      >
        <div className="property-photo">
          <img src={parcel.heroImage.src} alt={parcel.heroImage.alt} loading="lazy" width={1600} height={1024} />
          <span className="property-type">Land</span>
        </div>
        <div className="property-meta">
          <span>{parcel.location}</span>
          <span>Parcel</span>
        </div>
        <h3>{parcel.name}</h3>
        <p>{parcel.summary}</p>
        <span className="text-link">View Parcel Details</span>
      </Link>
    </article>
  );
}
