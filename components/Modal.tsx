import { createPortal } from "react-dom";
import { Fragment } from "react";

interface Props {
  isOpen: boolean;
  children: JSX.Element | JSX.Element[];
}

function Modal({ isOpen, children }: Props) {
  const portal = document.getElementById("portal");
  if (portal && isOpen) {
    return createPortal(
      <div className="backdrop-blur-sm bg-slate-500/50 w-full h-screen  fixed top-0 z-[99999]">
        {children}
      </div>,
      portal
    );
  }
  return null;
}

export default Modal;
