CREATE TABLE "admin_activity" (
	"id" text PRIMARY KEY NOT NULL,
	"actor_id" text NOT NULL,
	"actor_name" text,
	"actor_email" text NOT NULL,
	"action" text NOT NULL,
	"target_user_id" text,
	"target_email" text,
	"details" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "admin_activity_created_at_idx" ON "admin_activity" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "admin_activity_actor_id_idx" ON "admin_activity" USING btree ("actor_id");--> statement-breakpoint
CREATE INDEX "admin_activity_action_idx" ON "admin_activity" USING btree ("action");