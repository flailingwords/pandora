import { type FC, type JSX, lazy, Suspense } from 'react'

import type { ThemeSelectorProps } from './ThemeSelector.types'

const LazyThemeSelector = lazy(async () => await import('./ThemeSelector'))

type LazyThemeSelectorProps = JSX.IntrinsicAttributes & ThemeSelectorProps

const ThemeSelector: FC = (props) => (
    <Suspense fallback={null}>
        <LazyThemeSelector {...props} />
    </Suspense>
)

export default ThemeSelector
