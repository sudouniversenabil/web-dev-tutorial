"use client"
import { useState } from "react";
export default function Home() {
  const [count,setCount]=useState(0)
  return (
    <div>
      i my name is app and iam in app dict {count}
    </div>
  );
}
