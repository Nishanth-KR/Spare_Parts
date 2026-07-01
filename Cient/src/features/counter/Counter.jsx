import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="text-xl">Count: {count}</div>
            <div className="flex gap-2">
                <button
                    onClick={() => dispatch(decrement())}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                >
                    -
                </button>
                <button
                    onClick={() => dispatch(increment())}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                >
                    +
                </button>
                <button
                    onClick={() => dispatch(incrementByAmount(5))}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                    +5
                </button>
            </div>
        </div>
    )
}
