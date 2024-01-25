import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

export const useAppTour = create(
    devtools(
        combine(
            {
                is_profile_updated_visited: 0 as number,
                is_post_mint_enabled: false as boolean
            },
            (set) => ({
                set,
                reset: () =>
                    set({
                        is_profile_updated_visited: 0 as number,
                        is_post_mint_enabled: false as boolean
                    })
            })
        ),
        { name: 'AppTour' }
    )
);
