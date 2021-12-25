import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context";
import router, { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState("");
  const routet = useRouter();

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push("/");
  }, []);

  if (!showChat) return <div />;
  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 212px)"
          projectID="
785b3425-00d9-4dd8-80c8-76fbff82fd52"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}
