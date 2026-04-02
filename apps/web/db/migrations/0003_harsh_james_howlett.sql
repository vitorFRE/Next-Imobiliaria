CREATE TABLE `temp_upload` (
	`id` text PRIMARY KEY NOT NULL,
	`file_key` text NOT NULL,
	`file_url` text NOT NULL,
	`owner_user_id` text NOT NULL,
	`status` text DEFAULT 'temp' NOT NULL,
	`expires_at` integer NOT NULL,
	`attached_listing_id` text,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `temp_upload_file_key_unique` ON `temp_upload` (`file_key`);--> statement-breakpoint
CREATE INDEX `temp_upload_status_expires_idx` ON `temp_upload` (`status`,`expires_at`);--> statement-breakpoint
CREATE INDEX `temp_upload_owner_idx` ON `temp_upload` (`owner_user_id`);--> statement-breakpoint
DROP INDEX "listing_status_idx";--> statement-breakpoint
DROP INDEX "listing_city_state_idx";--> statement-breakpoint
DROP INDEX "listing_created_at_idx";--> statement-breakpoint
DROP INDEX "listing_media_listing_id_idx";--> statement-breakpoint
DROP INDEX "listing_media_listing_sort_idx";--> statement-breakpoint
DROP INDEX "account_userId_idx";--> statement-breakpoint
DROP INDEX "session_token_unique";--> statement-breakpoint
DROP INDEX "session_userId_idx";--> statement-breakpoint
DROP INDEX "user_email_unique";--> statement-breakpoint
DROP INDEX "verification_identifier_idx";--> statement-breakpoint
DROP INDEX "temp_upload_file_key_unique";--> statement-breakpoint
DROP INDEX "temp_upload_status_expires_idx";--> statement-breakpoint
DROP INDEX "temp_upload_owner_idx";--> statement-breakpoint
ALTER TABLE `listing` ALTER COLUMN "total_area_m2" TO "total_area_m2" real NOT NULL;--> statement-breakpoint
CREATE INDEX `listing_status_idx` ON `listing` (`status`);--> statement-breakpoint
CREATE INDEX `listing_city_state_idx` ON `listing` (`city_state`);--> statement-breakpoint
CREATE INDEX `listing_created_at_idx` ON `listing` (`created_at`);--> statement-breakpoint
CREATE INDEX `listing_media_listing_id_idx` ON `listing_media` (`listing_id`);--> statement-breakpoint
CREATE INDEX `listing_media_listing_sort_idx` ON `listing_media` (`listing_id`,`sort_order`);--> statement-breakpoint
CREATE INDEX `account_userId_idx` ON `account` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `session_token_unique` ON `session` (`token`);--> statement-breakpoint
CREATE INDEX `session_userId_idx` ON `session` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE INDEX `verification_identifier_idx` ON `verification` (`identifier`);--> statement-breakpoint
ALTER TABLE `listing` ALTER COLUMN "built_area_m2" TO "built_area_m2" real NOT NULL;--> statement-breakpoint
ALTER TABLE `listing_media` ALTER COLUMN "listing_id" TO "listing_id" text NOT NULL REFERENCES listing(id) ON DELETE cascade ON UPDATE no action;