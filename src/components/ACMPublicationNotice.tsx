import { useEffect, useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const ACMPublicationNotice = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show the notice after a brief delay to ensure the page is fully loaded
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogContent className="max-w-md">
                <AlertDialogHeader>
                    <AlertDialogTitle>Important Update</AlertDialogTitle>
                    <AlertDialogDescription className="text-base pt-3">
                        The accepted papers of this workshop will be published in{" "}
                        <span className="font-semibold text-foreground">ACM DL</span> as part
                        of the{" "}
                        <span className="font-semibold text-foreground">ISEC proceedings</span>.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex justify-end mt-4">
                    <AlertDialogAction onClick={() => setIsOpen(false)}>
                        Got it
                    </AlertDialogAction>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};
