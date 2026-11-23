
ALTER TABLE "user" ADD COLUMN "first_name" text;
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "last_name" text;
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "phone_number" text;
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" text DEFAULT 'user' NOT NULL;
