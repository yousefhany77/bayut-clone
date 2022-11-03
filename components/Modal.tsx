import { useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean;
  children: JSX.Element | JSX.Element[];
}

function Modal({ isOpen, children }: Props) {
  const portal = document.getElementById("portal");
  const ref = useRef<HTMLDivElement>(null);

  if (portal && isOpen) {
    ref?.current?.focus();
    return createPortal(
      <div
        ref={ref}
        className="backdrop-blur-sm bg-slate-500/50 w-full h-screen  fixed top-0 z-[99999]"
      >
        {children}
      </div>,
      portal
    );
  }
  return null;
}

export default Modal;
