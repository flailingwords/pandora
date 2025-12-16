import { useEffect, useMemo, useState, type FC } from 'react'

import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import SunIcon from '@heroicons/react/24/outline/SunIcon'
import NoSymbolIcon from '@heroicons/react/24/solid/NoSymbolIcon'

import type { ThemeSelectorProps } from './ThemeSelector.types'

import ThemeSelectorWrapper from './ThemeSelectorWrapper/ThemeSelectorWrapper'
import { isThemeType, saveTheme } from './ThemeSelector.utils'

const sharedClass = 'm-auto block max-h-6 max-w-6'

const ThemeSelector: FC = () => {
    const [theme, setTheme] = useState(
        typeof window !== 'undefined' && isThemeType(localStorage.theme)
            ? localStorage.theme
            : 'system'
    )

    useEffect(() => {
        saveTheme(theme)
    }, [theme])

    useEffect(() => {
        const storageListener = (event: StorageEvent) => {
            if (event.key === 'theme')
                setTheme(
                    isThemeType(event.newValue) ? event.newValue : 'system'
                )
        }

        window.addEventListener('storage', storageListener)

        return () => {
            window.removeEventListener('storage', storageListener)
        }
    }, [])

    if (theme === 'light')
        return (
            <ThemeSelectorWrapper>
                <SunIcon
                    className={sharedClass}
                    onClick={() => {
                        setTheme('dark')
                    }}
                />
            </ThemeSelectorWrapper>
        )

    if (theme === 'dark')
        return (
            <ThemeSelectorWrapper>
                <MoonIcon
                    className={sharedClass}
                    onClick={() => {
                        setTheme('system')
                    }}
                />
            </ThemeSelectorWrapper>
        )

    return (
        <ThemeSelectorWrapper>
            <NoSymbolIcon
                className={sharedClass}
                onClick={() => {
                    setTheme('light')
                }}
            />
        </ThemeSelectorWrapper>
    )
}

export default ThemeSelector
