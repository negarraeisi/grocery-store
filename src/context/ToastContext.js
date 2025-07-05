import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const showToast = (msg) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {visible && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300 z-50">
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
