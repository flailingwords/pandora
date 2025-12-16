import type { ThemeTypes } from './ThemeSelector.types'

const validThemeTypes = ['system', 'dark', 'light']

export const isThemeType = (inp?: unknown): inp is ThemeTypes =>
    typeof inp === 'string' && validThemeTypes.includes(inp)

export const enforceTheme = (): void => {
    const storedTheme = isThemeType(localStorage.theme)
        ? localStorage.theme
        : 'system'

    switch (storedTheme) {
        case 'dark':
            document.documentElement.classList.toggle('dark', true)
            document.documentElement.classList.toggle('light', false)
            break
        case 'light':
            document.documentElement.classList.toggle('dark', false)
            document.documentElement.classList.toggle('light', true)
            break
        case 'system':
            document.documentElement.classList.toggle(
                'dark',
                window.matchMedia('(prefers-color-scheme: dark)').matches
            )
            document.documentElement.classList.toggle(
                'light',
                window.matchMedia('(prefers-color-scheme: light)').matches
            )
    }
}

export const saveTheme = (theme: ThemeTypes): void => {
    switch (theme) {
        case 'light':
            localStorage.theme = 'light'
            break
        case 'dark':
            localStorage.theme = 'dark'
            break
        case 'system':
            localStorage.removeItem('theme')
            break
    }

    enforceTheme()
}
