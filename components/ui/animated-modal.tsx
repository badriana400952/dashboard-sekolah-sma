import { motion, AnimatePresence } from "motion/react";
import { ReactNode } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

type ModalSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ModalProps {
  opened: boolean;
  onClose: () => void;
  title?: ReactNode;
  size?: ModalSize;
  centered?: boolean;
  children: ReactNode;
}

const sizeMap: Record<ModalSize, string> = {
  xs: "max-w-sm",
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export default function Modal({
  opened,
  onClose,
  title,
  size = "md",
  centered = true,
  children,
}: ModalProps) {
  return (
    <AnimatePresence>
      {opened && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
         <motion.div
  className={clsx(
    "fixed z-50 left-1/2 -translate-x-1/2 w-full px-4",
    centered ? "top-1/2 -translate-y-1/2" : "top-20"
  )}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div
              className={clsx(
                "mx-auto bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden",
                sizeMap[size]
              )}
            >
              {/* Header */}
              {title && (
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
                  <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                    {title}
                  </h2>
                  <button
                    onClick={onClose}
                    className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}

              {/* Content */}
              <div className="px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
