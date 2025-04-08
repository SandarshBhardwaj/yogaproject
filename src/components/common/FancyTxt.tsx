export default function FancyTxt({ children }: { children: React.ReactNode }) {
    return (
      <span className="border-b cursor-pointer border-b-[#18CBE4] text-[#18CBE4] transition-all duration-500 ease-in-out hover:shadow-2xl hover:text-teal-800 hover:scale-110">
        {children}
      </span>
    )
  }
  