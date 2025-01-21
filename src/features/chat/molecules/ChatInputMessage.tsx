import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../../../shared/atoms/Button";
import { Input } from "../../../shared/atoms/Input";
export interface IMessage {
  owner: string;
  text: string;
  datetime: string;
  type: string; // sender | receiver
}
interface ChatInputMessageProps {
  onSubmit?: () => void;
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}

const getDatetime = () => {
  const date = new Date();
  const datetime = `${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  return datetime;
};

const getOwner = () => {
  return "suissa";
};

console.log(getDatetime());

export const ChatInputMessage = ({ setMessages }: ChatInputMessageProps) => {
  const [message, setMessage] = useState<IMessage>();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message) {
      setMessages((prev) => [...prev, message]);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <Input
          type="text"
          value=""
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMessage({
              owner: getOwner(),
              text: e.target.value,
              datetime: getDatetime(),
              type: "sender",
            })
          }
        ></Input>
      </div>
      <Button type="submit">Enviar</Button>
    </form>
  );
};
