import React from "react";
import InputField from "../molecules/InputField";
import { Button } from "../../../shared/atoms/Button";

interface UserProfileFormProps {
  name: string;
  email: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const UserProfileForm: React.FC<UserProfileFormProps> = ({
  name,
  email,
  onNameChange,
  onEmailChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-6 bg-white p-6 shadow-md rounded-md"
    >
      {/* Campo Nome */}
      <InputField id="name" label="Name" value={name} onChange={onNameChange} />

      {/* Campo Email */}
      <InputField
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={onEmailChange}
      />

      {/* Botão de Submissão */}
      <Button variant="primary" fullWidth type="submit">
        Save
      </Button>
    </form>
  );
};

export default UserProfileForm;
