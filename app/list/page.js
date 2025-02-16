import { connectDB } from "@/util/database";

export default async function List() {

    
    const db = (await connectDB).db("forum");
    let result = await db.collection('post').find().toArray();

    console.log(result);

    return (
      <div className="list-bg">
        <div className="list-item">
          <h4>{result[1].title}</h4>
          <p>{result[1].content}</p>
        </div>
        <div className="list-item">
        <h4>{result[1].title}</h4>
        <p>{result[1].content}</p>
        </div>
        <div className="list-item">
          <h4>글제목</h4>
          <p>1월 1일</p>
        </div>
      </div>
    )
  } 