import { NavLink } from "react-router-dom"

/* This example requires Tailwind CSS v2.0+ */
const posts = [{
        title: 'Cafes',
        href: 'cafes',
        category: { name: 'Article', href: '#' },
        imageUrl: 'https://images.unsplash.com/photo-1594806659841-ebb406a3c86e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }, {
        title: 'Fitness Club',
        href: '#',
        category: { name: 'Video', href: '#' },
        imageUrl: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }, {
        title: 'Villas',
        href: 'villas',
        category: { name: 'Case Study', href: '#' },
        imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]
export default function Marketplace() {
return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Marketplace</h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
                </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {posts.map((post) => (
                <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-indigo-600">
                                <NavLink to={post.href} className="hover:underline">
                                    {post.category.name}
                                </NavLink>
                            </p>
                            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    )
}