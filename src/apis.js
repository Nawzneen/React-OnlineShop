export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans";
  const res = await fetch(url);

  if (!res.ok) {
    console.log("res is", res);

    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();

  // if (!data || !data.vans) {
  //   throw {
  //     message: "Failed to fetch vans",
  //     statusText: res.statusText,
  //     status: res.status,
  //     originalRes: res,
  //   };
  // }

  return data.vans;
}
export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}
export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
