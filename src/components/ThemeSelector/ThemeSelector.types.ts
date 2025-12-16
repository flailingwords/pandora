import type { ReactNode } from 'react'

export interface ThemeSelectorProps {
    children?: ReactNode
}

export type ThemeTypes = 'system' | 'dark' | 'light'
