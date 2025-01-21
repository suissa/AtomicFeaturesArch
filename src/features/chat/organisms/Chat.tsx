import { ReactNode, useEffect, useRef, useState } from "react"
import { ChatInputMessage } from "../molecules/ChatInputMessage"
import { ChatMessage } from "../molecules/ChatMessage";
import { IMessage } from "../molecules/ChatInputMessage";

const FacebookTheme = {
  senderClass: `flex flex-row-reverse bg-blue-500 text-white  
justify-self-end mr-6 mb-6 px-6  py-2 rounded rounded-xl`, 
  receiverClass: `flex flex-row bg-gray-200 text-gray-800  
justify-self-start ml-6 mb-6 mr-6 mb-6 px-6  py-2 rounded rounded-xl`
}

export const Chat = (): ReactNode => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([{
      owner: "Suissa",
      text: "Ola",
      datetime: "10/10/2023, 09:00",
      type: "receiver"
    }]);
  }, []);


  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Função para rolar para o fim do container
  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]); // Rola sempre que messages mudar


  return (
    <div className="w-full bg-white fixed top-0">
      <div 
        className="flex flex-col-reverse h-[calc(100vh-60px)] overflow-y-auto"
        ref={messagesContainerRef}>
        <div className="flex flex-col">
          {messages && messages.map((message, index) => (
            <div key={index}>
              <ChatMessage 
                text={message.text} 
                owner={message.owner} 
                datetime={message.datetime}
                messageClass={message.type === "sender" ? FacebookTheme.senderClass : FacebookTheme.receiverClass}
                datetimeClass="text-xs text-gray-500 text-center"
              />
            </div>
          ))}
        </div>
        {/* Div de referência para o scroll */}
        <div ref={messagesEndRef} />
      </div>
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[calc(100%-40px)]">
        <ChatInputMessage setMessages={setMessages} />
      </div>
    </div>
  );
}
