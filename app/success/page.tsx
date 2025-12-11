'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
    const searchParams = useSearchParams();
    const [status, setStatus] = useState('Verifying...');
    // Simulating a key if not present for dev/demo purposes
    const licenseKey = searchParams.get('license_key') || 'DEMO-KEY-12345';

    useEffect(() => {
        // Simulate a brief "Check"
        const timer = setTimeout(() => {
            setStatus('Activation Complete');
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold tracking-tight">Payment Successful!</h1>
                <p className="text-gray-400">
                    Thank you for your purchase. We are activating your extension now.
                </p>

                <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                    <p className="text-sm text-gray-500 mb-2">LICENSE KEY</p>
                    {/* The extension will look for this ID */}
                    <code id="license-key-display" className="text-xl font-mono text-green-400 block select-all">
                        {licenseKey}
                    </code>
                </div>

                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className={`h-full bg-blue-500 transition-all duration-1000 ${status === 'Activation Complete' ? 'w-full' : 'w-1/2'}`}></div>
                </div>

                <p className="text-sm font-medium text-blue-400 animate-pulse">
                    Extension Status: {status}
                </p>

                {/* Hidden data attribute for the extension content script to easily find */}
                <div id="extension-activator" data-license-key={licenseKey} style={{ display: 'none' }}></div>
            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SuccessContent />
        </Suspense>
    );
}
