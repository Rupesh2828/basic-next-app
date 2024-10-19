"use server"

import client from "@/db"

export async function signin(username: string, password: string) {

    //extracting req.body

    try {
        await client.user.create({
            data: {
                username: username,
                password: password
            }
        });
        return true

    } catch (error) {
        return false
    }
}