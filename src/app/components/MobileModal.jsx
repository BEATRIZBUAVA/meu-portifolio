'use client';
import React from "react";
import { motion } from "framer-motion";

export default function MobileModal({ children, onClose, title = "Janela" }) {
    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed bottom-0 left-0 right-0 bg-amber-50 dark:bg-zinc-900 shadow-xl rounded-t-2xl z-50"
            style={{
                maxHeight: "80vh",
                overflowY: "auto",
            }}
        >
            <div className="flex items-center justify-between p-4 border-b bg-zinc-700 text-white border-gray-300">
                <span className="font-medium">{title}</span>
                <button onClick={onClose} className="text-gray-500 text-xl font-bold">
                    ×
                </button>
            </div>
            <div className="p-4">{children}</div>
        </motion.div>
    );
}
