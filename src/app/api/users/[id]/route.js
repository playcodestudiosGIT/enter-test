import { NextResponse } from "next/server";
import { updateUsersDB, deleteUserDB } from "../../../../utils/database";

export function GET(request, { params }) {
	return NextResponse.json({
		message: `Obteniendo usuario ${params.id}`
	});
}


export function DELETE(request, { params }) {
	deleteUserDB(params.id);
	return NextResponse.json({
		message: `Usuario ${params.id} borrado`
	});
}

export async function PUT(request, { params }) {
	const data = await request.json();
	const user = updateUsersDB(params.id, data);
	return NextResponse.json({
		user
	});
}