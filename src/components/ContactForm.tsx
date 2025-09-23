'use client'
import { submitContactForm } from '@/lib/actions/contact'

export default function () {
  return (
    <div>
        <form action={submitContactForm}>
            <div className="py-24 text-gray-600">
                <div className="mx-auto flex flex-col bg-white shadow-md p-8 md:w-1/2">
                    <h2 className="text-lg mb-2">お問い合わせ</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-sm">名前</label>
                        <input type="text" id="name" name="name" className="
                        w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 outline-none py-1 px-3 leading8"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm">名前</label>
                        <input type="text" id="email" name="email" className="
                        w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 outline-none py-1 px-3 leading8"/>
                    </div>
                    <button className="text-white bg-indigo-500 py-2 px-5 hover:bg-indigo-600 rounded text-lg">送信</button>
                </div>
            </div>
        </form>
    </div>
  )
}
