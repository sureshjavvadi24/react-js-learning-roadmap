const Contact = () => {
  return (
    <div>
      <h1 className="m-5 p-2 font-bold text-2xl">Contact us</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className=" border border-black m-2 p-2"
        />
        <input
          type="text"
          placeholder="Message"
          className=" border border-black m-2 p-2"
        />
        <button className=" border border-black m-2 p-2 bg-gray-300 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
