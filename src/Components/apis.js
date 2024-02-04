// export async function getVans() {
//   const res = await fetch("/api/vans");
//   if (!res.ok) {
//     console.log("res ius", res);
//     //   throw {
//     //     message: "Failed to fetch vans",
//     //     statusText: res.statusText,
//     //     status: res.status,
//     //     originalError: res,
//     //   };
//     const error = new Error("Failed to fetch vans");
//     error.statusText = res.statusText;
//     error.status = res.status;

//     throw error;
//   }
//   const data = await res.json();
//   return data.vans;
// }
export async function getVans() {
  const res = await fetch("/api/vans");

  if (!res.ok) {
    console.log("res is", res);

    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();

  // if (data && data.error) {
  //   // If the server response contains an error field, throw an error with the server's error message
  //   const serverError = new Error(`Server Error: ${data.error}`);
  //   serverError.responseData = data; // Attach the actual response for debugging
  //   throw serverError;
  // }

  if (!data || !data.vans) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
      originalRes: res,
    };
  }

  return data.vans;
}
