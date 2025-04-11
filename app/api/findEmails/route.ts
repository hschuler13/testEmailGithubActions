import connectionToDatabase from "@/lib/mongoose"
import User from "@/models/users"
import { NextResponse } from "next/server"

export async function GET(){
    try{
        await connectionToDatabase()
        //retrieve user emails (add their schedules later)
        let arr: any[] = [];
        //may be used for schedules later
        let arr1: any[] = [];
        User.find({})
        .then((docs: any[]) => {
          docs.forEach((doc: { email: any; }) => {
            arr.push(doc.email);
            console.log(arr)
          });
        })
        .catch((err: any) => console.error(err));
        console.log(arr)
        return NextResponse.json(arr, {status: 201})
    } catch(err) {
        console.log(err)
        return NextResponse.json({status: 404})
    }
}