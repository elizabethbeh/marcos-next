import { NextResponse } from "next/server";
//import { fetchRevenue } from "@/app/lib/data";
import { fetchTurnos } from "@/app/lib/data";
//export const dynamic = 'force-dynamic'
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(){
    noStore();
    //const turnos = await fetchRevenue();
    const turnos = await fetchTurnos();
    //return NextResponse.json({ data: turnos }, { status: 201 });

    //const turnos = await fetchTurnos();

    return NextResponse.json({ data: turnos }, { 
        status: 201,
        headers: {
            'Cache-Control': 'no-store',
        },
    });
}