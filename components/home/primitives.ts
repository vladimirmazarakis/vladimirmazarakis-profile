import { tv } from "tailwind-variants";

export const block = tv({
    base: 'm-auto w-full rounded-3xl',
    variants:{
        color: {
            black: 'bg-gradient-to-tr from-zinc-700 to-zinc-900'
        }
    }
});