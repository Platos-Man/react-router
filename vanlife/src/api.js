const getVans = async () => {
  const res = await fetch("/api/vans");
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  console.log(res);
  const data = await res.text();
  console.log(data);
  return data.vans;
};

export default getVans;
