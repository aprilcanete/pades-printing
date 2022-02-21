
export const menuItems = [
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Products',
        path: '/products',
        subMenu: [
            {
                title: 'Brochure',
                path: '/products/brochure'
            },
            {
                title: 'Business Card',
                path: '/products/business-card'
            },
            {
                title: 'Receipt',
                path: '/products/receipt'},
            {
                title: 'Banners',
                path: '/products/banners',
                subMenu: [
                    {
                        title: 'Pull-up banner',
                        path: '/products/banners/pull-up'
                    },
                    {
                        title: 'Standee banner',
                        path: '/products/banners/standee'
                    },
                    {
                        title: 'Tarpulin',
                        path: '/products/banners/tarpulin'
                    }
                ]
            },
        ]
    },
    {
        title: 'Services',
        path: '/services',
        subMenu: [
            {
                title: 'Print Service',
                path: '/service'
            },
            {
                title: 'Design Service',
                path: '/service'
            }
        ]
    },
    {
        title: 'Portfolio',
        path: '/portfolio'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]