export async function DELETE(request, { params }) {
  const { context, response } = await requireRole(["superadmin"]);

  if (response) return response;

  try {
    const { id } = await params;

    // Нельзя удалить собственный аккаунт.
    if (id === context.user.id) {
      return NextResponse.json(
        { error: "Нельзя удалить собственный аккаунт." },
        { status: 403 },
      );
    }

    const [targetUser] = await db
      .select({
        id: userTable.id,
        email: userTable.email,
        role: userTable.role,
      })
      .from(userTable)
      .where(eq(userTable.id, id))
      .limit(1);

    if (!targetUser) {
      return NextResponse.json(
        { error: "Пользователь не найден." },
        { status: 404 },
      );
    }

    const superadminEmail = process.env.SUPERADMIN_EMAIL?.trim().toLowerCase();

    const isProtectedSuperadmin =
      targetUser.role === "superadmin" ||
      (Boolean(superadminEmail) &&
        targetUser.email.toLowerCase() === superadminEmail);

    // Нельзя удалить ни одного суперадминистратора.
    if (isProtectedSuperadmin) {
      return NextResponse.json(
        { error: "Нельзя удалить главного администратора." },
        { status: 403 },
      );
    }

    await db.delete(userTable).where(eq(userTable.id, id));

    return NextResponse.json({
      message: "Пользователь успешно удалён.",
    });
  } catch (error) {
    console.error("Admin user deletion error:", error);

    return NextResponse.json(
      { error: "Не удалось удалить пользователя." },
      { status: 500 },
    );
  }
}
