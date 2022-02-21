
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
                path: '/product/brochure'
            },
            {
                title: 'Business Card',
                path: '/product/business-card'
            },
            {
                title: 'Receipt',
                path: '/product/receipt'},
            {
                title: 'Banners',
                path: '/product',
                subMenu: [
                    {
                        title: 'Pull-up banner',
                        path: '/product'
                    },
                    {
                        title: 'Standee banner',
                        path: '/product'
                    },
                    {
                        title: 'Tarpulin',
                        path: '/product'
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