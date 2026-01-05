import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';
import {
  errorMessages,
  successMessages,
  statusCodes,
} from '@/config/api';

export async function GET() {
  try {
    await connectDB();
    const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
    return NextResponse.json(
      { success: true, message: successMessages.testimonials.fetched, data: testimonials },
      { status: statusCodes.ok }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: errorMessages.testimonials.fetchFailed },
      { status: statusCodes.serverError }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const testimonial = await Testimonial.create(body);
    return NextResponse.json(
      { success: true, message: successMessages.testimonials.created, data: testimonial },
      { status: statusCodes.created }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : errorMessages.testimonials.createFailed;
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: statusCodes.badRequest }
    );
  }
}

