CREATE TABLE `listing` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`price_brl` integer NOT NULL,
	`city_state` text NOT NULL,
	`status` text DEFAULT 'disponivel' NOT NULL,
	`bedrooms` integer NOT NULL,
	`bathrooms` integer NOT NULL,
	`total_area_m2` integer NOT NULL,
	`built_area_m2` integer NOT NULL,
	`total_pieces` integer NOT NULL,
	`has_parking` integer DEFAULT false NOT NULL,
	`description_body` text NOT NULL,
	`cover_image_url` text NOT NULL,
	`created_by_user_id` text,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `listing_status_idx` ON `listing` (`status`);--> statement-breakpoint
CREATE INDEX `listing_city_state_idx` ON `listing` (`city_state`);--> statement-breakpoint
CREATE INDEX `listing_created_at_idx` ON `listing` (`created_at`);--> statement-breakpoint
CREATE TABLE `listing_media` (
	`id` text PRIMARY KEY NOT NULL,
	`listing_id` text NOT NULL,
	`image_url` text NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `listing_media_listing_id_idx` ON `listing_media` (`listing_id`);--> statement-breakpoint
CREATE INDEX `listing_media_listing_sort_idx` ON `listing_media` (`listing_id`,`sort_order`);