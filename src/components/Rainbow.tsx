interface RainbowProps { }

const Rainbow: React.FC<RainbowProps> = () => {
  return (
    <div className="mx-auto max-w-4xl relative">
      <div
        className="rainbow-cover max-w-4xl mx-auto"
      >
        <div
          className="rainbow-content gap-15 pointer-events-none flex -rotate-45 justify-center -mb-10 -mt-28"
        >
          <div className="h-48 w-8 bg-pink-500"></div>
          <div className="h-56 w-8 bg-red-500"></div>
          <div className="h-64 w-8 bg-yellow-500"></div>
          <div className="h-72 w-8 bg-green-500"></div>
          <div className="h-80 w-8 bg-blue-500"></div>
        </div>
      </div>
    </div>
  )
}

export default Rainbow
