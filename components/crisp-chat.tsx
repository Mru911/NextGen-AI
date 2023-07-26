"use client"
import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () =>{
    useEffect(()=>{
     Crisp.configure("e784e50e-db65-4bcf-b5f0-0ce5ebbe1f32")
    },[])
    return null;
}