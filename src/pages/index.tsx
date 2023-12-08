import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { api } from "~/utils/api";
import Head from 'next/head'

export default function Home() {
  //define constants


  const [model, setModel] = useState("");
  const [quantity, setQuantity] = useState("");
  const [licenseLevel, setLicenseLevel] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  const createBatchMutation = api.fcl.createBatch.useMutation();


  //define handlers


  const handleCreateBatch = async () => {
    try {

      // Validate submitted data
      if (!model || !quantity || !licenseLevel || !date) {
        setErrorMessages(["Check the form for the required fields"]);
        return;
      }

      // Validate if number
      if (isNaN(quantity) || quantity <= 0) {
        setErrorMessages(["Quantity must be a positive number"]);
        return;
      }

      await createBatchMutation.mutateAsync({
        model: model,
        quantity: quantity,
        licenseLevel: licenseLevel,
        date: date,
        comment: comment,
      });
      setModel("");
      setQuantity("");
      setLicenseLevel("");
      setDate("");
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  // Clear error messages on input change
  useEffect(() => {
    setErrorMessages([]);
  }, [model, quantity, licenseLevel, date]);


  return (


    <div>
      <Head>
        <title>FCL Booking Software</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <img id="logo" src="/fcl-software.png" alt="Logo" />
      <div className="flex items-center justify-center">



        <div className="p-8 rounded-md shadow-md w-1/3 border-4 brown">
          <h1 className="text-2xl font-bold mb-6 text-left text-white">Batch Form</h1>

          <div className="mb-4">

            <select
              id="model"
              name="model"
              placeholder="Model"
              className="mt-1 p-2 w-full border rounded-md"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option value="">Select Model</option>
              <option value="1">Model 1</option>
              <option value="2">Model 2</option>
              <option value="3">Model 3</option>
            </select>
          </div>

          <div className="mb-4">

            <input
              type="date"
              id="date"
              name="date"
              className="mt-1 p-2 w-full border rounded-md"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="mb-4">

            <input
              type="number"
              placeholder="Quantity"
              className="mt-1 p-2 w-full border rounded-md"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="mb-4">

            <select
              id="licenseLevel"
              name="licenseLevel"
              placeholder="License Level"
              className="mt-1 p-2 w-full border rounded-md"
              value={licenseLevel}
              onChange={(e) => setLicenseLevel(e.target.value)}
            >
              <option value="">License Level</option>

              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">

            <textarea
              id="comment"
              name="comment"
              rows={3}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Comment (not required)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button class="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded" onClick={handleCreateBatch}>
              Submit
            </button>
          </div>

          {errorMessages.length > 0 && (
            <div class="... flex items-center justify-center text-red-700 mt-2">
              {errorMessages.map((message, index) => (
                <p key={index}>{message}</p>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>

  );
}
