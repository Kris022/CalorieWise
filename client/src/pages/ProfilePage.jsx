import { useState } from "react";
import UserCalorieIntakeForm from "../components/userForms/UserCalorieIntakeForm";
import UserProfileForm from "../components/userForms/UserProfileForm";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Jane",
    email: "jane@mail.com",
    age: 21,
  });
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex justify-center items-center">
        <UserProfileForm user={user} />
    </div>
  );
}
