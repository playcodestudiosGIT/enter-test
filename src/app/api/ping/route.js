

import { NextResponse } from 'next/server'
import { getUsers } from '../../../utils/database';
export function GET() {
	console.log(getUsers());
	return NextResponse.json({
		message: "hello world!"
	});
}