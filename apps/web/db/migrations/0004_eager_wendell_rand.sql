PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_listing_media` (
	`id` text PRIMARY KEY NOT NULL,
	`listing_id` text NOT NULL,
	`image_url` text NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_listing_media`("id", "listing_id", "image_url", "sort_order", "created_at") SELECT "id", "listing_id", "image_url", "sort_order", "created_at" FROM `listing_media`;--> statement-breakpoint
DROP TABLE `listing_media`;--> statement-breakpoint
ALTER TABLE `__new_listing_media` RENAME TO `listing_media`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE INDEX `listing_media_listing_id_idx` ON `listing_media` (`listing_id`);--> statement-breakpoint
CREATE INDEX `listing_media_listing_sort_idx` ON `listing_media` (`listing_id`,`sort_order`);