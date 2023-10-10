import React from 'react'

const ServiceCard = ({order, service, content}) => {
  return (
    <div className={`flex flex-col flex-1 p-8 rounded-2xl w-[330px] min-w-[300px] ${order === '01' ? `bg-secondary text-white` : `bg-white`}`}>
        <h2 className='self-end self-right text-5xl max-sm:text-3xl'>{order}</h2>
        <h1 className='font-normal text-5xl  mt-10 max-sm:mt-6 max-sm:text-4xl'>{service}</h1>
        <p className='mt-10 max-sm:mt-6'>{content}</p>
    </div>
  )
}

export default ServiceCard