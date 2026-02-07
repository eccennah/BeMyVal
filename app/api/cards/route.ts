import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { nanoid } from 'nanoid';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { recipient, message, theme } = body;

        // Generate a short ID (improves sharing)
        const id = nanoid(6); // e.g., "AbCd12"

        const { data, error } = await supabase
            .from('cards')
            .insert([
                { id, recipient, message, theme }
            ])
            .select();

        if (error) {
            console.error('Supabase Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ id });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
