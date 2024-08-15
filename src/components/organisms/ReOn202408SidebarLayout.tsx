import React, { useState, useEffect } from "react";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { ReOn202408WebSidebar } from "./ReOn202408WebSidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
  chatHistory: any[];
  currentChatId: string | null;
  onStartNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  onAddData: () => void;
}

export const ReOn202408SidebarLayout: React.FC<SidebarLayoutProps> = ({
  children,
  chatHistory,
  currentChatId,
  onStartNewChat,
  onSelectChat,
  onAddData,
}) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(isLargerThan768);

  useEffect(() => {
    setIsSidebarOpen(isLargerThan768);
  }, [isLargerThan768]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarWidth = isSidebarOpen ? "250px" : "60px";
  /**
   * メニューサイドバー
   * - New Chatしか名前が出てこなくなってる
   *   - Thread作成前にNew Chatじゃない名前をつける by LLM
   *   - もしくは日付+連番を表示する by system
   * - サイドバー開閉に日本語テキストを入れる
   * - Tooltipで吹き出しから触れる編集機能の追加 (リネーム / 削除)
   * - サイドバーの開閉アイコンの横に「サイドバーを閉じる」の文言を追加
   * - サイドバーの選択中のチャットの背景色を目立たせる
   * - サイドバーのアニメーション
   *   - 閉じてて開く時はアニメーションがあるが
   *   - 開いてて閉じる時はアニメーションがない
   */
  return (
    <Flex width="100%" height="100vh" overflow="hidden">
      <ReOn202408WebSidebar
        chatHistory={chatHistory}
        currentChatId={currentChatId}
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={toggleSidebar}
        onStartNewChat={onStartNewChat}
        onSelectChat={onSelectChat}
        onAddData={onAddData}
      />
      <Box
        flexGrow={1}
        overflowY="auto"
        transition="margin-left 0.3s"
        marginLeft={isLargerThan768 ? sidebarWidth : "0"}
      >
        {children}
      </Box>
    </Flex>
  );
};
