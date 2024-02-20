import Buscar from "@/components/ui/buscar";
import { Suspense } from "react";

export default function Page() {
    return (
        <div>
            <Suspense>
            <Buscar placeholder="Busqueda ..." />
            </Suspense>
        
        </div>
    );
}
