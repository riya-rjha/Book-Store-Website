import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'

const BookModal = ({ onClose, item }) => {
    return (
        <div
            className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full  bg-white  h-fit rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className='w-fit text-2xl text-purple-900 font-bold'>{item.publishYear}</h2>
                <h4 className='mt-5 underline'>{item._id}</h4>
                <div className="flex items-center gap-3 my-8">
                    <PiBookOpenTextLight className='text-red-500 text-3xl' />
                    <h2>{item.title}</h2>
                </div>
                <div className="flex items-center gap-3 mb-14">
                    <BiUserCircle className='text-yellow-300 text-3xl' />
                    <h2>{item.author}</h2>
                </div>
                <p className="mt-4">More details you must know : </p>
                <p className="my-2">
                    Books are invaluable treasures that transcend time and space, serving as portals to new worlds, ideas, and perspectives. They embody the collective wisdom of humanity, offering insights, knowledge, and emotional experiences. Books stimulate imagination, foster empathy, and ignite intellectual curiosity. In a rapidly changing world, they provide a stable foundation for learning, personal growth, and cultural understanding. Whether in print or digital form, books remain indispensable tools for education, enlightenment, and the enrichment of the human spirit.
                </p>
            </div>

        </div>
    )
}

export default BookModal