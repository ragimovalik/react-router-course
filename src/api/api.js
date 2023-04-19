const BASE_URL = "http://localhost:8000";

export async function getVans(id) {
  const url = id ? `${BASE_URL}/api/vans/${id}` : `${BASE_URL}/api/vans`;
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
  const url = id
    ? `${BASE_URL}/api/host/vans/${id}`
    : `${BASE_URL}/api/host/vans`;
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

export async function loginUser(creds) {
  if (!creds) {
    throw { message: "No credentials" };
  }

  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    body: JSON.stringify(creds)
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    };
  }

  return data;
}
