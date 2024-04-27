interface GreetingProps { }

const Greeting: React.FC<GreetingProps> = () => {
  const greetingEnglish = ['Hi', 'Hello', 'Howdy', 'Hey there']
  const greetingChinese = ['你好', '嗨', '哈喽']
  const messages = [...greetingEnglish, ...greetingChinese]
  const greeting = messages[Math.floor(Math.random() * messages.length)]

  return (
    <div>
      <h3>
        <span
          className="inline-flex items-center px-4 py-1 font-bold rounded-full bg-indigo-100 text-indigo-800 transform -rotate-3"
        >
          {greeting} !
        </span>
        <span> I'm Simon! 👋</span>
      </h3>
    </div>
  )
}

export default Greeting
