import { NextResponse } from 'next/server';
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

// Submissions are disabled while the testimonials section is not live.
// Before re-enabling: validate the body fields explicitly and require
// authentication — never pass the raw request body to Testimonial.create.
export async function POST() {
  return NextResponse.json(
    { success: false, error: errorMessages.general.forbidden },
    { status: statusCodes.forbidden, headers: { Allow: 'GET' } }
  );
}

