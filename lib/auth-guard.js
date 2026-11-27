import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { auth } from "./auth.js";
import { db } from "./db/index.js";
import { user as userTable } from "./db/schema";

export async function getAuthContext() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return null;
  }

  const [dbUser] = await db
    .select({
      id: userTable.id,
      email: userTable.email,
      emailVerified: userTable.emailVerified,
      role: userTable.role,
    })
    .from(userTable)
    .where(eq(userTable.id, session.user.id))
    .limit(1);

  if (!dbUser) {
    return null;
  }

  const configuredEmail = process.env.SUPERADMIN_EMAIL?.trim().toLowerCase();

  const isSuperadmin =
    Boolean(configuredEmail) &&
    dbUser.emailVerified &&
    dbUser.email.toLowerCase() === configuredEmail;

  const role = isSuperadmin ? "superadmin" : dbUser.role;

  return {
    session,
    user: {
      ...session.user,
      role,
    },
    role,
    isSuperadmin,
  };
}

export async function requireRole(allowedRoles) {
  const context = await getAuthContext();

  if (!context) {
    return {
      context: null,
      response: NextResponse.json(
        { error: "Необходима авторизация" },
        { status: 401 },
      ),
    };
  }

  if (!allowedRoles.includes(context.role)) {
    return {
      context: null,
      response: NextResponse.json(
        { error: "Недостаточно прав" },
        { status: 403 },
      ),
    };
  }

  return {
    context,
    response: null,
  };
}
