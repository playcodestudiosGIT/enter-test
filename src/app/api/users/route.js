import { NextResponse } from "next/server";
// import User from '@/models/User'
import { addUsersDB, getUsersDB } from "../../../utils/database";
export function GET() {
	const users = getUsersDB();
	return NextResponse.json(users);
}

export async function POST(request) {
	const data = await request.json();
	const user = addUsersDB(data);
	return NextResponse.json({
		user
	})
}