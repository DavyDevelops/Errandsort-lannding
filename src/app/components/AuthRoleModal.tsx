import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from './ui/dialog';
import { User, Store, Truck, Package } from 'lucide-react';
import { cn } from './ui/utils';

interface AuthRoleModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode: 'login' | 'signup';
}

export function AuthRoleModal({ isOpen, onClose, mode }: AuthRoleModalProps) {
    const roles = [
        {
            id: 'customer',
            title: 'Customer',
            description: 'Shop for products and hire services.',
            icon: User,
            color: 'bg-blue-100 text-blue-600',
            hoverBorder: 'hover:border-blue-500',
            urls: {
                signup: 'https://errandsortpadi.errandsort.com/',
                login: 'https://errandsortpadi.errandsort.com/',
            },
        },
        {
            id: 'vendor',
            title: 'Vendor',
            description: 'Sell your products on our marketplace.',
            icon: Store,
            color: 'bg-emerald-100 text-emerald-600',
            hoverBorder: 'hover:border-emerald-500',
            urls: {
                signup: 'https://errandsorthub.errandsort.com/vendor/register/',
                login: 'https://errandsorthub.errandsort.com/vendor/login/',
            },
        },
        {
            id: 'provider',
            title: 'Service Provider',
            description: 'Offer professional services (plumbing, electrical, etc.) and get hired.',
            icon: Truck,
            color: 'bg-amber-100 text-amber-600',
            hoverBorder: 'hover:border-amber-500',
            urls: {
                signup: 'https://errandsorthub.errandsort.com/provider/register/',
                login: 'https://errandsorthub.errandsort.com/provider/login/',
            },
        },
        {
            id: 'errand',
            title: 'Errand',
            description: 'Deliver packages and run errands.',
            icon: Package,
            color: 'bg-purple-100 text-purple-600',
            hoverBorder: 'hover:border-purple-500',
            urls: {
                signup: 'https://errandsorthub.errandsort.com/errand/register/',
                login: 'https://errandsorthub.errandsort.com/errand/login/',
            },
        },
    ];

    const handleRoleSelect = (url: string) => {
        window.location.href = url;
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader className="text-center">
                    <DialogTitle className="text-2xl font-bold">
                        {mode === 'signup' ? 'Join ErrandSort' : 'Welcome Back'}
                    </DialogTitle>
                    <DialogDescription className="text-base">
                        Choose your role to {mode === 'signup' ? 'create an account' : 'sign in'}.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2">
                    {roles.map((role) => (
                        <button
                            key={role.id}
                            onClick={() => handleRoleSelect(role.urls[mode])}
                            className={cn(
                                'group flex flex-col items-center rounded-xl border-2 border-gray-100 bg-white p-6 text-center transition-all hover:scale-105 hover:shadow-md',
                                role.hoverBorder
                            )}
                        >
                            <div
                                className={cn(
                                    'mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors',
                                    role.color
                                )}
                            >
                                <role.icon className="h-8 w-8" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-gray-900">
                                {role.title}
                            </h3>
                            <p className="text-sm text-gray-500">{role.description}</p>
                        </button>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
