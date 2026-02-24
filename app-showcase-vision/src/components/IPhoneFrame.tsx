import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

interface IPhoneFrameProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const IPhoneFrame = ({ children, activeTab, onTabChange }: IPhoneFrameProps) => {
  return (
    <div className="iphone-frame">
      <div className="iphone-notch" />
      <div className="iphone-status-bar">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor"><rect x="0" y="4" width="3" height="8" rx="1"/><rect x="4.5" y="2" width="3" height="10" rx="1"/><rect x="9" y="0" width="3" height="12" rx="1"/><rect x="13.5" y="1" width="2.5" height="11" rx="1" opacity="0.3"/></svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor"><path d="M8 3C10.7 3 13.1 4.1 14.8 6L16 4.8C14 2.5 11.2 1 8 1S2 2.5 0 4.8L1.2 6C2.9 4.1 5.3 3 8 3Z"/><path d="M8 7C9.6 7 11 7.6 12 8.6L13.2 7.4C11.8 6 10 5 8 5S4.2 6 2.8 7.4L4 8.6C5 7.6 6.4 7 8 7Z"/><circle cx="8" cy="11" r="1.5"/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor"><rect x="0" y="1" width="21" height="10" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/><rect x="22" y="4" width="2" height="4" rx="1"/><rect x="2" y="3" width="14" height="6" rx="1" fill="currentColor"/></svg>
        </div>
      </div>
      <div className="iphone-content">
        {children}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
      <div className="iphone-home-indicator" />
    </div>
  );
};
