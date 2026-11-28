CREATE TABLE "email_check_rate_limit" (
	"id" text PRIMARY KEY NOT NULL,
	"count" integer DEFAULT 0 NOT NULL,
	"window_started_at" timestamp NOT NULL
);
