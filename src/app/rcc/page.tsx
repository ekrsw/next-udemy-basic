'use client'

import { useState } from "react"

export default function ClientComponent() {
    const [count, setCount] = useState(0)
    console.log('ClientComponent')
    return (
        <div>
            クライアント
            <button onClick={() => setCount(count + 1)}>+1</button>
            <p>count: {count}</p>
        </div>
    )
}
