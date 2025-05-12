// app/not-found.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Home, X, AlertTriangle } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md mx-auto p-6">
        {/* Error Container */}
        <div className="text-center space-y-6">
          {/* Animated Icons */}
          <div className="relative">
            <div className="absolute -top-2 right-1/2 transform translate-x-1/2">
              <X className="w-16 h-16 text-destructive animate-float opacity-20" />
            </div>
            <AlertTriangle className="w-24 h-24 mx-auto text-destructive animate-float2" />
          </div>

          {/* Error Message */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold animate-shine">404</h1>
            <p className="text-xl text-muted-foreground">عذراً، هذه الصفحة غير موجودة</p>
          </div>

          {/* Path that caused the error */}
          <div className="text-sm text-muted-foreground bg-muted/50 rounded-md p-2 font-mono">
            {pathname}
          </div>

          {/* Action Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>العودة للصفحة الرئيسية</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
