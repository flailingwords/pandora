import { type FC, type JSX, lazy, Suspense } from 'react'

import type { ThemeSelectorWrapperProps } from './ThemeSelectorWrapper.types'

const LazyThemeSelectorWrapper = lazy(
    async () => await import('./ThemeSelectorWrapper')
)

type LazyThemeSelectorWrapperProps = JSX.IntrinsicAttributes &
    ThemeSelectorWrapperProps

const ThemeSelectorWrapper: FC = (props) => (
    <Suspense fallback={null}>
        <LazyThemeSelectorWrapper {...props} />
    </Suspense>
)

export default ThemeSelectorWrapper
