import { useState } from "react";

const Contact = () => {
  const [tx, settx] = useState();
  return (
    <div>
      <h1 className="text-3xl font-bold">Contact us</h1>
      <div>
        <input
          type="text"
          placeholder="name"
          value={tx}
          className="p-2 m-4  border-4 border-solid border-blue-500 border-x-yellow-400 "
          onChange={(e) => {
            settx(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="your review"
          value={tx}
          className="  m-4 p-2 border-4 border-solid border-blue-500  border-x-yellow-400 "
          onChange={(e) => {
            settx(e.target.value);
          }}
        />
       
      </div>
      <button className="p-2  rounded-lg m-4 border-4 border-solid border-blue-500 border-x-yellow-400 ">
          Submit
        </button>
    </div>
  );
};
export default Contact;
