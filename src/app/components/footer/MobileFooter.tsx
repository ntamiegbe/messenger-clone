'use client'

import MobileFooterItem from './MobileFooterItem'

import useConversation from '@/app/hooks/useConversation'
import useRoutes from '../../hooks/useRoutes'

const MobileFooter = () => {
    const routes = useRoutes()
    const { isOpen } = useConversation()

    if (isOpen) {
        return null
    }

    return (
        <div className='fixed flex items-center justify-evenly w-full bottom-0 z-40 bg-darkerBlue border-lightBlue lg:border-t-1 lg:hidden'>
            {routes.map((item) => (
                <MobileFooterItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    active={item.active}
                    icon={item.icon}
                />
            ))}
        </div>
    )
}

export default MobileFooter