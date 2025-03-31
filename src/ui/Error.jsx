function Error({ message = "Something went wrong!" }) {
  return (
    <div className="py-12 px-4 font-urbanist text-red-800 ring-2 ring-red-800 rounded-lg w-full text-center">
      {message}❌
    </div>
  );
}

export default Error;
