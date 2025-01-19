import React, { useState } from "react";
import UserProfileTemplate from "../templates/UserProfileTemplate";

const UserProfilePage = () => {
  const [user, setUser] = useState({
    name: "João Silva",
    email: "joao.silva@example.com",
    avatar: "https://avatar.iran.liara.run/public/boy",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleSubmit = () => {
    console.log("User updated:", user);
  };

  return (
    <UserProfileTemplate
      user={user}
      onNameChange={handleNameChange}
      onEmailChange={handleEmailChange}
      onSubmit={handleSubmit}
    />
  );
};

export default UserProfilePage;
