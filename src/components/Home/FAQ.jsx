import FAQQue from "./FAQQue";

const FAQ = () => {
  const questionAnswers = [
    {
      question: "What are the benefits of using our AI solutions?",
      answer:
        "Our AI solutions are tailored for businesses across various industries, including e-commerce, healthcare, finance, marketing, and logistics. Whether you're a small startup or a large enterprise, we design custom solutions to meet your unique needs and help you achieve measurable results.",
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer:
        "Our AI solutions are tailored for businesses across various industries, including e-commerce, healthcare, finance, marketing, and logistics. Whether you're a small startup or a large enterprise, we design custom solutions to meet your unique needs and help you achieve measurable results.",
    },
    {
      question:
        "Do you provide ongoing support after implementing AI solutions?",
      answer:
        "Our AI solutions are tailored for businesses across various industries, including e-commerce, healthcare, finance, marketing, and logistics. Whether you're a small startup or a large enterprise, we design custom solutions to meet your unique needs and help you achieve measurable results.",
    },
    {
      question: "Can your AI solutions be integrated with existing systems?",
      answer:
        "Our AI solutions are tailored for businesses across various industries, including e-commerce, healthcare, finance, marketing, and logistics. Whether you're a small startup or a large enterprise, we design custom solutions to meet your unique needs and help you achieve measurable results.",
    },
    {
      question: "How do you ensure the security and privacy of my data?",
      answer:
        "Our AI solutions are tailored for businesses across various industries, including e-commerce, healthcare, finance, marketing, and logistics. Whether you're a small startup or a large enterprise, we design custom solutions to meet your unique needs and help you achieve measurable results.",
    },
  ];
  return (
    <div>
      <div className="wrapper space-y-10">
        <div className="text-center space-y-3">
          <p className="heading-top text-primary">FAQ</p>
          <h3 className="heading-3 text-foreground">
            Frequently Asked Questions
          </h3>
          <p className="subtitle-text-2 text-secondary-foreground">
            Find answers to common questions about our services, solutions, and
            how we can help your business thrive
          </p>
        </div>
        <div className="px-11 py-5 rounded-[32px] border border-foreground">
          {questionAnswers.map((que, index) => (
            <div key={index}>
              <FAQQue question={que.question} answer={que.answer} />
              {index == questionAnswers.length - 1 ? null : (
                <div className="h-[1px] bg-[#535463] w-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQ;
