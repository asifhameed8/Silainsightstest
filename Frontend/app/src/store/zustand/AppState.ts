import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

export const AppStateStore = create(
    devtools(
        combine(
            {
                activeLanguage: 'en' as string
            },
            (set) => ({
                set,
                reset: () =>
                    set({
                        activeLanguage: 'en' as string
                    })
            })
        ),
        { name: 'appStateStore' }
    )
);
