export const Quote = ({ children }) => {
  return (
    <blockquote className="my-14">
      <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
        <p>{children}</p>
      </div>
    </blockquote>
  );
};
export default Quote;
