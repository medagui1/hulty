const Button = ({label}) => {
  return (
    <button className="bg-secondary px-6 py-3 rounded-xl dark:bg-white ">
        <p className="text-white text-[12px] font-bold dark:text-primary">{label}</p>
    </button>
  )
}

export default Button