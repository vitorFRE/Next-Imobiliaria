import { sql } from "drizzle-orm"
import {
  sqliteTable,
  text,
  integer,
  real,
  index,
} from "drizzle-orm/sqlite-core"

export const listing = sqliteTable(
  "listing",
  {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    priceBrl: integer("price_brl").notNull(),
    cityState: text("city_state").notNull(),

    status: text("status", { enum: ["disponivel", "oculto", "vendido"] })
      .notNull()
      .default("disponivel"),

    bedrooms: integer("bedrooms").notNull(),
    bathrooms: integer("bathrooms").notNull(),

    totalAreaM2: real("total_area_m2").notNull(),
    builtAreaM2: real("built_area_m2").notNull(),

    totalPieces: integer("total_pieces").notNull(),

    hasParking: integer("has_parking", { mode: "boolean" })
      .notNull()
      .default(false),

    descriptionBody: text("description_body").notNull(),

    coverImageUrl: text("cover_image_url").notNull(),

    createdByUserId: text("created_by_user_id"),

    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    index("listing_status_idx").on(table.status),
    index("listing_city_state_idx").on(table.cityState),
    index("listing_created_at_idx").on(table.createdAt),
  ]
)

export const tempUpload = sqliteTable(
  "temp_upload",
  {
    id: text("id").primaryKey(),
    fileKey: text("file_key").notNull().unique(),
    fileUrl: text("file_url").notNull(),
    ownerUserId: text("owner_user_id").notNull(),
    status: text("status", { enum: ["temp", "attached"] })
      .notNull()
      .default("temp"),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    attachedListingId: text("attached_listing_id"),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [
    index("temp_upload_status_expires_idx").on(table.status, table.expiresAt),
    index("temp_upload_owner_idx").on(table.ownerUserId),
  ]
)

export const listingMedia = sqliteTable(
  "listing_media",
  {
    id: text("id").primaryKey(),
    listingId: text("listing_id").notNull(),
    imageUrl: text("image_url").notNull(),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
      .notNull(),
  },
  (table) => [
    index("listing_media_listing_id_idx").on(table.listingId),
    index("listing_media_listing_sort_idx").on(
      table.listingId,
      table.sortOrder
    ),
  ]
)
