import React from 'react'

import { cn } from '@/lib/utils'

const Tag = ({ className, children } : {
    className?: string
    children?: any
}) => {
    return (
    <div className='w-full h-fit flex justify-center items-center'>
        <h1 className={cn('text-center mb-8 tag', className)}>{children}</h1>
    </div>
    )
}

export default Tag