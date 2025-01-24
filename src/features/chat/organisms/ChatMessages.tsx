import { ReactNode, useEffect, useRef } from "react";
import useChatContext from "../hooks/useChatContext";
import { ChatInputMessage } from "../molecules/ChatInputMessage";
import { ChatMessage } from "../molecules/ChatMessage";
import { FacebookTheme } from "../quarks/themes/FacebookTheme";

export const ChatMessages = (): ReactNode => {
  // const [messages, setMessages] = useState<IMessage[]>([]);
  const { messages, setMessages } = useChatContext();

  // useEffect(() => {
  //   setMessages([{
  //     owner: "Suissa",
  //     text: "Ola",
  //     datetime: "10/10/2023, 09:00",
  //     type: "receiver"
  //   }]);
  // }, []);

  // const addAutoReply = (userMessage: IMessage) => {
  //   setTimeout(() => {
  //     const autoReply: IMessage = {
  //       owner: "Bot",
  //       text: `Resposta automática para: ${userMessage.text}`,
  //       datetime: getDatetime(),
  //       type: "receiver"
  //     };
      
  //     setMessages((prev) => [...prev, autoReply]);
  //   }, 1000);
  // };

  // useEffect(() => {
  //   if (messages.length > 0) {
  //     const lastMessage = messages[messages.length - 1];
  //     if (lastMessage.type === "sender") {
  //       addAutoReply(lastMessage);
  //     }
  //   }
  // }, [messages]);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-3/4 fixed top-0 bg-white">
      <div 
        className="flex flex-col-reverse h-[calc(100vh-60px)] overflow-y-auto"
        ref={messagesContainerRef}
      >
        <div className="flex flex-col">
          {Array.isArray(messages) && messages.map((message, index) => (
            <div key={index}>
              <ChatMessage 
                text={message.text} 
                owner={message.owner} 
                datetime={message.datetime}
                type={message.type}
                messageClass={message.type === "sender" ? FacebookTheme.senderClass : FacebookTheme.receiverClass}
                datetimeClass={FacebookTheme.datetimeClass}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-[60px] border-0">
        <ChatInputMessage setMessages={setMessages} />
      </div>
    </div>
  );
};