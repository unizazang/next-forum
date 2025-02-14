
// 'use client'

import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";



export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray()
  // post 컬렉션에 있는 모든 데이터를 가져와서 Array 로 변환

  console.log(result);


  return (
    <div><h1>안녕하세요</h1></div>
  );
}
