import connectMongoDB from '@/libs/mongodb';
import Recipe from '@/models/recipe';
import { NextResponse } from 'next/server';



export async function PUT(req, {params}) {
    const {id} = params
    const {newTitle: title, newDescription: description} = await req.json()
    await connectMongoDB()
    await Recipe.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({message: "Recipe Updated"}, {Status: 200})
}

export async function GET(req, {params}){
    const {id} = params
    await connectMongoDB()
    const recipe = await Recipe.findOne({_id: id})
    return NextResponse.json({recipe}, {status: 200})

}
