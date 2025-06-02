// app/PageTransitionWrapper.jsx
'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

export default function PageTransitionWrapper({ children }) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ rotateY: 90, opacity: 0, transformOrigin: 'left center' }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0, transformOrigin: 'right center' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{ minHeight: '100vh' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
