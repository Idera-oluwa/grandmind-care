import { NextResponse } from 'next/server';

export async function POST(request):
    const data = request.formData();
    return NextResposne.json({ data })