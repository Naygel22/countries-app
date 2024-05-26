export const getAllCountries = async () => {
  const response = await fetch("data.json")
  if (!response.ok) {
    return [];
  }
  const data = await response.json()
  return data;
}
