const BASE_URL = "http://localhost:8000/api/";

export async function getVans(id) {
  const url = id ? `${BASE_URL}vans/${id}` : `${BASE_URL}vans`;
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    };
  }

  const data = await res.json();
  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `${BASE_URL}host/vans/${id}` : `${BASE_URL}host/vans`;
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "Failed to fetch hosts vans",
      statusText: res.statusText,
      status: res.status
    };
  }

  const data = await res.json();
  return data.vans;
}
