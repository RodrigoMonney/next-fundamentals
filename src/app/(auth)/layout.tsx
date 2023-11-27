import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <div className='text-xl font-bold'>Monney Solutions</div>
            <div>{children}</div>
        </div>
    )
}