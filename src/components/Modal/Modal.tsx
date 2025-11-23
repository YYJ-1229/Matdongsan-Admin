import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose} // 배경 클릭 시 닫기
    >
      <div
        className="w-full max-w-3xl rounded-xl bg-white p-6 dark:bg-dark-2"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫기 방지
      >
        {children}
      </div>
    </div>
  );
}
