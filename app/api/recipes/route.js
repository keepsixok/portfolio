// A function to POST our recipe to the DB
// req can be anything - in this case i used it for 'Request' I would also use res for 'Response'
import connectMongoDB from "@/libs/mongodb"
import Recipe from "@/models/recipe"
import { NextResponse } from "next/server"

await connectMongoDB()


export async function POST(req) {
    const { title, description } = await req.json()
    await Recipe.create({title, description})
    return NextResponse.json({message: "Recipe Created"}, {status: 201})
}

export async function GET(){
    const recipes = await Recipe.find()
    return NextResponse.json({recipes})
}

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id")
    await Recipe.findByIdAndDelete(id)
    return NextResponse.json({ message: "Recipe Deleted"}, {status: 200})
}

