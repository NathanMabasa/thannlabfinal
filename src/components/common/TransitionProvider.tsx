// Page transition provider with AnimatePresence
// This file should be moved to src/providers/TransitionProvider.tsx after directory creation

'use client'

import { ReactNode } from 'react'

export function TransitionProvider({ children }: { children: ReactNode }) {
  // Page transitions will be managed by AnimatePresence wrapper
  // This is a placeholder for now
  return <>{children}</>
}
