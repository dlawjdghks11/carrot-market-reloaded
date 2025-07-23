import db from "@/lib/script";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
}

const Profile = async () => {
  const user = await getUser();
  const logOut = async () => {
    "use server";
    const session = await getSession();
    session.destroy();
    redirect("/");
  };
  return (
    <div>
      <h1>Welcome! {user?.username}!</h1>
      <form action={logOut}>
        <button>Log out</button>
      </form>
    </div>
  );
};

export default Profile;
