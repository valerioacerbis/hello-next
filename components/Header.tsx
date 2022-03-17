import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
    return (
        <header className="relative w-full p-3 border border-gray-500 text-center">
            <nav className="w-full text-center flex flex-col sm:flex-row gap-2 justify-center">
                <Link href="/">
                    <a className="text-2xl cursor-pointer">Home</a>
                </Link>
                <Link href="/catalog">
                    <a className="text-2xl cursor-pointer">Catalog</a>
                </Link>
                <Link href="/contacts">
                    <a className="text-2xl cursor-pointer">Contacts</a>
                </Link>
                <Link href="/bootstrap">
                    <a className="text-2xl cursor-pointer">Bootstrap</a>
                </Link>
            </nav>
        </header>
    )
}