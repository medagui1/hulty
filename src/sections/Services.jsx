import ServiceCard from "../components/ServiceCard"
import {services} from '../constants/navLinks'

const Services = () => {
  return (
    <div className="bg-primary p-20 mt-8 max-sm:p-5 rounded-[40px] dark:bg-secondary">
      <div>
        <h1 className="text-7xl font-bold max-sm:text-5xl max-sm:text-center mb-10 max-xl:mr-20 max-sm:mt-8 ">Services</h1>
      </div>
      <div className="gap-8 justify-between flex max-xl:justify-center flex-wrap">
      {services.map(service => (
        <ServiceCard key={service.order} order={service.order} service={service.service} content={service.content}/>
      ))}
      </div>
    </div>
  )
}

export default Services